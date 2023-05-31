// https://www.redditstatic.com/desktop2x/IdCard.2ca5a4143406d45ec4ea.js
// Retrieved at 5/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard", "AchievementsActions", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var r, s, i;
			s = [t, e], void 0 === (i = "function" == typeof(r = function(e, t) {
				"use strict";
				var n, r, s = "function" == typeof Map ? new Map : (n = [], r = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return r[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), r.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), r.splice(t, 1))
						}
					}),
					i = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					i = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function o(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, n = null,
							r = e.clientWidth,
							o = null,
							a = function() {
								e.clientWidth !== r && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: d,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function c(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							s = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							i = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var o = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = o + "px", r = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), i && (document.documentElement.scrollTop = i)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (r !== t ? "hidden" === n.overflowY && (c("scroll"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== r) {
							o = r;
							var s = i("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = s.get(e);
					t && t.update()
				}
				var c = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, c.update = function(e) {
					return e
				}) : ((c = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return o(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, c.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = c
			}) ? r.apply(t, s) : r) || (e.exports = i)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var r = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = r(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = r(e, "line-height"), n = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var i = e.nodeName,
						o = document.createElement(i);
					o.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && o.setAttribute("rows", "1");
					var a = r(e, "font-size");
					o.style.fontSize = a, o.style.padding = "0px", o.style.border = "0px";
					var d = document.body;
					d.appendChild(o), n = o.offsetHeight, d.removeChild(o)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var r, s, i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				a = u(n("./node_modules/react/index.js")),
				d = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = u(n("./node_modules/autosize/dist/autosize.js")),
				l = u(n("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var b = (s = r = function(e) {
				function t() {
					var e, n, r;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, o = Array(s), a = 0; a < s; a++) o[a] = arguments[a];
					return n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.state = {
						lineHeight: null
					}, r.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), r.textarea.dispatchEvent(t)
					}, r.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, r.updateLineHeight = function() {
						r.setState({
							lineHeight: (0, l.default)(r.textarea)
						})
					}, r.onChange = function(e) {
						r.currentValue = e.target.value, r.props.onChange && r.props.onChange(e)
					}, r.saveDOMNodeRef = function(e) {
						var t = r.props.innerRef;
						t && t(e), r.textarea = e
					}, r.getLocals = function() {
						var e = r,
							t = e.props,
							n = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							o = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = n && a ? a * n : null;
						return i({}, o, {
							saveDOMNodeRef: d,
							style: c ? i({}, s, {
								maxHeight: c
							}) : s,
							onChange: r.onChange
						})
					}, p(r, n)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), o(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							n = e.saveDOMNodeRef,
							r = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", i({}, r, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), r.defaultProps = {
				rows: 1
			}, s);
			t.default = b, b.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var r, s = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			t.default = i.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function i() {}
			i.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, i, o) {
					if (o !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: i,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/reddit/selectors/experiments/devPlatform.ts"),
				d = n("./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx");
			const c = Object(o.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), n.e("devPlatform-components-ContextActions")]).then(n.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function l(e) {
				return Object(i.e)(e => Object(a.a)(e)) ? s.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator,
					fallback: s.a.createElement(d.a, {
						contextType: e.contextType,
						moderator: e.moderator
					})
				}) : null
			}
		},
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				dropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				Icon: "SnpDpl5eEAD07JaiyJbpr",
				icon: "SnpDpl5eEAD07JaiyJbpr"
			}
		},
		"./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/devPlatform/constants.ts"),
				l = n("./src/devPlatform/components/ContextActions/index.m.less"),
				u = n.n(l);

			function m(e) {
				const t = Object(o.ib)(),
					n = Object(i.e)(e => Object(o.s)(e, {
						pageLayer: t
					})),
					l = Object(r.useMemo)(() => {
						if (!(null == n ? void 0 : n.devPlatformMetadata)) return [];
						let t;
						try {
							return (null == (t = JSON.parse(atob(n.devPlatformMetadata))) ? void 0 : t.contextActions) ? t.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).reduce((t, n) => {
								var r;
								let s = [];
								return (null === (r = n.actions) || void 0 === r ? void 0 : r.actions) && (s = n.actions.actions.filter(t => {
									var n, r, s, i, o;
									if (e.moderator && !(null === (n = t.users) || void 0 === n ? void 0 : n.moderator) || !e.moderator && (null === (r = t.users) || void 0 === r ? void 0 : r.moderator)) return !1;
									switch (e.contextType) {
										case c.a.POST:
											return !!(null === (s = t.contexts) || void 0 === s ? void 0 : s.post);
										case c.a.COMMENT:
											return !!(null === (i = t.contexts) || void 0 === i ? void 0 : i.comment);
										case c.a.SUBREDDIT:
											return !!(null === (o = t.contexts) || void 0 === o ? void 0 : o.subreddit);
										default:
											return !1
									}
								})), [...t, ...s]
							}, []).sort((e, t) => e.name.localeCompare(t.name)) : []
						} catch (r) {
							return []
						}
					}, [e.contextType, e.moderator, n]);
				return s.a.createElement(s.a.Fragment, null, l.map(t => s.a.createElement(a.b, {
					disabled: !0,
					className: u.a.DropdownRow,
					displayText: t.name,
					key: `${e.contextType}.${t.actionId}`
				}, s.a.createElement(d.a, {
					name: e.moderator ? "mod" : "bot",
					className: u.a.Icon
				}))))
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				i = "devvit-debug-logging",
				o = "DEV_PLAT__OPEN_FORM_MODAL",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var d;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(d || (d = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(r || (r = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(s || (s = {}))
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: o,
					locale: a = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const d = new Date(e * s.Xb);
				return i.a ? new Intl.DateTimeFormat(a, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(d) : d.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					s = new Date(e * (n ? 1 : 1e3));
				return s.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class r {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const s = n.length,
						i = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - i === s
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return _
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return O
			})), n.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return k
			})), n.d(t, "getSubredditUserPowerupsFlairs", (function() {
				return j
			})), n.d(t, "getSubredditCurrentUserPowerupsFlairs", (function() {
				return T
			})), n.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return I
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return w
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return N
			})), n.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/isDefined.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const l = async (e, t, n, r) => {
				const s = await Object(a.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: r
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var u = n("./src/reddit/actions/gold/achievementFlairs.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/gold/powerups/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/economics/powerups/constants.ts"),
				v = n("./src/lib/initializeClient/installReducer.ts"),
				C = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(v.a)({
				features: {
					powerups: C.a
				}
			});
			const _ = Object(i.a)(x.d),
				y = Object(i.a)(x.f),
				E = Object(i.a)(x.g),
				O = Object(i.a)(x.e),
				k = Object(i.a)(x.h),
				j = (e, t) => async (n, r, s) => {
					let {
						gqlContext: i
					} = s;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const {
							subredditInfoById: t
						} = await (async (e, t, n) => {
							const r = await Object(a.a)(e, {
								...d,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!r.ok) throw new Error("Unable to fetch user achievements");
							return r.body.data
						})(i(), e, c);
						await n(_(t))
					} catch (l) {
						o.c.captureException(l)
					}
				}, T = (e, t) => async (n, r) => {
					if (!e) return;
					const s = r(),
						i = Object(g.m)(s);
					if (!i || !Object(h.e)(s, {
							subredditId: e
						})) return;
					const o = !!Object(f.e)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(j(e, [i.id]))
				}, S = e => async (t, n) => !!e && (await t(Object(u.c)(e)), !!Object(f.c)(n(), {
					subredditId: e
				})), I = e => async (t, n) => {
					var r;
					const s = n(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(b.e)(s, {
							commentIds: i
						}),
						a = null === (r = o.find(e => e && e.subredditId)) || void 0 === r ? void 0 : r.subredditId;
					if (!(await t(S(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(j(a, Array.from(d)))
				}, w = (e, t) => async (n, r) => {
					if (!t) return;
					if (!(await n(S(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(j(e, Array.from(s)))
				}, N = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(g.m)(s);
					if (!i) return;
					const o = i.id;
					n(P({
						subredditId: e,
						userId: o,
						achievementFlairType: t
					}))
				}, P = e => async (t, n, i) => {
					let {
						gqlContext: a
					} = i;
					const d = n(),
						c = Object(g.m)(d);
					if (!c) return;
					const u = c.id;
					t(y(e));
					const {
						subredditId: b,
						achievementFlairType: h
					} = e, x = [h].filter(s.a), v = Object(f.d)(d, {
						subredditId: b,
						userId: u
					});
					try {
						await l(a(), b, x, v), t(E(e))
					} catch (C) {
						t(O(e)), o.c.captureException(C), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, F = (e, t) => async (n, i, a) => {
					let {
						gqlContext: d
					} = a;
					const c = i(),
						u = Object(g.m)(c);
					if (!u) return;
					const b = u.id,
						h = {
							subredditId: e,
							userId: b
						},
						x = [Object(f.g)(c, h)].filter(s.a);
					n(k({
						...h,
						isHidden: t
					}));
					try {
						await l(d(), e, x, t)
					} catch (v) {
						n(k({
							...h,
							isHidden: !t
						})), o.c.captureException(v), n(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(r.a)(o.a),
				d = Object(r.a)(o.b),
				c = Object(r.a)(o.c),
				l = Object(r.a)(o.d),
				u = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				b = Object(r.a)(o.h),
				h = Object(r.a)(o.i),
				f = e => Object(s.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/actions/login.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = () => async (e, t) => {
				const n = t();
				return Object(o.m)(n) ? e(Object(s.h)(i.a.ACHIEVEMENT_FLAIR)) : e(Object(r.openLoginModal)())
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(o.B),
				f = Object(s.a)(o.C),
				g = Object(s.a)(o.A),
				x = (e, t, n) => async (r, s, i) => {
					const o = Object(p.C)(s(), {
						subredditName: e
					});
					if (o) return C(o.id, t, n)(r, s, i)
				}, v = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), C = (e, t, n) => async (s, o, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const C = o();
					try {
						await Object(i.g)("communityIcon", x, e)(s, o, p)
					} catch (y) {
						return Object(b.a)(Object(c.c)(C, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: v()
						})), void s(g())
					}
					const _ = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(c.c)(C, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: v()
					})), void s(g());
					await Object(i.k)(e, {
						communityIcon: _
					}, d.b.idCard, n)(s, o, p), s(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(f())
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "b", (function() {
				return F
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/MutedSubreddits.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/subreddit/constants.ts"),
				h = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = e => Object(i.f)({
					id: e,
					kind: p.b.Error,
					duration: i.a,
					text: r.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: r.fbt._("Muted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: r.fbt._("Unmuted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var C = n("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(s.a)(b.i),
				y = Object(s.a)(b.h),
				E = Object(s.a)(b.G),
				O = (Object(s.a)(b.j), Object(s.a)(b.F), Object(s.a)(b.g)),
				k = Object(s.a)(b.f),
				j = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(x(n, T({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				T = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(v(n, j({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(n, I({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(n, S({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: d
						} = a;
						var l, u;
						const m = Object(h.a)(n),
							b = await ((e, t, n) => Object(o.a)(e, {
								...c,
								variables: {
									input: {
										...n,
										subredditId: t
									}
								}
							}))(d(), t, m);
						b.ok && b.body && (null === (u = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(E({
							subredditId: t,
							notificationLevel: n
						})), e(Object(i.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(i.f)({
							kind: p.b.Error,
							text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const a = await (e => Object(o.a)(e, d))(s());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: n
						}))
					} else e(y()), e(Object(i.f)({
						duration: i.a,
						kind: p.b.Error,
						text: r.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, r, s) => {
						let {
							gqlContext: i
						} = s;
						var o, a;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (a = null === (o = d.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(O(t)), e(v(n));
						else {
							e(g(`error-unmuting-${t}`))
						}
					}
				}, F = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: o
						} = s;
						var a, d;
						const c = n(),
							l = Object(f.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(i.f)({
								id: n,
								kind: p.b.Error,
								duration: i.a,
								text: r.fbt._("Sorry, r/{subreddit name} is already muted.", [r.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const m = await Object(C.a)(o(), t, !0),
							{
								data: b
							} = m.body,
							h = b && b.subreddit;
						if (!m.ok || null === h) {
							return e(((e, t) => Object(i.f)({
								id: e,
								kind: p.b.Error,
								duration: i.a,
								text: r.fbt._("Sorry, r/{subreddit name} isn't a community.", [r.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = h.id,
							_ = await u(o(), v);
						if (_.ok && _.body && (null === (d = null === (a = _.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(k([h])), e(x(h.name));
						else {
							e(g(`error-muting-${v}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(a.z),
				p = Object(s.a)(a.y),
				b = Object(s.a)(a.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.c.OFF:
							return r.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return r.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return r.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: s,
					undoCallback: a
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: x
					} = g;
					var v, C, _;
					e(p());
					const y = h(n),
						E = await Object(c.b)(x(), t, y);
					if ((null === (C = null === (v = E.error) || void 0 === v ? void 0 : v.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (_ = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), s && s(), e(a ? Object(d.f)(Object(d.e)(f(n), u.b.Undo, r.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, a))) : Object(d.f)(Object(d.e)(f(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				i = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				c = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return A
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				f = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				x = n("./src/reddit/models/GqlTopLevelField.ts"),
				v = n("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== v.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(f.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== x.a.Subreddit) continue;
					const e = Object(g.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var _ = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/subscriptions.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const j = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(o.a)(c.c),
				S = Object(o.a)(c.b),
				I = Object(o.a)(c.a),
				w = Object(o.a)(c.h),
				N = (Object(o.a)(c.i), Object(o.a)(c.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(S());
					const i = await Object(h.a)(r());
					if (i.ok) {
						const t = C(i.body.data);
						e(T(t))
					} else e(I({
						error: i.error
					}))
				}),
				P = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				F = (e, t, n) => async (o, c, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(E.I)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(y.o)(c(), e.name),
						name: `${s.qc}${e.name}`,
						type: e.type
					});
					if (!Object(k.S)(c())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(a.openRegisterModal)());
					const f = Object(k.m)(c());
					if (f) {
						const t = b.length,
							n = e.length;
						if (b = b.filter(e => !P(f, e)), (e = e.filter(e => !P(f, e))).length !== n || b.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, _.b.Error)))
						}
						if (!e.length && !b.length) return
					}
					o(w({
						identifiers: b,
						nameIdentifiers: e,
						profileModels: c().profiles.models,
						subredditModels: c().subreddits.models,
						subscriptionsCount: Object(O.b)(c()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const g = await Object(h.c)(p(), {
						subredditNames: b.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (g.ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "23Snyg"
							}),
							a = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "jfC0S"
							}),
							d = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							c = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? d : c
						}))
					} else {
						o(w({
							identifiers: b,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(O.b)(c()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, _.b.Error)))
					}
					return g.ok
				}, D = Object(o.a)(c.f), M = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n(),
						o = Object(E.Q)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						d = i.subscriptions.favoriteSubredditOrder || [],
						c = i.subscriptions.favoriteProfileOrder || [],
						m = d.indexOf(e.id),
						p = c.indexOf(e.id),
						b = -1 === m && -1 === p,
						f = i.subreddits.models,
						g = i.profiles.models,
						x = {
							type: e.type,
							name: o.name
						},
						v = () => Object(E.jb)(n(), {
							identifier: x
						});
					(v() || (await t(F([x], !0)), v())) && (t(D({
						makeFavorite: b,
						identifier: e,
						subredditModels: f,
						profileModels: g
					})), (await Object(h.b)(s(), a, b)).ok || (t(D({
						makeFavorite: !b,
						identifier: e,
						subredditModels: f,
						profileModels: g
					})), t(Object(l.f)({
						text: j(),
						kind: _.b.Error
					}))))
				}, R = Object(o.a)(c.d), B = e => async (t, n, r) => {
					let {
						apiContext: i
					} = r;
					const o = n().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: j(),
								kind: _.b.Error
							}))
						},
						d = o[e];
					if (!d) return void a();
					const c = !d.isFavorited;
					t(R({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.pb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, c)).ok || (t(R({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, L = Object(o.a)(c.e), A = e => async (t, n, i) => {
					let {
						apiContext: o
					} = i;
					const a = n(),
						d = a.multireddits.models;
					if (!Object(k.S)(a)) return;
					const c = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						u = d[e];
					if (!u) return void c();
					const h = !u.isFollowed;
					t(L({
						follow: h,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.pb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, h)).ok || (t(L({
						follow: !h,
						multiredditPath: e,
						multiredditsModelsState: d
					})), c(h))
				}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "a", (function() {
				return F
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("SubredditPremiumBadgeHovercardTooltip")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				h = n("./src/reddit/helpers/economics/sortBadges.ts"),
				f = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = n("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				C = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E,
				k = 24;
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, O)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return s.a.createElement("img", {
						className: Object(d.a)(C.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${y}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || k;
					return s.a.createElement(r.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: C.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: C.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(f.a, {
						className: C.a.addCustom
					})), s.a.createElement(x, {
						className: C.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(g.d)(n, n, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(d.a)(C.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: C.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${n}px`
							}
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: C.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const T = [],
				S = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n,
							userId: r
						} = t;
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[n]) || T
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				I = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n
						} = t;
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[n]) || T
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: n,
					...r
				} = e, i = t.map(e => n[e]).filter(Boolean);
				return s.a.createElement(j, _({
					badges: i
				}, r))
			}
			const P = Object(i.b)(S, w)(N),
				F = Object(i.b)(I, w)(N)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(i.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommunityMuting/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/components/ModalStyledComponents/Modal.tsx");
			const a = e => {
				let {
					subredditName: t,
					toggleModal: n,
					onConfirm: s
				} = e;
				return i.a.createElement(o.a, {
					headerText: r.fbt._("Mute {name of subreddit to mute}", [r.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "4eAU3R"
					}),
					modalBody: r.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [r.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "1JNA6G"
					}),
					toggleModal: n,
					actionText: r.fbt._("YES, MUTE", null, {
						hk: "1eAO8C"
					}),
					cancelActionText: r.fbt._("CANCEL", null, {
						hk: "If1yt"
					}),
					onConfirm: s,
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "j", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/redditGQL/types.ts");
			const i = 500,
				o = 100,
				a = 5e3,
				d = 0,
				c = 1440,
				l = 36600,
				u = 1e9,
				m = {
					disabled: r.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: r.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: r.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				p = [r.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), r.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), r.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				b = {
					any: r.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: r.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: r.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				h = [r.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), r.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), r.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				f = {
					mods: r.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: r.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				g = {
					[s.W.Low]: r.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					[s.W.High]: r.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					[s.W.All]: r.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				x = {
					[s.W.Low]: r.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					[s.W.High]: r.fbt._("High", null, {
						hk: "ABfkc"
					}),
					[s.W.All]: r.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				v = {
					blank: r.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: r.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: r.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: r.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: r.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: r.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: r.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: r.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, n) {
			e.exports = {
				nsfwText: "_1x9diBHPBP-hL1JiwUwJ5J",
				privateIcon: "_2B0OHMLKb9TXNdd9g5Ere-",
				quarantinedIcon: "_1xKxnscCn2PjBiXhorZef4",
				employeesIcon: "_1LLqoNXrOsaIkMtOuTBmO5",
				restrictedIcon: "QB2Yrr8uihZVRhvwrKuMS",
				TypeLabel: "_3w_KK8BUvCMkCPWZVsZQn0",
				typeLabel: "_3w_KK8BUvCMkCPWZVsZQn0"
			}
		},
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/IconTooltip/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Flair/index.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/CommunityType/index.m.less"),
				g = n.n(f);
			const x = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", g.a),
				v = Object(d.c)({
					restrictions: h.q
				}),
				C = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.c, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: g.a.nsfwText
				}, r.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				_ = () => i.a.createElement(x, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				y = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(C, null)), i.a.createElement(x, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(_, null)),
				E = Object(o.b)(v);
			t.a = E(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: s = b.e.Post,
					textClassName: o,
					subreddit: a
				} = e;
				switch (a.type) {
					case p.g.Restricted:
						return i.a.createElement(y, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.restrictedIcon, n)
							}),
							text: r.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: o,
							description: Object(b.g)(s),
							subreddit: a
						});
					case p.g.Private:
						return i.a.createElement(y, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.privateIcon, n)
							}),
							text: r.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: o,
							description: r.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: a
						});
					case p.g.EmployeesOnly:
						return i.a.createElement(y, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(c.a)(g.a.employeesIcon, n)
							}),
							text: a.allowContractors ? r.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : r.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: o,
							subreddit: a
						});
					default:
						return i.a.createElement(i.a.Fragment, null, a.isQuarantined && i.a.createElement(_, null), a.isNSFW && i.a.createElement(C, null))
				}
			})
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(h);
			const g = () => ({
				[b.b.Comment]: r.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[b.b.IdCard]: r.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.PostSubmission]: r.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.ContentGate]: r.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: r
						} = this.props;
						t === b.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), r())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: s
					} = this.props;
					return i.a.createElement(u.t, {
						priority: e === b.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: s
					}, s ? r.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(o.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(x))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				C = x.a.wrapped(l.c, "StyledTooltip", g.a),
				_ = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(o.b)(_, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), a(d)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less": function(e, t, n) {
			e.exports = {
				flairPreviewLine: "_2ik4YxCeEmPotQkDrf9tT5",
				flairPreview: "_1DR1r7cWVoK2RVj_pKKyPF",
				badge: "_1CVe5UNoFFPNZQdcj1E7qb",
				userIcon: "_2UOVKq8AASb4UjcU1wrCil",
				allFlair: "FB0XngPKpgt3Ui354TbYQ",
				flairPreviewFirstLine: "_3tIyrJzJQoNhuwDSYG5PGy",
				username: "TIveY2GD5UQpMI7hBO69I",
				flairPreviewSecondLine: "e9ybGKB-qvCqbOOAHfFpF",
				userFlair: "y3jF8D--GYQUXbjpSOL5",
				achievementFlair: "_28u73JpPTG4y_Vu5Qute7n"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				d = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/components/UserIcon/constants.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = n.n(p);
			const h = e => {
				let {
					className: t,
					subredditId: n,
					userId: s,
					flairData: p,
					username: h,
					userHasBadge: f,
					usernameClassName: g
				} = e;
				const x = Object(o.e)(e => Object(m.m)(e));
				return x ? i.a.createElement("div", {
					className: Object(r.a)(b.a.flairPreview, t),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: x.accountIcon,
					isNSFW: x.isNSFW,
					nsfwIconUrl: u.a,
					userName: h || ""
				}), i.a.createElement("div", {
					className: b.a.allFlair
				}, i.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && i.a.createElement(a.a, {
					className: b.a.badge,
					subredditId: n,
					uniqueIdentifier: n,
					badgeSize: 20
				}), i.a.createElement("span", {
					className: Object(r.a)(b.a.username, g)
				}, `${h||"username"}`), i.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: n,
					userId: s
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(c.c, {
					className: b.a.userFlair,
					flair: p.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return U
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "c", (function() {
				return V
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				o = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const g = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return d.a.createElement("div", f({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", h.a);
			var x = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				_ = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/reddit/components/Flair/index.m.less"),
				S = n.n(T);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(v.a)(x.b),
				N = p.a.div("FlairWrapper", S.a),
				P = p.a.wrapped(c.a, "CloseButton", S.a),
				F = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return d.a.createElement(g, I({
						style: {
							...D(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", S.a),
				D = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				M = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[_.w]: r,
						[_.x]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? d.a.createElement(y.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? d.a.createElement(y.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: M(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class B extends d.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = d.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[S.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(j.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && d.a.createElement(P, {
						to: "./",
						onClick: this.props.onCloseClick
					}, d.a.createElement(O.a, {
						className: S.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(j.a)(this.props).flair
						}
					})), !!this.props.tooltip && d.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return d.a.createElement(R, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const L = Object(m.a)(B),
				A = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === k.c.Emoji) {
							const i = r;
							return t += i.a, n = !0, d.a.createElement(F, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: s,
								title: i.a
							})
						} {
							const e = r;
							return t += e.t, d.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const i = d.a.createElement(N, {
						className: Object(u.a)(e.className, {
							[S.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(j.a)(e).flair,
							color: `${U(e)}`
						}
					}, r, e.isSelected && d.a.createElement(P, {
						to: "./",
						onClick: e.onCloseClick
					}, d.a.createElement(O.a, {
						className: S.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(j.a)(e).flair
						}
					})));
					return d.a.createElement(R, {
						flair: i,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(j.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(j.a)(e).post, C.a.black, C.a.white) : e.textColor === k.e.Dark ? C.a.black : C.a.white,
				H = p.a.wrapped(L, "TextFlair", S.a),
				q = p.a.wrapped(A, "RichTextFlair", S.a),
				W = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.i)(.1, Object(j.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				z = p.a.wrapped(e => {
					const t = W(e),
						n = d.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return d.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", S.a);

			function V(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: i,
					isSelected: o,
					onClick: a,
					onCloseClick: c,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[S.a.flairVariant]: i,
					[S.a.small]: i && !e.large,
					[S.a.large]: i && e.large
				}, t);
				switch (s.type) {
					case k.f.Richtext:
						return n || !s.richtext ? null : d.a.createElement(q, {
							backgroundColor: s.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: h
						});
					case k.f.Text:
						return n || !s.text ? null : d.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: h
						});
					case k.f.Meta:
						return d.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: h
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return d.a.createElement(z, {
							className: t,
							text: s.text,
							type: s.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return d.a.createElement(H, {
							backgroundColor: C.a.alienblue,
							text: s.text,
							textColor: k.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? d.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/humanizeDate/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const a = Object(o.a)(),
					d = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : a
					};
				return s.a.createElement(s.a.Fragment, null, Object(i.a)(t, d))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/lib/constants/index.ts");
			var a = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: n
				} = e;
				const r = Object(a.a)(),
					d = null != n ? n : r;
				return s.a.createElement(s.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.DEFAULT_LOCALE;
					const n = e * o.Xb;
					return new Date(n).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, d))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const a = Object(o.a)(),
					d = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : a
					};
				return s.a.createElement(s.a.Fragment, null, Object(i.d)(t, d))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r.a
			})), n.d(t, "a", (function() {
				return s.a
			})), n.d(t, "b", (function() {
				return i.a
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				s = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				i = n("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function p(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DEFAULT_LOCALE;
				const s = Object(u.e)(e, t),
					i = new Date(e * l.Xb);
				let o;
				if (s === u.a.Live || n) return c.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === u.a.Future ? o = Object(u.d)(e) ? c.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(i, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, r) : s === u.a.Past && (o = Object(u.d)(e) ? c.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(i, r)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,r)}`
			}
			var b = n("./src/reddit/hooks/useLocale.ts");
			var h = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: s
				} = e;
				const i = Object(b.a)(),
					o = null != s ? s : i;
				return a.a.createElement(a.a.Fragment, null, p(t, n, r, o))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/CakeDayBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CakeDay: "_1sDtEhccxFpHDn2RUhxmSq",
				cakeDay: "_1sDtEhccxFpHDn2RUhxmSq",
				label: "_1d4NeAxWOiy0JPz7aXRI64",
				cakeIcon: "_3tMM22A0evCEmrIk-8z4zO"
			}
		},
		"./src/reddit/components/IdCard/CommunityOptions/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Qx5bBCG_O8wVZee9J-KyJ",
				content: "_2NbKFI9n3wPM76pgfAPEsN",
				stylesToggle: "_2btz68cXFBI3RWcfSNwbmJ",
				disabled: "QgBK4ECuqpeR2umRjYcP2",
				expandButton: "_4OtOUaGIjjp2cNJMUxme_",
				ToggleSwitch: "_2b2iJtPCDQ6eKanYDf3Jho",
				toggleSwitch: "_2b2iJtPCDQ6eKanYDf3Jho",
				TertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				tertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				redditStyle: "_2UlgIO1LIFVpT30ItAtPfb",
				visibilityIcon: "_3a4fkgD25f5G-b0Y8wVIBe"
			}
		},
		"./src/reddit/components/IdCard/CommunityTypeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CommunityTypeContainer: "_3Z6MIaeww5ZxzFqWHAEUxa",
				communityTypeContainer: "_3Z6MIaeww5ZxzFqWHAEUxa",
				communityType: "_3EpRuHW1VpLFcj-lugsvP_",
				communityTypeIcon: "_31U86fGhtxsxdGmOUf3KOM",
				communityTypeText: "_2mk9m3mkUAeEGtGQLNCVsJ"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				b = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				h = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				f = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				O = n.n(E);
			const k = 6,
				j = `${f.a}_description`,
				T = Object(c.c)({
					apiPending: y.Y,
					unsavedChangesModalIsOpen: Object(_.b)(j)
				}),
				S = Object(d.b)(T, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(m.j)(n.id, t, {}, !0)),
						openUnsavedChangesModal: () => {
							e(Object(u.h)(j))
						}
					}
				});
			class I extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(v.a)
						}
					}, this.focusTextArea = () => {
						if (this.textAreaRef && this.textAreaRef.focus && (this.textAreaRef.focus({
								preventScroll: !0
							}), this.textAreaRef.setSelectionRange)) {
							const e = this.textAreaRef.value.length;
							this.textAreaRef.setSelectionRange(e, e)
						}
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(v.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1
					}
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? i.a.createElement(x.a, {
						className: O.a.loadingIcon,
						sizePx: k
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(C.a, {
						name: "edit",
						className: O.a.pencil
					}), e)) : i.a.createElement("div", {
						className: O.a.emptyDescription
					}, r.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(a.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: r.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(l.a)(O.a.editableDescription, O.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: b.d,
						value: this.state.description,
						"data-testid": "edit-description-block"
					}), i.a.createElement("div", {
						className: O.a.editableDescriptionControlRow
					}, i.a.createElement(p.a, {
						className: O.a.characterCountdown,
						maxChars: b.d,
						text: this.state.description
					}), i.a.createElement("span", {
						className: O.a.cancel,
						onClick: this.onCancel
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: O.a.save,
						onClick: this.onSave
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [O.a.defaultEditableDescriptionContainer];
					const e = [O.a.editableDescriptionContainer];
					return this.state.editing && e.push(O.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(l.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						"data-testid": "description-block"
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(f.b, {
						withOverlay: !0,
						modalId: j,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			t.a = S(Object(g.c)(I))
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, n) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				active: "_2Z_0gYdq8Wr3FulRLZXC3e",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("DescriptionContainer", l.a);
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && o.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: n
					} = this.props, {
						shouldDisplayShowMore: r,
						shouldTruncateDescription: o
					} = this.state, a = n ? u._("Welcome to {subredditName}", [u._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return s.a.createElement(m, {
						className: Object(i.a)(l.a.descriptionContainer, o && l.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, s.a.createElement("div", {
						className: l.a.description,
						ref: this.setTextRef
					}, t || a, e), o && r && s.a.createElement("div", {
						className: l.a.showMore
					}, "...", s.a.createElement(d.r, {
						className: l.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, u._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			t.a = p
		},
		"./src/reddit/components/IdCard/StatsBlock/experiment.m.less": function(e, t, n) {
			e.exports = {
				stats: "_3oeM4kc-2-4z-A0RTQLg0I"
			}
		},
		"./src/reddit/components/IdCard/StatsBlock/index.m.less": function(e, t, n) {
			e.exports = {
				stats: "_1aTW4bdYQHgSZJe7BF2-XV",
				count: "_3b9utyKN3e_kzVZ5ngPqAu",
				onlineCount: "_21RLQh5PvUhC6vOKoFeHUP",
				metaText: "_22W-auD0n8kTKDVe0vWuyK",
				metaTextBacklinks: "_244EzVTQLL3kMNnB03VmxK",
				compactStats: "_2xkErp6B3LSS13jtzdNJzO",
				memberIcon: "je4sRPuSI6UPjZt_xGz8y"
			}
		},
		"./src/reddit/components/IdCard/TopicLinksContainer/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "TopicLinksContainer",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("TopicLinksContainer").then(n.bind(null, "./src/reddit/components/IdCard/TopicLinksContainer/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/TopicLinksContainer/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				i = n("./src/lib/pubsub/index.ts"),
				o = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const d = e => e && e.toLowerCase() === o.b.Popular,
				c = e => e && e.toLowerCase() === o.b.All,
				l = e => e && e === a.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, i, a, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const f = h && h.subscribersText || r.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = h && h.currentlyViewingText || r.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, v;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = o.c[o.b.Popular]) : p && (n = h && h.description, i = u(""), a = b.displayText, m = b.url, v = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
						snooBackground: i,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: v,
						subscribersText: f,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new i.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				blur: "_1uo2TG25LvAJS3bl-u72J4",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				cakeDayBlock: "_1vPW2g721nsu89X6ojahiX",
				muteDropdownRow: "_pTJqhLm_UAXS5SZtLPKd"
			}
		},
		"./src/reddit/components/IdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./src/lib/loadableAction/index.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/actions/subreddit/muting.ts"),
				C = n("./src/reddit/actions/subscription/index.ts"),
				_ = n("./src/reddit/components/CommunityMuting/index.tsx"),
				y = n("./src/higherOrderComponents/makeAsync.tsx"),
				E = n("./src/lib/loadWithRetries/index.ts"),
				O = Object(y.a)({
					getComponent: () => Object(E.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				k = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				j = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				T = n("./src/reddit/actions/login.ts"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				w = n("./src/reddit/helpers/trackers/postComposer.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(m.c)({
				isLoggedIn: N.S
			});
			var M = Object(o.b)(D, e => ({
				openLoginModal: () => {
					e(Object(x.k)({
						actionSource: x.a.Post
					})), e(Object(T.openRegisterModal)())
				}
			}))(Object(P.c)(e => {
				let {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: s,
					openLoginModal: o,
					sendEvent: a,
					subreddit: d,
					...c
				} = e;
				const l = `${Object(I.a)(d)||"/"}submit`;
				return i.a.createElement(S.n, F({}, c, {
					onClick: e => {
						a(Object(w.x)({
							actionInfoType: "id_card",
							subredditId: null == d ? void 0 : d.id
						})), n || (o(), e.preventDefault())
					},
					to: l
				}), t ? r.fbt._("Draft Post", null, {
					hk: "17BbM6"
				}) : r.fbt._("Create Post", null, {
					hk: "4k3RsQ"
				}))
			}));
			const R = Object(y.a)({
				getComponent: () => Object(E.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var B = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				U = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				H = n.n(U);
			var q = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: H.a.container
					}, i.a.createElement(A.a, null)),
					getComponent: () => Object(E.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				W = n("./src/reddit/components/OverflowMenu/index.tsx"),
				z = n("./src/lib/lessComponent.tsx"),
				V = n("./src/reddit/actions/authorFlair.ts"),
				G = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				K = n("./src/reddit/actions/gold/powerups.ts"),
				J = n("./src/reddit/helpers/trackers/userFlair.ts"),
				Q = n("./src/reddit/hooks/useTracking.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/User/index.ts"),
				Z = n("./src/reddit/selectors/gold/powerups/index.ts"),
				$ = n("./src/reddit/selectors/userFlair.ts"),
				ee = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				te = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				ne = n.n(te);
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = z.a.div("FlairSettingsContainer", ne.a), ie = z.a.div("FlairPreviewWrapper", ne.a), oe = z.a.div("PreviewTitle", ne.a), ae = z.a.wrapped(S.r, "TertiaryButton", ne.a), de = z.a.wrapped(ae, "IconButton", ne.a), ce = Object(m.c)({
				currentUser: N.m,
				isAchievementFlairModalEnabled: (e, t) => Object(Z.e)(e, {
					subredditId: t.subredditId
				}),
				userFlairData: $.d,
				userHasBadge: (e, t) => {
					const n = e.user.account;
					if (n) {
						return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
					}
					return !1
				}
			}), le = Object(o.b)(ce), ue = e => i.a.createElement(de, {
				onClick: e.onClick
			}, i.a.createElement(X.a, {
				name: "edit"
			})), me = e => {
				let {
					subredditId: t,
					userId: n,
					username: r,
					userFlairData: s,
					userHasBadge: o
				} = e;
				return i.a.createElement(ie, null, i.a.createElement(ee.a, {
					subredditId: t,
					userId: n,
					username: r,
					flairData: s,
					userHasBadge: o,
					usernameClassName: ne.a.previewUsername
				}))
			};
			var pe = le(e => {
					let {
						currentUser: t,
						subredditId: n,
						userFlairData: r,
						userHasBadge: a,
						isAchievementFlairModalEnabled: d
					} = e;
					const c = Object(o.d)(),
						l = Object(Q.a)();
					Object(s.useEffect)(() => {
						d && c(Object(G.getSubredditCurrentUserPowerupsFlairs)(n))
					}, [c, n, d]);
					return t && (r || d) ? i.a.createElement(se, null, i.a.createElement(oe, null, re._("preview", null, {
						hk: "2so8Zj"
					}), i.a.createElement(ue, {
						onClick: () => {
							if (d) c(Object(K.a)());
							else {
								(e => c(Object(V.b)({
									username: e,
									subredditId: n
								})))(t ? Object(Y.e)(t) : null)
							}
							l(Object(J.c)())
						}
					})), i.a.createElement(me, {
						subredditId: n,
						userId: t.id,
						username: Object(Y.e)(t),
						userFlairData: r,
						userHasBadge: a
					})) : null
				}),
				be = n("./src/reddit/components/SubscribeButton/index.tsx"),
				he = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				fe = n("./src/reddit/constants/componentSizes.ts"),
				ge = n("./src/reddit/constants/experiments.ts"),
				xe = n("./src/reddit/constants/listings.ts"),
				ve = n("./src/reddit/constants/modals.ts"),
				Ce = n("./src/reddit/constants/page.ts"),
				_e = n("./src/reddit/constants/posts.ts"),
				ye = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ee = n("./src/reddit/controls/ImageInput/index.tsx"),
				Oe = n("./src/reddit/featureFlags/index.ts"),
				ke = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				je = n("./src/reddit/helpers/localStorage/index.ts"),
				Te = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Se = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				Ie = n("./src/reddit/helpers/trackers/lightbox.ts"),
				we = n("./src/reddit/helpers/trackers/modHub.ts"),
				Ne = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				Pe = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Fe = n("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				De = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Me = n("./src/reddit/selectors/category.ts"),
				Re = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Be = n("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				Le = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Ae = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				Ue = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				He = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				qe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				We = n("./src/reddit/selectors/structuredStyles.ts"),
				ze = n("./src/reddit/selectors/subreddit.ts"),
				Ve = n("./src/reddit/selectors/subscriptions.ts"),
				Ge = n("./src/reddit/selectors/tooltip.ts"),
				Ke = n("./src/reddit/selectors/widgets.ts"),
				Je = n("./src/reddit/components/IdCard/index.m.less"),
				Qe = n.n(Je);
			const Xe = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: Qe.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			});
			var Ye = n("./src/reddit/actions/preferences.ts"),
				Ze = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				$e = n("./src/reddit/helpers/trackers/idCard.ts"),
				et = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				tt = n.n(et);
			const nt = z.a.wrapped(S.t, "TertiaryButton", tt.a),
				rt = Object(m.c)({
					stylesDisabledForSubreddit: N.tb,
					stylesDisabledGlobally: N.ub
				});
			class st extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object($e.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
							stylesEnabled: e
						})
					}, this.state = {
						isOpen: !1
					}
				}
				render() {
					const {
						isSubmissionPage: e,
						stylesDisabledForSubreddit: t,
						stylesDisabledGlobally: n
					} = this.props, {
						isOpen: s
					} = this.state, o = s ? i.a.createElement("div", {
						className: tt.a.content
					}, i.a.createElement("div", {
						className: Object(p.a)(tt.a.stylesToggle, {
							[tt.a.disabled]: n
						}),
						title: n ? r.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: tt.a.stylesToggleLabel
					}, i.a.createElement(X.a, {
						name: t ? "hide" : "show",
						className: tt.a.visibilityIcon
					}), r.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), i.a.createElement(Ze.a, {
						className: tt.a.ToggleSwitch,
						disabled: n,
						on: !t,
						onToggle: this.onToggleStylesSwitch
					}))) : null;
					return i.a.createElement("div", {
						className: tt.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(nt, {
						kind: S.b.Button,
						priority: S.c.Plain,
						isFullWidth: !0,
						className: Object(p.a)(tt.a.expandButton, {
							[tt.a.redditStyle]: e
						}),
						onClick: this.onExpandButtonClick
					}, r.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(X.a, {
						name: s ? "caret_up" : "caret_down"
					})), o)
				}
			}
			var it = Object(o.b)(rt, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(Ye.I)(t, n))
					}
				}))(st),
				ot = n("./src/reddit/components/CommunityType/index.tsx"),
				at = n("./src/reddit/components/IdCard/CommunityTypeBlock/index.m.less"),
				dt = n.n(at);
			const ct = e => {
				let {
					subreddit: t
				} = e;
				return i.a.createElement("div", {
					className: dt.a.CommunityTypeContainer
				}, i.a.createElement(ot.a, {
					className: dt.a.communityType,
					iconClassName: dt.a.communityTypeIcon,
					subreddit: t,
					textClassName: dt.a.communityTypeText
				}))
			};
			var lt = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				ut = n("./src/reddit/components/IdCard/helpers.ts"),
				mt = n("./src/reddit/components/IdCard/placeholder.m.less"),
				pt = n.n(mt);
			var bt = i.a.memo(e => i.a.createElement("div", {
				className: Object(p.a)(pt.a.container)
			}, i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.banner)
			}), i.a.createElement("div", {
				className: pt.a.title
			}, i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.icon)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.name)
			})), i.a.createElement("div", {
				className: pt.a.counts
			}, i.a.createElement("div", {
				className: pt.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.text)
			})), i.a.createElement("div", {
				className: pt.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.text)
			}))), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.desc, pt.a.one)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.desc, pt.a.two)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.desc, pt.a.three)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.desc, pt.a.four)
			}), i.a.createElement("div", {
				className: Object(p.a)(pt.a.shimmer, pt.a.subscribe)
			})));
			const ht = e => {
				let {
					snooBackground: t
				} = e;
				return i.a.createElement("div", {
					className: Qe.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: `${t.width}px ${t.height}px`,
						height: t.height,
						width: t.width
					}
				})
			};
			var ft = e => {
					let {
						titleText: t,
						snooBackground: n
					} = e;
					return i.a.createElement("div", {
						className: Object(p.a)(Qe.a.Title, Qe.a.TitleShifted)
					}, i.a.createElement(ht, {
						snooBackground: n
					}), i.a.createElement("div", {
						className: Qe.a.TitleTextShiftedContainer
					}, i.a.createElement("span", {
						className: Qe.a.TitleText
					}, t)))
				},
				gt = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: xt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vt = e => e.position <= 50, Ct = (e, t) => (e => 1 === e.position)(t) ? xt._("{subredditPrefixedName} is the largest community on Reddit", [xt._param("subredditPrefixedName", `r/${e}`)], {
				hk: "1RFzJ9"
			}) : vt(t) ? xt._("{subredditPrefixedName} is ranked #{rankingPosition} in Largest Communities", [xt._param("subredditPrefixedName", `r/${e}`), xt._param("rankingPosition", `${t.position}`)], {
				hk: "3HTdvv"
			}) : xt._("{subredditPrefixedName} is in the top {communityRankingPercent}% of largest communities on Reddit", [xt._param("subredditPrefixedName", `r/${e}`), xt._param("communityRankingPercent", t.percentile)], {
				hk: "2coXDi"
			});
			var _t = n("./src/reddit/selectors/telemetry.ts");
			var yt = n("./src/reddit/selectors/platform.ts");
			var Et = Object(o.b)(() => Object(m.c)({
					postId: yt.o,
					subredditId: (e, t) => {
						let {
							subredditName: n
						} = t;
						return Object(ze.I)(e, n)
					},
					subredditRankingsInfo: (e, t) => {
						let {
							subredditName: n
						} = t;
						return Object(Be.a)(e, n)
					}
				}))(Object(P.c)(e => {
					let {
						className: t,
						isCompact: n,
						labelClassName: r,
						subredditId: s,
						subredditRankingsInfo: o,
						postId: a,
						sendEvent: d,
						subredditName: c
					} = e;
					return s && (null == o ? void 0 : o.url) ? i.a.createElement("a", {
						href: null == o ? void 0 : o.url,
						onClick: () => d(((e, t) => n => ({
							source: t ? "post_detail" : "subreddit",
							action: "click",
							noun: "community_directory_backlink",
							post: t ? _t.K(n, t) : void 0,
							subreddit: _t.mb(n, e),
							screen: _t.cb(n)
						}))(s, a)),
						title: Ct(c, o)
					}, i.a.createElement("span", {
						className: n ? t : ""
					}, i.a.createElement("p", {
						className: t
					}, (e => vt(e) ? `#${e.position}` : xt._("Top {communityRankingPercentile}", [xt._param("communityRankingPercentile", `${e.percentile}%`)], {
						hk: "TFUCv"
					}))(o)), i.a.createElement("p", {
						className: n ? t : r
					}, (() => xt._("Ranked by Size", null, {
						hk: "25nwA6"
					}))()))) : n ? i.a.createElement(i.a.Fragment, null) : i.a.createElement("div", null)
				})),
				Ot = n("./src/reddit/helpers/getFakeUserIcons.ts");
			const kt = e => {
				let {
					printNumber: t,
					printNumberClassname: n,
					tooltipId: r,
					viewText: s,
					viewTextClassname: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: n
				}, Object(gt.b)(t)), i.a.createElement("p", {
					className: o,
					id: r
				}, s), i.a.createElement(L.c, {
					caretOnTop: !0,
					text: `${Object(gt.b)(t,{displayFull:!0})} ${s}`,
					tooltipId: r
				}))
			};
			var jt = n("./src/reddit/components/IdCard/StatsBlock/experiment.m.less"),
				Tt = n.n(jt),
				St = n("./src/reddit/components/IdCard/StatsBlock/index.m.less"),
				It = n.n(St);
			const wt = e => {
					let {
						subreddit: t,
						subscribersCount: n,
						currentlyViewingCount: s
					} = e;
					const o = Object(Ot.a)(t.name);
					return i.a.createElement("span", {
						className: It.a.compactStats
					}, o.map((e, t) => {
						let {
							color: n,
							image: s
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? r.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: It.a.memberIcon,
							key: s,
							src: s,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: It.a.metaText
					}, r.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [r.fbt._plural(n, "number of members", Object(gt.b)(n))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: It.a.metaText
					}, r.fbt._("{viewingCount} online", [r.fbt._param("viewingCount", Object(gt.b)(s))], {
						hk: "cxviW"
					})), i.a.createElement(Et, {
						className: It.a.metaText,
						isCompact: !0,
						subredditName: t.name
					}))
				},
				Nt = e => {
					let {
						subredditName: t,
						subscribersCount: n,
						subscribersText: r,
						subscribersTooltipId: s,
						currentlyViewingCount: o,
						currentlyViewingText: a,
						currentlyViewingTooltipId: d,
						showCommunityDirectoryBacklink: c,
						toggleTooltip: l
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: c ? Tt.a.stats : It.a.stats
					}, i.a.createElement("div", {
						onMouseEnter: () => l(s),
						onMouseLeave: () => l(s)
					}, i.a.createElement(kt, {
						printNumber: n,
						printNumberClassname: It.a.count,
						tooltipId: s,
						viewText: r,
						viewTextClassname: c ? It.a.metaTextBacklinks : It.a.metaText
					})), i.a.createElement("div", {
						onMouseEnter: () => l(d),
						onMouseLeave: () => l(d)
					}, i.a.createElement(kt, {
						printNumber: o,
						printNumberClassname: c ? It.a.onlineCount : It.a.count,
						tooltipId: d,
						viewText: a,
						viewTextClassname: c ? It.a.metaTextBacklinks : It.a.metaText
					})), i.a.createElement(Et, {
						className: It.a.count,
						labelClassName: It.a.metaTextBacklinks,
						subredditName: t
					}), i.a.createElement("div", null)))
				};
			var Pt = n("./node_modules/history/esm/history.js"),
				Ft = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Dt = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Mt = n("./src/reddit/hooks/useClickSourceData.ts");
			const {
				fbt: Rt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Bt(e) {
				const t = Object(s.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: n,
						isInNCPV3Experiment: r,
						isTargetBlank: o,
						largeSubredditIcon: d,
						linkUrl: c,
						shouldBlurSubredditIcon: l,
						subredditIcon: u,
						titleText: m,
						primaryColor: b,
						subreddit: h,
						onOpenFilePicker: f
					} = e,
					g = u.url ? Rt._("Update icon", null, {
						hk: "GXdPy"
					}) : Rt._("Add icon", null, {
						hk: "31odkm"
					}),
					x = Object(Mt.a)();
				return i.a.createElement("div", {
					className: Object(p.a)(Qe.a.Title, e.className)
				}, n && h && !r ? i.a.createElement(Dt.a, {
					className: d ? Qe.a.largeSubredditIcon : Qe.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					subreddit: h,
					inTopBar: !1
				}) : i.a.createElement(Ft.b, {
					altText: u.altText,
					className: d ? Qe.a.largeSubredditIcon : Qe.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					shouldBlurSubredditIcon: l
				}), i.a.createElement("div", {
					className: Qe.a.titleTextContainer
				}, c ? i.a.createElement(a.a, {
					className: Qe.a.TitleLink,
					key: c,
					to: {
						pathname: Object(Pt.c)(c).pathname,
						state: x,
						search: Object(Pt.c)(c).search
					},
					onClick: t,
					target: o ? "_blank" : void 0,
					rel: o ? "noopener noreferrer" : void 0
				}, i.a.createElement("span", {
					className: Qe.a.TitleText,
					title: m
				}, m)) : i.a.createElement("span", {
					className: Qe.a.TitleText,
					key: m
				}, m), n && h && f && !r && i.a.createElement("div", {
					className: Qe.a.editIconText,
					onClick: f
				}, g)))
			}
			var Lt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				At = n("./src/reddit/components/HumanDate/index.tsx"),
				Ut = n("./src/reddit/components/IdCard/CakeDayBlock/index.m.less"),
				Ht = n.n(Ut);
			const {
				fbt: qt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wt = e => {
				let {
					cakeDayCreated: t,
					cakeDayTooltipId: n,
					className: r,
					showCommunityDirectoryBacklink: s,
					toggleTooltip: o
				} = e;
				return i.a.createElement("div", {
					className: Object(p.a)(Ht.a.CakeDayContainer, r),
					onMouseEnter: () => o(n),
					onMouseLeave: () => o(n)
				}, i.a.createElement("div", {
					className: Ht.a.CakeDay,
					id: n
				}, i.a.createElement(X.a, {
					name: "cake",
					className: Ht.a.cakeIcon
				}), i.a.createElement("span", {
					className: s ? Ht.a.label : ""
				}, qt._("Created {cakeday}", [qt._param("cakeday", i.a.createElement(At.a, {
					seconds: t,
					showDay: !0,
					shortMonths: !0,
					useUtc: !0
				}))], {
					hk: "8Y46b"
				}))), i.a.createElement(L.c, {
					caretOnTop: !0,
					tooltipId: n
				}, i.a.createElement(At.d, {
					seconds: t
				})))
			};
			var zt = n("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				Vt = n("./src/devPlatform/constants.ts");
			const Gt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Kt = Object(o.b)(() => Object(m.c)({
					activeTooltipId: Ge.a,
					postCategories: (e, t) => Object(Me.l)(e, t.postId),
					favoriteSubredditsIds: Ve.a,
					idCardWidget: (e, t) => Object(Ke.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(ze.e)(e, De.e.Post),
					isGQLLoggedIn: N.R,
					isLoggedIn: N.S,
					isNsfwBlurSubreddit: He.e,
					isMuted: (e, t) => Object(ze.K)(e, {
						subredditName: t.listingName
					}),
					moderatorPermissions: (e, t) => {
						const n = Object(ze.I)(e, t.listingName);
						if (n) return Object(qe.n)(e, {
							subredditId: n
						})
					},
					shouldObserveSubscribeButton: e => Object(Ae.a)(e) || Object(Ae.c)(e) || Object(Ae.d)(e),
					showContributorRequestFlow: e => Object(ze.w)(e, De.e.Post),
					showCreatePollButton: e => (e => Object(Le.c)(e, {
						experimentEligibilitySelector: Le.a,
						experimentName: ge.P
					}) === ge.W.Treatment)(e) && !Object(je.i)(),
					shouldShowFlairPreview: (e, t) => {
						let {
							listingName: n
						} = t;
						const r = Object(ze.I)(e, n);
						return Object($.c)(e, {
							subredditId: r
						})
					},
					subreddit: (e, t) => Object(ze.C)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(ze.z)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(ze.F)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(We.p)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Oe.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const r = Object(ze.C)(e, {
							subredditName: n
						});
						return !!r && Object(u.a)(e, {
							subredditId: r.id
						})
					},
					isInNCPV3Experiment: Ue.a,
					showCommunityDirectoryBacklink: Be.c,
					isCommunityMutingEnabled: Re.a
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(x.h)(ve.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(d.b)(t)),
					toggleFavorite: t => e(Object(C.c)({
						id: t,
						type: _e.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(f.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, r) => {
						e(Object(c.b)(t.listingName, n, r))
					},
					unmuteSubreddit: (t, n) => {
						t && e(Object(v.e)({
							subredditId: t,
							subredditName: n
						}))
					},
					muteSubreddit: (t, n) => {
						t && e(Object(v.d)({
							subredditId: t,
							subredditName: n
						}))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					isEligibleForCommunityAwards: Object(ke.b)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				})),
				Jt = .25,
				Qt = .001;
			class Xt extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showCommunityMutingModal: !1
					}, this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.subscribeButtonRef = null, this.setSubscribeButtonRef = e => {
						this.props.shouldObserveSubscribeButton && (this.subscribeButtonObserver || (this.subscribeButtonObserver = new IntersectionObserver(e => {
							e.forEach(e => {
								const {
									intersectionRatio: t
								} = e;
								t >= Jt && Object(ut.c)(!0), t <= Qt && Object(ut.c)(!1)
							})
						}, {
							rootMargin: `${-(fe.f+fe.m)}px 0px 0px 0px`,
							threshold: [Jt, Qt]
						})), this.subscribeButtonRef && this.subscribeButtonObserver.unobserve(this.subscribeButtonRef), e && (this.subscribeButtonRef = e, this.subscribeButtonObserver.observe(this.subscribeButtonRef)))
					}, this.onClickModTools = () => this.props.sendEvent(Object(we.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Ie.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== Ce.c ? t : xe.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(l.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(Se.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: r,
							subreddit: s
						} = this.props, o = Object(h.a)(this.getListingNameToUse());
						return !o && r ? i.a.createElement(k.default, {
							eventSource: De.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(M, {
							className: Qe.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: s
						}), !e && !o && n && i.a.createElement(R, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isMinimal: n,
							isOverlay: s,
							isSubmissionPage: o,
							subreddit: a,
							subredditAboutInfo: d,
							shouldShowFlairPreview: c,
							showCommunityDirectoryBacklink: l
						} = this.props, u = this.getListingNameToUse(), m = Object(h.a)(u), p = n && a && !s, b = e && !m && !p, f = t && !p && !o && !s && !(d && d.userIsBanned), g = t && !o && !s && !a, x = l && (b || f || g || p);
						return i.a.createElement(i.a.Fragment, null, x && i.a.createElement("hr", {
							className: Qe.a.HorizontalLine
						}), i.a.createElement("div", {
							className: Qe.a.Buttons
						}, b && i.a.createElement("div", {
							ref: this.setSubscribeButtonRef
						}, i.a.createElement(be.a, {
							className: Qe.a.SubscribeButton,
							getEventFactory: e => Object(Ie.a)(e ? "unsubscribe" : "subscribe"),
							id: `subscribe-button-${a.id}`,
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation(),
							small: !0,
							isFullWidth: !0
						})), f && this.renderCreatePostButtons(), g && i.a.createElement(j.a, {
							className: Qe.a.CreateCommunityButton,
							eventSource: "id_card"
						}), p && i.a.createElement(S.q, {
							className: Qe.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, r.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !s && c && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
							className: Qe.a.HorizontalLine
						}), i.a.createElement(pe, {
							subredditId: a.id
						}))))
					}
				}
				render() {
					const {
						addToMultiClicked: e,
						className: t,
						idCardWidget: n,
						isCommentsPage: s,
						isCommunityMutingEnabled: o,
						isEligibleForCommunityAwards: d,
						isGQLLoggedIn: c,
						isInNCPV3Experiment: l,
						isLoggedIn: u,
						isMinimal: m,
						isMuted: b,
						isNsfwBlurSubreddit: f,
						isOverlay: g,
						isSubmissionPage: x,
						moderatorPermissions: v,
						onContainerClick: C,
						subreddit: y,
						subredditAboutInfo: E,
						subredditCoins: k,
						subredditIcon: j,
						toggleTooltip: T,
						showCommunityDirectoryBacklink: S,
						subredditInlineEditingEnabled: I,
						unmuteSubreddit: w,
						muteSubreddit: N
					} = this.props, P = this.getListingNameToUse(), F = Object(h.a)(P);
					if (!F && !n) return i.a.createElement(bt, null);
					const {
						bannerBackgroundImage: D,
						currentlyViewingCount: M,
						currentlyViewingText: R,
						description: A,
						snooBackground: U,
						subscribersCount: H,
						subscribersText: z,
						titleText: V,
						url: G
					} = Object(ut.d)({
						listingName: P,
						subreddit: y,
						idCardWidget: n
					}), K = F || g || x, J = !F && y.id ? y.id : "", Q = E && E.created, Y = `IdCard--Subscribers--${g}--${J}`, Z = `IdCard--CurrentlyViewing--${g}--${J}`, $ = `IdCard--CakeDay--${g}--${J}`, ee = `IdCard--CoinCoint--${g}--${J}`, te = m && !g, ne = !F && !u && !c, re = !F && !g && I && !x, se = re && !l ? i.a.createElement(B.a, {
						description: A,
						shouldTruncateDescription: !1,
						isCommentsPage: !!s,
						subreddit: y
					}) : i.a.createElement(lt.a, {
						description: A,
						shouldTruncateDescription: !1,
						subreddit: y
					}), ie = d && v, oe = l ? ie && k && k > 0 : ie, ae = S ? i.a.createElement(i.a.Fragment, null, !F && !te && Q && i.a.createElement(i.a.Fragment, null, i.a.createElement(Wt, {
						className: Qe.a.cakeDayBlock,
						cakeDayCreated: Q,
						cakeDayTooltipId: $,
						showCommunityDirectoryBacklink: S,
						toggleTooltip: T
					})), ne && i.a.createElement(Lt.a, {
						subredditId: J
					}), !F && i.a.createElement(ct, {
						subreddit: y
					}), !F && !te && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Qe.a.HorizontalLine
					}), i.a.createElement(Nt, {
						subscribersCount: H,
						subscribersText: z,
						subscribersTooltipId: Y,
						currentlyViewingCount: M,
						currentlyViewingText: R,
						currentlyViewingTooltipId: Z,
						showCommunityDirectoryBacklink: S,
						toggleTooltip: T,
						subredditName: P
					}))) : i.a.createElement(i.a.Fragment, null, !F && !te && i.a.createElement(Nt, {
						subscribersCount: H,
						subscribersText: z,
						subscribersTooltipId: Y,
						currentlyViewingCount: M,
						currentlyViewingText: R,
						currentlyViewingTooltipId: Z,
						toggleTooltip: T,
						subredditName: P
					}), !F && !te && Q && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Qe.a.HorizontalLine
					}), i.a.createElement(Wt, {
						cakeDayCreated: Q,
						cakeDayTooltipId: $,
						toggleTooltip: T
					})), ne && i.a.createElement(Lt.a, {
						subredditId: J
					}), !F && i.a.createElement(ct, {
						subreddit: y
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(he.a, {
						className: Object(p.a)(Qe.a.ThemedWidget, t),
						onClick: g ? C : void 0,
						headerButton: i.a.createElement("div", {
							className: Qe.a.headerButtonsContainer
						}, !K && y && v && l !== ge.Xe.NewModule && i.a.createElement(a.a, {
							className: Qe.a.ModToolsLink,
							to: v.posts ? `${y.url}about/modqueue` : `${y.url}about/`,
							onClick: this.onClickModTools
						}, i.a.createElement(Fe.a, {
							className: Qe.a.ModSettings
						}), r.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), u && y && i.a.createElement(W.b, {
							className: Qe.a.overflowButton,
							dropdownId: Gt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !y.isQuarantined && i.a.createElement(ye.b, {
							className: Qe.a.dropdownRow,
							displayText: r.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), i.a.createElement(ye.b, {
							className: Qe.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? r.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : r.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}), i.a.createElement(zt.a, {
							contextType: Vt.a.SUBREDDIT,
							contextData: y
						}), v && i.a.createElement(zt.a, {
							contextType: Vt.a.SUBREDDIT,
							contextData: y,
							moderator: !0
						}), o && b && i.a.createElement(ye.b, {
							className: Qe.a.muteDropdownRow,
							displayText: r.fbt._("Unmute r/{subreddit name}", [r.fbt._param("subreddit name", y.name)], {
								hk: "3i9uGt"
							}),
							onClick: () => {
								this.props.sendEvent(Object(Ne.b)({
									subredditId: J
								})), w(J, y.name)
							}
						}), o && !b && i.a.createElement(ye.b, {
							className: Qe.a.muteDropdownRow,
							displayText: r.fbt._("Mute r/{subreddit name}", [r.fbt._param("subreddit name", y.name)], {
								hk: "18zbR0"
							}),
							onClick: () => {
								this.setState({
									showCommunityMutingModal: !0
								})
							}
						}))),
						redditStyle: F || x,
						title: K ? void 0 : r.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: F ? void 0 : Qe.a.subredditTitle
					}, K && i.a.createElement(Xe, {
						bannerBackgroundImage: D
					}), F || x || s ? F ? ft({
						titleText: V,
						snooBackground: U
					}) : i.a.createElement(Bt, {
						isTargetBlank: x,
						linkUrl: F ? void 0 : G,
						subredditIcon: j,
						canEditIcon: re,
						subreddit: y,
						titleText: V,
						onOpenFilePicker: this.openIconFilePicker,
						isInNCPV3Experiment: l,
						shouldBlurSubredditIcon: f
					}) : null, se, ae, !!oe && !!k && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Qe.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Qe.a.communityCoinCount,
						"data-testid": "community-coin-count"
					}, i.a.createElement(Pe.a, {
						className: Qe.a.coinIcon
					}), r.fbt._("{number-community-coins} Coins", [r.fbt._param("number-community-coins", k.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: ee,
						onMouseLeave: () => T(ee),
						onMouseEnter: () => T(ee)
					}, i.a.createElement(X.a, {
						name: "help",
						isFilled: !0,
						className: Qe.a.helpIcon
					})), i.a.createElement(L.c, {
						tooltipId: ee
					}, i.a.createElement("p", {
						className: Qe.a.coinsTooltipContent
					}, r.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), (l ? re && H > 100 : re) && i.a.createElement(q, {
						context: Te.a.idCard,
						subredditId: J
					}), !F && te && i.a.createElement(wt, {
						subreddit: y,
						subscribersCount: H,
						currentlyViewingCount: M
					}), this.renderButtons(), !F && u && i.a.createElement(i.a.Fragment, null, i.a.createElement(it, {
						isOverlay: g,
						isSubmissionPage: x,
						sendEvent: this.props.sendEvent,
						subredditId: y.id
					})), re && i.a.createElement(Ee.a, {
						key: "icon-file-picker",
						className: Qe.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !F && u && this.props.adminCommunityTopicsEnabled && i.a.createElement(O, {
						key: "admin-community-topics",
						subredditId: J
					})), this.state.showCommunityMutingModal && i.a.createElement(_.a, {
						subredditName: y.name,
						toggleModal: () => this.setState({
							showCommunityMutingModal: !1
						}),
						onConfirm: () => {
							this.props.sendEvent(Object(Ne.a)({
								subredditId: J
							})), N(J, y.name), this.setState({
								showCommunityMutingModal: !1
							})
						}
					}))
				}
			}
			t.default = Object(P.c)(Kt(Object(b.a)(Xt)))
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, n) {
			e.exports = {
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				shimmer: "_2hgXdc8jVQaXYAXvnqEyED",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				container: "_1KWSZXqSM_BLhBzkPyJFGR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(o.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(c.b)(n)(e)
					}
				}),
				v = Object(d.a)(g, [a.a.Click, a.a.Keydown]),
				C = Object(d.a)(f, [a.a.Click, a.a.Keydown]),
				_ = Object(i.b)(x);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(C, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "_2cHgYGbfV9EZMSThqLt2tx",
				small: "_3Q7WCNdCi77r0_CKPoDSFY",
				large: "_2wgLWvNKnhoJX3DUVT_3F-"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				o = n.n(i);
			t.a = () => s.a.createElement("div", null, s.a.createElement("div", {
				className: o.a.small
			}), s.a.createElement("div", {
				className: o.a.large
			}))
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less": function(e, t, n) {
			e.exports = {
				transition: "Rd5g7JmL4Fdk-aZi1-U_V",
				title: "_2TMXtA984ePtHXMkOpHNQm",
				container: "CneW1mCG4WJXxJbZl5tzH",
				pencil: "_11ARF4IQO4h3HeKPpPg0xb",
				inlineTopicsContainer: "_1I3N-uBrbZH-ywcmCnwv_B",
				emptyStateContainer: "_2IvhQwkgv_7K0Q3R0695Cs",
				inlineTopicsContainerEditing: "IeceazVNz_gGZfKXub0ak",
				optionsListDropdown: "_35hmSCjPO8OEezK36eUXpk",
				searchBar: "_3aEIeAgUy9VfJyRPljMNJP",
				numSelected: "_25yWxLGH4C6j26OKFx8kD5",
				controlRow: "_2YsVWIEj0doZMxreeY6iDG",
				cancel: "_1hFCAcL4_gkyWN0KM96zgg",
				save: "_1dF0IdghIrnqkJiUxfswxd",
				newBadge: "_3VGrhUu842I3acqBMCoSAq",
				relatedTopicsCopy: "edyFgPHILhf5OLH2vk-tk",
				relatedTopicsContainer: "_19lMIGqzfTPVY3ssqTiZSX",
				relatedTopicsContainerEmptyState: "_3MAHaXXXXi9Xrmc_oMPTdP"
			}
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const c = e => e.preventDefault();
			t.a = Object(i.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return s.a.createElement(o.e, {
					style: e.style
				}, s.a.createElement(o.i, null, s.a.createElement(d.a, null, s.a.createElement(o.q, null, e.headerText), !e.hideCancel && s.a.createElement(a.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, s.a.createElement(o.b, null)))), s.a.createElement(o.l, null, e.modalBody), (t || n) && s.a.createElement(o.g, null, t && s.a.createElement(o.a, {
					"data-redditstyle": !0,
					onMouseDown: c,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && s.a.createElement(o.u, {
					"data-redditstyle": !0,
					onMouseDown: c,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(g);
			const v = c.a.wrapped(m.a, "_Dropdown", x.a),
				C = Object(u.a)(v),
				_ = c.a.button("MenuButton", x.a),
				y = c.a.wrapped(p.b, "DropdownRow", x.a),
				E = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				O = Object(o.b)(E, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => i.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), i.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const n = Object(i.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, d({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/SidebarFlairSettings/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_2a172ppKObqWfRHr8eWBKV",
				FlairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				flairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				FlairPreviewWrapper: "_136QdRzXkGKNtSQ-h1fUru",
				flairPreviewWrapper: "_136QdRzXkGKNtSQ-h1fUru",
				PreviewTitle: "r51dfG6q3N-4exmkjHQg_",
				previewTitle: "r51dfG6q3N-4exmkjHQg_",
				TertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				tertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				IconButton: "_1-25VxiIsZFVU88qFh-T8p",
				iconButton: "_1-25VxiIsZFVU88qFh-T8p",
				previewUsername: "_2nxyf8XcTi2UZsUInEAcPs"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return a
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return _
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(s);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				d = r.a.button("HomePageBreadcrumb", i.a),
				c = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				b = r.a.div("FormElement", i.a),
				h = r.a.div("FormGroupDescription", i.a),
				f = r.a.div("FormItem", i.a),
				g = r.a.h3("FormElementTitle", i.a),
				x = r.a.div("FormElementDescription", i.a),
				v = r.a.div("FormElementError", i.a),
				C = r.a.div("FormElementSubGroup", i.a),
				_ = r.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, o = [n, v.a.inTopBar, v.a.iconContainer];
					return r ? o.push(v.a.emptyEditableIconInTopBar) : o.push(v.a.editableIcon, v.a.emptyEditableIcon), i.a.createElement("span", C({}, s, {
						className: Object(d.a)(...o)
					}), r ? i.a.createElement(h.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				y = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: v.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: s,
						src: c,
						className: Object(d.a)(n, {
							[v.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(a.c)({
					isLoading: g.b
				});
			class O extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : r.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(y, C({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(_, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(_, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(E, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(c.a)(t.subreddit.id, n, r))
				}
			}))(Object(l.c)(O))
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(o.b)(null, (e, t) => ({
					closeModal: () => e(Object(d.g)(t.modalId || m))
				}));
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return i.a.createElement(c.e, null, i.a.createElement(c.i, null, i.a.createElement(u.a, null, i.a.createElement(c.q, null, r.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(c.b, null)))), i.a.createElement(c.l, null, i.a.createElement(c.p, null, r.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(c.g, null, i.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, r.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(c.r, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			t.b = Object(a.a)(p(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...s
					} = e;
					return i.a.createElement(o.t, u({}, s, {
						priority: m(o.c.Primary, t, n),
						className: Object(l.a)(s.className, c.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: s,
						...a
					} = e;
					return i.a.createElement(o.t, u({}, a, {
						priority: m(o.c.Secondary, n, r),
						className: Object(l.a)(a.className, c.a.BaseButton),
						size: s ? o.d.S : o.d.M,
						text: b(t)
					}))
				};
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: s = !1,
						isFullWidth: o = !1,
						style: d
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: o,
						style: d
					};
					return this.props.userIsSubscriber ? i.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(i.a))
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/constants/imagePaths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/config.ts");
			const s = Array.from({
					length: 20
				}).map((e, t) => `${r.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				i = Array.from({
					length: 8
				}).map((e, t) => `${r.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = n("./src/reddit/controls/IconTooltip/index.m.less"),
				d = n.n(a);
			const c = Object(i.a)(o.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			class m extends s.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return s.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, s.a.createElement(c, {
						className: d.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: l,
						text: this.props.text,
						tooltipPosition: u
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, i = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = n.n(a);
			t.a = Object(r.memo)(Object(r.forwardRef)((e, t) => {
				const n = e.size || o.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(i.a)(d.a.toggleSwitch, e.className, {
						[d.a.xs]: n === o.d.XS,
						[d.a.s]: n === o.d.S,
						[d.a.m]: n === o.d.M,
						[d.a.l]: n === o.d.L,
						[d.a.xl]: n === o.d.XL,
						[d.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[d.a.mDisabled]: e.disabled,
						[d.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, s.a.createElement("div", {
					className: d.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: r,
						subscribe: o
					} = t;
					return Object(i.a)(Object(a.a)(e, [d.a]), {
						method: s.pb.POST,
						endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
					method: s.pb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: n ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Subreddit/index.ts");
			const s = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				i = new Set([r.g.Private, r.g.User]),
				o = e => !(!e || !e.name) && (!!s.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !i.has(e.type));
			t.a = o
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/memoize.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/reddit/constants/imagePaths.ts");
			const a = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return a;
				const r = n ? o.a : o.b,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(s + t) % i.a.length],
					image: r[(s + t) % r.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const a = e => {
					Object(o.a)({
						...s.o(e),
						action: r.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					})
				},
				d = (e, t, n) => {
					const {
						subreddit: a,
						profile: d
					} = Object(i.b)(e, t);
					Object(o.a)({
						...s.o(e),
						action: r.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: d,
						source: "id_card",
						subreddit: {
							...a,
							categoryName: n
						}
					})
				},
				c = e => t => ({
					action: r.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: s.lb(t)
				})
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const d = e => ({
					profile: a.T(e),
					screen: a.cb(e),
					subreddit: a.lb(e)
				}),
				c = (e, t, n) => r => ({
					source: Object(o.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...d(r),
					post: a.K(r, e)
				}),
				l = (e, t, n, r) => s => {
					const o = n ? a.h({
							state: s,
							commentId: n
						}) : null,
						{
							sortToUse: d
						} = Object(i.a)(s, e);
					return {
						...c(e, t, r)(s),
						comment: o,
						listing: {
							sort: d
						}
					}
				},
				u = (e, t) => n => {
					const r = a.k(n);
					return r ? c(r.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...d(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...c(e, t)(n),
					...a.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...d(t),
					post: a.k(t),
					userSubreddit: a.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.cb(e),
					subreddit: r.lb(e),
					profile: r.T(e),
					userSubreddit: r.ub(e)
				}),
				i = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...s(t)
				}),
				o = e => {
					let {
						noun: t,
						action: n,
						source: i,
						paneName: o
					} = e;
					return e => ({
						source: i,
						action: n,
						noun: t,
						...s(e),
						actionInfo: {
							...r.d(e),
							paneName: o
						}
					})
				},
				a = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...s(e)
				}),
				d = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...s(e)
				}),
				c = (e, t) => n => ({
					...s(n),
					source: "modmanagement",
					action: "click",
					noun: "permission",
					setting: {
						value: e,
						values: t
					}
				}),
				l = (e, t, n) => r => ({
					...s(r),
					source: "modmanagement",
					action: "click",
					noun: e,
					setting: {
						value: "",
						values: n
					},
					chat: {
						recipient_user_id: t
					}
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...r.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: r.lb(t)
				}),
				i = e => t => ({
					...r.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.lb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...r.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.lb(t)
				}),
				i = e => t => ({
					...r.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: r.lb(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.o(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.o(i),
					actionInfo: s.d(i, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.o(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.o(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const i = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: s.f.SubredditMuting,
						action: s.d.Mute,
						noun: s.e.Subreddit,
						subreddit: {
							id: t
						},
						...r.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				},
				o = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: s.f.SubredditMuting,
						action: s.d.Unmute,
						noun: s.e.Subreddit,
						subreddit: {
							id: t
						},
						...r.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.o(e)
				}),
				o = e => t => {
					const n = s.lb(t),
						{
							userFlair: i,
							achievementFlair: o
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.o(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(r.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name,
							isLocked: null == o ? void 0 : o.isLocked
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.o(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: s.lb(t),
					...s.o(t)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/helpers/clickSourceData/index.ts");

			function o() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(i.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(i.e)(o.k) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = a;
			const d = () => {
				const e = a(),
					t = Object(i.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(d);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(i.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(i.a)(d.a.ModSettings, Object(o.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.L
				}) === r.Td
			}
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Sb,
					experimentEligibilitySelector: o.e
				}), e => e === s.Y.Enabled),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Tb,
					experimentEligibilitySelector: o.e
				}), e => e === s.Z.Enabled),
				c = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Ub,
					experimentEligibilitySelector: o.e
				}), e => e === s.ab.Enabled),
				l = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: o.e
				}), e => e === s.bb.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Xb,
					experimentEligibilitySelector: o.e
				}), e => e === s.db.Enabled),
				m = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === s.cb.Enabled)
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"7288c5f50973"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.2ca5a4143406d45ec4ea.js.map