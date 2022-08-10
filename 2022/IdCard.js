// https://www.redditstatic.com/desktop2x/IdCard.69488194fa0d08a95e45.js
// Retrieved at 8/10/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
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
							c = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function d(t) {
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
						if (r !== t ? "hidden" === n.overflowY && (d("scroll"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== r) {
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

				function c(e) {
					var t = s.get(e);
					t && t.update()
				}
				var d = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, d.update = function(e) {
					return e
				}) : ((d = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return o(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
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
					var c = document.body;
					c.appendChild(o), n = o.offsetHeight, c.removeChild(o)
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
				c = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = u(n("./node_modules/autosize/dist/autosize.js")),
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
							c = e.saveDOMNodeRef,
							d = n && a ? a * n : null;
						return i({}, o, {
							saveDOMNodeRef: c,
							style: d ? i({}, s, {
								maxHeight: d
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
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
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
				const c = new Date(e * s.Sb);
				return i.a ? new Intl.DateTimeFormat(a, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
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
				return v
			})), n.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return E
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return j
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return T
			})), n.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return k
			})), n.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
			})), n.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return S
			})), n.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return w
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return N
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return F
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return P
			})), n.d(t, "setSubredditUserSupporterFlair", (function() {
				return B
			})), n.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, n, r) => {
				const s = await Object(o.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: r
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = n("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = n("./src/reddit/actions/gold/powerups.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				g = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/economics/powerups/constants.ts"),
				y = n("./src/lib/initializeClient/installReducer.ts"),
				C = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(y.a)({
				features: {
					powerups: C.a
				}
			});
			const v = Object(s.a)(_.d),
				E = Object(s.a)(_.i),
				O = Object(s.a)(_.f),
				j = Object(s.a)(_.g),
				T = Object(s.a)(_.e),
				k = Object(s.a)(_.h),
				I = (e, t) => async (n, r, s) => {
					let {
						gqlContext: c
					} = s;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, n) => {
								const r = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: n,
										includeSupporterInfo: !0
									}
								});
								if (!r.ok) throw new Error("Unable to fetch user achievements");
								return r.body.data
							})(c(), e, d),
							{
								subredditInfoById: r,
								redditorsInfoByIds: s
							} = t;
						await n(v(r)), s && await n(E(s))
					} catch (l) {
						i.c.captureException(l)
					}
				}, S = (e, t) => async (n, r) => {
					if (!e) return;
					const s = r(),
						i = Object(x.k)(s);
					if (!i || !Object(f.m)(s, {
							subredditId: e
						})) return;
					const o = !!Object(g.f)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(I(e, [i.id]))
				}, w = e => async (t, n) => !!e && (Object(h.g)(n()) ? (await t(Object(l.c)(e)), !!Object(g.d)(n(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.f)(n(), {
					subredditId: e
				}))), N = e => async (t, n) => {
					var r;
					const s = n(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(b.d)(s, {
							commentIds: i
						}),
						a = null === (r = o.find(e => e && e.subredditId)) || void 0 === r ? void 0 : r.subredditId;
					if (!(await t(w(a)))) return;
					const c = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(I(a, Array.from(c)))
				}, F = (e, t) => async (n, r) => {
					if (!t) return;
					if (!(await n(w(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(I(e, Array.from(s)))
				}, P = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(x.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(g.i)(s, {
							subredditId: e,
							userId: o
						});
					n(D({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, B = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(x.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(g.h)(s, {
							subredditId: e,
							userId: o
						});
					n(D({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, D = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const a = n(),
						c = Object(x.k)(a);
					if (!c) return;
					const l = c.id;
					t(O(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), _ = Object(g.e)(a, {
						subredditId: u,
						userId: l
					});
					try {
						await d(o(), u, f, _), t(j(e))
					} catch (y) {
						t(T(e)), i.c.captureException(y), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, R = (e, t) => async (n, s, o) => {
					let {
						gqlContext: a
					} = o;
					const c = s(),
						l = Object(x.k)(c);
					if (!l) return;
					const u = l.id,
						b = {
							subredditId: e,
							userId: u
						},
						h = [Object(g.h)(c, b), Object(g.i)(c, b)].filter(Boolean);
					n(k({
						...b,
						isHidden: t
					}));
					try {
						await d(a(), e, h, t)
					} catch (f) {
						n(k({
							...b,
							isHidden: !t
						})), i.c.captureException(f), n(Object(m.f)({
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
				return c
			})), n.d(t, "c", (function() {
				return d
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
				c = Object(r.a)(o.b),
				d = Object(r.a)(o.c),
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
				return c
			})), n.d(t, "g", (function() {
				return d
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
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(o.x),
				f = Object(s.a)(o.y),
				g = Object(s.a)(o.w),
				x = (e, t, n) => async (r, s, i) => {
					const o = Object(p.A)(s(), {
						subredditName: e
					});
					if (o) return y(o.id, t, n)(r, s, i)
				}, _ = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (s, o, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const y = o();
					try {
						await Object(i.g)("communityIcon", x, e)(s, o, p)
					} catch (v) {
						return Object(b.a)(Object(d.c)(y, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: _()
						})), void s(g())
					}
					const C = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!C) return Object(b.a)(Object(d.c)(y, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: _()
					})), void s(g());
					await Object(i.k)(e, {
						communityIcon: C
					}, c.b.idCard, n)(s, o, p), s(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(f())
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
				return c
			})), n.d(t, "f", (function() {
				return d
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
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "b", (function() {
				return H
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/posts.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				g = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/GqlTopLevelField.ts"),
				y = n("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== y.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(g.a)(a.node.profile);
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
					if (a.node.__typename !== _.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
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
			var v = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				O = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/subscriptions.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const I = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(o.a)(l.c),
				w = Object(o.a)(l.b),
				N = Object(o.a)(l.a),
				F = Object(o.a)(l.h),
				P = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(w());
					const i = await Object(f.a)(r());
					if (i.ok) {
						const t = C(i.body.data);
						e(S(t))
					} else e(N({
						error: i.error
					}))
				}),
				B = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, n) => async (o, l, p) => {
					let {
						apiContext: b
					} = p, h = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(j.G)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(O.n)(l(), e.name),
						name: `${s.kc}${e.name}`,
						type: e.type
					});
					if (!Object(k.Q)(l())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.openRegisterModal)());
					const g = Object(k.k)(l());
					if (g) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !B(g, e)), (e = e.filter(e => !B(g, e))).length !== n || h.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, v.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					o(F({
						identifiers: h,
						nameIdentifiers: e,
						profileModels: l().profiles.models,
						subredditModels: l().subreddits.models,
						subscriptionsCount: Object(T.b)(l()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const x = await Object(f.c)(b(), {
						subredditNames: h.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (x.ok) {
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
							c = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							d = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? c : d
						}))
					} else {
						o(F({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(T.b)(l()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(s, v.b.Error)))
					}
					return t && Object(E.a)(l()) && (1 === e.length && "profile" === e[0].type ? o(Object(a.c)("user_follow")) : o(Object(a.c)("join"))), x.ok
				}, R = Object(o.a)(l.f), M = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n(),
						o = Object(j.N)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = i.subscriptions.favoriteSubredditOrder || [],
						d = i.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						p = d.indexOf(e.id),
						b = -1 === l && -1 === p,
						h = i.subreddits.models,
						g = i.profiles.models,
						x = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(j.hb)(n(), {
							identifier: x
						});
					(_() || (await t(D([x], !0)), _())) && (t(R({
						makeFavorite: b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), (await Object(f.b)(s(), a, b)).ok || (t(R({
						makeFavorite: !b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), t(Object(u.f)({
						text: I(),
						kind: v.b.Error
					}))))
				}, L = Object(o.a)(l.d), A = e => async (t, n, r) => {
					let {
						apiContext: i
					} = r;
					const o = n().multireddits.models,
						a = () => {
							t(Object(u.f)({
								text: I(),
								kind: v.b.Error
							}))
						},
						c = o[e];
					if (!c) return void a();
					const d = !c.isFavorited;
					t(L({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, d)).ok || (t(L({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, U = Object(o.a)(l.e), H = e => async (t, n, i) => {
					let {
						apiContext: o
					} = i;
					const a = n(),
						c = a.multireddits.models;
					if (!Object(k.Q)(a)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: v.b.Error
							}))
						},
						l = c[e];
					if (!l) return void d();
					const m = !l.isFollowed;
					t(U({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(U({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(m))
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
				return T
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "a", (function() {
				return P
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SubredditPremiumBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
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
				_ = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				y = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E,
				j = 24;
			class T extends s.a.Component {
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
						className: Object(c.a)(y.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${v}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || j;
					return s.a.createElement(r.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(f.a, {
						className: y.a.addCustom
					})), s.a.createElement(x, {
						className: y.a.badgeHovercard,
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
							className: Object(c.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: y.a.image,
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
							className: y.a.badgeHovercard,
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
			const k = [],
				I = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n,
							userId: r
						} = t;
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[n]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n
						} = t;
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[n]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: n,
					...r
				} = e, i = t.map(e => n[e]).filter(Boolean);
				return s.a.createElement(T, C({
					badges: i
				}, r))
			}
			const F = Object(i.b)(I, w)(N),
				P = Object(i.b)(S, w)(N)
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
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(i.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = 500,
				i = 100,
				o = 5e3,
				a = 0,
				c = 1440,
				d = 36600,
				l = 1e9,
				u = {
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
				m = [r.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), r.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), r.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
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
				b = [r.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), r.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), r.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					mods: r.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: r.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				f = {
					low: r.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: r.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: r.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				g = {
					low: r.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: r.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: r.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				x = {
					nullValue: r.fbt._("none (recommended)", null, {
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
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/IconTooltip/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Flair/index.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/CommunityType/index.m.less"),
				g = n.n(f);
			const x = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", g.a),
				_ = Object(c.c)({
					restrictions: h.p
				}),
				y = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: g.a.nsfwText
				}, r.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				C = () => i.a.createElement(x, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				v = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(y, null)), i.a.createElement(x, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(C, null)),
				E = Object(o.b)(_);
			t.a = E(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: s = b.e.Post,
					textClassName: o,
					subreddit: a
				} = e;
				switch (a.type) {
					case p.f.Restricted:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(g.a.restrictedIcon, n)
							}),
							text: r.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: o,
							description: Object(b.g)(s),
							subreddit: a
						});
					case p.f.Private:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(g.a.privateIcon, n)
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
					case p.f.EmployeesOnly:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(d.a)(g.a.employeesIcon, n)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(x))
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
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				y = x.a.wrapped(l.c, "StyledTooltip", g.a),
				C = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(o.b)(C, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
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
				c = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				d = n("./src/reddit/components/Flair/index.tsx"),
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
				const x = Object(o.e)(e => Object(m.k)(e));
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
				}, `${h||"username"}`), i.a.createElement(c.a, {
					className: b.a.achievementFlair,
					subredditId: n,
					userId: s
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(d.b, {
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
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				o = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				return c.a.createElement("div", f({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", h.a);
			var x = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = n("./src/reddit/icons/svgs/Close/index.tsx"),
				j = n("./src/reddit/models/Flair/index.ts"),
				T = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/reddit/components/Flair/index.m.less"),
				I = n.n(k);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(_.a)(x.b),
				N = p.a.div("FlairWrapper", I.a),
				F = p.a.wrapped(d.a, "CloseButton", I.a),
				P = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return c.a.createElement(g, S({
						style: {
							...B(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", I.a),
				B = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[C.p]: r,
						[C.s]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(v.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(v.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class M extends c.a.Component {
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
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(T.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(O.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(T.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
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
			const L = Object(m.a)(M),
				A = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === j.c.Emoji) {
							const i = r;
							return t += i.a, n = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: s,
								title: i.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const i = c.a.createElement(N, {
						className: Object(u.a)(e.className, {
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(T.a)(e).flair,
							color: `${U(e)}`
						}
					}, r, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(O.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(T.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
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
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(T.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(T.a)(e).post, y.a.black, y.a.white) : e.textColor === j.e.Dark ? y.a.black : y.a.white,
				H = p.a.wrapped(L, "TextFlair", I.a),
				q = p.a.wrapped(A, "RichTextFlair", I.a),
				z = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.i)(.1, Object(T.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				V = p.a.wrapped(e => {
					const t = z(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", I.a);

			function W(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: i,
					isSelected: o,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[I.a.flairVariant]: i,
					[I.a.small]: i && !e.large,
					[I.a.large]: i && e.large
				}, t);
				switch (s.type) {
					case j.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(q, {
							backgroundColor: s.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: h
						});
					case j.f.Text:
						return n || !s.text ? null : c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: h
						});
					case j.f.Meta:
						return c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: h
						});
					case j.f.Nsfw:
					case j.f.Spoiler:
						return c.a.createElement(V, {
							className: t,
							text: s.text,
							type: s.type
						});
					case j.f.Quarantined:
						return null;
					case j.f.Oc:
						return c.a.createElement(H, {
							backgroundColor: y.a.alienblue,
							text: s.text,
							textColor: j.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const a = Object(o.a)(),
						c = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : a
						};
					return s.a.createElement(s.a.Fragment, null, Object(i.d)(t, c))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const i = Object(o.a)(),
						a = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : i
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(t, a))
				},
				l = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = n("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(o.a)(),
						i = null != n ? n : r;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const n = e * u.Sb;
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
					}(t, i))
				},
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/eventTools/index.ts");

			function h(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const s = Object(b.e)(e, t),
					i = new Date(e * u.Sb);
				let o;
				if (s === b.a.Live || n) return p.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === b.a.Future ? o = Object(b.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? h(i, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, r) : s === b.a.Past && (o = Object(b.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : h(i, r)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,r)}`
			}
			var g = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: i
				} = e;
				const a = Object(o.a)(),
					c = null != i ? i : a;
				return s.a.createElement(s.a.Fragment, null, f(t, n, r, c))
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
				return c
			})), n.d(t, "e", (function() {
				return d
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
			const c = e => e && e.toLowerCase() === o.b.Popular,
				d = e => e && e.toLowerCase() === o.b.All,
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
					let x, _;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = o.c[o.b.Popular]) : p && (n = h && h.description, i = u(""), a = b.displayText, m = b.url, _ = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
						snooBackground: i,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: _,
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
				cakeDayBlock: "_1vPW2g721nsu89X6ojahiX"
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
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./src/lib/loadableAction/index.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/subscription/index.ts"),
				y = n("./src/higherOrderComponents/makeAsync.tsx"),
				C = n("./src/lib/loadWithRetries/index.ts"),
				v = Object(y.a)({
					getComponent: () => Object(C.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				O = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				j = n("./src/reddit/actions/login.ts"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				I = n("./src/reddit/helpers/trackers/postComposer.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(m.c)({
				isLoggedIn: S.Q
			});
			var P = Object(o.b)(F, e => ({
				openLoginModal: () => {
					e(Object(x.k)({
						actionSource: x.a.Post
					})), e(Object(j.openRegisterModal)())
				}
			}))(Object(w.c)(e => {
				let {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: s,
					openLoginModal: o,
					sendEvent: a,
					subreddit: c,
					...d
				} = e;
				const l = `${Object(k.a)(c)||"/"}submit`;
				return i.a.createElement(T.n, N({}, d, {
					onClick: e => {
						a(Object(I.x)({
							actionInfoType: "id_card",
							subredditId: null == c ? void 0 : c.id
						})), n || (o(), e.preventDefault())
					},
					to: l
				}), t ? r.fbt._("Draft Post", null, {
					hk: "17BbM6"
				}) : r.fbt._("Create Post", null, {
					hk: "4k3RsQ"
				}))
			}));
			const B = Object(y.a)({
				getComponent: () => Object(C.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var D = n("./node_modules/react-autosize-textarea/lib/index.js"),
				R = n.n(D),
				M = n("./src/reddit/actions/subredditSettings.ts"),
				L = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				A = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				U = n("./src/lib/fastdom/index.ts"),
				H = n("./src/lib/lessComponent.tsx"),
				q = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				z = n.n(q);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = H.a.div("DescriptionContainer", z.a);
			class G extends i.a.Component {
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
					this.state.shouldTruncateDescription && U.a.read(() => {
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
						shouldTruncateDescription: s
					} = this.state, o = n ? V._("Welcome to {subredditName}", [V._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return i.a.createElement(W, {
						className: Object(p.a)(z.a.descriptionContainer, s && z.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, i.a.createElement("div", {
						className: z.a.description,
						ref: this.setTextRef
					}, t || o, e), s && r && i.a.createElement("div", {
						className: z.a.showMore
					}, "...", i.a.createElement(T.r, {
						className: z.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, V._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			var K = G,
				Q = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				J = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				X = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				Y = n("./src/reddit/icons/fonts/index.tsx"),
				Z = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/selectors/subreddit.ts");
			const ee = 6,
				te = `${Q.a}_description`,
				ne = Object(m.c)({
					apiPending: $.W,
					unsavedChangesModalIsOpen: Object(Z.b)(te)
				});
			class re extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(X.a)
						}
					}, this.focusTextArea = () => {
						this.textAreaRef && this.textAreaRef.focus && this.textAreaRef.focus({
							preventScroll: !0
						})
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
						this.props.sendEvent(Object(X.d)(e, t))
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
					const e = this.props.apiPending ? i.a.createElement(J.a, {
						className: z.a.loadingIcon,
						sizePx: ee
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(K, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(Y.a, {
						name: "edit",
						className: z.a.pencil
					}), e)) : i.a.createElement("div", {
						className: z.a.emptyDescription
					}, r.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(R.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: r.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(p.a)(z.a.editableDescription, z.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: A.d,
						value: this.state.description
					}), i.a.createElement("div", {
						className: z.a.editableDescriptionControlRow
					}, i.a.createElement(L.a, {
						className: z.a.characterCountdown,
						maxChars: A.d,
						text: this.state.description
					}), i.a.createElement("span", {
						className: z.a.cancel,
						onClick: this.onCancel
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: z.a.save,
						onClick: this.onSave
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [z.a.defaultEditableDescriptionContainer];
					const e = [z.a.editableDescriptionContainer];
					return this.state.editing && e.push(z.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(p.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(Q.b, {
						withOverlay: !0,
						modalId: te,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			var se = Object(o.b)(ne, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(M.j)(n.id, t, {}, !0)),
						openUnsavedChangesModal: () => {
							e(Object(x.h)(te))
						}
					}
				})(Object(w.c)(re)),
				ie = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				oe = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				ae = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				ce = n.n(ae);
			var de = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: ce.a.container
					}, i.a.createElement(oe.a, null)),
					getComponent: () => Object(C.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				le = n("./src/reddit/components/OverflowMenu/index.tsx"),
				ue = n("./src/reddit/actions/authorFlair.ts"),
				me = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				pe = n("./src/reddit/actions/gold/powerups.ts"),
				be = n("./src/reddit/helpers/trackers/userFlair.ts"),
				he = n("./src/reddit/hooks/useTracking.ts"),
				fe = n("./src/reddit/models/User/index.ts"),
				ge = n("./src/reddit/selectors/gold/powerups/index.ts"),
				xe = n("./src/reddit/selectors/userFlair.ts"),
				_e = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				ye = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				Ce = n.n(ye);
			const {
				fbt: ve
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = H.a.div("FlairSettingsContainer", Ce.a), Oe = H.a.div("FlairPreviewWrapper", Ce.a), je = H.a.div("PreviewTitle", Ce.a), Te = H.a.wrapped(T.r, "TertiaryButton", Ce.a), ke = H.a.wrapped(Te, "IconButton", Ce.a), Ie = Object(m.c)({
				currentUser: S.k,
				isAchievementFlairModalEnabled: (e, t) => Object(ge.m)(e, {
					subredditId: t.subredditId
				}),
				userFlairData: xe.d,
				userHasBadge: (e, t) => {
					const n = e.user.account;
					if (n) {
						return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
					}
					return !1
				}
			}), Se = Object(o.b)(Ie), we = e => i.a.createElement(ke, {
				onClick: e.onClick
			}, i.a.createElement(Y.a, {
				name: "edit"
			})), Ne = e => {
				let {
					subredditId: t,
					userId: n,
					username: r,
					userFlairData: s,
					userHasBadge: o
				} = e;
				return i.a.createElement(Oe, null, i.a.createElement(_e.a, {
					subredditId: t,
					userId: n,
					username: r,
					flairData: s,
					userHasBadge: o,
					usernameClassName: Ce.a.previewUsername
				}))
			};
			var Fe = Se(e => {
					let {
						currentUser: t,
						subredditId: n,
						userFlairData: r,
						userHasBadge: a,
						isAchievementFlairModalEnabled: c
					} = e;
					const d = Object(o.d)(),
						l = Object(he.a)();
					Object(s.useEffect)(() => {
						c && d(Object(me.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(n))
					}, [d, n, c]);
					return t && (r || c) ? i.a.createElement(Ee, null, i.a.createElement(je, null, ve._("user flair preview", null, {
						hk: "3aBytK"
					}), i.a.createElement(we, {
						onClick: () => {
							if (c) d(Object(pe.d)());
							else {
								(e => d(Object(ue.b)({
									username: e,
									subredditId: n
								})))(t ? Object(fe.e)(t) : null)
							}
							l(Object(be.c)())
						}
					})), i.a.createElement(Ne, {
						subredditId: n,
						userId: t.id,
						username: Object(fe.e)(t),
						userFlairData: r,
						userHasBadge: a
					})) : null
				}),
				Pe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Be = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				De = n("./src/reddit/constants/componentSizes.ts"),
				Re = n("./src/reddit/constants/experiments.ts"),
				Me = n("./src/reddit/constants/listings.ts"),
				Le = n("./src/reddit/constants/modals.ts"),
				Ae = n("./src/reddit/constants/page.ts"),
				Ue = n("./src/reddit/constants/posts.ts"),
				He = n("./src/reddit/controls/Dropdown/Row.tsx"),
				qe = n("./src/reddit/controls/ImageInput/index.tsx"),
				ze = n("./src/reddit/featureFlags/index.ts"),
				Ve = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				We = n("./src/reddit/helpers/localStorage/index.ts"),
				Ge = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Ke = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Qe = n("./src/reddit/helpers/trackers/modHub.ts"),
				Je = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Xe = n("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				Ye = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Ze = n("./src/reddit/selectors/category.ts"),
				$e = n("./src/reddit/helpers/chooseVariant/index.ts"),
				et = n("./src/reddit/selectors/platform.ts");
			const tt = e => Object(et.l)(e) || !1,
				nt = e => {
					return Object($e.c)(e, {
						experimentEligibilitySelector: tt,
						experimentName: Re.T
					}) === Re.db.Enabled
				};
			var rt = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				st = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				it = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				at = n("./src/reddit/selectors/structuredStyles.ts"),
				ct = n("./src/reddit/selectors/subscriptions.ts"),
				dt = n("./src/reddit/selectors/tooltip.ts"),
				lt = n("./src/reddit/selectors/widgets.ts"),
				ut = n("./src/reddit/components/IdCard/index.m.less"),
				mt = n.n(ut);
			const pt = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: mt.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			});
			var bt = n("./src/reddit/actions/preferences.ts"),
				ht = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ft = n("./src/reddit/helpers/trackers/idCard.ts"),
				gt = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				xt = n.n(gt);
			const _t = H.a.wrapped(T.t, "TertiaryButton", xt.a),
				yt = Object(m.c)({
					stylesDisabledForSubreddit: S.qb,
					stylesDisabledGlobally: S.rb
				});
			class Ct extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(ft.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						className: xt.a.content
					}, i.a.createElement("div", {
						className: Object(p.a)(xt.a.stylesToggle, {
							[xt.a.disabled]: n
						}),
						title: n ? r.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: xt.a.stylesToggleLabel
					}, i.a.createElement(Y.a, {
						name: t ? "hide" : "show",
						className: xt.a.visibilityIcon
					}), r.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), i.a.createElement(ht.a, {
						className: xt.a.ToggleSwitch,
						disabled: n,
						on: !t,
						onToggle: this.onToggleStylesSwitch
					}))) : null;
					return i.a.createElement("div", {
						className: xt.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(_t, {
						kind: T.b.Button,
						priority: T.c.Plain,
						isFullWidth: !0,
						className: Object(p.a)(xt.a.expandButton, {
							[xt.a.redditStyle]: e
						}),
						onClick: this.onExpandButtonClick
					}, r.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(Y.a, {
						name: s ? "caret_up" : "caret_down"
					})), o)
				}
			}
			var vt = Object(o.b)(yt, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(bt.K)(t, n))
					}
				}))(Ct),
				Et = n("./src/reddit/components/CommunityType/index.tsx"),
				Ot = n("./src/reddit/components/IdCard/CommunityTypeBlock/index.m.less"),
				jt = n.n(Ot);
			const Tt = e => {
				let {
					subreddit: t
				} = e;
				return i.a.createElement("div", {
					className: jt.a.CommunityTypeContainer
				}, i.a.createElement(Et.a, {
					className: jt.a.communityType,
					iconClassName: jt.a.communityTypeIcon,
					subreddit: t,
					textClassName: jt.a.communityTypeText
				}))
			};
			var kt = n("./src/reddit/components/IdCard/helpers.ts"),
				It = n("./src/reddit/components/IdCard/placeholder.m.less"),
				St = n.n(It);
			var wt = i.a.memo(e => i.a.createElement("div", {
				className: Object(p.a)(St.a.container)
			}, i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.banner)
			}), i.a.createElement("div", {
				className: St.a.title
			}, i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.icon)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.name)
			})), i.a.createElement("div", {
				className: St.a.counts
			}, i.a.createElement("div", {
				className: St.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.text)
			})), i.a.createElement("div", {
				className: St.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.text)
			}))), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.desc, St.a.one)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.desc, St.a.two)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.desc, St.a.three)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.desc, St.a.four)
			}), i.a.createElement("div", {
				className: Object(p.a)(St.a.shimmer, St.a.subscribe)
			})));
			const Nt = e => {
				let {
					snooBackground: t
				} = e;
				return i.a.createElement("div", {
					className: mt.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: `${t.width}px ${t.height}px`,
						height: t.height,
						width: t.width
					}
				})
			};
			var Ft = e => {
					let {
						titleText: t,
						snooBackground: n
					} = e;
					return i.a.createElement("div", {
						className: Object(p.a)(mt.a.Title, mt.a.TitleShifted)
					}, i.a.createElement(Nt, {
						snooBackground: n
					}), i.a.createElement("div", {
						className: mt.a.TitleTextShiftedContainer
					}, i.a.createElement("span", {
						className: mt.a.TitleText
					}, t)))
				},
				Pt = n("./src/lib/prettyPrintNumber/index.ts"),
				Bt = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				Dt = n("./src/reddit/components/IdCard/StatsBlock/index.m.less"),
				Rt = n.n(Dt);
			const Mt = e => {
					let {
						subreddit: t,
						subscribersCount: n,
						currentlyViewingCount: s
					} = e;
					const o = Object(Bt.a)(t.name);
					return i.a.createElement("span", {
						className: Rt.a.compactStats
					}, o.map((e, t) => {
						let {
							color: n,
							image: s
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? r.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: Rt.a.memberIcon,
							key: s,
							src: s,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: Rt.a.metaText
					}, r.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [r.fbt._plural(n, "number of members", Object(Pt.b)(n))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: Rt.a.metaText
					}, r.fbt._("{viewingCount} online", [r.fbt._param("viewingCount", Object(Pt.b)(s))], {
						hk: "cxviW"
					})))
				},
				Lt = e => {
					let {
						subscribersCount: t,
						subscribersText: n,
						subscribersTooltipId: r,
						currentlyViewingCount: s,
						currentlyViewingText: o,
						currentlyViewingTooltipId: a,
						showCommunityDirectoryBacklink: c,
						toggleTooltip: d
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Rt.a.stats
					}, i.a.createElement("div", {
						onMouseEnter: () => d(r),
						onMouseLeave: () => d(r)
					}, i.a.createElement("div", {
						className: Rt.a.count
					}, Object(Pt.b)(t)), i.a.createElement("p", {
						className: c ? Rt.a.metaTextBacklinks : Rt.a.metaText,
						id: r
					}, n), i.a.createElement(ie.c, {
						caretOnTop: !0,
						text: `${Object(Pt.b)(t,{displayFull:!0})} ${n}`,
						tooltipId: r
					})), i.a.createElement("div", {
						onMouseEnter: () => d(a),
						onMouseLeave: () => d(a)
					}, i.a.createElement("div", {
						className: c ? Rt.a.onlineCount : Rt.a.count
					}, Object(Pt.b)(s)), i.a.createElement("p", {
						className: c ? Rt.a.metaTextBacklinks : Rt.a.metaText,
						id: a
					}, o), i.a.createElement(ie.c, {
						caretOnTop: !0,
						text: `${Object(Pt.b)(s,{displayFull:!0})} ${o}`,
						tooltipId: a
					})), i.a.createElement("div", null)))
				};
			var At = n("./node_modules/history/esm/history.js"),
				Ut = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Ht = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				qt = n("./src/reddit/hooks/useClickSourceData.ts");
			const {
				fbt: zt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Vt(e) {
				const t = Object(s.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: n,
						isInNCPV3Experiment: r,
						isTargetBlank: o,
						largeSubredditIcon: c,
						linkUrl: d,
						shouldBlurSubredditIcon: l,
						subredditIcon: u,
						titleText: m,
						primaryColor: b,
						subreddit: h,
						onOpenFilePicker: f
					} = e,
					g = u.url ? zt._("Update icon", null, {
						hk: "GXdPy"
					}) : zt._("Add icon", null, {
						hk: "31odkm"
					}),
					x = Object(qt.a)();
				return i.a.createElement("div", {
					className: Object(p.a)(mt.a.Title, e.className)
				}, n && h && !r ? i.a.createElement(Ht.a, {
					className: c ? mt.a.largeSubredditIcon : mt.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					subreddit: h,
					inTopBar: !1
				}) : i.a.createElement(Ut.b, {
					altText: u.altText,
					className: c ? mt.a.largeSubredditIcon : mt.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					shouldBlurSubredditIcon: l
				}), i.a.createElement("div", {
					className: mt.a.titleTextContainer
				}, d ? i.a.createElement(a.a, {
					className: mt.a.TitleLink,
					key: d,
					to: {
						pathname: Object(At.c)(d).pathname,
						state: x,
						search: Object(At.c)(d).search
					},
					onClick: t,
					target: o ? "_blank" : void 0,
					rel: o ? "noopener noreferrer" : void 0
				}, i.a.createElement("span", {
					className: mt.a.TitleText,
					title: m
				}, m)) : i.a.createElement("span", {
					className: mt.a.TitleText,
					key: m
				}, m), n && h && f && !r && i.a.createElement("div", {
					className: mt.a.editIconText,
					onClick: f
				}, g)))
			}
			var Wt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				Gt = n("./src/reddit/components/HumanDate/index.tsx"),
				Kt = n("./src/reddit/components/IdCard/CakeDayBlock/index.m.less"),
				Qt = n.n(Kt);
			const {
				fbt: Jt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xt = e => {
				let {
					cakeDayCreated: t,
					cakeDayTooltipId: n,
					className: r,
					showCommunityDirectoryBacklink: s,
					toggleTooltip: o
				} = e;
				return i.a.createElement("div", {
					className: Object(p.a)(Qt.a.CakeDayContainer, r),
					onMouseEnter: () => o(n),
					onMouseLeave: () => o(n)
				}, i.a.createElement("div", {
					className: Qt.a.CakeDay,
					id: n
				}, i.a.createElement(Y.a, {
					name: "cake",
					className: Qt.a.cakeIcon
				}), i.a.createElement("span", {
					className: s ? Qt.a.label : ""
				}, Jt._("Created {cakeday}", [Jt._param("cakeday", i.a.createElement(Gt.a, {
					seconds: t,
					showDay: !0,
					shortMonths: !0,
					useUtc: !0
				}))], {
					hk: "8Y46b"
				}))), i.a.createElement(ie.c, {
					caretOnTop: !0,
					tooltipId: n
				}, i.a.createElement(Gt.d, {
					seconds: t
				})))
			}, Yt = "IDCARD_OVERFLOW_DROPDOWN_ID", Zt = Object(o.b)(() => Object(m.c)({
				activeTooltipId: dt.a,
				postCategories: (e, t) => Object(Ze.n)(e, t.postId),
				favoriteSubredditsIds: ct.a,
				idCardWidget: (e, t) => Object(lt.d)(e, {
					subredditName: t.listingName
				}),
				isContributorRequestPending: e => Object($.e)(e, Ye.e.Post),
				isGQLLoggedIn: S.P,
				isLoggedIn: S.Q,
				isNsfwBlurSubreddit: it.e,
				moderatorPermissions: (e, t) => {
					const n = Object($.G)(e, t.listingName);
					if (n) return Object(ot.n)(e, {
						subredditId: n
					})
				},
				shouldObserveSubscribeButton: e => Object(rt.a)(e) || Object(rt.c)(e) || Object(rt.d)(e),
				showContributorRequestFlow: e => Object($.u)(e, Ye.e.Post),
				showCreatePollButton: e => (e => Object($e.c)(e, {
					experimentEligibilitySelector: $e.a,
					experimentName: Re.Y
				}) === Re.gb.Treatment)(e) && !Object(We.g)(),
				shouldShowFlairPreview: (e, t) => {
					let {
						listingName: n
					} = t;
					const r = Object($.G)(e, n);
					return Object(xe.c)(e, {
						subredditId: r
					})
				},
				subreddit: (e, t) => Object($.A)(e, {
					subredditName: t.listingName
				}),
				subredditAboutInfo: (e, t) => Object($.x)(e, {
					subredditName: t.listingName
				}),
				subredditCoins: (e, t) => {
					let {
						listingName: n
					} = t;
					return Object($.D)(e, {
						subredditName: n
					})
				},
				subredditIcon: (e, t) => Object(at.p)(e, {
					subredditName: t.listingName
				}),
				adminCommunityTopicsEnabled: ze.d.adminCommunityTopics,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						listingName: n
					} = t;
					const r = Object($.A)(e, {
						subredditName: n
					});
					return !!r && Object(u.a)(e, {
						subredditId: r.id
					})
				},
				isInNCPV3Experiment: st.a,
				showCommunityDirectoryBacklink: nt
			}), (e, t) => ({
				addToMultiClicked: () => {
					e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(x.h)(Le.a.MULTIREDDIT_ADD_SUBREDDIT))
				},
				dispatchPush: t => e(Object(c.b)(t)),
				toggleFavorite: t => e(Object(_.c)({
					id: t,
					type: Ue.a.SUBREDDIT
				})),
				toggleTooltip: t => e(Object(f.h)({
					tooltipId: t
				})),
				onCommunityIconSelected: (n, r) => {
					e(Object(d.b)(t.listingName, n, r))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				isEligibleForCommunityAwards: Object(Ve.b)(e.subreddit),
				isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
				onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
				onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
			})), $t = .25, en = .001;
			class tn extends i.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.subscribeButtonRef = null, this.setSubscribeButtonRef = e => {
						this.props.shouldObserveSubscribeButton && (this.subscribeButtonObserver || (this.subscribeButtonObserver = new IntersectionObserver(e => {
							e.forEach(e => {
								const {
									intersectionRatio: t
								} = e;
								t >= $t && Object(kt.c)(!0), t <= en && Object(kt.c)(!1)
							})
						}, {
							rootMargin: `${-(De.f+De.m)}px 0px 0px 0px`,
							threshold: [$t, en]
						})), this.subscribeButtonRef && this.subscribeButtonObserver.unobserve(this.subscribeButtonRef), e && (this.subscribeButtonRef = e, this.subscribeButtonObserver.observe(this.subscribeButtonRef)))
					}, this.onClickModTools = () => this.props.sendEvent(Object(Qe.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Ke.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== Ae.c ? t : Me.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(l.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(X.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: r,
							subreddit: s
						} = this.props, o = Object(h.a)(this.getListingNameToUse());
						return !o && r ? i.a.createElement(E.default, {
							eventSource: Ye.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(P, {
							className: mt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: s
						}), !e && !o && n && i.a.createElement(B, {
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
							subredditAboutInfo: c,
							shouldShowFlairPreview: d,
							showCommunityDirectoryBacklink: l
						} = this.props, u = this.getListingNameToUse(), m = Object(h.a)(u), p = n && a && !s, b = e && !m && !p, f = t && !p && !o && !s && !(c && c.userIsBanned), g = t && !o && !s && !a, x = l && (b || f || g || p);
						return i.a.createElement(i.a.Fragment, null, x && i.a.createElement("hr", {
							className: mt.a.HorizontalLine
						}), i.a.createElement("div", {
							className: mt.a.Buttons
						}, b && i.a.createElement("div", {
							ref: this.setSubscribeButtonRef
						}, i.a.createElement(Pe.a, {
							className: mt.a.SubscribeButton,
							getEventFactory: e => Object(Ke.a)(e ? "unsubscribe" : "subscribe"),
							id: `subscribe-button-${a.id}`,
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation(),
							small: !0,
							isFullWidth: !0
						})), f && this.renderCreatePostButtons(), g && i.a.createElement(O.a, {
							className: mt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), p && i.a.createElement(T.q, {
							className: mt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, r.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !s && d && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
							className: mt.a.HorizontalLine
						}), i.a.createElement(Fe, {
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
						isEligibleForCommunityAwards: o,
						isGQLLoggedIn: c,
						isInNCPV3Experiment: d,
						isLoggedIn: l,
						isMinimal: u,
						isNsfwBlurSubreddit: m,
						isOverlay: b,
						isSubmissionPage: f,
						moderatorPermissions: g,
						onContainerClick: x,
						subreddit: _,
						subredditAboutInfo: y,
						subredditCoins: C,
						subredditIcon: E,
						toggleTooltip: O,
						showCommunityDirectoryBacklink: j,
						subredditInlineEditingEnabled: T
					} = this.props, k = this.getListingNameToUse(), I = Object(h.a)(k);
					if (!I && !n) return i.a.createElement(wt, null);
					const {
						bannerBackgroundImage: S,
						currentlyViewingCount: w,
						currentlyViewingText: N,
						description: F,
						snooBackground: P,
						subscribersCount: B,
						subscribersText: D,
						titleText: R,
						url: M
					} = Object(kt.d)({
						listingName: k,
						subreddit: _,
						idCardWidget: n
					}), L = I || b || f, A = !I && _.id ? _.id : "", U = y && y.created, H = `IdCard--Subscribers--${b}--${A}`, q = `IdCard--CurrentlyViewing--${b}--${A}`, z = `IdCard--CakeDay--${b}--${A}`, V = `IdCard--CoinCoint--${b}--${A}`, W = u && !b, G = !I && !l && !c, Q = !I && !b && T && !f, J = Q && !d ? i.a.createElement(se, {
						description: F,
						shouldTruncateDescription: !1,
						isCommentsPage: !!s,
						subreddit: _
					}) : i.a.createElement(K, {
						description: F,
						shouldTruncateDescription: !1,
						subreddit: _
					}), X = o && g, Z = d ? X && C && C > 0 : X, $ = j ? i.a.createElement(i.a.Fragment, null, !I && !W && U && i.a.createElement(i.a.Fragment, null, i.a.createElement(Xt, {
						className: mt.a.cakeDayBlock,
						cakeDayCreated: U,
						cakeDayTooltipId: z,
						showCommunityDirectoryBacklink: j,
						toggleTooltip: O
					})), G && i.a.createElement(Wt.a, {
						subredditId: A
					}), !I && i.a.createElement(Tt, {
						subreddit: _
					}), !I && !W && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement(Lt, {
						subscribersCount: B,
						subscribersText: D,
						subscribersTooltipId: H,
						currentlyViewingCount: w,
						currentlyViewingText: N,
						currentlyViewingTooltipId: q,
						showCommunityDirectoryBacklink: j,
						toggleTooltip: O
					}))) : i.a.createElement(i.a.Fragment, null, !I && !W && i.a.createElement(Lt, {
						subscribersCount: B,
						subscribersText: D,
						subscribersTooltipId: H,
						currentlyViewingCount: w,
						currentlyViewingText: N,
						currentlyViewingTooltipId: q,
						toggleTooltip: O
					}), !I && !W && U && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement(Xt, {
						cakeDayCreated: U,
						cakeDayTooltipId: z,
						toggleTooltip: O
					})), G && i.a.createElement(Wt.a, {
						subredditId: A
					}), !I && i.a.createElement(Tt, {
						subreddit: _
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(Be.a, {
						className: Object(p.a)(mt.a.ThemedWidget, t),
						onClick: b ? x : void 0,
						headerButton: i.a.createElement("div", {
							className: mt.a.headerButtonsContainer
						}, !L && _ && g && d !== Re.Le.NewModule && i.a.createElement(a.a, {
							className: mt.a.ModToolsLink,
							to: g.posts ? `${_.url}about/modqueue` : `${_.url}about/`,
							onClick: this.onClickModTools
						}, i.a.createElement(Xe.a, {
							className: mt.a.ModSettings
						}), r.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), l && _ && i.a.createElement(le.b, {
							className: mt.a.overflowButton,
							dropdownId: Yt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !_.isQuarantined && i.a.createElement(He.b, {
							className: mt.a.dropdownRow,
							displayText: r.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), i.a.createElement(He.b, {
							className: mt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? r.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : r.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: I || f,
						title: L ? void 0 : r.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: I ? void 0 : mt.a.subredditTitle
					}, L && i.a.createElement(pt, {
						bannerBackgroundImage: S
					}), I || f || s ? I ? Ft({
						titleText: R,
						snooBackground: P
					}) : i.a.createElement(Vt, {
						isTargetBlank: f,
						linkUrl: I ? void 0 : M,
						subredditIcon: E,
						canEditIcon: Q,
						subreddit: _,
						titleText: R,
						onOpenFilePicker: this.openIconFilePicker,
						isInNCPV3Experiment: d,
						shouldBlurSubredditIcon: m
					}) : null, J, $, !!Z && !!C && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: mt.a.communityCoinCount,
						"data-testid": "community-coin-count"
					}, i.a.createElement(Je.a, {
						className: mt.a.coinIcon
					}), r.fbt._("{number-community-coins} Coins", [r.fbt._param("number-community-coins", C.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: V,
						onMouseLeave: () => O(V),
						onMouseEnter: () => O(V)
					}, i.a.createElement(Y.a, {
						name: "help",
						isFilled: !0,
						className: mt.a.helpIcon
					})), i.a.createElement(ie.c, {
						tooltipId: V
					}, i.a.createElement("p", {
						className: mt.a.coinsTooltipContent
					}, r.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), (d ? Q && B > 100 : Q) && i.a.createElement(de, {
						context: Ge.a.idCard,
						subredditId: A
					}), !I && W && i.a.createElement(Mt, {
						subreddit: _,
						subscribersCount: B,
						currentlyViewingCount: w
					}), this.renderButtons(), !I && l && i.a.createElement(i.a.Fragment, null, i.a.createElement(vt, {
						isOverlay: b,
						isSubmissionPage: f,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), Q && i.a.createElement(qe.a, {
						key: "icon-file-picker",
						className: mt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !I && l && this.props.adminCommunityTopicsEnabled && i.a.createElement(v, {
						key: "admin-community-topics",
						subredditId: A
					})))
				}
			}
			t.default = Object(w.c)(Zt(Object(b.a)(tn)))
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
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
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
						return Object(d.b)(n)(e)
					}
				}),
				_ = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				y = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				C = Object(i.b)(x);
			t.c = C(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(_, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(y, p({}, e, {
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
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const x = d.a.wrapped(m.a, "_Dropdown", g.a),
				_ = Object(u.a)(x),
				y = d.a.button("MenuButton", g.a),
				C = d.a.wrapped(p.b, "DropdownRow", g.a),
				v = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				E = Object(o.b)(v, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: O(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), i.a.createElement(_, {
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
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
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
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
				return c
			})), n.d(t, "o", (function() {
				return d
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
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(s);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				c = r.a.button("HomePageBreadcrumb", i.a),
				d = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				b = r.a.div("FormElement", i.a),
				h = r.a.div("FormGroupDescription", i.a),
				f = r.a.div("FormItem", i.a),
				g = r.a.h3("FormElementTitle", i.a),
				x = r.a.div("FormElementDescription", i.a),
				_ = r.a.div("FormElementError", i.a),
				y = r.a.div("FormElementSubGroup", i.a),
				C = r.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, o = [n, _.a.inTopBar, _.a.iconContainer];
					return r ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", y({}, s, {
						className: Object(c.a)(...o)
					}), r ? i.a.createElement(h.a, {
						name: "upload",
						className: _.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: _.a.emptyPlusButton
					}), e.children)
				},
				v = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: o,
						inTopBar: a,
						src: d
					} = e;
					return i.a.createElement("span", {
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: s,
						src: d,
						className: Object(c.a)(n, {
							[_.a.editableIcon]: !a
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
						className: _.a.imageUploader,
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
						className: _.a.clickableUploadText,
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(v, y({
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
						const e = [_.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(_.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(c.a)(...e),
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
						className: _.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(E, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(d.a)(t.subreddit.id, n, r))
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
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(o.b)(null, (e, t) => ({
					closeModal: () => e(Object(c.g)(t.modalId || m))
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
					return i.a.createElement(d.e, null, i.a.createElement(d.i, null, i.a.createElement(u.a, null, i.a.createElement(d.q, null, r.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(d.b, null)))), i.a.createElement(d.l, null, i.a.createElement(d.p, null, r.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(d.g, null, i.a.createElement(d.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, r.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(d.r, {
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
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
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
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
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
						className: Object(l.a)(a.className, d.a.BaseButton),
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
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? i.a.createElement(h, u({}, d, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(p, u({}, d, {
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
				c = n.n(a);
			const d = Object(i.a)(o.b),
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
					}, this.props.icon, s.a.createElement(d, {
						className: c.a.tooltip,
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
				c = n.n(a);
			t.a = Object(r.memo)(Object(r.forwardRef)((e, t) => {
				const n = e.size || o.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(i.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
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
					className: c.a.toggleDisplay
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
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: r,
						subscribe: o
					} = t;
					return Object(i.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(i.a)(Object(a.a)(e, [c.a]), {
					method: s.jb.POST,
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
				i = new Set([r.f.Private, r.f.User]),
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
				o = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${o.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${o.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const r = n ? c : a,
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
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const a = e => {
					Object(o.a)({
						...s.n(e),
						action: r.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					})
				},
				c = (e, t, n) => {
					const {
						subreddit: a,
						profile: c
					} = Object(i.b)(e, t);
					Object(o.a)({
						...s.n(e),
						action: r.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: {
							...a,
							categoryName: n
						}
					})
				},
				d = e => t => ({
					action: r.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: s.ib(t)
				})
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
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
			const c = e => ({
					profile: a.S(e),
					screen: a.ab(e),
					subreddit: a.ib(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(o.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: a.J(r, e)
				}),
				l = (e, t, n, r) => s => {
					const o = n ? a.h(s, n) : null,
						{
							sortToUse: c
						} = Object(i.a)(s, e);
					return {
						...d(e, t, r)(s),
						comment: o,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const r = a.j(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...d(e, t)(n),
					...a.n(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: a.j(t),
					userSubreddit: a.sb(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.ab(e),
					subreddit: r.ib(e),
					profile: r.S(e),
					userSubreddit: r.sb(e)
				}),
				i = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...s(t)
				}),
				o = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...s(e)
				}),
				a = () => e => ({
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
				d = (e, t, n) => r => ({
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
					...r.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: r.ib(t)
				}),
				i = e => t => ({
					...r.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.ib(t)
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
					...r.n(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.ib(t)
				}),
				i = e => t => ({
					...r.n(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: r.ib(t)
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
				return c
			})), n.d(t, "a", (function() {
				return d
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
					...s.n(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.n(i),
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
					...s.n(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.n(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.n(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/gold/powerups/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...i.n(e)
				}),
				a = e => t => {
					const n = i.ib(t),
						o = Object(s.t)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: a,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...i.n(t),
						subreddit: n,
						userFlair: {
							id: null == a ? void 0 : a.id,
							title: a ? Object(r.g)(a) : void 0,
							isActive: !!a || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: o
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...i.n(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: i.ib(t),
					...i.n(t)
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
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(i.e)(o.j) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
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
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(i.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", d.a);
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
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(i.a)(c.a.ModSettings, Object(o.b)("mod", e.isFilled), e.className)
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
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
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
					experimentName: s.Yb,
					experimentEligibilitySelector: o.e
				}), e => e === s.jb.Enabled),
				c = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Zb,
					experimentEligibilitySelector: o.e
				}), e => e === s.kb.Enabled),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.ac,
					experimentEligibilitySelector: o.e
				}), e => e === s.lb.Enabled),
				l = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.bc,
					experimentEligibilitySelector: o.e
				}), e => e === s.mb.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.dc,
					experimentEligibilitySelector: o.e
				}), e => e === s.ob.Enabled),
				m = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.cc,
					experimentEligibilitySelector: o.e
				}), e => e === s.nb.Enabled)
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.69488194fa0d08a95e45.js.map