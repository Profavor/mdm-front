<template>
    <div>
    <InputEntityRef
    entityId="areaId" :columnDefs="[
        { headerName: 'Area ID', field: 'areaId'  },
        { headerName: 'Area Name', valueGetter: params => { return $common.messageGetter(params.data.message)} },
        { headerName: 'Status', field: 'status' },
      ]" />
    </div>
</template>

<script>

export default {
    setup(){

    },
    data(){
        return {
            test: ''
        }
    },
    methods: {

    }
}
</script>