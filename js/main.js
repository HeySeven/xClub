$(function () {

    var $sidebarWrapper = $('.sidebar-wrapper');

    $(document).on('click', '[data-toggle="toggle-sidebar"]', function () {
        $sidebarWrapper.toggleClass('closed');
    });

    //表单验证配置
    //github地址  https://github.com/zhangxinxu/html5Validate
    $.testRemind.css = {
        borderColor: "#000",
        backgroundColor: "#000",
        color: "#fff"
    };

    if (!('placeholder' in document.createElement('input'))) {
        $('input[placeholder],textarea[placeholder]').each(function () {
            var that = $(this),
                text = that.attr('placeholder');
            if (that.val() === "") {
                that.val(text).addClass('placeholder');
            }
            that.focus(function () {
                    if (that.val() === text) {
                        that.val("").removeClass('placeholder');
                    }
                })
                .blur(function () {
                    if (that.val() === "") {
                        that.val(text).addClass('placeholder');
                    }
                })
                .closest('form').submit(function () {
                if (that.val() === text) {
                    that.val('');
                }
            });
        });
    }

    //标签弹窗
    $('[data-toggle="popover-tag"]').webuiPopover({
        placement: 'auto',
        delay: {
            show: null,
            hide: 100
        },
        trigger: 'hover',
        cache: true
    });


    //用户信息弹窗
    var userData = {
        'name': 'Ron Heard',
        'position': '阿里巴巴 产品经理',
        'acceptCount': 1208,
        'fansCount': 122,
        'isFans': false
    }
    var htmlString = '<div class="user-pop">' +
        '        <div class="user-img">' +
        '            <img src="images/person.png" alt="">' +
        '        </div>' +
        '        <dl>' +
        '            <dt>' + userData.name + '</dt>' +
        '            <dd>' + userData.position + '</dd>' +
        '        </dl>' +
        '        <ul>' +
        '            <li>' +
        '                <span>认可</span>' +
        '                <strong>' + userData.acceptCount + '</strong>' +
        '            </li>' +
        '            <li class="last">' +
        '                <span>粉丝</span>' +
        '                <strong>' + userData.fansCount + '</strong>' +
        '            </li>' +
        '        </ul>' +
        '        <div class="gz-btn">' +
        '            <button data-toggle="fans" class="btn ' + (userData.isFans ? 'outline-btn' : 'btn-success') + ' btn-block" type="button">' + (userData.isFans ? '取消关注' : '关注') + ' </button>' +
        '        </div>' +
        '    </div>';

    $('[data-toggle="user-info"]').on('user-info',function(){
        $('[data-toggle="user-info"]').webuiPopover({
            placement: 'auto',
            type: 'html',
            style: 'inverse',
            content: htmlString,
            delay: {
                show: null,
                hide: 100
            },
            trigger: 'hover',
            cache: true
        });
    });

    $('[data-toggle="user-info"]').trigger('user-info');

    //关注用户
    $(document).on('click', '[data-toggle="fans"]', function () {
        var $this = $(this);
        if ($this.hasClass('outline-btn')) {
            $this.removeClass('outline-btn').addClass('btn-success').text('关注');
        } else {
            $this.removeClass('btn-success').addClass('outline-btn').text('取消关注');
        }
    });
    $(document).on('click', '[data-toggle="s-fans"]', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').text('关注');
        } else {
            $this.addClass('active').text('取消关注');
        }
    });

    //toggle-favo
    $('[data-toggle="toggle-favo"]').click(function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').html('<span class="iconfont icon-favo"></span> 收藏');
        } else {
            $this.addClass('active').html('<span class="iconfont icon-favo"></span> 取消收藏');
        }
    });
    //toggle-active
    $('[data-toggle="toggle-active"]').click(function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').html('<span class="iconfont icon-focus"></span> 关注该问题');
        } else {
            $this.addClass('active').html('<span class="iconfont icon-focus"></span> 已关注');
        }
    });
    //toggle-invite
    $('[data-toggle="toggle-invite"]').click(function () {
        var $this = $(this);
        $this.closest('.list-inline').next('.invite-box').stop(true, true).fadeToggle();
    });
    //toggle-comment
    $('[data-toggle="comment"]').click(function () {
        var $this = $(this);
        $this.closest('.pmcaff-panel-footer').next('.comment').stop(true, true).fadeToggle();
    });
    //invite
    $('[data-toggle="invite"]').click(function () {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active').text('已邀请');
        }
    });

    //
    $('[data-toggle="control-btn"]').webuiPopover({
        placement: 'auto-bottom',
        delay: {
            show: null,
            hide: 100
        },
        trigger: 'hover',
        cache: true
    });

    //toggle-agree
    $('[data-toggle="agree"]').click(function () {
        var $this = $(this);
        var count = parseInt($this.find('span').text());
        if ($this.hasClass('active')) {
            //$this.removeClass('active').find('span').text(count - 1);
        } else {
            $this.addClass('active').find('span').text(count + 1);
        }
    });

    $('.opear.btn-rk').click(function () {
        var $this = $(this);
        var count = parseInt($this.find('span').text());
        if ($this.hasClass('active')) {
            //$this.removeClass('active').find('span').text(count - 1);
        } else {
            $this.addClass('active').find('span').text(count + 1);
        }
    })
    //toggle-active
    $('.opear.btn-add').click(function () {
        var $this = $(this);
        var count = parseInt($this.find('span').text());
        if ($this.hasClass('active')) {
            $this.removeClass('active').find('span').text(count - 1);
        } else {
            $this.addClass('active').find('span').text(count + 1);
        }
    });

    //水 认可
    $('.pull-right .btn-add').not('[disabled]').click(function () {
        var $this = $(this);
        var count = parseInt($this.find('span').text());
        if ((!$this.hasClass('active')) && ($this.attr('disabled') != 'disabled')) {
            $this.addClass('active').find('span').text(count + 1)
                .end().siblings('.btn-add').attr('disabled', 'disabled');
        }
    });


    $('[data-toggle="confirmation"],[data-action="remove"]').confirmation({
        title: '确认删除？',
        popout: true,
        btnOkClass: 'btn-success',
        btnOkLabel: '确定',
        btnCancelLabel: '取消',
        onConfirm: function () {
            alert('点击了确定');
        },
        onCancel: function () {
            alert('点击了取消');
        }
    });

    //toggle-active
    $('.user-panel-z').click(function () {
        var $this = $(this).find('.avatar');
        $this.toggleClass('checked');
    });


    $('[data-toggle="viewer"]').viewer({
        'toolbar': false
    });
    ;

    if ($('[data-toggle="textarea-simditor"]').length > 0) {
        //富文本回复
        var editor = new Simditor({
            textarea: $('[data-toggle="textarea-simditor"]'),
            toolbar: ['bold', 'italic', 'underline', 'color', '|', 'ol', 'ul', '|', 'image', 'markdown'],
            autosave: 'editor-content',
            pasteImage: true,
            upload: {
                url: '/upload'
            },
            mention: {
                items: [
                    {
                        id: 1,
                        name: "春雨",
                        pinyin: "chunyu",
                        abbr: "cy",
                        url: "http://www.example.com"
                    },
                    {
                        id: 2,
                        name: "夏荷",
                        pinyin: "xiahe",
                        abbr: "xh",
                    },
                    {
                        id: 3,
                        name: "秋叶",
                        pinyin: "qiuye",
                        abbr: "qy",
                    },
                    {
                        id: 4,
                        name: "冬雪",
                        pinyin: "dongxue",
                        abbr: "dx",
                    },
                ],
            }
            //optional options
        });
    }
    var $answerInput = $('.answer-input');
    var $answerEditWrap = $('.answer-edit-wrap')
    $answerInput.click(function () {
        showEdit()
    });
    $('[data-action="reply"]').click(function () {
        showEdit()
    });
    $('.answer-input-wrap,[data-action="reply"]').click(function (event) {
        event.stopPropagation();
    });

    $('.answer-submit-control .btn').click(function () {
        hideEdit();
    });
    $(document).click(function () {
        hideEdit();
    });
    function showEdit() {
        $answerInput.hide();
        $answerEditWrap.fadeIn('slow');
    }

    function hideEdit() {
        $answerEditWrap.hide();
        $answerInput.fadeIn('slow');
    }

    $('[data-toggle="is-anonymous"]').change(function () {
        $(this).parent('label').toggleClass("checked");
    });


});