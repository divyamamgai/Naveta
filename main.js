var Objects = {},
    Variables = {
        CurrentMenu: 0,
        CurrentSubMenu: 0,
        IsEmailValid: false,
        UserData: {
            UserID: undefined,
            Name: undefined,
            Phone: undefined,
            UserType: undefined,
            BusID: undefined
        }
    },
    MenuID = ['#MainFrame', '#UserFrame', '#ConductorFrame'],
    SubMenuID = [[], ['#LoginFrame', '#RegisterFrame', '#PortalFrame', '#SearchFrame'], ['#ConductorLoginFrame', '#ConductorPortalFrame']],
    Functions = {
        IconButtonMouseEnter: function () {
            var This = $(this),
                Icon = This.find('.Icon');
            TweenMax.to(This, 0.5, {
                scale: 1.2,
                ease: Power4.easeOut
            });
            TweenMax.to(Icon, 0.5, {
                fill: '#A5D6A7',
                ease: Power4.easeOut
            });
        },
        IconButtonMouseLeave: function () {
            var This = $(this),
                Icon = This.find('.Icon');
            TweenMax.to(This, 0.5, {
                scale: 1,
                ease: Power4.easeOut,
                clearProps: 'all'
            });
            TweenMax.to(Icon, 0.5, {
                fill: '#81C784',
                ease: Power4.easeOut
            });
        },
        IconButtonClick: function () {
            Functions.HideMenuFrame(Variables.CurrentMenu);
            Functions.ShowMenuFrame($(this).attr('href'));
        },
        /**
         * @return {number}
         */
        GetMenuFrame: function (id) {
            return MenuID.indexOf(id);
        },
        HideMenuFrame: function (menuIndex) {
            var MenuFrameObject = $(MenuID[menuIndex]);
            TweenMax.fromTo(MenuFrameObject, 0.5, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Power4.easeOut,
                onComplete: function () {
                    MenuFrameObject.css('visibility', 'hidden');
                }
            });
        },
        ShowMenuFrame: function (id) {
            var MenuFrameObject = $(id);
            Variables.CurrentMenu = Functions.GetMenuFrame(id);
            MenuFrameObject.css('visibility', 'visible');
            TweenMax.fromTo(MenuFrameObject, 0.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power4.easeOut
            });
            Functions.SetSubMenuFrame(Variables.CurrentMenu, Variables.CurrentSubMenu);
        },
        SetMenuFrame: function (id) {
            $(id).css({
                visibility: 'visible',
                opacity: 1
            });
        },
        UnSetMenuFrame: function (id) {
            $(id).css({
                visibility: 'hidden',
                opacity: 0
            });
        },
        GetSubMenuFrame: function (subMenuID) {
            return SubMenuID[Variables.CurrentMenu].indexOf(subMenuID);
        },
        ShowSubMenuFrame: function (subMenuID) {
            var SubMenuObject = $(subMenuID);
            Variables.CurrentSubMenu = Functions.GetSubMenuFrame(subMenuID);
            SubMenuObject.css('visibility', 'visible');
            TweenMax.fromTo(SubMenuObject, 0.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power4.easeOut
            });
        },
        HideSubMenuFrame: function (subMenuIndex, callback) {
            var SubMenuObject = $(SubMenuID[Variables.CurrentMenu][subMenuIndex]);
            TweenMax.fromTo(SubMenuObject, 0.5, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Power4.easeOut,
                onComplete: function () {
                    SubMenuObject.css('visibility', 'hidden');
                    if (typeof callback === 'function') callback();
                }
            });
        },
        SetSubMenuFrame: function (menuIndex, subMenuIndex) {
            $(SubMenuID[menuIndex][subMenuIndex])
                .css({
                    visibility: 'visible',
                    opacity: 1
                })
        },
        UnSetSubMenu: function (menuIndex, subMenuIndex) {
            $(SubMenuID[menuIndex][subMenuIndex])
                .css({
                    visibility: 'hidden',
                    opacity: 0
                })
        },
        ButtonMouseEnter: function () {
            TweenMax.to(this, 0.5, {
                backgroundColor: '#607D8B',
                ease: Power4.easeOut
            });
        },
        ButtonMouseLeave: function () {
            TweenMax.to(this, 0.5, {
                backgroundColor: '#546E7A',
                ease: Power4.easeOut
            });
        },
        ButtonClickMouseDown: function () {
            TweenMax.to(this, 0.5, {
                backgroundColor: '#455A64',
                ease: Power4.easeOut
            });
        },
        ButtonClickMouseUp: function () {
            TweenMax.to(this, 0.5, {
                backgroundColor: '#607D8B',
                ease: Power4.easeOut
            });
        },
        ButtonClick: function () {
            var LinkValue = $(this).attr('href');
            if (LinkValue != '#') {
                Functions.HideSubMenuFrame(Variables.CurrentSubMenu);
                Functions.ShowSubMenuFrame(LinkValue);
            }
        },
        InputFocus: function () {
            var This = $(this),
                Label = $("label[for='" + This.attr('id') + "']");
            if (This.val().length == 0) {
                TweenMax.to(Label, 0.5, {
                    scale: 0.75,
                    transformOrigin: '0% 0%',
                    y: '-100%',
                    ease: Power4.easeOut
                });
                TweenMax.to(This, 0.5, {
                    borderColor: '#81C784'
                });
            }
        },
        InputBlur: function () {
            var This = $(this),
                Label = $("label[for='" + This.attr('id') + "']");
            if (This.val().length == 0) {
                TweenMax.to(Label, 0.5, {
                    scale: 1,
                    transformOrigin: '0% 0%',
                    y: '0%',
                    ease: Power4.easeOut
                });
                TweenMax.to(This, 0.5, {
                    borderColor: '#607D8B'
                });
            }
        },
        ValidateEmail: function (Element, Value) {
            if (!(/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(Value)) && (Value.length > 0)) {
                TweenMax.to(Element, 1, {
                    borderColor: '#F44336',
                    ease: Power4.easeOut
                });
                Variables.IsEmailValid = false;
            } else {
                TweenMax.to(Element, 1, {
                    borderColor: '#81C784',
                    ease: Power4.easeOut
                });
                Variables.IsEmailValid = true;
            }
        },
        ShowLogoutButton: function () {
            TweenMax.fromTo(Objects.LogoutButton, 0.5, {
                display: 'initial',
                opacity: 0
            }, {
                opacity: 1,
                ease: Power4.easeOut
            });
        },
        HideLogoutButton: function () {
            TweenMax.to(Objects.LogoutButton, 0.5, {
                opacity: 0,
                ease: Power4.easeOut,
                onComplete: function () {
                    Objects.LogoutButton.css('display', 'none');
                }
            });
        },
        ResetRegistrationForm: function () {
            Objects.RegisterEmailID.val('');
            Objects.RegisterEmailID.trigger('blur');
            Objects.RegisterName.val('');
            Objects.RegisterName.trigger('blur');
            Objects.RegisterPassword.val('');
            Objects.RegisterPassword.trigger('blur');
            Objects.RegisterPhone.val('');
            Objects.RegisterPhone.trigger('blur');
        },
        ResetLoginForm: function () {
            Objects.LoginEmailID.val('');
            Objects.LoginEmailID.trigger('blur');
            Objects.LoginPassword.val('');
            Objects.LoginPassword.trigger('blur');
        },
        DoLogin: function () {
            $.ajax({
                type: 'POST',
                url: 'login.php',
                data: {
                    UserID: Objects.LoginEmailID.val(),
                    Password: Objects.LoginPassword.val(),
                    Table: 'users'
                },
                success: function (data) {
                    if (data.status == 'success') {
                        Variables.UserData = data.userData;
                        Functions.SetUserPortal();
                        Functions.HideSubMenuFrame(0, Functions.ResetLoginForm);
                        Functions.ShowLogoutButton();
                        Functions.ShowSubMenuFrame('#PortalFrame');
                    } else if (data.status == 'wrong') {
                        alert('Wrong Credentials!');
                    } else if (data.status == 'already') {
                        alert('Already Logged In!');
                    } else {
                        alert('Error!');
                    }
                },
                error: function () {
                    alert('Error while trying to log in!');
                }
            });
        },
        DoRegister: function () {
            $.ajax({
                type: 'POST',
                url: 'register.php',
                data: {
                    Name: Objects.RegisterName.val(),
                    UserID: Objects.RegisterEmailID.val(),
                    Password: Objects.RegisterPassword.val(),
                    Phone: Objects.RegisterPhone.val()
                },
                success: function (data) {
                    if (data.status == 'success') {
                        alert('Registered! Login To Start Commuting!');
                        Functions.HideSubMenuFrame(1, Functions.ResetRegistrationForm);
                        Functions.ShowSubMenuFrame('#LoginFrame');
                        Objects.LoginEmailID.trigger('focus');
                        Objects.LoginEmailID.val(Objects.RegisterEmailID.val());
                        Objects.LoginPassword.val('');
                        Objects.LoginPassword.trigger('focus');
                    } else if (data.status == 'exists') {
                        alert('Already Exists!');
                    } else {
                        alert('Error!');
                    }
                },
                error: function () {
                    alert('Error while trying to register!');
                }
            });
        },
        DoLogOut: function () {
            $.ajax({
                type: 'POST',
                url: 'logout.php',
                success: function (data) {
                    if (data.status === 'success') {
                        Functions.HideLogoutButton();
                        Functions.HideMenuFrame('#UserFrame');
                        Functions.HideSubMenuFrame(1);
                        Functions.HideSubMenuFrame(2);
                        Functions.HideSubMenuFrame(3);
                        Functions.ShowMenuFrame('#MainFrame');
                        Variables.CurrentSubMenu = 0;
                        window['UserID'] = undefined;
                        Variables.UserData.UserID = undefined;
                        Variables.UserData.BusID = undefined;
                        Variables.UserData.Name = undefined;
                        Variables.UserData.Phone = undefined;
                        Variables.UserData.UserType = undefined;
                    }
                    else alert(data.status);
                },
                error: function () {
                    alert('Error while trying to register!');
                }
            });
        },
        SetUserPortal: function () {
            Objects.UserName.html(Variables.UserData.Name);
            Objects.UserEmailID.html(Variables.UserData.UserID);
            Objects.UserPhone.html(Variables.UserData.Phone);
        },
        SetConductorPortal: function () {
            Objects.ConductorName.html(Variables.UserData.Name);
            Objects.BusID.html('Bus ID : ' + Variables.UserData.BusID);
        },
        DoSearch: function () {
            Objects.SearchDetailFrom.html(Objects.SearchFrom.val());
            Objects.SearchDetailTo.html(Objects.SearchTo.val());
            Functions.HideSubMenuFrame(2);
            Functions.ShowSubMenuFrame('#SearchFrame');
            $.ajax({
                type: 'GET',
                data: {
                    SRC: Objects.SearchFrom.val(),
                    DSC: Objects.SearchTo.val()
                },
                url: 'searchBuses.php',
                success: function (data) {
                    data = $.parseJSON(data);
                    var i = 0,
                        l = data.length,
                        Bus,
                        Stops,
                        Percentage;
                    if (l > 0) {
                        for (; i < l; i++) {
                            Bus = data[i];
                            Stops = Bus.Stops.split('|');
                            Percentage = Bus.AvailableSeats / Bus.Capacity;
                            $('<div class="SearchResult"><span>' + Stops[0] + ' To ' + Stops[Stops.length - 1] +
                                '</span><span class="Type">' + Bus.Type + '</span><span class="Capacity">' + Bus.AvailableSeats +
                                ' / ' + Bus.Capacity + '</span></div>')
                                .appendTo(Objects.SearchResultContainer)
                                .css({
                                    'background-color': Percentage > 0.5 ? Percentage > 1 ? '#D32F2F' : '#F9A825' : '#43A047'
                                }).children().css({
                                'color': (Percentage > 0.5 ? Percentage > 1 ? '#FFCDD2' : '#FFF59D' : '#A5D6A7')
                            });
                        }
                    } else {
                        Objects.SearchResultContainer.append('<h4>No Search Results Found!</h4>');
                    }
                },
                error: function () {
                    alert('Error while trying to register!');
                }
            });
        },
        BackOperation: function () {
            switch (Variables.CurrentMenu) {
                case 0:
                    break;
                case 1:
                    if (Variables.UserData.UserID == undefined) {
                        Functions.HideSubMenuFrame(0);
                        Functions.HideSubMenuFrame(1);
                        Functions.HideMenuFrame(1);
                        Functions.ShowMenuFrame('#MainFrame');
                        Variables.CurrentMenu = 0;
                        Variables.CurrentSubMenu = 0;
                    } else if (Variables.CurrentSubMenu == 3) {
                        Functions.HideSubMenuFrame(3);
                        Functions.ShowSubMenuFrame('#PortalFrame');
                        Variables.CurrentMenu = 1;
                        Variables.CurrentSubMenu = 2;
                    }
                    break;
                case 2:
                    if (Variables.UserData.UserID == undefined) {
                        Functions.HideSubMenuFrame(0);
                        Functions.HideSubMenuFrame(1);
                        Functions.HideMenuFrame(2);
                        Functions.ShowMenuFrame('#MainFrame');
                        Variables.CurrentMenu = 0;
                        Variables.CurrentSubMenu = 0;
                    }
                    break;
            }
        },
        ResetConductorLoginForm: function () {
            Objects.ConductorID.val('');
            Objects.ConductorID.trigger('blur');
            Objects.ConductorPassword.val('');
            Objects.ConductorPassword.trigger('blur');
            Objects.ConductorBusID.val('');
            Objects.ConductorBusID.trigger('blur');
        },
        DoConductorLogin: function () {
            $.ajax({
                type: 'POST',
                url: 'login.php',
                data: {
                    UserID: Objects.ConductorID.val(),
                    Password: Objects.ConductorPassword.val(),
                    BusID: Objects.ConductorBusID.val(),
                    Table: 'employees'
                },
                success: function (data) {
                    if (data.status == 'success') {
                        Variables.UserData = data.userData;
                        Functions.SetConductorPortal();
                        Functions.HideSubMenuFrame(0, Functions.ResetConductorLoginForm);
                        Functions.ShowLogoutButton();
                        Functions.ShowSubMenuFrame('#ConductorPortalFrame');
                    } else if (data.status == 'wrong') {
                        alert('Wrong Credentials!');
                    } else if (data.status == 'already') {
                        alert('Already Logged In!');
                    } else {
                        alert('Error!');
                    }
                },
                error: function () {
                    alert('Error while trying to log in!');
                }
            });
        },
        DoQuanityModification: function () {
            if (Objects.Quantity.val().length > 0) {
                var This = $(this),
                    Value = (This.attr('id') == 'RemovePerson' ? -1 : 1) * Objects.Quantity.val();
                TweenMax.to(This, 0.5, {
                    scale: 0.5,
                    transformOrigin: '50% 50% 0',
                    ease: Power4.easeOut
                });
                $.ajax({
                    type: 'GET',
                    url: 'quantity.php',
                    data: {
                        Quantity: Value,
                        BusID: Variables.UserData.BusID
                    },
                    success: function () {
                        TweenMax.to(This, 0.5, {
                            scale: 1,
                            transformOrigin: '50% 50% 0',
                            ease: Power4.easeOut
                        });
                    },
                    error: function () {
                        alert('Error while trying to modify the quantity!');
                        TweenMax.to(This, 0.5, {
                            scale: 1,
                            transformOrigin: '50% 50% 0',
                            ease: Power4.easeOut
                        });
                    }
                });
            } else Objects.Quantity.trigger('focus');
        }
    };
