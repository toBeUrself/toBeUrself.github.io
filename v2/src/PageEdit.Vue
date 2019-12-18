<template>
    <div class="page-edit">
        <button @click="toggleEdit">{{btnLabel}}</button>
    </div>
</template>

<script>
    import { EditableState } from './Constants'

    const canEditLabel = '进入编辑状态'
    const outEditLabel = '退出编辑状态'
    export default {
        name: 'PageEdit',
        data: () => {
            return {
                btnLabel: canEditLabel,
                editableState: EditableState,
            }
        },
        methods: {
            toggleEdit: function () {
                if (this.editableState.isEditable) {
                    this.btnLabel = canEditLabel
                    this.editableState.isEditable= false
                } else {
                    this.btnLabel = outEditLabel
                    this.editableState.isEditable = true
                }
            }
        }
    }
</script>

<style>
    .page-edit {
        height: 50px;
        width: 100%;
    }
</style>