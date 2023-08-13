<script lang="ts">
	import { Button, Card, Pagination, Table, Modal, Portal } from '../lib';
	import { check, edit, plus,save, trash } from '../lib/icons';
	import { Input } from 'stwui';
	//import { createForm } from "svelte-forms-lib";
	import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";
	//import { passwordMatch, containNumbers } from "./customValidators";
    //import * as yup from "yup";

	let orderBy: string;
	let order: 'asc' | 'desc';
	let rowData: any = {};

	let columns: any = [
		{
			column: 'id',
			label: 'ID',
			placement: 'left',
			class: 'w-[40%] md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'usuario',
			label: 'Usuario',
			placement: 'left',
			class: 'w-[40%] md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'contraseña',
			label: 'Contraseña',
			placement: 'left',
			class: 'hidden md:table-cell w-0 md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'estado',
			label: 'Estado',
			placement: 'left',
			class: 'hidden lg:table-cell lg:w-[20%]'
		},
		{
			column: 'opciones',
			label: 'Opciones',
			placement: 'right',
			class: 'w-[20%] md:w-[10%] lg:w-[20%]'
		}
	];

	const form = useForm({
		name: { validators: [required] },
		password: {validators: [required, minLength(5)]},
		id: {validators:[]},
		estado: {validators:[]}
	});

	

	function onSubmit() {
		if(!rowData['id']){
			const dataElement = {
				id: dataTable.length + 1,
				estado: true,
				usuario: $form.name.value,
				contrasenia: $form.password.value,
			}
			dataTable = [...dataTable, dataElement];
		}
		else{
			const dataElement = {
				id: rowData.id,
				estado: rowData.estado,
				usuario: $form.name.value,
				contrasenia: $form.password.value,
			}
			console.log('edit',dataTable)
			dataTable = dataTable.filter((e)=> e.id != dataElement.id);
			dataTable = [...dataTable, dataElement];
			dataTable.sort((a, b) => a.id - b.id);
			dataTable = [...dataTable];
			rowData = {};
		}
		closeModal()
	}

	interface Item  {
		id: number;
		usuario: string;
		contrasenia: string;
		estado: boolean;
	}

	let dataTable = [
		{
			id: 1,
			usuario: 'Ricardo',
			contrasenia: 'hola',
			estado: true
		}
	]

	let open = false;

	function openModal() {
		$form.name.initial = "";
		$form.password.initial = "";
		$form.reset();
		console.log('$form',$form)
		open = true;
	}

	function closeModal() {
		rowData = {};
		open = false;
	}

	function deleteItem(item: any){
		dataTable = dataTable.filter((e)=> e.id != item.id);
		item.estado = false;
		dataTable = [...dataTable,item]
		dataTable.sort((a, b) => a.id - b.id);
		dataTable = [...dataTable];
	}

	function activeItem(item: any){
		dataTable = dataTable.filter((e)=> e.id != item.id);
		item.estado = true;
		dataTable = [...dataTable,item]
		dataTable.sort((a, b) => a.id - b.id);
		dataTable = [...dataTable];
	}

	function openModalEdit(item: any) {
		//$form.reset();
		$form.name.initial = item.usuario;
		$form.password.initial =item.contrasenia;
		$form.name.change(item.usuario);
		$form.name.change(item.contrasenia);
		console.log('$form',$form)
		rowData = item;
		open = true;
	}

</script>

<div class="table-container">
	<Card.Header slot="header" class="font-bold text-lg flex justify-between items-center py-3">
		Listado de Usuarios
		<Button slot="extra" type="primary" on:click={openModal}>
			<Button.Leading slot="leading" data={plus} />
			Nuevo Usuario
		</Button>
	</Card.Header>
	<Card.Content slot="content" class="p-0 sm:p-0" style="height: calc(100% - 64px);">
		<Table class="h-full"  {columns}>
			<Table.Header slot="header" {order} {orderBy} />
			<Table.Body slot="body" >
				{#each dataTable as item}
					<Table.Body.Row id={String(item.id)} >
						<Table.Body.Row.Cell column={0}>{item.id}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={1}>{item.usuario}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={2}>{item.contrasenia}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={3}>{item.estado?'Activo':'Inactivo'}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={4}>
							<Button shape="circle" type="ghost" on:click={()=>{openModalEdit(item)}}>
								<Button.Icon data={edit} slot="icon" />
							</Button>
							{#if item.estado}
							<Button shape="circle" type="ghost" on:click={()=>{deleteItem(item)}}>
								<Button.Icon data={trash} slot="icon" />
							</Button>
							{:else}
							<Button shape="circle" type="ghost" on:click={()=>{activeItem(item)}}>
								<Button.Icon data={check} slot="icon" />
							</Button>
							{/if}
						</Table.Body.Row.Cell>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card.Content>
</div>
<Portal>
	{#if open}
		<Modal handleClose={closeModal} >
			<Modal.Content slot="content">
				<Modal.Content.Header slot="header">Nuevo Usuario</Modal.Content.Header>
				<Modal.Content.Body slot="body">
					<form use:form>
						<Input  name="name" placeholder="Usuario">
							<Input.Label slot="label">Usuario</Input.Label>
						</Input>
						<HintGroup for="name">
							<Hint on="required" class="lugar">El nombre de usuario es requerido</Hint>
						</HintGroup>
						<br>
						<Input type="password" placeholder="Contraseña" name="password" 
						showPasswordToggle>
							<Input.Label slot="label">Contraseña</Input.Label>
						</Input>
						<HintGroup for="password">
							<Hint on="required" class="lugar">La contraseña es requerida</Hint>
							<Hint on="minLength" class="lugar" hideWhenRequired>El minimo de caracteres es cinco</Hint>
						</HintGroup>
						<br>
						<br>
						<div>
							<Button type="danger" on:click={closeModal}>
								<Button.Leading data={trash} slot="leading" />
								Cancelar
							</Button>
							<Button type="primary" on:click={onSubmit} disabled={!$form.valid}>
								<!-- on:click={$form.id?dataFormEdit:dataForm} -->
								<Button.Leading slot="leading" data={save}/>
								Guardar
							</Button>
						</div>
					</form>
				</Modal.Content.Body>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>
<style>
	:global(.touched:invalid) {
		outline: 0.5px solid #f94242;
	}
	.table-container{
		width: 100%;
		height: 500px;
	}
	:global(.lugar){
		color: #f94242;
		font-size: x-small;
		position: absolute;
	}
</style>
