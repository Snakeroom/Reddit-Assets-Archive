// https://www.redditstatic.com/desktop2x/Reddit.667c76843446a3579fc2.js
// Retrieved at 10/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
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
				return Ee
			})), n.d(t, "w", (function() {
				return je
			})), n.d(t, "q", (function() {
				return _e
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
				return Fe
			})), n.d(t, "g", (function() {
				return De
			})), n.d(t, "h", (function() {
				return Ue
			})), n.d(t, "k", (function() {
				return Be
			})), n.d(t, "e", (function() {
				return He
			})), n.d(t, "d", (function() {
				return Qe
			})), n.d(t, "a", (function() {
				return ze
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
				f = n("./src/reddit/constants/adEvents.ts"),
				v = n("./src/reddit/constants/localStorage.ts"),
				O = n("./src/redditGQL/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
						n.rteState && (e = E.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...O,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, s) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === N.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = s), Object(C.a)(Object(x.a)(e, [j.a]), {
						method: o.ob.POST,
						endpoint: Object(_.a)(Object(w.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
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
				}, F = async (e, t, n, s, o) => {
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
			var D = n("./src/redditGQL/operations/UpdateComment.json");
			var U = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = n("./src/reddit/endpoints/post/index.tsx"),
				G = n("./src/reddit/endpoints/post/convert.ts"),
				H = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				q = n("./src/reddit/featureFlags/index.ts"),
				W = n("./src/reddit/helpers/comment/index.ts"),
				V = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = n("./src/reddit/helpers/dom/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				K = n("./src/reddit/helpers/sessionStorage/index.ts"),
				J = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Z = n("./src/reddit/models/Comment/index.ts"),
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
			}), e => e === re.Rd);
			var le = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = n("./src/reddit/selectors/platform.ts"),
				ue = n("./src/reddit/selectors/posts.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/actions/comment/index.ts"),
				be = n("./src/reddit/actions/comment/constants.ts");
			const he = Object(r.a)(be.m),
				ge = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(me.S)(o) && t) {
								const s = he({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(s))
							} else e(he({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				fe = Object(r.a)(be.L),
				ve = Object(r.a)(be.H),
				Oe = Object(r.a)(be.N),
				Ce = Object(r.a)(be.M),
				ye = Object(r.a)(be.K),
				xe = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await J.f(e, n, t, r)
				}, Ee = "Toxicity_Warning__Modal", je = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						a = Object(de.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (q.d.enableToxicityWarning(r)) {
						if (!(await R(o(), i, c, l))) return void t(Object(d.i)(Ee))
					}
					t(_e(e))
				}, _e = e => async (t, n) => {
					t(Object(d.g)(Ee));
					const s = n(),
						o = Object(le.a)(s),
						r = Object(le.c)(s);
					if (!s.user.account && o) {
						const n = Object(W.e)(e.formData, s.uploads),
							o = Object(W.c)(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.openRegisterModal)()), Object(K.d)({
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
			const Pe = (e, t, n, r) => {
					let {
						postId: a,
						commentsPageKey: c,
						draftKey: l,
						formData: d,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: v
					} = e;
					return async (e, O, C) => {
						let {
							apiContext: y,
							gqlContext: x
						} = C;
						var E;
						const j = O(),
							_ = Object(te.d)(j, {
								postId: a
							}) && Object(oe.h)(j),
							S = _ ? Object(W.a)() : l,
							P = Object(se.e)(j, {
								commentId: S
							}),
							k = Object(me.k)(j);
						if (!k) return;
						if (P && !_) return;
						t || e(fe({
							draftKey: S,
							draft: d,
							commentsPageKey: c,
							optimisticComment: _ ? Object(W.b)({
								temporalId: S,
								draft: d,
								post: Object(ue.G)(j, {
									postId: a
								}),
								author: k,
								subredditId: (null === (E = Object(de.e)(j)) || void 0 === E ? void 0 : E.id) || ""
							}) : void 0
						}));
						const w = k.displayText,
							M = d.commentMode;
						let I;
						const A = v ? "" : t && n ? n : Object(W.e)(d, j.uploads);
						if (v ? (I = await Object(H.i)(y(), a, d, w), e(Object(b.a)({
								streamId: a,
								level: I.body.automuteLevel
							}))) : I = Se(M, j) ? await F(x(), a, null, d, A) : await L(y(), a, d, A), I.ok) {
							let n;
							if (n = I.body, e(Oe({
									...n,
									headCommentId: Object(ne.w)(j, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: S,
									upload: Object(W.f)(A, j.uploads)
								})), t) {
								const e = Object(de.i)(j);
								Object(i.a)(!!e)
							}
							const s = Object(ue.G)(O(), {
								postId: a
							});
							e(Object(m.y)(s, f.a.CommentSubmitted))
						} else {
							if (I.error && I.error.type === o.Pb) {
								const e = t && r ? r : Object(W.c)(d);
								J.j(j, e, a)
							}
							const n = I.error && I.error.fields && I.error.fields[0] ? I.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ye({
								draftKey: S,
								error: I.error
							})), _ || e(Object(g.f)({
								duration: g.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						xe(O(), c, u, I).then(() => I.ok && u === N.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), p || Object(h.d)(), t && Object(K.a)()
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
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(de.e)(m);
					let b = "";
					if (p && (b = p.name), q.d.enableToxicityWarning(m)) {
						if (!(await R(o(), b, l, u))) return void t(Object(d.i)(Ee))
					}
					t(Ne({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, Ne = e => async (t, n) => {
					t(Object(d.g)(Ee));
					const s = n(),
						o = Object(le.a)(s),
						r = Object(le.c)(s);
					if (!s.user.account && o) {
						const n = Object(W.e)(e.formData, s.uploads),
							o = Object(W.c)(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(we(e, !1))
				}, we = (e, t, n, s) => async (r, a, c) => {
					let {
						apiContext: l,
						gqlContext: d
					} = c;
					var u;
					const {
						parentCommentId: m,
						commentsPageKey: p,
						parentCommentDepth: b,
						draftKey: g,
						formData: f,
						editorMode: v
					} = e, O = a(), C = Object(se.b)(O, {
						commentId: m
					}), y = C && Object(te.d)(O, {
						postId: C.postId
					}) && Object(oe.h)(O), x = y ? Object(W.a)() : g, E = Object(se.e)(O, {
						commentId: x
					}), j = Object(me.k)(O);
					if (!j) return;
					if (E && !y) return;
					t || r(fe({
						draftKey: x,
						draft: f,
						commentsPageKey: p,
						optimisticComment: y && C ? Object(W.b)({
							temporalId: x,
							draft: f,
							post: Object(ue.G)(O, {
								postId: C.postId
							}),
							author: j,
							subredditId: (null === (u = Object(de.e)(O)) || void 0 === u ? void 0 : u.id) || "",
							parentId: C.id
						}) : void 0
					})), r(Ae({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const _ = f.commentMode,
						S = t && n ? n : Object(W.e)(f, O.uploads);
					let P;
					if ((P = Se(_, O) ? await F(d(), null, m, f, S) : await L(l(), m, f, S)).ok) {
						if (r(Ce({
								...P.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: x,
								depth: b + 1,
								upload: Object(W.f)(S, O.uploads)
							})), t) {
							const e = Object(de.i)(O);
							Object(i.a)(!!e)
						}
					} else {
						if (P.error && P.error.type === o.Pb) {
							if (!C) return;
							const e = t && s ? s : Object(W.c)(f);
							J.j(O, e, C.postId, m)
						}
						r(ye({
							draftKey: x,
							error: P.error
						}))
					}
					xe(a(), p, v, P), Object(h.d)(), t && Object(K.a)()
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
						i && e(Object(u.skipOnboardingModal)()), o ? await e(Pe({
							...t.comment,
							postId: o
						}, !0, r, a)) : s && void 0 !== n && await e(we({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, a))
					}
				}, Ie = Object(r.a)(be.s), Ae = Object(r.a)(be.r), Te = Object(r.a)(be.n), Re = (Object(r.a)(be.i), Object(r.a)(be.o)), Le = (Object(r.a)(be.v), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === N.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) o(Re({
						editorMode: e,
						draftKey: n,
						content: c ? Y.i : ""
					})), o(Object(p.c)(e));
					else {
						o(Object(p.b)(n));
						const r = await Object(G.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(p.a)(n)), o(Re({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(p.c)(e))
						} else o(Object(p.a)(n)), o(Object(g.f)({
							duration: g.a,
							kind: ee.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Fe = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const r = o(),
							i = Object(a.a)(X.c.replyToComment, n);
						if (!Object(me.Q)(o()) && !Object(le.a)(r)) return e(Object(l.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ne.m)(o(), {
								commentId: n
							})
						}));
						const u = r.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ae({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = r.user.prefs.commentMode,
							g = Object(Q.d)();
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
						const f = r.features.comments.drafts[i];
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
							}, Object(me.S)(r)) {
							const s = Ie({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: i,
								formData: v
							});
							e(Object(c.startChangeUsernameFlow)(s))
						} else e(Ie({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: i,
							formData: v
						}))
					}
				}, De = e => async t => {
					t(Object(pe.r)(e)), t(He(e))
				}, Ue = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ae({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Fe({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Be = (e, t) => n => n(Te({
					draftKey: e,
					formData: t
				})), Ge = Object(r.a)(be.u), He = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (J.c(i), e(Ge({
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
				}, qe = Object(r.a)(be.F), We = Object(r.a)(be.E), Ve = Object(r.a)(be.G), Qe = Object(r.a)(be.j), ze = Object(r.a)(be.f), Ke = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: r
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
						})), J.d(d);
						const u = Object(W.e)(r, d.uploads),
							m = r.commentMode;
						let p;
						if ((p = Se(m, d) ? await (async (e, t, n, s, o) => {
								const r = o === N.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
										}
									};
								return Object(y.a)(e, {
									...D,
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
							})(l(), t, r, u, m) : await (async (e, t, n, s, r) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === N.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = s), Object(C.a)(Object(x.a)(e, [j.a]), {
									endpoint: Object(_.a)(Object(M.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
									method: o.ob.POST,
									data: a
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
							})(c(), t, r, u, m)).ok) {
							const o = p.body;
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
							error: p.error
						}))
					}
				}, Je = Object(r.a)(be.C), Ze = Object(r.a)(be.B), Xe = Object(r.a)(be.D), Ye = (e, t) => async (n, s, r) => {
					let {
						apiContext: a
					} = r;
					const i = s();
					n(Je({
						id: e
					})), J.a(e, i);
					const c = await ((e, t) => Object(C.a)(Object(x.a)(e, [j.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: o.ob.POST,
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
					c.ok ? n(Xe({
						id: e,
						postId: t
					})) : n(Ze({
						id: e,
						error: c.error
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
					})), (await Object(B.s)(o(), e, r)).ok || t(Object(pe.j)({
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
					const p = e => Object(g.f)(Object(g.e)(e, ee.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === v.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Z.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(pe.p)(i)), (await ((e, t) => Object(y.a)(e, {
								...U,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.ub)(null !== (u = null === (d = null === (l = o().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(g.f)({
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
					} else await e(_e({
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
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
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
				x = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						i = Object(h.k)(o);
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
				}, E = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = n(),
						l = Object(h.k)(i);
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
				}, j = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = n(),
						l = Object(h.k)(i);
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
				}, _ = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: c
					} = i;
					var l;
					const u = o(),
						g = Object(h.k)(u);
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
						o && s(E(o))
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
						u = Object(h.k)(d);
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
						d = Object(h.k)(l);
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
			const m = o()(d.c),
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
					e(Object(r.g)(l.g))
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
				})), Object(a.Q)(i) || await t(o.s());
				const l = n();
				if (!Object(a.Q)(l)) return t(Object(s.f)())
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
				Object(o.Q)(n) || await e(s.s());
				const r = t();
				if (!Object(o.Q)(r)) throw new Error("Failed to login")
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
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
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
			const h = Object(a.a)(l.d),
				g = Object(a.a)(l.e),
				f = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await (e => Object(u.a)(e, m))(s());
					if (!Object(i.c)(o)) return;
					const r = !!o.body.data.isLiveContentAvailable;
					e(h(r));
					const a = t(),
						c = Object(b.i)(a);
					r && c && !O(c) && e(g(!0))
				}, v = e => Object(s.c)(o.s.HAPPENING_NOW, o.A.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), O = e => {
					const t = v(e);
					return !!Object(s.b)(t)
				}, C = () => async (e, t) => {
					const n = t(),
						o = Object(b.i)(n);
					if (o) {
						const e = v(o);
						Object(s.d)(e, !0, s.a)
					}
					e(g(!1))
				}, y = () => async (e, t) => {
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
				})), await e(Object(r.s)()), Object(a.Q)(t()) || e(Object(i.openLoginModal)())
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
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
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
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
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
				})), Object(i.Q)(t()) || await e(Object(a.s)()), await e(Object(o.b)()).then(() => {
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
						Object(c.Q)(d) || n.push(e(Object(a.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.H)(t(), l);
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
				})), await e(Object(a.s)()), Object(i.Q)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.r)()
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
					const x = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					x.ok ? (o(b(y)), o(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), o(f(t))) : (o(b(y)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.k)();
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
					})), Object(i.rb)(o + 1)
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
						x = Object(m.b)(v),
						E = Object(u.a)(v),
						j = [r.a.NsfwBlockingModal].includes(E),
						_ = [i.a.NSFW_BLOCKING_MODAL_V2].includes(x),
						S = j || _;
					if (O && "true" === O.contentEditable && C && y) n(o.b({
						parentCommentId: C,
						commentsPageKey: y
					})), Object(h.a)(C);
					else if (x && !S) Object(h.b)(c.b), n(Object(r.i)(x));
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
					r && Object(l.a)(Object(i.g)(r)(g)), Object(c.Q)(g) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
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
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				E = n("./src/reddit/constants/accountManager.ts"),
				j = n("./src/reddit/constants/history.ts"),
				_ = n("./src/reddit/constants/modals.ts"),
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
				F = n("./src/reddit/selectors/accountManager/modalData.ts"),
				D = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				U = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				B = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				G = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/experiments/survey.ts"),
				W = n("./src/reddit/selectors/telemetry.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				z = n.n(Q);
			const K = m.a.iframe("IFrame", z.a),
				J = m.a.button("CloseButton", z.a),
				Z = m.a.wrapped(A.a, "Close", z.a),
				X = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: F.a,
					frontpageSignupVariant: B.a,
					isAmModalDesignUpdateEnabled: U.a,
					isBlockingInterstitialEnabled: G.b,
					isBlockingInterstitialV2Enabled: G.c,
					isBlurredPreview: H.b,
					isCommentBeforeSignUpEnabled: D.a,
					isDismissSurveyEnabled: q.a,
					isHardBlockingInterstitialEnabled: G.d,
					isLoggedIn: V.Q,
					isRegularOnboardingEnabled: D.b,
					redirectUrl: F.b
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
					onTwoFactorChanged: () => e(Object(h.A)(!1)),
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
					return t && t.success && (t.type === E.a.ChangePassword || t.type === E.a.Close || t.type === E.a.CreateAccount || t.type === E.a.GoogleOneTapDisplayed || t.type === E.a.GoogleOneTapFlowFailed || t.type === E.a.GoogleOneTapSkipped || t.type === E.a.Login || t.type === E.a.PreferenceStatus || t.type === E.a.Register || t.type === E.a.Resize || t.type === E.a.ShowStep || t.type === E.a.SSOLinkFail || t.type === E.a.SSOLinkSuccess || t.type === E.a.SSOUnlinkFail || t.type === E.a.SSOUnlinkSuccess || t.type === E.a.Subscribe || t.type === E.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
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
						const t = e === T.a.Apple ? _.a.LINK_APPLE_SSO : _.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === T.a.Apple ? _.a.UNLINK_APPLE_SSO : _.a.UNLINK_GOOGLE_SSO;
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
					}, this.isOneTapSession = () => this.props.path === E.c.GoogleOneTap, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && $(e))
							if (t.type === E.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === E.a.Close) this.closedByUser();
						else if (t.type === E.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === E.a.Login) this.onLogIn();
						else if (t.type === E.a.ChangePassword) this.onChangePassword();
						else if (t.type === E.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === E.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === E.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === E.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === E.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === E.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === E.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === E.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === E.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === E.a.ShowStep ? this.onShowStep(t.step) : t.type === E.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp()
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(j.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.redirectTo(t, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, (e === E.b.Subscribe || this.props.isAmModalDesignUpdateEnabled && this.props.path === E.c.GoogleOneTap && e === E.b.SelectAccount) && (this.trackResizing = !1, this.setIframeStyles({
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
							e && c(Object(I.w)(e))
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
					this.props.path !== e.path && e.path === E.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
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
					} = this.state, c = (r === E.c.Index || r === E.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && o, l = this.props.showCloseButton && !c;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && a.a.createElement(J, {
						onClick: this.closedByUser
					}, a.a.createElement(Z, {
						className: Object(u.a)({
							[z.a.mModalUpdate]: s
						})
					})))
				}
			}
			t.a = Y(Object(x.c)(te))
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
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
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
					unreadCount: i
				} = e;
				return n ? o.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					})
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
				return J
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
				x = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
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
					userSubreddit: Object(N.tb)(r)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(N.jb)(e),
					userSubreddit: Object(N.tb)(e)
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
				F = n("./src/reddit/selectors/comments.ts"),
				D = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = n.n(H),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const V = Object(E.a)(_.a),
				Q = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
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
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(o)}`,
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
						displayText: Q(W.a.First),
						isSelected: o === W.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(S.b, {
						displayText: Q(W.a.Last),
						isSelected: o === W.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(S.b, {
						displayText: Q(W.a.None),
						isSelected: o === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var K = z;
			const J = "CommentSort--SortPicker",
				Z = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Y = Object(E.a)(_.a),
				$ = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(F.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(J),
					highlightIsOpen: Object(B.b)(Z),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(D.m)(e, {
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
							o = !!Object(D.m)(e, {
								postId: n
							}),
							r = Object(U.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: F.p
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
								tooltipId: Z
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
						suggestedSort: E,
						showTooltip: j,
						toggleContestModeModal: _
					} = this.props, N = h.contestMode, w = !b.search.includes(l.w.CONFIDENCE), I = O === l.w.CONFIDENCE && w, A = m && !I, L = l.y[O], F = L ? L() : "", D = E && O === E && !I ? this.addSuggestedLabel(F) : F, U = N ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), B = N ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), G = N ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
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
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${D}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(T.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: a,
						tooltipId: J
					}, [l.w.CONFIDENCE, l.w.TOP, l.w.NEW, l.w.CONTROVERSIAL, l.w.OLD, l.w.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							o = l.y[e],
							a = o ? o() : "";
						return r.a.createElement(x.a, {
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
					}))), A && !H && (E ? r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: O !== E ? this.setSortOnClick : this.clearSortOnClick
					}, O !== E ? s.fbt._("Set new suggested sort", null, {
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
						onMouseEnter: j,
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
						id: Z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: M
					})), o && r.a.createElement(C.a, {
						actionText: B,
						headerText: U,
						modalText: G,
						onConfirm: this.setContestMode,
						toggleModal: _,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
		"./src/reddit/components/Crypto/componentStyles.css": function(e, t, n) {},
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
			const c = () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e(0), n.e(1), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
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
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
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
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(d, {
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
				x = n("./src/reddit/selectors/experiments/d2xTopNavRevamp.ts"),
				E = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				S = n.n(_);
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
					activeSaleConfig: E.a,
					activeTooltipId: j.a,
					coinPurchaseDropdownIsOpen: e => Object(j.b)(k)(e),
					isFreeAwardEventEnabled: E.g,
					topNavigationVariant: x.a
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
					}), u = r === f.ed.RepositionCoinNoLiveNoAll;
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
				selector: "h-jI8r2f9ozTNqu_2TBeY"
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
				var f, v, C, y, x, E, j, _, S, P, k, N, w, M, I, A, T;
				const R = Object(r.d)(),
					L = Object(m.a)(),
					[F, D, U] = function(e, t, n) {
						const [o, r] = Object(s.useState)(Object(u.q)(e, t) || 0), a = Object(s.useCallback)(() => {
							r(o + 1), Object(u.xb)(e, t, o + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (r(n), Object(u.xb)(e, t, n))
						}, []);
						return [o, a, i]
					}(g, n.notificationName, (null === (f = n.persistence) || void 0 === f ? void 0 : f.maxViews) || 0),
					[B, G] = Object(s.useState)(!1),
					[H, q] = Object(s.useState)(!1),
					W = Object(r.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = h(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(s.useEffect)(() => {
					D(), t ? (L(Object(d.B)(n.notificationName)), L(Object(d.C)(n.notificationName))) : (L(Object(d.p)(n.notificationName)), L(Object(d.q)(n.notificationName)))
				}, []);
				const V = null === (v = null == n ? void 0 : n.persistence) || void 0 === v ? void 0 : v.maxViews;
				if (!n || V && F > V) return null;
				const Q = !!(null == n ? void 0 : n.primaryCta),
					z = !!(null == n ? void 0 : n.secondaryCta),
					K = !!(null == n ? void 0 : n.titleImage),
					J = !!(null == n ? void 0 : n.thumbnailImageUrl),
					Z = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (U(), R(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: B ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.backgroundHex,
						color: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.text.colorText,
						borderColor: null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.colors.borderHex
					},
					Y = {
						backgroundColor: H ? null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.hoverHex : null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.backgroundHex,
						color: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.text.colorText,
						borderColor: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.colors.borderHex
					};
				return W ? null : o.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), Z(), L(t ? Object(d.A)(n.notificationName, d.b.BANNER) : Object(d.o)(n.notificationName, d.b.BANNER))
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
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), J && o.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), Q || z && o.a.createElement("div", {
					className: Object(a.a)(O.a.ActionButtons, {
						[O.a.noMargin]: J
					})
				}, Q && o.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), Z(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_1) : Object(d.o)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...X
					},
					onMouseEnter: () => G(!0),
					onMouseLeave: () => G(!1)
				}), z && o.a.createElement(l.t, {
					text: null === (A = n.secondaryCta) || void 0 === A ? void 0 : A.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: O.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), Z(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_2) : Object(d.o)(n.notificationName, d.b.CTA_2)))
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
						e.stopPropagation(), Z(), L(t ? Object(d.A)(n.notificationName, d.b.DISMISS) : Object(d.o)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(r.e)(g),
					s = Object(r.e)(f.i);
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
				return Z
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
			const x = e => {
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
			var E = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				j = n("./src/reddit/components/ResizeSensor/index.tsx"),
				_ = n("./src/reddit/components/InboxTooltip/index.m.less"),
				S = n.n(_);
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
					}, r.a.createElement(E.a, {
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
					}), !!p && r.a.createElement(j.a, {
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
				F = "270px",
				D = 100,
				U = .5,
				B = 5,
				G = 50,
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
						} = this.props, o = t || n, r = window.innerHeight - G - 2 * H - (o ? D : 0);
						let a = 0;
						for (const i in e) a += e[i];
						return 0 === a ? o ? L : s ? R : F : (o && (a += D), r < a && (a = r + (o ? D : 0)), a)
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
						} = this.state, n = t + B, s = n > e.length ? n : e.length - 1;
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
							a = o.length > n + B;
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
							const e = o.length > this.state.currentNotificationCursorIndex + B;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: B
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
					} = this.props, c = !(!o || !o.length), l = this.getContainerHeight(), d = o.length > this.state.currentNotificationCursorIndex + B;
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
					}, t && r.a.createElement(x, {
						onTurnOnBrowserNotifications: i,
						onClose: a
					}), r.a.createElement(b.a, {
						isFromMiniInbox: !0
					})), !c && s && r.a.createElement(N.a, null), !c && !s && r.a.createElement(w.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !s && (e || d) && r.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: U
					}, r.a.createElement("div", null)))
				}
			}
			var W = n("./src/reddit/constants/localStorage.ts"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				Q = n("./src/reddit/hooks/useLocalStorage.ts");
			var z = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				K = n("./src/reddit/helpers/localStorage/index.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [],
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
						[O, C] = Object(z.a)(v),
						[y, x] = function(e) {
							const [t, n] = Object(o.useState)(() => Object(K.t)(e));
							return [t, Object(o.useCallback)(() => {
								n(!0), Object(K.yb)(e)
							}, [e])]
						}(v),
						[E, j] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [s, o] = Object(Q.a)(t, []);
							return [-1 !== s.indexOf(n), () => {
								o([...s, n])
							}]
						}({
							key: W.b.HOT_POTATO_BANNER_SEEN,
							userId: v
						}),
						_ = !(!d || !d.length),
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
					}), r.a.createElement(q, J({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !y,
						setInboxPrivacyPolicyBannerSeen: x,
						isHotPotatoEnabled: m && !E,
						setHotPotatoBannerSeen: j
					})), (_ || c) && r.a.createElement($, {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(o.createContext)(null),
				p = Object(o.createContext)(null);
			class b extends r.a.Component {
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
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(l.t, {
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
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
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
				x = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
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
						return (null == o ? void 0 : o.belongsTo) ? Object(w.P)(e, {
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
				F = {
					[_.o.GIFVIDEO]: d.a.gif_post,
					[_.o.IMAGE]: d.a.image_post,
					[_.o.TEXT]: d.a.text_post,
					[_.o.RTJSON]: d.a.text_post,
					[_.o.VIDEO]: d.a.video_post,
					[_.o.EMBED]: d.a.embed,
					[_.o.LIVEVIDEO]: d.a.video_live,
					[_.o.GALLERY]: d.a.media_gallery,
					[_.o.LIVEAUDIO]: d.a.audio
				},
				D = e => F[(null == e ? void 0 : e.media) ? e.media.type : _.o.EMBED];
			class U extends r.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(w.jb)(e, {
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
					} = this.props, h = D(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Sb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return r.a.createElement("div", {
						className: Object(c.a)(T.a.container, t, {
							[T.a.isCollection]: d && Object(x.a)(d),
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
					}), r.a.createElement(E.a, {
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
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
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
					}), !this.props.hideCloseButton && r.a.createElement(B, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const B = r.a.memo(e => r.a.createElement(y.t, {
				className: T.a.CloseButton,
				size: y.d.XS,
				onClick: e.onClick,
				priority: y.c.Plain,
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
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(d, {
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
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.N)(e) || Object(l.M)(e)) ? r.a.createElement(d, null) : null
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
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(r.a)(a);
			t.a = e => o.a.createElement(i, e)
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
				x = e => {
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
				E = e => {
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
				j = e => {
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
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/index.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(_.a)(),
						[n, s] = Object(c.useState)(null),
						o = Object(S.a)(),
						a = Object(l.e)(N.i),
						i = Object(l.e)(N.Fb),
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
						x = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						E = Object(c.useCallback)(async e => {
							if (m) {
								const n = Object(h.f)({
									triggerName: e,
									isDemoEnabled: m,
									activeDemoTrigger: p,
									demoTriggerThreshold: g
								});
								return void(n && b(n, t, x))
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
							(null == o ? void 0 : o.variant) && s.variants.find(e => e.variantName === o.variant) && b(s, t, x)
						}, [n, C, a, i, v, m, p, g, O, x, t]);
					return Object(c.useEffect)(() => {
						const e = Object(h.c)(),
							t = e.subscribe(E);
						return () => e.unsubscribe(t)
					}, [E]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(h.j)(n, t), e(Object(d.I)({
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
						m(o ? E(e) : b.type === g.a.MULTI_CHOICE ? j(e) : x(e))
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
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(S.a)(), [f, v] = Object(c.useState)(""), [O, C] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const O = t.experimentName,
							_ = t.steps[l],
							S = null == _ ? void 0 : _.type,
							P = null == _ ? void 0 : _.question,
							k = null == _ ? void 0 : _.followUpQuestion,
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
							return void h(w === g.a.MULTI_CHOICE ? j({
								text: f,
								...e
							}) : x(e))
						}
						const I = {
							experimentName: O,
							type: S,
							action: "submit",
							questionId: u.toString(),
							questionParentId: _.type === g.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (h(p ? E({
								text: a,
								question: k,
								...I
							}) : S === g.a.MULTI_CHOICE ? j({
								question: P,
								max: null === (e = _.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = _.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : x({
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
								h(w === g.a.MULTI_CHOICE ? j({
									text: f,
									...e
								}) : x(e))
							}
						else b(!0), h(E({
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
						onStepComplete: _,
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
				if (Object(p.i)(e) || Object(h.rb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.H)(e, n);
				if (!s) return;
				if (Object(h.qb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.y)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Hb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Hb)(e);
				if (Object(h.Q)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.B)(e, {
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
					currentUser: l.k,
					isNightMode: l.db,
					isPresenceUserPrefEnabled: l.V,
					shouldHideNSFW: l.F
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
				return E
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
					isNightMode: g.db,
					isAnimatingUpvotePostId: h.k
				}),
				y = Object(a.b)(C),
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class j extends r.a.Component {
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
						y = x(e),
						j = E(e),
						_ = v.voteState,
						S = a === C;
					return r.a.createElement("div", {
						className: Object(c.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: g
					}, y ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": _ === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: _
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": _ === b.a.upvoted,
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
						voteState: _
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: _,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!l,
						isCountAnimShadowTestEnabled: !!n,
						postId: C
					}), j ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": _ === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: _
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": _ === b.a.downvoted,
						className: Object(c.a)(d.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: _
					})))
				}
			}
			const _ = Object(l.a)(y(j));
			t.a = _
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: a.jb
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
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(o.c)({
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
					requestCloseBlade: () => n && e(Object(r.h)(n))
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
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
					}, x = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = d ? x : Object(l.a)(x);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: E,
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
				return Object(i.S)(e, {}) === r.g.Large && !Object(l.P)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.Xd
				})
			}

			function m(e) {
				switch (e) {
					case o.Yd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.Yd.Enabled:
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
						screen: Object(r.bb)(e),
						subreddit: Object(r.jb)(e)
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
				return y
			})), n.d(t, "l", (function() {
				return x
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				u = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: o ? Object(c.h)(e, o) : null,
						listing: Object(c.z)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const o = d(e);
					return Object(l.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
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
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.bb)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.K)(t, e)
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
				}), y = () => e => ({
					...d(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), x = () => e => ({
					...d(e),
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
						subreddit: r.jb(e)
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
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			}));
			var s, o = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				r = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				a = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/redditGQL/types.ts");
			! function(e) {
				e.TopNav = "top_nav", e.Dropdown = "home_drop_down", e.ChatTab = "chat_tab"
			}(s || (s = {}));
			const d = e => ({
					...Object(c.o)(e),
					...Object(c.t)(e)
				}),
				u = () => o.a.All,
				m = (e, t) => {
					const n = Object(i.V)(e, {
						postId: t
					});
					return n ? {
						isMod: Object(a.c)(e, {
							subredditId: n.id
						})
					} : {}
				},
				p = (e, t) => {
					const n = Object(i.V)(e, {
						postId: t
					});
					return n ? {
						name: n.name,
						id: n.id
					} : {}
				},
				b = (e, t) => {
					const n = Object(r.b)(e, t),
						s = (null == n ? void 0 : n.contentType) === l.q.Chat,
						o = Object(r.c)(e).indexOf(t),
						a = Object(r.d)(e),
						i = a.indexOf(t),
						c = -1 !== i;
					return {
						reason: c ? "recommended" : "popular",
						position: c ? i + 1 : a.length + o + 1,
						pageType: s ? "live_chat" : "liveaudio"
					}
				},
				h = e => t => ({
					...d(t),
					source: "nav",
					action: "click",
					noun: "discover_live",
					actionInfo: {
						pageType: "home",
						paneName: e
					}
				}),
				g = e => ({
					...d(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						reason: "discover_live",
						paneName: u()
					}
				}),
				f = e => t => ({
					...d(t),
					source: "discover_live",
					action: "view",
					noun: "discover_page_item",
					actionInfo: {
						paneName: u(),
						...b(t, e)
					},
					subreddit: p(t, e),
					userSubreddit: m(t, e)
				}),
				v = e => t => ({
					...d(t),
					source: "discover_live",
					action: "click",
					noun: "discover_page_item",
					actionInfo: {
						paneName: u(),
						...b(t, e)
					},
					subreddit: p(t, e),
					userSubreddit: m(t, e)
				}),
				O = e => ({
					...d(e),
					source: "discover_live",
					action: "click",
					noun: "create_post",
					actionInfo: {
						paneName: u()
					}
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
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
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
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.bb(e),
					profile: s.T(e),
					subreddit: s.jb(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...o(t)
				}),
				a = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...o(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
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
			})), n.d(t, "w", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "A", (function() {
				return j
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "y", (function() {
				return P
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "C", (function() {
				return L
			})), n.d(t, "B", (function() {
				return F
			})), n.d(t, "E", (function() {
				return D
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "F", (function() {
				return B
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
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
				h = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				y = (e, t, n, r, c) => l => ({
					...Object(o.o)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: w(n),
						categoryId: r
					}
				}),
				x = (e, t, n, r, c, l) => d => ({
					...Object(o.o)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(t),
						categoryId: n,
						subredditName: r,
						subredditId: c
					}
				}),
				E = (e, t) => n => ({
					...Object(o.o)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				j = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				_ = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				S = (e, t) => n => ({
					...Object(o.o)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				P = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t, n, r) => c => ({
					...Object(o.o)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					onboarding: {
						categoryName: w(t),
						categoryId: n
					}
				}),
				N = (e, t, n, r, c) => l => ({
					...Object(o.o)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(e),
						categoryId: n,
						subredditName: t,
						subredditId: r
					}
				}),
				w = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var M, I, A;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(M || (M = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(I || (I = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(A || (A = {}));
			const T = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				L = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				F = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = e => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				B = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
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
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return _
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
					comment: s.h(n, t)
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
				x = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				j = e => a("z_downvote", e),
				_ = o("c_create_post"),
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
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
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
					} = Object(a.Ab)(n, {
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
					snoovatar: r.hb(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.hb(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.hb(e)
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
					snoovatar: r.hb(n),
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
					snoovatar: r.hb(s)
				}),
				y = C("anniversary_achievement", "view", "anniversary_achievement"),
				x = C("anniversary_achievement", "click", "close"),
				E = C("anniversary_achievement", "click", "equip"),
				j = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				_ = j("view"),
				S = j("click"),
				P = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.hb(s)
				}),
				k = e => P("onboarding", "click", e),
				N = () => P("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
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
			})), n.d(t, "h", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.bb(e),
					profile: o.T(e),
					subreddit: o.jb(e)
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
						id: Object(r.Ab)(t, {
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
						id: Object(r.Ab)(t, {
							userName: e
						}).id
					},
					...o.o(t)
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
				const [t, n] = Object(s.useState)(Object(o.s)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.nb)(e)
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("svg", c({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
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
					const e = (null === (o = Object(v.k)(r)) || void 0 === o ? void 0 : o.displayText) || "";
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
			}), x = e => ({
				payload: e,
				type: h.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				_ = n("./src/lib/browser/isIncognito.ts"),
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
				F = n("./src/reduxMiddleware/apiContext.ts"),
				D = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				G = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				q = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/lib/activeUserCountByLiveChatId/actions.ts"),
				Q = n("./src/reddit/models/Post/index.ts"),
				z = n("./src/reddit/selectors/experiments/chat.ts");
			const K = async (e, t, n) => {
				const s = function(e) {
					return Object.values(e.posts.models).filter(e => e.discussionType === Q.b.Chat).map(e => e.id)
				}(t());
				Object(V.b)(s, Object(z.d)(t()), Boolean(t().user.account), e, n)
			};
			var J = n("./src/reddit/actions/comment/index.ts"),
				Z = n("./src/reddit/actions/emailCollection/index.ts"),
				X = n("./src/reddit/actions/emailVerification.ts"),
				Y = n("./src/reddit/actions/login.ts"),
				$ = n("./src/reddit/selectors/activeModalId.ts"),
				ee = n("./node_modules/reselect/es/index.js"),
				te = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ne = n("./src/reddit/selectors/meta.ts");
			const se = Object(ee.a)(ne.c, v.Q, te.d, te.e, (e, t, n, s) => !(e || t || n && s)),
				oe = () => async (e, t) => {
					const n = t(),
						s = se(n);
					!!!Object($.a)(n) && s && e(Object(Y.openGoogleOneTapModal)())
				};
			var re = n("./src/reddit/actions/media.ts"),
				ae = n("./src/lib/loadWithRetries/index.ts"),
				ie = () => Object(ae.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				ce = n("./src/reddit/actions/nps.ts");
			const le = Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var de, ue = n("./src/reddit/actions/platform.ts"),
				me = n("./src/reddit/actions/post.ts"),
				pe = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				be = n("./src/reddit/actions/session.ts"),
				he = n("./src/reddit/actions/survey/index.ts"),
				ge = n("./src/reddit/actions/theme.ts"),
				fe = n("./src/reddit/actions/toaster.ts"),
				ve = n("./src/reddit/actions/users.ts"),
				Oe = n("./node_modules/react-redux/es/index.js"),
				Ce = n("./node_modules/react-router/esm/react-router.js"),
				ye = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Crypto/componentStyles.css"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				xe = n.n(ye),
				Ee = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				je = n("./src/lib/classNames/index.ts"),
				_e = n("./node_modules/lodash/isEqual.js"),
				Se = n.n(_e),
				Pe = n("./node_modules/lodash/omit.js"),
				ke = n.n(Pe),
				Ne = n("./node_modules/lodash/throttle.js"),
				we = n.n(Ne),
				Me = n("./src/reddit/contexts/NavbarExp.ts"),
				Ie = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ae = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				Te = n("./src/lib/fastdom/index.ts"),
				Re = n("./src/lib/FocusTrap/index.ts"),
				Le = n("./src/lib/isEqualWithoutKey/index.ts"),
				Fe = n("./src/lib/isSimpleClick/index.ts"),
				De = n("./src/reddit/actions/header.ts"),
				Ue = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				Be = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Ge = n("./node_modules/polished/dist/polished.es.js"),
				He = n("./node_modules/react-motion/lib/react-motion.js"),
				qe = n("./src/lib/lessComponent.tsx"),
				We = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Ve = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Qe = n("./src/reddit/constants/accountManager.ts"),
				ze = n("./src/reddit/helpers/trackers/onboarding.ts"),
				Ke = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Je = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ze = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				Xe = n("./src/reddit/components/Carousel/index.m.less"),
				Ye = n.n(Xe);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(de || (de = {}));
			class $e extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === de.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
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
						} = this.state, a = n === de.Fade ? {
							opacity: t === r ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * r : void 0
						};
						return m.a.createElement("div", {
							className: Object(je.a)(Ye.a.item, Ye.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(je.a)(Ye.a.indicator, {
							[Ye.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(je.a)(e, Ye.a.container)
					}, m.a.createElement("article", {
						className: Ye.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: Ye.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var et = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				tt = n.n(et);
			const nt = qe.a.div("Container", tt.a),
				st = qe.a.wrapped($e, "Carousel", tt.a),
				ot = qe.a.div("Phone", tt.a),
				rt = qe.a.img("Frame", tt.a),
				at = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				it = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				ct = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				lt = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var dt = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(nt, {
						className: t
					}, m.a.createElement(ot, {
						className: tt.a.android
					}, m.a.createElement(st, {
						animationType: de.Fade,
						className: tt.a.android,
						delay: 2500,
						items: ct,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(rt, {
						src: at
					})), m.a.createElement(ot, {
						className: tt.a.iphone
					}, m.a.createElement(st, {
						animationType: de.Fade,
						className: tt.a.iphone,
						items: lt,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(rt, {
						src: it
					})))
				},
				ut = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				mt = n.n(ut);
			const pt = qe.a.div("Container", mt.a),
				bt = qe.a.span("Disclaimer", mt.a),
				ht = qe.a.a("Link", mt.a);
			var gt = e => m.a.createElement(pt, {
					className: e.className
				}, m.a.createElement(ht, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(ht, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(ht, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(ht, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(ht, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(ht, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(ht, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(ht, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(ht, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(ht, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(ht, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(bt, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ft = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				vt = n.n(ft);
			const Ot = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Ct = qe.a.div("Container", vt.a),
				yt = qe.a.wrapped(We.a, "IFrame", vt.a),
				xt = qe.a.wrapped(dt, "Images", vt.a),
				Et = qe.a.wrapped(gt, "Links", vt.a),
				jt = qe.a.div("MainContent", vt.a),
				_t = qe.a.div("MainContentColumn", vt.a),
				St = qe.a.button("NotReady", vt.a),
				Pt = qe.a.span("NotReadyText", vt.a),
				kt = qe.a.wrapped(Ke.a, "NotReadyIcon", vt.a),
				Nt = Object(Ie.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: o,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(Je.a)(e).bodyText;
					return m.a.createElement(Be.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(Ct, {
						className: t,
						innerRef: n
					}, m.a.createElement(jt, null, m.a.createElement(_t, null, m.a.createElement(xt, null, "Images Placeholder")), m.a.createElement(_t, null, m.a.createElement(yt, {
						className: Object(je.a)({
							[vt.a.fields]: Object(Ze.b)(o)
						}),
						path: Qe.c.Register,
						uiMode: Qe.d.Embed
					}))), m.a.createElement(St, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(Ge.i)(.8, i)
						}
					}, m.a.createElement(Pt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(kt, null)), m.a.createElement(Et, null)))
				});
			class wt extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Mt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(ze.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(wt, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Nt, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(He.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(He.spring)(s, Ot)
						}
					}, this.renderScroller))
				}
			}
			var It = Object(Ve.c)(Mt),
				At = n("./src/lib/localStorageAvailable/index.ts"),
				Tt = n("./src/reddit/actions/modal.ts"),
				Rt = n("./src/higherOrderComponents/makeAsync.tsx"),
				Lt = Object(Rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ft = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Dt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Ut = Object(Rt.a)({
				getComponent: () => Object(ae.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Bt = () => null;
			var Gt = Object(Rt.a)({
					ErrorComponent: Bt,
					getComponent: () => Object(ae.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Bt
				}),
				Ht = n("./src/higherOrderComponents/asModal/index.tsx"),
				qt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Wt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Vt = n("./src/reddit/constants/modals.ts"),
				Qt = n("./src/reddit/controls/TextButton/index.tsx"),
				zt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Kt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jt = Object(Oe.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Tt.i)(Vt.a.BLADE_NIGHTMODE)), e(Object(qt.f)())
					},
					openBlade: () => {
						e(Object(qt.e)(n))
					}
				}
			});
			var Zt = Object(Ht.a)(Jt(e => m.a.createElement(Wt.e, null, m.a.createElement(Wt.i, null, m.a.createElement(zt.a, null, m.a.createElement(Wt.q, null, Kt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Qt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Wt.b, null)))), m.a.createElement(Wt.l, null, m.a.createElement(Wt.o, null, Kt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Wt.g, null, m.a.createElement(Wt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Kt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Wt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Kt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				Xt = n("./src/reddit/actions/authorFlair.ts"),
				Yt = n("./src/reddit/actions/gold/powerups.ts"),
				$t = n("./src/reddit/actions/userFlair/index.ts"),
				en = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				tn = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				nn = n("./src/reddit/components/FlairPreview/index.tsx"),
				sn = n("./src/reddit/components/FlairSearch/index.tsx"),
				on = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				rn = n("./src/reddit/controls/Button/index.tsx"),
				an = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				cn = n("./src/reddit/layout/row/Inline/index.tsx"),
				ln = n("./src/reddit/models/Flair/index.ts"),
				dn = n("./src/reddit/models/User/index.ts"),
				un = n("./src/reddit/selectors/authorFlair.ts"),
				mn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				pn = n("./src/reddit/selectors/telemetry.ts"),
				bn = n("./src/reddit/selectors/userFlair.ts"),
				hn = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				gn = n.n(hn);
			const fn = e => e.flairModalContext && e.currentUser && Object(dn.e)(e.currentUser) === e.flairModalContext.username,
				vn = e => e.authorFlair || fn(e) && e.userFlairData.applied || null,
				On = qe.a.wrapped(cn.a, "Section", gn.a),
				Cn = qe.a.div("CheckboxText", gn.a);
			class yn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(pn.kb)(t, this.props.subredditId)
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
						previewFlair: vn(e),
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
					} = e.displaySettings, r = this.state.showFlair !== o, a = vn(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(on.b)(n, t, a);
					return !(i || c !== on.a.NoChanges || !r) || i
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
					} = n, u = this.canSave(), p = fn(e);
					return m.a.createElement(tn.a, null, m.a.createElement(en.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(nn.a, {
						flair: t.previewFlair,
						flairTemplateType: ln.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(sn.a, {
						flair: t.previewFlair,
						flairTemplateType: ln.d.UserFlair,
						subredditId: o,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(On, null, m.a.createElement(an.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(Cn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: gn.a.buttonsRow
					}, c && m.a.createElement(rn.t, {
						className: gn.a.goBackButton,
						priority: rn.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: gn.a.rightSideButtons
					}, a && m.a.createElement(rn.o, {
						className: gn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(rn.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const xn = Object(Oe.b)(() => Object(ee.c)({
				authorFlair: un.b,
				currentUser: v.k,
				flairModalContext: un.c,
				isMod: (e, t) => !!Object(mn.n)(e, t),
				userFlairData: bn.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object($t.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(Xt.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Yt.d)())
			}))(yn);
			var En = Object(Ht.a)(Object(Ve.c)(xn)),
				jn = n("./src/reddit/selectors/bannedUser.ts"),
				_n = n("./src/reddit/selectors/muted.ts"),
				Sn = n("./src/reddit/selectors/notificationPrefs.ts"),
				Pn = n("./src/reddit/selectors/platform.ts"),
				kn = n("./src/reddit/selectors/removalReasons.ts"),
				Nn = n("./src/reddit/constants/cookie.ts"),
				wn = n("./src/reddit/featureFlags/index.ts"),
				Mn = n("./src/reddit/helpers/localStorage/index.ts"),
				In = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const An = Object(ee.c)({
				activeModalId: $.a,
				authorContext: un.c,
				badgePurchaseModalIsOpen: Object($.b)(Vt.a.BADGE_PURCHASE),
				banContext: jn.a,
				banModalIsOpen: Object($.b)(Vt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object($.b)(Vt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => wn.d.introModal(e),
				isOverlayOpen: Pn.i,
				moderatorPermissions: e => {
					const t = Object(Pn.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: _n.b,
				muteModalIsOpen: Object($.b)(Vt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Sn.d,
				removalReasonContext: kn.b,
				removalReasonModalIsOpen: Object($.b)(Vt.a.ADD_REMOVAL_REASON),
				subredditId: Pn.c,
				userFlairModalIsOpen: Object($.b)(Vt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: v.A,
				userInRedesignBeta: v.H,
				userIsLoggedIn: v.Q,
				userIsMod: v.R,
				userIsNew: v.U
			});
			class Tn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(At.a)()) return; {
						const e = d.a.get(Nn.a);
						e && d.a.remove(Nn.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Mn.E)(Vt.a.ALPHA_CONSUMER);
						t && Object(Mn.Z)(Vt.a.ALPHA_CONSUMER), (e || t) && Object(Mn.Gb)(Vt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Mn.E)(Vt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Mn.Gb)(Vt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Vt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(In.a)(), 500) : setTimeout(() => Object(In.b)(), 500)))
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
						comment: n && Object(pn.h)(o, n),
						post: n && Object(pn.K)(o, n),
						screen: Object(pn.bb)(o),
						subreddit: Object(pn.kb)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(Ft.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Dt.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Gt, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f
					}), o && b && m.a.createElement(Zt, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(En, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(Lt, {
						withOverlay: !0,
						productId: r
					}), c && m.a.createElement(Ut, null))
				}
			}
			var Rn = Object(Oe.b)(An, e => ({
					markRedesignModalAsClosed: () => e(Object(Tt.j)()),
					toggleBanModal: () => e(Object(Tt.i)(Vt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Tt.i)(Vt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Tt.i)(Vt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Tt.i)(Vt.a.ADD_REMOVAL_REASON))
				}))(Object(Ve.c)(Tn)),
				Ln = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Fn = n("./src/reddit/constants/experiments.ts"),
				Dn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Un = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Bn = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Gn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Hn = n("./src/telemetry/helpers/sendCounter.ts"),
				qn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Wn = n.n(qn);
			const Vn = qe.a.div("Overlay", Wn.a),
				Qn = qe.a.div("IframeContainer", Wn.a),
				zn = {},
				Kn = Object(Dn.u)(),
				Jn = Object(ee.c)({
					frontpageSignupVariant: Ze.a,
					isAmModalDesignUpdateEnabled: Bn.a,
					isResponsiveSettingsEnabled: Gn.a
				}),
				Zn = {
					[Qe.c.ChangePassword]: Vt.a.CHANGE_PASSWORD_MODAL_ID,
					[Qe.c.Index]: Vt.a.LOGIN_MODAL_ID,
					[Qe.c.Register]: Vt.a.REGISTER_MODAL_ID,
					[Qe.c.EnableTwoFactor]: Vt.a.ENABLE_TWO_FACTOR,
					[Qe.c.DisableTwoFactor]: Vt.a.DISABLE_TWO_FACTOR,
					[Qe.c.TwoFactorBackupCodes]: Vt.a.TWO_FACTOR_BACKUP_CODES,
					[Qe.c.LinkAppleSSO]: Vt.a.LINK_APPLE_SSO,
					[Qe.c.UnlinkAppleSSO]: Vt.a.UNLINK_APPLE_SSO,
					[Qe.c.LinkGoogleSSO]: Vt.a.LINK_GOOGLE_SSO,
					[Qe.c.UnlinkGoogleSSO]: Vt.a.UNLINK_GOOGLE_SSO,
					[Qe.c.GoogleOneTap]: Vt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[Qe.c.Onboarding]: Vt.a.ONBOARDING_MODAL_ID
				};
			class Xn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === Qe.c.Register && Object(Ze.f)(this.props.frontpageSignupVariant) && Un.a.throttleFeature(Fn.gd), this.props.sendEvent(Object(ze.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(ze.g)()), Object(Hn.b)(S.o.Redesign, {
							type: Hn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(ze.h)()), Object(Hn.b)(S.o.Redesign, {
							type: Hn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							isAmModalDesignUpdateEnabled: t,
							path: n
						} = this.props, s = n === Qe.c.Index || n === Qe.c.Register, o = n === Qe.c.GoogleOneTap, r = () => {
							this.resizeContainer({
								height: 640,
								width: 400
							})
						};
						e === Qe.b.SelectAccount ? s ? t ? r() : this.resizeContainer({
							height: 474,
							width: 416
						}) : o && (t && r(), this.setState({
							removeHiddenOverlay: !0
						})) : e === Qe.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === Qe.b.Email || e === Qe.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== Qe.b.EmailOptIn && e !== Qe.b.GoogleUI || this.setState({
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
					} = this.state, l = Object(Ze.c)(e) || Object(Ze.d)(e), d = o === Qe.c.LinkAppleSSO || o === Qe.c.LinkGoogleSSO || o === Qe.c.UnlinkAppleSSO || o === Qe.c.UnlinkGoogleSSO, u = o === Qe.c.GoogleOneTap, p = Object(je.a)({
						[Wn.a.mModalUpdate]: t,
						[Wn.a.small]: l,
						[Wn.a.ssoConfirmPassword]: d,
						[Wn.a.linkActionSSOFail]: a,
						[Wn.a.mResponsive]: n,
						[Wn.a.mGoogleOneTap]: u && !i
					}), b = Object(je.a)({
						[Wn.a.mGoogleOneTap]: u && !i,
						[Wn.a.mHiddenOverlay]: u && !c
					}), h = !l && !a && !n;
					return m.a.createElement(Vn, {
						className: b
					}, m.a.createElement(Qn, {
						className: p,
						style: r || zn
					}, m.a.createElement(We.a, {
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
			const Yn = Kn(Object(Oe.b)(Jn, (e, t) => ({
				closeModal: t => {
					e(Object(Tt.g)(Zn[t]))
				}
			}))(Object(Ve.c)(Xn)));
			Object(Ln.b)(Vt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Yn, {
				path: Qe.c.ChangePassword
			})), Object(Ln.b)(Vt.a.LOGIN_MODAL_ID, e => m.a.createElement(Yn, {
				path: Qe.c.Index
			})), Object(Ln.b)(Vt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Yn, {
				path: Qe.c.Onboarding
			})), Object(Ln.b)(Vt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Yn, {
				path: Qe.c.EnableTwoFactor
			})), Object(Ln.b)(Vt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Yn, {
				path: Qe.c.DisableTwoFactor
			})), Object(Ln.b)(Vt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Yn, {
				path: Qe.c.TwoFactorBackupCodes
			})), Object(Ln.b)(Vt.a.REGISTER_MODAL_ID, e => m.a.createElement(Yn, {
				path: Qe.c.Register
			})), Object(Ln.b)(Vt.a.LINK_APPLE_SSO, e => m.a.createElement(Yn, {
				path: Qe.c.LinkAppleSSO
			})), Object(Ln.b)(Vt.a.LINK_GOOGLE_SSO, e => m.a.createElement(Yn, {
				path: Qe.c.LinkGoogleSSO
			})), Object(Ln.b)(Vt.a.UNLINK_APPLE_SSO, e => m.a.createElement(Yn, {
				path: Qe.c.UnlinkAppleSSO
			})), Object(Ln.b)(Vt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Yn, {
				path: Qe.c.UnlinkGoogleSSO
			})), Object(Ln.b)(Vt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Yn, {
				path: Qe.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const $n = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement($n, {
				withOverlay: !0
			}));
			const es = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(es, {
				withOverlay: !0
			}));
			const ts = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(ts, {
				withOverlay: !0
			}));
			const ns = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.CROWD_CONTROL, e => m.a.createElement(ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const ss = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(ss, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const os = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const rs = Object(Rt.a)({
					getComponent: () => Object(ae.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				as = e => () => {
					e()
				};
			Object(Ln.b)(Vt.a.GOLD_GILD_MODAL, e => m.a.createElement(rs, {
				onOverlayClick: as(e),
				withOverlay: !0
			}));
			var is = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				cs = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				ls = n.n(cs);
			const ds = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = is.SPARKLE_ASSET_PATH, document.createElement("img").src = is.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Ln.b)(Vt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(ds, {
				withOverlay: !0,
				className: ls.a.modalBody,
				overlayClassName: ls.a.modalOverlay
			}));
			const us = Object(Rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				ms = e => () => {
					e()
				};
			Object(Ln.b)(Vt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(us, {
				onOverlayClick: ms(e),
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx");
			const ps = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const fs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(fs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const vs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.TRANSFER_POINTS, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(Cs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ys = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const xs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.MULTIREDDIT_CREATE, e => m.a.createElement(xs, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Ln.b)(Vt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(xs, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Es = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Ln.b)(Vt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Es, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const js = () => Promise.all([n.e(2), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				_s = Object(Rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ae.a)(js).then(e => e.default)
				});
			Object(Ln.b)(Vt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(_s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Ss = () => null,
				Ps = Object(Rt.a)({
					ErrorComponent: Ss,
					getComponent: () => Object(ae.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ss
				});
			Object(Ln.b)(Vt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Ps, null));
			var ks = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ns = n.n(ks);
			const ws = qe.a.h2("ColumnLabel", Ns.a),
				Ms = qe.a.wrapped(cn.a, "ColumnWrapper", Ns.a),
				Is = qe.a.div("Column", Ns.a),
				As = qe.a.div("Description", Ns.a),
				Ts = qe.a.div("Key", Ns.a),
				Rs = qe.a.wrapped(Wt.l, "ModalMain", Ns.a),
				Ls = qe.a.wrapped(Wt.e, "ModalBody", Ns.a),
				Fs = qe.a.wrapped(rn.l, "PrimaryButton", Ns.a),
				Ds = qe.a.wrapped(Qt.a, "TextButton", Ns.a),
				Us = Object(Oe.b)(null, e => ({
					closeModal: () => e(Object(Tt.i)(Vt.a.KEYBOARD_SHORTCUTS))
				})),
				Bs = qe.a.wrapped(Object(Ht.a)(Us(e => m.a.createElement(Ls, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Wt.i, null, m.a.createElement(zt.a, null, m.a.createElement(Wt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Ds, {
					onClick: e.closeModal
				}, m.a.createElement(Wt.b, null)))), m.a.createElement(Rs, null, m.a.createElement(Ms, null, m.a.createElement(Is, null, m.a.createElement(cn.a, null, m.a.createElement(ws, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Ts, null, "Shift + ?")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Ts, null, "J")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Ts, null, "K")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Ts, null, "N")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Ts, null, "P")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Ts, null, "Enter")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Ts, null, "X")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Ts, null, "L"))), m.a.createElement(Is, null, m.a.createElement(cn.a, null, m.a.createElement(ws, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Ts, null, "A")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Ts, null, "Z")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Ts, null, "C")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Ts, null, "R")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Ts, null, "Ctrl + Enter")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Ts, null, "S")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Ts, null, "H")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Ts, null, "Q")), m.a.createElement(cn.a, null, m.a.createElement(As, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Ts, null, "Enter"))))), m.a.createElement(Wt.g, null, m.a.createElement(Fs, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Ns.a);
			Object(Ln.b)(Vt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Bs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Gs = Object(Rt.a)({
					getComponent: () => Object(ae.a)(() => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Hs = e => () => {
					e()
				};
			Object(Ln.b)(Vt.a.SNOOVATAR_MODAL, e => m.a.createElement(Gs, {
				onOverlayClick: Hs(e),
				withOverlay: !0
			}));
			const {
				fbt: qs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ws = Object(ee.c)({
				allowNavigationCallback: Pn.a
			}), Vs = Object(Oe.b)(Ws, e => ({
				closeModal: () => e(Object(Tt.i)(Vt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(qt.a)())
			}));
			class Qs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Wt.e, null, m.a.createElement(Wt.i, null, m.a.createElement(zt.a, null, m.a.createElement(Wt.q, null, qs._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Qt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Wt.b, null)))), m.a.createElement(Wt.l, null, m.a.createElement(Wt.p, null, qs._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Wt.g, null, m.a.createElement(Wt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, qs._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Wt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, qs._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const zs = Object(Ht.a)(Vs(Qs));
			Object(Ln.b)(Vt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(zs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Ks = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Js = Object(Rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ae.a)(Ks).then(e => e.default)
				});
			Object(Ln.b)(Vt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Zs = Object(ee.c)({
					activeModalId: $.a
				}),
				Xs = Object(Oe.b)(Zs, e => ({
					toggleModal: t => e(Object(Tt.i)(t))
				})),
				Ys = 500,
				$s = () => {};
			class eo extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Vt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(In.a)(), Ys) : setTimeout(() => Object(In.b)(), Ys)))
				}
				componentWillUnmount() {
					Object(In.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Ln.a)(e)(e ? this.toggleModal : $s)
				}
			}
			var to = Xs(eo),
				no = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				so = n("./src/reddit/actions/page.ts"),
				oo = n("./src/reddit/actions/shortcuts/utils.ts"),
				ro = n("./src/reddit/icons/fonts/index.tsx"),
				ao = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				io = n("./src/reddit/selectors/header.ts"),
				co = n("./src/reddit/selectors/userPrefs.ts"),
				lo = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				uo = n("./src/reddit/pages/CommunityHubs/constants.ts"),
				mo = n("./src/reddit/pages/CommunityHubs/CommunityHubIcon.m.less"),
				po = n.n(mo);
			var bo = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("img", {
						className: Object(je.a)(po.a.icon, t),
						src: `${uo.a}fan-communities-icon.png`
					})
				},
				ho = n("./src/reddit/components/SEOTitle/index.tsx"),
				go = n("./src/reddit/components/SubredditIcon/index.tsx"),
				fo = n("./src/reddit/components/UserIcon/index.tsx"),
				vo = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function Oo() {
				return (Oo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Co, yo = e => m.a.createElement("svg", Oo({
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
				})),
				xo = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Eo = n.n(xo);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunityHubs = "CommunityHubs", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Co || (Co = {}));
			const jo = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ho.b, {
					type: ho.a.HeaderSelector
				}, s))
			};
			var _o = n("./src/lib/objectSelector/index.ts"),
				So = n("./src/reddit/constants/wiki.ts"),
				Po = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ko = n("./src/reddit/selectors/subreddit.ts"),
				No = n("./src/reddit/selectors/topic.ts");
			var wo = Object(_o.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						o = Object(ao.c)(e),
						r = Object(ao.b)(e),
						a = Object(Pn.m)(e),
						i = Object(Dn.Z)(n);
					switch (i) {
						case "avatar":
							return {
								type: Co.Avatar
							};
						case "communityHubs":
							return {
								type: Co.CommunityHubs
							};
						case "index":
						case "listing":
							return s || o && !r || a && r ? {
								type: Co.Home
							} : {
								type: Co.Popular
							};
						case "modListing":
							return {
								type: Co.ModListing
							};
						case "modQueuePages":
							return {
								type: Co.ModQueue
							};
						case "postCreation":
							return {
								type: Co.CreatePost
							};
						case "postDraft":
							return {
								type: Co.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Co.SubredditCreation
							};
						case "coins":
							return {
								type: Co.Coins
							};
						case "internationalSitePage":
							return {
								type: Co.InternationalSite
							};
						case "happeningNow":
							return {
								type: Co.HappeningNow
							};
						case "predictions":
							return {
								type: Co.Predictions
							};
						case "premium":
							return {
								type: Co.Premium
							};
						case "acknowledgements":
							return {
								type: Co.Acknowledgements
							};
						case "appeal":
							return {
								type: Co.Appeal
							};
						case "report":
							return {
								type: Co.Report
							};
						case "userDataRequest":
							return {
								type: Co.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Co.DailyCharts
							};
						case "geotagging":
							return {
								type: Co.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Co.NotificationsInbox
							};
						case "talk":
							return {
								type: Co.Talk
							};
						case "topic": {
							const t = Object(Dn.t)(n),
								s = t && Object(No.d)(e, t);
							if (s) return {
								type: Co.Topic,
								model: s
							}
						}
					}
					const c = e.user.account;
					if (c) switch (i) {
						case "inboxPages":
							return {
								type: Co.Inbox, model: c
							};
						case "settings":
							return {
								type: Co.Settings, model: c
							}
					}
					const l = Object(Dn.T)(e, {
						pageLayer: n
					});
					if ("all" === l) return {
						type: Co.All
					};
					if ("popular" === l) return {
						type: Co.Popular
					};
					const d = Object(Dn.r)(e, {
						pageLayer: n
					});
					if (d) return "searchResults" === i ? {
						type: Co.CommunitySearch,
						model: d
					} : {
						type: Co.Community,
						model: d
					};
					const u = Object(Dn.e)(e, {
						pageLayer: n
					});
					if (u) return {
						type: Co.Multi,
						model: u
					};
					const m = Object(Dn.k)(e, {
						pageLayer: n
					});
					if (m) return {
						type: Co.UserProfile,
						model: m
					};
					const p = Object(Dn.i)(n);
					if (p) return {
						type: Co.UserProfileName,
						name: `u/${p}`
					};
					if (i && "searchResults" === i) return {
						type: Co.GlobalSearch
					};
					if ("subredditWiki" === i) {
						const t = Object(Dn.o)(e, {
								pageLayer: n
							}) || So.e,
							s = Object(ko.B)(e, {
								subredditName: t
							});
						if (s) return {
							type: Co.Community,
							model: s
						}
					}
					return "rpan" === i && Object(Po.a)(e) ? {
						type: Co.PublicAccessNetwork
					} : {
						type: Co.Unknown
					}
				}),
				Mo = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Io = n.n(Mo);

			function Ao() {
				return (Ao = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function To(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					o = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Io.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(je.a)(Io.a.text, {
								[Io.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Io.a.badge
						})),
						className: Object(je.a)(Io.a.item, e.className, {
							[Io.a.mFocused]: !!e.isFocused,
							[Io.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return o["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ao({}, o, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(no.a, Ao({}, o, {
					to: e.to
				})) : m.a.createElement("button", o)
			}
			var Ro = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Lo = n("./src/reddit/constants/localStorage.ts"),
				Fo = n("./src/reddit/hooks/useIsClient.ts"),
				Do = n("./src/reddit/hooks/useLocalStorage.ts");
			const Uo = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Bo = e => {
					let {
						className: t
					} = e;
					const n = Object(Fo.a)(),
						s = Object(Oe.e)(Pn.g),
						o = Object(Oe.e)(ao.c),
						[r, a] = Object(Do.a)(Lo.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = Uo(r.dismissed),
						l = Uo(r.throttledUntil),
						d = !n || !o || c >= 3 || o && s || i < l;
					return n && o && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + S.E
					}), d ? null : m.a.createElement(Ro.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var Go = n("./src/reddit/constants/listings.ts"),
				Ho = n("./src/reddit/helpers/overlay/index.ts"),
				qo = n("./src/reddit/routes/communityHubs/index.ts"),
				Wo = n("./src/reddit/routes/modListing/index.ts"),
				Vo = n("./src/reddit/routes/predictions/index.ts"),
				Qo = n("./src/reddit/routes/talk/index.ts"),
				zo = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ko = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				Jo = n("./src/reddit/selectors/multireddit.ts"),
				Zo = n("./src/lib/LinkedListMap/index.ts"),
				Xo = n("./src/reddit/routes/avatar/index.ts");

			function Yo() {
				return (Yo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $o = Object(ee.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Jo.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Jo.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var er;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(er || (er = {}));
			const tr = [e => ({
					id: Co.Employee,
					type: er.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(ro.a, Yo({
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
				nr = () => [e => ({
					id: Co.All,
					type: er.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				sr = () => [e => ({
					id: "reddit-feeds",
					type: er.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Co.Home,
					type: er.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
					id: Co.Popular,
					type: er.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				}), ...nr()],
				or = [e => ({
					id: "reddit-feeds",
					type: er.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Co.Home,
					type: er.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				}), ...nr()],
				rr = e => m.a.createElement(Bo, {
					className: e.className
				}),
				ar = [e => ({
					id: "reddit-feeds",
					type: er.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Co.Home,
					type: er.GenericLink,
					model: {
						url: "/",
						badge: rr,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
					id: Co.Popular,
					type: er.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				ir = [e => ({
					id: "reddit-other",
					type: er.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Co.Settings,
					type: er.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(vo.a, {
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
					id: Co.Inbox,
					type: er.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(vo.a, {
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
				cr = e => ({
					id: Co.Coins,
					type: er.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				lr = e => ({
					id: Co.Premium,
					type: er.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				dr = e => ({
					id: Co.Avatar,
					type: er.GenericLink,
					model: {
						url: Xo.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				ur = e => ({
					id: Co.Talk,
					type: er.GenericLink,
					model: {
						url: Qo.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				mr = e => ({
					id: Co.Predictions,
					type: er.GenericLink,
					model: {
						url: Vo.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
				pr = [e => ({
					id: Co.ModQueue,
					type: er.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
						id: Co.ModMail,
						type: er.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(ro.a, Yo({
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

			function br(e, t, n, o) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: er.Header,
					model: {
						displayText: s.fbt._("your communities", null, {
							hk: "BtF8C"
						}).toString()
					}
				}), n && gr(e, o), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: er.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: er.Header,
					model: {
						displayText: s.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: er.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}

			function hr(e, t, n) {
				t.recentSubreddits.length && (e.push({
					id: "header-subscriptions",
					type: er.Header,
					model: {
						displayText: s.fbt._("recent communities", null, {
							hk: "24NvFP"
						}).toString()
					}
				}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
					id: "sub" + t.id,
					type: er.Subreddit,
					model: t,
					telemetryNoun: "community"
				})), gr(e, n, !0))
			}
			const gr = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = {
						id: Co.CreateCommunity,
						telemetryNoun: "create_community"
					},
					r = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(ro.a, Yo({
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
					type: er.GenericClickable,
					model: {
						...r,
						onClick: () => {
							n ? (t(Object(Tt.k)({
								actionSource: Tt.a.HeaderSignup
							})), t(Object(Y.openRegisterModal)())) : t(Object(Tt.h)(Vt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var fr = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				vr = n.n(fr);

			function Or(e) {
				return m.a.createElement("div", {
					className: Object(je.a)(vr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var Cr = n("./src/reddit/actions/subscription/index.ts"),
				yr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				xr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Er = n.n(xr);

			function jr() {
				return (jr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _r = Object(ee.c)({
					currentUser: v.k,
					hideNSFWPref: v.F,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: ao.c
				}),
				Sr = Object(Oe.b)(_r, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case er.Subreddit:
								e(Object(Cr.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case er.Profile:
								e(Object(Cr.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case er.Multi:
								e(Object(Cr.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(yr.f)(t.model.url)) : t.sendEvent(Object(yr.c)(t.model.url))
						}
					}
				}));
			var Pr = Object(Ve.c)(Sr((function(e) {
					const t = {
						className: Object(je.a)(Er.a.item, e.className, {
							[Er.a.mFocused]: !!e.isFocused
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
						case er.Subreddit:
							return m.a.createElement(no.a, jr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(go.b, {
								className: Er.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Er.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ro.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(je.a)(Er.a.favorite, {
									[Er.a.mFavorite]: !!e.isFavorite
								})
							})));
						case er.SubredditAutocomplete:
							return m.a.createElement(no.a, jr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(go.b, {
								className: Er.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Er.a.text
							}, e.model.name));
						case er.Multi:
							return m.a.createElement(no.a, jr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Er.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Er.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ro.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(je.a)(Er.a.favorite, {
									[Er.a.mFavorite]: !!e.isFavorite
								})
							})));
						case er.Profile:
							return m.a.createElement(no.a, jr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(fo.a, {
								className: Er.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Er.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ro.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(je.a)(Er.a.favorite, {
									[Er.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				kr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Nr = n.n(kr);

			function wr(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Nr.a.header
				}), m.a.createElement("div", {
					className: Nr.a.item
				}), m.a.createElement("div", {
					className: Nr.a.item
				}), m.a.createElement("div", {
					className: Nr.a.item
				}), m.a.createElement("div", {
					className: Nr.a.item
				}))
			}
			var Mr = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Ir = n("./src/lib/sample/index.ts"),
				Ar = n("./src/reddit/actions/subreddit.ts"),
				Tr = n("./src/reddit/controls/InternalLink/index.tsx");

			function Rr() {
				return (Rr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Lr = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", Rr({
						href: s
					}, a), t) : m.a.createElement(Tr.default, Rr({
						to: s
					}, a), t)
				},
				Fr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Dr = n.n(Fr),
				Ur = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Br = n.n(Ur);
			class Gr extends m.a.Component {
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
						className: Object(je.a)(Dr.a.button, Br.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(je.a)(Dr.a.headingContent, o),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Dr.a.iconContainer
					}, r), m.a.createElement("span", {
						className: Dr.a.title
					}, l ? m.a.createElement(Lr, {
						className: Dr.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(ro.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(je.a)(Dr.a.chevronIcon, {
							[Dr.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(je.a)(Dr.a.contentContainer, Dr.a["m-collapsible"], {
							[Dr.a.isOpen]: d,
							[Dr.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var Hr = Gr,
				qr = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Wr = n("./src/reddit/constants/colors.ts");
			const Vr = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(je.a)(Dr.a.title, n)
					}, t)
				},
				Qr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(je.a)(Dr.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Vr, {
						title: s,
						titleClassName: o
					}))
				},
				zr = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(Lr, {
						className: Object(je.a)(Dr.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Vr, {
						title: o,
						titleClassName: r
					}))
				},
				Kr = e => {
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
					return m.a.createElement(Lr, {
						className: Object(je.a)(Dr.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(go.b, {
						"aria-hidden": !0,
						className: Object(je.a)(Dr.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: Wr.a.snoo
					}), m.a.createElement(Vr, {
						title: i,
						titleClassName: c
					}))
				},
				Jr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(je.a)(Dr.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Vr, {
						title: s,
						titleClassName: o
					}), m.a.createElement(qr.a, {
						className: Dr.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Zr = [{
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
				Xr = n("./src/reddit/helpers/trackers/navigation.ts"),
				Yr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				$r = n.n(Yr);
			const ea = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [o, r] = Object(u.useState)(null), a = e => () => {
					r(o === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Zr.map((e, r) => ((e, t, n, s, o) => {
					let {
						link: r,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(Hr, {
						buttonClassName: o ? $r.a.navButtonOverride : "",
						className: $r.a.collapsibleContainer,
						icon: s && r.icon && m.a.createElement(ro.a, {
							name: r.icon
						}),
						isOpen: i,
						key: r.url,
						onClick: (e, t) => {
							r.noun && n(Object(Xr.c)(r.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: r.title,
						url: r.url
					}, a.map(e => m.a.createElement(zr, {
						className: o ? $r.a.navBasicLink : $r.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Xr.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: o === e
				}))(r), t, n, s)))
			};
			var ta = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o
					} = e;
					return m.a.createElement(Hr, {
						icon: m.a.createElement(ro.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							o(Object(Xr.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(ea, {
						sendEvent: o
					})))
				},
				na = n("./src/reddit/constants/keycodes.ts"),
				sa = n("./src/reddit/helpers/correlationIdTracker.ts"),
				oa = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				ra = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				aa = n("./src/reddit/helpers/trackers/postComposer.ts"),
				ia = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				ca = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				la = n.n(ca);

			function da() {
				return (da = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ua(e) {
				return e.id === Co.ModMail || e.id === Co.CreateCommunity
			}

			function ma(e) {
				const t = new Zo.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== er.Header && e.type !== er.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const pa = Object(ee.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Ir.a)(e, {
						rate: 14
					}),
					isLoggedOutOneFeed: ao.c,
					unfilteredListBuilder: e => t => {
						const n = $o(e),
							o = new Zo.a("id"),
							r = Object(ao.c)(e),
							a = Object(v.pb)(e),
							i = Object(ao.d)(e),
							c = Object(Pn.d)(e),
							l = Object(ao.f)(e),
							d = Object(ao.a)(e),
							u = [],
							p = (e => Object(zo.s)(e) ? [lr, cr, dr, ur, mr] : [cr, lr, dr, ur, mr])(e),
							b = "popular" === c,
							h = [() => ({
								id: "reddit-feeds",
								type: er.Header,
								model: {
									displayText: s.fbt._("Feeds", null, {
										hk: "4zvMfr"
									}).toString()
								}
							}), () => ({
								id: b ? Co.Popular : Co.Home,
								type: er.GenericLink,
								model: {
									url: b ? "/r/popular/" : "/",
									displayText: s.fbt._("Popular", null, {
										hk: "1op8tD"
									}).toString(),
									icon: e => m.a.createElement(ro.a, Yo({
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
								type: er.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => o.push({
								id: "fav" + e.id,
								type: er.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => o.push({
								id: "fav" + e.id,
								type: er.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => o.push({
								id: "fav" + e.url,
								type: er.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && o.push({
								id: "multis-pending",
								type: er.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? o.push({
								id: "moderatingSubreddits-pending",
								type: er.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (o.push({
								id: "header-moderating",
								type: er.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), r.isMod && pr.forEach(e => o.push(e(r))), o.push({
								id: Co.ModListing,
								type: er.GenericLink,
								model: {
									url: Wo.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(ro.a, Yo({
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
								type: er.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: er.Header,
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
													n(Object(Tt.h)(Vt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(je.a)(t, Eo.a.multiPlusButton)
											}, m.a.createElement(ro.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: er.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(o, n, t), n.subscriptionsPending ? o.push({
								id: "subscriptions-pending",
								type: er.LoadingState,
								model: {
									displayText: ""
								}
							}) : br(o, n, a, t), ((e, t, n, o) => (sr().forEach(e => t.push(e(n))), n.isEmployee && tr.forEach(e => t.push(e(n))), Object(Ko.a)(e) ? t.push({
								id: Co.HappeningNow,
								type: er.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(yo, {
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
							}) : Object(Po.a)(e) && t.push({
								id: Co.PublicAccessNetwork,
								type: er.GenericClickable,
								model: {
									onClick: () => {
										o(Object(Ho.a)(Go.c[Go.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(ro.a, Yo({
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
							}), t))(e, o, r, t), ir.forEach(e => o.push(e(r))), o.push((() => ({
								id: Co.CreatePost,
								type: er.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(ro.a, Yo({
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
								id: Co.DailyCharts,
								type: er.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(ro.a, Yo({
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
								id: Co.NotificationsInbox,
								type: er.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(ro.a, Yo({
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
								id: Co.CommunityHubs,
								type: er.GenericLink,
								model: {
									url: qo.a,
									displayText: s.fbt._("Community Hubs", null, {
										hk: "PDnbC"
									}).toString(),
									icon: () => m.a.createElement(bo, null),
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
						} else n.subscriptions.length || Object(v.Q)(e) ? sr().forEach(e => o.push(e(null))) : r ? (i ? h.forEach(e => e && o.push(e(null))) : ar.forEach(e => e && o.push(e(null))), d ? (n.recentSubreddits = n.recentSubreddits.filter(e => !e.isNSFW), hr(o, n, t)) : l || hr(o, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: er.Header,
								model: {
									displayText: s.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: er.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(o)) : or.forEach(e => o.push(e(null))), r || (o.push({
							id: "reddit-other",
							type: er.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), g.forEach(e => o.push(e(null))), br(o, n, a, t));
						return o
					}
				}),
				ba = e => ({
					onHomeClicked: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(Cr.e)()), e(Object(Ar.q)()), e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				ha = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class ga extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = ma(n),
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
						if (e.key === na.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === na.b.Tab && this.props.onClose && this.props.onClose(), e.key === na.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== er.Header && e.type !== er.ExploreMenu && e.type !== er.LoadingState && (this.fireTelemetryForListItem(e), e.type === er.GenericClickable ? e.model.onClick() : ua(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === na.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === na.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case Co.Coins:
							case Co.Premium:
								Object(sa.d)(sa.a.GoldPayment, !0), t = Object(sa.c)(sa.a.GoldPayment)
						}
						switch (e.type) {
							case er.Category:
							case er.GenericLink:
							case er.GenericClickable:
							case er.Multi:
							case er.Profile:
							case er.Subreddit:
								this.props.sendEvent(n => ({
									...Object(pn.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === er.Multi ? Object(pn.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								})), e.id === Co.HappeningNow && this.props.sendEvent(Object(ra.b)(ra.a.Dropdown));
								break;
							case er.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(pn.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case er.CreatePost:
								this.props.sendEvent(Object(aa.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: ma(e.unfilteredList),
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
					"complete" === document.readyState ? o() : window.addEventListener("load", o), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), n && t && Object(oa.b)(s ? ia.c.LeftRail : ia.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = ma(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Zo.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case er.Category:
								case er.GenericLink:
								case er.Multi:
								case er.Profile:
								case er.Subreddit:
								case er.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case er.Header: {
									const t = n.last();
									t && t.type === er.Header && n.pop(), n.push(e);
									break
								}
								case er.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === er.Header && n.pop(), n
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
						className: la.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Co.Home && this.props.onHomeClicked(), e.type === er.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case er.GenericClickable:
								return m.a.createElement(To, da({}, n, {
									className: la.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case er.Category:
							case er.GenericLink:
							case er.CreatePost:
								return m.a.createElement(To, da({}, n, {
									externalLink: ua(e),
									className: la.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case er.Header: {
								const n = e.model.button;
								return m.a.createElement(Or, {
									className: la.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: la.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case er.LoadingState:
								return m.a.createElement(wr, {
									className: la.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case er.Multi:
								return m.a.createElement(Pr, da({}, n, {
									className: la.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: er.Multi
								}));
							case er.Profile:
								return m.a.createElement(Pr, da({}, n, {
									className: la.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: er.Profile
								}));
							case er.Subreddit:
								return m.a.createElement(Pr, da({}, n, {
									className: la.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: er.Subreddit
								}));
							case er.ExploreMenu:
								return m.a.createElement(ea, da({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const fa = Object(Oe.b)(pa, ba, ha)(Object(Ve.c)(ga)),
				va = Object(Oe.b)(pa, ba, ha)(Object(Ve.c)(Object(Mr.b)(ga))),
				Oa = Object(Dn.u)({
					pageLayer: e => e
				}),
				Ca = Object(ee.c)({
					currentPage: wo,
					hideNSFWPref: v.F,
					isDropdownOpen: io.a,
					isLoggedOutUiOnly: ao.d,
					isOverlayOpen: Pn.i,
					isPinnedSubscriptionsMenuDisabled: co.b,
					isSubscriptionsPinned: co.c
				});
			class ya extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(oo.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(pn.o)(e),
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
							type: a && t.type === Co.Home ? Co.Popular : t.type
						};
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(je.a)(Eo.a.container, n, {
								[Eo.a.mOpen]: i,
								[Eo.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Eo.a.mPinned]: this.props.isSubscriptionsPinned,
								[Eo.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Eo.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Eo.a.containerText
						}, function(e) {
							switch (e.type) {
								case Co.Acknowledgements:
									return jo(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Co.All:
									return jo(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Co.Appeal:
									return jo(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Co.Avatar:
									return jo(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Co.Coins:
									return jo(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Co.Community:
									return jo(e.model.displayText, !0);
								case Co.CommunityHubs:
									return jo(s.fbt._("Community Hubs", null, {
										hk: "jl2El"
									}).toString());
								case Co.CommunitySearch:
									return jo(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Co.CreateCommunity:
									return jo(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Co.CreatePost:
									return jo(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Co.DailyCharts:
									return jo(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Co.GlobalSearch:
									return jo(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Co.Geotagging:
									return jo(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Co.HappeningNow:
									return jo(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case Co.Home:
									return jo(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Co.Inbox:
									return jo(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Co.ModListing:
									return jo("r/Mod");
								case Co.ModMail:
									return jo(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Co.ModQueue:
									return jo(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Co.Multi:
									return jo(e.model.displayText, !0);
								case Co.NotificationsInbox:
									return jo(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Co.InternationalSite:
								case Co.Popular:
									return jo(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Co.Predictions:
									return jo(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Co.Premium:
									return jo(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Co.PublicAccessNetwork:
									return jo(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Co.Report:
									return jo(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Co.Settings:
									return jo(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Co.SubredditCreation:
									return jo(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Co.Talk:
									return jo(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Co.Topic:
									return jo(e.model);
								case Co.Unknown:
									return jo("");
								case Co.UserDataRequest:
									return jo(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Co.UserProfile:
									return jo(e.model.displayText, !0);
								case Co.UserProfileName:
									return jo(e.name, !0);
								case Co.ViewDraft:
									return jo(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(l)), function(e, t) {
							const n = e => m.a.createElement(ro.a, {
								name: e,
								isFilled: !0,
								className: Eo.a.defaultIcon
							});
							switch (e.type) {
								case Co.All:
									return n("all");
								case Co.Acknowledgements:
								case Co.Appeal:
									return n("edit");
								case Co.Avatar:
									return n("avatar_style");
								case Co.Coins:
									return n("coins");
								case Co.Community:
								case Co.CommunitySearch: {
									const n = Object(lo.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(go.b, {
										className: Eo.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Co.CommunityHubs:
									return m.a.createElement(bo, {
										className: Eo.a.icon
									});
								case Co.CreateCommunity:
								case Co.CreatePost:
									return n("add");
								case Co.DailyCharts:
									return n("list_numbered");
								case Co.Geotagging:
									return n("custom_feed");
								case Co.GlobalSearch:
									return n("search");
								case Co.HappeningNow:
									return m.a.createElement(yo, {
										className: Eo.a.happeningNowIcon
									});
								case Co.Home:
									return n("home");
								case Co.Inbox:
									return m.a.createElement(vo.a, {
										wrapperClassName: Eo.a.userIcon
									});
								case Co.ModListing:
									return n("mod_queue");
								case Co.ModMail:
									return n("mod_mail");
								case Co.ModQueue:
									return n("mod_queue");
								case Co.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Eo.a.customFeedIcon
									});
								case Co.NotificationsInbox:
									return n("notification");
								case Co.InternationalSite:
								case Co.Popular:
									return n("popular");
								case Co.Predictions:
									return n("prediction");
								case Co.Premium:
									return n("premium");
								case Co.PublicAccessNetwork:
									return n("video_live");
								case Co.Report:
									return n("report");
								case Co.Settings:
									return m.a.createElement(vo.a, {
										wrapperClassName: Eo.a.userIcon
									});
								case Co.SubredditCreation:
									return n("add");
								case Co.Talk:
									return n("live");
								case Co.Topic:
									return n("custom_feed");
								case Co.Unknown:
									return m.a.createElement("div", {
										className: Eo.a.unknownIcon
									});
								case Co.UserDataRequest:
									return n("add");
								case Co.UserProfile: {
									const n = Object(lo.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(fo.a, {
										className: Eo.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Co.UserProfileName:
									return m.a.createElement("div", {
										className: Eo.a.defaultIcon
									});
								case Co.Unknown:
									return m.a.createElement("div", {
										className: Eo.a.unknownIcon
									});
								case Co.UserProfile: {
									const n = Object(lo.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(fo.a, {
										className: Eo.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Co.ViewDraft:
									return n("edit")
							}
						}(l, o), !this.props.isSubscriptionsPinned && m.a.createElement(ro.a, {
							name: "caret_down",
							className: Eo.a.caretDown
						})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(ro.a, {
							name: "side_menu",
							className: Eo.a.pin,
							onClick: c ? void 0 : this.props.onPinSubscriptions
						}), i && m.a.createElement(va, {
							canAutofocus: !0,
							className: Object(je.a)(Eo.a.listContainer, Eo.a.paddingBottom),
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
					return m.a.createElement(Me.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var xa = Oa(Object(Oe.b)(Ca, (e, t) => ({
					closeDropdown: () => e(Object(De.f)()),
					onLocationRefresh: (n, s) => e(Object(so.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(De.i)()), e(Object(De.f)())
					},
					openDropdown: () => e(Object(De.g)()),
					toggleDropdown: () => e(Object(De.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Ve.c)(ya))),
				Ea = n("./src/reddit/components/JumpToContent/index.tsx"),
				ja = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				_a = n("./node_modules/lodash/isEmpty.js"),
				Sa = n.n(_a),
				Pa = n("./node_modules/lodash/pick.js"),
				ka = n.n(Pa),
				Na = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				wa = n("./src/lib/hooks/usePrevious.ts"),
				Ma = n("./src/lib/makeSearchKey/index.ts"),
				Ia = n("./src/reddit/actions/search.ts"),
				Aa = n("./src/lib/makeGqlRequest/index.ts"),
				Ta = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Ra = n("./src/telemetry/models/App.ts");
			var La = n("./src/reddit/helpers/name/index.ts"),
				Fa = n("./src/reddit/models/Search/index.ts");
			var Da = n("./src/reddit/helpers/search/SearchTelemetrySource.ts");
			const Ua = e => async (t, n, s) => {
				let {
					gqlContext: o
				} = s;
				const r = n(),
					a = pn.db(r, Da.a.Typeahead),
					i = Object(v.kb)(r),
					c = ((e, t) => {
						var n, s;
						const o = [],
							r = {};
						return null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var n, s, a, i, c;
							const l = e;
							let d, u, m, p, b, h;
							o.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(La.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(La.c)(l.name));
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
								section: Fa.c.typeahead,
								type: Fa.b.subredditOrProfile
							};
							r[l.id] = g
						}), {
							order: o,
							typeaheads: r
						}
					})((await (async (e, t, n, s) => {
						const o = {
							productSurface: Ra.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(Aa.a)(e, {
							...Ta,
							variables: o
						}, {
							traceRequestName: "search_typeahead"
						})
					})(o(), e, a, i)).body, e);
				(null == c ? void 0 : c.typeaheads) && (null == c ? void 0 : c.order) && t(Object(Ia.p)({
					typeaheadSuggestions: c.typeaheads,
					order: c.order,
					searchQuery: e
				}))
			};
			var Ba = n("./src/reddit/actions/search/trending.ts"),
				Ga = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Ha = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				qa = n("./src/reddit/constants/parameters.ts"),
				Wa = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Va = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Qa = n("./src/reddit/helpers/isArrayEqual.ts"),
				za = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ka = n("./src/reddit/helpers/trackers/screenview.ts"),
				Ja = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Za = n("./src/reddit/hooks/usePageLayer.ts"),
				Xa = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				Ya = n("./src/reddit/selectors/searchFix.ts"),
				$a = n("./src/reddit/selectors/searchResults.ts"),
				ei = n("./src/reddit/selectors/trending.ts"),
				ti = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ni = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				si = n("./src/reddit/controls/Search/index.m.less"),
				oi = n.n(si),
				ri = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				ai = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const ii = /r\/([0-9a-zA-Z]*)\s/gi;

			function ci(e) {
				let {
					className: t
				} = e;
				var n, s;
				const o = Object(Za.a)(),
					r = Object(Dn.ab)(o),
					a = Object(Dn.X)(o),
					{
						nsfwSessionSetting: i
					} = Object(Ha.b)(),
					[l, d] = Object(u.useState)(-1),
					[b, h] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[y, x] = Object(u.useState)([]),
					[E, j] = Object(u.useState)(null),
					[_, P] = Object(u.useState)(),
					k = Object(u.useRef)(null),
					N = Object(u.useRef)(null),
					w = Object(Ve.b)(),
					M = Object(Oe.d)(),
					I = Object(Oe.e)(Pn.b),
					A = Object(Oe.e)(Pn.d),
					T = Object(Oe.e)(v.k),
					R = Object(Oe.e)($a.s),
					L = Object(Oe.e)($a.r),
					F = Object(Oe.e)(v.Q),
					D = Object(Oe.e)(v.db),
					U = Object(Oe.e)(Pn.r),
					B = Object(Oe.e)(e => Object(Dn.r)(e, {
						pageLayer: o
					})),
					G = Object(Oe.e)(e => Object(Dn.e)(e, {
						pageLayer: o
					})),
					H = Object(Oe.e)($a.j),
					q = Object(Oe.e)(e => Object(ko.B)(e, {
						subredditName: _ ? _.title.replace("r/", "") : ""
					})),
					{
						isActive: W,
						isBucketed: V,
						experimentState: Q
					} = Object(Oe.e)(Xa.a),
					z = Object(Oe.e)(e => Object(ei.a)(e, Fa.d.dropdown).slice(0, Ga.d)),
					K = Object(Oe.e)($a.E),
					J = Object(Oe.e)(v.kb),
					Z = Object(wa.a)(B) || null,
					X = Object(wa.a)(G) || null,
					Y = Object(wa.a)(_),
					$ = Object(wa.a)(r),
					ee = Object(wa.a)(K),
					te = Object(wa.a)(z),
					ne = ((null === (n = N.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					se = Pe(ne),
					oe = I ? Object(pn.v)(I) : o ? Object(pn.v)(o) : void 0,
					re = O[ne],
					ae = Object(Ma.e)({
						...ka()(a || {}, qa.C),
						q: ne
					});
				Object(u.useEffect)(() => {
					ie()
				}, [te, ee, K, z]), Object(u.useEffect)(() => {
					Z !== B ? de({
						type: S.dc.Subreddit,
						enabled: !!B,
						payload: B
					}) : X !== G ? de({
						enabled: !!G,
						type: S.dc.Multireddit,
						payload: G
					}) : _ !== Y && de({
						enabled: !!_,
						type: S.dc.SyntaxScoped,
						payload: _
					})
				}, [_, G, B, Y, X, Z]), Object(u.useEffect)(() => {
					H.enabled && H.type === S.dc.SyntaxScoped && q && de({
						enabled: !0,
						type: S.dc.Subreddit,
						payload: q
					})
				}, [q, H]), Object(u.useEffect)(() => {
					Sa()(K) || r ? fe(r || "") : ge()
				}, [$, r]);
				const ie = () => {
						const e = Object(Qa.a)(ee, K),
							t = Object(Qa.a)(te, z);
						if (!e || !t) {
							const e = K.length ? K : [...y, ...z];
							h(e)
						}
					},
					ce = e => M(Object(Ia.q)({
						searchQuery: e
					})),
					le = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && ni.a.clear(Da.a.Typeahead), M(Object(Ia.l)())
					},
					de = e => M(Object(Ia.o)(e)),
					ue = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							M(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: U,
							subredditName: A
						})
					},
					pe = async () => {
						z.length || g || (f(!0), await (() => M(Object(Ba.b)(Fa.d.dropdown)))(), f(!1))
					}, be = e => {
						F && T && x(Object(Mn.Ob)({
							...e,
							section: Fa.c.recent
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
						d(-1), j(null), fe(""), ce(""), e && ni.a.update(Da.a.Typeahead), _e()
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
						w(Object(Ja.z)(s, r, o))
					},
					Ce = (e, t, n) => {
						w(Object(Ja.B)(e, t, n))
					},
					ye = (e, t, n, s, o) => {
						w(Object(Ja.D)(e, t, n, s, o))
					},
					xe = () => {
						w(e => Object(Ja.h)(e, ae, B)), (() => M(Object(Ia.k)()))(), ni.a.update(Da.a.Typeahead)
					},
					Ee = e => {
						const t = b[e] || null,
							n = t ? t.searchQuery : "";
						d(e), fe(n), j(t)
					},
					_e = () => {
						if (z.length || pe(), T) {
							const e = Object(Mn.M)(T.id);
							e.length > 0 && (x(F ? e : []), h([...e, ...z]))
						}
					},
					Se = e => {
						!(!L || !L[e]) || (e ? (e => {
							O[e] || (O[e] = !0, C({
								...O
							}), M(Ua(e)), O[e] = !1, C({
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
						id: Object(Na.a)(),
						searchQuery: e,
						type: Fa.b.text,
						section: Fa.c.recent,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(je.a)(oi.a.relativeWrapper, Eo.a.container, t, {
						"m-open": R
					}),
					id: Ga.b,
					ref: k
				}, m.a.createElement(ri.b, {
					inputRef: N,
					isOpen: R,
					onChange: e => {
						const t = e.trim(),
							n = ii.exec(e);
						ni.a.update(Da.a.Typeahead), n && he(n[0].trim(), t) || (ce(t), Se(t))
					},
					searchQuery: ne,
					onFormSubmit: e => {
						e.preventDefault(), ne.trim() && (async e => {
							var t, n, s;
							const r = (null === (t = N.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							r !== ne && ce(r);
							let a, c = {
									...Fa.a
								},
								d = {},
								u = !0;
							if (E && E.searchQuery === ne ? ((c = E).id || (c.id = Object(Na.a)()), c.section === Fa.c.recent ? (d = Object(Wa.c)(Wa.a.SEARCH_DROPDOWN, oe, c.isProfile || c.isSubreddit), a = Ma.a.Recent, Ce(r, c, l)) : c.section === Fa.c.typeahead ? (d = Object(Wa.c)(Wa.a.TYPEAHEAD, oe), u = !1, ye(r, c, l, l, b.filter(e => e.isSubreddit))) : c.section === Fa.c.trending ? (d = Object(Wa.c)(Wa.a.TYPEAHEAD, oe), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? Ma.a.PromotedTrend : Ma.a.Trending, M((e, t) => Object(za.u)({
									state: t(),
									trendingSearch: c,
									telemetrySource: Da.a.Typeahead
								}))) : ve(r, r, pn.c.Search, Ja.a.RECENT)) : (c = Pe(r), w(Object(Ja.p)(pn.a.FullSearchButton, Object(Ma.e)({
									q: ne
								}), Da.a.Typeahead, o || void 0))), be(c), le(u), !c.searchQuery) return;
							let m = {
								source: a
							};
							V && ae.type.length && (Object(ti.d)(Q, {
								experimentName: Fn.Jc
							}), W && (m = {
								...ae,
								source: a
							}));
							const p = Object(Va.a)({
								searchItem: c,
								searchOptions: m,
								activeSearchScope: H,
								includeNsfwResults: J && i
							});
							ue(e, p, d), c.isTypeaheadSuggestion && ge(u), null === (s = N.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(sa.c)(sa.a.SearchResults) || Object(sa.d)(sa.a.SearchResults), ni.a.update(Da.a.Typeahead), w(Object(Ja.p)(pn.a.SearchBar, ae, Da.a.Typeahead, o || void 0)), R || ((() => M(Object(Ia.m)()))(), w(Object(Ka.u)(ae, null != o ? o : void 0, Object(Ya.b)({
							pageLayer: o
						})))), Se(ne)
					},
					onKeyDown: e => {
						if (e.key === na.b.Escape || e.key === na.b.Tab) le();
						else if (e.key === na.b.ArrowDown) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (l >= b.length - 1) return;
							Ee(l + 1)
						} else if (e.key === na.b.ArrowUp) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (-1 === l) return;
							Ee(l - 1)
						} else e.key === na.b.Backspace && !ne && H.enabled && xe()
					},
					onClearSearchQuery: ge,
					onClickDismissSearchScopePill: xe,
					showSearchScopePill: H.enabled,
					searchScopePill: Object(ai.c)(H)
				}), m.a.createElement(Ga.c, {
					containerWidth: null === (s = k.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: l,
					searchOriginPage: oe,
					isOpen: R,
					isTrendingPending: g,
					isTypeaheadPending: re,
					itemList: b,
					nightmode: D,
					recentSearches: y,
					trendingItems: z,
					searchItem: se,
					typeaheadSuggestions: K,
					onClearSearchQuery: ge,
					onClose: le,
					onRemoveRecentSearch: e => {
						T && 0 !== y.length && (Object(Mn.ab)(e, T.id), x(y.filter(t => t.searchQuery !== e.searchQuery)), d(-1))
					},
					onSendSearchClickRecentEvent: Ce,
					onSendSearchClickTypeaheadEvent: ye,
					onSetRecentSearch: be,
					onUpdateSearchQuery: fe,
					fireAdPixelsOfType: (e, t) => M(Object(me.y)(e, t))
				}))
			}
			var li = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				di = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ui = n("./src/reddit/selectors/responsivePage.ts"),
				mi = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				pi = n.n(mi);
			var bi, hi = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(je.a)(pi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: pi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(li.a, {
						className: pi.a.Snoo
					}), m.a.createElement(di.a, {
						className: pi.a.Wordmark,
						color: "inherit"
					})))
				},
				gi = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				fi = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				vi = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Oi = n("./src/reddit/hooks/useTracking.ts"),
				Ci = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				yi = n.n(Ci),
				xi = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Ei = n.n(xi);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(bi || (bi = {}));
			var ji = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: o
					} = e, r = Object(Oi.a)(), a = Object(vi.a)(), [i, c] = Object(u.useState)(bi.Hidden), l = Object(u.useCallback)(() => {
						Object(Mn.Ib)({
							clicked: !0
						}), r(e => ({
							...Object(pn.o)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [r, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Mn.G)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Mn.Ib)({
							views: e.views + 1
						}), c(bi.Visible)) : e.clicked && c(bi.Visible) : c(bi.Hidden) : (Object(Mn.Ib)({
							views: 1
						}), c(bi.Visible))
					}, []), i === bi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: `${yi.a.icon} ${Ei.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: Ei.a.navIcon,
						src: n
					})), m.a.createElement(fi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				},
				_i = n("./src/lib/constants/colors.ts"),
				Si = n("./src/reddit/actions/happeningNow/index.ts"),
				Pi = n("./src/reddit/selectors/features/happeningNow/index.ts");
			var ki = () => {
					const e = Object(Oe.d)(),
						t = Object(Oi.a)(),
						n = Object(Oe.e)(Pi.e),
						o = Object(Oe.e)(Pi.f),
						r = Object(u.useCallback)(() => e(Object(Si.a)()), [e]),
						a = Object(vi.a)(),
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
										borderBottom: `3px solid ${_i.a.alien600}`
									}
								},
								popperProps: {
									...e.popperProps,
									style: {
										...e.popperProps.style,
										background: _i.a.alien600,
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
							t(Object(ra.b)(ra.a.TopNav)), r()
						}, [t, r]);
					return Object(u.useEffect)(() => {
						e(Object(Si.b)())
					}, [e]), m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: Object(je.a)(yi.a.icon, yi.a.happeningNowLink),
						innerRef: i.target.ref,
						to: Go.c[Go.b.HappeningNow],
						onClick: c,
						onMouseEnter: i.show,
						onMouseLeave: i.hide
					}, m.a.createElement(yo, {
						className: yi.a.customIcon
					}), n && m.a.createElement("div", {
						className: yi.a.liveContentAvailabilityBadge
					})), m.a.createElement(fi.a, {
						arrowProps: i.arrowProps,
						popperProps: i.popperProps,
						visible: i.visible
					}, o ? s.fbt._("Find live chats, talks, and video streams happening now", null, {
						hk: "HZRQf"
					}) : s.fbt._("Happening Now", null, {
						hk: "qEee0"
					})))
				},
				Ni = n("./src/reddit/actions/cooldownTime.ts");

			function wi(e) {
				return `${e}`.padStart(2, "0")
			}
			class Mi {
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
			var Ii = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Ai = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Ti = n.n(Ai);
			const Ri = Object(ee.c)({
				isEmbedSubredditPage: Ii.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: Pn.b
			});
			class Li extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${wi(n)}` : `${n}:${wi(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Mi(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(Ro.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Ti.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Fi = Object(Oe.b)(Ri, e => ({
					fetchCooldownTimer: () => e(Object(Ni.e)())
				}))(Li),
				Di = n("./src/reddit/helpers/trackers/hotPotato.ts");
			var Ui = e => m.a.createElement("svg", {
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
			var Bi = e => m.a.createElement("svg", {
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
				Gi = n("./src/reddit/selectors/avatarMarketing.ts"),
				Hi = n("./src/lib/initializeClient/installReducer.ts"),
				qi = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Hi.a)({
				features: {
					avatar: qi.a
				}
			});
			const Wi = e => 864e5 * e,
				Vi = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Qi = e => {
					if (zi(e)) return !0;
					const t = Vi(e),
						n = (new Date).getTime(),
						s = Object(Mn.x)();
					if (!(null == t ? void 0 : t.active) || !Ki(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + Wi(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				zi = e => {
					const t = Object(Pn.q)(e);
					return Boolean((null == t ? void 0 : t[qa.E]) && Object(R.a)(t[qa.E]))
				},
				Ki = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(v.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Ji(e, t) && n === o
				},
				Ji = (e, t) => {
					const n = Object(v.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Wi(t)
				};
			var Zi = n("./src/reddit/selectors/experiments/d2xTopNavRevamp.ts");
			const Xi = e => {
					return Object(ti.c)(e, {
						experimentEligibilitySelector: ti.a,
						experimentName: Fn.Db
					}) === Fn.Rd
				},
				Yi = e => {
					return Object(ti.c)(e, {
						experimentEligibilitySelector: ti.a,
						experimentName: Fn.lf
					}) === Fn.Rd
				};
			var $i = m.a.memo((function(e) {
					const t = Object(Oi.a)(),
						n = Object(Oe.d)(),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(pn.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(pn.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Ho.a)(Go.c[Go.b.Rpan])), t(e => ({
								...Object(pn.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Di.a)())
						}, [t]),
						c = Object(Oe.e)(v.Q),
						l = Object(Oe.e)(Xi),
						d = Object(Oe.e)(Po.a),
						p = Object(Oe.e)(Yi),
						b = Object(Oe.e)(Ii.a),
						h = Object(Oe.e)(Ii.b),
						g = Object(Oe.e)(Zi.a),
						f = Object(Oe.e)(zo.c),
						O = Object(Oe.e)(Qi),
						C = Object(Oe.e)(zo.d),
						y = Object(Oe.e)(Ko.a),
						x = Object(Oe.e)(Gi.a),
						E = Object(vi.a)(),
						j = Object(vi.a)(),
						_ = Object(vi.a)(),
						S = Object(vi.a)(),
						P = Object(vi.a)(),
						k = Object(vi.a)(),
						N = f && O,
						w = C && !!x,
						M = g === Fn.ed.RepositionCoinNoLiveNoAll,
						I = M && (!(N || w) || e.isAvatarButtonClicked);
					return m.a.createElement("div", {
						className: Object(je.a)(yi.a.container, e.className, {
							[yi.a.containerWithoutCoin]: !I && M
						})
					}, m.a.createElement("div", {
						className: yi.a.row
					}, m.a.createElement(no.a, {
						className: yi.a.icon,
						innerRef: E.target.ref,
						to: c ? Go.c[Go.b.Popular] : Go.c[Go.b.Home],
						onClick: o,
						onMouseEnter: E.show,
						onMouseLeave: E.hide
					}, m.a.createElement(ro.a, {
						name: "popular"
					})), m.a.createElement(fi.a, {
						arrowProps: E.arrowProps,
						popperProps: E.popperProps,
						visible: E.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), I && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						ref: k.target.ref,
						onMouseEnter: k.show,
						onMouseLeave: k.hide,
						className: yi.a.icon
					}, m.a.createElement(gi.a, null)), m.a.createElement(fi.a, {
						arrowProps: k.arrowProps,
						popperProps: k.popperProps,
						visible: k.visible
					}, s.fbt._("Coin", null, {
						hk: "zOcNq"
					}))), !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: yi.a.icon,
						innerRef: j.target.ref,
						to: Go.c[Go.b.All],
						onClick: r,
						onMouseEnter: j.show,
						onMouseLeave: j.hide
					}, m.a.createElement(ro.a, {
						name: "all"
					})), m.a.createElement(fi.a, {
						arrowProps: j.arrowProps,
						popperProps: j.popperProps,
						visible: j.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), y ? m.a.createElement(ki, null) : d && !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: yi.a.icon,
						innerRef: _.target.ref,
						to: Go.c[Go.b.Rpan],
						onClick: a,
						onMouseEnter: _.show,
						onMouseLeave: _.hide
					}, m.a.createElement(ro.a, {
						name: "video_live"
					})), m.a.createElement(fi.a, {
						arrowProps: _.arrowProps,
						popperProps: _.popperProps,
						visible: _.visible
					}, s.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), p && m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: yi.a.icon,
						innerRef: S.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: S.show,
						onMouseLeave: S.hide
					}, m.a.createElement(Bi, {
						className: yi.a.psBattlesIcon
					})), m.a.createElement(fi.a, {
						arrowProps: S.arrowProps,
						popperProps: S.popperProps,
						visible: S.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(no.a, {
						className: Object(je.a)(yi.a.icon, yi.a.hotPotatoLink),
						innerRef: P.target.ref,
						to: `/r/${h}`,
						onMouseEnter: P.show,
						onMouseLeave: P.hide,
						onClick: i
					}, m.a.createElement(Ui, {
						className: yi.a.hotPotatoIcon
					}), m.a.createElement(Fi, null)), m.a.createElement(fi.a, {
						arrowProps: P.arrowProps,
						popperProps: P.popperProps,
						visible: P.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), l && m.a.createElement(ji, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				ec = n("./src/reddit/actions/tooltip.ts"),
				tc = n("./src/lib/combineRefs/index.tsx"),
				nc = n("./src/lib/hooks/useOnClickOutside.ts"),
				sc = n("./src/lib/hooks/useTooltip.ts"),
				oc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				rc = n.n(oc);

			function ac() {
				return (ac = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ic = qe.a.button("Button", rc.a),
				cc = qe.a.div("Container", rc.a);

			function lc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(ic, ac({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(cc, {
					className: Object(je.a)({
						[rc.a.isOpen]: n
					})
				}, t))
			}
			var dc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				uc = n.n(dc);
			var mc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ro.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(ro.a, {
					name: "notification",
					className: uc.a.icon2020
				})),
				pc = n("./src/reddit/components/InboxBanner/index.m.less"),
				bc = n.n(pc);
			var hc = Object(Ht.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(N.b)(navigator.userAgent);
					return m.a.createElement(Wt.e, null, m.a.createElement(Wt.i, {
						className: bc.a.modalHeader
					}, m.a.createElement(Wt.q, {
						className: bc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(rn.t, {
						onClick: t,
						Icon: Object(ro.b)("close_fill"),
						size: rn.d.XXS,
						priority: rn.c.Plain,
						className: bc.a.modalCloseIcon
					})), m.a.createElement(Wt.l, null, m.a.createElement("ul", {
						className: bc.a.modalList
					}, m.a.createElement("li", {
						className: bc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(ro.a, {
						name: "lock_fill",
						className: bc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: bc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(ro.a, {
						name: "settings_fill",
						className: bc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: bc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(ro.a, {
						name: "notification_fill",
						className: bc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Wt.g, null, m.a.createElement(rn.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				gc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				fc = n.n(gc);

			function vc() {
				return (vc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Oc = m.a.memo((function(e) {
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
					}, [t]), t ? m.a.createElement("div", vc({
						id: "INBOX--TOOLTIP",
						className: Object(je.a)(fc.a.tooltip, {
							[fc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Cc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				yc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				xc = n("./node_modules/icepick/icepick.js");
			const Ec = Object(xc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var jc = n("./src/reddit/selectors/activeModal.ts"),
				_c = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Sc = n.n(_c);
			const Pc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				kc = m.a.memo((function(e) {
					const t = Object(Oe.d)(),
						n = Object(vi.a)(),
						o = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(sc.a)(e);
								return Object(xc.updateIn)(t, ["modifiers"], e => Object(xc.push)(e, Ec))
							}, [e]);
							return Object(sc.b)(t)
						}(),
						r = Object(sc.b)(Pc),
						[a, i] = Object(yc.a)(e.userId),
						c = Object(Oe.e)(Object(jc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							o.hide(), n.hide(), a || i()
						}, [o, n, i, a]);
					Object(nc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(tc.a)(n.target.ref, o.target.ref, r.target.ref)
					}, m.a.createElement(lc, {
						"aria-expanded": o.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Sc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), o.visible ? l() : o.show(), e.sendNavClickInbox()
						},
						isOpen: o.visible
					}, m.a.createElement(mc, {
						unreadCount: e.unreadCount
					})), !o.visible && !r.visible && m.a.createElement(fi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Oc, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, m.a.createElement(Cc.a, {
						isOpen: o.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(hc, {
						onClose: () => {
							t(Object(Tt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Nc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				wc = n("./src/reddit/actions/snoovatarModal.ts"),
				Mc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ic = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Ac = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Tc = n.n(Ac);
			const {
				fbt: Rc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Lc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Mn.x)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Mn.ib)(s)
				}
			}
			var Fc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(Oe.e)(Vi),
						s = Object(Oe.d)(),
						o = Object(Oi.a)();
					Object(u.useEffect)(() => {
						o(Object(Mc.p)())
					}, [o]), Object(u.useEffect)(() => {
						n || s(Object(Nc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Lc(n)
					}, [n]);
					return m.a.createElement(rn.k, {
						onClick: () => {
							o(Object(Mc.d)()), Lc(n, "click"), s(Object(wc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Tc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Tc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Rc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ic.a, {
						className: Object(je.a)(Tc.a.sparkle, Tc.a.sparkle1)
					}), m.a.createElement(Ic.a, {
						className: Object(je.a)(Tc.a.sparkle, Tc.a.sparkle2)
					}), m.a.createElement(Ic.a, {
						className: Object(je.a)(Tc.a.sparkle, Tc.a.sparkle3)
					})), Rc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Dc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Uc = n.n(Dc);
			const {
				fbt: Bc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Gc = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(Oe.d)(),
						s = Object(Oi.a)(),
						o = Object(Oe.e)(Gi.b),
						r = Object(Oe.e)(Zi.a) === Fn.ed.RepositionCoinNoLiveNoAll;
					Object(u.useEffect)(() => {
						o || n(Object(Nc.a)())
					}, [o, n]);
					return m.a.createElement(rn.a, {
						onClick: () => {
							n(Object(wc.b)({
								clickSource: "nav"
							})), s(Mc.c), t && t()
						},
						className: Object(je.a)(Uc.a.ctaContainer, {
							[Uc.a.adsExperiment]: r
						})
					}, m.a.createElement(Ic.a, {
						className: Object(je.a)(Uc.a.sparkle, Uc.a.sparkle1)
					}), m.a.createElement(Ic.a, {
						className: Object(je.a)(Uc.a.sparkle, Uc.a.sparkle2)
					}), m.a.createElement(Ic.a, {
						className: Object(je.a)(Uc.a.sparkle, Uc.a.sparkle3)
					}), Bc._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				Hc = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				qc = n("./src/reddit/actions/changeUsername.ts"),
				Wc = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Vc = n("./src/reddit/actions/postCreation/general.ts"),
				Qc = n("./src/reddit/actions/preferences.ts"),
				zc = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Kc = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Jc = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Zc = Object(Rt.a)({
					getComponent: () => Object(ae.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Xc = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Yc = n("./src/reddit/components/Settings/modalIds.ts"),
				$c = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				el = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				tl = n("./src/reddit/icons/svgs/Close/index.tsx"),
				nl = n("./src/reddit/selectors/emailCollection.ts"),
				sl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				ol = n.n(sl);
			var rl = Object(Xc.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: o,
						toggleChangeEmailModal: r
					} = e;
					const a = Object(Ve.b)(),
						i = Object(Oe.d)(),
						c = Object(Oe.e)(nl.a);
					Object(u.useEffect)(() => {
						a(c ? Object($c.f)(el.a) : Object(el.g)(el.a))
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
						className: ol.a.container
					}, m.a.createElement("div", {
						className: ol.a.topLine
					}), m.a.createElement("button", {
						className: ol.a.closeWrapper,
						onClick: () => {
							a(c ? Object($c.e)(el.a) : Object(el.c)(el.a)), t()
						}
					}, m.a.createElement(tl.a, {
						className: ol.a.closeIcon
					})), m.a.createElement("h5", {
						className: ol.a.title
					}, d), m.a.createElement("p", {
						className: ol.a.subtitle
					}, n), m.a.createElement("p", {
						className: ol.a.description
					}, l), m.a.createElement("div", {
						className: ol.a.buttonWrapper
					}, c ? m.a.createElement(rn.t, {
						onClick: () => {
							i(Object(Tt.h)(Yc.g)), a(Object($c.a)(el.a))
						},
						priority: rn.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(rn.t, {
						priority: rn.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(el.e)(el.a, "update")), r()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(rn.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(el.e)(el.a, "confirm")), o(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [Mr.a.Click, Mr.a.Keydown, Mr.a.Resize]),
				al = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				il = n.n(al);
			const cl = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(We.a, {
					className: il.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: Qe.c.GoogleOneTap
				})
			};
			var ll = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				dl = n.n(ll);
			const {
				fbt: ul
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ml = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: dl.a.container
					}, m.a.createElement("p", {
						className: dl.a.title
					}, ul._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: dl.a.subtitle
					}, ul._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: dl.a.description
					}, ul._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(rn.o, {
						className: dl.a.dismissBtn,
						onClick: t
					}, ul._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				pl = n("./node_modules/lodash/noop.js"),
				bl = n.n(pl),
				hl = n("./src/lib/prettyPrintNumber/index.ts"),
				gl = n("./src/realtime/GQLSubscription/async.tsx"),
				fl = n("./src/reddit/actions/alpha.ts"),
				vl = n("./src/reddit/actions/modMode.ts"),
				Ol = n("./src/reddit/actions/profile/index.ts"),
				Cl = n("./src/reddit/constants/elementClassNames.ts"),
				yl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				xl = n("./src/reddit/helpers/karma.ts"),
				El = n("./src/reddit/hooks/useWindowEvent.ts"),
				jl = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				_l = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Sl = n("./src/reddit/layout/row/InlineButton/index.tsx");
			const Pl = e => Object(ti.c)(e, {
				experimentName: Fn.fg,
				experimentEligibilitySelector: ti.a
			}) === Fn.Rd;
			var kl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Nl = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				wl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Ml = n("./src/reddit/selectors/seo/index.ts"),
				Il = n("./src/reddit/selectors/tooltip.ts"),
				Al = n("./src/higherOrderComponents/asTooltip.tsx"),
				Tl = n("./src/lib/constants/icons.ts"),
				Rl = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Ll = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Fl = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Dl = n.n(Fl);
			const Ul = (e, t) => e && m.a.createElement("div", {
				className: Dl.a.marketingBadge
			}, m.a.createElement(Rl.a, {
				className: Dl.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ic.a, {
				className: Object(je.a)(Dl.a.sparkle, Dl.a.sparkle1)
			}), m.a.createElement(Ic.a, {
				className: Object(je.a)(Dl.a.sparkle, Dl.a.sparkle2)
			}), m.a.createElement(Ic.a, {
				className: Object(je.a)(Dl.a.sparkle, Dl.a.sparkle3)
			}), m.a.createElement(Ic.a, {
				className: Object(je.a)(Dl.a.sparkle, Dl.a.sparkle4)
			})));
			var Bl = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var o;
					const r = Object(Oe.d)(),
						a = Object(Oi.a)(),
						i = Object(Dn.eb)(),
						c = Object(Oe.e)(e => e.user.account),
						l = Object(Oe.e)(co.d),
						d = Object(Oe.e)(Gi.b),
						u = Object(Oe.e)(Gi.a),
						p = () => r(Object(wc.b)({
							clickSource: "nav"
						})),
						b = Object(Oe.e)(ne.j).startsWith("en");
					if ((null === (o = null == i ? void 0 : i.meta) || void 0 === o ? void 0 : o.name) === S.Sb.AVATAR) return null;
					d || r(Object(Nc.a)()), u && a(Mc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(Mc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && Ul(u, l));
						return m.a.createElement(Qr, {
							onClick: g,
							title: e,
							titleClassName: Dl.a.avatarLinkBody
						})
					}
					const f = Object(Ll.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? wd("avatar_style") : wd("add"), ((e, t, n, s) => o => m.a.createElement("div", {
						className: `${Dl.a.avatarLinkBody} ${o.className}`
					}, e, s && Ul(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				Gl = n("./src/reddit/helpers/trackers/user.ts");
			var Hl = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(je.a)(Dr.a.heading, Br.a.category)
					}, m.a.createElement("span", {
						className: Dr.a.headingContent
					}, m.a.createElement("span", {
						className: Dr.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Dr.a.title
					}, t))), m.a.createElement("div", {
						className: Dr.a.contentContainer
					}, n))
				},
				ql = n("./src/reddit/helpers/trackers/modTools.ts");
			const Wl = () => {
					const e = Object(Oe.d)(),
						t = Object(Oi.a)(),
						n = Object(Oe.e)(v.db);
					return m.a.createElement(Jr, {
						isEnabled: n,
						onClick: () => {
							t(Object(Gl.f)(n)), (t => e(Object(Qc.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Vl = () => {
					const e = Object(Oe.d)(),
						t = Object(Oi.a)(),
						n = Object(Oe.e)(e => e.user.account),
						o = Object(Oe.e)(wl.a);
					return n && n.isMod ? m.a.createElement(Jr, {
						isEnabled: o,
						onClick: () => {
							t(Object(ql.k)(!o)), (() => e(Object(vl.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var Ql = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				zl = n.n(Ql);
			const Kl = () => {
					const e = Object(Oe.d)(),
						t = Object(Ve.b)(),
						n = Object(Oe.e)(v.k),
						o = Object(Oe.e)(v.V);
					return n ? m.a.createElement(Hl, {
						icon: m.a.createElement(ro.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Jr, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: o,
						onClick: () => {
							t(Object(Gl.g)(!o)), (t => e(Object(Qc.I)({
								showPresence: t
							})))(!o)
						}
					}), m.a.createElement(zr, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Xr.c)("profile"))
					}), m.a.createElement(Bl, {
						onClick: () => e(Object(ec.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(zr, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Xr.c)("settings"))
					})) : null
				},
				Jl = () => {
					return Object(Oe.e)(v.k) ? m.a.createElement(Hl, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(ro.a, {
							name: "views"
						})
					}, m.a.createElement(Vl, null), m.a.createElement(Wl, null)) : null
				},
				Zl = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(Oe.e)(v.k) ? null : m.a.createElement(Hr, {
						icon: m.a.createElement(ro.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Wl, null))
				},
				Xl = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o,
						useClassicUserMenuStyles: r = !1
					} = e;
					return m.a.createElement(Hr, {
						buttonClassName: r ? zl.a.button : "",
						headingClassName: r ? zl.a.headingContent : "",
						icon: m.a.createElement(ro.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: r,
						onClick: (e, t) => {
							o(Object(Xr.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(zr, {
						className: r ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => o(Object(Xr.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(zr, {
						className: r ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => o(Object(Xr.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(zr, {
						className: r ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => o(Object(Xr.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(zr, {
						className: r ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => o(Object(Xr.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var Yl = n("./src/reddit/components/HiddenDiv.tsx"),
				$l = n("./src/reddit/controls/Dropdown/index.tsx"),
				ed = n("./src/reddit/helpers/trackers/authControls.ts"),
				td = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const nd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Dr.a.headingContent
					}, m.a.createElement("span", {
						className: Dr.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(je.a)(Dr.a.title, s)
					}, n))
				},
				sd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(je.a)(Dr.a.button, t),
						onClick: s
					}, m.a.createElement(nd, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				od = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Lr, {
						className: Object(je.a)(Dr.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(nd, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				},
				rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var ad = e => [{
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
				url: rd()
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
			var id = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: o,
						onClick: r,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(Hr, {
						icon: m.a.createElement(ro.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: o,
						onClick: (e, t) => {
							a(Object(Xr.c)(t ? "more_chevron" : "more_menu")), "function" == typeof r && r(e)
						}
					}, ad(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: o,
							title: r,
							url: a
						} = e;
						return !n && m.a.createElement(zr, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Xr.c)(s))
							},
							rel: o,
							title: r()
						})
					})(e, a)), n ? m.a.createElement(zr, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Xr.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: pn.bb(e),
								subreddit: pn.jb(e)
							}))
						}
					}) : null)
				},
				cd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				ld = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				dd = n.n(ld);
			var ud = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: o,
					showAll: r
				}, a] = Object(u.useState)({
					links: Object(cd.b)(),
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
				return m.a.createElement(Hr, {
					"aria-hidden": !0,
					icon: m.a.createElement(ro.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Kr, {
						className: dd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : dd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: dd.a.title
					})
				}), o.length > 3 && (e => m.a.createElement("span", {
					className: Dr.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(je.a)(Dr.a.headingContent, dd.a.headingContent)
				}, m.a.createElement("span", {
					className: Dr.a.title
				}, e))))(r ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function md() {
				return (md = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				bd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var hd;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(hd || (hd = {}));
			var gd = e => {
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
					} = e, [h, g] = Object(u.useState)(hd.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(r)
					}, y = () => m.a.createElement(od, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(Gl.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: pd
					}, m.a.createElement(Kl, null), m.a.createElement(Jl, null), m.a.createElement(() => d ? m.a.createElement(sd, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(td.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(od, {
						className: Br.a.coinsLink,
						icon: m.a.createElement(ro.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Br.a.meta
						}, bd(b))),
						onClick: () => {
							Object(sa.d)(sa.a.GoldPayment, !0), e.sendEvent(Object(Gl.d)())
						},
						titleClassName: Br.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(od, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(sa.d)(sa.a.GoldPayment, !0), e.sendEvent(Object(Gl.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(od, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "live"
						}),
						href: Qo.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(ud, v(hd.RecentCommunitiesMenu)), m.a.createElement(ta, md({}, v(hd.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(Zl, v(hd.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(od, {
						className: Br.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(ro.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(id, md({}, v(hd.MoreMenu), {
						isCommunityLinkVisible: o,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(Xl, md({}, v(hd.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(sd, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(sd, {
						className: Br.a.button,
						icon: m.a.createElement(ro.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Dr.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Dr.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				fd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				vd = n.n(fd);

			function Od() {
				return (Od = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cd = qe.a.wrapped($l.a, "Dropdown", vd.a),
				yd = Object(Al.a)(Cd),
				xd = e => m.a.createElement(Ll.a, {
					className: Object(je.a)(vd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: vd.a.buttonText
				}, e.displayText), m.a.createElement(qr.a, {
					className: vd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				Ed = e => t => m.a.createElement(ro.a, Od({
					name: e
				}, t)),
				jd = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: o
					} = e;
					return m.a.createElement(xd, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(Gl.f)(t)), o(!t)
						}
					}, m.a.createElement(ro.a, {
						name: "night",
						className: vd.a.nightIcon
					}))
				},
				_d = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Ll.b)(Ed(Tl.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(Xr.c)("help_center"))
					})
				},
				Sd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Ll.b)(Ed(Tl.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(Gl.b)())
					})
				},
				Pd = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: o
					} = e;
					const r = Object(Ll.c)(Ed(Tl.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(r, {
						href: "#",
						onClick: e => {
							Object(Fe.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), o(Object(ed.b)()))
						}
					})
				};
			var kd = Object(Ve.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: o,
					requestAwardKarma: r,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(Oe.e)(ao.c), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					p(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					r()
				}, [c]), n ? m.a.createElement(Yl.a, null, m.a.createElement(gd, e)) : l ? m.a.createElement(yd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(jd, {
					nightmode: o,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(_d, {
					sendEvent: a
				}), m.a.createElement(Xl, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Sd, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: vd.a.divider
				}), m.a.createElement(Pd, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(yd, {
					className: vd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(gd, e))
			});

			function Nd() {
				return (Nd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const wd = e => t => m.a.createElement(ro.a, Nd({
					name: e
				}, t)),
				Md = Object(Oe.b)(() => Object(ee.c)({
					isCrawler: e => !!Object(Ml.a)(e),
					isModModeEnabled: wl.a,
					isNsfwBlocking: e => {
						const t = Object(te.d)(e),
							n = Object(te.e)(e);
						return t || n
					},
					isOpen: Object(Il.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Nl.d,
					shouldShowCreateCommunityItem: v.pb,
					navbarLikeMweb: kl.a,
					nightmode: v.db,
					showPresence: v.V,
					url: Pn.u,
					isCommunityLinkVisible: Pl
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(ec.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Qc.z)(t)),
					toggleShowPresence: t => e(Object(Qc.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(fl.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(fl.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Ol.g)(Object(dn.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(Tt.k)({
							actionSource: Tt.a.NsfwBlockingModal
						})), Object(yl.b)(yl.a.Login)), e(Object(Y.openLoginModal)())
					},
					toggleModMode: () => e(Object(vl.b)()),
					openCommunityCreationModal: () => e(Object(Tt.h)(Vt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Id = Object(Dn.u)({
					pageLayer: e => e
				})(Md(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: o,
						user: r
					} = e, a = Object(Oe.e)(Nl.b), [i, c] = Object(u.useState)(!1), l = r && r.id;
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
					return Object(El.a)("visibilitychange", p), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(je.a)(vd.a.container, Cl.e)
					}, o && i && a && m.a.createElement(gl.a, {
						variables: d,
						onData: bl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Sl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(je.a)(e.className, vd.a.inlineButton, {
							[vd.a.dropdownOpen]: e.isOpen,
							[vd.a.isLoggedOut]: !r,
							[vd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: vd.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(je.a)(vd.a.accountWrapper, vd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(vo.a, {
						className: Object(je.a)(vd.a.imgIcon, {
							[vd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: vd.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && o
					}), m.a.createElement("span", {
						className: vd.a.accountDetails
					}, m.a.createElement("span", {
						className: vd.a.username
					}, n.displayText, n.isGold && m.a.createElement(_l.a, {
						className: vd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: vd.a.accountKarma
					}, m.a.createElement(ro.a, {
						name: "karma",
						isFilled: !0,
						className: vd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(xl.a)(e),
							n = Object(hl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: vd.a.accountCoins
					}, m.a.createElement(jl.a, {
						className: vd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(hl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(je.a)(vd.a.accountWrapper, vd.a.isLoggedOut)
					}, m.a.createElement(ro.a, {
						name: "user",
						className: vd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(ro.a, {
						className: vd.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(ja.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(kd, e))
				})),
				Ad = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Td = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				Rd = n.n(Td);
			const Ld = Object(Xc.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(je.a)(e.className, Rd.a.confirmContainer, Rd.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: Rd.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: Rd.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var Fd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				Dd = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ud = n("./src/reddit/helpers/trackers/inbox.ts"),
				Bd = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				Gd = n("./src/reddit/routes/acknowledgements/index.ts"),
				Hd = n("./src/reddit/routes/appeal/index.ts");
			var qd = {
					action: () => async e => await e(Object(p.c)(Xo.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				Wd = n("./src/reddit/routes/coins/index.ts"),
				Vd = n("./src/reddit/routes/coinsMobile/index.ts"),
				Qd = n("./src/reddit/routes/commentsPage/index.ts"),
				zd = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Kd = [],
				Jd = n("./src/reddit/routes/econManagement/index.ts"),
				Zd = n("./src/reddit/routes/econManagement2/index.ts");
			var Xd = {
					action: Object(M.a)(() => n.e(8).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Yd = n("./src/lib/addQueryParams/index.ts");
			var $d = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(Yd.a)("/", r)))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [S.u.COMMENTS_PAGE, S.u.FRONTPAGE]
				},
				eu = n("./src/reddit/routes/followers/index.ts"),
				tu = n("./src/reddit/routes/framedGild/index.ts"),
				nu = n("./src/reddit/routes/framedModal/index.ts"),
				su = n("./src/reddit/routes/frontpage/index.ts"),
				ou = n("./src/reddit/routes/geotagging/index.ts"),
				ru = n("./src/reddit/routes/happeningNow/index.ts"),
				au = n("./src/reddit/routes/inbox/index.ts"),
				iu = n("./src/reddit/routes/meta/index.ts"),
				cu = n("./src/reddit/routes/moderationPages/index.ts"),
				lu = n("./src/reddit/routes/modQueue/index.ts"),
				du = n("./src/reddit/routes/multireddit/index.ts"),
				uu = n("./src/reddit/routes/notificationsInbox/index.ts"),
				mu = n("./src/reddit/routes/postCreation/constants.ts");
			const pu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
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
			var bu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(mu.b))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...pu],
				hu = n("./src/reddit/routes/postCreation/index.ts"),
				gu = n("./src/reddit/routes/postDraft/index.ts"),
				fu = n("./src/reddit/routes/postSetPage/index.ts");
			var vu = {
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
			var Ou = {
					action: () => async e => await e(Object(p.c)(Vo.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				Cu = n("./src/reddit/routes/premium/index.ts"),
				yu = n("./src/reddit/routes/profileComments/index.ts"),
				xu = n("./src/reddit/endpoints/me/index.ts"),
				Eu = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				ju = n("./src/server/helpers/profileRedirect.ts");
			var _u = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							rest: r
						} = e.params, {
							path: a,
							queryParams: i
						} = e, c = await Object(xu.a)(o());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(Eu.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(ju.b)({
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
				Su = n("./src/reddit/routes/profileModSettings/index.ts"),
				Pu = n("./src/reddit/routes/profileOverview/index.ts"),
				ku = n("./src/reddit/routes/profilePosts/index.ts");
			var Nu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: o,
							queryParams: r
						} = e, a = Object(ju.b)({
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
				wu = n("./src/reddit/routes/profilePrivate/index.ts");
			var Mu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: o,
							queryParams: r
						} = e, a = Object(ju.b)({
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
				Iu = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				Au = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Tu = n("./src/reddit/routes/report/index.ts"),
				Ru = n("./src/reddit/routes/searchResults/index.ts"),
				Lu = n("./src/reddit/routes/settings/index.ts");
			var Fu = [{
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
				Du = n("./src/reddit/routes/subreddit/index.ts"),
				Uu = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				Bu = n("./src/reddit/routes/subredditWiki/index.ts"),
				Gu = n("./src/reddit/routes/topic/index.ts");
			var Hu = [Gd.a, Hd.a, Xo.b, qd, Wd.a, Vd.a, zd.a, _u, Mu, Nu, ...Bd.a, ...Qd.b, Xd, ...su.a, ou.a, Cu.a, Vo.b, Qo.b, Jd.c, Zd.a, vu, Ou, eu.a, tu.a, nu.a, hu.a, gu.a, fu.a, ...bu, $d, ...iu.a, du.a, lu.a, Wo.c, qo.b, uu.a, au.a, yu.a, Su.a, Pu.a, ku.a, Iu.a, wu.a, Au.a, ...Lu.a, ...Fu, Ru.a, ...Bu.a, Gu.a, Du.b, Uu.a, cu.a, Tu.a, ...Kd, ru.a],
				qu = n("./src/reddit/selectors/appBadges.ts"),
				Wu = n("./src/reddit/selectors/emailVerification.ts"),
				Vu = n("./src/reddit/selectors/sso.ts");
			var Qu = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: o
					} = e;
					const r = Object(vi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: uc.a.iconWrapper,
						onMouseEnter: () => {
							r.show()
						},
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement("a", {
						className: uc.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), o()
						}
					}, m.a.createElement(Ro.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(ro.a, {
						name: "chat",
						className: uc.a.icon2020
					}))), m.a.createElement(fi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				zu = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				Ku = n("./src/reddit/constants/chat.ts"),
				Ju = n("./src/reddit/selectors/chat.ts");
			var Zu = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: o
				} = e;
				const r = Object(Oe.d)(),
					a = Object(Oe.e)(v.i),
					c = Object(Oe.e)(Ju.b),
					l = Object(vi.a)(),
					d = Object(u.useMemo)(() => c === Ku.b.IS_SHOWING, [c]),
					p = Object(u.useMemo)(() => d ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${_i.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: _i.a.alien600
							}
						},
						visible: !0
					}))(l) : l, [l, d]),
					b = Object(u.useCallback)(() => {
						d && a && r(Object(zu.c)(Ku.b.DISMISSED, a))
					}, [r, d, a]);
				return Object(u.useEffect)(() => {
					a && r(Object(zu.b)(a))
				}, [r, a]), Object(u.useEffect)(() => {
					if (!d) return;
					const e = setTimeout(b, 3e3);
					return () => clearTimeout(e)
				}, [b, d]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: uc.a.iconWrapper,
					onMouseEnter: () => {
						l.show()
					},
					onMouseLeave: l.hide,
					ref: l.target.ref
				}, m.a.createElement("a", {
					className: uc.a.link,
					href: `${i.a.redditUrl}/chat`,
					onClick: e => {
						e.preventDefault(), o(), b()
					}
				}, m.a.createElement(Ro.a, {
					isActive: t > 0 || n,
					unreadCount: t
				}), m.a.createElement(ro.a, {
					name: "chat",
					className: uc.a.icon2020
				}))), m.a.createElement(fi.a, {
					arrowProps: p.arrowProps,
					popperProps: p.popperProps,
					visible: p.visible
				}, d ? m.a.createElement("span", {
					className: uc.a.liveChatAnnouncementText,
					onClick: e => {
						e.preventDefault(), b()
					}
				}, s.fbt._("Live chats are here now", null, {
					hk: "10sA0h"
				})) : s.fbt._("Chat", null, {
					hk: "4nXRWH"
				})))
			}));
			var Xu = e => {
					return Object(Oe.e)(z.c) ? m.a.createElement(Zu, e) : m.a.createElement(Qu, e)
				},
				Yu = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				$u = n.n(Yu);
			var em = Object(Ve.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const o = Object(Oe.e)(v.db),
						r = Object(vi.a)(),
						a = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						i = Object(Oe.e)(Zi.a) === Fn.ed.RepositionCoinNoLiveNoAll;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(je.a)(t, $u.a.container, {
							[$u.a.isNightMode]: o
						})
					}, m.a.createElement("a", {
						className: $u.a.link,
						ref: r.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(Gl.c)())
						},
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						"aria-label": a
					}, m.a.createElement(ro.a, {
						className: $u.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: $u.a.text
					}, a))), !i && m.a.createElement(fi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, a))
				}),
				tm = n("./src/reddit/actions/matrixChat/index.ts"),
				nm = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				sm = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const om = () => {
					const e = Object(vi.a)(),
						t = Object(Oe.d)(),
						n = Object(Oe.e)(sm.c),
						o = Object(Oe.e)(sm.b),
						r = Object(Oe.e)(sm.a);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: uc.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref
					}, m.a.createElement("a", {
						className: uc.a.link,
						href: n,
						onClick: e => {
							const n = o !== nm.b.NORMAL ? nm.b.NORMAL : nm.b.CLOSED;
							e.preventDefault(), t(Object(tm.c)({
								state: n
							}))
						}
					}, r && r > 0 && m.a.createElement(Ro.a, {
						isActive: !0,
						unreadCount: r
					}), m.a.createElement(ro.a, {
						name: "chat_group",
						className: uc.a.icon2020
					}))), m.a.createElement(fi.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Matrix Chat", null, {
						hk: "1cv14m"
					})))
				},
				rm = "change-username-tooltip-id",
				am = "email-verification-tooltip-id",
				im = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const o = Object(vi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: uc.a.iconWrapper,
						onMouseEnter: o.show,
						onMouseLeave: o.hide,
						ref: o.target.ref
					}, m.a.createElement(lc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Ad.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Ro.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(ro.a, {
						className: uc.a.icon2020,
						name: "mod"
					})), m.a.createElement(fi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Ad.b, {
						className: uc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				cm = m.a.memo((function(e) {
					const t = Object(vi.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: uc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: uc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(ro.a, {
						className: uc.a.icon2020,
						name: "add"
					}))), m.a.createElement(fi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				lm = Object(Dn.u)({
					pageLayer: e => e
				}),
				dm = Object(ee.c)({
					activeDropdownId: Il.a,
					activeModalId: jc.b,
					appBadges: qu.b,
					chatDirectMessagesCount: qu.e,
					email: v.n,
					hasUnreadChatMessages: qu.f,
					inboxBadgeCount: qu.g,
					isAvatarQuickCreateEnabled: e => Object(zo.c)(e) && Qi(e),
					isAvatarStorefrontEnabled: e => Object(zo.d)(e) && !!Object(Gi.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: Wu.b,
					isLoggedIn: v.Q,
					isModerator: mn.k,
					isNameEditable: v.S,
					isOneTapSession: ne.g,
					isResponsiveSettingsEnabled: Gn.a,
					isChatMatrixClientEnabled: z.b,
					shouldOpenEmailVerificationTooltip: Wu.a,
					shouldShowChangeUsernameModals: Vu.c,
					unreadNotifications: v.yb,
					usernameChangedModalOpen: Object(jc.c)(Yc.o),
					topNavigationVariant: Zi.a
				}),
				um = Object(Oe.b)(dm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(qc.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(Wc.b)()),
					showEmailVerificationTooltip: () => e(Object(Wc.b)()),
					fetchAppBadges: () => e(Object(Hc.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Dd.a)()), e(Object(ve.p)())
					},
					onChatClick: () => e(Object(W.f)()),
					onDismissCustomizeFlyout: () => e(Object(Qc.u)()),
					onOpenModerationDropdown: () => {
						e(Object(ec.h)({
							tooltipId: Ad.a
						})), e(Object(Ar.q)())
					},
					onOpenUserDropdown: () => e(Object(ec.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Tt.h)(Yc.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Tt.h)(Yc.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Wc.b)()), e(Object(Tt.i)(Yc.a))
					},
					resendEmail: () => e(Object(ve.v)(el.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Vc.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(qc.startChangeUsernameFlow)(n))
					}
				}));
			class mm extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Ud.D)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Xr.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(aa.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(I.a)(e.pathname, Hu),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== S.Sb.POST_CREATION && n !== S.Sb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.topNavigationVariant = this.props.topNavigationVariant, this.noAdvertiseVariant = this.topNavigationVariant === Fn.ed.NoAdvertise, this.repositionCoinNoLiveNoAllVariant = this.topNavigationVariant === Fn.ed.RepositionCoinNoLiveNoAll, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n,
							onAvatarButtonClick: s
						} = this.props, o = n && Object(dn.e)(n) || "", r = () => {
							this.repositionCoinNoLiveNoAllVariant && (this.setState({
								showNavBarEconCta: !1
							}), s && s())
						};
						return e ? m.a.createElement(Fc, {
							avatarUrlParams: {
								avatarId: "random",
								username: o
							}
						}) : t ? m.a.createElement(Gc, {
							handleButtonClick: r
						}) : !this.repositionCoinNoLiveNoAllVariant && m.a.createElement(gi.a, null)
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), Sa()(this.props.appBadges) && this.props.fetchAppBadges()
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
						openKeepUsernameModal: x,
						pageLayer: E,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: P,
						unreadNotifications: k,
						user: N,
						usernameChangedModalOpen: w
					} = this.props, M = !(!k || !k.hasUnreadModmail), I = N && Object(dn.e)(N) || "", A = Object(je.a)({
						[uc.a["m-responsive"]]: f
					}), T = S && g;
					return m.a.createElement(cn.a, {
						id: am,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(cn.a, {
						className: uc.a.headerLinks,
						id: rm
					}, b && m.a.createElement(im, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Ad.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(Xu, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), v && m.a.createElement(om, null), m.a.createElement(kc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == E ? void 0 : E.url,
						userId: N.id,
						isLoggedIn: p,
						iconWrapper: uc.a.iconWrapper
					}), m.a.createElement(cm, {
						onClickCreatePost: this.onClickCreatePost
					}), !this.noAdvertiseVariant && m.a.createElement(em, {
						className: uc.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: uc.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(Id, {
						className: uc.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: C,
						sendEventWithName: this.sendEventWithName,
						user: N
					}), p && m.a.createElement(cl, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(ml, {
						onCloseFlyout: O
					}), m.a.createElement(rl, {
						closeTooltip: o,
						email: r,
						isOpen: _ && d,
						resendEmail: j,
						toggleChangeEmailModal: P,
						tooltipId: am
					}), m.a.createElement(Zc, {
						email: r,
						shouldOpenTooltip: _
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(Jc.a, {
						closeTooltip: s,
						isOpen: c && !S,
						openChangeUsernameModal: y,
						openKeepUsernameModal: x,
						tooltipId: rm,
						username: I
					}), S && m.a.createElement(Kc.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: A,
						username: I,
						withOverlay: !0
					}), m.a.createElement(zc.a, {
						confirmNavigate: this.confirmNavigate
					})), T && !w && m.a.createElement(Fd.a, {
						className: uc.a.cornerModal,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(je.a)(A, uc.a.modalOverlay),
						username: I,
						withOverlay: !w
					}), T && w && m.a.createElement(Ld, {
						className: uc.a.cornerModal,
						isOpen: !0,
						tooltipId: rm,
						username: I
					}))
				}
			}
			var pm = Object(Ve.c)(lm(um(mm))),
				bm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				hm = n("./src/reddit/selectors/experiments/index.ts");
			const gm = e => Object(ti.c)(e, {
				experimentName: Fn.Nc,
				experimentEligibilitySelector: hm.f
			}) === Fn.vb.Enabled;
			var fm = n("./src/reddit/components/Header/User/index.m.less"),
				vm = n.n(fm);
			const {
				fbt: Om
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Cm = Object(ee.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(te.d)(e),
						n = Object(te.e)(e);
					return t || n
				},
				origin: ne.k
			}), ym = m.a.memo(e => m.a.createElement("div", {
				className: Object(je.a)(e.className, vm.a.row)
			}, !e.account && m.a.createElement(xm, e), m.a.createElement(pm, {
				className: Object(je.a)({
					[vm.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), xm = e => {
				const t = Object(Oe.e)(qu.g),
					n = Object(Oe.e)(v.Fb),
					s = Object(Oe.e)(bm.c),
					o = Object(Oe.e)(gm),
					r = e.pageLayer,
					a = i.a.accountManagerOrigin,
					c = r ? r.url : "/",
					l = r && r.meta && r.meta.name === S.Sb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(kc, {
					sendNavClickInbox: () => e.sendEvent(Object(Ud.D)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: vm.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(je.a)(vm.a.loggedOutRow, o ? vm.a.swapAuthNavButtons : "")
				}, m.a.createElement(rn.t, {
					kind: rn.b.ExternalLink,
					priority: o ? rn.c.Primary : rn.c.Secondary,
					redditStyle: !0,
					className: Object(je.a)(o ? vm.a.separator : "", vm.a.button),
					href: `${a}/login/?dest=${l}`,
					onClick: t => {
						Object(Fe.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(ed.a)("nav")))
					}
				}, Om._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(rn.t, {
					kind: rn.b.ExternalLink,
					priority: o ? rn.c.Secondary : rn.c.Primary,
					redditStyle: !0,
					className: Object(je.a)(vm.a.button, o ? "" : vm.a.separator),
					href: `${a}/register/?dest=${l}`,
					onClick: t => {
						Object(Fe.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(ed.c)("nav")))
					}
				}, Om._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Em = Object(Dn.u)()(Object(Oe.b)(Cm, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(Tt.k)({
							actionSource: Tt.a.NsfwBlockingModal
						})), Object(yl.b)(yl.a.Login)) : e(Object(Tt.k)({
							actionSource: Tt.a.HeaderLogin
						})), e(Object(Y.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(Tt.k)({
							actionSource: Tt.a.NsfwBlockingModal
						})), Object(yl.b)(yl.a.Signup)) : e(Object(Tt.k)({
							actionSource: Tt.a.HeaderSignup
						})), e(Object(Y.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(ec.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Ve.c)(ym))),
				jm = n("./src/reddit/components/Header/index.m.less"),
				_m = n.n(jm);

			function Sm() {
				return (Sm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pm = qe.a.header("HeaderDynamicStyles", _m.a),
				km = Object(ee.c)({
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: ao.c,
					isNightMode: v.db,
					isResponsiveSettingsEnabled: Gn.a,
					isPageResponsive: ui.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Nm = Object(Dn.u)({
					categoryName: Dn.c,
					pageLayer: e => e
				}),
				wm = e => {
					const t = Object(u.useContext)(Me.a);
					return m.a.createElement("div", {
						className: _m.a.left
					}, m.a.createElement(ja.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Ea.b, null), m.a.createElement(no.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: _m.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(li.a, {
						className: Object(je.a)(_m.a.snoo, {
							[_m.a.snooExp]: t
						})
					}), m.a.createElement(di.a, {
						className: _m.a.wordmark
					})), e.children)
				},
				Mm = e => m.a.createElement("div", {
					className: _m.a.right
				}, e.children, m.a.createElement(Em, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				Im = e => {
					const t = Object(u.useContext)(Me.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(je.a)(_m.a.layout, {
							[_m.a.layoutContainer]: t
						})
					}, m.a.createElement(wm, Sm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(xa, null), m.a.createElement(ci, {
						className: _m.a.search
					})), m.a.createElement(Mm, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement($i, {
						isAvatarButtonClicked: n,
						className: _m.a.quickLinks
					})))
				},
				Am = e => {
					const t = Object(u.useContext)(Me.a);
					return m.a.createElement("div", {
						className: Object(je.a)(_m.a.layout, {
							[_m.a.layoutContainer]: t
						})
					}, m.a.createElement(wm, Sm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(xa, null), m.a.createElement("div", {
						className: _m.a.searchContainer
					}, m.a.createElement(ci, {
						className: _m.a.search
					}))), m.a.createElement(Mm, null))
				};
			var Tm = Nm(Object(Oe.b)(km, e => ({
					onReloadFrontpage: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Me.a);
					return t = e.isLoggedIn ? Im : Am, m.a.createElement(Pm, {
						"data-redditstyle": !0,
						className: Object(je.a)(_m.a.container, e.className, {
							[_m.a.bladeIsOpen]: e.isBladeOpen,
							[_m.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(hi, {
						className: _m.a.MwebResponsiveHeader
					}))
				}))),
				Rm = n("./src/reddit/components/LightboxHeader/index.tsx");
			const Lm = Object(Rt.a)({
				getComponent: () => Object(ae.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Fm = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Dm = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const Um = () => e => ({
					...pn.o(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Bm
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				Gm = Object(ee.c)({
					isLoggedIn: v.Q,
					origin: ne.k
				});
			class Hm extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Fe.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Um()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(rn.m, {
						className: e,
						href: Dm(Qe.a.Register, t),
						onClick: this.onClick
					}, Bm._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var qm = Object(Oe.b)(Gm, e => ({
					openRegisterModal: () => {
						e(Object(Tt.k)({
							actionSource: Tt.a.IdCard,
							redirectUrl: Go.c[Go.b.Home]
						})), e(Object(Y.openRegisterModal)())
					}
				}))(Object(Ve.c)(Hm)),
				Wm = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Vm = n.n(Wm);
			const {
				fbt: Qm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var zm = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(Or, {
						className: Vm.a.createTitle
					}, Qm._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: Vm.a.createDesc
					}, Qm._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(qm, {
						className: Vm.a.createButton
					}))
				},
				Km = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Jm = n.n(Km);
			const {
				fbt: Zm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xm = Object(ee.c)({
				currentPage: wo,
				isLoggedOutOneFeed: ao.c
			}), Ym = Object(Oe.b)(Xm, e => ({
				onUnpinSubscriptions: () => e(Object(De.j)())
			})), $m = Object(Dn.u)();
			var ep = qe.a.wrapped($m(Ym(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: Jm.a.title
				}, m.a.createElement("div", {
					className: Jm.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(ro.a, {
					name: "close",
					className: Jm.a.icon
				}))), m.a.createElement(fa, {
					className: Object(je.a)({
						[Jm.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage,
					isPinned: !0
				}), e.isLoggedOutOneFeed && m.a.createElement(zm, {
					className: Jm.a.createAccountSection
				})))), "Component", Jm.a),
				tp = n("./src/reddit/components/Survey/index.tsx"),
				np = n("./src/reddit/components/ThemeProvider/index.tsx");
			const sp = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				op = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...pn.d(t),
						reason: "primary"
					}
				}),
				rp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...pn.d(t),
						reason: "secondary"
					}
				});
			var ap = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				ip = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				cp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				lp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				dp = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				up = n("./src/reddit/models/Toast/index.ts"),
				mp = n("./src/reddit/selectors/structuredStyles.ts"),
				pp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				bp = n.n(pp);

			function hp() {
				return (hp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const gp = e => {
				const t = Wr.a;
				switch (e.kind) {
					case up.b.Error:
					case up.b.AuthError:
					case up.b.SuccessEndBroadcast:
						return t.warning;
					case up.b.SuccessCommunity:
						return t.op;
					case up.b.SuccessCommunityGreen:
					case up.b.SuccessMod:
					case up.b.SuccessUnlockComment:
						return t.approved;
					case up.b.SuccessLockComment:
						return t.reported;
					case up.b.EuCookiePolicy:
					case up.b.UappBanner:
					case up.b.Undo:
					default:
						return t.op
				}
			};
			class fp extends m.a.Component {
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
			const vp = qe.a.wrapped(fp, "PlainBread", bp.a);
			var Op = e => m.a.createElement(vp, hp({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": gp(e)
					}
				})),
				Cp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				yp = n.n(Cp);
			const xp = qe.a.span("Text", yp.a);
			var Ep = n("./src/reddit/components/Toaster/index.m.less"),
				jp = n.n(Ep);
			const {
				fbt: _p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Sp = qe.a.wrapped(cp.a, "AuthErrorToastIcon", jp.a), Pp = qe.a.wrapped(rn.l, "AuthErrorToastPrimaryButton", jp.a);
			class kp extends m.a.Component {
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
					}, m.a.createElement(Op, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Sp, null), m.a.createElement(xp, null, _p._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Pp, {
						type: "submit"
					}, _p._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Np = kp,
				wp = n("./src/lib/cookieConsent/index.ts"),
				Mp = n("./src/reddit/controls/Link/index.tsx"),
				Ip = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Ap = n.n(Ip);
			const {
				fbt: Tp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Rp = qe.a.wrapped(rn.l, "PrimaryButton", Ap.a), Lp = qe.a.wrapped(Op, "Bread", Ap.a);
			class Fp extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(wp.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(wp.b)({
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
					return m.a.createElement("section", null, m.a.createElement(Lp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: Ap.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: Ap.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(xp, {
						className: Ap.a.EuCookiePolicyText
					}, Tp._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(xp, {
						className: Ap.a.EuCookiePolicyText
					}, Tp._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(xp, {
						className: Ap.a.EuCookiePolicyText
					}, Tp._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), Tp._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [Tp._param("=Cookie Notice", m.a.createElement(Mp.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, Tp._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), Tp._param("=Privacy Policy", m.a.createElement(Mp.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, Tp._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: Ap.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Rp, {
						type: "submit"
					}, Tp._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Rp, {
						type: "submit"
					}, Tp._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var Dp, Up = Fp;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Dp || (Dp = {}));
			var Bp = n("./src/reddit/controls/Typography/index.tsx"),
				Gp = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Hp = n.n(Gp);

			function qp() {
				return (qp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Wp = qe.a.div("Container", Hp.a),
				Vp = qe.a.img("SideImage", Hp.a),
				Qp = qe.a.div("Main", Hp.a),
				zp = qe.a.div("SubTitle", Hp.a),
				Kp = Bp.a,
				Jp = qe.a.wrapped(rn.m, "PrimaryLinkButton", Hp.a),
				Zp = qe.a.wrapped(tl.a, "CloseIcon", Hp.a);
			class Xp extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(op(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(sp(this.props.name))
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
					return m.a.createElement(Wp, {
						key: t,
						style: {
							...o,
							transform: `\n            translateY(${o.y}px)\n            scale(${o.x}, ${o.x})\n          `
						}
					}, m.a.createElement(Zp, {
						onClick: this.props.onClose
					}), m.a.createElement(Vp, {
						srcSet: n
					}), m.a.createElement(Qp, null, m.a.createElement(zp, null, r), m.a.createElement(Bp.b, null, a), m.a.createElement(Kp, null, e), m.a.createElement(Jp, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Yp = Object(Oe.b)(null, e => ({
					onSignup: () => e(Object(Y.openRegisterModal)())
				}))(Object(Ve.c)(Xp)),
				$p = `${eb("subscribe-cap.png")} 1x,\n  ${eb("subscribe-cap@2x.png")} 2x,`;

			function eb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const tb = 3;
			var nb = n("./src/lib/permanentCookieOptions.ts");
			const sb = e => `${e}:1527210000`;
			var ob = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				rb = n.n(ob);
			const {
				fbt: ab
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ib = qe.a.div("Icon", rb.a), cb = () => m.a.createElement(ib, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), lb = qe.a.wrapped(rn.l, "PrimaryButton", rb.a), db = qe.a.wrapped(Op, "Bread", rb.a);
			class ub extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(Nn.j, sb(tb), Object(nb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(db, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(cb, null), m.a.createElement(xp, null, ab._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [ab._param("=User Agreement", m.a.createElement(Mp.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, ab._("User Agreement", null, {
						hk: "XS57W"
					}))), ab._param("=Privacy Policy", m.a.createElement(Mp.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, ab._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(lb, {
						type: "submit"
					}, ab._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var mb = ub;

			function pb() {
				return (pb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const bb = [],
				hb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				gb = {
					opacity: .5,
					x: .5,
					y: 50
				},
				fb = {
					opacity: Object(He.spring)(0),
					x: Object(He.spring)(.6),
					y: Object(He.spring)(80, hb)
				},
				vb = qe.a.wrapped(cp.a, "SnooFacepalm", jp.a),
				Ob = qe.a.wrapped(lp.a, "SnooHappy", jp.a),
				Cb = qe.a.wrapped(go.b, "SubredditIcon", jp.a),
				yb = qe.a.img("CustomIcon", jp.a),
				xb = qe.a.div("Container", jp.a),
				Eb = qe.a.wrapped(tl.a, "Close", jp.a),
				jb = qe.a.wrapped(ap.a, "LockIcon", jp.a),
				_b = qe.a.wrapped(dp.a, "UnlockIcon", jp.a),
				Sb = qe.a.wrapped(ip.a, "RemoveIcon", jp.a),
				Pb = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Eb, pb({
					className: "CloseIcon"
				}, e))),
				kb = qe.a.wrapped(Op, "Bread", jp.a),
				Nb = Object(ee.c)({
					subredditIcon: mp.b,
					toastSlices: e => e.toaster
				}),
				wb = Object(Oe.b)(Nb, e => ({
					dismissToast: t => () => e(Object(fe.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(fe.g)(n))
					}
				}));
			class Mb extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Ib(e, this.props.toastSlices), this.getWillEnterStyles = () => gb, this.getWillLeaveStyles = () => fb
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(He.TransitionMotion, {
						defaultStyles: bb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(xb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === up.b.Custom && void 0 !== t.customToastType) {
							const s = Tb[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === up.b.UappBanner) return m.a.createElement(mb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === up.b.EuCookiePolicy) return m.a.createElement(Up, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(sp("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(op("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(rp("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === up.b.AuthError) return m.a.createElement(Np, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === up.b.Modal ? rn.l : rn.r,
							o = t.kind === up.b.Modal ? rn.o : rn.r;
						return m.a.createElement(kb, {
							className: t.kind === up.b.Modal ? jp.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(sp(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: jp.a.ContentWrapper
						}, Ab(t, this.props.subredditIcon), t.kind === up.b.SuccessLockComment && m.a.createElement(jb, null), t.kind === up.b.SuccessUnlockComment && m.a.createElement(_b, null), m.a.createElement(xp, null, t.text)), m.a.createElement("div", {
							className: jp.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(op(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(rp(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Pb, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Ib = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(He.spring)(1),
							x: Object(He.spring)(1, hb),
							y: Object(He.spring)(0, hb)
						}
					}))
				},
				Ab = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(yb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case up.b.Error:
							return m.a.createElement(vb, null);
						case up.b.SuccessEndBroadcast:
							return m.a.createElement(Sb, null);
						case up.b.SuccessAward:
						case up.b.SuccessCommunity:
						case up.b.SuccessCommunityGreen:
							return m.a.createElement(Ob, null);
						case up.b.SuccessMod:
							return m.a.createElement(Cb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Tb = {
					[up.a.subscribeCap]: e => m.a.createElement(Yp, qp({
						name: Dp.LoggedOutMaxSubscriptions,
						sideImage: $p,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Rb = wb(Object(Ve.c)(Mb)),
				Lb = n("./src/reddit/featureFlags/profileCollections.ts"),
				Fb = n("./src/reddit/helpers/trackers/banners.ts"),
				Db = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Ub = n.n(Db);
			var Bb = qe.a.div("Wrapper", Ub.a),
				Gb = n("./src/reddit/components/AlertBanner/index.m.less"),
				Hb = n.n(Gb);
			const {
				fbt: qb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wb = () => m.a.createElement(Bb, {
				className: Object(je.a)(Hb.a.wrapper, Hb.a.suspended)
			}, m.a.createElement("span", null, qb._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), qb._("Click {=here} for more info.", [qb._param("=here", m.a.createElement("a", {
				className: Hb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, qb._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Vb = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(Bb, {
					className: Object(je.a)(Hb.a.wrapper, Hb.a.suspended)
				}, m.a.createElement("span", null, qb._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [qb._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), qb._("Click {=here} for more info.", [qb._param("=here", m.a.createElement("a", {
					className: Hb.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, qb._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Qb = () => m.a.createElement(Bb, {
				className: Object(je.a)(Hb.a.wrapper, Hb.a.fpr)
			}, m.a.createElement("span", null, qb._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Hb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, qb._("Learn more", null, {
				hk: "1OTc8q"
			}))), zb = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Bb, {
					className: Object(je.a)(Hb.a.wrapper, Hb.a.deprecated)
				}, m.a.createElement("span", null, qb._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [qb._param("update your browser", m.a.createElement(Kb, {
					link: t
				}, qb._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, qb._("If you do not update your browser, we suggest you visit {old reddit} .", [qb._param("old reddit", m.a.createElement("a", {
					className: Hb.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, qb._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Kb = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Hb.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class Jb extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Fb.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Fb.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(zb, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Qb, null) : n ? s || null != s ? m.a.createElement(Vb, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Wb, null) : null
				}
			}
			var Zb = Object(Ve.c)(Jb);
			const Xb = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Yb = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var $b = n("./src/reddit/components/OfflineBanner/index.m.less"),
				eh = n.n($b);
			const {
				fbt: th
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var nh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(je.a)(e.className, eh.a.banner, {
							[eh.a.online]: e.online,
							[eh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: eh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: eh.a.title
					}, e.online ? th._("Found the internet!", null, {
						hk: "fMghd"
					}) : th._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(ro.a, {
						className: eh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				sh = n("./src/reddit/components/Upsell/async.ts"),
				oh = n("./src/reddit/constants/componentSizes.ts"),
				rh = n("./src/reddit/constants/elementIds.ts"),
				ah = n("./src/reddit/constants/history.ts"),
				ih = n("./src/reddit/constants/posts.ts"),
				ch = n("./src/reddit/contexts/InsideOverlay.tsx"),
				lh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				dh = n("./src/reddit/constants/promo.ts"),
				uh = n("./src/reddit/contexts/Promo/index.ts");

			function mh(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case dh.a.Completed:
						return s === dh.a.Shown ? new Map(e.set(n, dh.a.Completed)) : e;
					case dh.a.Dismissed:
						return s === dh.a.Shown ? new Map(e.set(n, dh.a.Dismissed)) : e;
					case dh.a.Shown:
						return s ? e : new Map(e.set(n, dh.a.Shown));
					default:
						throw new Error
				}
			}
			var ph = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(mh, new Map), o = u.useCallback(e => s({
						type: dh.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => s({
						type: dh.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: dh.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: o,
						dismissPromo: r,
						promos: n,
						showPromo: a
					}), [o, r, n, a]);
					return u.createElement(uh.a.Provider, {
						value: i
					}, t)
				},
				bh = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				hh = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				gh = n("./src/reddit/helpers/postCollection.ts"),
				fh = n("./src/reddit/models/Theme/index.ts"),
				vh = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Oh = n("./src/reddit/selectors/experiments/survey.ts"),
				Ch = n("./src/reddit/selectors/notificationBanner.ts"),
				yh = n("./src/reddit/selectors/onboarding.ts"),
				xh = n("./src/reddit/selectors/posts.ts"),
				Eh = n("./src/reddit/components/AppRouter/index.m.less"),
				jh = n.n(Eh);

			function _h() {
				return (_h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Sh = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...o
					} = e;
					const r = Object(u.useMemo)(() => Object(bh.a)(s.search), [s.search]);
					return m.a.createElement("div", _h({
						className: Object(je.a)(jh.a.main, {
							[jh.a.mShowingPaddedPinnedDescriptions]: n,
							[jh.a.removeTopPadding]: r
						}, t),
						id: rh.a
					}, o))
				},
				Ph = Object(Ie.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...o
					} = e;
					const r = Object(Je.a)({
						theme: s,
						...o
					});
					return m.a.createElement("div", _h({
						className: Object(je.a)(jh.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(fh.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(In.c)(n)}px`
						}
					}, o))
				}),
				kh = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const o = Object(u.useContext)(Me.a);
					return m.a.createElement("div", _h({
						className: Object(je.a)(jh.a.lightboxHeaderWrapper, t, {
							[jh.a.lightboxHeaderWrapperExp]: o
						})
					}, s, {
						ref: n
					}))
				},
				Nh = Object(Ch.a)(Fm.a.EmailCollectionBannerId),
				wh = Object(Oe.b)(() => Object(ee.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Ze.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: v.x,
					isBlockingInterstitialEnabled: vh.b,
					isBlockingInterstitialV2Enabled: vh.c,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: ao.c,
					isMatrixChatEnabled: z.b,
					isNpsSurveyEnabled: Oh.d,
					isOnboardingQueryParamEnabled: yh.c,
					isSubscriptionsPinned: co.c,
					isSuccessfulSurveyEnabled: Oh.f,
					isSuspended: v.X,
					isFPR: v.O,
					posts: xh.J,
					profileCollectionsEnabled: Lb.a,
					showEmailCollectionBanner: e => !Object(Dn.N)(e.platform.currentPage) && Nh(e),
					signUpModalIsOpen: Object(jc.c)(Vt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: v.xb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(De.i)()),
					onPostDismissTrigger: () => e(Object(he.l)()),
					onSuccessfulSignupTrigger: () => e(Object(he.h)()),
					onUnpinSubscriptions: () => e(Object(De.j)())
				})),
				Mh = (e, t) => !(!e.state || !e.state[ah.b.IsOverlay] || t === e);
			class Ih extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = we()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < oh.k ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= oh.k && this.props.onPinSubscriptions()
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
						if (Object(Dn.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${S.Nb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === ih.a.PROFILE;
							return !(!r || !Object(gh.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Ze.c)(e.frontpageSignupVariant),
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
					} = this.props, o = n.state && n.state[ah.b.IsOverlay], r = Object(Le.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Le.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === S.Sb.INDEX || t.name === S.Sb.SUBREDDIT && n.subredditName === Go.b.Popular), o = Object(Ze.c)(this.props.frontpageSignupVariant), r = Object(Ze.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = Mh(e.location, this.previousLocation);
					Te.a.write(() => {
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
						isSubscriptionsPinned: l,
						isSuspended: d,
						location: p,
						onClickOutsideOverlay: b,
						routes: h,
						showEmailCollectionBanner: g,
						suspensionDaysLeft: f
					} = this.props, {
						isSignupUpsellDisplayed: v,
						isSignupUpsellHidden: O
					} = this.state, C = this.context, y = Mh(p, this.previousLocation);
					p.state && p.state[ah.b.IsOverlay] && !y ? p.state[ah.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[ah.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[ah.b.CloseLocation] && this.previousLocation.state[ah.b.CloseLocation] === p.state[ah.b.CloseLocation] ? p.state[ah.b.CloseLocation] = {
						...this.previousLocation,
						state: ke()(this.previousLocation.state, ah.b.CloseLocation)
					} : p.state[ah.b.CloseLocation] = this.previousLocation);
					const x = Object(Le.a)(this.previousLocation, p),
						E = y || x ? this.previousLocation : p,
						j = y || x ? this.previousPage : t,
						_ = !(!(j && j.meta && j.meta.name === S.Sb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[qa.B]),
						P = !(!j || !j.meta || j.meta.name !== S.Sb.MODERATION_PAGES),
						k = Object(Dn.x)(j),
						N = this.getIsPostCollection(),
						w = v && !O,
						M = e.showBanner;
					return o ? s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Dn.a.Provider, {
						value: j
					}, m.a.createElement(Ea.c, {
						isOverlayOpen: y
					}, m.a.createElement(np.a, {
						forceRedditTheme: _
					}, v && m.a.createElement(It, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Ah, {
						browserInfo: C,
						connection: e,
						isFPR: r,
						isInline: w,
						isSuspended: d,
						showOffline: M,
						suspensionDaysLeft: f,
						location: E
					})), m.a.createElement(ch.a.Provider, {
						value: !1
					}, m.a.createElement(np.a, {
						forceRedditTheme: _ || P,
						isCommentsPage: k
					}, m.a.createElement(ph, null, m.a.createElement(Th, {
						browserInfo: C,
						frontpageSignupVariant: n,
						isCommentsPage: k,
						isInline: w,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isSubscriptionsPinned: l,
						location: E,
						overlayIsOpen: y,
						page: j,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: r,
						showOffline: M,
						showSuspended: d
					}), m.a.createElement(sh.b, null), m.a.createElement(sh.a, null)))))), m.a.createElement(Dn.a.Provider, {
						value: t
					}, y && m.a.createElement(ch.a.Provider, {
						value: !0
					}, m.a.createElement(np.a, {
						isOverlay: !0
					}, m.a.createElement(Rh, {
						browserInfo: C,
						isPostCollection: N,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: r,
						showOffline: M,
						showSuspended: d
					}))), m.a.createElement(np.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Rb, null), m.a.createElement(tp.a, null), g && m.a.createElement(Ue.a, null), m.a.createElement(Rn, null), m.a.createElement(to, null), c && m.a.createElement(Lm, null)))))
				}
			}
			Ih.contextType = Ae.a;
			const Ah = Object(Ve.c)(e => {
					const t = Object(Dn.eb)(),
						n = Object(lh.db)(t),
						s = Object(u.useContext)(Me.a),
						o = Object(u.useMemo)(() => Object(bh.a)(e.location.search), [e.location.search]),
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
					return m.a.createElement(u.Fragment, null, m.a.createElement(Zb, b), n && !o && m.a.createElement(Tm, {
						className: Object(je.a)(jh.a.header, Xb(jh.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(nh, {
						className: Object(je.a)(jh.a.offlineBanner, Xb(jh.a, b)),
						online: a.online,
						showBanner: a.showBanner
					}))
				}),
				Th = Object(Ve.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = ke()(e, "key"),
							s = ke()(t, "key");
						return Se()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = ke()(e, ["key", "locationState"]),
								s = ke()(t, ["key", "locationState"]);
							return Se()(n, s)
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
						return m.a.createElement(Sh, {
							"aria-hidden": s,
							className: Object(je.a)(Xb(jh.a, this.props), {
								[jh.a.withUpsell]: !!e,
								[jh.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: r,
							location: t
						}, r && m.a.createElement(ep, {
							className: Object(je.a)(jh.a.pinnedSubscriptions, {
								...Xb(jh.a, this.props),
								[jh.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(Ce.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(je.a)(jh.a.bottomSpacer, Yb(jh.a, this.props))
						}))
					}
				});
			class Rh extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Fe.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[ah.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = hh.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Re.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && hh.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === S.Sb.SUBREDDIT_CREATION || t.meta.name === S.Sb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(Ph, {
						className: Object(je.a)(Xb(jh.a, this.props), {
							[jh.a.mIsCommentsLightbox]: o,
							[jh.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(je.a)(jh.a.overlayWrapper, Xb(jh.a, this.props))
					}, m.a.createElement("div", {
						className: Object(je.a)(jh.a.overlayScrollContainer, {
							[jh.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: rh.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(kh, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(je.a)(Xb(jh.a, this.props), {
							[jh.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(Rm.a, {
						page: t
					})), m.a.createElement(Ce.f, null, n), m.a.createElement("div", {
						className: Object(je.a)(jh.a.bottomSpacer, Yb(jh.a, this.props))
					}))))
				}
			}
			var Lh = wh(Object(Ve.c)(Ih)),
				Fh = n("./src/reddit/contexts/User/index.tsx");

			function Dh(e) {
				return m.a.createElement(Fh.b, null, e.children)
			}
			var Uh = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Bh = n("./src/reddit/constants/shortcuts.ts"),
				Gh = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Hh = n.n(Gh);
			var qh = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: Hh.a.shortcutDiv,
					id: Bh.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let Wh = [];
			const Vh = "https://w3-reporting.reddit.com/policy";
			let Qh = 1;
			const zh = !1;
			const Kh = zh ? Promise.resolve() : async function() {
				if (zh) return;
				const e = await fetch(Vh, {
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
					e.length > 0 && (Wh = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (Qh = e)
				} catch {}
			}();

			function Jh(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				zh ? console.error("w3-reporting is client-side only") : Zh.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let Zh = [];
			async function Xh(e) {
				if (0 === e.length || 0 === Wh.length) return;
				if (Math.random() > Qh) return;
				await Kh;
				const t = e.map(eg).filter(e => e.age < 3e5);
				try {
					const e = await fetch($h(), {
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
				Xh([...Zh]), Zh = []
			}, 5e3), zh || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (Xh([...Zh]), Zh = [])
			});
			let Yh = -1;
			const $h = () => (Yh = (Yh + 1) % Wh.length, Wh[Yh]);

			function eg(e) {
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

			function tg() {
				const e = Object(Oe.e)(e => {
					const t = Object(Pn.b)(e);
					return t && Object(pn.v)(t) || "unknown"
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
							Jh("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							Jh("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), o(t => {
							Jh("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), r(t => {
							Jh("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							Jh("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var ng = n("./src/reddit/components/Header/Sparse.tsx"),
				sg = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				og = n("./src/reddit/pages/InternalServerError/index.m.less"),
				rg = n.n(og);
			const {
				fbt: ag
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ig = Object(ee.c)({
				showError: wn.d.showVerboseErrors
			}), cg = Object(Oe.b)(ig)(e => {
				const t = Object(u.useContext)(Me.a);
				return m.a.createElement(ch.a.Provider, {
					value: !1
				}, m.a.createElement(np.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(ng.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: rg.a.container
				}, m.a.createElement("div", {
					className: rg.a.mainContent
				}, m.a.createElement(sg.a, {
					className: rg.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: rg.a.title
				}, ag._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: rg.a.subTitle
				}, ag._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(rn.l, {
					onClick: () => window.location.reload(!0)
				}, ag._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: rg.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(je.a)(rg.a.topImageContainer, {
						[rg.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: rg.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: rg.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: rg.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function lg() {
				return (lg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const dg = Object(ee.c)({
					isNavbarLikeMwebEnabled: kl.a,
					isNightmode: v.db,
					theme: e => e.themes.current
				}),
				ug = Object(Oe.b)(dg, {})(e => {
					let {
						children: t,
						theme: n,
						isNightmode: s,
						isNavbarLikeMwebEnabled: o
					} = e;
					const r = Object(Je.a)({
						theme: n
					});
					return Object(u.useEffect)(() => {
						s ? (document.documentElement.classList.remove("theme-light"), document.documentElement.classList.add("theme-dark")) : (document.documentElement.classList.remove("theme-dark"), document.documentElement.classList.add("theme-light"))
					}, [s]), m.a.createElement(Me.a.Provider, {
						value: o
					}, m.a.createElement("div", {
						className: Object(je.a)(xe.a.container, {
							[xe.a.containerExp]: o
						}, "theme-beta"),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, t))
				});

			function mg(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Ve.a, null, m.a.createElement(ug, null, m.a.createElement(Dh, null, m.a.createElement(Ee.a, null), m.a.createElement(Uh.a, null), m.a.createElement(qh, null, m.a.createElement(t, null, m.a.createElement(Ce.d, {
						component: pg(n)
					}))), m.a.createElement(tg, null))))
				}
				return m.a.createElement(cg, {
					error: e.error
				})
			}
			const pg = e => t => m.a.createElement(Lh, lg({
					routes: e
				}, t)),
				bg = 1e3;
			class hg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = we()(() => Object(Mn.Eb)(this.props.storageKey, this.props.value), bg)
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
			hg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const gg = Object(ee.a)(v.Q, e => ({
				storageKey: Lo.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var fg = Object(Oe.b)(gg)(hg);
			var vg = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(fg, null)),
				Og = n("./src/reddit/constants/headers.ts"),
				Cg = n("./src/reddit/constants/jsapiEvents.ts"),
				yg = n("./src/reddit/constants/screenWidths.ts"),
				xg = n("./src/reddit/contexts/AdminEvents.ts"),
				Eg = n("./src/reddit/contexts/ApiContext.tsx"),
				jg = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				_g = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const Sg = () => e => t => e(t);
			var Pg = n("./src/lib/safeBadgeUpdate.ts");

			function kg(e) {
				const t = Object(qu.g)(e);
				Object(Pg.a)(t)
			}
			var Ng = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== _g.b && n.type !== _g.d || kg(e.getState()), s
				} : Sg,
				wg = n("./node_modules/brcast/dist/brcast.es.js"),
				Mg = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var Ig = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(wg.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Mg.b)(s) || Object(v.N)(s) || Object(v.M)(s)) && (e = !0, Object(B.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(Mg.b)(a)) {
									const n = Object(v.N)(a) || Object(v.M)(a);
									e && !n ? (e = !1, Object(B.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(B.e)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(wg.a)([]),
					middleware: () => e => t => e(t)
				}),
				Ag = n("./node_modules/lodash/debounce.js"),
				Tg = n.n(Ag),
				Rg = n("./src/lib/domUtils/index.ts"),
				Lg = n("./src/reddit/actions/adsSignals.ts");
			const Fg = 30 * S.pb;
			let Dg = Date.now();
			const Ug = () => {
					Dg = Date.now()
				},
				Bg = !!Object(Rg.f)() && {
					passive: !0
				};
			window.addEventListener("click", Ug, !1), window.addEventListener("wheel", Tg()(Ug, 250), Bg), window.addEventListener("mousemove", Tg()(Ug, 250), Bg), window.addEventListener("keydown", Tg()(Ug, 250), Bg);
			var Gg = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Dg >= Fg ? (e.dispatch(be.h()), e.dispatch(Lg.b()), Ug()) : Ug()
					})), e => t => e(t)
				},
				Hg = n("./src/reddit/constants/preferences.ts"),
				qg = n("./src/reddit/helpers/cookies/index.ts");
			const Wg = new Set([Qc.g, Qc.i, ge.b, Qc.d, Qc.o, De.d, De.e, Qc.r]);
			var Vg = e => t => n => {
					const s = t(n);
					if (Wg.has(n.type)) {
						const t = e.getState().user,
							n = ka()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Hg.b, Hg.d, Hg.e]);
						Object(qg.a)({
							prefs: n
						})
					}
					return s
				},
				Qg = n("./src/reddit/actions/tabBadging.ts"),
				zg = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Kg = n("./src/reddit/selectors/removedPosts.ts"),
				Jg = n("./src/reddit/models/Subreddit/index.ts");
			const Zg = (e, t) => ((e, t) => {
					var n, s, o, r;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (r = null === (o = e.subreddits) || void 0 === o ? void 0 : o.models) || void 0 === r ? void 0 : r[a];
					return !!i && ((null == i ? void 0 : i.type) !== Jg.f.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(Kg.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				Xg = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Yg = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Pn.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Xg.has(o), a = Object(Dn.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = $g(e), l = s === S.Sb.COMMENTS || s === S.Sb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === S.Sb.SEARCH_RESULTS || s === S.Sb.SUBREDDIT_LEADERBOARD || l && d, m = Object(Kg.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: o
						} = e.platform;
						if (!Object(Kg.d)(e)) return !1;
						const r = null === (t = null == o ? void 0 : o.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = r && Object(Q.y)(r),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						return !!i && Zg(e, i)
					})(e) || u;
					return i || r || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				$g = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object(zg.a)(t, !1, s)
					}
					return n
				};
			var ef = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const tf = "theme-color",
				nf = `meta[name="${tf}"]`;

			function sf(e) {
				return e ? ef.b.body : ef.a.body
			}
			var of = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				if (n.type === ue.f) {
					const t = e.getState(),
						s = Object(v.P)(t),
						{
							meta: o
						} = n.payload;
					s ? ((e, t) => {
						const n = Object(qu.i)(e);
						Object(Qg.c)(n, t)
					})(t, o.title) : Te.a.write(() => {
						document.title = o.title, ((e, t) => {
							if (t.head) {
								let n = t.querySelector("meta[name='robots']");
								const s = Yg(e),
									{
										head: o
									} = t;
								s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
							}
						})(t, document)
					})
				} else if (n.type === Qc.i) {
					! function(e) {
						Te.a.write(() => {
							const t = document.head.querySelector(nf);
							if (t) {
								const n = Object(v.db)(e);
								t.content = sf(n)
							}
						})
					}(e.getState())
				}
				return s
			} : Sg;

			function rf(e) {
				return Object(z.d)(e) && function(e) {
					return Object.values(e.posts.models).some(t => void 0 === Object(Ju.a)(e, t.id))
				}(e)
			}
			const af = (e => t => n => s => {
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
					rf(e.getState()) && e.dispatch(K)
				}
			}]);
			var cf = n("./src/reddit/helpers/survey/index.ts");
			var lf = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(cf.a).filter(t => t === e).length)(t.type) && Object(Mn.U)(cf.a[t.type]), e(t)) : Sg;
			const df = 5 * S.pb;
			var uf = e => {
					const t = we()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(be.g())
					}, df);
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
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== be.a && t.type !== be.b && t.type !== be.c && t.type !== be.e || r(t.payload), t.type === be.d && (clearTimeout(n), n = null), e(t))
				},
				mf = n("./src/reddit/singleton/tracing/index.ts");
			var pf = e => e => t => {
					const n = () => e(t);
					return mf.b.isEnabled ? mf.b.recordLocalSpan(t.type, n) : e(t)
				},
				bf = n("./src/reddit/actions/frontpage/constants.ts"),
				hf = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				gf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				ff = n("./src/reddit/actions/pages/profilePosts.ts"),
				vf = n("./src/reddit/actions/pages/search/index.ts"),
				Of = n("./src/reddit/actions/pages/subreddit.ts"),
				Cf = n("./src/reddit/actions/tracking.ts"),
				yf = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				xf = n("./src/reddit/helpers/history/index.ts"),
				Ef = n("./src/reddit/helpers/trackers/commentList.ts"),
				jf = n("./src/reddit/helpers/trackers/postList.ts"),
				_f = n("./src/reddit/helpers/routeKey/index.ts");
			var Sf = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Cf.c({
							routeKey: t
						}))
					};
					if (n.type === ue.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(ko.H)(s, o) || "",
							i = (s.subreddits.about[r] || {}).advertiserCategory;
						a.trigger("pageview", {
							...ka()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(_f.b)(c, s, Object(yf.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(Pn.i)(s) && Object(xf.b)(ah.b.IsOverlay) || Object(Ka.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(yf.a)(s, l),
							u = Object(_f.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case bf.c:
						case gf.b:
						case gf.e:
						case ff.PROFILE_POSTS_LOADED:
						case hf.e:
						case Of.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case vf.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case bf.g:
						case Ar.i:
						case ff.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							jf.l(r, t);
							break
						}
						case hf.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							Ef.a(r, t);
							break
						}
						case Ia.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				Pf = n("./src/reddit/helpers/datadome.ts"),
				kf = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Nf = n("./src/reddit/helpers/trackers/global.ts");
			let wf = null;
			const Mf = () => {
				wf && window.clearTimeout(wf), wf = null
			};
			var If = e => {
					wf = window.setTimeout(() => {
						Mf(), Object(U.a)(Object(Nf.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Mf)
				},
				Af = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Tf = n("./src/reddit/actions/connection/constants.ts");
			const Rf = Object(b.a)(Tf.b),
				Lf = Object(b.a)(Tf.a),
				Ff = Object(b.a)(Tf.c);
			var Df = n("./src/reddit/actions/meta.ts");
			const Uf = (e, t) => Object(U.a)({
					...pn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(pn.d)(e, {
						type: t
					})
				}),
				Bf = "(display-mode: minimal-ui)";
			const Gf = 3 * S.Xb;

			function Hf(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Bf).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Df.i)());
				const t = window.matchMedia(Bf);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Df.i)()) : e.dispatch(Object(Df.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						kg(t)
					}, 1e3), Uf(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Rf()), setTimeout(() => e.dispatch(Ff()), Gf)
				}), window.addEventListener("offline", () => e.dispatch(Lf()))
			}
			const qf = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Nn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Nn.g,
							value: s,
							cookieOptions: Object(nb.a)(),
							cookieContext: t
						};
					Object(wp.c)(o)
				}
			};
			var Wf = n("./src/reddit/layout/page/Listing/index.tsx"),
				Vf = n("./src/reddit/reducers/index.ts");
			var Qf = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				zf = n("./src/reddit/selectors/experiments/utils.ts");
			const Kf = e => !!Object(zf.a)((e => Object(ti.c)(e, {
					experimentEligibilitySelector: hm.f,
					experimentName: Fn.Fc
				}))(e)),
				Jf = {
					displayDelay: 15,
					displayOnRoutes: [S.Sb.SUBREDDIT, S.Sb.COMMENTS],
					experimentName: Fn.ee,
					experimentVariant: Fn.ie.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Zf = e => {
					const {
						base_url: t
					} = Object(pn.ab)(e), n = Object(Pn.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
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
				Xf = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Jf, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Jf)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Jf, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Jf, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(ti.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: ti.a
							}) === s
						})(Jf, e)) return {
						displayDelay: Jf.displayDelay,
						externalVars: Zf(e)
					}
				};
			var Yf = n("./src/reddit/singleton/EventSystem.ts"),
				$f = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				ev = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				tv = n("./src/reddit/reducers/features/categories/index.ts"),
				nv = n("./src/lib/sentry/index.ts"),
				sv = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ov = Object(b.a)(sv.C),
				rv = () => {
					return Object(Mn.A)(Lo.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var av = n("./src/reddit/actions/global/constants.ts");
			Object(Hi.a)({
				features: {
					categories: tv.a
				}
			});
			const iv = Object(b.a)(av.a),
				cv = e => async (t, n) => {
					t((() => async e => {
						const t = rv();
						t && e(ov(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || nv.c.withScope(e => {
						Object(nv.a)(e, {
							serverLogging: !1
						}), nv.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(iv(o))
				}, lv = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, dv = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return lv.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(Y.openD2xOnboardingModal)())
				};
			var uv = n("./src/reddit/actions/notificationsInbox/index.ts"),
				mv = n("./src/reddit/actions/onboarding/index.ts"),
				pv = n("./src/reddit/constants/countrySites.ts"),
				bv = n("./src/reddit/selectors/countrySites.ts");
			const hv = pv.b ? `${pv.a}/${pv.b}` : `${pv.a}`,
				gv = (e, t) => {
					return !!Object(bv.e)(e) && !(t && !Object(bv.d)(t))
				},
				fv = e => e.startsWith("/r/") ? e.replace("/r/", `/${hv}/r/`) : e;
			var vv = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Ov = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const Cv = Object(F.a)({
					actionDispatchers: {
						loidReceived: ve.q,
						sessionTrackerReceived: ve.x
					},
					authHeaders: {
						[Og.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: ve.b,
						sessionTrackerReceived: ve.j,
						userAuthenticated: be.c,
						userLoggedOut: be.d,
						userReauthenticated: be.e,
						headersReceived: q.a
					},
					onBeforeRequestFactory: Af.a,
					statsAppName: S.o.Redesign
				}),
				yv = Object(D.a)(Cv.apiContext),
				xv = Object(D.a)(Cv.apiContext, i.a.gqlRealtimeUrl),
				Ev = Object(D.a)(Cv.apiContext, i.a.gqlRealtime2Url),
				jv = Ig();
			let _v;
			Object(w.a)({
				reducerMap: Vf.a,
				routes: Hu,
				apiContext: Cv.apiContext,
				gqlContext: yv.gqlContext,
				gqlRealtime2Context: Ev.gqlContext,
				appFactory: (e, t) => m.a.createElement(xg.a.Provider, {
					value: jv.broadcaster
				}, m.a.createElement(Eg.a.Provider, {
					value: {
						apiContext: Cv.apiContext,
						gqlContext: yv.gqlContext,
						gqlRealtime2Context: Ev.gqlContext
					}
				}, m.a.createElement(jg.b, null, m.a.createElement(mg, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(vg, null)))),
				appName: S.o.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = _v;
						if (!n) return;
						n.dispatch(Object(ue.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ue.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Hu,
					apiContext: Cv.apiContext,
					gqlContext: yv.gqlContext,
					gqlRealtimeContext: xv.gqlContext,
					gqlRealtime2Context: Ev.gqlContext
				}), jv.middleware, Gg, Cv.middleware, yv.middleware, Ev.middleware, uf, Vg, af, pf, Sf, of , lf, cd.a, Ng, e => t => n => {
					let s, o;
					if (!Object(vv.b)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!gv(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(bv.d)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${hv}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!gv(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(bv.d)(e);
								(n || t) && (o.permalink = fv(o.permalink))
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
					if (!Object(vv.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!gv(e, t.name)) return t;
							const n = Object(bv.d)(t.id);
							if (t.name || n) {
								const e = fv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!gv(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(bv.d)(s.id),
									o = Object(bv.d)(s.name);
								if (e || o) {
									const e = fv(s.url),
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
					loading: m.a.createElement(Wf.a, {
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
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(re.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Hf(s);
					const r = s.getState();
					s.dispatch(Object(q.b)({
							headers: {
								[o.a]: "1"
							}
						})), Object(B.d)("enabled" === Object(ti.c)(s.getState(), {
							experimentEligibilitySelector: ti.a,
							experimentName: Fn.Yf,
							expEventOverride: !1
						})), Object(B.c)("enabled" === Object(ti.c)(s.getState(), {
							experimentEligibilitySelector: ti.a,
							experimentName: Fn.ag
						})), Object(B.g)("enabled" === Object(ti.c)(s.getState(), {
							experimentEligibilitySelector: ti.a,
							experimentName: Fn.Zf
						})), Object(B.f)(yv.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(Nf.a)("tab_closed")(e),
								n = G.g(t),
								o = Object($f.a)(n),
								r = Object(ev.b)(o);
							Object(L.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(bh.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(ue.h)());
					const a = Object(v.db)(s.getState());
					s.dispatch(Object(ge.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(ti.c)(e, {
							experimentEligibilitySelector: ti.a,
							experimentName: Fn.L
						}) === Fn.W.Enabled)(s.getState())) {
						mf.b.enableTracing(!0);
						const e = mf.b.createTraceFromId(l);
						mf.b.setParent(e)
					}
					s.dispatch(Object(ue.i)(n));
					t.listen((e, t) => {
						const o = Object(I.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(ue.j)(e, t, o))
					});
					const {
						currentPage: d
					} = r.platform;
					if (d) {
						const e = [qa.j];
						if (Object(Pn.j)(r) && e.push(qa.e), e.length > 0) {
							const t = Object(k.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Un.a.initialize(r), {
						localStorageData: Object(Mn.B)()
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
					_v = l;
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
							i = Object(ko.H)(n, a) || "";
						if (qf(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(O(i, a));
							const e = Object(Pn.e)(n);
							e && l.dispatch(C(e))
						}
						Yf.a.publish(Cg.c, r, document)
					});
					const p = l.getState(),
						b = Object(cd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(x(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(ko.H)(p, h) || "";
					if (h) {
						l.dispatch(O(g, h));
						const e = Object(Pn.e)(p);
						e && l.dispatch(C(e))
					}
					const f = Object(ko.H)(p, h) || "",
						E = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: E
					}), l.dispatch(cv({
						localStorageData: d
					}));
					const w = Object(yh.c)(p);
					w && (l.dispatch(le()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.F]))), l.dispatch(dv());
					const I = Object(Pn.q)(p),
						F = null == I ? void 0 : I[qa.v];
					F && (history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.v])), w || l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == I ? void 0 : I[qa.D]) && (l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.D]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(ko.H)(e, a) || "";
						if (Object(L.a)(), qf(i, {
								country: e.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(U.b)(S.o.Redesign, {
									page: a,
									type: "rum"
								}), Object(N.c)(e.meta.userAgent) && window.innerWidth > yg.b) {
								const t = Object(r.f)(c);
								A.a && A.a.timing && mf.b.isEnabled && (mf.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), mf.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(Pf.a)()],
									s = !0;
								if (Object(Pn.g)(e)) {
									const t = Object(kf.a)(e);
									n.push(Object(kf.c)(t))
								}
								const o = {
									isLoggedIn: Object(v.Q)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(Ka.k)(o.routeMatch, l.getState(), H.TimerType.Initial, i, o.urlParams);
							const d = Object(P.a)(window.location.href);
							d && d.get(qa.b) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.b])), Object(R.a)(d.get(qa.Q)) && l.dispatch(Object(fe.f)({
								kind: up.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(qa.R) && (l.dispatch(Object(X.a)(d.get(qa.R))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.R])));
							let u = !1;
							const m = Object(v.T)(e);
							(Object(xf.b)(ah.b.JustLoggedIn) || m) && (l.dispatch(Object(fe.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(xf.c)(ah.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [qa.u]))), Object(xf.b)(ah.b.JustLoggedOut) && (u = !0, Object(xf.c)(ah.b.JustLoggedOut)), ie().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(mv.openReonboardingModalIfNeeded)());
							let b;
							se(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(oe())), e(oe())
							});
							const h = Kf(e);
							if (!F)
								if (h || !1 === Mn.V()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											ie().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(Qf.a)(e) ? Object(v.Q)(e) ? (n(), p()) : b && b() : n(t)
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
							l.dispatch(Object(Z.c)())
						}
						Object(v.Q)(l.getState()) && !Object(bh.a)(window.location.search) && l.dispatch(Object(W.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object(ce.d)()), await Object(_.a)() && Object(Nf.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Xf(e);
								t && (await (async e => {
									return (await Object(ae.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
							if ("visible" !== document.visibilityState && (Mn.Wb(Date.now()), Object(U.a)(Object(Nf.a)("tab_backgrounded")(t))), (e => Object(ti.c)(e, {
									experimentEligibilitySelector: e => !Object(ne.d)(e),
									experimentName: Fn.Rc
								}) === Fn.fd.Enabled)(t) && "visible" === document.visibilityState && n && Object(Ka.k)(n.routeMatch, l.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Mn.v(),
									t = Mn.w(),
									n = Mn.H(),
									s = Mn.S();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(U.a)(Object(Nf.e)("tab_backgrounded", n)(l.getState(), o, e, t))
								}(s || e || n || t) && (Mn.cb(), Mn.gb(), Mn.eb(), Mn.db())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Ov.d[n.locationState.clickId] && !Ov.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Ov.b)(n.locationState.clickId) : Object(Ov.c)(n.locationState.clickId))
						}), Object(ne.h)(l.getState()) && If(l.getState), l.dispatch(Object(he.o)())
					}), window.history.scrollRestoration = "manual", Yf.a.attachStore(l), l.dispatch(Object(pe.b)(T.a.PageLoad));
					const D = Mn.o(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						B = Mn.n(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(me.B)({
						posts: null != D ? D : []
					})), l.dispatch(Object(J.m)({
						comments: null != B ? B : []
					})), l.dispatch(K), Object(bm.e)(l.getState()) && l.dispatch(Object(uv.e)()), Object(j.requestIdleCallback)(() => {
						const e = Mn.C();
						(!e || e && Date.now() - e.lastUpdated >= S.E) && l.dispatch(Object(he.f)())
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", u({
					className: Object(r.a)(d.a.backgroundContainer, n),
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
					layout: (e, t) => t.forcedLayout || Object(l.S)(e, t)
				}),
				g = Object(r.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: r,
					fitPageToContent: a,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return o.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(l.P)(g),
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
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				O = n.n(v);
			var C = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return o.a.createElement(b.a, {
						className: O.a.backToSubreddit,
						to: n
					}, o.a.createElement("div", {
						className: O.a.innerContainer
					}, o.a.createElement(f.a, {
						name: h.a.back,
						className: p()(O.a.content, O.a.back)
					}), o.a.createElement(g.b, {
						className: p()(O.a.content, O.a.subredditIcon)
					}), o.a.createElement("span", {
						className: p()(O.a.content, O.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				x = n("./src/reddit/layout/page/Listing/index.m.less"),
				E = n.n(x);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: p,
					content: b,
					contentBanner: h,
					contentClassName: g,
					contentNavBar: f,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: x,
					hideOnlyChildMargin: j,
					isCollectionLayout: _,
					isPageSwapped: S,
					maxWidth: P,
					navBar: k,
					redditStyle: N,
					sidebar: w,
					sidebars: M,
					trendingUnit: I,
					subredditId: A
				} = e, T = I ? "28px" : "0", R = S ? {
					marginRight: `${c.p}px`,
					marginTop: T
				} : {
					marginLeft: `${c.p}px`,
					marginTop: T
				}, L = w && o.a.createElement("div", {
					className: Object(i.a)(E.a.sidebar, _ ? E.a["m-collectionLayout"] : E.a.defaultLayout),
					style: R
				}, w), F = o.a.createElement(a.a, {
					hideOnlyChildMargin: j,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: x,
					isCollectionLayout: _
				}, h, n && o.a.createElement(C, {
					subredditName: n
				}), b);
				let D;
				D = M ? o.a.createElement(o.a.Fragment, null, M[0], F, M[1]) : S ? o.a.createElement(o.a.Fragment, null, L, F) : o.a.createElement(o.a.Fragment, null, F, L);
				const U = v ? `${P||d.a+2*c.l}px` : "100%",
					B = Object(s.useContext)(u.a);
				return o.a.createElement(y.a, {
					subredditId: A
				}, o.a.createElement("div", {
					className: Object(i.a)(E.a.outerContainer, l.i, m, {
						[E.a.outerContainerExp]: B
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: l.h,
					redditStyle: N,
					backgroundColor: t
				}), o.a.createElement("div", {
					className: E.a.innerContainer
				}, k, f, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, I), o.a.createElement("div", {
					className: E.a.body,
					style: {
						maxWidth: U
					}
				}, D))))
			}
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
			};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.e:
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
				showLiveContentAvailabilityTooltip: g
			})
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
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
					routePredicate: l.Q
				},
				g = {
					...b,
					path: u,
					meta: {
						name: a.Sb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.Q)(e) && !Object(c.c)(e)
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
					routePredicate: l.Q
				},
				O = {
					...b,
					path: m,
					meta: {
						name: a.Sb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.Q)(e) && !Object(c.c)(e)
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
						Object(b.Q)(t()) || await e(Object(d.s)())
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
						Object(b.Q)(t()) || await e(Object(d.s)())
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
					Object(b.Q)(n()) || await t(Object(d.s)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, x = {
					action: y,
					chunk: o.u.EMPTY,
					exact: !0,
					meta: {
						name: o.Sb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, O, C, x]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
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
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
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
				return j
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
				experimentName: l.be
			}), e => e === l.fe.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/lib/getParsedUserAgent/index.ts");
			const v = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(f.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.Ff
			}), e => e === l.Sf.Enabled);
			var O = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/responsiveSettings.ts"),
				y = n("./src/reddit/selectors/accountManager/modalData.ts");
			const x = Object(a.c)({
					frontpageSignupVariant: u.a,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.Jf
					}),
					blockingInterstitialVariant: h.e,
					blockingInterstitialV2Variant: h.f
				}),
				E = Object(a.c)({
					isAmModalDesignUpdateEnabled: d.a,
					isBlockingInterstitialEnabled: h.b,
					isBlockingInterstitialV2Enabled: h.c,
					isGoogleSsoGisEnabled: b,
					isSafariOneTapEnabled: v
				}),
				j = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(y.c)(e), y.a, C.a, O.j, x, E, (e, t, n, a, d, u, m, p) => {
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
						isGoogleSsoGisEnabled: x,
						isSafariOneTapEnabled: E
					} = p;
					let j = `${r.a.accountManagerOrigin}${e}`;
					if (j = Object(i.a)(j, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (j = Object(i.a)(j, {
							[`experiment_${l.Jf}`]: f
						})), x && (j = Object(i.a)(j, {
							[`experiment_${l.be}`]: "enabled"
						})), j = Object(i.a)(j, {
							thing_id: n
						}), j = Object(i.a)(j, {
							experiment_d2x_onboarding: "enabled"
						}), E && (j = Object(i.a)(j, {
							[`experiment_${l.Ff}`]: "enabled"
						})), C && (j = Object(i.a)(j, {
							[`experiment_${l.Rb}`]: b
						})), y && (j = Object(i.a)(j, {
							[`experiment_${l.Sb}`]: h
						})), O && (j = Object(i.a)(j, {
							[`experiment_${l.zb}`]: "enabled"
						})), g && (j = Object(i.a)(j, {
							[l.gd]: g,
							uiMode: t
						})), v && (j = Object(i.a)(j, {
							[`experiment_${l.Ae}`]: v
						})), d && (j = Object(i.a)(j, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== o.DEFAULT_LOCALE && e && (j = Object(i.a)(j, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? j : j = Object(i.a)(j, {
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
					const o = Object(a.Ab)(e, {
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
				experimentEligibilitySelector: r.Q,
				experimentName: s.Qc
			})
		},
		"./src/reddit/selectors/experiments/delayDnPermission.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => s.Tc.DnNoModal === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Bb
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
			const d = Object(s.a)(l.Z, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(r.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.gd,
					throttledVariants: {
						[o.Zd.CurrentThrottled]: o.gd
					}
				}), i.a),
				m = e => e === o.Zd.CurrentThrottled,
				p = e => e === o.Zd.CurrentThrottled || e === o.Zd.CurrentUnthrottled || e === o.Zd.CurrentUnthrottledCopy || e === o.Zd.NewPopUnthrottledCopy,
				b = e => e === o.Zd.NewPopUnthrottledCopy,
				h = e => e === o.Zd.NewPageUnthrottledCopy || e === o.Zd.NewPageUnthrottledCopyFields,
				g = e => e === o.Zd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.Eb)
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
					experimentName: o.se,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === o.ve.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Dc,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === o.cd.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Tb,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === o.te.ContinuousScroll),
				b = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ub,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === o.ue.Enabled),
				g = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ec,
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
					experimentName: o.Xb,
					experimentEligibilitySelector: a.e
				}), e => e === o.fb.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === o.gb.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === o.hb.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ac,
					experimentEligibilitySelector: a.e
				}), e => e === o.ib.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.cc,
					experimentEligibilitySelector: a.e
				}), e => e === o.kb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.bc,
					experimentEligibilitySelector: a.e
				}), e => e === o.jb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.Me,
				experimentEligibilitySelector: o.a
			}) === s.Ue.Enabled
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
						experimentName: s.jf
					}) === s.Rd
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.if
					}) === s.Rd
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Xe
					}) === s.Rd
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.We
					}) === s.Rd
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
						experimentName: s.Bc
					}) === s.bd.Enabled
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
					experimentName: s.hf
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/happeningNow/index.ts");
			Object(o.a)({
				features: {
					happeningNow: r.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.isLiveContentAvailable)
				},
				i = Object(s.a)(a, e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.showLiveContentAvailabilityTooltip)
				}, (e, t) => e && t),
				c = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.happeningNow) || void 0 === s ? void 0 : s.models[t]
				},
				l = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.popular) && void 0 !== s ? s : []
				},
				d = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.recommended) && void 0 !== s ? s : []
				},
				u = e => {
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
			Object(s.a)(i.Eb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Eb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.Eb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.f, o.o, o.q].includes(e))
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
			e.exports = JSON.parse('{"id":"d9dc3b325601"}')
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
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e", "vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d", "ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit~SubredditForkingCTA", "Governance~ModListing~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.667c76843446a3579fc2.js.map