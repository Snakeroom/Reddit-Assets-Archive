// https://www.redditstatic.com/desktop2x/IdCard.b1b0990f71f151025cf0.js
// Retrieved at 8/31/2022, 12:40:05 PM by Reddit Dataminer v1.0.0
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
							c = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
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
						if (s !== t ? "hidden" === n.overflowY && (d("scroll"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== s) {
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

				function c(e) {
					var t = r.get(e);
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
							c = e.saveDOMNodeRef,
							d = n && a ? a * n : null;
						return i({}, o, {
							saveDOMNodeRef: c,
							style: d ? i({}, r, {
								maxHeight: d
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
		"./src/devPlatform/singleton/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				i = "devvit-debug-logging";
			var o;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(o || (o = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption"
				}(s || (s = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(r || (r = {}))
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: o,
					locale: a = s.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * r.Vb);
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
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					r = new Date(e * (n ? 1 : 1e3));
				return r.toLocaleString(t, {
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
				return v
			})), n.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return E
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return T
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return j
			})), n.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return I
			})), n.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return k
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, n, s) => {
				const r = await Object(o.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: s
					}
				});
				if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = n("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = n("./src/reddit/actions/gold/powerups.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				x = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/economics/powerups/constants.ts"),
				C = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(C.a)({
				features: {
					powerups: y.a
				}
			});
			const v = Object(r.a)(_.d),
				E = Object(r.a)(_.i),
				O = Object(r.a)(_.f),
				T = Object(r.a)(_.g),
				j = Object(r.a)(_.e),
				I = Object(r.a)(_.h),
				k = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, n) => {
								const s = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: n,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(c(), e, d),
							{
								subredditInfoById: s,
								redditorsInfoByIds: r
							} = t;
						await n(v(s)), r && await n(E(r))
					} catch (l) {
						i.c.captureException(l)
					}
				}, S = (e, t) => async (n, s) => {
					if (!e) return;
					const r = s(),
						i = Object(g.k)(r);
					if (!i || !Object(f.m)(r, {
							subredditId: e
						})) return;
					const o = !!Object(x.f)(r, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(k(e, [i.id]))
				}, w = e => async (t, n) => !!e && (Object(h.g)(n()) ? (await t(Object(l.c)(e)), !!Object(x.d)(n(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.f)(n(), {
					subredditId: e
				}))), N = e => async (t, n) => {
					var s;
					const r = n(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(b.d)(r, {
							commentIds: i
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(w(a)))) return;
					const c = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(k(a, Array.from(c)))
				}, F = (e, t) => async (n, s) => {
					if (!t) return;
					if (!(await n(w(e)))) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await n(k(e, Array.from(r)))
				}, P = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(g.k)(r);
					if (!i) return;
					const o = i.id,
						a = Object(x.i)(r, {
							subredditId: e,
							userId: o
						});
					n(D({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, B = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(g.k)(r);
					if (!i) return;
					const o = i.id,
						a = Object(x.h)(r, {
							subredditId: e,
							userId: o
						});
					n(D({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, D = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = n(),
						c = Object(g.k)(a);
					if (!c) return;
					const l = c.id;
					t(O(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), _ = Object(x.e)(a, {
						subredditId: u,
						userId: l
					});
					try {
						await d(o(), u, f, _), t(T(e))
					} catch (C) {
						t(j(e)), i.c.captureException(C), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, R = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					const c = r(),
						l = Object(g.k)(c);
					if (!l) return;
					const u = l.id,
						b = {
							subredditId: e,
							userId: u
						},
						h = [Object(x.h)(c, b), Object(x.i)(c, b)].filter(Boolean);
					n(I({
						...b,
						isHidden: t
					}));
					try {
						await d(a(), e, h, t)
					} catch (f) {
						n(I({
							...b,
							isHidden: !t
						})), i.c.captureException(f), n(Object(m.f)({
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(o.a),
				c = Object(s.a)(o.b),
				d = Object(s.a)(o.c),
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
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
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
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
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
				return g
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
			const h = Object(r.a)(o.x),
				f = Object(r.a)(o.y),
				x = Object(r.a)(o.w),
				g = (e, t, n) => async (s, r, i) => {
					const o = Object(p.A)(r(), {
						subredditName: e
					});
					if (o) return C(o.id, t, n)(s, r, i)
				}, _ = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), C = (e, t, n) => async (r, o, p) => {
					const g = await Object(l.e)(t);
					r(h());
					const C = o();
					try {
						await Object(i.g)("communityIcon", g, e)(r, o, p)
					} catch (v) {
						return Object(b.a)(Object(d.c)(C, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: _()
						})), void r(x())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(C, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: _()
					})), void r(x());
					await Object(i.k)(e, {
						communityIcon: y
					}, c.b.idCard, n)(r, o, p), r(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(f())
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
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
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
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
				return N
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				f = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/GqlTopLevelField.ts"),
				_ = n("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== _.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(f.a)(a.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== g.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var y = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/subscriptions.ts"),
				T = n("./src/reddit/selectors/user.ts");
			const j = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(d.c),
				k = Object(o.a)(d.b),
				S = Object(o.a)(d.a),
				w = Object(o.a)(d.h),
				N = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(k());
					const i = await Object(h.a)(s());
					if (i.ok) {
						const t = C(i.body.data);
						e(I(t))
					} else e(S({
						error: i.error
					}))
				}),
				F = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				P = (e, t, n) => async (o, d, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(E.G)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(v.n)(d(), e.name),
						name: `${r.nc}${e.name}`,
						type: e.type
					});
					if (!Object(T.Q)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.openRegisterModal)());
					const f = Object(T.k)(d());
					if (f) {
						const t = b.length,
							n = e.length;
						if (b = b.filter(e => !F(f, e)), (e = e.filter(e => !F(f, e))).length !== n || b.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, y.b.Error)))
						}
						if (!e.length && !b.length) return
					}
					o(w({
						identifiers: b,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(O.b)(d()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const x = await Object(h.c)(p(), {
						subredditNames: b.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (x.ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : s.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [s.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							r = s.fbt._("Successfully followed {communityname}", [s.fbt._param("communityname", n)], {
								hk: "23Snyg"
							}),
							a = s.fbt._("Successfully unfollowed {communityname}", [s.fbt._param("communityname", n)], {
								hk: "jfC0S"
							}),
							c = s.fbt._("Successfully joined {communityname}", [s.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							d = s.fbt._("Successfully left {communityname}", [s.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? r : a : t ? c : d
						}))
					} else {
						o(w({
							identifiers: b,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(O.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(r, y.b.Error)))
					}
					return x.ok
				}, B = Object(o.a)(d.f), D = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n(),
						o = Object(E.N)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = i.subscriptions.favoriteSubredditOrder || [],
						d = i.subscriptions.favoriteProfileOrder || [],
						m = c.indexOf(e.id),
						p = d.indexOf(e.id),
						b = -1 === m && -1 === p,
						f = i.subreddits.models,
						x = i.profiles.models,
						g = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(E.hb)(n(), {
							identifier: g
						});
					(_() || (await t(P([g], !0)), _())) && (t(B({
						makeFavorite: b,
						identifier: e,
						subredditModels: f,
						profileModels: x
					})), (await Object(h.b)(r(), a, b)).ok || (t(B({
						makeFavorite: !b,
						identifier: e,
						subredditModels: f,
						profileModels: x
					})), t(Object(l.f)({
						text: j(),
						kind: y.b.Error
					}))))
				}, R = Object(o.a)(d.d), M = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: j(),
								kind: y.b.Error
							}))
						},
						c = o[e];
					if (!c) return void a();
					const d = !c.isFavorited;
					t(R({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.mb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, d)).ok || (t(R({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, L = Object(o.a)(d.e), A = e => async (t, n, i) => {
					let {
						apiContext: o
					} = i;
					const a = n(),
						c = a.multireddits.models;
					if (!Object(T.Q)(a)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : s.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						u = c[e];
					if (!u) return void d();
					const h = !u.isFollowed;
					t(L({
						follow: h,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.mb.POST,
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
						multiredditsModelsState: c
					})), d(h))
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
				return F
			})), n.d(t, "a", (function() {
				return P
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				x = n("./src/reddit/models/Badge/index.ts");
			var g = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				_ = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				C = n.n(_);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E,
				T = 24;
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
						className: Object(c.a)(C.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${v}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || T;
					return r.a.createElement(s.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: C.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: C.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(f.a, {
						className: C.a.addCustom
					})), r.a.createElement(g, {
						className: C.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(x.d)(n, n, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return r.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, r.a.createElement("div", {
							className: Object(c.a)(C.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: C.a.image,
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
							className: C.a.badgeHovercard,
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
			const I = [],
				k = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var r;
						return (null === (r = e.users.appliedBadges[s]) || void 0 === r ? void 0 : r[n]) || I
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: n
						} = t;
						var s;
						const r = e.user.account;
						return r && (null === (s = e.users.appliedBadges[r.id]) || void 0 === s ? void 0 : s[n]) || I
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
					...s
				} = e, i = t.map(e => n[e]).filter(Boolean);
				return r.a.createElement(j, y({
					badges: i
				}, s))
			}
			const F = Object(i.b)(k, w)(N),
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
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
				return r
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
				return x
			})), n.d(t, "j", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = 500,
				i = 100,
				o = 5e3,
				a = 0,
				c = 1440,
				d = 36600,
				l = 1e9,
				u = {
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
				m = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
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
				b = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					mods: s.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: s.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				f = {
					low: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				x = {
					low: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				g = {
					nullValue: s.fbt._("none (recommended)", null, {
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
		"./src/reddit/components/CommunityTopics/AdminCommunityTopics/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			t.a = Object(s.a)({
				getComponent: () => Object(r.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			})
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
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/IconTooltip/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Flair/index.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/CommunityType/index.m.less"),
				x = n.n(f);
			const g = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", x.a),
				_ = Object(c.c)({
					restrictions: h.p
				}),
				C = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: x.a.nsfwText
				}, s.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				y = () => i.a.createElement(g, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: x.a.quarantinedIcon
				}), i.a.createElement("span", null, s.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				v = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(C, null)), i.a.createElement(g, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(y, null)),
				E = Object(o.b)(_);
			t.a = E(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: r = b.e.Post,
					textClassName: o,
					subreddit: a
				} = e;
				switch (a.type) {
					case p.f.Restricted:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(x.a.restrictedIcon, n)
							}),
							text: s.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: o,
							description: Object(b.g)(r),
							subreddit: a
						});
					case p.f.Private:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(x.a.privateIcon, n)
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
					case p.f.EmployeesOnly:
						return i.a.createElement(v, {
							className: t,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(d.a)(x.a.employeesIcon, n)
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
						return i.a.createElement(i.a.Fragment, null, a.isQuarantined && i.a.createElement(y, null), a.isNSFW && i.a.createElement(C, null))
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
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(h);
			const x = () => ({
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
			class g extends i.a.Component {
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
					}) : x()[e])
				}
			}
			t.default = Object(o.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(g))
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
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				C = g.a.wrapped(l.c, "StyledTooltip", x.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(o.b)(y, (e, t) => {
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
					onShowTooltip: r,
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
					onMouseEnter: r,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: _,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: _,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatePostButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(p.c)({
					isLoggedIn: m.Q
				}),
				x = Object(o.b)(f, e => ({
					openLoginModal: () => {
						e(Object(c.k)({
							actionSource: c.a.Post
						})), e(Object(a.openRegisterModal)())
					}
				}));
			t.a = x(Object(b.c)(e => {
				let {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: r,
					openLoginModal: o,
					sendEvent: a,
					subreddit: c,
					...m
				} = e;
				const p = `${Object(l.a)(c)||"/"}submit`;
				return i.a.createElement(d.n, h({}, m, {
					onClick: e => {
						a(Object(u.x)({
							actionInfoType: "id_card",
							subredditId: null == c ? void 0 : c.id
						})), n || (o(), e.preventDefault())
					},
					to: p
				}), t ? s.fbt._("Draft Post", null, {
					hk: "17BbM6"
				}) : s.fbt._("Create Post", null, {
					hk: "4k3RsQ"
				}))
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
					userId: r,
					flairData: p,
					username: h,
					userHasBadge: f,
					usernameClassName: x
				} = e;
				const g = Object(o.e)(e => Object(m.k)(e));
				return g ? i.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, t),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: g.accountIcon,
					isNSFW: g.isNSFW,
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
					className: Object(s.a)(b.a.username, x)
				}, `${h||"username"}`), i.a.createElement(c.a, {
					className: b.a.achievementFlair,
					subredditId: n,
					userId: r
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
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				i = n.n(r),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...s
				} = e;
				return c.a.createElement("div", f({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, s))
			}, "EmojiDisplay", h.a);
			var g = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/Flair/index.m.less"),
				k = n.n(I);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(_.a)(g.b),
				N = p.a.div("FlairWrapper", k.a),
				F = p.a.wrapped(d.a, "CloseButton", k.a),
				P = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...s
					} = e;
					const r = n;
					return c.a.createElement(x, S({
						style: {
							...B(!!t, r) || {}
						}
					}, s))
				}), "FlairEmojiDisplay", k.a),
				B = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[y.p]: s,
						[y.s]: t ? "1" : ""
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
							[k.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(j.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(O.a, {
						className: k.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(j.a)(this.props).flair
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
					const s = e.richtext.map((s, r) => {
						if (s.e === T.c.Emoji) {
							const i = s;
							return t += i.a, n = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: r,
								title: i.a
							})
						} {
							const e = s;
							return t += e.t, c.a.createElement("span", {
								key: r
							}, e.t)
						}
					});
					let r;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (r = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const i = c.a.createElement(N, {
						className: Object(u.a)(e.className, {
							[k.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...r,
							backgroundColor: e.backgroundColor || Object(j.a)(e).flair,
							color: `${U(e)}`
						}
					}, s, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(O.a, {
						className: k.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(j.a)(e).flair
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
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(j.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(j.a)(e).post, C.a.black, C.a.white) : e.textColor === T.e.Dark ? C.a.black : C.a.white,
				H = p.a.wrapped(L, "TextFlair", k.a),
				q = p.a.wrapped(A, "RichTextFlair", k.a),
				V = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.i)(.1, Object(j.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				W = p.a.wrapped(e => {
					const t = V(e),
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
				}, "MetaFlair", k.a);

			function z(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: r,
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
					[k.a.flairVariant]: i,
					[k.a.small]: i && !e.large,
					[k.a.large]: i && e.large
				}, t);
				switch (r.type) {
					case T.f.Richtext:
						return n || !r.richtext ? null : c.a.createElement(q, {
							backgroundColor: r.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: r.richtext,
							subredditName: m,
							textColor: r.textColor,
							to: h
						});
					case T.f.Text:
						return n || !r.text ? null : c.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case T.f.Meta:
						return c.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case T.f.Nsfw:
					case T.f.Spoiler:
						return c.a.createElement(W, {
							className: t,
							text: r.text,
							type: r.type
						});
					case T.f.Quarantined:
						return null;
					case T.f.Oc:
						return c.a.createElement(H, {
							backgroundColor: C.a.alienblue,
							text: r.text,
							textColor: T.e.Light,
							tooltip: s.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return r.text ? c.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
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
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var s;
					const a = Object(o.a)(),
						c = {
							...n,
							locale: null !== (s = n.locale) && void 0 !== s ? s : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(i.d)(t, c))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var s;
					const i = Object(o.a)(),
						a = {
							...n,
							locale: null !== (s = n.locale) && void 0 !== s ? s : i
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(t, a))
				},
				l = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = n("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const s = Object(o.a)(),
						i = null != n ? n : s;
					return r.a.createElement(r.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const n = e * u.Vb;
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
					s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const r = Object(b.e)(e, t),
					i = new Date(e * u.Vb);
				let o;
				if (r === b.a.Live || n) return p.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === b.a.Future ? o = Object(b.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? h(i, s) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, s) : r === b.a.Past && (o = Object(b.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : h(i, s)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,s)}`
			}
			var x = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: s,
					locale: i
				} = e;
				const a = Object(o.a)(),
					c = null != i ? i : a;
				return r.a.createElement(r.a.Fragment, null, f(t, n, s, c))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const a = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/CakeDayBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CakeDay: "_1sDtEhccxFpHDn2RUhxmSq",
				cakeDay: "_1sDtEhccxFpHDn2RUhxmSq",
				label: "_1d4NeAxWOiy0JPz7aXRI64",
				cakeIcon: "_3tMM22A0evCEmrIk-8z4zO"
			}
		},
		"./src/reddit/components/IdCard/CakeDayBlock/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				a = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/IdCard/CakeDayBlock/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					cakeDayCreated: t,
					cakeDayTooltipId: n,
					className: r,
					showCommunityDirectoryBacklink: d,
					toggleTooltip: m
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(l.a.CakeDayContainer, r),
					onMouseEnter: () => m(n),
					onMouseLeave: () => m(n)
				}, i.a.createElement("div", {
					className: l.a.CakeDay,
					id: n
				}, i.a.createElement(c.a, {
					name: "cake",
					className: l.a.cakeIcon
				}), i.a.createElement("span", {
					className: d ? l.a.label : ""
				}, u._("Created {cakeday}", [u._param("cakeday", i.a.createElement(o.a, {
					seconds: t,
					showDay: !0,
					shortMonths: !0,
					useUtc: !0
				}))], {
					hk: "8Y46b"
				}))), i.a.createElement(a.c, {
					caretOnTop: !0,
					tooltipId: n
				}, i.a.createElement(o.d, {
					seconds: t
				})))
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
		"./src/reddit/components/IdCard/CommunityOptions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				p = n("./src/reddit/helpers/trackers/idCard.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				x = n.n(f);
			const g = d.a.wrapped(u.t, "TertiaryButton", x.a),
				_ = Object(a.c)({
					stylesDisabledForSubreddit: h.qb,
					stylesDisabledGlobally: h.rb
				}),
				C = Object(o.b)(_, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(l.K)(t, n))
					}
				}));
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(p.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						className: x.a.content
					}, i.a.createElement("div", {
						className: Object(c.a)(x.a.stylesToggle, {
							[x.a.disabled]: n
						}),
						title: n ? s.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: x.a.stylesToggleLabel
					}, i.a.createElement(b.a, {
						name: t ? "hide" : "show",
						className: x.a.visibilityIcon
					}), s.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), i.a.createElement(m.a, {
						className: x.a.ToggleSwitch,
						disabled: n,
						on: !t,
						onToggle: this.onToggleStylesSwitch
					}))) : null;
					return i.a.createElement("div", {
						className: x.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(g, {
						kind: u.b.Button,
						priority: u.c.Plain,
						isFullWidth: !0,
						className: Object(c.a)(x.a.expandButton, {
							[x.a.redditStyle]: e
						}),
						onClick: this.onExpandButtonClick
					}, s.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(b.a, {
						name: r ? "caret_up" : "caret_down"
					})), o)
				}
			}
			t.a = C(y)
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
		"./src/reddit/components/IdCard/CommunityTypeBlock/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/CommunityType/index.tsx"),
				o = n("./src/reddit/components/IdCard/CommunityTypeBlock/index.m.less"),
				a = n.n(o);
			const c = e => {
				let {
					subreddit: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.CommunityTypeContainer
				}, r.a.createElement(i.a, {
					className: a.a.communityType,
					iconClassName: a.a.communityTypeIcon,
					subreddit: t,
					textClassName: a.a.communityTypeText
				}))
			}
		},
		"./src/reddit/components/IdCard/CreatePollButton/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const i = Object(s.a)({
				getComponent: () => Object(r.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				b = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				h = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				f = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				O = n.n(E);
			const T = 6,
				j = `${f.a}_description`,
				I = Object(d.c)({
					apiPending: v.W,
					unsavedChangesModalIsOpen: Object(y.b)(j)
				}),
				k = Object(c.b)(I, (e, t) => {
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
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(_.a)
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
						this.props.sendEvent(Object(_.d)(e, t))
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
					const e = this.props.apiPending ? i.a.createElement(g.a, {
						className: O.a.loadingIcon,
						sizePx: T
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
						value: this.state.description
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
						onBlur: this.handleOnBlur
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
			t.a = k(Object(x.c)(S))
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
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(d);
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
					}, "...", r.a.createElement(c.r, {
						className: l.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, u._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			t.a = p
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/placeholder.m.less"),
				a = n.n(o);
			t.a = r.a.memo(e => r.a.createElement("div", {
				className: Object(i.a)(a.a.container)
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.banner)
			}), r.a.createElement("div", {
				className: a.a.title
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.icon)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.name)
			})), r.a.createElement("div", {
				className: a.a.counts
			}, r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			})), r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			}))), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.one)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.two)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.three)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.four)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.subscribe)
			})))
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
		"./src/reddit/components/IdCard/StatsBlock/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				d = n("./src/reddit/components/IdCard/StatsBlock/index.m.less"),
				l = n.n(d);
			const u = e => {
					let {
						subreddit: t,
						subscribersCount: n,
						currentlyViewingCount: r
					} = e;
					const a = Object(c.a)(t.name);
					return i.a.createElement("span", {
						className: l.a.compactStats
					}, a.map((e, t) => {
						let {
							color: n,
							image: r
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? s.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: l.a.memberIcon,
							key: r,
							src: r,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: l.a.metaText
					}, s.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [s.fbt._plural(n, "number of members", Object(o.b)(n))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: l.a.metaText
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(o.b)(r))], {
						hk: "cxviW"
					})))
				},
				m = e => {
					let {
						subscribersCount: t,
						subscribersText: n,
						subscribersTooltipId: s,
						currentlyViewingCount: r,
						currentlyViewingText: c,
						currentlyViewingTooltipId: d,
						showCommunityDirectoryBacklink: u,
						toggleTooltip: m
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: l.a.stats
					}, i.a.createElement("div", {
						onMouseEnter: () => m(s),
						onMouseLeave: () => m(s)
					}, i.a.createElement("div", {
						className: l.a.count
					}, Object(o.b)(t)), i.a.createElement("p", {
						className: u ? l.a.metaTextBacklinks : l.a.metaText,
						id: s
					}, n), i.a.createElement(a.c, {
						caretOnTop: !0,
						text: `${Object(o.b)(t,{displayFull:!0})} ${n}`,
						tooltipId: s
					})), i.a.createElement("div", {
						onMouseEnter: () => m(d),
						onMouseLeave: () => m(d)
					}, i.a.createElement("div", {
						className: u ? l.a.onlineCount : l.a.count
					}, Object(o.b)(r)), i.a.createElement("p", {
						className: u ? l.a.metaTextBacklinks : l.a.metaText,
						id: d
					}, c), i.a.createElement(a.c, {
						caretOnTop: !0,
						text: `${Object(o.b)(r,{displayFull:!0})} ${c}`,
						tooltipId: d
					})), i.a.createElement("div", null)))
				}
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				l = n("./src/reddit/hooks/useClickSourceData.ts"),
				u = n("./src/reddit/components/IdCard/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				const t = Object(r.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: n,
						isInNCPV3Experiment: u,
						isTargetBlank: b,
						largeSubredditIcon: h,
						linkUrl: f,
						shouldBlurSubredditIcon: x,
						subredditIcon: g,
						titleText: _,
						primaryColor: C,
						subreddit: y,
						onOpenFilePicker: v
					} = e,
					E = g.url ? p._("Update icon", null, {
						hk: "GXdPy"
					}) : p._("Add icon", null, {
						hk: "31odkm"
					}),
					O = Object(l.a)();
				return i.a.createElement("div", {
					className: Object(a.a)(m.a.Title, e.className)
				}, n && y && !u ? i.a.createElement(d.a, {
					className: h ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: g.url,
					iconUrl: g.url,
					primaryColor: C,
					subreddit: y,
					inTopBar: !1
				}) : i.a.createElement(c.b, {
					altText: g.altText,
					className: h ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: g.url,
					iconUrl: g.url,
					primaryColor: C,
					shouldBlurSubredditIcon: x
				}), i.a.createElement("div", {
					className: m.a.titleTextContainer
				}, f ? i.a.createElement(o.a, {
					className: m.a.TitleLink,
					key: f,
					to: {
						pathname: Object(s.c)(f).pathname,
						state: O,
						search: Object(s.c)(f).search
					},
					onClick: t,
					target: b ? "_blank" : void 0,
					rel: b ? "noopener noreferrer" : void 0
				}, i.a.createElement("span", {
					className: m.a.TitleText,
					title: _
				}, _)) : i.a.createElement("span", {
					className: m.a.TitleText,
					key: _
				}, _), n && y && v && !u && i.a.createElement("div", {
					className: m.a.editIconText,
					onClick: v
				}, E)))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
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
					const f = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, _;
					return l(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = o.c[o.b.Popular]) : p && (n = h && h.description, i = u(""), a = b.displayText, m = b.url, _ = h && h.subscribersCount, g = h && h.currentlyViewingCount), {
						snooBackground: i,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: _,
						subscribersText: f,
						currentlyViewingText: x,
						currentlyViewingCount: g,
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				u = n("./src/reddit/models/ApiRequestState/index.ts"),
				m = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				h = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/actions/tooltip.ts"),
				_ = n("./src/lib/loadableAction/index.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/actions/subscription/index.ts"),
				v = n("./src/reddit/components/CommunityTopics/AdminCommunityTopics/loader.tsx"),
				E = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				O = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				T = n("./src/reddit/components/CreatePostButton/index.tsx"),
				j = n("./src/reddit/components/IdCard/CreatePollButton/Loader.tsx"),
				I = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				k = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/async.tsx"),
				w = n("./src/reddit/components/OverflowMenu/index.tsx"),
				N = n("./src/reddit/components/SidebarFlairSettings/index.tsx"),
				F = n("./src/reddit/components/SubscribeButton/index.tsx"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				B = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				D = n("./src/reddit/constants/componentSizes.ts"),
				R = n("./src/reddit/constants/experiments.ts"),
				M = n("./src/reddit/constants/listings.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				A = n("./src/reddit/constants/page.ts"),
				U = n("./src/reddit/constants/posts.ts"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/controls/Dropdown/Row.tsx"),
				V = n("./src/reddit/controls/ImageInput/index.tsx"),
				W = n("./src/reddit/featureFlags/index.ts"),
				z = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				G = n("./src/reddit/helpers/localStorage/index.ts"),
				K = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Q = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				J = n("./src/reddit/helpers/trackers/lightbox.ts"),
				X = n("./src/reddit/helpers/trackers/modHub.ts"),
				Y = n("./src/reddit/icons/fonts/index.tsx"),
				Z = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				$ = n("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				ee = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				te = n("./src/reddit/selectors/category.ts"),
				ne = n("./src/reddit/selectors/experiments/communityDirectoryBacklink.ts"),
				se = n("./src/reddit/selectors/experiments/createPollsPaintedDoor.ts"),
				re = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ie = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				oe = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ce = n("./src/reddit/selectors/structuredStyles.ts"),
				de = n("./src/reddit/selectors/subreddit.ts"),
				le = n("./src/reddit/selectors/subscriptions.ts"),
				ue = n("./src/reddit/selectors/tooltip.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/selectors/userFlair.ts"),
				be = n("./src/reddit/selectors/widgets.ts"),
				he = n("./src/reddit/components/IdCard/Banner.tsx"),
				fe = n("./src/reddit/components/IdCard/CommunityOptions/index.tsx"),
				xe = n("./src/reddit/components/IdCard/CommunityTypeBlock/index.tsx"),
				ge = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				_e = n("./src/reddit/components/IdCard/helpers.ts"),
				Ce = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				ye = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				ve = n("./src/reddit/components/IdCard/StatsBlock/index.tsx"),
				Ee = n("./src/reddit/components/IdCard/Title.tsx"),
				Oe = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				Te = n("./src/reddit/components/IdCard/CakeDayBlock/index.tsx"),
				je = n("./src/devPlatform/singleton/constants.ts"),
				Ie = n("./src/reddit/components/IdCard/index.m.less"),
				ke = n.n(Ie);
			const Se = Object(b.a)({
					resolved: {},
					chunkName: () => "DevPlatform",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~AdminPanel~DevPlatform"), n.e("DevPlatform")]).then(n.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
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
				}),
				we = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Ne = () => Object(p.c)({
					activeTooltipId: ue.a,
					postCategories: (e, t) => Object(te.n)(e, t.postId),
					favoriteSubredditsIds: le.a,
					idCardWidget: (e, t) => Object(be.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(de.e)(e, ee.e.Post),
					isGQLLoggedIn: me.P,
					isLoggedIn: me.Q,
					isNsfwBlurSubreddit: oe.e,
					moderatorPermissions: (e, t) => {
						const n = Object(de.G)(e, t.listingName);
						if (n) return Object(ae.n)(e, {
							subredditId: n
						})
					},
					shouldObserveSubscribeButton: e => Object(re.a)(e) || Object(re.c)(e) || Object(re.d)(e),
					showContributorRequestFlow: e => Object(de.u)(e, ee.e.Post),
					showCreatePollButton: e => Object(se.a)(e) && !Object(G.g)(),
					shouldShowFlairPreview: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(de.G)(e, n);
						return Object(pe.c)(e, {
							subredditId: s
						})
					},
					subreddit: (e, t) => Object(de.A)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(de.x)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(de.D)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(ce.p)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: W.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(de.A)(e, {
							subredditName: n
						});
						return !!s && Object(m.a)(e, {
							subredditId: s.id
						})
					},
					isInNCPV3Experiment: ie.a,
					showCommunityDirectoryBacklink: ne.a
				}),
				Fe = (e, t) => ({
					addToMultiClicked: () => {
						e(Object(_.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(C.h)(L.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(d.b)(t)),
					toggleFavorite: t => e(Object(y.c)({
						id: t,
						type: U.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(g.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(l.b)(t.listingName, n, s))
					}
				}),
				Pe = (e, t, n) => ({
					...e,
					...t,
					...n,
					isEligibleForCommunityAwards: Object(z.b)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}),
				Be = Object(a.b)(Ne, Fe, Pe),
				De = .25,
				Re = .001;
			class Me extends o.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.subscribeButtonRef = null, this.setSubscribeButtonRef = e => {
						this.props.shouldObserveSubscribeButton && (this.subscribeButtonObserver || (this.subscribeButtonObserver = new IntersectionObserver(e => {
							e.forEach(e => {
								const {
									intersectionRatio: t
								} = e;
								t >= De && Object(_e.c)(!0), t <= Re && Object(_e.c)(!1)
							})
						}, {
							rootMargin: `${-(D.f+D.m)}px 0px 0px 0px`,
							threshold: [De, Re]
						})), this.subscribeButtonRef && this.subscribeButtonObserver.unobserve(this.subscribeButtonRef), e && (this.subscribeButtonRef = e, this.subscribeButtonObserver.observe(this.subscribeButtonRef)))
					}, this.onClickModTools = () => this.props.sendEvent(Object(X.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(J.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== A.c ? t : M.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(u.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(Q.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, i = Object(x.a)(this.getListingNameToUse());
						return !i && s ? o.a.createElement(E.default, {
							eventSource: ee.b.IdCard
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(T.a, {
							className: ke.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !i && n && o.a.createElement(j.a, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: i,
							subreddit: a,
							subredditAboutInfo: c,
							shouldShowFlairPreview: d,
							showCommunityDirectoryBacklink: l
						} = this.props, u = this.getListingNameToUse(), m = Object(x.a)(u), p = n && a && !r, b = e && !m && !p, h = t && !p && !i && !r && !(c && c.userIsBanned), f = t && !i && !r && !a, g = l && (b || h || f || p);
						return o.a.createElement(o.a.Fragment, null, g && o.a.createElement("hr", {
							className: ke.a.HorizontalLine
						}), o.a.createElement("div", {
							className: ke.a.Buttons
						}, b && o.a.createElement("div", {
							ref: this.setSubscribeButtonRef
						}, o.a.createElement(F.a, {
							className: ke.a.SubscribeButton,
							getEventFactory: e => Object(J.a)(e ? "unsubscribe" : "subscribe"),
							id: `subscribe-button-${a.id}`,
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation(),
							small: !0,
							isFullWidth: !0
						})), h && this.renderCreatePostButtons(), f && o.a.createElement(O.a, {
							className: ke.a.CreateCommunityButton,
							eventSource: "id_card"
						}), p && o.a.createElement(H.q, {
							className: ke.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, s.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !r && d && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
							className: ke.a.HorizontalLine
						}), o.a.createElement(N.a, {
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
						isEligibleForCommunityAwards: i,
						isGQLLoggedIn: a,
						isInNCPV3Experiment: d,
						isLoggedIn: l,
						isMinimal: u,
						isNsfwBlurSubreddit: m,
						isOverlay: p,
						isSubmissionPage: b,
						moderatorPermissions: f,
						onContainerClick: g,
						subreddit: _,
						subredditAboutInfo: C,
						subredditCoins: y,
						subredditIcon: E,
						toggleTooltip: O,
						showCommunityDirectoryBacklink: T,
						subredditInlineEditingEnabled: j
					} = this.props, N = this.getListingNameToUse(), F = Object(x.a)(N);
					if (!F && !n) return o.a.createElement(Ce.a, null);
					const {
						bannerBackgroundImage: P,
						currentlyViewingCount: D,
						currentlyViewingText: M,
						description: L,
						snooBackground: A,
						subscribersCount: U,
						subscribersText: H,
						titleText: W,
						url: z
					} = Object(_e.d)({
						listingName: N,
						subreddit: _,
						idCardWidget: n
					}), G = F || p || b, Q = !F && _.id ? _.id : "", J = C && C.created, X = `IdCard--Subscribers--${p}--${Q}`, ee = `IdCard--CurrentlyViewing--${p}--${Q}`, te = `IdCard--CakeDay--${p}--${Q}`, ne = `IdCard--CoinCoint--${p}--${Q}`, se = u && !p, re = !F && !l && !a, ie = !F && !p && j && !b, oe = ie && !d ? o.a.createElement(I.a, {
						description: L,
						shouldTruncateDescription: !1,
						isCommentsPage: !!r,
						subreddit: _
					}) : o.a.createElement(ge.a, {
						description: L,
						shouldTruncateDescription: !1,
						subreddit: _
					}), ae = i && f, ce = d ? ae && y && y > 0 : ae, de = T ? o.a.createElement(o.a.Fragment, null, !F && !se && J && o.a.createElement(o.a.Fragment, null, o.a.createElement(Te.a, {
						className: ke.a.cakeDayBlock,
						cakeDayCreated: J,
						cakeDayTooltipId: te,
						showCommunityDirectoryBacklink: T,
						toggleTooltip: O
					})), re && o.a.createElement(Oe.a, {
						subredditId: Q
					}), !F && o.a.createElement(xe.a, {
						subreddit: _
					}), !F && !se && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
						className: ke.a.HorizontalLine
					}), o.a.createElement(ve.a, {
						subscribersCount: U,
						subscribersText: H,
						subscribersTooltipId: X,
						currentlyViewingCount: D,
						currentlyViewingText: M,
						currentlyViewingTooltipId: ee,
						showCommunityDirectoryBacklink: T,
						toggleTooltip: O
					}))) : o.a.createElement(o.a.Fragment, null, !F && !se && o.a.createElement(ve.a, {
						subscribersCount: U,
						subscribersText: H,
						subscribersTooltipId: X,
						currentlyViewingCount: D,
						currentlyViewingText: M,
						currentlyViewingTooltipId: ee,
						toggleTooltip: O
					}), !F && !se && J && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
						className: ke.a.HorizontalLine
					}), o.a.createElement(Te.a, {
						cakeDayCreated: J,
						cakeDayTooltipId: te,
						toggleTooltip: O
					})), re && o.a.createElement(Oe.a, {
						subredditId: Q
					}), !F && o.a.createElement(xe.a, {
						subreddit: _
					}));
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(B.a, {
						className: Object(h.a)(ke.a.ThemedWidget, t),
						onClick: p ? g : void 0,
						headerButton: o.a.createElement("div", {
							className: ke.a.headerButtonsContainer
						}, !G && _ && f && d !== R.Te.NewModule && o.a.createElement(c.a, {
							className: ke.a.ModToolsLink,
							to: f.posts ? `${_.url}about/modqueue` : `${_.url}about/`,
							onClick: this.onClickModTools
						}, o.a.createElement($.a, {
							className: ke.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), l && _ && o.a.createElement(w.b, {
							className: ke.a.overflowButton,
							dropdownId: we,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !_.isQuarantined && o.a.createElement(q.b, {
							className: ke.a.dropdownRow,
							displayText: s.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), o.a.createElement(q.b, {
							className: ke.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? s.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : s.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}), o.a.createElement(Se, {
							contextType: je.a.SUBREDDIT,
							contextData: _
						}))),
						redditStyle: F || b,
						title: G ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: F ? void 0 : ke.a.subredditTitle
					}, G && o.a.createElement(he.a, {
						bannerBackgroundImage: P
					}), F || b || r ? F ? Object(ye.a)({
						titleText: W,
						snooBackground: A
					}) : o.a.createElement(Ee.a, {
						isTargetBlank: b,
						linkUrl: F ? void 0 : z,
						subredditIcon: E,
						canEditIcon: ie,
						subreddit: _,
						titleText: W,
						onOpenFilePicker: this.openIconFilePicker,
						isInNCPV3Experiment: d,
						shouldBlurSubredditIcon: m
					}) : null, oe, de, !!ce && !!y && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
						className: ke.a.HorizontalLine
					}), o.a.createElement("div", {
						className: ke.a.communityCoinCount,
						"data-testid": "community-coin-count"
					}, o.a.createElement(Z.a, {
						className: ke.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", y.toLocaleString())], {
						hk: "3FSFdY"
					}), o.a.createElement("span", {
						id: ne,
						onMouseLeave: () => O(ne),
						onMouseEnter: () => O(ne)
					}, o.a.createElement(Y.a, {
						name: "help",
						isFilled: !0,
						className: ke.a.helpIcon
					})), o.a.createElement(k.c, {
						tooltipId: ne
					}, o.a.createElement("p", {
						className: ke.a.coinsTooltipContent
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), (d ? ie && U > 100 : ie) && o.a.createElement(S.a, {
						context: K.a.idCard,
						subredditId: Q
					}), !F && se && o.a.createElement(ve.b, {
						subreddit: _,
						subscribersCount: U,
						currentlyViewingCount: D
					}), this.renderButtons(), !F && l && o.a.createElement(o.a.Fragment, null, o.a.createElement(fe.a, {
						isOverlay: p,
						isSubmissionPage: b,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), ie && o.a.createElement(V.a, {
						key: "icon-file-picker",
						className: ke.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !F && l && this.props.adminCommunityTopicsEnabled && o.a.createElement(v.a, {
						key: "admin-community-topics",
						subredditId: Q
					})))
				}
			}
			t.default = Object(P.c)(Be(Object(f.a)(Me)))
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
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: `${t.width}px ${t.height}px`,
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.Title, a.a.TitleShifted)
				}, r.a.createElement(c, {
					snooBackground: n
				}), r.a.createElement("div", {
					className: a.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: a.a.TitleText
				}, t)))
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
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => r.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(o.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				_ = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				C = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				y = Object(i.b)(g);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(_, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(C, p({}, e, {
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
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				c = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				d = n.n(c);
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => r.a.createElement("div", {
					className: d.a.container
				}, r.a.createElement(a.a, null)),
				getComponent: () => Object(o.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
			});
			t.a = l
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
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				f = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(x);
			const _ = d.a.wrapped(m.a, "_Dropdown", g.a),
				C = Object(u.a)(_),
				y = d.a.button("MenuButton", g.a),
				v = d.a.wrapped(p.b, "DropdownRow", g.a),
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
				T = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: T(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
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
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(i.a)(e, t);
				class s extends r.a.PureComponent {
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
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
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
		"./src/reddit/components/SidebarFlairSettings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/authorFlair.ts"),
				d = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/User/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				_ = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				C = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				y = n.n(C);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = a.a.div("FlairSettingsContainer", y.a), O = a.a.div("FlairPreviewWrapper", y.a), T = a.a.div("PreviewTitle", y.a), j = a.a.wrapped(u.r, "TertiaryButton", y.a), I = a.a.wrapped(j, "IconButton", y.a), k = Object(o.c)({
				currentUser: x.k,
				isAchievementFlairModalEnabled: (e, t) => Object(f.m)(e, {
					subredditId: t.subredditId
				}),
				userFlairData: g.d,
				userHasBadge: (e, t) => {
					const n = e.user.account;
					if (n) {
						return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
					}
					return !1
				}
			}), S = Object(i.b)(k), w = e => r.a.createElement(I, {
				onClick: e.onClick
			}, r.a.createElement(b.a, {
				name: "edit"
			})), N = e => {
				let {
					subredditId: t,
					userId: n,
					username: s,
					userFlairData: i,
					userHasBadge: o
				} = e;
				return r.a.createElement(O, null, r.a.createElement(_.a, {
					subredditId: t,
					userId: n,
					username: s,
					flairData: i,
					userHasBadge: o,
					usernameClassName: y.a.previewUsername
				}))
			};
			t.a = S(e => {
				let {
					currentUser: t,
					subredditId: n,
					userFlairData: o,
					userHasBadge: a,
					isAchievementFlairModalEnabled: u
				} = e;
				const b = Object(i.d)(),
					f = Object(p.a)();
				Object(s.useEffect)(() => {
					u && b(Object(d.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(n))
				}, [b, n, u]);
				return t && (o || u) ? r.a.createElement(E, null, r.a.createElement(T, null, v._("user flair preview", null, {
					hk: "3aBytK"
				}), r.a.createElement(w, {
					onClick: () => {
						if (u) b(Object(l.d)());
						else {
							(e => b(Object(c.b)({
								username: e,
								subredditId: n
							})))(t ? Object(h.e)(t) : null)
						}
						f(Object(m.c)())
					}
				})), r.a.createElement(N, {
					subredditId: n,
					userId: t.id,
					username: Object(h.e)(t),
					userFlairData: o,
					userHasBadge: a
				})) : null
			})
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
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(r);
			const o = s.a.section("FormPage", i.a),
				a = s.a.h1("HomePageTitle", i.a),
				c = s.a.button("HomePageBreadcrumb", i.a),
				d = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				u = s.a.div("FormPageSection", i.a),
				m = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				b = s.a.div("FormElement", i.a),
				h = s.a.div("FormGroupDescription", i.a),
				f = s.a.div("FormItem", i.a),
				x = s.a.h3("FormElementTitle", i.a),
				g = s.a.div("FormElementDescription", i.a),
				_ = s.a.div("FormElementError", i.a),
				C = s.a.div("FormElementSubGroup", i.a),
				y = s.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				x = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(g);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, o = [n, _.a.inTopBar, _.a.iconContainer];
					return s ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", C({}, r, {
						className: Object(c.a)(...o)
					}), s ? i.a.createElement(h.a, {
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
						alt: s,
						role: r,
						onClick: o,
						inTopBar: a,
						src: d
					} = e;
					return i.a.createElement("span", {
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
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
					isLoading: x.b
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(v, C({
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
					}, i.a.createElement(y, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, C({
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
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit.id, n, s))
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
					return i.a.createElement(d.e, null, i.a.createElement(d.i, null, i.a.createElement(u.a, null, i.a.createElement(d.q, null, s.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(d.b, null)))), i.a.createElement(d.l, null, i.a.createElement(d.p, null, s.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(d.g, null, i.a.createElement(d.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, s.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(d.r, {
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
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
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
						className: Object(l.a)(r.className, d.a.BaseButton),
						size: s ? o.d.S : o.d.M
					}))
				},
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
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
						className: Object(l.a)(a.className, d.a.BaseButton),
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
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
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
				c = n.n(a);
			const d = Object(i.a)(o.b),
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
					}, this.props.icon, r.a.createElement(d, {
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
				c = n.n(a);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || o.d.XS;
				return r.a.createElement("button", {
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
				}, r.a.createElement("div", {
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
			var s = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, s);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: s,
						subscribe: o
					} = t;
					return Object(i.a)(Object(a.a)(e, [c.a]), {
						method: r.mb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: s && s.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(i.a)(Object(a.a)(e, [c.a]), {
					method: r.mb.POST,
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
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				i = new Set([s.f.Private, s.f.User]),
				o = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !i.has(e.type));
			t.a = o
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${o.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${o.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const s = n ? c : a,
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
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const a = e => {
					Object(o.a)({
						...r.n(e),
						action: s.c.CLICK,
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
						...r.n(e),
						action: s.c.CLICK,
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
					action: s.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.ib(t)
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
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.S(e),
					screen: a.ab(e),
					subreddit: a.ib(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(o.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: a.J(s, e)
				}),
				l = (e, t, n, s) => r => {
					const o = n ? a.h(r, n) : null,
						{
							sortToUse: c
						} = Object(i.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: o,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = a.j(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...a.n(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: a.j(t),
					userSubreddit: a.sb(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
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
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.ab(e),
					subreddit: s.ib(e),
					profile: s.S(e),
					userSubreddit: s.sb(e)
				}),
				i = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				o = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...r(e)
				}),
				a = () => e => ({
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
				d = (e, t, n) => s => ({
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
					...s.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: s.ib(t)
				}),
				i = e => t => ({
					...s.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: s.ib(t)
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
					...s.n(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.ib(t)
				}),
				i = e => t => ({
					...s.n(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.ib(t)
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
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...r.n(t),
					actionInfo: r.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.n(i),
					actionInfo: r.d(i, {
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
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				a = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.n(n),
					actionInfo: r.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...r.n(e),
					actionInfo: r.d(e)
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
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/gold/powerups/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...i.n(e)
				}),
				a = e => t => {
					const n = i.ib(t),
						o = Object(r.r)(t, {
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
							title: a ? Object(s.g)(a) : void 0,
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
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/helpers/clickSourceData/index.ts");

			function o() {
				const e = Object(r.e)(e => e.platform.currentPage),
					[t, n] = Object(s.useState)({});
				return Object(s.useEffect)(() => {
					n(Object(i.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(i.e)(o.j) || r.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(c.a.ModSettings, Object(o.b)("mod", e.isFilled), e.className)
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
		"./src/reddit/selectors/experiments/communityDirectoryBacklink.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/platform.ts");
			const o = e => Object(i.l)(e) || !1,
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: s.T
					}) === s.db.Enabled
				}
		},
		"./src/reddit/selectors/experiments/createPollsPaintedDoor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Y
			}) === s.gb.Treatment
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
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.ac,
					experimentEligibilitySelector: o.e
				}), e => e === r.jb.Enabled),
				c = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.bc,
					experimentEligibilitySelector: o.e
				}), e => e === r.kb.Enabled),
				d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.cc,
					experimentEligibilitySelector: o.e
				}), e => e === r.lb.Enabled),
				l = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.dc,
					experimentEligibilitySelector: o.e
				}), e => e === r.mb.Enabled),
				u = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.fc,
					experimentEligibilitySelector: o.e
				}), e => e === r.ob.Enabled),
				m = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.ec,
					experimentEligibilitySelector: o.e
				}), e => e === r.nb.Enabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.b1b0990f71f151025cf0.js.map