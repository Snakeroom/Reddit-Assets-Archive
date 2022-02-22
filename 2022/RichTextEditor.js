// https://www.redditstatic.com/desktop2x/RichTextEditor.791447f912960ff70093.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ie
			})), n.d(t, "t", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "l", (function() {
				return me
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "p", (function() {
				return xe
			})), n.d(t, "f", (function() {
				return ge
			})), n.d(t, "g", (function() {
				return Ce
			})), n.d(t, "j", (function() {
				return Ee
			})), n.d(t, "d", (function() {
				return _e
			})), n.d(t, "c", (function() {
				return je
			})), n.d(t, "i", (function() {
				return ke
			})), n.d(t, "h", (function() {
				return Me
			})), n.d(t, "k", (function() {
				return Ie
			})), n.d(t, "r", (function() {
				return Pe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCreation/editorContent.ts"),
				u = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/localStorage.ts"),
				g = n("./src/redditGQL/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/lib/omitHeaders/index.ts"),
				_ = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				v = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				R = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t, n, o) => {
					let s, r;
					if (o === k.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(E.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				M = async (e, t, n, o, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === k.i.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(Object(y.a)(e, [_.a]), {
						method: s.jb.POST,
						endpoint: Object(O.a)(Object(w.a)(Object(R.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {
							comment: Object(v.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(v.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(T.a)()
					})
				};
			var I = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				F = n("./src/reddit/endpoints/post/convert.ts"),
				B = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				A = n("./src/reddit/helpers/correlationIdTracker.ts"),
				N = n("./src/reddit/helpers/dom/index.ts"),
				W = n("./src/reddit/helpers/localStorage/index.ts"),
				L = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				z = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				U = n("./src/reddit/models/RichTextJson/index.ts"),
				K = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				q = n("./src/reddit/models/Toast/index.ts"),
				X = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/commentSelector.ts"),
				V = n("./src/reddit/selectors/platform.ts"),
				G = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/actions/comment/index.ts"),
				Z = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(Z.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(Q.Q)(s) && e) {
							const o = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(o))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Z.H), ne = Object(r.a)(Z.J), oe = Object(r.a)(Z.I), se = Object(r.a)(Z.G), re = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await L.f(e, n, t, r)
				}, ie = "Toxicity_Warning__Modal", ae = (e, t, n, o, s, r) => async (i, a, {
					gqlContext: d
				}) => {
					const l = a(),
						m = Object(V.e)(l);
					let u = "";
					if (m && (u = m.name), D.d.enableToxicityWarning(l)) {
						if (!(await S(d(), u, o, s))) return void i(Object(c.i)(ie))
					}
					i(ce(e, t, n, o, s, r))
				}, de = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, n, r, i, a, d) => async (m, b, {
					apiContext: x
				}) => {
					m(Object(c.g)(ie));
					const g = b(),
						C = g.features.comments.submit.pending[n];
					if (!g.user.account || C) return;
					m(te({
						draftKey: n,
						draft: r
					}));
					const E = g.user.account.displayText,
						y = r.commentMode;
					let _;
					if (d ? (_ = await Object(B.i)(x(), e, r, E), m(Object(u.a)({
							streamId: e,
							level: _.body.automuteLevel
						}))) : _ = await M(x(), e, r, E, y), _.ok) {
						let o;
						o = _.body, m(ne({
							...o,
							headCommentId: Object(X.w)(g, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(G.G)(b(), {
							postId: e
						});
						m(Object(l.z)(s, f.a.CommentSubmitted))
					} else {
						_.error && _.error.type === s.Kb && L.h(g, de(r), e);
						const t = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						m(se({
							draftKey: n,
							error: _.error
						})), m(Object(h.f)({
							duration: h.a,
							kind: q.b.Error,
							text: t
						}))
					}
					re(b(), t, i, _).then(() => _.ok && i === k.i.RICH_TEXT ? Object(A.b)(A.a.CommentComposer) : void 0), a || Object(p.d)()
				}, le = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: i,
						draftKey: a,
						formData: d,
						editorMode: l
					} = e, m = n(), u = Object(V.e)(m);
					let p = "";
					if (u && (p = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await S(o(), p, d, l))) return void t(Object(c.i)(ie))
					}
					t(me({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: d,
						editorMode: l
					}))
				}, me = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: d,
						formData: l,
						editorMode: m
					} = e;
					t(Object(c.g)(ie));
					const u = n(),
						h = u.features.comments.submit.pending[d];
					if (!u.user.account || h) return;
					t(te({
						draftKey: d,
						draft: l
					}));
					const b = u.user.account.displayText,
						f = l.commentMode,
						x = await M(o(), r, l, b, f);
					if (x.ok) t(oe({
						...x.body,
						parentCommentId: r,
						commentsPageKey: i,
						draftKey: d,
						depth: a + 1
					}));
					else {
						if (x.error && x.error.type === s.Kb) {
							const e = Object(J.b)(u, {
								commentId: r
							});
							if (!e) return;
							L.h(u, de(l), e.postId, r)
						}
						t(se({
							draftKey: d,
							error: x.error
						}))
					}
					re(n(), i, m, x), Object(p.d)()
				}, ue = Object(r.a)(Z.q), pe = Object(r.a)(Z.p), he = Object(r.a)(Z.l), be = (Object(r.a)(Z.g), Object(r.a)(Z.m)), fe = (Object(r.a)(Z.t), (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					const a = e === k.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(U.G)(t)) s(be({
						editorMode: e,
						draftKey: n,
						content: a ? U.i : ""
					})), s(Object(m.c)(e));
					else {
						s(Object(m.b)(n));
						const r = await Object(F.a)(i(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(m.a)(n)), s(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(m.c)(e))
						} else s(Object(m.a)(n)), s(Object(h.f)({
							duration: h.a,
							kind: q.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), xe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						l = Object(i.a)(H.c.replyToComment, t);
					if (!Object(Q.O)(s())) return o(Object(d.j)()), void o(Object(c.k)({
						actionSource: c.a.Reply,
						redirectUrl: Object(X.m)(s(), {
							commentId: t
						})
					}));
					const m = r.features.comments.replyFormOpen[e],
						u = m && m[t];
					if ((u || m && n) && (Object.keys(m).forEach(t => m[t] && o(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), u)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(N.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === k.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => K.s(e, null)).map(e => K.l([e])),
								n = K.s("", null),
								o = K.l([n]);
							h = {
								document: [K.c(t), o]
							}
						}
					}
					const x = r.features.comments.drafts[l];
					let g;
					if (g = f ? {
							commentMode: b,
							draftType: H.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : x || {
							commentMode: b,
							draftType: H.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(Q.Q)(r)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: g
						});
						o(Object(a.f)(n))
					} else o(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: g
					}))
				}, ge = e => async t => {
					t(Object(Y.p)(e)), t(_e(e))
				}, Ce = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(xe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Y.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Ee = (e, t) => n => n(he({
					draftKey: e,
					formData: t
				})), ye = Object(r.a)(Z.s), _e = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, i) => {
					const a = i();
					a.user.account && (L.c(a), r(ye({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: H.c.edit,
							hasFocus: !0
						}
					})))
				}, Oe = Object(r.a)(Z.C), Te = Object(r.a)(Z.B), ve = Object(r.a)(Z.D), je = Object(r.a)(Z.h), ke = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, i, {
					apiContext: a
				}) => {
					const d = i();
					if (!d.user.account) return;
					n(Oe({
						draftKey: o
					})), L.d(d);
					const c = d.user.account.displayText || "",
						l = r.commentMode,
						m = await (async (e, t, n, o, r, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === k.i.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(C.a)(Object(y.a)(e, [_.a]), {
								endpoint: Object(O.a)(Object(R.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(j.a)(e)
							} : {
								...e,
								body: {
									comment: Object(v.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(v.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(T.a)()
							})
						})(a(), e, 0, r, c, l);
					if (m.ok) {
						const s = m.body;
						n(ve({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(Y.i)({
							[e]: {
								...s.comment
							}
						}))
					} else n(Te({
						draftKey: o,
						error: m.error
					}))
				}, we = Object(r.a)(Z.z), Re = Object(r.a)(Z.y), Se = Object(r.a)(Z.A), Me = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o();
					n(we({
						id: e
					})), L.a(e, i);
					const a = await ((e, t) => Object(C.a)(Object(y.a)(e, [_.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
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
						error: e.error || Object(T.a)()
					}))(r(), e);
					a.ok ? n(Se({
						id: e,
						postId: t
					})) : n(Re({
						id: e,
						error: a.error
					}))
				}, Ie = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(Y.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(P.o)(o(), e, s)).ok || t(Object(Y.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Pe = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var i, a, d, c, l, m;
					n(Object(Y.c)());
					const u = e => Object(h.f)(Object(h.e)(e, q.b.Error));
					if (((null === (a = null === (i = s().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === x.a) n(u(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = t === z.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Y.n)(a)), (await ((e, t) => Object(E.a)(e, {
								...I,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(W.xb)(null !== (l = null === (c = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === c ? void 0 : c.followed) && void 0 !== l ? l : [], null === (m = s().user.account) || void 0 === m ? void 0 : m.id);
							const e = i ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: q.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Y.n)(a)), n(u(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				u = e => async (t, n, {
					apiContext: o
				}) => {
					const s = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || s && !d.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
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
								method: o.jb.GET
							});
						n.ok && n.body && e(m(n.body))
					}
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return F
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "c", (function() {
				return D
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
				x = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...h(e) ? b(e) : f(e)
				});
			var g = (e, t) => Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: Object(p.a)(Object(m.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.jb.POST,
					data: x(t)
				}).then(u.b),
				C = n("./src/reddit/helpers/overlay/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				y = n("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = n("./src/reddit/helpers/trackers/post.ts"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				T = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/actions/postCreation/constants.ts"),
				R = n("./src/reddit/actions/postCreation/general.ts");
			const S = Object(s.a)(w.l),
				M = Object(s.a)(w.m),
				I = Object(s.a)(w.x),
				P = Object(s.a)(w.H),
				F = Object(s.a)(w.I),
				B = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = Object(k.G)(r, {
							postId: e
						});
					t ? (n(Object(C.a)(i.permalink)), Object(y.e)(e, "edit")(r)) : Object(_.d)(e, "edit")(r);
					const {
						media: a
					} = i;
					if (!a) return;
					let d, c = v.i.RICH_TEXT,
						l = "";
					a.type === T.o.TEXT ? (c = v.i.MARKDOWN, l = a.content) : a.type === T.o.RTJSON && (l = (c = a.rteMode || v.i.RICH_TEXT) === v.i.MARKDOWN ? a.markdownContent : a.richtextContent, d = a.mediaMetadata || void 0), n(P({
						editorMode: c,
						mediaMetadata: d,
						postContent: l,
						postId: e
					}))
				}, D = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						post: a
					} = e, d = !a.media || "rtjson" !== a.media.type && "text" !== a.media.type ? "" : a.media.rteMode;
					O.E(n(), Object(R.o)(d)), t(I(a.id));
					const c = await g(s(), e),
						l = !1 === c.body.success;
					if (t(S(a.id)), c.ok && !l) {
						t(Object(i.f)({
							kind: j.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(a.id));
						const e = Object(E.a)(c.body);
						t(Object(r.S)({
							[a.id]: e
						}))
					} else t(M(c.error))
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
				return x
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
				f = (e, t, n) => async (s, a, {
					apiContext: f
				}) => {
					d.m(a(), t);
					const g = t === c.i.MARKDOWN,
						C = t === c.i.RICH_TEXT,
						E = u.k;
					if (g && Object(l.G)(n)) return s(b({
						editorKey: e,
						editorMode: c.i.MARKDOWN,
						content: ""
					})), void s(x(t));
					if (C && !n) return s(b({
						editorKey: e,
						editorMode: c.i.RICH_TEXT,
						content: l.i
					})), void s(x(t));
					s(p(E));
					const y = await Object(i.a)(f(), t, g ? JSON.stringify(n) : n);
					y.ok ? (s(h(E)), s(b({
						editorKey: e,
						editorMode: t,
						content: y.body.output
					})), s(x(t))) : (s(h(E)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, x = e => async (t, n) => {
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
					})), Object(a.tb)(s + 1)
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
				d = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), e);
					r && r.ok ? t(i({
						streamId: e,
						level: r.body.data.auto_mute_status.level
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
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...o
			}) => s.a.createElement("div", d({
				className: Object(r.a)({
					[a.a.breakout]: e
				}),
				style: {
					left: c(t, n)
				}
			}, o))
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
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: i,
				canSubmit: d,
				onSubmit: c,
				onCancel: b
			}) => s.a.createElement("div", {
				className: Object(r.a)(l.a.FormFooterWrapper, o, {
					[l.a.pending]: e
				})
			}, s.a.createElement("div", {
				className: l.a.ButtonWrapper
			}, s.a.createElement(a.t, {
				className: l.a.SubmitButton,
				size: a.d.XS,
				type: "submit",
				disabled: !d,
				onClick: c,
				onMouseDown: h
			}, e ? s.a.createElement(u, {
				sizePx: 10
			}) : i), t && s.a.createElement(p, {
				priority: a.c.Secondary,
				size: a.d.XS,
				type: "reset",
				disabled: e,
				onClick: b,
				onMouseDown: h
			}, m._("Cancel", null, {
				hk: "2TSLl5"
			}))), n)
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
				x = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				C = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = n("./src/reddit/controls/ErrorText/index.tsx"),
				y = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Help/index.tsx"),
				O = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				T = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				v = n("./src/lib/fastdom/index.ts"),
				j = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				k = n.n(j),
				w = n("./src/lib/lessComponent.tsx");
			const R = 310,
				S = w.a.div("Container", k.a);
			class M extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < R ? "compact" : "full";
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
					return c.a.createElement(S, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var I = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				P = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				F = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				B = n.n(F),
				D = n("./src/reddit/controls/Button/index.tsx");
			const A = w.a.wrapped(y.a, "LoadingIcon", B.a),
				N = ({
					isFilled: e,
					...t
				}) => c.a.createElement(A, t),
				W = w.a.div("Wrapper", B.a),
				L = w.a.wrapped(I.a, "MarkdownModeIcon", B.a),
				z = ({
					isFilled: e,
					...t
				}) => c.a.createElement(L, t);
			var H = c.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return c.a.createElement(W, null, c.a.createElement(D.t, {
						priority: D.c.Plain,
						size: D.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? N : z
					}, c.a.createElement(P.a, {
						text: t
					})))
				})),
				U = n("./src/lib/classNames/index.ts"),
				K = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				X = n("./src/realtime/GQLSubscription/async.tsx"),
				J = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				V = n("./src/reddit/constants/componentSizes.ts"),
				G = n("./src/reddit/constants/componentTestIds.ts"),
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
			const ae = w.a.button("SwitchModeButton", ie.a),
				de = w.a.wrapped(y.a, "LoadingIcon", ie.a),
				ce = w.a.div("CommentHeader", ie.a),
				le = w.a.span("FormHeaderText", ie.a),
				me = w.a.button("HelpButton", ie.a),
				ue = w.a.wrapped(_.a, "HelpIcon", ie.a),
				pe = w.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = w.a.wrapped(C.a, "CurrentUserIcon", ie.a),
				be = e => c.a.createElement(me, {
					className: e.className,
					onClick: e.onClick
				}, c.a.createElement(ue, null)),
				fe = 8,
				xe = 16,
				ge = Object(m.b)(() => Object(u.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(se.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Y.i,
					isConverting: (e, t) => Object(Z.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(q.a)(t.draftKey))),
					helpModalToggled: () => e(Object(ee.i)(g.b))
				}));
			class Ce extends c.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = r()(() => this.setState({
						isUserTyping: !1
					}), J.c), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < V.c,
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
					return e instanceof Element ? e.getBoundingClientRect().height + fe + xe + V.o : void 0
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
						modalSeen: y,
						submitButtonText: _,
						isCommentBoxDesignEnabled: v,
						isExpanded: j,
						isTopLevelComment: k,
						isTypingIndicatorsWriteTestEnabled: w,
						onSwitchMode: R,
						userName: S
					} = this.props, {
						cancelModalText: I,
						showError: P,
						text: F,
						breakOut: B,
						wrapperHeight: D,
						isUserTyping: A
					} = this.state, N = Object(q.a)(l), W = d.draftType === oe.c.edit;
					return c.a.createElement("div", {
						"data-test-id": G.b,
						className: Object(U.a)(ie.a.Wrapper, s, {
							[ie.a.isTopLevelComment]: k,
							[ie.a.mExpanded]: j,
							[ie.a.mRedesign]: v
						}),
						ref: this.setWrapperRef,
						style: {
							height: B ? D : void 0
						}
					}, w && A && c.a.createElement(X.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !v && k && c.a.createElement(ce, null, c.a.createElement(le, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", c.a.createElement(h.a, {
						author: S,
						isAuthorDeleted: !1
					}, S))], {
						hk: "4pMWAk"
					}))), c.a.createElement(O.a, {
						breakOut: B,
						depth: i,
						isEditing: W
					}, v && c.a.createElement("div", {
						className: ie.a.userIcon
					}, c.a.createElement(he, null)), c.a.createElement("div", {
						className: Object(U.a)(ie.a.FormWrapper, {
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
						value: F
					}), (!v || j) && c.a.createElement(T.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: m !== oe.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: C,
						submitButtonText: _,
						canSubmit: this.userHasEnteredText()
					}, c.a.createElement(M, null, e => "compact" === e ? c.a.createElement(H, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => R(ne.i.RICH_TEXT, F, l),
						isConverting: this.props.isConverting
					}) : c.a.createElement("div", null, c.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => R(ne.i.RICH_TEXT, F, l)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && c.a.createElement(de, {
						sizePx: 12
					})))), c.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), P && Object(E.c)(u), e === N && c.a.createElement(x.a, {
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
					}), e === g.b && c.a.createElement(g.a, {
						withOverlay: !0
					}), e === p.q && c.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: y,
						withOverlay: !0
					}), c.a.createElement(b.a, {
						editKey: l,
						hasValue: !!F
					}))
				}
			}
			t.b = ge(Ce)
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
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
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
					...b.o(e),
					screen: b.bb(e),
					subreddit: b.jb(e)
				}),
				x = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				g = e => t => ({
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
			var y = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(c.q))
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
					this.props.modalSeen(), this.props.sendEvent(x(this.state.correlationId))
				}
				render() {
					return s.a.createElement(m.e, null, s.a.createElement(m.i, null, s.a.createElement(y.a, null, s.a.createElement(m.q, null, _._("Are you sure you want to post that?", null, {
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
							this.props.sendEvent(g(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, _._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(d.a)(O(Object(u.c)(T)))
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
				x = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				g = n.n(x);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = p.a.div("RequestBox", g.a);
			var y = () => i.a.createElement(E, null, i.a.createElement(b.a, {
					className: g.a.commentIcon
				}), i.a.createElement("div", {
					className: g.a.commentText
				}, C._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(h.default, {
					className: g.a.requestButton,
					eventSource: f.b.Comment
				})),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./node_modules/lodash/noop.js"),
				T = n.n(O),
				v = n("./src/lib/classNames/index.ts"),
				j = n("./src/lib/fastdom/index.ts"),
				k = n("./src/lib/memoizeByReference/index.ts"),
				w = n("./src/reddit/components/AuthorLink/index.tsx"),
				R = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				S = n("./src/reddit/components/RichTextEditor/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				I = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				P = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				F = n("./src/reddit/helpers/richTextEditor/index.ts"),
				B = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				D = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = n("./src/reddit/constants/localStorage.ts"),
				W = n("./src/reddit/helpers/localStorage/index.ts"),
				L = n("./src/reddit/icons/svgs/Smile/index.tsx"),
				z = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				H = n("./src/reddit/selectors/gold/powerups/index.ts"),
				U = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				K = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				q = n.n(K);
			const X = 5,
				J = "ProwerupsEmoji--FirstUploadStimulus",
				V = 100;
			const G = Object(d.c)({
				emotes: (e, {
					subredditId: t
				}) => Object(z.a)(e, {
					subredditId: t
				}),
				customEmotes: (e, {
					subredditId: t
				}) => Object(H.i)(e, {
					subredditId: t
				}),
				userCanEditCustomEmojis: (e, {
					subredditId: t
				}) => !!t && Object(H.v)(e, {
					subredditId: t
				}),
				subredditHasPowerups: (e, {
					subredditId: t
				}) => Object(H.h)(e, {
					subredditId: t
				})
			});
			var Q = Object(a.b)(G)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o,
						userCanEditCustomEmojis: s,
						customEmotes: d,
						subredditHasPowerups: c,
						subredditId: l
					} = e, m = l ? Object(W.j)(N.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l) : 0, u = c && m < X && s && 0 === d.length, [p, h] = Object(r.useState)(u), b = Object(a.d)();
					Object(r.useEffect)(() => {
						p && l && setTimeout(() => {
							Object(W.U)(N.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l), b(Object(D.f)({
								tooltipId: J
							}))
						}, V)
					}, [b, p, l]);
					const f = c ? _.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : _.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(A.c, {
						tooltipId: J,
						text: _.fbt._("NEW! Add custom emojis", null, {
							hk: "1C510K"
						}),
						className: q.a.addEmojiTooltip
					}), i.a.createElement("span", {
						id: J
					}, i.a.createElement(U.a, {
						Icon: () => i.a.createElement(L.a, {
							className: q.a.smile
						}),
						tooltip: p ? void 0 : f,
						enabled: t.emote.isEnabled,
						onClick: e => {
							p && (b(Object(D.j)({
								tooltipId: J
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
				return i.a.createElement(U.a, {
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
				} = e, b = Object(B.a)(s);
				m && Object(B.b)(b);
				const f = null == n ? void 0 : n.id,
					x = Object(a.e)(e => void 0 !== f && Object(z.b)(e, {
						subredditId: f
					})),
					g = Object(a.e)(e => void 0 !== f && Object(z.c)(e, {
						subredditId: f
					}));
				return i.a.createElement(I.a, {
					className: t,
					oveflowMenuDropdownId: o,
					onOverflowMenuClick: l,
					editorType: F.a.Comment
				}, i.a.createElement("div", {
					className: ne.a.powerupButtons
				}, x && i.a.createElement(Q, {
					controlsState: b,
					subredditId: n && n.id,
					onEmoteButtonClick: d
				}), g && i.a.createElement(ee, {
					controlsState: b,
					onGifButtonClick: c,
					userCanUseGifs: h
				})), (x || g) && i.a.createElement(oe, null), Object(P.g)(P.f, b, s, r, u), i.a.createElement(P.a, {
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
				de = n("./src/reddit/controls/ErrorText/index.tsx"),
				ce = n("./src/reddit/helpers/correlationIdTracker.ts"),
				le = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				me = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				ue = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				pe = n("./src/reddit/models/PostCreationForm/index.ts"),
				he = n("./src/reddit/models/PostDraft/index.ts"),
				be = n("./src/reddit/actions/modal.ts"),
				fe = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				xe = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				ge = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Ce = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ee = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ye = n("./src/reddit/models/Subreddit/index.ts"),
				_e = n("./src/reddit/selectors/activeModalId.ts"),
				Oe = n("./src/reddit/selectors/comments.ts"),
				Te = n("./src/reddit/selectors/economics.ts"),
				ve = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ke = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				we = n.n(ke);
			const Re = 16,
				Se = p.a.div("CommentHeader", we.a),
				Me = p.a.div("MarkdownButtonWrapper", we.a),
				Ie = p.a.wrapped(oe, "SectionSpacer", we.a),
				Pe = p.a.span("FormHeaderText", we.a),
				Fe = ({
					cancelButtonEnabled: e,
					draftKey: t,
					isCommentBoxDesignEnabled: n,
					onSubmit: o,
					onCancel: s,
					pending: r,
					submitButtonText: a
				}) => d => {
					const {
						editorState: c,
						onMarkdownButtonClick: l
					} = d, m = c.getCurrentContent(), u = !!m.getPlainText().trim() || m.getBlockMap().some(e => !!e && Object(M.t)(e.getType()));
					return i.a.createElement(me.a, {
						cancelButtonEnabled: e,
						className: Object(v.a)(we.a.FormFooter, {
							[we.a.mRedesign]: n
						}),
						onSubmit: o,
						onCancel: s,
						pending: r,
						submitButtonText: a,
						canSubmit: u
					}, i.a.createElement("div", {
						className: we.a.ToolbarWrapper
					}, i.a.createElement(se, d), i.a.createElement(Ie, null), i.a.createElement(Me, null, i.a.createElement(re.a, {
						className: we.a.MarkdownButton,
						draftKey: t,
						onClick: l
					}))))
				},
				Be = Object(a.b)(() => Object(d.c)({
					activeModalId: _e.a,
					destSubreddit: (e, t) => {
						const n = Object(Ee.q)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === ye.f.User,
							id: n.id
						} : void 0
					},
					draft: Oe.i,
					userCanUseEmojis: (e, t) => {
						const n = Object(Ee.q)(e, t);
						return Object(Te.s)(e, n ? n.id : void 0, t.parentCommentId)
					},
					userCanUseGifs: (e, t) => {
						const n = Object(Ee.q)(e, t);
						return Object(Te.t)(e, n ? n.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(je.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(be.i)(Object(ue.a)(t.draftKey)))
				}));
			class De extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(k.a)((e, t, n, o, s) => Fe({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBoxDesignEnabled: s,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: n,
						submitButtonText: o
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
						e === this.state.breakOut && t === this.state.formHeight || j.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return ge.a.hasContent(e)
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
							j.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === he.c.replyToPost && this.setState({
							rteState: ge.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === he.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: pe.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(ce.e)(ce.a.CommentComposer, !1), this.props.sendEvent(Object(m.g)(e, t))
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
						cancelModalText: n === he.c.edit ? _.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : _.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : ge.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: ge.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(ce.b)(ce.a.CommentComposer), this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), j.a.read(this.detectBreakout), j.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + Re
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
						isCommentBoxDesignEnabled: m,
						isExpanded: u,
						modalSeen: p,
						pending: h,
						postId: b,
						submitButtonText: f,
						isTopLevelComment: x,
						userCanUseEmojis: g,
						userCanUseGifs: C,
						userName: E,
						isTypingIndicatorsWriteTestEnabled: y
					} = this.props, {
						cancelModalText: O,
						breakOut: j,
						formHeight: k,
						rteState: M
					} = this.state, I = Object(ue.a)(a), P = r.draftType === he.c.edit, B = d !== he.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(v.a)(we.a.FormWrapper, n, {
							[we.a.isTopLevelComment]: x,
							[we.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: j ? k : void 0
						}
					}, !m && x && i.a.createElement(Se, null, i.a.createElement(Pe, null, _.fbt._("Comment as {authorLink}", [_.fbt._param("authorLink", i.a.createElement(w.a, {
						author: E,
						isAuthorDeleted: !1
					}, E))], {
						hk: "4pMWAk"
					}))), i.a.createElement(le.a, {
						breakOut: j,
						depth: o,
						isEditing: P
					}, i.a.createElement(S.a, {
						userCanUseEmojis: g,
						userCanUseGifs: C,
						dataTestId: ae.c,
						destSubreddit: s,
						editorType: F.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: u,
						isTypingIndicatorsWriteTestEnabled: y,
						rteState: M,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: m ? _.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : _.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: b,
						readOnly: h,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(B, a, h, f, m)
					})), this.state.showError ? Object(de.c)(c) : null, e === I && i.a.createElement(R.a, {
						actionText: _.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: _.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: O,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: T.a
					}), e === l.q && i.a.createElement(xe.a, {
						onSubmit: this.onSubmit,
						modalSeen: p,
						withOverlay: !0
					}), i.a.createElement(fe.a, {
						editKey: a,
						hasValue: ge.a.hasContent(M)
					}))
				}
			}
			var Ae = Object(Ce.u)()(Be(Object(ve.c)(De))),
				Ne = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				We = n("./src/reddit/models/User/index.ts"),
				Le = n("./src/reddit/selectors/experiments/commentBox.ts"),
				ze = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				He = n("./src/reddit/selectors/posts.ts");
			const Ue = Object(Ce.u)(),
				Ke = Object(d.c)({
					activeModalId: _e.a,
					contributorRequestPending: (e, {
						pageLayer: t
					}) => Object(Ce.b)(e, t, f.e.Comment),
					isCommentBoxDesignEnabled: Le.a,
					userName: e => e.user.account ? Object(We.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: Oe.v,
					errorMsgs: Oe.K,
					draft: Oe.i,
					disableAutofocus: Oe.f,
					showContributorRequestFlow: (e, {
						pageLayer: t
					}) => Object(Ce.db)(e, t, f.e.Comment),
					postAuthorIsBlocked: He.w,
					isTrueblockPCBlockeeEnabled: ze.b
				}),
				qe = Object(a.b)(Ke, (e, t) => ({
					onMount: () => e(c.a(t.draftKey)),
					onCancel: () => {
						t.draftType === he.c.edit ? e(l.c({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.a({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: n => e(l.j(t.draftKey, n)),
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
			class Xe extends i.a.Component {
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
					return e.contributorRequestPending ? i.a.createElement(Ne.a, null) : e.showContributorRequestFlow ? i.a.createElement(y, null) : e.draft.commentMode === pe.i.RICH_TEXT ? i.a.createElement(Ae, n) : i.a.createElement(u.b, n)
				}
			}
			t.default = Ue(qe(Xe))
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
			const x = () => ({
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
			class g extends r.a.Component {
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
					}) : x()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(g))
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
				x = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				g = n.n(x),
				C = n("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				y = C.a.wrapped(b.a, "Section", g.a),
				_ = C.a.div("Container", g.a),
				O = C.a.table("Table", g.a),
				T = C.a.p("P", g.a);
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
					}), r.a.createElement(_, null, r.a.createElement(O, {
						className: g.a.helpTable
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
					}))), r.a.createElement(y, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(v);
			t.a = Object(u.a)(Object(m.c)(j))
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
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/editorContent.ts"),
				E = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				y = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const O = _.a.wrapped(f.a, "LoadingIcon", y.a),
				T = ({
					isFilled: e,
					...t
				}) => r.a.createElement(O, t),
				v = _.a.span("ModeDescription", y.a),
				j = _.a.div("ModeWrapper", y.a),
				k = _.a.wrapped(c.a, "MarkdownHelpButton", y.a),
				w = _.a.div("Toolbar", y.a),
				R = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(C.a)(e)
				}),
				S = Object(i.b)(R, (e, t) => ({
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
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(x.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(x.i.RICH_TEXT, this.props.value)
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
					}, r.a.createElement(w, null, r.a.createElement(j, null, r.a.createElement(v, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(k, {
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
			const I = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: t,
					Icon: e ? T : void 0,
					text: n
				})
			});
			t.a = S(M)
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
			class x extends s.a.PureComponent {
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
			t.a = Object(r.a)(x)
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
				x = n("./src/reddit/selectors/postCreations.ts"),
				g = n("./src/reddit/actions/postCreation/editing.ts"),
				C = n("./src/reddit/actions/postCreation/editorContent.ts"),
				E = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/memoizeByReference/index.ts"),
				O = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const T = Object(_.a)((e, t) => {
				const n = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(O.g)(t),
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
					return e.image > y.ab && t.push(o.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > y.db && t.push(o.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var v = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				j = n("./src/reddit/components/RichTextEditor/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/ErrorText/index.tsx"),
				S = n("./src/reddit/helpers/richTextEditor/index.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = n("./src/reddit/components/PostEditForm/index.m.less"),
				B = n.n(F),
				D = n("./src/lib/lessComponent.tsx");
			const A = D.a.div("BottomRow", B.a),
				N = D.a.div("FormContent", B.a),
				W = D.a.wrapped(I.l, "SubmitButton", B.a),
				L = D.a.wrapped(P.a, "LoadingIcon", B.a),
				z = Object(w.u)(),
				H = Object(l.c)({
					destSubreddit: x.h,
					editorMode: x.i,
					errorMessages: x.j,
					hasError: x.k,
					markdownDraft: x.l,
					pending: x.ab,
					postRequirements: x.pb,
					rteDraft: x.m,
					subreddit: w.r,
					uploads: e => e.uploads,
					user: M.k,
					isCommentsPage: f.f
				}),
				U = Object(d.b)(H, (e, t) => ({
					onCancel: t => e(g.b(t)),
					onSubmitDraft: t => e(g.c(t)),
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
						return e === h.i.RICH_TEXT ? k.a.toRichTextJSON(o, t) : {
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
					return k.a.hasContent(e)
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
						richtextPostDraftChanged: x,
						rteState: g
					} = this.state, C = c && c.bodyRestrictionPolicy === b.a.Required ? o.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : o.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), y = this.getMediaValidationErrors(), _ = [...t, ...y];
					n && !_.length && _.push(o.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const O = !k.a.isAllMediaUploaded(g, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(N, null, e === h.i.RICH_TEXT ? a.a.createElement(j.a, {
						allowMediaUploads: !0,
						className: Object(m.a)(B.a.Editor, {
							[B.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: S.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: g,
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
					}), a.a.createElement(A, null, a.a.createElement(I.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(W, {
						disabled: !!i || !!y.length || !this.hasChanged() || O,
						onClick: this.onSubmit
					}, i ? a.a.createElement(L, {
						sizePx: 10
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(R.a, {
						className: B.a.errorMessages,
						messages: _
					}), a.a.createElement(E.a, {
						editKey: d.id,
						hasValue: !(!f && !x),
						isPostEdit: !0
					})), a.a.createElement(u.a, {
						postId: d.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = z(U(K))
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
					restrictions: u.m,
					subreddit: m.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[e]()), o.fbt._param("displayName", t.name), o.fbt._param("action", l.c[n]()), o.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${t.url}`
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", l.d[e]())], {
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
			const m = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: o
				}) => s.a.createElement("div", {
					className: Object(a.a)(c.a.editorWrapper, e),
					style: o ? {
						height: o
					} : void 0,
					ref: n
				}, t),
				u = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => s.a.createElement(i.a, l({
					className: Object(a.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
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
					currentUser: c.k,
					isNightMode: c.bb,
					isPresenceUserPrefEnabled: c.T,
					shouldHideNSFW: c.E
				}),
				x = Object(i.b)(f);
			t.a = x(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: i,
					...a
				} = e, c = Object(d.a)(null == t ? void 0 : t.accountIcon);
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
					method: o.jb.POST,
					data: c
				})
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
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
				return x
			})), n.d(t, "g", (function() {
				return g
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
						...Object(d.o)(e),
						screen: Object(d.bb)(e),
						subreddit: Object(d.jb)(e),
						post: t ? Object(d.J)(e, t) : null,
						profile: Object(d.S)(e),
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
						comment: s ? Object(d.i)(e, s) : null,
						listing: Object(d.A)(e, void 0, {
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
					...Object(d.o)(t),
					screen: Object(d.bb)(t),
					subreddit: Object(d.jb)(t),
					post: Object(d.J)(t, e)
				}), f = e => Object(c.a)({
					noun: "edit",
					...l(e)
				}), x = e => Object(c.a)({
					noun: "save_edit",
					...l(e)
				}), g = (e, t) => n => {
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
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.jb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.jb(t)
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
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.jb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.jb(t)
				})
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
			const a = Object(o.a)(i.O, i.N, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.H
				}), e => e === s.P.Enabled)
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
						experimentName: o.rf
					}) === o.bd
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.sf
					}) === o.bd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.qf
					});
					return t === o.jf.TypingIndicators || t === o.jf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.qf
					});
					return (null == t ? void 0 : t.variant) === o.jf.IndicatorsPlusCTA
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.791447f912960ff70093.js.map