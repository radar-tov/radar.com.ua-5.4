@inject('usersProvider', 'App\ViewDataProviders\UsersDataProvider')

<div class="col-xs-12">
    <div class="col-xs-12">
         <div class="form-group">
    		{!! Form::label('title', "Название группы") !!}
    		{!! Form::text('title', $value = null, ['class' => 'form-control']) !!}
    	</div>
    </div>

    <div class="col-xs-12">
         <div class="form-group">
    		{!! Form::label('users', 'Выберите пользователей для этой группы') !!}
    		{!! Form::select('users', $usersProvider->getCustomersList()->all(),
                $selected = isset($group->id) ? $usersProvider->getAttachedCustomersList($group->id) : null,
    		    [
    		    'class' => 'form-control chosen-select ', 'multiple', 'name' => 'customers[]',
                'form-field-select-4', 'data-placeholder' => 'Группы покупателей'
                ]) !!}
    	</div>
    </div>
</div>

    <link rel="stylesheet" href="{!! asset('admin/assets/css/jquery-ui.custom.min.css') !!}" />
    <link rel="stylesheet" href="{!! asset('admin/assets/css/chosen.css') !!}" />

@section('bottom-scripts')

    <script src="/admin/assets/js/chosen.jquery.min.js"></script>

    <script>
            $('.chosen-select').chosen({allow_single_deselect:true});
            //resize the chosen on window resize

            $(window)
                    .off('resize.chosen')
                    .on('resize.chosen', function() {
                        $('.chosen-select').each(function() {
                            var $this = $(this);
                            $this.next().css({'width': $this.parent().width()});
                        })
                    }).trigger('resize.chosen');
            //resize chosen on sidebar collapse/expand
            $(document).on('settings.ace.chosen', function(e, event_name, event_val) {
                if(event_name != 'sidebar_collapsed') return;
                $('.chosen-select').each(function() {
                    var $this = $(this);
                    $this.next().css({'width': $this.parent().width()});
                })
            });


            $('#chosen-multiple-style .btn').on('click', function(e){
                var target = $(this).find('input[type=radio]');
                var which = parseInt(target.val());
                if(which == 2) $('#form-field-select-4').addClass('tag-input-style');
                else $('#form-field-select-4').removeClass('tag-input-style');
            });

    </script>


@endsection