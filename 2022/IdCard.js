// https://www.redditstatic.com/desktop2x/IdCard.6b8ab93211aa23e67fb5.js
// Retrieved at 7/25/2022, 4:50:04 PM by Reddit Dataminer v1.0.0
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
				const d = new Date(e * s.Sb);
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
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			}));
			const r = 120,
				s = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				a = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return y
			})), n.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return v
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return C
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return O
			})), n.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return T
			})), n.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return j
			})), n.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
			})), n.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return k
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return w
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return F
			})), n.d(t, "setSubredditUserSupporterFlair", (function() {
				return P
			})), n.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return B
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, n, r) => {
				const s = await Object(o.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: r
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = n("./src/reddit/actions/gold/powerups.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				h = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/economics/powerups/constants.ts"),
				x = n("./src/lib/initializeClient/installReducer.ts"),
				_ = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(x.a)({
				features: {
					powerups: _.a
				}
			});
			const y = Object(s.a)(g.d),
				v = Object(s.a)(g.i),
				C = Object(s.a)(g.f),
				E = Object(s.a)(g.g),
				O = Object(s.a)(g.e),
				T = Object(s.a)(g.h),
				j = (e, t) => async (n, r, s) => {
					let {
						gqlContext: d
					} = s;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
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
							})(d(), e, c),
							{
								subredditInfoById: r,
								redditorsInfoByIds: s
							} = t;
						await n(y(r)), s && await n(v(s))
					} catch (l) {
						i.c.captureException(l)
					}
				}, I = (e, t) => async (n, r) => {
					if (!e) return;
					const s = r(),
						i = Object(f.k)(s);
					if (!i || !Object(b.f)(s, {
							subredditId: e
						})) return;
					const o = !!Object(h.e)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(j(e, [i.id]))
				}, S = e => async (t, n) => {
					if (!e) return !1;
					await t(Object(l.j)(e, {
						fullData: !0
					}));
					const r = n();
					return Object(b.f)(r, {
						subredditId: e
					})
				}, k = e => async (t, n) => {
					var r;
					const s = n(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(p.d)(s, {
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
				}, F = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(f.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(h.h)(s, {
							subredditId: e,
							userId: o
						});
					n(N({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, P = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(f.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(h.g)(s, {
							subredditId: e,
							userId: o
						});
					n(N({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, N = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const a = n(),
						d = Object(f.k)(a);
					if (!d) return;
					const l = d.id;
					t(C(e));
					const {
						subredditId: p,
						achievementFlairType: b,
						supporterFlairType: g
					} = e, x = [b, g].filter(Boolean), _ = Object(h.d)(a, {
						subredditId: p,
						userId: l
					});
					try {
						await c(o(), p, x, _), t(E(e))
					} catch (y) {
						t(O(e)), i.c.captureException(y), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, B = (e, t) => async (n, s, o) => {
					let {
						gqlContext: a
					} = o;
					const d = s(),
						l = Object(f.k)(d);
					if (!l) return;
					const p = l.id,
						b = {
							subredditId: e,
							userId: p
						},
						g = [Object(h.g)(d, b), Object(h.h)(d, b)].filter(Boolean);
					n(T({
						...b,
						isHidden: t
					}));
					try {
						await c(a(), e, g, t)
					} catch (x) {
						n(T({
							...b,
							isHidden: !t
						})), i.c.captureException(x), n(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
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
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(o.w),
				f = Object(s.a)(o.x),
				g = Object(s.a)(o.v),
				x = (e, t, n) => async (r, s, i) => {
					const o = Object(p.z)(s(), {
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
					} catch (C) {
						return Object(b.a)(Object(c.c)(y, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: _()
						})), void s(g())
					}
					const v = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!v) return Object(b.a)(Object(c.c)(y, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: _()
					})), void s(g());
					await Object(i.k)(e, {
						communityIcon: v
					}, d.b.idCard, n)(s, o, p), s(Object(a.f)({
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
				return R
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return H
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				d = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
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

			function v(e) {
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
			var C = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				O = n("./src/reddit/selectors/profile.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/subscriptions.ts"),
				I = n("./src/reddit/selectors/user.ts");
			const S = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				k = Object(o.a)(l.c),
				w = Object(o.a)(l.b),
				F = Object(o.a)(l.a),
				P = Object(o.a)(l.h),
				N = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(w());
					const i = await Object(f.a)(r());
					if (i.ok) {
						const t = v(i.body.data);
						e(k(t))
					} else e(F({
						error: i.error
					}))
				}),
				B = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				R = (e, t, n) => async (o, l, p) => {
					let {
						apiContext: b
					} = p, h = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(T.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(O.m)(l(), e.name),
						name: `${s.kc}${e.name}`,
						type: e.type
					});
					if (!Object(I.Q)(l())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(d.openRegisterModal)());
					const g = Object(I.k)(l());
					if (g) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !B(g, e)), (e = e.filter(e => !B(g, e))).length !== n || h.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, C.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					o(P({
						identifiers: h,
						nameIdentifiers: e,
						profileModels: l().profiles.models,
						subredditModels: l().subreddits.models,
						subscriptionsCount: Object(j.b)(l()),
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
							d = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							c = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? d : c
						}))
					} else {
						o(P({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(j.b)(l()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(s, C.b.Error)))
					}
					return t && Object(E.a)(l()) && (1 === e.length && "profile" === e[0].type ? o(Object(a.c)("user_follow")) : o(Object(a.c)("join"))), x.ok
				}, D = Object(o.a)(l.f), M = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n(),
						o = Object(T.M)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						d = i.subscriptions.favoriteSubredditOrder || [],
						c = i.subscriptions.favoriteProfileOrder || [],
						l = d.indexOf(e.id),
						p = c.indexOf(e.id),
						b = -1 === l && -1 === p,
						h = i.subreddits.models,
						g = i.profiles.models,
						x = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(T.gb)(n(), {
							identifier: x
						});
					(_() || (await t(R([x], !0)), _())) && (t(D({
						makeFavorite: b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), (await Object(f.b)(s(), a, b)).ok || (t(D({
						makeFavorite: !b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), t(Object(u.f)({
						text: S(),
						kind: C.b.Error
					}))))
				}, L = Object(o.a)(l.d), U = e => async (t, n, r) => {
					let {
						apiContext: i
					} = r;
					const o = n().multireddits.models,
						a = () => {
							t(Object(u.f)({
								text: S(),
								kind: C.b.Error
							}))
						},
						d = o[e];
					if (!d) return void a();
					const c = !d.isFavorited;
					t(L({
						makeFavorite: c,
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
					}))(i(), e, c)).ok || (t(L({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, A = Object(o.a)(l.e), H = e => async (t, n, i) => {
					let {
						apiContext: o
					} = i;
					const a = n(),
						d = a.multireddits.models;
					if (!Object(I.Q)(a)) return;
					const c = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: C.b.Error
							}))
						},
						l = d[e];
					if (!l) return void c();
					const m = !l.isFollowed;
					t(A({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(A({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: d
					})), c(m))
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
				return N
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E,
				T = 24;
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
						className: Object(d.a)(y.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${C}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || T;
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
							className: Object(d.a)(y.a.wrapper, this.props.className),
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
			const I = [],
				S = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n,
							userId: r
						} = t;
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[n]) || I
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n
						} = t;
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[n]) || I
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

			function F(e) {
				const {
					badgeIds: t,
					allBadges: n,
					...r
				} = e, i = t.map(e => n[e]).filter(Boolean);
				return s.a.createElement(j, v({
					badges: i
				}, r))
			}
			const P = Object(i.b)(S, w)(F),
				N = Object(i.b)(k, w)(F)
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
				return d
			})), n.d(t, "l", (function() {
				return c
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
				d = 1440,
				c = 36600,
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
				_ = Object(d.c)({
					restrictions: h.o
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
				v = () => i.a.createElement(x, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				C = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(y, null)), i.a.createElement(x, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(v, null)),
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
						return i.a.createElement(C, {
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
					case p.f.Private:
						return i.a.createElement(C, {
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
					case p.f.EmployeesOnly:
						return i.a.createElement(C, {
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
						return i.a.createElement(i.a.Fragment, null, a.isQuarantined && i.a.createElement(v, null), a.isNSFW && i.a.createElement(y, null))
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
			const _ = "create-community-button",
				y = x.a.wrapped(l.c, "StyledTooltip", g.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(o.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: _
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
					id: _,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(y, {
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
				}, `${h||"username"}`), i.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: n,
					userId: s
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(c.b, {
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
				return A
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
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
				_ = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/constants/parameters.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/Flair/index.m.less"),
				S = n.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(_.a)(x.b),
				F = p.a.div("FlairWrapper", S.a),
				P = p.a.wrapped(c.a, "CloseButton", S.a),
				N = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return d.a.createElement(g, k({
						style: {
							...B(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", S.a),
				B = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				R = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[v.p]: r,
						[v.s]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? d.a.createElement(C.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? d.a.createElement(C.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: R(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class M extends d.a.Component {
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
							color: `${A(this.props)}`
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
					return d.a.createElement(D, {
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
				U = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === T.c.Emoji) {
							const i = r;
							return t += i.a, n = !0, d.a.createElement(N, {
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
					const i = d.a.createElement(F, {
						className: Object(u.a)(e.className, {
							[S.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(j.a)(e).flair,
							color: `${A(e)}`
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
					return d.a.createElement(D, {
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
				A = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(j.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(j.a)(e).post, y.a.black, y.a.white) : e.textColor === T.e.Dark ? y.a.black : y.a.white,
				H = p.a.wrapped(L, "TextFlair", S.a),
				W = p.a.wrapped(U, "RichTextFlair", S.a),
				q = e => {
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
					const t = q(e),
						n = d.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return d.a.createElement(D, {
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
					case T.f.Richtext:
						return n || !s.richtext ? null : d.a.createElement(W, {
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
					case T.f.Text:
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
					case T.f.Meta:
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
					case T.f.Nsfw:
					case T.f.Spoiler:
						return d.a.createElement(z, {
							className: t,
							text: s.text,
							type: s.type
						});
					case T.f.Quarantined:
						return null;
					case T.f.Oc:
						return d.a.createElement(H, {
							backgroundColor: y.a.alienblue,
							text: s.text,
							textColor: T.e.Light,
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
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
						d = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : a
						};
					return s.a.createElement(s.a.Fragment, null, Object(i.d)(t, d))
				},
				d = n("./src/lib/humanizeDate/index.ts");
			var c = function(e) {
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
					return s.a.createElement(s.a.Fragment, null, Object(d.a)(t, a))
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
					d = null != i ? i : a;
				return s.a.createElement(s.a.Fragment, null, f(t, n, r, d))
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
					let x, _;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
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
				_ = n("./src/reddit/actions/subscription/index.ts"),
				y = n("./src/higherOrderComponents/makeAsync.tsx"),
				v = n("./src/lib/loadWithRetries/index.ts"),
				C = Object(y.a)({
					getComponent: () => Object(v.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				O = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				T = n("./src/reddit/actions/login.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				S = n("./src/reddit/helpers/trackers/postComposer.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(m.c)({
				isLoggedIn: k.Q
			});
			var N = Object(o.b)(P, e => ({
				openLoginModal: () => {
					e(Object(x.k)({
						actionSource: x.a.Post
					})), e(Object(T.openRegisterModal)())
				}
			}))(Object(w.c)(e => {
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
				return i.a.createElement(j.n, F({}, c, {
					onClick: e => {
						a(Object(S.x)({
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
			const B = Object(y.a)({
				getComponent: () => Object(v.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var R = n("./node_modules/react-autosize-textarea/lib/index.js"),
				D = n.n(R),
				M = n("./src/reddit/actions/subredditSettings.ts"),
				L = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				U = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				A = n("./src/lib/fastdom/index.ts"),
				H = n("./src/lib/lessComponent.tsx"),
				W = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				q = n.n(W);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), V = H.a.div("DescriptionContainer", q.a);
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
					this.state.shouldTruncateDescription && A.a.read(() => {
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
					} = this.state, o = n ? z._("Welcome to {subredditName}", [z._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return i.a.createElement(V, {
						className: Object(p.a)(q.a.descriptionContainer, s && q.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, i.a.createElement("div", {
						className: q.a.description,
						ref: this.setTextRef
					}, t || o, e), s && r && i.a.createElement("div", {
						className: q.a.showMore
					}, "...", i.a.createElement(j.r, {
						className: q.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, z._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			var K = G,
				J = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				Q = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				X = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				Y = n("./src/reddit/icons/fonts/index.tsx"),
				Z = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/selectors/subreddit.ts");
			const ee = 6,
				te = `${J.a}_description`,
				ne = Object(m.c)({
					apiPending: $.V,
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
					const e = this.props.apiPending ? i.a.createElement(Q.a, {
						className: q.a.loadingIcon,
						sizePx: ee
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(K, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(Y.a, {
						name: "edit",
						className: q.a.pencil
					}), e)) : i.a.createElement("div", {
						className: q.a.emptyDescription
					}, r.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(D.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: r.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(p.a)(q.a.editableDescription, q.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: U.d,
						value: this.state.description
					}), i.a.createElement("div", {
						className: q.a.editableDescriptionControlRow
					}, i.a.createElement(L.a, {
						className: q.a.characterCountdown,
						maxChars: U.d,
						text: this.state.description
					}), i.a.createElement("span", {
						className: q.a.cancel,
						onClick: this.onCancel
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: q.a.save,
						onClick: this.onSave
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [q.a.defaultEditableDescriptionContainer];
					const e = [q.a.editableDescriptionContainer];
					return this.state.editing && e.push(q.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(p.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(J.b, {
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
				de = n.n(ae);
			var ce = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: de.a.container
					}, i.a.createElement(oe.a, null)),
					getComponent: () => Object(v.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
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
				ve = n.n(ye);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = H.a.div("FlairSettingsContainer", ve.a), Oe = H.a.div("FlairPreviewWrapper", ve.a), Te = H.a.div("PreviewTitle", ve.a), je = H.a.wrapped(j.r, "TertiaryButton", ve.a), Ie = H.a.wrapped(je, "IconButton", ve.a), Se = Object(m.c)({
				currentUser: k.k,
				isAchievementFlairModalEnabled: (e, t) => Object(ge.f)(e, {
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
			}), ke = Object(o.b)(Se), we = e => i.a.createElement(Ie, {
				onClick: e.onClick
			}, i.a.createElement(Y.a, {
				name: "edit"
			})), Fe = e => {
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
					usernameClassName: ve.a.previewUsername
				}))
			};
			var Pe = ke(e => {
					let {
						currentUser: t,
						subredditId: n,
						userFlairData: r,
						userHasBadge: a,
						isAchievementFlairModalEnabled: d
					} = e;
					const c = Object(o.d)(),
						l = Object(he.a)();
					Object(s.useEffect)(() => {
						d && c(Object(me.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(n))
					}, [c, n, d]);
					return t && (r || d) ? i.a.createElement(Ee, null, i.a.createElement(Te, null, Ce._("user flair preview", null, {
						hk: "3aBytK"
					}), i.a.createElement(we, {
						onClick: () => {
							if (d) c(Object(pe.d)());
							else {
								(e => c(Object(ue.b)({
									username: e,
									subredditId: n
								})))(t ? Object(fe.e)(t) : null)
							}
							l(Object(be.c)())
						}
					})), i.a.createElement(Fe, {
						subredditId: n,
						userId: t.id,
						username: Object(fe.e)(t),
						userFlairData: r,
						userHasBadge: a
					})) : null
				}),
				Ne = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Be = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Re = n("./src/reddit/constants/componentSizes.ts"),
				De = n("./src/reddit/constants/experiments.ts"),
				Me = n("./src/reddit/constants/listings.ts"),
				Le = n("./src/reddit/constants/modals.ts"),
				Ue = n("./src/reddit/constants/page.ts"),
				Ae = n("./src/reddit/constants/posts.ts"),
				He = n("./src/reddit/controls/Dropdown/Row.tsx"),
				We = n("./src/reddit/controls/ImageInput/index.tsx"),
				qe = n("./src/reddit/featureFlags/index.ts"),
				ze = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				Ve = n("./src/reddit/helpers/localStorage/index.ts"),
				Ge = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Ke = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Je = n("./src/reddit/helpers/trackers/modHub.ts"),
				Qe = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Xe = n("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				Ye = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Ze = n("./src/reddit/selectors/category.ts"),
				$e = n("./src/reddit/helpers/chooseVariant/index.ts"),
				et = n("./src/reddit/selectors/platform.ts");
			const tt = e => Object(et.l)(e) || !1,
				nt = e => {
					return Object($e.c)(e, {
						experimentEligibilitySelector: tt,
						experimentName: De.S
					}) === De.bb.Enabled
				};
			var rt = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				st = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				it = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				at = n("./src/reddit/selectors/structuredStyles.ts"),
				dt = n("./src/reddit/selectors/subscriptions.ts"),
				ct = n("./src/reddit/selectors/tooltip.ts"),
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
			const _t = H.a.wrapped(j.t, "TertiaryButton", xt.a),
				yt = Object(m.c)({
					stylesDisabledForSubreddit: k.qb,
					stylesDisabledGlobally: k.rb
				});
			class vt extends i.a.Component {
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
						kind: j.b.Button,
						priority: j.c.Plain,
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
			var Ct = Object(o.b)(yt, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(bt.K)(t, n))
					}
				}))(vt),
				Et = n("./src/reddit/components/CommunityType/index.tsx"),
				Ot = n("./src/reddit/components/IdCard/CommunityTypeBlock/index.m.less"),
				Tt = n.n(Ot);
			const jt = e => {
				let {
					subreddit: t
				} = e;
				return i.a.createElement("div", {
					className: Tt.a.CommunityTypeContainer
				}, i.a.createElement(Et.a, {
					className: Tt.a.communityType,
					iconClassName: Tt.a.communityTypeIcon,
					subreddit: t,
					textClassName: Tt.a.communityTypeText
				}))
			};
			var It = n("./src/reddit/components/IdCard/helpers.ts"),
				St = n("./src/reddit/components/IdCard/placeholder.m.less"),
				kt = n.n(St);
			var wt = i.a.memo(e => i.a.createElement("div", {
				className: Object(p.a)(kt.a.container)
			}, i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.banner)
			}), i.a.createElement("div", {
				className: kt.a.title
			}, i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.icon)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.name)
			})), i.a.createElement("div", {
				className: kt.a.counts
			}, i.a.createElement("div", {
				className: kt.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.text)
			})), i.a.createElement("div", {
				className: kt.a.side
			}, i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.count)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.text)
			}))), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.desc, kt.a.one)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.desc, kt.a.two)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.desc, kt.a.three)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.desc, kt.a.four)
			}), i.a.createElement("div", {
				className: Object(p.a)(kt.a.shimmer, kt.a.subscribe)
			})));
			const Ft = e => {
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
			var Pt = e => {
					let {
						titleText: t,
						snooBackground: n
					} = e;
					return i.a.createElement("div", {
						className: Object(p.a)(mt.a.Title, mt.a.TitleShifted)
					}, i.a.createElement(Ft, {
						snooBackground: n
					}), i.a.createElement("div", {
						className: mt.a.TitleTextShiftedContainer
					}, i.a.createElement("span", {
						className: mt.a.TitleText
					}, t)))
				},
				Nt = n("./src/lib/prettyPrintNumber/index.ts"),
				Bt = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				Rt = n("./src/reddit/components/IdCard/StatsBlock/index.m.less"),
				Dt = n.n(Rt);
			const Mt = e => {
					let {
						subreddit: t,
						subscribersCount: n,
						currentlyViewingCount: s
					} = e;
					const o = Object(Bt.a)(t.name);
					return i.a.createElement("span", {
						className: Dt.a.compactStats
					}, o.map((e, t) => {
						let {
							color: n,
							image: s
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? r.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: Dt.a.memberIcon,
							key: s,
							src: s,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: Dt.a.metaText
					}, r.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [r.fbt._plural(n, "number of members", Object(Nt.b)(n))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: Dt.a.metaText
					}, r.fbt._("{viewingCount} online", [r.fbt._param("viewingCount", Object(Nt.b)(s))], {
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
						showCommunityDirectoryBacklink: d,
						toggleTooltip: c
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Dt.a.stats
					}, i.a.createElement("div", {
						onMouseEnter: () => c(r),
						onMouseLeave: () => c(r)
					}, i.a.createElement("div", {
						className: Dt.a.count
					}, Object(Nt.b)(t)), i.a.createElement("p", {
						className: d ? Dt.a.metaTextBacklinks : Dt.a.metaText,
						id: r
					}, n), i.a.createElement(ie.c, {
						caretOnTop: !0,
						text: `${Object(Nt.b)(t,{displayFull:!0})} ${n}`,
						tooltipId: r
					})), i.a.createElement("div", {
						onMouseEnter: () => c(a),
						onMouseLeave: () => c(a)
					}, i.a.createElement("div", {
						className: d ? Dt.a.onlineCount : Dt.a.count
					}, Object(Nt.b)(s)), i.a.createElement("p", {
						className: d ? Dt.a.metaTextBacklinks : Dt.a.metaText,
						id: a
					}, o), i.a.createElement(ie.c, {
						caretOnTop: !0,
						text: `${Object(Nt.b)(s,{displayFull:!0})} ${o}`,
						tooltipId: a
					})), i.a.createElement("div", null)))
				};
			var Ut = n("./node_modules/history/esm/history.js"),
				At = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Ht = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Wt = n("./src/reddit/hooks/useClickSourceData.ts");
			const {
				fbt: qt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function zt(e) {
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
					g = u.url ? qt._("Update icon", null, {
						hk: "GXdPy"
					}) : qt._("Add icon", null, {
						hk: "31odkm"
					}),
					x = Object(Wt.a)();
				return i.a.createElement("div", {
					className: Object(p.a)(mt.a.Title, e.className)
				}, n && h && !r ? i.a.createElement(Ht.a, {
					className: d ? mt.a.largeSubredditIcon : mt.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					subreddit: h,
					inTopBar: !1
				}) : i.a.createElement(At.b, {
					altText: u.altText,
					className: d ? mt.a.largeSubredditIcon : mt.a.subredditIcon,
					key: u.url,
					iconUrl: u.url,
					primaryColor: b,
					shouldBlurSubredditIcon: l
				}), i.a.createElement("div", {
					className: mt.a.titleTextContainer
				}, c ? i.a.createElement(a.a, {
					className: mt.a.TitleLink,
					key: c,
					to: {
						pathname: Object(Ut.c)(c).pathname,
						state: x,
						search: Object(Ut.c)(c).search
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
			var Vt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				Gt = n("./src/reddit/components/HumanDate/index.tsx"),
				Kt = n("./src/reddit/components/IdCard/CakeDayBlock/index.m.less"),
				Jt = n.n(Kt);
			const {
				fbt: Qt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xt = e => {
				let {
					cakeDayCreated: t,
					cakeDayTooltipId: n,
					className: r,
					showCommunityDirectoryBacklink: s,
					toggleTooltip: o
				} = e;
				return i.a.createElement("div", {
					className: Object(p.a)(Jt.a.CakeDayContainer, r),
					onMouseEnter: () => o(n),
					onMouseLeave: () => o(n)
				}, i.a.createElement("div", {
					className: Jt.a.CakeDay,
					id: n
				}, i.a.createElement(Y.a, {
					name: "cake",
					className: Jt.a.cakeIcon
				}), i.a.createElement("span", {
					className: s ? Jt.a.label : ""
				}, Qt._("Created {cakeday}", [Qt._param("cakeday", i.a.createElement(Gt.a, {
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
				activeTooltipId: ct.a,
				postCategories: (e, t) => Object(Ze.n)(e, t.postId),
				favoriteSubredditsIds: dt.a,
				idCardWidget: (e, t) => Object(lt.d)(e, {
					subredditName: t.listingName
				}),
				isContributorRequestPending: e => Object($.e)(e, Ye.e.Post),
				isGQLLoggedIn: k.P,
				isLoggedIn: k.Q,
				isNsfwBlurSubreddit: it.e,
				moderatorPermissions: (e, t) => {
					const n = Object($.F)(e, t.listingName);
					if (n) return Object(ot.n)(e, {
						subredditId: n
					})
				},
				shouldObserveSubscribeButton: e => Object(rt.a)(e) || Object(rt.c)(e) || Object(rt.d)(e),
				showContributorRequestFlow: e => Object($.t)(e, Ye.e.Post),
				showCreatePollButton: e => (e => Object($e.c)(e, {
					experimentEligibilitySelector: $e.a,
					experimentName: De.W
				}) === De.eb.Treatment)(e) && !Object(Ve.g)(),
				shouldShowFlairPreview: (e, t) => {
					let {
						listingName: n
					} = t;
					const r = Object($.F)(e, n);
					return Object(xe.c)(e, {
						subredditId: r
					})
				},
				subreddit: (e, t) => Object($.z)(e, {
					subredditName: t.listingName
				}),
				subredditAboutInfo: (e, t) => Object($.w)(e, {
					subredditName: t.listingName
				}),
				subredditCoins: (e, t) => {
					let {
						listingName: n
					} = t;
					return Object($.C)(e, {
						subredditName: n
					})
				},
				subredditIcon: (e, t) => Object(at.p)(e, {
					subredditName: t.listingName
				}),
				adminCommunityTopicsEnabled: qe.d.adminCommunityTopics,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						listingName: n
					} = t;
					const r = Object($.z)(e, {
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
				dispatchPush: t => e(Object(d.b)(t)),
				toggleFavorite: t => e(Object(_.c)({
					id: t,
					type: Ae.a.SUBREDDIT
				})),
				toggleTooltip: t => e(Object(f.h)({
					tooltipId: t
				})),
				onCommunityIconSelected: (n, r) => {
					e(Object(c.b)(t.listingName, n, r))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				isEligibleForCommunityAwards: Object(ze.b)(e.subreddit),
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
								t >= $t && Object(It.c)(!0), t <= en && Object(It.c)(!1)
							})
						}, {
							rootMargin: `${-(Re.f+Re.m)}px 0px 0px 0px`,
							threshold: [$t, en]
						})), this.subscribeButtonRef && this.subscribeButtonObserver.unobserve(this.subscribeButtonRef), e && (this.subscribeButtonRef = e, this.subscribeButtonObserver.observe(this.subscribeButtonRef)))
					}, this.onClickModTools = () => this.props.sendEvent(Object(Je.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Ke.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== Ue.c ? t : Me.b.Popular
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
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(N, {
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
							subredditAboutInfo: d,
							shouldShowFlairPreview: c,
							showCommunityDirectoryBacklink: l
						} = this.props, u = this.getListingNameToUse(), m = Object(h.a)(u), p = n && a && !s, b = e && !m && !p, f = t && !p && !o && !s && !(d && d.userIsBanned), g = t && !o && !s && !a, x = l && (b || f || g || p);
						return i.a.createElement(i.a.Fragment, null, x && i.a.createElement("hr", {
							className: mt.a.HorizontalLine
						}), i.a.createElement("div", {
							className: mt.a.Buttons
						}, b && i.a.createElement("div", {
							ref: this.setSubscribeButtonRef
						}, i.a.createElement(Ne.a, {
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
						}), p && i.a.createElement(j.q, {
							className: mt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, r.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !s && c && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
							className: mt.a.HorizontalLine
						}), i.a.createElement(Pe, {
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
						isGQLLoggedIn: d,
						isInNCPV3Experiment: c,
						isLoggedIn: l,
						isMinimal: u,
						isNsfwBlurSubreddit: m,
						isOverlay: b,
						isSubmissionPage: f,
						moderatorPermissions: g,
						onContainerClick: x,
						subreddit: _,
						subredditAboutInfo: y,
						subredditCoins: v,
						subredditIcon: E,
						toggleTooltip: O,
						showCommunityDirectoryBacklink: T,
						subredditInlineEditingEnabled: j
					} = this.props, I = this.getListingNameToUse(), S = Object(h.a)(I);
					if (!S && !n) return i.a.createElement(wt, null);
					const {
						bannerBackgroundImage: k,
						currentlyViewingCount: w,
						currentlyViewingText: F,
						description: P,
						snooBackground: N,
						subscribersCount: B,
						subscribersText: R,
						titleText: D,
						url: M
					} = Object(It.d)({
						listingName: I,
						subreddit: _,
						idCardWidget: n
					}), L = S || b || f, U = !S && _.id ? _.id : "", A = y && y.created, H = `IdCard--Subscribers--${b}--${U}`, W = `IdCard--CurrentlyViewing--${b}--${U}`, q = `IdCard--CakeDay--${b}--${U}`, z = `IdCard--CoinCoint--${b}--${U}`, V = u && !b, G = !S && !l && !d, J = !S && !b && j && !f, Q = J && !c ? i.a.createElement(se, {
						description: P,
						shouldTruncateDescription: !1,
						isCommentsPage: !!s,
						subreddit: _
					}) : i.a.createElement(K, {
						description: P,
						shouldTruncateDescription: !1,
						subreddit: _
					}), X = o && g, Z = c ? X && v && v > 0 : X, $ = T ? i.a.createElement(i.a.Fragment, null, !S && !V && A && i.a.createElement(i.a.Fragment, null, i.a.createElement(Xt, {
						className: mt.a.cakeDayBlock,
						cakeDayCreated: A,
						cakeDayTooltipId: q,
						showCommunityDirectoryBacklink: T,
						toggleTooltip: O
					})), G && i.a.createElement(Vt.a, {
						subredditId: U
					}), !S && i.a.createElement(jt, {
						subreddit: _
					}), !S && !V && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement(Lt, {
						subscribersCount: B,
						subscribersText: R,
						subscribersTooltipId: H,
						currentlyViewingCount: w,
						currentlyViewingText: F,
						currentlyViewingTooltipId: W,
						showCommunityDirectoryBacklink: T,
						toggleTooltip: O
					}))) : i.a.createElement(i.a.Fragment, null, !S && !V && i.a.createElement(Lt, {
						subscribersCount: B,
						subscribersText: R,
						subscribersTooltipId: H,
						currentlyViewingCount: w,
						currentlyViewingText: F,
						currentlyViewingTooltipId: W,
						toggleTooltip: O
					}), !S && !V && A && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement(Xt, {
						cakeDayCreated: A,
						cakeDayTooltipId: q,
						toggleTooltip: O
					})), G && i.a.createElement(Vt.a, {
						subredditId: U
					}), !S && i.a.createElement(jt, {
						subreddit: _
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(Be.a, {
						className: Object(p.a)(mt.a.ThemedWidget, t),
						onClick: b ? x : void 0,
						headerButton: i.a.createElement("div", {
							className: mt.a.headerButtonsContainer
						}, !L && _ && g && c !== De.ze.NewModule && i.a.createElement(a.a, {
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
						redditStyle: S || f,
						title: L ? void 0 : r.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: S ? void 0 : mt.a.subredditTitle
					}, L && i.a.createElement(pt, {
						bannerBackgroundImage: k
					}), S || f || s ? S ? Pt({
						titleText: D,
						snooBackground: N
					}) : i.a.createElement(zt, {
						isTargetBlank: f,
						linkUrl: S ? void 0 : M,
						subredditIcon: E,
						canEditIcon: J,
						subreddit: _,
						titleText: D,
						onOpenFilePicker: this.openIconFilePicker,
						isInNCPV3Experiment: c,
						shouldBlurSubredditIcon: m
					}) : null, Q, $, !!Z && !!v && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: mt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: mt.a.communityCoinCount,
						"data-testid": "community-coin-count"
					}, i.a.createElement(Qe.a, {
						className: mt.a.coinIcon
					}), r.fbt._("{number-community-coins} Coins", [r.fbt._param("number-community-coins", v.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: z,
						onMouseLeave: () => O(z),
						onMouseEnter: () => O(z)
					}, i.a.createElement(Y.a, {
						name: "help",
						isFilled: !0,
						className: mt.a.helpIcon
					})), i.a.createElement(ie.c, {
						tooltipId: z
					}, i.a.createElement("p", {
						className: mt.a.coinsTooltipContent
					}, r.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), (c ? J && B > 100 : J) && i.a.createElement(ce, {
						context: Ge.a.idCard,
						subredditId: U
					}), !S && V && i.a.createElement(Mt, {
						subreddit: _,
						subscribersCount: B,
						currentlyViewingCount: w
					}), this.renderButtons(), !S && l && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ct, {
						isOverlay: b,
						isSubmissionPage: f,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), J && i.a.createElement(We.a, {
						key: "icon-file-picker",
						className: mt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !S && l && this.props.adminCommunityTopicsEnabled && i.a.createElement(C, {
						key: "admin-community-topics",
						subredditId: U
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
				_ = Object(d.a)(g, [a.a.Click, a.a.Keydown]),
				y = Object(d.a)(f, [a.a.Click, a.a.Keydown]),
				v = Object(i.b)(x);
			t.c = v(e => {
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return N
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(c.a, "CloseIcon", u.a),
				b = s.a.section("ModalBody", u.a),
				h = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				g = s.a.div("ModalSmallText", u.a),
				x = s.a.div("ModalDescriptionText", u.a),
				_ = s.a.div("ModalMetaText", u.a),
				y = s.a.label("ModalFormItem", u.a),
				v = s.a.wrapped(d.a, "ModalInput", u.a),
				C = s.a.label("ModalInputLabel", u.a),
				E = s.a.footer("ModalFooter", u.a),
				O = s.a.header("ModalHeader", u.a),
				T = s.a.div("ModalTitle", u.a),
				j = s.a.div("ModalAnnotation", u.a),
				I = s.a.div("ModalMain", u.a),
				S = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(a.l, "WarningButton", u.a),
				w = s.a.wrapped(a.l, "PrimaryButton", u.a),
				F = s.a.wrapped(a.o, "CancelButton", u.a),
				P = s.a.wrapped(a.r, "RemoveButton", u.a),
				N = e => {
					let {
						className: t,
						...n
					} = e;
					return o.a.createElement(a.t, m({
						kind: a.b.Button,
						priority: a.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
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
				return v
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
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const x = c.a.wrapped(m.a, "_Dropdown", g.a),
				_ = Object(u.a)(x),
				y = c.a.button("MenuButton", g.a),
				v = c.a.wrapped(p.b, "DropdownRow", g.a),
				C = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				E = Object(o.b)(C, (e, t) => {
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
				className: Object(d.a)(e.className, {
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
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return v
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
				_ = r.a.div("FormElementError", i.a),
				y = r.a.div("FormElementSubGroup", i.a),
				v = r.a.li("FormListItem", i.a)
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
			const v = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, o = [n, _.a.inTopBar, _.a.iconContainer];
					return r ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", y({}, s, {
						className: Object(d.a)(...o)
					}), r ? i.a.createElement(h.a, {
						name: "upload",
						className: _.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: _.a.emptyPlusButton
					}), e.children)
				},
				C = e => {
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
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: s,
						src: c,
						className: Object(d.a)(n, {
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(C, y({
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
					}, i.a.createElement(v, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(v, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [_.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(_.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: _.a.flexContainer
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(o.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(i.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
					className: Object(i.a)(d.a.toggleSwitch, e.className, d.a[n], {
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
						method: s.jb.POST,
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
				d = Array.from({
					length: 8
				}).map((e, t) => `${o.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				c = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return c;
				const r = n ? d : a,
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
						...s.n(e),
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
						...s.n(e),
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
					subreddit: s.hb(t)
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
					profile: a.R(e),
					screen: a.Z(e),
					subreddit: a.hb(e)
				}),
				c = (e, t, n) => r => ({
					source: Object(o.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...d(r),
					post: a.I(r, e)
				}),
				l = (e, t, n, r) => s => {
					const o = n ? a.h(s, n) : null,
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
					const r = a.j(n);
					return r ? c(r.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...d(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...c(e, t)(n),
					...a.n(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...d(t),
					post: a.j(t),
					userSubreddit: a.rb(t)
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
				return d
			})), n.d(t, "e", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.Z(e),
					subreddit: r.hb(e),
					profile: r.R(e),
					userSubreddit: r.rb(e)
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
				d = (e, t) => n => ({
					...s(n),
					source: "modmanagement",
					action: "click",
					noun: "permission",
					setting: {
						value: e,
						values: t
					}
				}),
				c = (e, t, n) => r => ({
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
					subreddit: r.hb(t)
				}),
				i = e => t => ({
					...r.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.hb(t)
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
					subreddit: r.hb(t)
				}),
				i = e => t => ({
					...r.n(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: r.hb(t)
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
				d = (e, t) => n => ({
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
				c = () => e => ({
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
				return d
			})), n.d(t, "d", (function() {
				return c
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
					const n = i.hb(t),
						o = Object(s.t)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: a,
							achievementFlair: d,
							supporterFlair: c
						} = e,
						l = d || c;
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
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == c ? void 0 : c.type,
							supporterFlairTitle: null == c ? void 0 : c.name,
							isSupporter: o
						}
					}
				},
				d = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...i.n(e)
				}),
				c = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: i.hb(t),
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
				return d
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(d.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(r || (r = {}));
			const s = e => e.category === r.Supporter,
				i = e => e.category === r.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts"),
				i = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var a = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				u = {};
			t.a = Object(r.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.mb:
							const {
								subredditId: n, subredditAchievementFlairs: r
							} = t.payload;
							if (!(null == r ? void 0 : r.length)) return e;
							const o = r.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								a = r.filter(i.a).map(e => e.type),
								d = r.filter(i.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: o,
									achievementTypes: a,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: r
							} = t.payload;
							let s = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of r) {
								const n = o.filter(i.a),
									r = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									a = o.filter(i.b),
									d = a.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									c = l(n),
									u = l(a);
								s = {
									...s,
									[e]: {
										achievementTypes: r,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: s
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: r,
								achievementFlairType: s,
								supporterFlairType: i
							} = t.payload;
							return Object(a.updateIn)(e, [n, r], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: i
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: r,
								achievementFlairType: s,
								supporterFlairType: i
							} = t.payload;
							return Object(a.updateIn)(e, [n, r], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: i,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return Object(a.updateIn)(e, [n, r], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: r,
								isHidden: s
							} = t.payload;
							return Object(a.updateIn)(e, [n, r], e => ({
								...e,
								isHidden: s
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									r = e.powerups;
								if (!t || !r) return;
								const s = r.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								n = {
									...n,
									[t]: s.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
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
					experimentName: s.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === s.hb.Enabled),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Xb,
					experimentEligibilitySelector: o.e
				}), e => e === s.ib.Enabled),
				c = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Yb,
					experimentEligibilitySelector: o.e
				}), e => e === s.jb.Enabled),
				l = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Zb,
					experimentEligibilitySelector: o.e
				}), e => e === s.kb.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.bc,
					experimentEligibilitySelector: o.e
				}), e => e === s.mb.Enabled),
				m = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.ac,
					experimentEligibilitySelector: o.e
				}), e => e === s.lb.Enabled)
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: o.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: n
					} = t;
					var r;
					return n ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[n] : null
				},
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					var r, s;
					return n ? null === (s = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[n]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: n,
						userId: r
					} = t;
					var s, i;
					return n && r ? null === (i = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === i ? void 0 : i[r] : null
				},
				l = Object(r.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(r.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(r.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(r.a)([d, m], (e, t) => e && t ? e[t] : null),
				b = Object(r.a)([a, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: r,
						flairsByType: s
					} = e, {
						supporterTypes: i,
						achievementTypes: o,
						preferredSupporterType: a,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, i, s, c || a),
						achievementFlairs: g(r, o, s, l || d)
					}
				}),
				h = Object(r.a)([c], e => !!e && e.isHidden),
				f = Object(r.a)([a, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const r = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...r] : r
				}),
				g = (e, t, n, r) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === r
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				x = (e, t) => {
					let {
						commentId: n
					} = t;
					const r = Object(s.b)(e, {
							commentId: n
						}),
						i = null == r ? void 0 : r.subredditId,
						o = null == r ? void 0 : r.authorId;
					return !(!i || !o) && !!((e, t) => {
						let {
							subredditId: n,
							userId: r
						} = t;
						var s, i, o;
						return n && r ? null === (o = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === o ? void 0 : o[n] : null
					})(e, {
						subredditId: i,
						userId: o
					})
				}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.6b8ab93211aa23e67fb5.js.map