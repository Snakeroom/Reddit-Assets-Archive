// https://www.redditstatic.com/desktop2x/IdCard.1f8c0d07f1c81214b404.js
// Retrieved at 9/23/2021, 1:30:07 PM by Reddit Dataminer v1.0.0
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
				return s
			}));
			var r = n("./src/lib/constants/index.ts");

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: i = r.C
			} = {}) {
				const o = new Date(e * r.Pb);
				return new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(o)
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = (e, t = r.C) => {
				return new Date(1e3 * e).toLocaleString(t, {
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
		"./src/reddit/actions/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(r.a)(s)
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
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			}));
			const r = 120,
				s = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				a = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return x
			})), n.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return y
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return v
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return C
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return I
			})), n.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return T
			})), n.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return O
			})), n.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return j
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return k
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return w
			})), n.d(t, "setSubredditUserSupporterFlair", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/powerups/index.ts"),
				m = n("./src/reddit/actions/gold/powerups.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/gold/powerups/index.ts"),
				g = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: u.a
				}
			});
			const x = Object(s.a)(E.d),
				y = Object(s.a)(E.h),
				v = Object(s.a)(E.f),
				C = Object(s.a)(E.g),
				I = Object(s.a)(E.e),
				T = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = r(),
							i = Object(c.i)(t),
							l = await (async (e, t, n, r) => {
								const s = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: n,
										includeSupporterInfo: r
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(s(), e, d, i),
							{
								subredditInfoById: u,
								redditorsInfoByIds: m
							} = l;
						await n(x(u)), i && m && await n(y(m))
					} catch (l) {
						i.c.captureException(l)
					}
				}, O = (e, t) => async (n, r) => {
					if (!e) return;
					const s = r(),
						i = Object(_.k)(s);
					if (!i || !Object(h.g)(s, {
							subredditId: e
						})) return;
					const o = !!Object(g.d)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await n(T(e, [i.id]))
				}, S = e => async (t, n) => {
					if (!e) return !1;
					await t(Object(m.l)(e, {
						fullData: !0
					}));
					const r = n();
					return Object(h.g)(r, {
						subredditId: e
					})
				}, j = e => async (t, n) => {
					var r;
					const s = n(),
						i = e.map(({
							id: e
						}) => e),
						o = Object(f.c)(s, {
							commentIds: i
						}),
						a = null === (r = o.find(e => e && e.subredditId)) || void 0 === r ? void 0 : r.subredditId;
					if (!(await t(S(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(T(a, Array.from(d)))
				}, k = (e, t) => async (n, r) => {
					if (!t) return;
					if (!(await n(S(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(T(e, Array.from(s)))
				}, w = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(_.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(g.h)(s, {
							subredditId: e,
							userId: o
						});
					n(P({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, F = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(_.k)(s);
					if (!i) return;
					const o = i.id,
						a = Object(g.f)(s, {
							subredditId: e,
							userId: o
						});
					n(P({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, P = e => async (t, n, {
					gqlContext: s
				}) => {
					t(v(e));
					const {
						subredditId: a,
						achievementFlairType: c,
						supporterFlairType: l
					} = e, u = [c, l].filter(Boolean);
					try {
						await (async (e, t, n) => {
							const r = await Object(o.a)(e, {
								...d,
								variables: {
									subredditId: t,
									flairTypes: n
								}
							});
							if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(s(), a, u), t(C(e))
					} catch (m) {
						t(I(e)), i.c.captureException(m), t(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
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
				return f
			})), n.d(t, "j", (function() {
				return h
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
				f = Object(r.a)(o.i),
				h = e => Object(s.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			const r = "SUBREDDIT__FLAIRED_USERS_PENDING",
				s = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				c = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
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
			const f = Object(s.a)(o.w),
				h = Object(s.a)(o.x),
				g = Object(s.a)(o.v),
				_ = (e, t, n) => async (r, s, i) => {
					const o = Object(p.w)(s(), {
						subredditName: e
					});
					if (o) return x(o, t, n)(r, s, i)
				}, E = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), x = (e, t, n) => async (s, o, p) => {
					const _ = await Object(l.e)(t);
					s(f());
					const x = o();
					try {
						await Object(i.g)("communityIcon", _, e.id)(s, o, p)
					} catch (v) {
						return Object(b.a)(Object(c.c)(x, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: E()
						})), void s(g())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(x, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: E()
					})), void s(g());
					await Object(i.k)(e.id, {
						communityIcon: y
					}, d.b.idCard, n)(s, o, p), s(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(h())
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
				return F
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/GqlTopLevelField.ts"),
				E = n("./src/reddit/models/User/index.ts");

			function x(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== E.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
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
			var y = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/subscriptions.ts"),
				T = n("./src/reddit/selectors/user.ts");
			const O = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(i.a)(c.c),
				j = Object(i.a)(c.b),
				k = Object(i.a)(c.a),
				w = Object(i.a)(c.h),
				F = (Object(i.a)(c.i), Object(i.a)(c.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(j());
					const s = await Object(f.a)(n());
					if (s.ok) {
						const t = x(s.body.data);
						e(S(t))
					} else e(k({
						error: s.error
					}))
				}),
				P = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				N = (e, t, n) => async (i, c, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(C.B)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(v.m)(c(), e.name),
						name: `${s.fc}${e.name}`,
						type: e.type
					});
					if (!Object(T.K)(c())) return i(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void i(Object(a.k)());
					const b = Object(T.k)(c());
					if (b) {
						const t = p.length,
							n = e.length;
						if (p = p.filter(e => !P(b, e)), (e = e.filter(e => !P(b, e))).length !== n || p.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(l.f)(Object(l.e)(e, y.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (i(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(I.b)(c()),
							userIsSubscriber: t,
							widgetId: n
						})), (await Object(f.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Sucсessfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1S5AXJ"
							}),
							a = r.fbt._("Sucсessfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2XWHyB"
							}),
							d = r.fbt._("Sucсessfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "3Al8aF"
							}),
							c = r.fbt._("Sucсessfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2w5JFZ"
							});
						i(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? d : c
						}))
					} else {
						i(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(I.b)(c()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(l.f)(Object(l.e)(s, y.b.Error)))
					}
				}, R = Object(i.a)(c.f), D = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n(),
						i = Object(C.I)(s, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						a = s.subscriptions.favoriteSubredditOrder || [],
						d = s.subscriptions.favoriteProfileOrder || [],
						c = a.indexOf(e.id),
						m = d.indexOf(e.id),
						p = -1 === c && -1 === m,
						b = s.subreddits.models,
						h = s.profiles.models;
					t(R({
						makeFavorite: p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					}));
					const g = {
							type: e.type,
							name: i.name
						},
						_ = () => Object(C.cb)(n(), {
							identifier: g
						});
					(_() || (await t(N([g], !0)), _())) && ((await Object(f.b)(r(), o, p)).ok || (t(R({
						makeFavorite: !p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					})), t(Object(l.f)({
						text: O(),
						kind: y.b.Error
					}))))
				}, L = Object(i.a)(c.d), U = e => async (t, n, {
					apiContext: r
				}) => {
					const i = n().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: O(),
								kind: y.b.Error
							}))
						},
						a = i[e];
					if (!a) return void o();
					const d = !a.isFavorited;
					t(L({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, d)).ok || (t(L({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), o())
				}, A = Object(i.a)(c.e), B = e => async (t, n, {
					apiContext: i
				}) => {
					const o = n(),
						a = o.multireddits.models;
					if (!Object(T.K)(o)) return;
					const d = (e = !0) => {
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						c = a[e];
					if (!c) return void d();
					const u = !c.isFollowed;
					t(A({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, u)).ok || (t(A({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), d(u))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "k", (function() {
				return x
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				x = "USERFLAIR_FETCH_SUCCESS"
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
				return O
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
				f = n("./src/reddit/helpers/economics/sortBadges.ts"),
				h = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = n("./src/reddit/models/Badge/index.ts");
			var _ = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				E = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = n.n(E);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "add-custom-badge-tooltip",
				C = 100,
				I = 2 * C,
				T = 24;
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, C)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, I)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return s.a.createElement("img", {
						className: Object(d.a)(x.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${v}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || T;
					return s.a.createElement(r.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(h.a, {
						className: x.a.addCustom
					})), s.a.createElement(_, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
						const t = Object(g.d)(n, n, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(d.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: x.a.image,
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
							className: x.a.badgeHovercard,
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
			const S = [],
				j = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: n
					}) => {
						var r;
						return (null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var n;
						const r = e.user.account;
						return r && (null === (n = e.users.appliedBadges[r.id]) || void 0 === n ? void 0 : n[t]) || S
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
				return s.a.createElement(O, y({
					badges: i
				}, r))
			}
			const P = Object(i.b)(j, w)(F),
				N = Object(i.b)(k, w)(F)
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, n) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, n) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/user.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/lib/addQueryParams/index.ts");
			const b = (e, t, n, r, s) => {
				const i = s || "*:*",
					o = n || l.W;
				return Object(p.a)("/search", {
					q: i,
					sort: o,
					t: r,
					category_name: e,
					category: t
				})
			};
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => n => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(n),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(n, e),
				search: h.postFlairClickToSearch(n, t),
				subreddit: h.subreddit(n)
			});
			var _ = n("./src/reddit/components/CategoryTag/index.m.less"),
				E = n.n(_);
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(g(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						n = e.categoryId,
						r = e.categoryName,
						i = s.a.createElement("span", null, r);
					return s.a.createElement("span", {
						className: Object(c.a)(E.a.metaFlair, {
							[E.a["m-lightboxHeader"]]: t
						})
					}, s.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(r, n, l.Vb.Relevance, l.dc.DAY),
						children: i
					}))
				}
			}
			var y = n("./src/reddit/components/CategoryTagList/index.m.less"),
				v = n.n(y);
			const C = Object(i.b)(() => Object(o.c)({
				labelNSFW: d.U
			}));
			t.a = C(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: n,
				sendEvent: r
			}) => s.a.createElement("span", {
				className: n ? void 0 : v.a.categoryTagWrapper
			}, e.map(e => s.a.createElement(x, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: n,
				sendEvent: r
			})))))
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
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
				h = {
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
				g = {
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
				f = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/CommunityType/index.m.less"),
				g = n.n(h);
			const _ = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", g.a),
				E = Object(d.c)({
					restrictions: f.n
				}),
				x = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: g.a.nsfwText
				}, r.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				y = () => i.a.createElement(_, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				v = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(x, null)), i.a.createElement(_, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(y, null)),
				C = Object(o.b)(E);
			t.a = C(({
				className: e,
				iconClassName: t,
				restrictions: n = b.e.Post,
				textClassName: s,
				subreddit: o
			}) => {
				switch (o.type) {
					case p.f.Restricted:
						return i.a.createElement(v, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.restrictedIcon, t)
							}),
							text: r.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: s,
							description: Object(b.g)(n),
							subreddit: o
						});
					case p.f.Private:
						return i.a.createElement(v, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(g.a.privateIcon, t)
							}),
							text: r.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: s,
							description: r.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: o
						});
					case p.f.EmployeesOnly:
						return i.a.createElement(v, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(c.a)(g.a.employeesIcon, t)
							}),
							text: o.allowContractors ? r.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : r.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: s,
							subreddit: o
						});
					default:
						return i.a.createElement(i.a.Fragment, null, o.isQuarantined && i.a.createElement(y, null), o.isNSFW && i.a.createElement(x, null))
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
				f = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				h = n.n(f);
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
			class _ extends i.a.Component {
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
					return i.a.createElement(u.s, {
						priority: e === b.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(a.a)(t ? null : h.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: s
					}, s ? r.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(o.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(_))
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
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				_ = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				x = _.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.ib)(e),
					userIsSuspended: f.Q
				});
			t.a = Object(o.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: E
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: s,
				openCommunityCreation: o,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c,
				onClick: l
			}) => {
				return i.a.createElement(p.s, {
					className: e,
					disabled: c || d,
					onClick: e => {
						l && l(e), o(a)
					},
					onMouseEnter: n,
					onMouseLeave: s,
					priority: p.b.Secondary,
					id: E,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				achievements: "_3yyAEiwzXU-705K4-2CYcp",
				achievementItem: "_29gOi1XSw60-K2kDQZerSu",
				achievementImgWrapper: "_2Quz2MhfZx-Ctyd9zFO7ju",
				achievementImg: "_3_H_5cdEEjCzMRE60q9kbE",
				achievementName: "_1BTx4JIyc9txuPsRaFBelE",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				gradientVisible: "_1gcqKximkvdrFYxxOUaH4g",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_3NdKulBcLHFmpKDAy9Barm",
				hoverPopup: "_3TMcWG2R9E0iMw_Qcg9tfi",
				icon: "_2Xc055D-KCIUe6f2E3Ghgr",
				hiddenAchievementsCount: "_1zxdGxj6UKKqJMibObCbeA"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/gold/powerups.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				l = n("./src/reddit/hooks/useScrollGradient.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				h = n.n(f);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const f = Object(i.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: n
					})),
					_ = Object(i.e)(e => Object(b.Q)(e, {
						subredditId: t
					})),
					E = Object(i.d)(),
					x = Object(u.a)(),
					{
						container: y,
						isScrollGradientVisible: v,
						calculateGradientVisibility: C
					} = Object(l.a)(!1);
				Object(r.useEffect)(() => {
					C()
				}, [C]);
				return s.a.createElement("div", {
					className: Object(o.a)(h.a.container, e)
				}, s.a.createElement("div", {
					className: h.a.header
				}, s.a.createElement(m.a, {
					className: h.a.powerupsLogo
				}), g._("{r/community} {=achievements}", [g._param("r/community", _.displayText), g._param("=achievements", s.a.createElement("span", {
					className: h.a.headerText
				}, g._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), s.a.createElement("div", {
					className: h.a.headerDelimiter
				}), s.a.createElement("div", {
					className: h.a.achievements,
					onScroll: C,
					ref: y
				}, f.map(e => !e.isLocked && s.a.createElement("div", {
					className: h.a.achievementItem,
					key: e.type
				}, s.a.createElement("div", {
					className: h.a.achievementImgWrapper
				}, s.a.createElement("img", {
					className: h.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), s.a.createElement("div", {
					className: h.a.achievementName
				}, s.a.createElement("span", null, e.name))))), s.a.createElement("div", {
					className: h.a.footer
				}, s.a.createElement("div", {
					className: Object(o.a)(h.a.scrollGradient, {
						[h.a.gradientVisible]: v
					})
				}), s.a.createElement(d.s, {
					priority: d.b.Secondary,
					className: h.a.ctaButton,
					onClick: () => {
						x(Object(c.a)()), E(Object(a.e)())
					},
					isFullWidth: !0
				}, g._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var E = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				x = n.n(E);
			const y = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: a,
					onHover: d
				}) => {
					const c = Object(i.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: n
						})),
						l = Object(i.e)(e => Object(p.g)(e, {
							subredditId: t,
							userId: n
						})),
						u = Object(i.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: n
						})),
						m = u ? [...u.supporterTypes, ...u.achievementTypes] : null,
						[b, f] = Object(r.useState)(!1);
					if (!(!!c || !!l) || !m) return null;
					const h = (null == l ? void 0 : l.type) === (null == c ? void 0 : c.type) ? null : l,
						g = (h ? 1 : 0) + (c ? 1 : 0),
						E = (null == m ? void 0 : m.length) - g;
					return s.a.createElement("span", {
						className: Object(o.a)(x.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							a && (f(!0), null == d || d())
						},
						onMouseLeave: () => {
							f(!1)
						}
					}, s.a.createElement(v, {
						achievement: h
					}), s.a.createElement(v, {
						achievement: c
					}), !!E && s.a.createElement("span", {
						className: x.a.hiddenAchievementsCount
					}, "+", E), a && b && s.a.createElement(_, {
						className: x.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				v = ({
					achievement: e
				}) => e ? s.a.createElement("img", {
					alt: e.name,
					className: x.a.icon,
					src: e.icon.url
				}) : null
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
				return f
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				d = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/components/UserIcon/constants.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = n.n(p);
			const f = ({
				className: e,
				subredditId: t,
				userId: n,
				flairData: s,
				username: p,
				userHasBadge: f
			}) => {
				const h = Object(o.e)(e => Object(m.k)(e));
				return h ? i.a.createElement("div", {
					className: Object(r.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: h.accountIcon,
					isNSFW: h.isNSFW,
					nsfwIconUrl: u.a,
					userName: p || ""
				}), i.a.createElement("div", {
					className: b.a.allFlair
				}, i.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && i.a.createElement(a.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), i.a.createElement("span", {
					className: b.a.username
				}, `${p||"username"}`), i.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: t,
					userId: n
				})), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(c.b, {
					className: b.a.userFlair,
					flair: s.applied,
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
				return M
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return z
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
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const g = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => d.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", f.a);
			var _ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				j = n.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(E.a)(_.b),
				F = p.a.div("FlairWrapper", j.a),
				P = p.a.wrapped(c.a, "CloseButton", j.a),
				N = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const r = t;
					return d.a.createElement(g, k({
						style: {
							...R(!!e, r) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", j.a),
				R = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[y.p]: r,
						[y.s]: t ? "1" : ""
					})
				},
				L = e => e.isFlairFilter ? d.a.createElement(v.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? d.a.createElement(v.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class U extends d.a.Component {
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
							[j.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(O.a)(this.props).flair,
							color: `${M(this.props)}`
						}
					}, this.props.text, this.props.isSelected && d.a.createElement(P, {
						to: "./",
						onClick: this.props.onCloseClick
					}, d.a.createElement(I.a, {
						className: j.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(O.a)(this.props).flair
						}
					})), !!this.props.tooltip && d.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return d.a.createElement(L, {
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
			const A = Object(m.a)(U),
				B = Object(m.a)(e => {
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
							[j.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(O.a)(e).flair,
							color: `${M(e)}`
						}
					}, r, e.isSelected && d.a.createElement(P, {
						to: "./",
						onClick: e.onCloseClick
					}, d.a.createElement(I.a, {
						className: j.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(O.a)(e).flair
						}
					})));
					return d.a.createElement(L, {
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
				M = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(O.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(C.a)(Object(O.a)(e).post, x.b.black, x.b.white) : e.textColor === T.e.Dark ? x.b.black : x.b.white,
				H = p.a.wrapped(A, "TextFlair", j.a),
				q = p.a.wrapped(B, "RichTextFlair", j.a),
				W = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.i)(.1, Object(O.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = p.a.wrapped(e => {
					const t = W(e),
						n = d.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return d.a.createElement(L, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", j.a);

			function z(e) {
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
					to: f
				} = e, h = Object(u.a)({
					[j.a.flairVariant]: i,
					[j.a.small]: i && !e.large,
					[j.a.large]: i && e.large
				}, t);
				switch (s.type) {
					case T.f.Richtext:
						return n || !s.richtext ? null : d.a.createElement(q, {
							backgroundColor: s.backgroundColor,
							className: h,
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
							to: f
						});
					case T.f.Text:
						return n || !s.text ? null : d.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
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
							to: f
						});
					case T.f.Nsfw:
					case T.f.Spoiler:
						return d.a.createElement(G, {
							className: t,
							text: s.text,
							type: s.type
						});
					case T.f.Quarantined:
						return null;
					case T.f.Oc:
						return d.a.createElement(H, {
							backgroundColor: x.b.alienblue,
							text: s.text,
							textColor: T.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? d.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: f
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
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var a = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(o.a)(),
						a = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(i.d)(e, a))
				},
				d = n("./src/lib/humanizeDate/index.ts");
			var c = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(o.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(d.a)(e, i))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						r = null != t ? t : n;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.C) {
						const n = e * l.Pb;
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
					}(e, r))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.C) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n, r = l.C) {
				const s = Object(p.e)(e, t),
					i = new Date(e * l.Pb);
				let o;
				if (s === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(i, r) : function(e, t = l.C) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, r) : s === p.a.Past && (o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(i, r)), `${o} @ ${function(e,t=l.C){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,r)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: r
			}) {
				const i = Object(o.a)(),
					a = null != r ? r : i;
				return s.a.createElement(s.a.Fragment, null, f(e, t, n, a))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const a = s.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return s.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
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
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/placeholder.m.less"),
				a = n.n(o);
			t.a = s.a.memo(e => s.a.createElement("div", {
				className: Object(i.a)(a.a.container)
			}, s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.banner)
			}), s.a.createElement("div", {
				className: a.a.title
			}, s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.icon)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.name)
			})), s.a.createElement("div", {
				className: a.a.counts
			}, s.a.createElement("div", {
				className: a.a.side
			}, s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			})), s.a.createElement("div", {
				className: a.a.side
			}, s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			}))), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.one)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.two)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.three)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.four)
			}), s.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/history/esm/history.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				l = n("./src/reddit/hooks/useClickSourceData.ts"),
				u = n("./src/reddit/components/IdCard/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				const t = Object(s.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: n,
						isTargetBlank: u,
						largeSubredditIcon: b,
						linkUrl: f,
						subredditIcon: h,
						titleText: g,
						primaryColor: _,
						subreddit: E,
						onOpenFilePicker: x
					} = e,
					y = h.url ? p._("Update icon", null, {
						hk: "GXdPy"
					}) : p._("Add icon", null, {
						hk: "31odkm"
					}),
					v = Object(l.a)();
				return i.a.createElement("div", {
					className: Object(a.a)(m.a.Title, e.className)
				}, n && E ? i.a.createElement(c.a, {
					className: b ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: h.url,
					iconUrl: h.url,
					primaryColor: _,
					subreddit: E,
					inTopBar: !1
				}) : i.a.createElement(d.b, {
					altText: h.altText,
					className: b ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: h.url,
					iconUrl: h.url,
					primaryColor: _
				}), i.a.createElement("div", {
					className: m.a.titleTextContainer
				}, f ? i.a.createElement(o.a, {
					className: m.a.TitleLink,
					key: f,
					to: {
						pathname: Object(r.c)(f).pathname,
						state: v,
						search: Object(r.c)(f).search
					},
					onClick: t,
					target: u ? "_blank" : void 0,
					rel: u ? "noopener noreferrer" : void 0
				}, i.a.createElement("span", {
					className: m.a.TitleText,
					title: g
				}, g)) : i.a.createElement("span", {
					className: m.a.TitleText,
					key: g
				}, g), n && E && x && i.a.createElement("div", {
					className: m.a.editIconText,
					onClick: x
				}, y)))
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
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				c = e => e && e === o.c,
				l = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let o, u, m, p, b;
					const f = n && n.subscribersText || r.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						h = n && n.currentlyViewingText || r.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, _;
					return c(e) ? (o = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (o = `${s.a.assetPath}/img/id-cards/banner@2x.png`, u = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : a(e) ? (o = `${s.a.assetPath}/img/id-cards/banner@2x.png`, u = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, _ = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: _,
						subscribersText: f,
						currentlyViewingText: h,
						currentlyViewingCount: g,
						...o ? {
							bannerBackgroundImage: o
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
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
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
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
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
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
				l = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/lib/prettyPrintNumber/index.ts"),
				h = n("./src/reddit/actions/tooltip.ts"),
				g = n("./src/lib/loadableAction/index.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/actions/subscription/index.ts"),
				x = n("./src/reddit/components/CategoryTagList/index.tsx"),
				y = n("./src/higherOrderComponents/makeAsync.tsx"),
				v = n("./src/lib/loadWithRetries/index.ts"),
				C = Object(y.a)({
					getComponent: () => Object(v.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				I = n("./src/reddit/components/CommunityType/index.tsx"),
				T = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				O = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				S = n("./src/reddit/actions/login.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(u.c)({
				isLoggedIn: F.K
			});
			var D = Object(o.b)(R, e => ({
					openLoginModal: () => {
						e(Object(_.k)({
							actionSource: _.a.Post
						})), e(Object(S.k)())
					}
				}))(Object(P.c)(({
					isContributorRequestPending: e,
					isLoggedIn: t,
					listingName: n,
					openLoginModal: s,
					sendEvent: o,
					subreddit: a,
					...d
				}) => {
					const c = `${Object(k.a)(a)||"/"}submit`;
					return i.a.createElement(j.m, N({}, d, {
						onClick: e => {
							o(e => ({
								action: "click",
								noun: "create_post",
								source: "id_card",
								screen: Object(w.screen)(e),
								subreddit: Object(w.subreddit)(e),
								actionInfo: Object(w.actionInfo)(e)
							})), t || (s(), e.preventDefault())
						},
						to: c
					}), e ? r.fbt._("Draft Post", null, {
						hk: "17BbM6"
					}) : r.fbt._("Create Post", null, {
						hk: "4k3RsQ"
					}))
				})),
				L = n("./src/reddit/components/HumanDate/index.tsx");
			const U = Object(y.a)({
				getComponent: () => Object(v.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var A = n("./node_modules/react-autosize-textarea/lib/index.js"),
				B = n.n(A),
				M = n("./src/reddit/actions/subredditSettings.ts"),
				H = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				q = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				W = n("./src/lib/fastdom/index.ts"),
				G = n("./src/lib/lessComponent.tsx"),
				z = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				K = n.n(z);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = G.a.div("DescriptionContainer", K.a);
			class Q extends i.a.Component {
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
					this.state.shouldTruncateDescription && W.a.read(() => {
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
					return i.a.createElement(J, {
						className: Object(m.a)(K.a.descriptionContainer, s && K.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, i.a.createElement("div", {
						className: K.a.description,
						ref: this.setTextRef
					}, t || o, e), s && r && i.a.createElement("div", {
						className: K.a.showMore
					}, "...", i.a.createElement(j.q, {
						className: K.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, V._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			var Y = Q,
				X = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				Z = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				$ = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ee = n("./src/reddit/icons/fonts/index.tsx"),
				te = n("./src/reddit/selectors/activeModalId.ts"),
				ne = n("./src/reddit/selectors/subreddit.ts");
			const re = 6,
				se = Object(u.c)({
					apiPending: ne.R,
					unsavedChangesModalIsOpen: Object(te.b)(X.a)
				});
			class ie extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent($.a)
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
						this.props.sendEvent(Object($.d)(e, t))
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
					const e = this.props.apiPending ? i.a.createElement(Z.a, {
						className: K.a.loadingIcon,
						sizePx: re
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Y, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(ee.a, {
						name: "edit",
						className: K.a.pencil
					}), e)) : i.a.createElement("div", {
						className: K.a.emptyDescription
					}, r.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(B.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: r.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(m.a)(K.a.editableDescription, K.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: q.c,
						value: this.state.description
					}), i.a.createElement("div", {
						className: K.a.editableDescriptionControlRow
					}, i.a.createElement(H.a, {
						className: K.a.characterCountdown,
						maxChars: q.c,
						text: this.state.description
					}), i.a.createElement("span", {
						className: K.a.cancel,
						onClick: this.onCancel
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: K.a.save,
						onClick: this.onSave
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [K.a.defaultEditableDescriptionContainer];
					const e = [K.a.editableDescriptionContainer];
					return this.state.editing && e.push(K.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(m.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(X.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			var oe = Object(o.b)(se, (e, {
					subreddit: t
				}) => ({
					updateSubredditSettings: n => e(Object(M.j)(t.id, n, {}, !0)),
					openUnsavedChangesModal: () => {
						e(Object(_.h)(X.a))
					}
				}))(Object(P.c)(ie)),
				ae = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				de = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				ce = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				le = n.n(ce);
			var ue = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: le.a.container
					}, i.a.createElement(de.a, null)),
					getComponent: () => Object(v.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				me = n("./src/reddit/components/OverflowMenu/index.tsx"),
				pe = n("./src/reddit/actions/authorFlair.ts"),
				be = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				fe = n("./src/reddit/actions/gold/powerups.ts"),
				he = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				ge = n("./src/reddit/components/Flair/index.tsx"),
				_e = n("./src/reddit/featureFlags/component.tsx"),
				Ee = n("./src/reddit/helpers/trackers/userFlair.ts"),
				xe = n("./src/reddit/hooks/useTracking.ts"),
				ye = n("./src/reddit/models/User/index.ts"),
				ve = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ce = n("./src/reddit/selectors/gold/powerups/index.ts"),
				Ie = n("./src/reddit/selectors/userFlair.ts"),
				Te = n("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				Oe = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				Se = n.n(Oe);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = G.a.div("FlairSettingsContainer", Se.a), we = G.a.div("FlairPreviewWrapper", Se.a), Fe = G.a.div("PreviewTitle", Se.a), Pe = G.a.wrapped(ge.b, "FlairComponent", Se.a), Ne = G.a.wrapped(j.q, "TertiaryButton", Se.a), Re = G.a.wrapped(Ne, "IconButton", Se.a), De = G.a.span("Username", Se.a), Le = Object(_e.a)("spBadges", he.a), Ue = Object(u.c)({
				currentUser: F.k,
				isAchievementFlairModalEnabled: (e, t) => Object(Ce.g)(e, {
					subredditId: t.subredditId
				}),
				userFlairData: Ie.d,
				userHasBadge: (e, t) => {
					const n = e.user.account;
					if (n) {
						return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
					}
					return !1
				},
				showUserFlairPreviewEnabled: ve.y
			}), Ae = Object(o.b)(Ue), Be = e => i.a.createElement(Re, {
				onClick: e.onClick
			}, i.a.createElement(ee.a, {
				name: "edit"
			})), Me = ({
				isAchievementFlairModalEnabled: e,
				subredditId: t,
				userId: n,
				username: r,
				userFlairData: s,
				userHasBadge: o,
				showUserFlairPreviewEnabled: a
			}) => a || e ? i.a.createElement(we, null, i.a.createElement(Te.a, {
				subredditId: t,
				userId: n,
				username: r,
				flairData: s,
				userHasBadge: o
			})) : i.a.createElement("div", {
				className: Se.a.UserFlairPreviewWrapper
			}, o && i.a.createElement(Le, {
				className: Se.a.badge,
				subredditId: t,
				uniqueIdentifier: t
			}), i.a.createElement(De, null, `u/${r}`), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && i.a.createElement(Pe, {
				flair: s.applied,
				forceSmallEmojis: !0
			}));
			var He = Ae(({
					currentUser: e,
					subredditId: t,
					userFlairData: n,
					userHasBadge: r,
					isAchievementFlairModalEnabled: a,
					showUserFlairPreviewEnabled: d
				}) => {
					const c = Object(o.d)(),
						l = Object(xe.a)();
					Object(s.useEffect)(() => {
						a && c(Object(be.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(t))
					}, [c, t, a]);
					return e && (n || a) ? i.a.createElement(ke, null, i.a.createElement(Fe, null, je._("user flair preview", null, {
						hk: "3aBytK"
					}), i.a.createElement(Be, {
						onClick: () => {
							if (a) c(Object(fe.e)());
							else {
								(e => c(Object(pe.b)({
									username: e,
									subredditId: t
								})))(e ? Object(ye.e)(e) : null)
							}
							l(Object(Ee.c)())
						}
					})), i.a.createElement(Me, {
						isAchievementFlairModalEnabled: a,
						subredditId: t,
						userId: e.id,
						username: Object(ye.e)(e),
						userFlairData: n,
						userHasBadge: r,
						showUserFlairPreviewEnabled: d
					})) : null
				}),
				qe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				We = n("./src/reddit/components/Widgets/Base/index.tsx"),
				Ge = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ze = n("./src/reddit/constants/listings.ts"),
				Ke = n("./src/reddit/constants/modals.ts"),
				Ve = n("./src/reddit/constants/page.ts"),
				Je = n("./src/reddit/constants/posts.ts"),
				Qe = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ye = n("./src/reddit/controls/ImageInput/index.tsx"),
				Xe = n("./src/reddit/featureFlags/index.ts"),
				Ze = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				$e = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				et = n("./src/reddit/helpers/localStorage/index.ts"),
				tt = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				nt = n("./src/reddit/helpers/trackers/lightbox.ts"),
				rt = n("./src/reddit/helpers/trackers/modHub.ts"),
				st = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				it = n("./src/reddit/icons/fonts/helpers.tsx"),
				ot = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				at = n.n(ot);
			var dt = e => i.a.createElement("i", {
					className: Object(m.a)(at.a.ModSettings, Object(it.b)("mod", e.isFilled), e.className)
				}),
				ct = n("./src/reddit/models/ApiRequestState/index.ts"),
				lt = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				ut = n("./src/reddit/selectors/category.ts"),
				mt = n("./src/reddit/selectors/experiments/categories.ts"),
				pt = n("./src/reddit/constants/experiments.ts"),
				bt = n("./src/reddit/helpers/chooseVariant/index.ts");
			var ft = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ht = n("./src/reddit/selectors/structuredStyles.ts"),
				gt = n("./src/reddit/selectors/subscriptions.ts"),
				_t = n("./src/reddit/selectors/widgets.ts"),
				Et = n("./src/reddit/components/IdCard/Banner.tsx"),
				xt = n("./src/reddit/actions/preferences.ts"),
				yt = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				vt = n("./src/reddit/helpers/trackers/idCard.ts"),
				Ct = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				It = n.n(Ct);
			const Tt = G.a.wrapped(j.s, "TertiaryButton", It.a),
				Ot = Object(u.c)({
					stylesDisabledForSubreddit: F.kb,
					stylesDisabledGlobally: F.lb,
					shouldShowFlairPreview: (e, {
						subredditId: t
					}) => Object(Ie.c)(e, {
						subredditId: t
					}) && !Object(ve.y)(e)
				});
			class St extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(vt.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
							stylesEnabled: e
						})
					}, this.state = {
						isOpen: !1
					}
				}
				render() {
					const {
						isOverlay: e,
						isSubmissionPage: t,
						stylesDisabledForSubreddit: n,
						stylesDisabledGlobally: s,
						subredditId: o,
						shouldShowFlairPreview: a
					} = this.props, {
						isOpen: d
					} = this.state, c = d ? i.a.createElement("div", {
						className: It.a.content
					}, i.a.createElement("div", {
						className: Object(m.a)(It.a.stylesToggle, {
							[It.a.disabled]: s
						}),
						title: s ? r.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: It.a.stylesToggleLabel
					}, i.a.createElement(ee.a, {
						name: n ? "hide" : "show",
						className: It.a.visibilityIcon
					}), r.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), i.a.createElement(yt.a, {
						className: It.a.ToggleSwitch,
						disabled: s,
						on: !n,
						onToggle: this.onToggleStylesSwitch
					})), a && !e && i.a.createElement(He, {
						subredditId: o
					})) : null;
					return i.a.createElement("div", {
						className: It.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(Tt, {
						kind: j.a.Button,
						priority: j.b.Plain,
						isFullWidth: !0,
						className: Object(m.a)(It.a.expandButton, {
							[It.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, r.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(ee.a, {
						name: d ? "caret_up" : "caret_down"
					})), c)
				}
			}
			var jt = Object(o.b)(Ot, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(xt.H)(t, n))
					}
				}))(St),
				kt = n("./src/reddit/components/IdCard/helpers.ts"),
				wt = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				Ft = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Pt = n("./src/reddit/components/IdCard/Title.tsx"),
				Nt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				Rt = n("./src/reddit/components/IdCard/index.m.less"),
				Dt = n.n(Rt);
			const Lt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Ut = Object(o.b)(() => Object(u.c)({
					postCategories: (e, t) => Object(ut.o)(e, t.postId),
					favoriteSubredditsIds: gt.a,
					idCardWidget: (e, t) => Object(_t.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(ne.f)(e, lt.e.Post),
					isGQLLoggedIn: F.J,
					isInCategoriesExperiment: mt.a,
					isLoggedIn: F.K,
					moderatorPermissions: (e, t) => {
						const n = Object(ne.B)(e, t.listingName);
						if (n) return Object(ft.l)(e, {
							subredditId: n
						})
					},
					showContributorRequestFlow: e => Object(ne.q)(e, lt.e.Post),
					showCreatePollButton: e => (e => Object(bt.c)(e, {
						experimentEligibilitySelector: bt.a,
						experimentName: pt.K
					}) === pt.S.Treatment)(e) && !Object(et.g)(),
					shouldShowFlairPreview: (e, {
						listingName: t
					}) => {
						const n = Object(ne.B)(e, t);
						return Object(Ie.c)(e, {
							subredditId: n
						}) && Object(ve.y)(e)
					},
					subreddit: (e, t) => Object(ne.w)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(ne.t)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, {
						listingName: t
					}) => Object(ne.y)(e, {
						subredditName: t
					}),
					subredditIcon: (e, t) => Object(ht.p)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Xe.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, {
						listingName: t
					}) => {
						const n = Object(ne.w)(e, {
							subredditName: t
						});
						return !!n && Object(l.a)(e, {
							subredditId: n.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(_.h)(Ke.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(d.b)(t)),
					toggleFavorite: t => e(Object(E.c)({
						id: t,
						type: Je.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(h.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, r) => {
						e(Object(c.b)(t.listingName, n, r))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					isEligibleForCommunityAwards: Object(Ze.b)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class At extends i.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(rt.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(nt.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== Ve.c ? t : ze.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(ct.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent($.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: r,
							subreddit: s
						} = this.props, o = Object(b.a)(this.getListingNameToUse());
						return !o && r ? i.a.createElement(T.default, {
							eventSource: lt.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(D, {
							className: Dt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: s
						}), !e && !o && n && i.a.createElement(U, {
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
							shouldShowFlairPreview: c
						} = this.props, l = this.getListingNameToUse(), u = Object(b.a)(l), m = n && a && !s, p = e && !u && !m, f = t && !m && !o && !s && !(d && d.userIsBanned);
						return i.a.createElement("div", {
							className: Dt.a.Buttons
						}, p && i.a.createElement(qe.a, {
							className: Dt.a.SubscribeButton,
							getEventFactory: e => Object(nt.a)(e ? "unsubscribe" : "subscribe"),
							id: `subscribe-button-${a.id}`,
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation(),
							small: !0,
							isFullWidth: !0
						}), f && this.renderCreatePostButtons(), t && !o && !s && !a && i.a.createElement(O.a, {
							className: Dt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), m && i.a.createElement(j.p, {
							className: Dt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, r.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})), t && !s && c && i.a.createElement(He, {
							subredditId: a.id
						}))
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
						isInCategoriesExperiment: c,
						isLoggedIn: l,
						isMinimal: u,
						isOverlay: p,
						isSubmissionPage: f,
						moderatorPermissions: h,
						onContainerClick: g,
						postCategories: _,
						postId: E,
						subreddit: y,
						subredditAboutInfo: v,
						subredditCoins: T,
						subredditIcon: O,
						toggleTooltip: S,
						subredditInlineEditingEnabled: j
					} = this.props, k = this.getListingNameToUse(), w = Object(b.a)(k);
					if (!w && !n) return i.a.createElement(wt.a, null);
					const {
						bannerBackgroundImage: F,
						currentlyViewingCount: P,
						currentlyViewingText: N,
						description: R,
						snooBackground: D,
						subscribersCount: L,
						subscribersText: U,
						titleText: A,
						url: B
					} = Object(kt.a)({
						listingName: k,
						subreddit: y,
						idCardWidget: n
					}), M = w || p || f, H = !w && y.id ? y.id : "", q = v && v.created, W = r.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), G = `IdCard--Subscribers--${p}--${H}`, z = `IdCard--CurrentlyViewing--${p}--${H}`, K = `IdCard--CakeDay--${p}--${H}`, V = `IdCard--CoinCoint--${p}--${H}`, J = u && !p, Q = !w && !l && !d, X = !w && !p && j && !f, Z = X ? i.a.createElement(oe, {
						description: R,
						shouldTruncateDescription: !1,
						isCommentsPage: !!s,
						subreddit: y
					}) : i.a.createElement(Y, {
						description: R,
						shouldTruncateDescription: !1,
						subreddit: y
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(Ge.a, {
						className: Object(m.a)(Dt.a.ThemedWidget, t),
						onClick: p ? g : void 0,
						headerButton: i.a.createElement("div", {
							className: Dt.a.headerButtonsContainer
						}, !M && y && h && i.a.createElement(a.a, {
							className: Dt.a.ModToolsLink,
							to: h.posts ? `${y.url}about/modqueue` : `${y.url}about/`,
							onClick: this.onClickModTools
						}, i.a.createElement(dt, {
							className: Dt.a.ModSettings
						}), r.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), l && y && i.a.createElement(me.b, {
							className: Dt.a.overflowButton,
							dropdownId: Lt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !y.isQuarantined && i.a.createElement(Qe.b, {
							className: Dt.a.dropdownRow,
							displayText: r.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), i.a.createElement(Qe.b, {
							className: Dt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? r.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : r.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: w || f,
						title: M ? void 0 : r.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: w ? void 0 : Dt.a.subredditTitle
					}, M && i.a.createElement(Et.a, {
						bannerBackgroundImage: F
					}), w || f || s ? w ? Object(Ft.a)({
						titleText: A,
						snooBackground: D
					}) : i.a.createElement(Pt.a, {
						isTargetBlank: f,
						linkUrl: w ? void 0 : B,
						subredditIcon: O,
						canEditIcon: X,
						subreddit: y,
						titleText: A,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, Z, !w && !J && Mt(L, U, G, P, N, z, q, W, K, S), Q && i.a.createElement(Nt.a, {
						subredditId: H
					}), !w && i.a.createElement("div", {
						className: Dt.a.CommunityTypeContainer
					}, i.a.createElement(I.a, {
						className: Dt.a.communityType,
						iconClassName: Dt.a.communityTypeIcon,
						subreddit: y,
						textClassName: Dt.a.communityTypeText
					})), o && h && void 0 !== T && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Dt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Dt.a.communityCoinCount
					}, i.a.createElement(st.a, {
						className: Dt.a.coinIcon
					}), r.fbt._("{number-community-coins} Coins", [r.fbt._param("number-community-coins", T.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: V,
						onMouseLeave: () => S(V),
						onMouseEnter: () => S(V)
					}, i.a.createElement(ee.a, {
						name: "help",
						isFilled: !0,
						className: Dt.a.helpIcon
					})), i.a.createElement(ae.c, {
						tooltipId: V
					}, i.a.createElement("p", {
						className: Dt.a.coinsTooltipContent
					}, r.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), X && i.a.createElement(ue, {
						context: tt.a.idCard,
						subredditId: H
					}), !w && J && Bt(y, L, P), this.renderButtons(), c && _ && E && (s || p) && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Dt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Dt.a.CategoryContainer
					}, i.a.createElement(We.a, {
						className: Dt.a.widgetHeader
					}, r.fbt._("Discover more in:", null, {
						hk: "1o2gtg"
					})), i.a.createElement(x.a, {
						postId: E,
						inLightboxHeader: !0,
						postCategories: _
					}))), !w && l && i.a.createElement(i.a.Fragment, null, i.a.createElement(jt, {
						isOverlay: p,
						isSubmissionPage: f,
						sendEvent: this.props.sendEvent,
						subredditId: y.id
					})), X && i.a.createElement(Ye.a, {
						key: "icon-file-picker",
						className: Dt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !w && l && this.props.adminCommunityTopicsEnabled && i.a.createElement(C, {
						key: "admin-community-topics",
						subredditId: H
					})))
				}
			}
			const Bt = (e, t, n) => {
					const s = Object($e.a)(e.name);
					return i.a.createElement("span", {
						className: Dt.a.metaTextContainer
					}, s.map(({
						color: e,
						image: t
					}, n) => i.a.createElement("img", {
						alt: 0 === n ? r.fbt._("Members icons", null, {
							hk: "1ayNe4"
						}) : "",
						className: Dt.a.memberIcon,
						key: t,
						src: t,
						style: {
							backgroundColor: e
						}
					})), i.a.createElement("span", {
						className: Object(m.a)(Dt.a.CountMetaText, Dt.a.metaText)
					}, r.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [r.fbt._plural(t, "number of members", Object(f.b)(t))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: Object(m.a)(Dt.a.CountMetaText, Dt.a.metaText)
					}, r.fbt._("{viewingCount} online", [r.fbt._param("viewingCount", Object(f.b)(n))], {
						hk: "cxviW"
					})))
				},
				Mt = (e, t, n, s, o, a, d, c, l, u) => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Dt.a.UserCounts
				}, i.a.createElement("div", {
					className: Dt.a.SubscriberCount,
					onMouseEnter: () => u(n),
					onMouseLeave: () => u(n)
				}, i.a.createElement("div", {
					className: Dt.a.Count
				}, Object(f.b)(e)), i.a.createElement("p", {
					className: Dt.a.UserType,
					id: n
				}, t), i.a.createElement(ae.c, {
					caretOnTop: !0,
					text: `${Object(f.b)(e,{displayFull:!0})} ${t}`,
					tooltipId: n
				})), i.a.createElement("div", {
					className: Dt.a.Online,
					onMouseEnter: () => u(a),
					onMouseLeave: () => u(a)
				}, i.a.createElement("div", {
					className: Dt.a.Count
				}, Object(f.b)(s)), i.a.createElement("p", {
					className: Dt.a.UserType,
					id: a
				}, o), i.a.createElement(ae.c, {
					caretOnTop: !0,
					text: `${Object(f.b)(s,{displayFull:!0})} ${o}`,
					tooltipId: a
				})), i.a.createElement("div", null)), d && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
					className: Dt.a.HorizontalLine
				}), i.a.createElement("div", {
					className: Dt.a.CakeDayContainer,
					onMouseEnter: () => u(l),
					onMouseLeave: () => u(l)
				}, i.a.createElement("div", {
					className: Dt.a.CakeDay,
					id: l
				}, i.a.createElement(ee.a, {
					name: "cake",
					className: Dt.a.cakeIcon
				}), r.fbt._("Created {cakeday}", [r.fbt._param("cakeday", i.a.createElement(L.a, {
					seconds: d,
					showDay: !0,
					shortMonths: !0,
					useUtc: !0
				}))], {
					hk: "8Y46b"
				})), i.a.createElement(ae.c, {
					caretOnTop: !0,
					tooltipId: l
				}, i.a.createElement(L.d, {
					seconds: d
				})))));
			t.default = Object(P.c)(Ut(Object(p.a)(At)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
			const d = ({
				snooBackground: e
			}) => s.a.createElement("div", {
				className: a.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => s.a.createElement("div", {
				className: Object(i.a)(a.a.Title, a.a.TitleShifted)
			}, s.a.createElement(d, {
				snooBackground: t
			}), s.a.createElement("div", {
				className: a.a.TitleTextShiftedContainer
			}, s.a.createElement("span", {
				className: a.a.TitleText
			}, e)))
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
				return h
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
				f = m.a.div("BottomText", u.a),
				h = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				_ = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(c.b)(t)(e)
				}),
				E = Object(d.a)(g, [a.a.Click, a.a.Keydown]),
				x = Object(d.a)(h, [a.a.Click, a.a.Keydown]),
				y = Object(i.b)(_);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(E, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, p({}, e, {
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
				f = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(h);
			const _ = c.a.wrapped(m.a, "_Dropdown", g.a),
				E = Object(u.a)(_),
				x = c.a.button("MenuButton", g.a),
				y = c.a.wrapped(p.b, "DropdownRow", g.a),
				v = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(f.b)(t)(e)
				}),
				C = Object(o.b)(v, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				I = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => i.a.createElement(x, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: I(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), i.a.createElement(E, {
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
							const e = document.getElementById(o.d);
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
				UserFlairPreviewWrapper: "_2jnTo-FNwT6nxIXrq1_-7c",
				userFlairPreviewWrapper: "_2jnTo-FNwT6nxIXrq1_-7c",
				FlairPreviewWrapper: "_136QdRzXkGKNtSQ-h1fUru",
				flairPreviewWrapper: "_136QdRzXkGKNtSQ-h1fUru",
				EditPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				editPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				PreviewTitle: "r51dfG6q3N-4exmkjHQg_",
				previewTitle: "r51dfG6q3N-4exmkjHQg_",
				FlairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				flairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				TertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				tertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				IconButton: "_1-25VxiIsZFVU88qFh-T8p",
				iconButton: "_1-25VxiIsZFVU88qFh-T8p",
				Username: "_3BmRwhm18nr4GmDhkoSgtb",
				username: "_3BmRwhm18nr4GmDhkoSgtb"
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
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return y
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
				f = r.a.div("FormGroupDescription", i.a),
				h = r.a.div("FormItem", i.a),
				g = r.a.h3("FormElementTitle", i.a),
				_ = r.a.div("FormElementDescription", i.a),
				E = r.a.div("FormElementError", i.a),
				x = r.a.div("FormElementSubGroup", i.a),
				y = r.a.li("FormListItem", i.a)
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
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/ApiRequestState/index.ts"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				E = n.n(_);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, o = [n, E.a.inTopBar, E.a.iconContainer];
					return r ? o.push(E.a.emptyEditableIconInTopBar) : o.push(E.a.editableIcon, E.a.emptyEditableIcon), i.a.createElement("span", x({}, s, {
						className: Object(d.a)(...o)
					}), r ? i.a.createElement(f.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : i.a.createElement(f.a, {
						name: "add",
						className: E.a.emptyPlusButton
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
						src: c
					} = e;
					return i.a.createElement("span", {
						className: E.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: s,
						src: c,
						className: Object(d.a)(n, {
							[E.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				C = Object(a.c)({
					isLoading: g.b
				});
			class I extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(h.b)();
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
						className: E.a.clickableUploadText,
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(v, x({
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
					}, i.a.createElement(y, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: E.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(C, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(c.a)(t.subreddit, n, r))
				}
			}))(Object(l.c)(I))
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
				p = Object(o.b)(null, e => ({
					closeModal: () => e(Object(d.g)(m))
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
				return h
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
			const m = (e, t, n) => null != n ? n : t ? e : o.b.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...r
				}) => i.a.createElement(o.s, u({}, r, {
					priority: m(o.b.Primary, e, t),
					className: Object(l.a)(r.className, c.a.BaseButton),
					size: n ? o.c.S : o.c.M
				})),
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
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: r,
					...s
				}) => i.a.createElement(o.s, u({}, s, {
					priority: m(o.b.Secondary, t, n),
					className: Object(l.a)(s.className, c.a.BaseButton),
					size: r ? o.c.S : o.c.M,
					text: b(e)
				}));
			class h extends i.a.Component {
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
						isFullWidth: o = !1
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: o
					};
					return this.props.userIsSubscriber ? i.a.createElement(f, u({}, d, {
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
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => i[s({
					type: e
				})][t]()
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
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				isInJoinOptimizationsExperiment: e => Object(o.a)(e) || Object(o.b)(e) || Object(o.c)(e) || Object(o.d)(e),
				userIsSubscriber: a.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
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
					}), (!i || e.multiple) && s.a.createElement("input", {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(i.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
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
				const n = e.size || o.c.XS;
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
			const l = (e, {
					subredditIds: t,
					subredditNames: n,
					subscribe: r
				}) => Object(i.a)(Object(a.a)(e, [d.a]), {
					method: s.ib.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: r ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: n && n.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
					method: s.ib.POST,
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
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				d = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				c = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, r) => {
					let i = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; i && i.depth > n && i.prev && (o = i.prev, (i = Object(s.n)(r, {
							commentLink: o,
							commentsPageKey: e
						})) && !(i.depth <= n)););
					return o.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: a
					} = r[t];
					if (a) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i.E,
								expEventOverride: t
							});
							return !!(Object(i.Ke)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
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
				d = [];
			t.a = s()((e, t = 3) => {
				if (!e || !t) return d;
				const n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(n + t) % i.a.length],
					image: a[(n + t) % a.length]
				}))
			}, (e, t = 3) => `${e}_${t}`)
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(s.e)(a, {
							commentId: e
						}),
						c = Object(i.e)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.defaults(a),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(r.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.defaults(e)
				})
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
						...s.defaults(e),
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
						...s.defaults(e),
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
					subreddit: s.subreddit(t)
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
					profile: a.profile(e),
					screen: a.screen(e),
					subreddit: a.subreddit(e)
				}),
				c = (e, t, n) => r => ({
					source: Object(o.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...d(r),
					post: a.post(r, e)
				}),
				l = (e, t, n, r) => s => {
					const o = n ? a.comment(s, n) : null,
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
					const r = a.currentPost(n);
					return r ? c(r.id, e, t)(n) : {
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...d(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...c(e, t)(n),
					...a.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...d(t),
					post: a.currentPost(t),
					userSubreddit: a.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					profile: r.profile(e),
					userSubreddit: r.userSubreddit(e)
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
					...r.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: r.subreddit(t)
				}),
				i = e => t => ({
					...r.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.subreddit(t)
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
					...r.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.subreddit(t)
				}),
				i = e => t => ({
					...r.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: r.subreddit(t)
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
					...s.defaults(t),
					actionInfo: s.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.defaults(i),
					actionInfo: s.actionInfo(i, {
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
					...s.defaults(e),
					actionInfo: s.actionInfo(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.defaults(n),
					actionInfo: s.actionInfo(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.defaults(e)
				}),
				o = e => t => {
					const {
						userFlair: n,
						achievementFlair: i
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(r.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name,
							isLocked: null == i ? void 0 : i.isLocked
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.defaults(e)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/uuid/v4.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/history.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");

			function d() {
				const e = Object(o.db)(),
					t = e ? Object(a.getPageTypeFromCurrentPage)(e) : void 0,
					n = "search_results" === t && Object(a.structureType)(e) === a.StructureType.Trending;
				return {
					[i.a.ClickSource]: n ? "search_results_trending" : t,
					[i.a.ClickId]: s()()
				}
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			t.a = "undefined" == typeof document ? function() {
				return Object(s.e)(i.i) || r.C
			} : function() {
				return document.documentElement.lang || r.C
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const [t, n] = Object(r.useState)(e), s = Object(r.useRef)(null);
				return {
					container: s,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = s.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							r = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						n(!r)
					}
				}
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
					color: e.fillColor || o.b.gold
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts");
			const i = e => (e => e.startsWith("POWERUPS_SUPPORTER"))(e.type),
				o = e => !i(e),
				a = {};
			var d = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				u = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(r.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case s.pb:
							const {
								subredditId: n, subredditAchievementFlairs: r
							} = t.payload;
							if (!(null == r ? void 0 : r.length)) return e;
							const a = r.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								d = r.filter(o).map(e => e.type),
								c = r.filter(i).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: d,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, t) => {
					switch (t.type) {
						case c.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: r
							} = t.payload;
							let s = e[n] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of r) {
								const n = t.filter(o),
									r = n.map(({
										type: e
									}) => e),
									a = t.filter(i),
									d = a.map(({
										type: e
									}) => e),
									c = u(n),
									l = u(a);
								s = {
									...s,
									[e]: {
										achievementTypes: r,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: l
									}
								}
							}
							return {
								...e,
								[n]: s
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: r,
								achievementFlairType: s,
								supporterFlairType: i
							} = t.payload;
							return Object(d.updateIn)(e, [n, r], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: i
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: r,
								achievementFlairType: s,
								supporterFlairType: i
							} = t.payload;
							return Object(d.updateIn)(e, [n, r], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: i,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return Object(d.updateIn)(e, [n, r], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.h: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									r = e.powerups;
								if (!t || !r) return;
								const s = r.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
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
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				i = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				o = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				d = n("./src/reddit/actions/pages/postCreation.ts"),
				c = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case d.PAGE_LOADED:
					case c.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case o.i:
					case o.f:
					case o.m:
					case o.p:
					case o.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: r
						} = n, s = {
							...e
						};
						return Object.keys(r).forEach(e => {
							s[e] || (s[e] = r[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: n,
							applied: r,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r,
								displaySettings: s
							}
						}
					}
					case i.h: {
						const {
							subredditId: n,
							applied: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: r
						} = t.payload, s = {
							...e[n].displaySettings,
							isEnabled: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: r
						} = t.payload, s = {
							...e[n].permissions,
							canAssignOwn: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: s
							}
						}
					}
					case u.q: {
						const n = t.payload,
							r = e[n.subredditId],
							s = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							o = {
								...s,
								[n.template.id]: n.template
							},
							a = [...i];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...r,
								templates: o,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							r = e[n.subredditId],
							i = e[n.subredditId].templates,
							o = e[n.subredditId].templateIds,
							a = s()(i, n.templateId),
							d = o.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...r,
								templates: {
									...a
								},
								templateIds: d
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							r = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...r,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const i = [];
			var o = (e = i, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var c = (e = d, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: c,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var g = (e = h, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				_ = n("./node_modules/lodash/uniqBy.js"),
				E = n.n(_),
				x = n("./node_modules/lodash/values.js"),
				y = n.n(x),
				v = n("./src/reddit/actions/comment/websocket/constants.ts");
			const C = {};

			function I(e) {
				return E()(e, "id").sort((e, t) => e.created - t.created)
			}
			var T = (e = C, t) => {
					switch (t.type) {
						case a.f:
						case f.w:
						case a.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], i = function(e, t) {
								return y()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), o = I([...s, ...i]);
							return {
								...e,
								[r]: [...o]
							}
						}
						case v.b:
						case v.c:
						case v.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: i
								},
								commentsPageKey: o
							} = t.payload;
							return {
								...e,
								[o]: [...I([...e[o] ? e[o] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: i
								}])]
							}
						}
						default:
							return e
					}
				},
				O = n("./node_modules/lodash/mapValues.js"),
				S = n.n(O),
				j = n("./src/reddit/helpers/commentList/index.ts"),
				k = n("./src/reddit/models/Comment/index.ts");
			const w = {};

			function F(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var P = (e = w, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: i,
							moreCommentsItem: o,
							moreComments: a
						} = t.payload, d = r[o.postId], c = e[i], l = {}, u = c[o.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...c[e],
								next: d.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...c[e],
								prev: d.tail || u.prev
							}
						}
						if (d.head && d.tail) {
							const e = Object(j.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								}),
								t = Object(j.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[i]: {
								...e[i],
								...F(n),
								...F(s),
								...F(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...F(n),
								...F(r),
								...F(i)
							}
						}
					}
					case v.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r,
							headCommentId: s
						} = t.payload, i = e[r], o = {};
						let a = null;
						return s && (o[s] = {
							...i[s],
							prev: Object(k.i)(n.id)
						}, a = Object(k.i)(s)), {
							...e,
							[r]: {
								...e[r],
								...o,
								[n.id]: {
									depth: 0,
									next: a,
									prev: null
								}
							}
						}
					}
					case f.I: {
						const {
							comment: n,
							commentsPageKey: r,
							parentCommentId: s,
							depth: i
						} = t.payload, o = e[r], a = {};
						let d = null;
						if (!o[s]) return e;
						const c = o[s].next;
						return c && (a[c.id] = {
							...o[c.id],
							prev: Object(k.i)(n.id)
						}, d = c), a[s] = {
							...o[s],
							next: Object(k.i)(n.id)
						}, {
							...e,
							[r]: {
								...e[r],
								...a,
								[n.id]: {
									depth: i,
									next: d,
									prev: Object(k.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const N = {};
			var R = (e = N, t) => {
				switch (t.type) {
					case v.b:
					case v.c:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r
						} = t.payload;
						return {
							...e,
							[r]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var L = (e = D, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case f.J: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				followed: g,
				keyToChatCommentLinks: T,
				keyToCommentThreadLinkSets: P,
				keyToHeadCommentId: R,
				keyToPostId: L,
				ads: o
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "H", (function() {
				return C
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "A", (function() {
				return R
			})), n.d(t, "J", (function() {
				return D
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "E", (function() {
				return A
			})), n.d(t, "F", (function() {
				return B
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "v", (function() {
				return q
			})), n.d(t, "K", (function() {
				return W
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "G", (function() {
				return K
			})), n.d(t, "C", (function() {
				return V
			})), n.d(t, "I", (function() {
				return J
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "L", (function() {
				return Y
			})), n.d(t, "y", (function() {
				return X
			})), n.d(t, "z", (function() {
				return Z
			})), n.d(t, "B", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/comments/index.ts"),
				b = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(m.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				_ = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				E = (e, t) => {
					const n = _(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				x = [],
				y = Object(o.a)((e, t) => {
					const n = E(e, t),
						r = n && n.id;
					if (!r) return x;
					const {
						commentsPageKey: s
					} = t, i = e.pages.comments.keyToCommentThreadLinkSets[s], o = [];
					let d = {
						id: r,
						type: a.a.Comment
					};
					do {
						o.push(d), d = i[d.id].next
					} while (d);
					return o
				}),
				v = (e, t) => _(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				C = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				I = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				T = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				O = (e, t) => {
					const n = t.commentsPageKey ? I(e, t) : null;
					return n ? n.depth : null
				},
				S = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
						case a.a.Comment:
							return e.features.comments.models[n];
						case a.a.MoreComments:
							return e.moreComments.models[n];
						case a.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				j = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== i.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				k = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				w = e => e.moreComments.models,
				F = e => e.features.comments.models,
				P = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				N = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				R = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				L = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(u.b)(e, {
							commentId: r
						}),
						i = s && O(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof i) return {
						...s,
						depth: i
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				A = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				B = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				M = (e, {
					id: t
				}) => e.continueThreads.models[t],
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				q = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				W = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				z = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				K = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				V = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				J = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(c.V)(e, n)
				},
				X = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
							commentId: t
						}),
						r = n && n.authorId || "";
					return Object(l.T)(e, r)
				},
				Z = (e, {
					commentId: t
				}) => {
					var n, r;
					return !!((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				$ = (e, {
					commentId: t
				}) => {
					var n, r;
					const s = ((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(i.H)(e) || r.L.Treatment1 === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.C
				})
			}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => {
					var n, r;
					return t ? null === (r = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var r, s;
					return t && n ? null === (s = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === s ? void 0 : s[n] : null
				},
				l = Object(r.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(r.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(r.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(r.a)([d, m], (e, t) => e && t ? e[t] : null),
				b = Object(r.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						r = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						s = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === r || e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				f = Object(r.a)([(e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				}, c], (e, t) => {
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
						supporterFlairs: h(n, i, s, c || a),
						achievementFlairs: h(r, o, s, l || d)
					}
				}),
				h = (e, t, n, r) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === r
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, {
					commentId: t
				}) => {
					const n = Object(s.b)(e, {
							commentId: t
						}),
						r = null == n ? void 0 : n.subredditId,
						o = null == n ? void 0 : n.authorId;
					return !(!r || !o) && !(!((e, {
						subredditId: t,
						userId: n
					}) => {
						var r, s, i;
						return t && n ? null === (i = null === (s = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === s ? void 0 : s[n]) || void 0 === i ? void 0 : i[t] : null
					})(e, {
						subredditId: r,
						userId: o
					}) || !Object(i.i)(e))
				}
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: d.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				l = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				u = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				m = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n && n.displaySettings && n.permissions) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
							subredditId: t
						}),
						r = m(e, {
							subredditId: t
						}),
						s = c(e, {
							subredditId: t
						});
					if (!n || !r || !s) return !1;
					if (s.applied) return !0;
					const i = Object(o.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = r.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || i
					}) && a
				},
				b = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const n = p(e, {
							subredditId: t
						}),
						r = Object(i.g)(e, {
							subredditId: t
						});
					return n || r
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"d0b176d08b19"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"8c45e89afc9b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.1f8c0d07f1c81214b404.js.map