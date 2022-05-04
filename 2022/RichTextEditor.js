// https://www.redditstatic.com/desktop2x/RichTextEditor.216e4091255166a8a283.js
// Retrieved at 5/4/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var o, s, r;
			s = [t, e], void 0 === (r = "function" == typeof(o = function(e, t) {
				"use strict";
				var n, o, s = "function" == typeof Map ? new Map : (n = [], o = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return o[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), o.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), o.splice(t, 1))
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
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, n = null,
							o = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== o && m()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", m, !1), e.removeEventListener("keyup", m, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", m, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", m, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", m, !1), e.addEventListener("autosize:update", m, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: d,
							update: m
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), m()
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
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var i = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = i + "px", o = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function m() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (o !== t ? "hidden" === n.overflowY && (c("scroll"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== o) {
							i = o;
							var s = r("autosize:resized");
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
						return i(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, c.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = c
			}) ? o.apply(t, s) : o) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var o = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = o(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = o(e, "line-height"), n = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var r = e.nodeName,
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var a = o(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var d = document.body;
					d.appendChild(i), n = i.offsetHeight, d.removeChild(i)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, s, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				}(),
				a = m(n("./node_modules/react/index.js")),
				d = m(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = m(n("./node_modules/autosize/dist/autosize.js")),
				l = m(n("./node_modules/line-height/lib/line-height.js"));

			function m(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				var n = {};
				for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (s = o = function(e) {
				function t() {
					var e, n, o;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
					return n = o = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {
						lineHeight: null
					}, o.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), o.textarea.dispatchEvent(t)
					}, o.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, o.updateLineHeight = function() {
						o.setState({
							lineHeight: (0, l.default)(o.textarea)
						})
					}, o.onChange = function(e) {
						o.currentValue = e.target.value, o.props.onChange && o.props.onChange(e)
					}, o.saveDOMNodeRef = function(e) {
						var t = o.props.innerRef;
						t && t(e), o.textarea = e
					}, o.getLocals = function() {
						var e = o,
							t = e.props,
							n = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							i = (t.innerRef, u(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = n && a ? a * n : null;
						return r({}, i, {
							saveDOMNodeRef: d,
							style: c ? r({}, s, {
								maxHeight: c
							}) : s,
							onChange: o.onChange
						})
					}, p(o, n)
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
							o = u(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", r({}, o, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), o.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
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
			var o, s = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (o = s) && o.__esModule ? o : {
					default: o
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, r, i) {
					if (i !== o) {
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
					checkPropTypes: r,
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
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/lib/domUtils/index.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const a = () => {
					s.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(o.c)(e, 0) : Object(o.c)(document, 0)
					})
				},
				d = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const o = e ? n.offsetTop : n.offsetTop - 50;
							s.a.write(() => t.scrollTo({
								top: o,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ie
			})), n.d(t, "o", (function() {
				return ae
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "v", (function() {
				return me
			})), n.d(t, "p", (function() {
				return he
			})), n.d(t, "u", (function() {
				return fe
			})), n.d(t, "n", (function() {
				return ge
			})), n.d(t, "m", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return Oe
			})), n.d(t, "a", (function() {
				return _e
			})), n.d(t, "b", (function() {
				return ve
			})), n.d(t, "r", (function() {
				return ke
			})), n.d(t, "f", (function() {
				return we
			})), n.d(t, "g", (function() {
				return je
			})), n.d(t, "k", (function() {
				return Se
			})), n.d(t, "d", (function() {
				return Me
			})), n.d(t, "c", (function() {
				return De
			})), n.d(t, "j", (function() {
				return Be
			})), n.d(t, "i", (function() {
				return We
			})), n.d(t, "l", (function() {
				return He
			})), n.d(t, "t", (function() {
				return Ue
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/lib/scroll/index.ts"),
				d = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/onboarding/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				h = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				x = n("./src/reddit/constants/adEvents.ts"),
				C = n("./src/reddit/constants/localStorage.ts"),
				E = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/lib/omitHeaders/index.ts"),
				T = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = n("./src/reddit/helpers/genericServerError/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				R = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, o) => {
					let s, r;
					if (o === S.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = g.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(e, {
						...E,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				P = async (e, t, n, o, r, i) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return r === S.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = i), Object(O.a)(Object(y.a)(e, [T.a]), {
						method: s.kb.POST,
						endpoint: Object(v.a)(Object(R.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(k.a)()
					})
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				B = n("./src/reddit/endpoints/post/convert.ts"),
				F = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				A = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				W = n("./src/reddit/helpers/dom/index.ts"),
				H = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/sessionStorage/index.ts"),
				z = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				K = n("./src/reddit/models/Comment/index.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/RichTextJson/index.ts"),
				G = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				J = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/commentSelector.ts"),
				Y = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				Z = n("./src/reddit/selectors/platform.ts"),
				$ = n("./src/reddit/selectors/posts.ts"),
				ee = n("./src/reddit/selectors/user.ts"),
				te = n("./src/reddit/actions/comment/index.ts"),
				ne = n("./src/reddit/actions/comment/constants.ts");
			const oe = Object(r.a)(ne.k),
				se = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, o) => {
						const s = o();
						if (!!s.features.comments.drafts[n])
							if (Object(ee.T)(s) && t) {
								const o = oe({
									hasFocus: t,
									draftKey: n
								});
								e(Object(d.f)(o))
							} else e(oe({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				re = Object(r.a)(ne.I),
				ie = Object(r.a)(ne.K),
				ae = Object(r.a)(ne.J),
				de = Object(r.a)(ne.H),
				ce = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await z.f(e, n, t, r)
				}, le = "Toxicity_Warning__Modal", me = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n(),
						i = Object(Z.e)(r);
					let a = "";
					i && (a = i.name);
					const {
						formData: d,
						editorMode: c
					} = e;
					if (A.d.enableToxicityWarning(r)) {
						if (!(await I(s(), a, d, c))) return void t(Object(l.i)(le))
					}
					t(he(e))
				}, ue = e => e.rteState ? g.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, pe = e => {
					let t = null;
					return e.rteState && (t = g.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, he = e => async (t, n) => {
					t(Object(l.g)(le));
					const o = n(),
						s = Object(Y.a)(o),
						r = Object(Y.c)(o);
					if (!o.user.account && s) {
						const n = pe(e.formData),
							o = ue(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(c.j)()), Object(U.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(be(e, !1))
				}, be = (e, t, n, r) => {
					let {
						postId: i,
						commentsPageKey: d,
						draftKey: c,
						formData: l,
						editorMode: m,
						disableAutofocus: p,
						isLiveStreaming: g
					} = e;
					return async (e, C, E) => {
						let {
							apiContext: O
						} = E;
						const _ = C(),
							y = _.features.comments.submit.pending[c];
						if (!_.user.account || y) return;
						t || e(re({
							draftKey: c,
							draft: l
						}));
						const T = _.user.account.displayText,
							v = l.commentMode;
						let k;
						if (g) k = await Object(F.i)(O(), i, l, T), e(Object(h.a)({
							streamId: i,
							level: k.body.automuteLevel
						}));
						else {
							const e = t && n ? n : pe(l);
							k = await P(O(), i, l, T, v, e)
						}
						if (k.ok) {
							let n;
							if (n = k.body, e(ie({
									...n,
									headCommentId: Object(V.w)(_, {
										commentsPageKey: d
									}),
									commentsPageKey: d,
									draftKey: c
								})), t) {
								const e = Object(Z.i)(_);
								Object(a.a)(!!e)
							}
							const o = Object($.G)(C(), {
								postId: i
							});
							e(Object(u.z)(o, x.a.CommentSubmitted))
						} else {
							if (k.error && k.error.type === s.Lb) {
								const e = t && r ? r : ue(l);
								z.h(_, e, i)
							}
							const n = k.error && k.error.fields && k.error.fields[0] ? k.error.fields[0].msg : o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(de({
								draftKey: c,
								error: k.error
							})), e(Object(f.f)({
								duration: f.a,
								kind: J.b.Error,
								text: n
							}))
						}
						ce(C(), d, m, k).then(() => k.ok && m === S.i.RICH_TEXT ? Object(L.b)(L.a.CommentComposer) : void 0), p || Object(b.d)(), t && Object(U.a)()
					}
				}, fe = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: d,
						formData: c,
						editorMode: m
					} = e, u = n(), p = Object(Z.e)(u);
					let h = "";
					if (p && (h = p.name), A.d.enableToxicityWarning(u)) {
						if (!(await I(s(), h, c, m))) return void t(Object(l.i)(le))
					}
					t(ge({
						commentsPageKey: i,
						draftKey: d,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: c,
						editorMode: m
					}))
				}, ge = e => async (t, n) => {
					t(Object(l.g)(le));
					const o = n(),
						s = Object(Y.a)(o),
						r = Object(Y.c)(o);
					if (!o.user.account && s) {
						const n = pe(e.formData),
							o = ue(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(c.j)()), Object(U.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(xe(e, !1))
				}, xe = (e, t, n, o) => async (r, i, d) => {
					let {
						apiContext: c
					} = d;
					const {
						parentCommentId: l,
						commentsPageKey: m,
						parentCommentDepth: u,
						draftKey: p,
						formData: h,
						editorMode: f
					} = e, g = i(), x = g.features.comments.submit.pending[p];
					if (!g.user.account || x) return;
					t || r(re({
						draftKey: p,
						draft: h
					}));
					const C = g.user.account.displayText,
						E = h.commentMode,
						O = t && n ? n : pe(h),
						_ = await P(c(), l, h, C, E, O);
					if (_.ok) {
						if (r(ae({
								..._.body,
								parentCommentId: l,
								commentsPageKey: m,
								draftKey: p,
								depth: u + 1
							})), t) {
							const e = Object(Z.i)(g);
							Object(a.a)(!!e)
						}
					} else {
						if (_.error && _.error.type === s.Lb) {
							const e = Object(Q.b)(g, {
								commentId: l
							});
							if (!e) return;
							const n = t && o ? o : ue(h);
							z.h(g, n, e.postId, l)
						}
						r(de({
							draftKey: p,
							error: _.error
						}))
					}
					ce(i(), m, f, _), Object(b.d)(), t && Object(U.a)()
				}, Ce = () => async e => {
					const t = Object(U.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: o,
								postId: s,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(m.skipOnboardingModal)()), s ? await e(be({
							...t.comment,
							postId: s
						}, !0, r, i)) : o && void 0 !== n && await e(xe({
							...t.comment,
							parentCommentId: o,
							parentCommentDepth: n
						}, !0, r, i))
					}
				}, Ee = Object(r.a)(ne.q), Oe = Object(r.a)(ne.y), _e = Object(r.a)(ne.p), ye = Object(r.a)(ne.l), Te = (Object(r.a)(ne.g), Object(r.a)(ne.m)), ve = (Object(r.a)(ne.t), (e, t, n) => async (s, r, i) => {
					let {
						apiContext: a
					} = i;
					const d = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(X.G)(t)) s(Te({
						editorMode: e,
						draftKey: n,
						content: d ? X.i : ""
					})), s(Object(p.c)(e));
					else {
						s(Object(p.b)(n));
						const r = await Object(B.a)(a(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(p.a)(n)), s(Te({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(p.c)(e))
						} else s(Object(p.a)(n)), s(Object(f.f)({
							duration: f.a,
							kind: J.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ke = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: o
					} = e;
					return async (e, s) => {
						const r = s(),
							a = Object(i.a)(q.c.replyToComment, n);
						if (!Object(ee.R)(s()) && !Object(Y.a)(r)) return e(Object(c.j)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(V.m)(s(), {
								commentId: n
							})
						}));
						const m = r.features.comments.replyFormOpen[t],
							u = m && m[n];
						if ((u || m && o) && (Object.keys(m).forEach(n => m[n] && e(_e({
								parentCommentId: n,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							h = null;
						const b = r.user.prefs.commentMode,
							f = Object(W.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (b === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => G.s(e, null)).map(e => G.l([e])),
									n = G.s("", null),
									o = G.l([n]);
								h = {
									document: [G.c(t), o]
								}
							}
						}
						const g = r.features.comments.drafts[a];
						let x;
						if (x = f ? {
								commentMode: b,
								draftType: q.c.replyToComment,
								rtJson: h,
								text: `${p}\n`
							} : g || {
								commentMode: b,
								draftType: q.c.replyToComment,
								rtJson: h,
								text: ""
							}, Object(ee.T)(r)) {
							const o = Ee({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: a,
								formData: x
							});
							e(Object(d.f)(o))
						} else e(Ee({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: a,
							formData: x
						}))
					}
				}, we = e => async t => {
					t(Object(te.p)(e)), t(Me(e))
				}, je = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(_e({
							parentCommentId: t,
							commentsPageKey: n
						})), e(ke({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(te.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Se = (e, t) => n => n(ye({
					draftKey: e,
					formData: t
				})), Re = Object(r.a)(ne.s), Me = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: o,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (z.c(a), e(Re({
							commentId: t,
							commentsPageKey: o,
							draftKey: s,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: q.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ie = Object(r.a)(ne.D), Pe = Object(r.a)(ne.C), Ne = Object(r.a)(ne.E), De = Object(r.a)(ne.h), Be = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: o,
						draftKey: r,
						formData: i
					} = e;
					return async (e, o, a) => {
						let {
							apiContext: d
						} = a;
						const c = o();
						if (!c.user.account) return;
						e(Ie({
							draftKey: r
						})), z.d(c);
						const l = c.user.account.displayText || "",
							m = i.commentMode,
							u = await (async (e, t, n, o, r, i) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (i === S.i.MARKDOWN) a.text = o.text;
								else {
									a.text = null;
									let e = null;
									o.rteState && (e = g.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
										document: e
									})
								}
								return Object(O.a)(Object(y.a)(e, [T.a]), {
									endpoint: Object(v.a)(Object(M.a)(Object(R.a)(`${e.apiUrl}/api/editusertext`))),
									method: s.kb.POST,
									data: a
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(j.a)(e)
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body.json.data.things[0].data, r)
									}
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body, r)
									}
								} : {
									...e,
									error: e.error || Object(k.a)()
								})
							})(d(), t, 0, i, l, m);
						if (u.ok) {
							const o = u.body;
							e(Ne({
								commentId: t,
								commentsPageKey: n,
								draftKey: r
							})), e(Object(te.i)({
								[t]: {
									...o.comment
								}
							}))
						} else e(Pe({
							draftKey: r,
							error: u.error
						}))
					}
				}, Fe = Object(r.a)(ne.A), Ae = Object(r.a)(ne.z), Le = Object(r.a)(ne.B), We = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o();
					n(Fe({
						id: e
					})), z.a(e, a);
					const d = await ((e, t) => Object(O.a)(Object(y.a)(e, [T.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: s.kb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(k.a)()
					}))(i(), e);
					d.ok ? n(Le({
						id: e,
						postId: t
					})) : n(Ae({
						id: e,
						error: d.error
					}))
				}, He = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(te.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(D.q)(s(), e, r)).ok || t(Object(te.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ue = (e, t) => async (n, s, r) => {
					let {
						gqlContext: i
					} = r;
					var a, d, c, l, m, u;
					n(Object(te.c)());
					const p = e => Object(f.f)(Object(f.e)(e, J.b.Error));
					if (((null === (d = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === d ? void 0 : d.followed) || []).length === C.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === K.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(te.n)(a)), (await ((e, t) => Object(_.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(H.wb)(null !== (m = null === (l = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: J.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(te.n)(a)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(d.a),
				l = Object(a.a)(d.b),
				m = Object(a.a)(d.c),
				u = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: o.kb.GET
							});
						n.ok && n.body && e(m(n.body))
					}
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "c", (function() {
				return B
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = e => !(!e.document || !e.document.length),
				b = e => ({
					text: null,
					richtext_json: JSON.stringify({
						document: e.document
					})
				}),
				f = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				g = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...h(e) ? b(e) : f(e)
				});
			var x = (e, t) => Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: Object(p.a)(Object(m.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.kb.POST,
					data: g(t)
				}).then(u.b),
				C = n("./src/reddit/helpers/overlay/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				O = n("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = n("./src/reddit/helpers/trackers/post.ts"),
				y = n("./src/reddit/helpers/trackers/postComposer.ts"),
				T = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/actions/postCreation/constants.ts"),
				S = n("./src/reddit/actions/postCreation/general.ts");
			const R = Object(s.a)(j.l),
				M = Object(s.a)(j.m),
				I = Object(s.a)(j.x),
				P = Object(s.a)(j.H),
				N = Object(s.a)(j.I),
				D = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o(),
						a = Object(w.G)(i, {
							postId: e
						});
					t ? (n(Object(C.a)(a.permalink)), Object(O.e)(e, "edit")(i)) : Object(_.d)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = v.i.RICH_TEXT,
						m = "";
					d.type === T.o.TEXT ? (l = v.i.MARKDOWN, m = d.content) : d.type === T.o.RTJSON && (m = (l = d.rteMode || v.i.RICH_TEXT) === v.i.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), n(P({
						editorMode: l,
						mediaMetadata: c,
						postContent: m,
						postId: e
					}))
				}, B = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					y.E(n(), Object(S.o)(c)), t(I(d.id));
					const l = await x(a(), e),
						m = !1 === l.body.success;
					if (t(R(d.id)), l.ok && !m) {
						t(Object(i.f)({
							kind: k.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(N(d.id));
						const e = Object(E.a)(l.body);
						t(Object(r.S)({
							[d.id]: e
						}))
					} else t(M(l.error))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/helpers/trackers/postComposer.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(u.G),
				h = Object(s.a)(u.p),
				b = Object(s.a)(u.Q),
				f = (e, t, n) => async (s, a, f) => {
					let {
						apiContext: x
					} = f;
					d.m(a(), t);
					const C = t === c.i.MARKDOWN,
						E = t === c.i.RICH_TEXT,
						O = u.k;
					if (C && Object(l.G)(n)) return s(b({
						editorKey: e,
						editorMode: c.i.MARKDOWN,
						content: ""
					})), void s(g(t));
					if (E && !n) return s(b({
						editorKey: e,
						editorMode: c.i.RICH_TEXT,
						content: l.i
					})), void s(g(t));
					s(p(O));
					const _ = await Object(i.a)(x(), t, C ? JSON.stringify(n) : n);
					_.ok ? (s(h(O)), s(b({
						editorKey: e,
						editorMode: t,
						content: _.body.output
					})), s(g(t))) : (s(h(O)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const s = Object(a.l)();
					if (s >= 3) return;
					const i = n().user.prefs.useMarkdown ? c.i.MARKDOWN : c.i.RICH_TEXT;
					if (e === i) return;
					const d = e === c.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: d
					})), Object(a.sb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.r),
				a = Object(o.a)(r.F),
				d = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const d = await Object(s.a)(r(), e);
					d && d.ok ? t(i({
						streamId: e,
						level: d.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				let {
					breakOut: t,
					depth: n,
					isEditing: o,
					...i
				} = e;
				return s.a.createElement("div", d({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: c(n, o)
					}
				}, i))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				BaseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				baseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(c);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.wrapped(d.a, "LoadingIcon", l.a), p = i.a.wrapped(a.t, "CancelButton", l.a), h = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: i,
					submitButtonText: d,
					canSubmit: c,
					onSubmit: b,
					onCancel: f
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.FormFooterWrapper, i, {
						[l.a.pending]: t
					})
				}, s.a.createElement("div", {
					className: l.a.ButtonWrapper
				}, s.a.createElement(a.t, {
					className: l.a.SubmitButton,
					size: a.d.XS,
					type: "submit",
					disabled: !c,
					onClick: b,
					onMouseDown: h
				}, t ? s.a.createElement(u, {
					sizePx: 10
				}) : d), n && s.a.createElement(p, {
					priority: a.c.Secondary,
					size: a.d.XS,
					type: "reset",
					disabled: t,
					onClick: f,
					onMouseDown: h
				}, m._("Cancel", null, {
					hk: "2TSLl5"
				}))), o)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/noop.js"),
				a = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-dom/index.js"),
				m = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/comment/authoring.ts"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				b = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				g = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				C = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = n("./src/reddit/controls/ErrorText/index.tsx"),
				O = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Help/index.tsx"),
				y = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				T = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				v = n("./src/lib/fastdom/index.ts"),
				k = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				w = n.n(k),
				j = n("./src/lib/lessComponent.tsx");
			const S = 310,
				R = j.a.div("Container", w.a);
			class M extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < S ? "compact" : "full";
						n !== this.state.toolbarType && v.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					v.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return c.a.createElement(R, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var I = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				P = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				N = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				D = n.n(N),
				B = n("./src/reddit/controls/Button/index.tsx");
			const F = j.a.wrapped(O.a, "LoadingIcon", D.a),
				A = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return c.a.createElement(F, n)
				},
				L = j.a.div("Wrapper", D.a),
				W = j.a.wrapped(I.a, "MarkdownModeIcon", D.a),
				H = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return c.a.createElement(W, n)
				};
			var U = c.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return c.a.createElement(L, null, c.a.createElement(B.t, {
						priority: B.c.Plain,
						size: B.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? A : H
					}, c.a.createElement(P.a, {
						text: t
					})))
				})),
				z = n("./src/lib/classNames/index.ts"),
				K = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				X = n("./src/realtime/GQLSubscription/async.tsx"),
				G = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				J = n("./src/reddit/constants/componentSizes.ts"),
				V = n("./src/reddit/constants/componentTestIds.ts"),
				Q = n("./src/reddit/selectors/activeModalId.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/editorContent.ts"),
				$ = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = n("./src/reddit/actions/modal.ts"),
				te = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				ne = n("./src/reddit/models/PostCreationForm/index.ts"),
				oe = n("./src/reddit/models/PostDraft/index.ts"),
				se = n("./src/reddit/models/User/index.ts"),
				re = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ie = n.n(re);
			const ae = j.a.button("SwitchModeButton", ie.a),
				de = j.a.wrapped(O.a, "LoadingIcon", ie.a),
				ce = j.a.div("CommentHeader", ie.a),
				le = j.a.span("FormHeaderText", ie.a),
				me = j.a.button("HelpButton", ie.a),
				ue = j.a.wrapped(_.a, "HelpIcon", ie.a),
				pe = j.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = j.a.wrapped(C.a, "CurrentUserIcon", ie.a),
				be = e => c.a.createElement(me, {
					className: e.className,
					onClick: e.onClick
				}, c.a.createElement(ue, null)),
				fe = 8,
				ge = 16,
				xe = Object(m.b)(() => Object(u.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(se.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Y.i,
					isConverting: (e, t) => Object(Z.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(q.a)(t.draftKey))),
					helpModalToggled: () => e(Object(ee.i)(x.b))
				}));
			class Ce extends c.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = r()(() => this.setState({
						isUserTyping: !1
					}), G.c), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < J.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || v.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							v.a.read(this.detectBreakout)
						}), this.props.isTypingIndicatorsWriteTestEnabled && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === oe.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === K.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: ne.i.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						postId: t,
						isTypingIndicatorsWriteTestEnabled: n
					} = e;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: t
							}
						}
					});
					const {
						draftType: s,
						hasError: i,
						initialText: a
					} = e;
					this.state = {
						text: a || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: i,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: s === oe.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						isUserTyping: !1
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), v.a.read(this.detectBreakout), v.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null), this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel()
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(l.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + fe + ge + J.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: r,
						depth: i,
						draft: d,
						draftKey: l,
						draftType: m,
						errorMsgs: u,
						pending: C,
						modalSeen: O,
						submitButtonText: _,
						isCommentBoxDesignEnabled: v,
						isExpanded: k,
						isTopLevelComment: w,
						isTypingIndicatorsWriteTestEnabled: j,
						onSwitchMode: S,
						userName: R
					} = this.props, {
						cancelModalText: I,
						showError: P,
						text: N,
						breakOut: D,
						wrapperHeight: B,
						isUserTyping: F
					} = this.state, A = Object(q.a)(l), L = d.draftType === oe.c.edit;
					return c.a.createElement("div", {
						"data-test-id": V.b,
						className: Object(z.a)(ie.a.Wrapper, s, {
							[ie.a.isTopLevelComment]: w,
							[ie.a.mExpanded]: k,
							[ie.a.mRedesign]: v
						}),
						ref: this.setWrapperRef,
						style: {
							height: D ? B : void 0
						}
					}, j && F && c.a.createElement(X.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !v && w && R && c.a.createElement(ce, null, c.a.createElement(le, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", c.a.createElement(h.a, {
						author: R,
						isAuthorDeleted: !1
					}, R))], {
						hk: "4pMWAk"
					}))), c.a.createElement(y.a, {
						breakOut: D,
						depth: i,
						isEditing: L
					}, v && c.a.createElement("div", {
						className: ie.a.userIcon
					}, c.a.createElement(he, null)), c.a.createElement("div", {
						className: Object(z.a)(ie.a.FormWrapper, {
							[ie.a.pending]: C,
							[ie.a.focused]: d.hasFocus
						})
					}, c.a.createElement(pe, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: C,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: v ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: N
					}), (!v || k) && c.a.createElement(T.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: m !== oe.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: C,
						submitButtonText: _,
						canSubmit: this.userHasEnteredText()
					}, c.a.createElement(M, null, e => "compact" === e ? c.a.createElement(U, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => S(ne.i.RICH_TEXT, N, l),
						isConverting: this.props.isConverting
					}) : c.a.createElement("div", null, c.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => S(ne.i.RICH_TEXT, N, l)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && c.a.createElement(de, {
						sizePx: 12
					})))), c.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), P && Object(E.c)(u), e === A && c.a.createElement(g.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: I,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === x.b && c.a.createElement(x.a, {
						withOverlay: !0
					}), e === p.s && c.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: O,
						withOverlay: !0
					}), c.a.createElement(b.a, {
						editKey: l,
						hasValue: !!N
					}))
				}
			}
			t.b = xe(Ce)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class d extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						d.blockers.delete(e), d.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", d.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					this.props.skipBlockingOnPageReload ? this.unblock(this.props.editKey) : !e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					d.blockers.add(e), a || (window.addEventListener("beforeunload", d.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return !!window.confirm(e) && void 0
					}))
				}
				render() {
					return null
				}
			}
			d.blockers = new Set, d.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(d)
		},
		"./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				RequestBox: "_2dVm83ugs7xhdLU8UptoxO",
				requestBox: "_2dVm83ugs7xhdLU8UptoxO",
				commentIcon: "_3-cqJ5aJH2EZKxhqY43T9D",
				commentText: "_2o9LnZvm1HYNaUjzmMO8E5",
				requestButton: "_3OvdD2phTivi0gnXR8NPl-"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				CommentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				commentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				FormFooter: "RQTXfVRnnTF5ont3w58rx",
				formFooter: "RQTXfVRnnTF5ont3w58rx",
				mRedesign: "fbWRDwlX43TjfA8zsjnFx",
				MarkdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				markdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				SectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				sectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				ToolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				toolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				FormWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				formWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				isTopLevelComment: "aUM8DQ_Nz5wL0EJc_wte6",
				isRedesign: "_1kxci6CC2SNpUlvzABIQGP",
				MarkdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				markdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				FormHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				formHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				tooltipTextWrapper: "k-vjguq_GjpAA4aCWemKB"
			}
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				a = n.n(i),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.n(e),
					screen: b.Y(e),
					subreddit: b.gb(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				E = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var O = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(c.s))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class T extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return s.a.createElement(m.e, null, s.a.createElement(m.i, null, s.a.createElement(O.a, null, s.a.createElement(m.q, null, _._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(m.b, null)))), s.a.createElement(m.l, null, s.a.createElement(m.p, null, _._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(m.g, null, s.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, _._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(m.r, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, _._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(d.a)(y(Object(u.c)(T)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/CommentCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				m = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				u = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				b = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				g = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				x = n.n(g);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = p.a.div("RequestBox", x.a);
			var O = () => i.a.createElement(E, null, i.a.createElement(b.a, {
					className: x.a.commentIcon
				}), i.a.createElement("div", {
					className: x.a.commentText
				}, C._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(h.default, {
					className: x.a.requestButton,
					eventSource: f.b.Comment
				})),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./node_modules/lodash/noop.js"),
				T = n.n(y),
				v = n("./src/lib/classNames/index.ts"),
				k = n("./src/lib/fastdom/index.ts"),
				w = n("./src/lib/memoizeByReference/index.ts"),
				j = n("./src/reddit/components/AuthorLink/index.tsx"),
				S = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = n("./src/reddit/components/RichTextEditor/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				I = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				P = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				N = n("./src/reddit/helpers/richTextEditor/index.ts"),
				D = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				B = n("./src/reddit/actions/tooltip.ts"),
				F = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = n("./src/reddit/constants/localStorage.ts"),
				L = n("./src/reddit/helpers/localStorage/index.ts"),
				W = n("./src/reddit/icons/svgs/Smile/index.tsx"),
				H = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				U = n("./src/reddit/selectors/gold/powerups/index.ts"),
				z = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				K = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				q = n.n(K);
			const X = 5,
				G = "ProwerupsEmoji--FirstUploadStimulus",
				J = 100;
			const V = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(H.a)(e, {
						subredditId: n
					})
				},
				customEmotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(U.i)(e, {
						subredditId: n
					})
				},
				userCanEditCustomEmojis: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(U.v)(e, {
						subredditId: n
					})
				},
				subredditHasPowerups: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(U.h)(e, {
						subredditId: n
					})
				}
			});
			var Q = Object(a.b)(V)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o,
						userCanEditCustomEmojis: s,
						customEmotes: d,
						subredditHasPowerups: c,
						subredditId: l
					} = e, m = l ? Object(L.j)(A.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l) : 0, u = c && m < X && s && 0 === d.length, [p, h] = Object(r.useState)(u), b = Object(a.d)();
					Object(r.useEffect)(() => {
						p && l && setTimeout(() => {
							Object(L.T)(A.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l), b(Object(B.f)({
								tooltipId: G
							}))
						}, J)
					}, [b, p, l]);
					const f = c ? _.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : _.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(F.c, {
						tooltipId: G,
						text: _.fbt._("NEW! Add custom emojis", null, {
							hk: "1C510K"
						}),
						className: q.a.addEmojiTooltip
					}), i.a.createElement("span", {
						id: G
					}, i.a.createElement(z.a, {
						Icon: () => i.a.createElement(W.a, {
							className: q.a.smile
						}),
						tooltip: p ? void 0 : f,
						enabled: t.emote.isEnabled,
						onClick: e => {
							p && (b(Object(B.j)({
								tooltipId: G
							})), h(!1)), o(e)
						}
					}, i.a.createElement("div", {
						className: Object(v.a)(q.a.emotes, {
							[q.a.emoteMask]: n.length > 1
						})
					}, n.map(e => i.a.createElement("img", {
						className: q.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))))
				})),
				Y = n("./src/lib/constants/icons.ts"),
				Z = n("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				$ = n.n(Z);

			function ee(e) {
				const {
					controlsState: t,
					onGifButtonClick: n,
					userCanUseGifs: o
				} = e, s = t.giphy.isEnabled;
				return i.a.createElement(z.a, {
					iconName: Y.a.gif_post,
					className: s && o ? $.a.rainbow : void 0,
					tooltip: _.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: _.fbt._("Limit 1 GIF / comment", null, {
						hk: "7T6gq"
					}),
					enabled: s,
					onClick: n
				})
			}
			var te = n("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				ne = n.n(te);
			const oe = p.a.div("SectionSpacer", ne.a);

			function se(e) {
				const {
					className: t,
					destSubreddit: n,
					editorKey: o,
					editorState: s,
					onChange: r,
					onEmoteButtonClick: d,
					onGifButtonClick: c,
					onOverflowMenuClick: l,
					readOnly: m,
					trackOnClick: u,
					onLinkButtonClick: p,
					userCanUseGifs: h
				} = e, b = Object(D.a)(s);
				m && Object(D.b)(b);
				const f = null == n ? void 0 : n.id,
					g = Object(a.e)(e => void 0 !== f && Object(H.b)(e, {
						subredditId: f
					})),
					x = Object(a.e)(e => void 0 !== f && Object(H.c)(e, {
						subredditId: f
					}));
				return i.a.createElement(I.a, {
					className: t,
					oveflowMenuDropdownId: o,
					onOverflowMenuClick: l,
					editorType: N.a.Comment
				}, i.a.createElement("div", {
					className: ne.a.powerupButtons
				}, g && i.a.createElement(Q, {
					controlsState: b,
					subredditId: n && n.id,
					onEmoteButtonClick: d
				}), x && i.a.createElement(ee, {
					controlsState: b,
					onGifButtonClick: c,
					userCanUseGifs: h
				})), (g || x) && i.a.createElement(oe, null), Object(P.g)(P.f, b, s, r, u), i.a.createElement(P.a, {
					controlsState: b,
					trackOnClick: u,
					onLinkButtonClick: p
				}), Object(P.g)(P.h, b, s, r, u), i.a.createElement(oe, null), Object(P.g)(P.e, b, s, r, u), i.a.createElement(oe, null), i.a.createElement(P.d, {
					controlsState: b,
					editorState: s,
					trackOnClick: u,
					onChange: r
				}))
			}
			var re = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				ie = n("./src/reddit/constants/componentSizes.ts"),
				ae = n("./src/reddit/constants/componentTestIds.ts"),
				de = n("./src/reddit/constants/modals.ts"),
				ce = n("./src/reddit/controls/ErrorText/index.tsx"),
				le = n("./src/reddit/helpers/correlationIdTracker.ts"),
				me = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				ue = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				pe = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				he = n("./src/reddit/models/PostCreationForm/index.ts"),
				be = n("./src/reddit/models/PostDraft/index.ts"),
				fe = n("./src/reddit/actions/modal.ts"),
				ge = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				xe = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				Ce = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Ee = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Oe = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				_e = n("./src/reddit/models/Subreddit/index.ts"),
				ye = n("./src/reddit/selectors/activeModal.ts"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				ve = n("./src/reddit/selectors/comments.ts"),
				ke = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				je = n("./src/reddit/selectors/user.ts"),
				Se = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Re = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Me = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Ie = n.n(Me);
			const Pe = 16,
				Ne = p.a.div("CommentHeader", Ie.a),
				De = p.a.div("MarkdownButtonWrapper", Ie.a),
				Be = p.a.wrapped(oe, "SectionSpacer", Ie.a),
				Fe = p.a.span("FormHeaderText", Ie.a),
				Ae = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: n,
						isCommentBeforeSignUpEnabled: o,
						isCommentBoxDesignEnabled: s,
						onSubmit: r,
						onCancel: a,
						pending: d,
						submitButtonText: c
					} = e;
					return e => {
						const {
							editorState: l,
							onMarkdownButtonClick: m
						} = e, u = l.getCurrentContent(), p = !!u.getPlainText().trim() || u.getBlockMap().some(e => !!e && Object(M.t)(e.getType()));
						return i.a.createElement(ue.a, {
							cancelButtonEnabled: t,
							className: Object(v.a)(Ie.a.FormFooter, {
								[Ie.a.mRedesign]: s
							}),
							onSubmit: r,
							onCancel: a,
							pending: d,
							submitButtonText: c,
							canSubmit: p
						}, i.a.createElement("div", {
							className: Ie.a.ToolbarWrapper
						}, i.a.createElement(se, e), i.a.createElement(Be, null), !o && i.a.createElement(De, null, i.a.createElement(re.a, {
							className: Ie.a.MarkdownButton,
							draftKey: n,
							onClick: m
						}))))
					}
				},
				Le = Object(a.b)(() => Object(d.c)({
					activeModalId: Te.a,
					destSubreddit: (e, t) => {
						const n = Object(Oe.r)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === _e.f.User,
							id: n.id
						} : void 0
					},
					draft: ve.i,
					isCommentBeforeSignUpEnabled: we.a,
					isLoggedIn: je.R,
					isLoginModalOpened: Object(ye.c)(de.a.LOGIN_MODAL_ID),
					isRegisterModalOpened: Object(ye.c)(de.a.REGISTER_MODAL_ID),
					userCanUseEmojis: (e, t) => {
						const n = Object(Oe.r)(e, t);
						return Object(ke.s)(e, n ? n.id : void 0, t.parentCommentId)
					},
					userCanUseGifs: (e, t) => {
						const n = Object(Oe.r)(e, t);
						return Object(ke.t)(e, n ? n.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(Re.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(fe.i)(Object(pe.a)(t.draftKey)))
				}));
			class We extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(w.a)((e, t, n, o, s, r) => Ae({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBeforeSignUpEnabled: n,
						isCommentBoxDesignEnabled: o,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: s,
						submitButtonText: r
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < ie.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || k.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return Ce.a.hasContent(e)
					}, this.handleBlur = () => this.props.onFocusChanged(!1), this.handleFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleChange = (e, t) => {
						const {
							onChange: n
						} = this.props;
						n && n({
							rteState: e
						}), t && this.setState({
							hasChanged: !0
						}), this.setState(() => ({
							showError: !1,
							rteState: e
						}), () => {
							k.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === be.c.replyToPost && this.setState({
							rteState: Ce.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === be.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: he.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(le.e)(le.a.CommentComposer, !1), this.props.sendEvent(Object(m.g)(e, t))
					};
					const {
						draft: t,
						draftType: n,
						hasError: o,
						mediaMetadata: s,
						rtJson: r
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: n === be.c.edit ? _.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : _.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : Ce.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: Ce.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(le.b)(le.a.CommentComposer), this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), k.a.read(this.detectBreakout), k.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + Pe
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: n,
						depth: o,
						destSubreddit: s,
						draft: r,
						draftKey: a,
						draftType: d,
						errorMsgs: c,
						isCommentBeforeSignUpEnabled: m,
						isCommentBoxDesignEnabled: u,
						isExpanded: p,
						isLoggedIn: h,
						isLoginModalOpened: b,
						isRegisterModalOpened: f,
						modalSeen: g,
						pending: x,
						postId: C,
						submitButtonText: E,
						isTopLevelComment: O,
						userCanUseEmojis: y,
						userCanUseGifs: k,
						userName: w,
						isTypingIndicatorsWriteTestEnabled: M
					} = this.props, {
						cancelModalText: I,
						breakOut: P,
						formHeight: D,
						rteState: B
					} = this.state, F = Object(pe.a)(a), A = r.draftType === be.c.edit, L = d !== be.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(v.a)(Ie.a.FormWrapper, n, {
							[Ie.a.isTopLevelComment]: O,
							[Ie.a.isRedesign]: u
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: P ? D : void 0
						}
					}, !u && O && w && i.a.createElement(Ne, null, i.a.createElement(Fe, null, _.fbt._("Comment as {authorLink}", [_.fbt._param("authorLink", i.a.createElement(j.a, {
						author: w,
						isAuthorDeleted: !1
					}, w))], {
						hk: "4pMWAk"
					}))), i.a.createElement(me.a, {
						breakOut: P,
						depth: o,
						isEditing: A
					}, i.a.createElement(R.a, {
						userCanUseEmojis: y,
						userCanUseGifs: k,
						dataTestId: ae.c,
						destSubreddit: s,
						editorType: N.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: u,
						isExpanded: p,
						isTypingIndicatorsWriteTestEnabled: M,
						rteState: B,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: u ? _.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : _.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: C,
						readOnly: x,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(L, a, !h && m, u, x, E)
					})), this.state.showError ? Object(ce.c)(c) : null, e === F && i.a.createElement(S.a, {
						actionText: _.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: _.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: I,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: T.a
					}), e === l.s && i.a.createElement(xe.a, {
						onSubmit: this.onSubmit,
						modalSeen: g,
						withOverlay: !0
					}), i.a.createElement(ge.a, {
						editKey: a,
						hasValue: Ce.a.hasContent(B),
						skipBlockingOnPageReload: !h && m && (b || f)
					}))
				}
			}
			var He = Object(Ee.u)()(Le(Object(Se.c)(We))),
				Ue = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				ze = n("./src/reddit/models/User/index.ts"),
				Ke = n("./src/reddit/selectors/experiments/commentBox.ts"),
				qe = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Xe = n("./src/reddit/selectors/posts.ts");
			const Ge = Object(Ee.u)(),
				Je = Object(d.c)({
					activeModalId: Te.a,
					contributorRequestPending: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(Ee.b)(e, n, f.e.Comment)
					},
					isCommentBoxDesignEnabled: Ke.a,
					userName: e => e.user.account ? Object(ze.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: ve.v,
					errorMsgs: ve.K,
					draft: ve.i,
					disableAutofocus: ve.f,
					showContributorRequestFlow: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(Ee.db)(e, n, f.e.Comment)
					},
					postAuthorIsBlocked: Xe.w,
					isTrueblockPCBlockeeEnabled: qe.d
				}),
				Ve = Object(a.b)(Je, (e, t) => ({
					onMount: () => e(c.a(t.draftKey)),
					onCancel: () => {
						t.draftType === be.c.edit ? e(l.c({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.a({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: n => e(l.k(t.draftKey, n)),
					onFocus: s()(() => e((e, n) => Object(m.e)(n(), t.draftType))),
					onFocusChanged: n => e(l.e({
						hasFocus: n,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, n, o) => e(l.b(t, n, o)),
					dispatchSubmit: (n, o) => {
						e(t.submitAction(n, o))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSubmit: n => {
						t.dispatchSubmit(n, e.draft.commentMode)
					}
				}));
			class Qe extends i.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, n) => {
						await this.props.onSwitchMode(e, t, n), this.formInstanceRef && this.formInstanceRef.focus()
					}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onEditorFocus = () => {
						const {
							isCommentBoxDesignEnabled: e,
							onFocus: t
						} = this.props;
						e ? this.setState(e => e.isExpanded ? null : {
							isExpanded: !0
						}, t) : t()
					}, this.modalSeen = () => {
						this.setState({
							showWarningModal: !1
						})
					};
					const t = e.draft ? e.draft.text : e.initialText || "";
					this.state = {
						isExpanded: !e.isCommentBoxDesignEnabled || !!t,
						showWarningModal: !0
					}
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n && this.setState({
						showWarningModal: !0
					})
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.draft || e.postAuthorIsBlocked && e.isTrueblockPCBlockeeEnabled) return null;
					const t = e && e.draft && e.draft.rtJson || e.rtJson || void 0,
						n = {
							autofocus: e.autofocus || !1,
							className: e.className,
							depth: e.depth,
							disableAutofocus: e.disableAutofocus,
							draftKey: e.draftKey,
							draftType: e.draftType,
							editorElementRef: e.editorElementRef,
							errorMsgs: e.errorMsgs,
							initialHeight: this.state.editorHeight,
							instanceRef: this.getInstanceRef,
							hasError: e.hasError,
							modalSeen: this.modalSeen,
							onCancel: e.onCancel,
							onEditorResize: this.onEditorResize,
							onFocus: this.onEditorFocus,
							onFocusChanged: e.onFocusChanged,
							onMount: e.onMount,
							onSubmit: e.onSubmit,
							onUnmount: e.onUnmount,
							parentCommentId: e.parentCommentId,
							pending: e.pending,
							postId: e.postId,
							rtJson: t,
							mediaMetadata: e.mediaMetadata,
							isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
							isExpanded: this.state.isExpanded,
							isTopLevelComment: e.isTopLevelComment,
							submitButtonText: e.submitButtonText,
							userName: e.userName,
							initialText: e.draft ? e.draft.text : e.initialText || "",
							onSwitchMode: this.onSwitchMode,
							showWarningModal: this.state.showWarningModal
						};
					return e.contributorRequestPending ? i.a.createElement(Ue.a, null) : e.showContributorRequestFlow ? i.a.createElement(O, null) : e.draft.commentMode === he.i.RICH_TEXT ? i.a.createElement(He, n) : i.a.createElement(u.b, n)
				}
			}
			t.default = Ge(Ve(Qe))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return V
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (n, s, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, n) => Object(b.a)(Object(f.a)(e, [g.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.kb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					d = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					n(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(h.f({
						id: l,
						kind: x.b.SuccessCommunityGreen,
						text: s
					}))
				} else n(h.f({
					id: d,
					kind: x.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var E = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const R = (e, t, n, o, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.y)(r, void 0, {
						oldSort: n,
						sort: o,
						source: s
					}),
					userSubreddit: Object(S.qb)(r)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(S.gb)(e),
					userSubreddit: Object(S.qb)(e)
				}),
				P = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...I
				});
			var N = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = n("./src/reddit/icons/svgs/Info/index.tsx"),
				B = n("./src/reddit/selectors/activeModalId.ts"),
				F = n("./src/reddit/selectors/comments.ts"),
				A = n("./src/reddit/selectors/moderatorPermissions.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				W = n("./src/reddit/selectors/tooltip.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				z = n.n(U),
				K = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(y.a)(v.a),
				X = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class G extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: s
					} = this.props;
					return r.a.createElement("div", {
						className: z.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(d.a)(z.a.HighlightPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${X(s)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(N.b, {
						className: z.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(k.b, {
						displayText: X(K.a.First),
						isSelected: s === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: X(K.a.Last),
						isSelected: s === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: X(K.a.None),
						isSelected: s === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var J = G;
			const V = "CommentSort--SortPicker",
				Q = "CommentSort--HighlightPicker",
				Y = "CommentSort--Tooltip",
				Z = Object(y.a)(v.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(F.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(B.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(W.b)(V),
					highlightIsOpen: Object(W.b)(Q),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(A.m)(e, {
							postId: n
						});
						return !!o && o.posts
					},
					post: L.G,
					postPermalink: L.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(H.w)(e),
							s = !!Object(A.m)(e, {
								postId: n
							}),
							r = Object(L.G)(e, {
								postId: n
							});
						return (s || o) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: F.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: V
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: Q
							})), t()
						},
						onSetSuggestedSort: t => e(C(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: Y
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, o) => this.props.sendEvent(R(e, this.props.isOverlay, t, n, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(P(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: s,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: h,
						post: b,
						postPermalink: f,
						selectedHighlightSort: g,
						showCommentHighlighter: x,
						sort: C,
						suggestedSort: y,
						showTooltip: T,
						toggleContestModeModal: v
					} = this.props, S = b.contestMode, R = !h.search.includes(c.u.CONFIDENCE), I = C === c.u.CONFIDENCE && R, P = u && !I, B = c.w[C], F = B ? B() : "", A = y && C === y && !I ? this.addSuggestedLabel(F) : F, L = S ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), W = S ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), H = S ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), U = S && !u;
					return r.a.createElement("div", {
						className: Object(d.a)(t, z.a.container, {
							[z.a.hideCommentSort]: !x && U
						}),
						ref: a
					}, r.a.createElement("div", {
						className: z.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(d.a)(z.a.SortPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${A}`,
						id: V,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(N.b, {
						className: z.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: V
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = n || f,
							o = Object(j.b)(t),
							s = c.w[e],
							i = s ? s() : "";
						return r.a.createElement(_.a, {
							className: z.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), P && !U && (y ? r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: C !== y ? this.setSortOnClick : this.clearSortOnClick
					}, C !== y ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: z.a.SetSort
					}, r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Y,
						onMouseEnter: T,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: z.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Y
					}), r.a.createElement(D.a, {
						className: z.a.Info
					})))), u && r.a.createElement("button", {
						className: z.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: z.a.ToggleSwitch,
						on: S
					}))), x && r.a.createElement("div", {
						className: z.a.containerRow
					}, r.a.createElement(J, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: Q,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: M
					})), s && r.a.createElement(E.a, {
						actionText: W,
						headerText: L,
						modalText: H,
						onConfirm: this.setContestMode,
						toggleModal: v,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(T.c)(te))
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
				[h.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: o
						} = this.props;
						t === h.b.ContentGate ? (e(Object(u.a)(t)), n()) : (e(Object(p.a)(t)), o())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: s
					} = this.props;
					return r.a.createElement(m.t, {
						priority: e === h.b.ContentGate ? m.c.Secondary : m.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? m.d.S : m.d.M,
						disabled: s
					}, s ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(x))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? s.a.createElement(c, null, o) : s.a.createElement(c, null), s.a.createElement(l, {
					className: m
				}, s.a.createElement("div", {
					className: a.a.title
				}, d), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: n,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return s.a.createElement(i.a, d({
					className: n,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? c : r.a;
				return s.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				d = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				x = n.n(g),
				C = n("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				O = C.a.wrapped(b.a, "Section", x.a),
				_ = C.a.div("Container", x.a),
				y = C.a.table("Table", x.a),
				T = C.a.p("P", x.a);
			class v extends r.a.Component {
				render() {
					const e = o.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = o.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						n = o.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						s = o.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						i = o.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						m = o.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(d.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: o.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(_, null, r.a.createElement(y, {
						className: x.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, o.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(c.s, null, r.a.createElement(c.j, null, o.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*", e, "*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, e))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**", t, "**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, t))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* ", n, " 1"), r.a.createElement(c.j, null, "* ", n, " 2"), r.a.createElement(c.j, null, "* ", n, " 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, n, " 1"), r.a.createElement(c.g, null, n, " 2"), r.a.createElement(c.g, null, n, " 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> ", s)), r.a.createElement(c.p, null, r.a.createElement(c.c, null, s))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~", i, "~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, i))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, o.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(c.p, null, o.fbt._("super{=script}", [o.fbt._param("=script", r.a.createElement(c.m, null, o.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, `>!${m}!<`)), r.a.createElement(c.p, null, r.a.createElement(l.a, null, m)))), r.a.createElement(T, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(O, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const k = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(v);
			t.a = Object(u.a)(Object(m.c)(k))
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				m = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/editorContent.ts"),
				E = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				O = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const y = _.a.wrapped(f.a, "LoadingIcon", O.a),
				T = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return r.a.createElement(y, n)
				},
				v = _.a.span("ModeDescription", O.a),
				k = _.a.div("ModeWrapper", O.a),
				w = _.a.wrapped(c.a, "MarkdownHelpButton", O.a),
				j = _.a.div("Toolbar", O.a),
				S = Object(a.c)({
					activeModalId: x.a,
					isConverting: e => Object(C.a)(e)
				}),
				R = Object(i.b)(S, (e, t) => ({
					onChange: n => {
						e(Object(d.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(d.z)(m.b)),
					switchToRTEModalToggled: () => e(Object(d.z)(u.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class M extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: s,
						value: i
					} = this.props, {
						isFocused: a
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: s,
						isFocused: a
					}, r.a.createElement(j, null, r.a.createElement(k, null, r.a.createElement(v, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(w, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(I, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: i
					})), this.props.activeModalId === m.b && r.a.createElement(m.a, {
						withOverlay: !0
					}), this.props.activeModalId === u.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(u.b, {
						modalId: u.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const I = r.a.memo(e => {
				let {
					isConverting: t,
					onClick: n
				} = e;
				const s = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: n,
					Icon: t ? T : void 0,
					text: s
				})
			});
			t.a = R(M)
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				m = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(u),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(d.l, "PrimaryButton", p.a),
				f = h.a.wrapped(i.p, "ModalText", p.a);
			class g extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return s.a.createElement(i.e, null, s.a.createElement(i.i, null, s.a.createElement(m.a, null, s.a.createElement(i.q, null, this.props.titleText), s.a.createElement(l.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.l, null, s.a.createElement(f, null, this.props.bodyText)), s.a.createElement(i.g, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? s.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), s.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? s.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const d = {
					title: () => s.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => s.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => s.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				c = {
					title: () => s.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => s.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => s.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => s.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => s.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => s.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				m = {
					[o.LOAD_DRAFT_MODAL_ID]: d,
					[o.MAX_DRAFTS_MODAL_ID]: c,
					[o.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class u extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = m[e];
					return i.a.createElement(a.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = u
		},
		"./src/reddit/components/PostEditForm/index.m.less": function(e, t, n) {
			e.exports = {
				BottomRow: "_2tvWRsxtXPamngfOz-62jr",
				bottomRow: "_2tvWRsxtXPamngfOz-62jr",
				errorMessages: "_19V2_W_A8aXNszBqWTITiK",
				Editor: "_8uW3gzV8WqahKv77o2EFu",
				editor: "_8uW3gzV8WqahKv77o2EFu",
				isPending: "_2UWKes5OMhB-Rz2iVtBdKZ",
				FormContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				formContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				SubmitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				submitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				LoadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d",
				loadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d"
			}
		},
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/Poll/async.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/models/PostCreationForm/index.ts"),
				b = n("./src/reddit/models/PostRequirements/index.ts"),
				f = n("./src/reddit/selectors/platform.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/actions/postCreation/editing.ts"),
				C = n("./src/reddit/actions/postCreation/editorContent.ts"),
				E = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/memoizeByReference/index.ts"),
				y = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const T = Object(_.a)((e, t) => {
				const n = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(y.g)(t),
					i = ((e, t, n) => {
						if (!t) return null;
						let s = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? s = o.fbt._("Videos are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (s = o.fbt._("Images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "27ju8Q"
						})) : s = o.fbt._("Videos and images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "2GGFeK"
						}), s || null
					})(r, s, n);
				return i ? [i] : (e => {
					const t = [];
					return e.image > O.bb && t.push(o.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > O.eb && t.push(o.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var v = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/index.tsx"),
				w = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/controls/ErrorText/index.tsx"),
				R = n("./src/reddit/helpers/richTextEditor/index.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = n("./src/reddit/components/PostEditForm/index.m.less"),
				D = n.n(N),
				B = n("./src/lib/lessComponent.tsx");
			const F = B.a.div("BottomRow", D.a),
				A = B.a.div("FormContent", D.a),
				L = B.a.wrapped(I.l, "SubmitButton", D.a),
				W = B.a.wrapped(P.a, "LoadingIcon", D.a),
				H = Object(j.u)(),
				U = Object(l.c)({
					destSubreddit: g.h,
					editorMode: g.i,
					errorMessages: g.j,
					hasError: g.k,
					markdownDraft: g.l,
					pending: g.ab,
					postRequirements: g.pb,
					rteDraft: g.m,
					subreddit: j.r,
					uploads: e => e.uploads,
					user: M.l,
					isCommentsPage: f.f
				}),
				z = Object(d.b)(U, (e, t) => ({
					onCancel: t => e(x.b(t)),
					onSubmitDraft: t => e(x.c(t)),
					onSuccess: t => e(Object(c.b)(t)),
					onToggleEditorMode: (t, n) => e(C.d(h.h.POST_EDITING, t, n))
				}));
			class K extends a.a.Component {
				constructor(e) {
					super(e), this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onMarkdownPostChange = e => {
						const {
							markdownBody: t
						} = this.state, n = this.state.markdownPostDraftChanged || t.trim() !== e.trim();
						this.setState({
							markdownBody: e,
							markdownPostDraftChanged: n
						})
					}, this.onRichPostChange = (e, t) => {
						this.setState({
							rteState: e,
							richtextPostDraftChanged: this.state.richtextPostDraftChanged || t
						})
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === h.i.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === h.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t
						} = this.props, {
							rteState: n
						} = this.state;
						return n.isBound && e === h.i.RICH_TEXT ? T(t, n.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: n,
							rteState: o
						} = this.state;
						return e === h.i.RICH_TEXT ? w.a.toRichTextJSON(o, t) : {
							markdown: n
						}
					}, this.buildPostSubmission = () => {
						const {
							post: e
						} = this.props;
						return {
							post: e,
							...this.getTextPostContent(),
							validate_on_submit: !0
						}
					}, this.cancelEdit = () => {
						this.props.onCancel(this.props.post.id)
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e, this.state = {
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !1,
						richtextPostDraftChanged: !1,
						rteState: e.rteDraft
					}
				}
				componentDidMount() {
					Object(p.e)(p.a.PostComposer)
				}
				componentWillUnmount() {
					Object(p.b)(p.a.PostComposer), this.cancelEdit()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.rteDraft !== this.props.rteDraft && this.setState({
						rteState: e.rteDraft,
						richtextPostDraftChanged: !0
					}), e.markdownDraft !== this.props.markdownDraft && this.setState({
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !0
					})
				}
				haveRichPostDraft() {
					const {
						rteState: e
					} = this.state;
					return w.a.hasContent(e)
				}
				hasChanged() {
					const {
						editorMode: e
					} = this.props, {
						markdownPostDraftChanged: t,
						richtextPostDraftChanged: n
					} = this.state;
					return e === h.i.RICH_TEXT ? !!n : e === h.i.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: n,
						isCommentsPage: s,
						pending: i,
						post: d,
						postRequirements: c,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: f,
						richtextPostDraftChanged: g,
						rteState: x
					} = this.state, C = c && c.bodyRestrictionPolicy === b.a.Required ? o.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : o.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), O = this.getMediaValidationErrors(), _ = [...t, ...O];
					n && !_.length && _.push(o.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const y = !w.a.isAllMediaUploaded(x, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(A, null, e === h.i.RICH_TEXT ? a.a.createElement(k.a, {
						allowMediaUploads: !0,
						className: Object(m.a)(D.a.Editor, {
							[D.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: R.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: x,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!i,
						rteRef: this.setRteRef,
						trackToolbarClick: r.a,
						placeholderText: C
					}) : a.a.createElement(v.a, {
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!i,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: C
					}), a.a.createElement(F, null, a.a.createElement(I.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(L, {
						disabled: !!i || !!O.length || !this.hasChanged() || y,
						onClick: this.onSubmit
					}, i ? a.a.createElement(W, {
						sizePx: 10
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(S.a, {
						className: D.a.errorMessages,
						messages: _
					}), a.a.createElement(E.a, {
						editKey: d.id,
						hasValue: !(!f && !g),
						isPostEdit: !0
					})), a.a.createElement(u.a, {
						postId: d.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = H(z(K))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				m = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = d.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: u.o,
					subreddit: m.e
				}));
			t.a = f(e => {
				let {
					restrictions: t,
					subreddit: n
				} = e;
				if (!n) return null;
				const s = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[t]()), o.fbt._param("displayName", n.name), o.fbt._param("action", l.c[s]()), o.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${n.url}`
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", l.d[t]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => {
					let {
						className: t,
						children: n,
						editorWrapperRef: o,
						initialHeight: r
					} = e;
					return s.a.createElement("div", {
						className: Object(a.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: o
					}, n)
				},
				u = e => {
					let {
						isFullHeight: t,
						textAreaRef: n,
						...o
					} = e;
					return s.a.createElement(i.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, o))
				};
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: o,
						...r
					} = this.props, {
						isResized: i
					} = this.state;
					return s.a.createElement(m, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(u, l({}, r, {
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less": function(e, t, n) {
			e.exports = {
				SectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				sectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				powerupButtons: "_6E4bLu7N3_WO5HyAtaJx8"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, n) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA",
				addEmojiTooltip: "_2T2CdONtWI3ekF8Dpfq0Tj"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less": function(e, t, n) {
			e.exports = {
				rainbow: "_3o1yVY7yuN_Xzqg5RaAFp8",
				rainbowFade: "_3XlVOBsaD4vQFIAVPEpLFD"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: c.l,
					isNightMode: c.eb,
					isPresenceUserPrefEnabled: c.W,
					shouldHideNSFW: c.G
				}),
				g = Object(i.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: i,
					...a
				} = e, c = Object(d.b)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(o.a)(h.a.currentUserIconWrapper, i)
				}, c ? r.a.createElement(m.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(u.b, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.default, {
					showPresence: !0
				}))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = n.n(a);
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(d.a.toggleSwitch, e.className, d.a[n], {
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
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const c = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === d.i.MARKDOWN ? c.richtext_json = n : c.markdown_text = n, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.kb.POST,
					data: c
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/map.js"),
				s = n.n(o),
				r = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				d = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				c = () => d() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				m = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: o,
						startOffset: s,
						endContainer: r,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let d = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(o, s), d = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(r, i), d = !1), d) return [e];
					const c = document.createElement("div");
					return c.appendChild(a.cloneContents()), [...c.childNodes]
				},
				u = (e, t, n) => {
					let o = e;
					for (; o && (!n || !n(o));) {
						if (o && t(o)) return o;
						o = o.parentElement
					}
				},
				p = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				h = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return a
				})), n.d(t, "c", (function() {
					return d
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(o || (o = {}));
			const s = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(o.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => s(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				d = () => {
					return !!s(o.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.n)(e),
						screen: Object(d.Y)(e),
						subreddit: Object(d.gb)(e),
						post: t ? Object(d.H)(e, t) : null,
						profile: Object(d.Q)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				m = async (e, t, o, s) => {
					const r = {
							commentId: s,
							commentsPageKey: o
						},
						a = s && Object(i.j)(e, r) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(c.a)({
						noun: "comment",
						...l(e),
						comment: s ? Object(d.h)(e, s) : null,
						listing: Object(d.y)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, u = (e, t, n, o) => {
					const s = l(e);
					return Object(c.a)({
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, p = e => Object(c.a)({
					noun: "cancel",
					...l(e)
				}), h = (e, t) => {
					t === r.c.replyToPost && Object(c.a)({
						noun: "input",
						...l(e)
					})
				}, b = (e, t) => Object(c.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.n)(t),
					screen: Object(d.Y)(t),
					subreddit: Object(d.gb)(t),
					post: Object(d.H)(t, e)
				}), f = e => Object(c.a)({
					noun: "edit",
					...l(e)
				}), g = e => Object(c.a)({
					noun: "save_edit",
					...l(e)
				}), x = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...l(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.gb(t)
				}),
				r = e => t => ({
					...o.n(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.gb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.n(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.gb(t)
				}),
				r = e => t => ({
					...o.n(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.gb(t)
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: n,
					...o
				} = e;
				return s.a.createElement("svg", d({
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, s.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.R, i.Q, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.J
				}), e => e === s.R.Enabled)
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				d = Object(o.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				c = e => a.find(t => !!Object(i.a)(d(e, t))),
				l = Object(o.a)(c, e => !!e),
				m = e => {
					const t = c(e);
					return !!t && d(e, t) === s.W.SkipOnboarding
				},
				u = e => {
					const t = c(e);
					return !!t && d(e, t) === s.W.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.If
					}) === o.wd
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.Jf
					}) === o.wd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.Hf
					});
					return t === o.zf.TypingIndicators || t === o.zf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.Hf
					});
					return (null == t ? void 0 : t.variant) === o.zf.IndicatorsPlusCTA
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.216e4091255166a8a283.js.map