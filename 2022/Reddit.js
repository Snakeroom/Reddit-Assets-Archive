// https://www.redditstatic.com/desktop2x/Reddit.2b1596b7361881af96d3.js
// Retrieved at 5/18/2022, 3:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				r = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			const r = () => {
					const e = document.getElementById(s.a);
					e && (e.style.filter = "blur(10px)")
				},
				o = () => {
					const e = document.getElementById(s.a);
					e && e.style.removeProperty("filter")
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				mIsBlurred: "_3Tq-_9917Q-o0iyzcNAeZn",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asModal/helpers.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				c = n("./src/lib/portal/index.tsx"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				u = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: s,
					...o
				} = e;
				return r.a.createElement("div", b({
					className: Object(a.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: s,
						[p.a.mIsBlurred]: n
					})
				}, o))
			};

			function g(e) {
				class t extends s.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(o.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(l.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(o.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: l,
							shouldBlurBackground: u,
							withOverlay: m,
							...b
						} = t, g = b;
						return r.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(h, {
							className: i,
							isVisible: m,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, g))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class r {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, n] = this.getTabbableNodes();
							if (!t || !n) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(n)) : e.shiftKey || e.target !== n || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(s);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
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
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/throwDevError.ts");
			const r = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					r.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					r.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(o.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							r.a.write(() => t.scrollTo({
								top: s,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.jb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, s) => {
				let {
					apiContext: d
				} = s;
				(await
					function(e) {
						return Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(d())).ok ? (Object(i.b)(), await m(d(), !0), e && window.location.reload()) : (m(d(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(c())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return pe
			})), n.d(t, "q", (function() {
				return he
			})), n.d(t, "o", (function() {
				return ge
			})), n.d(t, "s", (function() {
				return Oe
			})), n.d(t, "v", (function() {
				return Ce
			})), n.d(t, "p", (function() {
				return Ee
			})), n.d(t, "u", (function() {
				return Se
			})), n.d(t, "n", (function() {
				return _e
			})), n.d(t, "m", (function() {
				return we
			})), n.d(t, "h", (function() {
				return Me
			})), n.d(t, "a", (function() {
				return Ie
			})), n.d(t, "b", (function() {
				return Re
			})), n.d(t, "r", (function() {
				return Le
			})), n.d(t, "f", (function() {
				return De
			})), n.d(t, "g", (function() {
				return Fe
			})), n.d(t, "k", (function() {
				return Ue
			})), n.d(t, "d", (function() {
				return Ge
			})), n.d(t, "c", (function() {
				return Ve
			})), n.d(t, "j", (function() {
				return Qe
			})), n.d(t, "i", (function() {
				return Ye
			})), n.d(t, "l", (function() {
				return Xe
			})), n.d(t, "t", (function() {
				return Ze
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				l = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				P = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = n("./src/reddit/helpers/genericServerError/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				N = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				I = n("./src/reddit/helpers/graphql/helpers.ts"),
				T = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				A = n("./src/redditGQL/operations/CreateComment.json");
			const R = (e, t, n, s) => {
					let r, o;
					if (s === w.i.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...C,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, s, o) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return s === w.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = o), Object(x.a)(Object(E.a)(e, [P.a]), {
						method: r.jb.POST,
						endpoint: Object(j.a)(Object(N.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(S.a)()
					})
				}, D = async (e, t, n, s, r, o) => {
					const a = r === w.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: a ? s.text : null,
								richText: a ? null : o
							}
						};
					return Object(y.a)(e, {
						...A,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(I.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(I.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(T.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(S.a)()
						}
					})
				};
			var F = n("./src/redditGQL/operations/UpdateComment.json");
			var U = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = n("./src/reddit/endpoints/post/index.tsx"),
				G = n("./src/reddit/endpoints/post/convert.ts"),
				q = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = n("./src/reddit/featureFlags/index.ts"),
				W = n("./src/reddit/helpers/correlationIdTracker.ts"),
				V = n("./src/reddit/helpers/dom/index.ts"),
				Q = n("./src/reddit/helpers/localStorage/index.ts"),
				z = n("./src/reddit/helpers/sessionStorage/index.ts"),
				K = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				J = n("./src/reddit/models/Comment/index.ts"),
				Y = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/RichTextJson/index.ts"),
				Z = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				$ = n("./src/reddit/models/Toast/index.ts"),
				ee = n("./src/reddit/selectors/comments.ts"),
				te = n("./src/reddit/selectors/commentSelector.ts"),
				ne = n("./src/reddit/constants/experiments.ts"),
				se = n("./src/reddit/helpers/chooseVariant/index.ts"),
				re = n("./node_modules/reselect/es/index.js");
			const oe = Object(re.a)(e => Object(se.c)(e, {
				experimentEligibilitySelector: se.a,
				experimentName: ne.Cb
			}), e => e === ne.od);
			var ae = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ie = n("./src/reddit/selectors/platform.ts"),
				ce = n("./src/reddit/selectors/posts.ts"),
				le = n("./src/reddit/selectors/user.ts"),
				de = n("./src/reddit/actions/comment/index.ts"),
				ue = n("./src/reddit/actions/comment/constants.ts");
			const me = Object(o.a)(ue.k),
				pe = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const r = s();
						if (!!r.features.comments.drafts[n])
							if (Object(le.R)(r) && t) {
								const s = me({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.f)(s))
							} else e(me({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				be = Object(o.a)(ue.I),
				he = Object(o.a)(ue.K),
				ge = Object(o.a)(ue.J),
				fe = Object(o.a)(ue.H),
				ve = async (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					await K.f(e, n, t, o)
				}, Oe = "Toxicity_Warning__Modal", Ce = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const o = n(),
						a = Object(ie.e)(o);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (H.d.enableToxicityWarning(o)) {
						if (!(await R(r(), i, c, l))) return void t(Object(d.i)(Oe))
					}
					t(Ee(e))
				}, xe = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ye = e => {
					let t = null;
					return e.rteState && (t = f.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, Ee = e => async (t, n) => {
					t(Object(d.g)(Oe));
					const s = n(),
						r = Object(ae.a)(s),
						o = Object(ae.c)(s);
					if (!s.user.account && r) {
						const n = ye(e.formData),
							s = xe(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.j)()), Object(z.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: o
						})
					} else t(je(e, !1))
				};

			function Pe(e, t) {
				return e === w.i.MARKDOWN && oe(t)
			}
			const je = (e, t, n, o) => {
					let {
						postId: a,
						commentsPageKey: c,
						draftKey: l,
						formData: d,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: f
					} = e;
					return async (e, O, C) => {
						let {
							apiContext: x,
							gqlContext: y
						} = C;
						const E = O(),
							P = E.features.comments.submit.pending[l];
						if (!E.user.account || P) return;
						t || e(be({
							draftKey: l,
							draft: d
						}));
						const j = E.user.account.displayText,
							S = d.commentMode;
						let _;
						if (f) _ = await Object(q.i)(x(), a, d, j), e(Object(b.a)({
							streamId: a,
							level: _.body.automuteLevel
						}));
						else {
							const e = t && n ? n : ye(d);
							_ = Pe(S, E) ? await D(y(), a, null, d, S, e) : await L(x(), a, d, S, e)
						}
						if (_.ok) {
							let n;
							if (n = _.body, e(he({
									...n,
									headCommentId: Object(ee.w)(E, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: l
								})), t) {
								const e = Object(ie.i)(E);
								Object(i.a)(!!e)
							}
							const s = Object(ce.G)(O(), {
								postId: a
							});
							e(Object(m.z)(s, v.a.CommentSubmitted))
						} else {
							if (_.error && _.error.type === r.Kb) {
								const e = t && o ? o : xe(d);
								K.j(E, e, a)
							}
							const n = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(fe({
								draftKey: l,
								error: _.error
							})), e(Object(g.f)({
								duration: g.a,
								kind: $.b.Error,
								text: n
							}))
						}
						ve(O(), c, u, _).then(() => _.ok && u === w.i.RICH_TEXT ? Object(W.b)(W.a.CommentComposer) : void 0), p || Object(h.d)(), t && Object(z.a)()
					}
				},
				Se = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(ie.e)(m);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await R(r(), b, l, u))) return void t(Object(d.i)(Oe))
					}
					t(_e({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: o,
						formData: l,
						editorMode: u
					}))
				}, _e = e => async (t, n) => {
					t(Object(d.g)(Oe));
					const s = n(),
						r = Object(ae.a)(s),
						o = Object(ae.c)(s);
					if (!s.user.account && r) {
						const n = ye(e.formData),
							s = xe(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.j)()), Object(z.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: o
						})
					} else t(ke(e, !1))
				}, ke = (e, t, n, s) => async (o, a, c) => {
					let {
						apiContext: l,
						gqlContext: d
					} = c;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: b,
						formData: g,
						editorMode: f
					} = e, v = a(), O = v.features.comments.submit.pending[b];
					if (!v.user.account || O) return;
					t || o(be({
						draftKey: b,
						draft: g
					}));
					const C = g.commentMode,
						x = t && n ? n : ye(g);
					let y;
					if ((y = Pe(C, v) ? await D(d(), null, u, g, C, x) : await L(l(), u, g, C, x)).ok) {
						if (o(ge({
								...y.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: b,
								depth: p + 1
							})), t) {
							const e = Object(ie.i)(v);
							Object(i.a)(!!e)
						}
					} else {
						if (y.error && y.error.type === r.Kb) {
							const e = Object(te.b)(v, {
								commentId: u
							});
							if (!e) return;
							const n = t && s ? s : xe(g);
							K.j(v, n, e.postId, u)
						}
						o(fe({
							draftKey: b,
							error: y.error
						}))
					}
					ve(a(), m, f, y), Object(h.d)(), t && Object(z.a)()
				}, we = () => async e => {
					const t = Object(z.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: r,
								richTextJSONData: o,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(u.skipOnboardingModal)()), r ? await e(je({
							...t.comment,
							postId: r
						}, !0, o, a)) : s && void 0 !== n && await e(ke({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, o, a))
					}
				}, Ne = Object(o.a)(ue.q), Me = Object(o.a)(ue.y), Ie = Object(o.a)(ue.p), Te = Object(o.a)(ue.l), Ae = (Object(o.a)(ue.g), Object(o.a)(ue.m)), Re = (Object(o.a)(ue.t), (e, t, n) => async (r, o, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === w.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(X.G)(t)) r(Ae({
						editorMode: e,
						draftKey: n,
						content: c ? X.i : ""
					})), r(Object(p.c)(e));
					else {
						r(Object(p.b)(n));
						const o = await Object(G.a)(i(), e, c ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(p.a)(n)), r(Ae({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(p.c)(e))
						} else r(Object(p.a)(n)), r(Object(g.f)({
							duration: g.a,
							kind: $.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Le = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, r) => {
						const o = r(),
							i = Object(a.a)(Y.c.replyToComment, n);
						if (!Object(le.P)(r()) && !Object(ae.a)(o)) return e(Object(l.j)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ee.m)(r(), {
								commentId: n
							})
						}));
						const u = o.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ie({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = o.user.prefs.commentMode,
							g = Object(V.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === w.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Z.s(e, null)).map(e => Z.l([e])),
									n = Z.s("", null),
									s = Z.l([n]);
								b = {
									document: [Z.c(t), s]
								}
							}
						}
						const f = o.features.comments.drafts[i];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(le.R)(o)) {
							const s = Ne({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: i,
								formData: v
							});
							e(Object(c.f)(s))
						} else e(Ne({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: i,
							formData: v
						}))
					}
				}, De = e => async t => {
					t(Object(de.p)(e)), t(Ge(e))
				}, Fe = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ie({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(de.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Ue = (e, t) => n => n(Te({
					draftKey: e,
					formData: t
				})), Be = Object(o.a)(ue.s), Ge = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: r,
						text: o
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (K.c(i), e(Be({
							commentId: t,
							commentsPageKey: s,
							draftKey: r,
							formData: {
								text: o,
								commentMode: n,
								rteState: null,
								draftType: Y.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, qe = Object(o.a)(ue.D), He = Object(o.a)(ue.C), We = Object(o.a)(ue.E), Ve = Object(o.a)(ue.h), Qe = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: o
					} = e;
					return async (e, a, i) => {
						let {
							apiContext: c,
							gqlContext: l
						} = i;
						const d = a();
						if (!d.user.account) return;
						e(qe({
							draftKey: s
						})), K.d(d);
						const u = ye(o),
							m = o.commentMode;
						let p;
						if ((p = Pe(m, d) ? await (async (e, t, n, s, r) => {
								const o = r === w.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: o ? n.text : null,
											richText: o ? null : s
										}
									};
								return Object(y.a)(e, {
									...F,
									variables: {
										input: a
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(I.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(I.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(T.b)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(S.a)()
									}
								})
							})(l(), t, o, u, m) : await (async (e, t, n, s, o) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === w.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = s), Object(x.a)(Object(E.a)(e, [P.a]), {
									endpoint: Object(j.a)(Object(M.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
									method: r.jb.POST,
									data: a
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(k.a)(e)
								} : {
									...e,
									body: {
										comment: Object(_.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(_.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(S.a)()
								})
							})(c(), t, o, u, m)).ok) {
							const r = p.body;
							e(We({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(de.i)({
								[t]: {
									...r.comment
								}
							}))
						} else e(He({
							draftKey: s,
							error: p.error
						}))
					}
				}, ze = Object(o.a)(ue.A), Ke = Object(o.a)(ue.z), Je = Object(o.a)(ue.B), Ye = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					const i = s();
					n(ze({
						id: e
					})), K.a(e, i);
					const c = await ((e, t) => Object(x.a)(Object(E.a)(e, [P.a]), {
						endpoint: Object(j.a)(`${e.apiUrl}/api/del`),
						method: r.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(S.a)()
					}))(a(), e);
					c.ok ? n(Je({
						id: e,
						postId: t
					})) : n(Ke({
						id: e,
						error: c.error
					}))
				}, Xe = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(de.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(B.p)(r(), e, o)).ok || t(Object(de.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Ze = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					var i, c, l, d, u, m;
					n(Object(de.c)());
					const p = e => Object(g.f)(Object(g.e)(e, $.b.Error));
					if (((null === (c = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === O.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const o = t === J.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(de.n)(i)), (await ((e, t) => Object(y.a)(e, {
								...U,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(Q.ub)(null !== (u = null === (d = null === (l = r().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const e = o ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(g.f)({
								kind: $.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(de.n)(i)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				r = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				o = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(r.c),
				b = Object(s.a)(r.b),
				h = Object(s.a)(r.e),
				g = Object(s.a)(r.f),
				f = Object(s.a)(r.d),
				v = Object(s.a)(r.a),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						c = Object(m.k)(r);
					if (c && c.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...i,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(p(t))
					} catch (d) {
						e(b()), e(Object(o.f)({
							duration: o.a,
							kind: l.b.Error,
							text: d.message
						}))
					}
				}, C = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const c = n(),
						u = Object(m.k)(c);
					if (u && u.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${d.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(h());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...i,
									variables: {
										query: JSON.stringify({
											entityRef: t
										}),
										queryName: "getEntity"
									}
								});
								if (!n.ok) throw new Error(`Unable to fetch ${t}`);
								const s = n.body.data.econAdminPanel.response;
								return JSON.parse(s)
							})(r(), e);
							t(g(n))
						} catch (p) {
							t(f()), t(Object(o.f)({
								duration: o.a,
								kind: l.b.Error,
								text: p.message
							}))
						}
					}
				}, x = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const c = n(),
						d = Object(m.k)(c);
					if (!d || !d.isEmployee) return;
					const p = Object(u.b)(c);
					if (p) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...i,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const r = s.body.data.econAdminPanel.response;
							return JSON.parse(r)
						})(r(), p.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (b) {
						t(Object(o.f)({
							duration: o.a,
							kind: l.b.Error,
							text: b.message
						}))
					}
				}, y = (e, t, n) => async (s, r, i) => {
					let {
						gqlContext: d
					} = i;
					const p = r(),
						b = Object(m.k)(p);
					if (b && b.isEmployee && Object(u.b)(p)) try {
						await (async (e, t, n, s) => {
							const r = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...r
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(r)}`)
						})(d(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: l.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (h) {
						s(Object(o.f)({
							duration: o.a,
							kind: l.b.Error,
							text: h.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(d.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.A)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(o.g)(l.h))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const d = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (d.ok && d.body && d.body.success) return l.a.Success;
				switch (d.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(o.d)(o.a.GildingFlow),
					thingId: c
				})), Object(a.P)(i) || await t(r.t());
				const l = n();
				if (!Object(a.P)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const n = t();
				Object(r.P)(n) || await e(s.t());
				const o = t();
				if (!Object(r.P)(o)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(r.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				try {
					const t = await Object(a.b)(r());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), o.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), o.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.a)()
				})), await e(Object(o.t)()), Object(a.P)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/econManagement/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.P)(n),
					d = Object(c.M)(n);
				l && d || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.d)()
				})), Object(i.P)(t()) || await e(Object(a.t)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.P)(d) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(o.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.F)(t(), l);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/gold/powerups.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				d = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				m = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(o.m)({
						title: Object(s.i)()
					})), await e(Object(c.t)()), !Object(m.P)(n)) return;
				await e(Object(a.q)());
				const p = Object(l.b)(n),
					b = Object(d.a)(n);
				if (p) return await e(Object(r.d)(b));
				await e(Object(i.f)()), await e(Object(r.o)());
				const h = Object(u.c)(n);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(r.d)(t))
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.j)()
				})), await e(Object(a.t)()), Object(i.P)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.p)()
				}))
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				b = Object(r.a)(m.p),
				h = Object(r.a)(m.Q),
				g = (e, t, n) => async (r, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						C = t === l.i.RICH_TEXT,
						x = m.k;
					if (O && Object(d.G)(n)) return r(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (C && !n) return r(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void r(f(t));
					r(p(x));
					const y = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					y.ok ? (r(b(x)), r(h({
						editorKey: e,
						editorMode: t,
						content: y.body.output
					})), r(f(t))) : (r(b(x)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(o.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.rb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(o.r),
				i = Object(s.a)(o.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const c = await Object(r.a)(o(), e);
					c && c.ok ? t(a({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/authoring.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				u = n("./src/reddit/selectors/accountManager/modalData.ts"),
				m = n("./src/reddit/selectors/activeModal.ts"),
				p = n("./src/reddit/selectors/gild.ts"),
				b = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts");
			const g = [b.u, b.o, e => !!Object(p.d)(e)],
				f = (e, t) => async (n, p, b) => {
					let {
						apiContext: f
					} = b;
					const v = p();
					for (const e of g)
						if (e(v)) return;
					const O = document.activeElement,
						C = v.shortcuts.activeCommentId,
						x = Object(h.c)(v),
						y = Object(m.b)(v),
						E = Object(u.a)(v),
						P = [o.a.NsfwBlockingModal].includes(E),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(y),
						S = P || j;
					if (O && "true" === O.contentEditable && C && x) n(r.a({
						parentCommentId: C,
						commentsPageKey: x
					})), Object(h.a)(C);
					else if (y && !S) Object(h.b)(c.b), n(Object(o.i)(y));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(a.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: _
					} = v.shortcuts;
					e(t && _ ? l.b(_, "close", !0) : d.a)
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				b = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/sso/constants.ts");
			const f = Object(h.a)(g.a),
				v = Object(h.a)(g.b);
			var O = n("./src/reddit/actions/survey/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/accountManager.ts"),
				E = n("./src/reddit/constants/history.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				_ = n("./src/reddit/helpers/history/index.ts"),
				k = n("./src/reddit/helpers/sessionStorage/index.ts"),
				w = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				N = n("./src/reddit/helpers/trackers/onboarding.ts"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				I = n("./src/reddit/models/Sso/index.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/selectors/accountManager/index.ts"),
				R = n("./src/reddit/selectors/accountManager/modalData.ts"),
				L = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				D = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				F = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				U = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				B = n("./src/reddit/selectors/experiments/survey.ts"),
				G = n("./src/reddit/selectors/telemetry.ts"),
				q = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				W = n.n(H);
			const V = u.a.iframe("IFrame", W.a),
				Q = u.a.button("CloseButton", W.a),
				z = u.a.wrapped(M.a, "Close", W.a),
				K = Object(c.c)({
					accountManagerSrc: A.a,
					actionSource: R.a,
					frontpageSignupVariant: D.a,
					isBlockingInterstitialEnabled: F.b,
					isBlockingInterstitialV2Enabled: F.c,
					isBlurredPreview: U.b,
					isCommentBeforeSignUpEnabled: L.a,
					isDismissSurveyEnabled: B.a,
					isHardBlockingInterstitialEnabled: F.d,
					isLoggedIn: q.P,
					isRegularOnboardingEnabled: L.b,
					redirectUrl: R.b
				}),
				J = Object(i.b)(K, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(O.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(G.n)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(S.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(b.A)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, T.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, T.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(p.a)()),
					showToast: (t, n) => {
						e(Object(C.f)(Object(C.e)(t, n)))
					}
				})),
				Y = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === y.a.ChangePassword || t.type === y.a.Close || t.type === y.a.CreateAccount || t.type === y.a.GoogleOneTapDisplayed || t.type === y.a.GoogleOneTapFlowFailed || t.type === y.a.GoogleOneTapSkipped || t.type === y.a.Login || t.type === y.a.PreferenceStatus || t.type === y.a.Register || t.type === y.a.Resize || t.type === y.a.ShowStep || t.type === y.a.SSOLinkFail || t.type === y.a.SSOLinkSuccess || t.type === y.a.SSOUnlinkFail || t.type === y.a.SSOUnlinkSuccess || t.type === y.a.Subscribe || t.type === y.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				X = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class Z extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === I.a.Apple ? P.a.LINK_APPLE_SSO : P.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === I.a.Apple ? P.a.UNLINK_APPLE_SSO : P.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(r.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && Y(e))
							if (t.type === y.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === y.a.Close) this.closedByUser();
						else if (t.type === y.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === y.a.Login) this.onLogIn();
						else if (t.type === y.a.ChangePassword) this.onChangePassword();
						else if (t.type === y.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === y.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === y.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === y.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === y.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === y.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === y.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === y.a.ShowStep ? this.onShowStep(t.step) : t.type === y.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(k.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(_.a)(E.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(k.a)(), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === y.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), T.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), T.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), T.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[j.q]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[j.x] = "true") : s[j.x] = "true"), e.isSignupModalSuccessful && (s[j.y] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: r,
							isDismissSurveyEnabled: o,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = X[this.currentStep];
							e && c(Object(N.r)(e))
						}
						s && e === m.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== m.a.NsfwBlockingModal && c(Object(w.a)()), r && Object(k.a)(), this.close(), this.isSignupModalDismissed && o && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && m.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						oniFrameLoaded: n,
						setRef: s
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						n(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === y.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isHardBlockingInterstitialEnabled: s,
						path: r
					} = this.props, {
						iframeStyles: o
					} = this.state, i = (r === y.c.Index || r === y.c.Register) && (t === m.a.UserProfile || t === m.a.FeedPost || t === m.a.Comments || t === m.a.FeedScroll || t === m.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(V, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: o,
						onLoad: this.onIFrameLoad
					}), c && a.a.createElement(Q, {
						onClick: this.closedByUser
					}, a.a.createElement(z, null)))
				}
			}
			t.a = J(Object(x.c)(Z))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				r = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				removeOverflow: "_1TESSB-XqnzjiOpUWj2dND",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return hp
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				l = n("./node_modules/lodash/throttle.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				C = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				S = n("./src/reddit/actions/header.ts"),
				_ = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				N = n("./node_modules/polished/dist/polished.es.js"),
				M = n("./node_modules/react-motion/lib/react-motion.js"),
				I = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				D = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				q = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class H extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === s.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: n
						} = e;
						return m.a.createElement("img", {
							key: t,
							src: `${B.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: r,
							shouldHandleMouseClicks: o
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -r * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(v.a)(q.a.item, q.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${B.a.assetPath}/${e.img}")`,
								width: r
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(v.a)(q.a.indicator, {
							[q.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(v.a)(e, q.a.container)
					}, m.a.createElement("article", {
						className: q.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: q.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var W = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(W);
			const Q = I.a.div("Container", V.a),
				z = I.a.wrapped(H, "Carousel", V.a),
				K = I.a.div("Phone", V.a),
				J = I.a.img("Frame", V.a),
				Y = `${B.a.assetPath}/img/frontpage-signup/android-frame.png`,
				X = `${B.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				Z = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				$ = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var ee = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(Q, {
						className: t
					}, m.a.createElement(K, {
						className: V.a.android
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: Z,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Y
					})), m.a.createElement(K, {
						className: V.a.iphone
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: X
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = I.a.div("Container", ne.a),
				re = I.a.span("Disclaimer", ne.a),
				oe = I.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(oe, {
					href: "https://www.redditinc.com/"
				}, r.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/advertising"
				}, r.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(oe, {
					href: "http://www.redditblog.com/"
				}, r.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/careers"
				}, r.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(oe, {
					href: "https://www.reddithelp.com"
				}, r.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/press"
				}, r.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/coins"
				}, r.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(oe, {
					href: "https://redditgifts.com/"
				}, r.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/premium"
				}, r.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, r.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, r.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(re, null, r.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ie = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ce = n.n(ie);
			const le = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				ge = I.a.button("NotReady", ce.a),
				fe = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				Oe = Object(C.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(de, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(v.a)({
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(ge, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(N.i)(.8, i)
						}
					}, m.a.createElement(fe, null, r.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class Ce extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class xe extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(L.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Ce, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(M.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(M.spring)(s, le)
						}
					}, this.renderScroller))
				}
			}
			var ye = Object(A.c)(xe),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				Pe = n.n(Ee),
				je = n("./src/lib/localStorageAvailable/index.ts"),
				Se = n("./src/reddit/actions/modal.ts"),
				_e = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Ne = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Me = n("./src/lib/loadWithRetries/index.ts");
			var Ie = Object(_e.a)({
				getComponent: () => Object(Me.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Te = () => null;
			var Ae = Object(_e.a)({
					ErrorComponent: Te,
					getComponent: () => Object(Me.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Te
				}),
				Re = n("./src/higherOrderComponents/asModal/index.tsx"),
				Le = n("./src/reddit/actions/structuredStyles/index.ts"),
				De = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Fe = n("./src/reddit/constants/modals.ts"),
				Ue = n("./src/reddit/controls/TextButton/index.tsx"),
				Be = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qe = Object(p.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Se.i)(Fe.a.BLADE_NIGHTMODE)), e(Object(Le.f)())
					},
					openBlade: () => {
						e(Object(Le.e)(n))
					}
				}
			});
			var He = Object(Re.a)(qe(e => m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Be.a, null, m.a.createElement(De.q, null, Ge._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Ue.a, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.o, null, Ge._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Ge._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(De.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Ge._("Continue", null, {
					hk: "413jMZ"
				})))))),
				We = n("./src/reddit/actions/authorFlair.ts"),
				Ve = n("./src/reddit/actions/gold/powerups.ts"),
				Qe = n("./src/reddit/actions/userFlair/index.ts"),
				ze = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Ke = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Je = n("./src/reddit/components/FlairPreview/index.tsx"),
				Ye = n("./src/reddit/components/FlairSearch/index.tsx"),
				Xe = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Ze = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				et = n("./src/reddit/layout/row/Inline/index.tsx"),
				tt = n("./src/reddit/models/Flair/index.ts"),
				nt = n("./src/reddit/models/User/index.ts"),
				st = n("./src/reddit/selectors/authorFlair.ts"),
				rt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ot = n("./src/reddit/selectors/telemetry.ts"),
				at = n("./src/reddit/selectors/user.ts"),
				it = n("./src/reddit/selectors/userFlair.ts"),
				ct = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				lt = n.n(ct);
			const dt = e => e.flairModalContext && e.currentUser && Object(nt.e)(e.currentUser) === e.flairModalContext.username,
				ut = e => e.authorFlair || dt(e) && e.userFlairData.applied || null,
				mt = I.a.wrapped(et.a, "Section", lt.a),
				pt = I.a.div("CheckboxText", lt.a);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(ot.hb)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: ut(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: r
					} = e.displaySettings, o = this.state.showFlair !== r, a = ut(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(Xe.b)(n, t, a);
					return !(i || c !== Xe.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s,
						flairModalContext: o
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == o ? void 0 : o.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = dt(e);
					return m.a.createElement(Ke.a, null, m.a.createElement(ze.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Je.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						placeholderText: r.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(Ye.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						subredditId: s,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(mt, null, m.a.createElement($e.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(pt, null, r.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: lt.a.buttonsRow
					}, c && m.a.createElement(Ze.t, {
						className: lt.a.goBackButton,
						priority: Ze.c.Plain,
						onClick: e.openAchiementFlairModal
					}, r.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: lt.a.rightSideButtons
					}, a && m.a.createElement(Ze.o, {
						className: lt.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ze.l, {
						disabled: !u,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const ht = Object(p.b)(() => Object(f.c)({
				authorFlair: st.b,
				currentUser: at.k,
				flairModalContext: st.c,
				isMod: (e, t) => !!Object(rt.n)(e, t),
				userFlairData: it.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(Qe.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(We.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Ve.f)())
			}))(bt);
			var gt = Object(Re.a)(Object(A.c)(ht)),
				ft = n("./src/reddit/selectors/activeModalId.ts"),
				vt = n("./src/reddit/selectors/bannedUser.ts"),
				Ot = n("./src/reddit/selectors/muted.ts"),
				Ct = n("./src/reddit/selectors/notificationPrefs.ts"),
				xt = n("./src/reddit/selectors/platform.ts"),
				yt = n("./src/reddit/selectors/removalReasons.ts"),
				Et = n("./src/reddit/constants/cookie.ts"),
				Pt = n("./src/reddit/featureFlags/index.ts"),
				jt = n("./src/reddit/helpers/localStorage/index.ts"),
				St = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const _t = Object(f.c)({
				activeModalId: ft.a,
				authorContext: st.c,
				badgePurchaseModalIsOpen: Object(ft.b)(Fe.a.BADGE_PURCHASE),
				banContext: vt.a,
				banModalIsOpen: Object(ft.b)(Fe.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(ft.b)(Fe.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Pt.d.introModal(e),
				isOverlayOpen: xt.i,
				moderatorPermissions: e => {
					const t = Object(xt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ot.b,
				muteModalIsOpen: Object(ft.b)(Fe.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ct.e,
				removalReasonContext: yt.b,
				removalReasonModalIsOpen: Object(ft.b)(Fe.a.ADD_REMOVAL_REASON),
				subredditId: xt.c,
				userFlairModalIsOpen: Object(ft.b)(Fe.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: at.A,
				userInRedesignBeta: at.H,
				userIsLoggedIn: at.P,
				userIsMod: at.Q,
				userIsNew: at.T
			});
			class kt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Et.a);
						e && Pe.a.remove(Et.a, {
							domain: B.a.cookieDomain
						});
						const t = Object(jt.E)(Fe.a.ALPHA_CONSUMER);
						t && Object(jt.Z)(Fe.a.ALPHA_CONSUMER), (e || t) && Object(jt.Fb)(Fe.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(jt.E)(Fe.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(jt.Fb)(Fe.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(St.a)(), 500) : setTimeout(() => Object(St.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: l,
						removalReasonModalIsOpen: d,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(ot.h)(r, n),
						post: n && Object(ot.H)(r, n),
						screen: Object(ot.Y)(r),
						subreddit: Object(ot.hb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Ne.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Ae, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f,
						trackClick: O("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), r && b && m.a.createElement(He, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(gt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(ke, {
						withOverlay: !0,
						productId: o
					}), c && m.a.createElement(Ie, null))
				}
			}
			var wt = Object(p.b)(_t, e => ({
					markRedesignModalAsClosed: () => e(Object(Se.j)()),
					toggleBanModal: () => e(Object(Se.i)(Fe.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Se.i)(Fe.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Se.i)(Fe.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Se.i)(Fe.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(kt)),
				Nt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Mt = n("./src/reddit/constants/experiments.ts"),
				It = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Tt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				At = n("./src/reddit/selectors/responsiveSettings.ts"),
				Rt = n("./src/telemetry/helpers/sendCounter.ts"),
				Lt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Dt = n.n(Lt);
			const Ft = I.a.div("Overlay", Dt.a),
				Ut = I.a.div("IframeContainer", Dt.a),
				Bt = {},
				Gt = Object(It.u)(),
				qt = Object(f.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: At.a
				}),
				Ht = {
					[R.c.ChangePassword]: Fe.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: Fe.a.LOGIN_MODAL_ID,
					[R.c.Register]: Fe.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: Fe.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: Fe.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: Fe.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: Fe.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: Fe.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: Fe.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: Fe.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: Fe.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: Fe.a.ONBOARDING_MODAL_ID
				};
			class Wt extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Tt.a.throttleFeature(Mt.Ec), this.props.sendEvent(Object(L.a)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && (this.props.sendEvent(Object(L.b)()), Object(Rt.b)(O.m.Redesign, {
							type: Rt.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(L.c)()), Object(Rt.b)(O.m.Redesign, {
							type: Rt.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === R.c.Index || t === R.c.Register, s = t === R.c.GoogleOneTap;
						e === R.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === R.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === R.b.Email || e === R.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== R.b.EmailOptIn && e !== R.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: r,
						isSSOLinkActionFailedModal: o,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), l = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, d = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Dt.a.small]: c,
						[Dt.a.ssoConfirmPassword]: l,
						[Dt.a.linkActionSSOFail]: o,
						[Dt.a.mResponsive]: t,
						[Dt.a.mGoogleOneTap]: d && !a
					}), p = Object(v.a)({
						[Dt.a.mGoogleOneTap]: d && !a,
						[Dt.a.mHiddenOverlay]: d && !i
					}), b = !c && !o && !t;
					return m.a.createElement(Ft, {
						className: p
					}, m.a.createElement(Ut, {
						className: u,
						style: r || Bt
					}, m.a.createElement(T.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const Vt = Gt(Object(p.b)(qt, (e, t) => ({
				closeModal: t => {
					e(Object(Se.g)(Ht[t]))
				}
			}))(Object(A.c)(Wt)));
			Object(Nt.b)(Fe.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Vt, {
				path: R.c.ChangePassword
			})), Object(Nt.b)(Fe.a.LOGIN_MODAL_ID, e => m.a.createElement(Vt, {
				path: R.c.Index
			})), Object(Nt.b)(Fe.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Vt, {
				path: R.c.Onboarding
			})), Object(Nt.b)(Fe.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Vt, {
				path: R.c.EnableTwoFactor
			})), Object(Nt.b)(Fe.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Vt, {
				path: R.c.DisableTwoFactor
			})), Object(Nt.b)(Fe.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Vt, {
				path: R.c.TwoFactorBackupCodes
			})), Object(Nt.b)(Fe.a.REGISTER_MODAL_ID, e => m.a.createElement(Vt, {
				path: R.c.Register
			})), Object(Nt.b)(Fe.a.LINK_APPLE_SSO, e => m.a.createElement(Vt, {
				path: R.c.LinkAppleSSO
			})), Object(Nt.b)(Fe.a.LINK_GOOGLE_SSO, e => m.a.createElement(Vt, {
				path: R.c.LinkGoogleSSO
			})), Object(Nt.b)(Fe.a.UNLINK_APPLE_SSO, e => m.a.createElement(Vt, {
				path: R.c.UnlinkAppleSSO
			})), Object(Nt.b)(Fe.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Vt, {
				path: R.c.UnlinkGoogleSSO
			})), Object(Nt.b)(Fe.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Vt, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Qt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Qt, {
				withOverlay: !0
			}));
			const zt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(zt, {
				withOverlay: !0
			}));
			const Kt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Kt, {
				withOverlay: !0
			}));
			const Jt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.CROWD_CONTROL, e => m.a.createElement(Jt, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Yt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(Yt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Xt = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(Xt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const Zt = Object(_e.a)({
					getComponent: () => Object(Me.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				$t = e => () => {
					e()
				};
			Object(Nt.b)(Fe.a.GOLD_GILD_MODAL, e => m.a.createElement(Zt, {
				onOverlayClick: $t(e),
				withOverlay: !0
			}));
			var en = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				tn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				nn = n.n(tn);
			const sn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = en.SPARKLE_ASSET_PATH, document.createElement("img").src = en.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Nt.b)(Fe.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(sn, {
				withOverlay: !0,
				className: nn.a.modalBody,
				overlayClassName: nn.a.modalOverlay
			}));
			const rn = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				on = e => () => {
					e()
				};
			Object(Nt.b)(Fe.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(rn, {
				onOverlayClick: on(e),
				withOverlay: !0
			}));
			const an = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(an, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ln = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(ln, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const dn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(dn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx"), n("./src/reddit/components/Governance/PurchaseEthModal/async.tsx");
			const un = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(un, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const mn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e(0), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.TRANSFER_POINTS, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(bn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const hn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(hn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const gn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.MULTIREDDIT_CREATE, e => m.a.createElement(gn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Nt.b)(Fe.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(gn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Nt.b)(Fe.a.MULTIREDDIT_EDIT, e => m.a.createElement(fn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const vn = () => Promise.all([n.e(6), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				On = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Me.a)(vn).then(e => e.default)
				});
			Object(Nt.b)(Fe.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(On, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Cn = () => null,
				xn = Object(_e.a)({
					ErrorComponent: Cn,
					getComponent: () => Object(Me.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Cn
				});
			Object(Nt.b)(Fe.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(xn, null));
			var yn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				En = n.n(yn);
			const Pn = I.a.h2("ColumnLabel", En.a),
				jn = I.a.wrapped(et.a, "ColumnWrapper", En.a),
				Sn = I.a.div("Column", En.a),
				_n = I.a.div("Description", En.a),
				kn = I.a.div("Key", En.a),
				wn = I.a.wrapped(De.l, "ModalMain", En.a),
				Nn = I.a.wrapped(De.e, "ModalBody", En.a),
				Mn = I.a.wrapped(Ze.l, "PrimaryButton", En.a),
				In = I.a.wrapped(Ue.a, "TextButton", En.a),
				Tn = Object(p.b)(null, e => ({
					closeModal: () => e(Object(Se.i)(Fe.a.KEYBOARD_SHORTCUTS))
				})),
				An = I.a.wrapped(Object(Re.a)(Tn(e => m.a.createElement(Nn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(De.i, null, m.a.createElement(Be.a, null, m.a.createElement(De.q, null, r.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(In, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(wn, null, m.a.createElement(jn, null, m.a.createElement(Sn, null, m.a.createElement(et.a, null, m.a.createElement(Pn, null, r.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(kn, null, "Shift + ?")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(kn, null, "J")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(kn, null, "K")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(kn, null, "N")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(kn, null, "P")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(kn, null, "Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(kn, null, "X")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(kn, null, "L"))), m.a.createElement(Sn, null, m.a.createElement(et.a, null, m.a.createElement(Pn, null, r.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(kn, null, "A")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(kn, null, "Z")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(kn, null, "C")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(kn, null, "R")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(kn, null, "Ctrl + Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(kn, null, "S")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(kn, null, "H")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(kn, null, "Q")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(kn, null, "Enter"))))), m.a.createElement(De.g, null, m.a.createElement(Mn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, r.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", En.a);
			Object(Nt.b)(Fe.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(An, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Rn = Object(_e.a)({
					getComponent: () => Object(Me.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Ln = e => () => {
					e()
				};
			Object(Nt.b)(Fe.a.SNOOVATAR_MODAL, e => m.a.createElement(Rn, {
				onOverlayClick: Ln(e),
				withOverlay: !0
			}));
			const {
				fbt: Dn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fn = Object(f.c)({
				allowNavigationCallback: xt.a
			}), Un = Object(p.b)(Fn, e => ({
				closeModal: () => e(Object(Se.i)(Fe.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Le.a)())
			}));
			class Bn extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Be.a, null, m.a.createElement(De.q, null, Dn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Ue.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.p, null, Dn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Dn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(De.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Dn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Gn = Object(Re.a)(Un(Bn));
			Object(Nt.b)(Fe.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Gn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const qn = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Hn = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Me.a)(qn).then(e => e.default)
				});
			Object(Nt.b)(Fe.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Hn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Wn = Object(f.c)({
					activeModalId: ft.a
				}),
				Vn = Object(p.b)(Wn, e => ({
					toggleModal: t => e(Object(Se.i)(t))
				})),
				Qn = 500,
				zn = () => {};
			class Kn extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(St.a)(), Qn) : setTimeout(() => Object(St.b)(), Qn)))
				}
				componentWillUnmount() {
					Object(St.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Nt.a)(e)(e ? this.toggleModal : zn)
				}
			}
			var Jn, Yn = Vn(Kn),
				Xn = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Zn = n("./src/reddit/actions/page.ts"),
				$n = n("./src/reddit/actions/shortcuts/utils.ts"),
				es = n("./src/reddit/icons/fonts/index.tsx"),
				ts = n("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				ns = n("./src/reddit/selectors/header.ts"),
				ss = n("./src/reddit/selectors/userPrefs.ts"),
				rs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				os = n("./src/reddit/components/SEOTitle/index.tsx"),
				as = n("./src/reddit/components/SubredditIcon/index.tsx"),
				is = n("./src/reddit/components/UserIcon/index.tsx"),
				cs = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				ls = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				ds = n.n(ls);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Jn || (Jn = {}));
			const us = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(os.b, {
					type: os.a.HeaderSelector
				}, s))
			};
			var ms = n("./src/lib/objectSelector/index.ts"),
				ps = n("./src/reddit/constants/wiki.ts"),
				bs = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				hs = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				gs = n("./src/reddit/selectors/subreddit.ts"),
				fs = n("./src/reddit/selectors/topic.ts");
			var vs = Object(ms.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						r = Object(bs.a)(e),
						o = Object(It.Y)(n);
					switch (o) {
						case "avatar":
							return {
								type: Jn.Avatar
							};
						case "index":
						case "listing":
							return s || r ? {
								type: Jn.Home
							} : {
								type: Jn.Popular
							};
						case "modListing":
							return {
								type: Jn.ModListing
							};
						case "modQueuePages":
							return {
								type: Jn.ModQueue
							};
						case "postCreation":
							return {
								type: Jn.CreatePost
							};
						case "postDraft":
							return {
								type: Jn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Jn.SubredditCreation
							};
						case "coins":
							return {
								type: Jn.Coins
							};
						case "internationalSitePage":
							return {
								type: Jn.InternationalSite
							};
						case "powerups":
							return {
								type: Jn.Powerups
							};
						case "predictions":
							return {
								type: Jn.Predictions
							};
						case "premium":
							return {
								type: Jn.Premium
							};
						case "acknowledgements":
							return {
								type: Jn.Acknowledgements
							};
						case "appeal":
							return {
								type: Jn.Appeal
							};
						case "report":
							return {
								type: Jn.Report
							};
						case "userDataRequest":
							return {
								type: Jn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Jn.DailyCharts
							};
						case "geotagging":
							return {
								type: Jn.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Jn.NotificationsInbox
							};
						case "talk":
							return {
								type: Jn.Talk
							};
						case "topic": {
							const t = Object(It.t)(n),
								s = t && Object(fs.d)(e, t);
							if (s) return {
								type: Jn.Topic,
								model: s
							}
						}
					}
					const a = e.user.account;
					if (a) switch (o) {
						case "inboxPages":
							return {
								type: Jn.Inbox, model: a
							};
						case "settings":
							return {
								type: Jn.Settings, model: a
							}
					}
					const i = Object(It.S)(e, {
						pageLayer: n
					});
					if ("all" === i) return {
						type: Jn.All
					};
					if ("popular" === i) return {
						type: Jn.Popular
					};
					const c = Object(It.r)(e, {
						pageLayer: n
					});
					if (c) return "searchResults" === o ? {
						type: Jn.CommunitySearch,
						model: c
					} : {
						type: Jn.Community,
						model: c
					};
					const l = Object(It.e)(e, {
						pageLayer: n
					});
					if (l) return {
						type: Jn.Multi,
						model: l
					};
					const d = Object(It.k)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Jn.UserProfile,
						model: d
					};
					const u = Object(It.i)(n);
					if (u) return {
						type: Jn.UserProfileName,
						name: `u/${u}`
					};
					if (o && "searchResults" === o) return {
						type: Jn.GlobalSearch
					};
					if ("subredditWiki" === o) {
						const t = Object(It.o)(e, {
								pageLayer: n
							}) || ps.e,
							s = Object(gs.z)(e, {
								subredditName: t
							});
						if (s) return {
							type: Jn.Community,
							model: s
						}
					}
					return "rpan" === o && Object(hs.a)(e) ? {
						type: Jn.PublicAccessNetwork
					} : {
						type: Jn.Unknown
					}
				}),
				Os = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Cs = n.n(Os);

			function xs() {
				return (xs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ys(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Cs.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(v.a)(Cs.a.text, {
								[Cs.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Cs.a.badge
						})),
						className: Object(v.a)(Cs.a.item, e.className, {
							[Cs.a.mFocused]: !!e.isFocused,
							[Cs.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", xs({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(Xn.a, xs({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var Es = n("./src/reddit/actions/login.ts"),
				Ps = n("./src/reddit/components/BadgeCounter/index.tsx"),
				js = n("./src/reddit/constants/localStorage.ts"),
				Ss = n("./src/reddit/hooks/useIsClient.ts"),
				_s = n("./src/reddit/hooks/useLocalStorage.ts");
			const ks = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				ws = e => {
					let {
						className: t
					} = e;
					const n = Object(Ss.a)(),
						s = Object(p.e)(xt.g),
						r = Object(p.e)(bs.a),
						[o, a] = Object(_s.a)(js.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = ks(o.dismissed),
						l = ks(o.throttledUntil),
						d = !n || !r || c >= 3 || r && s || i < l;
					return n && r && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + O.B
					}), d ? null : m.a.createElement(Ps.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var Ns = n("./src/reddit/constants/listings.ts"),
				Ms = n("./src/reddit/helpers/overlay/index.ts"),
				Is = n("./src/reddit/routes/modListing/index.ts"),
				Ts = n("./src/reddit/routes/powerups/index.ts"),
				As = n("./src/reddit/routes/predictions/index.ts"),
				Rs = n("./src/reddit/routes/talk/index.ts"),
				Ls = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ds = n("./src/reddit/selectors/multireddit.ts"),
				Fs = n("./src/lib/LinkedListMap/index.ts"),
				Us = n("./src/reddit/routes/avatar/index.ts");

			function Bs() {
				return (Bs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Gs = Object(f.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ds.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ds.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var qs;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(qs || (qs = {}));
			const Hs = [e => ({
					id: Jn.Employee,
					type: qs.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(es.a, Bs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Ws = () => [e => ({
					id: Jn.All,
					type: qs.GenericLink,
					model: {
						url: "/r/all/",
						displayText: r.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Vs = () => [e => ({
					id: "reddit-feeds",
					type: qs.Header,
					model: {
						displayText: r.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Jn.Home,
					type: qs.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Jn.Popular,
					type: qs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				Qs = [e => ({
					id: "reddit-feeds",
					type: qs.Header,
					model: {
						displayText: r.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Jn.Home,
					type: qs.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				zs = e => m.a.createElement(ws, {
					className: e.className
				}),
				Ks = [e => ({
					id: "reddit-feeds",
					type: qs.Header,
					model: {
						displayText: r.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Jn.Home,
					type: qs.GenericLink,
					model: {
						url: "/",
						badge: zs,
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Jn.Popular,
					type: qs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				Js = [e => ({
					id: "reddit-other",
					type: qs.Header,
					model: {
						displayText: r.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Jn.Settings,
					type: qs.GenericLink,
					model: {
						url: "/settings",
						displayText: r.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(cs.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Jn.Inbox,
					type: qs.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: r.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(cs.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				Ys = e => ({
					id: Jn.Coins,
					type: qs.GenericLink,
					model: {
						url: "/coins",
						displayText: r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				Xs = e => ({
					id: Jn.Premium,
					type: qs.GenericLink,
					model: {
						url: "/premium",
						displayText: r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				Zs = e => ({
					id: Jn.Avatar,
					type: qs.GenericLink,
					model: {
						url: Us.a,
						displayText: r.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Avatar", null, {
								hk: "3coVk4"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				$s = e => ({
					id: Jn.Powerups,
					type: qs.GenericLink,
					model: {
						url: Ts.a,
						displayText: r.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "powerup"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Powerups", null, {
								hk: "1f7fL8"
							}))
						}
					},
					telemetryNoun: "powerups"
				}),
				er = e => ({
					id: Jn.Talk,
					type: qs.GenericLink,
					model: {
						url: Rs.a,
						displayText: r.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				tr = e => ({
					id: Jn.Predictions,
					type: qs.GenericLink,
					model: {
						url: As.a,
						displayText: r.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				nr = [e => ({
					id: Jn.ModQueue,
					type: qs.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: r.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: Jn.ModMail,
						type: qs.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: r.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(es.a, Bs({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, r.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function sr(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: qs.Header,
					model: {
						displayText: r.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && rr(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: qs.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: qs.Header,
					model: {
						displayText: r.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: qs.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const rr = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const s = {
						id: Jn.CreateCommunity,
						telemetryNoun: "create_community"
					},
					o = {
						displayText: r.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(es.a, Bs({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...s,
					type: qs.GenericClickable,
					model: {
						...o,
						onClick: () => {
							n ? (t(Object(Se.k)({
								actionSource: Se.a.HeaderSignup
							})), t(Object(Es.j)())) : t(Object(Se.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var or = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ar = n.n(or);

			function ir(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(ar.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var cr = n("./src/reddit/actions/subscription/index.ts"),
				lr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				dr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ur = n.n(dr);

			function mr() {
				return (mr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pr = Object(f.c)({
					currentUser: at.k,
					hideNSFWPref: at.F,
					isLoggedIn: at.P,
					isLoggedOutOneFeed: bs.a
				}),
				br = Object(p.b)(pr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case qs.Subreddit:
								e(Object(cr.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case qs.Profile:
								e(Object(cr.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case qs.Multi:
								e(Object(cr.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(lr.f)(t.model.url)) : t.sendEvent(Object(lr.c)(t.model.url))
						}
					}
				}));
			var hr = Object(A.c)(br((function(e) {
					const t = {
						className: Object(v.a)(ur.a.item, e.className, {
							[ur.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case qs.Subreddit:
							return m.a.createElement(Xn.a, mr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(as.b, {
								className: ur.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: ur.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(es.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ur.a.favorite, {
									[ur.a.mFavorite]: !!e.isFavorite
								})
							})));
						case qs.SubredditAutocomplete:
							return m.a.createElement(Xn.a, mr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(as.b, {
								className: ur.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: ur.a.text
							}, e.model.name));
						case qs.Multi:
							return m.a.createElement(Xn.a, mr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: ur.a.customFeedIcon
							}), m.a.createElement("span", {
								className: ur.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(es.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ur.a.favorite, {
									[ur.a.mFavorite]: !!e.isFavorite
								})
							})));
						case qs.Profile:
							return m.a.createElement(Xn.a, mr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(is.a, {
								className: ur.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: ur.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(es.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ur.a.favorite, {
									[ur.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				gr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				fr = n.n(gr);

			function vr(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: fr.a.header
				}), m.a.createElement("div", {
					className: fr.a.item
				}), m.a.createElement("div", {
					className: fr.a.item
				}), m.a.createElement("div", {
					className: fr.a.item
				}), m.a.createElement("div", {
					className: fr.a.item
				}))
			}
			var Or = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Cr = n("./src/reddit/actions/subreddit.ts"),
				xr = n("./src/reddit/controls/InternalLink/index.tsx");

			function yr() {
				return (yr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Er = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: r,
						rel: o
					} = e, a = {
						onClick: r,
						rel: o,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", yr({
						href: s
					}, a), t) : m.a.createElement(xr.default, yr({
						to: s
					}, a), t)
				},
				Pr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				jr = n.n(Pr),
				Sr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				_r = n.n(Sr);
			class kr extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						buttonClassName: t,
						children: n,
						className: s,
						headingClassName: r,
						icon: o,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(v.a)(jr.a.button, _r.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(v.a)(jr.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, o), m.a.createElement("span", {
						className: jr.a.title
					}, l ? m.a.createElement(Er, {
						className: jr.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(es.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(jr.a.chevronIcon, {
							[jr.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(jr.a.contentContainer, jr.a["m-collapsible"], {
							[jr.a.isOpen]: d,
							[jr.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var wr = kr,
				Nr = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Mr = n("./src/reddit/constants/colors.ts");
			const Ir = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(jr.a.title, n)
					}, t)
				},
				Tr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(jr.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Ir, {
						title: s,
						titleClassName: r
					}))
				},
				Ar = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(Er, {
						className: Object(v.a)(jr.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Ir, {
						title: r,
						titleClassName: o
					}))
				},
				Rr = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: r,
						onClick: o,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Er, {
						className: Object(v.a)(jr.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(as.b, {
						"aria-hidden": !0,
						className: Object(v.a)(jr.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: Mr.a.snoo
					}), m.a.createElement(Ir, {
						title: i,
						titleClassName: c
					}))
				},
				Lr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(jr.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Ir, {
						title: s,
						titleClassName: r
					}), m.a.createElement(Nr.a, {
						className: jr.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Dr = [{
					link: {
						icon: "topic_videogaming",
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						icon: "topic_sports",
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						icon: "topic_television",
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						icon: "topic_celebrity",
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						icon: "topic_business",
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						icon: "topic_crypto",
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						icon: "overflow_horizontal",
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_games/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Fr = n("./src/reddit/helpers/trackers/navigation.ts"),
				Ur = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Br = n.n(Ur);
			const Gr = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, o] = Object(u.useState)(null), a = e => () => {
					o(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Dr.map((e, o) => ((e, t, n, s, r) => {
					let {
						link: o,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(wr, {
						buttonClassName: r ? Br.a.navButtonOverride : "",
						className: Br.a.collapsibleContainer,
						icon: s && o.icon && m.a.createElement(es.a, {
							name: o.icon
						}),
						isOpen: i,
						key: o.url,
						onClick: (e, t) => {
							o.noun && n(Object(Fr.c)(o.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: o.title,
						url: o.url
					}, a.map(e => m.a.createElement(Ar, {
						className: r ? Br.a.navBasicLink : Br.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Fr.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: r === e
				}))(o), t, n, s)))
			};
			var qr = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s
					} = e;
					return m.a.createElement(wr, {
						icon: m.a.createElement(es.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							s(Object(Fr.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: r.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(Gr, {
						sendEvent: s
					})))
				},
				Hr = n("./src/reddit/constants/keycodes.ts"),
				Wr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Vr = n("./src/reddit/helpers/trackers/postComposer.ts"),
				Qr = n("./src/lib/loadableAction/index.ts"),
				zr = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Kr = n.n(zr);

			function Jr() {
				return (Jr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Yr(e) {
				return e.id === Jn.ModMail || e.id === Jn.CreateCommunity
			}

			function Xr(e) {
				const t = new Fs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== qs.Header && e.type !== qs.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Zr = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutOneFeed: bs.a,
					unfilteredListBuilder: e => t => {
						const n = Gs(e),
							s = new Fs.a("id"),
							o = Object(bs.a)(e),
							a = Object(at.ob)(e),
							i = [],
							c = (e => Object(Ls.s)(e) ? [Xs, Ys, Zs, $s, er, tr] : [Ys, Xs, Zs, $s, er, tr])(e),
							l = i.length ? c.filter(e => !i.includes(e(null).id)) : c;
						if (n.account) {
							const o = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: qs.Header,
								model: {
									displayText: r.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: qs.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: qs.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: qs.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: qs.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: qs.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: qs.Header,
								model: {
									displayText: r.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), o.isMod && nr.forEach(e => s.push(e(o))), s.push({
								id: Jn.ModListing,
								type: qs.GenericLink,
								model: {
									url: Is.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(es.a, Bs({
										name: "mod_queue"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: qs.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: qs.Header,
									model: {
										displayText: r.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(Se.h)(Fe.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(v.a)(t, ds.a.multiPlusButton)
											}, m.a.createElement(es.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: qs.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: qs.LoadingState,
								model: {
									displayText: ""
								}
							}) : sr(s, n, a, t), ((e, t, n, s) => (Vs().forEach(e => t.push(e(n))), n.isEmployee && Hs.forEach(e => t.push(e(n))), Object(hs.a)(e) && t.push({
								id: Jn.PublicAccessNetwork,
								type: qs.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Ms.a)(Ns.c[Ns.b.Rpan]))
									},
									displayText: r.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(es.a, Bs({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, s, o, t), Js.forEach(e => s.push(e(o))), s.push((() => ({
								id: Jn.CreatePost,
								type: qs.CreatePost,
								model: {
									url: "/submit",
									displayText: r.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(es.a, Bs({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), s.push((() => ({
								id: Jn.DailyCharts,
								type: qs.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: r.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(es.a, Bs({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), (e => e.push({
								id: Jn.NotificationsInbox,
								type: qs.GenericLink,
								model: {
									url: "/notifications",
									displayText: r.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(es.a, Bs({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(s), l.forEach(e => s.push(e(o)))
						} else n.subscriptions.length || Object(at.P)(e) ? Vs().forEach(e => s.push(e(null))) : o ? (Ks.forEach(e => s.push(e(null))), function(e, t, n) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: qs.Header,
								model: {
									displayText: r.fbt._("recent communities", null, {
										hk: "24NvFP"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: qs.Subreddit,
								model: t,
								telemetryNoun: "community"
							})), rr(e, n, !0))
						}(s, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: qs.Header,
								model: {
									displayText: r.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: qs.ExploreMenu,
								model: {
									displayText: r.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(s)) : Qs.forEach(e => s.push(e(null))), o || (s.push({
							id: "reddit-other",
							type: qs.Header,
							model: {
								displayText: r.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), l.forEach(e => s.push(e(null))), sr(s, n, a, t));
						return s
					}
				}),
				$r = e => ({
					onHomeClicked: () => e(Object(Qr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(cr.f)()), e(Object(Cr.q)()), e(Object(Qr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				eo = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class to extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Xr(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Hr.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Hr.b.Tab && this.props.onClose && this.props.onClose(), e.key === Hr.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== qs.Header && e.type !== qs.ExploreMenu && e.type !== qs.LoadingState && (this.fireTelemetryForListItem(e), e.type === qs.GenericClickable ? e.model.onClick() : Yr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Hr.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === Hr.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Jn.Coins:
							case Jn.Premium:
								Object(Wr.d)(Wr.a.GoldPayment, !0), t = Object(Wr.c)(Wr.a.GoldPayment)
						}
						switch (e.type) {
							case qs.Category:
							case qs.GenericLink:
							case qs.GenericClickable:
							case qs.Multi:
							case qs.Profile:
							case qs.Subreddit:
								this.props.sendEvent(n => ({
									...Object(ot.n)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === qs.Multi ? Object(ot.m)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case qs.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(ot.n)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case qs.CreatePost:
								this.props.sendEvent(Object(Vr.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Xr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Xr(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Fs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case qs.Category:
								case qs.GenericLink:
								case qs.Multi:
								case qs.Profile:
								case qs.Subreddit:
								case qs.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case qs.Header: {
									const t = n.last();
									t && t.type === qs.Header && n.pop(), n.push(e);
									break
								}
								case qs.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === qs.Header && n.pop(), n
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${r.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), !this.props.isLoggedOutOneFeed && m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Kr.a.filter,
						id: "header-subreddit-filter",
						placeholder: r.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Jn.Home && this.props.onHomeClicked(), e.type === qs.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case qs.GenericClickable:
								return m.a.createElement(ys, Jr({}, n, {
									className: Kr.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case qs.Category:
							case qs.GenericLink:
							case qs.CreatePost:
								return m.a.createElement(ys, Jr({}, n, {
									externalLink: Yr(e),
									className: Kr.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case qs.Header: {
								const n = e.model.button;
								return m.a.createElement(ir, {
									className: Kr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Kr.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case qs.LoadingState:
								return m.a.createElement(vr, {
									className: Kr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case qs.Multi:
								return m.a.createElement(hr, Jr({}, n, {
									className: Kr.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: qs.Multi
								}));
							case qs.Profile:
								return m.a.createElement(hr, Jr({}, n, {
									className: Kr.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: qs.Profile
								}));
							case qs.Subreddit:
								return m.a.createElement(hr, Jr({}, n, {
									className: Kr.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: qs.Subreddit
								}));
							case qs.ExploreMenu:
								return m.a.createElement(Gr, Jr({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const no = Object(p.b)(Zr, $r, eo)(Object(A.c)(to)),
				so = Object(p.b)(Zr, $r, eo)(Object(A.c)(Object(Or.b)(to))),
				ro = Object(It.u)({
					isCommentsPage: It.x,
					pageLayer: e => e
				}),
				oo = Object(f.c)({
					currentPage: vs,
					hideNSFWPref: at.F,
					isD2xSeoDisableLightboxEnabled: ts.a,
					isDropdownOpen: ns.a,
					isLoggedIn: at.P,
					isOverlayOpen: xt.i,
					isPinnedSubscriptionsMenuDisabled: ss.a,
					isSubscriptionsPinned: ss.b
				});
			class ao extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object($n.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(ot.n)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: s,
							isCommentsPage: o,
							isD2xSeoDisableLightboxEnabled: a,
							isLoggedIn: i,
							isOverlayOpen: c
						} = this.props, l = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = c || !a && !i && o;
						return m.a.createElement("div", {
							"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(ds.a.container, n, {
								[ds.a.mOpen]: l,
								[ds.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[ds.a.mPinned]: this.props.isSubscriptionsPinned,
								[ds.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: ds.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: ds.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case Jn.Acknowledgements:
									return us(r.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Jn.All:
									return us(r.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Jn.Appeal:
									return us(r.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Jn.Avatar:
									return us(r.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Jn.Coins:
									return us(r.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Jn.Community:
									return us(e.model.displayText, !0);
								case Jn.CommunitySearch:
									return us(r.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Jn.CreateCommunity:
									return us(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Jn.CreatePost:
									return us(r.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Jn.DailyCharts:
									return us(r.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Jn.GlobalSearch:
									return us(r.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Jn.Geotagging:
									return us(r.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Jn.Home:
									return us(r.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Jn.Inbox:
									return us(r.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Jn.ModListing:
									return us("r/Mod");
								case Jn.ModMail:
									return us(r.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Jn.ModQueue:
									return us(r.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Jn.Multi:
									return us(e.model.displayText, !0);
								case Jn.NotificationsInbox:
									return us(r.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Jn.InternationalSite:
								case Jn.Popular:
									return us(r.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Jn.Powerups:
									return us(r.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case Jn.Predictions:
									return us(r.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Jn.Premium:
									return us(r.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Jn.PublicAccessNetwork:
									return us(r.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Jn.Report:
									return us(r.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Jn.Settings:
									return us(r.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Jn.SubredditCreation:
									return us(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Jn.Talk:
									return us(r.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Jn.Topic:
									return us(e.model);
								case Jn.Unknown:
									return us("");
								case Jn.UserDataRequest:
									return us(r.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Jn.UserProfile:
									return us(e.model.displayText, !0);
								case Jn.UserProfileName:
									return us(e.name, !0);
								case Jn.ViewDraft:
									return us(r.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(es.a, {
								name: e,
								isFilled: !0,
								className: ds.a.defaultIcon
							});
							switch (e.type) {
								case Jn.All:
									return n("all");
								case Jn.Acknowledgements:
								case Jn.Appeal:
									return n("edit");
								case Jn.Avatar:
									return n("avatar_style");
								case Jn.Coins:
									return n("coins");
								case Jn.Community:
								case Jn.CommunitySearch: {
									const n = Object(rs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(as.b, {
										className: ds.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Jn.CreateCommunity:
								case Jn.CreatePost:
									return n("add");
								case Jn.DailyCharts:
									return n("list_numbered");
								case Jn.Geotagging:
									return n("custom_feed");
								case Jn.GlobalSearch:
									return n("search");
								case Jn.Home:
									return n("home");
								case Jn.Inbox:
									return m.a.createElement(cs.a, {
										wrapperClassName: ds.a.userIcon
									});
								case Jn.ModListing:
									return n("mod_queue");
								case Jn.ModMail:
									return n("mod_mail");
								case Jn.ModQueue:
									return n("mod_queue");
								case Jn.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: ds.a.customFeedIcon
									});
								case Jn.NotificationsInbox:
									return n("notification");
								case Jn.InternationalSite:
								case Jn.Popular:
									return n("popular");
								case Jn.Powerups:
									return n("powerup");
								case Jn.Predictions:
									return n("prediction");
								case Jn.Premium:
									return n("premium");
								case Jn.PublicAccessNetwork:
									return n("video_live");
								case Jn.Report:
									return n("report");
								case Jn.Settings:
									return m.a.createElement(cs.a, {
										wrapperClassName: ds.a.userIcon
									});
								case Jn.SubredditCreation:
									return n("add");
								case Jn.Talk:
									return n("live");
								case Jn.Topic:
									return n("custom_feed");
								case Jn.Unknown:
									return m.a.createElement("div", {
										className: ds.a.unknownIcon
									});
								case Jn.UserDataRequest:
									return n("add");
								case Jn.UserProfile: {
									const n = Object(rs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(is.a, {
										className: ds.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Jn.UserProfileName:
									return m.a.createElement("div", {
										className: ds.a.defaultIcon
									});
								case Jn.Unknown:
									return m.a.createElement("div", {
										className: ds.a.unknownIcon
									});
								case Jn.UserProfile: {
									const n = Object(rs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(is.a, {
										className: ds.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Jn.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(es.a, {
							name: "caret_down",
							className: ds.a.caretDown
						})), l && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(es.a, {
							name: "side_menu",
							className: ds.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), l && m.a.createElement(so, {
							canAutofocus: !0,
							className: ds.a.listContainer,
							currentPage: t,
							onClose: this.close
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					return m.a.createElement(g.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var io = ro(Object(p.b)(oo, (e, t) => ({
					closeDropdown: () => e(Object(S.f)()),
					onLocationRefresh: (n, s) => e(Object(Zn.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(S.i)()), e(Object(S.f)())
					},
					openDropdown: () => e(Object(S.g)()),
					toggleDropdown: () => e(Object(S.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(A.c)(ao))),
				co = n("./src/reddit/components/JumpToContent/index.tsx"),
				lo = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				uo = n("./node_modules/history/esm/history.js"),
				mo = n("./node_modules/lodash/isEmpty.js"),
				po = n.n(mo),
				bo = n("./node_modules/lodash/pick.js"),
				ho = n.n(bo),
				go = n("./node_modules/uuid/v4.js"),
				fo = n.n(go),
				vo = n("./src/lib/hooks/usePrevious.ts"),
				Oo = n("./src/lib/makeSearchKey/index.ts"),
				Co = n("./src/reddit/actions/post.ts"),
				xo = n("./src/reddit/actions/search.ts"),
				yo = n("./src/lib/makeApiRequest/index.ts"),
				Eo = n("./src/lib/omitHeaders/index.ts"),
				Po = n("./src/reddit/constants/headers.ts");
			var jo = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				So = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const _o = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				var o, a;
				const i = await ((e, t) => Object(yo.a)(Object(Eo.a)(e, [Po.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.jb.GET,
					data: {
						query: t
					}
				}))(r(), e);
				if (i.ok && (null === (a = null === (o = i.body) || void 0 === o ? void 0 : o.data) || void 0 === a ? void 0 : a.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								r = e.kind;
							r === O.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(So.a)(s)) : r === O.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(jo.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(i.body.data.children);
					n && n.data && n.order && t(Object(xo.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var ko = n("./src/reddit/actions/search/trending.ts"),
				wo = n("./src/reddit/components/SearchDropdown/index.tsx"),
				No = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Mo = n("./src/reddit/constants/parameters.ts"),
				Io = n("./src/reddit/helpers/clickSourceData/index.ts"),
				To = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Ao = n("./src/reddit/helpers/isArrayEqual.ts"),
				Ro = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Lo = n("./src/reddit/helpers/trackers/screenview.ts"),
				Do = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Fo = n("./src/reddit/hooks/usePageLayer.ts"),
				Uo = n("./src/reddit/models/Search/index.ts"),
				Bo = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				Go = n("./src/reddit/selectors/searchFix.ts"),
				qo = n("./src/reddit/selectors/searchResults.ts"),
				Ho = n("./src/reddit/selectors/trending.ts"),
				Wo = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				Vo = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Qo = n("./src/reddit/controls/Search/index.m.less"),
				zo = n.n(Qo),
				Ko = n("./node_modules/lodash/debounce.js"),
				Jo = n.n(Ko),
				Yo = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Xo = Object(f.a)(e => Object(Yo.c)(e, {
				experimentEligibilitySelector: Yo.a,
				experimentName: Mt.rc
			}), e => e);
			var Zo, $o = n("./src/reddit/components/Pill/index.tsx"),
				ea = n("./src/reddit/components/Pill/PillText/index.m.less"),
				ta = n.n(ea);

			function na() {
				return (na = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(Zo || (Zo = {}));
			const sa = {
					[Zo.DAY]: ta.a.pillTextVariantDay,
					[Zo.NIGHT]: ta.a.pillTextVariantNight
				},
				ra = e => {
					let {
						children: t,
						className: n,
						variant: s,
						...r
					} = e;
					return m.a.createElement("div", na({}, r, {
						className: Object(v.a)(ta.a.pillText, sa[s], n)
					}), t)
				};
			var oa = n("./src/reddit/controls/Search/CommunityPill/CommunityPill.m.less"),
				aa = n.n(oa);
			const ia = e => {
				let {
					subreddit: t
				} = e;
				const n = Object(p.e)(at.cb);
				return m.a.createElement($o.a, {
					"aria-hidden": !0,
					className: aa.a.communityPill,
					"data-testid": "community-pill"
				}, m.a.createElement(ra, {
					variant: n ? Zo.NIGHT : Zo.DAY
				}, m.a.createElement(as.b, {
					className: zo.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText))
			};
			var ca = n("./src/reddit/components/Pill/PillButton/index.tsx");
			const la = e => m.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				"data-name": "icons final",
				viewBox: "0 0 20 20"
			}, m.a.createElement("path", {
				d: "M10 .375A9.625 9.625 0 1019.625 10 9.636 9.636 0 0010 .375zm0 18A8.375 8.375 0 1118.375 10 8.384 8.384 0 0110 18.375z"
			}), m.a.createElement("path", {
				d: "M12.558 6.558L10 9.116 7.442 6.558l-.884.884L9.116 10l-2.558 2.558.884.884L10 10.884l2.558 2.558.884-.884L10.884 10l2.558-2.558-.884-.884z"
			}));
			var da = n("./src/reddit/controls/Search/CommunityPill/CommunityPillClickable.m.less"),
				ua = n.n(da);
			const ma = e => {
					let {
						onClickDismiss: t,
						subreddit: n
					} = e;
					const s = Object(p.e)(at.cb);
					return m.a.createElement($o.a, {
						className: ua.a.communityPill,
						"data-testid": "community-pill"
					}, m.a.createElement(ca.a, {
						"aria-label": r.fbt._("Remove community search filter", null, {
							hk: "1zezc9"
						}),
						className: Object(v.a)(ua.a.pillButton, s ? ua.a.pillButtonNight : ua.a.pillButtonDay),
						"data-testid": "community-pill-button",
						onClick: t,
						onFocus: e => {
							e.stopPropagation()
						},
						type: "button",
						variant: ca.b.TAB_GROUP
					}, m.a.createElement(as.b, {
						className: Object(v.a)(zo.a.subredditIcon, ua.a.subredditIcon),
						subredditOrProfile: n
					}), n.displayText, m.a.createElement(la, {
						className: ua.a.dismissIcon
					})))
				},
				pa = e => {
					let {
						onClickDismiss: t,
						subreddit: n
					} = e;
					const s = Object(p.e)(at.cb);
					return m.a.createElement($o.a, {
						className: ua.a.communityPill,
						"data-testid": "community-pill"
					}, m.a.createElement(ra, {
						className: ua.a.pillText,
						"data-testid": "community-pill-text",
						variant: s ? Zo.NIGHT : Zo.DAY
					}, m.a.createElement(as.b, {
						className: Object(v.a)(zo.a.subredditIcon, ua.a.subredditIcon),
						subredditOrProfile: n
					}), n.displayText, m.a.createElement("button", {
						"aria-label": r.fbt._("Remove community search filter", null, {
							hk: "1zezc9"
						}),
						className: Object(v.a)(ua.a.dismissButton, s ? ua.a.dismissButtonNight : ua.a.dismissButtonDay),
						"data-testid": "community-pill-button",
						onClick: t,
						onFocus: e => {
							e.stopPropagation()
						},
						type: "button"
					}, m.a.createElement(la, {
						className: ua.a.dismissIcon
					}))))
				},
				ba = e => {
					const t = Object(p.e)(Xo);
					let n = ia;
					return t === Mt.Dc.ClickablePill ? n = ma : t === Mt.Dc.ClickableX && (n = pa), m.a.createElement(n, e)
				};
			var ha = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				ga = n.n(ha);
			const fa = e => {
				let {
					inputRef: t,
					onChange: n,
					onClickDismissCommunityPill: s,
					onFocusSearchBar: o,
					onFormSubmit: a,
					onKeyDown: i,
					searchQuery: c,
					showCommunityPill: l,
					subreddit: d
				} = e;
				const u = m.a.useContext(g.a),
					p = l && d ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", d.displayText)], {
						hk: "2B6J3t"
					}) : r.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(ga.a.searchBar, u && ga.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: o,
					role: "search"
				}, m.a.createElement("label", {
					className: ga.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: ga.a.iconContainer
				}, m.a.createElement(es.a, {
					name: "search",
					className: ga.a.icon
				})), m.a.createElement(lo.a, {
					"aria-live": "assertive"
				}, p)), l && d && m.a.createElement(ba, {
					onClickDismiss: s,
					subreddit: d
				}), m.a.createElement("input", {
					className: ga.a.input,
					defaultValue: c,
					id: "header-search-bar",
					name: "q",
					onChange: Jo()((function() {
						var e;
						n((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
					}), 200),
					onKeyDown: i,
					placeholder: r.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: t,
					type: "search"
				}))
			};

			function va(e) {
				let {
					className: t
				} = e;
				var n;
				const s = Object(Fo.a)(),
					r = Object(It.Z)(s),
					o = Object(It.W)(s),
					{
						nsfwSessionSetting: a,
						refreshNsfwSessionSettingExpiryTime: i
					} = Object(No.b)(),
					[c, l] = Object(u.useState)(-1),
					[d, b] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[x, y] = Object(u.useState)([]),
					[E, P] = Object(u.useState)(null),
					j = Object(u.useRef)(null),
					S = Object(u.useRef)(null),
					_ = Object(A.b)(),
					k = Object(p.d)(),
					w = Object(p.e)(xt.b),
					N = Object(p.e)(xt.d),
					M = Object(p.e)(at.k),
					I = Object(p.e)(qo.q),
					T = Object(p.e)(qo.p),
					R = Object(p.e)(at.P),
					L = Object(p.e)(qo.r),
					D = Object(p.e)(at.cb),
					F = Object(p.e)(xt.r),
					U = Object(p.e)(e => Object(It.ab)(e, {
						pageLayer: s
					})),
					B = Object(p.e)(e => Object(It.r)(e, {
						pageLayer: s
					})),
					G = Object(p.e)(e => Object(It.e)(e, {
						pageLayer: s
					})),
					q = Object(p.e)(e => Object(Bo.a)(e)),
					H = Object(p.e)(e => Object(Ho.a)(e, Uo.d.dropdown).slice(0, wo.d)),
					W = Object(p.e)(qo.x),
					V = Object(p.e)(at.jb),
					Q = Object(vo.a)(B),
					z = Object(vo.a)(r),
					K = Object(vo.a)(W),
					J = Object(vo.a)(H),
					Y = ((null === (n = S.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					X = fe(Y),
					Z = w ? Object(ot.u)(w) : s ? Object(ot.u)(s) : void 0,
					$ = O[Y],
					ee = Object(Oo.e)({
						...ho()(o || {}, Mo.v),
						q: Y
					});
				Object(u.useEffect)(() => {
					te()
				}, [J, K, W, H]), Object(u.useEffect)(() => {
					B && (null == Q ? void 0 : Q.name) !== B.name && !L && re()
				}, [Q, B, L]), Object(u.useEffect)(() => {
					po()(W) || r ? le(r || "") : ce()
				}, [z, r]);
				const te = () => {
						const e = Object(Ao.a)(K, W),
							t = Object(Ao.a)(J, H);
						if (!e || !t) {
							const e = W.length ? W : [...x, ...H];
							b(e)
						}
					},
					ne = e => k(Object(xo.p)({
						searchQuery: e
					})),
					se = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && Wo.a.clear(Vo.a.Typeahead), k(Object(xo.k)())
					},
					re = () => k(Object(xo.m)()),
					oe = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							k(Object(h.b)(Object(uo.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: N
						})
					},
					ae = async () => {
						H.length || g || (f(!0), await (() => k(Object(ko.b)(Uo.d.dropdown)))(), f(!1))
					}, ie = e => {
						R && M && y(Object(jt.Mb)({
							...e,
							section: Uo.c.recent
						}, M.id))
					}, ce = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						l(-1), P(null), le(""), ne(""), e && Wo.a.update(Vo.a.Typeahead), he()
					};

				function le(e) {
					S.current && (S.current.value = e)
				}
				const de = (e, t, n, s) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: Y
						};
						_(Object(Do.v)(s, r))
					},
					ue = (e, t, n) => {
						_(Object(Do.x)(e, t, n))
					},
					me = (e, t, n, s) => {
						_(Object(Do.z)(e, t, n, s))
					},
					pe = () => {
						_(e => Object(Do.h)(e, ee, B)), (() => k(Object(xo.j)()))(), Wo.a.update(Vo.a.Typeahead)
					},
					be = e => {
						const t = d[e] || null,
							n = t ? t.searchQuery : "";
						l(e), le(n), P(t)
					},
					he = () => {
						if (H.length || ae(), M) {
							const e = Object(jt.L)(M.id);
							e.length > 0 && (y(R ? e : []), b([...e, ...H]))
						}
					},
					ge = e => {
						!(!T || !T[e]) || (e ? (async e => {
							O[e] || (O[e] = !0, C({
								...O
							}), await k(_o(e)), O[e] = !1, C({
								...O
							}))
						})(e) : he())
					};

				function fe(e) {
					const t = B && B.icon ? B.icon.url : "",
						n = null == B ? void 0 : B.displayText,
						s = !!B && B.isNSFW,
						r = Uo.b.text;
					return {
						id: fo()(),
						searchQuery: e,
						type: r,
						section: Uo.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(v.a)(zo.a.relativeWrapper, ds.a.container, t, {
						"m-open": I
					}),
					id: wo.b,
					ref: j
				}, m.a.createElement(fa, {
					inputRef: S,
					onChange: e => {
						const t = e.trim();
						Wo.a.update(Vo.a.Typeahead), ne(t), ge(t)
					},
					searchQuery: Y,
					onFormSubmit: e => {
						e.preventDefault(), Y.trim() && (async e => {
							var t, n, r;
							const o = (null === (t = S.current) || void 0 === t ? void 0 : t.value) || "";
							if (!o.trim()) return;
							o !== Y && ne(o);
							let l, u = {
									...Uo.a
								},
								m = {},
								p = !0;
							if (E && E.searchQuery === Y ? ((u = E).id || (u.id = fo()()), u.section === Uo.c.recent ? (m = Object(Io.c)(Io.a.SEARCH_DROPDOWN, Z, u.isProfile || u.isSubreddit), l = Oo.a.Recent, ue(o, u, c)) : u.section === Uo.c.typeahead ? (m = Object(Io.c)(Io.a.TYPEAHEAD, Z), p = !1, me(o, u, c, d.filter(e => e.isSubreddit))) : u.section === Uo.c.trending ? (m = Object(Io.c)(Io.a.TYPEAHEAD, Z), l = (null === (n = u.post) || void 0 === n ? void 0 : n.isSponsored) ? Oo.a.PromotedTrend : Oo.a.Trending, k((e, t) => Object(Ro.u)({
									state: t(),
									trendingSearch: u,
									telemetrySource: Vo.a.Typeahead
								}))) : de(o, o, ot.c.Search, Do.a.RECENT)) : (u = fe(o), _(Object(Do.o)(ot.a.FullSearchButton, Object(Oo.e)({
									q: Y
								}), U, Vo.a.Typeahead, s || void 0))), ie(u), se(p), !u.searchQuery) return;
							const b = Object(To.a)({
								subreddit: B,
								multireddit: G,
								searchItem: u,
								searchOptions: q ? {
									...ee,
									source: l
								} : {
									source: l
								},
								shouldSearchSubreddit: U,
								includeNsfwResults: V && a
							});
							oe(e, b, m), u.isTypeaheadSuggestion && ce(p), i(), null === (r = S.current) || void 0 === r || r.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(Wr.c)(Wr.a.SearchResults) || Object(Wr.d)(Wr.a.SearchResults), Wo.a.update(Vo.a.Typeahead), _(Object(Do.o)(ot.a.SearchBar, ee, U, Vo.a.Typeahead, s || void 0)), I || ((() => k(Object(xo.l)()))(), _(Object(Lo.u)(ee, null != s ? s : void 0, Object(Go.b)({
							pageLayer: s
						})))), ge(Y)
					},
					onKeyDown: e => {
						if (e.key === Hr.b.Escape || e.key === Hr.b.Tab) se();
						else if (e.key === Hr.b.ArrowDown) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (c >= d.length - 1) return;
							be(c + 1)
						} else if (e.key === Hr.b.ArrowUp) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (-1 === c) return;
							be(c - 1)
						} else e.key === Hr.b.Backspace && !Y && U && L && pe()
					},
					onClickDismissCommunityPill: pe,
					showCommunityPill: U,
					subreddit: B
				}), m.a.createElement(wo.c, {
					container: j.current,
					focusedItemIndex: c,
					searchOriginPage: Z,
					isOpen: I,
					isTrendingPending: g,
					isTypeaheadPending: $,
					itemList: d,
					nightmode: D,
					recentSearches: x,
					trendingItems: H,
					searchItem: X,
					typeaheadSuggestions: W,
					onClearSearchQuery: ce,
					onClose: se,
					onRemoveRecentSearch: e => {
						M && 0 !== x.length && (Object(jt.ab)(e, M.id), y(x.filter(t => t.searchQuery !== e.searchQuery)), l(-1))
					},
					onSendSearchClickRecentEvent: ue,
					onSendSearchClickTypeaheadEvent: me,
					onSetRecentSearch: ie,
					onUpdateSearchQuery: le,
					fireAdPixelsOfType: (e, t) => k(Object(Co.z)(e, t))
				}))
			}
			var Oa = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ca = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				xa = n("./src/reddit/selectors/responsivePage.ts"),
				ya = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Ea = n.n(ya);
			var Pa = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Ea.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": r.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Ea.a.HomeLink,
						href: B.a.redditUrl
					}, m.a.createElement(Oa.a, {
						className: Ea.a.Snoo
					}), m.a.createElement(Ca.a, {
						className: Ea.a.Wordmark,
						color: "inherit"
					})))
				},
				ja = n("./src/reddit/actions/cooldownTime.ts");

			function Sa(e) {
				return `${e}`.padStart(2, "0")
			}
			class _a {
				constructor(e) {
					this.startAt = 0, this.expireAt = 0, this.interval = 1e3, this.timeoutId = 0, this.tick = () => {
						this.startAt += this.interval;
						const e = Date.now() - this.startAt,
							t = this.getRemainingSeconds();
						if (this.callback(t), !t) return this.stop();
						const n = Math.max(0, this.interval - e);
						this.timeoutId = window.setTimeout(this.tick, n)
					}, this.callback = t => e(t || this.getRemainingSeconds())
				}
				stop() {
					window.clearTimeout(this.timeoutId), this.timeoutId = 0
				}
				start(e) {
					this.stop(), this.startAt = Date.now(), this.expireAt = e, this.callback(), this.timeoutId = window.setTimeout(this.tick, this.interval)
				}
				getRemainingSeconds() {
					return Math.max(0, Math.round((this.expireAt - Date.now()) / this.interval))
				}
			}
			var ka = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				wa = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Na = n.n(wa);
			const Ma = Object(f.c)({
				isEmbedSubredditPage: ka.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: xt.b
			});
			class Ia extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Sa(n)}` : `${n}:${Sa(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new _a(this.drawTimer), this.state = {
						countdown: null
					}
				}
				componentDidMount() {
					this.updateTimer()
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				componentDidUpdate(e) {
					let {
						currentPage: t,
						expiresAt: n
					} = e;
					this.props.currentPage === t && this.props.expiresAt === n || this.updateTimer()
				}
				updateTimer() {
					const {
						expiresAt: e
					} = this.props, t = e <= Date.now();
					e && !t ? this.timer.start(e) : this.props.fetchCooldownTimer()
				}
				render() {
					const {
						countdown: e
					} = this.state, {
						isRequestPending: t,
						isEmbedSubredditPage: n
					} = this.props;
					return t && !n ? null : !e || n ? m.a.createElement(Ps.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Na.a.timer
					}, r.fbt._("{Time remaining}", [r.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Ta = Object(p.b)(Ma, e => ({
					fetchCooldownTimer: () => e(Object(ja.e)())
				}))(Ia),
				Aa = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ra = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				La = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Da = n("./src/reddit/hooks/useTracking.ts"),
				Fa = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var Ua = e => m.a.createElement("svg", {
				className: e.className,
				id: "flat",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				fill: "#ff4500"
			}, m.a.createElement("path", {
				fill: "inherit",
				d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
			}));
			const Ba = e => {
				return Object(Yo.c)(e, {
					experimentEligibilitySelector: Yo.a,
					experimentName: Mt.He
				}) === Mt.od
			};
			var Ga = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				qa = n.n(Ga),
				Ha = m.a.memo((function(e) {
					const t = Object(Da.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ot.n)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ot.n)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Ms.a)(Ns.c[Ns.b.Rpan])), t(e => ({
								...Object(ot.n)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Ra.b)())
						}, [t]),
						c = Object(p.e)(at.P),
						l = Object(p.e)(hs.a),
						d = Object(p.e)(Ba),
						b = Object(p.e)(ka.a),
						h = Object(p.e)(ka.b),
						g = Object(La.a)(),
						f = Object(La.a)(),
						O = Object(La.a)(),
						C = Object(La.a)(),
						x = Object(La.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(qa.a.container, e.className)
					}, m.a.createElement("div", {
						className: qa.a.row
					}, m.a.createElement(Xn.a, {
						className: qa.a.icon,
						innerRef: g.target.ref,
						to: c ? Ns.c[Ns.b.Popular] : Ns.c[Ns.b.Home],
						onClick: s,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(es.a, {
						name: "popular"
					})), m.a.createElement(Aa.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, r.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(Xn.a, {
						className: qa.a.icon,
						innerRef: f.target.ref,
						to: Ns.c[Ns.b.All],
						onClick: o,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(es.a, {
						name: "all"
					})), m.a.createElement(Aa.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, r.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(Xn.a, {
						className: qa.a.icon,
						innerRef: O.target.ref,
						to: Ns.c[Ns.b.Rpan],
						onClick: a,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(es.a, {
						name: "video_live"
					})), m.a.createElement(Aa.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, r.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(Xn.a, {
						className: qa.a.icon,
						innerRef: C.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: C.show,
						onMouseLeave: C.hide
					}, m.a.createElement(Ua, {
						className: qa.a.psBattlesIcon
					})), m.a.createElement(Aa.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, r.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(Xn.a, {
						className: Object(v.a)(qa.a.icon, qa.a.hotPotatoLink),
						innerRef: x.target.ref,
						to: `/r/${h}`,
						onMouseEnter: x.show,
						onMouseLeave: x.hide,
						onClick: i
					}, m.a.createElement(Fa.a, {
						className: qa.a.hotPotatoIcon
					}), m.a.createElement(Ta, null)), m.a.createElement(Aa.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, r.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					})))))
				})),
				Wa = n("./src/reddit/actions/tooltip.ts"),
				Va = n("./src/lib/combineRefs/index.tsx"),
				Qa = n("./src/lib/hooks/useOnClickOutside.ts"),
				za = n("./src/lib/hooks/useTooltip.ts"),
				Ka = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Ja = n.n(Ka);

			function Ya() {
				return (Ya = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Xa = I.a.button("Button", Ja.a),
				Za = I.a.div("Container", Ja.a);

			function $a(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(Xa, Ya({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Za, {
					className: Object(v.a)({
						[Ja.a.isOpen]: n
					})
				}, t))
			}
			var ei = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				ti = n.n(ei);
			var ni = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ps.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(es.a, {
					name: "notification",
					className: ti.a.icon2020
				})),
				si = n("./src/lib/getParsedUserAgent/index.ts"),
				ri = n("./src/reddit/components/InboxBanner/index.m.less"),
				oi = n.n(ri);
			var ai = Object(Re.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(si.b)(navigator.userAgent);
					return m.a.createElement(De.e, null, m.a.createElement(De.i, {
						className: oi.a.modalHeader
					}, m.a.createElement(De.q, {
						className: oi.a.modalTitle
					}, r.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Ze.t, {
						onClick: t,
						Icon: Object(es.b)("close_fill"),
						size: Ze.d.XXS,
						priority: Ze.c.Plain,
						className: oi.a.modalCloseIcon
					})), m.a.createElement(De.l, null, m.a.createElement("ul", {
						className: oi.a.modalList
					}, m.a.createElement("li", {
						className: oi.a.modalListItem
					}, m.a.createElement("span", null, "1"), r.fbt._("Click on {lockIcon} in your browser address bar", [r.fbt._param("lockIcon", m.a.createElement(es.a, {
						name: "lock_fill",
						className: oi.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: oi.a.modalListItem
					}, m.a.createElement("span", null, "2"), r.fbt._("Select {lockIcon} site settings", [r.fbt._param("lockIcon", m.a.createElement(es.a, {
						name: "settings_fill",
						className: oi.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: oi.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), r.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [r.fbt._param("lockIcon", m.a.createElement(es.a, {
						name: "notification_fill",
						className: oi.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(De.g, null, m.a.createElement(Ze.t, {
						text: r.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				ii = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				ci = n.n(ii);

			function li() {
				return (li = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var di = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, r] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, r(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), r(!1)
						}
					}, [t]), t ? m.a.createElement("div", li({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(ci.a.tooltip, {
							[ci.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				ui = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				mi = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				pi = n("./node_modules/icepick/icepick.js");
			const bi = Object(pi.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var hi = n("./src/reddit/selectors/activeModal.ts"),
				gi = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				fi = n.n(gi);
			const vi = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Oi = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(La.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(za.a)(e);
								return Object(pi.updateIn)(t, ["modifiers"], e => Object(pi.push)(e, bi))
							}, [e]);
							return Object(za.b)(t)
						}(),
						o = Object(za.b)(vi),
						[a, i] = Object(mi.a)(e.userId),
						c = Object(p.e)(Object(hi.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							s.hide(), n.hide(), a || i()
						}, [s, n, i, a]);
					Object(Qa.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(Va.a)(n.target.ref, s.target.ref, o.target.ref)
					}, m.a.createElement($a, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: fi.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? l() : s.show(), e.sendNavClickInbox()
						},
						isOpen: s.visible
					}, m.a.createElement(ni, {
						unreadCount: e.unreadCount
					})), !s.visible && !o.visible && m.a.createElement(Aa.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, r.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(di, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(ui.a, {
						isOpen: s.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(ai, {
						onClose: () => {
							t(Object(Se.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Ci = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				xi = n("./src/reddit/actions/snoovatarModal.ts"),
				yi = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ei = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Pi = n("./src/lib/initializeClient/installReducer.ts"),
				ji = n("./src/lib/safeJSONParse/index.ts"),
				Si = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Pi.a)({
				features: {
					avatar: Si.a
				}
			});
			const _i = e => 864e5 * e,
				ki = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				wi = e => {
					const t = Object(xt.q)(e);
					return Boolean((null == t ? void 0 : t[Mo.w]) && Object(ji.a)(t[Mo.w]))
				},
				Ni = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(at.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Mi(e, t) && n === r
				},
				Mi = (e, t) => {
					const n = Object(at.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > _i(t)
				};
			var Ii = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Ti = n.n(Ii);
			const {
				fbt: Ai
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ri(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(jt.x)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(jt.ib)(s)
				}
			}
			var Li = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(p.e)(ki),
						s = Object(p.d)(),
						r = Object(Da.a)();
					Object(u.useEffect)(() => {
						r(Object(yi.p)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Ci.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Ri(n)
					}, [n]);
					return m.a.createElement(Ze.k, {
						onClick: () => {
							r(Object(yi.d)()), Ri(n, "click"), s(Object(xi.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Ti.a.ctaContainer
					}, m.a.createElement("img", {
						className: Ti.a.quickCreateGiftAnimation,
						src: `${B.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Ai._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ei.a, {
						className: Object(v.a)(Ti.a.sparkle, Ti.a.sparkle1)
					}), m.a.createElement(Ei.a, {
						className: Object(v.a)(Ti.a.sparkle, Ti.a.sparkle2)
					}), m.a.createElement(Ei.a, {
						className: Object(v.a)(Ti.a.sparkle, Ti.a.sparkle3)
					})), Ai._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Di = n("./src/reddit/selectors/avatarMarketing.ts"),
				Fi = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Ui = n.n(Fi);
			const {
				fbt: Bi
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Gi = () => {
					const e = Object(p.d)(),
						t = Object(Da.a)(),
						n = Object(p.e)(Di.b);
					Object(u.useEffect)(() => {
						n || e(Object(Ci.a)())
					}, [n, e]);
					return m.a.createElement(Ze.a, {
						onClick: () => {
							e(Object(xi.b)({
								clickSource: "nav"
							})), t(yi.c)
						},
						className: Ui.a.ctaContainer
					}, m.a.createElement(Ei.a, {
						className: Object(v.a)(Ui.a.sparkle, Ui.a.sparkle1)
					}), m.a.createElement(Ei.a, {
						className: Object(v.a)(Ui.a.sparkle, Ui.a.sparkle2)
					}), m.a.createElement(Ei.a, {
						className: Object(v.a)(Ui.a.sparkle, Ui.a.sparkle3)
					}), Bi._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				qi = n("./src/lib/matchRoute/index.ts"),
				Hi = n("./src/chat/helpers/dom.ts"),
				Wi = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Vi = n("./src/reddit/actions/changeUsername.ts"),
				Qi = n("./src/reddit/actions/chat/toggle.ts"),
				zi = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Ki = n("./src/reddit/actions/postCreation/general.ts"),
				Ji = n("./src/reddit/actions/preferences.ts"),
				Yi = n("./src/reddit/actions/users.ts"),
				Xi = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Zi = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				$i = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var ec = Object(_e.a)({
					getComponent: () => Object(Me.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				tc = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				nc = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				sc = n("./src/reddit/icons/svgs/Close/index.tsx"),
				rc = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				oc = n.n(rc);
			class ac extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(nc.e)(nc.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(nc.c)(nc.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(nc.e)(nc.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					ac.shouldSendViewEvent && (ac.shouldSendViewEvent = !1, this.props.sendEvent(Object(nc.g)(nc.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: oc.a.container
					}, m.a.createElement("div", {
						className: oc.a.topLine
					}), m.a.createElement("button", {
						className: oc.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(sc.a, {
						className: oc.a.closeIcon
					})), m.a.createElement("h5", {
						className: oc.a.title
					}, r.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: oc.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: oc.a.description
					}, r.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: oc.a.buttonWrapper
					}, m.a.createElement(Ze.o, {
						className: oc.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, r.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ze.l, {
						className: Object(v.a)(oc.a.commonBtn, oc.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, r.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			ac.shouldSendViewEvent = !0;
			const ic = Object(tc.a)(ac, [Or.a.Click, Or.a.Keydown, Or.a.Resize]);
			var cc = Object(A.c)(ic),
				lc = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var dc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ps.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(es.a, {
					name: "chat",
					className: ti.a.icon2020
				})),
				uc = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				mc = n.n(uc);
			const {
				fbt: pc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var bc = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: mc.a.container
					}, m.a.createElement("p", {
						className: mc.a.title
					}, pc._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: mc.a.subtitle
					}, pc._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: mc.a.description
					}, pc._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(Ze.o, {
						className: mc.a.dismissBtn,
						onClick: t
					}, pc._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				hc = n("./node_modules/lodash/noop.js"),
				gc = n.n(hc),
				fc = n("./src/lib/prettyPrintNumber/index.ts"),
				vc = n("./src/realtime/GQLSubscription/async.tsx"),
				Oc = n("./src/reddit/actions/alpha.ts"),
				Cc = n("./src/reddit/actions/modMode.ts"),
				xc = n("./src/reddit/actions/profile/index.ts"),
				yc = n("./src/reddit/constants/elementClassNames.ts"),
				Ec = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Pc = n("./src/reddit/helpers/karma.ts"),
				jc = n("./src/reddit/hooks/useWindowEvent.ts"),
				Sc = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				_c = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				kc = n("./src/reddit/layout/row/InlineButton/index.tsx");
			const wc = e => Object(Yo.c)(e, {
				experimentName: Mt.Af,
				experimentEligibilitySelector: Yo.a
			}) === Mt.od;
			var Nc = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Mc = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ic = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Tc = n("./src/reddit/selectors/modModeEnabled.ts"),
				Ac = n("./src/reddit/selectors/seo/index.ts"),
				Rc = n("./src/reddit/selectors/tooltip.ts"),
				Lc = n("./src/higherOrderComponents/asTooltip.tsx"),
				Dc = n("./src/lib/constants/icons.ts"),
				Fc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Uc = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Bc = n("./src/reddit/selectors/meta.ts"),
				Gc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				qc = n.n(Gc);
			const Hc = (e, t) => e && m.a.createElement("div", {
				className: qc.a.marketingBadge
			}, m.a.createElement(Fc.a, {
				className: qc.a.marketingAsset,
				headshot: e
			}), r.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ei.a, {
				className: Object(v.a)(qc.a.sparkle, qc.a.sparkle1)
			}), m.a.createElement(Ei.a, {
				className: Object(v.a)(qc.a.sparkle, qc.a.sparkle2)
			}), m.a.createElement(Ei.a, {
				className: Object(v.a)(qc.a.sparkle, qc.a.sparkle3)
			}), m.a.createElement(Ei.a, {
				className: Object(v.a)(qc.a.sparkle, qc.a.sparkle4)
			})));
			var Wc = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var s;
					const o = Object(p.d)(),
						a = Object(Da.a)(),
						i = Object(It.eb)(),
						c = Object(p.e)(e => e.user.account),
						l = Object(p.e)(ss.c),
						d = Object(p.e)(Di.b),
						u = Object(p.e)(Di.a),
						b = () => o(Object(xi.b)({
							clickSource: "nav"
						})),
						h = Object(p.e)(Bc.i).startsWith("en");
					if ((null === (s = null == i ? void 0 : i.meta) || void 0 === s ? void 0 : s.name) === O.Nb.AVATAR) return null;
					d || o(Object(Ci.a)()), u && a(yi.n);
					const g = c && c.snoovatarFullBodyAsset ? r.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : r.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						f = () => {
							b(), u && a(yi.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, g, h && Hc(u, l));
						return m.a.createElement(Tr, {
							onClick: f,
							title: e,
							titleClassName: qc.a.avatarLinkBody
						})
					}
					const v = Object(Uc.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? Al("avatar_style") : Al("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${qc.a.avatarLinkBody} ${r.className}`
					}, e, s && Hc(t, n)))(g, u, l, h));
					return m.a.createElement(v, {
						onClick: b
					})
				},
				Vc = n("./src/reddit/helpers/trackers/user.ts");
			var Qc = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(v.a)(jr.a.heading, _r.a.category)
					}, m.a.createElement("span", {
						className: jr.a.headingContent
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, s), m.a.createElement("span", {
						className: jr.a.title
					}, t))), m.a.createElement("div", {
						className: jr.a.contentContainer
					}, n))
				},
				zc = n("./src/reddit/helpers/trackers/modTools.ts");
			const Kc = () => {
					const e = Object(p.d)(),
						t = Object(Da.a)(),
						n = Object(p.e)(at.cb);
					return m.a.createElement(Lr, {
						isEnabled: n,
						onClick: () => {
							t(Object(Vc.g)(n)), (t => e(Object(Ji.z)(t)))(!n)
						},
						title: r.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Jc = () => {
					const e = Object(p.d)(),
						t = Object(Da.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Tc.a);
					return n && n.isMod ? m.a.createElement(Lr, {
						isEnabled: s,
						onClick: () => {
							t(Object(zc.i)(!s)), (() => e(Object(Cc.b)()))()
						},
						title: r.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var Yc = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				Xc = n.n(Yc);
			const Zc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(at.k),
						s = Object(p.e)(at.U);
					return n ? m.a.createElement(Qc, {
						icon: m.a.createElement(es.a, {
							name: "profile"
						}),
						title: r.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Lr, {
						title: r.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(Vc.h)(!s)), (t => e(Object(Ji.I)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(Ar, {
						title: r.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Fr.c)("profile"))
					}), m.a.createElement(Wc, {
						onClick: () => e(Object(Wa.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Ar, {
						title: r.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Fr.c)("settings"))
					})) : null
				},
				$c = () => {
					return Object(p.e)(at.k) ? m.a.createElement(Qc, {
						title: r.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(es.a, {
							name: "views"
						})
					}, m.a.createElement(Jc, null), m.a.createElement(Kc, null)) : null
				},
				el = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(p.e)(at.k) ? null : m.a.createElement(wr, {
						icon: m.a.createElement(es.a, {
							name: "settings"
						}),
						title: r.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Kc, null))
				},
				tl = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s,
						useClassicUserMenuStyles: o = !1
					} = e;
					return m.a.createElement(wr, {
						buttonClassName: o ? Xc.a.button : "",
						headingClassName: o ? Xc.a.headingContent : "",
						icon: m.a.createElement(es.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: o,
						onClick: (e, t) => {
							s(Object(Fr.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: r.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Ar, {
						className: o ? Xc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => s(Object(Fr.c)("user_agreement")),
						title: r.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Ar, {
						className: o ? Xc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => s(Object(Fr.c)("privacy_policy")),
						title: r.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Ar, {
						className: o ? Xc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => s(Object(Fr.c)("content_policy")),
						title: r.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Ar, {
						className: o ? Xc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => s(Object(Fr.c)("mod_policy")),
						title: r.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var nl = n("./src/reddit/components/HiddenDiv.tsx"),
				sl = n("./src/reddit/controls/Dropdown/index.tsx"),
				rl = n("./src/reddit/helpers/trackers/authControls.ts"),
				ol = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const al = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: jr.a.headingContent
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(jr.a.title, s)
					}, n))
				},
				il = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(jr.a.button, t),
						onClick: s
					}, m.a.createElement(al, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				cl = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Er, {
						className: Object(v.a)(jr.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(al, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			var ll = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts");
			var dl = e => [{
				noun: "ios",
				rel: "nofollow",
				title: () => r.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => r.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "rereddit",
				title: () => r.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Object(ll.a)()
			}, {
				isHidden: !e,
				noun: "best_communities",
				title: () => r.fbt._("Best Communities", null, {
					hk: "3oZdW7"
				}),
				url: "https://www.reddit.com/best/communities/1/"
			}, {
				noun: "communities",
				title: () => r.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => r.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "blog",
				title: () => r.fbt._("Blog", null, {
					hk: "2PoxW5"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => r.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => r.fbt._("Press", null, {
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var ul = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: s,
						onClick: o,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(wr, {
						icon: m.a.createElement(es.a, {
							name: "info"
						}),
						title: r.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: s,
						onClick: (e, t) => {
							a(Object(Fr.c)(t ? "more_chevron" : "more_menu")), "function" == typeof o && o(e)
						}
					}, dl(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: o,
							url: a
						} = e;
						return !n && m.a.createElement(Ar, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Fr.c)(s))
							},
							rel: r,
							title: o()
						})
					})(e, a)), n ? m.a.createElement(Ar, {
						href: "https://old.reddit.com" + i,
						title: r.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Fr.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: ot.Y(e),
								subreddit: ot.gb(e)
							}))
						}
					}) : null)
				},
				ml = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				pl = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				bl = n.n(pl);
			var hl = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: s,
					showAll: o
				}, a] = Object(u.useState)({
					links: Object(ml.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: s,
							showAll: !1
						})
					}, [s, t]), 0 === s.length) return null;
				const i = o ? s : s.slice(0, 3),
					c = () => a({
						links: s,
						showAll: !o
					});
				return m.a.createElement(wr, {
					"aria-hidden": !0,
					icon: m.a.createElement(es.a, {
						name: "history"
					}),
					isOpen: t,
					title: r.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Rr, {
						className: bl.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : bl.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: bl.a.title
					})
				}), s.length > 3 && (e => m.a.createElement("span", {
					className: jr.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(v.a)(jr.a.headingContent, bl.a.headingContent)
				}, m.a.createElement("span", {
					className: jr.a.title
				}, e))))(o ? r.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : r.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function gl() {
				return (gl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fl = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				vl = e => {
					const t = e && e.coins || 0;
					return r.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [r.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Ol;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Ol || (Ol = {}));
			var Cl = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: s,
						isNsfwBlocking: o,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(Ol.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(o)
					}, x = () => m.a.createElement(cl, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "campaign"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(Vc.b)()),
						title: r.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: fl
					}, m.a.createElement(Zc, null), m.a.createElement($c, null), m.a.createElement(() => d ? m.a.createElement(il, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(ol.a)()), i()
						},
						title: r.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(x, null), m.a.createElement(() => m.a.createElement(cl, {
						className: _r.a.coinsLink,
						icon: m.a.createElement(es.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, r.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: _r.a.meta
						}, vl(b))),
						onClick: () => {
							Object(Wr.d)(Wr.a.GoldPayment, !0), e.sendEvent(Object(Vc.d)())
						},
						titleClassName: _r.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(cl, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Wr.d)(Wr.a.GoldPayment, !0), e.sendEvent(Object(Vc.f)())
						},
						title: r.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(cl, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "powerup"
						}),
						href: Ts.a,
						onClick: () => {
							Object(Wr.d)(Wr.a.GoldPayment, !0), e.sendEvent(Object(Vc.e)())
						},
						title: r.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(cl, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "live"
						}),
						href: Rs.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: r.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(hl, v(Ol.RecentCommunitiesMenu)), m.a.createElement(qr, gl({}, v(Ol.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(el, v(Ol.Settings)), !O && m.a.createElement(x, null), m.a.createElement(() => m.a.createElement(cl, {
						className: _r.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(es.a, {
							name: "help"
						}),
						title: r.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(ul, gl({}, v(Ol.MoreMenu), {
						isCommunityLinkVisible: s,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(tl, gl({}, v(Ol.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(il, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: r.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(il, {
						className: _r.a.button,
						icon: m.a.createElement(es.a, {
							name: "profile"
						}),
						onClick: C,
						title: r.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: jr.a.copyrightContainer
					}, m.a.createElement("span", {
						className: jr.a.copyrightText
					}, r.fbt._("© {year} Reddit, Inc. All rights reserved", [r.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				xl = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				yl = n.n(xl);

			function El() {
				return (El = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pl = I.a.wrapped(sl.a, "Dropdown", yl.a),
				jl = Object(Lc.a)(Pl),
				Sl = e => m.a.createElement(Uc.a, {
					className: Object(v.a)(yl.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: yl.a.buttonText
				}, e.displayText), m.a.createElement(Nr.a, {
					className: yl.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				_l = e => t => m.a.createElement(es.a, El({
					name: e
				}, t)),
				kl = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: s
					} = e;
					return m.a.createElement(Sl, {
						displayText: r.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(Vc.g)(t)), s(!t)
						}
					}, m.a.createElement(es.a, {
						name: "night",
						className: yl.a.nightIcon
					}))
				},
				wl = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Uc.b)(_l(Dc.a.help), r.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(Fr.c)("help_center"))
					})
				},
				Nl = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Uc.b)(_l(Dc.a.campaign), r.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(Vc.b)())
					})
				},
				Ml = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: s
					} = e;
					const o = Object(Uc.c)(_l(Dc.a.logout), r.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(o, {
						href: "#",
						onClick: e => {
							Object(j.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), s(Object(rl.b)()))
						}
					})
				};
			var Il = Object(A.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: o,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(p.e)(bs.a), [d, b] = Object(u.useState)(!1), h = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), b(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					b(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					o()
				}, [c]), n ? m.a.createElement(nl.a, null, m.a.createElement(Cl, e)) : l ? m.a.createElement(jl, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(kl, {
					nightmode: r,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(wl, {
					sendEvent: a
				}), m.a.createElement(tl, {
					isOpen: d,
					onClick: h,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Nl, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: yl.a.divider
				}), m.a.createElement(Ml, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(jl, {
					className: yl.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Cl, e))
			});

			function Tl() {
				return (Tl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Al = e => t => m.a.createElement(es.a, Tl({
					name: e
				}, t)),
				Rl = Object(p.b)(() => Object(f.c)({
					isCrawler: e => !!Object(Ac.a)(e),
					isModModeEnabled: Tc.a,
					isNsfwBlocking: e => {
						const t = Object(Mc.d)(e),
							n = Object(Mc.e)(e);
						return t || n
					},
					isOpen: Object(Rc.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Ic.d,
					shouldShowCreateCommunityItem: at.ob,
					navbarLikeMweb: Nc.a,
					nightmode: at.cb,
					showPresence: at.U,
					url: xt.u,
					isCommunityLinkVisible: wc
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Wa.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Ji.z)(t)),
					toggleShowPresence: t => e(Object(Ji.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Oc.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: B.a.cookieDomain
						}), e(Object(Oc.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(xc.f)(Object(nt.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && e(Object(Se.k)({
							actionSource: Se.a.NsfwBlockingModal
						})), e(Object(Es.i)())
					},
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ec.a)())), e(Object(Yi.q)())
					},
					toggleModMode: () => e(Object(Cc.b)()),
					openCommunityCreationModal: () => e(Object(Se.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Ll = Object(It.u)({
					pageLayer: e => e
				})(Rl(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: o
					} = e, a = Object(p.e)(Ic.b), [i, c] = Object(u.useState)(!1), l = o && o.id;
					Object(u.useEffect)(() => {
						n()
					}, [l]);
					const d = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						b = Object(u.useCallback)(() => {
							c("visible" === document.visibilityState)
						}, []);
					return Object(jc.a)("visibilitychange", b), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(yl.a.container, yc.e)
					}, s && i && a && m.a.createElement(vc.a, {
						variables: d,
						onData: gc.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(kc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, yl.a.inlineButton, {
							[yl.a.dropdownOpen]: e.isOpen,
							[yl.a.isLoggedOut]: !o,
							[yl.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: yl.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(v.a)(yl.a.accountWrapper, yl.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(cs.a, {
						className: Object(v.a)(yl.a.imgIcon, {
							[yl.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: yl.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: yl.a.accountDetails
					}, m.a.createElement("span", {
						className: yl.a.username
					}, n.displayText, n.isGold && m.a.createElement(_c.a, {
						className: yl.a.premiumFontIcon,
						title: r.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: yl.a.accountKarma
					}, m.a.createElement(es.a, {
						name: "karma",
						isFilled: !0,
						className: yl.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Pc.a)(e),
							n = Object(fc.b)(t);
						return r.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [r.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: yl.a.accountCoins
					}, m.a.createElement(Sc.a, {
						className: yl.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(fc.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(yl.a.accountWrapper, yl.a.isLoggedOut)
					}, m.a.createElement(es.a, {
						name: "user",
						className: yl.a.defaultProfileIcon
					})))(e.user), m.a.createElement(es.a, {
						className: yl.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(lo.a, null, r.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Il, e))
				})),
				Dl = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Fl = n("./src/reddit/components/Settings/modalIds.ts"),
				Ul = n("./src/reddit/helpers/trackers/inbox.ts"),
				Bl = n("./src/reddit/routes/index.ts"),
				Gl = n("./src/reddit/selectors/appBadges.ts"),
				ql = n("./src/reddit/selectors/emailVerification.ts"),
				Hl = n("./src/reddit/selectors/sso.ts"),
				Wl = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Vl = n.n(Wl);
			var Ql = Object(A.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const s = Object(p.e)(at.cb),
					o = Object(La.a)(),
					a = r.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(v.a)(t, Vl.a.container, {
						[Vl.a.isNightMode]: s
					})
				}, m.a.createElement("a", {
					className: Vl.a.link,
					ref: o.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(Vc.c)())
					},
					onMouseEnter: o.show,
					onMouseLeave: o.hide,
					"aria-label": a
				}, m.a.createElement(es.a, {
					className: Vl.a.icon,
					name: "campaign"
				}))), m.a.createElement(Aa.a, {
					arrowProps: o.arrowProps,
					popperProps: o.popperProps,
					visible: o.visible
				}, a))
			});
			const zl = "change-username-tooltip-id",
				Kl = "email-verification-tooltip-id",
				Jl = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const s = Object(La.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ti.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement($a, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Dl.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Ps.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(es.a, {
						className: ti.a.icon2020,
						name: "mod"
					})), m.a.createElement(Aa.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, r.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Dl.b, {
						className: ti.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Yl = m.a.memo((function(e) {
					const t = Object(La.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ti.a.iconWrapper,
						onMouseEnter: () => {
							t.show()
						},
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: ti.a.link,
						href: `${B.a.redditUrl}/chat`,
						onClick: Object(Hi.a)(e.onClickChat)
					}, m.a.createElement(dc, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Aa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Xl = m.a.memo((function(e) {
					const t = Object(La.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ti.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: ti.a.link,
						"aria-label": r.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(es.a, {
						className: ti.a.icon2020,
						name: "add"
					}))), m.a.createElement(Aa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Zl = Object(It.u)({
					pageLayer: e => e
				}),
				$l = Object(f.c)({
					activeDropdownId: Rc.a,
					appBadges: Gl.b,
					chatDirectMessagesCount: Gl.e,
					email: at.n,
					hasUnreadChatMessages: Gl.f,
					inboxBadgeCount: Gl.g,
					isAvatarQuickCreateEnabled: e => Object(Ls.c)(e) && (e => {
						if (wi(e)) return !0;
						const t = ki(e),
							n = (new Date).getTime(),
							s = Object(jt.x)();
						if (!(null == t ? void 0 : t.active) || !Ni(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + _i(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isAvatarStorefrontEnabled: e => Object(Ls.d)(e) && !!Object(Di.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: rt.k,
					isNameEditable: at.R,
					isResponsiveSettingsEnabled: At.a,
					shouldOpenEmailVerificationTooltip: ql.a,
					shouldShowChangeUsernameModals: Hl.c,
					unreadNotifications: at.xb
				}),
				ed = Object(p.b)($l, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Vi.d)()),
					closeEmailVerificationTooltip: () => e(Object(zi.b)()),
					showEmailVerficiationTooltip: () => e(Object(zi.b)()),
					fetchAppBadges: () => e(Object(Wi.c)()),
					onChatClick: () => e(Object(Qi.f)()),
					onDismissCustomizeFlyout: () => e(Object(Ji.u)()),
					onOpenModerationDropdown: () => {
						e(Object(Wa.h)({
							tooltipId: Dl.a
						})), e(Object(Cr.q)())
					},
					onOpenUserDropdown: () => e(Object(Wa.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Se.h)(Fl.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Se.h)(Fl.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(zi.b)()), e(Object(Se.i)(Fl.a))
					},
					resendEmail: () => e(Object(Yi.x)(nc.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Ki.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(Vi.f)(n))
					}
				}));
			class td extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Ul.y)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Fr.c)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.props.sendEvent(Object(Vr.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(qi.a)(e.pathname, Bl.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Nb.POST_CREATION && n !== O.Nb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n
						} = this.props, s = n && Object(nt.e)(n) || "";
						return e ? m.a.createElement(Li, {
							avatarUrlParams: {
								avatarId: "random",
								username: s
							}
						}) : t ? m.a.createElement(Gi, null) : m.a.createElement(lc.a, null)
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), po()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: r,
						email: o,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: l,
						isEmailVerificationTooltipShowing: d,
						isModerator: p,
						isNameEditable: b,
						isResponsiveSettingsEnabled: h,
						onDismissCustomizeFlyout: g,
						onOpenUserDropdown: f,
						openChangeUsernameModal: O,
						openKeepUsernameModal: C,
						pageLayer: x,
						resendEmail: y,
						shouldOpenEmailVerificationTooltip: E,
						shouldShowChangeUsernameModals: P,
						toggleChangeEmailModal: j,
						unreadNotifications: S,
						user: _
					} = this.props, {
						googleOneTapIFrame: k
					} = this.state, w = !(!S || !S.hasUnreadModmail), N = _ && Object(nt.e)(_) || "", M = Object(v.a)({
						[ti.a["m-responsive"]]: h
					});
					return m.a.createElement(et.a, {
						id: Kl,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(et.a, {
						className: ti.a.headerLinks,
						id: zl
					}, p && m.a.createElement(Jl, {
						isModerateIconLit: w,
						moderationDropdownOpen: e === Dl.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: S
					}), _ && m.a.createElement(u.Fragment, null, m.a.createElement(Yl, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), m.a.createElement(Oi, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == x ? void 0 : x.url,
						userId: _.id,
						isLoggedIn: !!_,
						iconWrapper: ti.a.iconWrapper
					}), m.a.createElement(Xl, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(Ql, {
						className: ti.a.iconWrapper
					}), m.a.createElement("span", {
						className: ti.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(Ll, {
						className: ti.a.headerUserDropdown,
						googleOneTapIFrame: k,
						onClick: f,
						user: _,
						sendEventWithName: this.sendEventWithName
					}), l && m.a.createElement(bc, {
						onCloseFlyout: g
					}), m.a.createElement(cc, {
						closeTooltip: r,
						email: o,
						isOpen: E && d,
						resendEmail: y,
						toggleChangeEmailModal: j,
						tooltipId: Kl
					}), m.a.createElement(ec, {
						email: o,
						shouldOpenTooltip: E
					}), b && !h && m.a.createElement(u.Fragment, null, m.a.createElement($i.a, {
						closeTooltip: s,
						isOpen: c && !P,
						openChangeUsernameModal: O,
						openKeepUsernameModal: C,
						tooltipId: zl,
						username: N
					}), P && m.a.createElement(Zi.a, {
						isResponsiveSettingsEnabled: h,
						overlayClassName: M,
						username: N,
						withOverlay: !0
					}), m.a.createElement(Xi.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var nd = Object(A.c)(Zl(ed(td))),
				sd = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				rd = n("./src/reddit/components/Header/User/index.m.less"),
				od = n.n(rd);
			const {
				fbt: ad
			} = n("./node_modules/fbt/lib/FbtPublic.js"), id = Object(f.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(Mc.d)(e),
						n = Object(Mc.e)(e);
					return t || n
				},
				origin: Bc.j
			}), cd = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, od.a.row)
			}, !e.account && m.a.createElement(ld, e), m.a.createElement(nd, {
				className: Object(v.a)({
					[od.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), ld = e => {
				const t = Object(p.e)(Gl.g),
					n = Object(p.e)(at.Eb),
					s = Object(p.e)(sd.c),
					r = e.pageLayer,
					o = B.a.accountManagerOrigin,
					a = r ? r.url : "/",
					i = r && r.meta && r.meta.name === O.Nb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a),
					c = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Oi, {
					sendNavClickInbox: () => e.sendEvent(Object(Ul.y)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: od.a.iconWrapper
				}), m.a.createElement("div", {
					className: od.a.loggedOutRow
				}, m.a.createElement(Ql, {
					className: od.a.adSignupIconWrapper
				}), m.a.createElement(Ze.t, {
					kind: Ze.b.ExternalLink,
					priority: Ze.c.Secondary,
					redditStyle: !0,
					className: od.a.button,
					href: `${o}/login/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(c), e.sendEvent(Object(rl.a)("nav")))
					}
				}, ad._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ze.t, {
					kind: Ze.b.ExternalLink,
					priority: Ze.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(od.a.separator, od.a.button),
					href: `${o}/register/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(c), e.sendEvent(Object(rl.c)("nav")))
					}
				}, ad._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var dd = Object(It.u)()(Object(p.b)(id, e => ({
					onOpenLoginModal: t => {
						e(t ? Object(Se.k)({
							actionSource: Se.a.NsfwBlockingModal
						}) : Object(Se.k)({
							actionSource: Se.a.HeaderLogin
						})), e(Object(Es.i)())
					},
					onOpenRegisterModal: t => {
						e(t ? Object(Se.k)({
							actionSource: Se.a.NsfwBlockingModal
						}) : Object(Se.k)({
							actionSource: Se.a.HeaderSignup
						})), e(Object(Es.j)())
					},
					closeUserDropdown: () => e(Object(Wa.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(cd))),
				ud = n("./src/reddit/components/Header/index.m.less"),
				md = n.n(ud);

			function pd() {
				return (pd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const bd = I.a.header("HeaderDynamicStyles", md.a),
				hd = Object(f.c)({
					isLoggedIn: at.P,
					isLoggedOutOneFeed: bs.a,
					isNightMode: at.cb,
					isResponsiveSettingsEnabled: At.a,
					isPageResponsive: xa.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				gd = Object(It.u)({
					categoryName: It.c,
					pageLayer: e => e
				}),
				fd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: md.a.left
					}, m.a.createElement(lo.a, null, r.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(co.b, null), m.a.createElement(Xn.a, {
						"aria-label": r.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: md.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Oa.a, {
						className: Object(v.a)(md.a.snoo, {
							[md.a.snooExp]: t
						})
					}), m.a.createElement(Ca.a, {
						className: md.a.wordmark
					})), e.children)
				},
				vd = e => m.a.createElement("div", {
					className: md.a.right
				}, e.children, m.a.createElement(dd, null)),
				Od = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(md.a.layout, {
							[md.a.layoutContainer]: t
						})
					}, m.a.createElement(fd, pd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(io, null), m.a.createElement(va, {
						className: md.a.search
					})), m.a.createElement(vd, null, m.a.createElement(Ha, {
						className: md.a.quickLinks
					})))
				},
				Cd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(md.a.layout, {
							[md.a.layoutContainer]: t
						})
					}, m.a.createElement(fd, pd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(io, null), m.a.createElement("div", {
						className: md.a.searchContainer
					}, m.a.createElement(va, {
						className: md.a.search
					}))), m.a.createElement(vd, null))
				};
			var xd = gd(Object(p.b)(hd, e => ({
					onReloadFrontpage: () => e(Object(Qr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? Od : Cd, m.a.createElement(bd, {
						"data-redditstyle": !0,
						className: Object(v.a)(md.a.container, e.className, {
							[md.a.bladeIsOpen]: e.isBladeOpen,
							[md.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Pa, {
						className: md.a.MwebResponsiveHeader
					}))
				}))),
				yd = n("./src/reddit/components/LightboxHeader/index.tsx"),
				Ed = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Pd = (e, t) => {
					let n = `${B.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const jd = () => e => ({
					...ot.n(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Sd
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				_d = Object(f.c)({
					isLoggedIn: at.P,
					origin: Bc.j
				});
			class kd extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(j.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(jd()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(Ze.m, {
						className: e,
						href: Pd(R.a.Register, t),
						onClick: this.onClick
					}, Sd._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var wd = Object(p.b)(_d, e => ({
					openRegisterModal: () => {
						e(Object(Se.k)({
							actionSource: Se.a.IdCard,
							redirectUrl: Ns.c[Ns.b.Home]
						})), e(Object(Es.j)())
					}
				}))(Object(A.c)(kd)),
				Nd = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Md = n.n(Nd);
			const {
				fbt: Id
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Td = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(ir, {
						className: Md.a.createTitle
					}, Id._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: Md.a.createDesc
					}, Id._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(wd, {
						className: Md.a.createButton
					}))
				},
				Ad = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Rd = n.n(Ad);
			const {
				fbt: Ld
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dd = Object(f.c)({
				currentPage: vs,
				isLoggedOutOneFeed: bs.a
			}), Fd = Object(p.b)(Dd, e => ({
				onUnpinSubscriptions: () => e(Object(S.j)())
			})), Ud = Object(It.u)();
			var Bd = I.a.wrapped(Ud(Fd(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: Rd.a.title
				}, m.a.createElement(ir, {
					className: Rd.a.listHeader
				}, Ld._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: Rd.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(es.a, {
					name: "close",
					className: Rd.a.icon
				}))), m.a.createElement(no, {
					className: Object(v.a)({
						[Rd.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage
				}), e.isLoggedOutOneFeed && m.a.createElement(Td, {
					className: Rd.a.createAccountSection
				})))), "Component", Rd.a),
				Gd = n("./src/reddit/components/Survey/index.tsx"),
				qd = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Hd = n("./src/reddit/actions/toaster.ts");
			const Wd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Vd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ot.d(t),
						reason: "primary"
					}
				}),
				Qd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ot.d(t),
						reason: "secondary"
					}
				});
			var zd = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Kd = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Jd = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Yd = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Xd = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Zd = n("./src/reddit/models/Toast/index.ts"),
				$d = n("./src/reddit/selectors/structuredStyles.ts"),
				eu = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				tu = n.n(eu);

			function nu() {
				return (nu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const su = e => {
				const t = Mr.a;
				switch (e.kind) {
					case Zd.b.Error:
					case Zd.b.AuthError:
					case Zd.b.SuccessEndBroadcast:
						return t.warning;
					case Zd.b.SuccessCommunity:
						return t.op;
					case Zd.b.SuccessCommunityGreen:
					case Zd.b.SuccessMod:
					case Zd.b.SuccessUnlockComment:
						return t.approved;
					case Zd.b.SuccessLockComment:
						return t.reported;
					case Zd.b.EuCookiePolicy:
					case Zd.b.UappBanner:
					case Zd.b.Undo:
					default:
						return t.op
				}
			};
			class ru extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const ou = I.a.wrapped(ru, "PlainBread", tu.a);
			var au = e => m.a.createElement(ou, nu({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": su(e)
					}
				})),
				iu = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				cu = n.n(iu);
			const lu = I.a.span("Text", cu.a);
			var du = n("./src/reddit/components/Toaster/index.m.less"),
				uu = n.n(du);
			const {
				fbt: mu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pu = I.a.wrapped(Jd.a, "AuthErrorToastIcon", uu.a), bu = I.a.wrapped(Ze.l, "AuthErrorToastPrimaryButton", uu.a);
			class hu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(au, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(pu, null), m.a.createElement(lu, null, mu._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(bu, {
						type: "submit"
					}, mu._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var gu = hu,
				fu = n("./src/lib/cookieConsent/index.ts"),
				vu = n("./src/reddit/controls/Link/index.tsx"),
				Ou = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Cu = n.n(Ou);
			const {
				fbt: xu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), yu = I.a.div("Icon", Cu.a), Eu = () => m.a.createElement(yu, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Pu = I.a.wrapped(Ze.l, "PrimaryButton", Cu.a), ju = I.a.wrapped(au, "Bread", Cu.a);
			class Su extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(fu.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(fu.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(ju, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(Eu, null), m.a.createElement("section", {
						className: Cu.a.EuCookiePolicyBody
					}, m.a.createElement(lu, null, xu._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(vu.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, xu._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Cu.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Pu, {
						type: "submit"
					}, xu._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Pu, {
						type: "submit"
					}, xu._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var _u, ku = Su;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(_u || (_u = {}));
			var wu = n("./src/reddit/controls/Typography/index.tsx"),
				Nu = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Mu = n.n(Nu);

			function Iu() {
				return (Iu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Tu = I.a.div("Container", Mu.a),
				Au = I.a.img("SideImage", Mu.a),
				Ru = I.a.div("Main", Mu.a),
				Lu = I.a.div("SubTitle", Mu.a),
				Du = wu.a,
				Fu = I.a.wrapped(Ze.m, "PrimaryLinkButton", Mu.a),
				Uu = I.a.wrapped(sc.a, "CloseIcon", Mu.a);
			class Bu extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Vd(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Wd(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: o,
						title: a
					} = this.props;
					return m.a.createElement(Tu, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(Uu, {
						onClick: this.props.onClose
					}), m.a.createElement(Au, {
						srcSet: n
					}), m.a.createElement(Ru, null, m.a.createElement(Lu, null, o), m.a.createElement(wu.b, null, a), m.a.createElement(Du, null, e), m.a.createElement(Fu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, r.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Gu = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Es.j)())
				}))(Object(A.c)(Bu)),
				qu = `${Hu("subscribe-cap.png")} 1x,\n  ${Hu("subscribe-cap@2x.png")} 2x,`;

			function Hu(e) {
				return `${B.a.assetPath}/img/banner/${e}`
			}
			const Wu = 3;
			var Vu = n("./src/lib/permanentCookieOptions.ts");
			const Qu = e => `${e}:1527210000`;
			var zu = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Ku = n.n(zu);
			const {
				fbt: Ju
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Yu = I.a.div("Icon", Ku.a), Xu = () => m.a.createElement(Yu, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Zu = I.a.wrapped(Ze.l, "PrimaryButton", Ku.a), $u = I.a.wrapped(au, "Bread", Ku.a);
			class em extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Et.j, Qu(Wu), Object(Vu.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement($u, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Xu, null), m.a.createElement(lu, null, Ju._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Ju._param("=User Agreement", m.a.createElement(vu.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Ju._("User Agreement", null, {
						hk: "XS57W"
					}))), Ju._param("=Privacy Policy", m.a.createElement(vu.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ju._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Zu, {
						type: "submit"
					}, Ju._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var tm = em;

			function nm() {
				return (nm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const sm = [],
				rm = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				om = {
					opacity: .5,
					x: .5,
					y: 50
				},
				am = {
					opacity: Object(M.spring)(0),
					x: Object(M.spring)(.6),
					y: Object(M.spring)(80, rm)
				},
				im = I.a.wrapped(Jd.a, "SnooFacepalm", uu.a),
				cm = I.a.wrapped(Yd.a, "SnooHappy", uu.a),
				lm = I.a.wrapped(as.b, "SubredditIcon", uu.a),
				dm = I.a.img("CustomIcon", uu.a),
				um = I.a.div("Container", uu.a),
				mm = I.a.wrapped(sc.a, "Close", uu.a),
				pm = I.a.wrapped(zd.a, "LockIcon", uu.a),
				bm = I.a.wrapped(Xd.a, "UnlockIcon", uu.a),
				hm = I.a.wrapped(Kd.a, "RemoveIcon", uu.a),
				gm = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(mm, nm({
					className: "CloseIcon"
				}, e))),
				fm = I.a.wrapped(au, "Bread", uu.a),
				vm = Object(f.c)({
					subredditIcon: $d.b,
					toastSlices: e => e.toaster
				}),
				Om = Object(p.b)(vm, e => ({
					dismissToast: t => () => e(Object(Hd.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Hd.g)(n))
					}
				}));
			class Cm extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => xm(e, this.props.toastSlices), this.getWillEnterStyles = () => om, this.getWillLeaveStyles = () => am
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(M.TransitionMotion, {
						defaultStyles: sm,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(um, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Zd.b.Custom && void 0 !== t.customToastType) {
							const s = Em[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Zd.b.UappBanner) return m.a.createElement(tm, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Zd.b.EuCookiePolicy) return m.a.createElement(ku, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Wd("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Vd("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Qd("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Zd.b.AuthError) return m.a.createElement(gu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Zd.b.Modal ? Ze.l : Ze.r,
							r = t.kind === Zd.b.Modal ? Ze.o : Ze.r;
						return m.a.createElement(fm, {
							className: t.kind === Zd.b.Modal ? uu.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Wd(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: uu.a.ContentWrapper
						}, ym(t, this.props.subredditIcon), t.kind === Zd.b.SuccessLockComment && m.a.createElement(pm, null), t.kind === Zd.b.SuccessUnlockComment && m.a.createElement(bm, null), m.a.createElement(lu, null, t.text)), m.a.createElement("div", {
							className: uu.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Vd(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Qd(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(gm, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const xm = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(M.spring)(1),
							x: Object(M.spring)(1, rm),
							y: Object(M.spring)(0, rm)
						}
					}))
				},
				ym = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(dm, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Zd.b.Error:
							return m.a.createElement(im, null);
						case Zd.b.SuccessEndBroadcast:
							return m.a.createElement(hm, null);
						case Zd.b.SuccessAward:
						case Zd.b.SuccessCommunity:
						case Zd.b.SuccessCommunityGreen:
							return m.a.createElement(cm, null);
						case Zd.b.SuccessMod:
							return m.a.createElement(lm, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Em = {
					[Zd.a.subscribeCap]: e => m.a.createElement(Gu, Iu({
						name: _u.LoggedOutMaxSubscriptions,
						sideImage: qu,
						title: r.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: r.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Pm = Om(Object(A.c)(Cm)),
				jm = n("./src/reddit/featureFlags/profileCollections.ts"),
				Sm = n("./src/reddit/helpers/trackers/banners.ts"),
				_m = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				km = n.n(_m);
			var wm = I.a.div("Wrapper", km.a),
				Nm = n("./src/reddit/components/AlertBanner/index.m.less"),
				Mm = n.n(Nm);
			const {
				fbt: Im
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Tm = () => m.a.createElement(wm, {
				className: Object(v.a)(Mm.a.wrapper, Mm.a.suspended)
			}, m.a.createElement("span", null, Im._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Im._("Click {=here} for more info.", [Im._param("=here", m.a.createElement("a", {
				className: Mm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Im._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Am = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(wm, {
					className: Object(v.a)(Mm.a.wrapper, Mm.a.suspended)
				}, m.a.createElement("span", null, Im._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Im._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Im._("Click {=here} for more info.", [Im._param("=here", m.a.createElement("a", {
					className: Mm.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Im._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Rm = () => m.a.createElement(wm, {
				className: Object(v.a)(Mm.a.wrapper, Mm.a.fpr)
			}, m.a.createElement("span", null, Im._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Mm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Im._("Learn more", null, {
				hk: "1OTc8q"
			}))), Lm = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(wm, {
					className: Object(v.a)(Mm.a.wrapper, Mm.a.deprecated)
				}, m.a.createElement("span", null, Im._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Im._param("update your browser", m.a.createElement(Dm, {
					link: t
				}, Im._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Im._("If you do not update your browser, we suggest you visit {old reddit} .", [Im._param("old reddit", m.a.createElement("a", {
					className: Mm.a.underlineLink,
					href: B.a.oldRedditUrl,
					onClick: n
				}, Im._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Dm = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Mm.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class Fm extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Sm.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Sm.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Lm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Rm, null) : n ? s || null != s ? m.a.createElement(Am, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Tm, null) : null
				}
			}
			var Um = Object(A.c)(Fm),
				Bm = n("./src/reddit/components/AlertBanner/heights.ts");
			var Gm = n("./src/reddit/components/OfflineBanner/index.m.less"),
				qm = n.n(Gm);
			const {
				fbt: Hm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Wm = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, qm.a.banner, {
							[qm.a.online]: e.online,
							[qm.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: qm.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: qm.a.title
					}, e.online ? Hm._("Found the internet!", null, {
						hk: "fMghd"
					}) : Hm._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(es.a, {
						className: qm.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Vm = n("./src/reddit/components/Upsell/async.ts"),
				Qm = n("./src/reddit/constants/componentSizes.ts"),
				zm = n("./src/reddit/constants/elementIds.ts"),
				Km = n("./src/reddit/constants/history.ts"),
				Jm = n("./src/reddit/constants/posts.ts"),
				Ym = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Xm = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Zm = n("./src/reddit/constants/promo.ts"),
				$m = n("./src/reddit/contexts/Promo/index.ts");

			function ep(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Zm.a.Completed:
						return s === Zm.a.Shown ? new Map(e.set(n, Zm.a.Completed)) : e;
					case Zm.a.Dismissed:
						return s === Zm.a.Shown ? new Map(e.set(n, Zm.a.Dismissed)) : e;
					case Zm.a.Shown:
						return s ? e : new Map(e.set(n, Zm.a.Shown));
					default:
						throw new Error
				}
			}
			var tp = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(ep, new Map), r = u.useCallback(e => s({
						type: Zm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: Zm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Zm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: o,
						promos: n,
						showPromo: a
					}), [r, o, n, a]);
					return u.createElement($m.a.Provider, {
						value: i
					}, t)
				},
				np = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				sp = n("./src/reddit/helpers/postCollection.ts"),
				rp = n("./src/reddit/models/Theme/index.ts"),
				op = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ap = n("./src/reddit/selectors/experiments/survey.ts"),
				ip = n("./src/reddit/selectors/notificationBanner.ts"),
				cp = n("./src/reddit/selectors/onboarding.ts"),
				lp = n("./src/reddit/selectors/posts.ts"),
				dp = n("./src/reddit/components/AppRouter/index.m.less"),
				up = n.n(dp);

			function mp() {
				return (mp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pp = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", mp({
						className: Object(v.a)(up.a.main, {
							[up.a.mShowingPaddedPinnedDescriptions]: n
						}, t),
						id: zm.a
					}, s))
				},
				bp = Object(C.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const o = Object(F.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", mp({
						className: Object(v.a)(up.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(rp.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(St.c)(n)}px`
						}
					}, r))
				}),
				hp = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(g.a);
					return m.a.createElement("div", mp({
						className: Object(v.a)(up.a.lightboxHeaderWrapper, t, {
							[up.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				gp = Object(ip.a)(Ed.a.EmailCollectionBannerId),
				fp = Object(p.b)(() => Object(f.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: at.x,
					isD2xSeoDisableLightboxEnabled: ts.a,
					isBlockingInterstitialEnabled: op.b,
					isBlockingInterstitialV2Enabled: op.c,
					isLoggedIn: at.P,
					isLoggedOutOneFeed: bs.a,
					isNpsSurveyEnabled: ap.d,
					isOnboardingQueryParamEnabled: cp.c,
					isSubscriptionsPinned: ss.b,
					isSuccessfulSurveyEnabled: ap.f,
					isSuspended: at.W,
					isFPR: at.N,
					posts: lp.J,
					profileCollectionsEnabled: jm.a,
					showEmailCollectionBanner: e => !Object(It.M)(e.platform.currentPage) && gp(e),
					signUpModalIsOpen: Object(hi.c)(Fe.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: at.wb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPinSubscriptions: () => e(Object(S.i)()),
					onPostDismissTrigger: () => e(Object(_.k)()),
					onSuccessfulSignupTrigger: () => e(Object(_.g)()),
					onUnpinSubscriptions: () => e(Object(S.j)())
				})),
				vp = (e, t) => !(!e.state || !e.state[Km.b.IsOverlay] || t === e);
			class Op extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Qm.l ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= Qm.l && this.props.onPinSubscriptions()
					}, O.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(It.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${O.Ib.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === Jm.a.PROFILE;
							return !(!o || !Object(sp.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, r = n.state && n.state[Km.b.IsOverlay], o = Object(P.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(P.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Nb.INDEX || t.name === O.Nb.SUBREDDIT && n.subredditName === Ns.b.Popular), r = Object(U.c)(this.props.frontpageSignupVariant), o = Object(U.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = vp(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						frontpageSignupVariant: n,
						hasInvalidSession: s,
						isD2xSeoDisableLightboxEnabled: o,
						isFPR: a,
						isLoggedIn: i,
						isLoggedOutOneFeed: l,
						isSubscriptionsPinned: d,
						isSuspended: p,
						location: b,
						onClickOutsideOverlay: h,
						routes: g,
						showEmailCollectionBanner: f,
						suspensionDaysLeft: v
					} = this.props, {
						isSignupUpsellDisplayed: C,
						isSignupUpsellHidden: x
					} = this.state, y = this.context, E = vp(b, this.previousLocation);
					b.state && b.state[Km.b.IsOverlay] && !E ? b.state[Km.b.IsOverlay] = !1 : b.state && (this.previousLocation === b || b.state[Km.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Km.b.CloseLocation] && this.previousLocation.state[Km.b.CloseLocation] === b.state[Km.b.CloseLocation] ? b.state[Km.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, Km.b.CloseLocation)
					} : b.state[Km.b.CloseLocation] = this.previousLocation);
					const j = Object(P.a)(this.previousLocation, b),
						S = E || j ? this.previousLocation : b,
						_ = E || j ? this.previousPage : t,
						w = !(!(_ && _.meta && _.meta.name === O.Nb.SEARCH_RESULTS && _ && _.queryParams) || _.queryParams[Mo.u]),
						N = !(!_ || !_.meta || _.meta.name !== O.Nb.MODERATION_PAGES),
						M = Object(It.x)(_),
						I = this.getIsPostCollection(),
						T = C && !x,
						A = e.showBanner;
					return s ? r.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(It.a.Provider, {
						value: _
					}, m.a.createElement(co.c, {
						isOverlayOpen: E
					}, m.a.createElement(qd.a, {
						forceRedditTheme: w
					}, C && m.a.createElement(ye, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Cp, {
						browserInfo: y,
						connection: e,
						isFPR: a,
						isInline: T,
						isSuspended: p,
						showOffline: A,
						suspensionDaysLeft: v
					})), m.a.createElement(Ym.a.Provider, {
						value: !1
					}, m.a.createElement(qd.a, {
						forceRedditTheme: w || N,
						isCommentsPage: M
					}, m.a.createElement(tp, null, m.a.createElement(xp, {
						browserInfo: y,
						frontpageSignupVariant: n,
						isD2xSeoDisableLightboxEnabled: o,
						isCommentsPage: M,
						isInline: T,
						isLoggedIn: i,
						isLoggedOutOneFeed: l,
						isSubscriptionsPinned: d,
						location: S,
						overlayIsOpen: E,
						page: _,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: a,
						showOffline: A,
						showSuspended: p
					}), m.a.createElement(Vm.b, null), m.a.createElement(Vm.a, null)))))), m.a.createElement(It.a.Provider, {
						value: t
					}, E && m.a.createElement(Ym.a.Provider, {
						value: !0
					}, m.a.createElement(qd.a, {
						isOverlay: !0
					}, m.a.createElement(yp, {
						browserInfo: y,
						isPostCollection: I,
						location: b,
						onClickOutsideOverlay: h,
						page: t,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: a,
						showOffline: A,
						showSuspended: p
					}))), m.a.createElement(qd.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Pm, null), m.a.createElement(Gd.a, null), f && m.a.createElement(k.a, null), m.a.createElement(wt, null), m.a.createElement(Yn, null)))))
				}
			}
			Op.contextType = x.a;
			const Cp = Object(A.c)(e => {
					const t = Object(It.eb)(),
						n = Object(Xm.db)(t),
						s = Object(u.useContext)(g.a),
						{
							browserInfo: r,
							connection: o,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l,
							suspensionDaysLeft: d
						} = e,
						p = {
							browserInfo: r,
							showFPR: a,
							showSuspended: l,
							suspensionDaysLeft: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Um, p), n && m.a.createElement(xd, {
						className: Object(v.a)(up.a.header, Object(Bm.b)(up.a, p), {
							[up.a.inline]: i
						})
					}), m.a.createElement(Wm, {
						className: Object(v.a)(up.a.offlineBanner, Object(Bm.b)(up.a, p)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				xp = Object(A.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = c()(e, "key"),
							s = c()(t, "key");
						return a()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = c()(e, ["key", "locationState"]),
								s = c()(t, ["key", "locationState"]);
							return a()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isCommentsPage: r,
							isD2xSeoDisableLightboxEnabled: o,
							isInline: a,
							isLoggedIn: i,
							isSubscriptionsPinned: c,
							showEmailCollectionBanner: l
						} = this.props, d = c && !(!o && !i && !s && r);
						return m.a.createElement(pp, {
							"aria-hidden": s,
							className: Object(v.a)(Object(Bm.b)(up.a, this.props), {
								[up.a.withUpsell]: !!e,
								[up.a.inline]: a
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Bd, {
							className: Object(v.a)(up.a.pinnedSubscriptions, {
								...Object(Bm.b)(up.a, this.props),
								[up.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), l && m.a.createElement("div", {
							className: Object(v.a)(up.a.bottomSpacer, Object(Bm.a)(up.a, this.props))
						}))
					}
				});
			class yp extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(j.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[Km.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = np.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && np.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === O.Nb.SUBREDDIT_CREATION || t.meta.name === O.Nb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(bp, {
						className: Object(v.a)(Object(Bm.b)(up.a, this.props), {
							[up.a.mIsCommentsLightbox]: r,
							[up.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(up.a.overlayWrapper, Object(Bm.b)(up.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(up.a.overlayScrollContainer, {
							[up.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: zm.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(hp, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(Bm.b)(up.a, this.props), {
							[up.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(yd.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(up.a.bottomSpacer, Object(Bm.a)(up.a, this.props))
					}))))
				}
			}
			t.b = fp(Object(A.c)(Op))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
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
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (n, r, o) => {
				let {
					apiContext: a
				} = o;
				const i = await (async (e, t, n) => Object(h.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: l.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					n(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: r
					}))
				} else n(b.f({
					id: c,
					kind: v.b.Error,
					text: s.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: O(e, t)
				}))
			};
			var C = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				w = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const N = (e, t, n, s, r) => o => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(w.y)(o, void 0, {
						oldSort: n,
						sort: s,
						source: r
					}),
					userSubreddit: Object(w.qb)(o)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(w.gb)(e),
					userSubreddit: Object(w.qb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...I
				});
			var A = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				L = n("./src/reddit/selectors/activeModalId.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = n.n(q),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const V = Object(E.a)(j.a),
				Q = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends o.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== W.a.None) {
							e(t === W.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", W.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", W.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", W.a.None)
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
						selectedSort: r
					} = this.props;
					return o.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, o.a.createElement(S.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(r)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), o.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: n
					}), o.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(S.b, {
						displayText: Q(W.a.First),
						isSelected: r === W.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(S.b, {
						displayText: Q(W.a.Last),
						isSelected: r === W.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(S.b, {
						displayText: Q(W.a.None),
						isSelected: r === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var K = z;
			const J = "CommentSort--SortPicker",
				Y = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(j.a),
				$ = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(D.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(J),
					highlightIsOpen: Object(B.b)(Y),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(F.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(G.v)(e),
							r = !!Object(F.m)(e, {
								postId: n
							}),
							o = Object(U.G)(e, {
								postId: n
							});
						return (r || s) && !!o && !!o.previousVisits && o.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				ee = Object(a.b)($, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(d.h)({
							tooltipId: J
						})),
						onOpenHighlightDropdown: t => {
							e(Object(d.h)({
								tooltipId: Y
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(d.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(d.h)({
							tooltipId: X
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(N(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(T(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return s.fbt._("{sort name} (suggested)", [s.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: r,
						dropdownIsOpen: a,
						elementRef: i,
						hideTooltip: d,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: h,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: v,
						sort: O,
						suggestedSort: E,
						showTooltip: P,
						toggleContestModeModal: j
					} = this.props, w = h.contestMode, N = !b.search.includes(l.t.CONFIDENCE), I = O === l.t.CONFIDENCE && N, T = m && !I, L = l.v[O], D = L ? L() : "", F = E && O === E && !I ? this.addSuggestedLabel(D) : D, U = w ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), B = w ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), G = w ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), q = w && !m;
					return o.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !v && q
						}),
						ref: i
					}, o.a.createElement("div", {
						className: H.a.containerRow
					}, !q && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: H.a.DropdownContainer
					}, o.a.createElement(S.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), o.a.createElement(Z, {
						isOpen: a,
						tooltipId: J
					}, [l.t.CONFIDENCE, l.t.TOP, l.t.NEW, l.t.CONTROVERSIAL, l.t.OLD, l.t.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							r = l.v[e],
							a = r ? r() : "";
						return o.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, o.a.createElement(S.b, {
							displayText: a,
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), T && !q && (E ? o.a.createElement("button", {
						className: H.a.SortLink,
						onClick: O !== E ? this.setSortOnClick : this.clearSortOnClick
					}, O !== E ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : o.a.createElement("button", {
						className: H.a.SetSort
					}, o.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), o.a.createElement("span", {
						id: X,
						onMouseEnter: P,
						onMouseLeave: d
					}, o.a.createElement(x.c, {
						className: H.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), o.a.createElement(R.a, {
						className: H.a.Info
					})))), m && o.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), o.a.createElement(_.a, {
						className: H.a.ToggleSwitch,
						on: w
					}))), v && o.a.createElement("div", {
						className: H.a.containerRow
					}, o.a.createElement(K, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Y,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: M
					})), r && o.a.createElement(C.a, {
						actionText: B,
						headerText: U,
						modalText: G,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(P.c)(te))
		},
		"./src/reddit/components/CreateAccountSection/index.m.less": function(e, t, n) {
			e.exports = {
				createTitle: "_2FBcfa5LIJrKSNuRAA7WWa",
				createDesc: "_2gHNfZLuOuUSh3Ppfyc0JX",
				createButton: "_2XQ3s48lqlzodYPpT2s-Iu"
			}
		},
		"./src/reddit/components/Crypto/componentStyles.css": function(e, t, n) {},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e(2), n.e("vendors~MarketplaceClaimModal~MarketplaceInFeedUnit"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => o.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = n.n(c);
			const d = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(d);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupSuccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupSuccessModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsSuccess/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => o.a.createElement(d, {
				withOverlay: !0,
				className: l.a.modalBody,
				overlayClassName: l.a.modalOverlay
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3uruuYeyxpi66lhx6sYSsl",
				fadeOut: "nIOXvEXFyDg7VnFtNVmlJ",
				modalBody: "_2HHFaH5ZLOM1NWKsiGkorM",
				successPowerup: "_25UgJzq-s3kOud15pllhar",
				icon: "_15HZ1T5sP47ouINDpZ92Td",
				title: "_2bJ-GCaxSGVPn1OefwaiZ0",
				confetti: "_3cJJ0jZwGKhEPBNW-HZasa"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EditCommunityDescriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EditCommunityDescriptionModal").then(n.bind(null, "./src/reddit/components/EditCommunityDescriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EditCommunityDescriptionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : r
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: o,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: `url(${f})`
					}
				}))
			}))
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GovernanceMainnetAnnouncementModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GovernanceMainnetAnnouncementModal").then(n.bind(null, "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => o.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/PurchaseEthModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CryptoPurchaseEth",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CryptoPurchaseEth").then(n.bind(null, "./src/reddit/components/Governance/PurchaseEthModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/PurchaseEthModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_PURCHASE_ETH, e => o.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-ConvertToCoinsModal"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/AvatarStorefrontCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_3hna43Sh0DTnoV7v2NNc2r",
				sparkle: "_3VX6GfMQ01Q_1wsiZnQ2UN",
				fadeIn: "_2IZWjcaeEX-WJFI5gdPVK",
				sparkle1: "Y2DEjcFyO7_glQ5xOX4oz",
				sparkle2: "_1D5RCB-D8nMhwHbA6m6tDq",
				sparkle3: "Iupw9Lt8-wmCtxCgp5_m8"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				special: "_1dJtiWITrnvIbQdXgYgdym",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(P);
			const S = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				_ = Object(f.a)(),
				k = Object(l.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(_)(e),
					isFreeAwardEventEnabled: e => Object(x.a)(e) && Object(y.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === _ ? Object(m.i)() : Object(m.f)({
							tooltipId: _
						}))
					}
				}),
				N = Object(c.b)(k, w);
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(O.d)("get_coins_cta", e))
						}
						a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || r.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? r.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : r.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: r
					} = this.props, o = this.getButtonText(), a = !!e || r, c = Object(d.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: _,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(C.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, o)), s && i.a.createElement(S, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: _
					}))
				}
			}
			t.a = N(Object(g.c)(M))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/Timer.m.less": function(e, t, n) {
			e.exports = {
				timer: "_1RWqLcP0XUFojNUc0Mf0Yc"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? g : h;
				return r.a.createElement(t, {
					id: o.d
				}, r.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(l.a, null, r.a.createElement(p, null), r.a.createElement(b, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN",
				adSignupIconWrapper: "buhDxtCErlohIqSGl44CH"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult",
				hasBadge: "_3JpLC8c1ezEsYuuoANyZgr",
				badge: "_15QIjcY6qqsms0FXyEsVe9"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj",
				navBasicLink: "_2KD6rqR9FU8VQKN4P42INe",
				navButtonOverride: "Yxq-GFO2Z9y82pMFEMLAf"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				button: "GCltVwsXPu5lE-gs4Nucu",
				category: "_3z4bYCMDgBrJ-Be0By6hNr",
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				noBottomDivider: "R2-Y-K1ZaSHnYA0gp7-nb",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				caretDownIcon: "_3x3dhQasGAuYcXVQ02QUzy",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.c,
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
					let t, n, o, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let v, O;
					return d(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: O,
						subscribersText: g,
						currentlyViewingText: f,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				P = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				A = n.n(T);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const r = s || Object(w.n)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(N.M)(e, {
							identifier: r.belongsTo
						}) : null
					},
					post: w.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(_.a)(e) || Object(_.d)(e) || Object(_.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const r = n && Object(w.n)(e, {
							page: n
						}) || s;
						return !!r && Object(k.g)(e, {
							post: r
						})
					}
				}),
				L = Object(a.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === S.a.upvoted ? Object(u.kb)(t) : Object(u.w)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				})),
				D = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.LIVEVIDEO]: d.a.video_live,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class U extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = e => {
						e.stopPropagation(), this.props.subreddit && this.props.sendEvent(e => {
							const {
								subreddit: t,
								post: n
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == t ? void 0 : t.name) && Object(N.gb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? M.H(e, n.id) : void 0,
								subreddit: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Nb.META_MEMBERSHIP_PAYWALL_PAGE, x = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return o.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(y.a)(d),
							[A.a.adaptive]: u
						})
					}, o.a.createElement(x, {
						postId: null == d ? void 0 : d.id
					}, o.a.createElement("div", {
						className: A.a.postDetails
					}, d && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(E.a, {
						name: h,
						className: A.a.mediaIcon
					}), o.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(P.a, {
						className: A.a.srIcon
					}), o.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && o.a.createElement(B, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const B = o.a.memo(e => o.a.createElement(x.t, {
				className: A.a.CloseButton,
				size: x.d.XS,
				onClick: e.onClick,
				priority: x.c.Plain,
				Icon: Object(E.b)("close"),
				text: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				title: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				"aria-label": s.fbt._("Close", null, {
					hk: "4gbyAA"
				})
			}));
			t.a = Object(O.c)(L(U))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				const {
					children: t,
					className: n,
					to: s,
					...o
				} = e, l = Object(i.b)(s);
				return r.a.createElement(a.a, c({
					className: n,
					to: l
				}, o), t)
			}

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? l : o.a;
				return r.a.createElement(s, d({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return m
			}));
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(s || (s = {}));
			const d = {
					[s.BUTTON]: void 0,
					[s.TAB_GROUP]: c.a.tabGroup
				},
				u = (e, t) => {
					if (t !== s.BUTTON) return e ? c.a.active : c.a.inactive
				},
				m = e => {
					let {
						active: t = !0,
						children: n,
						className: s,
						disabled: r = !1,
						variant: i,
						...m
					} = e;
					return o.a.createElement("button", l({}, m, {
						className: Object(a.a)(c.a.primaryButton, d[i], u(t, i), s),
						disabled: r
					}), n)
				}
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Pill/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					children: t,
					className: n,
					...s
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(i.a.pillContainer, n)
				}, s), t)
			}
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn",
				createAccountSection: "BtYn3oMRXzNwmNMkolecQ",
				withOverflow: "_3k3RwDkEsbX50bb-DBvuWj"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-InactivityModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-InactivityModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SupportersListModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SupportersListModal").then(n.bind(null, "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_2iaVQV4QQm863obinS6v2-"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => r.a.createElement(u, null))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function u() {
				const e = Object(a.d)();
				return Object(r.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.M)(e) || Object(l.L)(e)) ? o.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/survey/index.ts");
			var p = n("./src/reddit/helpers/survey/index.ts"),
				b = n("./src/reddit/models/Survey/index.ts"),
				h = n("./src/reddit/selectors/survey.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = (e, t) => {
					const n = Object(h.c)(e),
						s = Object(h.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const r = g.p(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
					} : {}
				},
				v = e => {
					switch (e) {
						case b.a.CES:
							return "ces";
						case b.a.CSAT:
							return "csat";
						case b.a.NPS:
							return "nps";
						case b.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				O = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...g.n(n),
					survey: f(n, e)
				}),
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						questionId: o,
						questionParentId: a,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...g.n(e),
						survey: {
							type: v(i),
							min: i === b.a.NPS ? 0 : 1,
							max: i === b.a.NPS ? 10 : 7,
							question: s,
							question_id: o,
							parent_question_id: a,
							score: r,
							...f(e, n)
						}
					})
				},
				x = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: r,
						type: o,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...g.n(e),
						survey: {
							question: s,
							type: v(o),
							text: r,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				},
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						type: o,
						questionId: a,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...g.n(e),
						survey: {
							type: v(o),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: r,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				};
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/experiments/index.ts"),
				_ = n("./src/reddit/selectors/experiments/survey.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(E.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(P.a)(),
						a = Object(l.e)(k.i),
						i = Object(l.e)(k.Eb),
						u = Object(l.e)(S.a, o.a),
						b = Object(l.e)(h.c),
						g = Object(l.e)(h.a),
						f = Object(l.e)(h.b),
						v = Object(l.e)(h.d),
						C = Object(l.e)(_.g),
						x = Object(c.useMemo)(() => {
							const e = Object(p.g)(C),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, C]),
						y = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						j = Object(c.useCallback)(async e => {
							if (b) {
								const t = Object(p.f)({
									triggerName: e,
									isDemoEnabled: b,
									activeDemoTrigger: g,
									demoTriggerThreshold: f
								});
								return void(t && s(t))
							}
							const r = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: x,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: C
							});
							if (!r || r.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const o = x[r.experimentName];
							(null == o ? void 0 : o.variant) && r.variants.find(e => e.variantName === o.variant) && (C ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: r
										} = t.data.customerSurveyConfig,
										o = r.find(t => t.experimentName === e.experimentName);
									o && n({
										...e,
										steps: o.steps
									})
								}
							})(r, t, y) : y(r))
						}, [n, x, a, i, v, b, g, f, C, y, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(j);
						return () => e.unsubscribe(t)
					}, [j]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(d.I)({
							surveyLastSeenTime: t
						}, !1)), r(O(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				N = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: r,
						textResponse: o,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const r = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", r), () => window.removeEventListener("beforeunload", r)), [r])
					})({
						isFollowUp: r,
						textResponse: o
					});
					const [d, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), E = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && r ? `${l-1}` : null
						};
						m(r ? x(e) : h.type === b.a.MULTI_CHOICE ? y(e) : C(e))
					}, [p, r, f, h, m, i, a, g, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: E
					}
				},
				M = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: r,
						setTextResponse: o,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(P.a)(), [f, v] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), S = Object(c.useCallback)(() => {
						var e, c;
						const E = t.experimentName,
							P = t.steps[l],
							S = null == P ? void 0 : P.type,
							_ = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.followUpQuestion,
							w = t.steps[l + 1],
							N = null == w ? void 0 : w.type,
							M = null == w ? void 0 : w.question;
						if (m(u + 1), w && w.questionOptions && j(i()(w.questionOptions)), -1 === l) {
							g(O(E, "agree")), d(0);
							const e = {
								question: M,
								type: N,
								action: "display",
								experimentName: E,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(N === b.a.MULTI_CHOICE ? y({
								text: f,
								...e
							}) : C(e))
						}
						const I = {
							experimentName: E,
							type: S,
							action: "submit",
							questionId: u.toString(),
							questionParentId: P.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? x({
								text: a,
								question: k,
								...I
							}) : S === b.a.MULTI_CHOICE ? y({
								question: _,
								max: null === (e = P.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = P.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : C({
								question: _,
								score: n && n + (S === b.a.NPS ? 0 : 1),
								...I
							})), r(void 0), o(""), v(""), p || !k)
							if (h(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: N,
									question: M,
									questionId: (u + 1).toString()
								};
								g(N === b.a.MULTI_CHOICE ? y({
									text: f,
									...e
								}) : C(e))
							}
						else h(!0), g(x({
							experimentName: E,
							action: "display",
							type: S,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, g, s, r, o, u]);
					return {
						questionOptions: E,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: S,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: h
					}
				},
				I = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: r,
						setActiveSurvey: o,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: m
					} = e;
					const p = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							r(-1), a(0), i(!1), o(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: j.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, d, m, n, r, o, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(a.d)();
				return e ? o.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.q)(e, t);
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.qb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.pb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.w)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Gb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Gb)(e);
				if (Object(h.P)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.z)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const r = Object(d.e)(e, t);
				return !!r && r.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : g.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = C;
			const x = Object(l.u)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(i.c)({
					currentUser: l.k,
					isNightMode: l.cb,
					isPresenceUserPrefEnabled: l.U,
					shouldHideNSFW: l.F
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.b)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const r = e(s),
					a = t(s),
					i = !r && a;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: r,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(d);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.downvoted
				},
				b = i(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var h = e => r.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/controls/Upvote/index.m.less"),
				v = n.n(f);
			const O = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				C = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.upvoted
				},
				x = i(C, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, O);
			var y = e => r.a.createElement(g.b, {
					className: x(e),
					compact: e.compact,
					isFilled: C(e)
				}),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				P = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				_ = n.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(o.a)({
					[_.a.compact]: e.compact,
					[_.a.dark]: Object(P.b)(Object(E.a)(e)),
					[_.a.nightmode]: e.isNightMode
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return r.a.createElement("button", k({}, d, {
						className: Object(o.a)(_.a.customDownvote, w(e), {
							[_.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return r.a.createElement("button", k({}, d, {
						className: Object(o.a)(_.a.customUpvote, w(e), {
							[_.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				I = h,
				T = y
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(l, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			}));
			const s = 284,
				r = 450,
				o = 800,
				a = 284,
				i = 48,
				c = 640,
				l = 1600,
				d = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				g = 40,
				f = 270,
				v = 106,
				O = 5,
				C = 16,
				x = 1250,
				y = 82,
				E = 48,
				P = 36,
				j = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = 480,
				r = 960,
				o = 1200
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => r.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return r.a.createElement(e, o({
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext(!1)
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends r.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : r.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(f, g({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				o = n.n(r);
			t.a = s.a.span("invisibleText", o.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				o = n.n(r);
			t.a = s.a.a("link", o.a)
		},
		"./src/reddit/controls/Search/CommunityPill/CommunityPill.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_2BnN6ItRQFyZgOmfbb2Y6x"
			}
		},
		"./src/reddit/controls/Search/CommunityPill/CommunityPillClickable.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1rI3XwdytVSnrZFZ7GTERr",
				pillButton: "_3K6zM7XDkG1DK-zJripGCS",
				pillButtonDay: "YdCe1hj5-WpPqrT3D38TN",
				active: "_3v91t4Y1u-0AfgqNTUQA0Y",
				inactive: "_3mnV6Mirf77DKlf55iLvhY",
				pillButtonNight: "_3j4ZatqDYaMOTxGxGBeLvb",
				pillText: "_27eq9lGbjM8ykD7_MIp4u9",
				subredditIcon: "_1N08fgwXvXgIzF9bbJUhiZ",
				dismissIcon: "C1rtkBdQNxXydNER0blz6",
				dismissButton: "_8jwYN47Iczrd1EcaDmGSy",
				dismissButtonDay: "_3Xu2xFD_KqvCdq3L1eW1iN",
				dismissButtonNight: "_2lIKM0jq5_FM6GHyuwWLS9"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				searchBarExp: "_2cQyXGCHzUUwjteF5E1eO7",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = s.a.wrapped(r.default, "unstyledInternalLink", a.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				o = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...o
				}),
				i = e => Object(s.a)(e, {
					...r,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
						offerContext: i,
						pennies: d,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: b,
							correlation_id: o
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
						gildParams: i,
						isOldReddit: d,
						offerContext: u,
						pennies: p,
						rememberCard: b,
						thingId: h,
						token: g,
						savedCardId: f
					} = e;
					const {
						gildType: v,
						isAnonymous: O,
						message: C
					} = i, x = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: C ? C.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: o
					}, y = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = d ? y : Object(l.a)(y);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: E,
						data: x
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: o,
						isOldReddit: i,
						pennies: d,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = o, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, x = i ? C : Object(l.a)(C);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: x,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: o,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: o,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), r = await Object(o.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!r.ok) throw new Error("Unable to update payment information");
					return r.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(r.a)(Object(o.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: l
				})
			}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const o = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(r.A)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
			const a = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (a(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				l = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!d(n, e)) return;
					const {
						startContainer: s,
						startOffset: r,
						endContainer: o,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, r), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(o, a), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(o.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.R)(e, {}) === o.g.Large && !Object(l.O)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: r.wd
				})
			}

			function m(e) {
				switch (e) {
					case r.xd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.xd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				headingContent: "vLtBjS_8SMsuZByMrcgJH",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: d
					} = s,
					m = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), r.a.createElement(c, {
						className: l.a.body
					}), d && r.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return i
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(s || (s = {}));
			const r = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				o = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => r(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!r(s.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function r(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.o)(e);
					return {
						actionInfo: Object(o.d)(e),
						post: t && Object(o.H)(e, t) || null,
						profile: Object(o.Q)(e),
						screen: Object(o.Y)(e),
						subreddit: Object(o.gb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				o = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_listing_site"
				}),
				a = () => e => ({
					source: "banner",
					action: "click",
					noun: "lang_listing_site"
				}),
				i = () => e => ({
					source: "banner",
					action: "dismiss",
					noun: "lang_listing_site"
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.n)(e),
						screen: Object(c.Y)(e),
						subreddit: Object(c.gb)(e),
						post: t ? Object(c.H)(e, t) : null,
						profile: Object(c.Q)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (e, t, s, r) => {
					const o = {
							commentId: r,
							commentsPageKey: s
						},
						i = r && Object(a.j)(e, o) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: r ? Object(c.h)(e, r) : null,
						listing: Object(c.y)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const r = d(e);
					return Object(l.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}), b = (e, t) => {
					t === o.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.n)(t),
					screen: Object(c.Y)(t),
					subreddit: Object(c.gb)(t),
					post: Object(c.H)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}), f = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...d(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, O = () => e => ({
					...d(e),
					action: "open",
					noun: "gif_tooltip"
				}), C = e => t => ({
					...d(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), x = () => e => ({
					...d(e),
					action: "select",
					noun: "gif_tooltip_result"
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(s.n)(t),
					customFeed: Object(s.m)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(r.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: o.Q(e),
						subreddit: o.gb(e)
					}
				},
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.Y(e),
					profile: s.Q(e),
					subreddit: s.gb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "u", (function() {
				return S
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.n)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
				l = () => e => ({
					...Object(r.n)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				x = (e, t, n, o, c) => l => ({
					...Object(r.n)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n,
						categoryId: o
					}
				}),
				y = (e, t, n, o, c, l) => d => ({
					...Object(r.n)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				E = (e, t) => n => ({
					...Object(r.n)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e,
						categoryId: t
					}
				}),
				P = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				S = (e, t) => n => ({
					...Object(r.n)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: e,
						categoryId: t
					}
				}),
				_ = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t, n) => o => ({
					...Object(r.n)(o),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: t,
						categoryId: n
					}
				}),
				w = (e, t, n, o, c) => l => ({
					...Object(r.n)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: e,
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.H(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h(n, t)
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				l = e => o("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => o("j_next", e),
				m = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				O = e => o("h_hide", e),
				C = e => o("x_expando", e),
				x = e => o("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => o("z_downvote", e),
				P = e => a("z_downvote", e),
				j = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				_ = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.Y(e),
					profile: r.Q(e),
					subreddit: r.gb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? r.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				p = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.zb)(t, {
							userName: e
						}).id
					},
					...r.n(t)
				}),
				h = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.zb)(t, {
							userName: e
						}).id
					},
					...r.n(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				const r = e.countryCode ? `/${e.countryCode}` : "",
					o = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${r}${o}/r/${e.subredditName}/about/wiki` : `${r}${o}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(s.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const r = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = r
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, s.className)
				}), r.a.createElement(d, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.downvoteWrapper, s.className)
				}), r.a.createElement(d, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, s.className)
				}), r.a.createElement(d, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.upvoteWrapper, s.className)
				}), r.a.createElement(d, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(o.a)(i.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, r.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), r.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), r.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), r.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), r.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), r.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return r.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, r.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), r.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), r.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), r.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), r.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), r.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@r/google-tag-manager/compiled.js"),
				i = n("./src/config.ts"),
				c = n("./node_modules/history/esm/history.js"),
				l = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/helpers/name/index.ts");
			const v = /^u_[\w-]+$/;
			var O = n("./src/reddit/selectors/user.ts");
			const C = (e, t) => async (n, s) => {
				var r;
				const o = s();
				if (function(e) {
						return v.test(Object(f.h)(e))
					}(t)) {
					const e = (null === (r = Object(O.k)(o)) || void 0 === r ? void 0 : r.displayText) || "";
					if (function(e, t) {
							return Object(f.h)(e) === Object(f.h)(t)
						}(t, function(e) {
							return `u_${Object(f.h)(e)}`
						}(e))) return
				} else if (Object(g.a)(t)) return;
				n((e => ({
					payload: e,
					type: h.f
				}))(e))
			}, x = Object(b.a)(h.e), y = e => ({
				payload: {
					subreddits: e
				},
				type: h.b
			}), E = e => ({
				payload: e,
				type: h.a
			});
			var P = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				S = n("./src/lib/browser/isIncognito.ts"),
				_ = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/extractQueryParams/index.ts"),
				w = n("./src/lib/filterQueryParams/index.ts"),
				N = n("./src/lib/getParsedUserAgent/index.ts"),
				M = n("./src/lib/initializeClient/index.tsx"),
				I = n("./src/lib/loadableAction/index.ts"),
				T = n("./src/lib/matchRoute/index.ts"),
				A = n("./src/lib/performance.js"),
				R = n("./src/lib/reCaptchaEnterprise/index.ts"),
				L = n("./src/lib/safeJSONParse/index.ts"),
				D = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				U = n("./src/reduxMiddleware/gqlContext.ts"),
				B = n("./src/telemetry/index.ts"),
				G = n("./src/telemetry/helpers/sendEvent.ts"),
				q = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				V = n("./src/reddit/actions/chat/toggle.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				z = n("./src/reddit/actions/emailCollection/index.ts"),
				K = n("./src/reddit/actions/emailVerification.ts"),
				J = n("./src/reddit/actions/login.ts"),
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./node_modules/reselect/es/index.js"),
				Z = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = n("./src/reddit/selectors/meta.ts");
			const ee = Object(X.a)($.c, O.P, Z.d, Z.e, (e, t, n, s) => !(e || t || n && s)),
				te = () => async (e, t) => {
					const n = t(),
						s = ee(n);
					!!!Object(Y.a)(n) && s && e(Object(J.f)())
				};
			var ne = n("./src/reddit/actions/media.ts"),
				se = n("./src/lib/loadWithRetries/index.ts"),
				re = () => Object(se.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				oe = n("./src/reddit/actions/nps.ts");
			const ae = Object(I.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ie = n("./src/reddit/actions/platform.ts"),
				ce = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				de = n("./src/reddit/actions/session.ts"),
				ue = n("./src/reddit/actions/survey/index.ts"),
				me = n("./src/reddit/actions/theme.ts"),
				pe = n("./src/reddit/actions/toaster.ts"),
				be = n("./src/reddit/actions/users.ts"),
				he = n("./node_modules/react-redux/es/index.js"),
				ge = n("./node_modules/react-router/esm/react-router.js"),
				fe = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Crypto/componentStyles.css"), n("./src/reddit/components/Root/index.m.less")),
				ve = n.n(fe),
				Oe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				Ce = n("./src/lib/classNames/index.ts"),
				xe = n("./src/reddit/components/AppRouter/index.tsx"),
				ye = n("./src/reddit/contexts/User/index.tsx");

			function Ee(e) {
				return m.a.createElement(ye.b, null, e.children)
			}
			var Pe = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				je = n("./src/reddit/constants/shortcuts.ts"),
				Se = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				_e = n.n(Se);
			var ke = e => {
					let {
						children: t
					} = e;
					return m.a.createElement("div", {
						className: _e.a.shortcutDiv,
						id: je.b,
						tabIndex: -1
					}, m.a.Children.only(t))
				},
				we = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ne = n("./src/reddit/contexts/NavbarExp.ts"),
				Me = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ie = n("./src/reddit/components/Header/Sparse.tsx"),
				Te = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Ae = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Re = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/featureFlags/index.ts"),
				De = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Fe = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Ue = n.n(Fe);
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ge = Object(X.c)({
				showError: Le.d.showVerboseErrors
			}), qe = Object(he.b)(Ge)(e => {
				const t = Object(u.useContext)(Ne.a);
				return m.a.createElement(Ae.a.Provider, {
					value: !1
				}, m.a.createElement(Te.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Ie.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Ue.a.container
				}, m.a.createElement("div", {
					className: Ue.a.mainContent
				}, m.a.createElement(De.a, {
					className: Ue.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Ue.a.title
				}, Be._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Ue.a.subTitle
				}, Be._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(Re.l, {
					onClick: () => window.location.reload(!0)
				}, Be._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Ue.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(Ce.a)(Ue.a.topImageContainer, {
						[Ue.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Ue.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Ue.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Ue.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var He = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ve = Object(X.c)({
					isNavbarLikeMwebEnabled: He.a,
					theme: e => e.themes.current
				}),
				Qe = Object(he.b)(Ve, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const r = Object(Me.a)({
						theme: n
					});
					return m.a.createElement(Ne.a.Provider, {
						value: s
					}, m.a.createElement("div", {
						className: Object(Ce.a)(ve.a.container, {
							[ve.a.containerExp]: s
						}),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, t))
				});

			function ze(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(we.a, null, m.a.createElement(Qe, null, m.a.createElement(Ee, null, m.a.createElement(Oe.a, null), m.a.createElement(Pe.a, null), m.a.createElement(ke, null, m.a.createElement(t, null, m.a.createElement(ge.d, {
						component: Ke(n)
					}))))))
				}
				return m.a.createElement(qe, {
					error: e.error
				})
			}
			const Ke = e => t => m.a.createElement(xe.b, We({
				routes: e
			}, t));
			var Je = n("./src/reddit/constants/localStorage.ts"),
				Ye = n("./node_modules/lodash/throttle.js"),
				Xe = n.n(Ye),
				Ze = n("./src/reddit/helpers/localStorage/index.ts");
			const $e = 1e3;
			class et extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Xe()(() => Object(Ze.Db)(this.props.storageKey, this.props.value), $e)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			et.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const tt = Object(X.a)(O.P, e => ({
				storageKey: Je.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var nt = Object(he.b)(tt)(et);
			var st = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(nt, null)),
				rt = n("./src/reddit/constants/experiments.ts"),
				ot = n("./src/reddit/constants/headers.ts"),
				at = n("./src/reddit/constants/history.ts"),
				it = n("./src/reddit/constants/jsapiEvents.ts"),
				ct = n("./src/reddit/constants/parameters.ts"),
				lt = n("./src/reddit/constants/screenWidths.ts"),
				dt = n("./src/reddit/contexts/AdminEvents.ts"),
				ut = n("./src/reddit/contexts/ApiContext.tsx"),
				mt = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				pt = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const bt = () => e => t => e(t);
			var ht = n("./src/lib/safeBadgeUpdate.ts"),
				gt = n("./src/reddit/selectors/appBadges.ts");

			function ft(e) {
				const t = Object(gt.g)(e);
				Object(ht.a)(t)
			}
			var vt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== pt.b && n.type !== pt.d || ft(e.getState()), s
				} : bt,
				Ot = n("./node_modules/brcast/dist/brcast.es.js"),
				Ct = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var xt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Ot.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Ct.b)(s) || Object(O.M)(s)) && (e = !0, Object(G.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(Ct.b)(a)) {
									const n = Object(O.M)(a);
									e && !n ? (e = !1, Object(G.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(G.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(Ot.a)([]),
					middleware: () => e => t => e(t)
				}),
				yt = n("./node_modules/lodash/debounce.js"),
				Et = n.n(yt),
				Pt = n("./src/lib/domUtils/index.ts");
			const jt = 30 * _.kb;
			let St = Date.now();
			const _t = () => {
					St = Date.now()
				},
				kt = !!Object(Pt.f)() && {
					passive: !0
				};
			window.addEventListener("click", _t, !1), window.addEventListener("wheel", Et()(_t, 250), kt), window.addEventListener("mousemove", Et()(_t, 250), kt), window.addEventListener("keydown", Et()(_t, 250), kt);
			var wt = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - St >= jt ? (e.dispatch(de.h()), _t()) : _t()
					})), e => t => e(t)
				},
				Nt = n("./node_modules/lodash/pick.js"),
				Mt = n.n(Nt),
				It = n("./src/reddit/actions/header.ts"),
				Tt = n("./src/reddit/actions/preferences.ts"),
				At = n("./src/reddit/constants/preferences.ts"),
				Rt = n("./src/reddit/helpers/cookies/index.ts");
			const Lt = new Set([Tt.g, Tt.i, me.b, Tt.d, Tt.o, It.d, It.e, Tt.r]);
			var Dt = e => t => n => {
					const s = t(n);
					if (Lt.has(n.type)) {
						const t = e.getState().user,
							n = Mt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", At.b, At.d, At.e]);
						Object(Rt.a)({
							prefs: n
						})
					}
					return s
				},
				Ft = n("./src/lib/fastdom/index.ts"),
				Ut = n("./src/reddit/actions/tabBadging.ts"),
				Bt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Gt = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				qt = n("./src/reddit/selectors/platform.ts"),
				Ht = n("./src/reddit/helpers/chooseVariant/index.ts"),
				Wt = n("./src/reddit/selectors/removedPosts.ts"),
				Vt = n("./src/reddit/models/Subreddit/index.ts"),
				Qt = n("./src/reddit/models/Post/index.ts");
			const zt = Object(X.a)(Wt.b, e => !!e),
				Kt = (e, t) => Object(Wt.b)(e) && ((e, t) => {
					var n, s, r, o;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (o = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === o ? void 0 : o[a];
					return !!i && ((null == i ? void 0 : i.type) !== Vt.g.Private && (null == i || !i.isQuarantined))
				})(e, t) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments),
				Jt = (e, t) => {
					const n = Object(Ht.b)(e, {
						experimentEligibilitySelector: zt,
						experimentName: t
					});
					return n === rt.Rd.INDEX_1 || n === rt.Rd.INDEX_2
				},
				Yt = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Xt = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(qt.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = Yt.has(r), a = Object(Bt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Zt(e), l = n && n.isRobotIndexable, d = s === _.Nb.COMMENTS || s === _.Nb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Nb.SEARCH_RESULTS || s === _.Nb.SUBREDDIT_LEADERBOARD || d && u, p = !1 === l && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(Wt.c)(e)) return !1;
						const o = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = o && Object(Qt.u)(o),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						if (!i) return !1;
						if (!Kt(e, i)) return !1;
						const c = i.created,
							l = new Date(2022, 4, 3),
							d = new Date(2021, 0, 1);
						return c >= l.getTime() ? Jt(e, rt.fe) : c < l.getTime() && c >= d.getTime() && Jt(e, rt.ee)
					})(e) || m;
					return i || o || c || p ? m ? "noindex" : "noindex,nofollow" : null
				},
				Zt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.f)(e, s);
						n = !!Object(Gt.a)(t, !1, s)
					}
					return n
				};
			var $t = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const en = "theme-color",
				tn = `meta[name="${en}"]`;

			function nn(e) {
				return e ? $t.b.body : $t.a.body
			}
			var sn = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ie.f) {
						const t = e.getState(),
							s = Object(O.O)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(gt.i)(e);
							Object(Ut.c)(n, t)
						})(t, r.title) : Ft.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Xt(e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === Tt.i) {
						! function(e) {
							Ft.a.write(() => {
								const t = document.head.querySelector(tn);
								if (t) {
									const n = Object(O.cb)(e);
									t.content = nn(n)
								}
							})
						}(e.getState())
					}
					return s
				} : bt,
				rn = n("./src/reddit/helpers/survey/index.ts");
			var on = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(rn.a).filter(t => t === e).length)(t.type) && Object(Ze.T)(rn.a[t.type]), e(t)) : bt;
			const an = 5 * _.kb;
			var cn = e => {
					const t = Xe()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(de.g())
					}, an);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== de.a && t.type !== de.b && t.type !== de.c && t.type !== de.e || o(t.payload), t.type === de.d && (clearTimeout(n), n = null), e(t))
				},
				ln = n("./src/reddit/singleton/tracing/index.ts");
			var dn = e => e => t => {
					const n = () => e(t);
					return ln.b.isEnabled ? ln.b.recordLocalSpan(t.type, n) : e(t)
				},
				un = n("./src/reddit/actions/frontpage/constants.ts"),
				mn = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				pn = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				bn = n("./src/reddit/actions/pages/profilePosts.ts"),
				hn = n("./src/reddit/actions/pages/search/index.ts"),
				gn = n("./src/reddit/actions/pages/subreddit.ts"),
				fn = n("./src/reddit/actions/search.ts"),
				vn = n("./src/reddit/actions/subreddit.ts"),
				On = n("./src/reddit/actions/tracking.ts"),
				Cn = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				xn = n("./src/reddit/helpers/history/index.ts"),
				yn = n("./src/reddit/helpers/trackers/commentList.ts"),
				En = n("./src/reddit/helpers/trackers/postList.ts"),
				Pn = n("./src/reddit/helpers/trackers/screenview.ts"),
				jn = n("./src/reddit/selectors/subreddit.ts"),
				Sn = n("./src/reddit/helpers/routeKey/index.ts");
			var _n = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(On.c({
							routeKey: t
						}))
					};
					if (n.type === ie.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(jn.F)(s, r) || "",
							i = (s.subreddits.about[o] || {}).advertiserCategory;
						a.trigger("pageview", {
							...Mt()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Sn.b)(c, s, Object(Cn.a)(s));
							if (e && B.c.has(e)) {
								const t = B.c.end(e);
								!Object(qt.i)(s) && Object(xn.b)(at.b.IsOverlay) || Object(Pn.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(Cn.a)(s, l),
							u = Object(Sn.b)(l, s, d);
						if (!u) return t(n);
						B.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case un.b:
						case pn.b:
						case pn.e:
						case bn.PROFILE_POSTS_LOADED:
						case mn.e:
						case gn.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case hn.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case un.f:
						case vn.i:
						case bn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							En.l(o, t);
							break
						}
						case mn.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							yn.a(o, t);
							break
						}
						case fn.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				kn = n("./src/reddit/helpers/datadome.ts"),
				wn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Nn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Mn = n("./src/reddit/helpers/trackers/global.ts");
			let In = null;
			const Tn = () => {
				In && window.clearTimeout(In), In = null
			};
			var An = e => {
					In = window.setTimeout(() => {
						Tn(), Object(B.a)(Object(Mn.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Tn)
				},
				Rn = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Ln = n("./src/reddit/actions/connection/constants.ts");
			const Dn = Object(b.a)(Ln.b),
				Fn = Object(b.a)(Ln.a),
				Un = Object(b.a)(Ln.c);
			var Bn = n("./src/reddit/actions/meta.ts"),
				Gn = n("./src/reddit/selectors/telemetry.ts");
			const qn = (e, t) => Object(B.a)({
					...Gn.n(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(Gn.d)(e, {
						type: t
					})
				}),
				Hn = "(display-mode: minimal-ui)";
			const Wn = 3 * _.Sb;

			function Vn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Hn).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Bn.i)());
				const t = window.matchMedia(Hn);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Bn.i)()) : e.dispatch(Object(Bn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						ft(t)
					}, 1e3), qn(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Dn()), setTimeout(() => e.dispatch(Un()), Wn)
				}), window.addEventListener("offline", () => e.dispatch(Fn()))
			}
			var Qn = n("./src/lib/cookieConsent/index.ts"),
				zn = n("./src/lib/permanentCookieOptions.ts"),
				Kn = n("./src/reddit/constants/cookie.ts");
			const Jn = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Kn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: Kn.g,
							value: s,
							cookieOptions: Object(zn.a)(),
							cookieContext: t
						};
					Object(Qn.c)(r)
				}
			};
			var Yn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Xn = n("./src/reddit/models/Toast/index.ts"),
				Zn = n("./src/reddit/reducers/index.ts"),
				$n = n("./src/reddit/routes/index.ts");
			var es = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				ts = n("./src/reddit/selectors/experiments/index.ts"),
				ns = n("./src/reddit/selectors/experiments/utils.ts");
			const ss = e => !!Object(ns.a)((e => Object(Ht.c)(e, {
				experimentEligibilitySelector: ts.f,
				experimentName: rt.gc
			}))(e));
			var rs = n("./src/reddit/selectors/experiments/survey.ts");
			const os = {
					displayDelay: 15,
					displayOnRoutes: [_.Nb.SUBREDDIT, _.Nb.COMMENTS],
					experimentName: rt.Cd,
					experimentVariant: rt.Gd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				as = e => {
					const {
						base_url: t
					} = Object(Gn.X)(e), n = Object(qt.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...r && {
							s: r
						},
						...s && {
							p: s
						}
					}
				},
				is = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(os, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(os)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(os, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(os, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(Ht.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: Ht.a
							}) === s
						})(os, e)) return {
						displayDelay: os.displayDelay,
						externalVars: as(e)
					}
				};
			var cs = n("./src/reddit/selectors/onboarding.ts");
			var ls = n("./src/reddit/singleton/EventSystem.ts"),
				ds = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				us = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				ms = n("./src/lib/initializeClient/installReducer.ts"),
				ps = n("./src/reddit/reducers/features/categories/index.ts"),
				bs = n("./src/lib/sentry/index.ts"),
				hs = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const gs = Object(b.a)(hs.C),
				fs = () => {
					return Object(Ze.A)(Je.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var vs = n("./src/reddit/actions/global/constants.ts");
			Object(ms.a)({
				features: {
					categories: ps.a
				}
			});
			const Os = Object(b.a)(vs.a),
				Cs = e => async (t, n) => {
					t((() => async e => {
						const t = fs();
						t && e(gs(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || bs.c.withScope(e => {
						Object(bs.a)(e, {
							serverLogging: !1
						}), bs.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(Os(r))
				}, xs = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, ys = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return xs.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(J.c)())
				};
			var Es = n("./src/reddit/actions/notificationsInbox/index.ts"),
				Ps = n("./src/reddit/actions/onboarding/index.ts"),
				js = n("./src/reddit/constants/countrySites.ts"),
				Ss = n("./src/reddit/selectors/countrySites.ts");
			const _s = js.b ? `${js.a}/${js.b}` : `${js.a}`,
				ks = (e, t) => {
					return !!Object(Ss.d)(e) && !(t && !Object(Ss.c)(t))
				},
				ws = e => e.startsWith("/r/") ? e.replace("/r/", `/${_s}/r/`) : e;
			var Ns = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Ms = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Is = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			const Ts = Object(X.a)(e => Object(Ht.c)(e, {
				experimentEligibilitySelector: Ht.a,
				experimentName: rt.yb
			}), e => e === rt.od);
			Object(o.e)(o.b.EntryPointStart);
			const As = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: be.u,
						loidReceived: be.r,
						sessionTrackerReceived: be.z
					},
					authHeaders: {
						[ot.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: be.d,
						loidReceived: be.b,
						sessionTrackerReceived: be.k,
						userAuthenticated: de.c,
						userLoggedOut: de.d,
						userReauthenticated: de.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: Rn.a,
					statsAppName: _.m.Redesign
				}),
				Rs = Object(U.a)(As.apiContext),
				Ls = Object(U.a)(As.apiContext, i.a.gqlRealtime2Url),
				Ds = xt();
			let Fs;
			Object(M.a)({
				reducerMap: Zn.a,
				routes: $n.a,
				apiContext: As.apiContext,
				gqlContext: Rs.gqlContext,
				gqlRealtime2Context: Ls.gqlContext,
				appFactory: (e, t) => m.a.createElement(dt.a.Provider, {
					value: Ds.broadcaster
				}, m.a.createElement(ut.a.Provider, {
					value: {
						apiContext: As.apiContext,
						gqlContext: Rs.gqlContext,
						gqlRealtime2Context: Ls.gqlContext
					}
				}, m.a.createElement(mt.b, null, m.a.createElement(ze, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(st, null)))),
				appName: _.m.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = Fs;
						if (!n) return;
						n.dispatch(Object(ie.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ie.k)())
							}
						}))
					}
				}),
				customMiddleware: [P.a.withExtraArgument({
					routes: $n.a,
					apiContext: As.apiContext,
					gqlContext: Rs.gqlContext,
					gqlRealtime2Context: Ls.gqlContext
				}), Ds.middleware, wt, As.middleware, Rs.middleware, Ls.middleware, cn, Dt, dn, _n, sn, on, Ms.a, vt, e => t => n => {
					let s, r;
					if (!Object(Ns.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!ks(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(Ss.c)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${_s}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!ks(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(Ss.c)(e);
								(n || t) && (r.permalink = ws(r.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, r))
					} catch (a) {
						n.payload = {
							...o
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(Ns.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!ks(e, t.name)) return t;
							const n = Object(Ss.c)(t.id);
							if (t.name || n) {
								const e = ws(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!ks(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(Ss.c)(s.id),
									r = Object(Ss.c)(s.name);
								if (e || r) {
									const e = ws(s.url),
										r = {
											...s,
											url: e
										};
									t[n] = r
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (r) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: m.a.createElement(Yn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
						const t = i.a.mediaUrl;
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(ne.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Vn(s);
					const o = s.getState();
					Ts(o) && s.dispatch(Object(W.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(G.d)("enabled" === Object(Ht.c)(s.getState(), {
							experimentEligibilitySelector: Ht.a,
							experimentName: rt.uf,
							expEventOverride: !1
						})), Object(G.c)("enabled" === Object(Ht.c)(s.getState(), {
							experimentEligibilitySelector: Ht.a,
							experimentName: rt.wf
						})), Object(G.g)("enabled" === Object(Ht.c)(s.getState(), {
							experimentEligibilitySelector: Ht.a,
							experimentName: rt.vf
						})), Object(G.f)(Rs.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(Mn.a)("tab_closed")(e),
								n = q.g(t),
								r = Object(ds.a)(n),
								o = Object(us.b)(r);
							Object(D.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(ie.h)());
					const a = Object(O.cb)(s.getState());
					s.dispatch(Object(me.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(Ht.c)(e, {
							experimentEligibilitySelector: Ht.a,
							experimentName: rt.J
						}) === rt.S.Enabled)(s.getState())) {
						ln.b.enableTracing(!0);
						const e = ln.b.createTraceFromId(l);
						ln.b.setParent(e)
					}
					s.dispatch(Object(ie.i)(n));
					t.listen((e, t) => {
						const r = Object(T.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(ie.j)(e, t, r))
					});
					const {
						currentPage: d
					} = o.platform;
					if (d) {
						const e = [ct.i];
						if (Object(qt.j)(o) && e.push(ct.f), e.length > 0) {
							const t = Object(w.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return wn.a.initialize(o), {
						localStorageData: Object(Ze.B)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: r,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					Fs = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(jn.F)(n, a) || "";
						if (Jn(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, a));
							const e = Object(qt.e)(n);
							e && l.dispatch(x(e))
						}
						ls.a.publish(it.c, o, document)
					});
					const p = l.getState(),
						b = Object(Ms.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(E(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(jn.F)(p, h) || "";
					if (h) {
						l.dispatch(C(g, h));
						const e = Object(qt.e)(p);
						e && l.dispatch(x(e))
					}
					const f = Object(jn.F)(p, h) || "",
						v = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: v
					}), l.dispatch(Cs({
						localStorageData: d
					})), Object(cs.c)(p) && (l.dispatch(ae()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ct.x]))), l.dispatch(ys()), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(jn.F)(e, a) || "";
						if (Object(D.a)(), Jn(i, {
								country: e.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(B.b)(_.m.Redesign, {
									page: a,
									type: "rum"
								}), Object(N.c)(e.meta.userAgent) && window.innerWidth > lt.b) {
								const t = Object(o.f)(c);
								A.a && A.a.timing && ln.b.isEnabled && (ln.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), ln.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(kn.a)()],
									s = !0;
								if (Object(qt.g)(e)) {
									const t = Object(Nn.a)(e);
									n.push(Object(Nn.c)(t))
								}
								const r = {
									isLoggedIn: Object(O.P)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(Pn.k)(r.routeMatch, l.getState(), H.TimerType.Initial, i, r.urlParams);
							const d = Object(k.a)(window.location.href);
							d && d.get(ct.a) && history.replaceState(history.state, "", Object(w.a)(window.location.href, [ct.a])), Object(L.a)(d.get(ct.G)) && l.dispatch(Object(pe.f)({
								kind: Xn.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(ct.H) && (l.dispatch(Object(K.a)(d.get(ct.H))), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ct.H])));
							let u = !1;
							const m = Object(O.S)(e);
							(Object(xn.b)(at.b.JustLoggedIn) || m) && (l.dispatch(Object(pe.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(xn.c)(at.b.JustLoggedIn), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ct.q]))), Object(xn.b)(at.b.JustLoggedOut) && (u = !0, Object(xn.c)(at.b.JustLoggedOut)), re().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(Ps.openReonboardingModalIfNeeded)());
							let b;
							ee(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(te())), e(te())
							});
							const h = ss(e);
							if (h || !1 === Ze.U()) h && b && b(), p();
							else {
								const e = () => {
									b && b(), p()
								};
								re().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
							}
							if (a === _.Nb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(z.c)())
						}
						Object(O.P)(l.getState()) && l.dispatch(Object(V.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object(oe.d)()), await Object(S.a)() && Object(Mn.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = is(e);
								t && (await (async e => {
									return (await Object(se.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ze.Tb(Date.now()), Object(B.a)(Object(Mn.a)("tab_backgrounded")(t))), (e => Object(Ht.c)(e, {
									experimentEligibilitySelector: e => !Object($.d)(e),
									experimentName: rt.qc
								}) === rt.Cc.Enabled)(t) && "visible" === document.visibilityState && n && Object(Pn.k)(n.routeMatch, l.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ze.v(),
									t = Ze.w(),
									n = Ze.G(),
									s = Ze.Q();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(B.a)(Object(Mn.e)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Ze.cb(), Ze.gb(), Ze.eb(), Ze.db())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Is.d[n.locationState.clickId] && !Is.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Is.b)(n.locationState.clickId) : Object(Is.c)(n.locationState.clickId))
						}), Object($.g)(l.getState()) && An(l.getState), l.dispatch(Object(ue.n)())
					}), window.history.scrollRestoration = "manual", ls.a.attachStore(l), l.dispatch(Object(le.b)(R.a.PageLoad));
					const P = Ze.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						M = Ze.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ce.C)({
						posts: null != P ? P : []
					})), l.dispatch(Object(Q.k)({
						comments: null != M ? M : []
					})), Object(es.e)(l.getState()) && l.dispatch(Object(Es.e)()), Object(j.requestIdleCallback)(() => {
						if (Object(rs.g)(l.getState())) {
							const e = Ze.C();
							(!e || e && Date.now() - e.lastUpdated >= _.B) && l.dispatch(Object(ue.f)())
						}
					})
				},
				raven: {
					tags: {
						project: _.m.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(o.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.u)(),
				h = Object(a.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.R)(e, t)
				}),
				g = Object(o.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return r.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(l.O)(g),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !a,
						[m.a.onlyChildMargin]: !n
					})
				}, f))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: h,
					contentBanner: g,
					contentClassName: f,
					contentNavBar: v,
					disableFullscreen: O,
					fitPageToContent: C,
					forcedLayout: x,
					hideOnlyChildMargin: y,
					isCollectionLayout: E,
					isPageSwapped: P,
					maxWidth: j,
					navBar: S,
					redditStyle: _,
					sidebar: k,
					sidebars: w,
					trendingUnit: N,
					subredditId: M
				} = e, I = N ? "28px" : "0", T = P ? {
					marginRight: `${c.q}px`,
					marginTop: I
				} : {
					marginLeft: `${c.q}px`,
					marginTop: I
				}, A = k && r.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, E ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: T
				}, k), R = r.a.createElement(a.a, {
					hideOnlyChildMargin: y,
					className: f,
					disableFullscreen: O,
					fitPageToContent: C,
					forcedLayout: x,
					isCollectionLayout: E
				}, g, h);
				let L;
				L = w ? r.a.createElement(r.a.Fragment, null, w[0], R, w[1]) : P ? r.a.createElement(r.a.Fragment, null, A, R) : r.a.createElement(r.a.Fragment, null, R, A);
				const D = O ? `${j||d.a+2*c.m}px` : "100%",
					F = Object(s.useContext)(u.a);
				return r.a.createElement(m.a, {
					subredditId: M
				}, r.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, l.i, n, {
						[b.a.outerContainerExp]: F
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: l.h,
					redditStyle: _,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: b.a.innerContainer
				}, S, v, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: D
					}
				}, N), r.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: D
					}
				}, L))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(r);
			t.a = s.a.button("inlineButton", o.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function r(e) {
				return "object" != typeof e[0]
			}
			var o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(o || (o = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.r.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.r.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: o.a,
					chunk: r.r.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: o.c,
					chunk: r.r.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: o.b,
					chunk: r.r.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(o.a)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.r.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.COLLECTION_COMMENTS
					},
					prefetches: [r.r.FRONTPAGE, r.r.COMMENTS_PAGE, r.r.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CommentsPage/index.tsx"
				}
			});
			let c = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"];
			c = Object(o.a)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: r.r.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [r.r.FRONTPAGE, r.r.SUBREDDIT]
				}),
				m = [u(r.Nb.COMMENTS, c), u(r.Nb.DUPLICATES, l), u(r.Nb.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CountrySitePage/index.tsx"
					}
				}),
				c = ["/"],
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: r.r.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(o.a)(c, !1),
					prefetches: [r.r.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: o.a,
					chunk: r.r.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: r.r.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FOLLOWERS
					},
					path: a,
					prefetches: [r.r.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.r.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.r.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.W).map(e => a.W[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(o.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.r.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [a.r.COMMENTS_PAGE, a.r.SUBREDDIT]
				},
				h = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: l.P
				},
				g = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.P)(e) && !Object(c.a)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: e => Object(c.a)(e)
				},
				v = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: l.P
				},
				O = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.P)(e) && !Object(c.a)(e)
				},
				C = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: e => Object(c.a)(e)
				},
				x = [h, g, f, v, O, C];
			t.a = x
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				l = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: r
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(o.fetchTopicPage)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: r.r.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				l = Object.keys(a.S).map(e => a.S[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.r.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				r = n("./src/reddit/routes/acknowledgements/index.ts"),
				o = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var l = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				d = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = n("./src/reddit/routes/countrySitePage/index.ts"),
				b = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var h = [],
				g = n("./src/reddit/routes/econManagement/index.ts");
			var f = {
					action: Object(b.a)(() => n.e(9).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				v = n("./src/lib/addQueryParams/index.ts");
			var O = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(v.a)("/", o)))
					},
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.r.COMMENTS_PAGE, c.r.FRONTPAGE]
				},
				C = n("./src/reddit/routes/followers/index.ts"),
				x = n("./src/reddit/routes/framedGild/index.ts"),
				y = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				P = n("./src/reddit/routes/geotagging/index.ts"),
				j = n("./src/reddit/routes/inbox/index.ts"),
				S = n("./src/reddit/routes/meta/index.ts"),
				_ = n("./src/reddit/routes/moderationPages/index.ts"),
				k = n("./src/reddit/routes/modListing/index.ts"),
				w = n("./src/reddit/routes/modQueue/index.ts"),
				N = n("./src/reddit/routes/multireddit/index.ts"),
				M = n("./src/reddit/routes/notificationsInbox/index.ts"),
				I = n("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.r.EMPTY,
				exact: !0,
				meta: {
					name: c.Nb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var A = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(I.b))
					},
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				R = n("./src/reddit/routes/postCreation/index.ts"),
				L = n("./src/reddit/routes/postDraft/index.ts"),
				D = n("./src/reddit/routes/powerups/index.ts");
			var F = {
					action: () => async e => await e(Object(i.c)(D.a)),
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				U = n("./src/reddit/routes/predictions/index.ts");
			var B = {
					action: () => async e => await e(Object(i.c)(U.a)),
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				G = n("./src/reddit/routes/premium/index.ts"),
				q = n("./src/reddit/routes/profileComments/index.ts"),
				H = n("./src/reddit/endpoints/me/index.ts"),
				W = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var V = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							queryParams: a
						} = e, c = await Object(H.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(W.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = o ? `/user/${l}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${l}/`,
							u = Object(v.a)(d, a);
						await t(Object(i.c)(u))
					},
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Q = n("./src/reddit/routes/profileModSettings/index.ts"),
				z = n("./src/reddit/routes/profileOverview/index.ts"),
				K = n("./src/reddit/routes/profilePosts/index.ts"),
				J = n("./src/reddit/routes/profilePrivate/index.ts"),
				Y = n("./src/server/helpers/canonicalUrl.tsx");
			var X = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = ((e, t, n) => {
							const s = `/user/${e}/${t?Object(Y.a)(t.replace("submitted","posts")):""}`;
							return Object(v.a)(s, n)
						})(n, s, r);
						await t(Object(i.c)(o))
					},
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Z = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var $ = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(v.a)(o, r);
						t(Object(i.c)(a))
					},
					chunk: c.r.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				ee = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				te = n("./src/reddit/routes/report/index.ts"),
				ne = n("./src/reddit/routes/searchResults/index.ts"),
				se = n("./src/reddit/routes/settings/index.ts");
			var re = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.r.EMPTY,
					meta: {
						name: c.Nb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.r.EMPTY,
					meta: {
						name: c.Nb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				oe = n("./src/reddit/routes/subreddit/index.ts"),
				ae = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ie = n("./src/reddit/routes/subredditWiki/index.ts"),
				ce = n("./src/reddit/routes/talk/index.ts"),
				le = n("./src/reddit/routes/topic/index.ts");
			const de = [r.a, o.a, a.b, l, d.a, u.a, p.a, V, X, $, ...s.a, ...m.a, f, ...E.a, P.a, G.a, D.b, U.b, ce.b, g.c, F, B, C.a, x.a, y.a, R.a, L.a, ...A, O, ...S.a, N.a, w.a, k.c, M.a, j.a, q.a, Q.a, z.a, K.a, Z.a, J.a, ee.a, ...se.a, ...re, ne.a, ...ie.a, le.a, oe.b, ae.a, _.a, te.a, ...h];
			t.a = de
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "/community-points/",
				r = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				l = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.P)(t()) || await e(Object(l.t)())
					},
					chunk: r.r.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e(0), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				g = {
					action: i.a,
					chunk: r.r.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: r.r.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.P)(n()) || await t(Object(l.t)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: r.r.EMPTY,
					exact: !0,
					meta: {
						name: r.Nb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, g, f, O]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				l = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.r.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./node_modules/react-router/esm/react-router.js");
			const d = Object.keys(a.gc).map(e => a.gc[e]).join("|"),
				u = [a.gc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				g = Object(o.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				f = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.a)(v);
			const O = e => !!Object(l.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				C = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.r.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Nb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.r.SUBREDDIT]
				};
			t.a = C
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				l = "/me/m/:multiredditName",
				d = Object.keys(a.W).map(e => `${l}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.r.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.r.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.r.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.r.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.POST_DRAFT
					},
					path: a,
					prefetches: [r.r.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: o.a,
					chunk: r.r.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.POWERUPS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: o.a,
					chunk: r.r.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.r.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.r.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.r.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.r.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.r.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Nb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.r.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				l = {
					path: c,
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.r.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.r.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.r.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.r.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.r.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.r.FRONTPAGE, r.r.SUBREDDIT, r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.dc).map(e => a.dc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.r.SETTINGS,
					exact: !0,
					meta: {
						name: a.Nb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.r.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Nb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: r.r.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(a.a)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: o.r.EMPTY,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.r.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [o.r.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === o.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = r.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, r.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: o.a,
					chunk: r.r.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.r.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.TOPIC
					},
					prefetches: [r.r.COMMENTS_PAGE, r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/helpers/chooseVariant/index.ts"),
				m = n("./src/reddit/selectors/experiments/index.ts");
			const p = Object(a.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: m.f,
				experimentName: l.zd
			}), e => e === l.Dd.Enabled);
			var b = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				h = n("./src/reddit/selectors/experiments/magicLink.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/selectors/accountManager/modalData.ts"),
				v = n("./src/reddit/selectors/meta.ts");
			const O = Object(a.a)(m.f, v.b, f.a, (e, t, n) => e && "DE" === t && n === g.a.Report),
				C = Object(a.a)(e => Object(u.c)(e, {
					experimentEligibilitySelector: O,
					experimentName: l.ie
				}), e => e === l.re.Enabled);
			var x = n("./src/lib/getParsedUserAgent/index.ts");
			const y = Object(a.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: e => Object(x.g)(e.meta.userAgent) && Object(m.f)(e),
				experimentName: l.bf
			}), e => e === l.pf.Enabled);
			var E = n("./src/reddit/selectors/responsiveSettings.ts");
			const P = Object(a.c)({
					frontpageSignupVariant: d.a,
					magicLinkVariant: h.a,
					ssoLoginLinkVariant: e => Object(u.c)(e, {
						experimentEligibilitySelector: e => !Object(m.e)(e),
						experimentName: l.ff
					}),
					blockingInterstitialVariant: b.e,
					blockingInterstitialV2Variant: b.f
				}),
				j = Object(a.c)({
					isGoogleSsoGisEnabled: p,
					isNetzDGComplianceEnabled: C,
					isSafariOneTapEnabled: y,
					isBlockingInterstitialEnabled: b.b,
					isBlockingInterstitialV2Enabled: b.c
				}),
				S = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(f.c)(e), f.a, E.a, v.i, P, j, (e, t, n, a, d, u, m, p) => {
					const {
						blockingInterstitialVariant: b,
						blockingInterstitialV2Variant: h,
						frontpageSignupVariant: g,
						ssoLoginLinkVariant: f,
						magicLinkVariant: v
					} = m, {
						isBlockingInterstitialEnabled: O,
						isBlockingInterstitialV2Enabled: C,
						isGoogleSsoGisEnabled: x,
						isNetzDGComplianceEnabled: y,
						isSafariOneTapEnabled: E
					} = p;
					let P = `${o.a.accountManagerOrigin}${e}`;
					if (P = Object(i.a)(P, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (P = Object(i.a)(P, {
							[`experiment_${l.ff}`]: f
						})), x && (P = Object(i.a)(P, {
							[`experiment_${l.zd}`]: "enabled"
						})), y && (P = Object(i.a)(P, {
							[`experiment_${l.ie}`]: l.re.Enabled,
							thing_id: n
						})), P = Object(i.a)(P, {
							experiment_d2x_onboarding: "enabled"
						}), E && (P = Object(i.a)(P, {
							[`experiment_${l.bf}`]: "enabled"
						})), O && (P = Object(i.a)(P, {
							[`experiment_${l.Fb}`]: b
						})), C && (P = Object(i.a)(P, {
							[`experiment_${l.Gb}`]: h
						})), g && (P = Object(i.a)(P, {
							[l.Ec]: g,
							uiMode: t
						})), v && (P = Object(i.a)(P, {
							[`experiment_${l.Ud}`]: v
						})), d && (P = Object(i.a)(P, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== r.DEFAULT_LOCALE && e && (P = Object(i.a)(P, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? P : P = Object(i.a)(P, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				o = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/models/EconManagement/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: r.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case o.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Loading
						};
					case o.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Error
						};
					case o.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: r.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case o.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					default:
						return e
				}
			};
			Object(s.a)({
				pages: {
					econManagement: i
				}
			});
			const c = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || r.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return r && r.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, r;
					return (null === (r = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === r ? void 0 : r.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				l = e => i.find(t => !!Object(a.a)(c(e, t))),
				d = Object(s.a)(l, e => !!e),
				u = e => {
					const t = l(e);
					return !!t && c(e, t) === r.Y.SkipOnboarding
				},
				m = e => {
					const t = l(e);
					return !!t && c(e, t) === r.Y.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = Object(s.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: e => Object(i.g)(e) && Object(a.f)(e),
				experimentName: r.lc
			}), e => e === r.pb.Enabled)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: o.P,
					experimentName: s.jd
				});
				return !(!t || Object(s.Nf)(t))
			}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.Y, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(o.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: r.Ec,
					throttledVariants: {
						[r.yd.CurrentThrottled]: r.Ec
					}
				}), i.a),
				m = e => e === r.yd.CurrentThrottled,
				p = e => e === r.yd.CurrentThrottled || e === r.yd.CurrentUnthrottled || e === r.yd.CurrentUnthrottledCopy || e === r.yd.NewPopUnthrottledCopy,
				b = e => e === r.yd.NewPopUnthrottledCopy,
				h = e => e === r.yd.NewPageUnthrottledCopy || e === r.yd.NewPageUnthrottledCopyFields,
				g = e => e === r.yd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Md,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.Qd.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.fc,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.Ac.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ib,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.Od.ContinuousScroll),
				b = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Jb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.Pd.Enabled),
				g = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Tb,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.kb.Enabled)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Mb,
					experimentEligibilitySelector: a.e
				}), e => e === r.ab.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Nb,
					experimentEligibilitySelector: a.e
				}), e => e === r.bb.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ob,
					experimentEligibilitySelector: a.e
				}), e => e === r.cb.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Pb,
					experimentEligibilitySelector: a.e
				}), e => e === r.db.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Rb,
					experimentEligibilitySelector: a.e
				}), e => e === r.fb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Qb,
					experimentEligibilitySelector: a.e
				}), e => e === r.eb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentName: s.he,
				experimentEligibilitySelector: r.a
			}) === s.qe.Enabled
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ee
					}) === s.od
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.De
					}) === s.od
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ue
					}) === s.od
				},
				l = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.te
					}) === s.od
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/featureFlags/subredditPoints.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(r.a)(e);
					if (!t) return null;
					const n = Object(o.M)(e),
						a = [];
					for (const r of t) {
						const t = e.subreddits.models[r];
						if (!t) return null;
						const o = Object(i.h)(e, {
							subredditId: r
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || a.push({
							id: r,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return a
				},
				l = Object(a.a)(c, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.features.removalReasons.reasonOrder[n]) {
						return e.features.removalReasons.reasonOrder[n].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				r = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				o = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				l = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				d = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(l, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(o.B)(n)
				}, (e, t) => t && (e === r.Nb.COMMENTS || e === r.Nb.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Db, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Db, e => e && e.find(e => e === o.a.Apple)),
				d = Object(s.a)(i.Db, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.g].includes(e))
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"edd5d18f5e93"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "vendors~Reddit", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit~Subreddit", "Governance~Reddit", "AuthorHovercard~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.2b1596b7361881af96d3.js.map