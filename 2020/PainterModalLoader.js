// https://www.redditstatic.com/desktop2x/PainterModalLoader.f16cf3d303fc60c91cdc.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PainterModalLoader"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, s) {
			var a, n, r;
			n = [t, e], void 0 === (r = "function" == typeof(a = function(e, t) {
				"use strict";
				var s, a, n = "function" == typeof Map ? new Map : (s = [], a = [], {
						has: function(e) {
							return s.indexOf(e) > -1
						},
						get: function(e) {
							return a[s.indexOf(e)]
						},
						set: function(e, t) {
							-1 === s.indexOf(e) && (s.push(e), a.push(t))
						},
						delete: function(e) {
							var t = s.indexOf(e);
							t > -1 && (s.splice(t, 1), a.splice(t, 1))
						}
					}),
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function i(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !n.has(e)) {
						var t, s = null,
							a = e.clientWidth,
							i = null,
							o = function() {
								e.clientWidth !== a && u()
							},
							c = function(t) {
								window.removeEventListener("resize", o, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(s) {
									e.style[s] = t[s]
								})), n.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", o, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", n.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), u()
					}

					function d(t) {
						var s = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = s, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							n = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var i = e.scrollHeight + s;
						0 !== e.scrollHeight ? (e.style.height = i + "px", a = e.clientWidth, n.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							s = window.getComputedStyle(e, null),
							a = "content-box" === s.boxSizing ? Math.round(parseFloat(s.height)) : e.offsetHeight;
						if (a !== t ? "hidden" === s.overflowY && (d("scroll"), l(), a = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== s.overflowY && (d("hidden"), l(), a = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== a) {
							i = a;
							var n = r("autosize:resized");
							try {
								e.dispatchEvent(n)
							} catch (o) {}
						}
					}
				}

				function o(e) {
					var t = n.get(e);
					t && t.destroy()
				}

				function c(e) {
					var t = n.get(e);
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
						return i(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
			}) ? a.apply(t, n) : a) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, s) {
				return ((s = window.getComputedStyle) ? s(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, s) {
			var a = s("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = a(e, "line-height"),
					s = parseFloat(t, 10);
				if (t === s + "") {
					var n = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = a(e, "line-height"), s = parseFloat(t, 10), n ? e.style.lineHeight = n : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (s *= 4, s /= 3) : -1 !== t.indexOf("mm") ? (s *= 96, s /= 25.4) : -1 !== t.indexOf("cm") ? (s *= 96, s /= 2.54) : -1 !== t.indexOf("in") ? s *= 96 : -1 !== t.indexOf("pc") && (s *= 16), s = Math.round(s), "normal" === t) {
					var r = e.nodeName,
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var o = a(e, "font-size");
					i.style.fontSize = o, i.style.padding = "0px", i.style.border = "0px";
					var c = document.body;
					c.appendChild(i), s = i.offsetHeight, c.removeChild(i)
				}
				return s
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = o,
					d = c(e, o);
				t = n(t), e -= o;
				for (var l = a(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var a, n, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var a = t[s];
							a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
						}
					}
					return function(t, s, a) {
						return s && e(t.prototype, s), a && e(t, a), t
					}
				}(),
				o = u(s("./node_modules/react/index.js")),
				c = u(s("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = u(s("./node_modules/autosize/dist/autosize.js")),
				l = u(s("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function h(e, t) {
				var s = {};
				for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a]);
				return s
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var m = (n = a = function(e) {
				function t() {
					var e, s, a;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
					return s = a = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), a.state = {
						lineHeight: null
					}, a.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), a.textarea.dispatchEvent(t)
					}, a.getValue = function(e) {
						var t = e.valueLink,
							s = e.value;
						return t ? t.value : s
					}, a.updateLineHeight = function() {
						a.setState({
							lineHeight: (0, l.default)(a.textarea)
						})
					}, a.onChange = function(e) {
						a.currentValue = e.target.value, a.props.onChange && a.props.onChange(e)
					}, a.saveDOMNodeRef = function(e) {
						var t = a.props.innerRef;
						t && t(e), a.textarea = e
					}, a.getLocals = function() {
						var e = a,
							t = e.props,
							s = (t.onResize, t.maxRows),
							n = (t.onChange, t.style),
							i = (t.innerRef, h(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							o = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = s && o ? o * s : null;
						return r({}, i, {
							saveDOMNodeRef: c,
							style: d ? r({}, n, {
								maxHeight: d
							}) : n,
							onChange: a.onChange
						})
					}, p(a, s)
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
				}(t, e), i(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							s = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), s && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							s = e.saveDOMNodeRef,
							a = h(e, ["children", "saveDOMNodeRef"]);
						return o.default.createElement("textarea", r({}, a, {
							ref: s
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(o.default.Component), a.defaultProps = {
				rows: 1
			}, n);
			t.default = m, m.propTypes = {
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var a, n = s("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (a = n) && a.__esModule ? a : {
					default: a
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, s, n, r, i) {
					if (i !== a) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return s.checkPropTypes = n, s.PropTypes = s, s
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/graphql/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"7e85bf548364"}')
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"37d0a2fec08a"}')
		},
		"./src/graphql/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"ae6b571b0675"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const s = new a.BigNumber(e),
					n = new a.BigNumber(t),
					r = new a.BigNumber(s.dividedBy(n)),
					i = new a.BigNumber("100").multipliedBy(r);
				return new a.BigNumber(i).toNumber()
			}
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				const t = {};
				for (const s in e) {
					t[s.replace(/_\w/g, e => e[1].toUpperCase())] = e[s]
				}
				return t
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/app/strings/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");
			var u = s("./src/reddit/endpoints/governance/poll.ts");
			var h = s("./src/reddit/endpoints/governance/wallet.ts"),
				p = s("./src/reddit/models/Poll/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				b = s("./src/reddit/selectors/gov.ts"),
				y = s("./src/reddit/actions/governance/constants.ts"),
				f = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "g", (function() {
				return R
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "c", (function() {
				return z
			}));
			const v = Object(n.a)(y.b),
				O = Object(n.a)(y.c),
				x = Object(n.a)(y.d),
				C = Object(n.a)(y.e),
				j = Object(n.a)(y.f),
				k = (Object(n.a)(y.g), Object(n.a)(y.h), Object(n.a)(y.i)),
				w = Object(n.a)(y.j),
				_ = Object(n.a)(y.k),
				E = Object(n.a)(y.l),
				I = Object(n.a)(y.r),
				L = Object(n.a)(y.s),
				S = Object(n.a)(y.t),
				P = Object(n.a)(y.u),
				T = Object(n.a)(y.v),
				M = Object(n.a)(y.w),
				N = Object(n.a)(y.x),
				A = Object(n.a)(y.y),
				D = (e, t) => async (s, a, n) => {
					let r, {
							apiContext: i,
							gqlContext: c
						} = n,
						d = a().polls.models[e];
					if (s(_({
							pollId: e
						})), (r = d.type === p.a.GA ? await Object(u.c)(c(), e, t) : await Object(u.b)(i(), d.subredditId, e, t)).ok) {
						if (d.type === p.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							s(j({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else s(E(r.body));
						const n = a();
						if ((d = n.polls.models[e]) && Object(p.d)(d)) {
							const {
								postId: e
							} = d, t = n.posts.models[e];
							t && t.voteState === g.a.notVoted && s(Object(o.X)(e))
						}
					} else s(w({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(f.a)(s, r.error || r.errors[0].messsage)
				}, R = (e, t) => async (s, n, o) => {
					let {
						apiContext: u
					} = o;
					s(S());
					const h = n().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: h
					}));
					if (p.ok) {
						const o = n().user.language;
						s(P(Object.assign({}, p.body, {
							subredditId: e.subredditId
						}))), s(Object(c.e)({
							kind: m.b.SuccessCommunity,
							text: Object(a.a)(o, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(b.p)(n(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(i.f)())
					} else s(I({
						error: p.error
					})), Object(f.a)(s, p.error)
				}, B = e => async (t, s, a) => {
					let {
						apiContext: n
					} = a;
					t(M());
					const r = await Object(h.a)(n(), e);
					r.ok ? t(N(r.body)) : t(T({
						error: r.error
					}))
				}, z = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r;
					s(x());
					const o = await
					function(e, t, s) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(i(), e, t);
					if (o.ok) {
						s(N({
							[t]: o.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(c.e)({
							kind: m.b.SuccessCommunity,
							text: Object(a.a)(n().user.language, r, {
								tokenName: Object(b.p)(n(), {
									subredditId: t
								})
							})
						}))
					} else Object(f.a)(s, o.error)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/uuid/v4.js"),
				r = s.n(n),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/formatApiError/index.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/actions/upload.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				g = s("./src/reddit/helpers/imagePreview/index.ts"),
				b = s("./src/reddit/helpers/media/index.ts"),
				y = s("./src/reddit/models/Upload/index.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/telemetry/index.ts");
			const O = async e => {
				let {
					state: t,
					uploadKey: s,
					assetId: a,
					isCanceled: n,
					fileSource: r,
					uploadDuration: i,
					correlationId: o
				} = e;
				const c = t.uploads[s],
					d = n || c.status === y.a.CANCELED,
					{
						file: l,
						url: u,
						metadata: h,
						error: p
					} = c,
					m = h.mimetype || l.type,
					g = m.startsWith("video/"),
					b = c.status === y.a.SUCCESS;
				let O = "";
				p ? O = JSON.stringify(p) : d && (O = "canceled");
				const x = {
					width: h.width,
					height: h.height,
					duration: h.videoDuration && Math.round(1e3 * h.videoDuration)
				};
				Object(v.a)(Object.assign({
					source: g ? "videoupload" : "imageupload",
					action: "upload",
					correlationId: o,
					noun: g ? "video" : "image"
				}, (e => Object.assign({}, f.defaults(e), {
					screen: f.screen(e),
					profile: f.profile(e),
					subreddit: f.subreddit(e)
				}))(t), {
					actionInfo: Object.assign({}, f.actionInfo(t), {
						success: b
					}, O ? {
						reason: O
					} : {}),
					media: Object.assign({
						mimetype: m,
						uploadDuration: i,
						source: r,
						fileName: l.name,
						size: l.size,
						type: g ? "video" : "image"
					}, a ? {
						id: a
					} : {}, u ? {
						url: u
					} : {}, x)
				}))
			};
			var x = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/postCreations.ts"),
				k = s("./src/reddit/actions/postCreation/constants.ts");
			s.d(t, "d", (function() {
				return I
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return T
			}));
			const w = Object(c.a)(k.v),
				_ = Object(c.a)(k.w),
				E = Object(c.a)(k.u),
				I = e => async (t, s) => {
					t(w());
					const a = e.map(e => {
						let {
							url: s,
							uploadKey: a
						} = e;
						const n = Object(b.a)(Object(b.c)(s), "poster.png");
						return t(S(n, a))
					});
					await Promise.all(a);
					const n = s().uploads,
						r = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return n[t]
						}).find(e => e.status !== y.a.SUCCESS);
					t(r ? E(r.error) : _())
				}, L = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const S = (e, t, s, n) => async (r, o, c) => {
				let {
					apiContext: d
				} = c;
				const f = Object(j.g)(o()),
					v = Date.now();
				let C = null,
					k = !1,
					w = !1,
					_ = !1;
				const E = e => {
					if (!_ && s && k) {
						_ = !0;
						const a = o(),
							n = Date.now() - v,
							r = Object(m.c)(m.a.PostComposer);
						w ? O({
							state: a,
							uploadKey: t,
							assetId: C,
							isCanceled: e,
							fileSource: s,
							uploadDuration: n,
							correlationId: r
						}) : x.q(a, t)
					}
				};
				t.startsWith(y.b.RTE_MEDIA);
				await r(Object(l.k)(e, t, async c => {
					k = !0, Object(l.j)(c.id, () => {
						E(!0)
					});
					const {
						error: m,
						metadata: y
					} = await async function(e, t, s, n) {
						const r = s && s.allowedPostTypes,
							o = s && s.name,
							c = await Object(b.g)(t) || t.type,
							d = Object(b.b)(t) || void 0;
						if (!d) return L("UNSUPPORTED_BROWSER");
						const l = {
							localUrl: d,
							mimetype: c
						};
						if (!c || !Object(b.i)(c)) return {
							error: {
								type: i.M
							}
						};
						if (c.startsWith("image/")) {
							if (r && !r.images) {
								const e = a.fbt._("Images are not allowed in r/{subredditName}", [a.fbt._param("subredditName", o)], {
									hk: "3C2E7Q"
								});
								return L(i.M, e)
							}
							if ("image/gif" === c) {
								if (t.size > i.R) return L(i.H)
							} else if (t.size > i.T) return L(i.K);
							const e = await Object(g.a)(d);
							l.width = e.width, l.height = e.height
						} else if (c.startsWith("video/")) {
							if (t.size > i.Y) return L(i.Wb);
							let e;
							try {
								e = await Object(b.h)(d, !0)
							} catch (u) {
								return L(i.M)
							}
							if (r) {
								const {
									videos: t,
									images: s
								} = r;
								if (s && !t && e.duration > i.Z) {
									const e = a.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [a.fbt._param("subredditName", o)], {
										hk: "46ULiz"
									});
									return L(i.M, e)
								}
								if (!s && !t) {
									const e = a.fbt._("Videos are not allowed in r/{subredditName}", [a.fbt._param("subredditName", o)], {
										hk: "4uTUZb"
									});
									return L(i.M, e)
								}
							}
							if (e.duration > i.X) {
								const e = a.fbt._("Video is too long. Maximum video length is 15 minutes.", null, {
									hk: "26m2mj"
								});
								return L(i.M, e)
							}
							l.height = e.height, l.width = e.width, l.videoDuration = e.duration, l.videoFirstFrameUrl = e.firstFrame.dataUrl
						}
						return {
							metadata: l
						}
					}(o(), e, f);
					if (m || !y) return {
						error: m
					};
					r(Object(l.l)({
						key: t,
						metadata: Object.assign({
							fileSource: s
						}, y)
					})), w = !0, n && n();
					const v = e.name,
						O = await (async (e, t, s) => Object(u.b)(Object(h.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl, "/api/media/asset.json"),
							method: i.cb.POST,
							data: {
								filepath: t,
								mimetype: s
							}
						}))(d(), v, y.mimetype);
					if (!O.ok) return {
						error: O.error || void 0
					};
					C = O.body.asset.asset_id;
					const x = O.body.asset.websocket_url;
					return {
						uploadLease: O.body.args,
						websocketUrl: x
					}
				}, !0)), E(!1)
			}, P = e => async (t, s, a) => {
				let {
					apiContext: n
				} = a;
				const r = s().uploads[e];
				r && !Object(y.d)(r) && await t(S(r.file, r.key, r.metadata.fileSource))
			}, T = (e, t, s) => async (n, i) => {
				const c = e.map((e, a) => new Promise(async a => {
						const i = Object(y.e)(y.b.RTE_MEDIA, "".concat(s, "-").concat(r()().slice(-6)));
						await n(S(e, i, t, () => a(i))), a(i)
					})),
					l = await Promise.all(c);
				n(function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return async (s, n) => {
						const {
							uploads: r,
							user: {
								language: i
							}
						} = n(), c = e.map(e => r[e]).filter(e => e.status === y.a.FAILED && !e.metadata.mimetype).map(e => e.error), l = c.length > t ? t - 1 : c.length, u = c.length - l;
						c.slice(0, l).forEach(e => s(Object(d.e)({
							duration: d.a,
							kind: C.b.Error,
							text: Object(o.a)(i, e)
						}))), u > 0 && s(Object(d.e)({
							duration: d.a,
							kind: C.b.Error,
							text: a.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [a.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					}
				}(l))
			}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/reddit/actions/governance/index.ts"),
				o = s("./src/reddit/actions/layers.ts"),
				c = s("./src/reddit/actions/page.ts"),
				d = s("./src/reddit/actions/pages/subreddit.ts"),
				l = s("./src/reddit/actions/postDraft.ts"),
				u = s("./src/reddit/actions/scheduledPosts/index.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = s("./src/config.ts"),
				g = s("./src/lib/convertToCamelCase/index.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				y = s("./src/reddit/endpoints/post/create.ts");
			var f = s("./src/reddit/endpoints/scheduledPosts/index.ts"),
				v = s("./src/reddit/endpoints/scheduledPosts/update.ts"),
				O = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				C = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				k = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				w = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/reddit/models/Poll/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/models/User/index.ts"),
				S = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				P = s("./src/reddit/selectors/layers.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				M = s("./src/reddit/selectors/postDraft.ts"),
				N = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/models/ScheduledPost/index.ts"),
				B = s("./src/reddit/actions/postCreation/constants.ts"),
				z = s("./src/reddit/actions/postCreation/general.ts"),
				U = s("./src/reddit/actions/postCreation/mediaUpload.ts");
			s.d(t, "b", (function() {
				return V
			})), s.d(t, "a", (function() {
				return Q
			}));
			const H = Object(n.a)(B.y),
				F = Object(n.a)(B.N),
				Y = Object(n.a)(B.p),
				q = Object(n.a)(B.A),
				W = Object(n.a)(B.Y),
				V = Object(n.a)(B.H),
				X = Object(n.a)(B.a),
				Z = Object(n.a)(B.D),
				G = e => "/r/".concat(e, "/about/").concat(R.p),
				K = (e, t) => {
					const s = t.creations.formData.govType,
						a = Object.assign({}, e);
					if (s && (a.type = s), a.type === _.a.ReplaceTopMod) a.params = {
						userName: t.creations.formData.newTopMod
					}, a.options = _.f[_.a.ReplaceTopMod]();
					else if (a.type === _.a.Spinoff) {
						const e = t.creations.formData.newSubreddit;
						a.params = {
							subreddit: e
						}, a.options = _.f[_.a.Spinoff](e)
					} else a.options = a.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text);
					return a
				},
				J = e => {
					const t = e.uploads,
						s = Object(T.K)(e),
						n = Object(T.a)(e),
						r = Object(T.V)(e);
					if (n === a.Hb.POST) return p.a.getPendingThumbnailUploads(r, t);
					if (n === a.Hb.MEDIA && s) {
						const {
							video: e
						} = s;
						if (e && e.thumbnail && !t[E.n]) return [Object.assign({}, e.thumbnail, {
							uploadKey: E.n
						})]
					}
				},
				Q = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r, o = n();
					const {
						pending: c
					} = o.creations.api.post.submit, d = Object(M.g)(o);
					if (c || d) return;
					s(Z(e)), o = n();
					const u = Object(T.a)(o),
						h = O.d.rteVideoPoster(o),
						p = J(o),
						m = u === a.Hb.MEDIA;
					p && (h || m) && (await s(U.d(p)), J(n())) || (e === E.r.Draft ? await s(Object(l.r)(t.draftId)) : e === E.r.ScheduledPost && Object(N.q)(o) ? await s($(t)) : e === E.r.ScheduledPost ? await s(ee(t)) : await s(te(t)))
				}, $ = e => async (t, s, a) => {
					let {
						gqlContext: n
					} = a;
					const i = s(),
						o = Object(T.S)(i),
						d = Object(T.T)(i, e),
						l = Object(T.g)(i),
						h = Object(N.q)(i);
					if (!(d && l.id && o && Object(C.f)(h))) return;
					const p = l.id,
						m = Object(N.a)(i, {
							subredditId: p,
							scheduledPostId: h
						});
					if (m && Object(r.a)(Object(k.v)(m)(i)), t(H(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(T.s)(s()))) return;
					const g = Object(f.e)({
							submission: d,
							schedule: o,
							subredditId: l.id,
							scheduledPostId: h
						}),
						b = await Object(v.a)(n(), g);
					if (b.ok) return t(Object(u.e)({
						subredditId: l.id
					})), void t(Object(c.G)(G(l.name), !1));
					const y = b.error;
					t(Y(y))
				}, ee = e => async (t, s, a) => {
					let {
						gqlContext: n
					} = a;
					const i = s(),
						o = Object(T.S)(i),
						d = Object(T.T)(i, e),
						l = Object(T.g)(i);
					if (!d || !l.id || !o) return;
					if (t(H(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(T.s)(s()))) return;
					const h = await Object(f.a)(n(), Object(f.d)(d, o, l.id));
					if (h.ok) {
						t(Object(u.e)({
							subredditId: l.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(r.a)(Object(k.s)(Object(x.d)(e))(i)), void t(Object(c.G)(G(l.name), !1))
					}
					const p = h.error;
					t(Y(p))
				}, te = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const l = s(),
						u = Object(T.T)(l, e),
						p = !!Object(P.a)(l),
						f = l.creations.formData.isPoll,
						v = l.creations.formData.polls ? K(l.creations.formData.polls, l) : K({
							duration: a.x,
							options: []
						}, l);
					if (!u) return;
					if (t(H(u)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(T.s)(s()))) return;
					let O;
					if ((O = f ? Object(S.a)(l) ? await Object(y.a)(r(), Object.assign({}, u, {
								kind: E.p.POLL,
								poll: v
							})) : await
							function(e, t, s) {
								const n = t.destSubreddit.id;
								return Object(b.b)(e, {
									method: a.cb.POST,
									endpoint: "".concat(m.a.metaUrl, "/polls/").concat(n),
									type: "json",
									data: Object.assign({
										poll: s,
										subredditId: n
									}, Object(g.a)(Object(y.c)(t)))
								}).then(async e => {
									const s = e.ok ? Object.assign({}, e, {
											body: {
												json: {
													data: e.body
												}
											}
										}) : e,
										a = await Object(y.d)(s, t);
									if (a.ok) {
										const t = a.body;
										return {
											body: Object.assign({}, t, {
												poll: e.body.poll
											}),
											ok: !0,
											status: e.status
										}
									}
									return {
										error: a.body,
										ok: !1,
										status: e.status
									}
								})
							}(r(), u, v) : await Object(y.b)(r(), u)).ok) {
						const e = Object(A.i)(l),
							s = O.body;
						if (t(F({
								draftId: u.draftId,
								response: s
							})), f && !Object(S.a)(l) && t(Object(i.e)({
								poll: s.poll
							})), !p) {
							const a = (s.path || "/user/".concat(Object(L.f)(e), "/posts")).replace(/^\/r\/u_/, "/user/");
							t(Object(d.j)(u.destSubreddit.name)), t(Object(c.G)(a, !1))
						}
					} else {
						if (f) {
							const e = O.error;
							t(q(e))
						}
						const e = O.error;
						if (e.type === a.E.BAD_CAPTCHA_ERROR) t(X());
						else if (e.type === a.E.VALIDATION_ERROR) t(W(e));
						else if (e.type === a.E.SUBMIT_VALIDATION_ERROR) t(V(e));
						else if (e.type === a.E.RATELIMIT && p) {
							t(Object(o.i)());
							const s = e.fields && e.fields[0] && e.fields[0].msg || Object(w.c)("Layer creation has failed. You can create one layer per 60 minutes"),
								a = Object(h.d)(s, I.b.Error);
							t(Object(h.e)(a))
						} else t(Y(e))
					}
					const x = Object(z.o)(u.kind),
						C = O.ok && O.body && O.body.id && Object(D.m)(O.body.id),
						k = s();
					j.o(k, x, C)
				}
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/scheduledPosts/index.ts"),
				c = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				h = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = s("./src/reddit/models/ScheduledPost/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/routes/postCreation/index.ts"),
				b = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const y = Object(i.a)(c.n),
				f = Object(i.a)(c.b),
				v = (e, t) => async (s, a, r) => {
					const i = Object(b.a)(a(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await s(Object(n.b)(Object(g.c)(i.subreddit.name))), s((Object(p.n)(i) ? f : y)(i)))
				}, O = (e, t) => {
					Object(p.n)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, x = (e, t, s) => async (n, i, g) => {
					let {
						gqlContext: y
					} = g;
					n(Object(o.g)());
					const f = Object(b.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (f && Object(p.n)(f) && Object(r.a)(Object(h.z)()(i(), f)), !f) return void n(Object(o.f)({
						message: a.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(s).length) return void O(n, f);
					const v = await Object(l.a)(y(), Object.assign({}, s, {
							id: t
						})),
						C = v.body;
					if (!(v.ok && C && C.data && C.data.updateScheduledPost && C.data.updateScheduledPost.ok && C.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: v.error && v.error.fields && v.error.fields.length && v.error.fields[0].msg || a.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(d.e)(Object(d.d)(c.t(), m.b.Error, c.s(), x(e, t, s))));
					n(Object(d.e)(Object(d.d)(c.w(), m.b.SuccessCommunity))), O(n, Object(u.d)(C.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return v
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./src/lib/assertNever.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				l = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = s("./src/reddit/models/ScheduledPost/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				m = s("./src/telemetry/index.ts"),
				g = function(e, t) {
					var s = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
					}
					return s
				};
			const b = 25,
				y = 1e4,
				f = Object(n.a)(r.g),
				v = Object(n.a)(r.k),
				O = Object(n.a)(r.j),
				x = Object(n.a)(r.o),
				C = Object(n.a)(r.d),
				j = Object(n.a)(r.f),
				k = Object(n.a)(r.m),
				w = Object(n.a)(r.a),
				_ = Object(n.a)(r.c),
				E = Object(n.a)(r.e),
				I = Object(n.a)(r.h),
				L = (e, t) => {
					e(E()), e(Object(o.e)(Object(o.d)(r.r(), h.b.Error, r.s(), S(t))))
				},
				S = e => {
					var {
						subredditId: t,
						includeStandalone: s = {
							standaloneFirst: b
						},
						includeRecurring: a = {
							recurringFirst: y
						}
					} = e, n = g(e, ["subredditId", "includeStandalone", "includeRecurring"]);
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						if (Object(p.g)(r(), {
								subredditId: t
							})) return;
						e(f());
						const l = Object.assign({
								subredditId: t,
								includeRecurring: a,
								includeStandalone: s
							}, n),
							u = await Object(c.b)(o(), l);
						Object(c.f)(u, l) ? T(e, Object(d.e)(u.body.data), l) : L(e, l)
					}
				},
				P = e => async (t, s, a) => {
					let {
						gqlContext: n
					} = a;
					const r = s();
					if (!Object(p.g)(r, {
							subredditId: e
						})) return t(S({
						subredditId: e
					}));
					if (!Object(p.f)(r, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const i = Object(p.b)(r, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!i) return;
					t(f());
					const o = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: b,
								standaloneAfter: i
							}
						},
						l = await Object(c.b)(n(), o);
					l.ok ? T(t, Object(d.e)(l.body.data), o) : t(E())
				}, T = (e, t, s) => {
					Object(d.b)(t) ? e(j(t)) : Object(d.a)(t) ? e(w(t)) : Object(d.c)(t) ? e(k(t)) : L(e, s)
				}, M = (e, t) => async (s, n, r) => {
					const o = {},
						c = n();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isSpoiler":
							o[e] = !t[e];
							break;
						case "isSticky":
							o.sticky = t.isSticky ? "NONE" : "SECOND";
							break;
						default:
							return Object(a.a)(e)
					}
					Object(m.a)(Object(l.y)(e, o[e], Object(u.n)(t))(c)), s(Object(i.a)(t.subreddit.id, t.id, o))
				}
		},
		"./src/reddit/components/ImageEditor/LayerDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				LayerDisplayWrapper: "_2cZW6sbwA8uYP4ahavyQac",
				layerDisplayWrapper: "_2cZW6sbwA8uYP4ahavyQac",
				isActive: "_1yASfnjbduSBmVpJ2FTMgp",
				LayerDisplay: "DVc3peCBDtmlB890XjTwI",
				layerDisplay: "DVc3peCBDtmlB890XjTwI",
				LayerVisibilityIcon: "_2_ZNtoOljlQ_KwIOblCVje",
				layerVisibilityIcon: "_2_ZNtoOljlQ_KwIOblCVje",
				LayerMenuButton: "_3-eho9QZq6bRllCJ0DPa4V",
				layerMenuButton: "_3-eho9QZq6bRllCJ0DPa4V",
				LayerMenuOpened: "_220_lWna4CFWmic9n9FpiX",
				layerMenuOpened: "_220_lWna4CFWmic9n9FpiX",
				LayerTitle: "_3tTtXEXLwQS8dcewWtbXal",
				layerTitle: "_3tTtXEXLwQS8dcewWtbXal",
				LayerOptions: "UOiLi9x4xOm-ybqYRrGOy",
				layerOptions: "UOiLi9x4xOm-ybqYRrGOy",
				LayerOptionsRow: "_3h6SrZPwEBmlYC7DYH0zqA",
				layerOptionsRow: "_3h6SrZPwEBmlYC7DYH0zqA",
				LayerOptionsFieldLabel: "_8gwayd1_bmxLoCE3hk8sb",
				layerOptionsFieldLabel: "_8gwayd1_bmxLoCE3hk8sb",
				LayerOptionsOpacityInput: "_88ftXUzp-QdmNESPrimq6",
				layerOptionsOpacityInput: "_88ftXUzp-QdmNESPrimq6",
				LayerOptionsOpacitySlider: "_3EwIitr1Ij2kEFikNLgeJy",
				layerOptionsOpacitySlider: "_3EwIitr1Ij2kEFikNLgeJy",
				LayerOptionsBlendMode: "_3zXLpFw5zaWeG8WVVHaMLA",
				layerOptionsBlendMode: "_3zXLpFw5zaWeG8WVVHaMLA",
				LayerOptionsActionIcon: "_1xnLAqjJiMBHIqYDImXXpU",
				layerOptionsActionIcon: "_1xnLAqjJiMBHIqYDImXXpU",
				RedIcon: "_2G4lXH6EV9B9vA_pmR0vFY",
				redIcon: "_2G4lXH6EV9B9vA_pmR0vFY",
				BlueIcon: "C5y8nT0JUJ1zsfKKgfz1u",
				blueIcon: "C5y8nT0JUJ1zsfKKgfz1u",
				LayerOptionsActionsContainer: "sjONoN7zgiZFwFj11gi6I",
				layerOptionsActionsContainer: "sjONoN7zgiZFwFj11gi6I",
				LayerOptionsActionsButtons: "_3WRft0uAGAFlCYSe1mzSmy",
				layerOptionsActionsButtons: "_3WRft0uAGAFlCYSe1mzSmy",
				Hidden: "_2TAI3T5JD4ZDEiuvwzbeUE",
				hidden: "_2TAI3T5JD4ZDEiuvwzbeUE",
				LayerOptionsEditName: "_3TqPQAXMH-vDpNmiqEtWNr",
				layerOptionsEditName: "_3TqPQAXMH-vDpNmiqEtWNr",
				LayerOptionsActionIconTitle: "_2er7m4xrDhFuJzZYLWcBRT",
				layerOptionsActionIconTitle: "_2er7m4xrDhFuJzZYLWcBRT",
				LayerOptionsActionButton: "_1--fS3TmtLNQ7ylTwNrT4W",
				layerOptionsActionButton: "_1--fS3TmtLNQ7ylTwNrT4W",
				HiddenInput: "_1PHh6t7IH6UpzsVqzuNPRl",
				hiddenInput: "_1PHh6t7IH6UpzsVqzuNPRl",
				UploadIcon: "uaT2PpQqneJsx066IVkzm",
				uploadIcon: "uaT2PpQqneJsx066IVkzm"
			}
		},
		"./src/reddit/components/ImageEditor/LayersPanel/index.m.less": function(e, t, s) {
			e.exports = {
				LayersPanel: "_1o6818ue4q9yguB55PujdO",
				layersPanel: "_1o6818ue4q9yguB55PujdO",
				ArtLayersTitle: "_1v_cl6JHcgY7up0l76Txrk",
				artLayersTitle: "_1v_cl6JHcgY7up0l76Txrk",
				ArtLayersTitleIcon: "_1oR7Y-1YZamZa0AC0ZpIBO",
				artLayersTitleIcon: "_1oR7Y-1YZamZa0AC0ZpIBO"
			}
		},
		"./src/reddit/components/ImageEditor/Options/index.m.less": function(e, t, s) {
			e.exports = {
				Options: "P0UwY3syKXx-4fypy4xhj",
				options: "P0UwY3syKXx-4fypy4xhj",
				commonRail: "_1Nsn6k1lljvhzZ0DEFrQxb",
				ColorPickerRail: "_3kYzA12GkSUZ2EJWh928vH",
				colorPickerRail: "_3kYzA12GkSUZ2EJWh928vH",
				ThicknessRail: "_2tobPZfU4kWPoHu1ies8fM",
				thicknessRail: "_2tobPZfU4kWPoHu1ies8fM",
				LightnessRail: "_3dX23SFZAhkzDik1zyvqAu",
				lightnessRail: "_3dX23SFZAhkzDik1zyvqAu",
				OpacityRail: "_1lJGncLnBnW7iQR_zgwlAa",
				opacityRail: "_1lJGncLnBnW7iQR_zgwlAa",
				CommonSlider: "_1gSWyx_roiyCa7HWeANpET",
				commonSlider: "_1gSWyx_roiyCa7HWeANpET",
				PickerMarker: "_2tOIw_g9RmvPfTKQBLOOIE",
				pickerMarker: "_2tOIw_g9RmvPfTKQBLOOIE",
				pickerMarkerBefore: "_3Lhd415elnDobO6fSCpVqt",
				ColorPickerMarker: "_17sbuiqMsb5NLsHXv5GMqD",
				colorPickerMarker: "_17sbuiqMsb5NLsHXv5GMqD",
				OpacityPickerMarker: "_3JL1epVhmiNZV1J92WTw0z",
				opacityPickerMarker: "_3JL1epVhmiNZV1J92WTw0z",
				SliderActions: "_2G-utqQgkaYOKbA_-V_HfK",
				sliderActions: "_2G-utqQgkaYOKbA_-V_HfK",
				ShapeActions: "vhHBHK8NHmDl_ZiMT8RLT",
				shapeActions: "vhHBHK8NHmDl_ZiMT8RLT",
				ShapePicker: "_1p6O3UHjoqtZYqMagbWfSl",
				shapePicker: "_1p6O3UHjoqtZYqMagbWfSl",
				RoundShapePicker: "_15qjA45zqZKW8f7dvMie0x",
				roundShapePicker: "_15qjA45zqZKW8f7dvMie0x",
				ActiveShape: "_3fetWC3Qsn0bEGpeHKfdc3",
				activeShape: "_3fetWC3Qsn0bEGpeHKfdc3",
				SettingsTooltip: "_1D1F2I6RBGX2fjTf8UdD68",
				settingsTooltip: "_1D1F2I6RBGX2fjTf8UdD68",
				settingsTooltipBefore: "FD2ZH1OzTPBPQlL-QTREJ",
				ColorSettings: "SeaYJ5CruDKY0cJzFhlWb",
				colorSettings: "SeaYJ5CruDKY0cJzFhlWb",
				BrushSettings: "_1rmllZUYGddOmqTsUbBM60",
				brushSettings: "_1rmllZUYGddOmqTsUbBM60",
				TrackIcon: "qzlWdN96YYP9uUbS1tGQp",
				trackIcon: "qzlWdN96YYP9uUbS1tGQp",
				ThicknessIndicator: "ED3CF6SxXg1dPU9MEFI_E",
				thicknessIndicator: "ED3CF6SxXg1dPU9MEFI_E",
				PickerMarkersContainer: "_2CMjA5TIDhAakKphnwHTAe",
				pickerMarkersContainer: "_2CMjA5TIDhAakKphnwHTAe",
				SettingsContainer: "_3UhNfWueuHUZrCQQGpnG4P",
				settingsContainer: "_3UhNfWueuHUZrCQQGpnG4P",
				Sliders: "_3JwQHX5KdkhqyvRu6pB6qA",
				sliders: "_3JwQHX5KdkhqyvRu6pB6qA",
				Hidden: "_1GlnimJCiIBwXPEvcmgMrl",
				hidden: "_1GlnimJCiIBwXPEvcmgMrl",
				Pipette: "_3vuwJ0k5t9gK3F3x5YR62s",
				pipette: "_3vuwJ0k5t9gK3F3x5YR62s"
			}
		},
		"./src/reddit/components/ImageEditor/PaintBar/index.m.less": function(e, t, s) {
			e.exports = {
				PaintBarWrapper: "_1BsQGU7m93h_qKETFg2bWx",
				paintBarWrapper: "_1BsQGU7m93h_qKETFg2bWx",
				PaintBar: "dY3jkBc_VNr5yjYAwqPLt",
				paintBar: "dY3jkBc_VNr5yjYAwqPLt",
				BackgroundImage: "_3KM5vtxF_NyVTAYgLePgw1",
				backgroundImage: "_3KM5vtxF_NyVTAYgLePgw1",
				BackgroundMatt: "_2hXRSDMw6ftmhg_B08ROq2",
				backgroundMatt: "_2hXRSDMw6ftmhg_B08ROq2",
				PaintLimitErrorText: "vFzEP1ZwE00hkGPlP9mS3",
				paintLimitErrorText: "vFzEP1ZwE00hkGPlP9mS3"
			}
		},
		"./src/reddit/components/ImageEditor/Pipette/index.m.less": function(e, t, s) {
			e.exports = {
				PipetteWrapper: "_3axnC3H6mhQk8vMWO0FA9m",
				pipetteWrapper: "_3axnC3H6mhQk8vMWO0FA9m",
				SelectedColor: "_1U27xm4Bu0Zhcqp2z1bKwm",
				selectedColor: "_1U27xm4Bu0Zhcqp2z1bKwm",
				PipetteIcon: "_2l7d-46gYiXYDRo-Q9LfAn",
				pipetteIcon: "_2l7d-46gYiXYDRo-Q9LfAn",
				ActiveIcon: "_3DRJoZ40sPGw4gMc-2j-i_",
				activeIcon: "_3DRJoZ40sPGw4gMc-2j-i_",
				PipetteButton: "vvoAP5oCc1inTSm5McLZW",
				pipetteButton: "vvoAP5oCc1inTSm5McLZW"
			}
		},
		"./src/reddit/components/ImageEditor/ResizeTool/index.m.less": function(e, t, s) {
			e.exports = {
				ResizeTool: "_3RR_oruJkzQjiSbovVEBFX",
				resizeTool: "_3RR_oruJkzQjiSbovVEBFX",
				Box: "jmUfmI_kRQpkVKsi0j_7g",
				box: "jmUfmI_kRQpkVKsi0j_7g"
			}
		},
		"./src/reddit/components/ImageEditor/SavedColors/index.m.less": function(e, t, s) {
			e.exports = {
				ColorSlotsWrapper: "_3TlVU1Vi-wkJxqD5qZ37gV",
				colorSlotsWrapper: "_3TlVU1Vi-wkJxqD5qZ37gV",
				AddColor: "_2ZpPG0zyx_3U3ZAmEj9dcS",
				addColor: "_2ZpPG0zyx_3U3ZAmEj9dcS",
				ColorSlot: "_3MmDuip4kQIdx2dOq8Yg1x",
				colorSlot: "_3MmDuip4kQIdx2dOq8Yg1x",
				ActiveSlot: "_1u0GdibwV_WoVYcuJ14SPe",
				activeSlot: "_1u0GdibwV_WoVYcuJ14SPe"
			}
		},
		"./src/reddit/components/ImageEditor/Slider/index.m.less": function(e, t, s) {
			e.exports = {
				Rail: "_277luO5j_BMKbi-BzA1uAH",
				rail: "_277luO5j_BMKbi-BzA1uAH",
				Vertical: "_3pGogE3QyteY_UJNsiQjdJ",
				vertical: "_3pGogE3QyteY_UJNsiQjdJ",
				CommonTrack: "Ug8bYMTLvegi3cK5zRxiU",
				commonTrack: "Ug8bYMTLvegi3cK5zRxiU",
				Track: "_28VJjmrcTKlbmDFKocVv8o",
				track: "_28VJjmrcTKlbmDFKocVv8o"
			}
		},
		"./src/reddit/components/ImageEditor/Tools/index.m.less": function(e, t, s) {
			e.exports = {
				Tools: "_2_qWPCoU1ZVH2k7LOZYbEC",
				tools: "_2_qWPCoU1ZVH2k7LOZYbEC",
				ToolIcon: "_16rIPrLOqXFslR0_Gr3AfB",
				toolIcon: "_16rIPrLOqXFslR0_Gr3AfB",
				isActive: "_19md7rZqd-Ky-aRB19eRgV",
				ToolButton: "_2rmBMD0KQmrqnIu-EHBluq",
				toolButton: "_2rmBMD0KQmrqnIu-EHBluq",
				Shape: "_1QrpHig7f-kyWHug2Ig5Rg",
				shape: "_1QrpHig7f-kyWHug2Ig5Rg",
				RoundShape: "KMpm55g0-tdeIvI3j5BO3",
				roundShape: "KMpm55g0-tdeIvI3j5BO3",
				FlatShape: "_1OGMYboGjX24AQg51XtxCL",
				flatShape: "_1OGMYboGjX24AQg51XtxCL",
				Hidden: "gjHNs6VtDnVauaug7AgDt",
				hidden: "gjHNs6VtDnVauaug7AgDt"
			}
		},
		"./src/reddit/components/ImageEditor/index.m.less": function(e, t, s) {
			e.exports = {
				LayerMaker: "_21MPAMg5dXbSzifEOPoid2",
				layerMaker: "_21MPAMg5dXbSzifEOPoid2",
				LayerMakerHeader: "_1kzuYP8ZEFLO62XwUo9P3g",
				layerMakerHeader: "_1kzuYP8ZEFLO62XwUo9P3g",
				LayerMakerTitle: "_3yAR0WUYEOGAyCsZRYcWze",
				layerMakerTitle: "_3yAR0WUYEOGAyCsZRYcWze",
				LayerMakerCloseButton: "_34VS7fcNfr71Iy_1w7Krr4",
				layerMakerCloseButton: "_34VS7fcNfr71Iy_1w7Krr4",
				LayerMakerCloseIcon: "_1UcQNhI0jGR2LOl0Q-t7Y9",
				layerMakerCloseIcon: "_1UcQNhI0jGR2LOl0Q-t7Y9",
				LayerMakerCloseTitle: "_1n0AK_hH6VyYLO_AZcYl3s",
				layerMakerCloseTitle: "_1n0AK_hH6VyYLO_AZcYl3s",
				LayerMakerUndoBar: "_1hYl0exT-UECZhxaniAtTW",
				layerMakerUndoBar: "_1hYl0exT-UECZhxaniAtTW",
				LayerMakerUndoIcon: "_3eaSQSCqUIzW7YW8IrM8PY",
				layerMakerUndoIcon: "_3eaSQSCqUIzW7YW8IrM8PY",
				LayerMakerUndoIconActive: "_93isTuhjxwGX2jZSYJH-e",
				layerMakerUndoIconActive: "_93isTuhjxwGX2jZSYJH-e",
				LayerMakerPaintBar: "_1T0IA13FnkKohJ3iyAviQO",
				layerMakerPaintBar: "_1T0IA13FnkKohJ3iyAviQO",
				LayerMakerBody: "_33e63Ojf2I1jhZSGDVOfCh",
				layerMakerBody: "_33e63Ojf2I1jhZSGDVOfCh",
				SidebarMenu: "_26SPP-tBaU9bEU5Qey4ftj",
				sidebarMenu: "_26SPP-tBaU9bEU5Qey4ftj",
				LayersWrapper: "_3ckmPEp4cjF9rCyzblMzCJ",
				layersWrapper: "_3ckmPEp4cjF9rCyzblMzCJ",
				ArtLayersMenu: "_2ddQzl_sEtWCbgUBncwE6H",
				artLayersMenu: "_2ddQzl_sEtWCbgUBncwE6H",
				ArtLayersMenuItem: "_3mwxUsPKclJciS87LRhPaN",
				artLayersMenuItem: "_3mwxUsPKclJciS87LRhPaN",
				collapsed: "_3Wz0blCjqrJbgTNUepUj6y",
				LayerMakerCanvas: "_2_xtll1KJU4JKP-l6DPhMv",
				layerMakerCanvas: "_2_xtll1KJU4JKP-l6DPhMv",
				PointerCanvas: "_6vOEBvcNvLOTEcU9NWXz2",
				pointerCanvas: "_6vOEBvcNvLOTEcU9NWXz2",
				LayerMakerCanvasWrapper: "WCyaPzycoWwpX9niW_SLm",
				layerMakerCanvasWrapper: "WCyaPzycoWwpX9niW_SLm",
				LayerMakerFileDrop: "_38MECp6lgI9avsf4mo07R",
				layerMakerFileDrop: "_38MECp6lgI9avsf4mo07R",
				ArtLayersMenuIcon: "_1Tc85a_N38lNUdJdniff6E",
				artLayersMenuIcon: "_1Tc85a_N38lNUdJdniff6E",
				SaveButton: "v0Srd9qBu-oiTWqOwNbtL",
				saveButton: "v0Srd9qBu-oiTWqOwNbtL",
				titleInputLabel: "_33DefLuL_Ihh-8UXM03G0D",
				titleInput: "IoQa5C21bJbHlfWCjd0Ej",
				Options: "_2b8nvGNFWZMfWIuwGzVJ6t",
				options: "_2b8nvGNFWZMfWIuwGzVJ6t",
				OptionsWhileDrawing: "_3eDctaKOVqt7lStSdSVYji",
				optionsWhileDrawing: "_3eDctaKOVqt7lStSdSVYji"
			}
		},
		"./src/reddit/components/PainterModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react-dom/index.js"),
				c = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/config.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/actions/layers.ts"),
				g = s("./src/reddit/actions/postCreation/general.ts"),
				b = s("./src/reddit/actions/postCreation/mediaUpload.ts"),
				y = s("./src/reddit/actions/postCreation/submit.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/constants/postCreation.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/FileDrop/index.tsx"),
				C = s("./src/reddit/controls/GrowingOutlinedInput/index.tsx"),
				j = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				k = s("./src/reddit/controls/Typography/index.tsx");
			var w, _, E, I = s("./src/reddit/helpers/imagePreview/index.ts"),
				L = s("./src/reddit/helpers/media/index.ts"),
				S = s("./src/reddit/helpers/trackers/layers.ts");

			function P(e, t, s, a) {
				return {
					type: w.Image,
					name: e,
					isVisible: !0,
					opacity: 1,
					blendMode: E.SourceOver,
					image: t,
					width: s,
					height: a,
					positionX: 0,
					positionY: 0,
					isDisabled: !1
				}
			}! function(e) {
				e[e.Color = 0] = "Color", e[e.Art = 1] = "Art", e[e.Image = 2] = "Image", e[e.Text = 3] = "Text"
			}(w || (w = {})),
			function(e) {
				e[e.CreateLayer = 0] = "CreateLayer", e[e.UpdateLayer = 1] = "UpdateLayer", e[e.DeleteLayer = 2] = "DeleteLayer", e[e.SortLayers = 3] = "SortLayers"
			}(_ || (_ = {})),
			function(e) {
				e.SourceOver = "source-over", e.SourceIn = "source-in", e.SourceOut = "source-out", e.SourceAtop = "source-atop", e.DestinationOver = "destination-over", e.DestinationIn = "destination-in", e.DestinationOut = "destination-out", e.DestinationAtop = "destination-atop", e.Lighter = "lighter", e.Copy = "copy", e.XOR = "xor", e.Multiply = "multiply", e.Screen = "screen", e.Overlay = "overlay", e.Darken = "darken", e.Lighten = "lighten", e.ColorDodge = "color-dodge", e.ColorBurn = "color-burn", e.HardLight = "hard-light", e.SoftLight = "soft-light", e.Difference = "difference", e.Exclusion = "exclusion", e.Hue = "hue", e.Saturation = "saturation", e.Color = "color", e.Luminosity = "luminosity"
			}(E || (E = {}));
			var T = s("./src/reddit/models/PostCreationForm/index.ts"),
				M = s("./src/reddit/models/Upload/index.ts"),
				N = s("./src/reddit/selectors/layers.ts"),
				A = s("./src/reddit/selectors/postCreations.ts");
			const D = (e, t, s, a) => {
					const n = s.pop();
					if (n) {
						switch (n.type) {
							case _.CreateLayer:
								e.splice(0, 1);
								break;
							case _.UpdateLayer:
								const t = e[n.index];
								e[n.index] = n.layer, n.layer = t;
								break;
							case _.DeleteLayer:
								e.splice(n.index, 0, n.layer);
								break;
							case _.SortLayers:
								const s = e;
								e = n.layers, n.layers = s
						}
						return a.push(n), t >= e.length && (t -= 1), {
							layers: e,
							activeLayerIndex: t,
							prevActions: s,
							nextActions: a
						}
					}
				},
				R = (e, t, s, a) => {
					const n = a.pop();
					if (n) {
						switch (n.type) {
							case _.CreateLayer:
								e.splice(n.index, 0, n.layer);
								break;
							case _.UpdateLayer:
								const t = e[n.index];
								e[n.index] = n.layer, n.layer = t;
								break;
							case _.DeleteLayer:
								e.splice(0, 1);
								break;
							case _.SortLayers:
								const s = e;
								e = n.layers, n.layers = s
						}
						return s.push(n), t >= e.length && (t -= 1), {
							layers: e,
							activeLayerIndex: t,
							prevActions: s,
							nextActions: a
						}
					}
				};
			var B = s("./node_modules/fbt/lib/FbtPublic.js"),
				z = s("./src/reddit/controls/Sortable/index.tsx"),
				U = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("g", {
					transform: "translate(4 4)"
				}, n.a.createElement("rect", {
					fill: "none",
					stroke: "inherit",
					"stroke-linecap": "round",
					"stroke-miterlimit": "10",
					"stroke-width": "2px",
					width: "16",
					height: "16",
					rx: "3.164"
				}), n.a.createElement("g", {
					transform: "translate(5 5)"
				}, n.a.createElement("line", {
					y2: "6",
					transform: "translate(3)",
					stroke: "inherit",
					"stroke-linecap": "round",
					"stroke-miterlimit": "10",
					"stroke-width": "2px"
				}), n.a.createElement("line", {
					x1: "6",
					transform: "translate(0 3)",
					stroke: "inherit",
					"stroke-linecap": "round",
					"stroke-width": "2px",
					"stroke-miterlimit": "10"
				})))))),
				H = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/lessComponent.tsx")),
				F = s("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				Y = e => n.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20.188",
					className: e.className
				}, n.a.createElement("g", {
					transform: "translate(-196 -135.906)"
				}, n.a.createElement("g", {
					transform: "translate(196 135.906)"
				}, n.a.createElement("g", null, n.a.createElement("g", {
					transform: "translate(3.194 3.224)"
				}, n.a.createElement("g", {
					transform: "translate(0)"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					fill: "none",
					d: "M2.5,0h8.333a2.5,2.5,0,0,1,2.5,2.5v8.333a2.5,2.5,0,0,1-2.5,2.5H2.5a2.5,2.5,0,0,1-2.5-2.5V2.5A2.5,2.5,0,0,1,2.5,0Z"
				}), n.a.createElement("path", {
					d: "M 2.499996185302734 1.499996185302734 C 1.948596954345703 1.499996185302734 1.499996185302734 1.948596954345703 1.499996185302734 2.499996185302734 L 1.499996185302734 10.83333683013916 C 1.499996185302734 11.38473701477051 1.948596954345703 11.83333683013916 2.499996185302734 11.83333683013916 L 10.83333683013916 11.83333683013916 C 11.38473701477051 11.83333683013916 11.83333683013916 11.38473701477051 11.83333683013916 10.83333683013916 L 11.83333683013916 2.499996185302734 C 11.83333683013916 1.948596954345703 11.38473701477051 1.499996185302734 10.83333683013916 1.499996185302734 L 2.499996185302734 1.499996185302734 M 2.499996185302734 -3.814697265625e-06 L 10.83333683013916 -3.814697265625e-06 C 12.21404647827148 -3.814697265625e-06 13.33333683013916 1.11928653717041 13.33333683013916 2.499996185302734 L 13.33333683013916 10.83333683013916 C 13.33333683013916 12.21404647827148 12.21404647827148 13.33333683013916 10.83333683013916 13.33333683013916 L 2.499996185302734 13.33333683013916 C 1.11928653717041 13.33333683013916 -3.814697265625e-06 12.21404647827148 -3.814697265625e-06 10.83333683013916 L -3.814697265625e-06 2.499996185302734 C -3.814697265625e-06 1.11928653717041 1.11928653717041 -3.814697265625e-06 2.499996185302734 -3.814697265625e-06 Z"
				}))), n.a.createElement("path", {
					d: "M5.872,2.539,4.2,2.531,4.19.857A.847.847,0,0,0,3.349.016a.828.828,0,0,0-.833.833l.008,1.674L.849,2.516a.828.828,0,0,0-.833.833.847.847,0,0,0,.841.841L2.531,4.2l.008,1.674a.847.847,0,0,0,.841.841.828.828,0,0,0,.833-.833L4.206,4.206l1.674.008a.828.828,0,0,0,.833-.833A.847.847,0,0,0,5.872,2.539Z",
					transform: "translate(6.52 1.823) rotate(45)"
				})))))),
				q = s("./src/reddit/icons/svgs/LayerDuplicate/index.tsx"),
				W = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M175.768,8.864c-.367-.433-1.308.121-1.768.465l-2.345,1.328c-1.225.773-6.55.851-7.7-.035L162,9.329c-.417-.39-1.271-1.1-1.687-.707a.955.955,0,0,0,0,1.414L162,11.329a7.71,7.71,0,0,0,1.3.752l.007.756a.5.5,0,0,0,.849.343l.518-.528a11.387,11.387,0,0,0,2.816.644l.232.694a.5.5,0,0,0,.94,0l.246-.739a15.972,15.972,0,0,0,2.686-.667l.56.56a.5.5,0,0,0,.846-.35V12a5.385,5.385,0,0,0,1-.671l1.6-1.061a.956.956,0,0,0,.168-1.4Z",
					transform: "translate(-156 1.5)"
				}))),
				V = e => n.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					className: e.className
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M16,9H15V7A5,5,0,1,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,1,1,6,0V9H7Z",
					transform: "translate(2 2)"
				}))),
				X = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M97.707,10.293,94.949,7.535a7.008,7.008,0,0,0-9.9,0l-2.758,2.758a1,1,0,1,0,1.414,1.414l2.758-2.758c.065-.065.142-.111.211-.172a4,4,0,1,0,6.648,0c.069.061.146.107.211.172l2.758,2.758a1,1,0,1,0,1.414-1.414Z",
					transform: "translate(-78 2.5)"
				}))),
				Z = e => n.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					className: e.className
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M92-698H80a1,1,0,0,1-1-1v-7a1,1,0,0,1,1-1h1v-3a5.006,5.006,0,0,1,5-5,5.584,5.584,0,0,1,3.437,1.181,3.945,3.945,0,0,1,1.563,3.1,1.464,1.464,0,0,1-.227,1.041.709.709,0,0,1-.466.307h-.624c-.685-.106-.749-1.336-.75-1.348,0-1.3-1.779-2.284-2.933-2.284a3,3,0,0,0-3,3v3h9a1,1,0,0,1,1,1v7A1,1,0,0,1,92-698Z",
					transform: "translate(-74 718)"
				}))),
				G = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				K = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				J = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/components/ImageEditor/Slider/index.m.less")),
				Q = s.n(J);
			const $ = e => {
					return (e.ownerDocument || document).defaultView || window
				},
				ee = (e, t, s) => (s - t) * e + t,
				te = (e, t, s) => 100 * (e - t) / (s - t),
				se = (e, t, s) => e < t ? t : e > s ? s : e,
				ae = (e, t) => {
					const s = Math.round(e / t) * t;
					return Number(s.toFixed(ne(t)))
				},
				ne = e => {
					if (Math.abs(e) < 1) {
						const t = e.toExponential().split("e-"),
							s = t[0].split(".")[1];
						return (s ? s.length : 0) + parseInt(t[1], 10)
					}
					const t = e.toString().split(".")[1];
					return t ? t.length : 0
				},
				re = e => ({
					x: e.pageX,
					y: e.pageY
				}),
				ie = {
					horizontal: {
						offset: e => ({
							left: "".concat(e, "%")
						})
					},
					vertical: {
						offset: e => ({
							bottom: "".concat(e, "%")
						})
					}
				};
			class oe extends n.a.Component {
				constructor(e) {
					super(e), this.sliderRef = n.a.createRef(), this.trackRef = n.a.createRef(), this.railRef = n.a.createRef(), this.getTrackerNewValue = e => {
						let {
							tracker: t
						} = e;
						const {
							orientation: s,
							min: a,
							max: n,
							step: r
						} = this.props, {
							current: i
						} = this.sliderRef;
						if (!i) return null;
						const {
							width: o,
							height: c,
							bottom: d,
							left: l
						} = i.getBoundingClientRect();
						let u, h;
						return u = 0 === s.indexOf("vertical") ? (d + $(i).pageYOffset - t.y) / c : (t.x - l - $(i).pageXOffset) / o, -1 !== s.indexOf("-reverse") && (u = 1 - u), h = ee(u, a, n), h = ae(h, r), {
							newValue: h = se(h, a, n)
						}
					}, this.handleMouseDown = e => {
						if (this.props.disabled) return;
						e.preventDefault(), document.body.addEventListener("mousemove", this.handleMouseMove), document.body.addEventListener("mouseup", this.handleMouseUp);
						const t = re(e.nativeEvent),
							s = this.getTrackerNewValue({
								tracker: t
							});
						null !== s && (this.props.onChangeStart && this.props.onChangeStart(), this.props.onChange(s.newValue))
					}, this.handleMouseMove = e => {
						const t = re(e),
							s = this.getTrackerNewValue({
								tracker: t
							});
						null !== s && this.props.onChange(s.newValue)
					}, this.handleMouseUp = e => {
						document.body.removeEventListener("mousemove", this.handleMouseMove), document.body.removeEventListener("mouseup", this.handleMouseUp)
					}
				}
				render() {
					const {
						orientation: e,
						value: t,
						min: s,
						max: a,
						railClassName: r,
						railStyle: i,
						title: o,
						trackClassName: c,
						trackStyle: d
					} = this.props, l = te(t, s, a), h = Object.assign({}, ie.horizontal.offset(l), d || {});
					return n.a.createElement("div", {
						ref: this.sliderRef,
						className: Object(u.a)(this.props.className, {
							[Q.a.Vertical]: "vertical" === e
						}),
						onMouseDown: this.handleMouseDown
					}, n.a.createElement("div", {
						ref: this.railRef,
						className: Object(u.a)(Q.a.Rail, r),
						style: i || {}
					}), n.a.createElement("div", {
						ref: this.trackRef,
						title: o,
						className: Object(u.a)(Q.a.CommonTrack, c || Q.a.Track),
						style: h
					}))
				}
			}
			var ce = s("./src/reddit/components/ImageEditor/LayerDisplay/index.m.less"),
				de = s.n(ce);
			const le = ["image/png", "image/jpeg"].join(),
				ue = H.a.input("HiddenInput", de.a),
				he = [0, 100];
			class pe extends n.a.Component {
				constructor(e) {
					super(e), this.hiddenInputEl = null, this.handleChangeVisibility = e => {
						const {
							index: t,
							layer: s
						} = this.props, a = Object.assign({}, s, {
							isVisible: !s.isVisible
						});
						this.props.onChange(a, t), e.stopPropagation()
					}, this.handleLockedChange = e => {
						const {
							index: t,
							layer: s
						} = this.props, a = Object.assign({}, s, {
							isDisabled: !s.isDisabled
						});
						this.props.onChange(a, t), e.stopPropagation()
					}, this.handleOpacityChange = e => {
						this.setState((t, s) => {
							let {
								opacity: a
							} = t;
							if (a === e) return null;
							const {
								index: n,
								layer: r,
								onChange: i
							} = s;
							return i(Object.assign({}, r, {
								opacity: e / 100
							}), n), {
								opacity: e
							}
						})
					}, this.handleOpacityChangeStart = () => {
						const {
							index: e,
							onOpacityChangeStart: t
						} = this.props;
						t && t(e)
					}, this.handleUpdateLayerBlendMode = e => {
						const t = e.currentTarget.value,
							s = Object.assign({}, this.props.layer, {
								blendMode: t
							});
						this.props.onChange(s, this.props.index)
					}, this.handleOpacityInputChange = e => {
						if ("" === e.currentTarget.value) return void this.setState({
							opacity: null
						});
						const t = +e.currentTarget.value;
						he[0] <= t && t <= he[1] && this.handleOpacityChange(t)
					}, this.handleIsOpenedChange = e => {
						this.setState(e => {
							let {
								isOpened: t
							} = e;
							return {
								isOpened: !t
							}
						}), this.props.setActive && this.props.setActive(), e.stopPropagation()
					}, this.handleDuplicateLayer = () => {
						this.props.onDuplicate(this.props.index)
					}, this.handleClearLayer = () => {
						const {
							layer: e
						} = this.props;
						if (e.type === w.Art) {
							const t = document.createElement("canvas");
							t.width = e.canvas.width, t.height = e.canvas.height;
							const s = t.getContext("2d"),
								a = Object.assign({}, e, {
									canvas: t,
									ctx: s
								});
							this.props.onChange(a, this.props.index)
						}
						if (e.type === w.Image) {
							const e = new Image,
								t = Object.assign({}, this.props.layer, {
									image: e
								});
							this.props.onChange(t, this.props.index)
						}
					}, this.handleDeleteLayer = () => {
						const {
							layer: {
								isDisabled: e
							},
							onChange: t,
							index: s
						} = this.props;
						e || t(null, s)
					}, this.handleUploadButton = () => this.hiddenInputEl && this.hiddenInputEl.click(), this.handleFileSelect = e => {
						const t = e.currentTarget.files[0],
							s = Object(I.b)(t),
							a = new Image;
						a.onload = () => {
							const e = Object.assign({}, this.props.layer, {
								image: a
							});
							this.props.onChange(e, this.props.index)
						}, a.src = s
					}, this.handleNameInputChange = e => {
						const t = e.currentTarget.value;
						this.setState({
							name: t
						})
					}, this.handleEditNameShow = () => {
						this.setState({
							isEditName: !0
						})
					}, this.handleEditNameHide = () => {
						const {
							name: e
						} = this.state, {
							onChange: t,
							index: s,
							layer: a
						} = this.props;
						if (e && e !== a.name) {
							t(Object.assign({}, a, {
								name: e
							}), s)
						}
						this.setState({
							isEditName: !1
						})
					}, this.state = {
						opacity: 100 * e.layer.opacity,
						isOpened: !1,
						isEditName: !1,
						name: e.layer.name
					}
				}
				componentWillReceiveProps(e) {
					const t = e.layer,
						s = this.props.layer;
					t.name === s.name && t.opacity === s.opacity || this.setState({
						name: e.layer.name,
						opacity: 100 * e.layer.opacity
					})
				}
				render() {
					const {
						active: e,
						layer: t,
						index: s,
						onClick: a
					} = this.props, {
						opacity: r,
						isOpened: i,
						isEditName: o,
						name: c
					} = this.state, d = t.type === w.Art;
					return n.a.createElement("div", {
						className: Object(u.a)(de.a.LayerDisplayWrapper, {
							[de.a.isActive]: !!e
						}),
						onClick: () => a && a(t, s)
					}, n.a.createElement("div", {
						className: de.a.LayerDisplay
					}, n.a.createElement("div", {
						title: B.fbt._("Hide/Show", null, {
							hk: "2TXTrk"
						}),
						onClick: this.handleChangeVisibility
					}, t.isVisible && n.a.createElement(X, {
						className: de.a.LayerVisibilityIcon
					}), !t.isVisible && n.a.createElement(W, {
						className: de.a.LayerVisibilityIcon
					})), n.a.createElement("div", {
						className: Object(u.a)(de.a.LayerTitle, {
							[de.a.Hidden]: o
						}),
						onDoubleClick: this.handleEditNameShow
					}, t.name), n.a.createElement("input", {
						type: "text",
						disabled: t.isDisabled,
						value: c,
						onChange: this.handleNameInputChange,
						onBlur: this.handleEditNameHide,
						className: Object(u.a)(de.a.LayerOptionsEditName, {
							[de.a.Hidden]: !o
						})
					}), n.a.createElement("div", {
						title: B.fbt._("Options…", null, {
							hk: "1Bv6TT"
						}),
						onClick: this.handleIsOpenedChange
					}, n.a.createElement(G.a, {
						className: Object(u.a)(de.a.LayerMenuButton, {
							[de.a.LayerMenuOpened]: i
						})
					}))), n.a.createElement("div", {
						className: Object(u.a)(de.a.LayerOptions, {
							[de.a.LayerMenuOpened]: i
						})
					}, n.a.createElement("div", {
						className: de.a.LayerOptionsRow
					}, n.a.createElement("div", {
						className: de.a.LayerOptionsFieldLabel
					}, B.fbt._("Opacity", null, {
						hk: "1YcZx5"
					})), n.a.createElement("input", {
						type: "text",
						className: de.a.LayerOptionsOpacityInput,
						value: null === r ? "" : r,
						onChange: this.handleOpacityInputChange,
						disabled: t.isDisabled
					}), n.a.createElement(oe, {
						orientation: "horizontal",
						min: 0,
						max: 100,
						step: 1,
						value: r || 0,
						onChange: this.handleOpacityChange,
						onChangeStart: this.handleOpacityChangeStart,
						className: de.a.LayerOptionsOpacitySlider,
						disabled: t.isDisabled
					})), d && n.a.createElement("div", {
						className: de.a.LayerOptionsRow
					}, n.a.createElement("div", {
						className: de.a.LayerOptionsFieldLabel
					}, B.fbt._("Blend Mode", null, {
						hk: "3jM4bX"
					})), n.a.createElement("select", {
						onChange: this.handleUpdateLayerBlendMode,
						value: t.blendMode,
						className: de.a.LayerOptionsBlendMode,
						disabled: t.isDisabled
					}, Object.keys(E).map((e, t) => n.a.createElement("option", {
						key: t,
						value: E[e]
					}, e)))), n.a.createElement("div", {
						className: Object(u.a)(de.a.LayerOptionsRow, de.a.LayerOptionsActionsContainer)
					}, n.a.createElement("div", {
						className: de.a.LayerOptionsActionsButtons
					}, d && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						title: B.fbt._("Lock", null, {
							hk: "1lG1wu"
						}),
						onClick: this.handleLockedChange
					}, t.isDisabled && n.a.createElement(V, {
						className: Object(u.a)(de.a.LayerOptionsActionIcon, de.a.BlueIcon)
					}), !t.isDisabled && n.a.createElement(Z, {
						className: de.a.LayerOptionsActionIcon
					})), n.a.createElement("button", {
						title: B.fbt._("Duplicate", null, {
							hk: "2qQITY"
						}),
						onClick: this.handleDuplicateLayer,
						disabled: t.isDisabled
					}, n.a.createElement(q.a, {
						className: de.a.LayerOptionsActionIcon
					}))), t.type === w.Image && n.a.createElement("button", {
						onClick: this.handleUploadButton,
						className: de.a.LayerOptionsActionButton
					}, n.a.createElement(ue, {
						type: "file",
						key: t.image.src,
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.handleFileSelect,
						accept: le,
						className: de.a.HiddenInput
					}), n.a.createElement(F.a, {
						className: Object(u.a)(de.a.LayerOptionsActionIcon, de.a.UploadIcon)
					}), n.a.createElement("div", {
						className: de.a.LayerOptionsActionIconTitle
					}, B.fbt._("Choose file", null, {
						hk: "2lkEAY"
					}))), n.a.createElement("button", {
						title: B.fbt._("Clear", null, {
							hk: "3zH0xB"
						}),
						onClick: this.handleClearLayer,
						disabled: t.isDisabled,
						className: de.a.LayerOptionsActionButton
					}, n.a.createElement(Y, {
						className: de.a.LayerOptionsActionIcon
					}), !d && n.a.createElement("div", {
						className: de.a.LayerOptionsActionIconTitle
					}, B.fbt._("Clear", null, {
						hk: "3zH0xB"
					})))), d && n.a.createElement("button", {
						title: B.fbt._("DELETE", null, {
							hk: "4EPCkd"
						}),
						onClick: this.handleDeleteLayer,
						disabled: t.isDisabled
					}, n.a.createElement(K.a, {
						className: Object(u.a)(de.a.LayerOptionsActionIcon, de.a.RedIcon)
					})))))
				}
			}
			var me = pe,
				ge = s("./src/reddit/components/ImageEditor/LayersPanel/index.m.less"),
				be = s.n(ge);
			class ye extends n.a.Component {
				constructor(e) {
					super(e), this.setActive = (e, t) => () => {
						this.props.setActiveIndex(e, t)
					}
				}
				render() {
					const {
						backgroundLayer: e,
						layers: t,
						activeLayerIndex: s,
						handleLayerChange: a,
						handleLayerOpacityChange: r,
						handleDuplicate: i,
						handleBackgroundLayerChange: o,
						handleLayerSort: c,
						setActiveIndex: d,
						handleAdd: l
					} = this.props;
					return n.a.createElement("div", {
						className: be.a.LayersPanel
					}, n.a.createElement("div", {
						className: be.a.ArtLayersTitle
					}, B.fbt._("Art Layers", null, {
						hk: "1MkFUS"
					}), n.a.createElement("div", {
						onClick: l
					}, n.a.createElement(U, {
						className: be.a.ArtLayersTitleIcon
					}))), n.a.createElement("div", {
						className: be.a.LayersList
					}, n.a.createElement(z.a, {
						values: t,
						render: (e, o, c, d, l) => n.a.createElement(me, {
							key: o,
							isDragging: c,
							isOver: d,
							canDrop: l,
							active: o === s,
							layer: e,
							onChange: a,
							onOpacityChangeStart: r,
							index: o,
							canAddLayer: t.length < Ct,
							onDuplicate: i,
							setActive: this.setActive(e, o)
						}),
						onDrop: c,
						onClick: d
					}), n.a.createElement(me, {
						layer: e,
						onChange: o,
						index: Lt,
						active: Lt === s,
						disabled: e.isDisabled,
						canAddLayer: t.length < Ct,
						onDuplicate: i,
						onClick: d
					})))
				}
			}
			var fe = s("./src/reddit/components/ImageEditor/Pipette/index.m.less"),
				ve = s.n(fe);
			var Oe = e => n.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18.41",
				height: "18.41",
				viewBox: "0 0 18.41 18.41",
				className: e.className
			}, n.a.createElement("g", null, n.a.createElement("g", {
				transform: "translate(2.877 2.301)"
			}, n.a.createElement("g", {
				transform: "translate(0 0)"
			}, n.a.createElement("line", {
				x2: "0.834",
				y2: "0.747",
				transform: "translate(6.788 5.169)"
			}), n.a.createElement("path", {
				d: "M13.319-188.589a1.68,1.68,0,0,0-2.371.169l-1.962,2.144h0a1.118,1.118,0,0,1-1.37.236.334.334,0,0,0-.407.075l-.319.357a.345.345,0,0,0,.026.484l.609.545-5.2,5.733c-.715.8-.1,1.266-.643,2.269a.819.819,0,0,0-.11.391.643.643,0,0,0,.639.644.66.66,0,0,0,.4-.143c.971-.748,1.48-.1,2.214-.921l5.2-5.732.552.494a.345.345,0,0,0,.484-.027l.319-.356a.333.333,0,0,0,.029-.413,1.122,1.122,0,0,1,.081-1.392l1.962-2.148.035-.039A1.68,1.68,0,0,0,13.319-188.589ZM4.057-177.433c-.176.2-.74.181-1.036.312.1-.31.027-.863.2-1.058l5.136-5.652.834.748Z",
				transform: "translate(-1.571 189)"
			})))));
			var xe = e => {
					let {
						togglePipette: t,
						selectedColor: s,
						isPipetteSelected: a,
						className: r
					} = e;
					return n.a.createElement("div", {
						className: Object(u.a)(ve.a.PipetteWrapper, r)
					}, n.a.createElement("input", {
						className: ve.a.SelectedColor,
						type: "text",
						value: s || "",
						disabled: !0
					}), n.a.createElement("button", {
						onClick: t
					}, n.a.createElement(Oe, {
						className: Object(u.a)(ve.a.PipetteIcon, {
							[ve.a.ActiveIcon]: a
						})
					})))
				},
				Ce = s("./node_modules/lodash/times.js"),
				je = s.n(Ce),
				ke = s("./src/reddit/helpers/localStorage/index.ts"),
				we = s("./src/reddit/components/ImageEditor/SavedColors/index.m.less"),
				_e = s.n(we);
			const Ee = 4;
			class Ie extends n.a.Component {
				constructor(e) {
					super(e), this.addColor = () => {
						this.setState((e, t) => {
							let {
								colors: s
							} = e, {
								getActiveColor: a
							} = t;
							const n = a();
							if (s.includes(n)) return null;
							const r = [n, ...s.slice(0, Ee - 1)];
							return Object(ke.P)(r), {
								colors: r
							}
						})
					}, this.state = {
						colors: []
					}
				}
				componentDidMount() {
					this.setState({
						colors: Object(ke.m)()
					})
				}
				render() {
					const {
						className: e,
						onColorSelected: t
					} = this.props, {
						colors: s
					} = this.state, a = je()(Ee, e => ((e, s) => s ? n.a.createElement("div", {
						key: s || e,
						className: Object(u.a)(_e.a.ColorSlot, _e.a.ActiveSlot),
						style: {
							background: s
						},
						onClick: () => t(s)
					}) : n.a.createElement("div", {
						className: _e.a.ColorSlot
					}))(e, s[e]));
					return n.a.createElement("div", {
						className: Object(u.a)(_e.a.ColorSlotsWrapper, e)
					}, n.a.createElement("div", {
						className: Object(u.a)(_e.a.AddColor, _e.a.ActiveSlot),
						onClick: this.addColor
					}, "+"), a)
				}
			}
			var Le, Se = s("./src/reddit/components/ImageEditor/Tools/index.m.less"),
				Pe = s.n(Se),
				Te = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M19.383,1.7a2.292,2.292,0,0,0-3.01-.195L6.546,9.062a3.9,3.9,0,0,0-.632.62A5.957,5.957,0,0,1,11.4,15.166a3.9,3.9,0,0,0,.62-.632l7.56-9.827a2.292,2.292,0,0,0-.2-3.007Z"
				}), n.a.createElement("path", {
					d: "M5.914,10.5a4.335,4.335,0,0,0-4.331,4.331A11.641,11.641,0,0,1,.557,19.462a.54.54,0,0,0,.725.725,11.641,11.641,0,0,1,4.631-1.025,4.331,4.331,0,0,0,0-8.662Z"
				})))),
				Me = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("g", {
					transform: "translate(1.5 1.5)"
				}, n.a.createElement("path", {
					d: "M174.926-73.429a1.174,1.174,0,0,0-1.172-1.171H166.4l-4.108,6.543a1.875,1.875,0,0,0-.292,1v1.6a1.875,1.875,0,0,0,1.875,1.875h5.111a1.867,1.867,0,0,0,1.582-.868l4.359-6.935Z",
					transform: "translate(-162 78.578)"
				}), n.a.createElement("path", {
					d: "M175.381-79h-5.111a1.868,1.868,0,0,0-1.582.868l-1.52,2.412h6.459c1.366,0,2.529-.023,2.133,3.115l1.2-1.919a1.875,1.875,0,0,0,.292-1v-1.6A1.875,1.875,0,0,0,175.381-79Z",
					transform: "translate(-162.257 79)"
				})))),
				Ne = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M21.288,11.551,17.759,8.609a.588.588,0,0,0-.965.452v1.766H12.676V6.707h1.765a.588.588,0,0,0,.452-.965L11.952,2.21a.606.606,0,0,0-.9,0L8.107,5.742a.588.588,0,0,0,.452.965h1.765v4.12H6.206V9.061a.588.588,0,0,0-.965-.452L1.712,11.551a.588.588,0,0,0,0,.9L5.241,15.4a.581.581,0,0,0,.376.137.6.6,0,0,0,.249-.055.589.589,0,0,0,.339-.533V13.18h4.118V17.3H8.559a.588.588,0,0,0-.452.965L11.048,21.8a.588.588,0,0,0,.9,0l2.941-3.531a.588.588,0,0,0-.452-.965H12.676V13.18h4.118v1.766a.589.589,0,0,0,.339.533.6.6,0,0,0,.249.055.581.581,0,0,0,.376-.137l3.529-2.943a.588.588,0,0,0,0-.9Z",
					transform: "translate(0.5 -0.008)"
				})));
			! function(e) {
				e[e.Brush = 0] = "Brush", e[e.Eraser = 1] = "Eraser", e[e.Mover = 2] = "Mover"
			}(Le || (Le = {}));
			const Ae = e => n.a.createElement("button", {
					className: Pe.a.ToolButton,
					onClick: e.onClick
				}, n.a.createElement(Te, {
					className: Object(u.a)(Pe.a.ToolIcon, {
						[Pe.a.isActive]: e.isActive
					})
				}), n.a.createElement("div", {
					className: Object(u.a)(Pe.a.Shape, {
						[Pe.a.RoundShape]: "round" === e.shape,
						[Pe.a.FlatShape]: "butt" === e.shape,
						[Pe.a.Hidden]: !e.isActive
					}),
					style: {
						background: e.color
					}
				})),
				De = e => n.a.createElement("button", {
					className: Pe.a.ToolButton,
					onClick: e.onClick
				}, n.a.createElement(Me, {
					className: Object(u.a)(Pe.a.ToolIcon, {
						[Pe.a.isActive]: e.isActive
					})
				}), n.a.createElement("div", {
					className: Object(u.a)(Pe.a.Shape, {
						[Pe.a.RoundShape]: "round" === e.shape,
						[Pe.a.FlatShape]: "butt" === e.shape,
						[Pe.a.Hidden]: !e.isActive
					})
				})),
				Re = e => n.a.createElement("button", {
					className: Pe.a.ToolButton,
					onClick: e.onClick
				}, n.a.createElement(Ne, {
					className: Object(u.a)(Pe.a.ToolIcon, {
						[Pe.a.isActive]: e.isActive
					})
				}));
			class Be extends n.a.Component {
				constructor(e) {
					super(e), this.setToolTypeToBrush = () => {
						this.props.setToolType(Le.Brush)
					}, this.setToolTypeToEraser = () => {
						this.props.setToolType(Le.Eraser)
					}, this.setToolTypeToMover = () => {
						this.props.setToolType(Le.Mover)
					}
				}
				render() {
					const {
						activeTool: e,
						activeShape: t,
						activeColor: s,
						enableEditTools: a
					} = this.props;
					return n.a.createElement("div", {
						className: Pe.a.Tools
					}, a && n.a.createElement(n.a.Fragment, null, n.a.createElement(Ae, {
						isActive: e === Le.Brush,
						onClick: this.setToolTypeToBrush,
						shape: t,
						color: s
					}), n.a.createElement(De, {
						isActive: e === Le.Eraser,
						onClick: this.setToolTypeToEraser,
						shape: t
					})), n.a.createElement(Re, {
						isActive: e === Le.Mover,
						onClick: this.setToolTypeToMover
					}))
				}
			}
			var ze = Be,
				Ue = s("./src/reddit/components/ImageEditor/Options/index.m.less"),
				He = s.n(Ue);
			const Fe = "url(".concat(h.a.assetPath, "/img/transparency-background.png)"),
				Ye = "url(".concat(h.a.assetPath, "/img/color-track.svg)"),
				qe = "url(".concat(h.a.assetPath, "/img/lightness-track.svg)"),
				We = "url(".concat(h.a.assetPath, "/img/opacity-track.svg)"),
				Ve = "url(".concat(h.a.assetPath, "/img/thickness-track.svg)"),
				Xe = 370,
				Ze = 360,
				Ge = 100,
				Ke = 100,
				Je = 100,
				Qe = e => e / Ge,
				$e = e => (Ke - e) / Ke;
			class et extends n.a.Component {
				constructor(e) {
					super(e), this.calculateHexColor = (e, t) => e > Ze ? Object(i.c)(e % Ze, 0, Qe(t)) : Object(i.c)(e, 1, Qe(t)), this.handleHueChange = e => {
						this.setState((t, s) => {
							let {
								hue: a,
								lightness: n
							} = t, {
								onColorChange: r
							} = s;
							if (a === e) return null;
							return r(this.calculateHexColor(e, n)), {
								hue: e
							}
						})
					}, this.handleLightnessChange = e => {
						this.setState((t, s) => {
							let {
								lightness: a,
								hue: n
							} = t, {
								onColorChange: r
							} = s;
							if (a === e) return null;
							return r(this.calculateHexColor(n, e)), {
								lightness: e
							}
						})
					}, this.handleThicknessChange = e => {
						this.setState((t, s) => {
							let {
								thickness: a
							} = t, {
								onThicknessChange: n
							} = s;
							return a === e ? null : (n(e), {
								thickness: e
							})
						})
					}, this.handleOpacityChange = e => {
						this.setState((t, s) => {
							let {
								opacity: a
							} = t, {
								onOpacityChange: n
							} = s;
							return a === e ? null : (n($e(e)), {
								opacity: e
							})
						})
					}, this.handleShapeChange = e => {
						this.setState((t, s) => {
							let {
								cap: a
							} = t, {
								onCapChange: n
							} = s;
							return a === e ? null : (n(e), {
								cap: e
							})
						})
					}, this.handleRoundCapSelected = e => {
						e.stopPropagation(), this.handleShapeChange("round")
					}, this.handleButtCapSelected = e => {
						e.stopPropagation(), this.handleShapeChange("butt")
					}, this.handleToggleColorSettings = () => {
						this.setState(e => {
							let {
								shownSettings: t
							} = e;
							return {
								shownSettings: "color" === t ? null : "color"
							}
						})
					}, this.handleToggleBrushSettings = () => {
						this.setState(e => {
							let {
								shownSettings: t
							} = e;
							return {
								shownSettings: "brush" === t ? null : "brush"
							}
						})
					}, this.handleChangeColor = e => {
						this.setState((t, s) => {
							let {
								hue: a,
								lightness: n
							} = t;
							const {
								hue: r,
								saturation: o,
								lightness: c
							} = Object(i.f)(e), d = c * Ge;
							if (a === r && n === d) return null;
							const {
								onColorChange: l
							} = s;
							if (l(e), 1 === o) return {
								hue: r,
								lightness: d
							};
							return {
								hue: Ze + (Xe - Ze) / 2,
								lightness: d
							}
						})
					}, this.getActiveColor = () => this.props.activeColor;
					const {
						hue: t,
						lightness: s
					} = Object(i.f)(e.activeColor);
					this.state = {
						hue: t,
						lightness: s * Ge,
						shownSettings: null,
						opacity: 0,
						cap: "round",
						thickness: 10
					}
				}
				componentDidUpdate(e) {
					let {
						pipetteColor: t
					} = e;
					if (!this.props.isPipetteSelected || !this.props.pipetteColor || t === this.props.pipetteColor) return;
					const {
						hue: s,
						lightness: a
					} = Object(i.f)(this.props.pipetteColor);
					this.setState({
						hue: s,
						lightness: a * Ge
					})
				}
				render() {
					const {
						hue: e,
						lightness: t,
						shownSettings: s,
						opacity: a,
						cap: r,
						thickness: o
					} = this.state, {
						activeColor: c,
						activeTool: d,
						isPipetteSelected: l,
						pipetteColor: h,
						togglePipette: p,
						className: m
					} = this.props, g = {
						background: c
					}, b = Object(i.c)(e, 1, .5), y = d === Le.Brush || d === Le.Eraser, f = {
						background: "linear-gradient(to right, #000 0%, ".concat(b, " 50%, #FFF 100%)")
					}, v = {
						backgroundImage: "".concat(Fe, ", linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0) 100%)")
					}, O = {
						backgroundImage: "".concat(Ye)
					}, x = {
						backgroundImage: "".concat(qe)
					}, C = {
						backgroundImage: "".concat(We)
					}, j = {
						backgroundImage: "".concat(Ve)
					};
					return n.a.createElement("div", {
						className: Object(u.a)(He.a.Options, {
							[He.a.Hidden]: !y
						}, m)
					}, n.a.createElement("div", {
						className: He.a.PickerMarkersContainer
					}, n.a.createElement("button", {
						className: Object(u.a)(He.a.PickerMarker, He.a.OpacityPickerMarker),
						onClick: this.handleToggleBrushSettings
					}, n.a.createElement("span", {
						className: He.a.ThicknessIndicator
					}, o)), d === Le.Brush && n.a.createElement("button", {
						className: Object(u.a)(He.a.PickerMarker, He.a.ColorPickerMarker),
						style: g,
						onClick: this.handleToggleColorSettings
					})), n.a.createElement("div", {
						className: He.a.SettingsContainer
					}, d === Le.Brush && n.a.createElement("div", {
						className: Object(u.a)(He.a.SettingsTooltip, He.a.ColorSettings, {
							[He.a.Hidden]: "color" !== s
						})
					}, n.a.createElement("div", {
						className: He.a.Sliders
					}, n.a.createElement(oe, {
						orientation: "vertical",
						title: B.fbt._("Brush Color", null, {
							hk: "jDIPZ"
						}),
						min: 0,
						max: Xe,
						step: 1,
						value: e,
						onChange: this.handleHueChange,
						className: He.a.CommonSlider,
						railClassName: He.a.ColorPickerRail,
						trackClassName: He.a.TrackIcon,
						trackStyle: O,
						disabled: !1
					}), n.a.createElement(oe, {
						orientation: "vertical",
						title: B.fbt._("Brush Lightness", null, {
							hk: "1sjlmP"
						}),
						min: 0,
						max: Ge,
						step: 1,
						value: t,
						onChange: this.handleLightnessChange,
						className: He.a.CommonSlider,
						railClassName: He.a.LightnessRail,
						railStyle: f,
						trackClassName: He.a.TrackIcon,
						trackStyle: x,
						disabled: !1
					})), n.a.createElement("div", {
						className: He.a.SliderActions
					}, n.a.createElement(xe, {
						togglePipette: p,
						selectedColor: h,
						isPipetteSelected: l,
						className: He.a.Pipette
					}), n.a.createElement(Ie, {
						onColorSelected: this.handleChangeColor,
						getActiveColor: this.getActiveColor
					}))), n.a.createElement("div", {
						className: Object(u.a)(He.a.SettingsTooltip, He.a.BrushSettings, {
							[He.a.Hidden]: "brush" !== s
						})
					}, n.a.createElement("div", {
						className: He.a.Sliders
					}, n.a.createElement(oe, {
						orientation: "vertical",
						title: B.fbt._("Brush Size", null, {
							hk: "34ebtB"
						}),
						min: 1,
						max: Je,
						step: 1,
						value: o,
						onChange: this.handleThicknessChange,
						className: He.a.CommonSlider,
						railClassName: He.a.ThicknessRail,
						trackClassName: He.a.TrackIcon,
						trackStyle: j,
						disabled: !1
					}), n.a.createElement(oe, {
						orientation: "vertical",
						title: B.fbt._("Brush Opacity", null, {
							hk: "3kyKc"
						}),
						min: 0,
						max: Ke,
						step: 1,
						value: a,
						onChange: this.handleOpacityChange,
						className: He.a.CommonSlider,
						railClassName: He.a.OpacityRail,
						railStyle: v,
						trackClassName: He.a.TrackIcon,
						trackStyle: C,
						disabled: !1
					})), n.a.createElement("div", {
						className: He.a.SliderActions
					}, n.a.createElement("div", {
						className: He.a.ShapeActions
					}, n.a.createElement("button", {
						className: Object(u.a)(He.a.ShapePicker, {
							[He.a.ActiveShape]: "butt" === r
						}),
						onClick: this.handleButtCapSelected
					}), n.a.createElement("button", {
						className: Object(u.a)(He.a.ShapePicker, He.a.RoundShapePicker, {
							[He.a.ActiveShape]: "round" === r
						}),
						onClick: this.handleRoundCapSelected
					}))))))
				}
			}
			var tt = s("./src/reddit/components/ImageEditor/PaintBar/index.m.less"),
				st = s.n(tt);
			const at = "url(".concat(h.a.assetPath, "/img/meter-overlay.png)"),
				nt = "url(".concat(h.a.assetPath, "/img/meter-overlay-matt.png)");
			var rt = e => {
					const t = e.color || "#000000",
						s = Math.max(Math.min(1, e.value), 0),
						a = 100 * parseFloat(s.toFixed(3)),
						r = a <= 9.2;
					return n.a.createElement("div", {
						className: st.a.PaintBarWrapper
					}, e.isPaintExceeded ? n.a.createElement(k.a, {
						className: st.a.PaintLimitErrorText
					}, B.fbt._("COVERAGE LIMIT EXCEEDED!", null, {
						hk: "2rMZja"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: st.a.PaintBar,
						style: {
							width: a + "%",
							backgroundColor: t
						}
					}), n.a.createElement("div", {
						className: st.a.BackgroundImage,
						style: {
							width: a + "%",
							backgroundImage: at,
							display: r ? "none" : "block"
						}
					}), n.a.createElement("div", {
						className: Object(u.a)(st.a.BackgroundImage, st.a.BackgroundMatt),
						style: {
							width: a + "%",
							backgroundImage: nt,
							display: r ? "block" : "none"
						}
					})))
				},
				it = s("./src/reddit/components/ImageEditor/ResizeTool/index.m.less"),
				ot = s.n(it);
			const ct = 8,
				dt = ct / 2,
				lt = 2;
			class ut extends n.a.Component {
				constructor(e) {
					super(e), this.anchorX = 0, this.anchorY = 0, this.getMousePosition = e => {
						const t = this.props.canvas.getBoundingClientRect();
						return {
							x: e.clientX - t.left,
							y: e.clientY - t.top
						}
					}, this.handleMouseDown = e => {
						e.preventDefault(), document.body.addEventListener("mousemove", this.handleMouseMove), document.body.addEventListener("mouseup", this.handleMouseUp);
						const {
							x: t,
							y: s
						} = this.getMousePosition(e);
						this.anchorX = t, this.anchorY = s
					}, this.handleMouseMove = e => {
						if (!this.props.onChange || !this.props.canvas) return;
						const {
							x: t,
							y: s
						} = this.getMousePosition(e), a = t - this.anchorX, n = s - this.anchorY;
						this.props.onChange(a, n), this.anchorX = t, this.anchorY = s
					}, this.handleMouseUp = e => {
						document.body.removeEventListener("mousemove", this.handleMouseMove), document.body.removeEventListener("mouseup", this.handleMouseUp)
					}, this.state = {
						isDragging: !1
					}
				}
				render() {
					return n.a.createElement("div", {
						className: ot.a.Box,
						style: Object.assign({
							width: ct,
							height: ct
						}, this.props.style),
						onMouseDown: this.handleMouseDown
					})
				}
			}
			class ht extends n.a.Component {
				constructor() {
					super(...arguments), this.boxShift = 0 - dt - lt, this.topLeft = {
						top: this.boxShift,
						left: this.boxShift,
						cursor: "nwse-resize"
					}, this.topLeftHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.positionX + e, r = s.positionY + t, i = s.width - e, o = s.height - t, c = Object.assign({}, s, {
							positionX: n,
							positionY: r,
							width: i,
							height: o
						});
						this.props.onChange(c, a)
					}, this.topMid = {
						top: this.boxShift,
						left: 0,
						right: 0,
						margin: "auto",
						cursor: "ns-resize"
					}, this.topMidHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.positionY + t, r = s.height - t, i = Object.assign({}, s, {
							positionY: n,
							height: r
						});
						this.props.onChange(i, a)
					}, this.topRight = {
						top: this.boxShift,
						right: this.boxShift,
						cursor: "nesw-resize"
					}, this.topRightHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.positionY + t, r = s.width + e, i = s.height - t, o = Object.assign({}, s, {
							positionY: n,
							width: r,
							height: i
						});
						this.props.onChange(o, a)
					}, this.midRight = {
						top: 0,
						bottom: 0,
						right: this.boxShift,
						margin: "auto",
						cursor: "ew-resize"
					}, this.midRightHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.width + e, r = Object.assign({}, s, {
							width: n
						});
						this.props.onChange(r, a)
					}, this.bottomRight = {
						bottom: this.boxShift,
						right: this.boxShift,
						cursor: "nwse-resize"
					}, this.bottomRightHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.width + e, r = s.height + t, i = Object.assign({}, s, {
							width: n,
							height: r
						});
						this.props.onChange(i, a)
					}, this.bottomMid = {
						bottom: this.boxShift,
						left: 0,
						right: 0,
						margin: "auto",
						cursor: "ns-resize"
					}, this.bottomMidHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.height + t, r = Object.assign({}, s, {
							height: n
						});
						this.props.onChange(r, a)
					}, this.bottomLeft = {
						bottom: this.boxShift,
						left: this.boxShift,
						cursor: "nesw-resize"
					}, this.bottomLeftHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.positionX + e, r = s.width - e, i = s.height + t, o = Object.assign({}, s, {
							positionX: n,
							width: r,
							height: i
						});
						this.props.onChange(o, a)
					}, this.midLeft = {
						top: 0,
						bottom: 0,
						left: this.boxShift,
						margin: "auto",
						cursor: "ew-resize"
					}, this.midLeftHandler = (e, t) => {
						const {
							layer: s,
							layerIndex: a
						} = this.props, n = s.positionX + e, r = s.width - e, i = Object.assign({}, s, {
							positionX: n,
							width: r
						});
						this.props.onChange(i, a)
					}, this.getMousePagePosition = (e, t) => {
						const s = e.getBoundingClientRect();
						return {
							x: t.clientX - s.left,
							y: t.clientY - s.top
						}
					}
				}
				shouldComponentUpdate(e) {
					const {
						positionX: t,
						positionY: s,
						width: a,
						height: n
					} = this.props.layer, r = e.layer;
					return r.positionX !== t || r.positionY !== s || r.width !== a || r.height !== n
				}
				render() {
					const {
						positionX: e,
						positionY: t,
						width: s,
						height: a
					} = this.props.layer;
					return n.a.createElement("div", {
						className: ot.a.ResizeTool,
						style: {
							top: t - lt,
							left: e - lt,
							width: s,
							height: a
						}
					}, n.a.createElement(ut, {
						style: this.topLeft,
						onChange: this.topLeftHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.topMid,
						onChange: this.topMidHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.topRight,
						onChange: this.topRightHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.midRight,
						onChange: this.midRightHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.bottomRight,
						onChange: this.bottomRightHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.bottomMid,
						onChange: this.bottomMidHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.bottomLeft,
						onChange: this.bottomLeftHandler,
						canvas: this.props.canvas
					}), n.a.createElement(ut, {
						style: this.midLeft,
						onChange: this.midLeftHandler,
						canvas: this.props.canvas
					}))
				}
			}
			var pt = ht,
				mt = s("./src/reddit/icons/svgs/Close/index.tsx");

			function gt() {
				return (gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var bt = e => n.a.createElement("svg", gt({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 12.39 12.39"
			}, e), n.a.createElement("g", {
				transform: "translate(0 0)"
			}, n.a.createElement("path", {
				d: "M.492,3.8A6.118,6.118,0,0,1,3.79.5a6.111,6.111,0,0,1,4.7-.044,6.26,6.26,0,0,1,1.972,1.262L11.507.674a.459.459,0,0,1,.556-.113.482.482,0,0,1,.323.476V4.65a.523.523,0,0,1-.516.516H8.258a.482.482,0,0,1-.476-.323.459.459,0,0,1,.113-.556L9,3.174a4.008,4.008,0,0,0-1.29-.819,4.1,4.1,0,0,0-1.516-.286,4.024,4.024,0,0,0-1.6.327,4.09,4.09,0,0,0-2.2,2.2,4.087,4.087,0,0,0,0,3.2,4.09,4.09,0,0,0,2.2,2.2,4.023,4.023,0,0,0,1.6.327,4.086,4.086,0,0,0,3.258-1.6.251.251,0,0,1,.185-.1.29.29,0,0,1,.2.072l1.1,1.113a.239.239,0,0,1,.069.165.288.288,0,0,1-.052.182A6.053,6.053,0,0,1,8.83,11.807a6.151,6.151,0,0,1-2.637.585,6.026,6.026,0,0,1-2.4-.492,6.119,6.119,0,0,1-3.3-3.3,6.117,6.117,0,0,1,0-4.806Z",
				transform: "translate(0 -0.005)"
			})));

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ft = e => n.a.createElement("svg", yt({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12.39 12.39"
				}, e), n.a.createElement("g", {
					transform: "translate(0 0)"
				}, n.a.createElement("path", {
					d: "M11.895,3.8A6.118,6.118,0,0,0,8.6.5,6.111,6.111,0,0,0,3.9.452,6.26,6.26,0,0,0,1.928,1.715L.879.674A.459.459,0,0,0,.323.561.482.482,0,0,0,0,1.037V4.65a.5.5,0,0,0,.153.363.5.5,0,0,0,.363.153H4.129A.482.482,0,0,0,4.6,4.843a.459.459,0,0,0-.113-.556l-1.1-1.113a4.008,4.008,0,0,1,1.29-.819,4.1,4.1,0,0,1,1.516-.286,4.024,4.024,0,0,1,1.6.327A4.09,4.09,0,0,1,10,4.6a4.087,4.087,0,0,1,0,3.2,4.09,4.09,0,0,1-2.2,2.2,4.023,4.023,0,0,1-1.6.327,4.086,4.086,0,0,1-3.258-1.6.251.251,0,0,0-.185-.1.29.29,0,0,0-.2.072l-1.1,1.113a.239.239,0,0,0-.069.165.288.288,0,0,0,.052.182,6.053,6.053,0,0,0,2.129,1.649,6.151,6.151,0,0,0,2.637.585A6.026,6.026,0,0,0,8.6,11.9a6.119,6.119,0,0,0,3.3-3.3,6.117,6.117,0,0,0,0-4.806Z",
					transform: "translate(0 -0.005)"
				}))),
				vt = s("./src/reddit/components/ImageEditor/index.m.less"),
				Ot = s.n(vt);
			const xt = "url(".concat(h.a.assetPath, "/img/transparency-background.png)"),
				Ct = 10,
				jt = .8,
				kt = 4,
				wt = 100,
				_t = .7,
				Et = "background",
				It = 1,
				Lt = -1,
				St = Object(l.c)({
					background: N.d,
					draft: N.b,
					mediaBody: A.K,
					isPostSubmitPending: A.cb,
					title: A.eb,
					startTime: N.c
				}),
				Pt = Object(d.b)(St, e => ({
					saveLayerDraft: t => e(m.k(t)),
					uploadMedia: t => e(b.c(t, T.m)),
					onTitleChange: t => e(g.i(t)),
					onSubmit: () => e(y.a(T.r.Post, {
						draftId: void 0,
						pageLayer: void 0,
						postFieldValidationPending: null,
						sourcePostId: void 0
					})),
					submitLayerOnWS: t => e(m.l(t))
				})),
				Tt = e => n.a.createElement("div", {
					className: Ot.a.LayerMakerHeader
				}, n.a.createElement("div", {
					className: Ot.a.LayerMakerTitle
				}, Object(p.c)("Layer Maker")), n.a.createElement("div", {
					className: Ot.a.LayerMakerCloseButton,
					onClick: e.onClose
				}, n.a.createElement(mt.a, {
					className: Ot.a.LayerMakerCloseIcon
				}), n.a.createElement("span", {
					className: Ot.a.LayerMakerCloseTitle
				}, Object(p.c)("Close")))),
				Mt = e => {
					if (e.nativeEvent.targetTouches) {
						const t = e.nativeEvent.target.getBoundingClientRect();
						return {
							x: e.nativeEvent.targetTouches[0].pageX - t.left,
							y: e.nativeEvent.targetTouches[0].pageY - t.top
						}
					}
					return {
						x: e.nativeEvent.offsetX,
						y: e.nativeEvent.offsetY
					}
				};
			class Nt extends n.a.Component {
				constructor(e) {
					super(e), this.anchorX = -1, this.anchorY = -1, this.cachedFontSize = 20, this.cursorX = -1, this.cursorY = -1, this.isCursorDown = !1, this.lastCursorX = -1, this.lastCursorY = -1, this.layersCanvas = document.createElement("canvas"), this.scaledCanvas = document.createElement("canvas"), this.setPipetteColorFromPosition = (e, t) => {
						if (!this.ctx) return;
						const [s, a, n] = this.ctx.getImageData(e, t, 1, 1).data, r = Object(i.i)(s, a, n);
						this.setState({
							pipetteColor: r,
							isPipetteSelected: !1
						}), this.changeBrushColor(r)
					}, this.handleCanvasRef = e => {
						if (!e) return;
						const t = c.a.findDOMNode(e);
						t && (this.canvas = t, this.ctx = t.getContext("2d"))
					}, this.handlePointerCanvasRef = e => {
						if (!e) return;
						const t = c.a.findDOMNode(e);
						t && (this.pointerCtx = t.getContext("2d"))
					}, this.drawPointer = () => {
						if (!this.pointerCtx) return;
						const e = new Path2D;
						e.arc(this.cursorX, this.cursorY, Math.round(this.state.brushSize / 2), 0, 2 * Math.PI), this.pointerCtx.clearRect(0, 0, this.pointerCtx.canvas.width, this.pointerCtx.canvas.height), this.pointerCtx.stroke(e)
					}, this.handleMouseDown = e => {
						const {
							activeLayerIndex: t,
							activeTool: s,
							backgroundLayer: a,
							isPipetteSelected: n,
							paintRemaining: r
						} = this.state, i = t === Lt ? a : this.state.layers[t];
						if (i && i.isDisabled) return;
						if (s === Le.Brush && (r <= 0 || t === Lt)) return;
						const o = this.state.prevActions.slice(),
							c = this.copyLayer(i, !0);
						if (c && (o.push({
								type: _.UpdateLayer,
								layer: c,
								index: t
							}), this.setState({
								prevActions: o,
								nextActions: []
							})), n) {
							const {
								x: t,
								y: s
							} = Mt(e);
							this.setPipetteColorFromPosition(t, s)
						} else this.setCursorPositionFromEvent(e), this.updateLastCursorPosition(), this.setAnchorFromEvent(e), this.isCursorDown = !0, this.paintCurrentLayer(), this.setState({
							isDrawing: !0
						})
					}, this.handleMouseUp = e => {
						const {
							activeLayerIndex: t,
							backgroundLayer: s
						} = this.state;
						(t === Lt ? s : this.state.layers[t]).isDisabled || (this.setCursorPositionFromEvent(e), this.commitMoveToCurrentLayer(), this.isCursorDown = !1, this.setState({
							isDrawing: !1
						}))
					}, this.handleMouseMove = e => {
						const {
							activeLayerIndex: t,
							activeTool: s,
							backgroundLayer: a
						} = this.state;
						(t === Lt ? a : this.state.layers[t]).isDisabled || s === Le.Brush && t === Lt || (this.updateLastCursorPosition(), this.setCursorPositionFromEvent(e), this.drawPointer(), this.paintCurrentLayer())
					}, this.handleMouseLeave = e => {
						const {
							activeLayerIndex: t,
							backgroundLayer: s
						} = this.state;
						(t === Lt ? s : this.state.layers[t]).isDisabled || (this.setCursorPositionFromEvent(e), this.commitMoveToCurrentLayer(), this.isCursorDown = !1, this.setState({
							isDrawing: !1
						}), this.pointerCtx && this.pointerCtx.clearRect(0, 0, this.pointerCtx.canvas.width, this.pointerCtx.canvas.height))
					}, this.setToolType = e => {
						this.setState({
							activeTool: e,
							isPipetteSelected: !1,
							pipetteColor: null
						})
					}, this.handleClose = () => {
						confirm(Object(p.c)("Unsaved changes will be lost. Are you sure?")) && (this.props.toggleModal(), this.props.sendEvent(S.a))
					}, this.togglePipette = () => {
						this.setState(e => {
							let {
								isPipetteSelected: t
							} = e;
							return {
								isPipetteSelected: !t,
								pipetteColor: null
							}
						})
					}, this.handleSave = async () => {
						const e = document.createElement("canvas");
						e.width = this.props.width, e.height = this.props.height;
						const t = e.getContext("2d");
						if (!t) return;
						this.rafToken && cancelAnimationFrame(this.rafToken);
						const {
							activeLayerIndex: s,
							layers: a
						} = this.state;
						for (let r = a.length - 1; r >= 0; r--) this.drawLayer(t, a[r], s === r);
						const n = await
						function(e) {
							return new Promise((t, s) => {
								e.toBlob(async e => {
									e ? t(e) : s(new Error("Could not read canvas to blob"))
								})
							})
						}(e);
						n && this.props.uploadMedia(Object(L.a)(n, "layer.png"))
					}, this.handleSubmit = () => {
						this.props.startTime && this.props.sendEvent(Object(S.b)(Date.now() - this.props.startTime)), this.props.onSubmit()
					}, this.handleSaveDraft = () => {
						this.props.saveLayerDraft({
							layers: this.state.layers,
							backgroundLayer: this.state.backgroundLayer
						}), this.props.toggleModal()
					}, this.drawLayer = (e, t, s) => {
						switch (e.globalAlpha = t.opacity, e.globalCompositeOperation = t.blendMode, t.type) {
							case w.Color:
								e.fillStyle = t.color, e.fillRect(0, 0, e.canvas.width, e.canvas.height);
								break;
							case w.Art:
							case w.Text:
							case w.Image: {
								let {
									positionX: a,
									positionY: n
								} = t;
								if (s && this.isCursorDown && (t.type !== w.Art || this.state.activeTool === Le.Mover) && (a += this.cursorX - this.anchorX, n += this.cursorY - this.anchorY), t.type === w.Image) e.drawImage(t.image, a, n, t.width, t.height);
								else if (t.type === w.Art) e.drawImage(t.canvas, a, n);
								else {
									e.font = "".concat(t.fontSize, "px Impact"), e.textAlign = "center", e.textBaseline = "top", e.fillStyle = t.color;
									for (let s = 0; s < t.text.length; s++) {
										const r = s * t.fontSize * 1.5;
										e.fillText(t.text[s], a, n + r)
									}
								}
								break
							}
						}
					}, this.drawComposite = () => {
						this.rafToken = requestAnimationFrame(this.drawComposite), this.drawCompositeFrame(this.state)
					}, this.calculatePaintRemaining = e => {
						const {
							width: t,
							height: s
						} = this.props, a = e.getImageData(0, 0, t, s).data;
						let n = 0;
						for (let i = 0; i < a.length; i += kt) {
							const e = a[i + 3];
							e > 0 && (n += e / 255)
						}
						const r = 1 - n / (Math.pow(wt, 2) * jt);
						this.setState({
							paintRemaining: r
						})
					}, this.addArtLayer = () => {
						const e = this.getNewArtLayer(this.props, this.state.layers);
						e && this.addNewLayer(e)
					}, this.handleLayerResize = (e, t) => {
						this.setState(s => {
							const a = s.activeLayerIndex === Lt ? s.backgroundLayer : s.layers[s.activeLayerIndex];
							if (a.type !== w.Image) return s;
							const n = e.width > It ? e.width : It,
								r = e.height > It ? e.height : It,
								i = a.positionX + a.width,
								o = e.positionX + n,
								c = a.positionX === e.positionX,
								d = o > i ? c ? a.positionX : i - n : e.positionX,
								l = a.positionY + a.height,
								u = e.positionY + r,
								h = a.positionY === e.positionY,
								p = u > l ? h ? a.positionY : l - r : e.positionY,
								m = Object.assign({}, e, {
									positionX: d,
									positionY: p,
									width: n,
									height: r
								});
							return t === Lt ? Object.assign({}, s, {
								backgroundLayer: m
							}) : s
						})
					}, this.updateBackgroundImage = e => {
						const t = this.props.width,
							s = this.props.height;
						let a = e.width,
							n = e.height;
						a > n && a > t ? (n *= t / a, a = t) : n > s && (a *= s / n, n = s);
						const r = P(Et, e, a, n);
						r.opacity = this.state.backgroundLayer.opacity, this.setState({
							backgroundLayer: r
						})
					}, this.handleCanvasDrop = e => {
						let t = null;
						if (!(t = Array.isArray(e) ? e[0] : e)) return;
						const s = Object(I.b)(t);
						if (!s) return null;
						const a = new Image;
						a.onload = () => {
							this.updateBackgroundImage(a)
						}, a.src = s
					}, this.handleLayerSort = (e, t, s) => {
						const a = this.state.layers[this.state.activeLayerIndex],
							n = this.state.prevActions.slice();
						n.push({
							type: _.SortLayers,
							layers: this.state.layers
						});
						const r = s.indexOf(a);
						this.setState({
							layers: s,
							activeLayerIndex: r,
							prevActions: n,
							nextActions: []
						})
					}, this.setActiveIndex = (e, t) => {
						const s = t === Lt ? Le.Mover : this.state.activeTool;
						this.setState({
							activeLayerIndex: t,
							activeTool: s
						})
					}, this.changeBrushColor = e => {
						this.setState({
							color: e
						}), this.props.sendEvent(Object(S.d)(e))
					}, this.changeBrushCap = e => {
						this.setState({
							brushCap: e
						})
					}, this.handleUndo = () => {
						const e = D(this.state.layers.slice(), this.state.activeLayerIndex, this.state.prevActions.slice(), this.state.nextActions.slice());
						e && this.setState(Object.assign({}, e), this.drawComposite)
					}, this.handleRedo = () => {
						const e = R(this.state.layers.slice(), this.state.activeLayerIndex, this.state.prevActions.slice(), this.state.nextActions.slice());
						e && this.setState(Object.assign({}, e), this.drawComposite)
					}, this.handleOpacityChange = e => {
						this.setState({
							brushOpacity: e
						})
					}, this.handleSizeChange = e => {
						this.setState({
							brushSize: e
						})
					}, this.handleBackgroundLayerChange = (e, t) => {
						const {
							backgroundLayer: s
						} = this.state;
						s.type !== w.Image || e.type !== w.Image || s.image.src === e.image.src ? this.setState({
							backgroundLayer: e
						}) : this.updateBackgroundImage(e.image)
					}, this.handleDuplicate = e => {
						const t = this.state.layers[e];
						if (t.isDisabled) return;
						const s = this.copyLayer(t);
						s && this.addNewLayer(s)
					}, this.handleLayerChange = (e, t) => {
						const s = this.state.layers.slice();
						if (s[t].isDisabled && (e && e.isDisabled || !e)) return;
						e && e.type === w.Text && (this.cachedFontSize = e.fontSize);
						let a = null,
							n = null;
						const r = this.state.prevActions.slice();
						let {
							activeLayerIndex: i
						} = this.state;
						if (null != e) {
							s[t].opacity !== e.opacity || (a = this.copyLayer(s[t], !0), n = _.UpdateLayer), s[t] = e
						} else {
							const e = s.splice(t, 1)[0];
							a = this.copyLayer(e, !0), n = _.DeleteLayer, this.props.sendEvent(S.e), i >= t && (i -= 1)
						}
						a && n && r.push({
							type: n,
							layer: a,
							index: t
						}), this.setState({
							layers: s,
							activeLayerIndex: i,
							prevActions: r,
							nextActions: []
						})
					}, this.handleLayerOpacityChange = e => {
						const t = this.state.prevActions.slice(),
							s = this.copyLayer(this.state.layers[e], !0);
						s && t.push({
							type: _.UpdateLayer,
							layer: s,
							index: e
						}), this.setState({
							prevActions: t,
							nextActions: []
						})
					};
					const t = [];
					let s = null;
					if (e.draft) e.draft.layers.forEach(e => {
						const s = this.copyLayer(e, !0);
						s && t.push(s)
					}), s = this.copyLayer(e.draft.backgroundLayer, !0);
					else {
						const a = this.getNewArtLayer(e, t);
						a && t.push(a), e.background && (s = P(Et, e.background, e.width, e.height))
					}
					var a;
					s || (a = Et, s = {
						type: w.Color,
						name: a,
						isVisible: !0,
						opacity: 1,
						blendMode: E.SourceOver,
						color: "#FFFFFF",
						isDisabled: !1
					}), s.opacity = _t, this.state = {
						backgroundLayer: s,
						layers: t,
						activeLayerIndex: 0,
						color: "#000000",
						brushCap: "round",
						brushOpacity: 1,
						brushSize: 8,
						activeTool: Le.Brush,
						activeFrameIndex: 0,
						frames: [],
						prevActions: [],
						nextActions: [],
						paintRemaining: 1,
						isPipetteSelected: !1,
						pipetteColor: null,
						isDrawing: !1
					}
				}
				componentDidUpdate(e) {
					const t = !e.mediaBody || e.mediaBody && !e.mediaBody.websocketUrl,
						s = this.props.mediaBody && this.props.mediaBody.websocketUrl;
					t && s && this.props.submitLayerOnWS(s)
				}
				getNewArtLayer(e, t) {
					const s = document.createElement("canvas"),
						a = Object(p.c)("Art Layer ".concat(Object(p.b)("#", t.length + 1)));
					return s && (s.width = e.width, s.height = e.height),
						function(e, t) {
							const s = t.getContext("2d");
							return {
								type: w.Art,
								name: e,
								isVisible: !0,
								opacity: 1,
								blendMode: E.SourceOver,
								canvas: t,
								ctx: s,
								positionX: 0,
								positionY: 0,
								isDisabled: !1
							}
						}(a, s)
				}
				updateLastCursorPosition() {
					this.lastCursorX = this.cursorX, this.lastCursorY = this.cursorY
				}
				setCursorPositionFromEvent(e) {
					const {
						x: t,
						y: s
					} = Mt(e);
					this.cursorX = t, this.cursorY = s
				}
				setAnchorFromEvent(e) {
					const {
						x: t,
						y: s
					} = Mt(e);
					this.anchorX = t, this.anchorY = s
				}
				componentDidMount() {
					const {
						width: e,
						height: t
					} = this.props;
					this.rafToken = requestAnimationFrame(this.drawComposite), this.layersCanvas.width = e, this.layersCanvas.height = t, this.layersCtx = this.layersCanvas.getContext("2d"), this.scaledCanvas.width = wt, this.scaledCanvas.height = wt, this.scaledCtx = this.scaledCanvas.getContext("2d")
				}
				componentWillUnmount() {
					this.rafToken && cancelAnimationFrame(this.rafToken)
				}
				paintCurrentLayer() {
					if (!this.isCursorDown || this.state.activeTool === Le.Mover) return;
					if (this.state.paintRemaining <= 0 && this.state.activeTool === Le.Brush) return;
					const e = this.state.layers[this.state.activeLayerIndex];
					if (e && e.isVisible && e.type === w.Art && e.ctx) {
						e.ctx.strokeStyle = this.state.color, e.ctx.globalAlpha = this.state.brushOpacity, this.state.activeTool === Le.Eraser ? e.ctx.globalCompositeOperation = E.DestinationOut : e.ctx.globalCompositeOperation = E.SourceOver;
						const {
							brushSize: t,
							brushCap: s
						} = this.state;
						this.drawLine(e.ctx, this.lastCursorX, this.lastCursorY, this.cursorX, this.cursorY, t, s)
					}
				}
				drawLine(e, t, s, a, n, r, i) {
					e.lineJoin = "round", e.lineCap = i, e.lineWidth = r, e.beginPath(), e.moveTo(t, s), e.lineTo(a, n), e.stroke()
				}
				commitMoveToCurrentLayer() {
					if (!this.isCursorDown) return;
					const {
						activeTool: e,
						activeLayerIndex: t,
						backgroundLayer: s
					} = this.state, a = t === Lt, n = a ? s : this.state.layers[t];
					if (!n || !n.isVisible) return;
					const r = this.cursorX - this.anchorX,
						i = this.cursorY - this.anchorY;
					if (n.type === w.Image || n.type === w.Text) {
						const e = Object.assign({}, n, {
							positionX: n.positionX + r,
							positionY: n.positionY + i
						});
						if (a) this.setState({
							backgroundLayer: e
						});
						else {
							const s = this.state.layers.slice();
							s[t] = e, this.setState({
								layers: s
							})
						}
					} else if (n.type === w.Art && e === Le.Mover) {
						const e = this.duplicateArtLayer(n, r, i, n.name);
						if (e) {
							const s = this.state.layers.slice();
							s[t] = e, this.setState({
								layers: s
							})
						}
					}
				}
				drawCompositeFrame(e) {
					if (!this.ctx || !this.layersCtx || !this.scaledCtx) return;
					const {
						width: t,
						height: s
					} = this.props;
					this.ctx.clearRect(0, 0, t, s), this.state.backgroundLayer.isVisible && this.drawLayer(this.ctx, this.state.backgroundLayer, e.activeLayerIndex === Lt);
					for (let a = e.layers.length - 1; a >= 0; a--) {
						const t = e.layers[a];
						t.isVisible && this.drawLayer(this.ctx, t, e.activeLayerIndex === a)
					}
					this.layersCtx.clearRect(0, 0, t, s);
					for (let a = e.layers.length - 1; a >= 0; a--) this.drawLayer(this.layersCtx, e.layers[a], e.activeLayerIndex === a);
					this.scaledCtx.clearRect(0, 0, wt, wt), this.scaledCtx.drawImage(this.layersCanvas, 0, 0, wt, wt), this.calculatePaintRemaining(this.scaledCtx)
				}
				addNewLayer(e) {
					const t = this.state.prevActions.slice(),
						s = this.copyLayer(e, !0);
					s && t.push({
						type: _.CreateLayer,
						layer: s,
						index: 0
					}), this.setState({
						layers: [e, ...this.state.layers],
						activeLayerIndex: 0,
						prevActions: t,
						nextActions: []
					})
				}
				copyLayer(e) {
					const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? e.name : Object(p.c)("".concat(Object(p.b)("layerName", e.name), " duplicate"));
					return e.type === w.Art ? this.duplicateArtLayer(e, 0, 0, t) : Object.assign({}, e, {
						name: t
					})
				}
				duplicateArtLayer(e, t, s, a) {
					const n = this.state ? this.state.layers : [],
						r = this.getNewArtLayer(this.props, n);
					return r && r.ctx ? (r.ctx.drawImage(e.canvas, t, s), Object.assign({}, e, {
						canvas: r.canvas,
						ctx: r.ctx,
						name: a
					})) : null
				}
				render() {
					const {
						state: {
							activeLayerIndex: e,
							activeTool: t,
							backgroundLayer: s,
							brushCap: a,
							color: r,
							layers: i,
							prevActions: o,
							nextActions: c,
							paintRemaining: d,
							isPipetteSelected: l,
							pipetteColor: h,
							isDrawing: m
						},
						props: {
							width: g,
							height: b,
							mediaBody: y,
							onTitleChange: f,
							isPostSubmitPending: _,
							title: E
						}
					} = this, I = !!y && y.status === M.a.PENDING, L = _ || I, S = !!y && !!y.url, P = d < 0 || L || S && !E, T = L ? n.a.createElement(j.a, {
						center: !0,
						sizePx: 15
					}) : S ? Object(p.c)("Submit") : Object(p.c)("Save"), N = Object(u.a)(Ot.a.LayerMakerUndoIcon, {
						[Ot.a.LayerMakerUndoIconActive]: !!o.length
					}), A = Object(u.a)(Ot.a.LayerMakerUndoIcon, {
						[Ot.a.LayerMakerUndoIconActive]: !!c.length
					}), D = e === Lt ? s : i[e];
					return n.a.createElement("div", {
						className: Ot.a.LayerMaker
					}, n.a.createElement(Tt, {
						onClose: this.handleClose
					}), n.a.createElement("div", {
						className: Ot.a.LayerMakerPaintBar
					}, n.a.createElement("div", {
						className: Ot.a.LayerMakerUndoBar
					}, n.a.createElement(ft, {
						onClick: this.handleUndo,
						className: N
					}), n.a.createElement(bt, {
						onClick: this.handleRedo,
						className: A
					})), n.a.createElement(rt, {
						isPaintExceeded: d < 0,
						color: r,
						value: d
					})), n.a.createElement("div", {
						className: Ot.a.LayerMakerBody
					}, n.a.createElement(ze, {
						activeTool: t,
						setToolType: this.setToolType,
						activeShape: a,
						activeColor: r,
						enableEditTools: e !== Lt
					}), n.a.createElement(x.a, {
						className: Ot.a.LayerMakerFileDrop,
						render: (s, a) => n.a.createElement("div", {
							className: Ot.a.LayerMakerCanvasWrapper
						}, n.a.createElement("canvas", {
							className: Ot.a.LayerMakerCanvas,
							width: g,
							height: b,
							style: {
								width: g,
								height: b,
								backgroundImage: xt
							},
							ref: this.handleCanvasRef,
							onTouchStart: this.handleMouseDown,
							onTouchMove: this.handleMouseMove,
							onTouchEnd: this.handleMouseUp,
							onTouchCancel: this.handleMouseLeave,
							onMouseDown: this.handleMouseDown,
							onMouseMove: this.handleMouseMove,
							onMouseUp: this.handleMouseUp,
							onMouseLeave: this.handleMouseLeave
						}), n.a.createElement("canvas", {
							className: Ot.a.PointerCanvas,
							width: g,
							height: b,
							style: {
								width: g,
								height: b
							},
							ref: this.handlePointerCanvasRef
						}), n.a.createElement(et, {
							activeColor: r,
							activeTool: t,
							onColorChange: this.changeBrushColor,
							onOpacityChange: this.handleOpacityChange,
							onThicknessChange: this.handleSizeChange,
							onCapChange: this.changeBrushCap,
							isPipetteSelected: l,
							togglePipette: this.togglePipette,
							pipetteColor: h,
							className: Object(u.a)(Ot.a.Options, {
								[Ot.a.OptionsWhileDrawing]: m
							})
						}), D.type === w.Image && D.image.src && !this.isCursorDown && this.canvas && n.a.createElement(pt, {
							layer: D,
							layerIndex: e,
							canvas: this.canvas,
							onChange: this.handleLayerResize
						})),
						onDrop: this.handleCanvasDrop
					}), n.a.createElement("div", {
						className: Ot.a.SidebarMenu
					}, n.a.createElement("div", {
						className: Ot.a.LayersWrapper
					}, n.a.createElement(ye, {
						backgroundLayer: s,
						layers: i,
						activeLayerIndex: e,
						handleLayerChange: this.handleLayerChange,
						handleLayerOpacityChange: this.handleLayerOpacityChange,
						handleDuplicate: this.handleDuplicate,
						handleBackgroundLayerChange: this.handleBackgroundLayerChange,
						handleLayerSort: this.handleLayerSort,
						setActiveIndex: this.setActiveIndex,
						handleAdd: this.addArtLayer
					})), n.a.createElement(O.i, {
						className: Ot.a.SaveButton,
						onClick: this.handleSaveDraft
					}, Object(p.c)("Save Draft")), S && n.a.createElement(n.a.Fragment, null, n.a.createElement(k.c, {
						className: Ot.a.titleInputLabel
					}, Object(p.c)("Name this masterpiece")), n.a.createElement(C.a, {
						className: Ot.a.titleInput,
						maxLength: v.f,
						onValueChange: f,
						placeholder: "Lona Misa",
						readOnly: L,
						value: E
					})), n.a.createElement(O.f, {
						className: Ot.a.SaveButton,
						onClick: S ? this.handleSubmit : this.handleSave,
						disabled: P
					}, T))))
				}
			}
			var At = Pt(Object(f.b)(Nt));
			const Dt = 500,
				Rt = 500;
			class Bt extends n.a.Component {
				render() {
					return n.a.createElement(At, {
						height: Dt,
						width: Rt,
						toggleModal: this.props.toggleModal
					})
				}
			}
			t.default = Object(r.a)(Bt)
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const a = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				o = 300,
				c = o,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/lodash/flow.js"),
				n = s.n(a),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-dnd/lib/index.js"),
				c = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = s("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				u = n()(Object(o.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const s = t.getItem();
						s.files && e.onDrop(s.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class h extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(h)
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, s) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-autosize-textarea/lib/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			class h extends n.a.Component {
				constructor(e) {
					super(e), this.innerRef = null, this.focused = !1, this.setInnerRef = e => {
						this.innerRef = e, this.props.textareaRef && this.props.textareaRef(e)
					}, this.handleOnValueChange = () => {
						this.props.onValueChange && this.props.onValueChange(this.state.value)
					}, this.onFocus = e => {
						this.focused = !0, this.props.onFocus && this.props.onFocus(e)
					}, this.onBlur = e => {
						this.focused = !1, this.props.onBlur && this.props.onBlur(e)
					}, this.onChange = e => {
						if (this.innerRef) {
							const e = this.innerRef.value.replace(/\n/g, " ");
							this.setState(() => ({
								value: e
							}), this.handleOnValueChange)
						}
						this.props.onChange && this.props.onChange(e)
					}, this.onKeyPress = e => {
						13 === e.which && e.preventDefault(), this.props.onKeyPress && this.props.onKeyPress(e)
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.focused || this.state.value === e.value || this.setState({
						value: e.value
					})
				}
				render() {
					const {
						value: e
					} = this.state, t = this.props, {
						className: s,
						onValueChange: a,
						textareaRef: r,
						minHeight: c
					} = t, h = u(t, ["className", "onValueChange", "textareaRef", "minHeight"]);
					return n.a.createElement(i.a, l({}, h, {
						className: Object(o.a)(d.a.growingOutlinedInput, s),
						style: {
							minHeight: c
						},
						innerRef: this.setInnerRef,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						value: e
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/helpers/dragDropContext/index.ts"),
				i = s("./node_modules/lodash/flow.js"),
				o = s.n(i),
				c = s("./node_modules/react-dnd/lib/index.js");
			class d extends n.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? o()(e.connectDropTarget, e.connectDragSource)(n.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var l = o()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const s = t.getDropResult();
						e.onDrop(e.id, s.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const s = t.getItem();
					return e.id !== s.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends n.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(s => {
							const a = s.values.slice(),
								n = a.indexOf(e),
								r = a.splice(n, 1)[0];
							let i = a.indexOf(t);
							return n <= i && (i += 1), a.splice(i, 0, r), this.props.onDrop(e, t, a), {
								values: a
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: s,
						render: a
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => n.a.createElement(l, {
						id: e,
						key: t && t(e),
						index: r,
						render: a,
						onDrop: this.onDrop,
						onClick: s
					})))
				}
			}
			t.a = Object(r.a)(u)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var a, n = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case a.Ethereum:
						return "Ethereum Main Network";
					case a.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function o(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "a", (function() {
				return p
			}));
			var a = s("./node_modules/lodash/get.js"),
				n = s.n(a),
				r = s("./src/config.ts"),
				i = s("./src/graphql/operations/PollVote.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, s, a) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(a)
				})
			}
			const h = (e, t, s) => Object(o.a)(e, Object.assign({}, i, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: n()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: n()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var a = s("./src/config.ts"),
				n = (s("./src/lib/bigNumberUtils/percent.ts"), s("./src/lib/constants/index.ts")),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: n.cb.GET
				}).then(e => {
					if (e.ok) {
						const s = e.body,
							a = {
								[t.subredditId]: s
							};
						return Object.assign({}, e, {
							body: a
						})
					}
					return e
				})
			}

			function o(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: n.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/graphql/operations/CreateScheduledPost.json"),
				n = s("./src/graphql/operations/SubredditScheduledPosts.json"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/models/PostCreationForm/index.ts"),
				c = s("./src/reddit/models/ScheduledPost/index.ts");
			const d = (e, t) => Object(r.a)(e, Object.assign({}, n, {
					variables: Object.assign({}, t, {
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					})
				})),
				l = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const s = e.body;
					return !!(s.data && s.data.subredditInfoById && s.data.subredditInfoById.scheduledPosts && s.data.subredditInfoById.scheduledPosts[t] && s.data.subredditInfoById.scheduledPosts[t].edges)
				},
				u = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => l(e, c.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => l(e, c.f.recurringPosts))(e))),
				h = (e, t, s) => Object.assign({
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNSFW,
					title: e.title,
					isOriginalContent: e.isOC,
					flair: e.flair ? {
						id: e.flair.templateId,
						text: Object(i.g)(e.flair)
					} : {},
					subredditId: s,
					isSendReplies: e.sendReplies
				}, p(t), y(e)),
				p = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				m = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				g = e => {
					const t = h(e.submission, e.schedule, e.subredditId);
					return Object.assign({
						id: e.scheduledPostId
					}, t, {
						flair: Object.keys(t.flair || {}).length ? Object.assign({}, t.flair) : {
							id: "",
							text: ""
						}
					})
				},
				b = e => /^https?:\/\//i.test(e) ? e : "http://".concat(e),
				y = e => {
					switch (e.kind) {
						case o.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case o.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case o.p.LINK:
							return {
								content: {}, link: {
									url: b(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				f = (e, t) => Object(r.a)(e, Object.assign({}, a, {
					variables: {
						input: t
					}
				}))
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/graphql/operations/UpdateScheduledPost.json"),
				n = s("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(n.a)(e, Object.assign({}, a, {
				variables: {
					input: t
				}
			}))
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-dnd/lib/index.js"),
				n = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = s.n(n);
			t.a = Object(a.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const a = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: Object.assign({}, e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo)
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				n = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: Object.assign({}, e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo)
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				r = e => Object.assign({}, e, {
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: Object.assign({}, a(e), n(e))
					}
				}),
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				c = e => i(e) && o(e),
				d = e => !i(e) && o(e),
				l = e => i(e) && !o(e),
				u = e => e.map(e => h(e.node)),
				h = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					subreddit: Object.assign({}, e.subreddit),
					owner: Object.assign({}, e.owner),
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? Object.assign({}, e.flair) : void 0,
					isSticky: "NONE" !== e.sticky && !!e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				p = e => e.map(e => m(e.node)),
				m = e => Object.assign({}, h(e), {
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				g = e => (e => !!e.frequency && !!e.interval)(e) ? m(e) : h(e)
		},
		"./src/reddit/helpers/trackers/layers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var a = s("./src/telemetry/models/Timer.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: n.subreddit(e),
					actionInfo: Object.assign({}, n.defaults(e).actionInfo, {
						pageType: "layer_maker"
					})
				}),
				i = e => t => Object.assign({
					source: "layer_maker",
					action: "click",
					noun: "create"
				}, n.defaults(t), {
					subreddit: n.subreddit(t),
					user: Object.assign({}, n.defaults(t).user, {
						app_name: "layer_maker"
					}),
					timer: {
						type: a.TimerType.LayerCreationTime,
						millis: e
					}
				}),
				o = e => ({
					source: "layer_maker",
					action: "click",
					noun: "delete",
					subreddit: n.subreddit(e)
				}),
				c = e => t => ({
					source: "layer_maker",
					action: "click",
					noun: "color_picker",
					subreddit: n.subreddit(t),
					actionInfo: Object.assign({}, n.defaults(t).actionInfo, {
						settingValue: e
					})
				}),
				d = e => ({
					source: "layer_maker",
					action: "click",
					noun: "close",
					subreddit: n.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return o
			})), s.d(t, "E", (function() {
				return c
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "u", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "F", (function() {
				return f
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "r", (function() {
				return x
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "w", (function() {
				return _
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "p", (function() {
				return L
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "D", (function() {
				return M
			})), s.d(t, "z", (function() {
				return N
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "x", (function() {
				return D
			})), s.d(t, "A", (function() {
				return R
			})), s.d(t, "B", (function() {
				return B
			}));
			var a = s("./src/reddit/models/ScheduledPost/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, n.defaults(e), {
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(a.n)(e)
				}),
				o = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				h = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				m = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t), {
					scheduledPost: i(e)
				}),
				g = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t), {
					scheduledPost: i(e)
				}),
				b = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				y = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				v = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				x = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				C = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t), {
					actionInfo: n.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				L = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				S = (e, t, s) => i => Object.assign({
					source: "post",
					action: "click",
					noun: Object(a.k)(e)
				}, r(i), {
					actionInfo: n.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				P = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				T = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				M = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				N = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e), {
					scheduledPost: i(t)
				}),
				A = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				D = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e), {
					scheduledPost: i(t)
				}),
				R = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				B = () => (e, t) => {
					const s = r(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s, {
						actionInfo: Object.assign({}, s.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: i(t)
					})
				}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				o = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), n.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/LayerDuplicate/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				className: e.className
			}, n.a.createElement("g", null, n.a.createElement("g", {
				transform: "translate(-78 82.5)"
			}, n.a.createElement("path", {
				d: "M-435,387.5h-7a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h1v2h-1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-1h2v1A3,3,0,0,1-435,387.5Zm3-8h-2v-2a1,1,0,0,0-1-1h-2v-2h2a3,3,0,0,1,3,3Z",
				transform: "translate(526 -448.5)"
			}), n.a.createElement("path", {
				d: "M96-66H89a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h7a3,3,0,0,1,3,3v7A3,3,0,0,1,96-66ZM89-77a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7a1,1,0,0,0-1-1Z"
			}))))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => o.has((Object(r.e)(e) || "").toLowerCase()) || c.has((Object(r.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: i.G,
					experimentName: a.ab
				}) === a.hb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "s", (function() {
				return k
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "k", (function() {
				return L
			}));
			var a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/endpoints/governance/crypto.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				o = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: s
					} = t;
					const a = k(e, {
						subredditId: s
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.harberger ? a.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				h = (e, t) => {
					const s = C(e, t);
					if (s) return s.mainHeader
				},
				p = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				m = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : d
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					if (Object(i.a)(e)) {
						const t = Object(o.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						a = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (a) {
						const e = !!a.polls && !1 === a.polls.canCreate;
						return s && !e
					}
					return s
				},
				y = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const s = Object(a.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				x = (e, t) => {
					const s = E(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				C = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const s = j(e, t);
					return s && s.walletProvider
				},
				w = (e, t) => {
					const s = k(e, t),
						a = j(e, t);
					return s && s.provider || a && a.provider
				},
				_ = (e, t) => {
					const s = w(e, t);
					return s === n.a.Ethereum || s === n.a.Rinkeby
				},
				E = (e, t) => {
					const s = k(e, t),
						a = w(e, t);
					if (s && !s.inTransition && a === n.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						i = r && r.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: s
					} = t;
					const a = k(e, {
						subredditId: s
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.subscriptions ? a.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				L = (e, t) => {
					const s = j(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=PainterModalLoader.f16cf3d303fc60c91cdc.js.map