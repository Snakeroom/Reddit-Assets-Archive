// https://www.redditstatic.com/desktop2x/vendors~Chat~RedesignChat.5c6c446f6e045bc3c01b.js
// Retrieved at 4/2/2020, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Chat~RedesignChat"], {
		"./node_modules/agentkeepalive/browser.js": function(e, n) {
			function t() {}
			e.exports = t, e.exports.HttpsAgent = t
		},
		"./node_modules/form-data/lib/browser.js": function(e, n) {
			e.exports = "object" == typeof self ? self.FormData : window.FormData
		},
		"./node_modules/lodash/_baseDelay.js": function(e, n) {
			var t = "Expected a function";
			e.exports = function(e, n, s) {
				if ("function" != typeof e) throw new TypeError(t);
				return setTimeout((function() {
					e.apply(void 0, s)
				}), n)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, n) {
			e.exports = function(e, n, t, s, r) {
				return r(e, (function(e, r, a) {
					t = s ? (s = !1, e) : n(t, e, r, a)
				})), t
			}
		},
		"./node_modules/lodash/chunk.js": function(e, n, t) {
			var s = t("./node_modules/lodash/_baseSlice.js"),
				r = t("./node_modules/lodash/_isIterateeCall.js"),
				a = t("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				o = Math.max;
			e.exports = function(e, n, t) {
				n = (t ? r(e, n, t) : void 0 === n) ? 1 : o(a(n), 0);
				var l = null == e ? 0 : e.length;
				if (!l || n < 1) return [];
				for (var u = 0, c = 0, d = Array(i(l / n)); u < l;) d[c++] = s(e, u, u += n);
				return d
			}
		},
		"./node_modules/lodash/defer.js": function(e, n, t) {
			var s = t("./node_modules/lodash/_baseDelay.js"),
				r = t("./node_modules/lodash/_baseRest.js")((function(e, n) {
					return s(e, 1, n)
				}));
			e.exports = r
		},
		"./node_modules/lodash/first.js": function(e, n, t) {
			e.exports = t("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, n) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/reduce.js": function(e, n, t) {
			var s = t("./node_modules/lodash/_arrayReduce.js"),
				r = t("./node_modules/lodash/_baseEach.js"),
				a = t("./node_modules/lodash/_baseIteratee.js"),
				i = t("./node_modules/lodash/_baseReduce.js"),
				o = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, n, t) {
				var l = o(e) ? s : i,
					u = arguments.length < 3;
				return l(e, a(n, 4), t, u, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, n, t) {
			var s = t("./node_modules/lodash/_baseTimes.js"),
				r = t("./node_modules/lodash/_castFunction.js"),
				a = t("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				l = Math.min;
			e.exports = function(e, n) {
				if ((e = a(e)) < 1 || e > i) return [];
				var t = o,
					u = l(e, o);
				n = r(n), e -= o;
				for (var c = s(u, n); ++t < e;) n(t);
				return c
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return d
			}));
			var s = t("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				r = t("./node_modules/react/index.js"),
				a = t.n(r),
				i = t("./node_modules/react-router/esm/react-router.js"),
				o = t("./node_modules/history/esm/history.js"),
				l = (t("./node_modules/react-router-dom/node_modules/prop-types/index.js"), t("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				u = t("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				c = t("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			a.a.Component;
			a.a.Component;
			var d = function(e) {
				function n() {
					return e.apply(this, arguments) || this
				}
				Object(s.a)(n, e);
				var t = n.prototype;
				return t.handleClick = function(e, n) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (t) {
						throw e.preventDefault(), t
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? n.replace : n.push)(this.props.to))
				}, t.render = function() {
					var e = this,
						n = this.props,
						t = n.innerRef,
						s = (n.replace, n.to),
						r = Object(u.a)(n, ["innerRef", "replace", "to"]);
					return a.a.createElement(i.g.Consumer, null, (function(n) {
						n || Object(c.default)(!1);
						var i = "string" == typeof s ? Object(o.c)(s, null, null, n.location) : s,
							u = i ? n.history.createHref(i) : "";
						return a.a.createElement("a", Object(l.a)({}, r, {
							onClick: function(t) {
								return e.handleClick(t, n.history)
							},
							href: u,
							ref: t
						}))
					}))
				}, n
			}(a.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, n, t, r, a, i) {
					if (i !== s) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
					}
				}

				function n() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: n,
					element: e,
					instanceOf: n,
					node: e,
					objectOf: n,
					oneOf: n,
					oneOfType: n,
					shape: n,
					exact: n
				};
				return t.checkPropTypes = r, t.PropTypes = t, t
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, n, t) {
			e.exports = t("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, n, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/sendbird/SendBird.min.js": function(e, n, t) {
			"undefined" != typeof self && self, e.exports = function() {
				function e() {
					this.oldIE = !0, this.boundary = "--------FormData" + Math.random(), this._fields = []
				}
				var n, s = !1,
					r = "wss://ws.sendbird.com",
					a = "https://api.sendbird.com";
				try {
					n = window.console || {
						log: function() {}
					}
				} catch (e) {
					n = {
						log: function() {}
					}
				}
				var i = "undefined";
				try {
					i = navigator.userAgent.replace(/,/g, ".")
				} catch (e) {
					i = "undefined"
				}
				var o, l = "JS," + i + ",3.0.69,",
					u = function() {
						try {
							if (document && 9 === document.documentMode) return !0
						} catch (e) {
							return !1
						}
						return !1
					}(),
					c = function() {
						try {
							if (document && document.documentMode <= 8) return !0
						} catch (e) {
							return !1
						}
						return !1
					}();
				if (u || c) "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
					return this.replace(/^\s+|\s+$/g, "")
				}), "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
					for (var n = 0; n < this.length; n++) e.apply(this, [this[n], n, this])
				}), e.prototype.append = function(e, n) {
					this._fields.push([e, n])
				}, e.prototype.toString = function() {
					var e = this.boundary,
						n = "";
					return this._fields.forEach((function(t) {
						if (n += "--" + e + "\r\n", t[1].name) {
							var s = t[1];
							n += 'Content-Disposition: form-data; name="' + t[0] + '"; filename="' + s.name + '"\r\n', n += "Content-Transfer-Encoding: base64\r\n", n += "Content-Type: " + s.type + "\r\n\r\n", n += s.base64 + "\r\n"
						} else n += 'Content-Disposition: form-data; name="' + t[0] + '";\r\n\r\n', n += t[1] + "\r\n"
					})), n += "--" + e + "--"
				}, o = e;
				else if ("undefined" == typeof window && "undefined" == typeof FormData) try {
					o = t("./node_modules/form-data/lib/browser.js")
				} catch (e) {}
				var d = function(e, n, t) {
						if (t && "function" == typeof t)
							if (e) {
								var s = null;
								try {
									s = JSON.parse(e.response)
								} catch (e) {}
								var r = s ? s.message : null,
									a = s ? s.code : null;
								t(n, new I(r, a))
							} else t(n, null)
					},
					h = function(e) {
						for (var n in e)
							if (e.hasOwnProperty(n)) return !1;
						return Array.isArray(e) ? JSON.stringify(e) === JSON.stringify([]) : JSON.stringify(e) === JSON.stringify({})
					},
					_ = function(e) {
						try {
							if ("number" == typeof e) return !0;
							if ("string" == typeof e) return /^\d+$/.test(e)
						} catch (e) {
							return s && n.error(e), !1
						}
					},
					p = function() {
						var e = function() {};
						return function(n, t) {
							e.prototype = new n, t.prototype = new e, t.super = n.prototype, t.prototype.constructor = t
						}
					}(),
					I = function(e, n) {
						return this.name = "SendBirdException", this.code = n || 0, this.message = e, this
					};
				p(Error, I);
				var E = {
						MessageTypeFilter: {
							ALL: 0,
							USER: 1,
							FILE: 2,
							ADMIN: 3
						}
					},
					f = function(e) {
						return Object.keys(e).forEach((function(n) {
							null !== e[n] && void 0 !== e[n] && "object" == typeof e[n] && (e[n] = f(e[n]))
						})), Object.freeze(e)
					},
					m = function(e) {
						return JSON.parse(JSON.stringify(e))
					},
					g = function(e, n, t) {
						try {
							"number" == typeof n && n >= 0 && ("all" === e.myCountPreference || "unread_message_count_only" === e.myCountPreference ? e.isSuper ? e.unreadMessageCount = n >= 1 ? 1 : 0 : e.unreadMessageCount = n : e.unreadMessageCount = 0), "number" == typeof t && t >= 0 && ("all" === e.myCountPreference || "unread_mention_count_only" === e.myCountPreference ? e.unreadMentionCount = t : e.unreadMentionCount = 0)
						} catch (e) {}
					},
					A = function() {
						var e, u = {};
						try {
							e = "undefined" == typeof window ? t("./node_modules/xhr2/lib/browser.js") : null
						} catch (n) {
							e = null
						}
						if (e) try {
							var A = t("./node_modules/agentkeepalive/browser.js"),
								N = t("./node_modules/agentkeepalive/browser.js").HttpsAgent,
								C = new A({
									keepAlive: !0,
									timeout: 6e4,
									keepAliveTimeout: 6e4
								});
							u.httpAgent = C;
							var R = new N({
								keepAlive: !0,
								timeout: 6e4,
								keepAliveTimeout: 6e4
							});
							u.httpsAgent = R
						} catch (e) {}
						var U = function() {
								var n;
								return e ? (n = new e).nodejsSet(u) : n = new XMLHttpRequest, n
							},
							y = function(e, t, r, a, i) {
								var l = U();
								l.open(r, e), l.onload = function() {
									if (l.status >= 200 && l.status < 400) {
										var e = !1,
											n = null;
										try {
											n = JSON.parse(l.responseText)
										} catch (n) {
											e = !0
										}
										e ? d(new I("Request failed.", $.REQUEST_FAILED), null, i) : d(null, n, i)
									} else d({
										status: l.status,
										statusText: l.statusText,
										response: l.responseText
									}, null, i)
								}, l.onerror = function() {
									d({
										status: 404,
										statusText: "There was a connection error",
										response: JSON.stringify({
											message: "There was a connection error",
											code: $.NETWORK_ERROR
										})
									}, null, i)
								};
								try {
									for (var u in a) l.setRequestHeader(u, a[u] ? a[u] : "sendbird")
								} catch (e) {}
								try {
									switch (r) {
										case "get":
										case "GET":
											l.send();
											break;
										default:
											"undefined" != typeof FormData && FormData && t instanceof FormData || void 0 !== o && o && t instanceof o ? t.oldIE ? (l.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t.boundary), l.send(t.toString())) : l.send(t) : (l.setRequestHeader("Content-Type", "application/json; charset=utf-8"), l.send(JSON.stringify(t)))
									}
								} catch (e) {
									s && n.log("request.send() fail: ", e)
								}
							},
							v = !1,
							S = function(e, n, t) {
								t && "function" == typeof t && (void 0 === n && (n = null), void 0 === e && (e = null), v ? t(n, e) : t(e, n))
							},
							T = "",
							P = 0,
							O = 0,
							L = function(e) {
								this.isOpenChannel = function() {
									return this.channelType === w.CHANNEL_TYPE_OPEN
								}, this.isGroupChannel = function() {
									return this.channelType === w.CHANNEL_TYPE_GROUP
								}, this.isUserMessage = function() {
									return this.messageType === L.MESSAGE_TYPE_USER
								}, this.isAdminMessage = function() {
									return this.messageType === L.MESSAGE_TYPE_ADMIN
								}, this.isFileMessage = function() {
									return this.messageType === L.MESSAGE_TYPE_FILE
								}, this._update = function(e) {
									this.messageId = e.hasOwnProperty("msg_id") ? parseInt(e.msg_id) : 0, this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.createdAt = e.hasOwnProperty("ts") ? parseInt(e.ts) : 0, this.updatedAt = e.hasOwnProperty("updated_at") ? parseInt(e.updated_at) : 0, this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : w.CHANNEL_TYPE_GROUP, this.mentionType = e.hasOwnProperty("mention_type") ? e.mention_type : ie.MentionType.USERS;
									var n = this;
									n.mentionedUsers = [], e.hasOwnProperty("mentioned_users") && e.mentioned_users.forEach((function(e) {
										var t = new B(e);
										n.mentionedUsers.push(t)
									}))
								}, this.serialize = function() {
									var e = JSON.parse(JSON.stringify(this));
									return e.hasOwnProperty("_sender") && (e.sender = e._sender, delete e._sender), f(e)
								}, this.messageType = L.MESSAGE_TYPE_BASE, e && this._update(e)
							};
						L.build = function(e, n) {
							if (!e) return null;
							var t, s, r, a, i, o, l, u, c, d;
							switch (e.type) {
								case "MESG":
									return t = new B(e.user), s = parseInt(e.message_id), r = String(e.message), a = String(e.data), i = parseInt(e.created_at), o = parseInt(e.updated_at), l = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", u = e.hasOwnProperty("translations") ? e.translations : {}, c = e.hasOwnProperty("mention_type") ? e.mention_type : ie.MentionType.USERS, d = e.mentioned_users, new D(D.build("", s, t, n, r, a, l, u, i, o, c, d));
								case "FILE":
									t = new B(e.user), s = parseInt(e.message_id), r = String(e.message), i = parseInt(e.created_at), o = parseInt(e.updated_at), l = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", c = e.hasOwnProperty("mention_type") ? e.mention_type : ie.MentionType.USERS, d = e.mentioned_users;
									var h = e.file,
										_ = String(h.url),
										p = String(h.name),
										I = String(h.type),
										E = parseInt(h.size) || 0;
									a = String(h.data);
									var f = e.hasOwnProperty("thumbnails") ? e.thumbnails : [],
										m = !!e.hasOwnProperty("require_auth") && e.require_auth;
									return new M(M.build("", s, t, n, _, p, I, E, a, l, i, f, m, o, c, d));
								case "BRDM":
								case "ADMM":
									return s = parseInt(e.message_id), r = String(e.message), a = String(e.data), i = parseInt(e.created_at), o = parseInt(e.updated_at), l = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", u = e.hasOwnProperty("translations") ? e.translations : {}, c = e.hasOwnProperty("mention_type") ? e.mention_type : ie.MentionType.USERS, d = e.mentioned_users, new b(b.build(s, n, r, a, l, u, i, o, c, d))
							}
							return null
						}, L.MESSAGE_TYPE_BASE = "base", L.MESSAGE_TYPE_ADMIN = "admin", L.MESSAGE_TYPE_USER = "user", L.MESSAGE_TYPE_FILE = "file";
						var b = function(e) {
							this.messageType = L.MESSAGE_TYPE_ADMIN, e && (this._update(e), this.message = String(e.message), this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", this.translations = e.hasOwnProperty("translations") ? e.translations : {})
						};
						p(L, b), b.build = function(e, n, t, s, r, a, i, o, l, u) {
							var c = {
								msg_id: e,
								channel_url: n.url,
								channel_type: n.channelType === w.CHANNEL_TYPE_OPEN ? w.CHANNEL_TYPE_OPEN : w.CHANNEL_TYPE_GROUP,
								ts: i,
								updated_at: o,
								message: t,
								data: s
							};
							return r && (c.custom_type = r), a && (c.translations = a), c.mention_type = l, c.mentioned_users = [], u && (c.mentioned_users = u), c
						}, b.buildFromSerializedData = function(e) {
							var n = m(e),
								t = [];
							return n.mentionedUsers.forEach((function(e) {
								t.push(B.build(e.userId, e.nickname, e.profileUrl, e.connectionStatus, e.lastSeenAt, e.metaData, e.isActive, e.friendDiscoveryKey, e.friendName))
							})), new b(b.build(n.messageId, {
								url: n.channelUrl,
								channelType: n.channelType
							}, n.message, n.data, n.customType, n.translations, n.createdAt, n.updatedAt, n.mentionType, t))
						};
						var D = function(e) {
							this.messageType = L.MESSAGE_TYPE_USER, e && (this._update(e), this.message = String(e.message), this.data = e.hasOwnProperty("data") ? String(e.data) : "", this._sender = new B(e.user), c ? this.sender = this._sender : Object.defineProperty(this, "sender", {
								get: function() {
									if (ue.getInstance().Options.useMemberAsMessageSender && this.isGroupChannel()) {
										var e = k.cachedChannels[this.channelUrl];
										if (e) {
											var n = e.memberMap[this._sender.userId];
											n && (this._sender.nickname !== n.nickname && (this._sender.nickname = n.nickname), this._sender.profileUrl !== n.profileUrl && (this._sender.profileUrl = n.profileUrl), this._sender.metaData !== n.metaData && (this._sender.metaData = n.metaData))
										}
									}
									return this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}), this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.customType = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", this.translations = e.hasOwnProperty("translations") ? e.translations : {})
						};
						p(L, D), D.build = function(e, n, t, s, r, a, i, o, l, u, c, d, h) {
							var _ = {};
							_.req_id = e, _.msg_id = n, _.channel_url = s.url, _.channel_type = s.channelType === w.CHANNEL_TYPE_OPEN ? w.CHANNEL_TYPE_OPEN : w.CHANNEL_TYPE_GROUP, _.ts = l, _.updated_at = u, _.message = r, a && (_.data = a), i && (_.custom_type = i), o && (_.translations = o);
							var p = {};
							p.user_id = t.userId, p.nickname = t.nickname, p.profile_url = t.profileUrl;
							try {
								p.metadata = "string" == typeof t.metaData ? JSON.parse(t.metaData) : t.metaData
							} catch (e) {
								p.metadata = {}
							}
							return _.user = p, _.mention_type = ie.MentionType.USERS, c && (_.mention_type = c), _.mentioned_users = [], d && (_.mentioned_users = d), h && (_.mentioned_user_ids = h), _
						}, D.buildFromSerializedData = function(e) {
							var n = m(e),
								t = [];
							return n.mentionedUsers.forEach((function(e) {
								t.push(B.build(e.userId, e.nickname, e.profileUrl, e.connectionStatus, e.lastSeenAt, e.metaData, e.isActive, e.friendDiscoveryKey, e.friendName))
							})), new D(D.build(n.reqId, n.messageId, n.sender, {
								url: n.channelUrl,
								channelType: n.channelType
							}, n.message, n.data, n.customType, n.translations, n.createdAt, n.updatedAt, n.mentionType, t))
						};
						var M = function(e) {
							if (this.messageType = L.MESSAGE_TYPE_FILE, e && (this._update(e), this._sender = new B(e.user), c ? this.sender = this._sender : Object.defineProperty(this, "sender", {
									get: function() {
										if (ue.getInstance().Options.useMemberAsMessageSender && this.isGroupChannel()) {
											var e = k.cachedChannels[this.channelUrl];
											if (e) {
												var n = e.memberMap[this._sender.userId];
												n && (this._sender.nickname !== n.nickname && (this._sender.nickname = n.nickname), this._sender.profileUrl !== n.profileUrl && (this._sender.profileUrl = n.profileUrl), this._sender.metaData !== n.metaData && (this._sender.metaData = n.metaData))
											}
										}
										return this._sender
									},
									set: function(e) {
										this._sender = e
									}
								}), this.requireAuth = !!e.hasOwnProperty("require_auth") && e.require_auth, this.url = this.requireAuth ? String(e.url).split("?auth=")[0] + "?auth=" + ne.getInstance().ekey : String(e.url).split("?auth=")[0], this.name = e.hasOwnProperty("name") ? e.name : "File", this.size = parseInt(e.size) || 0, this.type = String(e.type), this.data = e.hasOwnProperty("custom") ? String(e.custom) : "", this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.customType = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", this.thumbnails = e.hasOwnProperty("thumbnails") ? e.thumbnails : [], this.requireAuth))
								for (var n in this.thumbnails) this.thumbnails[n].url = String(this.thumbnails[n].url).split("?auth=")[0] + "?auth=" + ne.getInstance().ekey
						};
						p(L, M), M.build = function(e, n, t, s, r, a, i, o, l, u, c, d, h, _, p, I, E) {
							var f = {};
							f.req_id = e, f.msg_id = n, f.channel_url = s.url, f.channel_type = s.channelType === w.CHANNEL_TYPE_OPEN ? w.CHANNEL_TYPE_OPEN : w.CHANNEL_TYPE_GROUP, f.ts = c, f.updated_at = _, f.url = r, f.name = a, f.type = i, f.size = o, f.custom = l;
							var m = {};
							m.user_id = t.userId, m.nickname = t.nickname, m.profile_url = t.profileUrl;
							try {
								m.metadata = JSON.parse(t.metaData)
							} catch (e) {
								m.metadata = {}
							}
							return f.user = m, u && (f.custom_type = u), h && (f.require_auth = h), d && (f.thumbnails = d), f.mention_type = p, f.mentioned_users = [], I && (f.mentioned_users = I), E && (f.mentioned_user_ids = E), f
						}, M.buildFromSerializedData = function(e) {
							var n = m(e),
								t = [];
							return n.mentionedUsers.forEach((function(e) {
								t.push(B.build(e.userId, e.nickname, e.profileUrl, e.connectionStatus, e.lastSeenAt, e.metaData, e.isActive, e.friendDiscoveryKey, e.friendName))
							})), new M(M.build(n.reqId, n.messageId, n.sender, {
								url: n.channelUrl,
								channelType: n.channelType
							}, n.url, n.name, n.type, n.size, n.data, n.customType, n.createdAt, n.thumbnails, n.requireAuth, n.updatedAt, n.mentionType, t))
						};
						var w = function(e) {
							this._update = function(e) {
								this.url = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.name = e.hasOwnProperty("name") ? String(e.name) : "", this.coverUrl = e.hasOwnProperty("cover_url") ? String(e.cover_url) : "", this.createdAt = e.hasOwnProperty("created_at") ? 1e3 * e.created_at : 0, this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? e.custom_type : "", this.isFrozen = !!e.hasOwnProperty("freeze") && e.freeze, this.isEphemeral = !!e.hasOwnProperty("is_ephemeral") && e.is_ephemeral, this.fileUploadRequest = {}
							}, this.serialize = function() {
								var e = JSON.parse(JSON.stringify(this));
								if (e.hasOwnProperty("lastMessage") && null !== e.lastMessage && void 0 !== e.lastMessage && "object" == typeof e.lastMessage) {
									var n = e.lastMessage;
									n.hasOwnProperty("_sender") && (n.sender = n._sender, delete n._sender, e.lastMessage = n)
								}
								return f(e)
							}, this.isGroupChannel = function() {
								return this.channelType === w.CHANNEL_TYPE_GROUP
							}, this.isOpenChannel = function() {
								return this.channelType === w.CHANNEL_TYPE_OPEN
							}, this.getMessageChangeLogsByToken = function(e, n) {
								if ("function" == typeof e && (n = e, e = null), "function" != typeof n) return null;
								ne.getInstance().getMessageChangeLogsByToken(this.isOpenChannel(), this.url, e, (function(e, t) {
									if (t) S(null, t, n);
									else {
										var s = e.updated.map((function(e) {
												return L.build(e, this)
											})),
											r = e.deleted.map((function(e) {
												return e.message_id
											})),
											a = e.has_more,
											i = e.next;
										S({
											updatedMessages: s,
											deletedMessageIds: r,
											hasMore: a,
											token: i
										}, null, n)
									}
								}))
							}, this.createOperatorListQuery = function() {
								return new K(this)
							}, this.createPreviousMessageListQuery = function() {
								return new Z(this)
							}, this.createMessageListQuery = function() {
								return new q(this)
							};
							var n = function(e, n, t, s, r, a, i, o, l, u) {
									if (i === E.MessageTypeFilter.ADMIN ? i = "ADMM" : i === E.MessageTypeFilter.USER ? i = "MESG" : i === E.MessageTypeFilter.FILE ? i = "FILE" : i === E.MessageTypeFilter.ALL && (i = ""), _(n) && "boolean" == typeof t && _(s) && _(r) && "boolean" == typeof a && "string" == typeof i && "string" == typeof o && Array.isArray(l)) {
										for (var c = 0; c < l.length; c++)
											if ("string" != typeof l[c]) return void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), u);
										ne.getInstance().messageList(e.isOpenChannel(), e.url, n, s, r, t, a, i, o, l, (function(n, t) {
											if (t) S(null, t, u);
											else {
												var s = n.messages,
													r = [];
												for (var a in s) {
													var i = L.build(s[a], e);
													i && r.push(i)
												}
												S(r, null, u)
											}
										}))
									} else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), u)
								},
								t = function(e, n, t, s, r, a, i, o, l, u) {
									if (i === E.MessageTypeFilter.ADMIN ? i = "ADMM" : i === E.MessageTypeFilter.USER ? i = "MESG" : i === E.MessageTypeFilter.FILE ? i = "FILE" : i === E.MessageTypeFilter.ALL && (i = ""), _(n) && "boolean" == typeof t && _(s) && _(r) && "boolean" == typeof a && "string" == typeof i && "string" == typeof o && Array.isArray(l)) {
										for (var c = 0; c < l.length; c++)
											if ("string" != typeof l[c]) return void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), u);
										ne.getInstance().messageListByID(e.isOpenChannel(), e.url, n, s, r, t, a, i, o, l, (function(n, t) {
											if (t) S(null, t, u);
											else {
												var s = n.messages,
													r = [];
												for (var a in s) {
													var i = L.build(s[a], e);
													i && r.push(i)
												}
												S(r, null, u)
											}
										}))
									} else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), u)
								};
							this.getNextMessagesByTimestamp = function(e, t, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), n(this, e, t, 0, s, r, a, i, o, l)
							}, this.getPreviousMessagesByTimestamp = function(e, t, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), n(this, e, t, s, 0, r, a, i, o, l)
							}, this.getPreviousAndNextMessagesByTimestamp = function(e, t, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), n(this, e, !0, t, s, r, a, i, o, l)
							}, this.getNextMessagesByID = function(e, n, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), t(this, e, n, 0, s, r, a, i, o, l)
							}, this.getPreviousMessagesByID = function(e, n, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), t(this, e, n, s, 0, r, a, i, o, l)
							}, this.getPreviousAndNextMessagesByID = function(e, n, s, r, a, i, o, l) {
								return "function" != typeof o || l || (l = o, o = []), t(this, e, !0, n, s, r, a, i, o, l)
							}, this._sendFileCommand = function(e, n, t, s, r, a, i, o, l, u, c, d, h, _) {
								var p, E = this;
								p = _ ? _.reqId : x.generateRequestId();
								var f = x.bFile(p, e, n, t, s, r, a, i, o, l, u, c, d),
									m = M.build(f.requestId, 0, ue.getInstance().currentUser, this, "string" == typeof n ? n : "", t, s, r, a, i, null, null, !1, null, u, null, c),
									g = new M(m);
								return "string" == typeof n && ue.getInstance().sendCommand(f, (function(e, n) {
									if (n) S(null, new I(n.message, n.code), h);
									else {
										var t = new M(e.getJsonElement()),
											s = ue.getInstance().currentUser;
										s && t._sender && s.userId === t._sender.userId && (s.nickname !== t._sender.nickname && (s.nickname = t._sender.nickname), s.profileUrl !== t._sender.profileUrl && (s.profileUrl = t._sender.profileUrl)), E.isGroupChannel() && k.getChannel(E.url, (function(e, n) {
											if (v) {
												var s = e;
												e = n, n = s
											}
											if (n) S(null, n, h);
											else
												for (var r in e.lastMessage = t, ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onChannelChanged(e)
										})), S(t, null, h)
									}
								})), g
							}, this._getSendFileMessageParamInfo = function(e) {
								var n = {
									file: null,
									name: null,
									type: null,
									size: null,
									data: "",
									customType: "",
									thumbnailSizes: [],
									callback: null,
									progressHandler: null,
									mentionType: ie.MentionType.USERS,
									mentionedUserIds: [],
									pushNotificationDeliveryOption: le.PushNotificationDeliveryOption.DEFAULT
								};
								switch ("function" == typeof e.slice(-1)[0] && (n.callback = e.pop()), "function" == typeof e.slice(-1)[0] && (n.progressHandler = e.pop()), e.length) {
									case 1:
										if (e[0] instanceof le) {
											var t = e[0];
											n.file = t.file ? t.file : t.fileUrl, n.name = t.fileName, n.type = t.mimeType, n.size = t.fileSize, n.data = t.data, n.customType = t.customType, n.thumbnailSizes = t.thumbnailSizes, n.mentionType = t._mentionType, n.mentionedUserIds = t._mentionedIds, n.pushNotificationDeliveryOption = t.pushNotificationDeliveryOption ? t.pushNotificationDeliveryOption : le.PushNotificationDeliveryOption.DEFAULT
										} else n.file = e[0];
										break;
									case 2:
										n.file = e[0], n.data = e[1];
										break;
									case 3:
										n.file = e[0], n.data = e[1], n.customType = e[2];
										break;
									case 4:
										n.file = e[0], n.data = e[1], n.customType = e[2], n.thumbnailSizes = e[3];
										break;
									case 5:
										n.file = e[0], n.name = e[1], n.type = e[2], n.size = e[3], n.data = e[4];
										break;
									case 6:
										n.file = e[0], n.name = e[1], n.type = e[2], n.size = e[3], n.data = e[4], n.customType = e[5];
										break;
									case 7:
										n.file = e[0], n.name = e[1], n.type = e[2], n.size = e[3], n.data = e[4], n.customType = e[5], n.thumbnailSizes = e[6]
								}
								return "string" != typeof n.file && null !== n.file && (null !== n.name && void 0 !== n.name && n.name || (n.name = n.file.name), null !== n.type && void 0 !== n.type && n.type || (n.type = n.file.type), null !== n.size && void 0 !== n.size || (n.size = n.file.size)), null !== n.name && void 0 !== n.name || (n.name = ""), null !== n.type && void 0 !== n.type || (n.type = ""), null !== n.size && void 0 !== n.size || (n.size = 0), n
							}, this.sendFileMessage = function() {
								var e = this,
									n = this._getSendFileMessageParamInfo(Array.prototype.slice.call(arguments)),
									t = n.file,
									s = n.name,
									r = n.type,
									a = n.size,
									i = n.data,
									o = n.customType,
									l = n.thumbnailSizes,
									u = n.callback,
									c = n.progressHandler,
									d = n.mentionType,
									h = n.mentionedUserIds,
									p = n.pushNotificationDeliveryOption;
								if (null != l || (l = []), ue.getInstance().hasLoggedIn()) {
									if (!(null == t || null != s && "string" != typeof s || null != r && "string" != typeof r || null != a && (!_(a) || parseInt(a) < 0) || null != i && "string" != typeof i || null != o && "string" != typeof o || !Array.isArray(l) || [le.PushNotificationDeliveryOption.DEFAULT, le.PushNotificationDeliveryOption.SUPPRESS].indexOf(p) < 0)) {
										var E = e.url,
											f = null;
										return "string" == typeof t ? f = e._sendFileCommand(E, t, s, r, a, i, o, [], !1, d, h, p, u) : (f = e._sendFileCommand(E, t, s, r, a, i, o, [], !1, d, h, p, u), ne.getInstance().uploadFile(t, r, l, E, (function(n, t) {
											if (t) S(null, t, u);
											else {
												var l = "object" == typeof n ? n : JSON.parse(n),
													c = l.url,
													_ = l.hasOwnProperty("thumbnails") ? l.thumbnails : [],
													I = !!l.hasOwnProperty("require_auth") && l.require_auth;
												e._sendFileCommand(E, c, s, r, a, i, o, _, I, d, h, p, u, f)
											}
										}), c, this.fileUploadRequest, f.reqId)), f
									}
									S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), u)
								} else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), u)
							}, this.cancelUploadingFileMessage = function(e, n) {
								if (ue.getInstance().hasLoggedIn()) {
									if (_(e)) {
										var t = this,
											s = t.fileUploadRequest[e];
										return s ? (s.upload.onabort = function() {
											delete t.fileUploadRequest[e], S(!0, null, n)
										}, s.abort(), !0) : (S(!1, new I("Uploading has been completed or cancelled.", $.FILE_UPLOAD_CANCEL_FAILED), n), !1)
									}
									S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								} else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.sendUserMessage = function(e, n, t, s, r) {
								var a = this,
									i = ie.MentionType.USERS,
									o = [],
									l = oe.PushNotificationDeliveryOption.DEFAULT;
								if ("function" == typeof n && (r = n, n = "", t = "", s = [], e instanceof oe)) {
									var u = e;
									e = u.message, n = u.data, t = u.customType, s = u.targetLanguages, i = u._mentionType, o = u._mentionedIds, l = u.pushNotificationDeliveryOption ? u.pushNotificationDeliveryOption : oe.PushNotificationDeliveryOption.DEFAULT
								}
								if ("function" == typeof t && (r = t, t = "", s = []), "function" == typeof s && (r = s, s = []), s || (s = []), "string" == typeof s && (s = [s]), null === n && (n = ""), null === t && (t = ""), ue.getInstance().hasLoggedIn()) {
									if ("string" == typeof e && "string" == typeof n && "string" == typeof t && Array.isArray(s) && !([oe.PushNotificationDeliveryOption.DEFAULT, oe.PushNotificationDeliveryOption.SUPPRESS].indexOf(l) < 0)) {
										var c = x.bMessage(this.url, e, n, t, i, o, s, l),
											d = D.build(c.requestId, 0, ue.getInstance().currentUser, this, e, n, t, s, (new Date).getTime(), null, i, null, o),
											h = new D(d);
										return ue.getInstance().sendCommand(c, (function(e, n) {
											if (n) S(null, new I(n.message, n.code), r);
											else {
												var t = new D(e.getJsonElement()),
													s = ue.getInstance().currentUser;
												s && t._sender && s.userId === t._sender.userId && (s.nickname !== t._sender.nickname && (s.nickname = t._sender.nickname), s.profileUrl !== t._sender.profileUrl && (s.profileUrl = t._sender.profileUrl)), a.isGroupChannel() && k.getChannel(a.url, (function(e, n) {
													if (v) {
														var s = e;
														e = n, n = s
													}
													if (n) S(null, n, r);
													else
														for (var a in e.lastMessage = t, ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[a].onChannelChanged(e)
												})), S(t, null, r)
											}
										})), h
									}
									S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), r)
								} else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), r)
							}, this.updateUserMessage = function(e, n, t, s, r) {
								var a = Array.prototype.slice.call(arguments);
								if (5 !== a.length) return "function" == typeof a.slice(-1)[0] && (r = a.pop()), void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), r);
								if (ue.getInstance().hasLoggedIn())
									if (_(e))
										if ("string" != typeof n && null != n || "string" != typeof t && null != t || "string" != typeof s && null != s) S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), r);
										else {
											var i = x.bUpdateUserMessage(this.url, e, n, t, s);
											ue.getInstance().sendCommand(i, (function(e, n) {
												if (n) S(null, new I(n.message, n.code), r);
												else {
													var t = new D(e.getJsonElement());
													S(t, null, r)
												}
											}))
										}
								else S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), r);
								else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), r)
							}, this.updateFileMessage = function(e, n, t, s) {
								var r = Array.prototype.slice.call(arguments);
								if (4 !== r.length) return "function" == typeof r.slice(-1)[0] && (s = r.pop()), void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), s);
								if (ue.getInstance().hasLoggedIn())
									if (_(e))
										if ("string" != typeof n && null != n || "string" != typeof t && null != t) S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), s);
										else {
											var a = x.bUpdateFileMessage(this.url, e, n, t);
											ue.getInstance().sendCommand(a, (function(e, n) {
												if (n) S(null, new I(n.message, n.code), s);
												else {
													var t = new M(e.getJsonElement());
													S(t, null, s)
												}
											}))
										}
								else S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), s);
								else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), s)
							}, this.createMetaCounters = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? null == e || "object" != typeof e || Array.isArray(e) || h(e) ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().createMetaCounters(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.updateMetaCounters = function(e, n, t) {
								return ue.getInstance().hasLoggedIn() ? ("function" != typeof n && void 0 !== t || (t = n, n = !1), null == e || "object" != typeof e || Array.isArray(e) || h(e) || "boolean" != typeof n ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), t) : void ne.getInstance().updateMetaCounters(this.isOpenChannel(), this.url, e, n, ne.UPDATE_META_COUNTER_MODE_SET, (function(e, n) {
									n ? S(null, n, t) : S(e, null, t)
								}))) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), t)
							}, this.increaseMetaCounters = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? null == e || "object" != typeof e || Array.isArray(e) || h(e) ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().updateMetaCounters(this.isOpenChannel(), this.url, e, !1, ne.UPDATE_META_COUNTER_MODE_INC, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.decreaseMetaCounters = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? null == e || "object" != typeof e || Array.isArray(e) || h(e) ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().updateMetaCounters(this.isOpenChannel(), this.url, e, !1, ne.UPDATE_META_COUNTER_MODE_DEC, (function(e, t) {
									if (t) S(null, t, n);
									else {
										var s = e,
											r = {};
										for (var a in s) {
											var i = s[a];
											r[a] = i
										}
										S(r, null, n)
									}
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.getMetaCounters = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? Array.isArray(e) ? void ne.getInstance().getMetaCounters(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.getAllMetaCounters = function(e) {
								ue.getInstance().hasLoggedIn() ? ne.getInstance().getAllMetaCounters(this.isOpenChannel(), this.url, (function(n, t) {
									t ? S(null, t, e) : S(n, null, e)
								})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
							}, this.deleteMetaCounter = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? "string" != typeof e ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().deleteMetaCounter(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.deleteAllMetaCounters = function(e) {
								ue.getInstance().hasLoggedIn() ? ne.getInstance().deleteAllMetaCounters(this.isOpenChannel(), this.url, (function(n, t) {
									t ? e && S(null, t, e) : S(n, null, e)
								})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
							}, this.createMetaData = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? null == e || "object" != typeof e || Array.isArray(e) || h(e) ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().createMetaData(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.updateMetaData = function(e, n, t) {
								return ue.getInstance().hasLoggedIn() ? ("function" != typeof n && void 0 !== t || (t = n, n = !1), null == e || "object" != typeof e || Array.isArray(e) || h(e) || "boolean" != typeof n ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), t) : void ne.getInstance().updateMetaData(this.isOpenChannel(), this.url, e, n, (function(e, n) {
									n ? S(null, n, t) : S(e, null, t)
								}))) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), t)
							}, this.getMetaData = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? Array.isArray(e) ? void ne.getInstance().getMetaData(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.getAllMetaData = function(e) {
								ue.getInstance().hasLoggedIn() ? ne.getInstance().getAllMetaData(this.isOpenChannel(), this.url, (function(n, t) {
									t ? S(null, t, e) : S(n, null, e)
								})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
							}, this.deleteMetaData = function(e, n) {
								return ue.getInstance().hasLoggedIn() ? "string" != typeof e ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : void ne.getInstance().deleteMetaData(this.isOpenChannel(), this.url, e, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								})) : void S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.deleteAllMetaData = function(e) {
								ue.getInstance().hasLoggedIn() ? ne.getInstance().deleteAllMetaData(this.isOpenChannel(), this.url, (function(n, t) {
									t ? e && S(null, t, e) : S(n, null, e)
								})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
							}, this.deleteMessage = function(e, n) {
								var t = Array.prototype.slice.call(arguments);
								if (2 !== t.length) return "function" == typeof t.slice(-1)[0] && (n = t.pop()), void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n);
								if (ue.getInstance().hasLoggedIn()) {
									var s = this;
									"object" != typeof e || h(e) || Array.isArray(e) || Object.keys(e).indexOf("messageId") < 0 || !e ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : ne.getInstance().deleteMessage(s.isOpenChannel(), s.url, e.messageId, (function(e, t) {
										S(null, t || null, n)
									}))
								} else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
							}, this.channelType = w.CHANNEL_TYPE_BASE, e && this._update(e)
						};
						w.CHANNEL_TYPE_OPEN = "open", w.CHANNEL_TYPE_GROUP = "group", w.CHANNEL_TYPE_BASE = "base";
						var H = function(e) {
							this.parse = function(e) {
								if (e.hasOwnProperty("participant_count") && (this.participantCount = parseInt(e.participant_count)), e.hasOwnProperty("operators") && e.operators)
									for (var n in this.operators = [], e.operators) {
										var t = new B(e.operators[n]);
										this.operators.push(t)
									}
							}, this.refresh = function(e) {
								H.getChannelWithoutCache(this.url, (function(n, t) {
									if (v) {
										var s = n;
										n = t, t = s
									}
									t ? S(null, t, e) : S(n, null, e)
								}))
							}, this.update = function(e) {
								this._update(e), this.parse(e)
							}, this.delete = function(e) {
								var n = this.url;
								ne.getInstance().deleteOpenChannel(n, (function(t, s) {
									s ? S(null, s, e) : (delete H.cachedChannels[n], S(t, null, e))
								}))
							}, this.enter = function(e) {
								var n = this,
									t = x.bEnter(n.url);
								ue.getInstance().sendCommand(t, (function(t, s) {
									s ? S(null, new I(s.message, s.code), e) : (H.enteredChannels[n.url] = n, S(null, null, e))
								}))
							}, this.exit = function(e) {
								var n = this,
									t = x.bExit(n.url);
								ue.getInstance().sendCommand(t, (function(t, s) {
									s ? S(null, new I(s.message, s.code), e) : (delete H.enteredChannels[n.url], S(null, null, e))
								}))
							}, this.createParticipantListQuery = function() {
								return new X(X.PARTICIPANT, this)
							}, this.createMutedUserListQuery = function() {
								return new X(X.MUTED_USER, this)
							}, this.createBannedUserListQuery = function() {
								return new X(X.BANNED_USER, this)
							}, this.updateChannel = function() {
								var e = Array.prototype.slice.call(arguments),
									n = null,
									t = null,
									s = null,
									r = null,
									a = null,
									i = null;
								switch ("function" == typeof e.slice(-1)[0] && (i = e.pop()), e.length) {
									case 3:
										n = e[0], t = e[1], s = e[2];
										break;
									case 4:
										n = e[0], t = e[1], s = e[2], r = e[3];
										break;
									case 5:
										n = e[0], t = e[1], s = e[2], r = e[3], a = e[4];
										break;
									default:
										return void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), i)
								}
								this.updateChannelWithOperatorUserIds(n, t, s, r, a, i)
							}, this.updateChannelWithOperatorUserIds = function(e, n, t, s, r, a) {
								"function" == typeof r && (a = r, r = null), "string" != typeof e && null != e || "string" != typeof n && h(n) && null != n || "string" != typeof t && null != t || "string" != typeof s && !Array.isArray(s) && null != s || "string" != typeof r && null != r ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), a) : ne.getInstance().updateOpenChannel(this.url, e, n, t, s, r, (function(e, n) {
									if (n) S(null, n, a);
									else {
										var t = H.upsert(e);
										S(t, null, a)
									}
								}))
							}, this.banUser = function(e, n, t) {
								"function" == typeof n && 3 !== arguments.length && (t = n, n = -1), !e || "number" != typeof n || parseInt(n) < 0 && -1 !== parseInt(n) ? S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : this.banUserWithUserId(e.userId, n, t)
							}, this.banUserWithUserId = function(e, n, t) {
								"function" == typeof n && 3 !== arguments.length && (t = n, n = -1), !e || parseInt(n) < 0 && -1 !== parseInt(n) ? S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : ne.getInstance().banUser(this.url, e, null, n, !1, (function(e, n) {
									S(null, n || null, t)
								}))
							}, this.unbanUser = function(e, n) {
								e ? this.unbanUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.unbanUserWithUserId = function(e, n) {
								e ? ne.getInstance().unbanUser(this.url, e, !1, (function(e, t) {
									S(null, t || null, n)
								})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.muteUser = function(e, n) {
								e ? this.muteUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.muteUserWithUserId = function(e, n) {
								e ? ne.getInstance().muteUser(this.url, e, !1, (function(e, t) {
									S(null, t || null, n)
								})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.unmuteUser = function(e, n) {
								e ? this.unmuteUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.unmuteUserWithUserId = function(e, n) {
								e ? ne.getInstance().unmuteUser(this.url, e, !1, (function(e, t) {
									S(null, t || null, n)
								})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
							}, this.isOperator = function(e) {
								return !!e && this.isOperatorWithUserId(e.userId)
							}, this.isOperatorWithUserId = function(e) {
								for (var n in this.operators)
									if (this.operators[n].userId === e) return !0;
								return !1
							}, this.channelType = w.CHANNEL_TYPE_OPEN, this.participantCount = 0, this.operators = [], e && (this._update(e), this.parse(e))
						};
						p(w, H), H.enteredChannels = {}, H.clearEnteredChannels = function() {
							H.enteredChannels = {}
						}, H.createOpenChannelListQuery = function() {
							return new J
						}, H.buildFromSerializedData = function(e) {
							var n = m(e);
							return new H({
								channel_url: n.url,
								name: n.name,
								cover_url: n.coverUrl,
								data: n.data,
								custom_type: n.customType,
								created_at: n.createdAt / 1e3,
								freeze: n.isFrozen,
								is_ephemeral: n.isEphemeral,
								participant_count: n.participantCount,
								operators: n.operators.map((function(e) {
									return B.build(e.userId, e.nickname, e.profileUrl, e.connectionStatus, e.lastSeenAt, e.metaData, e.isActive, e.friendDiscoveryKey, e.friendName)
								}))
							})
						}, H.createChannel = function() {
							var e, n, t, s, r, a;
							switch (arguments.length) {
								case 1:
									a = arguments[0];
									break;
								case 4:
									e = arguments[0], n = arguments[1], t = arguments[2], a = arguments[3];
									break;
								case 5:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], a = arguments[4];
									break;
								case 6:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], a = arguments[5]
							}
							H.createChannelWithOperatorUserIds(e, n, t, s, r, a)
						}, H.upsert = function(e) {
							var n = new H(e);
							return H.cachedChannels.hasOwnProperty(n.url) ? H.cachedChannels[n.url].update(e) : H.cachedChannels[n.url] = n, H.cachedChannels[n.url]
						}, H.createChannelWithOperatorUserIds = function(e, n, t, s, r, a) {
							"function" == typeof r && (a = r, r = ""), "string" != typeof e && null != e || "string" != typeof n && h(n) && null != n || "string" != typeof t && null != t || "string" != typeof s && !Array.isArray(s) && null != s || "string" != typeof r && null != r ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), a) : ne.getInstance().createOpenChannel(e, n, t, s, r, (function(e, n) {
								if (n) S(null, n, a);
								else {
									var t = H.upsert(e);
									S(t, null, a)
								}
							}))
						}, H.cachedChannels = {}, H.clearCache = function() {
							H.cachedChannels = {}
						}, H.removeCachedChannel = function(e) {
							delete H.cachedChannels[e]
						}, H.getChannel = function(e, n) {
							e ? H.cachedChannels.hasOwnProperty(e) ? S(H.cachedChannels[e], null, n) : H.getChannelWithoutCache(e, n) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
						}, H.getChannelWithoutCache = function(e, n) {
							e ? ne.getInstance().getOpenChannel(e, (function(t, s) {
								s ? S(null, s, n) : (H.upsert(t), S(H.cachedChannels[e], null, n))
							})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
						};
						var F = function() {
								this.channelCustomTypesFilter = [], this.superChannelFilter = k.superChannelFilter.ALL
							},
							k = function(e) {
								var t = {},
									s = 0,
									r = 0;
								this.parse = function(e) {
									var n = this;
									if (n.isDistinct = !!e.is_distinct && e.is_distinct, n.isPushEnabled = !!e.is_push_enabled && e.is_push_enabled, n.isHidden = !!e.hasOwnProperty("is_hidden") && e.is_hidden, n.myCountPreference = e.hasOwnProperty("count_preference") ? e.count_preference : k.CountPreference.ALL, n.unreadMessageCount = 0, n.unreadMentionCount = 0, g(n, parseInt(e.unread_message_count), parseInt(e.unread_mention_count)), e.hasOwnProperty("read_receipt"))
										for (var t in n.cachedReadReceiptStatus = {}, e.read_receipt) {
											var s = e.read_receipt[t];
											n.updateReadReceipt(t, parseInt(s))
										}
									e.hasOwnProperty("members") && (n.members = [], n.memberMap = {}, e.members.forEach((function(e) {
										var t = new j(e);
										n.members.push(t), n.memberMap[t.userId] = t
									}))), e.hasOwnProperty("member_state") ? n.myMemberState = e.member_state : n.myMemberState = "none", e.hasOwnProperty("my_role") ? n.myRole = e.my_role || k.Role.NONE : n.myRole = k.Role.NONE, e.hasOwnProperty("is_muted") ? "string" == typeof e.is_muted ? n.myMutedState = e.is_muted : "boolean" == typeof e.is_muted && (n.myMutedState = e.is_muted ? "muted" : "unmuted") : n.myMutedState = "unmuted", e.hasOwnProperty("member_count") && (n.memberCount = parseInt(e.member_count)), e.hasOwnProperty("joined_member_count") && (n.joinedMemberCount = parseInt(e.joined_member_count)), e.hasOwnProperty("last_message") && "object" == typeof e.last_message && e.last_message ? e.last_message instanceof L ? n.lastMessage = e.last_message : n.lastMessage = L.build(e.last_message, n) : n.lastMessage = null, e.hasOwnProperty("inviter") && null !== e.inviter && "object" == typeof e.inviter && !h(e.inviter) ? n.inviter = new B(e.inviter) : n.inviter = null, e.hasOwnProperty("is_super") && null !== e.is_super && "boolean" == typeof e.is_super ? n.isSuper = e.is_super : n.isSuper = !1, e.hasOwnProperty("is_public") && null !== e.is_public && "boolean" == typeof e.is_public ? n.isPublic = e.is_public : n.isPublic = !1
								}, this.refresh = function(e) {
									k.getChannelWithoutCache(this.url, (function(n, t) {
										if (v) {
											var s = n;
											n = t, t = s
										}
										t ? S(null, t, e) : S(n, null, e)
									}))
								}, this.update = function(e) {
									this._update(e), this.parse(e)
								}, this.updateChannel = function() {
									var e = this,
										n = Array.prototype.slice.call(arguments),
										t = null,
										s = null,
										r = null,
										a = null,
										i = null,
										o = null,
										l = null;
									switch ("function" == typeof n.slice(-1)[0] && (o = n.pop()), n.length) {
										case 1:
											if (!(n[0] instanceof ae)) return void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), o);
											var u = n[0];
											t = u.isDistinct, s = u.name, r = u.channelCover, a = u.data, i = u.customType, l = u.isPublic;
											break;
										case 3:
											t = e.isDistinct, s = n[0], r = n[1], a = n[2];
											break;
										case 4:
											t = n[0], s = n[1], r = n[2], a = n[3];
											break;
										case 5:
											t = n[0], s = n[1], r = n[2], a = n[3], i = n[4];
											break;
										default:
											return void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), o)
									}
									"string" != typeof s && null != s || "string" != typeof r && h(r) && null != r || "string" != typeof a && null != a || "boolean" != typeof t && null !== t || "boolean" != typeof l && null !== l || "string" != typeof i && null != i ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), o) : ne.getInstance().updateGroupChannel(e.url, t, s, r, a, i, l, (function(e, n) {
										if (n) S(null, n, o);
										else {
											var t = k.upsert(e);
											S(t, null, o)
										}
									}))
								}, this.resetMyHistory = function(e) {
									ue.getInstance().hasLoggedIn() ? ne.getInstance().resetMyHistory(this.url, (function(n, t) {
										t ? S(null, t, e) : S(n, null, e)
									})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
								}, this.invite = function(e, n) {
									if ("string" == typeof e && (e = [{
											userId: e
										}]), Array.isArray(e) && !h(e)) {
										var t = [];
										for (var s in e) {
											if ("object" != typeof e[s] || h(e[s])) {
												S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n);
												break
											}
											t.push(e[s].userId)
										}
										this.inviteWithUserIds(t, n)
									} else S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.inviteWithUserIds = function(e, n) {
									Array.isArray(e) && !h(e) ? ne.getInstance().groupChannelInvite(this.url, e, (function(e, t) {
										if (t) S(null, t, n);
										else {
											var s = k.upsert(e);
											S(s, null, n)
										}
									})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.acceptInvitation = function(e) {
									ne.getInstance().acceptInvitation(this.url, ue.getInstance().getCurrentUserId(), (function(n, t) {
										if (t) S(null, t, e);
										else {
											var s = k.upsert(n);
											s.myMemberState = "joined", k.cachedChannels[s.url] = s, S(s, null, e)
										}
									}))
								}, this.declineInvitation = function(e) {
									var n = this;
									ne.getInstance().declineInvitation(this.url, ue.getInstance().getCurrentUserId(), (function(t, s) {
										s ? S(null, s, e) : (n.myMemberState = "none", k.cachedChannels[n.url] = n, n.isPublic || k.removeCachedChannel(n.url), S(t, null, e))
									}))
								}, this.hide = function(e, n) {
									if (1 === arguments.length && "function" == typeof e && (n = e, e = !1), null != e || (e = !1), "boolean" == typeof e) {
										var t = this.url,
											s = this;
										ne.getInstance().groupChannelHide(t, ue.getInstance().getCurrentUserId(), e, (function(r, a) {
											if (a) S(null, a, n);
											else {
												s.isHidden = !0;
												var i = k.cachedChannels[t];
												i && (i.isHidden = !0, e && g(i, 0, 0), k.cachedChannels[t] = i), S(r, null, n)
											}
										}))
									} else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.join = function(e) {
									var n = this.url;
									ne.getInstance().publicGroupChannelJoin(n, ue.getInstance().getCurrentUserId(), (function(n, t) {
										if (t) S(null, t, e);
										else {
											var s = k.upsert(n);
											s.myMemberState = "joined", k.cachedChannels[s.url] = s, S(s, null, e)
										}
									}))
								}, this.leave = function(e) {
									var n = this.url;
									ne.getInstance().groupChannelLeave(n, ue.getInstance().getCurrentUserId(), (function(n, t) {
										S(null, t || null, e)
									}))
								}, this.markAsRead = function() {
									this._sendMarkAsRead(null)
								}, this._sendMarkAsRead = function(e) {
									var n = this,
										t = x.bRead(n.url);
									ue.getInstance().sendCommand(t, (function(t, s) {
										if (s) S(null, new I(s.message, s.code), e);
										else {
											if (n.unreadMessageCount > 0 || n.unreadMentionCount > 0)
												for (var r in g(n, 0, 0), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onChannelChanged(n);
											S(null, null, e)
										}
									}))
								}, this.getReadReceipt = function(e) {
									if (!(e instanceof L)) return n.log("message is not BaseMessage instance"), -1;
									if (e.messageType === L.MESSAGE_TYPE_ADMIN) return 0;
									var t = ue.getInstance().currentUser,
										s = 0,
										r = e.createdAt,
										a = this.members;
									for (var i in a) {
										var o = a[i].userId;
										t.userId === o || e.sender && e.sender.userId === o || this.cachedReadReceiptStatus[o] < r && s++
									}
									return this.isSuper ? 0 : s
								}, this.getReadStatus = function() {
									var e = {};
									if (!ue.getInstance().currentUser) return e;
									var n = this.members;
									for (var t in n) {
										var s = n[t],
											r = s.userId;
										if (s.userId !== ue.getInstance().getCurrentUserId()) {
											var a = this.cachedReadReceiptStatus[r];
											e[r] = {
												user: s,
												last_seen_at: parseInt(a)
											}
										}
									}
									return e
								}, this.updateReadReceipt = function(e, n) {
									var t = e,
										s = this.cachedReadReceiptStatus[t],
										r = n;
									(!s || s < r) && (this.cachedReadReceiptStatus[t] = r)
								}, this.startTyping = function() {
									var e = (new Date).getTime(),
										n = ue.getInstance().Options.typingIndicatorThrottle;
									if (("number" != typeof n || n < 1e3 || n > 9e3) && (n = 1e3), e - s >= n) {
										r = 0, s = e;
										var t = x.bTypeStart(this.url, s);
										ue.getInstance().sendCommand(t, null)
									}
								}, this.endTyping = function() {
									var e = (new Date).getTime(),
										n = ue.getInstance().Options.typingIndicatorThrottle;
									if (("number" != typeof n || n < 1e3 || n > 9e3) && (n = 1e3), e - r >= n) {
										s = 0, r = e;
										var t = x.bTypeEnd(this.url, r);
										ue.getInstance().sendCommand(t, null)
									}
								}, this.invalidateTypingStatus = function() {
									var e = !1,
										n = (new Date).getTime();
									for (var s in t) n - t[s] >= 1e4 && (delete t[s], e = !0);
									return e
								}, this.updateTypingStatus = function(e, n) {
									n ? t[e.userId] = (new Date).getTime() : delete t[e.userId]
								}, this.isTyping = function() {
									return 0 !== Object.keys(t).length
								}, this.getTypingMembers = function() {
									var e = [];
									for (var n in t) {
										var s = this.memberMap[n];
										this.memberMap[n] && e.push(s)
									}
									return e
								}, this.addMember = function(e) {
									if (!this.isSuper) {
										var n = this.removeMember(e);
										n && n.state === j.JOINED && (e.state = j.JOINED), this.memberMap[e.userId] = e, this.members.push(e), this.memberCount++, this.updateReadReceipt(e.userId, 0)
									}
								}, this.removeMember = function(e) {
									var n = null;
									if (!this.isSuper) {
										var t = e.userId;
										if (this.memberMap.hasOwnProperty(e.userId)) {
											for (var s in delete this.memberMap[e.userId], this.members) {
												var r = this.members[s];
												if (r.userId === t) {
													n = r, this.members.splice(s, 1);
													break
												}
											}
											this.memberCount--
										}
									}
									return n
								}, this.updateJoinedMemberCount = function() {
									if (!this.isSuper) {
										for (var e = 0, n = this.members.length, t = 0; t < n; t++) this.members[t].state === j.JOINED && e++;
										this.joinedMemberCount = e
									}
								};
								var a = 0;
								this.setLatestMemberCount = function(e, n, t) {
									"number" == typeof e && "number" == typeof n && "number" == typeof t && t >= a && (a = t, this.memberCount = e, this.joinedMemberCount = n)
								}, this.setPushPreference = function(e, n) {
									var t = this;
									ue.getInstance().hasLoggedIn() ? ne.getInstance().setPushPreference(ue.getInstance().getCurrentUserId(), this.url, e, (function(e, s) {
										s ? S(null, s, n) : (t.isPushEnabled = e.enable, S(e, null, n))
									})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
								}, this.getPushPreference = function(e) {
									var n = this;
									ue.getInstance().hasLoggedIn() ? ne.getInstance().getPushPreference(ue.getInstance().getCurrentUserId(), this.url, (function(t, s) {
										if (s) S(null, s, e);
										else if (e) {
											var r;
											try {
												r = t.enable
											} catch (e) {
												r = !1
											}
											n.isPushEnabled = r, S(r, null, e)
										}
									})) : S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
								}, this.setMyCountPreference = function(e, n) {
									if (ue.getInstance().hasLoggedIn())
										if ([k.CountPreference.ALL, k.CountPreference.UNREAD_MESSAGE_COUNT_ONLY, k.CountPreference.UNREAD_MENTION_COUNT_ONLY, k.CountPreference.OFF].indexOf(e) < 0) S(null, new I("Invalid parameters.", $.INVALID_PARAMETER), n);
										else {
											var t = this;
											ne.getInstance().setCountPreference(ue.getInstance().getCurrentUserId(), this.url, e, (function(e, s) {
												s ? S(null, s, n) : (t.myCountPreference = e.count_preference, g(t, t.unreadMessageCount, t.unreadMentionCount), S(t.myCountPreference, null, n))
											}))
										}
									else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n)
								}, this.createMemberListQuery = function() {
									var e = this.url;
									return new W(e)
								}, this.banUser = function(e, n, t, s) {
									e && e.hasOwnProperty("userId") && "string" == typeof t ? this.banUserWithUserId(e.userId, n, t, s) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), s)
								}, this.banUserWithUserId = function(e, n, t, s) {
									e && "string" == typeof e && "string" == typeof t ? ne.getInstance().banUser(this.url, e, t, n, !0, (function(e, n) {
										S(null, n || null, s)
									})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), s)
								}, this.unbanUser = function(e, n) {
									e && e.hasOwnProperty("userId") ? this.unbanUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.unbanUserWithUserId = function(e, n) {
									e && "string" == typeof e ? ne.getInstance().unbanUser(this.url, e, !0, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.muteUser = function(e, n) {
									e && e.hasOwnProperty("userId") ? this.muteUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.muteUserWithUserId = function(e, n) {
									e && "string" == typeof e ? ne.getInstance().muteUser(this.url, e, !0, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.unmuteUser = function(e, n) {
									e && e.hasOwnProperty("userId") ? this.unmuteUserWithUserId(e.userId, n) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.unmuteUserWithUserId = function(e, n) {
									e && "string" == typeof e ? ne.getInstance().unmuteUser(this.url, e, !0, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.freeze = function(e) {
									ne.getInstance().freeze(this.url, !0, !0, (function(n, t) {
										t ? S(null, t, e) : (k.upsert(n), S(null, null, e))
									}))
								}, this.unfreeze = function(e) {
									ne.getInstance().freeze(this.url, !0, !1, (function(n, t) {
										t ? S(null, t, e) : (k.upsert(n), S(null, null, e))
									}))
								}, this.createBannedUserListQuery = function() {
									return new X(X.BANNED_USER, this)
								}, this.channelType = w.CHANNEL_TYPE_GROUP, this.isDistinct = !1, this.isSuper = !1, this.isPublic = !1, this.unreadMessageCount = 0, this.inviter = null, this.members = [], this.memberMap = {}, this.lastMessage = {}, this.memberCount = 0, this.joinedMemberCount = 0, this.cachedReadReceiptStatus = {}, this.isPushEnabled, this.isHidden = !1, e && (this._update(e), this.parse(e))
							};
						p(w, k), k.buildFromSerializedData = function(e) {
							var n = m(e);
							return new k({
								channel_url: n.url,
								name: n.name,
								cover_url: n.coverUrl,
								data: n.data,
								custom_type: n.customType,
								created_at: n.createdAt / 1e3,
								is_distinct: n.isDistinct,
								is_super: n.isSuper,
								is_public: n.isPublic,
								freeze: n.isFrozen,
								is_ephemeral: n.isEphemeral,
								unread_message_count: n.unreadMessageCount,
								unread_mention_count: n.unreadMentionCount,
								is_push_enabled: n.isPushEnabled,
								count_preference: n.myCountPreference,
								is_hidden: n.isHidden,
								member_count: n.memberCount,
								joined_member_count: n.joinedMemberCount,
								member_state: n.myMemberState,
								my_role: n.myRole,
								is_muted: n.myMutedState,
								members: n.members.map((function(e) {
									return j.build(B.build(e.userId, e.nickname, e.profileUrl, e.connectionStatus, e.lastSeenAt, e.metaData, e.isActive, e.friendDiscoveryKey, e.friendName), e.state, e.isBlockedByMe, e.isBlockingMe)
								})),
								last_message: function(e) {
									return null != e && "object" == typeof e ? e.messageType === L.MESSAGE_TYPE_USER ? new D(D.build(e.reqId, e.messageId, e.sender, {
										url: e.channelUrl,
										channelType: e.channelType
									}, e.message, e.data, e.customType, e.translations, e.createdAt, e.updatedAt, e.mentionType, e.mentionedUsers)) : e.messageType === L.MESSAGE_TYPE_FILE ? new M(M.build(e.reqId, e.messageId, e.sender, {
										url: e.channelUrl,
										channelType: e.channelType
									}, e.url, e.name, e.type, e.size, e.data, e.customType, e.createdAt, e.thumbnails, e.requireAuth, e.updatedAt, e.mentionType, e.mentionedUsers)) : new b(b.build(e.messageId, {
										url: e.channelUrl,
										channelType: e.channelType
									}, e.message, e.data, e.customType, e.translations, e.createdAt, e.updatedAt, e.mentionType, e.mentionedUsers)) : null
								}(n.lastMessage),
								read_receipt: n.cachedReadReceiptStatus,
								inviter: null !== n.inviter && void 0 !== n.inviter && "object" == typeof n.inviter ? B.build(n.inviter.userId, n.inviter.nickname, n.inviter.profileUrl, n.inviter.connectionStatus, n.inviter.lastSeenAt, n.inviter.metaData, n.inviter.isActive, n.inviter.friendDiscoveryKey, n.inviter.friendName) : null
							})
						}, k.createMyGroupChannelListQuery = function() {
							return new Q(ue.getInstance().currentUser)
						}, k.createPublicGroupChannelListQuery = function() {
							return new z
						}, k.memberState = {
							ALL: 0,
							JOINED: 1,
							INVITED: 2,
							INVITED_BY_FRIEND: 3,
							INVITED_BY_NON_FRIEND: 4
						}, k.memberStateFilter = {
							ALL: "all",
							JOINED: "joined_only",
							INVITED: "invited_only",
							INVITED_BY_FRIEND: "invited_by_friend",
							INVITED_BY_NON_FRIEND: "invited_by_non_friend"
						}, k.superChannelFilter = {
							ALL: "all",
							SUPER: "super",
							NON_SUPER: "nonsuper"
						}, k.publicChannelFilter = {
							ALL: "all",
							PUBLIC: "public",
							PRIVATE: "private"
						}, k.Role = {
							OPERATOR: "operator",
							NONE: "none"
						}, k.UnreadItemKey = {
							GROUP_CHANNEL_UNREAD_MENTION_COUNT: "group_channel_unread_mention_count",
							NONSUPER_UNREAD_MENTION_COUNT: "non_super_group_channel_unread_mention_count",
							SUPER_UNREAD_MENTION_COUNT: "super_group_channel_unread_mention_count",
							GROUP_CHANNEL_UNREAD_MESSAGE_COUNT: "group_channel_unread_message_count",
							NONSUPER_UNREAD_MESSAGE_COUNT: "non_super_group_channel_unread_message_count",
							SUPER_UNREAD_MESSAGE_COUNT: "super_group_channel_unread_message_count",
							GROUP_CHANNEL_INVITATION_COUNT: "group_channel_invitation_count",
							NONSUPER_INVITATION_COUNT: "non_super_group_channel_invitation_count",
							SUPER_INVITATION_COUNT: "super_group_channel_invitation_count"
						}, k.CountPreference = {
							ALL: "all",
							UNREAD_MESSAGE_COUNT_ONLY: "unread_message_count_only",
							UNREAD_MENTION_COUNT_ONLY: "unread_mention_count_only",
							OFF: "off"
						}, k.getChannelCount = function(e, n) {
							return "function" == typeof e && 1 === arguments.length && (n = e, e = k.memberState.ALL), e !== k.memberState.ALL && e !== k.memberState.JOINED && e !== k.memberState.INVITED && e !== k.memberState.INVITED_BY_FRIEND && e !== k.memberState.INVITED_BY_NON_FRIEND ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : ue.getInstance().hasLoggedIn() ? void ne.getInstance().getGroupChannelCount(ue.getInstance().getCurrentUserId(), e, (function(e, t) {
								if (t) S(null, t, n);
								else {
									var s = parseInt(e.group_channel_count);
									S(s, null, n)
								}
							})) : void(n && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n))
						}, k.getUnreadItemCount = function(e, n) {
							if (!Array.isArray(e) || e.length < 1) S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n);
							else {
								for (var t = 0; t < e.length; t++)
									if ([k.UnreadItemKey.SUPER_UNREAD_MESSAGE_COUNT, k.UnreadItemKey.NONSUPER_UNREAD_MESSAGE_COUNT, k.UnreadItemKey.GROUP_CHANNEL_UNREAD_MESSAGE_COUNT, k.UnreadItemKey.SUPER_UNREAD_MENTION_COUNT, k.UnreadItemKey.NONSUPER_UNREAD_MENTION_COUNT, k.UnreadItemKey.GROUP_CHANNEL_UNREAD_MENTION_COUNT, k.UnreadItemKey.SUPER_INVITATION_COUNT, k.UnreadItemKey.NONSUPER_INVITATION_COUNT, k.UnreadItemKey.GROUP_CHANNEL_INVITATION_COUNT].indexOf(e[t]) < 0) return void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n);
								var s = e.filter((function(n, t) {
									return e.indexOf(n) === t
								}));
								ne.getInstance().getUnreadItemCount(ue.getInstance().getCurrentUserId(), s, (function(e, t) {
									t ? S(null, t, n) : S(e, null, n)
								}))
							}
						}, k.getTotalUnreadMessageCount = function(e, n) {
							"function" == typeof e && (n = e, e = null);
							var t = e,
								s = k.superChannelFilter.ALL;
							e instanceof F && (t = e.channelCustomTypesFilter, s = e.superChannelFilter), null != t && !Array.isArray(t) || "string" != typeof s && [k.superChannelFilter.ALL, k.superChannelFilter.SUPER, k.superChannelFilter.NON_SUPER].indexOf(s) < 0 ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : ne.getInstance().getTotalUnreadMessageCount(ue.getInstance().getCurrentUserId(), t, s, (function(e, t) {
								if (t) S(null, t, n);
								else {
									var s = parseInt(e.unread_count);
									S(s, null, n)
								}
							}))
						}, k.getTotalUnreadChannelCount = function(e) {
							ne.getInstance().getTotalUnreadChannelCount(ue.getInstance().getCurrentUserId(), (function(n, t) {
								if (t) S(null, t, e);
								else {
									var s = parseInt(n.unread_count);
									S(s, null, e)
								}
							}))
						}, k.createChannel = function() {
							var e = null,
								n = [],
								t = null,
								s = null,
								r = null,
								a = null,
								i = null,
								o = null,
								l = null,
								u = {
									isPublic: null,
									channelUrl: null
								},
								c = [],
								d = null;
							switch (arguments.length) {
								case 2:
									if (arguments[0] instanceof ae) {
										var _ = arguments[0];
										n = _._inviteUserIds, e = [], t = _.isDistinct, s = _.isSuper, r = _.name, a = _.channelCover, i = _.data, l = _.customType, c = _._operatorIds, u.isPublic = _.isPublic, u.channelUrl = _.channelUrl, d = _.isEphemeral, o = arguments[1];
										break
									}
									e = arguments[0], t = !1, o = arguments[1];
									break;
								case 3:
									e = arguments[0], t = arguments[1], o = arguments[2];
									break;
								case 4:
									e = arguments[0], t = arguments[1], l = arguments[2], o = arguments[3];
									break;
								case 6:
									e = arguments[0], t = arguments[1], r = arguments[2], a = arguments[3], i = arguments[4], o = arguments[5];
									break;
								case 7:
									e = arguments[0], t = arguments[1], r = arguments[2], a = arguments[3], i = arguments[4], l = arguments[5], o = arguments[6]
							}!Array.isArray(e) || "boolean" != typeof t && null !== t || "boolean" != typeof s && null !== s || "boolean" != typeof d && null !== d || "boolean" != typeof u.isPublic && null !== u.isPublic || "string" != typeof u.channelUrl && null !== u.channelUrl || "string" != typeof r && null != r || "string" != typeof a && h(a) && null != a || "string" != typeof i && null != i || "string" != typeof l && null != l ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), o) : (e.forEach((function(e) {
								n.push(e.userId)
							})), k.createChannelWithUserIds(n, t, r, a, i, l, s, u, c, d, o))
						}, k.createChannelWithUserIds = function() {
							var e = null,
								n = null,
								t = null,
								s = null,
								r = null,
								a = null,
								i = null,
								o = null,
								l = [],
								u = {
									isPublic: null,
									channelUrl: null
								},
								c = null;
							switch (arguments.length) {
								case 2:
									e = arguments[0], n = !1, a = arguments[1];
									break;
								case 3:
									e = arguments[0], n = arguments[1], a = arguments[2];
									break;
								case 4:
									e = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
									break;
								case 6:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], a = arguments[5];
									break;
								case 7:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], i = arguments[5], a = arguments[6];
									break;
								case 8:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], i = arguments[5], o = arguments[6], a = arguments[7];
									break;
								case 9:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], i = arguments[5], o = arguments[6], u.isPublic = arguments[7].isPublic, u.channelUrl = arguments[7].channelUrl, a = arguments[8];
									break;
								case 10:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], i = arguments[5], o = arguments[6], u.isPublic = arguments[7].isPublic, u.channelUrl = arguments[7].channelUrl, l = arguments[8], a = arguments[9];
									break;
								case 11:
									e = arguments[0], n = arguments[1], t = arguments[2], s = arguments[3], r = arguments[4], i = arguments[5], o = arguments[6], u.isPublic = arguments[7].isPublic, u.channelUrl = arguments[7].channelUrl, l = arguments[8], c = arguments[9], a = arguments[10]
							}
							if (ue.getInstance().hasLoggedIn())
								if (!Array.isArray(e) || "boolean" != typeof n && null !== n || "boolean" != typeof o && null !== o || "boolean" != typeof c && null !== c || "boolean" != typeof u.isPublic && null !== u.isPublic || "string" != typeof u.channelUrl && null !== u.channelUrl || "string" != typeof t && null != t || "string" != typeof s && h(s) && null != s || "string" != typeof r && null != r || "string" != typeof i && null != i) S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), a);
								else {
									var d = e.filter((function(e, n, t) {
											return n === t.indexOf(e)
										})),
										_ = ue.getInstance().currentUser;
									d.push(_.userId), ne.getInstance().createGroupChannel(d, n, t, s, r, i, o, u, l, c, (function(e, n) {
										if (n) S(null, n, a);
										else {
											var t = new k(e);
											k.cachedChannels[t.url] = t, S(t, null, a)
										}
									}))
								}
							else S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), a)
						}, k.cachedChannels = {}, k.clearCache = function() {
							k.cachedChannels = {}
						}, k.removeCachedChannel = function(e) {
							delete k.cachedChannels[e]
						}, k.upsert = function(e) {
							var n = new k(e);
							if (k.cachedChannels.hasOwnProperty(n.url)) {
								if (n.isEphemeral) {
									var t = k.cachedChannels[n.url];
									e.last_message = t.lastMessage, e.unread_message_count = t.unreadMessageCount
								}
								k.cachedChannels[n.url].update(e)
							} else k.cachedChannels[n.url] = n;
							return k.cachedChannels[n.url]
						}, k.getChannelWithoutCache = function(e, n) {
							e ? ne.getInstance().getGroupChannel(e, !0, !0, (function(e, t) {
								if (t) S(null, t, n);
								else {
									var s = k.upsert(e);
									S(s, null, n)
								}
							})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
						}, k.getChannel = function(e, n) {
							e ? k.cachedChannels.hasOwnProperty(e) ? S(k.cachedChannels[e], null, n) : k.getChannelWithoutCache(e, n) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
						}, k.markAsReadAllLastSentAt, k.markAsReadAll = function(e) {
							ue.getInstance().markAsReadAll(e)
						};
						var G = function(e) {
							e && (this.category = e.hasOwnProperty("cat") ? parseInt(e.cat) : 0, this.data = e.hasOwnProperty("data") ? e.data : null, this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : w.CHANNEL_TYPE_GROUP), this.isGroupChannel = function() {
								return this.channelType === w.CHANNEL_TYPE_GROUP
							}, this.isOpenChannel = function() {
								return this.channelType === w.CHANNEL_TYPE_OPEN
							}
						};
						G.CATEGORY_NONE = 0, G.CATEGORY_CHANNEL_ENTER = 10102, G.CATEGORY_CHANNEL_EXIT = 10103, G.CATEGORY_USER_CHANNEL_MUTE = 10201, G.CATEGORY_USER_CHANNEL_UNMUTE = 10200, G.CATEGORY_USER_CHANNEL_BAN = 10601, G.CATEGORY_USER_CHANNEL_UNBAN = 10600, G.CATEGORY_CHANNEL_FREEZE = 10701, G.CATEGORY_CHANNEL_UNFREEZE = 10700, G.CATEGORY_TYPING_START = 10900, G.CATEGORY_TYPING_END = 10901, G.CATEGORY_CHANNEL_JOIN = 1e4, G.CATEGORY_CHANNEL_LEAVE = 10001, G.CATEGORY_CHANNEL_INVITE = 10020, G.CATEGORY_CHANNEL_DECLINE_INVITE = 10022, G.CATEGORY_CHANNEL_PROP_CHANGED = 11e3, G.CATEGORY_CHANNEL_DELETED = 12e3, G.CATEGORY_CHANNEL_META_DATA_CHANGED = 11100, G.CATEGORY_CHANNEL_META_COUNTERS_CHANGED = 11200, G.CATEGORY_CHANNEL_HIDE = 13e3;
						var V = function(e) {
							e && (this.category = e.hasOwnProperty("cat") ? parseInt(e.cat) : 0)
						};
						V.CATEGORY_USER_BLOCK = 20001, V.CATEGORY_USER_UNBLOCK = 2e4, V.CATEGORY_FRIEND_DISCOVERED = 20900;
						var Y = function(e) {
								e && (this.reader = new B(e.user), this.timestamp = parseInt(e.ts), this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : w.CHANNEL_TYPE_GROUP)
							},
							B = function(e) {
								this.nickname = "", this.profileUrl = "", this.userId = "", this.connectionStatus = "", this.lastSeenAt = null, this.metaData = {}, this.isActive = !0, this.friendDiscoveryKey = null, this.friendName = null, this.getOriginalProfileUrl = function() {
									var e = "";
									if (((e = (e = this.profileUrl.indexOf("://") > -1 ? this.profileUrl.split("/")[2] : this.profileUrl.split("/")[0]).split("?")[0]).indexOf("sendbird.com") > -1 || e.indexOf("intoz.com") > -1) && this.profileUrl.indexOf(e + "/profile_images/") > -1) {
										var n = this.profileUrl.replace("profile_images/", "");
										return n === this.profileUrl ? "" : n
									}
									return ""
								}, this._update = function(e) {
									e.hasOwnProperty("guest_id") && (this.userId = String(e.guest_id)), e.hasOwnProperty("user_id") && (this.userId = String(e.user_id)), e.hasOwnProperty("name") && (this.nickname = String(e.name)), e.hasOwnProperty("nickname") && (this.nickname = String(e.nickname)), e.hasOwnProperty("image") && (this.profileUrl = String(e.image)), e.hasOwnProperty("profile_url") && (this.profileUrl = String(e.profile_url)), e.hasOwnProperty("is_online") ? e.is_online === B.NON_AVAILABLE ? this.connectionStatus = B.NON_AVAILABLE : this.connectionStatus = e.is_online ? B.ONLINE : B.OFFLINE : this.connectionStatus = B.NON_AVAILABLE, e.hasOwnProperty("last_seen_at") ? this.lastSeenAt = parseInt(e.last_seen_at) : this.lastSeenAt = 0, e.hasOwnProperty("metadata") ? this.metaData = e.metadata : this.metaData = {}, e.hasOwnProperty("is_active") ? this.isActive = void 0 === e.is_active || e.is_active : this.isActive = !0, e.hasOwnProperty("friend_discovery_key") ? this.friendDiscoveryKey = e.friend_discovery_key : this.friendDiscoveryKey = null, e.hasOwnProperty("friend_name") ? this.friendName = e.friend_name : this.friendName = null
								}, this._updateMetaData = function(e, n) {
									var t = this,
										s = Object.keys(e);
									n ? s.forEach((function(e) {
										delete t.metaData[e]
									})) : s.forEach((function(n) {
										t.metaData[n] = e[n]
									}))
								}, this.createMetaData = function(e, n) {
									var t = this;
									return "function" == typeof e && 1 === arguments.length && (n = e, e = {}), "object" != typeof e || h(e) || Array.isArray(e) ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n) : ue.getInstance().hasLoggedIn() ? void ne.getInstance().createUserMetaData(t.userId, e, (function(e, s) {
										s ? S(null, s, n) : (t._updateMetaData(e), S(e, null, n))
									})) : void(n && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n))
								}, this.updateMetaData = function(e, n, t) {
									var s = this;
									return "function" == typeof e && 1 === arguments.length && (t = e, e = {}), "function" == typeof n && 2 === arguments.length && (t = n, n = !1), "object" != typeof e || h(e) || Array.isArray(e) || "boolean" != typeof n ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : ue.getInstance().hasLoggedIn() ? void ne.getInstance().updateUserMetaData(s.userId, e, n, (function(e, n) {
										n ? S(null, n, t) : (s._updateMetaData(e), S(e, null, t))
									})) : void(t && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), t))
								}, this.deleteAllMetaData = function(e) {
									var n = this,
										t = n.metaData;
									ue.getInstance().hasLoggedIn() ? ne.getInstance().deleteAllUserMetaData(n.userId, (function(s, r) {
										r ? S(null, r, e) : (n._updateMetaData(t, !0), S(s, null, e))
									})) : e && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), e)
								}, this.deleteMetaData = function(e, n) {
									var t = this;
									if ("function" == typeof e && 1 === arguments.length && (n = e, e = null), "string" == typeof e)
										if (ue.getInstance().hasLoggedIn()) {
											var s = {};
											s[e] = "", ne.getInstance().deleteUserMetaData(t.userId, e, (function(e, r) {
												r ? S(null, r, n) : (t._updateMetaData(s, !0), S(e, null, n))
											}))
										} else n && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n);
									else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.serialize = function() {
									var e = JSON.parse(JSON.stringify(this));
									return f(e)
								}, e && this._update(e)
							};
						B.NON_AVAILABLE = "nonavailable", B.ONLINE = "online", B.OFFLINE = "offline", B.build = function(e, n, t, s, r, a, i, o, l) {
							return {
								user_id: e,
								nickname: n,
								profile_url: t,
								is_online: s,
								last_seen_at: r,
								metadata: a,
								is_active: i,
								friend_discovery_key: o,
								friend_name: l
							}
						}, B.buildFromSerializedData = function(e) {
							var n = m(e);
							return new B(B.build(n.userId, n.nickname, n.profileUrl, n.connectionStatus, n.lastSeenAt, n.metaData, n.isActive, n.friendDiscoveryKey, n.friendName))
						};
						var j = function(e) {
							this.state = "", this.isBlockedByMe = !1, this.isBlockingMe = !1, this.parse = function(e) {
								this.state = e.state, e.hasOwnProperty("is_blocked_by_me") && (this.isBlockedByMe = e.is_blocked_by_me), e.hasOwnProperty("is_blocking_me") && (this.isBlockingMe = e.is_blocking_me)
							}, e && (this._update(e), this.parse(e))
						};
						p(B, j), j.JOINED = "joined", j.INVITED = "invited", j.build = function(e, n, t, s) {
							var r = e;
							return r.state = n, r.is_blocked_by_me = t, r.is_blocking_me = s, r
						}, j.buildFromSerializedData = function(e) {
							var n = m(e);
							return new j(j.build(B.build(n.userId, n.nickname, n.profileUrl, n.connectionStatus, n.lastSeenAt, n.metaData, n.isActive, n.friendDiscoveryKey, n.friendName), n.state, n.isBlockedByMe, n.isBlockingMe))
						};
						var x = function(e, n, t) {
							this.isAckRequired = function() {
								return "MESG" === this.command || "FILE" === this.command || "ENTR" === this.command || "EXIT" === this.command || "READ" === this.command || "MEDI" === this.command || "FEDI" === this.command
							}, this.encode = function() {
								return this.command + this.payload + "\n"
							}, this.decode = function(e) {
								e = e.trim(), this.command = e.substring(0, 4), this.payload = e.substring(4)
							}, this.getJsonElement = function() {
								return JSON.parse(this.payload)
							}, this.isRequestIdCommand = function() {
								return this.isAckRequired() || "EROR" === this.command
							}, this.command, this.payload, this.requestId;
							var s, r = this;
							if (0 !== arguments.length) switch (arguments.length) {
								case 1:
									var a = arguments[0];
									if (!a || a.length <= 4) return r.command = "NOOP", void(r.payload = "{}");
									if (a = a.trim(), r.command = a.substring(0, 4), r.payload = a.substring(4), r.isRequestIdCommand()) {
										var i = r.getJsonElement();
										i && (r.requestId = i.hasOwnProperty("req_id") ? i.req_id : "")
									}
									break;
								case 3:
									s = arguments[2];
								case 2:
									var o = arguments[0],
										l = arguments[1];
									s = s || "", r.command = o, r.requestId = s, r.requestId || r.isRequestIdCommand() && (r.requestId = x.generateRequestId()), l.req_id = r.requestId, r.payload = JSON.stringify(l)
							}
						};
						x.bMessage = function(e, n, t, s, r, a, i, o) {
							var l = {};
							return l.channel_url = e, l.message = n, l.data = t, l.mention_type = r, l.mentioned_user_ids = [], r === ie.MentionType.CHANNEL ? l.mentioned_user_ids = [] : Array.isArray(a) && a.length > 0 && (l.mentioned_user_ids = a), s && (l.custom_type = s), i.length > 0 && (l.target_langs = i), o && o !== oe.PushNotificationDeliveryOption.DEFAULT && (l.push_option = o), new x("MESG", l)
						}, x.bRead = function(e) {
							var n = {};
							return n.channel_url = e, new x("READ", n)
						}, x.bTypeStart = function(e, n) {
							var t = {};
							return t.channel_url = e, t.time = n, new x("TPST", t)
						}, x.bTypeEnd = function(e, n) {
							var t = {};
							return t.channel_url = e, t.time = n, new x("TPEN", t)
						}, x.bFile = function(e, n, t, s, r, a, i, o, l, u, c, d, h) {
							var _ = {};
							return _.channel_url = n, _.url = t, _.name = s || "", _.type = r || "", _.size = a || 0, _.custom = i, o && (_.custom_type = o), l && (_.thumbnails = l), u && (_.require_auth = u), _.mention_type = c, _.mentioned_user_ids = [], c === ie.MentionType.CHANNEL ? _.mentioned_user_ids = [] : Array.isArray(d) && d.length > 0 && (_.mentioned_user_ids = d), h && h !== le.PushNotificationDeliveryOption.DEFAULT && (_.push_option = h), new x("FILE", _, e)
						}, x.bPing = function() {
							var e = {};
							return e.id = (new Date).getTime(), new x("PING", e)
						}, x.bEnter = function(e) {
							var n = {};
							return n.channel_url = e, new x("ENTR", n)
						}, x.bExit = function(e) {
							var n = {};
							return n.channel_url = e, new x("EXIT", n)
						}, x.bUpdateUserMessage = function(e, n, t, s, r) {
							var a = {};
							return a.channel_url = e, a.msg_id = n, null != t && void 0 !== t && (a.message = t), null != s && void 0 !== s && (a.data = s), null != r && void 0 !== r && (a.custom_type = r), new x("MEDI", a)
						}, x.bUpdateFileMessage = function(e, n, t, s) {
							var r = {};
							return r.channel_url = e, r.msg_id = n, null != t && void 0 !== t && (r.data = t), null != s && void 0 !== s && (r.custom_type = s), new x("FEDI", r)
						}, x.requestIdSeed = (new Date).getTime(), x.generateRequestId = function() {
							return x.requestIdSeed++, String(x.requestIdSeed)
						};
						var K = function(e) {
								this.isLoading = !1, this.hasNext = !0, this.limit = 20;
								var n = "",
									t = this;
								this.next = function(s) {
									return t.hasNext ? t.isLoading ? void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), s) : "number" != typeof t.limit || t.limit < 1 ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), s) : (t.isLoading = !0, void ne.getInstance().loadOperatorList(e.url, e.isOpenChannel(), n, t.limit, (function(e, r) {
										if (r) return t.isLoading = !1, void S(null, r, s);
										var a = e;
										(!(n = String(a.next)) || n.length <= 0) && (t.hasNext = !1);
										var i = a.operators.map((function(e) {
											return new B(e)
										}));
										t.isLoading = !1, S(i, null, s)
									}))) : void S([], null, s)
								}
							},
							W = function(e) {
								this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.mutedMemberFilter = W.MUTED_MEMBER_FILTER.ALL, this.operatorFilter = W.OPERATOR_FILTER.ALL, this.memberStateFilter = k.memberStateFilter.ALL, this.nicknameStartsWithFilter = null;
								var n = W.Order.MEMBER_NICKNAME_ALPHABETICAL,
									t = "",
									s = this;
								this.next = function(r) {
									return s.hasNext ? s.isLoading ? void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), r) : "number" != typeof s.limit || s.limit < 1 || "string" != typeof s.mutedMemberFilter || [W.MUTED_MEMBER_FILTER.ALL, W.MUTED_MEMBER_FILTER.MUTED, W.MUTED_MEMBER_FILTER.UNMUTED].indexOf(s.mutedMemberFilter.toLowerCase()) < 0 || "string" != typeof s.operatorFilter || [W.OPERATOR_FILTER.ALL, W.OPERATOR_FILTER.OPERATOR, W.OPERATOR_FILTER.NONOPERATOR].indexOf(s.operatorFilter.toLowerCase()) < 0 || "string" != typeof s.memberStateFilter || [k.memberStateFilter.ALL, k.memberStateFilter.JOINED, k.memberStateFilter.INVITED, k.memberStateFilter.INVITED_BY_FRIEND, k.memberStateFilter.INVITED_BY_NON_FRIEND].indexOf(s.memberStateFilter.toLowerCase()) < 0 || null !== s.nicknameStartsWithFilter && "string" != typeof s.nicknameStartsWithFilter ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), r) : (s.isLoading = !0, void ne.getInstance().loadGroupChannelMemberList(e, t, s.limit, s.mutedMemberFilter, s.operatorFilter, s.memberStateFilter, s.nicknameStartsWithFilter, n, (function(e, n) {
										if (n) return s.isLoading = !1, void S(null, n, r);
										var a = e;
										(!(t = String(a.next)) || t.length <= 0) && (s.hasNext = !1);
										var i = a.members.map((function(e) {
											return new j(e)
										}));
										s.isLoading = !1, S(i, null, r)
									}))) : void S([], null, r)
								}
							};
						W.MUTED_MEMBER_FILTER = {
							ALL: "all",
							MUTED: "muted",
							UNMUTED: "unmuted"
						}, W.OPERATOR_FILTER = {
							ALL: "all",
							OPERATOR: "operator",
							NONOPERATOR: "nonoperator"
						}, W.Order = {
							MEMBER_NICKNAME_ALPHABETICAL: "member_nickname_alphabetical"
						};
						var Q = function(e) {
							this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !1, this.order = Q.ORDER_LATEST_LAST_MESSAGE, this.userIdsFilter = [], this.userIdsFilterExactMatch = !1, this.queryType = "AND";
							var n = {
								userIds: [],
								includeMode: !0,
								queryType: z.USER_IDS_INCLUDE_QUERY_TYPE.AND
							};
							this._userIdsExactFilter = [], this._userIdsIncludeFilter = [], this._userIdsIncludeFilterQueryType = z.USER_IDS_INCLUDE_QUERY_TYPE.AND, c ? (this.userIdsExactFilter = this._userIdsExactFilter, this.userIdsIncludeFilter = this._userIdsIncludeFilter, this.userIdsIncludeFilterQueryType = this._userIdsIncludeFilterQueryType) : (Object.defineProperty(this, "userIdsExactFilter", {
								get: function() {
									return this._userIdsExactFilter
								},
								set: function(e) {
									Array.isArray(e) && (this._userIdsExactFilter = e, this._userIdsIncludeFilter = [], n = {
										userIds: this._userIdsExactFilter,
										includeMode: !1
									})
								}
							}), Object.defineProperty(this, "userIdsIncludeFilter", {
								get: function() {
									return this._userIdsIncludeFilter
								},
								set: function(e) {
									Array.isArray(e) && (this._userIdsIncludeFilter = e, this._userIdsExactFilter = [], n = {
										userIds: this._userIdsIncludeFilter,
										includeMode: !0
									})
								}
							}), Object.defineProperty(this, "userIdsIncludeFilterQueryType", {
								get: function() {
									return this._userIdsIncludeFilterQueryType
								},
								set: function(e) {
									this._userIdsIncludeFilterQueryType = e, n = {
										queryType: this._userIdsIncludeFilterQueryType
									}
								}
							})), this.nicknameContainsFilter = "", this.channelNameContainsFilter = "", this.memberStateFilter = k.memberStateFilter.ALL, this.customTypeFilter = "", this.customTypesFilter = [], this.channelUrlsFilter = [], this.superChannelFilter = k.superChannelFilter.ALL, this.publicChannelFilter = k.publicChannelFilter.ALL, this.customTypeStartsWithFilter = null;
							var t = e,
								s = "",
								r = this;
							this.next = function(e) {
								if (r.hasNext)
									if (r.isLoading) S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), e);
									else if (null !== r.nicknameContainsFilter && void 0 !== r.nicknameContainsFilter || (r.nicknameContainsFilter = ""), null !== r.channelNameContainsFilter && void 0 !== r.channelNameContainsFilter || (r.channelNameContainsFilter = ""), null === r.customTypeStartsWithFilter || "string" == typeof r.customTypeStartsWithFilter)
									if (!Array.isArray(r._userIdsExactFilter) || !Array.isArray(r._userIdsIncludeFilter) || "string" != typeof r._userIdsIncludeFilterQueryType || [z.USER_IDS_INCLUDE_QUERY_TYPE.AND, z.USER_IDS_INCLUDE_QUERY_TYPE.OR].indexOf(r._userIdsIncludeFilterQueryType.toUpperCase()) < 0) S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e);
									else {
										if ("number" == typeof r.memberStateFilter) {
											if (typeof r.memberStateFilter < 0 || typeof r.memberStateFilter > 4) return void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e);
											r.memberStateFilter = ["all", "joined_only", "invited_only", "invited_by_friend", "invited_by_non_friend"][r.memberStateFilter]
										}!_(r.limit) || !Array.isArray(r.userIdsFilter) || "boolean" != typeof r.includeEmpty || "boolean" != typeof r.userIdsFilterExactMatch || "string" != typeof r.customTypeFilter || !Array.isArray(r.customTypesFilter) || "string" != typeof r.queryType || ["AND", "OR"].indexOf(r.queryType.toUpperCase()) < 0 || "string" != typeof r.order || [Q.ORDER_CHRONOLOGICAL, Q.ORDER_LATEST_LAST_MESSAGE, Q.CHANNEL_NAME_ALPHABETICAL].indexOf(r.order.toLowerCase()) < 0 || "string" != typeof r.memberStateFilter || [k.memberStateFilter.ALL, k.memberStateFilter.JOINED, k.memberStateFilter.INVITED, k.memberStateFilter.INVITED_BY_FRIEND, k.memberStateFilter.INVITED_BY_NON_FRIEND].indexOf(r.memberStateFilter.toLowerCase()) < 0 || "string" != typeof r.nicknameContainsFilter || "string" != typeof r.channelNameContainsFilter || !Array.isArray(r.channelUrlsFilter) || "string" != typeof r.superChannelFilter || [k.superChannelFilter.ALL, k.superChannelFilter.SUPER, k.superChannelFilter.NON_SUPER].indexOf(r.superChannelFilter.toLowerCase()) < 0 || "string" != typeof r.publicChannelFilter || [k.publicChannelFilter.ALL, k.publicChannelFilter.PUBLIC, k.publicChannelFilter.PRIVATE].indexOf(r.publicChannelFilter.toLowerCase()) < 0 ? S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e) : (Array.isArray(r.userIdsFilter) && r.userIdsFilter.length > 0 && (n = {
											userIds: r.userIdsFilter,
											includeMode: !r.userIdsFilterExactMatch,
											queryType: r.queryType
										}), r.isLoading = !0, ne.getInstance().loadUserGroupChannelList(t.userId, s, r.limit, r.includeEmpty, r.order, n, r.nicknameContainsFilter, r.channelNameContainsFilter, r.channelUrlsFilter, r.customTypeFilter, r.customTypesFilter, r.customTypeStartsWithFilter, r.memberStateFilter, r.superChannelFilter, r.publicChannelFilter, (function(n, t) {
											if (t) return r.isLoading = !1, void S(null, t, e);
											var a = n;
											(!(s = String(a.next)) || s.length <= 0) && (r.hasNext = !1);
											var i = a.channels,
												o = [];
											for (var l in i) {
												var u = k.upsert(i[l]);
												o.push(u)
											}
											r.isLoading = !1, S(o, null, e)
										})))
									}
								else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e);
								else S([], null, e)
							}
						};
						Q.ORDER_LATEST_LAST_MESSAGE = "latest_last_message", Q.ORDER_CHRONOLOGICAL = "chronological", Q.CHANNEL_NAME_ALPHABETICAL = "channel_name_alphabetical", Q.MEMBER_STATE_INVITED_ONLY = "invited_only", Q.MEMBER_STATE_JOINED_ONLY = "joined_only", Q.MEMBER_STATE_ALL = "all";
						var z = function() {
							var e = "";
							this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !0, this.order = z.ORDER_CHRONOLOGICAL, this.channelNameContainsFilter = null, this.channelUrlsFilter = [], this.customTypesFilter = [], this.customTypeStartsWithFilter = null, this.superChannelFilter = k.superChannelFilter.ALL, this.membershipFilter = z.MEMBERSHIP_TYPE.JOINED;
							var n = this;
							this.next = function(t) {
								return ue.getInstance().hasLoggedIn() ? n.hasNext ? n.isLoading ? void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), t) : !_(n.limit) || "boolean" != typeof n.includeEmpty || !Array.isArray(n.customTypesFilter) || !Array.isArray(n.channelUrlsFilter) || null !== n.channelNameContainsFilter && "string" != typeof n.channelNameContainsFilter || null !== n.customTypeStartsWithFilter && "string" != typeof n.customTypeStartsWithFilter || "string" != typeof n.order || [z.ORDER_CHRONOLOGICAL, z.ORDER_LATEST_LAST_MESSAGE, z.CHANNEL_NAME_ALPHABETICAL].indexOf(n.order.toLowerCase()) < 0 ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : "string" != typeof n.superChannelFilter || [k.superChannelFilter.ALL, k.superChannelFilter.SUPER, k.superChannelFilter.NON_SUPER].indexOf(n.superChannelFilter.toLowerCase()) < 0 || "string" != typeof n.membershipFilter || [z.MEMBERSHIP_TYPE.ALL, z.MEMBERSHIP_TYPE.JOINED].indexOf(n.membershipFilter.toLowerCase()) < 0 ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : (n.isLoading = !0, void ne.getInstance().loadPublicGroupChannelList(e, n.limit, n.includeEmpty, n.order, n.channelNameContainsFilter, n.channelUrlsFilter, n.customTypesFilter, n.customTypeStartsWithFilter, n.superChannelFilter, n.membershipFilter, (function(s, r) {
									if (r) return n.isLoading = !1, void S(null, r, t);
									var a = s;
									(!(e = String(a.next)) || e.length <= 0) && (n.hasNext = !1);
									var i = a.channels,
										o = [];
									for (var l in i) {
										var u = k.upsert(i[l]);
										o.push(u)
									}
									n.isLoading = !1, S(o, null, t)
								}))) : void S([], null, t) : void(t && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), t))
							}
						};
						z.ORDER_CHRONOLOGICAL = "chronological", z.CHANNEL_NAME_ALPHABETICAL = "channel_name_alphabetical", z.USER_IDS_INCLUDE_QUERY_TYPE = {
							AND: "AND",
							OR: "OR"
						}, z.MEMBERSHIP_TYPE = {
							ALL: "all",
							JOINED: "joined"
						};
						var q = function(e) {
								this.isLoading = !1;
								var n = e,
									t = this;
								this.next = function(e, s, r, a) {
									if (t.isLoading) S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), a);
									else if (4 === arguments.length) _(e) && _(s) && "boolean" == typeof r ? (t.isLoading = !0, ne.getInstance().messageList(n.isOpenChannel(), n.url, e, 0, s, !1, r, "", "", [], (function(e, s) {
										if (s) return t.isLoading = !1, void S(null, s, a);
										var r = e.messages,
											i = [];
										for (var o in r) {
											var l = L.build(r[o], n);
											l && i.push(l)
										}
										t.isLoading = !1, S(i, null, a)
									}))) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), a);
									else {
										if ("function" != typeof a) {
											var i = Array.prototype.slice.call(arguments);
											"function" == typeof i.slice(-1)[0] && (a = i.pop())
										}
										S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), a)
									}
								}, this.prev = function(e, s, r, a) {
									if (t.isLoading) S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), a);
									else if (4 === arguments.length) _(e) && _(s) && "boolean" == typeof r ? (t.isLoading = !0, ne.getInstance().messageList(n.isOpenChannel(), n.url, e, s, 0, !1, r, "", "", [], (function(e, s) {
										if (s) return t.isLoading = !1, void S(null, s, a);
										var r = e.messages,
											i = [];
										for (var o in r) {
											var l = L.build(r[o], n);
											l && i.push(l)
										}
										t.isLoading = !1, S(i, null, a)
									}))) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), a);
									else {
										if ("function" != typeof a) {
											var i = Array.prototype.slice.call(arguments);
											"function" == typeof i.slice(-1)[0] && (a = i.pop())
										}
										S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), a)
									}
								}, this.load = function(e, s, r, a, i) {
									if (t.isLoading) S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), i);
									else if (5 === arguments.length) _(e) && _(s) && _(r) && "boolean" == typeof a ? (t.isLoading = !0, ne.getInstance().messageList(n.isOpenChannel(), n.url, e, s, r, !0, a, "", "", [], (function(e, s) {
										if (s) return t.isLoading = !1, void S(null, s, i);
										var r = e.messages,
											a = [];
										for (var o in r) {
											var l = L.build(r[o], n);
											l && a.push(l)
										}
										t.isLoading = !1, S(a, null, i)
									}))) : S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), i);
									else {
										if ("function" != typeof i) {
											var o = Array.prototype.slice.call(arguments);
											"function" == typeof o.slice(-1)[0] && (i = o.pop())
										}
										S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), i)
									}
								}
							},
							J = function() {
								var e = "";
								this.limit = 20, this.isLoading = !1, this.hasNext = !0, this.nameKeyword = null, this.urlKeyword = null, this.customType = null;
								var n = this;
								this.next = function(t) {
									return this.hasNext ? this.isLoading ? void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), t) : "string" != typeof n.nameKeyword && null !== n.nameKeyword || "string" != typeof n.urlKeyword && null !== n.urlKeyword || "string" != typeof n.customType && null !== n.customType || !_(n.limit) ? void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), t) : (n.isLoading = !0, void ne.getInstance().loadOpenChannelList(e, n.limit, n.nameKeyword, n.urlKeyword, n.customType, (function(s, r) {
										if (r) return n.isLoading = !1, void S(null, r, t);
										var a = s;
										try {
											e = String(a.next)
										} catch (n) {
											e = ""
										}
										e || (n.hasNext = !1);
										var i = a.channels,
											o = [];
										i.forEach((function(e) {
											var n = H.upsert(e);
											o.push(n)
										})), n.isLoading = !1, S(o, null, t)
									}))) : void S([], null, t)
								}
							},
							Z = function(e) {
								var n = e,
									t = 0x8000000000000000;
								this.hasMore = !0, this.isLoading = !1;
								var s = this;
								this.limit = 20, this.reverse = !1, this.messageTypeFilter = null, this.customTypeFilter = null, this.senderUserIdsFilter = [], this.load = function() {
									var e = null,
										r = Array.prototype.slice.call(arguments);
									switch ("function" == typeof r.slice(-1)[0] && (e = r.pop()), r.length) {
										case 2:
											this.limit = r[0], this.reverse = r[1];
											break;
										case 3:
											this.limit = r[0], this.reverse = r[1], this.messageTypeFilter = r[2]
									}
									if (null === this.messageTypeFilter || void 0 === this.messageTypeFilter || this.messageTypeFilter === E.MessageTypeFilter.ALL ? this.messageTypeFilter = "" : this.messageTypeFilter.toString().toLowerCase() === L.MESSAGE_TYPE_USER || this.messageTypeFilter === E.MessageTypeFilter.USER ? this.messageTypeFilter = "MESG" : this.messageTypeFilter.toString().toLowerCase() === L.MESSAGE_TYPE_FILE || this.messageTypeFilter === E.MessageTypeFilter.FILE ? this.messageTypeFilter = "FILE" : this.messageTypeFilter.toString().toLowerCase() !== L.MESSAGE_TYPE_ADMIN && this.messageTypeFilter !== E.MessageTypeFilter.ADMIN || (this.messageTypeFilter = "ADMM"), !_(this.limit) || "boolean" != typeof this.reverse || null !== this.messageTypeFilter && "string" != typeof this.messageTypeFilter || null !== this.customTypeFilter && "string" != typeof this.customTypeFilter || !Array.isArray(this.senderUserIdsFilter)) S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e);
									else {
										for (var a = 0; a < this.senderUserIdsFilter.length; a++)
											if ("string" != typeof this.senderUserIdsFilter[a]) return void S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), e);
										if (s.hasMore) {
											if (s.isLoading) return void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), e);
											s.isLoading = !0, ne.getInstance().messageList(n.isOpenChannel(), n.url, t, this.limit, 0, !1, this.reverse, this.messageTypeFilter, this.customTypeFilter, this.senderUserIdsFilter, (function(r, a) {
												if (a) return s.isLoading = !1, void S(null, a, e);
												var i = r.messages,
													o = [];
												for (var l in i) {
													var u = L.build(i[l], n);
													u && (o.push(u), u.createdAt <= t && (t = u.createdAt))
												}(o.length <= 0 || o.length < s.limit) && (s.hasMore = !1), s.isLoading = !1, S(o, null, e)
											}))
										}
									}
								}
							},
							X = function(e, n) {
								var t, s, r, a = "";
								this.hasNext = !0, this.limit = 20, this.isLoading = !1, this.userIds = [], this.metaDataKey = "", this.metaDataValues = [];
								var i = this;
								switch (n && (s = n), t = e) {
									case X.ALL_USER:
									case X.BLOCKED_USER:
										r = "users";
										break;
									case X.FILTERED_USER:
										this.userIds = n, r = "users";
										break;
									case X.PARTICIPANT:
										r = "participants";
										break;
									case X.MUTED_USER:
										r = "muted_list";
										break;
									case X.BANNED_USER:
										r = "banned_list"
								}
								this.next = function(n) {
									if (i.hasNext)
										if (ue.getInstance().hasLoggedIn())
											if (i.isLoading) S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), n);
											else if (!(_(i.limit) && Array.isArray(i.userIds) && "string" == typeof i.metaDataKey && Array.isArray(i.metaDataValues)) || i.metaDataKey && h(i.metaDataValues) || !i.metaDataKey && !h(i.metaDataValues)) S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n);
									else {
										i.isLoading = !0;
										var o = function(t, s) {
											if (s) return i.isLoading = !1, void S(null, s, n);
											(a = t.next) || (i.hasNext = !1);
											var o = t[r],
												l = [];
											for (var u in o) e === X.BANNED_USER ? l.push(new B(o[u].user)) : l.push(new B(o[u]));
											i.isLoading = !1, S(l, null, n)
										};
										switch (t) {
											case X.ALL_USER:
												ne.getInstance().loadUserList(a, i.limit, [], i.metaDataKey, i.metaDataValues, o);
												break;
											case X.FILTERED_USER:
												ne.getInstance().loadUserList(a, i.limit, i.userIds, i.metaDataKey, i.metaDataValues, o);
												break;
											case X.BLOCKED_USER:
												ne.getInstance().loadBlockedUserList(ue.getInstance().getCurrentUserId(), a, i.limit, o);
												break;
											case X.PARTICIPANT:
												ne.getInstance().loadOpenChannelParticipantList(s.url, a, i.limit, o);
												break;
											case X.MUTED_USER:
												ne.getInstance().loadMutedUserList(s, a, i.limit, o);
												break;
											case X.BANNED_USER:
												ne.getInstance().loadBannedUserList(s, a, i.limit, o)
										}
									} else n && S(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED), n);
									else S([], null, n)
								}
							};
						X.ALL_USER = "alluser", X.FILTERED_USER = "filtereduser", X.BLOCKED_USER = "blockeduser", X.PARTICIPANT = "participant", X.MUTED_USER = "muteduser", X.BANNED_USER = "banneduser";
						var $ = function() {};
						$.INVALID_INITIALIZATION = 800100, $.CONNECTION_REQUIRED = 800101, $.INVALID_PARAMETER = 800110, $.NETWORK_ERROR = 800120, $.NETWORK_ROUTING_ERROR = 800121, $.MALFORMED_DATA = 800130, $.MALFORMED_ERROR_DATA = 800140, $.WRONG_CHANNEL_TYPE = 800150, $.MARK_AS_READ_RATE_LIMIT_EXCEEDED = 800160, $.QUERY_IN_PROGRESS = 800170, $.ACK_TIMEOUT = 800180, $.LOGIN_TIMEOUT = 800190, $.WEBSOCKET_CONNECTION_CLOSED = 800200, $.WEBSOCKET_CONNECTION_FAILED = 800210, $.REQUEST_FAILED = 800220, $.FILE_UPLOAD_CANCEL_FAILED = 800230, $.REQUEST_CANCELLED = 800240;
						var ee = function(e) {
							var r, a, o = !1;
							e || (e = new ee.WSClientHandler);
							this.getConnectionState = function() {
								return 1 === r.readyState ? ue.getInstance().connectionState.OPEN : ue.getInstance().connectionState.CLOSED
							};
							var l = new function() {
								var t, r;
								this.ping = function() {
									s && n.log("PING"), clearTimeout(t), clearTimeout(r), t = setTimeout((function() {
										var a = x.bPing();
										ue.getInstance().wsClient.send(a), r = setTimeout((function() {
											s && n.log("PING Timeout"), clearTimeout(t), clearTimeout(r), e.onError()
										}), 5e3)
									}), 15e3)
								}, this.stop = function() {
									clearTimeout(t), clearTimeout(r)
								}
							};
							this.connect = function(u, c, d) {
								s && n.log("WSClient connect called"), a = d;
								var h = null,
									_ = !1;
								try {
									h = "undefined" == typeof WebSocket ? t("./node_modules/websocket/lib/browser.js").w3cwebsocket : WebSocket
								} catch (e) {
									h = WebSocket
								}
								try {
									var p = "/?p=JS&pv=" + encodeURIComponent(i) + "&sv=" + encodeURIComponent("3.0.69") + "&ai=" + encodeURIComponent(T);
									if (ne.getInstance().sessionKey ? p += "&key=" + encodeURIComponent(ne.getInstance().sessionKey) : p += "&user_id=" + encodeURIComponent(u) + "&access_token=" + encodeURIComponent(c), !(r = new h(a + p))) return void e.onError("ws is not exist.")
								} catch (n) {
									return void e.onError(n)
								}
								if (s) try {
									window.ws = r
								} catch (e) {}
								r.onopen = function(t) {
									l && l.ping(), s && n.log("WSClient onopen called"), e.onOpen(t)
								}, r.onmessage = function(t) {
									(new Date).getTime();
									var r = t.data.split("\n");
									for (var a in r) {
										var i = r[a];
										if (i && "string" == typeof i) {
											try {
												if ("PONG" === i.substring(0, 4)) {
													l && l.ping();
													continue
												}
											} catch (t) {
												s && n.log("ws.onmessage-command check error: ", t)
											}
											e.onMessage(i)
										}
									}
								}, r.onclose = function(t) {
									s && n.log("WSClient ws.onclose called - e, explicitDisconnect: ", t, o), l && l.stop(), o ? e.onClose(t) : _ || e.onError(t), o = !1
								}, r.onerror = function(t) {
									s && n.log("WSClient ws.onerror called: ", t), l && l.stop(), _ = !0, e.onError(t)
								}
							}, this.disconnect = function(t, a) {
								s && n.log("WSClient disconnect called [explicit]: ", t), l && l.stop(), l = null, o = !0 === t, r && (r.onopen = function() {}, r.onmessage = function() {}, r.onclose = function() {
									a && a()
								}, r.onerror = function() {}, r.close(), r = null), o ? e.onClose() : e.onError(), o = !1
							}, this.send = function(e, n) {
								1 !== r.readyState ? n && n(null, new I("Connection is not valid. Please reconnect.", $.WEBSOCKET_CONNECTION_CLOSED)) : (r.send(e.encode()), n && n(null, null))
							}
						};
						ee.WSClientHandler = function() {
							this.onReady = function() {}, this.onOpen = function() {}, this.onClose = function() {}, this.onMessage = function() {}, this.onError = function() {}
						};
						var ne = function() {
								var e = ne.getInstance();
								if (e) return e;
								this.sessionKey;
								var n = 0;
								this.getMessageChangeLogsByToken = function(e, n, t, s) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS.replace("%s", encodeURIComponent(n));
									var a = {};
									t && (a.token = t), u(r, a, s)
								}, this.setChannelInvitationPreference = function(e, n, t) {
									var s = ne.API_USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(e));
									_(s, {
										auto_accept: n
									}, t)
								}, this.getChannelInvitationPreference = function(e, n) {
									var t = ne.API_USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(e));
									u(t, n)
								}, this.getGroupChannelCount = function(e, n, t) {
									var s, r = ne.API_USERS_USERID_GROUP_CHANNEL_COUNT.replace("%s", encodeURIComponent(e));
									s = n === k.memberState.JOINED ? "joined" : n === k.memberState.INVITED ? "invited" : n === k.memberState.INVITED_BY_FRIEND ? "invited_by_friend" : n === k.memberState.INVITED_BY_NON_FRIEND ? "invited_by_non_friend" : "all", u(r, {
										state: s
									}, t)
								}, this.getUnreadItemCount = function(e, n, t) {
									var s = ne.API_USERS_USERID_UNREAD_ITEM_COUNT.replace("%s", encodeURIComponent(e)),
										r = {
											item_keys: n.join(",")
										};
									u(s, r, t)
								}, this.getTotalUnreadMessageCount = function(e, n, t, s) {
									var r = ne.API_USERS_USERID_UNREAD_MESSAGE_COUNT.replace("%s", encodeURIComponent(e)),
										a = null;
									null !== n && n.length > 0 && (a = i(n));
									var o = {
										super_mode: t
									};
									a && (o.custom_types = a), u(r, o, s)
								}, this.getTotalUnreadChannelCount = function(e, n) {
									var t = ne.API_USERS_USERID_UNREAD_CHANNEL_COUNT.replace("%s", encodeURIComponent(e));
									u(t, n)
								}, this.checkRouting = function(e) {
									if (ue.getInstance() && ue.getInstance().customApiHost && ue.getInstance().customWsHost) "function" == typeof e && e({
										API_HOST: ue.getInstance().customApiHost,
										WS_HOST: ue.getInstance().customWsHost
									});
									else {
										var t = (new Date).getTime() / 1e3;
										0 === n || n - t > 300 ? y(ne.API_ROUTING_URL.replace("%s", T), {}, "GET", {
											SendBird: l + T
										}, (function(s, i) {
											i ? e(null, new I("Server is unreachable.", $.NETWORK_ROUTING_ERROR)) : (r = s.ws_server, a = s.api_server, n = t, "function" == typeof e && e({
												API_HOST: a,
												WS_HOST: r
											}))
										})) : e({
											API_HOST: ue.getInstance().getCurrentApiHost(),
											WS_HOST: ue.getInstance().getCurrentWsHost()
										}, null)
									}
								};
								var t = function(e, n, t, s, r, a, i, u, c, h) {
										ue.getInstance().hasLoggedIn() ? ne.getInstance().checkRouting((function(n, _) {
											if (_) i(null, new I("Request failed.", $.REQUEST_FAILED));
											else {
												var p = U();
												p.open("POST", n.API_HOST + e, !0), p.setRequestHeader("SendBird", l + T), p.setRequestHeader("Session-Key", ne.getInstance().sessionKey);
												var E = o ? new o : new FormData;
												for (var f in s && "undefined" != typeof Blob && (t instanceof Blob || "string" == typeof t || Array.isArray(t) || t.hasOwnProperty("isRNFetchBlobPolyfill")) ? E.append("file", new Blob([t], {
														type: s
													}), t.name) : E.append("file", t, t.name), a && E.append("channel_url", a), r) {
													var m = parseInt(f) + 1;
													E.append("thumbnail" + m, r[f].maxWidth + "," + r[f].maxHeight)
												}
												p.onload = function() {
													c && c[h] && delete c[h], p.status >= 200 && p.status < 400 ? d(null, JSON.parse(p.responseText), i) : d({
														status: p.status,
														statusText: p.statusText,
														response: p.responseText
													}, null, i)
												}, p.onerror = function(e) {
													c && c[h] && delete c[h], i(null, new I(p.statusText, $.REQUEST_FAILED))
												}, p.onabort = function(e) {
													c && c[h] && delete c[h], i(null, new I("File upload has been cancelled.", $.REQUEST_CANCELLED))
												}, p.upload.onprogress = function(e) {
													e.lengthComputable && e.loaded >= e.total && c && c[h] && delete c[h], u && u(e)
												}, E.oldIE ? (p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + E.boundary), p.send(E.toString())) : p.send(E), c && (c[h] = p)
											}
										})) : i && i(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
									},
									s = function(e, n, t) {
										"function" == typeof n && (t = n, n = {}), ue.getInstance().hasLoggedIn() ? ne.getInstance().checkRouting((function(s, r) {
											r ? t(null, new I("Request failed.", $.REQUEST_FAILED)) : y(s.API_HOST + e, n, "DELETE", {
												"Session-Key": ne.getInstance().sessionKey,
												SendBird: l + T
											}, t)
										})) : t && t(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
									},
									i = function(e) {
										var n = "";
										for (var t in e) e.hasOwnProperty(t) && (n += encodeURIComponent(e[t]) + ",");
										return n.length > 1 && (n = n.substring(0, n.length - 1)), n
									},
									u = function(e, n, t) {
										if ("function" == typeof n && (t = n, n = {}), ue.getInstance().hasLoggedIn()) {
											var s, r = "";
											if (n) {
												for (var a in n) "" !== r && (r += "&"), r += a + "=" + n[a];
												s = e + "?" + r
											} else s = e;
											ne.getInstance().checkRouting((function(e, r) {
												r ? t(null, new I("Request failed.", $.REQUEST_FAILED)) : y(e.API_HOST + s, n, "GET", {
													"Session-Key": ne.getInstance().sessionKey,
													SendBird: l + T
												}, t)
											}))
										} else t && t(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
									},
									c = function(e, n, t) {
										"function" == typeof n && (t = n, n = {}), ue.getInstance().hasLoggedIn() ? ne.getInstance().checkRouting((function(s, r) {
											r ? t(null, r) : y(s.API_HOST + e, n, "POST", {
												"Session-Key": ne.getInstance().sessionKey,
												SendBird: l + T
											}, t)
										})) : t && t(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
									},
									_ = function(e, n, t) {
										"function" == typeof n && (t = n, n = {}), ue.getInstance().hasLoggedIn() ? ne.getInstance().checkRouting((function(s, r) {
											r || y(s.API_HOST + e, n, "PUT", {
												"Session-Key": ne.getInstance().sessionKey,
												SendBird: l + T
											}, t)
										})) : t && t(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
									};
								this.addFriends = function(e, n, t) {
									var s = ne.API_FRIENDS.replace("%s", encodeURIComponent(e));
									c(s, {
										user_ids: n
									}, t)
								}, this.deleteFriends = function(e, n, t) {
									var r = ne.API_FRIENDS.replace("%s", encodeURIComponent(e));
									n.length > 0 && (r += "?user_ids=", n.forEach((function(e) {
										r += encodeURIComponent(e) + ","
									})), r = r.substring(0, r.length - 1)), s(r, {}, t)
								}, this.deleteFriendDiscoveries = function(e, n, t) {
									var r = ne.API_FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(e));
									n.length > 0 && (r += "?friend_discovery_keys=", n.forEach((function(e) {
										r += encodeURIComponent(e) + ","
									})), r = r.substring(0, r.length - 1)), s(r, {}, t)
								}, this.uploadFriendDiscoveries = function(e, n, t) {
									var s = ne.API_FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(e)),
										r = {
											friend_discoveries: []
										};
									n.forEach((function(e) {
										r.friend_discoveries.push({
											friend_discovery_key: e.friendDiscoveryKey,
											friend_name: "string" == typeof e.friendName || e.friendName ? e.friendName : null
										})
									})), _(s, r, t)
								}, this.getFriendChangeLogsByToken = function(e, n, t) {
									var s = ne.API_FRIENDS_CHANGE_LOGS.replace("%s", encodeURIComponent(e)),
										r = {};
									n && (r.token = n), u(s, r, t)
								}, this.friendListQuery = function(e, n, t, s) {
									var r = ne.API_FRIENDS.replace("%s", encodeURIComponent(e)),
										a = {
											limit: t,
											token: encodeURIComponent(n)
										};
									u(r, a, s)
								}, this.createUserMetaData = function(e, n, t) {
									var s = ne.API_USERS_USERID_METADATA.replace("%s", encodeURIComponent(e)),
										r = {};
									r.metadata = n, c(s, r, t)
								}, this.updateUserMetaData = function(e, n, t, s) {
									var r = ne.API_USERS_USERID_METADATA.replace("%s", encodeURIComponent(e)),
										a = {};
									a.metadata = n, a.upsert = t, _(r, a, s)
								}, this.deleteAllUserMetaData = function(e, n) {
									var t = ne.API_USERS_USERID_METADATA.replace("%s", encodeURIComponent(e));
									s(t, {}, n)
								}, this.deleteUserMetaData = function(e, n, t) {
									var r = ne.API_USERS_USERID_METADATA_KEY.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(r, {}, t)
								}, this.resetMyHistory = function(e, n) {
									var t = ne.API_GROUPCHANNELS_RESET_USER_HISTORY.replace("%s", encodeURIComponent(e));
									_(t, {}, n)
								}, this.groupChannelInvite = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_INVITE.replace("%s", encodeURIComponent(e)),
										r = {},
										a = [];
									try {
										Array.isArray(n) ? a = n : a.push(n)
									} catch (e) {
										t(null, new I("Invalid parameter.", $.INVALID_PARAMETER))
									}
									r.user_ids = a, c(s, r, t)
								}, this.acceptInvitation = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_ACCEPT_INVITATION.replace("%s", encodeURIComponent(e)),
										r = {};
									r.user_id = n, _(s, r, t)
								}, this.declineInvitation = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_DECLINE_INVITATION.replace("%s", encodeURIComponent(e)),
										r = {};
									r.user_id = n, _(s, r, t)
								}, this.groupChannelHide = function(e, n, t, s) {
									var r = ne.API_GROUPCHANNELS_CHANNELURL_HIDE.replace("%s", encodeURIComponent(e)),
										a = {};
									a.user_id = n, a.hide_previous_messages = t, _(r, a, s)
								}, this.publicGroupChannelJoin = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_JOIN.replace("%s", encodeURIComponent(e)),
										r = {};
									r.user_id = n, _(s, r, t)
								}, this.groupChannelLeave = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_LEAVE.replace("%s", encodeURIComponent(e)),
										r = {};
									r.user_id = n, _(s, r, t)
								}, this.groupChannelMarkAsRead = function(e, n, t) {
									var s = ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASREAD.replace("%s", encodeURIComponent(e)),
										r = {};
									r.user_id = n, _(s, r, t)
								}, this.groupChannelMarkAsReadAll = function(e, n, t) {
									var s = ne.API_USERS_USERID_MARKASREADALL.replace("%s", encodeURIComponent(e)),
										r = {};
									n && (r.channel_urls = n), _(s, r, t)
								}, this.messageList = function(e, n, t, s, r, a, o, l, c, d, h) {
									var _;
									_ = e ? String(ne.API_OPENCHANNELS_CHANNELURL_MESSAGES.replace("%s", n)) : String(ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES.replace("%s", n));
									var p = {};
									p.is_sdk = String(!0), p.message_ts = String(t), p.prev_limit = String(s), p.next_limit = String(r), p.include = String(a), p.reverse = String(o), l && (p.message_type = String(l)), c && (p.custom_type = String(c)), d.length > 0 && (p.sender_ids = i(d)), u(_, p, h)
								}, this.messageListByID = function(e, n, t, s, r, a, o, l, c, d, h) {
									var _;
									_ = e ? String(ne.API_OPENCHANNELS_CHANNELURL_MESSAGES.replace("%s", n)) : String(ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES.replace("%s", n));
									var p = {};
									p.is_sdk = String(!0), p.message_id = t, p.prev_limit = String(s), p.next_limit = String(r), p.include = String(a), p.reverse = String(o), l && (p.message_type = String(l)), c && (p.custom_type = String(c)), d.length > 0 && (p.sender_ids = i(d)), u(_, p, h)
								}, this.login = function(e, n, t) {
									var s = ne.API_USERS_USERID_LOGIN.replace("%s", encodeURIComponent(e)),
										r = {};
									r.app_id = T, n && (r.access_token = n), c(s, r, (function(e, n) {
										n ? t(null, n) : (ne.getInstance().sessionKey = e.key, ne.getInstance().ekey = e.ekey, t(e, n))
									}))
								}, this.updateUserInfo = function(e, n, t, s) {
									var r = {};
									n && (r.nickname = n), t && (r.profile_url = t);
									var a = String(ne.API_USERS_USERID).replace("%s", encodeURIComponent(e));
									_(a, r, s)
								}, this.updateCurrentUserInfoWithFile = function(e, n, t, s) {
									if ("string" == typeof t) this.updateUserInfo(e, n, t, s);
									else {
										var r = o ? new o : new FormData;
										r.append("nickname", n), r.append("profile_file", t, t.name);
										var a = String(ne.API_USERS_USERID).replace("%s", encodeURIComponent(e));
										_(a, r, s)
									}
								}, this.getGroupChannel = function(e, n, t, s) {
									var r = ne.API_GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(e)),
										a = {
											member: String(n),
											read_receipt: String(t)
										};
									u(r, a, s)
								}, this.getOpenChannel = function(e, n) {
									var t = ne.API_OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(e));
									u(t, n)
								}, this.createGroupChannel = function(e, n, t, s, r, a, i, l, u, d, h) {
									var _ = ne.API_GROUPCHANNELS,
										p = [];
									"string" == typeof e ? p.push(e) : e.forEach((function(e) {
										p.push(e)
									}));
									var I, E = p.filter((function(e, n) {
											return p.indexOf(e) === n
										})),
										f = l.isPublic,
										m = l.channelUrl;
									s && "string" != typeof s ? (I = o ? new o : new FormData, s && I.append("cover_file", s, s.name), I.append("user_ids", E), null !== m && I.append("channel_url", m), null !== n && I.append("is_distinct", n), null !== i && I.append("is_super", i), null !== f && I.append("is_public", f), null !== d && I.append("is_ephemeral", d), null !== t && "string" == typeof t && I.append("name", t), r && I.append("data", r), a && I.append("custom_type", a), Array.isArray(u) && u.length > 0 && I.append("operator_ids", u)) : (I = {}, null !== s && "string" == typeof s && (I.cover_url = s), I.user_ids = E, null !== m && (I.channel_url = m), null !== n && (I.is_distinct = n), null !== i && (I.is_super = i), null !== f && (I.is_public = f), null !== d && (I.is_ephemeral = d), null !== t && "string" == typeof t && (I.name = t), r && (I.data = r), a && (I.custom_type = a), Array.isArray(u) && u.length > 0 && (I.operator_ids = u)), c(_, I, h)
								}, this.createOpenChannel = function(e, n, t, s, r, a) {
									var i, l = String(ne.API_OPENCHANNELS);
									n && "string" != typeof n ? (i = o ? new o : new FormData, n && i.append("cover_file", n, n.name), null !== e && "string" == typeof e && i.append("name", e), t && i.append("data", t), s && (Array.isArray(s) ? i.append("operators", s) : i.append("operators", [s])), r && i.append("custom_type", r)) : (i = {}, null !== n && "string" == typeof n && (i.cover_url = n), null !== e && "string" == typeof e && (i.name = e), t && (i.data = t), s && (Array.isArray(s) ? i.operators = s : i.operators = [s]), r && (i.custom_type = r)), c(l, i, a)
								}, this.updateGroupChannel = function(e, n, t, s, r, a, i, l) {
									var u, c = String(ne.API_GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(e)));
									s && "string" != typeof s ? (u = o ? new o : new FormData, null !== n && u.append("is_distinct", n), null !== i && u.append("is_public", i), s && u.append("cover_file", s, s.name), null !== t && "string" == typeof t && u.append("name", t), null !== r && "string" == typeof r && u.append("data", r), null !== a && "string" == typeof a && u.append("custom_type", a)) : (u = {}, null !== n && (u.is_distinct = n), null !== i && (u.is_public = i), null !== s && "string" == typeof s && (u.cover_url = s), null !== t && "string" == typeof t && (u.name = t), null !== r && "string" == typeof r && (u.data = r), null !== a && "string" == typeof a && (u.custom_type = a)), _(c, u, l)
								}, this.updateOpenChannel = function(e, n, t, s, r, a, i) {
									var l, u = String(ne.API_OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(e)));
									t && "string" != typeof t ? (l = o ? new o : new FormData, t && l.append("cover_file", t, t.name), null !== n && "string" == typeof n && l.append("name", n), null !== s && "string" == typeof s && l.append("data", s), null !== r && (Array.isArray(r) ? l.append("operators", r) : l.append("operators", [r])), null !== a && "string" == typeof a && l.append("custom_type", a)) : (l = {}, null !== t && "string" == typeof t && (l.cover_url = t), null !== n && "string" == typeof n && (l.name = n), null !== s && "string" == typeof s && (l.data = s), null !== r && (Array.isArray(r) ? l.operators = r : l.operators = [r]), null !== a && "string" == typeof a && (l.custom_type = a)), _(u, l, i)
								}, this.deleteOpenChannel = function(e, n) {
									var t = String(ne.API_OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(e)));
									s(t, {}, n)
								}, this.createMetaCounters = function(e, n, t, s) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n));
									var a = {};
									a.metacounter = t, c(r, a, s)
								}, this.updateMetaCounters = function(e, n, t, s, r, a) {
									var i;
									i = e ? ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n));
									var o = {};
									switch (o.metacounter = t, o.upsert = s, r) {
										case ne.UPDATE_META_COUNTER_MODE_SET:
											o.mode = "set";
											break;
										case ne.UPDATE_META_COUNTER_MODE_INC:
											o.mode = "increase";
											break;
										case ne.UPDATE_META_COUNTER_MODE_DEC:
											o.mode = "decrease"
									}
									_(i, o, a)
								}, this.getAllMetaCounters = function(e, n, t) {
									this.getMetaCounters(e, n, {}, t)
								}, this.getMetaCounters = function(e, n, t, s) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n));
									var a = i(t);
									u(r, {
										keys: a
									}, s)
								}, this.deleteMetaCounter = function(e, n, t, r) {
									var a;
									a = e ? ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER_KEY.replace("%s", encodeURIComponent(n)).replace("%s", t) : ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY.replace("%s", encodeURIComponent(n)).replace("%s", t), s(a, {}, r)
								}, this.deleteAllMetaCounters = function(e, n, t) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(n)), s(r, {}, t)
								}, this.createMetaData = function(e, n, t, s) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n));
									var a = {},
										i = {};
									for (var o in t) {
										var l = t[o];
										i[o] = l
									}
									a.metadata = i, c(r, a, s)
								}, this.updateMetaData = function(e, n, t, s, r) {
									var a;
									a = e ? ne.API_OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n));
									var i = {},
										o = {};
									for (var l in t) {
										var u = t[l];
										o[l] = u
									}
									i.metadata = o, i.upsert = s, _(a, i, r)
								}, this.getAllMetaData = function(e, n, t) {
									this.getMetaData(e, n, {}, t)
								}, this.getMetaData = function(e, n, t, s) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n));
									var a = i(t);
									u(r, {
										keys: a
									}, s)
								}, this.deleteMetaData = function(e, n, t, r) {
									var a;
									a = e ? ne.API_OPENCHANNELS_CHANNELURL_METADATA_KEY.replace("%s", encodeURIComponent(n)).replace("%s", t) : ne.API_GROUPCHANNELS_CHANNELURL_METADATA_KEY.replace("%s", encodeURIComponent(n)).replace("%s", t), s(a, {}, r)
								}, this.deleteAllMetaData = function(e, n, t) {
									var r;
									r = e ? ne.API_OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n)) : ne.API_GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(n)), s(r, {}, t)
								}, this.loadUserList = function(e, n, t, s, r, a) {
									var i = ne.API_USERS,
										o = {
											token: encodeURIComponent(e),
											limit: String(n)
										};
									if (!h(t)) try {
										var l = "";
										for (var c in t) {
											var d = t[c];
											l += encodeURIComponent(d) + ","
										}
										l.length > 1 && (l = l.substring(0, l.length - 1)), o.user_ids = l
									} catch (e) {}
									if (s && !h(r)) {
										var _ = "";
										r.forEach((function(e) {
											_ += encodeURIComponent(e) + ","
										})), _.length > 0 && (_ = _.substring(0, _.length - 1)), o.metadatakey = encodeURIComponent(s), o.metadatavalues_in = _
									}
									u(i, o, a)
								}, this.loadBlockedUserList = function(e, n, t, s) {
									var r = ne.API_USERS_USERID_BLOCK.replace("%s", encodeURIComponent(e)),
										a = {
											token: encodeURIComponent(n),
											limit: String(t)
										};
									u(r, a, s)
								}, this.loadOpenChannelList = function(e, n, t, s, r, a) {
									var i = ne.API_OPENCHANNELS,
										o = {
											token: encodeURIComponent(e),
											limit: String(n)
										};
									null !== t && (o.name_contains = encodeURIComponent(t)), s && (o.url_contains = encodeURIComponent(s)), null !== r && (o.custom_type = encodeURIComponent(r)), u(i, o, a)
								}, this.uploadFile = function(e, n, s, r, a, i, o, l) {
									t(ne.API_STORAGE_FILE, 0, e, n, s, r, a, i, o, l)
								}, this.uploadProfileImage = function(e, n) {
									t(ne.API_STORAGE_PROFILE, 0, e, "", [], "", n)
								}, this.loadOperatorList = function(e, n, t, s, r) {
									var a = n ? ne.API_OPENCHANNELS_OPERATORS.replace("%url", encodeURIComponent(e)) : ne.API_GROUPCHANNELS_OPERATORS.replace("%url", encodeURIComponent(e)),
										i = {
											token: encodeURIComponent(t),
											limit: s
										};
									u(a, i, r)
								}, this.loadGroupChannelMemberList = function(e, n, t, s, r, a, i, o, l) {
									var c = ne.API_GROUPCHANNELS_MEMBERS.replace("%url", encodeURIComponent(e)),
										d = {
											token: encodeURIComponent(n),
											limit: t,
											muted_member_filter: s.toLowerCase(),
											operator_filter: r.toLowerCase(),
											member_state_filter: a,
											order: o.toLowerCase()
										};
									i && (d.nickname_startswith = encodeURIComponent(i)), u(c, d, l)
								}, this.loadPublicGroupChannelList = function(e, n, t, s, r, a, i, o, l, c, d) {
									var h = ne.API_GROUPCHANNELS,
										_ = {
											public_mode: k.publicChannelFilter.PUBLIC,
											token: encodeURIComponent(e),
											limit: String(n),
											show_member: !0,
											show_read_receipt: !0,
											show_empty: String(t),
											order: s
										};
									if (r) try {
										_.name_contains = encodeURIComponent(r)
									} catch (e) {}
									if (a.length > 0) try {
										_.channel_urls = a.map((function(e) {
											return encodeURIComponent(e)
										})).join(",")
									} catch (e) {}
									if (i.length > 0) {
										var p = "";
										i.forEach((function(e) {
											p += encodeURIComponent(e) + ","
										})), p = p.substring(0, p.length - 1), _.custom_types = p
									}
									o && (_.custom_type_startswith = o), _.super_mode = l, _.public_membership_mode = c, u(h, _, d)
								}, this.loadUserGroupChannelList = function(e, n, t, s, r, a, o, l, c, d, h, _, p, I, E, f) {
									var m = ne.API_MYGROUPCHANNELS.replace("%s", encodeURIComponent(e)),
										g = a.userIds,
										A = !a.includeMode,
										N = a.queryType,
										C = {
											token: encodeURIComponent(n),
											limit: String(t),
											show_member: !0,
											show_read_receipt: !0,
											show_empty: String(s),
											order: r,
											member_state_filter: p
										};
									if (h.length > 0) {
										var R = "";
										h.forEach((function(e) {
											R += encodeURIComponent(e) + ","
										})), R = R.substring(0, R.length - 1), C.custom_types = R
									} else d && (C.custom_type = encodeURIComponent(d));
									if (o) try {
										C.members_nickname_contains = encodeURIComponent(o)
									} catch (e) {}
									if (l) try {
										C.name_contains = encodeURIComponent(l)
									} catch (e) {}
									if (g.length > 0) try {
										A ? C.members_exactly_in = i(g) : (C.members_include_in = i(g), C.query_type = N)
									} catch (e) {}
									if (c.length > 0) try {
										C.channel_urls = c.map((function(e) {
											return encodeURIComponent(e)
										})).join(",")
									} catch (e) {}
									C.super_mode = I, C.public_mode = E, _ && (C.custom_type_startswith = _), u(m, C, f)
								}, this.loadOpenChannelParticipantList = function(e, n, t, s) {
									var r = ne.API_OPENCHANNELS_CHANNELURL_PARTICIPANTS.replace("%s", e),
										a = {
											token: encodeURIComponent(n),
											limit: String(t)
										};
									u(r, a, s)
								}, this.loadMutedUserList = function(e, n, t, s) {
									var r = e.isOpenChannel() ? ne.API_OPENCHANNELS_CHANNELURL_MUTE.replace("%s", e.url) : ne.API_GROUPCHANNELS_CHANNELURL_MUTE.replace("%s", e.url),
										a = {
											token: encodeURIComponent(n),
											limit: String(t)
										};
									u(r, a, s)
								}, this.loadBannedUserList = function(e, n, t, s) {
									var r = e.isOpenChannel() ? ne.API_OPENCHANNELS_CHANNELURL_BAN.replace("%s", e.url) : ne.API_GROUPCHANNELS_CHANNELURL_BAN.replace("%s", e.url),
										a = {
											token: encodeURIComponent(n),
											limit: String(t)
										};
									u(r, a, s)
								}, this.setPushTemplate = function(e, n, t) {
									var s = ne.API_USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(e));
									_(s, {
										name: n
									}, t)
								}, this.getPushTemplate = function(e, n) {
									var t = ne.API_USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(e));
									u(t, n)
								}, this.setDoNotDisturb = function(e, n, t, s, r, a, i, o) {
									var l = ne.API_USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(e));
									_(l, {
										do_not_disturb: n,
										start_hour: t,
										start_min: s,
										end_hour: r,
										end_min: a,
										timezone: i
									}, o)
								}, this.getDoNotDisturb = function(e, n) {
									var t = ne.API_USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(e));
									u(t, n)
								}, this.setPushPreference = function(e, n, t, s) {
									var r = ne.API_USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n)),
										a = {};
									a.enable = t, _(r, a, s)
								}, this.getPushPreference = function(e, n, t) {
									var s = ne.API_USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									u(s, t)
								}, this.setCountPreference = function(e, n, t, s) {
									var r = ne.API_USERS_COUNT_PREFERENCE.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n)),
										a = {};
									a.count_preference = t, _(r, a, s)
								}, this.registerGCMPushToken = function(e, n, t) {
									var s = ne.API_USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(e));
									c(s, {
										gcm_reg_token: n
									}, t)
								}, this.unregisterGCMPushToken = function(e, n, t) {
									var r = ne.API_USERS_USERID_PUSH_GCM_TOKEN.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(r, t)
								}, this.unregisterGCMPushTokenAll = function(e, n) {
									var t = ne.API_USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(e));
									s(t, n)
								}, this.registerAPNSPushToken = function(e, n, t) {
									var s = ne.API_USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(e));
									c(s, {
										apns_device_token: n
									}, t)
								}, this.unregisterAPNSPushToken = function(e, n, t) {
									var r = ne.API_USERS_USERID_PUSH_APNS_TOKEN.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(r, t)
								}, this.unregisterAPNSPushTokenAll = function(e, n) {
									var t = ne.API_USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(e));
									s(t, n)
								}, this.unregisterPushTokenAll = function(e, n) {
									var t = ne.API_USERS_USERID_PUSH.replace("%s", encodeURIComponent(e));
									s(t, n)
								}, this.blockUser = function(e, n, t) {
									var s = ne.API_USERS_USERID_BLOCK.replace("%s", encodeURIComponent(e));
									c(s, {
										target_id: n
									}, t)
								}, this.unblockUser = function(e, n, t) {
									var r = ne.API_USERS_USERID_BLOCK_TARGETID.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(r, {}, t)
								}, this.banUser = function(e, n, t, s, r, a) {
									var i = r ? ne.API_GROUPCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(e)) : ne.API_OPENCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(e)),
										o = {
											user_id: n
										};
									t && (o.description = t), o.seconds = String(s), c(i, o, a)
								}, this.unbanUser = function(e, n, t, r) {
									var a = t ? ne.API_GROUPCHANNELS_CHANNELURL_BAN_USERID.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n)) : ne.API_OPENCHANNELS_CHANNELURL_BAN_USERID.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(a, {}, r)
								}, this.muteUser = function(e, n, t, s) {
									var r = t ? ne.API_GROUPCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(e)) : ne.API_OPENCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(e));
									c(r, {
										user_id: n
									}, s)
								}, this.unmuteUser = function(e, n, t, r) {
									var a = t ? ne.API_GROUPCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n)) : ne.API_OPENCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(e)).replace("%s", encodeURIComponent(n));
									s(a, {}, r)
								}, this.deleteMessage = function(e, n, t, r) {
									var a;
									a = e ? ne.API_OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(n)).replace("%s", encodeURIComponent(t)) : ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(n)).replace("%s", encodeURIComponent(t)), s(a, {}, r)
								}, this.freeze = function(e, n, t, s) {
									var r = n ? ne.API_GROUPCHANNELS_CHANNELURL_FREEZE.replace("%s", encodeURIComponent(e)) : ne.API_OPENCHANNELS_CHANNELURL_FREEZE.replace("%s", encodeURIComponent(e));
									_(r, {
										freeze: t
									}, s)
								}
							},
							te = null;
						ne.getInstance = function() {
							return null === te ? null : te
						}, ne.API_VERSION = "v3", ne.API_ROUTING_URL = "https://api-p.sendbird.com/routing/%s", ne.API_USERS = "/%v/users".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_LOGIN = "/%v/users/%s/login".replace("%v", ne.API_VERSION), ne.API_USERS_USERID = "/%v/users/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_UNREAD_ITEM_COUNT = "/%v/users/%s/unread_item_count".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_METADATA = "/%v/users/%s/metadata".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_METADATA_KEY = "/%v/users/%s/metadata/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_UNREAD_MESSAGE_COUNT = "/%v/users/%s/unread_message_count".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_UNREAD_CHANNEL_COUNT = "/%v/users/%s/unread_channel_count".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_MARKASREADALL = "/%v/users/%s/mark_as_read_all".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH_GCM_TOKEN = "/%v/users/%s/push/gcm/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH_GCM = "/%v/users/%s/push/gcm".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSHPREFERENCE_CHANNELURL = "/%v/users/%s/push_preference/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSHPREFERENCE = "/%v/users/%s/push_preference/".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH_TEMPLATE = "/%v/users/%s/push/template".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_BLOCK = "/%v/users/%s/block".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_BLOCK_TARGETID = "/%v/users/%s/block/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH_APNS_TOKEN = "/%v/users/%s/push/apns/%s".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH_APNS = "/%v/users/%s/push/apns".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_PUSH = "/%v/users/%s/push".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE = "/%v/users/%s/channel_invitation_preference".replace("%v", ne.API_VERSION), ne.API_USERS_USERID_GROUP_CHANNEL_COUNT = "/%v/users/%s/group_channel_count".replace("%v", ne.API_VERSION), ne.API_USERS_COUNT_PREFERENCE = "/%v/users/%s/count_preference/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS = "/%v/open_channels".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL = "/%v/open_channels/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_MESSAGES = "/%v/open_channels/%s/messages".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID = "/%v/open_channels/%s/messages/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_PARTICIPANTS = "/%v/open_channels/%s/participants".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_METADATA = "/%v/open_channels/%s/metadata".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_METADATA_KEY = "/%v/open_channels/%s/metadata/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER = "/%v/open_channels/%s/metacounter".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_METACOUNTER_KEY = "/%v/open_channels/%s/metacounter/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_BAN = "/%v/open_channels/%s/ban".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_BAN_USERID = "/%v/open_channels/%s/ban/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_MUTE = "/%v/open_channels/%s/mute".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_MUTE_USERID = "/%v/open_channels/%s/mute/%s".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_FREEZE = "/%v/open_channels/%s/freeze".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS = "/%v/group_channels".replace("%v", ne.API_VERSION), ne.API_MYGROUPCHANNELS = "/%v/users/%s/my_group_channels".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL = "/%v/group_channels/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_INVITE = "/%v/group_channels/%s/invite".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_ACCEPT_INVITATION = "/%v/group_channels/%s/accept".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_DECLINE_INVITATION = "/%v/group_channels/%s/decline".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_HIDE = "/%v/group_channels/%s/hide".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_LEAVE = "/%v/group_channels/%s/leave".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_JOIN = "/%v/group_channels/%s/join".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES = "/%v/group_channels/%s/messages".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASREAD = "/%v/group_channels/%s/messages/mark_as_read".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_TOTALCOUNT = "/%v/group_channels/%s/messages/total_count".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_UNREADCOUNT = "/%v/group_channels/%s/messages/unread_count".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID = "/%v/group_channels/%s/messages/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MEMBERS = "/%v/group_channels/%s/members".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_METADATA = "/%v/group_channels/%s/metadata".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_METADATA_KEY = "/%v/group_channels/%s/metadata/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER = "/%v/group_channels/%s/metacounter".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY = "/%v/group_channels/%s/metacounter/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_RESET_USER_HISTORY = "/%v/group_channels/%s/reset_user_history".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_MEMBERS = "/%v/group_channels/%url/members".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_BAN = "/%v/group_channels/%s/ban".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_BAN_USERID = "/%v/group_channels/%s/ban/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MUTE = "/%v/group_channels/%s/mute".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MUTE_USERID = "/%v/group_channels/%s/mute/%s".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_FREEZE = "/%v/group_channels/%s/freeze".replace("%v", ne.API_VERSION), ne.API_STORAGE_FILE = "/%v/storage/file".replace("%v", ne.API_VERSION), ne.API_STORAGE_PROFILE = "/%v/storage/profile_image".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS = "/%v/open_channels/%s/messages/changelogs".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS = "/%v/group_channels/%s/messages/changelogs".replace("%v", ne.API_VERSION), ne.API_FRIENDS = "/%v/users/%s/friends".replace("%v", ne.API_VERSION), ne.API_FRIENDS_CHANGE_LOGS = "/%v/users/%s/friends/changelogs".replace("%v", ne.API_VERSION), ne.API_FRIENDS_DISCOVERIES = "/%v/users/%s/friend_discoveries".replace("%v", ne.API_VERSION), ne.API_GROUPCHANNELS_OPERATORS = "/%v/group_channels/%url/operators".replace("%v", ne.API_VERSION), ne.API_OPENCHANNELS_OPERATORS = "/%v/open_channels/%url/operators".replace("%v", ne.API_VERSION), ne.UPDATE_META_COUNTER_MODE_SET = 0, ne.UPDATE_META_COUNTER_MODE_INC = 1, ne.UPDATE_META_COUNTER_MODE_DEC = 2;
						var se = function() {
								var e = "";
								this.isLoading = !1, this.hasMore = !0, this.limit = 20;
								var n = this;
								this.next = function(t) {
									if (_(n.limit)) {
										if (n.hasMore) {
											if (n.isLoading) return void S(null, new I("Query in progress.", $.QUERY_IN_PROGRESS), t);
											n.isLoading = !0, ne.getInstance().friendListQuery(ue.getInstance().getCurrentUserId(), e, n.limit, (function(s, r) {
												if (r) return n.isLoading = !1, void S(null, r, t);
												var a = s.users.map((function(e) {
													return new B(e)
												}));
												n.hasMore = s.has_more, n.isLoading = !1, e = s.next, S(a, null, t)
											}))
										}
									} else S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), t)
								}
							},
							re = function(e, n, t, s) {
								c ? this[t] = e[n] : Object.defineProperty(e, t, {
									get: function() {
										return "_coverUrl" === n || "_coverImage" === n ? e._channelCover : e[n]
									},
									set: function(t) {
										if ("file" === s) {
											if ("string" == typeof t || "object" != typeof t) return
										} else if (s && typeof t !== s) return;
										e[n] = t, "_coverUrl" !== n && "_coverImage" !== n || (e._channelCover = t)
									}
								})
							},
							ae = function() {
								this._isDistinct = null, re(this, "_isDistinct", "isDistinct", "boolean"), this._isSuper = null, re(this, "_isSuper", "isSuper", "boolean"), this._isPublic = null, re(this, "_isPublic", "isPublic", "boolean"), this._channelUrl = null, re(this, "_channelUrl", "channelUrl", "string"), this._name = null, re(this, "_name", "name", "string"), this._data = null, re(this, "_data", "data", "string"), this._customType = null, re(this, "_customType", "customType", "string"), this._channelCover = null, re(this, "_channelCover", "channelCover", null), this._coverUrl = null, re(this, "_coverUrl", "coverUrl", "string"), this._coverImage = null, re(this, "_coverImage", "coverImage", "file"), this._operatorIds = [], this._operators = null, c ? this.operators = this._operators : Object.defineProperty(this, "operators", {
									get: function() {
										return this._operators
									},
									set: function(e) {
										if (Array.isArray(e)) {
											for (var n = [], t = 0; t < e.length; t++) e[t].hasOwnProperty("userId") ? n.push(e[t].userId) : n = [];
											n.length === e.length && (this._operatorIds = n)
										}
									}
								}), this._operatorUserIds = null, c ? this.operatorUserIds = this._operatorUserIds : Object.defineProperty(this, "operatorUserIds", {
									get: function() {
										return this._operatorUserIds
									},
									set: function(e) {
										if (Array.isArray(e)) {
											for (var n = [], t = 0; t < e.length; t++) "string" == typeof e[t] ? n.push(e[t]) : n = [];
											n.length === e.length && (this._operatorIds = n)
										}
									}
								}), this._isEphemeral = null, re(this, "_isEphemeral", "isEphemeral", "boolean"), this._inviteUserIds = [], this.addUsers = function(e) {
									if (Array.isArray(e)) {
										for (var n = e.length, t = [], s = 0; s < n; s++) e[s].hasOwnProperty("userId") ? t.push(e[s].userId) : t = [];
										t.length > 0 && (this._inviteUserIds = this._inviteUserIds.concat(t))
									}
								}, this.addUser = function(e) {
									e.hasOwnProperty("userId") && this._inviteUserIds.push(e.userId)
								}, this.addUserIds = function(e) {
									if (Array.isArray(e)) {
										for (var n = e.length, t = [], s = 0; s < n; s++) "string" == typeof e[s] ? t.push(e[s]) : t = [];
										t.length > 0 && (this._inviteUserIds = this._inviteUserIds.concat(t))
									}
								}, this.addUserId = function(e) {
									"string" == typeof e && this._inviteUserIds.push(e)
								}
							},
							ie = function() {};
						ie.MentionType = {
							USERS: "users",
							CHANNEL: "channel"
						};
						var oe = function() {
							this._message = null, re(this, "_message", "message", "string"), this._targetLanguages = null, c ? this.targetLanguages = this._targetLanguages : Object.defineProperty(this, "targetLanguages", {
								get: function() {
									return this._targetLanguages
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = 0; n < e.length; n++)
											if ("string" != typeof e[n]) return void(this._targetLanguages = []);
										this._targetLanguages = e
									}
								}
							}), this._data = null, re(this, "_data", "data", "string"), this._customType = null, re(this, "_customType", "customType", "string"), this._mentionType = ie.MentionType.USERS, c ? this.mentionType = this._mentionType : Object.defineProperty(this, "mentionType", {
								get: function() {
									return this._mentionType
								},
								set: function(e) {
									[ie.MentionType.USERS, ie.MentionType.CHANNEL].indexOf(e) < 0 || (this._mentionType = e)
								}
							}), this._mentionedIds = [], this._mentionedUsers = null, c ? this.mentionedUsers = this._mentionedUsers : Object.defineProperty(this, "mentionedUsers", {
								get: function() {
									return this._mentionedUsers
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = [], t = [], s = {}, r = 0; r < e.length; r++) {
											if (!e[r].hasOwnProperty("userId")) return this._mentionedIds = [], void(this._mentionedUsers = []);
											s[e[r].userId] || (s[e[r].userId] = !0, ue.getInstance().getCurrentUserId() !== e[r].userId && (n.push(e[r]), t.push(e[r].userId)))
										}
										this._mentionedUserIds = [], this._mentionedIds = t, this._mentionedUsers = n
									}
								}
							}), this._mentionedUserIds = null, c ? this.mentionedUserIds = this._mentionedUserIds : Object.defineProperty(this, "mentionedUserIds", {
								get: function() {
									return this._mentionedUserIds
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = [], t = {}, s = 0; s < e.length; s++) {
											if ("string" != typeof e[s]) return this._mentionedIds = [], void(this._mentionedUserIds = []);
											t[e[s]] || (t[e[s]] = !0, ue.getInstance().getCurrentUserId() !== e[s] && n.push(e[s]))
										}
										this._mentionedUsers = [], this._mentionedIds = n, this._mentionedUserIds = n
									}
								}
							}), this._pushNotificationDeliveryOption = null, re(this, "_pushNotificationDeliveryOption", "pushNotificationDeliveryOption", "string")
						};
						oe.PushNotificationDeliveryOption = {
							DEFAULT: "default",
							SUPPRESS: "suppress"
						};
						var le = function() {
							this._file = null, c ? this.file = this._file : Object.defineProperty(this, "file", {
								get: function() {
									return this._file
								},
								set: function(e) {
									"string" != typeof e && "object" == typeof e && (this._fileUrl = null, this._file = e)
								}
							}), this._fileUrl = null, c ? this.fileUrl = this._fileUrl : Object.defineProperty(this, "fileUrl", {
								get: function() {
									return this._fileUrl
								},
								set: function(e) {
									"string" == typeof e && (this._file = null, this._fileUrl = e)
								}
							}), this._thumbnailSizes = null, c ? this.thumbnailSizes = this._thumbnailSizes : Object.defineProperty(this, "thumbnailSizes", {
								get: function() {
									return this._thumbnailSizes
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = 0; n < e.length; n++)
											if ("object" != typeof e[n] || "number" != typeof e[n].maxWidth || "number" != typeof e[n].maxHeight) return void(this._thumbnailSizes = []);
										this._thumbnailSizes = e
									}
								}
							}), this._fileName = null, re(this, "_fileName", "fileName", "string"), this._mimeType = null, re(this, "_mimeType", "mimeType", "string"), this._fileSize = null, re(this, "_fileSize", "fileSize", "number"), this._data = null, re(this, "_data", "data", "string"), this._customType = null, re(this, "_customType", "customType", "string"), this._mentionType = ie.MentionType.USERS, c ? this.mentionType = this._mentionType : Object.defineProperty(this, "mentionType", {
								get: function() {
									return this._mentionType
								},
								set: function(e) {
									[ie.MentionType.USERS, ie.MentionType.CHANNEL].indexOf(e) < 0 || (this._mentionType = e)
								}
							}), this._mentionedIds = [], this._mentionedUsers = null, c ? this.mentionedUsers = this._mentionedUsers : Object.defineProperty(this, "mentionedUsers", {
								get: function() {
									return this._mentionedUsers
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = [], t = [], s = {}, r = 0; r < e.length; r++) {
											if (!e[r].hasOwnProperty("userId")) return this._mentionedIds = [], void(this._mentionedUsers = []);
											s[e[r].userId] || (s[e[r].userId] = !0, ue.getInstance().getCurrentUserId() !== e[r].userId && (n.push(e[r]), t.push(e[r].userId)))
										}
										this._mentionedUserIds = [], this._mentionedIds = t, this._mentionedUsers = n
									}
								}
							}), this._mentionedUserIds = null, c ? this.mentionedUserIds = this._mentionedUserIds : Object.defineProperty(this, "mentionedUserIds", {
								get: function() {
									return this._mentionedUserIds
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = [], t = {}, s = 0; s < e.length; s++) {
											if ("string" != typeof e[s]) return this._mentionedIds = [], void(this._mentionedUserIds = []);
											t[e[s]] || (t[e[s]] = !0, ue.getInstance().getCurrentUserId() !== e[s] && n.push(e[s]))
										}
										this._mentionedUsers = [], this._mentionedIds = n, this._mentionedUserIds = n
									}
								}
							}), this._pushNotificationDeliveryOption = null, re(this, "_pushNotificationDeliveryOption", "pushNotificationDeliveryOption", "string")
						};
						le.PushNotificationDeliveryOption = {
							DEFAULT: "default",
							SUPPRESS: "suppress"
						};
						var ue = function(e) {
								var t = ue.getInstance();
								if (t) return t;
								try {
									if (!e.hasOwnProperty("appId")) return n.log("Must be set appId"), {}
								} catch (e) {
									return n.log("Must be set appId"), {}
								}
								this.GCMPushToken = "", this.APNSPushToken = "", this.PUSH_TEMPLATE_DEFAULT = "default", this.PUSH_TEMPLATE_ALTERNATIVE = "alternative", this.isSessionOpened = !1, this.pushTokenRegistrationState = {
									SUCCESS: "success",
									PENDING: "pending",
									ERROR: "error"
								}, this.loginTimer, this.onLoginTimerCancel, this.globalTimer, this.reconnectTimer, this.onReconnectTimerCancel, this.currentUser = null, this.getCurrentUserId = function() {
									return ue.getInstance().currentUser ? ue.getInstance().currentUser.userId : null
								}, this.wsClient, this.connectionState = {
									CONNECTING: "CONNECTING",
									OPEN: "OPEN",
									CLOSING: "CLOSING",
									CLOSED: "CLOSED"
								}, this.ConnectionState = this.connectionState, this.BaseChannel = E, this.User = B, this.Member = j, this.OpenChannel = H, this.GroupChannel = k, this.UserMessage = D, this.FileMessage = M, this.AdminMessage = b, this.userEventHandlers = {}, this.channelHandlers = {}, this.connectionHandlers = {}, this.connectionCallback = [], this.GroupChannelParams = ae, this.BaseMessageParams = ie, this.FileMessageParams = le, this.UserMessageParams = oe, this.GroupChannelTotalUnreadMessageCountParams = F;
								var i = {};
								T = e.appId, ce = this, (te = ne.getInstance()) || (te = new ne), this.Options = {
									_useMemberAsMessageSender: !1,
									get UseMemberAsMessageSender() {
										return this._useMemberAsMessageSender
									},
									set UseMemberAsMessageSender(e) {
										"boolean" == typeof e && (this._useMemberAsMessageSender = e)
									},
									get useMemberAsMessageSender() {
										return this._useMemberAsMessageSender
									},
									set useMemberAsMessageSender(e) {
										"boolean" == typeof e && (this._useMemberAsMessageSender = e)
									},
									_typingIndicatorThrottle: 1e3,
									get typingIndicatorThrottle() {
										return this._typingIndicatorThrottle
									},
									set typingIndicatorThrottle(e) {
										"number" == typeof e && e >= 1e3 && e <= 9e3 && (this._typingIndicatorThrottle = e)
									}
								}, this.customApiHost = null, this.customWsHost = null, this.UserEventHandler = function() {
									this.onFriendsDiscovered = function(e) {}
								}, this.addUserEventHandler = function(e, n) {
									ue.getInstance().userEventHandlers[e] = n
								}, this.removeUserEventHandler = function(e) {
									delete ue.getInstance().userEventHandlers[e]
								}, this.removeAllUserEventHandler = function() {
									ue.getInstance().userEventHandlers = {}
								}, this.ChannelHandler = function() {
									this.onMessageReceived = function(e, n) {}, this.onMessageUpdated = function(e, n) {}, this.onMessageDeleted = function(e, n) {}, this.onReadReceiptUpdated = function(e) {}, this.onTypingStatusUpdated = function(e) {}, this.onUserJoined = function(e, n) {}, this.onUserLeft = function(e, n) {}, this.onUserEntered = function(e, n) {}, this.onUserExited = function(e, n) {}, this.onUserMuted = function(e, n) {}, this.onUserUnmuted = function(e, n) {}, this.onUserBanned = function(e, n) {}, this.onUserUnbanned = function(e, n) {}, this.onChannelFrozen = function(e) {}, this.onChannelUnfrozen = function(e) {}, this.onChannelChanged = function(e) {}, this.onChannelDeleted = function(e) {}, this.onUserReceivedInvitation = function(e, n, t) {}, this.onUserDeclinedInvitation = function(e, n, t) {}, this.onMetaDataCreated = function(e, n) {}, this.onMetaDataUpdated = function(e, n) {}, this.onMetaDataDeleted = function(e, n) {}, this.onMetaCountersCreated = function(e, n) {}, this.onMetaCountersUpdated = function(e, n) {}, this.onMetaCountersDeleted = function(e, n) {}, this.onChannelHidden = function(e) {}, this.onMentionReceived = function(e, n) {}
								}, this.addChannelHandler = function(e, n) {
									ue.getInstance().channelHandlers[e] = n
								}, this.removeChannelHandler = function(e) {
									delete ue.getInstance().channelHandlers[e]
								}, this.removeAllChannelHandlers = function() {
									ue.getInstance().channelHandlers = {}
								}, this.ConnectionHandler = function() {
									this.onReconnectStarted = function() {}, this.onReconnectSucceeded = function() {}, this.onReconnectFailed = function() {}
								}, this.addConnectionHandler = function(e, n) {
									ue.getInstance().connectionHandlers[e] = n
								}, this.removeConnectionHandler = function(e) {
									delete ue.getInstance().connectionHandlers[e]
								}, this.removeAllConnectionHandlers = function() {
									ue.getInstance().connectionHandlers = {}
								}, this.createUserListQuery = function(e) {
									return e ? new X(X.FILTERED_USER, e) : new X(X.ALL_USER)
								}, this.createBlockedUserListQuery = function() {
									return new X(X.BLOCKED_USER)
								}, this.getApplicationId = function() {
									return T
								}, this.getDebugMode = function() {
									return s
								}, this.setDebugMode = function(e) {
									s = e
								}, this.setAPIHost = function(e) {
									a = e
								}, this.setWSHost = function(e) {
									r = e
								}, this.clearCurrentApiHost = function() {
									this.customApiHost = null
								}, this.getCurrentApiHost = function() {
									return this.customApiHost ? this.customApiHost : a
								}, this.clearCurrentWsHost = function() {
									this.customWsHost = null
								}, this.getCurrentWsHost = function() {
									return this.customWsHost ? this.customWsHost : r
								}, this.setErrorFirstCallback = function(e) {
									v = e
								}, this.getErrorFirstCallback = function() {
									return v
								}, this.getConnectionState = function() {
									if (!ue.getInstance()) return this.connectionState.CLOSED;
									try {
										return ue.getInstance().wsClient ? ue.getInstance().isSessionOpened ? ue.getInstance().wsClient.getConnectionState() : ue.getInstance().connectionState.CONNECTING : ue.getInstance().connectionState.CLOSED
									} catch (e) {
										return ue.getInstance().connectionState.CLOSED
									}
								}, this.hasLoggedIn = function() {
									return ue.getInstance().currentUser && ne.getInstance().sessionKey
								};
								var o = function(e) {
										return i.hasOwnProperty(e) ? i[e] : null
									},
									l = function(e) {
										var t = new x(e);
										if (t.requestId) {
											var s = o(t.requestId);
											if (null == s) return;
											clearTimeout(s.timer);
											var r = s.handler;
											if (r)
												if ("EROR" === t.command) {
													var a = t.getJsonElement(),
														i = a.code,
														l = a.message;
													r(t, new I(l, i))
												} else r(t, null)
										} else switch (t.command) {
											case "LOGI":
												if (ue.getInstance().loginTimer) {
													clearTimeout(ue.getInstance().loginTimer), ue.getInstance().loginTimer = null, ue.getInstance().onLoginTimerCancel = null;
													var d = t.getJsonElement();
													d.hasOwnProperty("error") ? (ue.getInstance().isSessionOpened = !1, i = d.code, l = d.message, ue.getInstance().loginHandler(null, new I(l, i))) : (ue.getInstance().isSessionOpened = !0, d.hasOwnProperty("key") && (ne.getInstance().sessionKey = d.key), d.hasOwnProperty("ekey") && (ne.getInstance().ekey = d.ekey), d.hasOwnProperty("user_id") && (ue.getInstance().currentUser = new B(d)), ue.getInstance().loginHandler(ue.getInstance().currentUser, null))
												}
												break;
											case "MESG":
											case "FILE":
											case "BRDM":
											case "ADMM":
												var h = "",
													_ = !1;
												if ("MESG" === t.command ? h = new D(t.getJsonElement()) : "FILE" === t.command ? h = new M(t.getJsonElement()) : (h = new b(t.getJsonElement()), t.getJsonElement().hasOwnProperty("silent") && (_ = t.getJsonElement().silent)), !h) return;
												if (h.isGroupChannel()) {
													var p = k.cachedChannels.hasOwnProperty(h.channelUrl);
													k.getChannel(h.channelUrl, (function(e, n) {
														if (v) {
															var t = e;
															e = n, n = t
														}
														if (n) r && r(null, n);
														else {
															if (e.isHidden = !1, k.cachedChannels[e.url] = e, h._sender && e.memberMap.hasOwnProperty(h._sender.userId)) {
																var s = e.memberMap[h._sender.userId];
																s.nickname !== h._sender.nickname && (s.nickname = h._sender.nickname), s.profileUrl !== h._sender.profileUrl && (s.profileUrl = h._sender.profileUrl)
															}
															var a = ue.getInstance().currentUser;
															a && h._sender && a.userId === h._sender.userId && (a.nickname !== h._sender.nickname && (a.nickname = h._sender.nickname), a.profileUrl !== h._sender.profileUrl && (a.profileUrl = h._sender.profileUrl));
															var i = !1;
															if (h.mentionType === ie.MentionType.CHANNEL) h.sender && h.sender.userId === ue.getInstance().getCurrentUserId() || (i = !0);
															else if (h.mentionType === ie.MentionType.USERS)
																for (var o in h.mentionedUsers)
																	if ((!h.sender || h.sender.userId !== ue.getInstance().getCurrentUserId()) && h.mentionedUsers[o].userId === ue.getInstance().getCurrentUserId()) {
																		i = !0;
																		break
																	} if (_ || (e.isEphemeral ? (e.lastMessage = h, h.sender && h.sender.userId === ue.getInstance().getCurrentUserId() || g(e, e.unreadMessageCount + 1, e.unreadMentionCount + (i ? 1 : 0))) : p && (e.lastMessage = h, h.sender && h.sender.userId === ue.getInstance().getCurrentUserId() || g(e, e.unreadMessageCount + 1, e.unreadMentionCount + (i ? 1 : 0)))), !_)
																for (var o in ue.getInstance().channelHandlers)(l = ue.getInstance().channelHandlers[o]).onChannelChanged(e);
															for (var o in ue.getInstance().channelHandlers) {
																var l;
																(l = ue.getInstance().channelHandlers[o]).onMessageReceived(e, h), i && l.onMentionReceived(e, h)
															}
														}
													}))
												} else H.getChannel(h.channelUrl, (function(e, n) {
													if (v) {
														var t = e;
														e = n, n = t
													}
													if (n) r && r(null, n);
													else {
														var s = !1;
														if (h.mentionType === ie.MentionType.CHANNEL) s = !0;
														else if (h.mentionType === ie.MentionType.USERS)
															for (var a in h.mentionedUsers)
																if (h.mentionedUsers[a].userId === ue.getInstance().getCurrentUserId()) {
																	s = !0;
																	break
																} for (var a in ue.getInstance().channelHandlers) {
															var i = ue.getInstance().channelHandlers[a];
															H.enteredChannels[e.url] && i.onMessageReceived(e, h), s && i.onMentionReceived(e, h)
														}
													}
												}));
												break;
											case "MEDI":
											case "FEDI":
											case "AEDI":
												if (h = "", !(h = "MEDI" === t.command ? new D(t.getJsonElement()) : "FEDI" === t.command ? new M(t.getJsonElement()) : new b(t.getJsonElement()))) return;
												h.isGroupChannel() ? k.getChannel(h.channelUrl, (function(e, n) {
													if (v) {
														var t = e;
														e = n, n = t
													}
													if (n) r && r(null, n);
													else {
														if (h._sender && e.memberMap.hasOwnProperty(h._sender.userId)) {
															var s = e.memberMap[h._sender.userId];
															s.nickname !== h._sender.nickname && (s.nickname = h._sender.nickname), s.profileUrl !== h._sender.profileUrl && (s.profileUrl = h._sender.profileUrl)
														}
														var a = ue.getInstance().currentUser;
														for (var i in a && h._sender && a.userId === h._sender.userId && (a.nickname !== h._sender.nickname && (a.nickname = h._sender.nickname), a.profileUrl !== h._sender.profileUrl && (a.profileUrl = h._sender.profileUrl)), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onMessageUpdated(e, h)
													}
												})) : H.getChannel(h.channelUrl, (function(e, n) {
													if (v) {
														var t = e;
														e = n, n = t
													}
													if (n) r && r(null, n);
													else
														for (var s in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[s].onMessageUpdated(e, h)
												}));
												break;
											case "READ":
												var E = new Y(t.getJsonElement());
												p = k.cachedChannels.hasOwnProperty(E.channelUrl), k.getChannel(E.channelUrl, (function(e, n) {
													if (v) {
														var t = e;
														e = n, n = t
													}
													if (n) r && r(null, n);
													else if (E.reader.userId === ue.getInstance().getCurrentUserId()) {
														if (p) {
															if (e.unreadMessageCount > 0 || e.unreadMentionCount > 0)
																for (var s in g(e, 0, 0), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[s].onChannelChanged(e)
														} else if (0 === e.unreadMessageCount || 0 === e.unreadMentionCount)
															for (var s in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[s].onChannelChanged(e)
													} else
														for (var s in e.updateReadReceipt(E.reader.userId, E.timestamp), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[s].onReadReceiptUpdated(e)
												}));
												break;
											case "TPST":
											case "TPEN":
											case "MTIO":
												break;
											case "SYEV":
												c(t);
												break;
											case "USEV":
												u(t);
												break;
											case "DELM":
												var f = t.getJsonElement(),
													m = String(f.channel_type),
													A = String(f.channel_url),
													N = String(f.msg_id);
												switch (m) {
													case w.CHANNEL_TYPE_OPEN:
														H.getChannel(A, (function(e, t) {
															if (v) {
																var s = e;
																e = t, t = s
															}
															if (t) n.log("Discard a command.");
															else
																for (var r in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onMessageDeleted(e, N)
														}));
														break;
													case w.CHANNEL_TYPE_GROUP:
														k.getChannel(A, (function(e, t) {
															if (v) {
																var s = e;
																e = t, t = s
															}
															if (t) n.log("Discard a command.");
															else
																for (var r in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onMessageDeleted(e, N)
														}))
												}
										}
									},
									u = function(e) {
										var n = new G(e.getJsonElement());
										switch (n.category) {
											case V.CATEGORY_USER_BLOCK:
											case V.CATEGORY_USER_UNBLOCK:
												var t = n.data.blocker.user_id,
													s = n.data.blockee.user_id;
												Object.keys(k.cachedChannels).forEach((function(e) {
													var r = k.cachedChannels[e];
													try {
														ue.getInstance().getCurrentUserId() === t ? r.memberMap[s].isBlockedByMe = n.category === V.CATEGORY_USER_BLOCK : ue.getInstance().getCurrentUserId() === s && (r.memberMap[t].isBlockingMe = n.category === V.CATEGORY_USER_BLOCK)
													} catch (e) {}
												}));
												break;
											case V.CATEGORY_FRIEND_DISCOVERED:
												var r = n.data.friend_discoveries.map((function(e) {
													return new B(e)
												}));
												for (var a in ue.getInstance().userEventHandlers) ue.getInstance().userEventHandlers[a].onFriendsDiscovered(r)
										}
									},
									c = function(e) {
										var t = e.getJsonElement(),
											s = new G(t);
										switch (s.category) {
											case G.CATEGORY_CHANNEL_JOIN:
											case G.CATEGORY_CHANNEL_LEAVE:
												k.getChannel(s.channelUrl, (function(r, a) {
													if (v) {
														var i = r;
														r = a, a = i
													}
													if (a) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var o = s.data.hasOwnProperty("member_count") ? s.data.member_count : null,
															l = s.data.hasOwnProperty("joined_member_count") ? s.data.joined_member_count : null;
														if (s.category === G.CATEGORY_CHANNEL_JOIN)(s.data.hasOwnProperty("users") ? s.data.users : function(e) {
															return e.state = j.JOINED, [e]
														}(s.data)).forEach((function(e) {
															! function(e, n, s) {
																r.isSuper ? r.setLatestMemberCount(n, s, t.ts) : (e.state = j.JOINED, r.addMember(new j(e)), r.updateJoinedMemberCount());
																var a = new B(e);
																for (var i in a.userId === ue.getInstance().getCurrentUserId() && (r.myMemberState = "joined", k.cachedChannels[r.url] = r), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onUserJoined(r, a)
															}(e, o, l)
														}));
														else {
															var u = new B(s.data);
															for (var c in u.userId === ue.getInstance().getCurrentUserId() ? (r.isPublic || k.removeCachedChannel(s.channelUrl), r.myMemberState = "none") : k.cachedChannels[r.url] = r, r.isSuper ? r.setLatestMemberCount(o, l, t.ts) : (r.removeMember(u), r.updateJoinedMemberCount()), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[c].onUserLeft(r, u)
														}
													}
												}));
												break;
											case G.CATEGORY_CHANNEL_INVITE:
												k.getChannel(s.channelUrl, (function(r, a) {
													if (v) {
														var i = r;
														r = a, a = i
													}
													if (a) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var o = null;
														s.data && s.data.inviter && !h(s.data.inviter) && (o = new B(s.data.inviter));
														var l = [];
														for (var u in s.data.invitees) {
															var c = new B(s.data.invitees[u]);
															l.push(c), s.data.invitees[u].state = j.INVITED;
															var d = new j(s.data.invitees[u]);
															if (r.isSuper) {
																var _ = s.data.hasOwnProperty("member_count") ? s.data.member_count : null,
																	p = s.data.hasOwnProperty("joined_member_count") ? s.data.joined_member_count : null;
																r.setLatestMemberCount(_, p, t.ts)
															} else r.addMember(d);
															d.userId === ue.getInstance().getCurrentUserId() && (r.isHidden = !1, "joined" !== r.myMemberState && (r.myMemberState = "invited"), k.cachedChannels[r.url] = r)
														}
														for (var u in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[u].onUserReceivedInvitation(r, o, l)
													}
												}));
												break;
											case G.CATEGORY_CHANNEL_DECLINE_INVITE:
												k.getChannel(s.channelUrl, (function(r, a) {
													if (v) {
														var i = r;
														r = a, a = i
													}
													if (a) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var o = null;
														s.data && s.data.inviter && !h(s.data.inviter) && (o = new B(s.data.inviter));
														var l = new B(s.data.invitee);
														if (l.userId === ue.getInstance().getCurrentUserId() && (r.myMemberState = "none", r.isPublic || k.removeCachedChannel(s.channelUrl)), r.isSuper) {
															var u = s.data.hasOwnProperty("member_count") ? s.data.member_count : null,
																c = s.data.hasOwnProperty("joined_member_count") ? s.data.joined_member_count : null;
															r.setLatestMemberCount(u, c, t.ts)
														} else r.removeMember(l);
														for (var d in k.cachedChannels[r.url] = r, ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[d].onUserDeclinedInvitation(r, o, l)
													}
												}));
												break;
											case G.CATEGORY_TYPING_START:
											case G.CATEGORY_TYPING_END:
												k.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var i = new B(s.data);
														for (var o in s.category === G.CATEGORY_TYPING_START ? t.updateTypingStatus(i, !0) : t.updateTypingStatus(i, !1), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onTypingStatusUpdated(t)
													}
												}));
												break;
											case G.CATEGORY_CHANNEL_ENTER:
											case G.CATEGORY_CHANNEL_EXIT:
												H.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														s.data.hasOwnProperty("participant_count") && (t.participantCount = s.data.participant_count);
														var i = new B(s.data);
														if (s.category === G.CATEGORY_CHANNEL_ENTER)
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserEntered(t, i);
														else
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserExited(t, i)
													}
												}));
												break;
											case G.CATEGORY_USER_CHANNEL_MUTE:
											case G.CATEGORY_USER_CHANNEL_UNMUTE:
												s.isOpenChannel() ? H.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var i = new B(s.data);
														if (s.category === G.CATEGORY_USER_CHANNEL_MUTE)
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserMuted(t, i);
														else
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserUnmuted(t, i)
													}
												})) : k.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var i = new B(s.data);
														if (i.userId === ue.getInstance().getCurrentUserId() && (t.myMutedState = s.category === G.CATEGORY_USER_CHANNEL_MUTE ? "muted" : "unmuted"), s.category === G.CATEGORY_USER_CHANNEL_MUTE)
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserMuted(t, i);
														else
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserUnmuted(t, i)
													}
												}));
												break;
											case G.CATEGORY_USER_CHANNEL_BAN:
											case G.CATEGORY_USER_CHANNEL_UNBAN:
												s.isOpenChannel() ? H.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var i = new B(s.data);
														if (s.category === G.CATEGORY_USER_CHANNEL_BAN)
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserBanned(t, i);
														else
															for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onUserUnbanned(t, i)
													}
												})) : k.getChannel(s.channelUrl, (function(r, a) {
													if (v) {
														var i = r;
														r = a, a = i
													}
													if (a) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var o = new B(s.data);
														if (s.category === G.CATEGORY_USER_CHANNEL_BAN) {
															if (o.userId === ue.getInstance().getCurrentUserId() && (r.myMemberState = "none"), r.isSuper) {
																var l = s.data.hasOwnProperty("member_count") ? s.data.member_count : null,
																	u = s.data.hasOwnProperty("joined_member_count") ? s.data.joined_member_count : null;
																r.setLatestMemberCount(l, u, t.ts)
															} else r.removeMember(o), r.updateJoinedMemberCount();
															for (var c in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[c].onUserBanned(r, o)
														} else
															for (var c in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[c].onUserUnbanned(r, o)
													}
												}));
												break;
											case G.CATEGORY_CHANNEL_FREEZE:
											case G.CATEGORY_CHANNEL_UNFREEZE:
												s.isOpenChannel() ? H.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else if (t.isFrozen = s.data.freeze, H.cachedChannels[t.url] = t, s.category === G.CATEGORY_CHANNEL_FREEZE)
														for (var i in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onChannelFrozen(t);
													else
														for (var i in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onChannelUnfrozen(t)
												})) : k.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else if (t.isFrozen = s.data.freeze, k.cachedChannels[t.url] = t, s.category === G.CATEGORY_CHANNEL_FREEZE)
														for (var i in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onChannelFrozen(t);
													else
														for (var i in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onChannelUnfrozen(t)
												}));
												break;
											case G.CATEGORY_CHANNEL_DELETED:
												if (s.isGroupChannel())
													for (var r in k.removeCachedChannel(s.channelUrl), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onChannelDeleted(s.channelUrl, "group");
												else
													for (var r in H.removeCachedChannel(s.channelUrl), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[r].onChannelDeleted(s.channelUrl, "open");
												break;
											case G.CATEGORY_CHANNEL_PROP_CHANGED:
												s.isOpenChannel() ? H.getChannelWithoutCache(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else
														for (var i in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[i].onChannelChanged(t)
												})) : k.getChannelWithoutCache(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														var i = t.unreadMessageCount,
															o = t.unreadMentionCount;
														for (var l in t.myCountPreference !== k.CountPreference.ALL && (t.myCountPreference === k.CountPreference.UNREAD_MESSAGE_COUNT_ONLY ? o = 0 : t.myCountPreference === k.CountPreference.UNREAD_MENTION_COUNT_ONLY ? i = 0 : (i = 0, o = 0)), g(t, i, o), ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[l].onChannelChanged(t)
													}
												}));
												break;
											case G.CATEGORY_CHANNEL_META_DATA_CHANGED:
											case G.CATEGORY_CHANNEL_META_COUNTERS_CHANGED:
												var a = s.data.hasOwnProperty("created"),
													i = s.data.hasOwnProperty("updated"),
													o = s.data.hasOwnProperty("deleted");
												s.isOpenChannel() ? H.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var l = t;
														t = r, r = l
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else
														for (var u in ue.getInstance().channelHandlers) {
															var c = ue.getInstance().channelHandlers[u];
															s.category === G.CATEGORY_CHANNEL_META_DATA_CHANGED ? (a && c.onMetaDataCreated(t, s.data.created), i && c.onMetaDataUpdated(t, s.data.updated), o && c.onMetaDataDeleted(t, s.data.deleted)) : (a && c.onMetaCountersCreated(t, s.data.created), i && c.onMetaCountersUpdated(t, s.data.updated), o && c.onMetaCountersDeleted(t, s.data.deleted))
														}
												})) : k.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var l = t;
														t = r, r = l
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else
														for (var u in ue.getInstance().channelHandlers) {
															var c = ue.getInstance().channelHandlers[u];
															s.category === G.CATEGORY_CHANNEL_META_DATA_CHANGED ? (a && c.onMetaDataCreated(t, s.data.created), i && c.onMetaDataUpdated(t, s.data.updated), o && c.onMetaDataDeleted(t, s.data.deleted)) : (a && c.onMetaCountersCreated(t, s.data.created), i && c.onMetaCountersUpdated(t, s.data.updated), o && c.onMetaCountersDeleted(t, s.data.deleted))
														}
												}));
												break;
											case G.CATEGORY_CHANNEL_HIDE:
												k.getChannel(s.channelUrl, (function(t, r) {
													if (v) {
														var a = t;
														t = r, r = a
													}
													if (r) n.log("Discard a command: " + e.command + ":" + s.category);
													else {
														if (t.isHidden = !0, s.data && s.data.hasOwnProperty("hide_previous_messages") && s.data.hide_previous_messages && k.cachedChannels) {
															var i = k.cachedChannels[t.url];
															g(i, 0, 0), k.cachedChannels[t.url] = i
														}
														for (var o in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[o].onChannelHidden(t)
													}
												}))
										}
									};
								this.setPushTemplate = function(e, n) {
									return !e || e !== this.PUSH_TEMPLATE_DEFAULT && e !== this.PUSH_TEMPLATE_ALTERNATIVE ? void S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n) : this.currentUser ? void ne.getInstance().setPushTemplate(this.getCurrentUserId(), e, (function(e, t) {
										if (t) S(null, t, n);
										else {
											var s = e.name.toString();
											S(s, null, n)
										}
									})) : void S(null, new I("Connection must be made before you set push template", $.CONNECTION_REQUIRED), n)
								}, this.getPushTemplate = function(e) {
									this.currentUser ? ne.getInstance().getPushTemplate(this.getCurrentUserId(), (function(n, t) {
										if (t) S(null, t, e);
										else {
											var s = n.name.toString();
											S(s, null, e)
										}
									})) : S(null, new I("Connection must be made before you get push template", $.CONNECTION_REQUIRED), e)
								}, this.setChannelInvitationPreference = function(e, n) {
									"boolean" != typeof e && S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n), ne.getInstance().setChannelInvitationPreference(this.getCurrentUserId(), e, (function(e, t) {
										t ? S(null, t, n) : S({
											autoAccept: e.auto_accept
										}, null, n)
									}))
								}, this.getChannelInvitationPreference = function(e) {
									ne.getInstance().getChannelInvitationPreference(this.getCurrentUserId(), (function(n, t) {
										t ? S(null, t, e) : S({
											autoAccept: n.auto_accept
										}, null, e)
									}))
								}, this.connect = function() {
									var e = Array.prototype.slice.call(arguments),
										t = null,
										r = null,
										a = null;
									switch ("function" == typeof e.slice(-1)[0] && (a = e.pop()), e.length) {
										case 1:
											t = e[0];
											break;
										case 2:
											t = e[0], r = e[1];
											break;
										case 3:
											t = e[0], this.customApiHost = e[1], this.customWsHost = e[2];
											break;
										case 4:
											t = e[0], r = e[1], this.customApiHost = e[2], this.customWsHost = e[3];
											break;
										default:
											s && n.log("sb.connect args length error: ", arguments)
									}
									t && 0 !== t.length ? (ue.getInstance().reconnectTimer && (clearTimeout(ue.getInstance().reconnectTimer), ue.getInstance().reconnectTimer = null, ue.getInstance().onReconnectTimerCancel = null), ue.getInstance().getConnectionState() === this.connectionState.OPEN && ue.getInstance().getCurrentUserId() === t ? S(ue.getInstance().currentUser, null, a) : (ue.getInstance().connectionCallback.push(a), 1 === ue.getInstance().connectionCallback.length && (f(!0, null), A(t, r)))) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), a)
								};
								var d = !1,
									_ = !1,
									p = !0;
								this.setBackgroundState = function() {
									!d && p && (d = !0, this.getConnectionState() !== this.connectionState.CLOSED ? (_ = !0, f(!1, null)) : _ = !1)
								}, this.setForegroundState = function() {
									d && p && (d = !1, _ && this.currentUser && (P = 0, m(this.getCurrentUserId(), !0)))
								}, this.disableStateChange = function() {
									p = !1
								}, this.enableStateChange = function() {
									p = !0
								}, this.disconnect = function(e) {
									f(!0, e)
								}, this.reconnect = function() {
									if (!ne.getInstance().sessionKey || !this.currentUser) return !1;
									var e = !0;
									return P > 0 && (e = !1), f(!1, null), P = 0, m(this.getCurrentUserId(), e), !0
								};
								var f = function(e, n) {
										var t = this;
										ue.getInstance().loginTimer && (clearTimeout(ue.getInstance().loginTimer), ue.getInstance().onLoginTimerCancel && (ue.getInstance().onLoginTimerCancel(), ue.getInstance().onLoginTimerCancel = null), ue.getInstance().loginTimer = null), ue.getInstance().reconnectTimer && (clearTimeout(ue.getInstance().reconnectTimer), ue.getInstance().onReconnectTimerCancel && (ue.getInstance().onReconnectTimerCancel(), ue.getInstance().onReconnectTimerCancel = null), ue.getInstance().reconnectTimer = null), ue.getInstance().wsClient && (P = 0, ue.getInstance().wsClient.disconnect(!0), ue.getInstance().wsClient = null),
											function() {
												if (e) {
													for (var s in H.clearEnteredChannels(), H.clearCache(), k.clearCache(), ue.getInstance().globalTimer && (clearTimeout(t.globalTimer), ue.getInstance().globalTimer = null), ue.getInstance().ackStateMap) clearTimeout(ue.getInstance().ackStateMap[s].timer);
													ue.getInstance().ackStateMap = {}, ue.getInstance().currentUser = null, ne.getInstance().sessionKey = null, ne.getInstance().ekey = null
												}
												S(null, null, n)
											}()
									},
									m = function(e, t) {
										if (ue.getInstance().reconnectTimer) s && n.log("still reconnecting");
										else {
											if ((P += 1) <= 1) {
												if (t)
													for (var r in ue.getInstance().connectionHandlers) ue.getInstance().connectionHandlers[r].onReconnectStarted(r);
												O = 0
											} else O = 3e3 * Math.pow(2, P - 2);
											if (!e || !ne.getInstance().sessionKey || P >= 6) {
												for (var r in f(!1, null), P = 0, ue.getInstance().connectionHandlers) ue.getInstance().connectionHandlers[r].onReconnectFailed(r);
												return
											}
											ue.getInstance().onReconnectTimerCancel = function() {
												P = 0
											}, ue.getInstance().reconnectTimer = setTimeout((function() {
												ue.getInstance().reconnectTimer = null, ue.getInstance().onReconnectTimerCancel = null, ue.getInstance().wsClient && ue.getInstance().wsClient.disconnect(!0);
												var t = new ee.WSClientHandler;
												ue.getInstance().wsClient = new ee(t), ue.getInstance().loginHandler = function(e) {
													for (var n in P = 0, H.enteredChannels) H.enteredChannels[n].enter();
													for (var n in ue.getInstance().connectionHandlers) ue.getInstance().connectionHandlers[n].onReconnectSucceeded(n)
												}, t.onOpen = function() {
													s && n.log("reconnectWS onOpen"), ue.getInstance().loginTimer = setTimeout((function() {
														s && n.log("reconnectWS loginTimer timedout"), ue.getInstance().loginTimer = null, m(e, !0)
													}), 1e4), ue.getInstance().onLoginTimerCancel = null
												}, t.onMessage = function(e) {
													l(e)
												}, t.onError = function() {
													s && n.log("reconnectWS onError"), m(e, !0)
												}, t.onClose = function() {
													s && n.log("reconnectWS onClose")
												};
												var r = ue.getInstance().getCurrentApiHost();
												ne.getInstance().checkRouting((function(n, t) {
													t ? m(e, !0) : (r !== n.API_HOST && y(n.API_HOST, {}, "GET", {}, (function() {})), ue.getInstance().wsClient.connect(e, null, n.WS_HOST))
												}))
											}), O)
										}
									},
									A = function(e, t) {
										var r = new ee.WSClientHandler;
										ue.getInstance().wsClient = new ee(r), r.onMessage = function(e) {
											l(e)
										}, ue.getInstance().loginHandler = function(e, n) {
											if (n) ue.getInstance().disconnect(null), ue.getInstance().connectionCallback.forEach((function(e) {
												S(null, n, e)
											})), ue.getInstance().connectionCallback = [];
											else {
												clearTimeout(ue.getInstance().globalTimer);
												var t = function() {
													if (k.cachedChannels)
														for (var e in k.cachedChannels) {
															var n = k.cachedChannels[e];
															if (n.invalidateTypingStatus())
																for (var s in ue.getInstance().channelHandlers) ue.getInstance().channelHandlers[s].onTypingStatusUpdated(n)
														}
													ue.getInstance().globalTimer = setTimeout((function() {
														t()
													}), 1e3)
												};
												t();
												var s = ue.getInstance().connectionCallback;
												ue.getInstance().connectionCallback = [], s.forEach((function(n) {
													S(e, null, n)
												})), s = []
											}
										}, r.onOpen = function(e) {
											ue.getInstance().loginTimer = setTimeout((function() {
												ue.getInstance().loginTimer = null, ue.getInstance().onLoginTimerCancel = null, ue.getInstance().disconnect(null), ue.getInstance().connectionCallback.forEach((function(e) {
													S(null, new I("Connection timeout.", $.LOGIN_TIMEOUT), e)
												})), ue.getInstance().connectionCallback = []
											}), 1e4), ue.getInstance().onLoginTimerCancel = function() {
												ue.getInstance().connectionCallback.forEach((function(e) {
													S(null, new I("Connection Cancelled.", $.REQUEST_FAILED), e)
												})), ue.getInstance().connectionCallback = []
											}
										}, r.onError = function(t) {
											s && n.log("WSClientHandler.onError", t), ne.getInstance().sessionKey ? m(e, !0) : (ue.getInstance().connectionCallback.forEach((function(e) {
												S(null, new I("Websocket connection failed.", $.WEBSOCKET_CONNECTION_FAILED), e)
											})), ue.getInstance().connectionCallback = [])
										}, r.onClose = function(e) {
											s && n.log("WSClientHandler.onClose")
										}, ne.getInstance().checkRouting((function(n, s) {
											if (s) return ue.getInstance().connectionCallback.forEach((function(e) {
												S(null, new I("Connection routing failed.", $.REQUEST_FAILED), e)
											})), void(ue.getInstance().connectionCallback = []);
											y(n.API_HOST, {}, "GET", {}, (function() {})), ue.getInstance().wsClient.connect(e, t, n.WS_HOST)
										}))
									};
								this.sendCommand = function(e, n) {
									if (ue.getInstance().hasLoggedIn())
										if (null != ue.getInstance().wsClient && ue.getInstance().wsClient.getConnectionState() === ue.getInstance().connectionState.OPEN)
											if (e.isAckRequired()) {
												var t = e.requestId,
													s = {
														handler: n,
														timer: setTimeout((function() {
															n(null, new I("Command received no ack.", $.ACK_TIMEOUT)), delete i[t]
														}), 1e4)
													};
												i[t] = s, ue.getInstance().wsClient.send(e, (function(e, t) {
													if (t) return clearTimeout(s.timer), void n(null, t)
												}))
											} else ue.getInstance().wsClient.send(e, n);
									else n && n(null, new I("Connection is not valid. Please reconnect.", $.WEBSOCKET_CONNECTION_CLOSED));
									else n && n(null, new I("Connection should be made first.", $.CONNECTION_REQUIRED))
								}, this.markAsReadAll = function(e) {
									var n = (new Date).getTime();
									n - k.markAsReadAllLastSentAt < 1e3 ? S(null, new I("MarkAsRead rate limit exceeded.", $.MARK_AS_READ_RATE_LIMIT_EXCEEDED), e) : (k.markAsReadAllLastSentAt = n, ne.getInstance().groupChannelMarkAsReadAll(ue.getInstance().getCurrentUserId(), null, (function(n, t) {
										if (t) S(null, t, e);
										else {
											for (var s in k.cachedChannels) g(k.cachedChannels[s], 0, 0);
											S(null, null, e)
										}
									})))
								}, this.markAsReadWithChannelUrls = function(e, n) {
									if (Array.isArray(e)) {
										var t = (new Date).getTime();
										t - k.markAsReadAllLastSentAt < 1e3 ? S(null, new I("MarkAsRead rate limit exceeded.", $.MARK_AS_READ_RATE_LIMIT_EXCEEDED), n) : (k.markAsReadAllLastSentAt = t, ne.getInstance().groupChannelMarkAsReadAll(ue.getInstance().getCurrentUserId(), e, (function(t, s) {
											s ? S(null, s, n) : (e.forEach((function(e) {
												var n = k.cachedChannels[e];
												n && (g(n, 0, 0), k.cachedChannels[e] = n)
											})), S(null, null, n))
										})))
									} else S(null, new I("Invalid parameter.", $.INVALID_PARAMETER), n)
								}, this.updateCurrentUserInfoWithProfileImage = function(e, n, t) {
									var s = this;
									n ? ne.getInstance().updateCurrentUserInfoWithFile(s.getCurrentUserId(), e, n, (function(r, a) {
										a ? S(null, a, t) : (s.currentUser && (e && (s.currentUser.nickname = e), n && (s.currentUser.profileUrl = r.profile_url)), S(s.currentUser, null, t))
									})) : s.updateCurrentUserInfo(e, null, t)
								}, this.updateCurrentUserInfo = function(e, n, t) {
									var s = this;
									ne.getInstance().updateUserInfo(s.getCurrentUserId(), e, n, (function(r, a) {
										a ? S(null, a, t) : (s.currentUser && (e && (s.currentUser.nickname = e), n && (s.currentUser.profileUrl = n)), S(s.currentUser, null, t))
									}))
								}, this.getPendingGCMToken = function() {
									return this.GCMPushToken
								}, this.getPendingAPNSToken = function() {
									return this.APNSPushToken
								}, this.registerGCMPushTokenForCurrentUser = function(e, n) {
									var t = this;
									return e ? this.currentUser ? void ne.getInstance().registerGCMPushToken(this.getCurrentUserId(), e, (function(e, s) {
										s ? S(t.pushTokenRegistrationState.ERROR, s, n) : (t.GCMPushToken = "", S(t.pushTokenRegistrationState.SUCCESS, null, n))
									})) : (t.GCMPushToken = e, void S(t.pushTokenRegistrationState.PENDING, null, n)) : void S(t.pushTokenRegistrationState.ERROR, new I("Invalid token", $.INVALID_PARAMETER), n)
								}, this.unregisterGCMPushTokenForCurrentUser = function(e, n) {
									e ? ne.getInstance().unregisterGCMPushToken(this.getCurrentUserId(), e, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("Invalid token", $.INVALID_PARAMETER), n)
								}, this.unregisterGCMPushTokenAllForCurrentUser = function(e) {
									ne.getInstance().unregisterGCMPushTokenAll(this.getCurrentUserId(), (function(n, t) {
										S(null, t || null, e)
									}))
								}, this.registerAPNSPushTokenForCurrentUser = function(e, n) {
									var t = this;
									return e ? this.currentUser ? void ne.getInstance().registerAPNSPushToken(this.getCurrentUserId(), e, (function(e, s) {
										s ? S(t.pushTokenRegistrationState.ERROR, s, n) : (t.APNSPushToken = "", S(t.pushTokenRegistrationState.SUCCESS, null, n))
									})) : (t.APNSPushToken = e, void S(t.pushTokenRegistrationState.PENDING, null, n)) : void S(t.pushTokenRegistrationState.ERROR, new I("Invalid token", $.INVALID_PARAMETER), n)
								}, this.unregisterAPNSPushTokenForCurrentUser = function(e, n) {
									e ? ne.getInstance().unregisterAPNSPushToken(this.getCurrentUserId(), e, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("Invalid token", $.INVALID_PARAMETER), n)
								}, this.unregisterAPNSPushTokenAllForCurrentUser = function(e) {
									ne.getInstance().unregisterAPNSPushTokenAll(this.getCurrentUserId(), (function(n, t) {
										S(null, t || null, e)
									}))
								}, this.unregisterPushTokenAllForCurrentUser = function(e) {
									ne.getInstance().unregisterPushTokenAll(this.getCurrentUserId(), (function(n, t) {
										S(null, t || null, e)
									}))
								}, this.setDoNotDisturb = function(e, n, t, s, r, a, i) {
									n < 0 || n > 23 || t < 0 || t > 59 || s < 0 || s > 23 || r < 0 || r > 59 ? S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), i) : ne.getInstance().setDoNotDisturb(this.getCurrentUserId(), e, n, t, s, r, a, (function(e, n) {
										if (n) S(null, n, i);
										else {
											var t = {
												doNotDisturbOn: e.do_not_disturb,
												startHour: e.start_hour,
												startMin: e.start_min,
												endHour: e.end_hour,
												endMin: e.end_min,
												timezone: e.timezone
											};
											S(t, null, i)
										}
									}))
								}, this.getDoNotDisturb = function(e) {
									ne.getInstance().getDoNotDisturb(this.getCurrentUserId(), (function(n, t) {
										if (t) S(null, t, e);
										else {
											var s = {
												doNotDisturbOn: n.do_not_disturb,
												startHour: n.start_hour,
												startMin: n.start_min,
												endHour: n.end_hour,
												endMin: n.end_min,
												timezone: n.timezone
											};
											S(s, null, e)
										}
									}))
								}, this.blockUser = function(e, n) {
									"object" == typeof e ? this.blockUserWithUserId(e.userId, n) : S(null, new I("You have to pass user object.", $.INVALID_PARAMETER), n)
								}, this.blockUserWithUserId = function(e, n) {
									this.getCurrentUserId() !== e ? ne.getInstance().blockUser(this.getCurrentUserId(), e, (function(e, t) {
										t ? S(null, t, n) : S(new B(e), null, n)
									})) : S(null, new I("You can not block yourself.", $.INVALID_PARAMETER), n)
								}, this.unblockUser = function(e, n) {
									"object" == typeof e ? this.unblockUserWithUserId(e.userId, n) : S(null, new I("You have to pass user object.", $.INVALID_PARAMETER), n)
								}, this.unblockUserWithUserId = function(e, n) {
									this.getCurrentUserId() !== e ? ne.getInstance().unblockUser(this.getCurrentUserId(), e, (function(e, t) {
										S(null, t || null, n)
									})) : S(null, new I("You can not unblock yourself.", $.INVALID_PARAMETER), n)
								}, this.addFriends = function(e, n) {
									Array.isArray(e) ? ne.getInstance().addFriends(this.getCurrentUserId(), e, (function(e, t) {
										if (t) S(null, t, n);
										else {
											var s = e.users.map((function(e) {
												return new B(e)
											}));
											S(s, null, n)
										}
									})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.deleteFriends = function(e, n) {
									Array.isArray(e) ? ne.getInstance().deleteFriends(this.getCurrentUserId(), e, (function(e, t) {
										t ? S(null, t, n) : S(e, null, n)
									})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.deleteFriend = function(e, n) {
									"string" == typeof e ? this.deleteFriends([e], n) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.uploadFriendDiscoveries = function(e, n) {
									var t = !0;
									for (var s in e)
										if (!e[s].hasOwnProperty("friendDiscoveryKey")) {
											t = !1, S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n);
											break
										} t && ne.getInstance().uploadFriendDiscoveries(this.getCurrentUserId(), e, (function(e, t) {
										t ? S(null, t, n) : S(e, null, n)
									}))
								}, this.deleteFriendDiscoveries = function(e, n) {
									Array.isArray(e) ? ne.getInstance().deleteFriendDiscoveries(this.getCurrentUserId(), e, (function(e, t) {
										t ? S(null, t, n) : S(e, null, n)
									})) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.deleteFriendDiscovery = function(e, n) {
									"string" == typeof e ? this.deleteFriendDiscoveries([e], n) : S(null, new I("Invalid arguments.", $.INVALID_PARAMETER), n)
								}, this.getFriendChangeLogsByToken = function(e, n) {
									if ("function" == typeof e && (n = e, e = null), "function" != typeof n) return null;
									ne.getInstance().getFriendChangeLogsByToken(this.getCurrentUserId(), e, (function(e, t) {
										if (t) S(null, t, n);
										else {
											var s = e.updated.map((function(e) {
													return new B(B.build(e.user_id, e.nickname, e.profile_url, e.is_online, e.last_seen_at, e.metadata, e.is_active, e.friend_discovery_key, e.friend_name))
												})),
												r = e.deleted,
												a = e.has_more,
												i = e.next;
											S({
												updatedUsers: s,
												deletedUserIds: r,
												hasMore: a,
												token: i
											}, null, n)
										}
									}))
								}, this.createFriendListQuery = function() {
									return new se
								}
							},
							ce = null;
						return ue.getInstance = function() {
							return null === ce ? null : ce
						}, {
							SendBird: ue
						}
					},
					N = null;
				return function() {
					var e = function(e) {
						if (e.newInstance || !N) {
							var n = new A;
							N = new n.SendBird(e)
						} else N && e.appId !== N.getApplicationId() && N.getConnectionState() === N.connectionState.CLOSED && (n = new A, N = new n.SendBird(e));
						return N
					};
					return e.getInstance = function() {
						return null === N ? null : N
					}, e.version = "3.0.69", {
						SendBird: e
					}
				}().SendBird
			}()
		},
		"./node_modules/websocket/lib/browser.js": function(e, n, t) {
			var s = function() {
					return this
				}(),
				r = s.WebSocket || s.MozWebSocket,
				a = t("./node_modules/websocket/lib/version.js");
			e.exports = {
				w3cwebsocket: r ? function(e, n) {
					return n ? new r(e, n) : new r(e)
				} : null,
				version: a
			}
		},
		"./node_modules/websocket/lib/version.js": function(e, n, t) {
			e.exports = t("./node_modules/websocket/package.json").version
		},
		"./node_modules/websocket/package.json": function(e) {
			e.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <brian@worlize.com> (https://www.worlize.com/)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.24","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=0.8.0"},"dependencies":{"debug":"^2.2.0","nan":"^2.3.3","typedarray-to-buffer":"^3.1.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","faucet":"^0.0.1","gulp":"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.0.1"},"config":{"verbose":false},"scripts":{"install":"(node-gyp rebuild 2> builderror.log) || (exit 0)","test":"faucet test/unit","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')
		},
		"./node_modules/xhr2/lib/browser.js": function(e, n) {
			e.exports = XMLHttpRequest
		}
	}
]);
//# sourceMappingURL=vendors~Chat~RedesignChat.5c6c446f6e045bc3c01b.js.map