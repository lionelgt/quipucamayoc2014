define([ 'backbone', 'marionette', 'lib/bootstrap-datepicker', 'apps/planillas/list/collection/unidades', 'hbs!apps/contratos/adendas/templates/unidades' ],
    function (Backbone, Marionette, datepicker, Unidades, unidadesTemplate) {

        var UnidadesView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: unidadesTemplate,

            //unidad seleccionada
            unidad_select: null,

            //unidad temporal
            unidad_temp: null,

            events: {
                "click .tree li": "fun_sel_unidad"
            },

            initialize: function () {

                // Initialize the collection
                this.collection = new Unidades();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} })


            },

            fun_sel_unidad: function (ev) {

                var clickedElement = $(ev.currentTarget);

                var children = clickedElement.find('> ul > li');

                if (children.is(":visible"))
                    children.hide('fast');
                else
                    children.show('fast');

                ev.stopPropagation();

                this.unidad_temp = clickedElement.find('a').first();

                var unidad_reset = function () {
                    $(".tree").find('a').css({
                        'background': '',
                        'color': '',
                        'border': ''
                    });
                };

                var self = this;

                var unidad_pint = function () {
                    self.unidad_temp.css({
                        'background': '#c8e4f8',
                        'color': '#000',
                        'border': '1px solid #94a0b4'
                    });
                };

                var callbacks = $.Callbacks();

                callbacks.add(unidad_reset);
                callbacks.add(unidad_pint);

                callbacks.fire();

            },

            fun_select_unidad: function (callback) {

                this.unidad_select = this.unidad_temp;

                callback();

                return false;
            }

        });

        return UnidadesView;
    }
);