// https://www.redditstatic.com/desktop2x/IdCard.4293b65b9fe6f0c5bdf6.js
// Retrieved at 8/3/2023, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard", "AchievementsActions", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var s, r, i;
			r = [t, e], void 0 === (i = "function" == typeof(s = function(e, t) {
				"use strict";
				var n, s, r = "function" == typeof Map ? new Map : (n = [], s = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return s[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), s.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), s.splice(t, 1))
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
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, n = null,
							s = e.clientWidth,
							o = null,
							a = function() {
								e.clientWidth !== s && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
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
							r = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							i = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var o = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = o + "px", s = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), i && (document.documentElement.scrollTop = i)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							s = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (s !== t ? "hidden" === n.overflowY && (c("scroll"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== s) {
							o = s;
							var r = i("autosize:resized");
							try {
								e.dispatchEvent(r)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = r.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = r.get(e);
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
			}) ? s.apply(t, r) : s) || (e.exports = i)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var s = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = s(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var r = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = s(e, "line-height"), n = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var i = e.nodeName,
						o = document.createElement(i);
					o.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && o.setAttribute("rows", "1");
					var a = s(e, "font-size");
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
			var s, r, i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var s = t[n];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, n, s) {
						return n && e(t.prototype, n), s && e(t, s), t
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
				for (var s in e) t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var b = (r = s = function(e) {
				function t() {
					var e, n, s;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
					return n = s = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), s.state = {
						lineHeight: null
					}, s.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), s.textarea.dispatchEvent(t)
					}, s.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, s.updateLineHeight = function() {
						s.setState({
							lineHeight: (0, l.default)(s.textarea)
						})
					}, s.onChange = function(e) {
						s.currentValue = e.target.value, s.props.onChange && s.props.onChange(e)
					}, s.saveDOMNodeRef = function(e) {
						var t = s.props.innerRef;
						t && t(e), s.textarea = e
					}, s.getLocals = function() {
						var e = s,
							t = e.props,
							n = (t.onResize, t.maxRows),
							r = (t.onChange, t.style),
							o = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = n && a ? a * n : null;
						return i({}, o, {
							saveDOMNodeRef: d,
							style: c ? i({}, r, {
								maxHeight: c
							}) : r,
							onChange: s.onChange
						})
					}, p(s, n)
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
							s = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", i({}, s, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), s.defaultProps = {
				rows: 1
			}, r);
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
			var s, r = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				i = (s = r) && s.__esModule ? s : {
					default: s
				};
			t.default = i.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function i() {}
			i.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, i, o) {
					if (o !== s) {
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
					resetWarningCache: r
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
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/devPlatform/constants.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/experiments/devPlatform.ts"),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx");
			const u = Object(i.a)({
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

			function m(e) {
				const t = Object(c.e)(e => Object(d.a)(e)),
					n = Object(a.ib)(),
					s = Object(c.e)(t => p(t, {
						...e,
						pageLayer: n
					}));
				return t ? r.a.createElement(u, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator,
					subreddit: s,
					isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
					fallback: r.a.createElement(l.a, {
						isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
						contextType: e.contextType,
						moderator: e.moderator,
						subreddit: s
					})
				}) : null
			}
			const p = (e, t) => {
				const n = Object(a.s)(e, {
					pageLayer: t.pageLayer
				});
				if (null != n) return n;
				const s = e.subreddits.models;
				switch (t.contextType) {
					case o.a.POST:
						return s[t.contextData.belongsTo.id];
					case o.a.COMMENT:
						return s[t.contextData.subredditId];
					case o.a.SUBREDDIT:
					default:
						return null
				}
			}
		},
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				dropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				DropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				dropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				Icon: "SnpDpl5eEAD07JaiyJbpr",
				icon: "SnpDpl5eEAD07JaiyJbpr"
			}
		},
		"./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/devPlatform/constants.ts"),
				o = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/devPlatform/components/ContextActions/index.m.less"),
				c = n.n(d);

			function l(e) {
				const t = Object(s.useMemo)(() => {
					var t, n;
					if (null == e.subreddit) return [];
					let s;
					try {
						return (null == (s = JSON.parse(atob(null !== (n = null === (t = e.subreddit) || void 0 === t ? void 0 : t.devPlatformMetadata) && void 0 !== n ? n : ""))) ? void 0 : s.contextActions) ? s.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).reduce((t, n) => {
							var s;
							let r = [];
							return (null === (s = n.actions) || void 0 === s ? void 0 : s.actions) && (r = n.actions.actions.filter(t => {
								var n, s, r, o, a;
								if (e.moderator && !(null === (n = t.users) || void 0 === n ? void 0 : n.moderator) || !e.moderator && (null === (s = t.users) || void 0 === s ? void 0 : s.moderator)) return !1;
								switch (e.contextType) {
									case i.a.POST:
										return !!(null === (r = t.contexts) || void 0 === r ? void 0 : r.post);
									case i.a.COMMENT:
										return !!(null === (o = t.contexts) || void 0 === o ? void 0 : o.comment);
									case i.a.SUBREDDIT:
										return !!(null === (a = t.contexts) || void 0 === a ? void 0 : a.subreddit);
									default:
										return !1
								}
							})), [...t, ...r]
						}, []).sort((e, t) => e.name.localeCompare(t.name)) : []
					} catch (r) {
						return []
					}
				}, [e.contextType, e.moderator, e.subreddit]);
				return r.a.createElement(r.a.Fragment, null, t.map(t => r.a.createElement(o.b, {
					disabled: !0,
					className: e.isOnModQueueOverflowMenu ? c.a.DropdownRowBorderless : c.a.DropdownRow,
					displayText: t.name,
					key: `${e.contextType}.${t.actionId}`
				}, r.a.createElement(a.a, {
					name: e.moderator ? "mod" : "bot",
					className: c.a.Icon
				}))))
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				i = "devvit-debug-logging",
				o = "DEV_PLAT__OPEN_FORM_MODAL",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var d;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(d || (d = {}))
		},
		"./src/lib/isDefined.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return !!e
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
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
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						i = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - i === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return C
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return _
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
				return w
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return I
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return N
			})), n.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/isDefined.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const l = async (e, t, n, s) => {
				const r = await Object(a.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: s
					}
				});
				if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
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
				y = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(v.a)({
				features: {
					powerups: y.a
				}
			});
			const C = Object(i.a)(x.d),
				_ = Object(i.a)(x.f),
				E = Object(i.a)(x.g),
				O = Object(i.a)(x.e),
				k = Object(i.a)(x.h),
				j = (e, t) => async (n, s, r) => {
					let {
						gqlContext: i
					} = r;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const {
							subredditInfoById: t
						} = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...d,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data
						})(i(), e, c);
						await n(C(t))
					} catch (l) {
						o.c.captureException(l)
					}
				}, T = (e, t) => async (n, s) => {
					if (!e) return;
					const r = s(),
						i = Object(g.m)(r);
					if (!i || !Object(h.e)(r, {
							subredditId: e
						})) return;
					const o = !!Object(f.e)(r, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(j(e, [i.id]))
				}, w = e => async (t, n) => !!e && (await t(Object(u.c)(e)), !!Object(f.c)(n(), {
					subredditId: e
				})), I = e => async (t, n) => {
					var s;
					const r = n(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(b.e)(r, {
							commentIds: i
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(w(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(j(a, Array.from(d)))
				}, S = (e, t) => async (n, s) => {
					if (!t) return;
					if (!(await n(w(e)))) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await n(j(e, Array.from(r)))
				}, N = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(g.m)(r);
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
					t(_(e));
					const {
						subredditId: b,
						achievementFlairType: h
					} = e, x = [h].filter(r.a), v = Object(f.d)(d, {
						subredditId: b,
						userId: u
					});
					try {
						await l(a(), b, x, v), t(E(e))
					} catch (y) {
						t(O(e)), o.c.captureException(y), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
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
						x = [Object(f.g)(c, h)].filter(r.a);
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
							text: s.fbt._("Failed to change flair visibility", null, {
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(o.a),
				d = Object(s.a)(o.b),
				c = Object(s.a)(o.c),
				l = Object(s.a)(o.d),
				u = Object(s.a)(o.e),
				m = Object(s.a)(o.f),
				p = Object(s.a)(o.g),
				b = Object(s.a)(o.h),
				h = Object(s.a)(o.i),
				f = e => Object(r.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = () => async (e, t) => {
				const n = t();
				return Object(o.m)(n) ? e(Object(r.h)(i.a.ACHIEVEMENT_FLAIR)) : e(Object(s.openLoginModal)())
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
			const h = Object(r.a)(o.B),
				f = Object(r.a)(o.C),
				g = Object(r.a)(o.A),
				x = (e, t, n) => async (s, r, i) => {
					const o = Object(p.C)(r(), {
						subredditName: e
					});
					if (o) return y(o.id, t, n)(s, r, i)
				}, v = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (r, o, p) => {
					const x = await Object(l.e)(t);
					r(h());
					const y = o();
					try {
						await Object(i.g)("communityIcon", x, e)(r, o, p)
					} catch (_) {
						return Object(b.a)(Object(c.c)(y, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: v()
						})), void r(g())
					}
					const C = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!C) return Object(b.a)(Object(c.c)(y, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: v()
					})), void r(g());
					await Object(i.k)(e, {
						communityIcon: C
					}, d.b.idCard, n)(r, o, p), r(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(f())
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "b", (function() {
				return F
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var y = n("./src/reddit/endpoints/subreddit/about.ts");
			const C = Object(r.a)(b.i),
				_ = Object(r.a)(b.h),
				E = Object(r.a)(b.G),
				O = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				k = Object(r.a)(b.f),
				j = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(x(n, T({
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
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(v(n, j({
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
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
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
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(n, w({
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
						notificationLevel: n
					} = e;
					return async (e, r, a) => {
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
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const a = await (e => Object(o.a)(e, d))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(C({
							nodes: n
						}))
					} else e(_()), e(Object(i.f)({
						duration: i.a,
						kind: p.b.Error,
						text: s.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
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
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
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
								text: s.fbt._("Sorry, r/{subreddit name} is already muted.", [s.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const m = await Object(y.a)(o(), t, !0),
							{
								data: b
							} = m.body,
							h = b && b.subreddit;
						if (!m.ok || null === h) {
							return e(((e, t) => Object(i.f)({
								id: e,
								kind: p.b.Error,
								duration: i.a,
								text: s.fbt._("Sorry, r/{subreddit name} isn't a community.", [s.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = h.id,
							C = await u(o(), v);
						if (C.ok && C.body && (null === (d = null === (a = C.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(k([h])), e(x(h.name));
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
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
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: x
					} = g;
					var v, y, C;
					e(p());
					const _ = h(n),
						E = await Object(c.b)(x(), t, _);
					if ((null === (y = null === (v = E.error) || void 0 === v ? void 0 : v.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (C = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
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
					})), r && r(), e(a ? Object(d.f)(Object(d.e)(f(n), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, a))) : Object(d.f)(Object(d.e)(f(n), u.b.SuccessCommunityGreen))))
				}
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				y = n.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E,
				k = 24;
			class j extends r.a.Component {
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
					if (this.props.usePlaceholder && !e.length) return r.a.createElement("img", {
						className: Object(d.a)(y.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${_}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || k;
					return r.a.createElement(s.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(f.a, {
						className: y.a.addCustom
					})), r.a.createElement(x, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(g.d)(n, n, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return r.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, r.a.createElement("div", {
							className: Object(d.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: y.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${n}px`
							}
						}), this.props.useHovercard ? r.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : r.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const T = [],
				w = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var r;
						return (null === (r = e.users.appliedBadges[s]) || void 0 === r ? void 0 : r[n]) || T
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				I = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n
						} = t;
						var s;
						const r = e.user.account;
						return r && (null === (s = e.users.appliedBadges[r.id]) || void 0 === s ? void 0 : s[n]) || T
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = e => ({
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
					...s
				} = e, i = t.map(e => n[e]).filter(Boolean);
				return r.a.createElement(j, C({
					badges: i
				}, s))
			}
			const P = Object(i.b)(w, S)(N),
				F = Object(i.b)(I, S)(N)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/ModalStyledComponents/Modal.tsx");
			const a = e => {
				let {
					subredditName: t,
					toggleModal: n,
					onConfirm: r
				} = e;
				return i.a.createElement(o.a, {
					headerText: s.fbt._("Mute {name of subreddit to mute}", [s.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "4eAU3R"
					}),
					modalBody: s.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [s.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "1JNA6G"
					}),
					toggleModal: n,
					actionText: s.fbt._("YES, MUTE", null, {
						hk: "1eAO8C"
					}),
					cancelActionText: s.fbt._("CANCEL", null, {
						hk: "If1yt"
					}),
					onConfirm: r,
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/redditGQL/types.ts");
			const i = 500,
				o = 100,
				a = 5e3,
				d = 0,
				c = 1440,
				l = 36600,
				u = 1e9,
				m = {
					disabled: s.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: s.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: s.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				p = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				b = {
					any: s.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: s.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: s.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				h = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				f = {
					mods: s.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: s.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				g = {
					[r.X.Low]: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					[r.X.High]: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					[r.X.All]: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				x = {
					[r.X.Low]: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					[r.X.High]: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					[r.X.All]: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				v = {
					blank: s.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: s.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: s.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: s.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: s.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: s.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: s.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: s.fbt._("new", null, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				y = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.c, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: g.a.nsfwText
				}, s.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				C = () => i.a.createElement(x, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, s.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				_ = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(y, null)), i.a.createElement(x, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(C, null)),
				E = Object(o.b)(v);
			t.a = E(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: r = b.e.Post,
					textClassName: o,
					subreddit: a
				} = e;
				switch (a.type) {
					case p.g.Restricted:
						return i.a.createElement(_, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.restrictedIcon, n)
							}),
							text: s.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: o,
							description: Object(b.g)(r),
							subreddit: a
						});
					case p.g.Private:
						return i.a.createElement(_, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.privateIcon, n)
							}),
							text: s.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: o,
							description: s.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: a
						});
					case p.g.EmployeesOnly:
						return i.a.createElement(_, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(c.a)(g.a.employeesIcon, n)
							}),
							text: a.allowContractors ? s.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : s.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: o,
							subreddit: a
						});
					default:
						return i.a.createElement(i.a.Fragment, null, a.isQuarantined && i.a.createElement(C, null), a.isNSFW && i.a.createElement(y, null))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				[b.b.Comment]: s.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[b.b.IdCard]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.PostSubmission]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.ContentGate]: s.fbt._("Request to Join", null, {
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
							openContributorRequestModal: s
						} = this.props;
						t === b.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), s())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: r
					} = this.props;
					return i.a.createElement(u.t, {
						priority: e === b.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: r
					}, r ? s.fbt._("Request Pending", null, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				y = x.a.wrapped(l.c, "StyledTooltip", g.a),
				C = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(o.b)(C, (e, t) => {
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
					onShowTooltip: r,
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
					onMouseEnter: r,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
					userId: r,
					flairData: p,
					username: h,
					userHasBadge: f,
					usernameClassName: g
				} = e;
				const x = Object(o.e)(e => Object(m.m)(e));
				return x ? i.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, t),
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
					className: Object(s.a)(b.a.username, g)
				}, `${h||"username"}`), i.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: n,
					userId: r
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(c.c, {
					className: b.a.userFlair,
					flair: p.applied,
					forceSmallEmojis: !0
				})))) : null
			}
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				y = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				O = n.n(E);
			const k = 6,
				j = `${f.a}_description`,
				T = Object(c.c)({
					apiPending: _.Y,
					unsavedChangesModalIsOpen: Object(C.b)(j)
				}),
				w = Object(d.b)(T, (e, t) => {
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
					}, i.a.createElement(y.a, {
						name: "edit",
						className: O.a.pencil
					}), e)) : i.a.createElement("div", {
						className: O.a.emptyDescription
					}, s.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(a.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: s.fbt._("Tell us about your community", null, {
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
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: O.a.save,
						onClick: this.onSave
					}, s.fbt._("Save", null, {
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
			t.a = w(Object(g.c)(I))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("DescriptionContainer", l.a);
			class p extends r.a.Component {
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
						shouldDisplayShowMore: s,
						shouldTruncateDescription: o
					} = this.state, a = n ? u._("Welcome to {subredditName}", [u._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return r.a.createElement(m, {
						className: Object(i.a)(l.a.descriptionContainer, o && l.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, r.a.createElement("div", {
						className: l.a.description,
						ref: this.setTextRef
					}, t || a, e), o && s && r.a.createElement("div", {
						className: l.a.showMore
					}, "...", r.a.createElement(d.r, {
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
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
					const f = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, v;
					return l(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : d(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = o.c[o.b.Popular]) : p && (n = h && h.description, i = u(""), a = b.displayText, m = b.url, v = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				y = n("./src/reddit/actions/subscription/index.ts"),
				C = n("./src/reddit/components/CommunityMuting/index.tsx"),
				_ = n("./src/higherOrderComponents/makeAsync.tsx"),
				E = n("./src/lib/loadWithRetries/index.ts"),
				O = Object(_.a)({
					getComponent: () => Object(E.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				k = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				j = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				T = n("./src/reddit/actions/login.ts"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				S = n("./src/reddit/helpers/trackers/postComposer.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(m.c)({
				isLoggedIn: N.S
			});
			var B = Object(o.b)(M, e => ({
				openLoginModal: () => {
					e(Object(x.k)({
						actionSource: x.a.Post
					})), e(Object(T.openRegisterModal)())
				}
			}))(Object(P.c)(e => {
				let {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: r,
					openLoginModal: o,
					sendEvent: a,
					subreddit: d,
					...c
				} = e;
				const l = `${Object(I.a)(d)||"/"}submit`;
				return i.a.createElement(w.n, F({}, c, {
					onClick: e => {
						a(Object(S.x)({
							actionInfoType: "id_card",
							subredditId: null == d ? void 0 : d.id
						})), n || (o(), e.preventDefault())
					},
					to: l
				}), t ? s.fbt._("Draft Post", null, {
					hk: "17BbM6"
				}) : s.fbt._("Create Post", null, {
					hk: "4k3RsQ"
				}))
			}));
			const R = Object(_.a)({
				getComponent: () => Object(E.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var D = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				U = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				q = n.n(U);
			var H = Object(_.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: q.a.container
					}, i.a.createElement(A.a, null)),
					getComponent: () => Object(E.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				z = n("./src/reddit/components/OverflowMenu/index.tsx"),
				V = n("./src/lib/lessComponent.tsx"),
				W = n("./src/reddit/actions/authorFlair.ts"),
				G = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				Q = n("./src/reddit/actions/gold/powerups.ts"),
				K = n("./src/reddit/helpers/trackers/userFlair.ts"),
				J = n("./src/reddit/hooks/useTracking.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/User/index.ts"),
				Z = n("./src/reddit/selectors/gold/powerups/index.ts"),
				$ = n("./src/reddit/selectors/userFlair.ts"),
				ee = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				te = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = V.a.div("FlairSettingsContainer", ne.a), ie = V.a.div("FlairPreviewWrapper", ne.a), oe = V.a.div("PreviewTitle", ne.a), ae = V.a.wrapped(w.r, "TertiaryButton", ne.a), de = V.a.wrapped(ae, "IconButton", ne.a), ce = Object(m.c)({
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
					username: s,
					userFlairData: r,
					userHasBadge: o
				} = e;
				return i.a.createElement(ie, null, i.a.createElement(ee.a, {
					subredditId: t,
					userId: n,
					username: s,
					flairData: r,
					userHasBadge: o,
					usernameClassName: ne.a.previewUsername
				}))
			};
			var pe = le(e => {
					let {
						currentUser: t,
						subredditId: n,
						userFlairData: s,
						userHasBadge: a,
						isAchievementFlairModalEnabled: d
					} = e;
					const c = Object(o.d)(),
						l = Object(J.a)();
					Object(r.useEffect)(() => {
						d && c(Object(G.getSubredditCurrentUserPowerupsFlairs)(n))
					}, [c, n, d]);
					return t && (s || d) ? i.a.createElement(re, null, i.a.createElement(oe, null, se._("preview", null, {
						hk: "2so8Zj"
					}), i.a.createElement(ue, {
						onClick: () => {
							if (d) c(Object(Q.a)());
							else {
								(e => c(Object(W.b)({
									username: e,
									subredditId: n
								})))(t ? Object(Y.e)(t) : null)
							}
							l(Object(K.c)())
						}
					})), i.a.createElement(me, {
						subredditId: n,
						userId: t.id,
						username: Object(Y.e)(t),
						userFlairData: s,
						userHasBadge: a
					})) : null
				}),
				be = n("./src/reddit/components/SubscribeButton/index.tsx"),
				he = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				fe = n("./src/reddit/constants/componentSizes.ts"),
				ge = n("./src/reddit/constants/experiments.ts"),
				xe = n("./src/reddit/constants/listings.ts"),
				ve = n("./src/reddit/constants/modals.ts"),
				ye = n("./src/reddit/constants/page.ts"),
				Ce = n("./src/reddit/constants/posts.ts"),
				_e = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ee = n("./src/reddit/controls/ImageInput/index.tsx"),
				Oe = n("./src/reddit/featureFlags/index.ts"),
				ke = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				je = n("./src/reddit/helpers/localStorage/index.ts"),
				Te = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				we = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				Ie = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Se = n("./src/reddit/helpers/trackers/modHub.ts"),
				Ne = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				Pe = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Fe = n("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				Me = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Be = n("./src/reddit/selectors/category.ts"),
				Re = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				De = n("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				Le = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Ae = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				Ue = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				qe = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				He = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ze = n("./src/reddit/selectors/structuredStyles.ts"),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				We = n("./src/reddit/selectors/subscriptions.ts"),
				Ge = n("./src/reddit/selectors/tooltip.ts"),
				Qe = n("./src/reddit/selectors/widgets.ts"),
				Ke = n("./src/reddit/components/IdCard/index.m.less"),
				Je = n.n(Ke);
			const Xe = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: Je.a.Banner,
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
			const nt = V.a.wrapped(w.t, "TertiaryButton", tt.a),
				st = Object(m.c)({
					stylesDisabledForSubreddit: N.tb,
					stylesDisabledGlobally: N.ub
				});
			class rt extends i.a.Component {
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
						isOpen: r
					} = this.state, o = r ? i.a.createElement("div", {
						className: tt.a.content
					}, i.a.createElement("div", {
						className: Object(p.a)(tt.a.stylesToggle, {
							[tt.a.disabled]: n
						}),
						title: n ? s.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: tt.a.stylesToggleLabel
					}, i.a.createElement(X.a, {
						name: t ? "hide" : "show",
						className: tt.a.visibilityIcon
					}), s.fbt._("Community theme", null, {
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
						kind: w.b.Button,
						priority: w.c.Plain,
						isFullWidth: !0,
						className: Object(p.a)(tt.a.expandButton, {
							[tt.a.redditStyle]: e
						}),
						onClick: this.onExpandButtonClick
					}, s.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(X.a, {
						name: r ? "caret_up" : "caret_down"
					})), o)
				}
			}
			var it = Object(o.b)(st, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(Ye.I)(t, n))
					}
				}))(rt),
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
					className: Je.a.AdorableSnoo,
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
						className: Object(p.a)(Je.a.Title, Je.a.TitleShifted)
					}, i.a.createElement(ht, {
						snooBackground: n
					}), i.a.createElement("div", {
						className: Je.a.TitleTextShiftedContainer
					}, i.a.createElement("span", {
						className: Je.a.TitleText
					}, t)))
				},
				gt = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: xt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vt = e => e.position <= 50, yt = (e, t) => (e => 1 === e.position)(t) ? xt._("{subredditPrefixedName} is the largest community on Reddit", [xt._param("subredditPrefixedName", `r/${e}`)], {
				hk: "1RFzJ9"
			}) : vt(t) ? xt._("{subredditPrefixedName} is ranked #{rankingPosition} in Largest Communities", [xt._param("subredditPrefixedName", `r/${e}`), xt._param("rankingPosition", `${t.position}`)], {
				hk: "3HTdvv"
			}) : xt._("{subredditPrefixedName} is in the top {communityRankingPercent}% of largest communities on Reddit", [xt._param("subredditPrefixedName", `r/${e}`), xt._param("communityRankingPercent", t.percentile)], {
				hk: "2coXDi"
			});
			var Ct = n("./src/reddit/selectors/telemetry.ts");
			var _t = n("./src/reddit/selectors/platform.ts");
			var Et = Object(o.b)(() => Object(m.c)({
					postId: _t.o,
					subredditId: (e, t) => {
						let {
							subredditName: n
						} = t;
						return Object(Ve.I)(e, n)
					},
					subredditRankingsInfo: (e, t) => {
						let {
							subredditName: n
						} = t;
						return Object(De.a)(e, n)
					}
				}))(Object(P.c)(e => {
					let {
						className: t,
						isCompact: n,
						labelClassName: s,
						subredditId: r,
						subredditRankingsInfo: o,
						postId: a,
						sendEvent: d,
						subredditName: c
					} = e;
					return r && (null == o ? void 0 : o.url) ? i.a.createElement("a", {
						href: null == o ? void 0 : o.url,
						onClick: () => d(((e, t) => n => ({
							source: t ? "post_detail" : "subreddit",
							action: "click",
							noun: "community_directory_backlink",
							post: t ? Ct.M(n, t) : void 0,
							subreddit: Ct.ob(n, e),
							screen: Ct.eb(n)
						}))(r, a)),
						title: yt(c, o)
					}, i.a.createElement("span", {
						className: n ? t : ""
					}, i.a.createElement("p", {
						className: t
					}, (e => vt(e) ? `#${e.position}` : xt._("Top {communityRankingPercentile}", [xt._param("communityRankingPercentile", `${e.percentile}%`)], {
						hk: "TFUCv"
					}))(o)), i.a.createElement("p", {
						className: n ? t : s
					}, (() => xt._("Ranked by Size", null, {
						hk: "25nwA6"
					}))()))) : n ? i.a.createElement(i.a.Fragment, null) : i.a.createElement("div", null)
				})),
				Ot = n("./src/reddit/helpers/getFakeUserIcons.ts");
			const kt = e => {
				let {
					printNumber: t,
					printNumberClassname: n,
					tooltipId: s,
					viewText: r,
					viewTextClassname: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: n
				}, Object(gt.b)(t)), i.a.createElement("p", {
					className: o,
					id: s
				}, r), i.a.createElement(L.c, {
					caretOnTop: !0,
					text: `${Object(gt.b)(t,{displayFull:!0})} ${r}`,
					tooltipId: s
				}))
			};
			var jt = n("./src/reddit/components/IdCard/StatsBlock/experiment.m.less"),
				Tt = n.n(jt),
				wt = n("./src/reddit/components/IdCard/StatsBlock/index.m.less"),
				It = n.n(wt);
			const St = e => {
					let {
						subreddit: t,
						subscribersCount: n,
						currentlyViewingCount: r
					} = e;
					const o = Object(Ot.a)(t.name);
					return i.a.createElement("span", {
						className: It.a.compactStats
					}, o.map((e, t) => {
						let {
							color: n,
							image: r
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? s.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: It.a.memberIcon,
							key: r,
							src: r,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: It.a.metaText
					}, s.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [s.fbt._plural(n, "number of members", Object(gt.b)(n))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: It.a.metaText
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(gt.b)(r))], {
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
						subscribersText: s,
						subscribersTooltipId: r,
						currentlyViewingCount: o,
						currentlyViewingText: a,
						currentlyViewingTooltipId: d,
						showCommunityDirectoryBacklink: c,
						toggleTooltip: l
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: c ? Tt.a.stats : It.a.stats
					}, i.a.createElement("div", {
						onMouseEnter: () => l(r),
						onMouseLeave: () => l(r)
					}, i.a.createElement(kt, {
						printNumber: n,
						printNumberClassname: It.a.count,
						tooltipId: r,
						viewText: s,
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
				Mt = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Bt = n("./src/reddit/hooks/useClickSourceData.ts");
			const {
				fbt: Rt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Dt(e) {
				const t = Object(r.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: n,
						isInNCPV3Experiment: s,
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
					x = Object(Bt.a)();
				return i.a.createElement("div", {
					className: Object(p.a)(Je.a.Title, e.className)
				}, n && h && !s ? i.a.createElement(Mt.a, {
					className: d ? Je.a.largeSubredditIcon : Je.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					subreddit: h,
					inTopBar: !1
				}) : i.a.createElement(Ft.b, {
					altText: u.altText,
					className: d ? Je.a.largeSubredditIcon : Je.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					shouldBlurSubredditIcon: l
				}), i.a.createElement("div", {
					className: Je.a.titleTextContainer
				}, c ? i.a.createElement(a.a, {
					className: Je.a.TitleLink,
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
					className: Je.a.TitleText,
					title: m
				}, m)) : i.a.createElement("span", {
					className: Je.a.TitleText,
					key: m
				}, m), n && h && f && !s && i.a.createElement("div", {
					className: Je.a.editIconText,
					onClick: f
				}, g)))
			}
			var Lt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				At = n("./src/reddit/components/HumanDate/index.tsx"),
				Ut = n("./src/reddit/components/IdCard/CakeDayBlock/index.m.less"),
				qt = n.n(Ut);
			const {
				fbt: Ht
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zt = e => {
				let {
					cakeDayCreated: t,
					cakeDayTooltipId: n,
					className: s,
					showCommunityDirectoryBacklink: r,
					toggleTooltip: o
				} = e;
				return i.a.createElement("div", {
					className: Object(p.a)(qt.a.CakeDayContainer, s),
					onMouseEnter: () => o(n),
					onMouseLeave: () => o(n)
				}, i.a.createElement("div", {
					className: qt.a.CakeDay,
					id: n
				}, i.a.createElement(X.a, {
					name: "cake",
					className: qt.a.cakeIcon
				}), i.a.createElement("span", {
					className: r ? qt.a.label : ""
				}, Ht._("Created {cakeday}", [Ht._param("cakeday", i.a.createElement(At.a, {
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
			var Vt = n("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				Wt = n("./src/devPlatform/constants.ts");
			const Gt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Qt = Object(o.b)(() => Object(m.c)({
					activeTooltipId: Ge.a,
					postCategories: (e, t) => Object(Be.l)(e, t.postId),
					favoriteSubredditsIds: We.a,
					idCardWidget: (e, t) => Object(Qe.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(Ve.e)(e, Me.e.Post),
					isGQLLoggedIn: N.R,
					isLoggedIn: N.S,
					isNsfwBlurSubreddit: qe.e,
					isMuted: (e, t) => Object(Ve.K)(e, {
						subredditName: t.listingName
					}),
					moderatorPermissions: (e, t) => {
						const n = Object(Ve.I)(e, t.listingName);
						if (n) return Object(He.n)(e, {
							subredditId: n
						})
					},
					shouldObserveSubscribeButton: e => Object(Ae.a)(e) || Object(Ae.c)(e) || Object(Ae.d)(e),
					showContributorRequestFlow: e => Object(Ve.w)(e, Me.e.Post),
					showCreatePollButton: e => (e => Object(Le.c)(e, {
						experimentEligibilitySelector: Le.a,
						experimentName: ge.M
					}) === ge.T.Treatment)(e) && !Object(je.i)(),
					shouldShowFlairPreview: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(Ve.I)(e, n);
						return Object($.c)(e, {
							subredditId: s
						})
					},
					subreddit: (e, t) => Object(Ve.C)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(Ve.z)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(Ve.F)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(ze.p)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Oe.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(Ve.C)(e, {
							subredditName: n
						});
						return !!s && Object(u.a)(e, {
							subredditId: s.id
						})
					},
					isInNCPV3Experiment: Ue.a,
					showCommunityDirectoryBacklink: De.c,
					isCommunityMutingEnabled: Re.a
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(x.h)(ve.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(d.b)(t)),
					toggleFavorite: t => e(Object(y.c)({
						id: t,
						type: Ce.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(f.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(c.b)(t.listingName, n, s))
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
				Kt = .25,
				Jt = .001;
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
								t >= Kt && Object(ut.c)(!0), t <= Jt && Object(ut.c)(!1)
							})
						}, {
							rootMargin: `${-(fe.f+fe.m)}px 0px 0px 0px`,
							threshold: [Kt, Jt]
						})), this.subscribeButtonRef && this.subscribeButtonObserver.unobserve(this.subscribeButtonRef), e && (this.subscribeButtonRef = e, this.subscribeButtonObserver.observe(this.subscribeButtonRef)))
					}, this.onClickModTools = () => this.props.sendEvent(Object(Se.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Ie.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== ye.c ? t : xe.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(l.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(we.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, o = Object(h.a)(this.getListingNameToUse());
						return !o && s ? i.a.createElement(k.default, {
							eventSource: Me.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(B, {
							className: Je.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !o && n && i.a.createElement(R, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: o,
							subreddit: a,
							subredditAboutInfo: d,
							shouldShowFlairPreview: c,
							showCommunityDirectoryBacklink: l
						} = this.props, u = this.getListingNameToUse(), m = Object(h.a)(u), p = n && a && !r, b = e && !m && !p, f = t && !p && !o && !r && !(d && d.userIsBanned), g = t && !o && !r && !a, x = l && (b || f || g || p);
						return i.a.createElement(i.a.Fragment, null, x && i.a.createElement("hr", {
							className: Je.a.HorizontalLine
						}), i.a.createElement("div", {
							className: Je.a.Buttons
						}, b && i.a.createElement("div", {
							ref: this.setSubscribeButtonRef
						}, i.a.createElement(be.a, {
							className: Je.a.SubscribeButton,
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
							className: Je.a.CreateCommunityButton,
							eventSource: "id_card"
						}), p && i.a.createElement(w.q, {
							className: Je.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, s.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !r && c && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
							className: Je.a.HorizontalLine
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
						isCommentsPage: r,
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
						onContainerClick: y,
						subreddit: _,
						subredditAboutInfo: E,
						subredditCoins: k,
						subredditIcon: j,
						toggleTooltip: T,
						showCommunityDirectoryBacklink: w,
						subredditInlineEditingEnabled: I,
						unmuteSubreddit: S,
						muteSubreddit: N
					} = this.props, P = this.getListingNameToUse(), F = Object(h.a)(P);
					if (!F && !n) return i.a.createElement(bt, null);
					const {
						bannerBackgroundImage: M,
						currentlyViewingCount: B,
						currentlyViewingText: R,
						description: A,
						snooBackground: U,
						subscribersCount: q,
						subscribersText: V,
						titleText: W,
						url: G
					} = Object(ut.d)({
						listingName: P,
						subreddit: _,
						idCardWidget: n
					}), Q = F || g || x, K = !F && _.id ? _.id : "", J = E && E.created, Y = `IdCard--Subscribers--${g}--${K}`, Z = `IdCard--CurrentlyViewing--${g}--${K}`, $ = `IdCard--CakeDay--${g}--${K}`, ee = `IdCard--CoinCoint--${g}--${K}`, te = m && !g, ne = !F && !u && !c, se = !F && !g && I && !x, re = se && !l ? i.a.createElement(D.a, {
						description: A,
						shouldTruncateDescription: !1,
						isCommentsPage: !!r,
						subreddit: _
					}) : i.a.createElement(lt.a, {
						description: A,
						shouldTruncateDescription: !1,
						subreddit: _
					}), ie = d && v, oe = l ? ie && k && k > 0 : ie, ae = w ? i.a.createElement(i.a.Fragment, null, !F && !te && J && i.a.createElement(i.a.Fragment, null, i.a.createElement(zt, {
						className: Je.a.cakeDayBlock,
						cakeDayCreated: J,
						cakeDayTooltipId: $,
						showCommunityDirectoryBacklink: w,
						toggleTooltip: T
					})), ne && i.a.createElement(Lt.a, {
						subredditId: K
					}), !F && i.a.createElement(ct, {
						subreddit: _
					}), !F && !te && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Je.a.HorizontalLine
					}), i.a.createElement(Nt, {
						subscribersCount: q,
						subscribersText: V,
						subscribersTooltipId: Y,
						currentlyViewingCount: B,
						currentlyViewingText: R,
						currentlyViewingTooltipId: Z,
						showCommunityDirectoryBacklink: w,
						toggleTooltip: T,
						subredditName: P
					}))) : i.a.createElement(i.a.Fragment, null, !F && !te && i.a.createElement(Nt, {
						subscribersCount: q,
						subscribersText: V,
						subscribersTooltipId: Y,
						currentlyViewingCount: B,
						currentlyViewingText: R,
						currentlyViewingTooltipId: Z,
						toggleTooltip: T,
						subredditName: P
					}), !F && !te && J && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Je.a.HorizontalLine
					}), i.a.createElement(zt, {
						cakeDayCreated: J,
						cakeDayTooltipId: $,
						toggleTooltip: T
					})), ne && i.a.createElement(Lt.a, {
						subredditId: K
					}), !F && i.a.createElement(ct, {
						subreddit: _
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(he.a, {
						className: Object(p.a)(Je.a.ThemedWidget, t),
						onClick: g ? y : void 0,
						headerButton: i.a.createElement("div", {
							className: Je.a.headerButtonsContainer
						}, !Q && _ && v && l !== ge.Ue.NewModule && i.a.createElement(a.a, {
							className: Je.a.ModToolsLink,
							to: v.posts ? `${_.url}about/modqueue` : `${_.url}about/`,
							onClick: this.onClickModTools
						}, i.a.createElement(Fe.a, {
							className: Je.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), u && _ && i.a.createElement(z.b, {
							className: Je.a.overflowButton,
							dropdownId: Gt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !_.isQuarantined && i.a.createElement(_e.b, {
							className: Je.a.dropdownRow,
							displayText: s.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), i.a.createElement(_e.b, {
							className: Je.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? s.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : s.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}), i.a.createElement(Vt.a, {
							contextType: Wt.a.SUBREDDIT,
							contextData: _
						}), v && i.a.createElement(Vt.a, {
							contextType: Wt.a.SUBREDDIT,
							contextData: _,
							moderator: !0
						}), o && b && i.a.createElement(_e.b, {
							className: Je.a.muteDropdownRow,
							displayText: s.fbt._("Unmute r/{subreddit name}", [s.fbt._param("subreddit name", _.name)], {
								hk: "3i9uGt"
							}),
							onClick: () => {
								this.props.sendEvent(Object(Ne.b)({
									subredditId: K
								})), S(K, _.name)
							}
						}), o && !b && i.a.createElement(_e.b, {
							className: Je.a.muteDropdownRow,
							displayText: s.fbt._("Mute r/{subreddit name}", [s.fbt._param("subreddit name", _.name)], {
								hk: "18zbR0"
							}),
							onClick: () => {
								this.setState({
									showCommunityMutingModal: !0
								})
							}
						}))),
						redditStyle: F || x,
						title: Q ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: F ? void 0 : Je.a.subredditTitle
					}, Q && i.a.createElement(Xe, {
						bannerBackgroundImage: M
					}), F || x || r ? F ? ft({
						titleText: W,
						snooBackground: U
					}) : i.a.createElement(Dt, {
						isTargetBlank: x,
						linkUrl: F ? void 0 : G,
						subredditIcon: j,
						canEditIcon: se,
						subreddit: _,
						titleText: W,
						onOpenFilePicker: this.openIconFilePicker,
						isInNCPV3Experiment: l,
						shouldBlurSubredditIcon: f
					}) : null, re, ae, !!oe && !!k && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Je.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Je.a.communityCoinCount,
						"data-testid": "community-coin-count"
					}, i.a.createElement(Pe.a, {
						className: Je.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", k.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: ee,
						onMouseLeave: () => T(ee),
						onMouseEnter: () => T(ee)
					}, i.a.createElement(X.a, {
						name: "help",
						isFilled: !0,
						className: Je.a.helpIcon
					})), i.a.createElement(L.c, {
						tooltipId: ee
					}, i.a.createElement("p", {
						className: Je.a.coinsTooltipContent
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), (l ? se && q > 100 : se) && i.a.createElement(H, {
						context: Te.a.idCard,
						subredditId: K
					}), !F && te && i.a.createElement(St, {
						subreddit: _,
						subscribersCount: q,
						currentlyViewingCount: B
					}), this.renderButtons(), !F && u && i.a.createElement(i.a.Fragment, null, i.a.createElement(it, {
						isOverlay: g,
						isSubmissionPage: x,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), se && i.a.createElement(Ee.a, {
						key: "icon-file-picker",
						className: Je.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !F && u && this.props.adminCommunityTopicsEnabled && i.a.createElement(O, {
						key: "admin-community-topics",
						subredditId: K
					})), this.state.showCommunityMutingModal && i.a.createElement(C.a, {
						subredditName: _.name,
						toggleModal: () => this.setState({
							showCommunityMutingModal: !1
						}),
						onConfirm: () => {
							this.props.sendEvent(Object(Ne.a)({
								subredditId: K
							})), N(K, _.name), this.setState({
								showCommunityMutingModal: !1
							})
						}
					}))
				}
			}
			t.default = Object(P.c)(Qt(Object(b.a)(Xt)))
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
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "_2cHgYGbfV9EZMSThqLt2tx",
				small: "_3Q7WCNdCi77r0_CKPoDSFY",
				large: "_2wgLWvNKnhoJX3DUVT_3F-"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				o = n.n(i);
			t.a = () => r.a.createElement("div", null, r.a.createElement("div", {
				className: o.a.small
			}), r.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const c = e => e.preventDefault();
			t.a = Object(i.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return r.a.createElement(o.e, {
					style: e.style
				}, r.a.createElement(o.i, null, r.a.createElement(d.a, null, r.a.createElement(o.q, null, e.headerText), !e.hideCancel && r.a.createElement(a.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, r.a.createElement(o.b, null)))), r.a.createElement(o.l, null, e.modalBody), (t || n) && r.a.createElement(o.g, null, t && r.a.createElement(o.a, {
					"data-redditstyle": !0,
					onMouseDown: c,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && r.a.createElement(o.u, {
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
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				y = Object(u.a)(v),
				C = c.a.button("MenuButton", x.a),
				_ = c.a.wrapped(p.b, "DropdownRow", x.a),
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
			t.b = O(e => i.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
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
			}), i.a.createElement(y, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
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
				return y
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(r);
			const o = s.a.section("FormPage", i.a),
				a = s.a.h1("HomePageTitle", i.a),
				d = s.a.button("HomePageBreadcrumb", i.a),
				c = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				u = s.a.div("FormPageSection", i.a),
				m = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				b = s.a.div("FormElement", i.a),
				h = s.a.div("FormGroupDescription", i.a),
				f = s.a.div("FormItem", i.a),
				g = s.a.h3("FormElementTitle", i.a),
				x = s.a.div("FormElementDescription", i.a),
				v = s.a.div("FormElementError", i.a),
				y = s.a.div("FormElementSubGroup", i.a),
				C = s.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, o = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? o.push(v.a.emptyEditableIconInTopBar) : o.push(v.a.editableIcon, v.a.emptyEditableIcon), i.a.createElement("span", y({}, r, {
						className: Object(d.a)(...o)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				_ = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: v.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
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
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(_, y({
						alt: s.fbt._("Subreddit icon", null, {
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
					}, i.a.createElement(C, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(C, y({
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
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(O))
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
					return i.a.createElement(c.e, null, i.a.createElement(c.i, null, i.a.createElement(u.a, null, i.a.createElement(c.q, null, s.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(c.b, null)))), i.a.createElement(c.l, null, i.a.createElement(c.p, null, s.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(c.g, null, i.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, s.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(c.r, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, s.fbt._("Save", null, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return i.a.createElement(o.t, u({}, r, {
						priority: m(o.c.Primary, t, n),
						className: Object(l.a)(r.className, c.a.BaseButton),
						size: s ? o.d.S : o.d.M
					}))
				},
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: s,
						small: r,
						...a
					} = e;
					return i.a.createElement(o.t, u({}, a, {
						priority: m(o.c.Secondary, n, s),
						className: Object(l.a)(a.className, c.a.BaseButton),
						size: r ? o.d.S : o.d.M,
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
						priority: s,
						small: r = !1,
						isFullWidth: o = !1,
						style: d
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
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
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(i.a))
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/constants/imagePaths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/config.ts");
			const r = Array.from({
					length: 20
				}).map((e, t) => `${s.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				i = Array.from({
					length: 8
				}).map((e, t) => `${s.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = n("./src/reddit/controls/IconTooltip/index.m.less"),
				d = n.n(a);
			const c = Object(i.a)(o.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			class m extends r.a.Component {
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
					return r.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, r.a.createElement(c, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class i extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, i = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = n.n(a);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || o.d.XS;
				return r.a.createElement("button", {
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
				}, r.a.createElement("div", {
					className: d.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				i = new Set([s.g.Private, s.g.User]),
				o = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !i.has(e.type));
			t.a = o
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/reddit/constants/imagePaths.ts");
			const a = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return a;
				const s = n ? o.a : o.b,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(r + t) % i.a.length],
					image: s[(r + t) % s.length]
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
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const a = e => {
					Object(o.a)({
						...r.q(e),
						action: s.c.CLICK,
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
						...r.q(e),
						action: s.c.CLICK,
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
					action: s.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.nb(t)
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
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const d = e => ({
					profile: a.V(e),
					screen: a.eb(e),
					subreddit: a.nb(e)
				}),
				c = (e, t, n) => s => ({
					source: Object(o.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...d(s),
					post: a.M(s, e)
				}),
				l = (e, t, n, s) => r => {
					const o = n ? a.j({
							state: r,
							commentId: n
						}) : null,
						{
							sortToUse: d
						} = Object(i.a)(r, e);
					return {
						...c(e, t, s)(r),
						comment: o,
						listing: {
							sort: d
						}
					}
				},
				u = (e, t) => n => {
					const s = a.m(n);
					return s ? c(s.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...d(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...c(e, t)(n),
					...a.q(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...d(t),
					post: a.m(t),
					userSubreddit: a.wb(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
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
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.eb(e),
					subreddit: s.nb(e),
					profile: s.V(e),
					userSubreddit: s.wb(e)
				}),
				i = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...r(t)
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
						...r(e),
						actionInfo: {
							...s.d(e),
							paneName: o
						}
					})
				},
				a = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...r(e)
				}),
				d = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...r(e)
				}),
				c = (e, t) => n => ({
					...r(n),
					source: "modmanagement",
					action: "click",
					noun: "permission",
					setting: {
						value: e,
						values: t
					}
				}),
				l = (e, t, n) => s => ({
					...r(s),
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
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...s.q(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: s.nb(t)
				}),
				i = e => t => ({
					...s.q(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: s.nb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...s.q(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.nb(t)
				}),
				i = e => t => ({
					...s.q(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.nb(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/models/Event.ts");
			const i = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Mute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
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
						source: r.e.SubredditMuting,
						action: r.c.Unmute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
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
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.q(e)
				}),
				o = e => t => {
					const n = r.nb(t),
						{
							userFlair: i,
							achievementFlair: o
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.q(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(s.g)(i) : void 0,
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
					...r.q(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.nb(t),
					...r.q(t)
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(d);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(d.a.ModSettings, Object(o.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), r.a.createElement("path", {
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
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.I
				}) === s.Rd
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
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Rb,
					experimentEligibilitySelector: o.e
				}), e => e === r.V.Enabled),
				d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Sb,
					experimentEligibilitySelector: o.e
				}), e => e === r.W.Enabled),
				c = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Tb,
					experimentEligibilitySelector: o.e
				}), e => e === r.X.Enabled),
				l = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: o.e
				}), e => e === r.Y.Enabled),
				u = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === r.ab.Enabled),
				m = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: o.e
				}), e => e === r.Z.Enabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.4293b65b9fe6f0c5bdf6.js.map