$(document).ready(function () {
        Objects.MainFrame = $('#MainFrame', document);
        Objects.UserFrame = $('#UserFrame', document);
        Objects.DriverFrame = $('#DriverFrame', document);
        Objects.ConductorFrame = $('#ConductorFrame', document);
        Objects.UserButton = $('#UserButton', document);
        Objects.DriverButton = $('#DriverButton', document);
        Objects.ConductorButton = $('#ConductorButton', document);
        Objects.LoginEmailID = $('#LoginEmailID', document);
        Objects.LoginPassword = $('#LoginPassword', document);
        Objects.LoginButton = $('#LoginButton', document).on('click', function () {
            if (Objects.LoginEmailID.val().length > 0 && Objects.LoginPassword.val().length > 0) {
                if (Variables.IsEmailValid) Functions.DoLogin();
            }
        });
        Objects.RegisterName = $('#RegisterName', document);
        Objects.RegisterEmailID = $('#RegisterEmailID', document);
        Objects.RegisterPassword = $('#RegisterPassword', document);
        Objects.RegisterPhone = $('#RegisterPhone', document).on('keydown', function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
                (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if (this.value.length == 10 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        Objects.RegisterButton = $('#RegisterButton', document).on('click', function () {
            if (Objects.RegisterEmailID.val().length > 0 && Objects.RegisterPassword.val().length > 0) {
                if (Variables.IsEmailValid) Functions.DoRegister();
            }
        });
        Objects.LogoutButton = $('#LogoutButton', document).on('click', Functions.DoLogOut);
        Objects.UserName = $('#UserName', document);
        Objects.UserEmailID = $('#UserEmailID', document);
        Objects.UserPhone = $('#UserPhone', document);
        Objects.SearchFrom = $('#SearchFrom', document);
        Objects.SearchTo = $('#SearchTo', document);
        Objects.SearchDetailFrom = $('#SearchDetailFrom', document);
        Objects.SearchDetailTo = $('#SearchDetailTo', document);
        Objects.SearchResultContainer = $('#SearchResultContainer', document);
        Objects.SearchBusesButton = $('#SearchBusesButton', document).on('click', function () {
            if (Objects.SearchFrom.val().length > 0 && Objects.SearchTo.val().length > 0) Functions.DoSearch();
        });
        Objects.BackButton = $('#BackButton', document).on('click', Functions.BackOperation);
        Objects.ConductorID = $('#ConductorID', document);
        Objects.ConductorPassword = $('#ConductorPassword', document);
        Objects.ConductorBusID = $('#ConductorBusID', document);
        Objects.ConductorName = $('#ConductorName', document);
        Objects.BusID = $('#BusID', document);
        Objects.Quantity = $('#Quantity', document);
        Objects.ConductorLoginButton = $('#ConductorLoginButton', document).on('click', Functions.DoConductorLogin);
        if (window['UserData'] != undefined) {
            Variables.UserData = window['UserData'];
            if (Variables.UserData.UserType == 1) {
                Variables.CurrentMenu = 1;
                Functions.SetUserPortal();
                Functions.UnSetMenuFrame('#MainFrame');
                Functions.UnSetSubMenu(1, 0);
                Functions.SetSubMenuFrame(1, 2);
                Functions.SetMenuFrame('#UserFrame');
            } else {
                Variables.CurrentMenu = 2;
                Functions.SetConductorPortal();
                Functions.UnSetMenuFrame('#MainFrame');
                Functions.UnSetSubMenu(2, 0);
                Functions.SetSubMenuFrame(2, 1);
                Functions.SetMenuFrame('#ConductorFrame');
            }
            Objects.LogoutButton.css('display', 'block');
        }
    })
    .on('mouseenter', '.IconButton svg', Functions.IconButtonMouseEnter)
    .on('mouseleave', '.IconButton svg', Functions.IconButtonMouseLeave)
    .on('click', '.IconButton', Functions.IconButtonClick)
    .on('mouseenter', '.Button', Functions.ButtonMouseEnter)
    .on('mouseleave', '.Button', Functions.ButtonMouseLeave)
    .on('mousedown', '.Button', Functions.ButtonClickMouseDown)
    .on('mouseup', '.Button', Functions.ButtonClickMouseUp)
    .on('click', '.Button', Functions.ButtonClick)
    .on('focus', 'input', Functions.InputFocus)
    .on('blur', 'input', Functions.InputBlur)
    .on('keyup', 'input[name=EmailID]', function () {
        Functions.ValidateEmail(this, this.value);
    })
    .on('keydown', 'input[name=EmailID]', function () {
        Functions.ValidateEmail(this, this.value);
    }).on('click', '.AddRemoveButton', Functions.DoQuanityModification);