import data from './data.json' assert {type: 'json'};


$(document).ready(function () {
    $('#PersonTableContainer').jtable({
        title: 'TABLA DE EJEMPLO',
        paging: true,
        pageList: 'minimal',
        pageSize: 5,
        //addRecordButton: $('#cargar'),
        toolbar: {
            items: [
                {
                    icon: 'https://img.icons8.com/small/256/plus.png',
                    text: 'Add character',
                    click: () => {
                        alert('Add new character')
                    },
                    tooltip: 'Create and save a new character'
                }
            ]
        },
        actions: {
            listAction: (postData, jtParams) => {

                return {
                    Result: 'OK',
                    Records: data,
                    TotalRecordCount: data.length
                }

            },
            createAction: '/GettingStarted/CreatePerson',
            updateAction: '/GettingStarted/UpdatePerson',
            deleteAction: '/GettingStarted/DeletePerson'
        },
        fields: {
            id: {
                key: true,
                list: false
            },
            name: {
                title: 'Character Name',
            },
            image: {
                title: 'Image',
                display: ({record}) => {
                    return `<img src="${record.image}" style="width: 5em; height: 5em;" >`
                }
            },
            gender: {
                title: 'Gender'
            },
            status: {
                title: 'Status'
            }
        }
    });

    $('#PersonTableContainer').jtable('load');
});