// https://www.redditstatic.com/desktop2x/Reddit.1ba09a408fbf57d01197.js
// Retrieved at 10/27/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/lib/activeUserCountByLiveChatId/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = 3e5;

			function o() {
				let e;
				return function(t, n) {
					return e && clearTimeout(e), e = setTimeout(t, n)
				}
			}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const o = 120 * s.mb;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= o
					}
				})()), e
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
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = {
				alien500: "#3690ea",
				alien600: "#006dc6",
				berry300: "#e4abff",
				berry500: "#b44ac0",
				berry600: "#9c3cac",
				mango500: "#ffd635",
				mango600: "#ff6600",
				mint600: "#009eaa",
				narwhal100: "#f1f23f5",
				narwhal200: "#e9ebed",
				narwhal300: "#d4d7d9",
				narwhal600: "#989ca0",
				narwhal700: "#898d90",
				orangeRed600: "#fb133a",
				orangeRed700: "#be0039",
				orca50: "#5a5c5e",
				orca200: "#464748",
				orca300: "#3a3a3a",
				orca600: "#242424",
				orca700: "#1E1E1E",
				periwinkle300: "#94b3ff",
				periwinkle500: "#6a5cff",
				periwinkle600: "#5349da",
				sakura500: "#ff3881",
				error: "#ea0027",
				white: "#ffffff",
				black: "#000000",
				nightTone1: "#282829",
				nightTone2: "#343536",
				nightTone3: "#3A3A3C",
				nightTone4: "#D8DADC",
				nightTone5: "#1A232C",
				nightTone6: "#29292A"
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [a, c] = Object(o.useState)(null), [l, d] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), h = Object(o.useCallback)(() => m(!u), [u]), g = Object(o.useMemo)(() => {
					const t = i(e);
					return l ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: l
						}
					})) : t
				}, [l, e]), {
					attributes: f,
					styles: v,
					update: O
				} = Object(r.a)(t, a, g);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: v.arrow,
						...f.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...f.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: O
				}), [d, f, c, b, p, v, t, n, h, u, O])
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
					const o = n.length,
						r = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - r === o
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/throwDevError.ts");
			const o = e => {
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
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					o.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							o.a.write(() => t.scrollTo({
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.ob.POST,
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
						return Object(o.a)(Object(r.a)(e, [a.a]), {
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
						Object(o.a)(Object(r.a)(e, [a.a]), {
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
			n.d(t, "f", (function() {
				return ge
			})), n.d(t, "r", (function() {
				return Oe
			})), n.d(t, "p", (function() {
				return Ce
			})), n.d(t, "t", (function() {
				return xe
			})), n.d(t, "w", (function() {
				return _e
			})), n.d(t, "q", (function() {
				return je
			})), n.d(t, "v", (function() {
				return ke
			})), n.d(t, "o", (function() {
				return Ne
			})), n.d(t, "m", (function() {
				return Me
			})), n.d(t, "b", (function() {
				return Ae
			})), n.d(t, "c", (function() {
				return Le
			})), n.d(t, "s", (function() {
				return De
			})), n.d(t, "g", (function() {
				return Fe
			})), n.d(t, "h", (function() {
				return Ge
			})), n.d(t, "k", (function() {
				return Ue
			})), n.d(t, "e", (function() {
				return He
			})), n.d(t, "d", (function() {
				return ze
			})), n.d(t, "a", (function() {
				return Qe
			})), n.d(t, "j", (function() {
				return Ke
			})), n.d(t, "i", (function() {
				return Ye
			})), n.d(t, "l", (function() {
				return $e
			})), n.d(t, "u", (function() {
				return et
			})), n.d(t, "n", (function() {
				return tt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/lib/scroll/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/onboarding/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/constants/index.ts"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				_ = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = n("./src/reddit/helpers/genericServerError/index.ts"),
				P = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				N = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				I = n("./src/reddit/helpers/graphql/helpers.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				T = n("./src/redditGQL/operations/CreateComment.json");
			const R = (e, t, n, s) => {
					let o, r;
					if (s === N.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = x.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, s) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === N.i.MARKDOWN ? o.text = n.text : (o.text = null, o.richtext_json = s), Object(C.a)(Object(E.a)(e, [_.a]), {
						method: O.ob.POST,
						endpoint: Object(j.a)(Object(w.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(P.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(P.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(S.a)()
					})
				}, D = async (e, t, n, s, o) => {
					const r = s.commentMode === N.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: r ? s.text : null,
								richText: r ? null : o
							}
						};
					return Object(y.a)(e, {
						...T,
						variables: {
							input: a
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
									comment: Object(A.a)(t.commentInfo)
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
			var G = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = n("./src/reddit/endpoints/post/index.tsx"),
				B = n("./src/reddit/endpoints/post/convert.ts"),
				H = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				q = n("./src/reddit/featureFlags/index.ts"),
				W = n("./src/reddit/helpers/comment/index.ts"),
				V = n("./src/reddit/helpers/correlationIdTracker.ts"),
				z = n("./src/reddit/helpers/dom/index.ts"),
				Q = n("./src/reddit/helpers/localStorage/index.ts"),
				K = n("./src/reddit/helpers/sessionStorage/index.ts"),
				Z = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				J = n("./src/reddit/models/Comment/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				se = n("./src/reddit/selectors/commentSelector.ts"),
				oe = n("./src/reddit/selectors/experiments/chat.ts"),
				re = n("./src/reddit/constants/experiments.ts"),
				ae = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./node_modules/reselect/es/index.js");
			const ce = Object(ie.a)(e => Object(ae.c)(e, {
				experimentEligibilitySelector: ae.a,
				experimentName: re.Jb
			}), e => e === re.Vd);
			var le = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = n("./src/reddit/selectors/platform.ts"),
				ue = n("./src/reddit/selectors/posts.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/actions/comment/index.ts"),
				be = n("./src/reddit/actions/comment/constants.ts");
			const he = Object(o.a)(be.m),
				ge = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(me.T)(o) && t) {
								const s = he({
									hasFocus: t,
									draftKey: n
								});
								e(Object(i.startChangeUsernameFlow)(s))
							} else e(he({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				fe = Object(o.a)(be.L),
				ve = Object(o.a)(be.H),
				Oe = Object(o.a)(be.N),
				Ce = Object(o.a)(be.M),
				ye = Object(o.a)(be.K),
				Ee = async (e, t, n, s, o) => {
					const r = s.ok && s.body,
						a = r && r.comment && r.comment.id;
					await Z.g(e, n, t, o, a)
				}, xe = "Toxicity_Warning__Modal", _e = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						a = Object(de.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: d
					} = e;
					if (q.d.enableToxicityWarning(r)) {
						if (!(await R(o(), i, c, d))) return void t(Object(l.i)(xe))
					}
					t(je(e))
				}, je = e => async (t, n) => {
					t(Object(l.g)(xe));
					const s = n(),
						o = Object(le.a)(s),
						r = Object(le.c)(s);
					if (!s.user.account && o) {
						const n = Object(W.e)(e.formData, s.uploads),
							o = Object(W.c)(e.formData, s.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Pe(e, !1))
				};

			function Se(e, t) {
				return e === N.i.MARKDOWN && ce(t)
			}
			const Pe = (e, t, n, o) => {
					let {
						postId: r,
						commentsPageKey: i,
						draftKey: c,
						formData: l,
						editorMode: d,
						disableAutofocus: m,
						isLiveStreaming: f
					} = e;
					return async (e, v, O) => {
						let {
							apiContext: C,
							gqlContext: y
						} = O;
						var E;
						const x = v(),
							_ = Object(te.d)(x, {
								postId: r
							}) && Object(oe.i)(x),
							j = _ ? Object(W.a)() : c,
							S = Object(se.e)(x, {
								commentId: j
							}),
							P = Object(me.l)(x);
						if (!P) return;
						if (S && !_) return;
						t || e(fe({
							draftKey: j,
							draft: l,
							commentsPageKey: i,
							optimisticComment: _ ? Object(W.b)({
								temporalId: j,
								draft: l,
								post: Object(ue.G)(x, {
									postId: r
								}),
								author: P,
								subredditId: (null === (E = Object(de.e)(x)) || void 0 === E ? void 0 : E.id) || ""
							}) : void 0
						}));
						const k = P.displayText,
							w = l.commentMode;
						let M;
						const I = f ? "" : t && n ? n : Object(W.e)(l, x.uploads),
							A = Object(W.f)(I, x.uploads);
						if (f ? (M = await Object(H.i)(C(), r, l, k), e(Object(p.a)({
								streamId: r,
								level: M.body.automuteLevel
							}))) : M = Se(w, x) ? await D(y(), r, null, l, I) : await L(C(), r, l, I), M.ok) {
							let n;
							if (n = M.body, e(Oe({
									...n,
									headCommentId: Object(ne.w)(x, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: j,
									upload: A
								})), t) {
								const e = Object(de.i)(x);
								Object(a.a)(!!e)
							}
							const s = Object(ue.G)(v(), {
								postId: r
							});
							e(Object(u.y)(s, g.a.CommentSubmitted))
						} else {
							if (M.error) {
								const e = t && o ? o : Object(W.c)(l, x.uploads);
								Z.f({
									state: x,
									bodyText: e,
									postId: r,
									error: M.error,
									uploadMetadata: null == A ? void 0 : A.metadata
								})
							}
							const n = M.error && M.error.fields && M.error.fields[0] ? M.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ye({
								draftKey: j,
								error: M.error
							})), _ || e(Object(h.f)({
								duration: h.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						Ee(v(), i, d, M, null == A ? void 0 : A.metadata).then(() => M.ok && d === N.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), m || Object(b.d)(), t && Object(K.a)()
					}
				},
				ke = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e, m = n(), p = Object(de.e)(m);
					let b = "";
					if (p && (b = p.name), q.d.enableToxicityWarning(m)) {
						if (!(await R(o(), b, d, u))) return void t(Object(l.i)(xe))
					}
					t(Ne({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: d,
						editorMode: u
					}))
				}, Ne = e => async (t, n) => {
					t(Object(l.g)(xe));
					const s = n(),
						o = Object(le.a)(s),
						r = Object(le.c)(s);
					if (!s.user.account && o) {
						const n = Object(W.e)(e.formData, s.uploads),
							o = Object(W.c)(e.formData, s.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(we(e, !1))
				}, we = (e, t, n, s) => async (o, r, i) => {
					let {
						apiContext: c,
						gqlContext: l
					} = i;
					var d;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: h,
						formData: g,
						editorMode: f
					} = e, v = r(), O = Object(se.b)(v, {
						commentId: u
					}), C = O && Object(te.d)(v, {
						postId: O.postId
					}) && Object(oe.i)(v), y = C ? Object(W.a)() : h, E = Object(se.e)(v, {
						commentId: y
					}), x = Object(me.l)(v);
					if (!x) return;
					if (E && !C) return;
					t || o(fe({
						draftKey: y,
						draft: g,
						commentsPageKey: m,
						optimisticComment: C && O ? Object(W.b)({
							temporalId: y,
							draft: g,
							post: Object(ue.G)(v, {
								postId: O.postId
							}),
							author: x,
							subredditId: (null === (d = Object(de.e)(v)) || void 0 === d ? void 0 : d.id) || "",
							parentId: O.id
						}) : void 0
					})), o(Ae({
						parentCommentId: u,
						commentsPageKey: m
					}));
					const _ = g.commentMode,
						j = t && n ? n : Object(W.e)(g, v.uploads),
						S = Object(W.f)(j, v.uploads);
					let P;
					if ((P = Se(_, v) ? await D(l(), null, u, g, j) : await L(c(), u, g, j)).ok) {
						if (o(Ce({
								...P.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: y,
								depth: p + 1,
								upload: S
							})), t) {
							const e = Object(de.i)(v);
							Object(a.a)(!!e)
						}
					} else {
						if (P.error) {
							if (!O) return;
							const e = t && s ? s : Object(W.c)(g, v.uploads);
							Z.f({
								state: v,
								bodyText: e,
								postId: O.postId,
								parentId: u,
								error: P.error,
								uploadMetadata: null == S ? void 0 : S.metadata
							})
						}
						o(ye({
							draftKey: y,
							error: P.error
						}))
					}
					Ee(r(), m, f, P, null == S ? void 0 : S.metadata), Object(b.d)(), t && Object(K.a)()
				}, Me = () => async e => {
					const t = Object(K.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(d.skipOnboardingModal)()), o ? await e(Pe({
							...t.comment,
							postId: o
						}, !0, r, a)) : s && void 0 !== n && await e(we({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, a))
					}
				}, Ie = Object(o.a)(be.s), Ae = Object(o.a)(be.r), Te = Object(o.a)(be.n), Re = (Object(o.a)(be.i), Object(o.a)(be.o)), Le = (Object(o.a)(be.v), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === N.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) o(Re({
						editorMode: e,
						draftKey: n,
						content: c ? Y.i : ""
					})), o(Object(m.c)(e));
					else {
						o(Object(m.b)(n));
						const r = await Object(B.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(m.a)(n)), o(Re({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(m.c)(e))
						} else o(Object(m.a)(n)), o(Object(h.f)({
							duration: h.a,
							kind: ee.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), De = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const a = o(),
							d = Object(r.a)(X.c.replyToComment, n);
						if (!Object(me.R)(o()) && !Object(le.a)(a)) return e(Object(c.openRegisterModal)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ne.m)(o(), {
								commentId: n
							})
						}));
						const u = a.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ae({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = a.user.prefs.commentMode,
							g = Object(z.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === N.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									n = $.s("", null),
									s = $.l([n]);
								b = {
									document: [$.c(t), s]
								}
							}
						}
						const f = a.features.comments.drafts[d];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.T)(a)) {
							const s = Ie({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: d,
								formData: v
							});
							e(Object(i.startChangeUsernameFlow)(s))
						} else e(Ie({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: d,
							formData: v
						}))
					}
				}, Fe = e => async t => {
					t(Object(pe.r)(e)), t(He(e))
				}, Ge = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ae({
							parentCommentId: t,
							commentsPageKey: n
						})), e(De({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Ue = (e, t) => n => n(Te({
					draftKey: e,
					formData: t
				})), Be = Object(o.a)(be.u), He = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (Z.c(i), e(Be({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: X.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, qe = Object(o.a)(be.F), We = Object(o.a)(be.E), Ve = Object(o.a)(be.G), ze = Object(o.a)(be.j), Qe = Object(o.a)(be.f), Ke = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: o
					} = e;
					return async (e, r, a) => {
						let {
							apiContext: i,
							gqlContext: c
						} = a;
						const l = r();
						if (!l.user.account) return;
						e(qe({
							draftKey: s
						})), Z.d(l);
						const d = Object(W.e)(o, l.uploads),
							u = o.commentMode;
						let m;
						if ((m = Se(u, l) ? await (async (e, t, n, s, o) => {
								const r = o === N.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
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
													...Object(A.c)(t.content)
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
							})(c(), t, o, d, u) : await (async (e, t, n, s, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === N.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = s), Object(C.a)(Object(E.a)(e, [_.a]), {
									endpoint: Object(j.a)(Object(M.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
									method: O.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(k.a)(e)
								} : {
									...e,
									body: {
										comment: Object(P.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(P.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(S.a)()
								})
							})(i(), t, o, d, u)).ok) {
							const o = m.body;
							e(Ve({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(pe.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(We({
							draftKey: s,
							error: m.error
						}))
					}
				}, Ze = Object(o.a)(be.C), Je = Object(o.a)(be.B), Xe = Object(o.a)(be.D), Ye = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s();
					n(Ze({
						id: e
					})), Z.a(e, a);
					const i = await ((e, t) => Object(C.a)(Object(E.a)(e, [_.a]), {
						endpoint: Object(j.a)(`${e.apiUrl}/api/del`),
						method: O.ob.POST,
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
					}))(r(), e);
					i.ok ? n(Xe({
						id: e,
						postId: t
					})) : n(Je({
						id: e,
						error: i.error
					}))
				}, $e = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(U.q)(o(), e, r)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, l, d, u, m;
					n(Object(pe.c)());
					const p = e => Object(h.f)(Object(h.e)(e, ee.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === f.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === J.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(pe.p)(i)), (await ((e, t) => Object(y.a)(e, {
								...G,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(Q.xb)(null !== (u = null === (d = null === (l = o().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(pe.p)(i)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: s = !1
				} = e;
				return async (e, o) => {
					const r = o(),
						a = Object(se.b)(r, {
							commentId: t
						});
					if (!a) return;
					e(ve({
						commentId: t,
						commentsPageKey: n
					}));
					const i = {
						commentMode: a.media.rteMode,
						draftType: a.parentId ? X.c.replyToComment : X.c.replyToPost,
						rtJson: a.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (a.parentId) {
						const t = Object(se.b)(r, {
								commentId: a.parentId
							}),
							s = Object(ne.j)(r, {
								commentId: a.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === s) return;
						await e(Ne({
							commentsPageKey: n,
							draftKey: a.id,
							parentCommentDepth: s,
							parentCommentId: t.id,
							formData: i,
							editorMode: a.media.rteMode
						}))
					} else await e(je({
						postId: a.postId,
						commentsPageKey: n,
						draftKey: a.id,
						formData: i,
						editorMode: a.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: s
					}))
				}
			}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				o = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				r = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return P
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				l = n("./src/redditGQL/operations/GiveCoins.json"),
				d = n("./src/redditGQL/operations/PerformEconAdminAction.json"),
				u = n("./src/redditGQL/operations/RemoveCoins.json");
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/routes/econManagement/index.ts"),
				b = n("./src/reddit/selectors/econManagement.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const g = Object(s.a)(o.c),
				f = Object(s.a)(o.b),
				v = Object(s.a)(o.e),
				O = Object(s.a)(o.f),
				C = Object(s.a)(o.d),
				y = Object(s.a)(o.a),
				E = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						i = Object(h.l)(o);
					if (i && i.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...c,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(g(t))
					} catch (l) {
						e(f()), e(Object(r.f)({
							duration: r.a,
							kind: m.b.Error,
							text: l.message
						}))
					}
				}, x = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = n(),
						l = Object(h.l)(i);
					if (l && l.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${p.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(v());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...c,
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
							})(o(), e);
							t(O(n))
						} catch (d) {
							t(C()), t(Object(r.f)({
								duration: r.a,
								kind: m.b.Error,
								text: d.message
							}))
						}
					}
				}, _ = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = n(),
						l = Object(h.l)(i);
					if (!l || !l.isEmployee) return;
					const d = Object(b.b)(i);
					if (d) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...c,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const o = s.body.data.econAdminPanel.response;
							return JSON.parse(o)
						})(o(), d.prefixedId, e);
						t(y({
							entity: n,
							type: e
						}))
					} catch (u) {
						t(Object(r.f)({
							duration: r.a,
							kind: m.b.Error,
							text: u.message
						}))
					}
				}, j = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: c
					} = i;
					var l;
					const u = o(),
						g = Object(h.l)(u);
					if (g && g.isEmployee && Object(b.b)(u)) try {
						await (async (e, t, n, s) => {
							const o = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...d,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...o
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(o)}`)
						})(c(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: m.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}));
						const o = null === (l = u.platform.currentPage) || void 0 === l ? void 0 : l.queryParams[p.b];
						o && s(x(o))
					} catch (f) {
						s(Object(r.f)({
							duration: r.a,
							kind: m.b.Error,
							text: f.message
						}))
					}
				}, S = (e, t) => async (n, s, o) => {
					let {
						gqlContext: c
					} = o;
					const d = s(),
						u = Object(h.l)(d);
					if (u && u.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...l,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(i.c)(s)) throw new Error(`Could not give ${n} coins to ${t}`);
							return s.body.data.giveCoins
						})(c(), e, t);
						n(Object(r.f)({
							duration: r.a,
							kind: m.b.SuccessAward,
							text: `Gave ${t} coins to ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(r.f)({
							duration: r.a,
							kind: m.b.Error,
							text: p.message
						}))
					}
				}, P = (e, t) => async (n, s, o) => {
					let {
						gqlContext: c
					} = o;
					const l = s(),
						d = Object(h.l)(l);
					if (d && d.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...u,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(i.c)(s)) throw new Error(`Could not remove ${n} coins from ${t}`);
							return s.body.data.removeCoins
						})(c(), e, t);
						n(Object(r.f)({
							duration: r.a,
							kind: m.b.SuccessAward,
							text: `Removed ${t} coins from ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(r.f)({
							duration: r.a,
							kind: m.b.Error,
							text: p.message
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
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.ob.GET
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
				o = n.n(s),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(d.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.B)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.c)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(l.h))
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, o) => {
				let {
					apiContext: r
				} = o;
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
				const d = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.ob.POST,
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
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(r.d)(r.a.GildingFlow),
					thingId: c
				})), Object(a.R)(i) || await t(o.s());
				const l = n();
				if (!Object(a.R)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => async (e, t) => {
				const n = t();
				Object(o.R)(n) || await e(s.s());
				const r = t();
				if (!Object(o.R)(r)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(o.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: o
				} = n;
				try {
					const t = await Object(a.b)(o());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), r.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return h
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./src/lib/cache/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				l = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/redditGQL/operations/GetIsLiveContentAvailable.json");
			var p = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				b = n("./src/reddit/selectors/user.ts");
			Object(r.a)({
				features: {
					happeningNow: p.a
				}
			});
			const h = Object(a.a)(l.e),
				g = Object(a.a)(l.d),
				f = Object(a.a)(l.f),
				v = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await (e => Object(u.a)(e, m))(s());
					if (!Object(i.c)(o)) return;
					const r = !!o.body.data.isLiveContentAvailable;
					e(g(r));
					const a = t(),
						c = Object(b.j)(a);
					r && c && !C(c) && e(f(!0))
				}, O = e => Object(s.c)(o.s.HAPPENING_NOW, o.A.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), C = e => {
					const t = O(e);
					return !!Object(s.b)(t)
				}, y = () => async (e, t) => {
					const n = t(),
						o = Object(b.j)(n);
					if (o) {
						const e = O(o);
						Object(s.d)(e, !0, s.a)
					}
					e(f(!1))
				}, E = () => async (e, t) => {
					e(d.m({
						title: c.h()
					}))
				}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.s)()), Object(a.R)(t()) || e(Object(i.openLoginModal)())
			}
		},
		"./src/reddit/actions/pages/communityHubs.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.d)()
				}))
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/econManagement/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.R)(n),
					d = Object(c.O)(n);
				l && d || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.R)(n),
					d = Object(c.O)(n);
				l && d || await e(Object(o.c)("/")), e(Object(r.m)({
					title: s.fbt._("Econ control panel", null, {
						hk: "3DJjYu"
					})
				}));
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.e)()
				})), Object(i.R)(t()) || await e(Object(a.s)()), await e(Object(o.b)()).then(() => {
					if (t().economics.me.data) return e(Object(o.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/noGasPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.j)()
				}))
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				o = n("./src/reddit/actions/economics/helpers/async.ts"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
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
						Object(c.R)(d) || n.push(e(Object(a.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.I)(t(), l);
						await e(Object(o.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.l)()
				})), await e(Object(a.s)()), Object(i.R)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/recap/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.n)()
				}))
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.s)()
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
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				g = (e, t, n) => async (o, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						C = t === l.i.RICH_TEXT,
						y = m.k;
					if (O && Object(d.H)(n)) return o(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (C && !n) return o(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void o(f(t));
					o(p(y));
					const E = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					E.ok ? (o(b(y)), o(h({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(f(t))) : (o(b(y)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.vb)(o + 1)
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
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(r.r),
				i = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(a({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/recap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/recap/constants.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/PersonalizedYearInReview.json");
			var i = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(o.f),
				d = Object(s.a)(o.e),
				u = Object(s.a)(o.d),
				m = Object(s.a)(o.k),
				p = Object(s.a)(o.j),
				b = Object(s.a)(o.i),
				h = (Object(s.a)(o.h), Object(s.a)(o.g), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var o, m;
					const p = t();
					if (!Object(c.R)(p)) return Object(i.a)(e, p);
					e(l());
					const b = await (async (e, t) => {
						return await Object(r.a)(e, {
							...a,
							variables: t
						})
					})(s(), {});
					if (!b.ok) {
						const t = b.error;
						return void e(u({
							error: t
						}))
					}
					const h = b.body,
						g = ((null === (m = null === (o = null == h ? void 0 : h.data) || void 0 === o ? void 0 : o.personalizedYearInReview) || void 0 === m ? void 0 : m.cards) || []).map((e, t) => ({
							...e,
							id: `wrapped_reddit${t}`
						}));
					e(d({
						cards: g
					}))
				}),
				g = Object(s.a)(o.c),
				f = Object(s.a)(o.l),
				v = Object(s.a)(o.b),
				O = Object(s.a)(o.a)
		},
		"./src/reddit/actions/recapGame.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "RECAP__GAME_TOGGLED", (function() {
				return l
			})), n.d(t, "RECAP__GAME_START", (function() {
				return d
			})), n.d(t, "RECAP__GAME_CLOSE", (function() {
				return u
			})), n.d(t, "RECAP__SET_ORIGINAL_NIGHT_MODE", (function() {
				return m
			})), n.d(t, "recapGameToggleAction", (function() {
				return p
			})), n.d(t, "recapGameStartAction", (function() {
				return b
			})), n.d(t, "recapGameCloseAction", (function() {
				return h
			})), n.d(t, "recapGameSetOriginalNightModeAction", (function() {
				return g
			})), n.d(t, "recapGameToggle", (function() {
				return f
			})), n.d(t, "recapGameClose", (function() {
				return v
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/reducers/features/recapGame/index.ts"),
				i = n("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				c = n("./src/reddit/selectors/recapGame.ts");
			Object(s.a)({
				features: {
					recapGame: a.b
				}
			});
			const l = "RECAP__GAME_TOGGLED",
				d = "RECAP__GAME_START",
				u = "RECAP__GAME_CLOSE",
				m = "RECAP__SET_ORIGINAL_NIGHT_MODE",
				p = Object(o.a)(l),
				b = Object(o.a)(d),
				h = Object(o.a)(u),
				g = Object(o.a)(m),
				f = () => async (e, t) => {
					const n = t();
					Object(i.a)(n) && e(p())
				}, v = () => async (e, t) => {
					const n = Object(c.a)(t());
					e(h()), e(Object(r.A)({
						nightmode: n.isNightModeOriginal
					}))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
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
						y = Object(h.c)(v),
						E = Object(m.b)(v),
						x = Object(u.a)(v),
						_ = [r.a.NsfwBlockingModal].includes(x),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(E),
						S = _ || j;
					if (O && "true" === O.contentEditable && C && y) n(o.b({
						parentCommentId: C,
						commentsPageKey: y
					})), Object(h.a)(C);
					else if (E && !S) Object(h.b)(c.b), n(Object(r.i)(E));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(a.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: P
					} = v.shortcuts;
					e(t && P ? l.b(P, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				h = Object(o.a)(b),
				g = "RANDOM_AVATAR_LOADED",
				f = Object(o.a)(g),
				v = (e, t, n) => async (s, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, h, g, f;
					const v = Object(m.b)(o()),
						O = await (async (e, t, n, s, o) => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(u(), e, t, n, v);
					if (!O.ok) throw new Error("User avatar failed to save");
					return s(Object(p.y)(O.body)), {
						accountIcon: null === (h = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === h ? void 0 : h.headshot_image_url,
						fullBodySnoovatar: null === (f = null === (g = O.body) || void 0 === g ? void 0 : g.avatar) || void 0 === f ? void 0 : f.image_url
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.ob.GET
						}))(s());
						t.ok && e(h(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}, C = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.ob.GET
						}))(s());
						t.ok && e(f(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts");
			const d = () => async (e, t) => {
				const n = t();
				Object(l.a)(Object(i.l)(n)), e(Object(r.s)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: r,
						share: d,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					} = e, g = n();
					r && Object(l.a)(Object(i.g)(r)(g)), Object(c.R)(g) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
						share: d,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					})) : await t(Object(s.openLoginModal)())
				}
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T",
				mModalUpdate: "_65PqClMblfoNGy-m9_49f"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				h = n("./src/reddit/actions/preferences.ts"),
				g = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/sso/constants.ts");
			const v = Object(g.a)(f.a),
				O = Object(g.a)(f.b);
			var C = n("./src/reddit/actions/survey/index.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				_ = n("./src/reddit/constants/history.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/counters/amModalDesignUpdate.ts"),
				k = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				N = n("./src/reddit/helpers/history/index.ts"),
				w = n("./src/reddit/helpers/sessionStorage/index.ts"),
				M = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				I = n("./src/reddit/helpers/trackers/onboarding.ts"),
				A = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Sso/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/accountManager/index.ts"),
				D = n("./src/reddit/selectors/accountManager/modalData.ts"),
				F = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				G = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/experiments/survey.ts"),
				W = n("./src/reddit/selectors/telemetry.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				Q = n.n(z);
			const K = m.a.iframe("IFrame", Q.a),
				Z = m.a.button("CloseButton", Q.a),
				J = m.a.wrapped(A.a, "Close", Q.a),
				X = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: D.a,
					frontpageSignupVariant: U.a,
					isAmModalDesignUpdateEnabled: G.a,
					isBlockingInterstitialEnabled: B.b,
					isBlockingInterstitialV2Enabled: B.c,
					isBlurredPreview: H.b,
					isCommentBeforeSignUpEnabled: F.a,
					isDismissSurveyEnabled: q.a,
					isHardBlockingInterstitialEnabled: B.d,
					isLoggedIn: V.R,
					isRegularOnboardingEnabled: F.b,
					redirectUrl: D.b
				}),
				Y = Object(i.b)(X, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(C.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(W.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(k.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(h.B)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(y.f)(Object(y.e)(t, R.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(O({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(y.f)(Object(y.e)(t, R.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(b.a)()),
					showToast: (t, n) => {
						e(Object(y.f)(Object(y.e)(t, n)))
					}
				})),
				$ = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === x.a.ChangePassword || t.type === x.a.Close || t.type === x.a.CreateAccount || t.type === x.a.GoogleOneTapDisplayed || t.type === x.a.GoogleOneTapFlowFailed || t.type === x.a.GoogleOneTapSkipped || t.type === x.a.Login || t.type === x.a.PreferenceStatus || t.type === x.a.Register || t.type === x.a.Resize || t.type === x.a.ShowStep || t.type === x.a.SSOLinkFail || t.type === x.a.SSOLinkSuccess || t.type === x.a.SSOUnlinkFail || t.type === x.a.SSOUnlinkSuccess || t.type === x.a.Subscribe || t.type === x.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				ee = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class te extends a.a.Component {
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
						const t = e === T.a.Apple ? j.a.LINK_APPLE_SSO : j.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === T.a.Apple ? j.a.UNLINK_APPLE_SSO : j.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(o.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.isOneTapSession = () => this.props.path === x.c.GoogleOneTap, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && $(e))
							if (t.type === x.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === x.a.Close) this.closedByUser();
						else if (t.type === x.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === x.a.Login) this.onLogIn();
						else if (t.type === x.a.ChangePassword) this.onChangePassword();
						else if (t.type === x.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === x.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === x.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === x.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === x.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === x.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === x.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === x.a.ShowStep ? this.onShowStep(t.step) : t.type === x.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp()
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(_.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.redirectTo(t, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, (e === x.b.Subscribe || this.props.isAmModalDesignUpdateEnabled && this.props.path === x.c.GoogleOneTap && e === x.b.SelectAccount) && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), R.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), R.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), R.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[S.u]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[S.F] = "true") : s[S.F] = "true"), e.isSignupModalSuccessful && (s[S.G] = "true"), e.isOneTapSession() && (s[S.v] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: o,
							isDismissSurveyEnabled: r,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = ee[this.currentStep];
							e && c(Object(I.A)(e))
						}
						s && e === p.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== p.a.NsfwBlockingModal && c(Object(M.a)()), o && Object(w.a)(), this.close(), this.isSignupModalDismissed && r && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose(), this.props.isAmModalDesignUpdateEnabled && Object(P.b)(P.a.Dismiss);
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
						return e && p.l.includes(e)
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
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === x.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isAmModalDesignUpdateEnabled: s,
						isHardBlockingInterstitialEnabled: o,
						path: r
					} = this.props, {
						iframeStyles: i
					} = this.state, c = (r === x.c.Index || r === x.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && o, l = this.props.showCloseButton && !c;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && a.a.createElement(Z, {
						onClick: this.closedByUser
					}, a.a.createElement(J, {
						className: Object(u.a)({
							[Q.a.mModalUpdate]: s
						})
					})))
				}
			}
			t.a = Y(Object(E.c)(te))
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
				mModalUpdate: "_13CJU7HQst3ucS6l2fTwdh",
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
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				removeTopPadding: "_33N4WmnRV24-NLLnXKccj3",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				removeOverflow: "_1TESSB-XqnzjiOpUWj2dND",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
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
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: s,
					unreadCount: i,
					testId: l
				} = e;
				return n ? o.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					}),
					"data-testid": l
				}, s || i < 1 ? "" : Object(a.b)(i)) : null
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: o,
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && o(), !1)
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
					return o.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
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
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
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
				return Z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			const O = (e, t) => async (n, o, r) => {
				let {
					apiContext: a
				} = r;
				const i = await (async (e, t, n) => Object(h.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: l.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					n(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: o
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
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				P = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const w = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.z)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(N.ub)(r)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(N.kb)(e),
					userSubreddit: Object(N.ub)(e)
				}),
				A = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...I
				});
			var T = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				L = n("./src/reddit/selectors/activeModalId.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				G = n("./src/reddit/selectors/posts.ts"),
				U = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = n.n(H),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const V = Object(x.a)(j.a),
				z = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Q extends r.a.Component {
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
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: q.a.HighlightWrapper
					}, r.a.createElement(S.b, {
						className: Object(c.a)(q.a.HighlightPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${z(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(T.b, {
						className: q.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(S.b, {
						displayText: z(W.a.First),
						isSelected: o === W.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(S.b, {
						displayText: z(W.a.Last),
						isSelected: o === W.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(S.b, {
						displayText: z(W.a.None),
						isSelected: o === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var K = Q;
			const Z = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Y = Object(x.a)(j.a),
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
					dropdownIsOpen: Object(U.b)(Z),
					highlightIsOpen: Object(U.b)(J),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(F.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: G.G,
					postPermalink: G.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(B.w)(e),
							o = !!Object(F.m)(e, {
								postId: n
							}),
							r = Object(G.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
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
							tooltipId: Z
						})),
						onOpenHighlightDropdown: t => {
							e(Object(d.h)({
								tooltipId: J
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(d.i)()),
						setContestMode: t => e(Object(p.W)(t, n)),
						showTooltip: () => e(Object(d.h)({
							tooltipId: X
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(w(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(A(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						contestModeModalIsOpen: o,
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
						suggestedSort: x,
						showTooltip: _,
						toggleContestModeModal: j
					} = this.props, N = h.contestMode, w = !b.search.includes(l.w.CONFIDENCE), I = O === l.w.CONFIDENCE && w, A = m && !I, L = l.y[O], D = L ? L() : "", F = x && O === x && !I ? this.addSuggestedLabel(D) : D, G = N ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = N ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), B = N ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), H = N && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, q.a.container, {
							[q.a.hideCommentSort]: !v && H
						}),
						ref: i
					}, r.a.createElement("div", {
						className: q.a.containerRow
					}, !H && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.DropdownContainer
					}, r.a.createElement(S.b, {
						className: Object(c.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: Z,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(T.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: a,
						tooltipId: Z
					}, [l.w.CONFIDENCE, l.w.TOP, l.w.NEW, l.w.CONTROVERSIAL, l.w.OLD, l.w.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							o = l.y[e],
							a = o ? o() : "";
						return r.a.createElement(E.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(S.b, {
							displayText: a,
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), A && !H && (x ? r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: O !== x ? this.setSortOnClick : this.clearSortOnClick
					}, O !== x ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: q.a.SetSort
					}, r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: _,
						onMouseLeave: d
					}, r.a.createElement(y.c, {
						className: q.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(R.a, {
						className: q.a.Info
					})))), m && r.a.createElement("button", {
						className: q.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(P.a, {
						className: q.a.ToggleSwitch,
						on: N
					}))), v && r.a.createElement("div", {
						className: q.a.containerRow
					}, r.a.createElement(K, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: M
					})), o && r.a.createElement(C.a, {
						actionText: U,
						headerText: G,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(_.c)(te))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(i.a, d({}, n, {
					className: Object(r.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(l.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(i.b)(n) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CreateAccountSection/index.m.less": function(e, t, n) {
			e.exports = {
				createTitle: "_2FBcfa5LIJrKSNuRAA7WWa",
				createDesc: "_2gHNfZLuOuUSh3Ppfyc0JX",
				createButton: "_2XQ3s48lqlzodYPpT2s-Iu"
			}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => r.a.createElement(c, {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => r.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
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
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
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
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				o = () => null;

			function r(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : o
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
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
				const r = o.fbt._("Animation of {award name} image", [o.fbt._param("award name", t.name)], {
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
					alt: r,
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
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				loggedInGoogleOneTap: "_2qW2MlTCwrBhUAXSCWhbPD"
			}
		},
		"./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-GasFeesEducationalModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-GasFeesEducationalModal").then(n.bind(null, "./src/reddit/components/Governance/GasFeesEducationalModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/GasFeesEducationalModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_GAS_FEES_EDUCATION, e => r.a.createElement(c, {
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => r.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
			Object(a.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
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
				adsExperiment: "_2Pmcl9xfKm5qKFFQAOdh-5",
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
				plain: "_31sNqParLPqyPZxIx1EWeU",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(o),
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
				f = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/awards/overlayIds.ts"),
				O = n("./src/reddit/helpers/correlationIdTracker.ts"),
				C = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/d2xTopNavRevamp.ts"),
				x = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				S = n.n(j);
			const P = Object(s.a)({
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
				k = Object(v.a)(),
				N = Object(l.c)({
					activeSaleConfig: x.a,
					activeTooltipId: _.a,
					coinPurchaseDropdownIsOpen: e => Object(_.b)(k)(e),
					isFreeAwardEventEnabled: x.g,
					topNavigationVariant: E.a
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === k ? Object(m.i)() : Object(m.f)({
							tooltipId: k
						}))
					}
				}),
				M = Object(c.b)(N, w);
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: o,
							sendEvent: r,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(O.d)(O.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(C.d)("get_coins_cta", e))
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
					return e ? e.ctaText || o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? o.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: o,
						topNavigationVariant: r
					} = this.props, a = this.getButtonText(), c = !!e || o, l = Object(d.a)(S.a.icon, {
						[S.a.special]: c
					}), u = r === f.ld.RepositionCoinNoLiveNoAll;
					return i.a.createElement("button", {
						className: Object(d.a)(t, S.a.ctaContainer, {
							[S.a.special]: c && !u,
							[S.a.plain]: u
						}),
						id: k,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(S.a.ctaContent, {
							[S.a.special]: c && !u,
							[S.a.plain]: u
						})
					}, i.a.createElement(y.a, {
						name: "coins",
						className: l
					}), !u && i.a.createElement("span", {
						className: S.a.text
					}, a)), s && i.a.createElement(P, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: k
					}))
				}
			}
			t.a = M(Object(g.c)(I))
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
		"./src/reddit/components/Header/NavBarIcon/index.m.less": function(e, t, n) {
			e.exports = {
				linkIcon: "_1CJrQqx8R1geiDbJFRZlgJ",
				navIcon: "_1qlK0UklDPcZgA7_wDEzl-"
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
				containerWithoutCoin: "_2t7TYn6HwRZQwKXG47kpQR",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				customIconWrapper: "_3kwk6KUitnGpZ2JJUx_bOj",
				customIcon: "d7xjehjoXyiaQBuluGH0R",
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU",
				happeningNowLink: "_39XwvEX05Vwji7kFcISFuV",
				liveContentAvailabilityBadge: "-X88ACLia0m_vNacl1E1S"
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
				o = n.n(s),
				r = n("./src/reddit/constants/elementIds.ts"),
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
				return o.a.createElement(t, {
					id: r.d
				}, o.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(l.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
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
				swapAuthNavButtons: "_7VG2x81knsMK1KQ0w7xKy",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
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
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerExp: "_11HXvp3b_PzyK6RcoEr4bJ",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				happeningNowIcon: "_363_tmUTkPtgihAQcXPsQv",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				wrappedRedditDropdown: "XUd7bCU9SM6ycr6f242KD",
				wrappedRedditLogoActive: "_3kzPDKtqN0MnLhOsSJVKHZ",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				paddingBottom: "_2C3hDQLC8D1ZRSBAx93g1c",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				wrappedRedditLogo: "_29Am3nlgySiqDV_UaDXD69"
			}
		},
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t",
				text: "_1vP7zMn-UGF6u5e-GPHAvN"
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
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				cornerModal: "_3yBCXICbzc12nPbAnZeJ54",
				modalOverlay: "jDNUjGbnBI3MbjQP-vMxG",
				liveChatAnnouncementText: "gTjw2SU9vOhjAAj_FayzC"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less": function(e, t, n) {
			e.exports = {
				redditRecapLink: "_2IYwC-shDBU5KOefav8p2V",
				title: "_37gACpi2lVIlTeBEanzLnH",
				new: "obbfx68t51Qyt3k3HzGjm"
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
				o = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
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
					let t, n, r, i, m, {
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
					return d(p) ? (t = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, r = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: r,
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
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxBanner/CommonBanner.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "FjkUHssa96HMV17_qcQt6",
				wrapper: "FjkUHssa96HMV17_qcQt6",
				Content: "_27ZWqn-n6gBKDTqLbt0uk1",
				content: "_27ZWqn-n6gBKDTqLbt0uk1",
				Heading: "ZtxCbLGmd-U6DH5-RsBJV",
				heading: "ZtxCbLGmd-U6DH5-RsBJV",
				Title: "_2Iz2pxeBTmtn5cilveUdwj",
				title: "_2Iz2pxeBTmtn5cilveUdwj",
				TitleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				titleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				Body: "_2GYO5AeH0SYqV0W_IYw7C_",
				body: "_2GYO5AeH0SYqV0W_IYw7C_",
				BodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				bodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				Thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				ActionButtons: "_45hSSzyMPM5pmBx74E25U",
				actionButtons: "_45hSSzyMPM5pmBx74E25U",
				noMargin: "aaIwLr1Mbi15Al1BCmB8w",
				CloseButton: "_3xbx2cMOI83xtKSIZfzaeW",
				closeButton: "_3xbx2cMOI83xtKSIZfzaeW",
				SecondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				secondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				CloseButtonIcon: "_3uR0NalufS44rp_5yMF15w",
				closeButtonIcon: "_3uR0NalufS44rp_5yMF15w"
			}
		},
		"./src/reddit/components/InboxBanner/CommonBanner.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/actions/inboxBanner/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/inbox.ts"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/inboxBanner/index.ts");
			const h = e => e.notificationsInbox.banner,
				g = e => {
					return h(e).banners
				};
			var f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/InboxBanner/CommonBanner.m.less"),
				O = n.n(v);
			const C = e => {
				let {
					isFromMiniInbox: t,
					banner: n,
					userId: g
				} = e;
				var f, v, C, y, E, x, _, j, S, P, k, N, w, M, I, A, T;
				const R = Object(r.d)(),
					L = Object(m.a)(),
					[D, F, G] = function(e, t, n) {
						const [o, r] = Object(s.useState)(Object(u.r)(e, t) || 0), a = Object(s.useCallback)(() => {
							r(o + 1), Object(u.Ab)(e, t, o + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (r(n), Object(u.Ab)(e, t, n))
						}, []);
						return [o, a, i]
					}(g, n.notificationName, (null === (f = n.persistence) || void 0 === f ? void 0 : f.maxViews) || 0),
					[U, B] = Object(s.useState)(!1),
					[H, q] = Object(s.useState)(!1),
					W = Object(r.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = h(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(s.useEffect)(() => {
					F(), t ? (L(Object(d.B)(n.notificationName)), L(Object(d.C)(n.notificationName))) : (L(Object(d.p)(n.notificationName)), L(Object(d.q)(n.notificationName)))
				}, []);
				const V = null === (v = null == n ? void 0 : n.persistence) || void 0 === v ? void 0 : v.maxViews;
				if (!n || V && D > V) return null;
				const z = !!(null == n ? void 0 : n.primaryCta),
					Q = !!(null == n ? void 0 : n.secondaryCta),
					K = !!(null == n ? void 0 : n.titleImage),
					Z = !!(null == n ? void 0 : n.thumbnailImageUrl),
					J = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (G(), R(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: U ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.backgroundHex,
						color: null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.text.colorText,
						borderColor: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.colors.borderHex
					},
					Y = {
						backgroundColor: H ? null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.hoverHex : null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.backgroundHex,
						color: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.text.colorText,
						borderColor: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.colors.borderHex
					};
				return W ? null : o.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), J(), L(t ? Object(d.A)(n.notificationName, d.b.BANNER) : Object(d.o)(n.notificationName, d.b.BANNER))
					}
				}, o.a.createElement("div", {
					className: O.a.Content
				}, o.a.createElement("div", {
					className: O.a.Heading
				}, K ? o.a.createElement("img", {
					className: O.a.TitleIcon,
					src: n.titleImage
				}) : o.a.createElement("div", {
					className: O.a.Title,
					style: {
						color: null === (k = n.titleText) || void 0 === k ? void 0 : k.colorText
					}
				}, null === (N = n.titleText) || void 0 === N ? void 0 : N.text)), o.a.createElement("div", {
					className: O.a.Body
				}, o.a.createElement("div", {
					className: O.a.BodyText,
					style: {
						color: null === (w = n.bodyText) || void 0 === w ? void 0 : w.colorText
					}
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), Z && o.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), z || Q && o.a.createElement("div", {
					className: Object(a.a)(O.a.ActionButtons, {
						[O.a.noMargin]: Z
					})
				}, z && o.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), J(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_1) : Object(d.o)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...X
					},
					onMouseEnter: () => B(!0),
					onMouseLeave: () => B(!1)
				}), Q && o.a.createElement(l.t, {
					text: null === (A = n.secondaryCta) || void 0 === A ? void 0 : A.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: O.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), J(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_2) : Object(d.o)(n.notificationName, d.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1)
				}))), (null === (T = n.persistence) || void 0 === T ? void 0 : T.isDismissible) && o.a.createElement(l.t, {
					Icon: Object(p.b)("close_fill"),
					className: O.a.CloseButton,
					size: l.d.XXS,
					iconClassName: O.a.CloseButtonIcon,
					priority: l.c.Plain,
					onClick: e => {
						e.stopPropagation(), J(), L(t ? Object(d.A)(n.notificationName, d.b.DISMISS) : Object(d.o)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(r.e)(g),
					s = Object(r.e)(f.j);
				return (null == n ? void 0 : n.length) && s ? o.a.createElement(o.a.Fragment, null, null == n ? void 0 : n.map(e => o.a.createElement(C, {
					banner: e,
					isFromMiniInbox: t,
					key: e.notificationName,
					userId: s
				}))) : null
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/CommonBanner.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/inbox.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/components/InboxBanner/index.m.less"),
				C = n.n(O);
			var y = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: s,
					descriptionText: o,
					primaryButtonText: a,
					titleText: i,
					onClose: l,
					onClick: d
				} = e;
				const u = Object(f.a)();
				return r.a.createElement("div", {
					className: Object(c.a)(C.a.banner, t)
				}, r.a.createElement("div", {
					className: C.a.bannerTitleContainer
				}, i && r.a.createElement("h4", {
					className: C.a.bannerTitle
				}, i), s && r.a.createElement(h.t, {
					onClick: e => {
						l && l(e), u(Object(g.r)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(v.b)("close_fill"),
					className: Object(c.a)(C.a.closeIcon, C.a.closeButton),
					size: h.d.XXS,
					priority: h.c.Plain
				})), o && r.a.createElement("p", {
					className: C.a.bannerDescription
				}, o), r.a.createElement("div", {
					className: C.a.bannerButtonsContainer
				}, a && r.a.createElement(h.t, {
					text: a,
					priority: h.c.Tertiary,
					className: Object(c.a)(C.a.button, C.a.primaryButton),
					size: h.d.XS,
					onClick: e => {
						d && d(e), u(Object(g.r)({
							dnPromptAction: "cta"
						}))
					}
				}), n && r.a.createElement(h.t, {
					text: n,
					onClick: e => {
						l && l(e), u(Object(g.r)({
							dnPromptAction: "refuse"
						}))
					},
					priority: h.c.Plain,
					size: h.d.XS,
					className: Object(c.a)(C.a.button, C.a.closeButton)
				})))
			};
			const E = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return r.a.createElement(y, {
					className: C.a.dnPromptBanner,
					titleText: s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: s.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: s.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var x = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				_ = n("./src/reddit/components/ResizeSensor/index.tsx"),
				j = n("./src/reddit/components/InboxTooltip/index.m.less"),
				S = n.n(j);
			const P = 3;
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = r.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= P) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= P;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: S.a.notificationResizeWrapper
					}, r.a.createElement(x.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: a
					}), !!p && r.a.createElement(_.a, {
						onResize: this.handleResize
					})))
				}
			}
			var N = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				w = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = {},
				A = "",
				T = 0,
				R = "200px",
				L = "250px",
				D = "270px",
				F = 100,
				G = .5,
				U = 5,
				B = 50,
				H = 55;
			class q extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
						notificationHeights: I,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > T && this.props.setActiveOverflowMenuId(A)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: s
						} = this.props, o = t || n, r = window.innerHeight - B - 2 * H - (o ? F : 0);
						let a = 0;
						for (const i in e) a += e[i];
						return 0 === a ? o ? L : s ? R : D : (o && (a += F), r < a && (a = r + (o ? F : 0)), a)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + U, s = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: s
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: s,
								notifications: o
							} = this.props,
							a = o.length > n + U;
						return (s && o.length > 0 && a ? o.slice(0, n + 1) : o).map((n, s) => r.a.createElement(k, M({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: s,
							notifications: o
						} = this.props;
						if (e.isIntersecting) {
							const e = o.length > this.state.currentNotificationCursorIndex + U;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: U
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxInfiniteScrollEnabled: n,
						isPending: s,
						notifications: o,
						setDesktopNotificationsPromptSeen: a,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!o || !o.length), l = this.getContainerHeight(), d = o.length > this.state.currentNotificationCursorIndex + U;
					return r.a.createElement("div", {
						className: S.a.notificationList,
						ref: this.container,
						style: c ? {
							height: l,
							maxHeight: l
						} : {
							minHeight: R
						}
					}, !s && r.a.createElement("div", {
						className: S.a.notificationBannerContainer
					}, t && r.a.createElement(E, {
						onTurnOnBrowserNotifications: i,
						onClose: a
					}), r.a.createElement(b.a, {
						isFromMiniInbox: !0
					})), !c && s && r.a.createElement(N.a, null), !c && !s && r.a.createElement(w.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !s && (e || d) && r.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: G
					}, r.a.createElement("div", null)))
				}
			}
			var W = n("./src/reddit/constants/localStorage.ts"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/hooks/useLocalStorage.ts");
			var Q = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				K = n("./src/reddit/helpers/localStorage/index.ts");

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const J = [],
				X = l.a.div("StyledDropdown", S.a),
				Y = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: a,
						markAllAsRead: i,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						p = Object(o.useCallback)(() => {
							n(), a()
						}, [n, a]),
						b = Object(o.useCallback)(() => {
							u(), a()
						}, [u, a]);
					return r.a.createElement("nav", {
						className: S.a.topNav
					}, r.a.createElement("span", {
						className: S.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && r.a.createElement("span", {
						className: S.a.topNavLinks
					}, r.a.createElement("span", {
						className: S.a.messagesLinkContainer
					}, r.a.createElement(V.default, {
						className: Object(c.a)(S.a.messagesLink, {
							[S.a.mActive]: m
						}),
						onClick: p,
						to: m ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), r.a.createElement(d.a, {
						className: S.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), r.a.createElement("button", {
						className: S.a.navLink,
						onClick: i
					}, r.a.createElement(v.a, {
						name: "mark_read",
						className: S.a.icon
					})), r.a.createElement(V.default, {
						className: S.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, r.a.createElement(v.a, {
						name: "settings",
						className: S.a.icon
					}))))
				},
				$ = e => r.a.createElement("div", {
					className: S.a.bottomBar
				}, r.a.createElement(V.default, {
					className: S.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ee = e => {
					const t = Object(f.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: c,
							messagesBadgeCount: l,
							notifications: d,
							hideTooltip: u,
							isHotPotatoEnabled: m,
							isInboxPolicyBannerEnabled: p,
							isLoggedIn: b,
							isPushNotificationsSupported: h,
							userId: v
						} = e,
						[O, C] = Object(Q.a)(v),
						[y, E] = function(e) {
							const [t, n] = Object(o.useState)(() => Object(K.u)(e));
							return [t, Object(o.useCallback)(() => {
								n(!0), Object(K.Bb)(e)
							}, [e])]
						}(v),
						[x, _] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [s, o] = Object(z.a)(t, []);
							return [-1 !== s.indexOf(n), () => {
								o([...s, n])
							}]
						}({
							key: W.b.HOT_POTATO_BANNER_SEEN,
							userId: v
						}),
						j = !(!d || !d.length),
						P = Object(a.a)(),
						k = P === i.a.Closed || P === i.a.Default || P === i.a.Denied,
						N = h && k && !O;
					return r.a.createElement(X, null, r.a.createElement("div", {
						className: S.a.tooltipContainer
					}, r.a.createElement(Y, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(g.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(g.w)({
								badgeCount: s,
								tab: g.f.Messages
							})), t(Object(g.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(g.n)(g.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: b
					}), r.a.createElement(q, Z({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !y,
						setInboxPrivacyPolicyBannerSeen: E,
						isHotPotatoEnabled: m && !x,
						setHotPotatoBannerSeen: _
					})), (j || c) && r.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(g.m)()),
						onBarClick: u
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				y = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				P = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				A = n("./src/reddit/components/LightboxHeader/index.m.less"),
				T = n.n(A);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const o = s || Object(N.n)(e, {
							page: n
						});
						return (null == o ? void 0 : o.belongsTo) ? Object(w.Q)(e, {
							identifier: o.belongsTo
						}) : null
					},
					post: N.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(P.a)(e) || Object(P.d)(e) || Object(P.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const o = n && Object(N.n)(e, {
							page: n
						}) || s;
						return !!o && Object(k.g)(e, {
							post: o
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
						toggleVote: (t, n) => e(n === S.a.upvoted ? Object(u.jb)(t) : Object(u.v)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
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
			class G extends r.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(w.kb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? M.K(e, n.id) : void 0,
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
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Sb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return r.a.createElement("div", {
						className: Object(c.a)(T.a.container, t, {
							[T.a.isCollection]: d && Object(E.a)(d),
							[T.a.adaptive]: u
						})
					}, r.a.createElement(y, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: T.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, m && !u ? void 0 : r.a.createElement(p.a, {
						className: T.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(x.a, {
						name: h,
						className: T.a.mediaIcon
					}), r.a.createElement(g.c, {
						className: T.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: T.a.postTitleLink
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.a, {
						className: T.a.srIcon
					}), r.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: T.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: T.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: T.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && r.a.createElement(v.a, {
						className: Object(c.a)(T.a.SubscribeButton, {
							[T.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && r.a.createElement(U, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const U = r.a.memo(e => r.a.createElement(y.t, {
				className: T.a.CloseButton,
				size: y.d.XS,
				onClick: e.onClick,
				priority: y.c.Plain,
				Icon: Object(x.b)("close"),
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
			t.a = Object(O.c)(L(G))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
					...r
				} = e, l = Object(i.b)(s);
				return o.a.createElement(a.a, c({
					className: n,
					to: l
				}, r), t)
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
				} = e, s = t ? l : r.a;
				return o.a.createElement(s, d({}, n, {
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
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(r);
			const i = () => o.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, o.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), o.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => o.a.createElement("ol", null, o.a.createElement(i, null), o.a.createElement(i, null), o.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				inAppNotification: "_3U799isaNx88b2pVv1S7m1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				TitleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				titleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				title: "_180jOSBDwwE60X5UR8zt3-",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isFullWidth: "_36xH7NkS9uRrlN87iMo6Bw",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
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
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UsernameConfirmationModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UsernameConfirmationModals").then(n.bind(null, "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_1hLh4ExbW_Gl2pkGABn5Fq",
				commonBtn: "_3qX-j7T3VyXW0TBXQ7qkHK",
				primaryBtn: "_2FhXjIw1NMLaXYPWvrnUCg",
				secondaryBtn: "_3Nbznnag8RXkaF5nEep0Pk",
				withTopBorder: "_3brHkn8WaQ5H2a1LCn89uk",
				confirmContainer: "_24bis7_J1W0ONK7UsGGBZy",
				confirmToastContainer: "_3bv61QiJPtGfHcXPpyOpkc",
				confirmModalBody: "_2O5VCGnV4yRDRvGGGyH5T0",
				confirmModalHeader: "_28EAA6q-RnTJAGjzmgV3Ei",
				confirmModalDescription: "_1mjvXY5U1vwpsbbNYGJjul",
				mResponsive: "_1a2XFA9WQOHGxunCZN6IjZ",
				confirmModalIcon: "-JVIMQjsj_SPFhYYAQvsI",
				questionWrapper: "_3-s4mChdgxSWHNGzBUc0N4",
				questionIcon: "_1-mT11KLeK0Cj3V_xKgaTx",
				confirmModalTitle: "_3e3gGI61xrpfMpllnZxDrm",
				confirmToastTitle: "MYXaqAXi91ALzJTXm9rjA",
				welcomeBackModalTitle: "rTLLrliYnsQtx0zfqWuwt",
				usernameWrapper: "_2WW7LagVCdXCoAI0ts8mJr"
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/RecapGame/index.banana.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3YGVu7VOHOQjmcKEvnnKy",
				img: "_1-tRk0M55julmEhf9bnnfe"
			}
		},
		"./src/reddit/components/RecapGame/index.m.less": function(e, t, n) {
			e.exports = {
				gameWrapper: "_1_YyUS3sbPzkPOkzhXb0Bl",
				recapModal: "_21Db_ASsopNZ3VTZtCovpO",
				recapModalClose: "_3ODVd8KqTGBoNTuR76h_QL",
				closeIcon: "_1cVpHFE91qtzVm85gZMEeS",
				recapModalInner: "_2YnSZRPv7AZ-a55EDasXdC",
				recapModalText: "_180UJgqRSBQW6C2_1L05LP",
				red: "_14HTi9Z5fA9FmS5LQE4pJj",
				recapModalEndText: "_266fsXW9irZyXQR99x3L0d",
				recapModalSnoo: "ZgfEyA0nIEcUi0bCNFeYt",
				end: "_25gIzEs5idbqVDHUtXRl8T",
				recapModalButton: "_3IZU5rgSRVWGfdkEvRae0j",
				recapModalScore: "_33jWiq9zBdG5K_KdKUVs3s",
				recapModalScoreTitle: "_1gdr0pQ5G9SDBt8OzopWSd",
				recapModalScoreValue: "_17jEiPFI8l9ywFSusUYV0C",
				controls: "_1Og6MguA1ZHm6pAsI9mXsK"
			}
		},
		"./src/reddit/components/RecapGame/index.navbar.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3e4dfZYayy-758ojKno9hM",
				loggedIn: "_1qHs2_HkZuQQtmEi15VoHn",
				recapLeadUpGameLink: "_3DMSA0AgiHoLE2bdecVoX3",
				recapLeadUpGameIcon: "_4q-DzCQAmXCdp9brnZeFX"
			}
		},
		"./src/reddit/components/RecapGame/index.scoreboard.m.less": function(e, t, n) {
			e.exports = {
				score: "KzCKBKIM-8HOMkcOQnjnC",
				timer: "_1BQXJ1BNEsxxrVh-C58z7B",
				scoreboard: "_4YtR3Z1OLvONYQ4N6iAso",
				scoreboardwrapper: "_2cp9kv8c5YWmjdHqlgSm9p"
			}
		},
		"./src/reddit/components/RecapGame/index.snoo.m.less": function(e, t, n) {
			e.exports = {
				snoo: "_1Nv5-fUNZeW0ugJMAqP1Ua",
				snooimg: "_2K275U5PdnFZ7O8m3t3O7s"
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				return Object(o.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.O)(e) || Object(l.N)(e)) ? r.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/faceplate.less": function(e, t, n) {},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/Root/tailwind.css": function(e, t, n) {},
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
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(o);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = a
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
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...o
					} = e;
					return r.a.createElement(a.t, u({}, o, {
						priority: m(a.c.Primary, t, n),
						className: Object(d.a)(o.className, l.a.BaseButton),
						size: s ? a.d.S : a.d.M
					}))
				},
				b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
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
						small: o,
						...i
					} = e;
					return r.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, s),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: o ? a.d.S : a.d.M,
						text: b(t)
					}))
				};
			class g extends r.a.Component {
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
						small: o = !1,
						isFullWidth: a = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: o,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? r.a.createElement(h, u({}, l, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(p, u({}, l, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
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
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(s.c)(r.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/endpoints/survey/index.ts");
			const b = async (e, t, n) => {
				const s = await Object(p.b)(t());
				if (s.ok) {
					const t = s.body,
						{
							activeSurveys: o
						} = t.data.customerSurveyConfig,
						r = o.find(t => t.experimentName === e.experimentName);
					r && n({
						...e,
						steps: r.steps
					})
				}
			};
			var h = n("./src/reddit/helpers/survey/index.ts"),
				g = n("./src/reddit/models/Survey/index.ts"),
				f = n("./src/reddit/selectors/survey.ts"),
				v = n("./src/reddit/selectors/telemetry.ts");
			const O = (e, t) => {
					const n = Object(f.c)(e),
						s = Object(f.a)(e),
						o = Object(f.e)(e);
					if (n && s || "" !== o) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const r = v.q(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
					} : {}
				},
				C = e => {
					switch (e) {
						case g.a.CES:
							return "ces";
						case g.a.CSAT:
							return "csat";
						case g.a.NPS:
							return "nps";
						case g.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				y = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...v.o(n),
					survey: O(n, e)
				}),
				E = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						questionId: r,
						questionParentId: a,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...v.o(e),
						survey: {
							type: C(i),
							min: i === g.a.NPS ? 0 : 1,
							max: i === g.a.NPS ? 10 : 7,
							question: s,
							question_id: r,
							parent_question_id: a,
							score: o,
							...O(e, n)
						}
					})
				},
				x = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: o,
						type: r,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...v.o(e),
						survey: {
							question: s,
							type: C(r),
							text: o,
							question_id: a,
							parent_question_id: i,
							...O(e, n)
						}
					})
				},
				_ = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						type: r,
						questionId: a,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...v.o(e),
						survey: {
							type: C(r),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: o,
							question_id: a,
							parent_question_id: i,
							...O(e, n)
						}
					})
				};
			var j = n("./src/reddit/hooks/useGqlContext.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/index.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(j.a)(),
						[n, s] = Object(c.useState)(null),
						o = Object(S.a)(),
						a = Object(l.e)(N.j),
						i = Object(l.e)(N.Gb),
						u = Object(l.e)(k.a, r.a),
						m = Object(l.e)(f.c),
						p = Object(l.e)(f.a),
						g = Object(l.e)(f.b),
						v = Object(l.e)(f.d),
						O = Object(l.e)(f.e),
						C = Object(c.useMemo)(() => {
							const e = Object(h.h)(),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u]),
						E = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						x = Object(c.useCallback)(async e => {
							if (m) {
								const n = Object(h.f)({
									triggerName: e,
									isDemoEnabled: m,
									activeDemoTrigger: p,
									demoTriggerThreshold: g
								});
								return void(n && b(n, t, E))
							}
							const s = Object(h.e)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								surveyName: O
							});
							if (!s || s.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const o = C[s.experimentName];
							(null == o ? void 0 : o.variant) && s.variants.find(e => e.variantName === o.variant) && b(s, t, E)
						}, [n, C, a, i, v, m, p, g, O, E, t]);
					return Object(c.useEffect)(() => {
						const e = Object(h.c)(),
							t = e.subscribe(x);
						return () => e.unsubscribe(t)
					}, [x]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(h.j)(n, t), e(Object(d.J)({
							surveyLastSeenTime: t
						}, !1)), o(y(n.experimentName, "display"))
					}, [n, e, o]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: o,
						textResponse: r,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const o = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", o), () => window.removeEventListener("beforeunload", o)), [o])
					})({
						isFollowUp: o,
						textResponse: r
					});
					const [d, u] = Object(c.useState)(!1), m = Object(S.a)(), p = n.experimentName, b = n.steps[t], h = null == b ? void 0 : b.type, f = null == b ? void 0 : b.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(y(n.experimentName, "dismiss")))
					}, [t, n, m, i]), O = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: h,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: b.type === g.a.MULTI_CHOICE && o ? `${l-1}` : null
						};
						m(o ? x(e) : b.type === g.a.MULTI_CHOICE ? _(e) : E(e))
					}, [p, o, f, b, m, i, a, h, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: O
					}
				},
				I = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: o,
						setTextResponse: r,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(S.a)(), [f, v] = Object(c.useState)(""), [O, C] = Object(c.useState)([]), j = Object(c.useCallback)(() => {
						var e, c;
						const O = t.experimentName,
							j = t.steps[l],
							S = null == j ? void 0 : j.type,
							P = null == j ? void 0 : j.question,
							k = null == j ? void 0 : j.followUpQuestion,
							N = t.steps[l + 1],
							w = null == N ? void 0 : N.type,
							M = null == N ? void 0 : N.question;
						if (m(u + 1), N && N.questionOptions && C(i()(N.questionOptions)), -1 === l) {
							h(y(O, "agree")), d(0);
							const e = {
								question: M,
								type: w,
								action: "display",
								experimentName: O,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void h(w === g.a.MULTI_CHOICE ? _({
								text: f,
								...e
							}) : E(e))
						}
						const I = {
							experimentName: O,
							type: S,
							action: "submit",
							questionId: u.toString(),
							questionParentId: j.type === g.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (h(p ? x({
								text: a,
								question: k,
								...I
							}) : S === g.a.MULTI_CHOICE ? _({
								question: P,
								max: null === (e = j.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = j.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : E({
								question: P,
								score: n && n + (S === g.a.NPS ? 0 : 1),
								...I
							})), o(void 0), r(""), v(""), p || !k)
							if (b(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: O,
									action: "display",
									type: w,
									question: M,
									questionId: (u + 1).toString()
								};
								h(w === g.a.MULTI_CHOICE ? _({
									text: f,
									...e
								}) : E(e))
							}
						else b(!0), h(x({
							experimentName: O,
							action: "display",
							type: S,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, h, s, o, r, u]);
					return {
						questionOptions: O,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: j,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: b
					}
				},
				A = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: o,
						setActiveSurvey: r,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: p
					} = e;
					const b = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							o(-1), a(0), i(!1), r(null), b(Object(u.g)("")), p > 1 && b(Object(m.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: P.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [b, t, d, p, n, o, r, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				return e ? r.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			class O extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return r.a.createElement(g.e, {
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
				if (Object(p.i)(e) || Object(h.sb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.I)(e, n);
				if (!s) return;
				if (Object(h.rb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.z)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Ib)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Ib)(e);
				if (Object(h.R)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.C)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(d.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = r && r.length && !Object(f.a)(r) ? `subredditvars-r-${r.toLocaleLowerCase()}` : g.c;
				if (t && n && o) {
					const e = Object(u.h)(n, o);
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
			const y = Object(l.u)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyContainer: "n4AaEF3hCCYK665NCiJr8",
				euCookiePolicyContainer: "n4AaEF3hCCYK665NCiJr8",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyText: "DbXewCiis2PwiAq2jiL5k",
				euCookiePolicyText: "DbXewCiis2PwiAq2jiL5k",
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
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
				r = Object(s.a)({
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
					currentUser: l.l,
					isNightMode: l.eb,
					isPresenceUserPrefEnabled: l.W,
					shouldHideNSFW: l.G
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				f = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				O = n.n(v);
			const C = Object(i.c)({
					isNightMode: g.eb,
					isAnimatingUpvotePostId: h.k
				}),
				y = Object(a.b)(C),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: l,
							shouldShowScore: p = !0,
							upvoteButtonClassName: h,
							containerRef: g,
							model: v,
							postId: C
						} = e,
						y = E(e),
						_ = x(e),
						j = v.voteState,
						S = a === C;
					return r.a.createElement("div", {
						className: Object(c.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: g
					}, y ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": j === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: j
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": j === b.a.upvoted,
						className: Object(c.a)(d.n, h, {
							[O.a.bounceUp]: S
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: j
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: j,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!l,
						isCountAnimShadowTestEnabled: !!n,
						postId: C
					}), _ ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": j === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: j
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": j === b.a.downvoted,
						className: Object(c.a)(d.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: j
					})))
				}
			}
			const j = Object(l.a)(y(_));
			t.a = j
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: a.kb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(o || (o = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(o || (o = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js");
			const a = r.createContext({
				showPromo: o.a,
				dismissPromo: o.a,
				completePromo: o.a,
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
				o = n.n(s),
				r = n("./src/reddit/constants/featureThrottling.ts"),
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
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends o.a.Component {
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
							const t = Object.keys(r.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return o.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(o);
			t.a = s.a.a("link", r.a)
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, {
						[c.a.xs]: n === a.d.XS,
						[c.a.s]: n === a.d.S,
						[c.a.m]: n === a.d.M,
						[c.a.l]: n === a.d.L,
						[c.a.xl]: n === a.d.XL,
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
				}, o.a.createElement("div", {
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
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
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
				o = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				r = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...r
				}),
				i = e => Object(s.a)(e, {
					...o,
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
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
						correlationId: r,
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
							correlation_id: r
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
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
					} = i, y = {
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
						correlation_id: r
					}, E = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = d ? E : Object(l.a)(E);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: x,
						data: y
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: r,
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
					} = r, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? C : Object(l.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.ob.POST,
						endpoint: y,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: r,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: r,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.ob.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), o = await Object(r.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/chat/isEmbeddedLiveChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = ["true", "1"],
				o = e => {
					var t;
					return s.includes(null !== (t = new URLSearchParams(e).get("livechat_embed")) && void 0 !== t ? t : "")
				},
				r = e => {
					var t;
					return s.includes(null !== (t = e.queryParams.livechat_embed) && void 0 !== t ? t : "")
				}
		},
		"./src/reddit/helpers/counters/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			const r = (e, t) => {
					Object(o.b)(s.o.Redesign, {
						type: o.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				a = e => {
					Object(o.b)(s.o.Redesign, {
						type: o.a.LoggedOutMenuRendered,
						data: {
							location: e
						}
					})
				}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/sample/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(o.b)(10) && Object(r.b)(s.o.Redesign, {
						type: r.a.NsfwBlocking,
						data: {
							action: a.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s, o = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const r = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(o.D)
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
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
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
					return o()(t, e => e.textContent || "")
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
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, o), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(r, a), c = !1), c) return [e];
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
					e.querySelectorAll(r.a).forEach(e => {
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
			var s, o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.S)(e, {}) === r.g.Large && !Object(l.Q)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.be
				})
			}

			function m(e) {
				switch (e) {
					case o.ce.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.ce.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.L.SERVER_ERROR,
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
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? r = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (r = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
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
				return o
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(s.a)({
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
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => o.a.createElement("div", {
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
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: l.a.body
					}), d && o.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
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
					return r
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
			const o = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(s.COMMENT_BEFORE_SIGNUP_STORAGE)
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
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.d)(e),
						post: t && Object(r.K)(e, t) || null,
						profile: Object(r.T)(e),
						screen: Object(r.cb)(e),
						subreddit: Object(r.kb)(e)
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
				return o
			})), n.d(t, "e", (function() {
				return r
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
				o = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
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
			n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "l", (function() {
				return _
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(c.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(l.o)(e),
						screen: Object(l.cb)(e),
						subreddit: Object(l.kb)(e),
						post: t ? Object(l.K)(e, t) : null,
						profile: Object(l.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, s, o, r) => {
					const a = {
							commentId: r,
							commentsPageKey: s
						},
						c = r && Object(i.j)(e, a) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = o ? "image" : void 0;
					return Object(d.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(l.h)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(l.z)(e, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e),
						media: {
							mimetype: null == o ? void 0 : o.mimetype,
							size: null == o ? void 0 : o.size
						}
					})
				}, b = e => {
					let {
						state: t,
						bodyText: n,
						postId: o,
						error: r,
						parentId: a,
						uploadMetadata: i
					} = e;
					const c = m(t),
						l = r.type === s.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${u.c}`)
						}("string" == typeof n ? n : JSON.stringify(n)) ? "giphy" : void 0;
					return Object(d.a)({
						...c,
						source: r.type === s.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...c.actionInfo,
							reason: l
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: n,
							parentId: a,
							postId: o,
							contentType: p
						},
						media: {
							mimetype: null == i ? void 0 : i.mimetype,
							size: null == i ? void 0 : i.size
						}
					})
				}, h = e => Object(d.a)({
					noun: "cancel",
					...m(e)
				}), g = (e, t) => {
					t === a.c.replyToPost && Object(d.a)({
						noun: "input",
						...m(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(l.o)(t),
					screen: Object(l.cb)(t),
					subreddit: Object(l.kb)(t),
					post: Object(l.K)(t, e)
				}), v = e => Object(d.a)({
					noun: "edit",
					...m(e)
				}), O = e => Object(d.a)({
					noun: "save_edit",
					...m(e)
				}), C = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...m(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, y = () => e => ({
					...m(e),
					action: "open",
					noun: "gif_tooltip"
				}), E = e => t => ({
					...m(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), x = () => e => ({
					...m(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), _ = () => e => ({
					...m(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
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
			const o = (e, t) => ({
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/features/recapGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "nav",
					action: "click",
					noun: "recap",
					...s.o(e)
				}),
				r = () => e => ({
					source: "recap",
					action: "click",
					noun: "game_intro",
					...s.o(e)
				}),
				a = () => e => ({
					source: "recap",
					action: "view",
					noun: "game_start",
					...s.o(e)
				}),
				i = () => e => ({
					source: "recap",
					action: "click",
					noun: "game_dismiss",
					...s.o(e)
				}),
				c = () => e => ({
					source: "recap",
					action: "view",
					noun: "game_complete",
					...s.o(e)
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
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(o.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: r.T(e),
						subreddit: r.kb(e)
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
		"./src/reddit/helpers/trackers/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			}));
			var s, o = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				r = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/redditGQL/types.ts");
			! function(e) {
				e.TopNav = "top_nav", e.Dropdown = "home_drop_down", e.ChatTabEmptyState = "chat_tab_empty_state", e.LiveBar = "live_bar"
			}(s || (s = {}));
			const l = e => ({
					...Object(i.o)(e),
					geo: Object(i.t)(e)
				}),
				d = (e, t) => {
					const n = Object(a.V)(e, {
						postId: t
					});
					return n ? {
						isMod: Object(r.c)(e, {
							subredditId: n.id
						})
					} : {}
				},
				u = (e, t) => {
					const n = Object(a.V)(e, {
						postId: t
					});
					return n ? {
						name: n.name,
						id: n.id
					} : {}
				},
				m = (e, t) => {
					const n = Object(o.d)(e, t),
						s = (null == n ? void 0 : n.contentType) === c.r.Chat,
						r = Object(o.b)(e).indexOf(t),
						a = Object(o.c)(e),
						i = a.indexOf(t),
						l = -1 !== i;
					return {
						reason: l ? "recommended" : "popular",
						position: l ? i + 1 : a.length + r + 1,
						pageType: s ? "live_chat" : "liveaudio"
					}
				},
				p = e => t => ({
					...l(t),
					source: "live_chat",
					action: "click",
					noun: "discover_live",
					actionInfo: {
						pageType: "home",
						paneName: e
					}
				}),
				b = e => ({
					...l(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						reason: "discover_live",
						paneName: Object(o.e)(e)
					}
				}),
				h = e => t => ({
					...l(t),
					source: "discover_live",
					action: "view",
					noun: "discover_page_item",
					actionInfo: {
						paneName: Object(o.e)(t),
						...m(t, e)
					},
					post: Object(i.K)(t, e),
					subreddit: u(t, e),
					userSubreddit: d(t, e)
				}),
				g = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "discover_page_item",
					actionInfo: {
						paneName: Object(o.e)(t),
						...m(t, e)
					},
					post: Object(i.K)(t, e),
					subreddit: u(t, e),
					userSubreddit: d(t, e)
				}),
				f = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "tab",
					actionInfo: {
						paneName: e
					}
				}),
				v = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "create_post",
					actionInfo: {
						paneName: Object(o.e)(t)
					},
					correlationId: e
				})
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					...Object(o.o)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(o.o)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "A", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "B", (function() {
				return N
			})), n.d(t, "D", (function() {
				return w
			})), n.d(t, "C", (function() {
				return M
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "J", (function() {
				return U
			})), n.d(t, "I", (function() {
				return B
			})), n.d(t, "L", (function() {
				return H
			})), n.d(t, "K", (function() {
				return q
			})), n.d(t, "M", (function() {
				return W
			})), n.d(t, "H", (function() {
				return V
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "F", (function() {
				return Q
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
					return t => ({
						...Object(o.o)(t),
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
					...Object(o.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = e => t => ({
					...Object(o.o)(t),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(o.d)(t),
						type: e
					}
				}),
				g = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				O = e => t => ({
					...Object(o.o)(t),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(o.d)(t),
						type: e
					}
				}),
				C = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				E = e => t => ({
					...Object(o.o)(t),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(o.d)(t),
						type: e
					}
				}),
				x = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				_ = (e, t, n, r, c) => l => ({
					...Object(o.o)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: T(n),
						categoryId: r
					}
				}),
				j = (e, t, n, r, c, l) => d => ({
					...Object(o.o)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: T(t),
						categoryId: n,
						subredditName: r,
						subredditId: c
					}
				}),
				S = (e, t, n) => r => ({
					...Object(o.o)(r),
					source: a,
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(o.d)(r),
						reason: t,
						type: e
					}
				}),
				P = (e, t) => n => ({
					...Object(o.o)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: T(e),
						categoryId: t
					}
				}),
				k = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				N = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				w = (e, t) => n => ({
					...Object(o.o)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: T(e),
						categoryId: t
					}
				}),
				M = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				I = (e, t, n, r) => c => ({
					...Object(o.o)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					onboarding: {
						categoryName: T(t),
						categoryId: n
					}
				}),
				A = (e, t, n, r, c) => l => ({
					...Object(o.o)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: T(e),
						categoryId: n,
						subredditName: t,
						subredditId: r
					}
				}),
				T = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var R, L, D;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(R || (R = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(L || (L = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(D || (D = {}));
			const F = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				G = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				U = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				B = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				H = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				q = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				W = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
				}),
				V = e => t => ({
					...Object(o.o)(t),
					source: "settings",
					action: s.c.VIEW,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(o.d)(t),
						type: e
					}
				}),
				z = e => t => ({
					...Object(o.o)(t),
					source: "settings",
					action: s.c.SUBMIT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(o.d)(t),
						type: e
					}
				}),
				Q = (e, t, n) => r => ({
					...Object(o.o)(r),
					source: "settings",
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(o.d)(r),
						reason: t,
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return o
			})), n.d(t, "m", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...s.o(e),
					source: "recap",
					action: "view",
					noun: "recap"
				}),
				r = () => e => ({
					...s.o(e),
					source: "recap",
					action: "view",
					noun: "card",
					recap: s.Y(e)
				}),
				a = e => t => ({
					...s.o(t),
					noun: "subreddit",
					source: "recap",
					action: "click",
					recap: s.Y(t),
					subreddit: {
						id: e
					}
				}),
				i = e => t => ({
					...s.o(t),
					noun: "post",
					source: "recap",
					action: "click",
					recap: s.Y(t),
					post: {
						id: e
					}
				}),
				c = (e, t) => n => ({
					...s.o(n),
					noun: "comment unit",
					source: "recap",
					action: "click",
					recap: s.Y(n),
					comment: {
						id: e,
						postId: t
					}
				}),
				l = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "ability_card",
					recap: s.Y(e)
				}),
				d = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "learn_more"
				}),
				u = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "PN_enable"
				}),
				m = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "Email_enable"
				}),
				p = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "edit_snoovatar"
				}),
				b = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "hide_avatar"
				}),
				h = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "share",
					recap: s.Y(e)
				}),
				g = (e, t, n) => o => ({
					...s.o(o),
					source: "recap",
					action: "click",
					noun: `${e?"subscribe":"unsubscribe"}`,
					recap: s.Y(o),
					subreddit: {
						id: n,
						name: t
					}
				}),
				f = () => e => ({
					...s.o(e),
					source: "recap",
					action: "click",
					noun: "recap"
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
				return y
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return P
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.K(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h({
						state: n,
						commentId: t
					})
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				l = e => r("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				O = e => r("h_hide", e),
				C = e => r("x_expando", e),
				y = e => r("a_upvote", e),
				E = e => a("a_upvote", e),
				x = e => r("z_downvote", e),
				_ = e => a("z_downvote", e),
				j = o("c_create_post"),
				S = e => r("l_go_to_link", e),
				P = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "o", (function() {
				return N
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.o(t)
					};
					return Object(o.a)(t) && Object.assign(n, i), n
				},
				l = (e, t) => n => {
					const {
						id: s
					} = Object(a.Bb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.o(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				d = e => ({
					...r.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.ib(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.ib(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.ib(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.o(e),
					...i
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...r.o(e),
					...i
				}),
				h = e => t => ({
					...r.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				g = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.o(n),
					snoovatar: r.ib(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = g("view"),
				v = g("click"),
				O = g("dismiss"),
				C = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					snoovatar: r.ib(s)
				}),
				y = C("anniversary_achievement", "view", "anniversary_achievement"),
				E = C("anniversary_achievement", "click", "close"),
				x = C("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = _("view"),
				S = _("click"),
				P = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.ib(s)
				}),
				k = e => P("onboarding", "click", e),
				N = () => P("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.cb(e),
					profile: o.T(e),
					subreddit: o.kb(e)
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
						pageType: t.platform.currentPage ? o.v(t.platform.currentPage) : void 0,
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
					noun: "advertise",
					...a(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(r.Bb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.Bb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				}),
				h = () => e => ({
					...a(e),
					source: "nav",
					action: "click",
					noun: "recap"
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(Object(o.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.rb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(s.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const o = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = o
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, o.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), o.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), o.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), o.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), o.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), o.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, o.a.createElement("g", null, o.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, o.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), o.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), o.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, o.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), o.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), o.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), o.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), o.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				r = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@reddit/google-tag-manager/compiled.js"),
				i = n("./src/config.ts"),
				c = n("./node_modules/history/esm/history.js"),
				l = n("./node_modules/js-cookie/dist/js.cookie.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/lib/name/index.ts"),
				v = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (Object(f.b)(t)) {
					const e = (null === (o = Object(v.l)(r)) || void 0 === o ? void 0 : o.displayText) || "";
					if (Object(f.c)(t, Object(f.a)(e))) return
				} else if (Object(g.a)(t)) return;
				n((e => ({
					payload: e,
					type: h.f
				}))(e))
			}, C = Object(b.a)(h.e), y = e => ({
				payload: {
					subreddits: e
				},
				type: h.b
			}), E = e => ({
				payload: e,
				type: h.a
			});
			var x = n("./node_modules/redux-thunk/es/index.js"),
				_ = n("./node_modules/request-idle-callback/index.js"),
				j = n("./src/lib/browser/isIncognito.ts"),
				S = n("./src/lib/constants/index.ts"),
				P = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				N = n("./src/lib/getParsedUserAgent/index.ts"),
				w = n("./src/lib/initializeClient/index.tsx"),
				M = n("./src/lib/loadableAction/index.ts"),
				I = n("./src/lib/matchRoute/index.ts"),
				A = n("./src/lib/performance.js"),
				T = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				G = n("./src/telemetry/index.ts"),
				U = n("./src/telemetry/helpers/sendEvent.ts"),
				B = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				q = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/lib/activeUserCountByLiveChatId/actions.ts"),
				z = n("./src/lib/activeUserCountByLiveChatId/utils.ts"),
				Q = n("./src/reddit/models/Post/index.ts"),
				K = n("./src/reddit/selectors/experiments/chat.ts");
			const Z = Object(z.b)(),
				J = async (e, t, n) => {
					Z(() => e(J), z.a);
					const s = function(e) {
						return Object.values(e.posts.models).filter(e => e.discussionType === Q.b.Chat).map(e => e.id)
					}(t());
					Object(V.b)(s, Object(K.e)(t()), Boolean(t().user.account), e, n)
				};
			var X = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/emailCollection/index.ts"),
				$ = n("./src/reddit/actions/emailVerification.ts"),
				ee = n("./src/reddit/actions/login.ts"),
				te = n("./src/reddit/selectors/activeModalId.ts"),
				ne = n("./node_modules/reselect/es/index.js"),
				se = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				oe = n("./src/reddit/selectors/meta.ts");
			const re = Object(ne.a)(oe.c, v.R, se.d, se.e, (e, t, n, s) => !(e || t || n && s)),
				ae = () => async (e, t) => {
					const n = t(),
						s = re(n);
					!!!Object(te.a)(n) && s && e(Object(ee.openGoogleOneTapModal)())
				};
			var ie = n("./src/reddit/actions/media.ts"),
				ce = n("./src/lib/loadWithRetries/index.ts"),
				le = () => Object(ce.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				de = n("./src/reddit/actions/nps.ts");
			const ue = Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var me, pe = n("./src/reddit/actions/platform.ts"),
				be = n("./src/reddit/actions/post.ts"),
				he = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				ge = n("./src/reddit/actions/session.ts"),
				fe = n("./src/reddit/actions/survey/index.ts"),
				ve = n("./src/reddit/actions/theme.ts"),
				Oe = n("./src/reddit/actions/toaster.ts"),
				Ce = n("./src/reddit/actions/users.ts"),
				ye = n("./node_modules/react-redux/es/index.js"),
				Ee = n("./node_modules/react-router/esm/react-router.js"),
				xe = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				_e = n.n(xe),
				je = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				Se = n("./src/lib/classNames/index.ts"),
				Pe = n("./node_modules/lodash/isEqual.js"),
				ke = n.n(Pe),
				Ne = n("./node_modules/lodash/omit.js"),
				we = n.n(Ne),
				Me = n("./node_modules/lodash/throttle.js"),
				Ie = n.n(Me),
				Ae = n("./src/reddit/contexts/NavbarExp.ts"),
				Te = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Re = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				Le = n("./src/lib/fastdom/index.ts"),
				De = n("./src/lib/FocusTrap/index.ts"),
				Fe = n("./src/lib/isEqualWithoutKey/index.ts"),
				Ge = n("./src/lib/isSimpleClick/index.ts"),
				Ue = n("./src/reddit/actions/header.ts"),
				Be = n("./src/reddit/actions/recapGame.ts"),
				He = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				qe = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				We = n("./node_modules/polished/dist/polished.es.js"),
				Ve = n("./node_modules/react-motion/lib/react-motion.js"),
				ze = n("./src/lib/lessComponent.tsx"),
				Qe = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Ke = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ze = n("./src/reddit/constants/accountManager.ts"),
				Je = n("./src/reddit/helpers/trackers/onboarding.ts"),
				Xe = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ye = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				$e = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				et = n("./src/reddit/components/Carousel/index.m.less"),
				tt = n.n(et);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(me || (me = {}));
			class nt extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === me.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
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
							src: `${i.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: s,
							shouldHandleMouseClicks: o
						} = this.props, {
							pageNumber: r
						} = this.state, a = n === me.Fade ? {
							opacity: t === r ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * r : void 0
						};
						return m.a.createElement("div", {
							className: Object(Se.a)(tt.a.item, tt.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(Se.a)(tt.a.indicator, {
							[tt.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(Se.a)(e, tt.a.container)
					}, m.a.createElement("article", {
						className: tt.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: tt.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var st = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				ot = n.n(st);
			const rt = ze.a.div("Container", ot.a),
				at = ze.a.wrapped(nt, "Carousel", ot.a),
				it = ze.a.div("Phone", ot.a),
				ct = ze.a.img("Frame", ot.a),
				lt = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				dt = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				ut = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				mt = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var pt = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(rt, {
						className: t
					}, m.a.createElement(it, {
						className: ot.a.android
					}, m.a.createElement(at, {
						animationType: me.Fade,
						className: ot.a.android,
						delay: 2500,
						items: ut,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(ct, {
						src: lt
					})), m.a.createElement(it, {
						className: ot.a.iphone
					}, m.a.createElement(at, {
						animationType: me.Fade,
						className: ot.a.iphone,
						items: mt,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(ct, {
						src: dt
					})))
				},
				bt = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ht = n.n(bt);
			const gt = ze.a.div("Container", ht.a),
				ft = ze.a.span("Disclaimer", ht.a),
				vt = ze.a.a("Link", ht.a);
			var Ot = e => m.a.createElement(gt, {
					className: e.className
				}, m.a.createElement(vt, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(vt, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(vt, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(vt, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(vt, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(vt, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(vt, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(ft, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ct = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				yt = n.n(Ct);
			const Et = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				xt = ze.a.div("Container", yt.a),
				_t = ze.a.wrapped(Qe.a, "IFrame", yt.a),
				jt = ze.a.wrapped(pt, "Images", yt.a),
				St = ze.a.wrapped(Ot, "Links", yt.a),
				Pt = ze.a.div("MainContent", yt.a),
				kt = ze.a.div("MainContentColumn", yt.a),
				Nt = ze.a.button("NotReady", yt.a),
				wt = ze.a.span("NotReadyText", yt.a),
				Mt = ze.a.wrapped(Xe.a, "NotReadyIcon", yt.a),
				It = Object(Te.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: o,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(Ye.a)(e).bodyText;
					return m.a.createElement(qe.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(xt, {
						className: t,
						innerRef: n
					}, m.a.createElement(Pt, null, m.a.createElement(kt, null, m.a.createElement(jt, null, "Images Placeholder")), m.a.createElement(kt, null, m.a.createElement(_t, {
						className: Object(Se.a)({
							[yt.a.fields]: Object($e.b)(o)
						}),
						path: Ze.c.Register,
						uiMode: Ze.d.Embed
					}))), m.a.createElement(Nt, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(We.i)(.8, i)
						}
					}, m.a.createElement(wt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(Mt, null)), m.a.createElement(St, null)))
				});
			class At extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Tt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(Je.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(At, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(It, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(Ve.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Ve.spring)(s, Et)
						}
					}, this.renderScroller))
				}
			}
			var Rt = Object(Ke.c)(Tt),
				Lt = n("./src/lib/localStorageAvailable/index.ts"),
				Dt = n("./src/reddit/actions/modal.ts"),
				Ft = n("./src/higherOrderComponents/makeAsync.tsx"),
				Gt = Object(Ft.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ut = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Bt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Ht = Object(Ft.a)({
				getComponent: () => Object(ce.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const qt = () => null;
			var Wt = Object(Ft.a)({
					ErrorComponent: qt,
					getComponent: () => Object(ce.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: qt
				}),
				Vt = n("./src/higherOrderComponents/asModal/index.tsx"),
				zt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Qt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Kt = n("./src/reddit/constants/modals.ts"),
				Zt = n("./src/reddit/controls/TextButton/index.tsx"),
				Jt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Xt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Yt = Object(ye.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Dt.i)(Kt.a.BLADE_NIGHTMODE)), e(Object(zt.f)())
					},
					openBlade: () => {
						e(Object(zt.e)(n))
					}
				}
			});
			var $t = Object(Vt.a)(Yt(e => m.a.createElement(Qt.e, null, m.a.createElement(Qt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Qt.q, null, Xt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Zt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Qt.b, null)))), m.a.createElement(Qt.l, null, m.a.createElement(Qt.o, null, Xt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Qt.g, null, m.a.createElement(Qt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Xt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Qt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Xt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				en = n("./src/reddit/actions/authorFlair.ts"),
				tn = n("./src/reddit/actions/gold/powerups.ts"),
				nn = n("./src/reddit/actions/userFlair/index.ts"),
				sn = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				on = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				rn = n("./src/reddit/components/FlairPreview/index.tsx"),
				an = n("./src/reddit/components/FlairSearch/index.tsx"),
				cn = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				ln = n("./src/reddit/controls/Button/index.tsx"),
				dn = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				un = n("./src/reddit/layout/row/Inline/index.tsx"),
				mn = n("./src/reddit/models/Flair/index.ts"),
				pn = n("./src/reddit/models/User/index.ts"),
				bn = n("./src/reddit/selectors/authorFlair.ts"),
				hn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				gn = n("./src/reddit/selectors/telemetry.ts"),
				fn = n("./src/reddit/selectors/userFlair.ts"),
				vn = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				On = n.n(vn);
			const Cn = e => e.flairModalContext && e.currentUser && Object(pn.e)(e.currentUser) === e.flairModalContext.username,
				yn = e => e.authorFlair || Cn(e) && e.userFlairData.applied || null,
				En = ze.a.wrapped(un.a, "Section", On.a),
				xn = ze.a.div("CheckboxText", On.a);
			class _n extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(gn.lb)(t, this.props.subredditId)
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
						previewFlair: yn(e),
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
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = yn(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(cn.b)(n, t, a);
					return !(i || c !== cn.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: o,
						flairModalContext: r
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == r ? void 0 : r.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = Cn(e);
					return m.a.createElement(on.a, null, m.a.createElement(sn.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(rn.a, {
						flair: t.previewFlair,
						flairTemplateType: mn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(an.a, {
						flair: t.previewFlair,
						flairTemplateType: mn.d.UserFlair,
						subredditId: o,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(En, null, m.a.createElement(dn.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(xn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: On.a.buttonsRow
					}, c && m.a.createElement(ln.t, {
						className: On.a.goBackButton,
						priority: ln.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: On.a.rightSideButtons
					}, a && m.a.createElement(ln.o, {
						className: On.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(ln.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const jn = Object(ye.b)(() => Object(ne.c)({
				authorFlair: bn.b,
				currentUser: v.l,
				flairModalContext: bn.c,
				isMod: (e, t) => !!Object(hn.n)(e, t),
				userFlairData: fn.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(nn.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(en.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(tn.c)())
			}))(_n);
			var Sn = Object(Vt.a)(Object(Ke.c)(jn)),
				Pn = n("./src/reddit/selectors/bannedUser.ts"),
				kn = n("./src/reddit/selectors/muted.ts"),
				Nn = n("./src/reddit/selectors/notificationPrefs.ts"),
				wn = n("./src/reddit/selectors/platform.ts"),
				Mn = n("./src/reddit/selectors/removalReasons.ts"),
				In = n("./src/reddit/constants/cookie.ts"),
				An = n("./src/reddit/featureFlags/index.ts"),
				Tn = n("./src/reddit/helpers/localStorage/index.ts"),
				Rn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Ln = Object(ne.c)({
				activeModalId: te.a,
				authorContext: bn.c,
				badgePurchaseModalIsOpen: Object(te.b)(Kt.a.BADGE_PURCHASE),
				banContext: Pn.a,
				banModalIsOpen: Object(te.b)(Kt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(te.b)(Kt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => An.d.introModal(e),
				isOverlayOpen: wn.i,
				moderatorPermissions: e => {
					const t = Object(wn.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: kn.b,
				muteModalIsOpen: Object(te.b)(Kt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Nn.d,
				removalReasonContext: Mn.b,
				removalReasonModalIsOpen: Object(te.b)(Kt.a.ADD_REMOVAL_REASON),
				subredditId: wn.c,
				userFlairModalIsOpen: Object(te.b)(Kt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: v.B,
				userInRedesignBeta: v.I,
				userIsLoggedIn: v.R,
				userIsMod: v.S,
				userIsNew: v.V
			});
			class Dn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Lt.a)()) return; {
						const e = d.a.get(In.a);
						e && d.a.remove(In.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Tn.F)(Kt.a.ALPHA_CONSUMER);
						t && Object(Tn.cb)(Kt.a.ALPHA_CONSUMER), (e || t) && Object(Tn.Jb)(Kt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Tn.F)(Kt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Tn.Jb)(Kt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Kt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Rn.a)(), 500) : setTimeout(() => Object(Rn.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
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
					} = this.props, O = (e, t, n) => s => () => p(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(gn.h)({
							state: o,
							commentId: n
						}),
						post: n && Object(gn.K)(o, n),
						screen: Object(gn.cb)(o),
						subreddit: Object(gn.lb)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(Ut.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Bt.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Wt, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f
					}), o && b && m.a.createElement($t, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(Sn, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(Gt, {
						withOverlay: !0,
						productId: r
					}), c && m.a.createElement(Ht, null))
				}
			}
			var Fn = Object(ye.b)(Ln, e => ({
					markRedesignModalAsClosed: () => e(Object(Dt.j)()),
					toggleBanModal: () => e(Object(Dt.i)(Kt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Dt.i)(Kt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Dt.i)(Kt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Dt.i)(Kt.a.ADD_REMOVAL_REASON))
				}))(Object(Ke.c)(Dn)),
				Gn = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Un = n("./src/reddit/constants/experiments.ts"),
				Bn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Hn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				qn = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Wn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Vn = n("./src/telemetry/helpers/sendCounter.ts"),
				zn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Qn = n.n(zn);
			const Kn = ze.a.div("Overlay", Qn.a),
				Zn = ze.a.div("IframeContainer", Qn.a),
				Jn = {},
				Xn = Object(Bn.u)(),
				Yn = Object(ne.c)({
					frontpageSignupVariant: $e.a,
					isAmModalDesignUpdateEnabled: qn.a,
					isResponsiveSettingsEnabled: Wn.a
				}),
				$n = {
					[Ze.c.ChangePassword]: Kt.a.CHANGE_PASSWORD_MODAL_ID,
					[Ze.c.Index]: Kt.a.LOGIN_MODAL_ID,
					[Ze.c.Register]: Kt.a.REGISTER_MODAL_ID,
					[Ze.c.EnableTwoFactor]: Kt.a.ENABLE_TWO_FACTOR,
					[Ze.c.DisableTwoFactor]: Kt.a.DISABLE_TWO_FACTOR,
					[Ze.c.TwoFactorBackupCodes]: Kt.a.TWO_FACTOR_BACKUP_CODES,
					[Ze.c.LinkAppleSSO]: Kt.a.LINK_APPLE_SSO,
					[Ze.c.UnlinkAppleSSO]: Kt.a.UNLINK_APPLE_SSO,
					[Ze.c.LinkGoogleSSO]: Kt.a.LINK_GOOGLE_SSO,
					[Ze.c.UnlinkGoogleSSO]: Kt.a.UNLINK_GOOGLE_SSO,
					[Ze.c.GoogleOneTap]: Kt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[Ze.c.Onboarding]: Kt.a.ONBOARDING_MODAL_ID
				};
			class es extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === Ze.c.Register && Object($e.f)(this.props.frontpageSignupVariant) && Hn.a.throttleFeature(Un.nd), this.props.sendEvent(Object(Je.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(Je.g)()), Object(Vn.b)(S.o.Redesign, {
							type: Vn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(Je.h)()), Object(Vn.b)(S.o.Redesign, {
							type: Vn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							isAmModalDesignUpdateEnabled: t,
							path: n
						} = this.props, s = n === Ze.c.Index || n === Ze.c.Register, o = n === Ze.c.GoogleOneTap, r = () => {
							this.resizeContainer({
								height: 640,
								width: 400
							})
						};
						e === Ze.b.SelectAccount ? s ? t ? r() : this.resizeContainer({
							height: 474,
							width: 416
						}) : o && (t && r(), this.setState({
							removeHiddenOverlay: !0
						})) : e === Ze.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === Ze.b.Email || e === Ze.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== Ze.b.EmailOptIn && e !== Ze.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isAmModalDesignUpdateEnabled: t,
						isResponsiveSettingsEnabled: n,
						pageLayer: s,
						path: o
					} = this.props, {
						containerSize: r,
						isSSOLinkActionFailedModal: a,
						removeGoogleOneTapStyles: i,
						removeHiddenOverlay: c
					} = this.state, l = Object($e.c)(e) || Object($e.d)(e), d = o === Ze.c.LinkAppleSSO || o === Ze.c.LinkGoogleSSO || o === Ze.c.UnlinkAppleSSO || o === Ze.c.UnlinkGoogleSSO, u = o === Ze.c.GoogleOneTap, p = Object(Se.a)({
						[Qn.a.mModalUpdate]: t,
						[Qn.a.small]: l,
						[Qn.a.ssoConfirmPassword]: d,
						[Qn.a.linkActionSSOFail]: a,
						[Qn.a.mResponsive]: n,
						[Qn.a.mGoogleOneTap]: u && !i
					}), b = Object(Se.a)({
						[Qn.a.mGoogleOneTap]: u && !i,
						[Qn.a.mHiddenOverlay]: u && !c
					}), h = !l && !a && !n;
					return m.a.createElement(Kn, {
						className: b
					}, m.a.createElement(Zn, {
						className: p,
						style: r || Jn
					}, m.a.createElement(Qe.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: o,
						showCloseButton: h
					})))
				}
			}
			const ts = Xn(Object(ye.b)(Yn, (e, t) => ({
				closeModal: t => {
					e(Object(Dt.g)($n[t]))
				}
			}))(Object(Ke.c)(es)));
			Object(Gn.b)(Kt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(ts, {
				path: Ze.c.ChangePassword
			})), Object(Gn.b)(Kt.a.LOGIN_MODAL_ID, e => m.a.createElement(ts, {
				path: Ze.c.Index
			})), Object(Gn.b)(Kt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(ts, {
				path: Ze.c.Onboarding
			})), Object(Gn.b)(Kt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(ts, {
				path: Ze.c.EnableTwoFactor
			})), Object(Gn.b)(Kt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(ts, {
				path: Ze.c.DisableTwoFactor
			})), Object(Gn.b)(Kt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(ts, {
				path: Ze.c.TwoFactorBackupCodes
			})), Object(Gn.b)(Kt.a.REGISTER_MODAL_ID, e => m.a.createElement(ts, {
				path: Ze.c.Register
			})), Object(Gn.b)(Kt.a.LINK_APPLE_SSO, e => m.a.createElement(ts, {
				path: Ze.c.LinkAppleSSO
			})), Object(Gn.b)(Kt.a.LINK_GOOGLE_SSO, e => m.a.createElement(ts, {
				path: Ze.c.LinkGoogleSSO
			})), Object(Gn.b)(Kt.a.UNLINK_APPLE_SSO, e => m.a.createElement(ts, {
				path: Ze.c.UnlinkAppleSSO
			})), Object(Gn.b)(Kt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(ts, {
				path: Ze.c.UnlinkGoogleSSO
			})), Object(Gn.b)(Kt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(ts, {
				path: Ze.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const ns = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(ns, {
				withOverlay: !0
			}));
			const ss = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(ss, {
				withOverlay: !0
			}));
			const os = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(os, {
				withOverlay: !0
			}));
			const rs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.CROWD_CONTROL, e => m.a.createElement(rs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const as = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(as, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const is = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(is, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const cs = Object(Ft.a)({
					getComponent: () => Object(ce.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ls = e => () => {
					e()
				};
			Object(Gn.b)(Kt.a.GOLD_GILD_MODAL, e => m.a.createElement(cs, {
				onOverlayClick: ls(e),
				withOverlay: !0
			}));
			var ds = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				us = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				ms = n.n(us);
			const ps = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = ds.SPARKLE_ASSET_PATH, document.createElement("img").src = ds.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Gn.b)(Kt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(ps, {
				withOverlay: !0,
				className: ms.a.modalBody,
				overlayClassName: ms.a.modalOverlay
			}));
			const bs = Object(Ft.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				hs = e => () => {
					e()
				};
			Object(Gn.b)(Kt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(bs, {
				onOverlayClick: hs(e),
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx");
			const gs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const fs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const Cs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Cs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const ys = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.TRANSFER_POINTS, e => m.a.createElement(ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Es = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(xs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const _s = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(_s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const js = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.MULTIREDDIT_CREATE, e => m.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Gn.b)(Kt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(js, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(Ft.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Kt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Ss, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ps = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				ks = Object(Ft.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ce.a)(Ps).then(e => e.default)
				});
			Object(Gn.b)(Kt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(ks, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Ns = () => null,
				ws = Object(Ft.a)({
					ErrorComponent: Ns,
					getComponent: () => Object(ce.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ns
				});
			Object(Gn.b)(Kt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(ws, null));
			var Ms = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Is = n.n(Ms);
			const As = ze.a.h2("ColumnLabel", Is.a),
				Ts = ze.a.wrapped(un.a, "ColumnWrapper", Is.a),
				Rs = ze.a.div("Column", Is.a),
				Ls = ze.a.div("Description", Is.a),
				Ds = ze.a.div("Key", Is.a),
				Fs = ze.a.wrapped(Qt.l, "ModalMain", Is.a),
				Gs = ze.a.wrapped(Qt.e, "ModalBody", Is.a),
				Us = ze.a.wrapped(ln.l, "PrimaryButton", Is.a),
				Bs = ze.a.wrapped(Zt.a, "TextButton", Is.a),
				Hs = Object(ye.b)(null, e => ({
					closeModal: () => e(Object(Dt.i)(Kt.a.KEYBOARD_SHORTCUTS))
				})),
				qs = ze.a.wrapped(Object(Vt.a)(Hs(e => m.a.createElement(Gs, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Qt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Qt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Bs, {
					onClick: e.closeModal
				}, m.a.createElement(Qt.b, null)))), m.a.createElement(Fs, null, m.a.createElement(Ts, null, m.a.createElement(Rs, null, m.a.createElement(un.a, null, m.a.createElement(As, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Ds, null, "Shift + ?")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Ds, null, "J")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Ds, null, "K")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Ds, null, "N")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Ds, null, "P")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Ds, null, "Enter")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Ds, null, "X")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Ds, null, "L"))), m.a.createElement(Rs, null, m.a.createElement(un.a, null, m.a.createElement(As, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Ds, null, "A")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Ds, null, "Z")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Ds, null, "C")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Ds, null, "R")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Ds, null, "Ctrl + Enter")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Ds, null, "S")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Ds, null, "H")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Ds, null, "Q")), m.a.createElement(un.a, null, m.a.createElement(Ls, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Ds, null, "Enter"))))), m.a.createElement(Qt.g, null, m.a.createElement(Us, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Is.a);
			Object(Gn.b)(Kt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(qs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ws = Object(Ft.a)({
					getComponent: () => Object(ce.a)(() => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Vs = e => () => {
					e()
				};
			Object(Gn.b)(Kt.a.SNOOVATAR_MODAL, e => m.a.createElement(Ws, {
				onOverlayClick: Vs(e),
				withOverlay: !0
			}));
			const {
				fbt: zs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qs = Object(ne.c)({
				allowNavigationCallback: wn.a
			}), Ks = Object(ye.b)(Qs, e => ({
				closeModal: () => e(Object(Dt.i)(Kt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(zt.a)())
			}));
			class Zs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Qt.e, null, m.a.createElement(Qt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Qt.q, null, zs._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Zt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Qt.b, null)))), m.a.createElement(Qt.l, null, m.a.createElement(Qt.p, null, zs._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Qt.g, null, m.a.createElement(Qt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, zs._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Qt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, zs._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Js = Object(Vt.a)(Ks(Zs));
			Object(Gn.b)(Kt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Js, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Xs = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Ys = Object(Ft.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ce.a)(Xs).then(e => e.default)
				});
			Object(Gn.b)(Kt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const $s = Object(ne.c)({
					activeModalId: te.a
				}),
				eo = Object(ye.b)($s, e => ({
					toggleModal: t => e(Object(Dt.i)(t))
				})),
				to = 500,
				no = () => {};
			class so extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Kt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Rn.a)(), to) : setTimeout(() => Object(Rn.b)(), to)))
				}
				componentWillUnmount() {
					Object(Rn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Gn.a)(e)(e ? this.toggleModal : no)
				}
			}
			var oo = eo(so),
				ro = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ao = n("./src/reddit/actions/page.ts"),
				io = n("./src/reddit/actions/shortcuts/utils.ts"),
				co = n("./src/reddit/icons/fonts/index.tsx"),
				lo = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				uo = n("./src/reddit/selectors/header.ts"),
				mo = n("./src/reddit/selectors/userPrefs.ts"),
				po = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				bo = n("./src/reddit/pages/CommunityHubs/constants.ts"),
				ho = n("./src/reddit/pages/CommunityHubs/CommunityHubIcon.m.less"),
				go = n.n(ho);
			var fo = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("img", {
						className: Object(Se.a)(go.a.icon, t),
						src: `${bo.a}fan-communities-icon.png`
					})
				},
				vo = n("./src/reddit/components/SEOTitle/index.tsx"),
				Oo = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Co = n("./src/reddit/components/UserIcon/index.tsx"),
				yo = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var xo = e => m.a.createElement("svg", Eo({
				viewBox: "0 0 22 21",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), m.a.createElement("path", {
				d: "M11.6211 5.44189V11.8892",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M7.93555 7.28394V10.0471",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M15.3047 7.28418V10.0473",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M15.257 1.5H6.97475C3.7723 1.5 1.23242 4.03988 1.23242 7.24233V10.4448C1.23242 13.6472 3.7723 16.1871 6.97475 16.1871H8.85205V19.5L12.1649 16.1871H15.257C18.4594 16.1871 20.9993 13.6472 20.9993 10.4448V7.24233C20.9993 4.03988 18.4594 1.5 15.257 1.5Z",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}));
			var _o, jo = e => {
					const t = Object(ye.e)(v.eb);
					return m.a.createElement("svg", {
						className: e.className,
						id: e.id,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg",
						fill: (() => t ? t && e.isForMenu ? "inherit" : t && !e.isForMenu ? "#D7DADC" : void 0 : "#1c1c1c")()
					}, t ? m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M19.8526,18.4503l-1.4988-2.7789c.4954-1.3675,.4514-2.8257,.3716-3.5919-.1929-1.8471-1.0156-3.4817-2.3172-4.6041-2.3006-1.9823-4.703-2.2183-6.4571-2.3907-.853-.0842-1.5807-.1557-2.091-.3947,.0548-.0451,.1038-.0891,.1449-.1293,1.2546-1.2546,1.4808-3.3926,.7414-4.135-.7414-.7385-2.8774-.5122-4.134,.7414l-.0255,.0274-.0264-.0274C3.3049-.0865,1.1699-.3147,.4265,.4267-.3129,1.1671-.0857,3.3051,1.1689,4.5607c.381,.381,1.0313,.7385,1.4965,.9657-.9253,2.9385-.3974,5.8627,.8085,8.0426l.0004-.0003c-1.0301,.9864-1.8753,2.3217-1.4092,3.3293,.3036,.6542,1.0597,1.0636,2.1282,1.1518,.1459,.0127,.2958,.0186,.4486,.0186,.9551,0,2.023-.2387,2.8314-.6883,1.3156,.731,2.7449,1.2327,4.178,1.4434,.4397,.0646,.9363,.1107,1.4603,.1107,.8086,0,1.6775-.1264,2.5032-.4451l2.8678,1.3971c.1636,.0803,.334,.1185,.5005,.1185,.2732,0,.5347-.1058,.7296-.3095,.3163-.3291,.3712-.8178,.1401-1.2448Zm-8.0192-.8668c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Zm5.0983,.1532h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						fill: "#fff",
						d: "M16.9317,17.7367h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						fill: "#00ccc0",
						d: "M11.8334,17.5835c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M19.8526,18.4503l-1.4988-2.7789c.4954-1.3675,.4514-2.8257,.3716-3.5919-.1929-1.8471-1.0156-3.4817-2.3172-4.6041-2.3006-1.9823-4.703-2.2183-6.4571-2.3907-.853-.0842-1.5807-.1557-2.091-.3947,.0548-.0451,.1038-.0891,.1449-.1293,1.2546-1.2546,1.4808-3.3926,.7414-4.135-.7414-.7385-2.8774-.5122-4.134,.7414l-.0255,.0274-.0264-.0274C3.3049-.0865,1.1699-.3147,.4265,.4267-.3129,1.1671-.0857,3.3051,1.1689,4.5607c.381,.381,1.0313,.7385,1.4965,.9657-.9253,2.9385-.3974,5.8627,.8085,8.0426l.0004-.0003c-1.0301,.9864-1.8753,2.3217-1.4092,3.3293,.3036,.6542,1.0597,1.0636,2.1282,1.1518,.1459,.0127,.2958,.0186,.4486,.0186,.9551,0,2.023-.2387,2.8314-.6883,1.3156,.731,2.7449,1.2327,4.178,1.4434,.4397,.0646,.9363,.1107,1.4603,.1107,.8086,0,1.6775-.1264,2.5032-.4451l2.8678,1.3971c.1636,.0803,.334,.1185,.5005,.1185,.2732,0,.5347-.1058,.7296-.3095,.3163-.3291,.3712-.8178,.1401-1.2448Zm-8.0192-.8668c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Zm5.0983,.1532h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					})))))
				},
				So = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Po = n.n(So);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunityHubs = "CommunityHubs", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Recap = "Recap", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(_o || (_o = {}));
			const ko = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(vo.b, {
					type: vo.a.HeaderSelector
				}, s))
			};
			var No = n("./src/lib/objectSelector/index.ts"),
				wo = n("./src/reddit/constants/wiki.ts"),
				Mo = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Io = n("./src/reddit/selectors/subreddit.ts"),
				Ao = n("./src/reddit/selectors/topic.ts");
			var To = Object(No.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						o = Object(lo.c)(e),
						r = Object(lo.b)(e),
						a = Object(wn.m)(e),
						i = Object(Bn.Z)(n);
					switch (i) {
						case "avatar":
							return {
								type: _o.Avatar
							};
						case "communityHubs":
							return {
								type: _o.CommunityHubs
							};
						case "index":
						case "listing":
							return s || o && !r || a && r ? {
								type: _o.Home
							} : {
								type: _o.Popular
							};
						case "modListing":
							return {
								type: _o.ModListing
							};
						case "modQueuePages":
							return {
								type: _o.ModQueue
							};
						case "postCreation":
							return {
								type: _o.CreatePost
							};
						case "postDraft":
							return {
								type: _o.ViewDraft
							};
						case "recap":
							return {
								type: _o.Recap
							};
						case "subredditCreation":
							return {
								type: _o.SubredditCreation
							};
						case "coins":
							return {
								type: _o.Coins
							};
						case "internationalSitePage":
							return {
								type: _o.InternationalSite
							};
						case "happeningNow":
							return {
								type: _o.HappeningNow
							};
						case "predictions":
							return {
								type: _o.Predictions
							};
						case "premium":
							return {
								type: _o.Premium
							};
						case "acknowledgements":
							return {
								type: _o.Acknowledgements
							};
						case "appeal":
							return {
								type: _o.Appeal
							};
						case "report":
							return {
								type: _o.Report
							};
						case "userDataRequest":
							return {
								type: _o.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: _o.DailyCharts
							};
						case "geotagging":
							return {
								type: _o.Geotagging
							};
						case "notificationsInbox":
							return {
								type: _o.NotificationsInbox
							};
						case "talk":
							return {
								type: _o.Talk
							};
						case "topic": {
							const t = Object(Bn.t)(n),
								s = t && Object(Ao.d)(e, t);
							if (s) return {
								type: _o.Topic,
								model: s
							}
						}
					}
					const c = e.user.account;
					if (c) switch (i) {
						case "inboxPages":
							return {
								type: _o.Inbox, model: c
							};
						case "settings":
							return {
								type: _o.Settings, model: c
							}
					}
					const l = Object(Bn.T)(e, {
						pageLayer: n
					});
					if ("all" === l) return {
						type: _o.All
					};
					if ("popular" === l) return {
						type: _o.Popular
					};
					const d = Object(Bn.r)(e, {
						pageLayer: n
					});
					if (d) return "searchResults" === i ? {
						type: _o.CommunitySearch,
						model: d
					} : {
						type: _o.Community,
						model: d
					};
					const u = Object(Bn.e)(e, {
						pageLayer: n
					});
					if (u) return {
						type: _o.Multi,
						model: u
					};
					const m = Object(Bn.k)(e, {
						pageLayer: n
					});
					if (m) return {
						type: _o.UserProfile,
						model: m
					};
					const p = Object(Bn.i)(n);
					if (p) return {
						type: _o.UserProfileName,
						name: `u/${p}`
					};
					if (i && "searchResults" === i) return {
						type: _o.GlobalSearch
					};
					if ("subredditWiki" === i) {
						const t = Object(Bn.o)(e, {
								pageLayer: n
							}) || wo.e,
							s = Object(Io.C)(e, {
								subredditName: t
							});
						if (s) return {
							type: _o.Community,
							model: s
						}
					}
					return "rpan" === i && Object(Mo.a)(e) ? {
						type: _o.PublicAccessNetwork
					} : {
						type: _o.Unknown
					}
				}),
				Ro = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Lo = n.n(Ro);

			function Do() {
				return (Do = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Fo(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					o = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Lo.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(Se.a)(Lo.a.text, {
								[Lo.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Lo.a.badge
						})),
						className: Object(Se.a)(Lo.a.item, e.className, {
							[Lo.a.mFocused]: !!e.isFocused,
							[Lo.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return o["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Do({}, o, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(ro.a, Do({}, o, {
					to: e.to
				})) : m.a.createElement("button", o)
			}
			var Go = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Uo = n("./src/reddit/constants/localStorage.ts"),
				Bo = n("./src/reddit/hooks/useIsClient.ts"),
				Ho = n("./src/reddit/hooks/useLocalStorage.ts");
			const qo = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Wo = e => {
					let {
						className: t
					} = e;
					const n = Object(Bo.a)(),
						s = Object(ye.e)(wn.g),
						o = Object(ye.e)(lo.c),
						[r, a] = Object(Ho.a)(Uo.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = qo(r.dismissed),
						l = qo(r.throttledUntil),
						d = !n || !o || c >= 3 || o && s || i < l;
					return n && o && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + S.E
					}), d ? null : m.a.createElement(Go.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var Vo = n("./src/reddit/constants/listings.ts"),
				zo = n("./src/reddit/helpers/overlay/index.ts"),
				Qo = n("./src/reddit/routes/communityHubs/index.ts"),
				Ko = n("./src/reddit/routes/modListing/index.ts"),
				Zo = n("./src/reddit/routes/predictions/index.ts"),
				Jo = n("./src/reddit/routes/talk/index.ts"),
				Xo = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Yo = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				$o = n("./src/reddit/selectors/multireddit.ts"),
				er = n("./src/lib/LinkedListMap/index.ts"),
				tr = n("./src/reddit/routes/avatar/index.ts");

			function nr() {
				return (nr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const sr = Object(ne.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object($o.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object($o.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var or;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(or || (or = {}));
			const rr = [e => ({
					id: _o.Employee,
					type: or.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(co.a, nr({
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
				ar = () => [e => ({
					id: _o.All,
					type: or.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				ir = () => [e => ({
					id: "reddit-feeds",
					type: or.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: _o.Home,
					type: or.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: _o.Popular,
					type: or.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...ar()],
				cr = [e => ({
					id: "reddit-feeds",
					type: or.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: _o.Home,
					type: or.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...ar()],
				lr = e => m.a.createElement(Wo, {
					className: e.className
				}),
				dr = [e => ({
					id: "reddit-feeds",
					type: or.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: _o.Home,
					type: or.GenericLink,
					model: {
						url: "/",
						badge: lr,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: _o.Popular,
					type: or.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				})],
				ur = [e => ({
					id: "reddit-other",
					type: or.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: _o.Settings,
					type: or.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(yo.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: _o.Inbox,
					type: or.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(yo.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				mr = e => ({
					id: _o.Coins,
					type: or.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				pr = e => ({
					id: _o.Premium,
					type: or.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				br = e => ({
					id: _o.Avatar,
					type: or.GenericLink,
					model: {
						url: tr.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Avatar", null, {
								hk: "3coVk4"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				hr = e => ({
					id: _o.Talk,
					type: or.GenericLink,
					model: {
						url: Jo.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				gr = e => ({
					id: _o.Predictions,
					type: or.GenericLink,
					model: {
						url: Zo.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				fr = [e => ({
					id: _o.ModQueue,
					type: or.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: _o.ModMail,
						type: or.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(co.a, nr({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, s.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function vr(e, t, n, o) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: or.Header,
					model: {
						displayText: s.fbt._("your communities", null, {
							hk: "BtF8C"
						}).toString()
					}
				}), n && Cr(e, o), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: or.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: or.Header,
					model: {
						displayText: s.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: or.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}

			function Or(e, t, n) {
				t.recentSubreddits.length && (e.push({
					id: "header-subscriptions",
					type: or.Header,
					model: {
						displayText: s.fbt._("recent communities", null, {
							hk: "24NvFP"
						}).toString()
					}
				}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
					id: "sub" + t.id,
					type: or.Subreddit,
					model: t,
					telemetryNoun: "community"
				})), Cr(e, n, !0))
			}
			const Cr = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = {
						id: _o.CreateCommunity,
						telemetryNoun: "create_community"
					},
					r = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(co.a, nr({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...o,
					type: or.GenericClickable,
					model: {
						...r,
						onClick: () => {
							n ? (t(Object(Dt.k)({
								actionSource: Dt.a.HeaderSignup
							})), t(Object(ee.openRegisterModal)())) : t(Object(Dt.h)(Kt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var yr = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Er = n.n(yr);

			function xr(e) {
				return m.a.createElement("div", {
					className: Object(Se.a)(Er.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var _r = n("./src/reddit/actions/subscription/index.ts"),
				jr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Sr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Pr = n.n(Sr);

			function kr() {
				return (kr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Nr = Object(ne.c)({
					currentUser: v.l,
					hideNSFWPref: v.G,
					isLoggedIn: v.R,
					isLoggedOutOneFeed: lo.c
				}),
				wr = Object(ye.b)(Nr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case or.Subreddit:
								e(Object(_r.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case or.Profile:
								e(Object(_r.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case or.Multi:
								e(Object(_r.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(jr.f)(t.model.url)) : t.sendEvent(Object(jr.c)(t.model.url))
						}
					}
				}));
			var Mr = Object(Ke.c)(wr((function(e) {
					const t = {
						className: Object(Se.a)(Pr.a.item, e.className, {
							[Pr.a.mFocused]: !!e.isFocused
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
						case or.Subreddit:
							return m.a.createElement(ro.a, kr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Oo.b, {
								className: Pr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Pr.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(co.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Pr.a.favorite, {
									[Pr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case or.SubredditAutocomplete:
							return m.a.createElement(ro.a, kr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(Oo.b, {
								className: Pr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Pr.a.text
							}, e.model.name));
						case or.Multi:
							return m.a.createElement(ro.a, kr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Pr.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Pr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(co.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Pr.a.favorite, {
									[Pr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case or.Profile:
							return m.a.createElement(ro.a, kr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Co.a, {
								className: Pr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Pr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(co.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Pr.a.favorite, {
									[Pr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Ir = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Ar = n.n(Ir);

			function Tr(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Ar.a.header
				}), m.a.createElement("div", {
					className: Ar.a.item
				}), m.a.createElement("div", {
					className: Ar.a.item
				}), m.a.createElement("div", {
					className: Ar.a.item
				}), m.a.createElement("div", {
					className: Ar.a.item
				}))
			}
			var Rr = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Lr = n("./src/lib/sample/index.ts"),
				Dr = n("./src/reddit/actions/subreddit.ts"),
				Fr = n("./src/reddit/controls/InternalLink/index.tsx");

			function Gr() {
				return (Gr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ur = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: o,
						rel: r
					} = e, a = {
						onClick: o,
						rel: r,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", Gr({
						href: s
					}, a), t) : m.a.createElement(Fr.default, Gr({
						to: s
					}, a), t)
				},
				Br = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Hr = n.n(Br),
				qr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Wr = n.n(qr);
			class Vr extends m.a.Component {
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
						headingClassName: o,
						icon: r,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(Se.a)(Hr.a.button, Wr.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(Se.a)(Hr.a.headingContent, o),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Hr.a.iconContainer
					}, r), m.a.createElement("span", {
						className: Hr.a.title
					}, l ? m.a.createElement(Ur, {
						className: Hr.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(co.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(Se.a)(Hr.a.chevronIcon, {
							[Hr.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(Se.a)(Hr.a.contentContainer, Hr.a["m-collapsible"], {
							[Hr.a.isOpen]: d,
							[Hr.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var zr = Vr,
				Qr = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Kr = n("./src/reddit/constants/colors.ts");
			const Zr = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(Se.a)(Hr.a.title, n)
					}, t)
				},
				Jr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Hr.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Zr, {
						title: s,
						titleClassName: o
					}))
				},
				Xr = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(Ur, {
						className: Object(Se.a)(Hr.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Zr, {
						title: o,
						titleClassName: r
					}))
				},
				Yr = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: o,
						onClick: r,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Ur, {
						className: Object(Se.a)(Hr.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(Oo.b, {
						"aria-hidden": !0,
						className: Object(Se.a)(Hr.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: Kr.a.snoo
					}), m.a.createElement(Zr, {
						title: i,
						titleClassName: c
					}))
				},
				$r = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Hr.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Zr, {
						title: s,
						titleClassName: o
					}), m.a.createElement(Qr.a, {
						className: Hr.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var ea = [{
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
				ta = n("./src/reddit/helpers/trackers/navigation.ts"),
				na = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				sa = n.n(na);
			const oa = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [o, r] = Object(u.useState)(null), a = e => () => {
					r(o === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, ea.map((e, r) => ((e, t, n, s, o) => {
					let {
						link: r,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(zr, {
						buttonClassName: o ? sa.a.navButtonOverride : "",
						className: sa.a.collapsibleContainer,
						icon: s && r.icon && m.a.createElement(co.a, {
							name: r.icon
						}),
						isOpen: i,
						key: r.url,
						onClick: (e, t) => {
							r.noun && n(Object(ta.c)(r.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: r.title,
						url: r.url
					}, a.map(e => m.a.createElement(Xr, {
						className: o ? sa.a.navBasicLink : sa.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(ta.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: o === e
				}))(r), t, n, s)))
			};
			var ra = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o
					} = e;
					return m.a.createElement(zr, {
						icon: m.a.createElement(co.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							o(Object(ta.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(oa, {
						sendEvent: o
					})))
				},
				aa = n("./src/reddit/constants/keycodes.ts"),
				ia = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ca = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				la = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				da = n("./src/reddit/helpers/trackers/postComposer.ts"),
				ua = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				ma = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				pa = n.n(ma);

			function ba() {
				return (ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ha(e) {
				return e.id === _o.ModMail || e.id === _o.CreateCommunity
			}

			function ga(e) {
				const t = new er.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== or.Header && e.type !== or.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const fa = Object(ne.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Lr.a)(e, {
						rate: 14
					}),
					isLoggedOutOneFeed: lo.c,
					unfilteredListBuilder: e => t => {
						const n = sr(e),
							o = new er.a("id"),
							r = Object(lo.c)(e),
							a = Object(v.qb)(e),
							i = Object(lo.d)(e),
							c = Object(wn.d)(e),
							l = Object(lo.f)(e),
							d = Object(lo.a)(e),
							u = [],
							p = (e => Object(Xo.o)(e) ? [pr, mr, br, hr, gr] : [mr, pr, br, hr, gr])(e),
							b = "popular" === c,
							h = [() => ({
								id: "reddit-feeds",
								type: or.Header,
								model: {
									displayText: s.fbt._("Feeds", null, {
										hk: "4zvMfr"
									}).toString()
								}
							}), () => ({
								id: b ? _o.Popular : _o.Home,
								type: or.GenericLink,
								model: {
									url: b ? "/r/popular/" : "/",
									displayText: s.fbt._("Popular", null, {
										hk: "1op8tD"
									}).toString(),
									icon: e => m.a.createElement(co.a, nr({
										name: "popular"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Popular", null, {
											hk: "1op8tD"
										}))
									}
								},
								telemetryNoun: b ? "popular" : "home"
							})],
							g = u.length ? p.filter(e => !u.includes(e(null).id)) : p;
						if (n.account) {
							const r = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (o.push({
								id: "header-favorites",
								type: or.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => o.push({
								id: "fav" + e.id,
								type: or.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => o.push({
								id: "fav" + e.id,
								type: or.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => o.push({
								id: "fav" + e.url,
								type: or.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && o.push({
								id: "multis-pending",
								type: or.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? o.push({
								id: "moderatingSubreddits-pending",
								type: or.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (o.push({
								id: "header-moderating",
								type: or.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), r.isMod && fr.forEach(e => o.push(e(r))), o.push({
								id: _o.ModListing,
								type: or.GenericLink,
								model: {
									url: Ko.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(co.a, nr({
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
							}), n.moderatingSubreddits.forEach(e => o.push({
								id: "mod" + e.id,
								type: or.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: or.Header,
									model: {
										displayText: s.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(Dt.h)(Kt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(Se.a)(t, Po.a.multiPlusButton)
											}, m.a.createElement(co.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: or.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(o, n, t), n.subscriptionsPending ? o.push({
								id: "subscriptions-pending",
								type: or.LoadingState,
								model: {
									displayText: ""
								}
							}) : vr(o, n, a, t), ((e, t, n, o) => (ir().forEach(e => t.push(e(n))), n.isEmployee && rr.forEach(e => t.push(e(n))), Object(Yo.a)(e) ? t.push({
								id: _o.HappeningNow,
								type: or.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(xo, {
											className: t
										})
									},
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Happening Now", null, {
											hk: "1UsMvs"
										}))
									}
								},
								telemetryNoun: "happening_now"
							}) : Object(Mo.a)(e) && t.push({
								id: _o.PublicAccessNetwork,
								type: or.GenericClickable,
								model: {
									onClick: () => {
										o(Object(zo.a)(Vo.c[Vo.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(co.a, nr({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, o, r, t), ur.forEach(e => o.push(e(r))), o.push((() => ({
								id: _o.CreatePost,
								type: or.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(co.a, nr({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), o.push((() => ({
								id: _o.DailyCharts,
								type: or.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(co.a, nr({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), (e => e.push({
								id: _o.NotificationsInbox,
								type: or.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(co.a, nr({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(o), o.push({
								id: _o.CommunityHubs,
								type: or.GenericLink,
								model: {
									url: Qo.a,
									displayText: s.fbt._("Community Hubs", null, {
										hk: "PDnbC"
									}).toString(),
									icon: () => m.a.createElement(fo, null),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Community Hubs", null, {
											hk: "1G8PON"
										}))
									}
								},
								telemetryNoun: "community_hubs_landing_page"
							}), g.forEach(e => o.push(e(r)))
						} else n.subscriptions.length || Object(v.R)(e) ? ir().forEach(e => o.push(e(null))) : r ? (i ? h.forEach(e => e && o.push(e(null))) : dr.forEach(e => e && o.push(e(null))), d ? (n.recentSubreddits = n.recentSubreddits.filter(e => !e.isNSFW), Or(o, n, t)) : l || Or(o, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: or.Header,
								model: {
									displayText: s.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: or.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(o)) : cr.forEach(e => o.push(e(null))), r || (o.push({
							id: "reddit-other",
							type: or.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), g.forEach(e => o.push(e(null))), vr(o, n, a, t));
						return o
					}
				}),
				va = e => ({
					onHomeClicked: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(_r.e)()), e(Object(Dr.q)()), e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Oa = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ca extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = ga(n),
							o = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: o ? o.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === aa.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === aa.b.Tab && this.props.onClose && this.props.onClose(), e.key === aa.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== or.Header && e.type !== or.ExploreMenu && e.type !== or.LoadingState && (this.fireTelemetryForListItem(e), e.type === or.GenericClickable ? e.model.onClick() : ha(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === aa.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === aa.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case _o.Coins:
							case _o.Premium:
								Object(ia.d)(ia.a.GoldPayment, !0), t = Object(ia.c)(ia.a.GoldPayment)
						}
						switch (e.type) {
							case or.Category:
							case or.GenericLink:
							case or.GenericClickable:
							case or.Multi:
							case or.Profile:
							case or.Subreddit:
								this.props.sendEvent(n => ({
									...Object(gn.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === or.Multi ? Object(gn.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								})), e.id === _o.HappeningNow && this.props.sendEvent(Object(la.b)(la.a.Dropdown));
								break;
							case or.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(gn.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case or.CreatePost:
								this.props.sendEvent(Object(da.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: ga(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					const {
						canAutofocus: e,
						isLoggedOutMenuRenderedCounterSampled: t,
						isLoggedOutOneFeed: n,
						isPinned: s,
						onSubredditsRequested: o
					} = this.props;
					"complete" === document.readyState ? o() : window.addEventListener("load", o), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), n && t && Object(ca.b)(s ? ua.c.LeftRail : ua.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = ga(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new er.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case or.Category:
								case or.GenericLink:
								case or.Multi:
								case or.Profile:
								case or.Subreddit:
								case or.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case or.Header: {
									const t = n.last();
									t && t.type === or.Header && n.pop(), n.push(e);
									break
								}
								case or.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === or.Header && n.pop(), n
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
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${s.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), !this.props.isLoggedOutOneFeed && m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: pa.a.filter,
						id: "header-subreddit-filter",
						placeholder: s.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === _o.Home && this.props.onHomeClicked(), e.type === or.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case or.GenericClickable:
								return m.a.createElement(Fo, ba({}, n, {
									className: pa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case or.Category:
							case or.GenericLink:
							case or.CreatePost:
								return m.a.createElement(Fo, ba({}, n, {
									externalLink: ha(e),
									className: pa.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case or.Header: {
								const n = e.model.button;
								return m.a.createElement(xr, {
									className: pa.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: pa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case or.LoadingState:
								return m.a.createElement(Tr, {
									className: pa.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case or.Multi:
								return m.a.createElement(Mr, ba({}, n, {
									className: pa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: or.Multi
								}));
							case or.Profile:
								return m.a.createElement(Mr, ba({}, n, {
									className: pa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: or.Profile
								}));
							case or.Subreddit:
								return m.a.createElement(Mr, ba({}, n, {
									className: pa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: or.Subreddit
								}));
							case or.ExploreMenu:
								return m.a.createElement(oa, ba({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const ya = Object(ye.b)(fa, va, Oa)(Object(Ke.c)(Ca)),
				Ea = Object(ye.b)(fa, va, Oa)(Object(Ke.c)(Object(Rr.b)(Ca))),
				xa = Object(Bn.u)({
					pageLayer: e => e
				}),
				_a = Object(ne.c)({
					currentPage: To,
					hideNSFWPref: v.G,
					isDropdownOpen: uo.a,
					isLoggedOutUiOnly: lo.d,
					isOverlayOpen: wn.i,
					isPinnedSubscriptionsMenuDisabled: mo.b,
					isSubscriptionsPinned: mo.c
				});
			class ja extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(io.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(gn.o)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: o,
							isOverlayOpen: r,
							isLoggedOutUiOnly: a
						} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = r, l = {
							...t,
							type: a && t.type === _o.Home ? _o.Popular : t.type
						};
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(Se.a)(Po.a.container, n, {
								[Po.a.mOpen]: i,
								[Po.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Po.a.mPinned]: this.props.isSubscriptionsPinned,
								[Po.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Po.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Po.a.containerText
						}, function(e) {
							switch (e.type) {
								case _o.Acknowledgements:
									return ko(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case _o.All:
									return ko(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case _o.Appeal:
									return ko(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case _o.Avatar:
									return ko(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case _o.Coins:
									return ko(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case _o.Community:
									return ko(e.model.displayText, !0);
								case _o.CommunityHubs:
									return ko(s.fbt._("Community Hubs", null, {
										hk: "jl2El"
									}).toString());
								case _o.CommunitySearch:
									return ko(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case _o.CreateCommunity:
									return ko(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case _o.CreatePost:
									return ko(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case _o.DailyCharts:
									return ko(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case _o.GlobalSearch:
									return ko(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case _o.Geotagging:
									return ko(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case _o.HappeningNow:
									return ko(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case _o.Home:
									return ko(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case _o.Inbox:
									return ko(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case _o.ModListing:
									return ko("r/Mod");
								case _o.ModMail:
									return ko(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case _o.ModQueue:
									return ko(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case _o.Multi:
									return ko(e.model.displayText, !0);
								case _o.NotificationsInbox:
									return ko(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case _o.InternationalSite:
								case _o.Popular:
									return ko(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case _o.Predictions:
									return ko(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case _o.Premium:
									return ko(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case _o.PublicAccessNetwork:
									return ko(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case _o.Recap:
									return ko(s.fbt._("Reddit Recap", null, {
										hk: "1IMaHW"
									}).toString());
								case _o.Report:
									return ko(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case _o.Settings:
									return ko(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case _o.SubredditCreation:
									return ko(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case _o.Talk:
									return ko(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case _o.Topic:
									return ko(e.model);
								case _o.Unknown:
									return ko("");
								case _o.UserDataRequest:
									return ko(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case _o.UserProfile:
									return ko(e.model.displayText, !0);
								case _o.UserProfileName:
									return ko(e.name, !0);
								case _o.ViewDraft:
									return ko(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(l)), function(e, t) {
							const n = e => m.a.createElement(co.a, {
								name: e,
								isFilled: !0,
								className: Po.a.defaultIcon
							});
							switch (e.type) {
								case _o.All:
									return n("all");
								case _o.Acknowledgements:
								case _o.Appeal:
									return n("edit");
								case _o.Avatar:
									return n("avatar_style");
								case _o.Coins:
									return n("coins");
								case _o.Community:
								case _o.CommunitySearch: {
									const n = Object(po.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Oo.b, {
										className: Po.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case _o.CommunityHubs:
									return m.a.createElement(fo, {
										className: Po.a.icon
									});
								case _o.CreateCommunity:
								case _o.CreatePost:
									return n("add");
								case _o.DailyCharts:
									return n("list_numbered");
								case _o.Geotagging:
									return n("custom_feed");
								case _o.GlobalSearch:
									return n("search");
								case _o.HappeningNow:
									return m.a.createElement(xo, {
										className: Po.a.happeningNowIcon
									});
								case _o.Home:
									return n("home");
								case _o.Inbox:
									return m.a.createElement(yo.a, {
										wrapperClassName: Po.a.userIcon
									});
								case _o.ModListing:
									return n("mod_queue");
								case _o.ModMail:
									return n("mod_mail");
								case _o.ModQueue:
									return n("mod_queue");
								case _o.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Po.a.customFeedIcon
									});
								case _o.NotificationsInbox:
									return n("notification");
								case _o.InternationalSite:
								case _o.Popular:
									return n("popular");
								case _o.Predictions:
									return n("prediction");
								case _o.Premium:
									return n("premium");
								case _o.Recap:
									return m.a.createElement(jo, {
										className: Po.a.wrappedRedditLogoActive
									});
								case _o.PublicAccessNetwork:
									return n("video_live");
								case _o.Report:
									return n("report");
								case _o.Settings:
									return m.a.createElement(yo.a, {
										wrapperClassName: Po.a.userIcon
									});
								case _o.SubredditCreation:
									return n("add");
								case _o.Talk:
									return n("live");
								case _o.Topic:
									return n("custom_feed");
								case _o.Unknown:
									return m.a.createElement("div", {
										className: Po.a.unknownIcon
									});
								case _o.UserDataRequest:
									return n("add");
								case _o.UserProfile: {
									const n = Object(po.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Co.a, {
										className: Po.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case _o.UserProfileName:
									return m.a.createElement("div", {
										className: Po.a.defaultIcon
									});
								case _o.Unknown:
									return m.a.createElement("div", {
										className: Po.a.unknownIcon
									});
								case _o.UserProfile: {
									const n = Object(po.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Co.a, {
										className: Po.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case _o.ViewDraft:
									return n("edit")
							}
						}(l, o), !this.props.isSubscriptionsPinned && m.a.createElement(co.a, {
							name: "caret_down",
							className: Po.a.caretDown
						})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(co.a, {
							name: "side_menu",
							className: Po.a.pin,
							onClick: c ? void 0 : this.props.onPinSubscriptions
						}), i && m.a.createElement(Ea, {
							canAutofocus: !0,
							className: Object(Se.a)(Po.a.listContainer, Po.a.paddingBottom),
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
					return m.a.createElement(Ae.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var Sa = xa(Object(ye.b)(_a, (e, t) => ({
					closeDropdown: () => e(Object(Ue.f)()),
					onLocationRefresh: (n, s) => e(Object(ao.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(Ue.i)()), e(Object(Ue.f)())
					},
					openDropdown: () => e(Object(Ue.g)()),
					toggleDropdown: () => e(Object(Ue.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Ke.c)(ja))),
				Pa = n("./src/reddit/components/JumpToContent/index.tsx"),
				ka = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Na = n("./node_modules/lodash/isEmpty.js"),
				wa = n.n(Na),
				Ma = n("./node_modules/lodash/pick.js"),
				Ia = n.n(Ma),
				Aa = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				Ta = n("./src/lib/hooks/usePrevious.ts"),
				Ra = n("./src/lib/makeSearchKey/index.ts"),
				La = n("./src/reddit/actions/search.ts"),
				Da = n("./src/lib/makeGqlRequest/index.ts"),
				Fa = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Ga = n("./src/telemetry/models/App.ts");
			var Ua = n("./src/reddit/helpers/name/index.ts"),
				Ba = n("./src/reddit/models/Search/index.ts");
			var Ha = n("./src/reddit/helpers/search/SearchTelemetrySource.ts");
			const qa = e => async (t, n, s) => {
				let {
					gqlContext: o
				} = s;
				const r = n(),
					a = gn.eb(r, Ha.a.Typeahead),
					i = Object(v.lb)(r),
					c = ((e, t) => {
						var n, s;
						const o = [],
							r = {};
						return null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var n, s, a, i, c;
							const l = e;
							let d, u, m, p, b, h;
							o.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(Ua.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(Ua.c)(l.name));
							const g = {
								displayInfo: {
									iconUrl: (null === (a = l.styles) || void 0 === a ? void 0 : a.icon) || (null === (c = null === (i = l.styles) || void 0 === i ? void 0 : i.legacyIcon) || void 0 === c ? void 0 : c.url),
									isNSFW: l.isNsfw,
									isQuarantined: m,
									karma: p,
									publicDescription: l.publicDescriptionText || void 0,
									subredditOrProfileName: b,
									subscribers: h
								},
								id: l.id,
								isProfile: d,
								isSubreddit: u,
								isTypeaheadSuggestion: !0,
								searchQuery: t,
								section: Ba.c.typeahead,
								type: Ba.b.subredditOrProfile
							};
							r[l.id] = g
						}), {
							order: o,
							typeaheads: r
						}
					})((await (async (e, t, n, s) => {
						const o = {
							productSurface: Ga.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(Da.a)(e, {
							...Fa,
							variables: o
						}, {
							traceRequestName: "search_typeahead"
						})
					})(o(), e, a, i)).body, e);
				(null == c ? void 0 : c.typeaheads) && (null == c ? void 0 : c.order) && t(Object(La.p)({
					typeaheadSuggestions: c.typeaheads,
					order: c.order,
					searchQuery: e
				}))
			};
			var Wa = n("./src/reddit/actions/search/trending.ts"),
				Va = n("./src/reddit/components/SearchDropdown/index.tsx"),
				za = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Qa = n("./src/reddit/constants/parameters.ts"),
				Ka = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Za = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Ja = n("./src/reddit/helpers/isArrayEqual.ts"),
				Xa = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ya = n("./src/reddit/helpers/trackers/screenview.ts"),
				$a = n("./src/reddit/helpers/trackers/searchResults.ts"),
				ei = n("./src/reddit/hooks/usePageLayer.ts"),
				ti = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				ni = n("./src/reddit/selectors/searchFix.ts"),
				si = n("./src/reddit/selectors/searchResults.ts"),
				oi = n("./src/reddit/selectors/trending.ts"),
				ri = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ai = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				ii = n("./src/reddit/controls/Search/index.m.less"),
				ci = n.n(ii),
				li = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				di = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const ui = /r\/([0-9a-zA-Z]*)\s/gi;

			function mi(e) {
				let {
					className: t
				} = e;
				var n, s;
				const o = Object(ei.a)(),
					r = Object(Bn.ab)(o),
					a = Object(Bn.X)(o),
					{
						nsfwSessionSetting: i
					} = Object(za.b)(),
					[l, d] = Object(u.useState)(-1),
					[b, h] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[y, E] = Object(u.useState)([]),
					[x, _] = Object(u.useState)(null),
					[j, P] = Object(u.useState)(),
					k = Object(u.useRef)(null),
					N = Object(u.useRef)(null),
					w = Object(Ke.b)(),
					M = Object(ye.d)(),
					I = Object(ye.e)(wn.b),
					A = Object(ye.e)(wn.d),
					T = Object(ye.e)(v.l),
					R = Object(ye.e)(si.s),
					L = Object(ye.e)(si.r),
					D = Object(ye.e)(v.R),
					F = Object(ye.e)(v.eb),
					G = Object(ye.e)(wn.r),
					U = Object(ye.e)(e => Object(Bn.r)(e, {
						pageLayer: o
					})),
					B = Object(ye.e)(e => Object(Bn.e)(e, {
						pageLayer: o
					})),
					H = Object(ye.e)(si.j),
					q = Object(ye.e)(e => Object(Io.C)(e, {
						subredditName: j ? j.title.replace("r/", "") : ""
					})),
					{
						isActive: W,
						isBucketed: V,
						experimentState: z
					} = Object(ye.e)(ti.a),
					Q = Object(ye.e)(e => Object(oi.a)(e, Ba.d.dropdown).slice(0, Va.d)),
					K = Object(ye.e)(si.E),
					Z = Object(ye.e)(v.lb),
					J = Object(Ta.a)(U) || null,
					X = Object(Ta.a)(B) || null,
					Y = Object(Ta.a)(j),
					$ = Object(Ta.a)(r),
					ee = Object(Ta.a)(K),
					te = Object(Ta.a)(Q),
					ne = ((null === (n = N.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					se = Pe(ne),
					oe = I ? Object(gn.v)(I) : o ? Object(gn.v)(o) : void 0,
					re = O[ne],
					ae = Object(Ra.e)({
						...Ia()(a || {}, Qa.C),
						q: ne
					});
				Object(u.useEffect)(() => {
					ie()
				}, [te, ee, K, Q]), Object(u.useEffect)(() => {
					J !== U ? de({
						type: S.dc.Subreddit,
						enabled: !!U,
						payload: U
					}) : X !== B ? de({
						enabled: !!B,
						type: S.dc.Multireddit,
						payload: B
					}) : j !== Y && de({
						enabled: !!j,
						type: S.dc.SyntaxScoped,
						payload: j
					})
				}, [j, B, U, Y, X, J]), Object(u.useEffect)(() => {
					H.enabled && H.type === S.dc.SyntaxScoped && q && de({
						enabled: !0,
						type: S.dc.Subreddit,
						payload: q
					})
				}, [q, H]), Object(u.useEffect)(() => {
					wa()(K) || r ? fe(r || "") : ge()
				}, [$, r]);
				const ie = () => {
						const e = Object(Ja.a)(ee, K),
							t = Object(Ja.a)(te, Q);
						if (!e || !t) {
							const e = K.length ? [...K, se] : [...y, ...Q];
							h(e)
						}
					},
					ce = e => M(Object(La.q)({
						searchQuery: e
					})),
					le = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && ai.a.clear(Ha.a.Typeahead), M(Object(La.l)())
					},
					de = e => M(Object(La.o)(e)),
					ue = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							M(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: G,
							subredditName: A
						})
					},
					me = async () => {
						Q.length || g || (f(!0), await (() => M(Object(Wa.b)(Ba.d.dropdown)))(), f(!1))
					}, pe = e => {
						D && T && E(Object(Tn.Ub)({
							...e,
							section: Ba.c.recent
						}, T.id))
					}, he = (e, t) => {
						var n;
						if (!N.current || H.enabled) return !1;
						const s = t.split(" ").filter(t => t !== e).join(" ");
						return N.current.value = s, null === (n = N.current) || void 0 === n || n.dispatchEvent(new Event("input", {
							bubbles: !0
						})), P({
							title: e,
							key: `syntax-${e}`
						}), !0
					}, ge = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						d(-1), _(null), fe(""), ce(""), e && ai.a.update(Ha.a.Typeahead), _e()
					};

				function fe(e) {
					N.current && (N.current.value = e)
				}
				const ve = (e, t, n, s, o) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: ne
						};
						w(Object($a.z)(s, r, o))
					},
					Oe = (e, t, n) => {
						w(Object($a.B)(e, t, n))
					},
					Ce = (e, t, n, s, o) => {
						w(Object($a.D)(e, t, n, s, o))
					},
					Ee = () => {
						w(e => Object($a.h)(e, ae, U)), (() => M(Object(La.k)()))(), ai.a.update(Ha.a.Typeahead)
					},
					xe = e => {
						const t = b[e] || null,
							n = t ? t.searchQuery : "";
						d(e), fe(n), _(t)
					},
					_e = () => {
						if (Q.length || me(), T) {
							const e = Object(Tn.Q)(T.id);
							e.length > 0 && (E(D ? e : []), h([...e, ...Q]))
						}
					},
					je = e => {
						!(!L || !L[e]) || (e ? (e => {
							O[e] || (O[e] = !0, C({
								...O
							}), M(qa(e)), O[e] = !1, C({
								...O
							}))
						})(e) : _e())
					};

				function Pe(e) {
					var t;
					let n;
					if (H.enabled)
						if (H.type === S.dc.Subreddit) {
							const e = H.payload;
							n = {
								iconUrl: null === (t = e.icon) || void 0 === t ? void 0 : t.url,
								isNSFW: e.isNSFW,
								isQuarantined: e.isQuarantined || !1,
								scopeName: e.url
							}
						} else if (H.type === S.dc.Multireddit) {
						const e = H.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: e.isNSFW,
							isQuarantined: !1,
							scopeName: e.url
						}
					} else if (H.type === S.dc.SyntaxScoped) {
						const e = H.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: !1,
							isQuarantined: !1,
							scopeName: e.title
						}
					} else n = {
						isNSFW: !1,
						isQuarantined: !1
					};
					else n = {
						isNSFW: !1,
						isQuarantined: !1
					};
					return {
						id: Object(Aa.a)(),
						searchQuery: e,
						type: Ba.b.text,
						section: Ba.c.recent,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(Se.a)(ci.a.relativeWrapper, Po.a.container, t, {
						"m-open": R
					}),
					id: Va.b,
					ref: k
				}, m.a.createElement(li.b, {
					inputRef: N,
					isOpen: R,
					onChange: e => {
						const t = e.trim(),
							n = ui.exec(e);
						ai.a.update(Ha.a.Typeahead), n && he(n[0].trim(), t) || (ce(t), je(t))
					},
					searchQuery: ne,
					onFormSubmit: e => {
						e.preventDefault(), ne.trim() && (async e => {
							var t, n, s;
							const r = (null === (t = N.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							r !== ne && ce(r);
							let a, c = {
									...Ba.a
								},
								d = {},
								u = !0;
							if (x && x.searchQuery === ne ? ((c = x).id || (c.id = Object(Aa.a)()), c.section === Ba.c.recent ? (d = Object(Ka.c)(Ka.a.SEARCH_DROPDOWN, oe, c.isProfile || c.isSubreddit), a = Ra.a.Recent, Oe(r, c, l)) : c.section === Ba.c.typeahead ? (d = Object(Ka.c)(Ka.a.TYPEAHEAD, oe), u = !1, Ce(r, c, l, l, b.filter(e => e.isSubreddit))) : c.section === Ba.c.trending ? (d = Object(Ka.c)(Ka.a.TYPEAHEAD, oe), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? Ra.a.PromotedTrend : Ra.a.Trending, M((e, t) => Object(Xa.o)({
									state: t(),
									trendingSearch: c,
									telemetrySource: Ha.a.Typeahead
								}))) : ve(r, r, gn.c.Search, $a.a.RECENT)) : (c = Pe(r), w(Object($a.p)(gn.a.FullSearchButton, Object(Ra.e)({
									q: ne
								}), Ha.a.Typeahead, o || void 0))), pe(c), le(u), !c.searchQuery) return;
							let m = {
								source: a
							};
							V && ae.type.length && (Object(ri.d)(z, {
								experimentName: Un.Pc
							}), W && (m = {
								...ae,
								source: a
							}));
							const p = Object(Za.a)({
								searchItem: c,
								searchOptions: m,
								activeSearchScope: H,
								includeNsfwResults: Z && i
							});
							ue(e, p, d), c.isTypeaheadSuggestion && ge(u), null === (s = N.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(ia.c)(ia.a.SearchResults) || Object(ia.d)(ia.a.SearchResults), ai.a.update(Ha.a.Typeahead), w(Object($a.p)(gn.a.SearchBar, ae, Ha.a.Typeahead, o || void 0)), R || ((() => M(Object(La.m)()))(), w(Object(Ya.u)(ae, null != o ? o : void 0, Object(ni.b)({
							pageLayer: o
						})))), je(ne)
					},
					onKeyDown: e => {
						if (e.key === aa.b.Escape || e.key === aa.b.Tab) le();
						else if (e.key === aa.b.ArrowDown) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (l >= b.length - 1) return;
							xe(l + 1)
						} else if (e.key === aa.b.ArrowUp) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (-1 === l) return;
							xe(l - 1)
						} else e.key === aa.b.Backspace && !ne && H.enabled && Ee()
					},
					onClearSearchQuery: ge,
					onClickDismissSearchScopePill: Ee,
					showSearchScopePill: H.enabled,
					searchScopePill: Object(di.c)(H)
				}), m.a.createElement(Va.c, {
					containerWidth: null === (s = k.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: l,
					searchOriginPage: oe,
					isOpen: R,
					isTrendingPending: g,
					isTypeaheadPending: re,
					itemList: b,
					nightmode: F,
					recentSearches: y,
					trendingItems: Q,
					searchItem: se,
					typeaheadSuggestions: K,
					onClearSearchQuery: ge,
					onClose: le,
					onRemoveRecentSearch: e => {
						T && 0 !== y.length && (Object(Tn.eb)(e, T.id), E(y.filter(t => t.searchQuery !== e.searchQuery)), d(-1))
					},
					onSendSearchClickRecentEvent: Oe,
					onSendSearchClickTypeaheadEvent: Ce,
					onSetRecentSearch: pe,
					onUpdateSearchQuery: fe,
					fireAdPixelsOfType: (e, t) => M(Object(be.y)(e, t))
				}))
			}
			var pi = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				bi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				hi = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				gi = n("./src/reddit/helpers/trackers/recap.ts"),
				fi = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				vi = n("./src/reddit/hooks/useTracking.ts"),
				Oi = n("./src/reddit/routes/recap/index.ts"),
				Ci = n("./src/reddit/selectors/experiments/recap.ts"),
				yi = n("./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less"),
				Ei = n.n(yi);
			var xi = () => {
					const e = Object(vi.a)(),
						t = Object(fi.a)(),
						n = Object(ye.e)(Ci.a),
						o = Object(ye.e)(v.R),
						r = Object(ye.e)(oe.k),
						a = encodeURIComponent(r + Oi.a),
						c = i.a.accountManagerOrigin,
						l = o ? Oi.a : `${c}/login/?dest=${a}`;
					return n ? m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Ei.a.icon,
						innerRef: t.target.ref,
						to: l,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						onClick: () => e(Object(gi.j)())
					}, m.a.createElement(jo, {
						className: Ei.a.psBattlesIcon
					})), m.a.createElement(hi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Reddit Recap page", null, {
						hk: "ZDBQK"
					}))) : null
				},
				_i = n("./src/reddit/selectors/responsivePage.ts"),
				ji = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Si = n.n(ji);
			var Pi, ki = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(Se.a)(Si.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Si.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(pi.a, {
						className: Si.a.Snoo
					}), m.a.createElement(bi.a, {
						className: Si.a.Wordmark,
						color: "inherit"
					})))
				},
				Ni = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				wi = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Mi = n.n(wi),
				Ii = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Ai = n.n(Ii);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(Pi || (Pi = {}));
			var Ti = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: o
					} = e, r = Object(vi.a)(), a = Object(fi.a)(), [i, c] = Object(u.useState)(Pi.Hidden), l = Object(u.useCallback)(() => {
						Object(Tn.Lb)({
							clicked: !0
						}), r(e => ({
							...Object(gn.o)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [r, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Tn.H)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Tn.Lb)({
							views: e.views + 1
						}), c(Pi.Visible)) : e.clicked && c(Pi.Visible) : c(Pi.Hidden) : (Object(Tn.Lb)({
							views: 1
						}), c(Pi.Visible))
					}, []), i === Pi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: `${Mi.a.icon} ${Ai.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: Ai.a.navIcon,
						src: n
					})), m.a.createElement(hi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				},
				Ri = n("./src/lib/constants/colors.ts"),
				Li = n("./src/reddit/actions/happeningNow/index.ts"),
				Di = n("./src/reddit/selectors/features/happeningNow/index.ts");
			var Fi = () => {
					const e = Object(ye.d)(),
						t = Object(vi.a)(),
						n = Object(ye.e)(Di.f),
						o = Object(ye.e)(Di.g),
						r = Object(u.useCallback)(() => e(Object(Li.a)()), [e]),
						a = Object(fi.a)(),
						i = Object(u.useMemo)(() => o ? ((e, t) => {
							let {
								onClick: n
							} = t;
							return {
								...e,
								arrowProps: {
									...e.arrowProps,
									style: {
										...e.arrowProps.style,
										borderBottom: `3px solid ${Ri.a.alien600}`
									}
								},
								popperProps: {
									...e.popperProps,
									style: {
										...e.popperProps.style,
										background: Ri.a.alien600,
										padding: "8px",
										cursor: "pointer"
									},
									onClick: n
								},
								visible: !0
							}
						})(a, {
							onClick: r
						}) : a, [a, o, r]),
						c = Object(u.useCallback)(() => {
							t(Object(la.b)(la.a.TopNav)), r()
						}, [t, r]);
					return Object(u.useEffect)(() => {
						e(Object(Li.b)())
					}, [e]), m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Object(Se.a)(Mi.a.icon, Mi.a.happeningNowLink),
						innerRef: i.target.ref,
						to: Vo.c[Vo.b.HappeningNow],
						onClick: c,
						onMouseEnter: i.show,
						onMouseLeave: i.hide
					}, m.a.createElement(xo, {
						className: Mi.a.customIcon
					}), n && m.a.createElement("div", {
						className: Mi.a.liveContentAvailabilityBadge
					})), m.a.createElement(hi.a, {
						arrowProps: i.arrowProps,
						popperProps: i.popperProps,
						visible: i.visible
					}, o ? s.fbt._("Find live chats and audio talks happening now", null, {
						hk: "nphMZ"
					}) : s.fbt._("Happening Now", null, {
						hk: "qEee0"
					})))
				},
				Gi = n("./src/reddit/actions/cooldownTime.ts");

			function Ui(e) {
				return `${e}`.padStart(2, "0")
			}
			class Bi {
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
			var Hi = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				qi = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Wi = n.n(qi);
			const Vi = Object(ne.c)({
				isEmbedSubredditPage: Hi.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: wn.b
			});
			class zi extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Ui(n)}` : `${n}:${Ui(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Bi(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(Go.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Wi.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Qi = Object(ye.b)(Vi, e => ({
					fetchCooldownTimer: () => e(Object(Gi.e)())
				}))(zi),
				Ki = n("./src/reddit/helpers/trackers/features/recapGame.ts");
			var Zi = e => {
					const t = Object(ye.e)(v.eb);
					return m.a.createElement("svg", {
						className: e.className,
						id: e.id,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, t ? m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						fill: "#D7DADC",
						d: "M17.8837,15.1105c-.6211-.5029-1.375-1.0479-2.1729-1.624-1.1832-.8549-2.512-1.8215-3.7875-2.9136,.1809,.003,.3718,.0117,.5746,.021,.8086,.0381,1.7246,.0811,2.7344-.2285,.4424-.1367,.7588-.5039,.8262-.959,.0654-.4473-.127-.8828-.5039-1.1348-.2305-.1553-.4873-.3535-.7676-.5693-1.5137-1.1695-4.0327-3.1045-6.6442-1.1925-.7437-.97-1.4081-1.9233-2.0052-2.786C4.6376,1.5568,3.6454,.1242,2.4784,.0294,2.164,.0001,1.6728,.0734,1.1962,.5666,.5234,1.2628,.2011,2.4816,.2665,4.09c.0809,2.0095,.8107,4.6588,2.191,7.2161l.0004-.0002c-.0544,.0448-.1119,.0787-.165,.1279-2.4531,2.2666-.9316,5.127-.0225,6.8359,.166,.3125,.3193,.5996,.4326,.8525,.1865,.4141,.583,.6777,1.0352,.6875l.0273,.001c.4492,0,.8525-.249,1.0566-.6553,.4736-.9434,.585-1.8535,.6836-2.6572,.0402-.329,.0812-.6225,.138-.8911,.2499,.2628,.4957,.5087,.7116,.6987,3.502,3.084,6.9404,3.6621,9.0254,3.6621,.7383,0,1.3076-.0732,1.6494-.1328,1.2651-.2205,2.2037-.6692,2.541-1.2058,.0088-.0126,.0184-.0237,.0263-.037l.0099-.014c.791-1.4316-.9072-2.8066-1.7236-3.4678ZM7.8526,9.5233c.0085-.1071,.0189-.213,.0359-.3171,.0132-.0797,.0311-.1567,.0497-.2342,.0261-.1094,.0587-.2156,.0966-.3199,.025-.0686,.0505-.1366,.0809-.2026,.0513-.1116,.1152-.2166,.1834-.3197,.0338-.051,.0627-.1045,.1009-.1532,.1154-.147,.2465-.2856,.4055-.4082,.5654-.4355,1.1211-.6182,1.6768-.6182,1.1553,0,2.3086,.79,3.541,1.7412,.249,.1914,.4805,.3701,.6943,.5205-.749,.1992-1.4668,.166-2.1611,.1328-.0968-.0045-.1938-.0089-.2908-.0128-.0324-.0013-.0648-.002-.0972-.0031-.0657-.0023-.1315-.0045-.1971-.0058-.0417-.0008-.0832-.0004-.1248-.0007-.0563-.0003-.1126-.0008-.1688,0-.0451,.0007-.09,.0029-.1349,.0046-.0522,.0019-.1044,.0037-.1565,.0071-.0472,.0031-.0941,.0078-.1411,.0123-.0496,.0046-.0992,.0095-.1486,.0159-.0478,.0062-.0953,.0142-.1428,.0222-.0477,.008-.0953,.0165-.1428,.0264-.0484,.0102-.0964,.0222-.1445,.0345-.0458,.0118-.0916,.0246-.137,.0386-.0483,.0149-.0963,.0314-.1441,.049-.0443,.0162-.0882,.0341-.132,.0527-.0482,.0206-.0963,.0424-.1439,.0662-.0423,.0211-.0842,.0444-.126,.0681-.0476,.027-.095,.0548-.142,.0854-.0409,.0267-.0812,.0564-.1216,.086-.0468,.0343-.0935,.0687-.1395,.1071-.0388,.0323-.0768,.0687-.1151,.1041-.046,.0426-.0921,.0846-.1372,.1318-.0372,.0389-.0734,.083-.1099,.1252-.0446,.0516-.0895,.1014-.1332,.1581-.0344,.0446-.0676,.0954-.1014,.1433-.0443,.0629-.0891,.1234-.1323,.1922-.0294,.0469-.0575,.1009-.0864,.1506-.115,.198-.2266,.4132-.3322,.6594-.0752,.1753-.1482,.3614-.2181,.5633-.192-.6772-.3547-1.4454-.3752-2.1862-.0024-.0839-.0076-.168-.006-.2509,.0019-.0903,.0119-.1776,.0191-.2664ZM1.5155,4.0392c-.0498-1.2227,.1621-2.1719,.5791-2.6035,.1641-.1699,.2559-.167,.2822-.1602,.5781,.0469,1.6738,1.6299,2.7334,3.1602,.6368,.9202,1.3482,1.9408,2.1526,2.9805l.0002-.0003c-.6752,1.0078-.7518,2.2477-.6306,3.3252-.9521-.2743-2.0648-.4027-3.0941-.0455h.0002c-1.2745-2.3636-1.9489-4.8051-2.0232-6.6563Zm3.0757,10.6832l-.0056,.0152c-.0601,.166-.108,.3361-.1475,.509l-.0056,.0258c-.0383,.1718-.0692,.3459-.0953,.5212l-.0034,.024c-.0258,.176-.0479,.3529-.0695,.5292-.085,.6914-.1719,1.4043-.4932,2.1084-.1123-.2354-.25-.4951-.3975-.7725-1.082-2.0342-1.8467-3.8398-.2334-5.3311,.5-.4609,1.1074-.6367,1.748-.6367,.2145,0,.4326,.026,.6513,.0621,.0782,.0125,.1553,.0272,.2336,.0435,.1323,.0282,.2639,.0616,.3956,.0991,.5746,.1604,1.1385,.3903,1.6385,.6332-.2747,.0465-.5194,.1044-.7512,.1673-1.5093,.4095-2.1515,1.1489-2.4651,2.0023Zm11.6782,3.9574c-1.4268,.1465-5.1846,.125-9.0879-3.3115-.2683-.2363-.5949-.5766-.9188-.9308,.394-.3315,1.0314-.5594,2.075-.697,1.2078,1.383,3.7637,3.4199,8.9479,4.7631-.2884,.072-.6232,.1354-1.0162,.1763Zm-6.9681-5.748c.3376-1.0962,.7023-1.691,1.1412-2.0081,.1417,.1348,.2871,.2742,.4089,.3811,1.3936,1.2188,2.8457,2.2686,4.127,3.1943,.7842,.5664,1.5244,1.1016,2.1182,1.582,.7284,.5904,1.1811,1.063,1.3647,1.4141-5.4612-1.2592-8.038-3.2958-9.16-4.5635Z"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						d: "M17.8837,15.1105c-.6211-.5029-1.375-1.0479-2.1729-1.624-1.1832-.8549-2.512-1.8215-3.7875-2.9136,.1809,.003,.3718,.0117,.5746,.021,.8086,.0381,1.7246,.0811,2.7344-.2285,.4424-.1367,.7588-.5039,.8262-.959,.0654-.4473-.127-.8828-.5039-1.1348-.2305-.1553-.4873-.3535-.7676-.5693-1.5137-1.1695-4.0327-3.1045-6.6442-1.1925-.7437-.97-1.4081-1.9233-2.0052-2.786C4.6376,1.5568,3.6454,.1242,2.4784,.0294,2.164,.0001,1.6728,.0734,1.1962,.5666,.5234,1.2628,.2011,2.4816,.2665,4.09c.0809,2.0095,.8107,4.6588,2.191,7.2161l.0004-.0002c-.0544,.0448-.1119,.0787-.165,.1279-2.4531,2.2666-.9316,5.127-.0225,6.8359,.166,.3125,.3193,.5996,.4326,.8525,.1865,.4141,.583,.6777,1.0352,.6875l.0273,.001c.4492,0,.8525-.249,1.0566-.6553,.4736-.9434,.585-1.8535,.6836-2.6572,.0402-.329,.0812-.6225,.138-.8911,.2499,.2628,.4957,.5087,.7116,.6987,3.502,3.084,6.9404,3.6621,9.0254,3.6621,.7383,0,1.3076-.0732,1.6494-.1328,1.2651-.2205,2.2037-.6692,2.541-1.2058,.0088-.0126,.0184-.0237,.0263-.037l.0099-.014c.791-1.4316-.9072-2.8066-1.7236-3.4678ZM7.8526,9.5233c.0085-.1071,.0189-.213,.0359-.3171,.0132-.0797,.0311-.1567,.0497-.2342,.0261-.1094,.0587-.2156,.0966-.3199,.025-.0686,.0505-.1366,.0809-.2026,.0513-.1116,.1152-.2166,.1834-.3197,.0338-.051,.0627-.1045,.1009-.1532,.1154-.147,.2465-.2856,.4055-.4082,.5654-.4355,1.1211-.6182,1.6768-.6182,1.1553,0,2.3086,.79,3.541,1.7412,.249,.1914,.4805,.3701,.6943,.5205-.749,.1992-1.4668,.166-2.1611,.1328-.0968-.0045-.1938-.0089-.2908-.0128-.0324-.0013-.0648-.002-.0972-.0031-.0657-.0023-.1315-.0045-.1971-.0058-.0417-.0008-.0832-.0004-.1248-.0007-.0563-.0003-.1126-.0008-.1688,0-.0451,.0007-.09,.0029-.1349,.0046-.0522,.0019-.1044,.0037-.1565,.0071-.0472,.0031-.0941,.0078-.1411,.0123-.0496,.0046-.0992,.0095-.1486,.0159-.0478,.0062-.0953,.0142-.1428,.0222-.0477,.008-.0953,.0165-.1428,.0264-.0484,.0102-.0964,.0222-.1445,.0345-.0458,.0118-.0916,.0246-.137,.0386-.0483,.0149-.0963,.0314-.1441,.049-.0443,.0162-.0882,.0341-.132,.0527-.0482,.0206-.0963,.0424-.1439,.0662-.0423,.0211-.0842,.0444-.126,.0681-.0476,.027-.095,.0548-.142,.0854-.0409,.0267-.0812,.0564-.1216,.086-.0468,.0343-.0935,.0687-.1395,.1071-.0388,.0323-.0768,.0687-.1151,.1041-.046,.0426-.0921,.0846-.1372,.1318-.0372,.0389-.0734,.083-.1099,.1252-.0446,.0516-.0895,.1014-.1332,.1581-.0344,.0446-.0676,.0954-.1014,.1433-.0443,.0629-.0891,.1234-.1323,.1922-.0294,.0469-.0575,.1009-.0864,.1506-.115,.198-.2266,.4132-.3322,.6594-.0752,.1753-.1482,.3614-.2181,.5633-.192-.6772-.3547-1.4454-.3752-2.1862-.0024-.0839-.0076-.168-.006-.2509,.0019-.0903,.0119-.1776,.0191-.2664ZM1.5155,4.0392c-.0498-1.2227,.1621-2.1719,.5791-2.6035,.1641-.1699,.2559-.167,.2822-.1602,.5781,.0469,1.6738,1.6299,2.7334,3.1602,.6368,.9202,1.3482,1.9408,2.1526,2.9805l.0002-.0003c-.6752,1.0078-.7518,2.2477-.6306,3.3252-.9521-.2743-2.0648-.4027-3.0941-.0455h.0002c-1.2745-2.3636-1.9489-4.8051-2.0232-6.6563Zm3.0757,10.6832l-.0056,.0152c-.0601,.166-.108,.3361-.1475,.509l-.0056,.0258c-.0383,.1718-.0692,.3459-.0953,.5212l-.0034,.024c-.0258,.176-.0479,.3529-.0695,.5292-.085,.6914-.1719,1.4043-.4932,2.1084-.1123-.2354-.25-.4951-.3975-.7725-1.082-2.0342-1.8467-3.8398-.2334-5.3311,.5-.4609,1.1074-.6367,1.748-.6367,.2145,0,.4326,.026,.6513,.0621,.0782,.0125,.1553,.0272,.2336,.0435,.1323,.0282,.2639,.0616,.3956,.0991,.5746,.1604,1.1385,.3903,1.6385,.6332-.2747,.0465-.5194,.1044-.7512,.1673-1.5093,.4095-2.1515,1.1489-2.4651,2.0023Zm11.6782,3.9574c-1.4268,.1465-5.1846,.125-9.0879-3.3115-.2683-.2363-.5949-.5766-.9188-.9308,.394-.3315,1.0314-.5594,2.075-.697,1.2078,1.383,3.7637,3.4199,8.9479,4.7631-.2884,.072-.6232,.1354-1.0162,.1763Zm-6.9681-5.748c.3376-1.0962,.7023-1.691,1.1412-2.0081,.1417,.1348,.2871,.2742,.4089,.3811,1.3936,1.2188,2.8457,2.2686,4.127,3.1943,.7842,.5664,1.5244,1.1016,2.1182,1.582,.7284,.5904,1.1811,1.063,1.3647,1.4141-5.4612-1.2592-8.038-3.2958-9.16-4.5635Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						fill: "#ffd637",
						d: "M3.3739,17.6828c.1475,.2773,.2852,.5371,.3975,.7725,.3213-.7041,.4082-1.417,.4932-2.1084,.1963-1.6045,.3984-3.2617,3.543-3.7939-.8721-.4238-1.9355-.8379-2.9189-.8379-.6406,0-1.248,.1758-1.748,.6367-1.6133,1.4912-.8486,3.2969,.2334,5.3311Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M12.5566,9.3449c.6943,.0332,1.4121,.0664,2.1611-.1328-.2139-.1504-.4453-.3291-.6943-.5205-1.2324-.9512-2.3857-1.7412-3.541-1.7412-.5557,0-1.1113,.1826-1.6768,.6182-1.3682,1.0547-1.0322,3.1016-.5908,4.6582,1.0518-3.0371,2.7197-2.957,4.3418-2.8818Z"
					}), m.a.createElement("path", {
						fill: "#fffde1",
						d: "M5.0481,10.4842c.0221,.0007,.0444-.0036,.0665-.0027,.5258,.0217,1.0421,.1224,1.5181,.2596-.0303-.2693-.0483-.5488-.0476-.8323,.0001-.0459,.0093-.0926,.0104-.1387,.0195-.8077,.1887-1.6389,.6675-2.3538-.8044-1.0397-1.5159-2.0602-2.1526-2.9805-1.0596-1.5303-2.1553-3.1133-2.7334-3.1602-.0264-.0068-.1182-.0098-.2822,.1602-.417,.4316-.6289,1.3809-.5791,2.6035,.0743,1.8513,.7487,4.2927,2.0232,6.6562,.493-.1711,1.0049-.2257,1.5093-.2112Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M8.3334,13.7394c-1.0439,.1374-1.6766,.3666-2.0706,.6981,.3239,.3542,.6505,.6945,.9188,.9308,3.9033,3.4365,7.6611,3.458,9.0879,3.3115,.3931-.0408,.7278-.1042,1.0162-.1763-5.1826-1.3428-7.744-3.3816-8.9523-4.7642Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M17.0966,16.0812c-.5938-.4805-1.334-1.0156-2.1182-1.582-1.2812-.9258-2.7334-1.9756-4.127-3.1943-.1231-.1081-.2701-.2491-.4134-.3853-.4377,.3183-.8,.9164-1.1373,2.0116,1.1216,1.2677,3.6981,3.3047,9.1605,4.5642-.1837-.3511-.6364-.8237-1.3647-1.4141Z"
					}))))
				},
				Ji = n("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				Xi = n("./src/reddit/components/RecapGame/index.navbar.m.less"),
				Yi = n.n(Xi);
			var $i = e => {
					let {
						isLoggedIn: t
					} = e;
					const n = Object(ye.d)(),
						o = Object(Ke.b)(),
						r = Object(fi.a)();
					return Object(ye.e)(Ji.a) ? m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(Se.a)(Yi.a.icon, Yi.a.recapLeadUpGameLink, {
							[Yi.a.loggedIn]: t
						}),
						ref: r.target.ref,
						onClick: () => {
							n(Object(Be.recapGameToggle)()), o(Object(Ki.a)())
						},
						onMouseEnter: r.show,
						onMouseLeave: r.hide
					}, m.a.createElement(Zi, {
						className: Yi.a.recapLeadUpGameIcon
					})), m.a.createElement(hi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Reddit Recap Game", null, {
						hk: "3MCUpH"
					}))) : null
				},
				ec = n("./src/reddit/helpers/trackers/hotPotato.ts");
			var tc = e => m.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, m.a.createElement("g", {
				fill: "#ff4500"
			}, m.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), m.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), m.a.createElement("g", {
				fill: "#ff4500"
			}, m.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), m.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}));
			var nc = e => m.a.createElement("svg", {
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
				})),
				sc = n("./src/reddit/selectors/avatarMarketing.ts"),
				oc = n("./src/lib/initializeClient/installReducer.ts"),
				rc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(oc.a)({
				features: {
					avatar: rc.a
				}
			});
			const ac = e => 864e5 * e,
				ic = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				cc = e => {
					if (lc(e)) return !0;
					const t = ic(e),
						n = (new Date).getTime(),
						s = Object(Tn.y)();
					if (!(null == t ? void 0 : t.active) || !dc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + ac(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				lc = e => {
					const t = Object(wn.q)(e);
					return Boolean((null == t ? void 0 : t[Qa.E]) && Object(R.a)(t[Qa.E]))
				},
				dc = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(v.l)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return uc(e, t) && n === o
				},
				uc = (e, t) => {
					const n = Object(v.l)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > ac(t)
				};
			var mc = n("./src/reddit/selectors/experiments/d2xTopNavRevamp.ts");
			const pc = e => {
					return Object(ri.c)(e, {
						experimentEligibilitySelector: ri.a,
						experimentName: Un.Eb
					}) === Un.Vd
				},
				bc = e => {
					return Object(ri.c)(e, {
						experimentEligibilitySelector: ri.a,
						experimentName: Un.pf
					}) === Un.Vd
				};
			var hc = m.a.memo((function(e) {
					const t = Object(vi.a)(),
						n = Object(ye.d)(),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(gn.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(gn.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(zo.a)(Vo.c[Vo.b.Rpan])), t(e => ({
								...Object(gn.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(ec.a)())
						}, [t]),
						c = Object(ye.e)(v.R),
						l = Object(ye.e)(pc),
						d = Object(ye.e)(Mo.a),
						p = Object(ye.e)(bc),
						b = Object(ye.e)(Hi.a),
						h = Object(ye.e)(Hi.b),
						g = Object(ye.e)(mc.a),
						f = Object(ye.e)(Xo.c),
						O = Object(ye.e)(cc),
						C = Object(ye.e)(Xo.d),
						y = Object(ye.e)(Yo.a),
						E = Object(ye.e)(sc.a),
						x = Object(fi.a)(),
						_ = Object(fi.a)(),
						j = Object(fi.a)(),
						S = Object(fi.a)(),
						P = Object(fi.a)(),
						k = Object(fi.a)(),
						N = f && O,
						w = C && !!E,
						M = g === Un.ld.RepositionCoinNoLiveNoAll,
						I = M && (!(N || w) || e.isAvatarButtonClicked);
					return m.a.createElement("div", {
						className: Object(Se.a)(Mi.a.container, e.className, {
							[Mi.a.containerWithoutCoin]: !I && M
						})
					}, m.a.createElement("div", {
						className: Mi.a.row
					}, m.a.createElement(ro.a, {
						className: Mi.a.icon,
						innerRef: x.target.ref,
						to: c ? Vo.c[Vo.b.Popular] : Vo.c[Vo.b.Home],
						onClick: o,
						onMouseEnter: x.show,
						onMouseLeave: x.hide
					}, m.a.createElement(co.a, {
						name: "popular"
					})), m.a.createElement(hi.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), I && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						ref: k.target.ref,
						onMouseEnter: k.show,
						onMouseLeave: k.hide,
						className: Mi.a.icon
					}, m.a.createElement(Ni.a, null)), m.a.createElement(hi.a, {
						arrowProps: k.arrowProps,
						popperProps: k.popperProps,
						visible: k.visible
					}, s.fbt._("Coin", null, {
						hk: "zOcNq"
					}))), !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Mi.a.icon,
						innerRef: _.target.ref,
						to: Vo.c[Vo.b.All],
						onClick: r,
						onMouseEnter: _.show,
						onMouseLeave: _.hide
					}, m.a.createElement(co.a, {
						name: "all"
					})), m.a.createElement(hi.a, {
						arrowProps: _.arrowProps,
						popperProps: _.popperProps,
						visible: _.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), y ? m.a.createElement(Fi, null) : d && !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Mi.a.icon,
						innerRef: j.target.ref,
						to: Vo.c[Vo.b.Rpan],
						onClick: a,
						onMouseEnter: j.show,
						onMouseLeave: j.hide
					}, m.a.createElement(co.a, {
						name: "video_live"
					})), m.a.createElement(hi.a, {
						arrowProps: j.arrowProps,
						popperProps: j.popperProps,
						visible: j.visible
					}, s.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), p && m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Mi.a.icon,
						innerRef: S.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: S.show,
						onMouseLeave: S.hide
					}, m.a.createElement(nc, {
						className: Mi.a.psBattlesIcon
					})), m.a.createElement(hi.a, {
						arrowProps: S.arrowProps,
						popperProps: S.popperProps,
						visible: S.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), m.a.createElement(xi, null), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(ro.a, {
						className: Object(Se.a)(Mi.a.icon, Mi.a.hotPotatoLink),
						innerRef: P.target.ref,
						to: `/r/${h}`,
						onMouseEnter: P.show,
						onMouseLeave: P.hide,
						onClick: i
					}, m.a.createElement(tc, {
						className: Mi.a.hotPotatoIcon
					}), m.a.createElement(Qi, null)), m.a.createElement(hi.a, {
						arrowProps: P.arrowProps,
						popperProps: P.popperProps,
						visible: P.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), m.a.createElement($i, {
						isLoggedIn: !0
					}), l && m.a.createElement(Ti, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				gc = n("./src/reddit/actions/tooltip.ts"),
				fc = n("./src/lib/combineRefs/index.tsx"),
				vc = n("./src/lib/hooks/useOnClickOutside.ts"),
				Oc = n("./src/lib/hooks/useTooltip.ts"),
				Cc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				yc = n.n(Cc);

			function Ec() {
				return (Ec = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xc = ze.a.button("Button", yc.a),
				_c = ze.a.div("Container", yc.a);

			function jc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(xc, Ec({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(_c, {
					className: Object(Se.a)({
						[yc.a.isOpen]: n
					})
				}, t))
			}
			var Sc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Pc = n.n(Sc);
			var kc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Go.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(co.a, {
					name: "notification",
					className: Pc.a.icon2020
				})),
				Nc = n("./src/reddit/components/InboxBanner/index.m.less"),
				wc = n.n(Nc);
			var Mc = Object(Vt.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(N.b)(navigator.userAgent);
					return m.a.createElement(Qt.e, null, m.a.createElement(Qt.i, {
						className: wc.a.modalHeader
					}, m.a.createElement(Qt.q, {
						className: wc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(ln.t, {
						onClick: t,
						Icon: Object(co.b)("close_fill"),
						size: ln.d.XXS,
						priority: ln.c.Plain,
						className: wc.a.modalCloseIcon
					})), m.a.createElement(Qt.l, null, m.a.createElement("ul", {
						className: wc.a.modalList
					}, m.a.createElement("li", {
						className: wc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(co.a, {
						name: "lock_fill",
						className: wc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: wc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(co.a, {
						name: "settings_fill",
						className: wc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: wc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(co.a, {
						name: "notification_fill",
						className: wc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Qt.g, null, m.a.createElement(ln.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Ic = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Ac = n.n(Ic);

			function Tc() {
				return (Tc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Rc = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, o] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, o(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), o(!1)
						}
					}, [t]), t ? m.a.createElement("div", Tc({
						id: "INBOX--TOOLTIP",
						className: Object(Se.a)(Ac.a.tooltip, {
							[Ac.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Lc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Dc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Fc = n("./node_modules/icepick/icepick.js");
			const Gc = Object(Fc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Uc = n("./src/reddit/selectors/activeModal.ts"),
				Bc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Hc = n.n(Bc);
			const qc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Wc = m.a.memo((function(e) {
					const t = Object(ye.d)(),
						n = Object(fi.a)(),
						o = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(Oc.a)(e);
								return Object(Fc.updateIn)(t, ["modifiers"], e => Object(Fc.push)(e, Gc))
							}, [e]);
							return Object(Oc.b)(t)
						}(),
						r = Object(Oc.b)(qc),
						[a, i] = Object(Dc.a)(e.userId),
						c = Object(ye.e)(Object(Uc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							o.hide(), n.hide(), a || i()
						}, [o, n, i, a]);
					Object(vc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(fc.a)(n.target.ref, o.target.ref, r.target.ref)
					}, m.a.createElement(jc, {
						"aria-expanded": o.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Hc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), o.visible ? l() : o.show(), e.sendNavClickInbox()
						},
						isOpen: o.visible
					}, m.a.createElement(kc, {
						unreadCount: e.unreadCount
					})), !o.visible && !r.visible && m.a.createElement(hi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Rc, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, m.a.createElement(Lc.a, {
						isOpen: o.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(Mc, {
						onClose: () => {
							t(Object(Dt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Vc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				zc = n("./src/reddit/actions/snoovatarModal.ts"),
				Qc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Kc = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Zc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Jc = n.n(Zc);
			const {
				fbt: Xc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Yc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Tn.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Tn.mb)(s)
				}
			}
			var $c = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(ye.e)(ic),
						s = Object(ye.d)(),
						o = Object(vi.a)();
					Object(u.useEffect)(() => {
						o(Object(Qc.p)())
					}, [o]), Object(u.useEffect)(() => {
						n || s(Object(Vc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Yc(n)
					}, [n]);
					return m.a.createElement(ln.k, {
						onClick: () => {
							o(Object(Qc.d)()), Yc(n, "click"), s(Object(zc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Jc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Jc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Xc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Kc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle1)
					}), m.a.createElement(Kc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle2)
					}), m.a.createElement(Kc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle3)
					})), Xc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				el = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				tl = n.n(el);
			const {
				fbt: nl
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var sl = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(ye.d)(),
						s = Object(vi.a)(),
						o = Object(ye.e)(sc.b),
						r = Object(ye.e)(mc.a) === Un.ld.RepositionCoinNoLiveNoAll;
					Object(u.useEffect)(() => {
						o || n(Object(Vc.a)())
					}, [o, n]);
					return m.a.createElement(ln.a, {
						onClick: () => {
							n(Object(zc.b)({
								clickSource: "nav"
							})), s(Qc.c), t && t()
						},
						className: Object(Se.a)(tl.a.ctaContainer, {
							[tl.a.adsExperiment]: r
						})
					}, m.a.createElement(Kc.a, {
						className: Object(Se.a)(tl.a.sparkle, tl.a.sparkle1)
					}), m.a.createElement(Kc.a, {
						className: Object(Se.a)(tl.a.sparkle, tl.a.sparkle2)
					}), m.a.createElement(Kc.a, {
						className: Object(Se.a)(tl.a.sparkle, tl.a.sparkle3)
					}), nl._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				ol = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				rl = n("./src/reddit/actions/changeUsername.ts"),
				al = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				il = n("./src/reddit/actions/postCreation/general.ts"),
				cl = n("./src/reddit/actions/preferences.ts"),
				ll = n("./src/reddit/components/BlockNavigation/index.tsx"),
				dl = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ul = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var ml = Object(Ft.a)({
					getComponent: () => Object(ce.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				pl = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				bl = n("./src/reddit/components/Settings/modalIds.ts"),
				hl = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				gl = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				fl = n("./src/reddit/icons/svgs/Close/index.tsx"),
				vl = n("./src/reddit/selectors/emailCollection.ts"),
				Ol = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Cl = n.n(Ol);
			var yl = Object(pl.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: o,
						toggleChangeEmailModal: r
					} = e;
					const a = Object(Ke.b)(),
						i = Object(ye.d)(),
						c = Object(ye.e)(vl.a);
					Object(u.useEffect)(() => {
						a(c ? Object(hl.f)(gl.a) : Object(gl.g)(gl.a))
					}, [a, c]);
					const {
						description: l,
						title: d
					} = (() => ({
						description: s.fbt._("Check your inbox email for Reddit’s confirmation email. A current email address helps ensure you don’t lose access to your account.", null, {
							hk: "2Rbv7G"
						}),
						title: s.fbt._("Confirm your email:", null, {
							hk: "3e6xW7"
						})
					}))();
					return m.a.createElement("div", {
						className: Cl.a.container
					}, m.a.createElement("div", {
						className: Cl.a.topLine
					}), m.a.createElement("button", {
						className: Cl.a.closeWrapper,
						onClick: () => {
							a(c ? Object(hl.e)(gl.a) : Object(gl.c)(gl.a)), t()
						}
					}, m.a.createElement(fl.a, {
						className: Cl.a.closeIcon
					})), m.a.createElement("h5", {
						className: Cl.a.title
					}, d), m.a.createElement("p", {
						className: Cl.a.subtitle
					}, n), m.a.createElement("p", {
						className: Cl.a.description
					}, l), m.a.createElement("div", {
						className: Cl.a.buttonWrapper
					}, c ? m.a.createElement(ln.t, {
						onClick: () => {
							i(Object(Dt.h)(bl.h)), a(Object(hl.a)(gl.a))
						},
						priority: ln.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(ln.t, {
						priority: ln.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(gl.e)(gl.a, "update")), r()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(ln.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(gl.e)(gl.a, "confirm")), o(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [Rr.a.Click, Rr.a.Keydown, Rr.a.Resize]),
				El = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				xl = n.n(El);
			const _l = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Qe.a, {
					className: xl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: Ze.c.GoogleOneTap
				})
			};
			var jl = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Sl = n.n(jl);
			const {
				fbt: Pl
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var kl = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: Sl.a.container
					}, m.a.createElement("p", {
						className: Sl.a.title
					}, Pl._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: Sl.a.subtitle
					}, Pl._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: Sl.a.description
					}, Pl._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(ln.o, {
						className: Sl.a.dismissBtn,
						onClick: t
					}, Pl._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				Nl = n("./node_modules/lodash/noop.js"),
				wl = n.n(Nl),
				Ml = n("./src/lib/prettyPrintNumber/index.ts"),
				Il = n("./src/realtime/GQLSubscription/async.tsx"),
				Al = n("./src/reddit/actions/alpha.ts"),
				Tl = n("./src/reddit/actions/modMode.ts"),
				Rl = n("./src/reddit/actions/profile/index.ts"),
				Ll = n("./src/reddit/constants/elementClassNames.ts"),
				Dl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Fl = n("./src/reddit/helpers/karma.ts"),
				Gl = n("./src/reddit/hooks/useWindowEvent.ts"),
				Ul = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Bl = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Hl = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				ql = n("./src/reddit/actions/recap/index.ts"),
				Wl = n("./src/reddit/pages/Recap/Components/ProfileTooltip/index.m.less"),
				Vl = n.n(Wl);
			var zl = () => {
				const e = Object(ye.d)(),
					t = Object(ye.e)(v.l),
					n = Object(ye.e)(Ci.a),
					o = Object(ye.e)(e => e.recap.bannerSeen);
				if (Object(u.useEffect)(() => {
						t && setTimeout(() => {
							e(Object(ql.d)(Object(Tn.O)(null == t ? void 0 : t.id)))
						}, 1e3)
					}, [t, e]), !t) return null;
				return n && !o ? m.a.createElement(ro.a, {
					to: Oi.a,
					onClick: n => {
						n.stopPropagation(), e(Object(ql.d)(!0)), Object(Tn.Sb)(null == t ? void 0 : t.id)
					},
					className: Vl.a.wrapper
				}, m.a.createElement("div", {
					className: Vl.a.ellipse
				}), m.a.createElement("div", {
					className: Vl.a.tooltip
				}, m.a.createElement("div", {
					className: Vl.a.icon
				}, m.a.createElement(jo, null)), m.a.createElement("span", {
					className: Vl.a.text
				}, s.fbt._("Recap", null, {
					hk: "XfO5d"
				})))) : null
			};
			const Ql = e => Object(ri.c)(e, {
				experimentName: Un.mg,
				experimentEligibilitySelector: ri.a
			}) === Un.Vd;
			var Kl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Zl = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Jl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Xl = n("./src/reddit/selectors/seo/index.ts"),
				Yl = n("./src/reddit/selectors/tooltip.ts"),
				$l = n("./src/higherOrderComponents/asTooltip.tsx"),
				ed = n("./src/lib/constants/icons.ts"),
				td = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				nd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				sd = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				od = n.n(sd);
			const rd = (e, t) => e && m.a.createElement("div", {
				className: od.a.marketingBadge
			}, m.a.createElement(td.a, {
				className: od.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Kc.a, {
				className: Object(Se.a)(od.a.sparkle, od.a.sparkle1)
			}), m.a.createElement(Kc.a, {
				className: Object(Se.a)(od.a.sparkle, od.a.sparkle2)
			}), m.a.createElement(Kc.a, {
				className: Object(Se.a)(od.a.sparkle, od.a.sparkle3)
			}), m.a.createElement(Kc.a, {
				className: Object(Se.a)(od.a.sparkle, od.a.sparkle4)
			})));
			var ad = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var o;
					const r = Object(ye.d)(),
						a = Object(vi.a)(),
						i = Object(Bn.eb)(),
						c = Object(ye.e)(e => e.user.account),
						l = Object(ye.e)(mo.d),
						d = Object(ye.e)(sc.b),
						u = Object(ye.e)(sc.a),
						p = () => r(Object(zc.b)({
							clickSource: "nav"
						})),
						b = Object(ye.e)(oe.j).startsWith("en");
					if ((null === (o = null == i ? void 0 : i.meta) || void 0 === o ? void 0 : o.name) === S.Sb.AVATAR) return null;
					d || r(Object(Vc.a)()), u && a(Qc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(Qc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && rd(u, l));
						return m.a.createElement(Jr, {
							onClick: g,
							title: e,
							titleClassName: od.a.avatarLinkBody
						})
					}
					const f = Object(nd.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? tu("avatar_style") : tu("add"), ((e, t, n, s) => o => m.a.createElement("div", {
						className: `${od.a.avatarLinkBody} ${o.className}`
					}, e, s && rd(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				id = n("./src/reddit/helpers/trackers/user.ts"),
				cd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less"),
				ld = n.n(cd);
			const {
				fbt: dd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ud = Object(nd.c)(() => m.a.createElement(jo, {
				className: Po.a.wrappedRedditDropdown,
				isForMenu: !0
			}), () => m.a.createElement("div", {
				className: ld.a.redditRecapLink
			}, dd._("{=Reddit Recap}{=NEW!}", [dd._param("=Reddit Recap", m.a.createElement("p", {
				className: ld.a.title
			}, dd._("Reddit Recap", null, {
				hk: "1fzA7a"
			}))), dd._param("=NEW!", m.a.createElement("p", {
				className: ld.a.new
			}, dd._("NEW!", null, {
				hk: "hAUg8"
			})))], {
				hk: "3xR4ek"
			}))), md = () => {
				const e = Object(vi.a)();
				return Object(ye.e)(Ci.a) ? m.a.createElement(ud, {
					href: Oi.a,
					onClick: () => e(Object(id.f)())
				}) : null
			};
			var pd = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(Se.a)(Hr.a.heading, Wr.a.category)
					}, m.a.createElement("span", {
						className: Hr.a.headingContent
					}, m.a.createElement("span", {
						className: Hr.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Hr.a.title
					}, t))), m.a.createElement("div", {
						className: Hr.a.contentContainer
					}, n))
				},
				bd = n("./src/reddit/helpers/trackers/modTools.ts");
			const hd = () => {
					const e = Object(ye.d)(),
						t = Object(vi.a)(),
						n = Object(ye.e)(v.eb);
					return m.a.createElement($r, {
						isEnabled: n,
						onClick: () => {
							t(Object(id.g)(n)), (t => e(Object(cl.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				gd = () => {
					const e = Object(ye.d)(),
						t = Object(vi.a)(),
						n = Object(ye.e)(e => e.user.account),
						o = Object(ye.e)(Jl.a);
					return n && n.isMod ? m.a.createElement($r, {
						isEnabled: o,
						onClick: () => {
							t(Object(bd.k)(!o)), (() => e(Object(Tl.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var fd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				vd = n.n(fd);
			const Od = () => {
					const e = Object(ye.d)(),
						t = Object(Ke.b)(),
						n = Object(ye.e)(v.l),
						o = Object(ye.e)(v.W);
					return n ? m.a.createElement(pd, {
						icon: m.a.createElement(co.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement($r, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: o,
						onClick: () => {
							t(Object(id.h)(!o)), (t => e(Object(cl.J)({
								showPresence: t
							})))(!o)
						}
					}), m.a.createElement(md, null), m.a.createElement(Xr, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(ta.c)("profile"))
					}), m.a.createElement(ad, {
						onClick: () => e(Object(gc.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Xr, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(ta.c)("settings"))
					})) : null
				},
				Cd = () => {
					return Object(ye.e)(v.l) ? m.a.createElement(pd, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(co.a, {
							name: "views"
						})
					}, m.a.createElement(gd, null), m.a.createElement(hd, null)) : null
				},
				yd = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(ye.e)(v.l) ? null : m.a.createElement(zr, {
						icon: m.a.createElement(co.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(hd, null))
				},
				Ed = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o,
						useClassicUserMenuStyles: r = !1
					} = e;
					return m.a.createElement(zr, {
						buttonClassName: r ? vd.a.button : "",
						headingClassName: r ? vd.a.headingContent : "",
						icon: m.a.createElement(co.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: r,
						onClick: (e, t) => {
							o(Object(ta.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Xr, {
						className: r ? vd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => o(Object(ta.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Xr, {
						className: r ? vd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => o(Object(ta.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Xr, {
						className: r ? vd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => o(Object(ta.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Xr, {
						className: r ? vd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => o(Object(ta.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var xd = n("./src/reddit/components/HiddenDiv.tsx"),
				_d = n("./src/reddit/controls/Dropdown/index.tsx"),
				jd = n("./src/reddit/helpers/trackers/authControls.ts"),
				Sd = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const Pd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Hr.a.headingContent
					}, m.a.createElement("span", {
						className: Hr.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(Se.a)(Hr.a.title, s)
					}, n))
				},
				kd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Hr.a.button, t),
						onClick: s
					}, m.a.createElement(Pd, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Nd = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Ur, {
						className: Object(Se.a)(Hr.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Pd, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				},
				wd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var Md = e => [{
				noun: "ios",
				rel: "nofollow",
				title: () => s.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => s.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "rereddit",
				title: () => s.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: wd()
			}, {
				isHidden: !e,
				noun: "best_communities",
				title: () => s.fbt._("Best Communities", null, {
					hk: "3oZdW7"
				}),
				url: "https://www.reddit.com/best/communities/1/"
			}, {
				noun: "communities",
				title: () => s.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => s.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "blog",
				title: () => s.fbt._("Blog", null, {
					hk: "2PoxW5"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => s.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => s.fbt._("Press", null, {
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Id = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: o,
						onClick: r,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(zr, {
						icon: m.a.createElement(co.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: o,
						onClick: (e, t) => {
							a(Object(ta.c)(t ? "more_chevron" : "more_menu")), "function" == typeof r && r(e)
						}
					}, Md(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: o,
							title: r,
							url: a
						} = e;
						return !n && m.a.createElement(Xr, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(ta.c)(s))
							},
							rel: o,
							title: r()
						})
					})(e, a)), n ? m.a.createElement(Xr, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(ta.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: gn.cb(e),
								subreddit: gn.kb(e)
							}))
						}
					}) : null)
				},
				Ad = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Td = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Rd = n.n(Td);
			var Ld = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: o,
					showAll: r
				}, a] = Object(u.useState)({
					links: Object(Ad.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: o,
							showAll: !1
						})
					}, [o, t]), 0 === o.length) return null;
				const i = r ? o : o.slice(0, 3),
					c = () => a({
						links: o,
						showAll: !r
					});
				return m.a.createElement(zr, {
					"aria-hidden": !0,
					icon: m.a.createElement(co.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Yr, {
						className: Rd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Rd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: Rd.a.title
					})
				}), o.length > 3 && (e => m.a.createElement("span", {
					className: Hr.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(Se.a)(Hr.a.headingContent, Rd.a.headingContent)
				}, m.a.createElement("span", {
					className: Hr.a.title
				}, e))))(r ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Dd() {
				return (Dd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Gd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Ud;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Ud || (Ud = {}));
			var Bd = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: o,
						isNsfwBlocking: r,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(Ud.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(r)
					}, y = () => m.a.createElement(Nd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(id.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: Fd
					}, m.a.createElement(Od, null), m.a.createElement(Cd, null), m.a.createElement(() => d ? m.a.createElement(kd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(Sd.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Nd, {
						className: Wr.a.coinsLink,
						icon: m.a.createElement(co.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Wr.a.meta
						}, Gd(b))),
						onClick: () => {
							Object(ia.d)(ia.a.GoldPayment, !0), e.sendEvent(Object(id.d)())
						},
						titleClassName: Wr.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Nd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(ia.d)(ia.a.GoldPayment, !0), e.sendEvent(Object(id.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Nd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "live"
						}),
						href: Jo.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(Ld, v(Ud.RecentCommunitiesMenu)), m.a.createElement(ra, Dd({}, v(Ud.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(yd, v(Ud.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Nd, {
						className: Wr.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(co.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Id, Dd({}, v(Ud.MoreMenu), {
						isCommunityLinkVisible: o,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(Ed, Dd({}, v(Ud.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(kd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(kd, {
						className: Wr.a.button,
						icon: m.a.createElement(co.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Hr.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Hr.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				Hd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				qd = n.n(Hd);

			function Wd() {
				return (Wd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vd = ze.a.wrapped(_d.a, "Dropdown", qd.a),
				zd = Object($l.a)(Vd),
				Qd = e => m.a.createElement(nd.a, {
					className: Object(Se.a)(qd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: qd.a.buttonText
				}, e.displayText), m.a.createElement(Qr.a, {
					className: qd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				Kd = e => t => m.a.createElement(co.a, Wd({
					name: e
				}, t)),
				Zd = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: o
					} = e;
					return m.a.createElement(Qd, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(id.g)(t)), o(!t)
						}
					}, m.a.createElement(co.a, {
						name: "night",
						className: qd.a.nightIcon
					}))
				},
				Jd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(nd.b)(Kd(ed.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(ta.c)("help_center"))
					})
				},
				Xd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(nd.b)(Kd(ed.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(id.b)())
					})
				},
				Yd = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: o
					} = e;
					const r = Object(nd.c)(Kd(ed.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(r, {
						href: "#",
						onClick: e => {
							Object(Ge.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), o(Object(jd.b)()))
						}
					})
				};
			var $d = Object(Ke.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: o,
					requestAwardKarma: r,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(ye.e)(lo.c), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					p(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					r()
				}, [c]), n ? m.a.createElement(xd.a, null, m.a.createElement(Bd, e)) : l ? m.a.createElement(zd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Zd, {
					nightmode: o,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(Jd, {
					sendEvent: a
				}), m.a.createElement(Ed, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Xd, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: qd.a.divider
				}), m.a.createElement(Yd, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(zd, {
					className: qd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Bd, e))
			});

			function eu() {
				return (eu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const tu = e => t => m.a.createElement(co.a, eu({
					name: e
				}, t)),
				nu = Object(ye.b)(() => Object(ne.c)({
					isCrawler: e => !!Object(Xl.a)(e),
					isModModeEnabled: Jl.a,
					isNsfwBlocking: e => {
						const t = Object(se.d)(e),
							n = Object(se.e)(e);
						return t || n
					},
					isOpen: Object(Yl.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Zl.d,
					shouldShowCreateCommunityItem: v.qb,
					navbarLikeMweb: Kl.a,
					nightmode: v.eb,
					showPresence: v.W,
					url: wn.s,
					isCommunityLinkVisible: Ql
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(gc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(cl.z)(t)),
					toggleShowPresence: t => e(Object(cl.J)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Al.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(Al.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Rl.g)(Object(pn.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Dl.b)(Dl.a.Login)), e(Object(ee.openLoginModal)())
					},
					toggleModMode: () => e(Object(Tl.b)()),
					openCommunityCreationModal: () => e(Object(Dt.h)(Kt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var su = Object(Bn.u)({
					pageLayer: e => e
				})(nu(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: o,
						user: r
					} = e, a = Object(ye.e)(Zl.b), [i, c] = Object(u.useState)(!1), l = r && r.id;
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
						p = Object(u.useCallback)(() => {
							c("visible" === document.visibilityState)
						}, []);
					return Object(Gl.a)("visibilitychange", p), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(Se.a)(qd.a.container, Ll.e)
					}, o && i && a && m.a.createElement(Il.a, {
						variables: d,
						onData: wl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Hl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(Se.a)(e.className, qd.a.inlineButton, {
							[qd.a.dropdownOpen]: e.isOpen,
							[qd.a.isLoggedOut]: !r,
							[qd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: qd.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(Se.a)(qd.a.accountWrapper, qd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(m.a.Fragment, null, m.a.createElement(yo.a, {
						className: Object(Se.a)(qd.a.imgIcon, {
							[qd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: qd.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && o
					}), m.a.createElement(zl, null)), m.a.createElement("span", {
						className: qd.a.accountDetails
					}, m.a.createElement("span", {
						className: qd.a.username
					}, n.displayText, n.isGold && m.a.createElement(Bl.a, {
						className: qd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: qd.a.accountKarma
					}, m.a.createElement(co.a, {
						name: "karma",
						isFilled: !0,
						className: qd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Fl.a)(e),
							n = Object(Ml.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: qd.a.accountCoins
					}, m.a.createElement(Ul.a, {
						className: qd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Ml.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(Se.a)(qd.a.accountWrapper, qd.a.isLoggedOut)
					}, m.a.createElement(co.a, {
						name: "user",
						className: qd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(co.a, {
						className: qd.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(ka.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement($d, e))
				})),
				ou = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				ru = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				au = n.n(ru);
			const iu = Object(pl.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(Se.a)(e.className, au.a.confirmContainer, au.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: au.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: au.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var cu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				lu = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				du = n("./src/reddit/helpers/trackers/inbox.ts"),
				uu = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				mu = n("./src/reddit/routes/acknowledgements/index.ts"),
				pu = n("./src/reddit/routes/appeal/index.ts");
			var bu = {
					action: () => async e => await e(Object(p.c)(tr.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				hu = n("./src/reddit/routes/coins/index.ts"),
				gu = n("./src/reddit/routes/coinsMobile/index.ts"),
				fu = n("./src/reddit/routes/commentsPage/index.ts"),
				vu = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Ou = [],
				Cu = n("./src/reddit/routes/econManagement/index.ts"),
				yu = n("./src/reddit/routes/econManagement2/index.ts");
			var Eu = {
					action: Object(M.a)(() => n.e(5).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				xu = n("./src/lib/addQueryParams/index.ts");
			var _u = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(xu.a)("/", r)))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [S.u.COMMENTS_PAGE, S.u.FRONTPAGE]
				},
				ju = n("./src/reddit/routes/followers/index.ts"),
				Su = n("./src/reddit/routes/framedGild/index.ts"),
				Pu = n("./src/reddit/routes/framedModal/index.ts"),
				ku = n("./src/reddit/routes/frontpage/index.ts"),
				Nu = n("./src/reddit/routes/geotagging/index.ts"),
				wu = n("./src/reddit/routes/happeningNow/index.ts"),
				Mu = n("./src/reddit/routes/inbox/index.ts"),
				Iu = n("./src/reddit/routes/meta/index.ts"),
				Au = n("./src/reddit/routes/moderationPages/index.ts"),
				Tu = n("./src/reddit/routes/modQueue/index.ts"),
				Ru = n("./src/reddit/routes/multireddit/index.ts"),
				Lu = n("./src/reddit/routes/notificationsInbox/index.ts"),
				Du = n("./src/reddit/routes/postCreation/constants.ts");
			const Fu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: S.u.EMPTY,
				exact: !0,
				meta: {
					name: S.Sb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var Gu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Du.b))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Fu],
				Uu = n("./src/reddit/routes/postCreation/index.ts"),
				Bu = n("./src/reddit/routes/postDraft/index.ts"),
				Hu = n("./src/reddit/routes/postSetPage/index.ts");
			var qu = {
				action: () => async () => {
					window.location.replace(window.location.origin)
				},
				chunk: S.u.EMPTY,
				exact: !0,
				meta: {
					name: S.Sb.POWERUPS_REDIRECT
				},
				path: ["/powerup", "/powerups"]
			};
			var Wu = {
					action: () => async e => await e(Object(p.c)(Zo.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				Vu = n("./src/reddit/routes/premium/index.ts"),
				zu = n("./src/reddit/routes/profileComments/index.ts"),
				Qu = n("./src/reddit/endpoints/me/index.ts"),
				Ku = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Zu = n("./src/server/helpers/profileRedirect.ts");
			var Ju = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							rest: r
						} = e.params, {
							path: a,
							queryParams: i
						} = e, c = await Object(Qu.a)(o());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(Ku.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(Zu.b)({
								path: a,
								profileName: l,
								queryParams: i,
								rest: r
							});
						await t(Object(p.c)(d))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Xu = n("./src/reddit/routes/profileModSettings/index.ts"),
				Yu = n("./src/reddit/routes/profileOverview/index.ts"),
				$u = n("./src/reddit/routes/profilePosts/index.ts");
			var em = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: o,
							queryParams: r
						} = e, a = Object(Zu.b)({
							path: o,
							profileName: n,
							queryParams: r,
							rest: s
						});
						t(Object(p.c)(a))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/posts", "/user/:profileName/posts/:rest(.*)"]
				},
				tm = n("./src/reddit/routes/profilePrivate/index.ts");
			var nm = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: o,
							queryParams: r
						} = e, a = Object(Zu.b)({
							path: o,
							profileName: n,
							queryParams: r,
							rest: s
						});
						await t(Object(p.c)(a))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)", "/user/:profileName/moderation", "/u/:profileName/moderation"]
				},
				sm = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				om = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				rm = n("./src/reddit/routes/report/index.ts"),
				am = n("./src/reddit/routes/searchResults/index.ts"),
				im = n("./src/reddit/routes/settings/index.ts");
			var cm = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: S.u.EMPTY,
					meta: {
						name: S.Sb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: S.u.EMPTY,
					meta: {
						name: S.Sb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				lm = n("./src/reddit/routes/subreddit/index.ts"),
				dm = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				um = n("./src/reddit/routes/subredditWiki/index.ts"),
				mm = n("./src/reddit/routes/topic/index.ts");
			var pm = [mu.a, pu.a, tr.b, bu, hu.a, gu.a, vu.a, Ju, nm, em, ...uu.a, ...fu.b, Eu, ...ku.a, Nu.a, Vu.a, Zo.b, Jo.b, Cu.c, yu.a, qu, Wu, ju.a, Su.a, Pu.a, Uu.a, Bu.a, Hu.a, ...Gu, _u, ...Iu.a, Ru.a, Tu.a, Ko.c, Qo.b, Lu.a, Mu.a, zu.a, Xu.a, Yu.a, $u.a, sm.a, tm.a, om.a, Oi.b, ...im.a, ...cm, am.a, ...um.a, mm.a, lm.b, dm.a, Au.a, rm.a, ...Ou, wu.a],
				bm = n("./src/reddit/selectors/appBadges.ts"),
				hm = n("./src/reddit/selectors/emailVerification.ts"),
				gm = n("./src/reddit/selectors/sso.ts");
			var fm = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: o
					} = e;
					const r = Object(fi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Pc.a.iconWrapper,
						onMouseEnter: () => {
							r.show()
						},
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement("a", {
						className: Pc.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), o()
						}
					}, m.a.createElement(Go.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(co.a, {
						name: "chat",
						className: Pc.a.icon2020
					}))), m.a.createElement(hi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				vm = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				Om = n("./src/reddit/constants/chat.ts"),
				Cm = n("./src/reddit/selectors/chat.ts");
			var ym = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: o
				} = e;
				const r = Object(ye.d)(),
					a = Object(ye.e)(v.j),
					c = Object(ye.e)(Cm.b),
					l = Object(fi.a)(),
					d = Object(u.useMemo)(() => c === Om.b.IS_SHOWING, [c]),
					p = Object(u.useMemo)(() => d ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${Ri.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: Ri.a.alien600
							}
						},
						visible: !0
					}))(l) : l, [l, d]),
					b = Object(u.useCallback)(() => {
						d && a && r(Object(vm.c)(Om.b.DISMISSED, a))
					}, [r, d, a]);
				return Object(u.useEffect)(() => {
					a && r(Object(vm.b)(a))
				}, [r, a]), Object(u.useEffect)(() => {
					if (!d) return;
					const e = setTimeout(b, 3e3);
					return () => clearTimeout(e)
				}, [b, d]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Pc.a.iconWrapper,
					onMouseEnter: () => {
						l.show()
					},
					onMouseLeave: l.hide,
					ref: l.target.ref
				}, m.a.createElement("a", {
					className: Pc.a.link,
					href: `${i.a.redditUrl}/chat`,
					onClick: e => {
						e.preventDefault(), o(), b()
					}
				}, m.a.createElement(Go.a, {
					isActive: t > 0 || n,
					unreadCount: t
				}), m.a.createElement(co.a, {
					name: "chat",
					className: Pc.a.icon2020
				}))), m.a.createElement(hi.a, {
					arrowProps: p.arrowProps,
					popperProps: p.popperProps,
					visible: p.visible
				}, d ? m.a.createElement("span", {
					className: Pc.a.liveChatAnnouncementText,
					onClick: e => {
						e.preventDefault(), b()
					}
				}, s.fbt._("Live chats are here now", null, {
					hk: "10sA0h"
				})) : s.fbt._("Chat", null, {
					hk: "4nXRWH"
				})))
			}));
			var Em = e => {
					return Object(ye.e)(K.c) ? m.a.createElement(ym, e) : m.a.createElement(fm, e)
				},
				xm = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				_m = n.n(xm);
			var jm = Object(Ke.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const o = Object(ye.e)(v.eb),
						r = Object(fi.a)(),
						a = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						i = Object(ye.e)(mc.a) === Un.ld.RepositionCoinNoLiveNoAll;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(Se.a)(t, _m.a.container, {
							[_m.a.isNightMode]: o
						})
					}, m.a.createElement("a", {
						className: _m.a.link,
						ref: r.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(id.c)())
						},
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						"aria-label": a
					}, m.a.createElement(co.a, {
						className: _m.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: _m.a.text
					}, a))), !i && m.a.createElement(hi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, a))
				}),
				Sm = n("./src/lib/makeRequest/index.ts"),
				Pm = n("./src/redditGQL/operations/MatrixChatNotifications.json");
			var km = n("./src/reddit/actions/matrixChat/index.ts");
			const Nm = () => async (e, t, n) => {
				const s = await (async e => {
					var t, n, s, o, r, a, i, c;
					const l = await Object(Da.a)(e, Pm);
					if (Object(Sm.c)(l) && !l.error && void 0 !== (null === (o = null === (s = null === (n = null === (t = null == l ? void 0 : l.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.identity) || void 0 === s ? void 0 : s.matrixNotifications) || void 0 === o ? void 0 : o.unreadCount)) return null === (c = null === (i = null === (a = null === (r = null == l ? void 0 : l.body) || void 0 === r ? void 0 : r.data) || void 0 === a ? void 0 : a.identity) || void 0 === i ? void 0 : i.matrixNotifications) || void 0 === c ? void 0 : c.unreadCount
				})(n.gqlContext());
				void 0 !== s && e(Object(km.b)({
					count: s
				}))
			};
			var wm = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				Mm = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const Im = () => {
					const e = Object(fi.a)(),
						t = Object(ye.d)(),
						n = Object(ye.e)(Mm.c),
						o = Object(ye.e)(Mm.b),
						r = Object(ye.e)(Mm.a);
					return m.a.useEffect(() => {
						void 0 === r && o === wm.b.CLOSED && t(Nm())
					}, [r, o, t]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Pc.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref,
						"data-testid": "matrix-chat-button"
					}, m.a.createElement("a", {
						className: Pc.a.link,
						href: n,
						onClick: e => {
							const n = o !== wm.b.NORMAL ? wm.b.NORMAL : wm.b.CLOSED;
							e.preventDefault(), t(Object(km.c)({
								state: n
							}))
						}
					}, r && r > 0 && m.a.createElement(Go.a, {
						isActive: !0,
						unreadCount: r,
						testId: "matrix-chat-badge"
					}), m.a.createElement(co.a, {
						name: "chat_group",
						className: Pc.a.icon2020
					}))), m.a.createElement(hi.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Matrix Chat", null, {
						hk: "1cv14m"
					})))
				},
				Am = "change-username-tooltip-id",
				Tm = "email-verification-tooltip-id",
				Rm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const o = Object(fi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Pc.a.iconWrapper,
						onMouseEnter: o.show,
						onMouseLeave: o.hide,
						ref: o.target.ref
					}, m.a.createElement(jc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: ou.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Go.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(co.a, {
						className: Pc.a.icon2020,
						name: "mod"
					})), m.a.createElement(hi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(ou.b, {
						className: Pc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Lm = m.a.memo((function(e) {
					const t = Object(fi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Pc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: Pc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(co.a, {
						className: Pc.a.icon2020,
						name: "add"
					}))), m.a.createElement(hi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Dm = Object(Bn.u)({
					pageLayer: e => e
				}),
				Fm = Object(ne.c)({
					activeDropdownId: Yl.a,
					activeModalId: Uc.b,
					appBadges: bm.b,
					chatDirectMessagesCount: bm.e,
					email: v.o,
					hasUnreadChatMessages: bm.f,
					inboxBadgeCount: bm.g,
					isAvatarQuickCreateEnabled: e => Object(Xo.c)(e) && cc(e),
					isAvatarStorefrontEnabled: e => Object(Xo.d)(e) && !!Object(sc.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: hm.b,
					isLoggedIn: v.R,
					isModerator: hn.k,
					isNameEditable: v.T,
					isOneTapSession: oe.g,
					isResponsiveSettingsEnabled: Wn.a,
					isChatMatrixClientEnabled: K.b,
					shouldOpenEmailVerificationTooltip: hm.a,
					shouldShowChangeUsernameModals: gm.c,
					unreadNotifications: v.zb,
					usernameChangedModalOpen: Object(Uc.c)(bl.p),
					topNavigationVariant: mc.a
				}),
				Gm = Object(ye.b)(Fm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(rl.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(al.b)()),
					showEmailVerificationTooltip: () => e(Object(al.b)()),
					fetchAppBadges: () => e(Object(ol.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(lu.a)()), e(Object(Ce.p)())
					},
					onChatClick: () => e(Object(W.f)()),
					onDismissCustomizeFlyout: () => e(Object(cl.u)()),
					onOpenModerationDropdown: () => {
						e(Object(gc.h)({
							tooltipId: ou.a
						})), e(Object(Dr.q)())
					},
					onOpenUserDropdown: () => e(Object(gc.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Dt.h)(bl.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Dt.h)(bl.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(al.b)()), e(Object(Dt.i)(bl.a))
					},
					resendEmail: () => e(Object(Ce.v)(gl.a)),
					requestCreatePost: () => {
						t.pageLayer && e(il.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(rl.startChangeUsernameFlow)(n))
					}
				}));
			class Um extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(du.D)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(ta.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(da.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(I.a)(e.pathname, pm),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== S.Sb.POST_CREATION && n !== S.Sb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.topNavigationVariant = this.props.topNavigationVariant, this.noAdvertiseVariant = this.topNavigationVariant === Un.ld.NoAdvertise, this.repositionCoinNoLiveNoAllVariant = this.topNavigationVariant === Un.ld.RepositionCoinNoLiveNoAll, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n,
							onAvatarButtonClick: s
						} = this.props, o = n && Object(pn.e)(n) || "", r = () => {
							this.repositionCoinNoLiveNoAllVariant && (this.setState({
								showNavBarEconCta: !1
							}), s && s())
						};
						return e ? m.a.createElement($c, {
							avatarUrlParams: {
								avatarId: "random",
								username: o
							}
						}) : t ? m.a.createElement(sl, {
							handleButtonClick: r
						}) : !this.repositionCoinNoLiveNoAllVariant && m.a.createElement(Ni.a, null)
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), wa()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: o,
						email: r,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: l,
						shouldShowEmailVerificationTooltip: d,
						isLoggedIn: p,
						isModerator: b,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						isChatMatrixClientEnabled: v,
						onDismissCustomizeFlyout: O,
						onOpenUserDropdown: C,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						pageLayer: x,
						resendEmail: _,
						shouldOpenEmailVerificationTooltip: j,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: P,
						unreadNotifications: k,
						user: N,
						usernameChangedModalOpen: w
					} = this.props, M = !(!k || !k.hasUnreadModmail), I = N && Object(pn.e)(N) || "", A = Object(Se.a)({
						[Pc.a["m-responsive"]]: f
					}), T = S && g;
					return m.a.createElement(un.a, {
						id: Tm,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(un.a, {
						className: Pc.a.headerLinks,
						id: Am
					}, b && m.a.createElement(Rm, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === ou.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(Em, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), v && m.a.createElement(Im, null), m.a.createElement(Wc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == x ? void 0 : x.url,
						userId: N.id,
						isLoggedIn: p,
						iconWrapper: Pc.a.iconWrapper
					}), m.a.createElement(Lm, {
						onClickCreatePost: this.onClickCreatePost
					}), !this.noAdvertiseVariant && m.a.createElement(jm, {
						className: Pc.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: Pc.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(su, {
						className: Pc.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: C,
						sendEventWithName: this.sendEventWithName,
						user: N
					}), p && m.a.createElement(_l, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(kl, {
						onCloseFlyout: O
					}), m.a.createElement(yl, {
						closeTooltip: o,
						email: r,
						isOpen: j && d,
						resendEmail: _,
						toggleChangeEmailModal: P,
						tooltipId: Tm
					}), m.a.createElement(ml, {
						email: r,
						shouldOpenTooltip: j
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(ul.a, {
						closeTooltip: s,
						isOpen: c && !S,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						tooltipId: Am,
						username: I
					}), S && m.a.createElement(dl.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: A,
						username: I,
						withOverlay: !0
					}), m.a.createElement(ll.a, {
						confirmNavigate: this.confirmNavigate
					})), T && !w && m.a.createElement(cu.a, {
						className: Pc.a.cornerModal,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(Se.a)(A, Pc.a.modalOverlay),
						username: I,
						withOverlay: !w
					}), T && w && m.a.createElement(iu, {
						className: Pc.a.cornerModal,
						isOpen: !0,
						tooltipId: Am,
						username: I
					}))
				}
			}
			var Bm = Object(Ke.c)(Dm(Gm(Um))),
				Hm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				qm = n("./src/reddit/selectors/experiments/index.ts");
			const Wm = e => Object(ri.c)(e, {
				experimentName: Un.Tc,
				experimentEligibilitySelector: qm.f
			}) === Un.wb.Enabled;
			var Vm = n("./src/reddit/components/Header/User/index.m.less"),
				zm = n.n(Vm);
			const {
				fbt: Qm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Km = Object(ne.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(se.d)(e),
						n = Object(se.e)(e);
					return t || n
				},
				origin: oe.k
			}), Zm = m.a.memo(e => m.a.createElement("div", {
				className: Object(Se.a)(e.className, zm.a.row)
			}, !e.account && m.a.createElement(Jm, e), m.a.createElement(Bm, {
				className: Object(Se.a)({
					[zm.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), Jm = e => {
				const t = Object(ye.e)(bm.g),
					n = Object(ye.e)(v.Gb),
					s = Object(ye.e)(Hm.c),
					o = Object(ye.e)(Wm),
					r = e.pageLayer,
					a = i.a.accountManagerOrigin,
					c = r ? r.url : "/",
					l = r && r.meta && r.meta.name === S.Sb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Wc, {
					sendNavClickInbox: () => e.sendEvent(Object(du.D)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: zm.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(Se.a)(zm.a.loggedOutRow, o ? zm.a.swapAuthNavButtons : "")
				}, m.a.createElement(ln.t, {
					kind: ln.b.ExternalLink,
					priority: o ? ln.c.Primary : ln.c.Secondary,
					redditStyle: !0,
					className: Object(Se.a)(o ? zm.a.separator : "", zm.a.button),
					href: `${a}/login/?dest=${l}`,
					onClick: t => {
						Object(Ge.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(jd.a)("nav")))
					}
				}, Qm._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(ln.t, {
					kind: ln.b.ExternalLink,
					priority: o ? ln.c.Secondary : ln.c.Primary,
					redditStyle: !0,
					className: Object(Se.a)(zm.a.button, o ? "" : zm.a.separator),
					href: `${a}/register/?dest=${l}`,
					onClick: t => {
						Object(Ge.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(jd.c)("nav")))
					}
				}, Qm._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Xm = Object(Bn.u)()(Object(ye.b)(Km, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Dl.b)(Dl.a.Login)) : e(Object(Dt.k)({
							actionSource: Dt.a.HeaderLogin
						})), e(Object(ee.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Dl.b)(Dl.a.Signup)) : e(Object(Dt.k)({
							actionSource: Dt.a.HeaderSignup
						})), e(Object(ee.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(gc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Ke.c)(Zm))),
				Ym = n("./src/reddit/components/Header/index.m.less"),
				$m = n.n(Ym);

			function ep() {
				return (ep = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const tp = ze.a.header("HeaderDynamicStyles", $m.a),
				np = Object(ne.c)({
					isLoggedIn: v.R,
					isLoggedOutOneFeed: lo.c,
					isNightMode: v.eb,
					isResponsiveSettingsEnabled: Wn.a,
					isPageResponsive: _i.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				sp = Object(Bn.u)({
					categoryName: Bn.c,
					pageLayer: e => e
				}),
				op = e => {
					const t = Object(u.useContext)(Ae.a);
					return m.a.createElement("div", {
						className: $m.a.left
					}, m.a.createElement(ka.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Pa.b, null), m.a.createElement(ro.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: $m.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(pi.a, {
						className: Object(Se.a)($m.a.snoo, {
							[$m.a.snooExp]: t
						})
					}), m.a.createElement(bi.a, {
						className: $m.a.wordmark
					})), e.children)
				},
				rp = e => m.a.createElement("div", {
					className: $m.a.right
				}, e.children, m.a.createElement(Xm, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				ap = e => {
					const t = Object(u.useContext)(Ae.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(Se.a)($m.a.layout, {
							[$m.a.layoutContainer]: t
						})
					}, m.a.createElement(op, ep({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Sa, null), m.a.createElement(mi, {
						className: $m.a.search
					})), m.a.createElement(rp, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement(hc, {
						isAvatarButtonClicked: n,
						className: $m.a.quickLinks
					})))
				},
				ip = e => {
					const t = Object(u.useContext)(Ae.a);
					return m.a.createElement("div", {
						className: Object(Se.a)($m.a.layout, {
							[$m.a.layoutContainer]: t
						})
					}, m.a.createElement(op, ep({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(Sa, null), m.a.createElement("div", {
						className: $m.a.searchContainer
					}, m.a.createElement(mi, {
						className: $m.a.search
					}))), m.a.createElement(rp, null, m.a.createElement($i, null), m.a.createElement(xi, null)))
				};
			var cp = sp(Object(ye.b)(np, e => ({
					onReloadFrontpage: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Ae.a);
					return t = e.isLoggedIn ? ap : ip, m.a.createElement(tp, {
						"data-redditstyle": !0,
						className: Object(Se.a)($m.a.container, e.className, {
							[$m.a.bladeIsOpen]: e.isBladeOpen,
							[$m.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(ki, {
						className: $m.a.MwebResponsiveHeader
					}))
				}))),
				lp = n("./src/reddit/components/LightboxHeader/index.tsx");
			const dp = Object(Ft.a)({
				getComponent: () => Object(ce.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var up = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				mp = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const pp = () => e => ({
					...gn.o(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: bp
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				hp = Object(ne.c)({
					isLoggedIn: v.R,
					origin: oe.k
				});
			class gp extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Ge.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(pp()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(ln.m, {
						className: e,
						href: mp(Ze.a.Register, t),
						onClick: this.onClick
					}, bp._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var fp = Object(ye.b)(hp, e => ({
					openRegisterModal: () => {
						e(Object(Dt.k)({
							actionSource: Dt.a.IdCard,
							redirectUrl: Vo.c[Vo.b.Home]
						})), e(Object(ee.openRegisterModal)())
					}
				}))(Object(Ke.c)(gp)),
				vp = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Op = n.n(vp);
			const {
				fbt: Cp
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var yp = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(xr, {
						className: Op.a.createTitle
					}, Cp._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: Op.a.createDesc
					}, Cp._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(fp, {
						className: Op.a.createButton
					}))
				},
				Ep = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				xp = n.n(Ep);
			const {
				fbt: _p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), jp = Object(ne.c)({
				currentPage: To,
				isLoggedOutOneFeed: lo.c
			}), Sp = Object(ye.b)(jp, e => ({
				onUnpinSubscriptions: () => e(Object(Ue.j)())
			})), Pp = Object(Bn.u)();
			var kp = ze.a.wrapped(Pp(Sp(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: xp.a.title
				}, m.a.createElement("div", {
					className: xp.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(co.a, {
					name: "close",
					className: xp.a.icon
				}))), m.a.createElement(ya, {
					className: Object(Se.a)({
						[xp.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage,
					isPinned: !0
				}), e.isLoggedOutOneFeed && m.a.createElement(yp, {
					className: xp.a.createAccountSection
				})))), "Component", xp.a),
				Np = n("./src/reddit/components/Survey/index.tsx"),
				wp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Mp = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Ip = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...gn.d(t),
						reason: "primary"
					}
				}),
				Ap = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...gn.d(t),
						reason: "secondary"
					}
				});
			var Tp = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Rp = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Lp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Dp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Fp = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Gp = n("./src/reddit/models/Toast/index.ts"),
				Up = n("./src/reddit/selectors/structuredStyles.ts"),
				Bp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Hp = n.n(Bp);

			function qp() {
				return (qp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Wp = e => {
				const t = Kr.a;
				switch (e.kind) {
					case Gp.b.Error:
					case Gp.b.AuthError:
					case Gp.b.SuccessEndBroadcast:
						return t.warning;
					case Gp.b.SuccessCommunity:
						return t.op;
					case Gp.b.SuccessCommunityGreen:
					case Gp.b.SuccessMod:
					case Gp.b.SuccessUnlockComment:
						return t.approved;
					case Gp.b.SuccessLockComment:
						return t.reported;
					case Gp.b.EuCookiePolicy:
					case Gp.b.UappBanner:
					case Gp.b.Undo:
					default:
						return t.op
				}
			};
			class Vp extends m.a.Component {
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
			const zp = ze.a.wrapped(Vp, "PlainBread", Hp.a);
			var Qp = e => m.a.createElement(zp, qp({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Wp(e)
					}
				})),
				Kp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Zp = n.n(Kp);
			const Jp = ze.a.span("Text", Zp.a);
			var Xp = n("./src/reddit/components/Toaster/index.m.less"),
				Yp = n.n(Xp);
			const {
				fbt: $p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), eb = ze.a.wrapped(Lp.a, "AuthErrorToastIcon", Yp.a), tb = ze.a.wrapped(ln.l, "AuthErrorToastPrimaryButton", Yp.a);
			class nb extends m.a.Component {
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
					}, m.a.createElement(Qp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(eb, null), m.a.createElement(Jp, null, $p._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(tb, {
						type: "submit"
					}, $p._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var sb = nb,
				ob = n("./src/lib/cookieConsent/index.ts"),
				rb = n("./src/reddit/controls/Link/index.tsx"),
				ab = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				ib = n.n(ab);
			const {
				fbt: cb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), lb = ze.a.wrapped(ln.l, "PrimaryButton", ib.a), db = ze.a.wrapped(Qp, "Bread", ib.a);
			class ub extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(ob.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(ob.b)({
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
					return m.a.createElement("section", null, m.a.createElement(db, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: ib.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: ib.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(Jp, {
						className: ib.a.EuCookiePolicyText
					}, cb._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(Jp, {
						className: ib.a.EuCookiePolicyText
					}, cb._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(Jp, {
						className: ib.a.EuCookiePolicyText
					}, cb._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), cb._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [cb._param("=Cookie Notice", m.a.createElement(rb.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, cb._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), cb._param("=Privacy Policy", m.a.createElement(rb.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, cb._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: ib.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(lb, {
						type: "submit"
					}, cb._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(lb, {
						type: "submit"
					}, cb._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var mb, pb = ub;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(mb || (mb = {}));
			var bb = n("./src/reddit/controls/Typography/index.tsx"),
				hb = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				gb = n.n(hb);

			function fb() {
				return (fb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const vb = ze.a.div("Container", gb.a),
				Ob = ze.a.img("SideImage", gb.a),
				Cb = ze.a.div("Main", gb.a),
				yb = ze.a.div("SubTitle", gb.a),
				Eb = bb.a,
				xb = ze.a.wrapped(ln.m, "PrimaryLinkButton", gb.a),
				_b = ze.a.wrapped(fl.a, "CloseIcon", gb.a);
			class jb extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Ip(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Mp(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: o,
						subTitle: r,
						title: a
					} = this.props;
					return m.a.createElement(vb, {
						key: t,
						style: {
							...o,
							transform: `\n            translateY(${o.y}px)\n            scale(${o.x}, ${o.x})\n          `
						}
					}, m.a.createElement(_b, {
						onClick: this.props.onClose
					}), m.a.createElement(Ob, {
						srcSet: n
					}), m.a.createElement(Cb, null, m.a.createElement(yb, null, r), m.a.createElement(bb.b, null, a), m.a.createElement(Eb, null, e), m.a.createElement(xb, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Sb = Object(ye.b)(null, e => ({
					onSignup: () => e(Object(ee.openRegisterModal)())
				}))(Object(Ke.c)(jb)),
				Pb = `${kb("subscribe-cap.png")} 1x,\n  ${kb("subscribe-cap@2x.png")} 2x,`;

			function kb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const Nb = 3;
			var wb = n("./src/lib/permanentCookieOptions.ts");
			const Mb = e => `${e}:1527210000`;
			var Ib = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Ab = n.n(Ib);
			const {
				fbt: Tb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Rb = ze.a.div("Icon", Ab.a), Lb = () => m.a.createElement(Rb, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Db = ze.a.wrapped(ln.l, "PrimaryButton", Ab.a), Fb = ze.a.wrapped(Qp, "Bread", Ab.a);
			class Gb extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(In.j, Mb(Nb), Object(wb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Fb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Lb, null), m.a.createElement(Jp, null, Tb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Tb._param("=User Agreement", m.a.createElement(rb.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Tb._("User Agreement", null, {
						hk: "XS57W"
					}))), Tb._param("=Privacy Policy", m.a.createElement(rb.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Tb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Db, {
						type: "submit"
					}, Tb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Ub = Gb;

			function Bb() {
				return (Bb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Hb = [],
				qb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Wb = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Vb = {
					opacity: Object(Ve.spring)(0),
					x: Object(Ve.spring)(.6),
					y: Object(Ve.spring)(80, qb)
				},
				zb = ze.a.wrapped(Lp.a, "SnooFacepalm", Yp.a),
				Qb = ze.a.wrapped(Dp.a, "SnooHappy", Yp.a),
				Kb = ze.a.wrapped(Oo.b, "SubredditIcon", Yp.a),
				Zb = ze.a.img("CustomIcon", Yp.a),
				Jb = ze.a.div("Container", Yp.a),
				Xb = ze.a.wrapped(fl.a, "Close", Yp.a),
				Yb = ze.a.wrapped(Tp.a, "LockIcon", Yp.a),
				$b = ze.a.wrapped(Fp.a, "UnlockIcon", Yp.a),
				eh = ze.a.wrapped(Rp.a, "RemoveIcon", Yp.a),
				th = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Xb, Bb({
					className: "CloseIcon"
				}, e))),
				nh = ze.a.wrapped(Qp, "Bread", Yp.a),
				sh = Object(ne.c)({
					subredditIcon: Up.b,
					toastSlices: e => e.toaster
				}),
				oh = Object(ye.b)(sh, e => ({
					dismissToast: t => () => e(Object(Oe.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Oe.g)(n))
					}
				}));
			class rh extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => ah(e, this.props.toastSlices), this.getWillEnterStyles = () => Wb, this.getWillLeaveStyles = () => Vb
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Ve.TransitionMotion, {
						defaultStyles: Hb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Jb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Gp.b.Custom && void 0 !== t.customToastType) {
							const s = ch[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Gp.b.UappBanner) return m.a.createElement(Ub, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Gp.b.EuCookiePolicy) return m.a.createElement(pb, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Mp("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Ip("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Ap("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Gp.b.AuthError) return m.a.createElement(sb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Gp.b.Modal ? ln.l : ln.r,
							o = t.kind === Gp.b.Modal ? ln.o : ln.r;
						return m.a.createElement(nh, {
							className: t.kind === Gp.b.Modal ? Yp.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(Mp(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Yp.a.ContentWrapper
						}, ih(t, this.props.subredditIcon), t.kind === Gp.b.SuccessLockComment && m.a.createElement(Yb, null), t.kind === Gp.b.SuccessUnlockComment && m.a.createElement($b, null), m.a.createElement(Jp, null, t.text)), m.a.createElement("div", {
							className: Yp.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Ip(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Ap(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(th, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const ah = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Ve.spring)(1),
							x: Object(Ve.spring)(1, qb),
							y: Object(Ve.spring)(0, qb)
						}
					}))
				},
				ih = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Zb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Gp.b.Error:
							return m.a.createElement(zb, null);
						case Gp.b.SuccessEndBroadcast:
							return m.a.createElement(eh, null);
						case Gp.b.SuccessAward:
						case Gp.b.SuccessCommunity:
						case Gp.b.SuccessCommunityGreen:
							return m.a.createElement(Qb, null);
						case Gp.b.SuccessMod:
							return m.a.createElement(Kb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				ch = {
					[Gp.a.subscribeCap]: e => m.a.createElement(Sb, fb({
						name: mb.LoggedOutMaxSubscriptions,
						sideImage: Pb,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var lh = oh(Object(Ke.c)(rh)),
				dh = n("./src/reddit/featureFlags/profileCollections.ts"),
				uh = n("./src/reddit/helpers/trackers/banners.ts"),
				mh = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				ph = n.n(mh);
			var bh = ze.a.div("Wrapper", ph.a),
				hh = n("./src/reddit/components/AlertBanner/index.m.less"),
				gh = n.n(hh);
			const {
				fbt: fh
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vh = () => m.a.createElement(bh, {
				className: Object(Se.a)(gh.a.wrapper, gh.a.suspended)
			}, m.a.createElement("span", null, fh._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), fh._("Click {=here} for more info.", [fh._param("=here", m.a.createElement("a", {
				className: gh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, fh._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Oh = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(bh, {
					className: Object(Se.a)(gh.a.wrapper, gh.a.suspended)
				}, m.a.createElement("span", null, fh._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [fh._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), fh._("Click {=here} for more info.", [fh._param("=here", m.a.createElement("a", {
					className: gh.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, fh._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Ch = () => m.a.createElement(bh, {
				className: Object(Se.a)(gh.a.wrapper, gh.a.fpr)
			}, m.a.createElement("span", null, fh._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: gh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, fh._("Learn more", null, {
				hk: "1OTc8q"
			}))), yh = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(bh, {
					className: Object(Se.a)(gh.a.wrapper, gh.a.deprecated)
				}, m.a.createElement("span", null, fh._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [fh._param("update your browser", m.a.createElement(Eh, {
					link: t
				}, fh._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, fh._("If you do not update your browser, we suggest you visit {old reddit} .", [fh._param("old reddit", m.a.createElement("a", {
					className: gh.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, fh._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Eh = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: gh.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class xh extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(uh.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(uh.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(yh, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Ch, null) : n ? s || null != s ? m.a.createElement(Oh, {
						suspensionDaysLeft: s
					}) : m.a.createElement(vh, null) : null
				}
			}
			var _h = Object(Ke.c)(xh);
			const jh = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Sh = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var Ph = n("./src/reddit/components/OfflineBanner/index.m.less"),
				kh = n.n(Ph);
			const {
				fbt: Nh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var wh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(Se.a)(e.className, kh.a.banner, {
							[kh.a.online]: e.online,
							[kh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: kh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: kh.a.title
					}, e.online ? Nh._("Found the internet!", null, {
						hk: "fMghd"
					}) : Nh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(co.a, {
						className: kh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Mh = n("./node_modules/lodash/debounce.js"),
				Ih = n.n(Mh),
				Ah = n("./src/reddit/components/RecapGame/index.banana.m.less"),
				Th = n.n(Ah);
			var Rh = e => m.a.createElement("div", {
					className: Th.a.wrapper,
					style: {
						left: e.left,
						top: e.top
					}
				}, m.a.createElement("img", {
					src: `${i.a.assetPath}/img/snoosweek/banana.gif`,
					className: Th.a.img
				})),
				Lh = n("./src/reddit/components/RecapGame/index.m.less"),
				Dh = n.n(Lh);
			const {
				fbt: Fh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Gh = e => {
				const t = Object(ye.d)(),
					n = Object(Ke.b)(),
					s = e.score.toString();
				return Object(u.useEffect)(() => {
					n(Object(Ki.d)())
				}, [n]), m.a.createElement("div", {
					className: Dh.a.recapModal
				}, m.a.createElement("div", {
					className: Dh.a.recapModalInner,
					style: {
						backgroundImage: `url(${i.a.assetPath}/img/snoosweek/exit_modal.svg)`
					}
				}), m.a.createElement("p", {
					className: Dh.a.recapModalEndText
				}, Fh._("your future is ripe with opportunity", null, {
					hk: "2JMA75"
				})), m.a.createElement("img", {
					className: Object(Se.a)(Dh.a.recapModalSnoo, Dh.a.end),
					src: `${i.a.assetPath}/img/snoosweek/ghost_static_end.png`
				}), m.a.createElement("div", {
					className: Dh.a.recapModalScore
				}, m.a.createElement("span", {
					className: Dh.a.recapModalScoreTitle
				}, Fh._("score", null, {
					hk: "2IP3HQ"
				})), m.a.createElement("span", {
					className: Dh.a.recapModalScoreValue
				}, s)), m.a.createElement("div", {
					className: Dh.a.controls
				}, m.a.createElement(ln.t, {
					className: Dh.a.recapModalButton,
					priority: ln.c.Secondary,
					onClick: () => {
						e.onRestart && e.onRestart()
					}
				}, Fh._("play again", null, {
					hk: "1GHFMt"
				})), m.a.createElement(ln.t, {
					className: Dh.a.recapModalButton,
					priority: ln.c.Secondary,
					onClick: () => {
						t(Object(Be.recapGameClose)())
					}
				}, Fh._("say goodbye", null, {
					hk: "4xsOLo"
				}))))
			};
			const {
				fbt: Uh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Bh = e => {
					let {
						handler: t
					} = e;
					const n = Object(ye.d)(),
						s = Object(Ke.b)(),
						o = Object(ye.e)(v.eb),
						r = Object(ye.e)(v.R),
						[a, c] = Object(u.useState)(!1);
					return Object(u.useEffect)(() => {
						c(Object(Tn.P)()), n(Object(Be.recapGameSetOriginalNightModeAction)(o)), r && Object(Tn.db)()
					}, [r, s, n, o]), m.a.createElement("div", {
						className: Dh.a.recapModal
					}, m.a.createElement("div", {
						className: Dh.a.recapModalInner,
						style: {
							backgroundImage: `url(${i.a.assetPath}/img/snoosweek/IntroModal.svg)`
						}
					}), m.a.createElement(ln.t, {
						Icon: Object(co.b)("close"),
						className: Dh.a.recapModalClose,
						priority: ln.c.Plain,
						iconClassName: Dh.a.closeIcon,
						onClick: () => {
							n(Object(Be.recapGameClose)()), s(Object(Ki.c)())
						}
					}), m.a.createElement("img", {
						className: Dh.a.recapModalSnoo,
						src: `${i.a.assetPath}/img/snoosweek/ghost_static.png`
					}), m.a.createElement("p", {
						className: Dh.a.recapModalText
					}, Uh._("Try moving Snoo with your keyboard {=WASD}. Press {=ESC} to exit at any time. Collect the maximum bananas before time runs out.", [Uh._param("=WASD", m.a.createElement("span", {
						className: Dh.a.red
					}, Uh._("WASD", null, {
						hk: "3q3XTJ"
					}))), Uh._param("=ESC", m.a.createElement("span", {
						className: Dh.a.red
					}, Uh._("ESC", null, {
						hk: "3N5wI5"
					})))], {
						hk: "zrn6R"
					})), m.a.createElement("div", {
						className: Dh.a.controls
					}, m.a.createElement(ln.t, {
						className: Dh.a.recapModalButton,
						priority: ln.c.Secondary,
						onClick: () => {
							r ? (o || n(Object(cl.A)({
								nightmode: !0
							})), t && t(), s(Object(Ki.e)())) : (n(Object(Dt.k)({
								actionSource: Dt.a.HeaderLogin
							})), n(Object(ee.openLoginModal)()), Object(Tn.Tb)()), !a && s(Object(Ki.b)())
						}
					}, Uh._("start", null, {
						hk: "29i0Wc"
					}))))
				},
				Hh = n("./src/reddit/components/RecapGame/index.scoreboard.m.less"),
				qh = n.n(Hh);
			var Wh = e => {
					let {
						isTransparent: t = !1,
						timeLeft: n,
						score: s
					} = e;
					return m.a.createElement("div", {
						className: qh.a.scoreboardwrapper,
						style: t ? {
							opacity: .3
						} : {}
					}, m.a.createElement("p", {
						className: qh.a.score
					}, s), m.a.createElement("p", {
						className: qh.a.timer
					}, n), m.a.createElement("div", {
						className: qh.a.scoreboard,
						style: {
							backgroundImage: `url(${i.a.assetPath}/img/snoosweek/score_wasd.svg)`
						}
					}))
				},
				Vh = n("./src/reddit/components/RecapGame/index.snoo.m.less"),
				zh = n.n(Vh);
			var Qh = e => {
				let {
					direction: t,
					top: n,
					left: s
				} = e;
				const o = `${i.a.assetPath}/img/snoosweek/ghost_${t}.gif`;
				return m.a.createElement("div", {
					className: zh.a.snoo,
					style: {
						left: s,
						top: n
					}
				}, m.a.createElement("img", {
					src: o,
					alt: "snoo-player",
					className: zh.a.snooimg
				}))
			};
			class Kh extends m.a.Component {
				constructor(e) {
					super(e), this.snooSize = 140, this.tokenSize = 48, this.snooMargin = 20, this.toolbarHeight = 50, this.gameSpeed = 15, this.scoreBoardWidth = 220, this.scoreBoardHeigh = 310, this.onResize = Ih()(() => {
						this.handleResize()
					}, 300), this.handleResize = () => {
						const {
							innerHeight: e,
							innerWidth: t
						} = window;
						this.setState({
							height: e,
							width: t
						})
					}, this.keyHandler = e => {
						e.preventDefault(), e.repeat || e.key in this.keyAction && e.type in this.keyAction[e.key] && this.keyAction[e.key][e.type]()
					}, this.resetSnooIf = e => {
						this.state.snooDirection === e && this.setState({
							snooDirection: "none"
						})
					}, this.keyAction = {
						w: {
							keydown: () => {
								this.setState({
									snooDirection: "up"
								})
							},
							keyup: () => {
								this.resetSnooIf("up")
							}
						},
						a: {
							keydown: () => {
								this.setState({
									snooDirection: "left"
								})
							},
							keyup: () => {
								this.resetSnooIf("left")
							}
						},
						s: {
							keydown: () => {
								this.setState({
									snooDirection: "down"
								})
							},
							keyup: () => {
								this.resetSnooIf("down")
							}
						},
						d: {
							keydown: () => {
								this.setState({
									snooDirection: "right"
								})
							},
							keyup: () => {
								this.resetSnooIf("right")
							}
						}
					}, this.checkForCollision = () => {
						const {
							tokens: e,
							snooX: t,
							snooY: n
						} = this.state;
						for (const s in e) {
							const o = e[s].x,
								r = e[s].y;
							if (o < t + this.snooSize && o + this.tokenSize > t && r < n + this.snooSize && this.tokenSize + r > n) return Number(s)
						}
						return -1
					}, this.updateTokenState = () => {
						const {
							tokenLifeMinSeconds: e,
							tokenLifeMaxSeconds: t,
							fps: n
						} = this.props, {
							tokens: s,
							score: o,
							frameNo: r,
							width: a,
							height: i,
							status: c
						} = this.state;
						if ("in_play" !== c) return;
						let l = !1,
							d = !1;
						if (r % n == 0) {
							l = !0;
							for (const e in s) s[e].lifetime > 0 && s[e].lifetime--;
							for (const n in s)
								if (s[n].lifetime <= 0) {
									s[n].lifetime = Math.floor(Math.random() * (t - e + 1) + e), s[n].x = Math.floor(Math.random() * (a - 2 * this.tokenSize + 4)) + this.tokenSize, s[n].y = Math.floor(Math.random() * (i - 2 * this.tokenSize + 4)) + this.tokenSize;
									break
								}
						}
						const u = this.checkForCollision(); - 1 !== u && s[u].lifetime > 0 && (s[u].lifetime = 0, l = !0, d = !0), l && this.setState({
							tokens: s
						}, () => {
							d && this.setState({
								score: o + 1
							})
						})
					}, this.updateSnooState = () => {
						let {
							snooX: e,
							snooY: t
						} = this.state;
						const {
							status: n
						} = this.state;
						if ("in_play" !== n) return;
						const {
							snooDirection: s,
							height: o,
							width: r
						} = this.state;
						"left" === s && e > -this.snooMargin ? e -= this.gameSpeed : "right" === s && e + this.snooSize + this.snooMargin < r ? e += this.gameSpeed : "up" === s && t > this.toolbarHeight ? t -= this.gameSpeed : "down" === s && t + this.snooSize + this.snooMargin < o && (t += this.gameSpeed), this.setState({
							snooX: e,
							snooY: t
						})
					}, this.updateTimerAndCheckGameEnd = () => {
						const {
							timeLeft: e
						} = this.state;
						this.setState({
							timeLeft: e - 1
						}, () => {
							e <= 1 && this.setState({
								status: "game_over",
								tokens: {}
							})
						})
					}, this.updateFrame = () => {
						const {
							fps: e
						} = this.props, {
							frameNo: t
						} = this.state;
						this.setState({
							frameNo: (t + 1) % e
						}, () => {
							this.updateSnooState(), this.updateTokenState(), t % e == 0 && this.updateTimerAndCheckGameEnd()
						})
					}, this.startGamePlay = () => {
						const {
							fps: e
						} = this.props;
						"new_game" === this.state.status && this.setState({
							status: "in_play"
						}, () => {
							const t = setInterval(this.updateFrame, 1e3 / e);
							this.setState({
								refreshLoopID: t
							})
						})
					}, this.endGamePlay = () => {
						const {
							refreshLoopID: e,
							status: t
						} = this.state, {
							fps: n,
							tokenMax: s
						} = this.props;
						if ("game_over" === t) {
							void 0 !== e && clearInterval(e);
							const t = {};
							for (let e = 0; e < s; e++) t[e] = {
								x: 0,
								y: 0,
								lifetime: 0
							};
							this.setState({
								status: "in_play",
								score: 0,
								timeLeft: 60,
								snooY: window.innerHeight / 2 - this.snooSize / 2,
								snooX: window.innerWidth / 2 - this.snooSize,
								snooDirection: "none",
								tokens: t
							});
							const o = setInterval(this.updateFrame, 1e3 / n);
							this.setState({
								refreshLoopID: o
							})
						}
					}, this.isSnooOnScoreboard = (e, t, n) => e >= n - (this.scoreBoardWidth + this.snooSize + this.snooMargin) && t <= this.scoreBoardHeigh + 45, this.containerRef = m.a.createRef();
					const t = {};
					for (let n = 0; n < e.tokenMax; n++) t[n] = {
						x: 0,
						y: 0,
						lifetime: 0
					};
					this.state = {
						score: 0,
						timeLeft: e.timeMax,
						frameNo: 0,
						snooX: -25,
						snooY: 45,
						snooDirection: "none",
						tokens: t,
						status: "new_game",
						height: 1,
						width: 1
					}
				}
				componentDidUpdate(e, t) {
					const n = this.containerRef.current;
					n && n.focus()
				}
				componentDidMount() {
					this.handleResize(), window.addEventListener("resize", this.onResize), this.setState(e => ({
						snooY: window.innerHeight / 2 - this.snooSize / 2,
						snooX: window.innerWidth / 2 - this.snooSize
					}))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.onResize)
				}
				renderTokens() {
					const {
						tokens: e
					} = this.state, t = [];
					for (const n in e) {
						const s = e[n];
						s.lifetime > 0 && t.push(m.a.createElement(Rh, {
							key: n,
							left: `${s.x}px`,
							top: `${s.y}px`
						}))
					}
					return t
				}
				render() {
					const {
						snooX: e,
						snooY: t,
						snooDirection: n,
						status: s,
						score: o,
						timeLeft: r,
						width: a
					} = this.state;
					let c = m.a.createElement(m.a.Fragment, null);
					return "new_game" === s ? c = m.a.createElement(Bh, {
						handler: this.startGamePlay
					}) : "in_play" === s ? c = m.a.createElement(m.a.Fragment, null, this.renderTokens(), m.a.createElement(Wh, {
						score: o,
						timeLeft: r,
						isTransparent: this.isSnooOnScoreboard(e, t, a)
					}), m.a.createElement(Qh, {
						left: `${e}px`,
						top: `${t}px`,
						direction: n
					})) : "game_over" === s && (c = m.a.createElement(Gh, {
						onRestart: this.endGamePlay,
						score: o
					})), m.a.createElement("div", {
						tabIndex: 0,
						onKeyDown: this.keyHandler,
						onKeyUp: this.keyHandler,
						ref: this.containerRef
					}, ["up", "down", "left", "right", "none"].map(e => m.a.createElement("img", {
						key: e,
						style: {
							display: "none"
						},
						src: `${i.a.assetPath}/img/snoosweek/ghost_${e}.gif`
					})), m.a.createElement("div", {
						className: Dh.a.gameWrapper
					}, c), m.a.createElement("div", {
						className: Dh.a.recapoverlay
					}, this.props.children))
				}
			}
			Kh.defaultProps = {
				tokenMax: 10,
				timeMax: 60,
				tokenLifeMinSeconds: 5,
				tokenLifeMaxSeconds: 15,
				fps: 20
			};
			var Zh = Kh,
				Jh = n("./src/reddit/components/Upsell/async.ts"),
				Xh = n("./src/reddit/constants/componentSizes.ts"),
				Yh = n("./src/reddit/constants/elementIds.ts"),
				$h = n("./src/reddit/constants/history.ts"),
				eg = n("./src/reddit/constants/posts.ts"),
				tg = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ng = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				sg = n("./src/reddit/constants/promo.ts"),
				og = n("./src/reddit/contexts/Promo/index.ts");

			function rg(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case sg.a.Completed:
						return s === sg.a.Shown ? new Map(e.set(n, sg.a.Completed)) : e;
					case sg.a.Dismissed:
						return s === sg.a.Shown ? new Map(e.set(n, sg.a.Dismissed)) : e;
					case sg.a.Shown:
						return s ? e : new Map(e.set(n, sg.a.Shown));
					default:
						throw new Error
				}
			}
			var ag = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(rg, new Map), o = u.useCallback(e => s({
						type: sg.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => s({
						type: sg.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: sg.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: o,
						dismissPromo: r,
						promos: n,
						showPromo: a
					}), [o, r, n, a]);
					return u.createElement(og.a.Provider, {
						value: i
					}, t)
				},
				ig = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				cg = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				lg = n("./src/reddit/helpers/postCollection.ts"),
				dg = n("./src/reddit/models/Theme/index.ts"),
				ug = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				mg = n("./src/reddit/selectors/experiments/survey.ts"),
				pg = n("./src/reddit/selectors/notificationBanner.ts"),
				bg = n("./src/reddit/selectors/onboarding.ts"),
				hg = n("./src/reddit/selectors/posts.ts"),
				gg = n("./src/reddit/selectors/recapGame.ts"),
				fg = n("./src/reddit/components/AppRouter/index.m.less"),
				vg = n.n(fg);

			function Og() {
				return (Og = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cg = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...o
					} = e;
					const r = Object(u.useMemo)(() => Object(ig.a)(s.search), [s.search]);
					return m.a.createElement("div", Og({
						className: Object(Se.a)(vg.a.main, {
							[vg.a.mShowingPaddedPinnedDescriptions]: n,
							[vg.a.removeTopPadding]: r
						}, t),
						id: Yh.a
					}, o))
				},
				yg = Object(Te.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...o
					} = e;
					const r = Object(Ye.a)({
						theme: s,
						...o
					});
					return m.a.createElement("div", Og({
						className: Object(Se.a)(vg.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(dg.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Rn.c)(n)}px`
						}
					}, o))
				}),
				Eg = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const o = Object(u.useContext)(Ae.a);
					return m.a.createElement("div", Og({
						className: Object(Se.a)(vg.a.lightboxHeaderWrapper, t, {
							[vg.a.lightboxHeaderWrapperExp]: o
						})
					}, s, {
						ref: n
					}))
				},
				xg = Object(pg.a)(up.a.EmailCollectionBannerId),
				_g = Object(ye.b)(() => Object(ne.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object($e.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: v.y,
					isBlockingInterstitialEnabled: ug.b,
					isBlockingInterstitialV2Enabled: ug.c,
					isLoggedIn: v.R,
					isLoggedOutOneFeed: lo.c,
					isMatrixChatEnabled: K.b,
					isNpsSurveyEnabled: mg.d,
					isOnboardingQueryParamEnabled: bg.c,
					isSubscriptionsPinned: mo.c,
					isSuccessfulSurveyEnabled: mg.f,
					isSuspended: v.Y,
					isFPR: v.P,
					posts: hg.J,
					profileCollectionsEnabled: dh.a,
					isRecapGameOn: e => {
						return "on" === Object(gg.a)(e).recapGameState
					},
					showEmailCollectionBanner: e => !Object(Bn.N)(e.platform.currentPage) && xg(e),
					signUpModalIsOpen: Object(Uc.c)(Kt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: v.yb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(Ue.i)()),
					onPostDismissTrigger: () => e(Object(fe.l)()),
					onSuccessfulSignupTrigger: () => e(Object(fe.h)()),
					onUnpinSubscriptions: () => e(Object(Ue.j)()),
					onRecapGameTrigger: () => {
						e(Object(Be.recapGameToggleAction)())
					}
				})),
				jg = (e, t) => !(!e.state || !e.state[$h.b.IsOverlay] || t === e);
			class Sg extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Ie()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Xh.k ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= Xh.k && this.props.onPinSubscriptions()
					}, S.N), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Bn.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${S.Nb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === eg.a.PROFILE;
							return !(!r || !Object(lg.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object($e.c)(e.frontpageSignupVariant),
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
					} = this.props, o = n.state && n.state[$h.b.IsOverlay], r = Object(Fe.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Fe.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === S.Sb.INDEX || t.name === S.Sb.SUBREDDIT && n.subredditName === Vo.b.Popular), o = Object($e.c)(this.props.frontpageSignupVariant), r = Object($e.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = jg(e.location, this.previousLocation);
					Le.a.write(() => {
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
						hasInvalidSession: o,
						isFPR: r,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isMatrixChatEnabled: c,
						isRecapGameOn: l,
						isSubscriptionsPinned: d,
						isSuspended: p,
						location: b,
						onClickOutsideOverlay: h,
						routes: g,
						showEmailCollectionBanner: f,
						suspensionDaysLeft: v
					} = this.props, {
						isSignupUpsellDisplayed: O,
						isSignupUpsellHidden: C
					} = this.state, y = this.context, E = jg(b, this.previousLocation);
					b.state && b.state[$h.b.IsOverlay] && !E ? b.state[$h.b.IsOverlay] = !1 : b.state && (this.previousLocation === b || b.state[$h.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[$h.b.CloseLocation] && this.previousLocation.state[$h.b.CloseLocation] === b.state[$h.b.CloseLocation] ? b.state[$h.b.CloseLocation] = {
						...this.previousLocation,
						state: we()(this.previousLocation.state, $h.b.CloseLocation)
					} : b.state[$h.b.CloseLocation] = this.previousLocation);
					const x = Object(Fe.a)(this.previousLocation, b),
						_ = E || x ? this.previousLocation : b,
						j = E || x ? this.previousPage : t,
						P = !(!(j && j.meta && j.meta.name === S.Sb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[Qa.B]),
						k = !(!j || !j.meta || j.meta.name !== S.Sb.MODERATION_PAGES),
						N = Object(Bn.x)(j),
						w = this.getIsPostCollection(),
						M = O && !C,
						I = e.showBanner;
					if (o) return s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					});
					const A = m.a.createElement(kg, {
						browserInfo: y,
						frontpageSignupVariant: n,
						isCommentsPage: N,
						isInline: M,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isSubscriptionsPinned: d,
						location: _,
						overlayIsOpen: E,
						page: j,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: r,
						showOffline: I,
						showSuspended: p
					});
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Bn.a.Provider, {
						value: j
					}, m.a.createElement(Pa.c, {
						isOverlayOpen: E
					}, m.a.createElement(wp.a, {
						forceRedditTheme: P
					}, O && m.a.createElement(Rt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Pg, {
						browserInfo: y,
						connection: e,
						isFPR: r,
						isInline: M,
						isSuspended: p,
						showOffline: I,
						suspensionDaysLeft: v,
						location: _
					})), m.a.createElement(tg.a.Provider, {
						value: !1
					}, m.a.createElement(wp.a, {
						forceRedditTheme: P || k,
						isCommentsPage: N
					}, m.a.createElement(ag, null, l && m.a.createElement(Zh, null, A), !l && A, m.a.createElement(Jh.b, null), m.a.createElement(Jh.a, null)))))), m.a.createElement(Bn.a.Provider, {
						value: t
					}, E && m.a.createElement(tg.a.Provider, {
						value: !0
					}, m.a.createElement(wp.a, {
						isOverlay: !0
					}, m.a.createElement(Ng, {
						browserInfo: y,
						isPostCollection: w,
						location: b,
						onClickOutsideOverlay: h,
						page: t,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: r,
						showOffline: I,
						showSuspended: p
					}))), m.a.createElement(wp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(lh, null), m.a.createElement(Np.a, null), f && m.a.createElement(He.a, null), m.a.createElement(Fn, null), m.a.createElement(oo, null), c && m.a.createElement(dp, null)))))
				}
			}
			Sg.contextType = Re.a;
			const Pg = Object(Ke.c)(e => {
					const t = Object(Bn.eb)(),
						n = Object(ng.db)(t),
						s = Object(u.useContext)(Ae.a),
						o = Object(u.useMemo)(() => Object(ig.a)(e.location.search), [e.location.search]),
						{
							browserInfo: r,
							connection: a,
							isFPR: i,
							isInline: c,
							showOffline: l,
							isSuspended: d,
							suspensionDaysLeft: p
						} = e,
						b = {
							browserInfo: r,
							showFPR: i,
							showSuspended: d,
							suspensionDaysLeft: p,
							showOffline: l,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(_h, b), n && !o && m.a.createElement(cp, {
						className: Object(Se.a)(vg.a.header, jh(vg.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(wh, {
						className: Object(Se.a)(vg.a.offlineBanner, jh(vg.a, b)),
						online: a.online,
						showBanner: a.showBanner
					}))
				}),
				kg = Object(Ke.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = we()(e, "key"),
							s = we()(t, "key");
						return ke()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = we()(e, ["key", "locationState"]),
								s = we()(t, ["key", "locationState"]);
							return ke()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isInline: o,
							isSubscriptionsPinned: r,
							showEmailCollectionBanner: a
						} = this.props;
						return m.a.createElement(Cg, {
							"aria-hidden": s,
							className: Object(Se.a)(jh(vg.a, this.props), {
								[vg.a.withUpsell]: !!e,
								[vg.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: r,
							location: t
						}, r && m.a.createElement(kp, {
							className: Object(Se.a)(vg.a.pinnedSubscriptions, {
								...jh(vg.a, this.props),
								[vg.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(Ee.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(Se.a)(vg.a.bottomSpacer, Sh(vg.a, this.props))
						}))
					}
				});
			class Ng extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Ge.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[$h.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = cg.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(De.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && cg.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === S.Sb.SUBREDDIT_CREATION || t.meta.name === S.Sb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(yg, {
						className: Object(Se.a)(jh(vg.a, this.props), {
							[vg.a.mIsCommentsLightbox]: o,
							[vg.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(Se.a)(vg.a.overlayWrapper, jh(vg.a, this.props))
					}, m.a.createElement("div", {
						className: Object(Se.a)(vg.a.overlayScrollContainer, {
							[vg.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Yh.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(Eg, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(Se.a)(jh(vg.a, this.props), {
							[vg.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(lp.a, {
						page: t
					})), m.a.createElement(Ee.f, null, n), m.a.createElement("div", {
						className: Object(Se.a)(vg.a.bottomSpacer, Sh(vg.a, this.props))
					}))))
				}
			}
			var wg = _g(Object(Ke.c)(Sg)),
				Mg = n("./src/reddit/contexts/User/index.tsx");

			function Ig(e) {
				return m.a.createElement(Mg.b, null, e.children)
			}
			var Ag = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Tg = n("./src/reddit/constants/shortcuts.ts"),
				Rg = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Lg = n.n(Rg);
			var Dg = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: Lg.a.shortcutDiv,
					id: Tg.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let Fg = [];
			const Gg = "https://w3-reporting.reddit.com/policy";
			let Ug = 1;
			const Bg = !1;
			const Hg = Bg ? Promise.resolve() : async function() {
				if (Bg) return;
				const e = await fetch(Gg, {
						method: "HEAD"
					}),
					t = e.headers.get("report-to"),
					n = e.headers.get("x-reddit-w3reporting");
				if (t) try {
					const e = JSON.parse(`[${t}]`).find(e => {
						let {
							group: t
						} = e;
						return "w3-reporting" === t
					}).endpoints.map(e => e.url);
					e.length > 0 && (Fg = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (Ug = e)
				} catch {}
			}();

			function qg(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				Bg ? console.error("w3-reporting is client-side only") : Wg.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let Wg = [];
			async function Vg(e) {
				if (0 === e.length || 0 === Fg.length) return;
				if (Math.random() > Ug) return;
				await Hg;
				const t = e.map(Kg).filter(e => e.age < 3e5);
				try {
					const e = await fetch(Qg(), {
						method: "POST",
						body: JSON.stringify(t),
						mode: "no-cors"
					});
					await e.text()
				} catch (n) {
					console.error(null == n ? void 0 : n.stack)
				}
			}
			setInterval(() => {
				Vg([...Wg]), Wg = []
			}, 5e3), Bg || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (Vg([...Wg]), Wg = [])
			});
			let zg = -1;
			const Qg = () => (zg = (zg + 1) % Fg.length, Fg[zg]);

			function Kg(e) {
				const {
					name: t,
					value: n,
					type: s,
					labels: o,
					createdAt: r
				} = e;
				return {
					age: Date.now() - r,
					type: "reddit-w3reporting",
					url: "",
					user_agent: navigator.userAgent,
					body: {
						sampling_fraction: 1,
						type: s,
						name: t,
						value: n,
						labels: null != o ? o : {}
					}
				}
			}

			function Zg() {
				const e = Object(ye.e)(e => {
					const t = Object(wn.b)(e);
					return t && Object(gn.v)(t) || "unknown"
				});
				return Object(u.useEffect)(() => {
					(async () => {
						const {
							onCLS: t,
							onFID: s,
							onINP: o,
							onLCP: r,
							onTTFB: a
						} = await n.e("webvitals").then(n.bind(null, "./node_modules/web-vitals/dist/web-vitals.js"));
						t(t => {
							qg("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							qg("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), o(t => {
							qg("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), r(t => {
							qg("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							qg("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var Jg = n("./src/reddit/components/Header/Sparse.tsx"),
				Xg = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Yg = n("./src/reddit/pages/InternalServerError/index.m.less"),
				$g = n.n(Yg);
			const {
				fbt: ef
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tf = Object(ne.c)({
				showError: An.d.showVerboseErrors
			}), nf = Object(ye.b)(tf)(e => {
				const t = Object(u.useContext)(Ae.a);
				return m.a.createElement(tg.a.Provider, {
					value: !1
				}, m.a.createElement(wp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Jg.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: $g.a.container
				}, m.a.createElement("div", {
					className: $g.a.mainContent
				}, m.a.createElement(Xg.a, {
					className: $g.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: $g.a.title
				}, ef._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: $g.a.subTitle
				}, ef._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(ln.l, {
					onClick: () => window.location.reload(!0)
				}, ef._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: $g.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(Se.a)($g.a.topImageContainer, {
						[$g.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: $g.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: $g.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: $g.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function sf() {
				return (sf = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const of = Object(ne.c)({
				isNavbarLikeMwebEnabled: Kl.a,
				isNightmode: v.eb,
				theme: e => e.themes.current
			}), rf = Object(ye.b)( of , {})(e => {
				let {
					children: t,
					theme: n,
					isNightmode: s,
					isNavbarLikeMwebEnabled: o
				} = e;
				const r = Object(Ye.a)({
					theme: n
				});
				return Object(u.useEffect)(() => {
					s ? (document.documentElement.classList.remove("theme-light"), document.documentElement.classList.add("theme-dark")) : (document.documentElement.classList.remove("theme-dark"), document.documentElement.classList.add("theme-light"))
				}, [s]), m.a.createElement(Ae.a.Provider, {
					value: o
				}, m.a.createElement("div", {
					className: Object(Se.a)(_e.a.container, {
						[_e.a.containerExp]: o
					}, "theme-beta"),
					style: {
						"--background": r.body,
						"--canvas": r.canvas
					}
				}, t))
			});

			function af(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Ke.a, null, m.a.createElement(rf, null, m.a.createElement(Ig, null, m.a.createElement(je.a, null), m.a.createElement(Ag.a, null), m.a.createElement(Dg, null, m.a.createElement(t, null, m.a.createElement(Ee.d, {
						component: cf(n)
					}))), m.a.createElement(Zg, null))))
				}
				return m.a.createElement(nf, {
					error: e.error
				})
			}
			const cf = e => t => m.a.createElement(wg, sf({
					routes: e
				}, t)),
				lf = 1e3;
			class df extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Ie()(() => Object(Tn.Hb)(this.props.storageKey, this.props.value), lf)
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
			df.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const uf = Object(ne.a)(v.R, e => ({
				storageKey: Uo.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var mf = Object(ye.b)(uf)(df);
			var pf = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(mf, null)),
				bf = n("./src/reddit/constants/headers.ts"),
				hf = n("./src/reddit/constants/jsapiEvents.ts"),
				gf = n("./src/reddit/constants/screenWidths.ts"),
				ff = n("./src/reddit/contexts/AdminEvents.ts"),
				vf = n("./src/reddit/contexts/ApiContext.tsx"),
				Of = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Cf = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const yf = () => e => t => e(t);
			var Ef = n("./src/lib/safeBadgeUpdate.ts");

			function xf(e) {
				const t = Object(bm.g)(e);
				Object(Ef.a)(t)
			}
			var _f = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== Cf.b && n.type !== Cf.d || xf(e.getState()), s
				} : yf,
				jf = n("./node_modules/brcast/dist/brcast.es.js"),
				Sf = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var Pf = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(jf.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Sf.b)(s) || Object(v.O)(s) || Object(v.N)(s)) && (e = !0, Object(U.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(Sf.b)(a)) {
									const n = Object(v.O)(a) || Object(v.N)(a);
									e && !n ? (e = !1, Object(U.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(U.e)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(jf.a)([]),
					middleware: () => e => t => e(t)
				}),
				kf = n("./src/lib/domUtils/index.ts"),
				Nf = n("./src/reddit/actions/adsSignals.ts");
			const wf = 30 * S.pb;
			let Mf = Date.now();
			const If = () => {
					Mf = Date.now()
				},
				Af = !!Object(kf.f)() && {
					passive: !0
				};
			window.addEventListener("click", If, !1), window.addEventListener("wheel", Ih()(If, 250), Af), window.addEventListener("mousemove", Ih()(If, 250), Af), window.addEventListener("keydown", Ih()(If, 250), Af);
			var Tf = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Mf >= wf ? (e.dispatch(ge.h()), e.dispatch(Nf.b()), If()) : If()
					})), e => t => e(t)
				},
				Rf = n("./src/reddit/constants/preferences.ts"),
				Lf = n("./src/reddit/helpers/cookies/index.ts");
			const Df = new Set([cl.g, cl.i, ve.b, cl.d, cl.o, Ue.d, Ue.e, cl.r]);
			var Ff = e => t => n => {
					const s = t(n);
					if (Df.has(n.type)) {
						const t = e.getState().user,
							n = Ia()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Rf.b, Rf.d, Rf.e]);
						Object(Lf.a)({
							prefs: n
						})
					}
					return s
				},
				Gf = n("./src/reddit/actions/tabBadging.ts"),
				Uf = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Bf = n("./src/reddit/selectors/removedPosts.ts"),
				Hf = n("./src/reddit/models/Subreddit/index.ts");
			const qf = (e, t) => ((e, t) => {
					var n, s, o, r;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (r = null === (o = e.subreddits) || void 0 === o ? void 0 : o.models) || void 0 === r ? void 0 : r[a];
					return !!i && ((null == i ? void 0 : i.type) !== Hf.g.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(Bf.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				Wf = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Vf = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(wn.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Wf.has(o), a = Object(Bn.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = zf(e), l = s === S.Sb.COMMENTS || s === S.Sb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === S.Sb.SEARCH_RESULTS || s === S.Sb.SUBREDDIT_LEADERBOARD || l && d, m = Object(Bf.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: o
						} = e.platform;
						if (!Object(Bf.d)(e)) return !1;
						const r = null === (t = null == o ? void 0 : o.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = r && Object(Q.y)(r),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						return !!i && qf(e, i)
					})(e) || u;
					return i || r || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				zf = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.g)(e, s);
						n = !!Object(Uf.a)(t, !1, s)
					}
					return n
				};
			var Qf = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Kf = "theme-color",
				Zf = `meta[name="${Kf}"]`;

			function Jf(e) {
				return e ? Qf.b.body : Qf.a.body
			}
			var Xf = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				if (n.type === pe.f) {
					const t = e.getState(),
						s = Object(v.Q)(t),
						{
							meta: o
						} = n.payload;
					s ? ((e, t) => {
						const n = Object(bm.i)(e);
						Object(Gf.c)(n, t)
					})(t, o.title) : Le.a.write(() => {
						document.title = o.title, ((e, t) => {
							if (t.head) {
								let n = t.querySelector("meta[name='robots']");
								const s = Vf(e),
									{
										head: o
									} = t;
								s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
							}
						})(t, document)
					})
				} else if (n.type === cl.i) {
					! function(e) {
						Le.a.write(() => {
							const t = document.head.querySelector(Zf);
							if (t) {
								const n = Object(v.eb)(e);
								t.content = Jf(n)
							}
						})
					}(e.getState())
				}
				return s
			} : yf;

			function Yf(e) {
				return Object(K.e)(e) && function(e) {
					return Object.values(e.posts.models).some(t => void 0 === Object(Cm.a)(e, t.id))
				}(e)
			}
			const $f = (e => t => n => s => {
				const o = t.getState(),
					r = n(s),
					a = t.getState();
				for (const n of e) n.stateHasChanged(o, a) && n.handler(t, o);
				return r
			})([{
				stateHasChanged: function(e, t) {
					return e.posts.models !== t.posts.models
				},
				handler: function(e) {
					Yf(e.getState()) && e.dispatch(J)
				}
			}]);
			var ev = n("./src/reddit/helpers/survey/index.ts");
			var tv = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(ev.a).filter(t => t === e).length)(t.type) && Object(Tn.X)(ev.a[t.type]), e(t)) : yf;
			const nv = 5 * S.pb;
			var sv = e => {
					const t = Ie()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(ge.g())
					}, nv);
					let n, s;
					const o = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const o = new Date(n.expires),
								r = s + Math.floor(.8 * (o.getTime() - s));
							Date.now() > r && t && t()
						},
						r = e => {
							s = Date.now();
							const o = new Date(e.expires).getTime() - s,
								r = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * o));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== ge.a && t.type !== ge.b && t.type !== ge.c && t.type !== ge.e || r(t.payload), t.type === ge.d && (clearTimeout(n), n = null), e(t))
				},
				ov = n("./src/reddit/singleton/tracing/index.ts");
			var rv = e => e => t => {
					const n = () => e(t);
					return ov.b.isEnabled ? ov.b.recordLocalSpan(t.type, n) : e(t)
				},
				av = n("./src/reddit/actions/frontpage/constants.ts"),
				iv = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				cv = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				lv = n("./src/reddit/actions/pages/profilePosts.ts"),
				dv = n("./src/reddit/actions/pages/search/index.ts"),
				uv = n("./src/reddit/actions/pages/subreddit.ts"),
				mv = n("./src/reddit/actions/tracking.ts"),
				pv = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				bv = n("./src/reddit/helpers/history/index.ts"),
				hv = n("./src/reddit/helpers/trackers/commentList.ts"),
				gv = n("./src/reddit/helpers/trackers/postList.ts"),
				fv = n("./src/reddit/helpers/routeKey/index.ts");
			var vv = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(mv.c({
							routeKey: t
						}))
					};
					if (n.type === pe.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(Io.I)(s, o) || "",
							i = (s.subreddits.about[r] || {}).advertiserCategory;
						a.trigger("pageview", {
							...Ia()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(fv.b)(c, s, Object(pv.a)(s));
							if (e && G.c.has(e)) {
								const t = G.c.end(e);
								!Object(wn.i)(s) && Object(bv.b)($h.b.IsOverlay) || Object(Ya.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(pv.a)(s, l),
							u = Object(fv.b)(l, s, d);
						if (!u) return t(n);
						G.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case av.c:
						case cv.b:
						case cv.e:
						case lv.PROFILE_POSTS_LOADED:
						case iv.e:
						case uv.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case dv.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case av.g:
						case Dr.i:
						case lv.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							gv.l(r, t);
							break
						}
						case iv.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							hv.a(r, t);
							break
						}
						case La.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				Ov = n("./src/reddit/helpers/datadome.ts"),
				Cv = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				yv = n("./src/reddit/helpers/trackers/global.ts");
			let Ev = null;
			const xv = () => {
				Ev && window.clearTimeout(Ev), Ev = null
			};
			var _v = e => {
					Ev = window.setTimeout(() => {
						xv(), Object(G.a)(Object(yv.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", xv)
				},
				jv = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Sv = n("./src/reddit/actions/connection/constants.ts");
			const Pv = Object(b.a)(Sv.b),
				kv = Object(b.a)(Sv.a),
				Nv = Object(b.a)(Sv.c);
			var wv = n("./src/reddit/actions/meta.ts");
			const Mv = (e, t) => Object(G.a)({
					...gn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(gn.d)(e, {
						type: t
					})
				}),
				Iv = "(display-mode: minimal-ui)";
			const Av = 3 * S.Xb;

			function Tv(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Iv).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(wv.i)());
				const t = window.matchMedia(Iv);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(wv.i)()) : e.dispatch(Object(wv.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						xf(t)
					}, 1e3), Mv(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Pv()), setTimeout(() => e.dispatch(Nv()), Av)
				}), window.addEventListener("offline", () => e.dispatch(kv()))
			}
			const Rv = (e, t) => {
				if (!e) return;
				const n = (d.a.get(In.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: In.g,
							value: s,
							cookieOptions: Object(wb.a)(),
							cookieContext: t
						};
					Object(ob.c)(o)
				}
			};
			var Lv = n("./src/reddit/layout/page/Listing/index.tsx"),
				Dv = n("./src/reddit/reducers/index.ts");
			var Fv = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				Gv = n("./src/reddit/selectors/experiments/utils.ts");
			const Uv = e => !!Object(Gv.a)((e => Object(ri.c)(e, {
					experimentEligibilitySelector: qm.f,
					experimentName: Un.Lc
				}))(e)),
				Bv = {
					displayDelay: 15,
					displayOnRoutes: [S.Sb.SUBREDDIT, S.Sb.COMMENTS],
					experimentName: Un.ie,
					experimentVariant: Un.me.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Hv = e => {
					const {
						base_url: t
					} = Object(gn.bb)(e), n = Object(wn.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...o && {
							s: o
						},
						...s && {
							p: s
						}
					}
				},
				qv = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Bv, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Bv)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Bv, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Bv, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(ri.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: ri.a
							}) === s
						})(Bv, e)) return {
						displayDelay: Bv.displayDelay,
						externalVars: Hv(e)
					}
				};
			var Wv = n("./src/reddit/singleton/EventSystem.ts"),
				Vv = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				zv = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Qv = n("./src/reddit/reducers/features/categories/index.ts"),
				Kv = n("./src/lib/sentry/index.ts"),
				Zv = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Jv = Object(b.a)(Zv.C),
				Xv = () => {
					return Object(Tn.B)(Uo.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Yv = n("./src/reddit/actions/global/constants.ts");
			Object(oc.a)({
				features: {
					categories: Qv.a
				}
			});
			const $v = Object(b.a)(Yv.a),
				eO = e => async (t, n) => {
					t((() => async e => {
						const t = Xv();
						t && e(Jv(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || Kv.c.withScope(e => {
						Object(Kv.a)(e, {
							serverLogging: !1
						}), Kv.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t($v(o))
				}, tO = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, nO = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return tO.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(ee.openD2xOnboardingModal)())
				};
			var sO = n("./src/reddit/actions/notificationsInbox/index.ts"),
				oO = n("./src/reddit/actions/onboarding/index.ts"),
				rO = n("./src/reddit/constants/countrySites.ts"),
				aO = n("./src/reddit/selectors/countrySites.ts");
			const iO = rO.b ? `${rO.a}/${rO.b}` : `${rO.a}`,
				cO = (e, t) => {
					return !!Object(aO.e)(e) && !(t && !Object(aO.d)(t))
				},
				lO = e => e.startsWith("/r/") ? e.replace("/r/", `/${iO}/r/`) : e;
			var dO = n("./src/reddit/selectors/experiments/countrySites.ts");
			var uO = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const mO = Object(D.a)({
					actionDispatchers: {
						loidReceived: Ce.q,
						sessionTrackerReceived: Ce.x
					},
					authHeaders: {
						[bf.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: Ce.b,
						sessionTrackerReceived: Ce.j,
						userAuthenticated: ge.c,
						userLoggedOut: ge.d,
						userReauthenticated: ge.e,
						headersReceived: q.a
					},
					onBeforeRequestFactory: jv.a,
					statsAppName: S.o.Redesign
				}),
				pO = Object(F.a)(mO.apiContext),
				bO = Object(F.a)(mO.apiContext, i.a.gqlRealtimeUrl),
				hO = Object(F.a)(mO.apiContext, i.a.gqlRealtime2Url),
				gO = Pf();
			let fO;
			Object(w.a)({
				reducerMap: Dv.a,
				routes: pm,
				apiContext: mO.apiContext,
				gqlContext: pO.gqlContext,
				gqlRealtime2Context: hO.gqlContext,
				appFactory: (e, t) => m.a.createElement(ff.a.Provider, {
					value: gO.broadcaster
				}, m.a.createElement(vf.a.Provider, {
					value: {
						apiContext: mO.apiContext,
						gqlContext: pO.gqlContext,
						gqlRealtime2Context: hO.gqlContext
					}
				}, m.a.createElement(Of.b, null, m.a.createElement(af, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(pf, null)))),
				appName: S.o.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = fO;
						if (!n) return;
						n.dispatch(Object(pe.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(pe.k)())
							}
						}))
					}
				}),
				customMiddleware: [x.a.withExtraArgument({
					routes: pm,
					apiContext: mO.apiContext,
					gqlContext: pO.gqlContext,
					gqlRealtimeContext: bO.gqlContext,
					gqlRealtime2Context: hO.gqlContext
				}), gO.middleware, Tf, mO.middleware, pO.middleware, hO.middleware, sv, Ff, $f, rv, vv, Xf, tv, Ad.a, _f, e => t => n => {
					let s, o;
					if (!Object(dO.b)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!cO(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(aO.d)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${iO}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!cO(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(aO.d)(e);
								(n || t) && (o.permalink = lO(o.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, o))
					} catch (a) {
						n.payload = {
							...r
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(dO.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!cO(e, t.name)) return t;
							const n = Object(aO.d)(t.id);
							if (t.name || n) {
								const e = lO(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!cO(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(aO.d)(s.id),
									o = Object(aO.d)(s.name);
								if (e || o) {
									const e = lO(s.url),
										o = {
											...s,
											url: e
										};
									t[n] = o
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (o) {
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
					loading: m.a.createElement(Lv.a, {
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
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(ie.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Tv(s);
					const r = s.getState();
					s.dispatch(Object(q.b)({
							headers: {
								[o.a]: "1"
							}
						})), Object(U.d)("enabled" === Object(ri.c)(s.getState(), {
							experimentEligibilitySelector: ri.a,
							experimentName: Un.fg,
							expEventOverride: !1
						})), Object(U.c)("enabled" === Object(ri.c)(s.getState(), {
							experimentEligibilitySelector: ri.a,
							experimentName: Un.hg
						})), Object(U.g)("enabled" === Object(ri.c)(s.getState(), {
							experimentEligibilitySelector: ri.a,
							experimentName: Un.gg
						})), Object(U.f)(pO.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(yv.a)("tab_closed")(e),
								n = B.g(t),
								o = Object(Vv.a)(n),
								r = Object(zv.b)(o);
							Object(L.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(ig.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(pe.h)());
					const a = Object(v.eb)(s.getState());
					s.dispatch(Object(ve.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(ri.c)(e, {
							experimentEligibilitySelector: ri.a,
							experimentName: Un.L
						}) === Un.W.Enabled)(s.getState())) {
						ov.b.enableTracing(!0);
						const e = ov.b.createTraceFromId(l);
						ov.b.setParent(e)
					}
					s.dispatch(Object(pe.i)(n));
					t.listen((e, t) => {
						const o = Object(I.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(pe.j)(e, t, o))
					});
					const {
						currentPage: d
					} = r.platform;
					if (d) {
						const e = [Qa.j];
						if (Object(wn.j)(r) && e.push(Qa.e), e.length > 0) {
							const t = Object(k.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Hn.a.initialize(r), {
						localStorageData: Object(Tn.C)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: o,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					fO = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: o
							} = n.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: o
							},
							a = s.subredditName,
							i = Object(Io.I)(n, a) || "";
						if (Rv(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(O(i, a));
							const e = Object(wn.e)(n);
							e && l.dispatch(C(e))
						}
						Wv.a.publish(hf.c, r, document)
					});
					const p = l.getState(),
						b = Object(Ad.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(E(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(Io.I)(p, h) || "";
					if (h) {
						l.dispatch(O(g, h));
						const e = Object(wn.e)(p);
						e && l.dispatch(C(e))
					}
					const f = Object(Io.I)(p, h) || "",
						x = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: x
					}), l.dispatch(eO({
						localStorageData: d
					}));
					const w = Object(bg.c)(p);
					w && (l.dispatch(ue()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.F]))), l.dispatch(nO());
					const I = Object(wn.q)(p),
						D = null == I ? void 0 : I[Qa.v];
					D && (history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.v])), w || l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), Tn.P() && Object(v.R)(p) && l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/recapGame.ts")).then(e => e.recapGameToggle))()), (null == I ? void 0 : I[Qa.D]) && (l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.D]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(Io.I)(e, a) || "";
						if (Object(L.a)(), Rv(i, {
								country: e.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(G.b)(S.o.Redesign, {
									page: a,
									type: "rum"
								}), Object(N.c)(e.meta.userAgent) && window.innerWidth > gf.b) {
								const t = Object(r.f)(c);
								A.a && A.a.timing && ov.b.isEnabled && (ov.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), ov.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(Ov.a)()],
									s = !0;
								if (Object(wn.g)(e)) {
									const t = Object(Cv.a)(e);
									n.push(Object(Cv.c)(t))
								}
								const o = {
									isLoggedIn: Object(v.R)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(Ya.k)(o.routeMatch, l.getState(), H.TimerType.Initial, i, o.urlParams);
							const d = Object(P.a)(window.location.href);
							d && d.get(Qa.b) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.b])), Object(R.a)(d.get(Qa.Q)) && l.dispatch(Object(Oe.f)({
								kind: Gp.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(Qa.R) && (l.dispatch(Object($.a)(d.get(Qa.R))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.R])));
							let u = !1;
							const m = Object(v.U)(e);
							(Object(bv.b)($h.b.JustLoggedIn) || m) && (l.dispatch(Object(Oe.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(bv.c)($h.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Qa.u]))), Object(bv.b)($h.b.JustLoggedOut) && (u = !0, Object(bv.c)($h.b.JustLoggedOut)), le().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(oO.openReonboardingModalIfNeeded)());
							let b;
							re(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ae())), e(ae())
							});
							const h = Uv(e);
							if (!D)
								if (h || !1 === Tn.Y()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											le().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(Fv.a)(e) ? Object(v.R)(e) ? (n(), p()) : b && b() : n(t)
								} if (a === S.Sb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(Y.c)())
						}
						Object(v.R)(l.getState()) && !Object(ig.a)(window.location.search) && l.dispatch(Object(W.d)()), Object(_.requestIdleCallback)(async () => {
							l.dispatch(Object(de.d)()), await Object(j.a)() && Object(yv.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = qv(e);
								t && (await (async e => {
									return (await Object(ce.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
							if ("visible" !== document.visibilityState && (Tn.cc(Date.now()), Object(G.a)(Object(yv.a)("tab_backgrounded")(t))), (e => Object(ri.c)(e, {
									experimentEligibilitySelector: e => !Object(oe.d)(e),
									experimentName: Un.Xc
								}) === Un.md.Enabled)(t) && "visible" === document.visibilityState && n && Object(Ya.k)(n.routeMatch, l.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Tn.w(),
									t = Tn.x(),
									n = Tn.I(),
									s = Tn.W();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(G.a)(Object(yv.e)("tab_backgrounded", n)(l.getState(), o, e, t))
								}(s || e || n || t) && (Tn.gb(), Tn.kb(), Tn.ib(), Tn.hb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && uO.d[n.locationState.clickId] && !uO.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(uO.b)(n.locationState.clickId) : Object(uO.c)(n.locationState.clickId))
						}), Object(oe.h)(l.getState()) && _v(l.getState), l.dispatch(Object(fe.o)())
					}), window.history.scrollRestoration = "manual", Wv.a.attachStore(l), l.dispatch(Object(he.b)(T.a.PageLoad));
					const F = Tn.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						U = Tn.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(be.B)({
						posts: null != F ? F : []
					})), l.dispatch(Object(X.m)({
						comments: null != U ? U : []
					})), l.dispatch(J), Object(Hm.e)(l.getState()) && l.dispatch(Object(sO.e)()), Object(_.requestIdleCallback)(() => {
						const e = Tn.D();
						(!e || e && Date.now() - e.lastUpdated >= S.E) && l.dispatch(Object(fe.f)())
					})
				},
				raven: {
					tags: {
						project: S.o.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
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

			function o(e) {
				return "object" != typeof e[0]
			}
			var r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(r || (r = {}))
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
		"./src/reddit/models/HappeningNow/Filter/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.All = "all", e.Chat = "chat", e.Talk = "talk"
				}(s || (s = {}))
		},
		"./src/reddit/models/LoggedOutOneFeed/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(o || (o = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(r || (r = {}))
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
		"./src/reddit/models/Survey/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CES = "CES", e.CSAT = "CSAT", e.NPS = "NPS", e.MULTI_CHOICE = "multi_choice"
				}(s || (s = {}))
		},
		"./src/reddit/pages/CommunityHubs/CommunityHubIcon.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3yXgOVql6GKfKL-p1JMEjT"
			}
		},
		"./src/reddit/pages/CommunityHubs/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/config.ts");
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js"), r = `${s.a.assetPath}/img/community-hubs/`, a = "https://forms.gle/yaTi9Ppnjwt3tNhk6", i = "https://forms.gle/4tkRUUsxa7CmWCin7"
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
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/helpers/trackers/inbox.ts"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/config.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
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
			const h = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var g = e => {
				let {
					inTooltip: t,
					onBtnClick: n
				} = e;
				const s = `/${h}`,
					r = {
						to: s,
						kind: d.b.InternalLink
					},
					a = o.a.createElement(u.default, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: n
					}, h);
				return o.a.createElement("div", {
					className: Object(c.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !t
					})
				}, o.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(p.a.avatarImage, {
						[p.a.inTooltip]: t
					})
				}), o.a.createElement("h1", {
					className: Object(c.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: t
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), o.a.createElement("p", {
					className: p.a.emptyDescription
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", a)], {
					hk: "1WOK4T"
				})), o.a.createElement(d.t, b({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${h}`
				}, r)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(a.a)();
				return o.a.createElement(g, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(r.s)({
						actionInfoType: e
					})))(r.a.Karma)
				})
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less": function(e, t, n) {
			e.exports = {
				emptyState: "_3B_EfQMwEiEzc_9vEdVplz",
				emptyStateLoggedOutContainer: "_3AcDG0KjCxs3H1UW_4ajNf",
				emptyStateDivider: "bfJNAfRJ7wvCVMJIHbVa-",
				karmaView: "_3eBLRjkIDT-8Hobfrj_UTz",
				inNotificationsPage: "_2upiES-f8azWSz_UdoeHE7",
				avatarImage: "mGm_bo7f-d7T6Ax_UEs_l",
				inTooltip: "JBKRJW6IC_gf5qQ_mqb4A",
				catsImageWrapper: "odMqhFpc4xkpus4jHz_9f",
				cat: "_13uS-SsNmI2cGGsq2rpP8O",
				top: "_29krHC0w9xxlGw1mBpwNHU",
				bottom: "_3VkvX9EbwQAVQJ3qEl_wzw",
				cloud: "_3yAL94u5AxUY-JhhHIPNuU",
				yummy: "_2TY8uYFieKTHl7jN_vmcYR",
				memesImageWrapper: "jaQ0krPJ6FkjLU-VDMGNq",
				shrek: "_1f1-1KlOtH3uQKPHzkGdDI",
				star: "_2mEU_pG_y9L4CaC7zihby0",
				inBottom: "_1kfecAwlZWu6be_WDfvh-P",
				inCenter: "_4DkJv1On5ORUXrwzznhqE",
				inTop: "_1lJAHwdJYzqn-69JkG-HJQ",
				emptyStateButton: "_1_kVxSQ5_eQNTfI-Y89mu4",
				loggedOutState: "_3uw_OsQCi8zOpS3fha4JEF",
				emptyStateWithBanner: "_1L4nSUqK39ZB-E1-MXtBve",
				emptyTitle: "_36brOzjH6sE_rgnTt-hcL1",
				emptyDescription: "Ae79bDDbZ2U_G-wqwA71z",
				subredditLinkR: "_9DV1fqkU31oi8pfSQxzjw",
				BellOutline: "_23NDu_VaLgaSWVzKHs-Gfa",
				bellOutline: "_23NDu_VaLgaSWVzKHs-Gfa"
			}
		},
		"./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PvH4m9c5gT9_kN2ABo2zG",
				psBattlesIcon: "_3o_sZYSm7bb0JtNcA6cbSw"
			}
		},
		"./src/reddit/pages/Recap/Components/ProfileTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3HKRSAwS9i6sPFy_PnFYbq",
				ellipse: "_29MLLq7ah_A8hAZONN92nZ",
				tooltip: "qgq6apF3Q1IVP6YcNXwQ0",
				text: "_1IySXkAos87q5NpWwZYnNS",
				icon: "_3opWLE5frEyH256cksiLdO"
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const l = {
					marketingEvent: {
						active: !1,
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				d = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function b(e) {
				if (!e) return l;
				const t = l;
				return e.forEach(e => {
					var n;
					const {
						startsAt: s,
						endsAt: o,
						webAssetUrls: r,
						tags: a
					} = e, i = s && new Date(s) <= new Date, c = !!o && new Date(o) < new Date, l = !!i && !c, b = (a || []).includes(m);
					if (a && a.includes(d) && !b) {
						const {
							text: n,
							id: s
						} = e, o = r || null, i = p(a);
						t && (t.quickCreateV1 = {
							...i,
							id: s,
							text: n,
							active: l && !!o,
							webAssetUrls: o
						})
					}
					if (a && a.includes(u) && !b) {
						const e = r || null,
							s = (null === (n = a.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: l && !!e,
							assetUrls: e,
							experimentRequired: s
						})
					}
				}), t
			}
			var h = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/constants/modals.ts");
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case h.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? b(s) : l;
					case g.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === f.a.SNOOVATAR_MODAL ? l : e;
					default:
						return e
				}
			};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: O
			})
		},
		"./src/reddit/reducers/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/happeningNow/constants.ts");
			const r = {
				error: null,
				loaded: !1,
				pending: !1
			};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.b:
						return {
							...e, pending: !0
						};
					case o.c:
						return {
							error: null, loaded: !0, pending: !1
						};
					case o.a:
						return {
							error: t.payload, loaded: !0, pending: !1
						};
					default:
						return e
				}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.d:
						return t.payload;
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const c = e => e.reduce((e, t) => ({
					...e,
					[t.postId]: t
				}), {}),
				l = (e, t) => [...new Set([...e, ...t])],
				d = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c: {
						const {
							popularLiveContent: n,
							recommendedLiveContent: s
						} = t.payload;
						return {
							...e,
							...c(n),
							...c(s)
						}
					}
					default:
						return e
				}
			};
			const m = [];
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c: {
						const {
							popularLiveContent: n
						} = t.payload, s = n.map(e => e.postId);
						return l(e, s)
					}
					default:
						return e
				}
			};
			const b = [];
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.c: {
							const {
								recommendedLiveContent: n
							} = t.payload, s = n.map(e => e.postId);
							return l(e, s)
						}
						default:
							return e
					}
				},
				g = n("./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts");
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.f:
						return t.payload;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: a,
				isLiveContentAvailable: i,
				models: u,
				popular: p,
				recommended: h,
				selectedFilter: g.b,
				showLiveContentAvailabilityTooltip: f
			})
		},
		"./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/happeningNow/constants.ts");
			const o = n("./src/reddit/models/HappeningNow/Filter/index.ts").a.All;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.e:
						return t.payload;
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/recapGame/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/recapGame.ts");
			const o = {
				recapGameState: "off",
				isNightModeOriginal: !1
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.RECAP__GAME_START:
						return {
							...e, recapGameState: "on"
						};
					case s.RECAP__GAME_TOGGLED:
						const n = "on" === e.recapGameState ? "off" : "on";
						return {
							...e, recapGameState: n
						};
					case s.RECAP__GAME_CLOSE:
						return {
							...e, recapGameState: "off"
						};
					case s.RECAP__SET_ORIGINAL_NIGHT_MODE:
						return {
							...e, isNightModeOriginal: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.a,
					chunk: o.u.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.a,
					chunk: o.u.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.APPEAL
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`, `${a}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: r.a,
					chunk: o.u.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("Avatar")]).then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
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
					}, {
						ssr: !1
					}),
					exact: !0,
					meta: {
						name: o.Sb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.c,
					chunk: o.u.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.b,
					chunk: o.u.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			l = Object(r.c)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.u.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Sb.COLLECTION_COMMENTS
					},
					prefetches: [o.u.FRONTPAGE, o.u.COMMENTS_PAGE, o.u.SUBREDDIT]
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
		"./src/reddit/routes/communityHubs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/communityHubs.ts");
			const a = "/hubs",
				i = {
					action: r.a,
					chunk: o.u.COMMUNITY_HUBS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityHubs",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityHubs").then(n.bind(null, "./src/reddit/pages/CommunityHubs/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/CommunityHubs/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Sb.COMMUNITY_HUBS
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: o.u.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(r.c)(c, !1),
					prefetches: [o.u.SUBREDDIT]
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: r.a,
					chunk: o.u.ECON_MANAGEMENT,
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
						name: o.Sb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement2.ts");
			const a = "/econ-management-2",
				i = {
					action: r.a,
					chunk: o.u.ECON_MANAGEMENT_2,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement2",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement2").then(n.bind(null, "./src/reddit/pages/EconManagement2/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement2/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Sb.ECON_MANAGEMENT_2
					},
					path: a
				};
			t.a = i
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: o.u.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.FOLLOWERS
					},
					path: a,
					prefetches: [o.u.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					action: r.a,
					chunk: o.u.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedModal/index.ts");
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
					action: r.a,
					chunk: o.u.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.bb).map(e => a.bb[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.u.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [a.u.COMMENTS_PAGE, a.u.SUBREDDIT]
				},
				h = {
					...b,
					path: u,
					meta: {
						name: a.Sb.INDEX
					},
					routePredicate: l.R
				},
				g = {
					...b,
					path: u,
					meta: {
						name: a.Sb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.R)(e) && !Object(c.c)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: a.Sb.INDEX
					},
					routePredicate: e => Object(c.c)(e)
				},
				v = {
					...b,
					path: m,
					meta: {
						name: a.Sb.LISTING
					},
					routePredicate: l.R
				},
				O = {
					...b,
					path: m,
					meta: {
						name: a.Sb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.R)(e) && !Object(c.c)(e)
				},
				C = {
					...b,
					path: m,
					meta: {
						name: a.Sb.LISTING
					},
					routePredicate: e => Object(c.c)(e)
				},
				y = [h, g, f, v, O, C];
			t.a = y
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/topic.ts"),
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
							gqlContext: o
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(r.fetchTopicPage)(o(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: o.u.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Sb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/happeningNow/index.ts");
			const a = "/now",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "HappeningNow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("HappeningNow")]).then(n.bind(null, "./src/reddit/pages/HappeningNow/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/HappeningNow/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: o.u.HAPPENING_NOW,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.HAPPENING_NOW
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
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
				l = Object.keys(a.X).map(e => a.X[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.u.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "/community-points",
				o = "/community-point",
				r = "/community-points/documentation(.*)"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/noGasPage.ts"),
				l = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/routes/meta/constants.ts");
			const g = {
					action: () => async (e, t) => {
						Object(b.R)(t()) || await e(Object(d.s)())
					},
					chunk: o.u.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
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
						name: o.Sb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration"]
				},
				f = {
					action: () => async (e, t) => {
						Object(b.R)(t()) || await e(Object(d.s)())
					},
					chunk: o.u.META_MAINNET_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-MainnetPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("reddit-pages-meta-MainnetPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/MainnetPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MainnetPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Sb.META_MAINNET_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/mainnet"]
				},
				v = {
					action: i.a,
					chunk: o.u.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: o.Sb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [h.b, h.c, h.a, "/vault", "/web/community-points"]
				},
				O = {
					action: l.a,
					chunk: o.u.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: o.Sb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				C = {
					action: c.a,
					chunk: o.u.META_NO_GAS_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "NoGasPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("NoGasPage").then(n.bind(null, "./src/reddit/pages/meta/NoGasPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/NoGasPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Sb.META_NO_GAS_PAGE,
						isResponsive: !0
					},
					path: ["/web/vault/no-gas"]
				},
				y = e => async (t, n) => {
					const s = Object(p.a)(e.queryParams);
					Object(b.R)(n()) || await t(Object(d.s)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, E = {
					action: y,
					chunk: o.u.EMPTY,
					exact: !0,
					meta: {
						name: o.Sb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, O, C, E]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				l = Object.keys(a.wb).map(e => a.wb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.u.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				d = Object.keys(a.bb).map(e => `${l}/:sort(${a.bb[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.bb).map(e => `${u}/:sort(${a.bb[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.u.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.u.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: o.u.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.NOTIFICATIONS_INBOX
					},
					path: ["/notifications", a],
					prefetches: [o.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.u.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.POST_DRAFT
					},
					path: a,
					prefetches: [o.u.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/set/:partialPostSetId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostSetPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("PostSetPage")]).then(n.bind(null, "./src/reddit/pages/PostSetPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostSetPage/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: o.u.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.POST_SET
					},
					path: a,
					prefetches: [o.u.POST_SET_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: r.a,
					chunk: o.u.PREDICTIONS,
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
						name: o.Sb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.u.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: o.u.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.u.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/submitted",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.u.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.u.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Sb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.u.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.u.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.u.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Sb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.u.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/recap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/recap/index.ts"),
				a = n("./src/reddit/selectors/experiments/recap.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = "/RedditRecap2022",
				l = "https://i.redd.it/8yb4biw7bf481.png",
				d = {
					action: r.a,
					chunk: o.u.RECAP,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Recap",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Recap").then(n.bind(null, "./src/reddit/pages/Recap/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Recap/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Sb.RECAP
					},
					path: c,
					routePredicate: e => Object(i.R)(e) && Object(a.a)(e)
				};
			t.b = d
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: o.u.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.u.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.u.FRONTPAGE, o.u.SUBREDDIT, o.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.jc).map(e => a.jc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					chunk: a.u.SETTINGS,
					exact: !0,
					meta: {
						name: a.Sb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(r.a)({
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
					chunk: a.u.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Sb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: o.u.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Sb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
			d = Object(a.c)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName+", "/w/:wikiPageName+", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.u.EMPTY,
					exact: !0,
					meta: {
						name: r.Sb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.u.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Sb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.u.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: r.a,
					chunk: o.u.TALK,
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
						name: o.Sb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.u.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Sb.TOPIC
					},
					prefetches: [o.u.COMMENTS_PAGE, o.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				u = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: l.fe
			}), e => e === l.je.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/lib/getParsedUserAgent/index.ts");
			const v = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(f.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.Mf
			}), e => e === l.Zf.Enabled);
			var O = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/responsiveSettings.ts"),
				y = n("./src/reddit/selectors/accountManager/modalData.ts");
			const E = Object(a.c)({
					frontpageSignupVariant: u.a,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.Qf
					}),
					blockingInterstitialVariant: h.e,
					blockingInterstitialV2Variant: h.f
				}),
				x = Object(a.c)({
					isAmModalDesignUpdateEnabled: d.a,
					isBlockingInterstitialEnabled: h.b,
					isBlockingInterstitialV2Enabled: h.c,
					isGoogleSsoGisEnabled: b,
					isSafariOneTapEnabled: v
				}),
				_ = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(y.c)(e), y.a, C.a, O.j, E, x, (e, t, n, a, d, u, m, p) => {
					const {
						blockingInterstitialVariant: b,
						blockingInterstitialV2Variant: h,
						frontpageSignupVariant: g,
						ssoLoginLinkVariant: f,
						magicLinkVariant: v
					} = m, {
						isAmModalDesignUpdateEnabled: O,
						isBlockingInterstitialEnabled: C,
						isBlockingInterstitialV2Enabled: y,
						isGoogleSsoGisEnabled: E,
						isSafariOneTapEnabled: x
					} = p;
					let _ = `${r.a.accountManagerOrigin}${e}`;
					if (_ = Object(i.a)(_, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (_ = Object(i.a)(_, {
							[`experiment_${l.Qf}`]: f
						})), E && (_ = Object(i.a)(_, {
							[`experiment_${l.fe}`]: "enabled"
						})), _ = Object(i.a)(_, {
							thing_id: n
						}), _ = Object(i.a)(_, {
							experiment_d2x_onboarding: "enabled"
						}), x && (_ = Object(i.a)(_, {
							[`experiment_${l.Mf}`]: "enabled"
						})), C && (_ = Object(i.a)(_, {
							[`experiment_${l.Rb}`]: b
						})), y && (_ = Object(i.a)(_, {
							[`experiment_${l.Sb}`]: h
						})), O && (_ = Object(i.a)(_, {
							[`experiment_${l.Ab}`]: "enabled"
						})), g && (_ = Object(i.a)(_, {
							[l.nd]: g,
							uiMode: t
						})), v && (_ = Object(i.a)(_, {
							[`experiment_${l.Ee}`]: v
						})), d && (_ = Object(i.a)(_, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== o.DEFAULT_LOCALE && e && (_ = Object(i.a)(_, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? _ : _ = Object(i.a)(_, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = e => e.accountManagerModalData.actionSource,
				o = e => e.accountManagerModalData.redirectUrl,
				r = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = (e, t) => {
					let {
						post: n
					} = t;
					const s = n.belongsTo.id;
					if (!s) return null;
					const o = e.authorFlair.models[s];
					if (!o) return null;
					const r = n.author;
					return r && o[r] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[s] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				i = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				i = e => {
					var t, n, s, o;
					const a = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (o = null == a ? void 0 : a.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(r.a)(a.experimentRequired)(e) ? i : null
				}
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: s
					} = t;
					const o = Object(a.Bb)(e, {
						userName: s
					});
					if (!o) return;
					const r = i(e, {
						subredditId: n
					});
					return r ? r[o.id] : void 0
				},
				l = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.features.banned.userOrder[n];
					return s ? s.map(t => e.features.banned.models[n][t]) : o.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(r.e)(n);
					return e.features.banned.api.pending[s]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
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
				o = n("./src/reddit/models/EconManagement/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: o.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case r.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Loading
						};
					case r.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Error
						};
					case r.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: o.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case r.a: {
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
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const o = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return o && o.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === o ? void 0 : o.actions) || []
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				l = e => i.find(t => !!Object(a.a)(c(e, t))),
				d = Object(s.a)(l, e => !!e),
				u = e => {
					const t = l(e);
					return !!t && c(e, t) === o.db.SkipOnboarding
				},
				m = e => {
					const t = l(e);
					return !!t && c(e, t) === o.db.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/d2xTopNavRevamp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(o.c)(e, {
				experimentEligibilitySelector: r.R,
				experimentName: s.Wc
			})
		},
		"./src/reddit/selectors/experiments/delayDnPermission.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => s.Zc.DnNoModal === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Cb
			})
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.ab, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(r.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.nd,
					throttledVariants: {
						[o.de.CurrentThrottled]: o.nd
					}
				}), i.a),
				m = e => e === o.de.CurrentThrottled,
				p = e => e === o.de.CurrentThrottled || e === o.de.CurrentUnthrottled || e === o.de.CurrentUnthrottledCopy || e === o.de.NewPopUnthrottledCopy,
				b = e => e === o.de.NewPopUnthrottledCopy,
				h = e => e === o.de.NewPageUnthrottledCopy || e === o.de.NewPageUnthrottledCopyFields,
				g = e => e === o.de.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const a = Object(r.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Fb
			}), e => e === s.ad.Enabled || e === s.ad.EnabledWithNux)
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.we,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === o.ze.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ic,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === o.jd.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ub,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === o.xe.ContinuousScroll),
				b = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Vb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === o.ye.Enabled),
				g = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.gc,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === o.pb.Enabled)
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === o.fb.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === o.gb.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ac,
					experimentEligibilitySelector: a.e
				}), e => e === o.hb.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.bc,
					experimentEligibilitySelector: a.e
				}), e => e === o.ib.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.dc,
					experimentEligibilitySelector: a.e
				}), e => e === o.kb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.cc,
					experimentEligibilitySelector: a.e
				}), e => e === o.jb.Enabled)
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.nf
					}) === s.Vd
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.mf
					}) === s.Vd
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.bf
					}) === s.Vd
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.af
					}) === s.Vd
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.r
					});
					return t === s.v.VoteCountOnly || t === s.v.CommentCountOnly || t === s.v.VoteAndCommentCount
				},
				d = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.r
					});
					return t === s.v.VoteCountOnly || t === s.v.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.r
					});
					return t === s.v.CommentCountOnly || t === s.v.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(i.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(a.a)(e)) return !1;
					const l = Object(r.d)(e, {
							experimentName: s.r
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.v.VoteCountOnly || d === s.v.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(i.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(a.a)(e)) return !1;
					const l = Object(r.d)(e, {
							experimentName: s.r
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.v.CommentCountOnly || d === s.v.VoteAndCommentCount
				},
				h = e => {
					if (Object(a.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Gc
					}) === s.id.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.lf
				}) === s.Vd
			}
		},
		"./src/reddit/selectors/experiments/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Jc
			}) === s.Vd
		},
		"./src/reddit/selectors/experiments/recapLeadUpGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.zf
				}) === s.Vd
			}
		},
		"./src/reddit/selectors/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				a = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				i = n("./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts"),
				c = n("./src/redditGQL/types.ts");
			Object(o.a)({
				features: {
					happeningNow: a.a
				}
			});
			const l = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.isLiveContentAvailable)
				},
				d = Object(s.a)(l, e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.showLiveContentAvailabilityTooltip)
				}, (e, t) => e && t),
				u = (e, t, n) => {
					switch (n) {
						case r.a.Chat:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.r.Chat
							});
						case r.a.Talk:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.r.Talk
							});
						case r.a.All:
						default:
							return t
					}
				},
				m = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.selectedFilter) && void 0 !== s ? s : i.a
				},
				p = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.happeningNow) || void 0 === s ? void 0 : s.models[t]
				},
				b = Object(s.a)(e => e, e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.popular) && void 0 !== s ? s : []
				}, m, u),
				h = Object(s.a)(e => e, e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.recommended) && void 0 !== s ? s : []
				}, m, u),
				g = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.api.loaded) && void 0 !== s && s
				}
		},
		"./src/reddit/selectors/features/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/matrixChat/index.ts");
			Object(s.a)({
				features: {
					matrixChat: o.c
				}
			});
			const r = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.url) || o.a.url
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.state) || o.a.state
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.notificationsCount
				},
				c = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.username
				}
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(r.a)({
				pages: {
					modHub: a.a
				}
			});
			const i = [],
				c = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.pages.modHub.muted.userOrder[n];
					return s ? s.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(o.e)(n);
					return !!e.pages.modHub.muted.api.pending[s]
				},
				d = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				p = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
				}
		},
		"./src/reddit/selectors/recapGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/recapGame/index.ts");
			Object(s.a)({
				features: {
					recapGame: o.b
				}
			});
			const r = e => {
				var t;
				return (null === (t = e.features) || void 0 === t ? void 0 : t.recapGame) || o.a
			}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
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
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx");
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
					return Object(r.B)(n)
				}, (e, t) => t && (e === o.Sb.COMMENTS || e === o.Sb.SUBREDDIT))
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
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Fb, e => !(!e || !e.length));
			const c = Object(s.a)(i.D, e => !e),
				l = Object(s.a)(i.Fb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.Fb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.g, o.p, o.r].includes(e))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.c)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = n("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
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
			e.exports = JSON.parse('{"id":"b282a5b92ecf"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/GetIsLiveContentAvailable.json": function(e) {
			e.exports = JSON.parse('{"id":"fd06b588e238"}')
		},
		"./src/redditGQL/operations/GiveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"385450867622"}')
		},
		"./src/redditGQL/operations/MatrixChatNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"2fe60a4b5c2a"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/PersonalizedYearInReview.json": function(e) {
			e.exports = JSON.parse('{"id":"6567e2a1ba2c"}')
		},
		"./src/redditGQL/operations/RemoveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"1011718c41db"}')
		},
		"./src/redditGQL/operations/SearchTypeahead.json": function(e) {
			e.exports = JSON.parse('{"id":"26f251bf8753"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/server/helpers/profileRedirect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				o = n("./src/server/helpers/canonicalUrl.tsx");
			const r = e => {
					let {
						path: t,
						profileName: n,
						rest: o,
						queryParams: r
					} = e;
					const i = t.includes("posts") ? `/user/${n}/submitted` : `/user/${n}`,
						c = a(`${i}/${o||""}`);
					return Object(s.a)(c, r)
				},
				a = e => Object(o.a)(e.replace("posts", "submitted")),
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return `/user/${e}/submitted${t?"/":""}`
				}
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e", "vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-LargePost~reddit-components-MediumPost", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit~SubredditForkingCTA", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.1ba09a408fbf57d01197.js.map