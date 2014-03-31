define([ 'backbone', 'marionette', 'apps/servidores/form/collection/estadosAFP', 'hbs! apps/servidores/form/templates/estadoAFP' ],
    function (Backbone, Marionette, EstadosAfp, estadosafpTemplate) {

        var EstadosAfpView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: estadosafpTemplate,

            initialize: function () {

                //initialize collection
                this.collection = new EstadosAfp();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

            },

            findByRpe: function (reg_pen, callback) {

                // Render the view when the collection is retreived from the server
                this.collection.on("sync", this.render, this);

                // Request unpaginated URL
                this.collection.fetch({ data: $.param({"regPen": reg_pen}) }).done(callback);
            }

        });

        return EstadosAfpView;
    }
);