 <div class="row">
    <div class="col-xs-12">
        <div class="tabbable">
            <ul class="nav nav-tabs padding-18 tab-size-bigger" id="myTab">
                <li class="">
                    <a data-toggle="tab" href="#env">
                        <i class="blue ace-icon fa fa-cogs bigger-120"></i>
                        APP_ENV
                    </a>
                </li>
                <li class="active">
                    <a data-toggle="tab" href="#config">
                        <i class="blue ace-icon fa fa-cogs bigger-120"></i>
                        Клиентская часть
                    </a>
                </li>
            </ul>
            <div class="tab-content no-border padding-24">
                <div id="env" class="tab-pane fade">
                    <div class="col-xs-4">
                        <h3>Основные</h3>
                        <p>APP_ENV = {{ env('APP_ENV') }}</p>
                        <p>APP_DEBUG = {{ env('APP_DEBUG') }}</p>
                        <p>APP_LOG_LEVEL = {{ env('APP_LOG_LEVEL') }}</p>
                        <p>APP_URL = {{ env('APP_URL') }}</p>
                        <h3>База данных</h3>
                        <p>DB_HOST = {{ env('DB_HOST') }}</p>
                        <p>DB_DATABASE = {{ env('DB_DATABASE') }}</p>
                        <p>DB_USERNAME = {{ env('DB_USERNAME') }}</p>
                    </div>
                    <div class="col-xs-4">
                        <h3>Драйвера</h3>
                        <p>CACHE_DRIVER = {{ env('CACHE_DRIVER') }}</p>
                        <p>SESSION_DRIVER = {{ env('SESSION_DRIVER') }}</p>
                        <p>QUEUE_DRIVER = {{ env('QUEUE_DRIVER') }}</p>
                        <h3>Почта</h3>
                        <p>MAIL_DRIVER = {{ env('MAIL_DRIVER') }}</p>
                        <p>MAIL_HOST = {{ env('MAIL_HOST') }}</p>
                        <p>MAIL_PORT = {{ env('MAIL_PORT') }}</p>
                        <p>MAIL_USERNAME = {{ env('MAIL_USERNAME') }}</p>
                        <p>MAIL_ENCRYPTION = {{ env('MAIL_ENCRYPTION') }}</p>
                    </div>
                    <div class="col-xs-4">
                        <h3>Почта Google</h3>
                        <p>GMAIL_HOST = {{ env('GMAIL_HOST') }}</p>
                        <p>GMAIL_USERNAME = {{ env('GMAIL_USERNAME') }}</p>
                        <p>GMAIL_SECURE = {{ env('GMAIL_SECURE') }}</p>
                        <p>GMAIL_PORT = {{ env('GMAIL_PORT') }}</p>
                    </div>
                </div>
                <div id="config" class="tab-pane fade active in">
                    <div id="response"></div>
                    <form id="configdata">
                        {{--{{ dump($myConfigs) }}--}}
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        @foreach($myConfigs as $config)
                            @if($config->type = 'checkbox')
                                <div class="col-xs-1">
                                    <label>
                                        <input name="{{ $config->key }}" class="ace ace-switch ace-switch-4 btn-rotate"
                                               type="checkbox" {{ $config->value ? 'checked' : ''}}>
                                        <span class="lbl"></span>
                                    </label>
                                </div>
                                <div class="col-xs-2"><b style="font-size: 20px">{{ $config->name }}</b></div>
                            @endif
                        @endforeach
                        <div class="col-xs-12">
                            <hr>
                            <button type="submit" class="btn btn-success btn-sm">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $("#configdata").submit(function(){
        var data = $(this).serialize();
        $.ajax({
            type:'POST',
            url:"config/update",
            data:data,
            success: function (response) {
                $("#response").html(response);
                //$.fancybox.close();
            }
        });
        return false;
    });
</script>
