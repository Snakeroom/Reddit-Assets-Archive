// https://www.redditstatic.com/desktop2x/IdCard.e48cd64c6cc57e731f50.js
// Retrieved at 8/18/2021, 11:20:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard", "ContributorRequestButton"], {
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/constants/index.ts");

			function r(e, {
				showDay: t,
				useUtc: n,
				shortMonths: r,
				locale: i = s.B
			} = {}) {
				const o = new Date(e * s.Ob);
				return new Intl.DateTimeFormat(i, {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(o)
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			t.a = (e, t = s.B) => {
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
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(t)
			}
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(s.a)(r)
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
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
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
			const s = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
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
				return E
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
			const h = Object(r.a)(o.w),
				f = Object(r.a)(o.x),
				g = Object(r.a)(o.v),
				_ = (e, t, n) => async (s, r, i) => {
					const o = Object(p.z)(r(), {
						subredditName: e
					});
					if (o) return E(o, t, n)(s, r, i)
				}, x = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), E = (e, t, n) => async (r, o, p) => {
					const _ = await Object(l.e)(t);
					r(h());
					const E = o();
					try {
						await Object(i.g)("communityIcon", _, e.id)(r, o, p)
					} catch (C) {
						return Object(b.a)(Object(d.c)(E, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: x()
						})), void r(g())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(E, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: x()
					})), void r(g());
					await Object(i.k)(e.id, {
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
				return A
			})), n.d(t, "b", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
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
				g = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/GqlTopLevelField.ts"),
				x = n("./src/reddit/models/User/index.ts");

			function E(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== x.c.AvailableRedditor || !a.node.profile) continue;
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
					if (a.node.__typename !== _.a.Subreddit) continue;
					const e = Object(g.a)(a.node);
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
				C = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/subscriptions.ts"),
				I = n("./src/reddit/selectors/user.ts");
			const O = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(i.a)(d.c),
				j = Object(i.a)(d.b),
				k = Object(i.a)(d.a),
				w = Object(i.a)(d.h),
				N = (Object(i.a)(d.i), Object(i.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(j());
					const r = await Object(h.a)(n());
					if (r.ok) {
						const t = E(r.body.data);
						e(S(t))
					} else e(k({
						error: r.error
					}))
				}),
				F = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				P = (e, t, n) => async (i, d, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(v.E)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(C.m)(d(), e.name),
						name: `${r.ec}${e.name}`,
						type: e.type
					});
					if (!Object(I.J)(d())) return i(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void i(Object(a.k)());
					const b = Object(I.j)(d());
					if (b) {
						const t = p.length,
							n = e.length;
						if (p = p.filter(e => !F(b, e)), (e = e.filter(e => !F(b, e))).length !== n || p.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(l.f)(Object(l.e)(e, y.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (i(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(T.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await Object(h.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : s.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [s.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							r = s.fbt._("Sucсessfully followed {communityname}", [s.fbt._param("communityname", n)], {
								hk: "1S5AXJ"
							}),
							a = s.fbt._("Sucсessfully unfollowed {communityname}", [s.fbt._param("communityname", n)], {
								hk: "2XWHyB"
							}),
							c = s.fbt._("Sucсessfully joined {communityname}", [s.fbt._param("communityname", n)], {
								hk: "3Al8aF"
							}),
							d = s.fbt._("Sucсessfully left {communityname}", [s.fbt._param("communityname", n)], {
								hk: "2w5JFZ"
							});
						i(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? r : a : t ? c : d
						}))
					} else {
						i(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(T.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(l.f)(Object(l.e)(r, y.b.Error)))
					}
				}, R = Object(i.a)(d.f), D = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						i = Object(v.L)(r, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						a = r.subscriptions.favoriteSubredditOrder || [],
						c = r.subscriptions.favoriteProfileOrder || [],
						d = a.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === d && -1 === m,
						b = r.subreddits.models,
						f = r.profiles.models;
					t(R({
						makeFavorite: p,
						identifier: e,
						subredditModels: b,
						profileModels: f
					}));
					const g = {
							type: e.type,
							name: i.name
						},
						_ = () => Object(v.fb)(n(), {
							identifier: g
						});
					(_() || (await t(P([g], !0)), _())) && ((await Object(h.b)(s(), o, p)).ok || (t(R({
						makeFavorite: !p,
						identifier: e,
						subredditModels: b,
						profileModels: f
					})), t(Object(l.f)({
						text: O(),
						kind: y.b.Error
					}))))
				}, L = Object(i.a)(d.d), A = e => async (t, n, {
					apiContext: s
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
					const c = !a.isFavorited;
					t(L({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(L({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: i
					})), o())
				}, B = Object(i.a)(d.e), U = e => async (t, n, {
					apiContext: i
				}) => {
					const o = n(),
						a = o.multireddits.models;
					if (!Object(I.J)(o)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(B({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, u)).ok || (t(B({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
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
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "k", (function() {
				return E
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				E = "USERFLAIR_FETCH_SUCCESS"
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
				g = n("./src/reddit/models/Badge/index.ts");
			var _ = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "add-custom-badge-tooltip",
				v = 100,
				T = 2 * v,
				I = 24;
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, v)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, T)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return r.a.createElement("img", {
						className: Object(c.a)(E.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${C}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || I;
					return r.a.createElement(s.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: E.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(f.a, {
						className: E.a.addCustom
					})), r.a.createElement(_, {
						className: E.a.badgeHovercard,
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
							className: Object(c.a)(E.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: E.a.image,
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
							className: E.a.badgeHovercard,
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
			const S = [],
				j = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: n
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var n;
						const s = e.user.account;
						return s && (null === (n = e.users.appliedBadges[s.id]) || void 0 === n ? void 0 : n[t]) || S
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
				return r.a.createElement(O, y({
					badges: i
				}, s))
			}
			const F = Object(i.b)(j, w)(N),
				P = Object(i.b)(k, w)(N)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/lib/addQueryParams/index.ts");
			const b = (e, t, n, s, r) => {
				const i = r || "*:*",
					o = n || l.V;
				return Object(p.a)("/search", {
					q: i,
					sort: o,
					t: s,
					category_name: e,
					category: t
				})
			};
			var h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => n => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...f.defaults(n),
				correlationId: Object(h.c)(h.a.SearchResults),
				post: f.post(n, e),
				search: f.postFlairClickToSearch(n, t),
				subreddit: f.subreddit(n)
			});
			var _ = n("./src/reddit/components/CategoryTag/index.m.less"),
				x = n.n(_);
			class E extends r.a.Component {
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
						s = e.categoryName,
						i = r.a.createElement("span", null, s);
					return r.a.createElement("span", {
						className: Object(d.a)(x.a.metaFlair, {
							[x.a["m-lightboxHeader"]]: t
						})
					}, r.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(s, n, l.Ub.Relevance, l.cc.DAY),
						children: i
					}))
				}
			}
			var y = n("./src/reddit/components/CategoryTagList/index.m.less"),
				C = n.n(y);
			const v = Object(i.b)(() => Object(o.c)({
				labelNSFW: c.T
			}));
			t.a = v(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: n,
				sendEvent: s
			}) => r.a.createElement("span", {
				className: n ? void 0 : C.a.categoryTagWrapper
			}, e.map(e => r.a.createElement(E, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: n,
				sendEvent: s
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
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "k", (function() {
				return d
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
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
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
				f = {
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
				g = n.n(f);
			const _ = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", g.a),
				x = Object(c.c)({
					restrictions: h.n
				}),
				E = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(a.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), i.a.createElement("span", {
					className: g.a.nsfwText
				}, s.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				y = () => i.a.createElement(_, null, i.a.createElement(u.a, {
					name: "quarantined",
					className: g.a.quarantinedIcon
				}), i.a.createElement("span", null, s.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				C = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, e.subreddit.isNSFW && i.a.createElement(E, null)), i.a.createElement(_, {
					className: e.className
				}, e.description ? i.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, i.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && i.a.createElement(y, null)),
				v = Object(o.b)(x);
			t.a = v(({
				className: e,
				iconClassName: t,
				restrictions: n = b.e.Post,
				textClassName: r,
				subreddit: o
			}) => {
				switch (o.type) {
					case p.f.Restricted:
						return i.a.createElement(C, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(g.a.restrictedIcon, t)
							}),
							text: s.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: r,
							description: Object(b.g)(n),
							subreddit: o
						});
					case p.f.Private:
						return i.a.createElement(C, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "hide",
								className: Object(d.a)(g.a.privateIcon, t)
							}),
							text: s.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: r,
							description: s.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: o
						});
					case p.f.EmployeesOnly:
						return i.a.createElement(C, {
							className: e,
							icon: i.a.createElement(u.a, {
								name: "admin",
								className: Object(d.a)(g.a.employeesIcon, t)
							}),
							text: o.allowContractors ? s.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : s.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: r,
							subreddit: o
						});
					default:
						return i.a.createElement(i.a.Fragment, null, o.isQuarantined && i.a.createElement(y, null), o.isNSFW && i.a.createElement(E, null))
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
			class _ extends i.a.Component {
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
					return i.a.createElement(u.q, {
						priority: e === b.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: r
					}, r ? s.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(o.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(_))
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
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(_),
				E = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				C = E.a.wrapped(d.c, "StyledTooltip", x.a),
				v = Object(a.c)({
					isInSrCreationEntrypointBehaviorExperiment: f.a,
					isInSrCreationEntrypointCopyExperiment: f.b,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(g.hb)(e),
					userIsSuspended: g.P
				});
			t.a = Object(o.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(h.c)(t)), e(Object(b.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: n,
				isInSrCreationEntrypointCopyExperiment: r,
				onShowTooltip: o,
				onHideTooltip: a,
				openCommunityCreation: c,
				sendEvent: d,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: b,
				onClick: h
			}) => {
				return i.a.createElement(m.q, {
					className: e,
					disabled: b || l,
					onClick: e => {
						h && h(e), n === u.Jd.Tabs ? window.open("/subreddits/create", "_blank") : c(d)
					},
					onMouseEnter: o,
					onMouseLeave: a,
					priority: m.b.Secondary,
					id: y,
					isFullWidth: !0
				}, Object(p.a)(r, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				})), l ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: y,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : b ? i.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: y,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				powerupsLogo: "_3tAkLAAQVM-WSVSzy-_cEa",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix",
				footer: "_18M7nTbpMAhYLhlWT-5tla",
				scrollGradient: "_2nRTIGjTOu0IHUU0XJ6h9n",
				gradientVisible: "_3IBEob3IfIdXcuzrEz6Kg-",
				ctaButton: "D7NSPqulzWmB1gE8x95iQ"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/userFlair.ts"),
				l = n("./src/reddit/hooks/useScrollGradient.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const h = Object(i.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: n
					})),
					_ = Object(i.e)(e => Object(b.T)(e, {
						subredditId: t
					})),
					x = Object(i.d)(),
					E = Object(u.a)(),
					{
						container: y,
						isScrollGradientVisible: C,
						calculateGradientVisibility: v
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					v()
				}, [v]);
				return r.a.createElement("div", {
					className: Object(o.a)(f.a.container, e)
				}, r.a.createElement("div", {
					className: f.a.header
				}, r.a.createElement(m.a, {
					className: f.a.powerupsLogo
				}), g._("{r/community} {=achievements}", [g._param("r/community", _.displayText), g._param("=achievements", r.a.createElement("span", {
					className: f.a.headerText
				}, g._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), r.a.createElement("div", {
					className: f.a.headerDelimiter
				}), r.a.createElement("div", {
					className: f.a.achievements,
					onScroll: v,
					ref: y
				}, h.map(e => !e.isLocked && r.a.createElement("div", {
					className: f.a.achievementItem,
					key: e.type
				}, r.a.createElement("div", {
					className: f.a.achievementImgWrapper
				}, r.a.createElement("img", {
					className: f.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), r.a.createElement("div", {
					className: f.a.achievementName
				}, r.a.createElement("span", null, e.name))))), r.a.createElement("div", {
					className: f.a.footer
				}, r.a.createElement("div", {
					className: Object(o.a)(f.a.scrollGradient, {
						[f.a.gradientVisible]: C
					})
				}), r.a.createElement(c.q, {
					priority: c.b.Secondary,
					className: f.a.ctaButton,
					onClick: () => {
						E(Object(d.d)()), x(Object(a.e)())
					},
					isFullWidth: !0
				}, g._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var x = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				E = n.n(x);
			const y = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: a,
					onHover: c
				}) => {
					var d;
					const l = Object(i.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: n
						})),
						u = Object(i.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: n
						})),
						m = null === (d = Object(i.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: n
						}))) || void 0 === d ? void 0 : d.achievementTypes,
						[b, h] = Object(s.useState)(!1);
					if (!(!!l || !!u) || !m) return null;
					const f = (null == u ? void 0 : u.type) === (null == l ? void 0 : l.type) ? null : u,
						g = 1 + (f ? 1 : 0),
						x = (null == m ? void 0 : m.length) - g;
					return r.a.createElement("span", {
						className: Object(o.a)(E.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							a && (h(!0), null == c || c())
						},
						onMouseLeave: () => {
							h(!1)
						}
					}, r.a.createElement(C, {
						achievement: f
					}), r.a.createElement(C, {
						achievement: l
					}), !!x && r.a.createElement("span", {
						className: E.a.hiddenAchievementsCount
					}, "+", x), a && b && r.a.createElement(_, {
						className: E.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				C = ({
					achievement: e
				}) => e ? r.a.createElement("img", {
					alt: e.name,
					className: E.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less": function(e, t, n) {
			e.exports = {
				flairPreview: "_3kS07M5t3AnCSn-dzPT28L",
				flairPreviewLine: "_9U85xFylyRCZNL6qmFbx",
				userIcon: "_2d6f5m40Wp18i0fC6mloL3",
				allFlair: "MsNDLMKXGpyANwNmwjClc",
				flairPreviewFirstLine: "_2zJmxsJUBCpVk9xUBGzZpP",
				username: "_3MMCPmniAei9M8H_KF1370",
				flairPreviewSecondLine: "_3f8i-0tQOqxvijtZIdqRv2",
				userFlair: "_1nNvsQvf6jy4_nUR_Sv0dS",
				achievementFlair: "_1SkwA-RUKQvmuGiuvGXPPW"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/components/UserIcon/constants.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less"),
				p = n.n(m);
			const b = ({
				className: e,
				subredditId: t,
				userId: n,
				flairData: r,
				username: m
			}) => {
				const b = Object(o.e)(e => Object(u.j)(e));
				return b ? i.a.createElement("div", {
					className: Object(s.a)(p.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(d.a, {
					className: p.a.userIcon,
					iconUrl: b.accountIcon,
					isNSFW: b.isNSFW,
					nsfwIconUrl: l.a,
					userName: m || ""
				}), i.a.createElement("div", {
					className: p.a.allFlair
				}, i.a.createElement("div", {
					className: p.a.flairPreviewFirstLine
				}, i.a.createElement("span", {
					className: p.a.username
				}, `u/${m||"username"}`), i.a.createElement(a.a, {
					className: p.a.achievementFlair,
					subredditId: t,
					userId: n
				})), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: p.a.flairPreviewSecondLine
				}, i.a.createElement(c.b, {
					className: p.a.userFlair,
					flair: r.applied,
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
				return G
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
			const g = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", f({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", h.a);
			var _ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				T = n("./src/reddit/icons/svgs/Close/index.tsx"),
				I = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				j = n.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(x.a)(_.b),
				N = p.a.div("FlairWrapper", j.a),
				F = p.a.wrapped(d.a, "CloseButton", j.a),
				P = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const s = t;
					return c.a.createElement(g, k({
						style: {
							...R(!!e, s) || {}
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
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[y.p]: s,
						[y.s]: t ? "1" : ""
					})
				},
				L = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class A extends c.a.Component {
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
							[j.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(O.a)(this.props).flair,
							color: `${M(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(T.a, {
						className: j.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(O.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(L, {
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
			const B = Object(m.a)(A),
				U = Object(m.a)(e => {
					let t = "",
						n = !1;
					const s = e.richtext.map((s, r) => {
						if (s.e === I.c.Emoji) {
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
							[j.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...r,
							backgroundColor: e.backgroundColor || Object(O.a)(e).flair,
							color: `${M(e)}`
						}
					}, s, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(T.a, {
						className: j.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(O.a)(e).flair
						}
					})));
					return c.a.createElement(L, {
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
				M = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(O.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(v.a)(Object(O.a)(e).post, E.b.black, E.b.white) : e.textColor === I.e.Dark ? E.b.black : E.b.white,
				H = p.a.wrapped(B, "TextFlair", j.a),
				q = p.a.wrapped(U, "RichTextFlair", j.a),
				W = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.j)(.1, Object(O.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				z = p.a.wrapped(e => {
					const t = W(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(L, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", j.a);

			function G(e) {
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
					[j.a.flairVariant]: i,
					[j.a.small]: i && !e.large,
					[j.a.large]: i && e.large
				}, t);
				switch (r.type) {
					case I.f.Richtext:
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
					case I.f.Text:
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
					case I.f.Meta:
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
					case I.f.Nsfw:
					case I.f.Spoiler:
						return c.a.createElement(z, {
							className: t,
							text: r.text,
							type: r.type
						});
					case I.f.Quarantined:
						return null;
					case I.f.Oc:
						return c.a.createElement(H, {
							backgroundColor: E.b.alienblue,
							text: r.text,
							textColor: I.e.Light,
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
				return u
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var a = function({
					seconds: e,
					...t
				}) {
					var n;
					const s = Object(o.a)(),
						a = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : s
						};
					return r.a.createElement(r.a.Fragment, null, Object(i.d)(e, a))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const s = Object(o.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : s
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(e, i))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						s = null != t ? t : n;
					return r.a.createElement(r.a.Fragment, null, function(e, t = l.B) {
						const n = e * l.Ob;
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
					}(e, s))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.B) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t, n, s = l.B) {
				const r = Object(p.e)(e, t),
					i = new Date(e * l.Ob);
				let o;
				if (r === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === p.a.Future ? o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(i, s) : function(e, t = l.B) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, s) : r === p.a.Past && (o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(i, s)), `${o} @ ${function(e,t=l.B){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,s)}`
			}
			var f = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: s
			}) {
				const i = Object(o.a)(),
					a = null != s ? s : i;
				return r.a.createElement(r.a.Fragment, null, h(e, t, n, a))
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
						isTargetBlank: u,
						largeSubredditIcon: b,
						linkUrl: h,
						subredditIcon: f,
						titleText: g,
						primaryColor: _,
						subreddit: x,
						onOpenFilePicker: E
					} = e,
					y = f.url ? p._("Update icon", null, {
						hk: "GXdPy"
					}) : p._("Add icon", null, {
						hk: "31odkm"
					}),
					C = Object(l.a)();
				return i.a.createElement("div", {
					className: Object(a.a)(m.a.Title, e.className)
				}, n && x ? i.a.createElement(d.a, {
					className: b ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: f.url,
					iconUrl: f.url,
					primaryColor: _,
					subreddit: x,
					inTopBar: !1
				}) : i.a.createElement(c.b, {
					altText: f.altText,
					className: b ? m.a.largeSubredditIcon : m.a.subredditIcon,
					key: f.url,
					iconUrl: f.url,
					primaryColor: _
				}), i.a.createElement("div", {
					className: m.a.titleTextContainer
				}, h ? i.a.createElement(o.a, {
					className: m.a.TitleLink,
					key: h,
					to: {
						pathname: Object(s.c)(h).pathname,
						state: C,
						search: Object(s.c)(h).search
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
				}, g), n && x && E && i.a.createElement("div", {
					className: m.a.editIconText,
					onClick: E
				}, y)))
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
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === i.b.Popular,
				c = e => e && e.toLowerCase() === i.b.All,
				d = e => e && e === o.b,
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
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, _;
					return d(e) ? (o = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : a(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, _ = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: _,
						subscribersText: h,
						currentlyViewingText: f,
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = n("./src/lib/isFakeSubreddit/index.ts"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./src/lib/loadableAction/index.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/actions/subscription/index.ts"),
				E = n("./src/reddit/components/CategoryTagList/index.tsx"),
				y = n("./src/higherOrderComponents/makeAsync.tsx"),
				C = n("./src/lib/loadWithRetries/index.ts"),
				v = Object(y.a)({
					getComponent: () => Object(C.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = n("./src/reddit/components/CommunityType/index.tsx"),
				I = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				O = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				S = n("./src/reddit/actions/login.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/TrackingHelper/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(u.c)({
				isLoggedIn: N.J
			});
			var D = Object(o.b)(R, e => ({
					openLoginModal: () => {
						e(Object(_.k)({
							actionSource: _.a.Post
						})), e(Object(S.k)())
					}
				}))(Object(F.c)(({
					isContributorRequestPending: e,
					isLoggedIn: t,
					listingName: n,
					openLoginModal: r,
					sendEvent: o,
					subreddit: a,
					...c
				}) => {
					const d = `${Object(k.a)(a)||"/"}submit`;
					return i.a.createElement(j.k, P({}, c, {
						onClick: e => {
							o(e => ({
								action: "click",
								noun: "create_post",
								source: "id_card",
								screen: Object(w.screen)(e),
								subreddit: Object(w.subreddit)(e),
								actionInfo: Object(w.actionInfo)(e)
							})), t || (r(), e.preventDefault())
						},
						to: d
					}), e ? s.fbt._("Draft Post", null, {
						hk: "17BbM6"
					}) : s.fbt._("Create Post", null, {
						hk: "4k3RsQ"
					}))
				})),
				L = n("./src/reddit/components/HumanDate/index.tsx");
			const A = Object(y.a)({
				getComponent: () => Object(C.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var B = n("./node_modules/react-autosize-textarea/lib/index.js"),
				U = n.n(B),
				M = n("./src/reddit/actions/subredditSettings.ts"),
				H = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				q = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				W = n("./src/lib/fastdom/index.ts"),
				z = n("./src/lib/lessComponent.tsx"),
				G = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				K = n.n(G);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = z.a.div("DescriptionContainer", K.a);
			class X extends i.a.Component {
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
						shouldDisplayShowMore: s,
						shouldTruncateDescription: r
					} = this.state, o = n ? V._("Welcome to {subredditName}", [V._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return i.a.createElement(J, {
						className: Object(m.a)(K.a.descriptionContainer, r && K.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, i.a.createElement("div", {
						className: K.a.description,
						ref: this.setTextRef
					}, t || o, e), r && s && i.a.createElement("div", {
						className: K.a.showMore
					}, "...", i.a.createElement(j.o, {
						className: K.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, V._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			var Q = X,
				Y = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				Z = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				$ = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ee = n("./src/reddit/icons/fonts/index.tsx"),
				te = n("./src/reddit/selectors/activeModalId.ts"),
				ne = n("./src/reddit/selectors/subreddit.ts");
			const se = 6,
				re = Object(u.c)({
					apiPending: ne.U,
					unsavedChangesModalIsOpen: Object(te.b)(Y.a)
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
						sizePx: se
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Q, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(ee.a, {
						name: "edit",
						className: K.a.pencil
					}), e)) : i.a.createElement("div", {
						className: K.a.emptyDescription
					}, s.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(U.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: s.fbt._("Tell us about your community", null, {
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
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: K.a.save,
						onClick: this.onSave
					}, s.fbt._("Save", null, {
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
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(Y.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			var oe = Object(o.b)(re, (e, {
					subreddit: t
				}) => ({
					updateSubredditSettings: n => e(Object(M.j)(t.id, n, {}, !0)),
					openUnsavedChangesModal: () => {
						e(Object(_.h)(Y.a))
					}
				}))(Object(F.c)(ie)),
				ae = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ce = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				de = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				le = n.n(de);
			var ue = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: le.a.container
					}, i.a.createElement(ce.a, null)),
					getComponent: () => Object(C.a)(() => n.e("SubredditInlineEditing").then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				me = n("./src/reddit/components/OverflowMenu/index.tsx"),
				pe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				be = n("./src/reddit/components/Widgets/Base/index.tsx"),
				he = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				fe = n("./src/reddit/constants/listings.ts"),
				ge = n("./src/reddit/constants/modals.ts"),
				_e = n("./src/reddit/constants/page.ts"),
				xe = n("./src/reddit/constants/posts.ts"),
				Ee = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ye = n("./src/reddit/controls/ImageInput/index.tsx"),
				Ce = n("./src/reddit/featureFlags/index.ts"),
				ve = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				Te = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				Ie = n("./src/reddit/helpers/localStorage/index.ts"),
				Oe = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Se = n("./src/reddit/helpers/trackers/lightbox.ts"),
				je = n("./src/reddit/helpers/trackers/modHub.ts"),
				ke = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				we = n("./src/reddit/icons/fonts/helpers.tsx"),
				Ne = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				Fe = n.n(Ne);
			var Pe = e => i.a.createElement("i", {
					className: Object(m.a)(Fe.a.ModSettings, Object(we.b)("mod", e.isFilled), e.className)
				}),
				Re = n("./src/reddit/models/ApiRequestState/index.ts"),
				De = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Le = n("./src/reddit/selectors/category.ts"),
				Ae = n("./src/reddit/selectors/experiments/categories.ts"),
				Be = n("./src/reddit/constants/experiments.ts"),
				Ue = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Me = n("./src/reddit/selectors/moderatorPermissions.ts"),
				He = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/selectors/subscriptions.ts"),
				We = n("./src/reddit/selectors/widgets.ts"),
				ze = n("./src/reddit/components/IdCard/Banner.tsx"),
				Ge = n("./src/reddit/actions/preferences.ts"),
				Ke = n("./src/reddit/actions/authorFlair.ts"),
				Ve = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				Je = n("./src/reddit/actions/gold/powerups.ts"),
				Xe = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				Qe = n("./src/reddit/components/Flair/index.tsx"),
				Ye = n("./src/reddit/featureFlags/component.tsx"),
				Ze = n("./src/reddit/helpers/trackers/userFlair.ts"),
				$e = n("./src/reddit/hooks/useTracking.ts"),
				et = n("./src/reddit/models/User/index.ts"),
				tt = n("./src/reddit/selectors/experiments/econ/index.ts"),
				nt = n("./src/reddit/selectors/gold/powerups/index.ts"),
				st = n("./src/reddit/selectors/userFlair.ts"),
				rt = n("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				it = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				ot = n.n(it);
			const {
				fbt: at
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ct = z.a.div("FlairSettingsContainer", ot.a), dt = z.a.div("FlairPreviewWrapper", ot.a), lt = z.a.div("PreviewTitle", ot.a), ut = z.a.wrapped(Qe.b, "FlairComponent", ot.a), mt = z.a.wrapped(j.o, "TertiaryButton", ot.a), pt = z.a.wrapped(mt, "IconButton", ot.a), bt = z.a.span("Username", ot.a), ht = Object(Ye.a)("spBadges", Xe.a), ft = Object(u.c)({
				currentUser: N.j,
				isAchievementFlairModalEnabled: (e, t) => Object(nt.g)(e, {
					subredditId: t.subredditId
				}) && Object(tt.g)(e),
				userFlairData: st.c,
				userHasBadge: (e, t) => {
					const n = e.user.account;
					if (n) {
						return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
					}
					return !1
				}
			}), gt = Object(o.b)(ft), _t = e => i.a.createElement(pt, {
				onClick: e.onClick
			}, i.a.createElement(ee.a, {
				name: "edit"
			})), xt = ({
				isAchievementFlairModalEnabled: e,
				subredditId: t,
				userId: n,
				username: s,
				userFlairData: r,
				userHasBadge: o
			}) => e ? i.a.createElement(dt, null, i.a.createElement(rt.a, {
				subredditId: t,
				userId: n,
				username: s,
				flairData: r
			})) : i.a.createElement("div", {
				className: ot.a.UserFlairPreviewWrapper
			}, o && i.a.createElement(ht, {
				className: ot.a.badge,
				subredditId: t,
				uniqueIdentifier: t
			}), i.a.createElement(bt, null, `u/${s}`), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement(ut, {
				flair: r.applied,
				forceSmallEmojis: !0
			}));
			var Et = gt(({
					currentUser: e,
					subredditId: t,
					userFlairData: n,
					userHasBadge: s,
					isAchievementFlairModalEnabled: a
				}) => {
					const c = Object(o.d)(),
						d = Object($e.a)();
					Object(r.useEffect)(() => {
						a && c(Object(Ve.a)(t))
					}, [c, t, a]);
					return e && (n || a) ? i.a.createElement(ct, null, i.a.createElement(lt, null, at._("user flair preview", null, {
						hk: "3aBytK"
					}), i.a.createElement(_t, {
						onClick: () => {
							if (a) c(Object(Je.e)());
							else {
								(e => c(Object(Ke.b)({
									username: e,
									subredditId: t
								})))(e ? Object(et.e)(e) : null)
							}
							d(Object(Ze.c)())
						}
					})), i.a.createElement(xt, {
						isAchievementFlairModalEnabled: a,
						subredditId: t,
						userId: e.id,
						username: Object(et.e)(e),
						userFlairData: n,
						userHasBadge: s
					})) : null
				}),
				yt = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Ct = n("./src/reddit/helpers/trackers/idCard.ts"),
				vt = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				Tt = n.n(vt);
			const It = z.a.wrapped(j.q, "TertiaryButton", Tt.a),
				Ot = Object(u.c)({
					canChangeUserFlair: st.b,
					stylesDisabledForSubreddit: N.jb,
					stylesDisabledGlobally: N.kb,
					canChangeAchievementFlair: (e, t) => Object(nt.g)(e, {
						subredditId: t.subredditId
					}) && Object(tt.g)(e)
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
						this.props.sendEvent(Object(Ct.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						canChangeUserFlair: n,
						canChangeAchievementFlair: r,
						stylesDisabledForSubreddit: o,
						stylesDisabledGlobally: a,
						subredditId: c
					} = this.props, {
						isOpen: d
					} = this.state, l = n || r, u = d ? i.a.createElement("div", {
						className: Tt.a.content
					}, i.a.createElement("div", {
						className: Object(m.a)(Tt.a.stylesToggle, {
							[Tt.a.disabled]: a
						}),
						title: a ? s.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, i.a.createElement("label", {
						className: Tt.a.stylesToggleLabel
					}, i.a.createElement(ee.a, {
						name: o ? "hide" : "show",
						className: Tt.a.visibilityIcon
					}), s.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), i.a.createElement(yt.a, {
						className: Tt.a.ToggleSwitch,
						disabled: a,
						on: !o,
						onToggle: this.onToggleStylesSwitch
					})), l && !e && i.a.createElement(Et, {
						subredditId: c
					})) : null;
					return i.a.createElement("div", {
						className: Tt.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(It, {
						kind: j.a.Button,
						priority: j.b.Plain,
						isFullWidth: !0,
						className: Object(m.a)(Tt.a.expandButton, {
							[Tt.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, s.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), i.a.createElement(ee.a, {
						name: d ? "caret_up" : "caret_down"
					})), u)
				}
			}
			var jt = Object(o.b)(Ot, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(Ge.H)(t, n))
					}
				}))(St),
				kt = n("./src/reddit/components/IdCard/helpers.ts"),
				wt = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				Nt = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ft = n("./src/reddit/components/IdCard/Title.tsx"),
				Pt = n("./src/reddit/components/IdCard/TopicLinksContainer/async.tsx"),
				Rt = n("./src/reddit/components/IdCard/index.m.less"),
				Dt = n.n(Rt);
			const Lt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				At = Object(o.b)(() => Object(u.c)({
					postCategories: (e, t) => Object(Le.o)(e, t.postId),
					favoriteSubredditsIds: qe.a,
					idCardWidget: (e, t) => Object(We.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(ne.f)(e, De.e.Post),
					isGQLLoggedIn: N.I,
					isInCategoriesExperiment: Ae.a,
					isLoggedIn: N.J,
					moderatorPermissions: (e, t) => {
						const n = Object(ne.E)(e, t.listingName);
						if (n) return Object(Me.l)(e, {
							subredditId: n
						})
					},
					showContributorRequestFlow: e => Object(ne.q)(e, De.e.Post),
					showCreatePollButton: e => (e => Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: Be.E
					}) === Be.K.Treatment)(e) && !Object(Ie.h)(),
					subreddit: (e, t) => Object(ne.z)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(ne.w)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, {
						listingName: t
					}) => Object(ne.B)(e, {
						subredditName: t
					}),
					subredditIcon: (e, t) => Object(He.p)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Ce.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, {
						listingName: t
					}) => {
						const n = Object(ne.z)(e, {
							subredditName: t
						});
						return !!n && Object(l.a)(e, {
							subredditId: n.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(_.h)(ge.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(x.c)({
						id: t,
						type: xe.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(f.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(d.b)(t.listingName, n, s))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					isEligibleForCommunityAwards: Object(ve.b)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class Bt extends i.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(je.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Se.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== _e.b ? t : fe.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(Re.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent($.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, o = Object(b.a)(this.getListingNameToUse());
						return !o && s ? i.a.createElement(I.default, {
							eventSource: De.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(D, {
							className: Dt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !o && n && i.a.createElement(A, {
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
							subredditAboutInfo: c
						} = this.props, d = this.getListingNameToUse(), l = Object(b.a)(d), u = n && a && !r, m = e && !l && !u, p = t && !u && !o && !r && !(c && c.userIsBanned);
						return i.a.createElement("div", {
							className: Dt.a.Buttons
						}, m && i.a.createElement(pe.a, {
							className: Dt.a.SubscribeButton,
							getEventFactory: e => Object(Se.a)(e ? "unsubscribe" : "subscribe"),
							id: `subscribe-button-${a.id}`,
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation(),
							small: !0,
							isFullWidth: !0
						}), p && this.renderCreatePostButtons(), t && !o && !r && !a && i.a.createElement(O.a, {
							className: Dt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), u && i.a.createElement(j.n, {
							className: Dt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, s.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})))
					}
				}
				render() {
					const {
						addToMultiClicked: e,
						className: t,
						idCardWidget: n,
						isCommentsPage: r,
						isEligibleForCommunityAwards: o,
						isGQLLoggedIn: c,
						isInCategoriesExperiment: d,
						isLoggedIn: l,
						isMinimal: u,
						isOverlay: p,
						isSubmissionPage: h,
						moderatorPermissions: f,
						onContainerClick: g,
						postCategories: _,
						postId: x,
						subreddit: y,
						subredditAboutInfo: C,
						subredditCoins: I,
						subredditIcon: O,
						toggleTooltip: S,
						subredditInlineEditingEnabled: j
					} = this.props, k = this.getListingNameToUse(), w = Object(b.a)(k);
					if (!w && !n) return i.a.createElement(wt.a, null);
					const {
						bannerBackgroundImage: N,
						currentlyViewingCount: F,
						currentlyViewingText: P,
						description: R,
						snooBackground: D,
						subscribersCount: L,
						subscribersText: A,
						titleText: B,
						url: U
					} = Object(kt.a)({
						listingName: k,
						subreddit: y,
						idCardWidget: n
					}), M = w || p || h, H = !w && y.id ? y.id : "", q = C && C.created, W = s.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), z = `IdCard--Subscribers--${p}--${H}`, G = `IdCard--CurrentlyViewing--${p}--${H}`, K = `IdCard--CakeDay--${p}--${H}`, V = `IdCard--CoinCoint--${p}--${H}`, J = u && !p, X = !w && !l && !c, Y = !w && !p && j && !h, Z = Y ? i.a.createElement(oe, {
						description: R,
						shouldTruncateDescription: !1,
						isCommentsPage: !!r,
						subreddit: y
					}) : i.a.createElement(Q, {
						description: R,
						shouldTruncateDescription: !1,
						subreddit: y
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(he.a, {
						className: Object(m.a)(Dt.a.ThemedWidget, t),
						onClick: p ? g : void 0,
						headerButton: i.a.createElement("div", {
							className: Dt.a.headerButtonsContainer
						}, !M && y && f && i.a.createElement(a.a, {
							className: Dt.a.ModToolsLink,
							to: f.posts ? `${y.url}about/modqueue` : `${y.url}about/`,
							onClick: this.onClickModTools
						}, i.a.createElement(Pe, {
							className: Dt.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), l && y && i.a.createElement(me.b, {
							className: Dt.a.overflowButton,
							dropdownId: Lt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !y.isQuarantined && i.a.createElement(Ee.b, {
							className: Dt.a.dropdownRow,
							displayText: s.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), i.a.createElement(Ee.b, {
							className: Dt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? s.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : s.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: w || h,
						title: M ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: w ? void 0 : Dt.a.subredditTitle
					}, M && i.a.createElement(ze.a, {
						bannerBackgroundImage: N
					}), w || h || r ? w ? Object(Nt.a)({
						titleText: B,
						snooBackground: D
					}) : i.a.createElement(Ft.a, {
						isTargetBlank: h,
						linkUrl: w ? void 0 : U,
						subredditIcon: O,
						canEditIcon: Y,
						subreddit: y,
						titleText: B,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, Z, !w && !J && Mt(L, A, z, F, P, G, q, W, K, S), X && i.a.createElement(Pt.a, {
						subredditId: H
					}), !w && i.a.createElement("div", {
						className: Dt.a.CommunityTypeContainer
					}, i.a.createElement(T.a, {
						className: Dt.a.communityType,
						iconClassName: Dt.a.communityTypeIcon,
						subreddit: y,
						textClassName: Dt.a.communityTypeText
					})), o && f && void 0 !== I && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Dt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Dt.a.communityCoinCount
					}, i.a.createElement(ke.a, {
						className: Dt.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", I.toLocaleString())], {
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
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), Y && i.a.createElement(ue, {
						context: Oe.a.idCard,
						subredditId: H
					}), !w && J && Ut(y, L, F), this.renderButtons(), d && _ && x && (r || p) && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Dt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Dt.a.CategoryContainer
					}, i.a.createElement(be.a, {
						className: Dt.a.widgetHeader
					}, s.fbt._("Discover more in:", null, {
						hk: "1o2gtg"
					})), i.a.createElement(E.a, {
						postId: x,
						inLightboxHeader: !0,
						postCategories: _
					}))), !w && l && i.a.createElement(i.a.Fragment, null, i.a.createElement(jt, {
						isOverlay: p,
						isSubmissionPage: h,
						sendEvent: this.props.sendEvent,
						subredditId: y.id
					})), Y && i.a.createElement(ye.a, {
						key: "icon-file-picker",
						className: Dt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !w && l && this.props.adminCommunityTopicsEnabled && i.a.createElement(v, {
						key: "admin-community-topics",
						subredditId: H
					})))
				}
			}
			const Ut = (e, t, n) => {
					const r = Object(Te.a)(e.name);
					return i.a.createElement("span", {
						className: Dt.a.metaTextContainer
					}, r.map(({
						color: e,
						image: t
					}, n) => i.a.createElement("img", {
						alt: 0 === n ? s.fbt._("Members icons", null, {
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
					}, s.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [s.fbt._plural(t, "number of members", Object(h.b)(t))], {
						hk: "4nET31"
					})), i.a.createElement("span", {
						className: Object(m.a)(Dt.a.CountMetaText, Dt.a.metaText)
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(h.b)(n))], {
						hk: "cxviW"
					})))
				},
				Mt = (e, t, n, r, o, a, c, d, l, u) => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Dt.a.UserCounts
				}, i.a.createElement("div", {
					className: Dt.a.SubscriberCount,
					onMouseEnter: () => u(n),
					onMouseLeave: () => u(n)
				}, i.a.createElement("div", {
					className: Dt.a.Count
				}, Object(h.b)(e)), i.a.createElement("p", {
					className: Dt.a.UserType,
					id: n
				}, t), i.a.createElement(ae.c, {
					caretOnTop: !0,
					text: `${Object(h.b)(e,{displayFull:!0})} ${t}`,
					tooltipId: n
				})), i.a.createElement("div", {
					className: Dt.a.Online,
					onMouseEnter: () => u(a),
					onMouseLeave: () => u(a)
				}, i.a.createElement("div", {
					className: Dt.a.Count
				}, Object(h.b)(r)), i.a.createElement("p", {
					className: Dt.a.UserType,
					id: a
				}, o), i.a.createElement(ae.c, {
					caretOnTop: !0,
					text: `${Object(h.b)(r,{displayFull:!0})} ${o}`,
					tooltipId: a
				})), i.a.createElement("div", null)), c && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
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
				}), s.fbt._("Created {cakeday}", [s.fbt._param("cakeday", i.a.createElement(L.a, {
					seconds: c,
					showDay: !0,
					shortMonths: !0,
					useUtc: !0
				}))], {
					hk: "8Y46b"
				})), i.a.createElement(ae.c, {
					caretOnTop: !0,
					tooltipId: l
				}, i.a.createElement(L.d, {
					seconds: c
				})))));
			t.default = Object(F.c)(At(Object(p.a)(Bt)))
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
			const c = ({
				snooBackground: e
			}) => r.a.createElement("div", {
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
			}) => r.a.createElement("div", {
				className: Object(i.a)(a.a.Title, a.a.TitleShifted)
			}, r.a.createElement(c, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: a.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
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
				return f
			})), n.d(t, "a", (function() {
				return g
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
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(h, {
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
					}) => Object(d.b)(t)(e)
				}),
				x = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				E = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				y = Object(i.b)(_);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(x, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(E, p({}, e, {
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
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const _ = d.a.wrapped(m.a, "_Dropdown", g.a),
				x = Object(u.a)(_),
				E = d.a.button("MenuButton", g.a),
				y = d.a.wrapped(p.b, "DropdownRow", g.a),
				C = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				v = Object(o.b)(C, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				T = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => i.a.createElement(E, {
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
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), i.a.createElement(x, {
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
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container,
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
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
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
				g = s.a.h3("FormElementTitle", i.a),
				_ = s.a.div("FormElementDescription", i.a),
				x = s.a.div("FormElementError", i.a),
				E = s.a.div("FormElementSubGroup", i.a),
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
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				x = n.n(_);

			function E() {
				return (E = Object.assign || function(e) {
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
					} = e, o = [n, x.a.inTopBar, x.a.iconContainer];
					return s ? o.push(x.a.emptyEditableIconInTopBar) : o.push(x.a.editableIcon, x.a.emptyEditableIcon), i.a.createElement("span", E({}, r, {
						className: Object(c.a)(...o)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: x.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: x.a.emptyPlusButton
					}), e.children)
				},
				C = e => {
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
						className: x.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[x.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				v = Object(a.c)({
					isLoading: g.b
				});
			class T extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: x.a.imageUploader,
						inputRef: this.setInputRef,
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
						className: x.a.clickableUploadText,
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(C, E({
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
					}, i.a.createElement(y, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [x.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(x.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: x.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(v, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(T))
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
				p = Object(o.b)(null, e => ({
					closeModal: () => e(Object(c.g)(m))
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
			const m = (e, t, n) => null != n ? n : t ? e : o.b.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => i.a.createElement(o.q, u({}, s, {
					priority: m(o.b.Primary, e, t),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? o.c.S : o.c.M
				})),
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
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...r
				}) => i.a.createElement(o.q, u({}, r, {
					priority: m(o.b.Secondary, t, n),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? o.c.S : o.c.M,
					text: b(e)
				}));
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						isFullWidth: o = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: o
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
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => i[r({
					type: e
				})][t]()
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = i.a.div("WidgetBackground", c.a),
				l = i.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: o.fb
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
					}), (!i || e.multiple) && r.a.createElement("input", {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || o.c.XS;
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
			const l = (e, {
					subredditIds: t,
					subredditNames: n,
					subscribe: s
				}) => Object(i.a)(Object(a.a)(e, [c.a]), {
					method: r.hb.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: s ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: n && n.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, n) => Object(i.a)(Object(a.a)(e, [c.a]), {
					method: r.hb.POST,
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
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13"]),
				i = new Set([s.f.Private, s.f.User]),
				o = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !i.has(e.type));
			t.a = o
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, s) => {
					let i = Object(r.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; i && i.depth > n && i.prev && (o = i.prev, (i = Object(r.n)(s, {
							commentLink: o,
							commentsPageKey: e
						})) && !(i.depth <= n)););
					return o.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: r
					} = e, {
						head: a
					} = s[t];
					if (a) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i.B,
								expEventOverride: t
							});
							return !!(Object(i.fe)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
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
				c = [];
			t.a = r()((e, t = 3) => {
				if (!e || !t) return c;
				const n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(n + t) % i.a.length],
					image: a[(n + t) % a.length]
				}))
			}, (e, t = 3) => `${e}_${t}`)
		},
		"./src/reddit/helpers/getSrCreationEntrypointCopy.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/reddit/constants/experiments.ts");
			t.a = (e, t) => {
				switch (e) {
					case r.Kd.Add:
						return s.fbt._("Add Community", null, {
							hk: "nuvEI"
						});
					case r.Kd.Start:
						return s.fbt._("Start Community", null, {
							hk: "244eL5"
						});
					case r.Kd.Create:
						return s.fbt._("Create Subreddit", null, {
							hk: "1Qw5ax"
						});
					default:
						return t
				}
			}
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
						...r.defaults(e),
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
						...r.defaults(e),
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
					subreddit: r.subreddit(t)
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
					profile: a.profile(e),
					screen: a.screen(e),
					subreddit: a.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(o.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: a.post(s, e)
				}),
				l = (e, t, n, s) => r => {
					const o = n ? a.comment(r, n) : null,
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
					const s = a.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(o.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...a.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
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
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					profile: s.profile(e),
					userSubreddit: s.userSubreddit(e)
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
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: s.subreddit(t)
				}),
				i = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: s.subreddit(t)
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
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				i = e => t => ({
					...s.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
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
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.defaults(i),
					actionInfo: r.actionInfo(i, {
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
					...r.defaults(e),
					actionInfo: r.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.defaults(n),
					actionInfo: r.actionInfo(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...r.defaults(e),
					actionInfo: r.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...r.defaults(e),
					actionInfo: r.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...r.defaults(e),
					actionInfo: r.actionInfo(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...r.defaults(e),
					actionInfo: r.actionInfo(e)
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = o.subreddit(e),
					n = null == t ? void 0 : t.id;
				if (!n) return;
				const r = Object(c.c)(e, {
						subredditId: n
					}),
					d = Object(a.h)(e),
					l = d ? Object(i.d)(e, {
						subredditId: n,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == r ? void 0 : r.displaySettings.isUserEnabled) || !(null == r ? void 0 : r.applied)) return {
					isActive: !1,
					...u
				};
				const m = r.applied.templateId,
					p = Object(s.g)(r.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: n,
						achievementFlair: r
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(s.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == r ? void 0 : r.type,
							achievementFlairTitle: null == r ? void 0 : r.name,
							isLocked: null == r ? void 0 : r.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.defaults(e)
				}),
				p = (e, t, n) => a => {
					const c = Object(r.e)(a, {
							commentId: e
						}),
						d = Object(i.d)(a, {
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
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(s.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.defaults(e)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/uuid/v4.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/history.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");

			function c() {
				const e = Object(o.db)(),
					t = e ? Object(a.getPageTypeFromCurrentPage)(e) : void 0,
					n = "search_results" === t && Object(a.structureType)(e) === a.StructureType.Trending;
				return {
					[i.a.ClickSource]: n ? "search_results_trending" : t,
					[i.a.ClickId]: r()()
				}
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			t.a = "undefined" == typeof document ? function() {
				return Object(r.e)(i.i) || s.B
			} : function() {
				return document.documentElement.lang || s.B
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const [t, n] = Object(s.useState)(e), r = Object(s.useRef)(null);
				return {
					container: r,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = r.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						n(!s)
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
					color: e.fillColor || o.b.gold
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				i = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				o = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
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
							userFlair: s
						} = n, r = {
							...e
						};
						return Object.keys(s).forEach(e => {
							r[e] || (r[e] = s[e])
						}), r
					}
					case u.r: {
						const {
							subredditId: n,
							applied: s,
							displaySettings: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s,
								displaySettings: r
							}
						}
					}
					case i.h: {
						const {
							subredditId: n,
							applied: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: s
						} = t.payload, r = {
							...e[n].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: r
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, r = {
							...e[n].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: r
							}
						}
					}
					case u.q: {
						const n = t.payload,
							s = e[n.subredditId],
							r = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							o = {
								...r,
								[n.template.id]: n.template
							},
							a = [...i];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...s,
								templates: o,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							s = e[n.subredditId],
							i = e[n.subredditId].templates,
							o = e[n.subredditId].templateIds,
							a = r()(i, n.templateId),
							c = o.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...s,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							s = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...s,
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
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const i = [];
			var o = (e = i, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
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
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
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
				b = Object(s.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				h = n("./src/reddit/actions/comment/constants.ts");
			const f = [];
			var g = (e = f, t) => {
					switch (t.type) {
						case h.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case h.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case h.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				_ = n("./node_modules/lodash/uniqBy.js"),
				x = n.n(_),
				E = n("./node_modules/lodash/values.js"),
				y = n.n(E),
				C = n("./src/reddit/actions/comment/websocket/constants.ts");
			const v = {};

			function T(e) {
				return x()(e, "id").sort((e, t) => e.created - t.created)
			}
			var I = (e = v, t) => {
					switch (t.type) {
						case a.f:
						case h.w:
						case a.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], i = function(e, t) {
								return y()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), o = T([...r, ...i]);
							return {
								...e,
								[s]: [...o]
							}
						}
						case C.b:
						case C.c:
						case C.d:
						case h.J:
						case h.I: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: i
								},
								commentsPageKey: o
							} = t.payload;
							return {
								...e,
								[o]: [...T([...e[o] ? e[o] : [], {
									id: n,
									created: s,
									stickied: r,
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

			function N(e) {
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
			var F = (e = w, t) => {
				switch (t.type) {
					case h.w: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: i,
							moreCommentsItem: o,
							moreComments: a
						} = t.payload, c = s[o.postId], d = e[i], l = {}, u = d[o.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(j.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: r
								}),
								t = Object(j.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[i]: {
								...e[i],
								...N(n),
								...N(r),
								...N(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: i
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...N(n),
								...N(s),
								...N(i)
							}
						}
					}
					case C.b:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: s,
							headCommentId: r
						} = t.payload, i = e[s], o = {};
						let a = null;
						return r && (o[r] = {
							...i[r],
							prev: Object(k.i)(n.id)
						}, a = Object(k.i)(r)), {
							...e,
							[s]: {
								...e[s],
								...o,
								[n.id]: {
									depth: 0,
									next: a,
									prev: null
								}
							}
						}
					}
					case h.I: {
						const {
							comment: n,
							commentsPageKey: s,
							parentCommentId: r,
							depth: i
						} = t.payload, o = e[s], a = {};
						let c = null;
						if (!o[r]) return e;
						const d = o[r].next;
						return d && (a[d.id] = {
							...o[d.id],
							prev: Object(k.i)(n.id)
						}, c = d), a[r] = {
							...o[r],
							next: Object(k.i)(n.id)
						}, {
							...e,
							[s]: {
								...e[s],
								...a,
								[n.id]: {
									depth: i,
									next: c,
									prev: Object(k.i)(r)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var R = (e = P, t) => {
				switch (t.type) {
					case C.b:
					case C.c:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: s
						} = t.payload;
						return {
							...e,
							[s]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: n[r] && n[r].head ? n[r].head.id : null
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
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case h.J: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: b,
				followed: g,
				keyToChatCommentLinks: I,
				keyToCommentThreadLinkSets: F,
				keyToHeadCommentId: R,
				keyToPostId: L,
				ads: o
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "H", (function() {
				return I
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "t", (function() {
				return D
			})), n.d(t, "A", (function() {
				return L
			})), n.d(t, "J", (function() {
				return A
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "F", (function() {
				return H
			})), n.d(t, "r", (function() {
				return q
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "v", (function() {
				return z
			})), n.d(t, "K", (function() {
				return G
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "G", (function() {
				return J
			})), n.d(t, "C", (function() {
				return X
			})), n.d(t, "I", (function() {
				return Q
			})), n.d(t, "p", (function() {
				return Y
			})), n.d(t, "L", (function() {
				return Z
			})), n.d(t, "y", (function() {
				return $
			})), n.d(t, "z", (function() {
				return ee
			})), n.d(t, "B", (function() {
				return te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeCommentPermalink/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				h = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: h.a
				},
				pages: {
					comments: f.a
				}
			});
			const g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				_ = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				E = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				y = (e, t) => {
					const n = E(e, t);
					if (n) return Object(p.a)(e, {
						commentId: n
					})
				},
				C = [],
				v = Object(a.a)((e, t) => {
					const n = y(e, t),
						s = n && n.id;
					if (!s) return C;
					const {
						commentsPageKey: r
					} = t, i = e.pages.comments.keyToCommentThreadLinkSets[r], o = [];
					let a = {
						id: s,
						type: c.a.Comment
					};
					do {
						o.push(a), a = i[a.id].next
					} while (a);
					return o
				}),
				T = (e, t) => E(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				I = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				O = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				S = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				j = (e, t) => {
					const n = t.commentsPageKey ? O(e, t) : null;
					return n ? n.depth : null
				},
				k = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== i.C).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				F = e => e.moreComments.models,
				P = e => e.features.comments.models,
				R = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
						commentId: t
					});
					return n ? Object(o.a)(Object(l.G)(e, n), t) : ""
				},
				D = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				L = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				A = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				B = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(p.a)(e, {
							commentId: s
						}),
						i = r && j(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof i) return {
						...r,
						depth: i
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				q = (e, {
					id: t
				}) => e.continueThreads.models[t],
				W = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				z = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				V = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Y = e => e.features.comments.visitHighlightFilter,
				Z = (e, t) => {
					const n = Object(p.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				$ = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(m.S)(e, s)
				},
				ee = (e, {
					commentId: t
				}) => {
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t)
				},
				te = (e, {
					commentId: t
				}) => {
					var n, s;
					const r = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(i.G)(e) || s.F.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.z
				})
			}
		},
		"./src/reddit/selectors/experiments/srCreationEntrypoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Ad,
					experimentEligibilitySelector: o.e
				}), a.a),
				d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: r.Bd,
					experimentEligibilitySelector: o.e
				}), a.a)
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				i = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(o.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				u = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n) return {
						type: r.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						s = u(e, {
							subredditId: t
						}),
						r = c(e, {
							subredditId: t
						});
					if (!n || !s || !r) return !1;
					if (r.applied) return !0;
					const o = Object(i.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = s.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || o
					}) && a
				}
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/IdCard.e48cd64c6cc57e731f50.js.map