$(document).ready(() => {
    $('.press').on('click', () => {
        const id = $(this).data('burgerid');

        const updatedBurger = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: updatedBurger
        }).then(() => {
            console.log('updated id ', id);
            location.reload();
        });
    });
});