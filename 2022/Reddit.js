// https://www.redditstatic.com/desktop2x/Reddit.34e8f398aa2775239e77.js
// Retrieved at 10/10/2022, 6:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const r = 120 * s.mb;
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
						return !e || e <= r
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
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
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [l, d] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), g = Object(r.useMemo)(() => {
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
				} = Object(o.a)(t, a, g);
				return Object(r.useMemo)(() => ({
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
				return De
			})), n.d(t, "g", (function() {
				return Fe
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
					let r, o;
					if (s === N.i.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = E.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...O,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, s) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === N.i.MARKDOWN ? o.text = n.text : (o.text = null, o.richtext_json = s), Object(C.a)(Object(x.a)(e, [j.a]), {
						method: r.ob.POST,
						endpoint: Object(_.a)(Object(w.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
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
				}, D = async (e, t, n, s, r) => {
					const o = s.commentMode === N.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: o ? s.text : null,
								richText: o ? null : r
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
				X = n("./src/reddit/models/Comment/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				se = n("./src/reddit/selectors/commentSelector.ts"),
				re = n("./src/reddit/selectors/experiments/chat.ts"),
				oe = n("./src/reddit/constants/experiments.ts"),
				ae = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./node_modules/reselect/es/index.js");
			const ce = Object(ie.a)(e => Object(ae.c)(e, {
				experimentEligibilitySelector: ae.a,
				experimentName: oe.Lb
			}), e => e === oe.Od);
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
						const r = s();
						if (!!r.features.comments.drafts[n])
							if (Object(me.S)(r) && t) {
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
				fe = Object(o.a)(be.L),
				ve = Object(o.a)(be.H),
				Oe = Object(o.a)(be.N),
				Ce = Object(o.a)(be.M),
				ye = Object(o.a)(be.K),
				xe = async (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					await J.f(e, n, t, o)
				}, Ee = "Toxicity_Warning__Modal", je = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const o = n(),
						a = Object(de.e)(o);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (q.d.enableToxicityWarning(o)) {
						if (!(await R(r(), i, c, l))) return void t(Object(d.i)(Ee))
					}
					t(_e(e))
				}, _e = e => async (t, n) => {
					t(Object(d.g)(Ee));
					const s = n(),
						r = Object(le.a)(s),
						o = Object(le.c)(s);
					if (!s.user.account && r) {
						const n = Object(W.e)(e.formData, s.uploads),
							r = Object(W.c)(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: o
						})
					} else t(Pe(e, !1))
				};

			function Se(e, t) {
				return e === N.i.MARKDOWN && ce(t)
			}
			const Pe = (e, t, n, o) => {
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
							}) && Object(re.g)(j),
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
						if (v) I = await Object(H.i)(y(), a, d, w), e(Object(b.a)({
							streamId: a,
							level: I.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Object(W.e)(d, j.uploads);
							I = Se(M, j) ? await D(x(), a, null, d, e) : await L(y(), a, d, e)
						}
						if (I.ok) {
							let n;
							if (n = I.body, e(Oe({
									...n,
									headCommentId: Object(ne.w)(j, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: S
								})), t) {
								const e = Object(de.i)(j);
								Object(i.a)(!!e)
							}
							const s = Object(ue.G)(O(), {
								postId: a
							});
							e(Object(m.z)(s, f.a.CommentSubmitted))
						} else {
							if (I.error && I.error.type === r.Pb) {
								const e = t && o ? o : Object(W.c)(d);
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
						gqlContext: r
					} = s;
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(de.e)(m);
					let b = "";
					if (p && (b = p.name), q.d.enableToxicityWarning(m)) {
						if (!(await R(r(), b, l, u))) return void t(Object(d.i)(Ee))
					}
					t(Ne({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: o,
						formData: l,
						editorMode: u
					}))
				}, Ne = e => async (t, n) => {
					t(Object(d.g)(Ee));
					const s = n(),
						r = Object(le.a)(s),
						o = Object(le.c)(s);
					if (!s.user.account && r) {
						const n = Object(W.e)(e.formData, s.uploads),
							r = Object(W.c)(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: o
						})
					} else t(we(e, !1))
				}, we = (e, t, n, s) => async (o, a, c) => {
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
					}) && Object(re.g)(O), x = y ? Object(W.a)() : g, E = Object(se.e)(O, {
						commentId: x
					}), j = Object(me.k)(O);
					if (!j) return;
					if (E && !y) return;
					t || o(fe({
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
					})), o(Ae({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const _ = f.commentMode,
						S = t && n ? n : Object(W.e)(f, O.uploads);
					let P;
					if ((P = Se(_, O) ? await D(d(), null, m, f, S) : await L(l(), m, f, S)).ok) {
						if (o(Ce({
								...P.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: x,
								depth: b + 1
							})), t) {
							const e = Object(de.i)(O);
							Object(i.a)(!!e)
						}
					} else {
						if (P.error && P.error.type === r.Pb) {
							if (!C) return;
							const e = t && s ? s : Object(W.c)(f);
							J.j(O, e, C.postId, m)
						}
						o(ye({
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
								postId: r,
								richTextJSONData: o,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(u.skipOnboardingModal)()), r ? await e(Pe({
							...t.comment,
							postId: r
						}, !0, o, a)) : s && void 0 !== n && await e(we({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, o, a))
					}
				}, Ie = Object(o.a)(be.s), Ae = Object(o.a)(be.r), Te = Object(o.a)(be.n), Re = (Object(o.a)(be.i), Object(o.a)(be.o)), Le = (Object(o.a)(be.v), (e, t, n) => async (r, o, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === N.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.G)(t)) r(Re({
						editorMode: e,
						draftKey: n,
						content: c ? Y.i : ""
					})), r(Object(p.c)(e));
					else {
						r(Object(p.b)(n));
						const o = await Object(G.a)(i(), e, c ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(p.a)(n)), r(Re({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(p.c)(e))
						} else r(Object(p.a)(n)), r(Object(g.f)({
							duration: g.a,
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
					return async (e, r) => {
						const o = r(),
							i = Object(a.a)(Z.c.replyToComment, n);
						if (!Object(me.Q)(r()) && !Object(le.a)(o)) return e(Object(l.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ne.m)(r(), {
								commentId: n
							})
						}));
						const u = o.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ae({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = o.user.prefs.commentMode,
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
						const f = o.features.comments.drafts[i];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.S)(o)) {
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
				}, Fe = e => async t => {
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
						})), e(De({
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
				})), Ge = Object(o.a)(be.u), He = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: r,
						text: o
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (J.c(i), e(Ge({
							commentId: t,
							commentsPageKey: s,
							draftKey: r,
							formData: {
								text: o,
								commentMode: n,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, qe = Object(o.a)(be.F), We = Object(o.a)(be.E), Ve = Object(o.a)(be.G), Qe = Object(o.a)(be.j), ze = Object(o.a)(be.f), Ke = e => {
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
						})), J.d(d);
						const u = Object(W.e)(o, d.uploads),
							m = o.commentMode;
						let p;
						if ((p = Se(m, d) ? await (async (e, t, n, s, r) => {
								const o = r === N.i.MARKDOWN,
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
							})(l(), t, o, u, m) : await (async (e, t, n, s, o) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === N.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = s), Object(C.a)(Object(x.a)(e, [j.a]), {
									endpoint: Object(_.a)(Object(M.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
									method: r.ob.POST,
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
							})(c(), t, o, u, m)).ok) {
							const r = p.body;
							e(Ve({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(pe.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(We({
							draftKey: s,
							error: p.error
						}))
					}
				}, Je = Object(o.a)(be.C), Xe = Object(o.a)(be.B), Ze = Object(o.a)(be.D), Ye = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					const i = s();
					n(Je({
						id: e
					})), J.a(e, i);
					const c = await ((e, t) => Object(C.a)(Object(x.a)(e, [j.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: r.ob.POST,
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
					c.ok ? n(Ze({
						id: e,
						postId: t
					})) : n(Xe({
						id: e,
						error: c.error
					}))
				}, $e = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(B.s)(r(), e, o)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, et = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					var i, c, l, d, u, m;
					n(Object(pe.c)());
					const p = e => Object(g.f)(Object(g.e)(e, ee.b.Error));
					if (((null === (c = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === v.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const o = t === X.a.FOLLOWED,
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
							Object(z.wb)(null !== (u = null === (d = null === (l = r().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const e = o ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
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
				return async (e, r) => {
					const o = r(),
						a = Object(se.b)(o, {
							commentId: t
						});
					if (!a) return;
					e(ve({
						commentId: t,
						commentsPageKey: n
					}));
					const i = {
						commentMode: a.media.rteMode,
						draftType: a.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: a.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (a.parentId) {
						const t = Object(se.b)(o, {
								commentId: a.parentId
							}),
							s = Object(ne.j)(o, {
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
				r = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
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
			const g = Object(s.a)(r.c),
				f = Object(s.a)(r.b),
				v = Object(s.a)(r.e),
				O = Object(s.a)(r.f),
				C = Object(s.a)(r.d),
				y = Object(s.a)(r.a),
				x = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						i = Object(h.k)(r);
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
						e(f()), e(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: l.message
						}))
					}
				}, E = e => async (t, n, s) => {
					let {
						gqlContext: r
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
							})(r(), e);
							t(O(n))
						} catch (d) {
							t(C()), t(Object(o.f)({
								duration: o.a,
								kind: m.b.Error,
								text: d.message
							}))
						}
					}
				}, j = e => async (t, n, s) => {
					let {
						gqlContext: r
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
							const r = s.body.data.econAdminPanel.response;
							return JSON.parse(r)
						})(r(), d.prefixedId, e);
						t(y({
							entity: n,
							type: e
						}))
					} catch (u) {
						t(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: u.message
						}))
					}
				}, _ = (e, t, n) => async (s, r, i) => {
					let {
						gqlContext: c
					} = i;
					var l;
					const u = r(),
						g = Object(h.k)(u);
					if (g && g.isEmployee && Object(b.b)(u)) try {
						await (async (e, t, n, s) => {
							const r = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...d,
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
						})(c(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}));
						const r = null === (l = u.platform.currentPage) || void 0 === l ? void 0 : l.queryParams[p.b];
						r && s(E(r))
					} catch (f) {
						s(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: f.message
						}))
					}
				}, S = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
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
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessAward,
							text: `Gave ${t} coins to ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: p.message
						}))
					}
				}, P = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
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
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessAward,
							text: `Removed ${t} coins from ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(o.f)({
							duration: o.a,
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
					e(Object(o.g)(l.g))
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
					method: r.ob.POST,
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
				})), Object(a.Q)(i) || await t(r.s());
				const l = n();
				if (!Object(a.Q)(l)) return t(Object(s.f)())
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
				Object(r.Q)(n) || await e(s.s());
				const o = t();
				if (!Object(r.Q)(o)) throw new Error("Failed to login")
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
		"./src/reddit/actions/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				l = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/lib/isDefined.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/redditGQL/operations/FetchLiveDiscoveryContent.json"),
				g = n("./src/redditGQL/types.ts");
			const f = async e => {
				const t = await Object(u.a)(e, h);
				if (!Object(i.c)(t)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, n, s, r;
					const o = {},
						a = {},
						{
							popularLiveContent: i,
							recommendedLiveContent: c
						} = e.liveDiscoveryContent,
						l = e => {
							var t;
							const n = null == e ? void 0 : e.node;
							if (!n) return;
							const {
								post: s,
								contentType: r,
								...i
							} = n, c = [], l = Object(m.f)(s);
							if (o[l.id] = l, Object(b.n)(s)) {
								const e = Object(p.a)(s.subreddit);
								a[e.id] = e
							}
							return r === g.n.Chat || r === g.n.Talk && Array.isArray(null === (t = null == s ? void 0 : s.talkRoom) || void 0 === t ? void 0 : t.topUsers) && c.push(...s.talkRoom.topUsers), {
								postId: l.id,
								participantAvatars: c,
								contentType: r,
								...i
							}
						},
						u = null !== (n = null === (t = null == i ? void 0 : i.edges) || void 0 === t ? void 0 : t.map(l).filter(d.a)) && void 0 !== n ? n : [],
						h = null !== (r = null === (s = null == c ? void 0 : c.edges) || void 0 === s ? void 0 : s.map(l).filter(d.a)) && void 0 !== r ? r : [];
					return {
						posts: o,
						subreddits: a,
						popularLiveContent: u,
						recommendedLiveContent: h
					}
				})(t.body.data)
			}, v = Object(a.a)(l.b), O = Object(a.a)(l.c), C = Object(a.a)(l.a);
			var y = n("./src/reddit/actions/platform.ts"),
				x = n("./src/redditGQL/operations/GetIsLiveContentAvailable.json");
			var E = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				j = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				_ = n("./src/reddit/selectors/user.ts");
			Object(o.a)({
				features: {
					happeningNow: E.a
				}
			});
			const S = Object(a.a)(l.d),
				P = Object(a.a)(l.e),
				k = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = await (e => Object(u.a)(e, x))(s());
					if (!Object(i.c)(r)) return;
					const o = !!r.body.data.isLiveContentAvailable;
					e(S(o));
					const a = t(),
						c = Object(_.i)(a);
					o && c && !w(c) && e(P(!0))
				}, N = e => Object(s.c)(r.s.HAPPENING_NOW, r.A.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), w = e => {
					const t = N(e);
					return !!Object(s.b)(t)
				}, M = () => async (e, t) => {
					const n = t(),
						r = Object(_.i)(n);
					if (r) {
						const e = N(r);
						Object(s.d)(e, !0, s.a)
					}
					e(P(!1))
				}, I = () => async (e, t) => {
					e(y.m({
						title: c.g()
					})), Object(j.a)(t()) && e((() => async (e, t, n) => {
						let {
							gqlContext: s
						} = n;
						e(v());
						try {
							const t = await f(s());
							e(O(t))
						} catch (r) {
							e(C(r))
						}
					})())
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
				})), await e(Object(o.s)()), Object(a.Q)(t()) || e(Object(i.openLoginModal)())
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
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(r.c)("/")), e(Object(o.m)({
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
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.d)()
				})), Object(i.Q)(t()) || await e(Object(a.s)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/noGasPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.i)()
				}))
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
						Object(c.Q)(d) || n.push(e(Object(a.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(o.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.H)(t(), l);
						await e(Object(r.a)({
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
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.k)()
				})), await e(Object(a.s)()), Object(i.Q)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.q)()
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
						y = m.k;
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
					r(p(y));
					const x = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					x.ok ? (r(b(y)), r(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), r(f(t))) : (r(b(y)), r(Object(o.f)({
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
					})), Object(i.tb)(r + 1)
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
						y = Object(h.c)(v),
						x = Object(m.b)(v),
						E = Object(u.a)(v),
						j = [o.a.NsfwBlockingModal].includes(E),
						_ = [i.a.NSFW_BLOCKING_MODAL_V2].includes(x),
						S = j || _;
					if (O && "true" === O.contentEditable && C && y) n(r.b({
						parentCommentId: C,
						commentsPageKey: y
					})), Object(h.a)(C);
					else if (x && !S) Object(h.b)(c.b), n(Object(o.i)(x));
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
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
				h = Object(r.a)(b),
				g = "RANDOM_AVATAR_LOADED",
				f = Object(r.a)(g),
				v = (e, t, n) => async (s, r, o) => {
					let {
						apiContext: u
					} = o;
					var b, h, g, f;
					const v = Object(m.b)(r()),
						O = await (async (e, t, n, s, r) => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
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
					} catch (r) {
						o.c.captureException(r)
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
					} catch (r) {
						o.c.captureException(r)
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
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts");
			const d = () => async (e, t) => {
				const n = t();
				Object(l.a)(Object(i.l)(n)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(r.g)(a.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: o,
						share: d,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					} = e, g = n();
					o && Object(l.a)(Object(i.g)(o)(g)), Object(c.Q)(g) ? await t(Object(r.h)(a.a.SNOOVATAR_MODAL, {
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
				return r
			})), n.d(t, "e", (function() {
				return o
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
			const r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				D = n("./src/reddit/selectors/accountManager/modalData.ts"),
				F = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
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
				X = m.a.wrapped(A.a, "Close", z.a),
				Z = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: D.a,
					frontpageSignupVariant: B.a,
					isAmModalDesignUpdateEnabled: U.a,
					isBlockingInterstitialEnabled: G.b,
					isBlockingInterstitialV2Enabled: G.c,
					isBlurredPreview: H.b,
					isCommentBeforeSignUpEnabled: F.a,
					isDismissSurveyEnabled: q.a,
					isHardBlockingInterstitialEnabled: G.d,
					isLoggedIn: V.Q,
					isRegularOnboardingEnabled: F.b,
					redirectUrl: D.b
				}),
				Y = Object(i.b)(Z, (e, t) => ({
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
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === T.a.Apple ? _.a.UNLINK_APPLE_SSO : _.a.UNLINK_GOOGLE_SSO;
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
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), R.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), R.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), R.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[S.n]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[S.w] = "true") : s[S.w] = "true"), e.isSignupModalSuccessful && (s[S.x] = "true"), e.isOneTapSession() && (s[S.o] = "true"), window.location.replace(Object(d.a)(t, s))
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
							const e = ee[this.currentStep];
							e && c(Object(I.w)(e))
						}
						s && e === p.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== p.a.NsfwBlockingModal && c(Object(M.a)()), r && Object(w.a)(), this.close(), this.isSignupModalDismissed && o && a()
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
						isHardBlockingInterstitialEnabled: r,
						path: o
					} = this.props, {
						iframeStyles: i
					} = this.state, c = (o === E.c.Index || o === E.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && r, l = this.props.showCloseButton && !c;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && a.a.createElement(J, {
						onClick: this.closedByUser
					}, a.a.createElement(X, {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return n ? r.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					})
				}, s || i < 1 ? "" : Object(a.b)(i)) : null
			}
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
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
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
			const w = (e, t, n, s, r) => o => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.z)(o, void 0, {
						oldSort: n,
						sort: s,
						source: r
					}),
					userSubreddit: Object(N.tb)(o)
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
				D = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
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
						className: q.a.HighlightWrapper
					}, o.a.createElement(S.b, {
						className: Object(c.a)(q.a.HighlightPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(r)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), o.a.createElement(T.b, {
						className: q.a.DropdownTriangle,
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
				X = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				Y = Object(E.a)(_.a),
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
					highlightIsOpen: Object(B.b)(X),
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
								tooltipId: X
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(d.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(d.h)({
							tooltipId: Z
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends o.a.Component {
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
						showTooltip: j,
						toggleContestModeModal: _
					} = this.props, N = h.contestMode, w = !b.search.includes(l.w.CONFIDENCE), I = O === l.w.CONFIDENCE && w, A = m && !I, L = l.y[O], D = L ? L() : "", F = E && O === E && !I ? this.addSuggestedLabel(D) : D, U = N ? s.fbt._("End contest mode?", null, {
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
					return o.a.createElement("div", {
						className: Object(c.a)(t, q.a.container, {
							[q.a.hideCommentSort]: !v && H
						}),
						ref: i
					}, o.a.createElement("div", {
						className: q.a.containerRow
					}, !H && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: q.a.DropdownContainer
					}, o.a.createElement(S.b, {
						className: Object(c.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(T.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), o.a.createElement(Y, {
						isOpen: a,
						tooltipId: J
					}, [l.w.CONFIDENCE, l.w.TOP, l.w.NEW, l.w.CONTROVERSIAL, l.w.OLD, l.w.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							r = l.y[e],
							a = r ? r() : "";
						return o.a.createElement(x.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
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
					}))), A && !H && (E ? o.a.createElement("button", {
						className: q.a.SortLink,
						onClick: O !== E ? this.setSortOnClick : this.clearSortOnClick
					}, O !== E ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : o.a.createElement("button", {
						className: q.a.SetSort
					}, o.a.createElement("button", {
						className: q.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), o.a.createElement("span", {
						id: Z,
						onMouseEnter: j,
						onMouseLeave: d
					}, o.a.createElement(y.c, {
						className: q.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), o.a.createElement(R.a, {
						className: q.a.Info
					})))), m && o.a.createElement("button", {
						className: q.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), o.a.createElement(P.a, {
						className: q.a.ToggleSwitch,
						on: N
					}))), v && o.a.createElement("div", {
						className: q.a.containerRow
					}, o.a.createElement(K, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: M
					})), r && o.a.createElement(C.a, {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement(i.a, d({}, n, {
					className: Object(o.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(l.a.customScoreStyles, n.scoreClassName),
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
			const c = () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e(0), n.e(1), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
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
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				loggedInGoogleOneTap: "_2qW2MlTCwrBhUAXSCWhbPD"
			}
		},
		"./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.CRYPTO_GAS_FEES_EDUCATION, e => o.a.createElement(c, {
				withOverlay: !0,
				onOverlayClick: e
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
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(O.d)(O.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(C.d)("get_coins_cta", e))
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
						isFreeAwardEventEnabled: r,
						topNavigationVariant: o
					} = this.props, a = this.getButtonText(), c = !!e || r, l = Object(d.a)(S.a.icon, {
						[S.a.special]: c
					}), u = o === f.cd.RepositionCoinNoLiveNoAll;
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
						isFreeAwardEventEnabled: r,
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
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				const R = Object(o.d)(),
					L = Object(m.a)(),
					[D, F, U] = function(e, t, n) {
						const [r, o] = Object(s.useState)(Object(u.r)(e, t) || 0), a = Object(s.useCallback)(() => {
							o(r + 1), Object(u.zb)(e, t, r + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (o(n), Object(u.zb)(e, t, n))
						}, []);
						return [r, a, i]
					}(g, n.notificationName, (null === (f = n.persistence) || void 0 === f ? void 0 : f.maxViews) || 0),
					[B, G] = Object(s.useState)(!1),
					[H, q] = Object(s.useState)(!1),
					W = Object(o.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = h(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(s.useEffect)(() => {
					F(), t ? (L(Object(d.B)(n.notificationName)), L(Object(d.C)(n.notificationName))) : (L(Object(d.p)(n.notificationName)), L(Object(d.q)(n.notificationName)))
				}, []);
				const V = null === (v = null == n ? void 0 : n.persistence) || void 0 === v ? void 0 : v.maxViews;
				if (!n || V && D > V) return null;
				const Q = !!(null == n ? void 0 : n.primaryCta),
					z = !!(null == n ? void 0 : n.secondaryCta),
					K = !!(null == n ? void 0 : n.titleImage),
					J = !!(null == n ? void 0 : n.thumbnailImageUrl),
					X = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (U(), R(Object(c.a)(n.notificationName)))
					},
					Z = {
						backgroundColor: B ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.backgroundHex,
						color: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.text.colorText,
						borderColor: null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.colors.borderHex
					},
					Y = {
						backgroundColor: H ? null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.hoverHex : null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.backgroundHex,
						color: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.text.colorText,
						borderColor: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.colors.borderHex
					};
				return W ? null : r.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.BANNER) : Object(d.o)(n.notificationName, d.b.BANNER))
					}
				}, r.a.createElement("div", {
					className: O.a.Content
				}, r.a.createElement("div", {
					className: O.a.Heading
				}, K ? r.a.createElement("img", {
					className: O.a.TitleIcon,
					src: n.titleImage
				}) : r.a.createElement("div", {
					className: O.a.Title,
					style: {
						color: null === (k = n.titleText) || void 0 === k ? void 0 : k.colorText
					}
				}, null === (N = n.titleText) || void 0 === N ? void 0 : N.text)), r.a.createElement("div", {
					className: O.a.Body
				}, r.a.createElement("div", {
					className: O.a.BodyText,
					style: {
						color: null === (w = n.bodyText) || void 0 === w ? void 0 : w.colorText
					}
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), J && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), Q || z && r.a.createElement("div", {
					className: Object(a.a)(O.a.ActionButtons, {
						[O.a.noMargin]: J
					})
				}, Q && r.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_1) : Object(d.o)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...Z
					},
					onMouseEnter: () => G(!0),
					onMouseLeave: () => G(!1)
				}), z && r.a.createElement(l.t, {
					text: null === (A = n.secondaryCta) || void 0 === A ? void 0 : A.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: O.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_2) : Object(d.o)(n.notificationName, d.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1)
				}))), (null === (T = n.persistence) || void 0 === T ? void 0 : T.isDismissible) && r.a.createElement(l.t, {
					Icon: Object(p.b)("close_fill"),
					className: O.a.CloseButton,
					size: l.d.XXS,
					iconClassName: O.a.CloseButtonIcon,
					priority: l.c.Plain,
					onClick: e => {
						e.stopPropagation(), X(), L(t ? Object(d.A)(n.notificationName, d.b.DISMISS) : Object(d.o)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(o.e)(g),
					s = Object(o.e)(f.i);
				return (null == n ? void 0 : n.length) && s ? r.a.createElement(r.a.Fragment, null, null == n ? void 0 : n.map(e => r.a.createElement(C, {
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
				return X
			})), n.d(t, "b", (function() {
				return ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					descriptionText: r,
					primaryButtonText: a,
					titleText: i,
					onClose: l,
					onClick: d
				} = e;
				const u = Object(f.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(C.a.banner, t)
				}, o.a.createElement("div", {
					className: C.a.bannerTitleContainer
				}, i && o.a.createElement("h4", {
					className: C.a.bannerTitle
				}, i), s && o.a.createElement(h.t, {
					onClick: e => {
						l && l(e), u(Object(g.r)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(v.b)("close_fill"),
					className: Object(c.a)(C.a.closeIcon, C.a.closeButton),
					size: h.d.XXS,
					priority: h.c.Plain
				})), r && o.a.createElement("p", {
					className: C.a.bannerDescription
				}, r), o.a.createElement("div", {
					className: C.a.bannerButtonsContainer
				}, a && o.a.createElement(h.t, {
					text: a,
					priority: h.c.Tertiary,
					className: Object(c.a)(C.a.button, C.a.primaryButton),
					size: h.d.XS,
					onClick: e => {
						d && d(e), u(Object(g.r)({
							dnPromptAction: "cta"
						}))
					}
				}), n && o.a.createElement(h.t, {
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
				return o.a.createElement(y, {
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
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
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
						hideSubredditNotifications: r,
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= P;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: S.a.notificationResizeWrapper
					}, o.a.createElement(E.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: a
					}), !!p && o.a.createElement(j.a, {
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
				U = .5,
				B = 5,
				G = 50,
				H = 55;
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
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
						} = this.props, r = t || n, o = window.innerHeight - G - 2 * H - (r ? F : 0);
						let a = 0;
						for (const i in e) a += e[i];
						return 0 === a ? r ? L : s ? R : D : (r && (a += F), o < a && (a = o + (r ? F : 0)), a)
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
								notifications: r
							} = this.props,
							a = r.length > n + B;
						return (s && r.length > 0 && a ? r.slice(0, n + 1) : r).map((n, s) => o.a.createElement(k, M({}, e, {
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
							notifications: r
						} = this.props;
						if (e.isIntersecting) {
							const e = r.length > this.state.currentNotificationCursorIndex + B;
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
						notifications: r,
						setDesktopNotificationsPromptSeen: a,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!r || !r.length), l = this.getContainerHeight(), d = r.length > this.state.currentNotificationCursorIndex + B;
					return o.a.createElement("div", {
						className: S.a.notificationList,
						ref: this.container,
						style: c ? {
							height: l,
							maxHeight: l
						} : {
							minHeight: R
						}
					}, !s && o.a.createElement("div", {
						className: S.a.notificationBannerContainer
					}, t && o.a.createElement(x, {
						onTurnOnBrowserNotifications: i,
						onClose: a
					}), o.a.createElement(b.a, {
						isFromMiniInbox: !0
					})), !c && s && o.a.createElement(N.a, null), !c && !s && o.a.createElement(w.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !s && (e || d) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: U
					}, o.a.createElement("div", null)))
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
			const X = [],
				Z = l.a.div("StyledDropdown", S.a),
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
						p = Object(r.useCallback)(() => {
							n(), a()
						}, [n, a]),
						b = Object(r.useCallback)(() => {
							u(), a()
						}, [u, a]);
					return o.a.createElement("nav", {
						className: S.a.topNav
					}, o.a.createElement("span", {
						className: S.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: S.a.topNavLinks
					}, o.a.createElement("span", {
						className: S.a.messagesLinkContainer
					}, o.a.createElement(V.default, {
						className: Object(c.a)(S.a.messagesLink, {
							[S.a.mActive]: m
						}),
						onClick: p,
						to: m ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: S.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), o.a.createElement("button", {
						className: S.a.navLink,
						onClick: i
					}, o.a.createElement(v.a, {
						name: "mark_read",
						className: S.a.icon
					})), o.a.createElement(V.default, {
						className: S.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, o.a.createElement(v.a, {
						name: "settings",
						className: S.a.icon
					}))))
				},
				$ = e => o.a.createElement("div", {
					className: S.a.bottomBar
				}, o.a.createElement(V.default, {
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
							const [t, n] = Object(r.useState)(() => Object(K.u)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(K.Ab)(e)
							}, [e])]
						}(v),
						[E, j] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [s, r] = Object(Q.a)(t, []);
							return [-1 !== s.indexOf(n), () => {
								r([...s, n])
							}]
						}({
							key: W.b.HOT_POTATO_BANNER_SEEN,
							userId: v
						}),
						_ = !(!d || !d.length),
						P = Object(a.a)(),
						k = P === i.a.Closed || P === i.a.Default || P === i.a.Denied,
						N = h && k && !O;
					return o.a.createElement(Z, null, o.a.createElement("div", {
						className: S.a.tooltipContainer
					}, o.a.createElement(Y, {
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
					}), o.a.createElement(q, J({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !y,
						setInboxPrivacyPolicyBannerSeen: x,
						isHotPotatoEnabled: m && !E,
						setHotPotatoBannerSeen: j
					})), (_ || c) && o.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(g.m)()),
						onBarClick: u
					})))
				}
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
						const r = s || Object(N.n)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(w.P)(e, {
							identifier: r.belongsTo
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
						const r = n && Object(N.n)(e, {
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
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : _.o.EMBED];
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
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Sb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return o.a.createElement("div", {
						className: Object(c.a)(T.a.container, t, {
							[T.a.isCollection]: d && Object(x.a)(d),
							[T.a.adaptive]: u
						})
					}, o.a.createElement(y, {
						postId: null == d ? void 0 : d.id
					}, o.a.createElement("div", {
						className: T.a.postDetails
					}, d && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: T.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(E.a, {
						name: h,
						className: T.a.mediaIcon
					}), o.a.createElement(g.c, {
						className: T.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: T.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
						className: T.a.srIcon
					}), o.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: T.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: T.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: T.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(v.a, {
						className: Object(c.a)(T.a.SubscribeButton, {
							[T.a.visible]: this.state.showSubscribeButton
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
			const B = o.a.memo(e => o.a.createElement(y.t, {
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
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(o);
			const i = () => r.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
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
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => r.a.createElement(u, null))
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
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.N)(e) || Object(l.M)(e)) ? o.a.createElement(d, null) : null
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
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", o.a);
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
						...r
					} = e;
					return o.a.createElement(a.t, u({}, r, {
						priority: m(a.c.Primary, t, n),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: s ? a.d.S : a.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
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
						small: r,
						...i
					} = e;
					return o.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, s),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: r ? a.d.S : a.d.M,
						text: b(t)
					}))
				};
			class g extends o.a.Component {
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
						isFullWidth: a = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, l, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, l, {
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
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
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
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
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
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
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
							activeSurveys: r
						} = t.data.customerSurveyConfig,
						o = r.find(t => t.experimentName === e.experimentName);
					o && n({
						...e,
						steps: o.steps
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
						r = Object(f.e)(e);
					if (n && s || "" !== r) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = v.q(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
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
						score: r,
						questionId: o,
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
							question_id: o,
							parent_question_id: a,
							score: r,
							...O(e, n)
						}
					})
				},
				E = e => {
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
						...v.o(e),
						survey: {
							question: s,
							type: C(o),
							text: r,
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
						...v.o(e),
						survey: {
							type: C(o),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: r,
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
						r = Object(S.a)(),
						a = Object(l.e)(N.i),
						i = Object(l.e)(N.Fb),
						u = Object(l.e)(k.a, o.a),
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
							const r = C[s.experimentName];
							(null == r ? void 0 : r.variant) && s.variants.find(e => e.variantName === r.variant) && b(s, t, x)
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
						}, !1)), r(y(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
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
							questionParentId: b.type === g.a.MULTI_CHOICE && r ? `${l-1}` : null
						};
						m(r ? E(e) : b.type === g.a.MULTI_CHOICE ? j(e) : x(e))
					}, [p, r, f, b, m, i, a, h, l]);
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
						setSelectedNumber: r,
						setTextResponse: o,
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
							})), r(void 0), o(""), v(""), p || !k)
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
					}, [f, v, l, t, p, a, n, h, s, r, o, u]);
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
						setActiveStepNum: r,
						setActiveSurvey: o,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: p
					} = e;
					const b = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							r(-1), a(0), i(!1), o(null), b(Object(u.g)("")), p > 1 && b(Object(m.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: P.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [b, t, d, p, n, r, o, a, i])
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
				return y
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
				if (Object(p.i)(e) || Object(h.rb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.H)(e, n);
				if (!s) return;
				if (Object(h.qb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
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
					isNightMode: l.db,
					isPresenceUserPrefEnabled: l.V,
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
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			class j extends o.a.Component {
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
							isNightMode: r,
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
					return o.a.createElement("div", {
						className: Object(c.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: g
					}, y ? o.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": _ === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: _
					}) : o.a.createElement("button", {
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
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: _
					})), !e.compact && p && o.a.createElement(u.a, {
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
					}), j ? o.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": _ === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: _
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": _ === b.a.downvoted,
						className: Object(c.a)(d.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE
					}, o.a.createElement(m.c, {
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
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: a.jb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
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
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
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
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
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
		"./src/reddit/controls/Search/CommunityPill/index.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1MA3fP9fWarZfJ7sTZvCY8",
				pillText: "H5EVgA9orCXvyuBqo4yYz",
				subredditIcon: "_294BH1P_2W07apxeH91d6w",
				dismissIcon: "_2hXB7lYOEW8IiiLOL9ddR6",
				dismissButton: "_2PzaavBh6JmLpWs2Z5H0NI",
				dismissButtonDay: "_2FxfOQtHDWppFWJFMrmDAw",
				active: "_28zCaLrn7TypX8TL1hW2CL",
				inactive: "_2DT6P_bqGS0I-oNooQv4Bl",
				dismissButtonNight: "_3QwmpATS084MHqvJO-ZgZZ"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				form: "_1ugesNSGtWAUEmFe-hdnyI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				isOpen: "h5AN6BnHrFmiSiSIKQbi0",
				dismissButton: "_3XsEUsC3uEaiEi63QWpAM",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
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
						method: s.ob.POST,
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
						correlation_id: o
					}, x = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = d ? x : Object(l.a)(x);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: E,
						data: y
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
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? C : Object(l.a)(C);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.ob.POST,
						endpoint: y,
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
						method: s.ob.POST,
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
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = ["true", "1"],
				r = e => {
					var t;
					return s.includes(null !== (t = new URLSearchParams(e).get("livechat_embed")) && void 0 !== t ? t : "")
				},
				o = e => {
					var t;
					return s.includes(null !== (t = e.queryParams.livechat_embed) && void 0 !== t ? t : "")
				}
		},
		"./src/reddit/helpers/counters/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			const o = (e, t) => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				a = e => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.LoggedOutMenuRendered,
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
				r = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(o.b)(s.o.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(r.b)(10) && Object(o.b)(s.o.Redesign, {
						type: o.a.NsfwBlocking,
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
				a = () => null !== document.getElementById(r.D)
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
				return Object(i.S)(e, {}) === o.g.Large && !Object(l.P)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: r.Ud
				})
			}

			function m(e) {
				switch (e) {
					case r.Vd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Vd.Enabled:
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
				type: r.L.SERVER_ERROR,
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
						post: t && Object(o.K)(e, t) || null,
						profile: Object(o.T)(e),
						screen: Object(o.bb)(e),
						subreddit: Object(o.jb)(e)
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
				return y
			})), n.d(t, "l", (function() {
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
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
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
						listing: Object(c.z)(e, void 0, {
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
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
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
						profile: o.T(e),
						subreddit: o.jb(e)
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
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "nav"
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
					screen: s.bb(e),
					profile: s.T(e),
					subreddit: s.jb(e)
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
				return D
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "F", (function() {
				return B
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.o)(t),
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
					...Object(r.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				y = (e, t, n, o, c) => l => ({
					...Object(r.o)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: w(n),
						categoryId: o
					}
				}),
				x = (e, t, n, o, c, l) => d => ({
					...Object(r.o)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				E = (e, t) => n => ({
					...Object(r.o)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				j = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				_ = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				S = (e, t) => n => ({
					...Object(r.o)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				P = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t, n, o) => c => ({
					...Object(r.o)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: w(t),
						categoryId: n
					}
				}),
				N = (e, t, n, o, c) => l => ({
					...Object(r.o)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
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
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				L = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				F = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				B = () => e => ({
					...Object(r.o)(e),
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
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
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
				y = e => o("a_upvote", e),
				x = e => a("a_upvote", e),
				E = e => o("z_downvote", e),
				j = e => a("z_downvote", e),
				_ = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				P = e => a("r_comment", e);
			r("q_navigation")
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
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
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
						...o.o(t)
					};
					return Object(r.a)(t) && Object.assign(n, i), n
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
						...o.o(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				d = e => ({
					...o.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.hb(e)
				}),
				u = e => ({
					...o.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.hb(e)
				}),
				m = e => ({
					...o.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.hb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.o(e),
					...i
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.o(e),
					...i
				}),
				h = e => t => ({
					...o.o(t),
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
					...o.o(n),
					snoovatar: o.hb(n),
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
					...o.o(s),
					snoovatar: o.hb(s)
				}),
				y = C("anniversary_achievement", "view", "anniversary_achievement"),
				x = C("anniversary_achievement", "click", "close"),
				E = C("anniversary_achievement", "click", "equip"),
				j = e => () => t => ({
					...o.o(t),
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
					...o.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.hb(s)
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
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.bb(e),
					profile: r.T(e),
					subreddit: r.jb(e)
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
						pageType: t.platform.currentPage ? r.v(t.platform.currentPage) : void 0,
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
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(s.useState)(Object(r.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(r.pb)(e)
				}, [])]
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
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
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
				var r;
				const o = s();
				if (Object(f.b)(t)) {
					const e = (null === (r = Object(v.k)(o)) || void 0 === r ? void 0 : r.displayText) || "";
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
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				G = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				q = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				Q = n("./src/reddit/actions/emailCollection/index.ts"),
				z = n("./src/reddit/actions/emailVerification.ts"),
				K = n("./src/reddit/actions/login.ts"),
				J = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./node_modules/reselect/es/index.js"),
				Z = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Y = n("./src/reddit/selectors/meta.ts");
			const $ = Object(X.a)(Y.c, v.Q, Z.d, Z.e, (e, t, n, s) => !(e || t || n && s)),
				ee = () => async (e, t) => {
					const n = t(),
						s = $(n);
					!!!Object(J.a)(n) && s && e(Object(K.openGoogleOneTapModal)())
				};
			var te = n("./src/reddit/actions/media.ts"),
				ne = n("./src/lib/loadWithRetries/index.ts"),
				se = () => Object(ne.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				re = n("./src/reddit/actions/nps.ts");
			const oe = Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ae, ie = n("./src/reddit/actions/platform.ts"),
				ce = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				de = n("./src/reddit/actions/session.ts"),
				ue = n("./src/reddit/actions/survey/index.ts"),
				me = n("./src/reddit/actions/theme.ts"),
				pe = n("./src/reddit/actions/toaster.ts"),
				be = n("./src/reddit/actions/users.ts"),
				he = n("./node_modules/react-redux/es/index.js"),
				ge = n("./node_modules/react-router/esm/react-router.js"),
				fe = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Crypto/componentStyles.css"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				ve = n.n(fe),
				Oe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				Ce = n("./src/lib/classNames/index.ts"),
				ye = n("./node_modules/lodash/isEqual.js"),
				xe = n.n(ye),
				Ee = n("./node_modules/lodash/omit.js"),
				je = n.n(Ee),
				_e = n("./node_modules/lodash/throttle.js"),
				Se = n.n(_e),
				Pe = n("./src/reddit/contexts/NavbarExp.ts"),
				ke = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ne = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				we = n("./src/lib/fastdom/index.ts"),
				Me = n("./src/lib/FocusTrap/index.ts"),
				Ie = n("./src/lib/isEqualWithoutKey/index.ts"),
				Ae = n("./src/lib/isSimpleClick/index.ts"),
				Te = n("./src/reddit/actions/header.ts"),
				Re = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				Le = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				De = n("./node_modules/polished/dist/polished.es.js"),
				Fe = n("./node_modules/react-motion/lib/react-motion.js"),
				Ue = n("./src/lib/lessComponent.tsx"),
				Be = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Ge = n("./src/reddit/components/TrackingHelper/index.tsx"),
				He = n("./src/reddit/constants/accountManager.ts"),
				qe = n("./src/reddit/helpers/trackers/onboarding.ts"),
				We = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ve = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Qe = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				ze = n("./src/reddit/components/Carousel/index.m.less"),
				Ke = n.n(ze);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(ae || (ae = {}));
			class Je extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === ae.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
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
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: o
						} = this.state, a = n === ae.Fade ? {
							opacity: t === o ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * o : void 0
						};
						return m.a.createElement("div", {
							className: Object(Ce.a)(Ke.a.item, Ke.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(Ce.a)(Ke.a.indicator, {
							[Ke.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(Ce.a)(e, Ke.a.container)
					}, m.a.createElement("article", {
						className: Ke.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: Ke.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var Xe = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				Ze = n.n(Xe);
			const Ye = Ue.a.div("Container", Ze.a),
				$e = Ue.a.wrapped(Je, "Carousel", Ze.a),
				et = Ue.a.div("Phone", Ze.a),
				tt = Ue.a.img("Frame", Ze.a),
				nt = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				st = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				rt = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				ot = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var at = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(Ye, {
						className: t
					}, m.a.createElement(et, {
						className: Ze.a.android
					}, m.a.createElement($e, {
						animationType: ae.Fade,
						className: Ze.a.android,
						delay: 2500,
						items: rt,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(tt, {
						src: nt
					})), m.a.createElement(et, {
						className: Ze.a.iphone
					}, m.a.createElement($e, {
						animationType: ae.Fade,
						className: Ze.a.iphone,
						items: ot,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(tt, {
						src: st
					})))
				},
				it = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ct = n.n(it);
			const lt = Ue.a.div("Container", ct.a),
				dt = Ue.a.span("Disclaimer", ct.a),
				ut = Ue.a.a("Link", ct.a);
			var mt = e => m.a.createElement(lt, {
					className: e.className
				}, m.a.createElement(ut, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(ut, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(ut, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(ut, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(dt, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				pt = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				bt = n.n(pt);
			const ht = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				gt = Ue.a.div("Container", bt.a),
				ft = Ue.a.wrapped(Be.a, "IFrame", bt.a),
				vt = Ue.a.wrapped(at, "Images", bt.a),
				Ot = Ue.a.wrapped(mt, "Links", bt.a),
				Ct = Ue.a.div("MainContent", bt.a),
				yt = Ue.a.div("MainContentColumn", bt.a),
				xt = Ue.a.button("NotReady", bt.a),
				Et = Ue.a.span("NotReadyText", bt.a),
				jt = Ue.a.wrapped(We.a, "NotReadyIcon", bt.a),
				_t = Object(ke.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(Ve.a)(e).bodyText;
					return m.a.createElement(Le.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(gt, {
						className: t,
						innerRef: n
					}, m.a.createElement(Ct, null, m.a.createElement(yt, null, m.a.createElement(vt, null, "Images Placeholder")), m.a.createElement(yt, null, m.a.createElement(ft, {
						className: Object(Ce.a)({
							[bt.a.fields]: Object(Qe.b)(r)
						}),
						path: He.c.Register,
						uiMode: He.d.Embed
					}))), m.a.createElement(xt, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(De.i)(.8, i)
						}
					}, m.a.createElement(Et, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(jt, null)), m.a.createElement(Ot, null)))
				});
			class St extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Pt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(qe.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(St, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(_t, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(Fe.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Fe.spring)(s, ht)
						}
					}, this.renderScroller))
				}
			}
			var kt = Object(Ge.c)(Pt),
				Nt = n("./src/lib/localStorageAvailable/index.ts"),
				wt = n("./src/reddit/actions/modal.ts"),
				Mt = n("./src/higherOrderComponents/makeAsync.tsx"),
				It = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				At = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Tt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Rt = Object(Mt.a)({
				getComponent: () => Object(ne.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Lt = () => null;
			var Dt = Object(Mt.a)({
					ErrorComponent: Lt,
					getComponent: () => Object(ne.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Lt
				}),
				Ft = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ut = n("./src/reddit/actions/structuredStyles/index.ts"),
				Bt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Gt = n("./src/reddit/constants/modals.ts"),
				Ht = n("./src/reddit/controls/TextButton/index.tsx"),
				qt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Wt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vt = Object(he.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(wt.i)(Gt.a.BLADE_NIGHTMODE)), e(Object(Ut.f)())
					},
					openBlade: () => {
						e(Object(Ut.e)(n))
					}
				}
			});
			var Qt = Object(Ft.a)(Vt(e => m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, null, m.a.createElement(qt.a, null, m.a.createElement(Bt.q, null, Wt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Ht.a, {
					onClick: e.closeModal
				}, m.a.createElement(Bt.b, null)))), m.a.createElement(Bt.l, null, m.a.createElement(Bt.o, null, Wt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Bt.g, null, m.a.createElement(Bt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Wt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Bt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Wt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				zt = n("./src/reddit/actions/authorFlair.ts"),
				Kt = n("./src/reddit/actions/gold/powerups.ts"),
				Jt = n("./src/reddit/actions/userFlair/index.ts"),
				Xt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Zt = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Yt = n("./src/reddit/components/FlairPreview/index.tsx"),
				$t = n("./src/reddit/components/FlairSearch/index.tsx"),
				en = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				tn = n("./src/reddit/controls/Button/index.tsx"),
				nn = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				sn = n("./src/reddit/layout/row/Inline/index.tsx"),
				rn = n("./src/reddit/models/Flair/index.ts"),
				on = n("./src/reddit/models/User/index.ts"),
				an = n("./src/reddit/selectors/authorFlair.ts"),
				cn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ln = n("./src/reddit/selectors/telemetry.ts"),
				dn = n("./src/reddit/selectors/userFlair.ts"),
				un = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				mn = n.n(un);
			const pn = e => e.flairModalContext && e.currentUser && Object(on.e)(e.currentUser) === e.flairModalContext.username,
				bn = e => e.authorFlair || pn(e) && e.userFlairData.applied || null,
				hn = Ue.a.wrapped(sn.a, "Section", mn.a),
				gn = Ue.a.div("CheckboxText", mn.a);
			class fn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(ln.kb)(t, this.props.subredditId)
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
						previewFlair: bn(e),
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
					} = e.displaySettings, o = this.state.showFlair !== r, a = bn(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(en.b)(n, t, a);
					return !(i || c !== en.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: r,
						flairModalContext: o
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == o ? void 0 : o.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = pn(e);
					return m.a.createElement(Zt.a, null, m.a.createElement(Xt.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Yt.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement($t.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						subredditId: r,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(hn, null, m.a.createElement(nn.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(gn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: mn.a.buttonsRow
					}, c && m.a.createElement(tn.t, {
						className: mn.a.goBackButton,
						priority: tn.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: mn.a.rightSideButtons
					}, a && m.a.createElement(tn.o, {
						className: mn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(tn.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const vn = Object(he.b)(() => Object(X.c)({
				authorFlair: an.b,
				currentUser: v.k,
				flairModalContext: an.c,
				isMod: (e, t) => !!Object(cn.n)(e, t),
				userFlairData: dn.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(Jt.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(zt.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Kt.d)())
			}))(fn);
			var On = Object(Ft.a)(Object(Ge.c)(vn)),
				Cn = n("./src/reddit/selectors/bannedUser.ts"),
				yn = n("./src/reddit/selectors/muted.ts"),
				xn = n("./src/reddit/selectors/notificationPrefs.ts"),
				En = n("./src/reddit/selectors/platform.ts"),
				jn = n("./src/reddit/selectors/removalReasons.ts"),
				_n = n("./src/reddit/constants/cookie.ts"),
				Sn = n("./src/reddit/featureFlags/index.ts"),
				Pn = n("./src/reddit/helpers/localStorage/index.ts"),
				kn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Nn = Object(X.c)({
				activeModalId: J.a,
				authorContext: an.c,
				badgePurchaseModalIsOpen: Object(J.b)(Gt.a.BADGE_PURCHASE),
				banContext: Cn.a,
				banModalIsOpen: Object(J.b)(Gt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(J.b)(Gt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Sn.d.introModal(e),
				isOverlayOpen: En.i,
				moderatorPermissions: e => {
					const t = Object(En.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: yn.b,
				muteModalIsOpen: Object(J.b)(Gt.a.MUTE_USER),
				notificationsPrePromptIsOpen: xn.d,
				removalReasonContext: jn.b,
				removalReasonModalIsOpen: Object(J.b)(Gt.a.ADD_REMOVAL_REASON),
				subredditId: En.c,
				userFlairModalIsOpen: Object(J.b)(Gt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: v.A,
				userInRedesignBeta: v.H,
				userIsLoggedIn: v.Q,
				userIsMod: v.R,
				userIsNew: v.U
			});
			class wn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Nt.a)()) return; {
						const e = d.a.get(_n.a);
						e && d.a.remove(_n.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Pn.F)(Gt.a.ALPHA_CONSUMER);
						t && Object(Pn.bb)(Gt.a.ALPHA_CONSUMER), (e || t) && Object(Pn.Ib)(Gt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Pn.F)(Gt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Pn.Ib)(Gt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Gt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(kn.a)(), 500) : setTimeout(() => Object(kn.b)(), 500)))
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
						comment: n && Object(ln.h)(r, n),
						post: n && Object(ln.K)(r, n),
						screen: Object(ln.bb)(r),
						subreddit: Object(ln.kb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(At.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Tt.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Dt, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f
					}), r && b && m.a.createElement(Qt, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(On, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(It, {
						withOverlay: !0,
						productId: o
					}), c && m.a.createElement(Rt, null))
				}
			}
			var Mn = Object(he.b)(Nn, e => ({
					markRedesignModalAsClosed: () => e(Object(wt.j)()),
					toggleBanModal: () => e(Object(wt.i)(Gt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(wt.i)(Gt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(wt.i)(Gt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(wt.i)(Gt.a.ADD_REMOVAL_REASON))
				}))(Object(Ge.c)(wn)),
				In = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				An = n("./src/reddit/constants/experiments.ts"),
				Tn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Rn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Ln = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Dn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Fn = n("./src/telemetry/helpers/sendCounter.ts"),
				Un = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Bn = n.n(Un);
			const Gn = Ue.a.div("Overlay", Bn.a),
				Hn = Ue.a.div("IframeContainer", Bn.a),
				qn = {},
				Wn = Object(Tn.u)(),
				Vn = Object(X.c)({
					frontpageSignupVariant: Qe.a,
					isAmModalDesignUpdateEnabled: Ln.a,
					isResponsiveSettingsEnabled: Dn.a
				}),
				Qn = {
					[He.c.ChangePassword]: Gt.a.CHANGE_PASSWORD_MODAL_ID,
					[He.c.Index]: Gt.a.LOGIN_MODAL_ID,
					[He.c.Register]: Gt.a.REGISTER_MODAL_ID,
					[He.c.EnableTwoFactor]: Gt.a.ENABLE_TWO_FACTOR,
					[He.c.DisableTwoFactor]: Gt.a.DISABLE_TWO_FACTOR,
					[He.c.TwoFactorBackupCodes]: Gt.a.TWO_FACTOR_BACKUP_CODES,
					[He.c.LinkAppleSSO]: Gt.a.LINK_APPLE_SSO,
					[He.c.UnlinkAppleSSO]: Gt.a.UNLINK_APPLE_SSO,
					[He.c.LinkGoogleSSO]: Gt.a.LINK_GOOGLE_SSO,
					[He.c.UnlinkGoogleSSO]: Gt.a.UNLINK_GOOGLE_SSO,
					[He.c.GoogleOneTap]: Gt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[He.c.Onboarding]: Gt.a.ONBOARDING_MODAL_ID
				};
			class zn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === He.c.Register && Object(Qe.f)(this.props.frontpageSignupVariant) && Rn.a.throttleFeature(An.ed), this.props.sendEvent(Object(qe.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(qe.g)()), Object(Fn.b)(S.o.Redesign, {
							type: Fn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(qe.h)()), Object(Fn.b)(S.o.Redesign, {
							type: Fn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							isAmModalDesignUpdateEnabled: t,
							path: n
						} = this.props, s = n === He.c.Index || n === He.c.Register, r = n === He.c.GoogleOneTap, o = () => {
							this.resizeContainer({
								height: 640,
								width: 400
							})
						};
						e === He.b.SelectAccount ? s ? t ? o() : this.resizeContainer({
							height: 474,
							width: 416
						}) : r && (t && o(), this.setState({
							removeHiddenOverlay: !0
						})) : e === He.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === He.b.Email || e === He.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== He.b.EmailOptIn && e !== He.b.GoogleUI || this.setState({
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
						path: r
					} = this.props, {
						containerSize: o,
						isSSOLinkActionFailedModal: a,
						removeGoogleOneTapStyles: i,
						removeHiddenOverlay: c
					} = this.state, l = Object(Qe.c)(e) || Object(Qe.d)(e), d = r === He.c.LinkAppleSSO || r === He.c.LinkGoogleSSO || r === He.c.UnlinkAppleSSO || r === He.c.UnlinkGoogleSSO, u = r === He.c.GoogleOneTap, p = Object(Ce.a)({
						[Bn.a.mModalUpdate]: t,
						[Bn.a.small]: l,
						[Bn.a.ssoConfirmPassword]: d,
						[Bn.a.linkActionSSOFail]: a,
						[Bn.a.mResponsive]: n,
						[Bn.a.mGoogleOneTap]: u && !i
					}), b = Object(Ce.a)({
						[Bn.a.mGoogleOneTap]: u && !i,
						[Bn.a.mHiddenOverlay]: u && !c
					}), h = !l && !a && !n;
					return m.a.createElement(Gn, {
						className: b
					}, m.a.createElement(Hn, {
						className: p,
						style: o || qn
					}, m.a.createElement(Be.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: r,
						showCloseButton: h
					})))
				}
			}
			const Kn = Wn(Object(he.b)(Vn, (e, t) => ({
				closeModal: t => {
					e(Object(wt.g)(Qn[t]))
				}
			}))(Object(Ge.c)(zn)));
			Object(In.b)(Gt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.ChangePassword
			})), Object(In.b)(Gt.a.LOGIN_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Index
			})), Object(In.b)(Gt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Onboarding
			})), Object(In.b)(Gt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: He.c.EnableTwoFactor
			})), Object(In.b)(Gt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: He.c.DisableTwoFactor
			})), Object(In.b)(Gt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Kn, {
				path: He.c.TwoFactorBackupCodes
			})), Object(In.b)(Gt.a.REGISTER_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Register
			})), Object(In.b)(Gt.a.LINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.LinkAppleSSO
			})), Object(In.b)(Gt.a.LINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.LinkGoogleSSO
			})), Object(In.b)(Gt.a.UNLINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.UnlinkAppleSSO
			})), Object(In.b)(Gt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.UnlinkGoogleSSO
			})), Object(In.b)(Gt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Jn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Jn, {
				withOverlay: !0
			}));
			const Xn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Xn, {
				withOverlay: !0
			}));
			const Zn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Zn, {
				withOverlay: !0
			}));
			const Yn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.CROWD_CONTROL, e => m.a.createElement(Yn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const $n = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement($n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const es = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ts = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ns = e => () => {
					e()
				};
			Object(In.b)(Gt.a.GOLD_GILD_MODAL, e => m.a.createElement(ts, {
				onOverlayClick: ns(e),
				withOverlay: !0
			}));
			var ss = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				rs = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				os = n.n(rs);
			const as = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = ss.SPARKLE_ASSET_PATH, document.createElement("img").src = ss.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(In.b)(Gt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(as, {
				withOverlay: !0,
				className: os.a.modalBody,
				overlayClassName: os.a.modalOverlay
			}));
			const is = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				cs = e => () => {
					e()
				};
			Object(In.b)(Gt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(is, {
				onOverlayClick: cs(e),
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx");
			const ls = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ls, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ds = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(ds, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const us = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(us, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ms = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ms, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const ps = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(ps, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const bs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.TRANSFER_POINTS, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(gs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(fs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const vs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.MULTIREDDIT_CREATE, e => m.a.createElement(vs, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(In.b)(Gt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(vs, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Os = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Gt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Cs = () => Promise.all([n.e(2), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				ys = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ne.a)(Cs).then(e => e.default)
				});
			Object(In.b)(Gt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const xs = () => null,
				Es = Object(Mt.a)({
					ErrorComponent: xs,
					getComponent: () => Object(ne.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: xs
				});
			Object(In.b)(Gt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Es, null));
			var js = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				_s = n.n(js);
			const Ss = Ue.a.h2("ColumnLabel", _s.a),
				Ps = Ue.a.wrapped(sn.a, "ColumnWrapper", _s.a),
				ks = Ue.a.div("Column", _s.a),
				Ns = Ue.a.div("Description", _s.a),
				ws = Ue.a.div("Key", _s.a),
				Ms = Ue.a.wrapped(Bt.l, "ModalMain", _s.a),
				Is = Ue.a.wrapped(Bt.e, "ModalBody", _s.a),
				As = Ue.a.wrapped(tn.l, "PrimaryButton", _s.a),
				Ts = Ue.a.wrapped(Ht.a, "TextButton", _s.a),
				Rs = Object(he.b)(null, e => ({
					closeModal: () => e(Object(wt.i)(Gt.a.KEYBOARD_SHORTCUTS))
				})),
				Ls = Ue.a.wrapped(Object(Ft.a)(Rs(e => m.a.createElement(Is, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Bt.i, null, m.a.createElement(qt.a, null, m.a.createElement(Bt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Ts, {
					onClick: e.closeModal
				}, m.a.createElement(Bt.b, null)))), m.a.createElement(Ms, null, m.a.createElement(Ps, null, m.a.createElement(ks, null, m.a.createElement(sn.a, null, m.a.createElement(Ss, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(ws, null, "Shift + ?")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(ws, null, "J")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(ws, null, "K")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(ws, null, "N")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(ws, null, "P")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(ws, null, "Enter")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(ws, null, "X")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(ws, null, "L"))), m.a.createElement(ks, null, m.a.createElement(sn.a, null, m.a.createElement(Ss, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(ws, null, "A")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(ws, null, "Z")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(ws, null, "C")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(ws, null, "R")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(ws, null, "Ctrl + Enter")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(ws, null, "S")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(ws, null, "H")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(ws, null, "Q")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(ws, null, "Enter"))))), m.a.createElement(Bt.g, null, m.a.createElement(As, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", _s.a);
			Object(In.b)(Gt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Ls, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ds = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Fs = e => () => {
					e()
				};
			Object(In.b)(Gt.a.SNOOVATAR_MODAL, e => m.a.createElement(Ds, {
				onOverlayClick: Fs(e),
				withOverlay: !0
			}));
			const {
				fbt: Us
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bs = Object(X.c)({
				allowNavigationCallback: En.a
			}), Gs = Object(he.b)(Bs, e => ({
				closeModal: () => e(Object(wt.i)(Gt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Ut.a)())
			}));
			class Hs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, null, m.a.createElement(qt.a, null, m.a.createElement(Bt.q, null, Us._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Ht.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Bt.b, null)))), m.a.createElement(Bt.l, null, m.a.createElement(Bt.p, null, Us._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Bt.g, null, m.a.createElement(Bt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Us._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Bt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Us._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const qs = Object(Ft.a)(Gs(Hs));
			Object(In.b)(Gt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(qs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Ws = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Vs = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ne.a)(Ws).then(e => e.default)
				});
			Object(In.b)(Gt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Qs = Object(X.c)({
					activeModalId: J.a
				}),
				zs = Object(he.b)(Qs, e => ({
					toggleModal: t => e(Object(wt.i)(t))
				})),
				Ks = 500,
				Js = () => {};
			class Xs extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Gt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(kn.a)(), Ks) : setTimeout(() => Object(kn.b)(), Ks)))
				}
				componentWillUnmount() {
					Object(kn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(In.a)(e)(e ? this.toggleModal : Js)
				}
			}
			var Zs = zs(Xs),
				Ys = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				$s = n("./src/reddit/actions/page.ts"),
				er = n("./src/reddit/actions/shortcuts/utils.ts"),
				tr = n("./src/reddit/icons/fonts/index.tsx"),
				nr = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				sr = n("./src/reddit/selectors/header.ts"),
				rr = n("./src/reddit/selectors/userPrefs.ts"),
				or = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				ar = n("./src/reddit/components/SEOTitle/index.tsx"),
				ir = n("./src/reddit/components/SubredditIcon/index.tsx"),
				cr = n("./src/reddit/components/UserIcon/index.tsx"),
				lr = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function dr() {
				return (dr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ur, mr = e => m.a.createElement("svg", dr({
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
				pr = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				br = n.n(pr);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(ur || (ur = {}));
			const hr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ar.b, {
					type: ar.a.HeaderSelector
				}, s))
			};
			var gr = n("./src/lib/objectSelector/index.ts"),
				fr = n("./src/reddit/constants/wiki.ts"),
				vr = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Or = n("./src/reddit/selectors/subreddit.ts"),
				Cr = n("./src/reddit/selectors/topic.ts");
			var yr = Object(gr.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						r = Object(nr.c)(e),
						o = Object(nr.b)(e),
						a = Object(En.m)(e),
						i = Object(Tn.Z)(n);
					switch (i) {
						case "avatar":
							return {
								type: ur.Avatar
							};
						case "index":
						case "listing":
							return s || r && !o || a && o ? {
								type: ur.Home
							} : {
								type: ur.Popular
							};
						case "modListing":
							return {
								type: ur.ModListing
							};
						case "modQueuePages":
							return {
								type: ur.ModQueue
							};
						case "postCreation":
							return {
								type: ur.CreatePost
							};
						case "postDraft":
							return {
								type: ur.ViewDraft
							};
						case "subredditCreation":
							return {
								type: ur.SubredditCreation
							};
						case "coins":
							return {
								type: ur.Coins
							};
						case "internationalSitePage":
							return {
								type: ur.InternationalSite
							};
						case "happeningNow":
							return {
								type: ur.HappeningNow
							};
						case "predictions":
							return {
								type: ur.Predictions
							};
						case "premium":
							return {
								type: ur.Premium
							};
						case "acknowledgements":
							return {
								type: ur.Acknowledgements
							};
						case "appeal":
							return {
								type: ur.Appeal
							};
						case "report":
							return {
								type: ur.Report
							};
						case "userDataRequest":
							return {
								type: ur.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: ur.DailyCharts
							};
						case "geotagging":
							return {
								type: ur.Geotagging
							};
						case "notificationsInbox":
							return {
								type: ur.NotificationsInbox
							};
						case "talk":
							return {
								type: ur.Talk
							};
						case "topic": {
							const t = Object(Tn.t)(n),
								s = t && Object(Cr.d)(e, t);
							if (s) return {
								type: ur.Topic,
								model: s
							}
						}
					}
					const c = e.user.account;
					if (c) switch (i) {
						case "inboxPages":
							return {
								type: ur.Inbox, model: c
							};
						case "settings":
							return {
								type: ur.Settings, model: c
							}
					}
					const l = Object(Tn.T)(e, {
						pageLayer: n
					});
					if ("all" === l) return {
						type: ur.All
					};
					if ("popular" === l) return {
						type: ur.Popular
					};
					const d = Object(Tn.r)(e, {
						pageLayer: n
					});
					if (d) return "searchResults" === i ? {
						type: ur.CommunitySearch,
						model: d
					} : {
						type: ur.Community,
						model: d
					};
					const u = Object(Tn.e)(e, {
						pageLayer: n
					});
					if (u) return {
						type: ur.Multi,
						model: u
					};
					const m = Object(Tn.k)(e, {
						pageLayer: n
					});
					if (m) return {
						type: ur.UserProfile,
						model: m
					};
					const p = Object(Tn.i)(n);
					if (p) return {
						type: ur.UserProfileName,
						name: `u/${p}`
					};
					if (i && "searchResults" === i) return {
						type: ur.GlobalSearch
					};
					if ("subredditWiki" === i) {
						const t = Object(Tn.o)(e, {
								pageLayer: n
							}) || fr.e,
							s = Object(Or.B)(e, {
								subredditName: t
							});
						if (s) return {
							type: ur.Community,
							model: s
						}
					}
					return "rpan" === i && Object(vr.a)(e) ? {
						type: ur.PublicAccessNetwork
					} : {
						type: ur.Unknown
					}
				}),
				xr = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
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

			function _r(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Er.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(Ce.a)(Er.a.text, {
								[Er.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Er.a.badge
						})),
						className: Object(Ce.a)(Er.a.item, e.className, {
							[Er.a.mFocused]: !!e.isFocused,
							[Er.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", jr({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(Ys.a, jr({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var Sr = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Pr = n("./src/reddit/constants/localStorage.ts"),
				kr = n("./src/reddit/hooks/useIsClient.ts"),
				Nr = n("./src/reddit/hooks/useLocalStorage.ts");
			const wr = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Mr = e => {
					let {
						className: t
					} = e;
					const n = Object(kr.a)(),
						s = Object(he.e)(En.g),
						r = Object(he.e)(nr.c),
						[o, a] = Object(Nr.a)(Pr.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = wr(o.dismissed),
						l = wr(o.throttledUntil),
						d = !n || !r || c >= 3 || r && s || i < l;
					return n && r && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + S.E
					}), d ? null : m.a.createElement(Sr.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var Ir = n("./src/reddit/constants/listings.ts"),
				Ar = n("./src/reddit/helpers/overlay/index.ts"),
				Tr = n("./src/reddit/routes/modListing/index.ts"),
				Rr = n("./src/reddit/routes/predictions/index.ts"),
				Lr = n("./src/reddit/routes/talk/index.ts"),
				Dr = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Fr = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				Ur = n("./src/reddit/selectors/multireddit.ts"),
				Br = n("./src/lib/LinkedListMap/index.ts"),
				Gr = n("./src/reddit/routes/avatar/index.ts");

			function Hr() {
				return (Hr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qr = Object(X.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ur.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ur.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Wr;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(Wr || (Wr = {}));
			const Vr = [e => ({
					id: ur.Employee,
					type: Wr.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(tr.a, Hr({
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
				Qr = () => [e => ({
					id: ur.All,
					type: Wr.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				zr = () => [e => ({
					id: "reddit-feeds",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: ur.Home,
					type: Wr.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
					id: ur.Popular,
					type: Wr.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				}), ...Qr()],
				Kr = [e => ({
					id: "reddit-feeds",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: ur.Home,
					type: Wr.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				}), ...Qr()],
				Jr = e => m.a.createElement(Mr, {
					className: e.className
				}),
				Xr = [e => ({
					id: "reddit-feeds",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: ur.Home,
					type: Wr.GenericLink,
					model: {
						url: "/",
						badge: Jr,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
					id: ur.Popular,
					type: Wr.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				Zr = [e => ({
					id: "reddit-other",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: ur.Settings,
					type: Wr.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(lr.a, {
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
					id: ur.Inbox,
					type: Wr.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(lr.a, {
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
				Yr = e => ({
					id: ur.Coins,
					type: Wr.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				$r = e => ({
					id: ur.Premium,
					type: Wr.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				eo = e => ({
					id: ur.Avatar,
					type: Wr.GenericLink,
					model: {
						url: Gr.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				to = e => ({
					id: ur.Talk,
					type: Wr.GenericLink,
					model: {
						url: Lr.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				no = e => ({
					id: ur.Predictions,
					type: Wr.GenericLink,
					model: {
						url: Rr.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
				so = [e => ({
					id: ur.ModQueue,
					type: Wr.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
						id: ur.ModMail,
						type: Wr.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(tr.a, Hr({
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

			function ro(e, t, n, r) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("your communities", null, {
							hk: "BtF8C"
						}).toString()
					}
				}), n && ao(e, r), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Wr.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Wr.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}

			function oo(e, t, n) {
				t.recentSubreddits.length && (e.push({
					id: "header-subscriptions",
					type: Wr.Header,
					model: {
						displayText: s.fbt._("recent communities", null, {
							hk: "24NvFP"
						}).toString()
					}
				}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
					id: "sub" + t.id,
					type: Wr.Subreddit,
					model: t,
					telemetryNoun: "community"
				})), ao(e, n, !0))
			}
			const ao = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = {
						id: ur.CreateCommunity,
						telemetryNoun: "create_community"
					},
					o = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(tr.a, Hr({
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
					...r,
					type: Wr.GenericClickable,
					model: {
						...o,
						onClick: () => {
							n ? (t(Object(wt.k)({
								actionSource: wt.a.HeaderSignup
							})), t(Object(K.openRegisterModal)())) : t(Object(wt.h)(Gt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var io = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				co = n.n(io);

			function lo(e) {
				return m.a.createElement("div", {
					className: Object(Ce.a)(co.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var uo = n("./src/reddit/actions/subscription/index.ts"),
				mo = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				po = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				bo = n.n(po);

			function ho() {
				return (ho = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const go = Object(X.c)({
					currentUser: v.k,
					hideNSFWPref: v.F,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: nr.c
				}),
				fo = Object(he.b)(go, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Wr.Subreddit:
								e(Object(uo.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Wr.Profile:
								e(Object(uo.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Wr.Multi:
								e(Object(uo.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(mo.f)(t.model.url)) : t.sendEvent(Object(mo.c)(t.model.url))
						}
					}
				}));
			var vo = Object(Ge.c)(fo((function(e) {
					const t = {
						className: Object(Ce.a)(bo.a.item, e.className, {
							[bo.a.mFocused]: !!e.isFocused
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
						case Wr.Subreddit:
							return m.a.createElement(Ys.a, ho({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(ir.b, {
								className: bo.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: bo.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(tr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Ce.a)(bo.a.favorite, {
									[bo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Wr.SubredditAutocomplete:
							return m.a.createElement(Ys.a, ho({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(ir.b, {
								className: bo.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: bo.a.text
							}, e.model.name));
						case Wr.Multi:
							return m.a.createElement(Ys.a, ho({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: bo.a.customFeedIcon
							}), m.a.createElement("span", {
								className: bo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(tr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Ce.a)(bo.a.favorite, {
									[bo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Wr.Profile:
							return m.a.createElement(Ys.a, ho({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(cr.a, {
								className: bo.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: bo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(tr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Ce.a)(bo.a.favorite, {
									[bo.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Oo = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Co = n.n(Oo);

			function yo(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Co.a.header
				}), m.a.createElement("div", {
					className: Co.a.item
				}), m.a.createElement("div", {
					className: Co.a.item
				}), m.a.createElement("div", {
					className: Co.a.item
				}), m.a.createElement("div", {
					className: Co.a.item
				}))
			}
			var xo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Eo = n("./src/lib/sample/index.ts"),
				jo = n("./src/reddit/actions/subreddit.ts"),
				_o = n("./src/reddit/controls/InternalLink/index.tsx");

			function So() {
				return (So = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Po = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", So({
						href: s
					}, a), t) : m.a.createElement(_o.default, So({
						to: s
					}, a), t)
				},
				ko = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				No = n.n(ko),
				wo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Mo = n.n(wo);
			class Io extends m.a.Component {
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
						className: Object(Ce.a)(No.a.button, Mo.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(Ce.a)(No.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: No.a.iconContainer
					}, o), m.a.createElement("span", {
						className: No.a.title
					}, l ? m.a.createElement(Po, {
						className: No.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(tr.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(Ce.a)(No.a.chevronIcon, {
							[No.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(Ce.a)(No.a.contentContainer, No.a["m-collapsible"], {
							[No.a.isOpen]: d,
							[No.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var Ao = Io,
				To = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Ro = n("./src/reddit/constants/colors.ts");
			const Lo = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(Ce.a)(No.a.title, n)
					}, t)
				},
				Do = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(Ce.a)(No.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Lo, {
						title: s,
						titleClassName: r
					}))
				},
				Fo = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(Po, {
						className: Object(Ce.a)(No.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Lo, {
						title: r,
						titleClassName: o
					}))
				},
				Uo = e => {
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
					return m.a.createElement(Po, {
						className: Object(Ce.a)(No.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(ir.b, {
						"aria-hidden": !0,
						className: Object(Ce.a)(No.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: Ro.a.snoo
					}), m.a.createElement(Lo, {
						title: i,
						titleClassName: c
					}))
				},
				Bo = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(Ce.a)(No.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Lo, {
						title: s,
						titleClassName: r
					}), m.a.createElement(To.a, {
						className: No.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Go = [{
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
				Ho = n("./src/reddit/helpers/trackers/navigation.ts"),
				qo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Wo = n.n(qo);
			const Vo = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, o] = Object(u.useState)(null), a = e => () => {
					o(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Go.map((e, o) => ((e, t, n, s, r) => {
					let {
						link: o,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(Ao, {
						buttonClassName: r ? Wo.a.navButtonOverride : "",
						className: Wo.a.collapsibleContainer,
						icon: s && o.icon && m.a.createElement(tr.a, {
							name: o.icon
						}),
						isOpen: i,
						key: o.url,
						onClick: (e, t) => {
							o.noun && n(Object(Ho.c)(o.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: o.title,
						url: o.url
					}, a.map(e => m.a.createElement(Fo, {
						className: r ? Wo.a.navBasicLink : Wo.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Ho.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: r === e
				}))(o), t, n, s)))
			};
			var Qo = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r
					} = e;
					return m.a.createElement(Ao, {
						icon: m.a.createElement(tr.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							r(Object(Ho.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(Vo, {
						sendEvent: r
					})))
				},
				zo = n("./src/reddit/constants/keycodes.ts"),
				Ko = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Jo = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				Xo = n("./src/reddit/helpers/trackers/postComposer.ts"),
				Zo = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Yo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				$o = n.n(Yo);

			function ea() {
				return (ea = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ta(e) {
				return e.id === ur.ModMail || e.id === ur.CreateCommunity
			}

			function na(e) {
				const t = new Br.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Wr.Header && e.type !== Wr.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const sa = Object(X.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Eo.a)(e, {
						rate: 14
					}),
					isLoggedOutOneFeed: nr.c,
					unfilteredListBuilder: e => t => {
						const n = qr(e),
							r = new Br.a("id"),
							o = Object(nr.c)(e),
							a = Object(v.pb)(e),
							i = Object(nr.d)(e),
							c = Object(En.d)(e),
							l = Object(nr.f)(e),
							d = Object(nr.a)(e),
							u = [],
							p = (e => Object(Dr.r)(e) ? [$r, Yr, eo, to, no] : [Yr, $r, eo, to, no])(e),
							b = "popular" === c,
							h = [() => ({
								id: "reddit-feeds",
								type: Wr.Header,
								model: {
									displayText: s.fbt._("Feeds", null, {
										hk: "4zvMfr"
									}).toString()
								}
							}), () => ({
								id: b ? ur.Popular : ur.Home,
								type: Wr.GenericLink,
								model: {
									url: b ? "/r/popular/" : "/",
									displayText: s.fbt._("Popular", null, {
										hk: "1op8tD"
									}).toString(),
									icon: e => m.a.createElement(tr.a, Hr({
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
							const o = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
								id: "header-favorites",
								type: Wr.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => r.push({
								id: "fav" + e.id,
								type: Wr.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => r.push({
								id: "fav" + e.id,
								type: Wr.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => r.push({
								id: "fav" + e.url,
								type: Wr.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && r.push({
								id: "multis-pending",
								type: Wr.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? r.push({
								id: "moderatingSubreddits-pending",
								type: Wr.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (r.push({
								id: "header-moderating",
								type: Wr.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), o.isMod && so.forEach(e => r.push(e(o))), r.push({
								id: ur.ModListing,
								type: Wr.GenericLink,
								model: {
									url: Tr.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(tr.a, Hr({
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
							}), n.moderatingSubreddits.forEach(e => r.push({
								id: "mod" + e.id,
								type: Wr.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Wr.Header,
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
													n(Object(wt.h)(Gt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(Ce.a)(t, br.a.multiPlusButton)
											}, m.a.createElement(tr.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Wr.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(r, n, t), n.subscriptionsPending ? r.push({
								id: "subscriptions-pending",
								type: Wr.LoadingState,
								model: {
									displayText: ""
								}
							}) : ro(r, n, a, t), ((e, t, n, r) => (zr().forEach(e => t.push(e(n))), n.isEmployee && Vr.forEach(e => t.push(e(n))), Object(Fr.a)(e) ? t.push({
								id: ur.HappeningNow,
								type: Wr.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(mr, {
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
							}) : Object(vr.a)(e) && t.push({
								id: ur.PublicAccessNetwork,
								type: Wr.GenericClickable,
								model: {
									onClick: () => {
										r(Object(Ar.a)(Ir.c[Ir.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(tr.a, Hr({
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
							}), t))(e, r, o, t), Zr.forEach(e => r.push(e(o))), r.push((() => ({
								id: ur.CreatePost,
								type: Wr.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(tr.a, Hr({
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
							}))()), r.push((() => ({
								id: ur.DailyCharts,
								type: Wr.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(tr.a, Hr({
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
								id: ur.NotificationsInbox,
								type: Wr.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(tr.a, Hr({
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
							}))(r), g.forEach(e => r.push(e(o)))
						} else n.subscriptions.length || Object(v.Q)(e) ? zr().forEach(e => r.push(e(null))) : o ? (i ? h.forEach(e => e && r.push(e(null))) : Xr.forEach(e => e && r.push(e(null))), d ? (n.recentSubreddits = n.recentSubreddits.filter(e => !e.isNSFW), oo(r, n, t)) : l || oo(r, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: Wr.Header,
								model: {
									displayText: s.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: Wr.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(r)) : Kr.forEach(e => r.push(e(null))), o || (r.push({
							id: "reddit-other",
							type: Wr.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), g.forEach(e => r.push(e(null))), ro(r, n, a, t));
						return r
					}
				}),
				ra = e => ({
					onHomeClicked: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(uo.e)()), e(Object(jo.q)()), e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				oa = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class aa extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = na(n),
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
						if (e.key === zo.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === zo.b.Tab && this.props.onClose && this.props.onClose(), e.key === zo.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Wr.Header && e.type !== Wr.ExploreMenu && e.type !== Wr.LoadingState && (this.fireTelemetryForListItem(e), e.type === Wr.GenericClickable ? e.model.onClick() : ta(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === zo.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === zo.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case ur.Coins:
							case ur.Premium:
								Object(Ko.d)(Ko.a.GoldPayment, !0), t = Object(Ko.c)(Ko.a.GoldPayment)
						}
						switch (e.type) {
							case Wr.Category:
							case Wr.GenericLink:
							case Wr.GenericClickable:
							case Wr.Multi:
							case Wr.Profile:
							case Wr.Subreddit:
								this.props.sendEvent(n => ({
									...Object(ln.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Wr.Multi ? Object(ln.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Wr.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(ln.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case Wr.CreatePost:
								this.props.sendEvent(Object(Xo.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: na(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					const {
						canAutofocus: e,
						isLoggedOutMenuRenderedCounterSampled: t,
						isLoggedOutOneFeed: n,
						isPinned: s,
						onSubredditsRequested: r
					} = this.props;
					"complete" === document.readyState ? r() : window.addEventListener("load", r), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), n && t && Object(Jo.b)(s ? Zo.c.LeftRail : Zo.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = na(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Br.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Wr.Category:
								case Wr.GenericLink:
								case Wr.Multi:
								case Wr.Profile:
								case Wr.Subreddit:
								case Wr.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Wr.Header: {
									const t = n.last();
									t && t.type === Wr.Header && n.pop(), n.push(e);
									break
								}
								case Wr.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === Wr.Header && n.pop(), n
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
						className: $o.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === ur.Home && this.props.onHomeClicked(), e.type === Wr.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Wr.GenericClickable:
								return m.a.createElement(_r, ea({}, n, {
									className: $o.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Wr.Category:
							case Wr.GenericLink:
							case Wr.CreatePost:
								return m.a.createElement(_r, ea({}, n, {
									externalLink: ta(e),
									className: $o.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Wr.Header: {
								const n = e.model.button;
								return m.a.createElement(lo, {
									className: $o.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: $o.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Wr.LoadingState:
								return m.a.createElement(yo, {
									className: $o.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Wr.Multi:
								return m.a.createElement(vo, ea({}, n, {
									className: $o.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Wr.Multi
								}));
							case Wr.Profile:
								return m.a.createElement(vo, ea({}, n, {
									className: $o.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Wr.Profile
								}));
							case Wr.Subreddit:
								return m.a.createElement(vo, ea({}, n, {
									className: $o.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Wr.Subreddit
								}));
							case Wr.ExploreMenu:
								return m.a.createElement(Vo, ea({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const ia = Object(he.b)(sa, ra, oa)(Object(Ge.c)(aa)),
				ca = Object(he.b)(sa, ra, oa)(Object(Ge.c)(Object(xo.b)(aa))),
				la = Object(Tn.u)({
					pageLayer: e => e
				}),
				da = Object(X.c)({
					currentPage: yr,
					hideNSFWPref: v.F,
					isDropdownOpen: sr.a,
					isLoggedOutUiOnly: nr.d,
					isOverlayOpen: En.i,
					isPinnedSubscriptionsMenuDisabled: rr.b,
					isSubscriptionsPinned: rr.c
				});
			class ua extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(er.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(ln.o)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: r,
							isOverlayOpen: o,
							isLoggedOutUiOnly: a
						} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o, l = {
							...t,
							type: a && t.type === ur.Home ? ur.Popular : t.type
						};
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(Ce.a)(br.a.container, n, {
								[br.a.mOpen]: i,
								[br.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[br.a.mPinned]: this.props.isSubscriptionsPinned,
								[br.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: br.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: br.a.containerText
						}, function(e) {
							switch (e.type) {
								case ur.Acknowledgements:
									return hr(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case ur.All:
									return hr(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case ur.Appeal:
									return hr(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case ur.Avatar:
									return hr(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case ur.Coins:
									return hr(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case ur.Community:
									return hr(e.model.displayText, !0);
								case ur.CommunitySearch:
									return hr(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case ur.CreateCommunity:
									return hr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case ur.CreatePost:
									return hr(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case ur.DailyCharts:
									return hr(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case ur.GlobalSearch:
									return hr(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case ur.Geotagging:
									return hr(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case ur.HappeningNow:
									return hr(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case ur.Home:
									return hr(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case ur.Inbox:
									return hr(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case ur.ModListing:
									return hr("r/Mod");
								case ur.ModMail:
									return hr(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case ur.ModQueue:
									return hr(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case ur.Multi:
									return hr(e.model.displayText, !0);
								case ur.NotificationsInbox:
									return hr(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case ur.InternationalSite:
								case ur.Popular:
									return hr(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case ur.Predictions:
									return hr(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case ur.Premium:
									return hr(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case ur.PublicAccessNetwork:
									return hr(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case ur.Report:
									return hr(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case ur.Settings:
									return hr(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case ur.SubredditCreation:
									return hr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case ur.Talk:
									return hr(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case ur.Topic:
									return hr(e.model);
								case ur.Unknown:
									return hr("");
								case ur.UserDataRequest:
									return hr(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case ur.UserProfile:
									return hr(e.model.displayText, !0);
								case ur.UserProfileName:
									return hr(e.name, !0);
								case ur.ViewDraft:
									return hr(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(l)), function(e, t) {
							const n = e => m.a.createElement(tr.a, {
								name: e,
								isFilled: !0,
								className: br.a.defaultIcon
							});
							switch (e.type) {
								case ur.All:
									return n("all");
								case ur.Acknowledgements:
								case ur.Appeal:
									return n("edit");
								case ur.Avatar:
									return n("avatar_style");
								case ur.Coins:
									return n("coins");
								case ur.Community:
								case ur.CommunitySearch: {
									const n = Object(or.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(ir.b, {
										className: br.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case ur.CreateCommunity:
								case ur.CreatePost:
									return n("add");
								case ur.DailyCharts:
									return n("list_numbered");
								case ur.Geotagging:
									return n("custom_feed");
								case ur.GlobalSearch:
									return n("search");
								case ur.HappeningNow:
									return m.a.createElement(mr, {
										className: br.a.happeningNowIcon
									});
								case ur.Home:
									return n("home");
								case ur.Inbox:
									return m.a.createElement(lr.a, {
										wrapperClassName: br.a.userIcon
									});
								case ur.ModListing:
									return n("mod_queue");
								case ur.ModMail:
									return n("mod_mail");
								case ur.ModQueue:
									return n("mod_queue");
								case ur.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: br.a.customFeedIcon
									});
								case ur.NotificationsInbox:
									return n("notification");
								case ur.InternationalSite:
								case ur.Popular:
									return n("popular");
								case ur.Predictions:
									return n("prediction");
								case ur.Premium:
									return n("premium");
								case ur.PublicAccessNetwork:
									return n("video_live");
								case ur.Report:
									return n("report");
								case ur.Settings:
									return m.a.createElement(lr.a, {
										wrapperClassName: br.a.userIcon
									});
								case ur.SubredditCreation:
									return n("add");
								case ur.Talk:
									return n("live");
								case ur.Topic:
									return n("custom_feed");
								case ur.Unknown:
									return m.a.createElement("div", {
										className: br.a.unknownIcon
									});
								case ur.UserDataRequest:
									return n("add");
								case ur.UserProfile: {
									const n = Object(or.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(cr.a, {
										className: br.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case ur.UserProfileName:
									return m.a.createElement("div", {
										className: br.a.defaultIcon
									});
								case ur.Unknown:
									return m.a.createElement("div", {
										className: br.a.unknownIcon
									});
								case ur.UserProfile: {
									const n = Object(or.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(cr.a, {
										className: br.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case ur.ViewDraft:
									return n("edit")
							}
						}(l, r), !this.props.isSubscriptionsPinned && m.a.createElement(tr.a, {
							name: "caret_down",
							className: br.a.caretDown
						})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(tr.a, {
							name: "side_menu",
							className: br.a.pin,
							onClick: c ? void 0 : this.props.onPinSubscriptions
						}), i && m.a.createElement(ca, {
							canAutofocus: !0,
							className: Object(Ce.a)(br.a.listContainer, br.a.paddingBottom),
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
					return m.a.createElement(Pe.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var ma = la(Object(he.b)(da, (e, t) => ({
					closeDropdown: () => e(Object(Te.f)()),
					onLocationRefresh: (n, s) => e(Object($s.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(Te.i)()), e(Object(Te.f)())
					},
					openDropdown: () => e(Object(Te.g)()),
					toggleDropdown: () => e(Object(Te.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Ge.c)(ua))),
				pa = n("./src/reddit/components/JumpToContent/index.tsx"),
				ba = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ha = n("./node_modules/lodash/isEmpty.js"),
				ga = n.n(ha),
				fa = n("./node_modules/lodash/pick.js"),
				va = n.n(fa),
				Oa = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				Ca = n("./src/lib/hooks/usePrevious.ts"),
				ya = n("./src/lib/makeSearchKey/index.ts"),
				xa = n("./src/reddit/actions/search.ts"),
				Ea = n("./src/lib/makeGqlRequest/index.ts"),
				ja = n("./src/redditGQL/operations/SearchTypeahead.json"),
				_a = n("./src/telemetry/models/App.ts");
			var Sa = n("./src/reddit/helpers/name/index.ts"),
				Pa = n("./src/reddit/models/Search/index.ts");
			var ka = n("./src/reddit/helpers/search/SearchTelemetrySource.ts");
			const Na = e => async (t, n, s) => {
				let {
					gqlContext: r
				} = s;
				const o = n(),
					a = ln.db(o, ka.a.Typeahead),
					i = Object(v.kb)(o),
					c = ((e, t) => {
						var n, s;
						const r = [],
							o = {};
						return null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var n, s, a, i, c;
							const l = e;
							let d, u, m, p, b, h;
							r.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(Sa.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(Sa.c)(l.name));
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
								section: Pa.c.typeahead,
								type: Pa.b.subredditOrProfile
							};
							o[l.id] = g
						}), {
							order: r,
							typeaheads: o
						}
					})((await (async (e, t, n, s) => {
						const r = {
							productSurface: _a.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(Ea.a)(e, {
							...ja,
							variables: r
						}, {
							traceRequestName: "search_typeahead"
						})
					})(r(), e, a, i)).body, e);
				(null == c ? void 0 : c.typeaheads) && (null == c ? void 0 : c.order) && t(Object(xa.p)({
					typeaheadSuggestions: c.typeaheads,
					order: c.order,
					searchQuery: e
				}))
			};
			var wa = n("./src/reddit/actions/search/trending.ts"),
				Ma = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Ia = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Aa = n("./src/reddit/constants/parameters.ts"),
				Ta = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Ra = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				La = n("./src/reddit/helpers/isArrayEqual.ts"),
				Da = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Fa = n("./src/reddit/helpers/trackers/screenview.ts"),
				Ua = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Ba = n("./src/reddit/hooks/usePageLayer.ts"),
				Ga = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				Ha = n("./src/reddit/selectors/searchFix.ts"),
				qa = n("./src/reddit/selectors/searchResults.ts"),
				Wa = n("./src/reddit/selectors/trending.ts"),
				Va = n("./src/reddit/helpers/chooseVariant/index.ts"),
				Qa = n("./src/reddit/helpers/search/searchImpressionId.ts");

			function za(e) {
				const t = Object(ln.q)(e, An.Df);
				return {
					experimentState: e,
					isActive: (null == t ? void 0 : t.variant) === An.Od,
					isBucketed: !!(null == t ? void 0 : t.variant)
				}
			}
			var Ka, Ja = n("./src/reddit/controls/Search/index.m.less"),
				Xa = n.n(Ja),
				Za = n("./node_modules/lodash/debounce.js"),
				Ya = n.n(Za),
				$a = n("./src/reddit/components/Pill/index.tsx"),
				ei = n("./src/reddit/components/Pill/PillText/index.m.less"),
				ti = n.n(ei);

			function ni() {
				return (ni = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(Ka || (Ka = {}));
			const si = {
					[Ka.DAY]: ti.a.pillTextVariantDay,
					[Ka.NIGHT]: ti.a.pillTextVariantNight
				},
				ri = e => {
					let {
						children: t,
						className: n,
						variant: s,
						...r
					} = e;
					return m.a.createElement("div", ni({}, r, {
						className: Object(Ce.a)(ti.a.pillText, si[s], n)
					}), t)
				},
				oi = e => m.a.createElement("svg", {
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
			var ai = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				ii = n.n(ai);
			const ci = e => {
				let {
					onClickDismiss: t,
					content: n
				} = e;
				const r = Object(he.e)(v.db);
				return m.a.createElement($a.a, {
					className: ii.a.communityPill,
					"data-testid": "community-pill"
				}, m.a.createElement(ri, {
					className: ii.a.pillText,
					"data-testid": "community-pill-text",
					variant: r ? Ka.NIGHT : Ka.DAY
				}, m.a.createElement(ir.b, {
					className: Object(Ce.a)(Xa.a.subredditIcon, ii.a.subredditIcon),
					iconUrl: n.icon
				}), n.title, m.a.createElement("button", {
					"aria-label": s.fbt._("Remove community search filter", null, {
						hk: "1zezc9"
					}),
					className: Object(Ce.a)(ii.a.dismissButton, r ? ii.a.dismissButtonNight : ii.a.dismissButtonDay),
					"data-testid": "community-pill-button",
					onClick: t,
					onFocus: e => {
						e.stopPropagation()
					},
					type: "button"
				}, m.a.createElement(oi, {
					className: ii.a.dismissIcon
				}))))
			};
			var li = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				di = n.n(li);
			const ui = e => {
					let {
						inputRef: t,
						isOpen: n,
						onChange: r,
						onClearSearchQuery: o,
						onClickDismissCommunityPill: a,
						onFocusSearchBar: i,
						onFormSubmit: c,
						onKeyDown: l,
						searchQuery: d,
						showCommunityPill: u,
						communityPill: p
					} = e;
					var b;
					const h = u && p ? s.fbt._("Search within {subredditName}", [s.fbt._param("subredditName", p.title)], {
						hk: "2B6J3t"
					}) : s.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
					return m.a.createElement("div", {
						className: Object(Ce.a)(di.a.searchBar, n && di.a.isOpen)
					}, m.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						className: di.a.form,
						method: "get",
						onSubmit: c,
						onFocus: i,
						role: "search"
					}, m.a.createElement("label", {
						className: di.a.inputLabel,
						htmlFor: "header-search-bar"
					}, m.a.createElement("div", {
						"aria-hidden": !0,
						className: di.a.iconContainer
					}, m.a.createElement(tr.a, {
						name: "search",
						className: di.a.icon
					})), m.a.createElement(ba.a, {
						"aria-live": "assertive"
					}, h)), u && p && m.a.createElement(ci, {
						onClickDismiss: a,
						content: p
					}), m.a.createElement("input", {
						className: di.a.input,
						defaultValue: d,
						id: "header-search-bar",
						name: "q",
						onChange: Ya()((function() {
							var e;
							r((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
						}), 200),
						onKeyDown: l,
						placeholder: s.fbt._("{Text}", [s.fbt._param("Text", "Search Reddit")], {
							hk: "DG9dX"
						}),
						ref: t,
						type: "search"
					})), (null === (b = null == t ? void 0 : t.current) || void 0 === b ? void 0 : b.value) ? m.a.createElement("button", {
						"aria-label": s.fbt._("Remove search bar text", null, {
							hk: "4twCsS"
						}),
						className: di.a.dismissButton,
						"data-testid": "search-bar-dismiss-button",
						onClick: o
					}, m.a.createElement(tr.a, {
						name: "clear"
					})) : null)
				},
				mi = /r\/([0-9a-zA-Z]*)\s/gi;

			function pi(e) {
				let {
					className: t
				} = e;
				var n, s;
				const r = Object(Ba.a)(),
					o = Object(Tn.ab)(r),
					a = Object(Tn.X)(r),
					{
						nsfwSessionSetting: i
					} = Object(Ia.b)(),
					[l, d] = Object(u.useState)(-1),
					[b, h] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[y, x] = Object(u.useState)([]),
					[E, j] = Object(u.useState)(null),
					[_, P] = Object(u.useState)(),
					k = Object(u.useRef)(null),
					N = Object(u.useRef)(null),
					w = Object(Ge.b)(),
					M = Object(he.d)(),
					I = Object(he.e)(En.b),
					A = Object(he.e)(En.d),
					T = Object(he.e)(v.k),
					R = Object(he.e)(qa.r),
					L = Object(he.e)(qa.q),
					D = Object(he.e)(v.Q),
					F = Object(he.e)(v.db),
					U = Object(he.e)(En.r),
					B = Object(he.e)(e => Object(Tn.r)(e, {
						pageLayer: r
					})),
					G = Object(he.e)(e => Object(Tn.e)(e, {
						pageLayer: r
					})),
					H = Object(he.e)(qa.j),
					q = Object(he.e)(e => Object(Or.B)(e, {
						subredditName: _ ? _.title.replace("r/", "") : ""
					})),
					{
						isActive: W,
						isBucketed: V
					} = Object(he.e)(Ga.a),
					{
						experimentState: Q,
						isActive: z,
						isBucketed: K
					} = Object(he.e)(za),
					J = Object(he.e)(e => Object(Wa.a)(e, Pa.d.dropdown).slice(0, Ma.d)),
					X = Object(he.e)(qa.y),
					Z = Object(he.e)(v.kb),
					Y = Object(Ca.a)(B) || null,
					$ = Object(Ca.a)(G) || null,
					ee = Object(Ca.a)(_),
					te = Object(Ca.a)(o),
					ne = Object(Ca.a)(X),
					se = Object(Ca.a)(J),
					re = ((null === (n = N.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					oe = Ne(re),
					ae = I ? Object(ln.v)(I) : r ? Object(ln.v)(r) : void 0,
					ie = O[re],
					le = Object(ya.e)({
						...va()(a || {}, Aa.t),
						q: re
					});
				Object(u.useEffect)(() => {
					de()
				}, [se, ne, X, J]), Object(u.useEffect)(() => {
					Y !== B ? pe({
						type: S.dc.Subreddit,
						enabled: !!B,
						payload: B
					}) : $ !== G ? pe({
						enabled: !!G,
						type: S.dc.Multireddit,
						payload: G
					}) : _ !== ee && pe({
						enabled: !!_,
						type: S.dc.SyntaxScoped,
						payload: _
					})
				}, [_, G, B, ee, $, Y]), Object(u.useEffect)(() => {
					H.enabled && H.type === S.dc.SyntaxScoped && q && pe({
						enabled: !0,
						type: S.dc.Subreddit,
						payload: q
					})
				}, [q, H]), Object(u.useEffect)(() => {
					ga()(X) || o ? ye(o || "") : Oe()
				}, [te, o]);
				const de = () => {
						const e = Object(La.a)(ne, X),
							t = Object(La.a)(se, J);
						if (!e || !t) {
							const e = X.length ? X : [...y, ...J];
							h(e)
						}
					},
					ue = e => M(Object(xa.q)({
						searchQuery: e
					})),
					me = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && Qa.a.clear(ka.a.Typeahead), M(Object(xa.l)())
					},
					pe = e => M(Object(xa.o)(e)),
					be = (e, t, n) => {
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
					ge = async () => {
						J.length || g || (f(!0), await (() => M(Object(wa.b)(Pa.d.dropdown)))(), f(!1))
					}, fe = e => {
						D && T && x(Object(Pn.Qb)({
							...e,
							section: Pa.c.recent
						}, T.id))
					}, ve = (e, t) => {
						var n;
						if (!N.current || !z || H.enabled) return !1;
						const s = t.split(" ").filter(t => t !== e).join(" ");
						return N.current.value = s, null === (n = N.current) || void 0 === n || n.dispatchEvent(new Event("input", {
							bubbles: !0
						})), P({
							title: e,
							key: `syntax-${e}`
						}), !0
					}, Oe = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						d(-1), j(null), ye(""), ue(""), e && Qa.a.update(ka.a.Typeahead), Pe()
					};

				function ye(e) {
					N.current && (N.current.value = e)
				}
				const xe = (e, t, n, s, r) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: re
						};
						w(Object(Ua.z)(s, o, r))
					},
					Ee = (e, t, n) => {
						w(Object(Ua.B)(e, t, n))
					},
					je = (e, t, n, s, r) => {
						w(Object(Ua.D)(e, t, n, s, r))
					},
					_e = () => {
						w(e => Object(Ua.h)(e, le, B)), (() => M(Object(xa.k)()))(), Qa.a.update(ka.a.Typeahead)
					},
					Se = e => {
						const t = b[e] || null,
							n = t ? t.searchQuery : "";
						d(e), ye(n), j(t)
					},
					Pe = () => {
						if (J.length || ge(), T) {
							const e = Object(Pn.N)(T.id);
							e.length > 0 && (x(D ? e : []), h([...e, ...J]))
						}
					},
					ke = e => {
						!(!L || !L[e]) || (e ? (e => {
							O[e] || (O[e] = !0, C({
								...O
							}), M(Na(e)), O[e] = !1, C({
								...O
							}))
						})(e) : Pe())
					};

				function Ne(e) {
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
						id: Object(Oa.a)(),
						searchQuery: e,
						type: Pa.b.text,
						section: Pa.c.recent,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(Ce.a)(Xa.a.relativeWrapper, br.a.container, t, {
						"m-open": R
					}),
					id: Ma.b,
					ref: k
				}, m.a.createElement(ui, {
					inputRef: N,
					isOpen: R,
					onChange: e => {
						const t = e.trim(),
							n = mi.exec(e);
						Qa.a.update(ka.a.Typeahead), K && n && (Object(Va.d)(Q, {
							experimentName: An.Df
						}), ve(n[0].trim(), t)) || (ue(t), ke(t))
					},
					searchQuery: re,
					onFormSubmit: e => {
						e.preventDefault(), re.trim() && (async e => {
							var t, n, s;
							const o = (null === (t = N.current) || void 0 === t ? void 0 : t.value) || "";
							if (!o.trim()) return;
							o !== re && ue(o);
							let a, c = {
									...Pa.a
								},
								d = {},
								u = !0;
							if (E && E.searchQuery === re ? ((c = E).id || (c.id = Object(Oa.a)()), c.section === Pa.c.recent ? (d = Object(Ta.c)(Ta.a.SEARCH_DROPDOWN, ae, c.isProfile || c.isSubreddit), a = ya.a.Recent, Ee(o, c, l)) : c.section === Pa.c.typeahead ? (d = Object(Ta.c)(Ta.a.TYPEAHEAD, ae), u = !1, je(o, c, l, l, b.filter(e => e.isSubreddit))) : c.section === Pa.c.trending ? (d = Object(Ta.c)(Ta.a.TYPEAHEAD, ae), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? ya.a.PromotedTrend : ya.a.Trending, M((e, t) => Object(Da.u)({
									state: t(),
									trendingSearch: c,
									telemetrySource: ka.a.Typeahead
								}))) : xe(o, o, ln.c.Search, Ua.a.RECENT)) : (c = Ne(o), w(Object(Ua.p)(ln.a.FullSearchButton, Object(ya.e)({
									q: re
								}), ka.a.Typeahead, r || void 0))), fe(c), me(u), !c.searchQuery) return;
							let m = {
								source: a
							};
							V && le.type.length && (Object(Va.d)(Q, {
								experimentName: An.Hc
							}), W && (m = {
								...le,
								source: a
							}));
							const p = Object(Ra.a)({
								searchItem: c,
								searchOptions: m,
								activeSearchScope: H,
								includeNsfwResults: Z && i
							});
							be(e, p, d), c.isTypeaheadSuggestion && Oe(u), null === (s = N.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(Ko.c)(Ko.a.SearchResults) || Object(Ko.d)(Ko.a.SearchResults), Qa.a.update(ka.a.Typeahead), w(Object(Ua.p)(ln.a.SearchBar, le, ka.a.Typeahead, r || void 0)), R || ((() => M(Object(xa.m)()))(), w(Object(Fa.u)(le, null != r ? r : void 0, Object(Ha.b)({
							pageLayer: r
						})))), ke(re)
					},
					onKeyDown: e => {
						if (e.key === zo.b.Escape || e.key === zo.b.Tab) me();
						else if (e.key === zo.b.ArrowDown) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (l >= b.length - 1) return;
							Se(l + 1)
						} else if (e.key === zo.b.ArrowUp) {
							if (e.preventDefault(), 0 === b.length || !R) return;
							if (-1 === l) return;
							Se(l - 1)
						} else e.key === zo.b.Backspace && !re && H.enabled && _e()
					},
					onClearSearchQuery: Oe,
					onClickDismissCommunityPill: _e,
					showCommunityPill: H.enabled,
					communityPill: function() {
						var e;
						if (H.enabled) switch (H.type) {
							case S.dc.Subreddit:
								const t = H.payload;
								return {
									icon: null === (e = t.icon) || void 0 === e ? void 0 : e.url, title: t.displayText, key: `${t.id}-${t.name}`
								};
							case S.dc.Multireddit:
								const n = H.payload;
								return {
									icon: n.icon, title: n.displayText, key: `${n.ownerId}-${n.displayText}`
								};
							case S.dc.SyntaxScoped:
								return H.payload;
							default:
								return
						}
					}()
				}), m.a.createElement(Ma.c, {
					containerWidth: null === (s = k.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: l,
					searchOriginPage: ae,
					isOpen: R,
					isTrendingPending: g,
					isTypeaheadPending: ie,
					itemList: b,
					nightmode: F,
					recentSearches: y,
					trendingItems: J,
					searchItem: oe,
					typeaheadSuggestions: X,
					onClearSearchQuery: Oe,
					onClose: me,
					onRemoveRecentSearch: e => {
						T && 0 !== y.length && (Object(Pn.cb)(e, T.id), x(y.filter(t => t.searchQuery !== e.searchQuery)), d(-1))
					},
					onSendSearchClickRecentEvent: Ee,
					onSendSearchClickTypeaheadEvent: je,
					onSetRecentSearch: fe,
					onUpdateSearchQuery: ye,
					fireAdPixelsOfType: (e, t) => M(Object(ce.z)(e, t))
				}))
			}
			var bi = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				hi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				gi = n("./src/reddit/selectors/responsivePage.ts"),
				fi = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				vi = n.n(fi);
			var Oi, Ci = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(Ce.a)(vi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: vi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(bi.a, {
						className: vi.a.Snoo
					}), m.a.createElement(hi.a, {
						className: vi.a.Wordmark,
						color: "inherit"
					})))
				},
				yi = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				xi = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ei = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				ji = n("./src/reddit/hooks/useTracking.ts"),
				_i = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Si = n.n(_i),
				Pi = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				ki = n.n(Pi);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(Oi || (Oi = {}));
			var Ni = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: r
					} = e, o = Object(ji.a)(), a = Object(Ei.a)(), [i, c] = Object(u.useState)(Oi.Hidden), l = Object(u.useCallback)(() => {
						Object(Pn.Kb)({
							clicked: !0
						}), o(e => ({
							...Object(ln.o)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [o, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Pn.H)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Pn.Kb)({
							views: e.views + 1
						}), c(Oi.Visible)) : e.clicked && c(Oi.Visible) : c(Oi.Hidden) : (Object(Pn.Kb)({
							views: 1
						}), c(Oi.Visible))
					}, []), i === Oi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: `${Si.a.icon} ${ki.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: ki.a.navIcon,
						src: n
					})), m.a.createElement(xi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, r))
				},
				wi = n("./src/lib/constants/colors.ts"),
				Mi = n("./src/reddit/actions/happeningNow/index.ts"),
				Ii = n("./src/lib/initializeClient/installReducer.ts"),
				Ai = (n("./src/lib/isDefined.ts"), n("./src/reddit/reducers/features/happeningNow/index.ts"));
			Object(Ii.a)({
				features: {
					happeningNow: Ai.a
				}
			});
			const Ti = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.isLiveContentAvailable)
				},
				Ri = Object(X.a)(Ti, e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.showLiveContentAvailabilityTooltip)
				}, (e, t) => e && t);
			var Li = () => {
					const e = Object(he.d)(),
						t = Object(he.e)(Ti),
						n = Object(he.e)(Ri),
						r = Object(u.useCallback)(() => e(Object(Mi.a)()), [e]),
						o = Object(Ei.a)(),
						a = Object(u.useMemo)(() => n ? ((e, t) => {
							let {
								onClick: n
							} = t;
							return {
								...e,
								arrowProps: {
									...e.arrowProps,
									style: {
										...e.arrowProps.style,
										borderBottom: `3px solid ${wi.a.alien600}`
									}
								},
								popperProps: {
									...e.popperProps,
									style: {
										...e.popperProps.style,
										background: wi.a.alien600,
										padding: "8px",
										cursor: "pointer"
									},
									onClick: n
								},
								visible: !0
							}
						})(o, {
							onClick: r
						}) : o, [o, n, r]),
						i = Object(u.useCallback)(() => {
							r()
						}, [r]);
					return Object(u.useEffect)(() => {
						e(Object(Mi.b)())
					}, [e]), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: Object(Ce.a)(Si.a.icon, Si.a.happeningNowLink),
						innerRef: a.target.ref,
						to: Ir.c[Ir.b.HappeningNow],
						onClick: i,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement(mr, {
						className: Si.a.customIcon
					}), t && m.a.createElement("div", {
						className: Si.a.liveContentAvailabilityBadge
					})), m.a.createElement(xi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, n ? s.fbt._("Find live chats, talks, and video streams happening now", null, {
						hk: "HZRQf"
					}) : s.fbt._("Happening Now", null, {
						hk: "qEee0"
					})))
				},
				Di = n("./src/reddit/actions/cooldownTime.ts");

			function Fi(e) {
				return `${e}`.padStart(2, "0")
			}
			class Ui {
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
			var Bi = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Gi = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Hi = n.n(Gi);
			const qi = Object(X.c)({
				isEmbedSubredditPage: Bi.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: En.b
			});
			class Wi extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Fi(n)}` : `${n}:${Fi(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Ui(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(Sr.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Hi.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Vi = Object(he.b)(qi, e => ({
					fetchCooldownTimer: () => e(Object(Di.e)())
				}))(Wi),
				Qi = n("./src/reddit/helpers/trackers/hotPotato.ts");
			var zi = e => m.a.createElement("svg", {
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
			var Ki = e => m.a.createElement("svg", {
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
				Ji = n("./src/reddit/selectors/avatarMarketing.ts"),
				Xi = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Ii.a)({
				features: {
					avatar: Xi.a
				}
			});
			const Zi = e => 864e5 * e,
				Yi = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				$i = e => {
					if (ec(e)) return !0;
					const t = Yi(e),
						n = (new Date).getTime(),
						s = Object(Pn.y)();
					if (!(null == t ? void 0 : t.active) || !tc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + Zi(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				ec = e => {
					const t = Object(En.q)(e);
					return Boolean((null == t ? void 0 : t[Aa.v]) && Object(R.a)(t[Aa.v]))
				},
				tc = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(v.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return nc(e, t) && n === r
				},
				nc = (e, t) => {
					const n = Object(v.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Zi(t)
				};
			var sc = n("./src/reddit/selectors/experiments/d2xTopNavRevamp.ts");
			const rc = e => {
					return Object(Va.c)(e, {
						experimentEligibilitySelector: Va.a,
						experimentName: An.Fb
					}) === An.Od
				},
				oc = e => {
					return Object(Va.c)(e, {
						experimentEligibilitySelector: Va.a,
						experimentName: An.if
					}) === An.Od
				};
			var ac = m.a.memo((function(e) {
					const t = Object(ji.a)(),
						n = Object(he.d)(),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ln.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ln.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Ar.a)(Ir.c[Ir.b.Rpan])), t(e => ({
								...Object(ln.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Qi.a)())
						}, [t]),
						c = Object(he.e)(v.Q),
						l = Object(he.e)(rc),
						d = Object(he.e)(vr.a),
						p = Object(he.e)(oc),
						b = Object(he.e)(Bi.a),
						h = Object(he.e)(Bi.b),
						g = Object(he.e)(sc.a),
						f = Object(he.e)(Dr.c),
						O = Object(he.e)($i),
						C = Object(he.e)(Dr.d),
						y = Object(he.e)(Fr.a),
						x = Object(he.e)(Ji.a),
						E = Object(Ei.a)(),
						j = Object(Ei.a)(),
						_ = Object(Ei.a)(),
						S = Object(Ei.a)(),
						P = Object(Ei.a)(),
						k = Object(Ei.a)(),
						N = f && O,
						w = C && !!x,
						M = g === An.cd.RepositionCoinNoLiveNoAll,
						I = M && (!(N || w) || e.isAvatarButtonClicked);
					return m.a.createElement("div", {
						className: Object(Ce.a)(Si.a.container, e.className, {
							[Si.a.containerWithoutCoin]: !I && M
						})
					}, m.a.createElement("div", {
						className: Si.a.row
					}, m.a.createElement(Ys.a, {
						className: Si.a.icon,
						innerRef: E.target.ref,
						to: c ? Ir.c[Ir.b.Popular] : Ir.c[Ir.b.Home],
						onClick: r,
						onMouseEnter: E.show,
						onMouseLeave: E.hide
					}, m.a.createElement(tr.a, {
						name: "popular"
					})), m.a.createElement(xi.a, {
						arrowProps: E.arrowProps,
						popperProps: E.popperProps,
						visible: E.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), I && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						ref: k.target.ref,
						onMouseEnter: k.show,
						onMouseLeave: k.hide,
						className: Si.a.icon
					}, m.a.createElement(yi.a, null)), m.a.createElement(xi.a, {
						arrowProps: k.arrowProps,
						popperProps: k.popperProps,
						visible: k.visible
					}, s.fbt._("Coin", null, {
						hk: "zOcNq"
					}))), !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: Si.a.icon,
						innerRef: j.target.ref,
						to: Ir.c[Ir.b.All],
						onClick: o,
						onMouseEnter: j.show,
						onMouseLeave: j.hide
					}, m.a.createElement(tr.a, {
						name: "all"
					})), m.a.createElement(xi.a, {
						arrowProps: j.arrowProps,
						popperProps: j.popperProps,
						visible: j.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), y ? m.a.createElement(Li, null) : d && !M && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: Si.a.icon,
						innerRef: _.target.ref,
						to: Ir.c[Ir.b.Rpan],
						onClick: a,
						onMouseEnter: _.show,
						onMouseLeave: _.hide
					}, m.a.createElement(tr.a, {
						name: "video_live"
					})), m.a.createElement(xi.a, {
						arrowProps: _.arrowProps,
						popperProps: _.popperProps,
						visible: _.visible
					}, s.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), p && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: Si.a.icon,
						innerRef: S.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: S.show,
						onMouseLeave: S.hide
					}, m.a.createElement(Ki, {
						className: Si.a.psBattlesIcon
					})), m.a.createElement(xi.a, {
						arrowProps: S.arrowProps,
						popperProps: S.popperProps,
						visible: S.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ys.a, {
						className: Object(Ce.a)(Si.a.icon, Si.a.hotPotatoLink),
						innerRef: P.target.ref,
						to: `/r/${h}`,
						onMouseEnter: P.show,
						onMouseLeave: P.hide,
						onClick: i
					}, m.a.createElement(zi, {
						className: Si.a.hotPotatoIcon
					}), m.a.createElement(Vi, null)), m.a.createElement(xi.a, {
						arrowProps: P.arrowProps,
						popperProps: P.popperProps,
						visible: P.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), l && m.a.createElement(Ni, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				ic = n("./src/reddit/actions/tooltip.ts"),
				cc = n("./src/lib/combineRefs/index.tsx"),
				lc = n("./src/lib/hooks/useOnClickOutside.ts"),
				dc = n("./src/lib/hooks/useTooltip.ts"),
				uc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				mc = n.n(uc);

			function pc() {
				return (pc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const bc = Ue.a.button("Button", mc.a),
				hc = Ue.a.div("Container", mc.a);

			function gc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(bc, pc({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(hc, {
					className: Object(Ce.a)({
						[mc.a.isOpen]: n
					})
				}, t))
			}
			var fc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				vc = n.n(fc);
			var Oc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Sr.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(tr.a, {
					name: "notification",
					className: vc.a.icon2020
				})),
				Cc = n("./src/reddit/components/InboxBanner/index.m.less"),
				yc = n.n(Cc);
			var xc = Object(Ft.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(N.b)(navigator.userAgent);
					return m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, {
						className: yc.a.modalHeader
					}, m.a.createElement(Bt.q, {
						className: yc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(tn.t, {
						onClick: t,
						Icon: Object(tr.b)("close_fill"),
						size: tn.d.XXS,
						priority: tn.c.Plain,
						className: yc.a.modalCloseIcon
					})), m.a.createElement(Bt.l, null, m.a.createElement("ul", {
						className: yc.a.modalList
					}, m.a.createElement("li", {
						className: yc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(tr.a, {
						name: "lock_fill",
						className: yc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: yc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(tr.a, {
						name: "settings_fill",
						className: yc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: yc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(tr.a, {
						name: "notification_fill",
						className: yc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Bt.g, null, m.a.createElement(tn.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Ec = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				jc = n.n(Ec);

			function _c() {
				return (_c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Sc = m.a.memo((function(e) {
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
					}, [t]), t ? m.a.createElement("div", _c({
						id: "INBOX--TOOLTIP",
						className: Object(Ce.a)(jc.a.tooltip, {
							[jc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Pc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				kc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Nc = n("./node_modules/icepick/icepick.js");
			const wc = Object(Nc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Mc = n("./src/reddit/selectors/activeModal.ts"),
				Ic = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Ac = n.n(Ic);
			const Tc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Rc = m.a.memo((function(e) {
					const t = Object(he.d)(),
						n = Object(Ei.a)(),
						r = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(dc.a)(e);
								return Object(Nc.updateIn)(t, ["modifiers"], e => Object(Nc.push)(e, wc))
							}, [e]);
							return Object(dc.b)(t)
						}(),
						o = Object(dc.b)(Tc),
						[a, i] = Object(kc.a)(e.userId),
						c = Object(he.e)(Object(Mc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							r.hide(), n.hide(), a || i()
						}, [r, n, i, a]);
					Object(lc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(cc.a)(n.target.ref, r.target.ref, o.target.ref)
					}, m.a.createElement(gc, {
						"aria-expanded": r.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Ac.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), r.visible ? l() : r.show(), e.sendNavClickInbox()
						},
						isOpen: r.visible
					}, m.a.createElement(Oc, {
						unreadCount: e.unreadCount
					})), !r.visible && !o.visible && m.a.createElement(xi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Sc, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, m.a.createElement(Pc.a, {
						isOpen: r.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(xc, {
						onClose: () => {
							t(Object(wt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Lc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Dc = n("./src/reddit/actions/snoovatarModal.ts"),
				Fc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Uc = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Bc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Gc = n.n(Bc);
			const {
				fbt: Hc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function qc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Pn.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Pn.kb)(s)
				}
			}
			var Wc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(he.e)(Yi),
						s = Object(he.d)(),
						r = Object(ji.a)();
					Object(u.useEffect)(() => {
						r(Object(Fc.p)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Lc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						qc(n)
					}, [n]);
					return m.a.createElement(tn.k, {
						onClick: () => {
							r(Object(Fc.d)()), qc(n, "click"), s(Object(Dc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Gc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Gc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Hc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Gc.a.sparkle, Gc.a.sparkle1)
					}), m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Gc.a.sparkle, Gc.a.sparkle2)
					}), m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Gc.a.sparkle, Gc.a.sparkle3)
					})), Hc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Vc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Qc = n.n(Vc);
			const {
				fbt: zc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Kc = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(he.d)(),
						s = Object(ji.a)(),
						r = Object(he.e)(Ji.b),
						o = Object(he.e)(sc.a) === An.cd.RepositionCoinNoLiveNoAll;
					Object(u.useEffect)(() => {
						r || n(Object(Lc.a)())
					}, [r, n]);
					return m.a.createElement(tn.a, {
						onClick: () => {
							n(Object(Dc.b)({
								clickSource: "nav"
							})), s(Fc.c), t && t()
						},
						className: Object(Ce.a)(Qc.a.ctaContainer, {
							[Qc.a.adsExperiment]: o
						})
					}, m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Qc.a.sparkle, Qc.a.sparkle1)
					}), m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Qc.a.sparkle, Qc.a.sparkle2)
					}), m.a.createElement(Uc.a, {
						className: Object(Ce.a)(Qc.a.sparkle, Qc.a.sparkle3)
					}), zc._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				Jc = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Xc = n("./src/reddit/actions/changeUsername.ts"),
				Zc = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Yc = n("./src/reddit/actions/postCreation/general.ts"),
				$c = n("./src/reddit/actions/preferences.ts"),
				el = n("./src/reddit/components/BlockNavigation/index.tsx"),
				tl = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				nl = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var sl = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				rl = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ol = n("./src/reddit/components/Settings/modalIds.ts"),
				al = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				il = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				cl = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ll = n("./src/reddit/selectors/emailCollection.ts"),
				dl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				ul = n.n(dl);
			var ml = Object(rl.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: r,
						toggleChangeEmailModal: o
					} = e;
					const a = Object(Ge.b)(),
						i = Object(he.d)(),
						c = Object(he.e)(ll.a);
					Object(u.useEffect)(() => {
						a(c ? Object(al.f)(il.a) : Object(il.g)(il.a))
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
						className: ul.a.container
					}, m.a.createElement("div", {
						className: ul.a.topLine
					}), m.a.createElement("button", {
						className: ul.a.closeWrapper,
						onClick: () => {
							a(c ? Object(al.e)(il.a) : Object(il.c)(il.a)), t()
						}
					}, m.a.createElement(cl.a, {
						className: ul.a.closeIcon
					})), m.a.createElement("h5", {
						className: ul.a.title
					}, d), m.a.createElement("p", {
						className: ul.a.subtitle
					}, n), m.a.createElement("p", {
						className: ul.a.description
					}, l), m.a.createElement("div", {
						className: ul.a.buttonWrapper
					}, c ? m.a.createElement(tn.t, {
						onClick: () => {
							i(Object(wt.h)(ol.g)), a(Object(al.a)(il.a))
						},
						priority: tn.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(tn.t, {
						priority: tn.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(il.e)(il.a, "update")), o()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(tn.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(il.e)(il.a, "confirm")), r(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [xo.a.Click, xo.a.Keydown, xo.a.Resize]),
				pl = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				bl = n.n(pl);
			const hl = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Be.a, {
					className: bl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: He.c.GoogleOneTap
				})
			};
			var gl = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				fl = n.n(gl);
			const {
				fbt: vl
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ol = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: fl.a.container
					}, m.a.createElement("p", {
						className: fl.a.title
					}, vl._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: fl.a.subtitle
					}, vl._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: fl.a.description
					}, vl._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(tn.o, {
						className: fl.a.dismissBtn,
						onClick: t
					}, vl._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				Cl = n("./node_modules/lodash/noop.js"),
				yl = n.n(Cl),
				xl = n("./src/lib/prettyPrintNumber/index.ts"),
				El = n("./src/realtime/GQLSubscription/async.tsx"),
				jl = n("./src/reddit/actions/alpha.ts"),
				_l = n("./src/reddit/actions/modMode.ts"),
				Sl = n("./src/reddit/actions/profile/index.ts"),
				Pl = n("./src/reddit/constants/elementClassNames.ts"),
				kl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Nl = n("./src/reddit/helpers/karma.ts"),
				wl = n("./src/reddit/hooks/useWindowEvent.ts"),
				Ml = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Il = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Al = n("./src/reddit/layout/row/InlineButton/index.tsx");
			const Tl = e => Object(Va.c)(e, {
				experimentName: An.dg,
				experimentEligibilitySelector: Va.a
			}) === An.Od;
			var Rl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Ll = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Dl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Fl = n("./src/reddit/selectors/seo/index.ts"),
				Ul = n("./src/reddit/selectors/tooltip.ts"),
				Bl = n("./src/higherOrderComponents/asTooltip.tsx"),
				Gl = n("./src/lib/constants/icons.ts"),
				Hl = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				ql = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Wl = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Vl = n.n(Wl);
			const Ql = (e, t) => e && m.a.createElement("div", {
				className: Vl.a.marketingBadge
			}, m.a.createElement(Hl.a, {
				className: Vl.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Uc.a, {
				className: Object(Ce.a)(Vl.a.sparkle, Vl.a.sparkle1)
			}), m.a.createElement(Uc.a, {
				className: Object(Ce.a)(Vl.a.sparkle, Vl.a.sparkle2)
			}), m.a.createElement(Uc.a, {
				className: Object(Ce.a)(Vl.a.sparkle, Vl.a.sparkle3)
			}), m.a.createElement(Uc.a, {
				className: Object(Ce.a)(Vl.a.sparkle, Vl.a.sparkle4)
			})));
			var zl = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var r;
					const o = Object(he.d)(),
						a = Object(ji.a)(),
						i = Object(Tn.eb)(),
						c = Object(he.e)(e => e.user.account),
						l = Object(he.e)(rr.d),
						d = Object(he.e)(Ji.b),
						u = Object(he.e)(Ji.a),
						p = () => o(Object(Dc.b)({
							clickSource: "nav"
						})),
						b = Object(he.e)(Y.j).startsWith("en");
					if ((null === (r = null == i ? void 0 : i.meta) || void 0 === r ? void 0 : r.name) === S.Sb.AVATAR) return null;
					d || o(Object(Lc.a)()), u && a(Fc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(Fc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && Ql(u, l));
						return m.a.createElement(Do, {
							onClick: g,
							title: e,
							titleClassName: Vl.a.avatarLinkBody
						})
					}
					const f = Object(ql.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? Dd("avatar_style") : Dd("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${Vl.a.avatarLinkBody} ${r.className}`
					}, e, s && Ql(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				Kl = n("./src/reddit/helpers/trackers/user.ts");
			var Jl = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(Ce.a)(No.a.heading, Mo.a.category)
					}, m.a.createElement("span", {
						className: No.a.headingContent
					}, m.a.createElement("span", {
						className: No.a.iconContainer
					}, s), m.a.createElement("span", {
						className: No.a.title
					}, t))), m.a.createElement("div", {
						className: No.a.contentContainer
					}, n))
				},
				Xl = n("./src/reddit/helpers/trackers/modTools.ts");
			const Zl = () => {
					const e = Object(he.d)(),
						t = Object(ji.a)(),
						n = Object(he.e)(v.db);
					return m.a.createElement(Bo, {
						isEnabled: n,
						onClick: () => {
							t(Object(Kl.f)(n)), (t => e(Object($c.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Yl = () => {
					const e = Object(he.d)(),
						t = Object(ji.a)(),
						n = Object(he.e)(e => e.user.account),
						r = Object(he.e)(Dl.a);
					return n && n.isMod ? m.a.createElement(Bo, {
						isEnabled: r,
						onClick: () => {
							t(Object(Xl.k)(!r)), (() => e(Object(_l.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var $l = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				ed = n.n($l);
			const td = () => {
					const e = Object(he.d)(),
						t = Object(Ge.b)(),
						n = Object(he.e)(v.k),
						r = Object(he.e)(v.V);
					return n ? m.a.createElement(Jl, {
						icon: m.a.createElement(tr.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Bo, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: r,
						onClick: () => {
							t(Object(Kl.g)(!r)), (t => e(Object($c.I)({
								showPresence: t
							})))(!r)
						}
					}), m.a.createElement(Fo, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Ho.c)("profile"))
					}), m.a.createElement(zl, {
						onClick: () => e(Object(ic.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Fo, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Ho.c)("settings"))
					})) : null
				},
				nd = () => {
					return Object(he.e)(v.k) ? m.a.createElement(Jl, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(tr.a, {
							name: "views"
						})
					}, m.a.createElement(Yl, null), m.a.createElement(Zl, null)) : null
				},
				sd = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(he.e)(v.k) ? null : m.a.createElement(Ao, {
						icon: m.a.createElement(tr.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Zl, null))
				},
				rd = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r,
						useClassicUserMenuStyles: o = !1
					} = e;
					return m.a.createElement(Ao, {
						buttonClassName: o ? ed.a.button : "",
						headingClassName: o ? ed.a.headingContent : "",
						icon: m.a.createElement(tr.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: o,
						onClick: (e, t) => {
							r(Object(Ho.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Fo, {
						className: o ? ed.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => r(Object(Ho.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Fo, {
						className: o ? ed.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => r(Object(Ho.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Fo, {
						className: o ? ed.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => r(Object(Ho.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Fo, {
						className: o ? ed.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => r(Object(Ho.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var od = n("./src/reddit/components/HiddenDiv.tsx"),
				ad = n("./src/reddit/controls/Dropdown/index.tsx"),
				id = n("./src/reddit/helpers/trackers/authControls.ts"),
				cd = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const ld = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: No.a.headingContent
					}, m.a.createElement("span", {
						className: No.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(Ce.a)(No.a.title, s)
					}, n))
				},
				dd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(Ce.a)(No.a.button, t),
						onClick: s
					}, m.a.createElement(ld, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				ud = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Po, {
						className: Object(Ce.a)(No.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(ld, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				},
				md = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var pd = e => [{
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
				url: md()
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
			var bd = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: r,
						onClick: o,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(Ao, {
						icon: m.a.createElement(tr.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: r,
						onClick: (e, t) => {
							a(Object(Ho.c)(t ? "more_chevron" : "more_menu")), "function" == typeof o && o(e)
						}
					}, pd(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: o,
							url: a
						} = e;
						return !n && m.a.createElement(Fo, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Ho.c)(s))
							},
							rel: r,
							title: o()
						})
					})(e, a)), n ? m.a.createElement(Fo, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Ho.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: ln.bb(e),
								subreddit: ln.jb(e)
							}))
						}
					}) : null)
				},
				hd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				gd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				fd = n.n(gd);
			var vd = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: r,
					showAll: o
				}, a] = Object(u.useState)({
					links: Object(hd.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: r,
							showAll: !1
						})
					}, [r, t]), 0 === r.length) return null;
				const i = o ? r : r.slice(0, 3),
					c = () => a({
						links: r,
						showAll: !o
					});
				return m.a.createElement(Ao, {
					"aria-hidden": !0,
					icon: m.a.createElement(tr.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Uo, {
						className: fd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : fd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: fd.a.title
					})
				}), r.length > 3 && (e => m.a.createElement("span", {
					className: No.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(Ce.a)(No.a.headingContent, fd.a.headingContent)
				}, m.a.createElement("span", {
					className: No.a.title
				}, e))))(o ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Od() {
				return (Od = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				yd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var xd;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(xd || (xd = {}));
			var Ed = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: r,
						isNsfwBlocking: o,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(xd.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(o)
					}, y = () => m.a.createElement(ud, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(Kl.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: Cd
					}, m.a.createElement(td, null), m.a.createElement(nd, null), m.a.createElement(() => d ? m.a.createElement(dd, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(cd.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(ud, {
						className: Mo.a.coinsLink,
						icon: m.a.createElement(tr.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Mo.a.meta
						}, yd(b))),
						onClick: () => {
							Object(Ko.d)(Ko.a.GoldPayment, !0), e.sendEvent(Object(Kl.d)())
						},
						titleClassName: Mo.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(ud, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Ko.d)(Ko.a.GoldPayment, !0), e.sendEvent(Object(Kl.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(ud, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "live"
						}),
						href: Lr.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(vd, v(xd.RecentCommunitiesMenu)), m.a.createElement(Qo, Od({}, v(xd.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(sd, v(xd.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(ud, {
						className: Mo.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(tr.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(bd, Od({}, v(xd.MoreMenu), {
						isCommunityLinkVisible: r,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(rd, Od({}, v(xd.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(dd, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(dd, {
						className: Mo.a.button,
						icon: m.a.createElement(tr.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: No.a.copyrightContainer
					}, m.a.createElement("span", {
						className: No.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				jd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				_d = n.n(jd);

			function Sd() {
				return (Sd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pd = Ue.a.wrapped(ad.a, "Dropdown", _d.a),
				kd = Object(Bl.a)(Pd),
				Nd = e => m.a.createElement(ql.a, {
					className: Object(Ce.a)(_d.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: _d.a.buttonText
				}, e.displayText), m.a.createElement(To.a, {
					className: _d.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				wd = e => t => m.a.createElement(tr.a, Sd({
					name: e
				}, t)),
				Md = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: r
					} = e;
					return m.a.createElement(Nd, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(Kl.f)(t)), r(!t)
						}
					}, m.a.createElement(tr.a, {
						name: "night",
						className: _d.a.nightIcon
					}))
				},
				Id = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(ql.b)(wd(Gl.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(Ho.c)("help_center"))
					})
				},
				Ad = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(ql.b)(wd(Gl.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(Kl.b)())
					})
				},
				Td = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: r
					} = e;
					const o = Object(ql.c)(wd(Gl.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(o, {
						href: "#",
						onClick: e => {
							Object(Ae.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), r(Object(id.b)()))
						}
					})
				};
			var Rd = Object(Ge.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: o,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(he.e)(nr.c), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					p(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					o()
				}, [c]), n ? m.a.createElement(od.a, null, m.a.createElement(Ed, e)) : l ? m.a.createElement(kd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Md, {
					nightmode: r,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(Id, {
					sendEvent: a
				}), m.a.createElement(rd, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Ad, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: _d.a.divider
				}), m.a.createElement(Td, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(kd, {
					className: _d.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Ed, e))
			});

			function Ld() {
				return (Ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Dd = e => t => m.a.createElement(tr.a, Ld({
					name: e
				}, t)),
				Fd = Object(he.b)(() => Object(X.c)({
					isCrawler: e => !!Object(Fl.a)(e),
					isModModeEnabled: Dl.a,
					isNsfwBlocking: e => {
						const t = Object(Z.d)(e),
							n = Object(Z.e)(e);
						return t || n
					},
					isOpen: Object(Ul.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Ll.d,
					shouldShowCreateCommunityItem: v.pb,
					navbarLikeMweb: Rl.a,
					nightmode: v.db,
					showPresence: v.V,
					url: En.u,
					isCommunityLinkVisible: Tl
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(ic.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object($c.z)(t)),
					toggleShowPresence: t => e(Object($c.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(jl.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(jl.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Sl.g)(Object(on.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(kl.b)(kl.a.Login)), e(Object(K.openLoginModal)())
					},
					toggleModMode: () => e(Object(_l.b)()),
					openCommunityCreationModal: () => e(Object(wt.h)(Gt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Ud = Object(Tn.u)({
					pageLayer: e => e
				})(Fd(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: r,
						user: o
					} = e, a = Object(he.e)(Ll.b), [i, c] = Object(u.useState)(!1), l = o && o.id;
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
					return Object(wl.a)("visibilitychange", p), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(Ce.a)(_d.a.container, Pl.e)
					}, r && i && a && m.a.createElement(El.a, {
						variables: d,
						onData: yl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Al.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(Ce.a)(e.className, _d.a.inlineButton, {
							[_d.a.dropdownOpen]: e.isOpen,
							[_d.a.isLoggedOut]: !o,
							[_d.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: _d.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(Ce.a)(_d.a.accountWrapper, _d.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(lr.a, {
						className: Object(Ce.a)(_d.a.imgIcon, {
							[_d.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: _d.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && r
					}), m.a.createElement("span", {
						className: _d.a.accountDetails
					}, m.a.createElement("span", {
						className: _d.a.username
					}, n.displayText, n.isGold && m.a.createElement(Il.a, {
						className: _d.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: _d.a.accountKarma
					}, m.a.createElement(tr.a, {
						name: "karma",
						isFilled: !0,
						className: _d.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Nl.a)(e),
							n = Object(xl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: _d.a.accountCoins
					}, m.a.createElement(Ml.a, {
						className: _d.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(xl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(Ce.a)(_d.a.accountWrapper, _d.a.isLoggedOut)
					}, m.a.createElement(tr.a, {
						name: "user",
						className: _d.a.defaultProfileIcon
					})))(e.user), m.a.createElement(tr.a, {
						className: _d.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(ba.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Rd, e))
				})),
				Bd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Gd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				Hd = n.n(Gd);
			const qd = Object(rl.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(Ce.a)(e.className, Hd.a.confirmContainer, Hd.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: Hd.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: Hd.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var Wd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				Vd = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Qd = n("./src/reddit/helpers/trackers/inbox.ts"),
				zd = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				Kd = n("./src/reddit/routes/acknowledgements/index.ts"),
				Jd = n("./src/reddit/routes/appeal/index.ts");
			var Xd = {
					action: () => async e => await e(Object(p.c)(Gr.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				Zd = n("./src/reddit/routes/coins/index.ts"),
				Yd = n("./src/reddit/routes/coinsMobile/index.ts"),
				$d = n("./src/reddit/routes/commentsPage/index.ts"),
				eu = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var tu = [],
				nu = n("./src/reddit/routes/econManagement/index.ts"),
				su = n("./src/reddit/routes/econManagement2/index.ts");
			var ru = {
					action: Object(M.a)(() => n.e(8).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				ou = n("./src/lib/addQueryParams/index.ts");
			var au = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(p.c)(Object(ou.a)("/", o)))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [S.u.COMMENTS_PAGE, S.u.FRONTPAGE]
				},
				iu = n("./src/reddit/routes/followers/index.ts"),
				cu = n("./src/reddit/routes/framedGild/index.ts"),
				lu = n("./src/reddit/routes/framedModal/index.ts"),
				du = n("./src/reddit/routes/frontpage/index.ts"),
				uu = n("./src/reddit/routes/geotagging/index.ts"),
				mu = n("./src/reddit/routes/happeningNow/index.ts"),
				pu = n("./src/reddit/routes/inbox/index.ts"),
				bu = n("./src/reddit/routes/meta/index.ts"),
				hu = n("./src/reddit/routes/moderationPages/index.ts"),
				gu = n("./src/reddit/routes/modQueue/index.ts"),
				fu = n("./src/reddit/routes/multireddit/index.ts"),
				vu = n("./src/reddit/routes/notificationsInbox/index.ts"),
				Ou = n("./src/reddit/routes/postCreation/constants.ts");
			const Cu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
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
			var yu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Ou.b))
					},
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Cu],
				xu = n("./src/reddit/routes/postCreation/index.ts"),
				Eu = n("./src/reddit/routes/postDraft/index.ts"),
				ju = n("./src/reddit/routes/postSetPage/index.ts");
			var _u = {
				action: () => async () => {
					window.location.replace("https://reddithelp.com/hc/articles/4403386953108")
				},
				chunk: S.u.EMPTY,
				exact: !0,
				meta: {
					name: S.Sb.POWERUPS_REDIRECT
				},
				path: ["/powerup", "/powerups"]
			};
			var Su = {
					action: () => async e => await e(Object(p.c)(Rr.a)),
					chunk: S.u.EMPTY,
					exact: !0,
					meta: {
						name: S.Sb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				Pu = n("./src/reddit/routes/premium/index.ts"),
				ku = n("./src/reddit/routes/profileComments/index.ts"),
				Nu = n("./src/reddit/endpoints/me/index.ts"),
				wu = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Mu = n("./src/server/helpers/profileRedirect.ts");
			var Iu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							path: a,
							queryParams: i
						} = e, c = await Object(Nu.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(wu.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(Mu.b)({
								path: a,
								profileName: l,
								queryParams: i,
								rest: o
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
				Au = n("./src/reddit/routes/profileModSettings/index.ts"),
				Tu = n("./src/reddit/routes/profileOverview/index.ts"),
				Ru = n("./src/reddit/routes/profilePosts/index.ts");
			var Lu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(Mu.b)({
							path: r,
							profileName: n,
							queryParams: o,
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
				Du = n("./src/reddit/routes/profilePrivate/index.ts");
			var Fu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(Mu.b)({
							path: r,
							profileName: n,
							queryParams: o,
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
				Uu = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				Bu = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Gu = n("./src/reddit/routes/report/index.ts"),
				Hu = n("./src/reddit/routes/searchResults/index.ts"),
				qu = n("./src/reddit/routes/settings/index.ts");
			var Wu = [{
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
				Vu = n("./src/reddit/routes/subreddit/index.ts"),
				Qu = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				zu = n("./src/reddit/routes/subredditWiki/index.ts"),
				Ku = n("./src/reddit/routes/topic/index.ts");
			var Ju = [Kd.a, Jd.a, Gr.b, Xd, Zd.a, Yd.a, eu.a, Iu, Fu, Lu, ...zd.a, ...$d.b, ru, ...du.a, uu.a, Pu.a, Rr.b, Lr.b, nu.c, su.a, _u, Su, iu.a, cu.a, lu.a, xu.a, Eu.a, ju.a, ...yu, au, ...bu.a, fu.a, gu.a, Tr.c, vu.a, pu.a, ku.a, Au.a, Tu.a, Ru.a, Uu.a, Du.a, Bu.a, ...qu.a, ...Wu, Hu.a, ...zu.a, Ku.a, Vu.b, Qu.a, hu.a, Gu.a, ...tu, mu.a],
				Xu = n("./src/reddit/selectors/appBadges.ts"),
				Zu = n("./src/reddit/selectors/emailVerification.ts"),
				Yu = n("./src/reddit/selectors/experiments/chat.ts"),
				$u = n("./src/reddit/selectors/sso.ts");
			var em = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: r
					} = e;
					const o = Object(Ei.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: vc.a.iconWrapper,
						onMouseEnter: () => {
							o.show()
						},
						onMouseLeave: o.hide,
						ref: o.target.ref
					}, m.a.createElement("a", {
						className: vc.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), r()
						}
					}, m.a.createElement(Sr.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(tr.a, {
						name: "chat",
						className: vc.a.icon2020
					}))), m.a.createElement(xi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				tm = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				nm = n("./src/reddit/constants/chat.ts"),
				sm = n("./src/reddit/selectors/chat.ts");
			var rm = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: r
				} = e;
				const o = Object(he.d)(),
					a = Object(he.e)(v.i),
					c = Object(he.e)(sm.a),
					l = Object(Ei.a)(),
					d = Object(u.useMemo)(() => c === nm.b.IS_SHOWING, [c]),
					p = Object(u.useMemo)(() => d ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${wi.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: wi.a.alien600
							}
						},
						visible: !0
					}))(l) : l, [l, d]),
					b = Object(u.useCallback)(() => {
						d && a && o(Object(tm.c)(nm.b.DISMISSED, a))
					}, [o, d, a]);
				return Object(u.useEffect)(() => {
					a && o(Object(tm.b)(a))
				}, [o, a]), Object(u.useEffect)(() => {
					if (!d) return;
					const e = setTimeout(b, 3e3);
					return () => clearTimeout(e)
				}, [b, d]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: vc.a.iconWrapper,
					onMouseEnter: () => {
						l.show()
					},
					onMouseLeave: l.hide,
					ref: l.target.ref
				}, m.a.createElement("a", {
					className: vc.a.link,
					href: `${i.a.redditUrl}/chat`,
					onClick: e => {
						e.preventDefault(), r(), b()
					}
				}, m.a.createElement(Sr.a, {
					isActive: t > 0 || n,
					unreadCount: t
				}), m.a.createElement(tr.a, {
					name: "chat",
					className: vc.a.icon2020
				}))), m.a.createElement(xi.a, {
					arrowProps: p.arrowProps,
					popperProps: p.popperProps,
					visible: p.visible
				}, d ? m.a.createElement("span", {
					className: vc.a.liveChatAnnouncementText,
					onClick: e => {
						e.preventDefault(), b()
					}
				}, s.fbt._("Live chats are here now", null, {
					hk: "10sA0h"
				})) : s.fbt._("Chat", null, {
					hk: "4nXRWH"
				})))
			}));
			var om = e => {
					return Object(he.e)(Yu.c) ? m.a.createElement(rm, e) : m.a.createElement(em, e)
				},
				am = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				im = n.n(am);
			var cm = Object(Ge.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const r = Object(he.e)(v.db),
						o = Object(Ei.a)(),
						a = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						i = Object(he.e)(sc.a) === An.cd.RepositionCoinNoLiveNoAll;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(Ce.a)(t, im.a.container, {
							[im.a.isNightMode]: r
						})
					}, m.a.createElement("a", {
						className: im.a.link,
						ref: o.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(Kl.c)())
						},
						onMouseEnter: o.show,
						onMouseLeave: o.hide,
						"aria-label": a
					}, m.a.createElement(tr.a, {
						className: im.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: im.a.text
					}, a))), !i && m.a.createElement(xi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, a))
				}),
				lm = n("./src/reddit/actions/matrixChat/index.ts"),
				dm = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				um = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const mm = () => {
					const e = Object(Ei.a)(),
						t = Object(he.d)(),
						n = Object(he.e)(um.c),
						r = Object(he.e)(um.b),
						o = Object(he.e)(um.a);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: vc.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref
					}, m.a.createElement("a", {
						className: vc.a.link,
						href: n,
						onClick: e => {
							const n = r !== dm.b.NORMAL ? dm.b.NORMAL : dm.b.CLOSED;
							e.preventDefault(), t(Object(lm.c)({
								state: n
							}))
						}
					}, o && o > 0 && m.a.createElement(Sr.a, {
						isActive: !0,
						unreadCount: o
					}), m.a.createElement(tr.a, {
						name: "chat_group",
						className: vc.a.icon2020
					}))), m.a.createElement(xi.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Matrix Chat", null, {
						hk: "1cv14m"
					})))
				},
				pm = "change-username-tooltip-id",
				bm = "email-verification-tooltip-id",
				hm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const r = Object(Ei.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: vc.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement(gc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Bd.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Sr.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(tr.a, {
						className: vc.a.icon2020,
						name: "mod"
					})), m.a.createElement(xi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Bd.b, {
						className: vc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				gm = m.a.memo((function(e) {
					const t = Object(Ei.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: vc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: vc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(tr.a, {
						className: vc.a.icon2020,
						name: "add"
					}))), m.a.createElement(xi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				fm = Object(Tn.u)({
					pageLayer: e => e
				}),
				vm = Object(X.c)({
					activeDropdownId: Ul.a,
					activeModalId: Mc.b,
					appBadges: Xu.b,
					chatDirectMessagesCount: Xu.e,
					email: v.n,
					hasUnreadChatMessages: Xu.f,
					inboxBadgeCount: Xu.g,
					isAvatarQuickCreateEnabled: e => Object(Dr.c)(e) && $i(e),
					isAvatarStorefrontEnabled: e => Object(Dr.d)(e) && !!Object(Ji.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: Zu.b,
					isLoggedIn: v.Q,
					isModerator: cn.k,
					isNameEditable: v.S,
					isOneTapSession: Y.g,
					isResponsiveSettingsEnabled: Dn.a,
					isChatMatrixClientEnabled: Yu.b,
					shouldOpenEmailVerificationTooltip: Zu.a,
					shouldShowChangeUsernameModals: $u.c,
					unreadNotifications: v.yb,
					usernameChangedModalOpen: Object(Mc.c)(ol.o),
					topNavigationVariant: sc.a
				}),
				Om = Object(he.b)(vm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Xc.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(Zc.b)()),
					showEmailVerificationTooltip: () => e(Object(Zc.b)()),
					fetchAppBadges: () => e(Object(Jc.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Vd.a)()), e(Object(be.p)())
					},
					onChatClick: () => e(Object(W.f)()),
					onDismissCustomizeFlyout: () => e(Object($c.u)()),
					onOpenModerationDropdown: () => {
						e(Object(ic.h)({
							tooltipId: Bd.a
						})), e(Object(jo.q)())
					},
					onOpenUserDropdown: () => e(Object(ic.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(wt.h)(ol.b))
					},
					openKeepUsernameModal: () => {
						e(Object(wt.h)(ol.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Zc.b)()), e(Object(wt.i)(ol.a))
					},
					resendEmail: () => e(Object(be.v)(il.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Yc.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(Xc.startChangeUsernameFlow)(n))
					}
				}));
			class Cm extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Qd.D)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Ho.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(Xo.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(I.a)(e.pathname, Ju),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== S.Sb.POST_CREATION && n !== S.Sb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.topNavigationVariant = this.props.topNavigationVariant, this.noAdvertiseVariant = this.topNavigationVariant === An.cd.NoAdvertise, this.repositionCoinNoLiveNoAllVariant = this.topNavigationVariant === An.cd.RepositionCoinNoLiveNoAll, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n,
							onAvatarButtonClick: s
						} = this.props, r = n && Object(on.e)(n) || "", o = () => {
							this.repositionCoinNoLiveNoAllVariant && (this.setState({
								showNavBarEconCta: !1
							}), s && s())
						};
						return e ? m.a.createElement(Wc, {
							avatarUrlParams: {
								avatarId: "random",
								username: r
							}
						}) : t ? m.a.createElement(Kc, {
							handleButtonClick: o
						}) : !this.repositionCoinNoLiveNoAllVariant && m.a.createElement(yi.a, null)
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), ga()(this.props.appBadges) && this.props.fetchAppBadges()
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
					} = this.props, M = !(!k || !k.hasUnreadModmail), I = N && Object(on.e)(N) || "", A = Object(Ce.a)({
						[vc.a["m-responsive"]]: f
					}), T = S && g;
					return m.a.createElement(sn.a, {
						id: bm,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(sn.a, {
						className: vc.a.headerLinks,
						id: pm
					}, b && m.a.createElement(hm, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Bd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(om, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), v && m.a.createElement(mm, null), m.a.createElement(Rc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == E ? void 0 : E.url,
						userId: N.id,
						isLoggedIn: p,
						iconWrapper: vc.a.iconWrapper
					}), m.a.createElement(gm, {
						onClickCreatePost: this.onClickCreatePost
					}), !this.noAdvertiseVariant && m.a.createElement(cm, {
						className: vc.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: vc.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(Ud, {
						className: vc.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: C,
						sendEventWithName: this.sendEventWithName,
						user: N
					}), p && m.a.createElement(hl, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(Ol, {
						onCloseFlyout: O
					}), m.a.createElement(ml, {
						closeTooltip: r,
						email: o,
						isOpen: _ && d,
						resendEmail: j,
						toggleChangeEmailModal: P,
						tooltipId: bm
					}), m.a.createElement(sl, {
						email: o,
						shouldOpenTooltip: _
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(nl.a, {
						closeTooltip: s,
						isOpen: c && !S,
						openChangeUsernameModal: y,
						openKeepUsernameModal: x,
						tooltipId: pm,
						username: I
					}), S && m.a.createElement(tl.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: A,
						username: I,
						withOverlay: !0
					}), m.a.createElement(el.a, {
						confirmNavigate: this.confirmNavigate
					})), T && !w && m.a.createElement(Wd.a, {
						className: vc.a.cornerModal,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(Ce.a)(A, vc.a.modalOverlay),
						username: I,
						withOverlay: !w
					}), T && w && m.a.createElement(qd, {
						className: vc.a.cornerModal,
						isOpen: !0,
						tooltipId: pm,
						username: I
					}))
				}
			}
			var ym = Object(Ge.c)(fm(Om(Cm))),
				xm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Em = n("./src/reddit/selectors/experiments/index.ts");
			const jm = e => Object(Va.c)(e, {
				experimentName: An.Mc,
				experimentEligibilitySelector: Em.f
			}) === An.wb.Enabled;
			var _m = n("./src/reddit/components/Header/User/index.m.less"),
				Sm = n.n(_m);
			const {
				fbt: Pm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), km = Object(X.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(Z.d)(e),
						n = Object(Z.e)(e);
					return t || n
				},
				origin: Y.k
			}), Nm = m.a.memo(e => m.a.createElement("div", {
				className: Object(Ce.a)(e.className, Sm.a.row)
			}, !e.account && m.a.createElement(wm, e), m.a.createElement(ym, {
				className: Object(Ce.a)({
					[Sm.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), wm = e => {
				const t = Object(he.e)(Xu.g),
					n = Object(he.e)(v.Fb),
					s = Object(he.e)(xm.c),
					r = Object(he.e)(jm),
					o = e.pageLayer,
					a = i.a.accountManagerOrigin,
					c = o ? o.url : "/",
					l = o && o.meta && o.meta.name === S.Sb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Rc, {
					sendNavClickInbox: () => e.sendEvent(Object(Qd.D)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Sm.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(Ce.a)(Sm.a.loggedOutRow, r ? Sm.a.swapAuthNavButtons : "")
				}, m.a.createElement(tn.t, {
					kind: tn.b.ExternalLink,
					priority: r ? tn.c.Primary : tn.c.Secondary,
					redditStyle: !0,
					className: Object(Ce.a)(r ? Sm.a.separator : "", Sm.a.button),
					href: `${a}/login/?dest=${l}`,
					onClick: t => {
						Object(Ae.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(id.a)("nav")))
					}
				}, Pm._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(tn.t, {
					kind: tn.b.ExternalLink,
					priority: r ? tn.c.Secondary : tn.c.Primary,
					redditStyle: !0,
					className: Object(Ce.a)(Sm.a.button, r ? "" : Sm.a.separator),
					href: `${a}/register/?dest=${l}`,
					onClick: t => {
						Object(Ae.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(id.c)("nav")))
					}
				}, Pm._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Mm = Object(Tn.u)()(Object(he.b)(km, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(kl.b)(kl.a.Login)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderLogin
						})), e(Object(K.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(kl.b)(kl.a.Signup)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderSignup
						})), e(Object(K.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(ic.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Ge.c)(Nm))),
				Im = n("./src/reddit/components/Header/index.m.less"),
				Am = n.n(Im);

			function Tm() {
				return (Tm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Rm = Ue.a.header("HeaderDynamicStyles", Am.a),
				Lm = Object(X.c)({
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: nr.c,
					isNightMode: v.db,
					isResponsiveSettingsEnabled: Dn.a,
					isPageResponsive: gi.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Dm = Object(Tn.u)({
					categoryName: Tn.c,
					pageLayer: e => e
				}),
				Fm = e => {
					const t = Object(u.useContext)(Pe.a);
					return m.a.createElement("div", {
						className: Am.a.left
					}, m.a.createElement(ba.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(pa.b, null), m.a.createElement(Ys.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Am.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(bi.a, {
						className: Object(Ce.a)(Am.a.snoo, {
							[Am.a.snooExp]: t
						})
					}), m.a.createElement(hi.a, {
						className: Am.a.wordmark
					})), e.children)
				},
				Um = e => m.a.createElement("div", {
					className: Am.a.right
				}, e.children, m.a.createElement(Mm, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				Bm = e => {
					const t = Object(u.useContext)(Pe.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(Ce.a)(Am.a.layout, {
							[Am.a.layoutContainer]: t
						})
					}, m.a.createElement(Fm, Tm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(ma, null), m.a.createElement(pi, {
						className: Am.a.search
					})), m.a.createElement(Um, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement(ac, {
						isAvatarButtonClicked: n,
						className: Am.a.quickLinks
					})))
				},
				Gm = e => {
					const t = Object(u.useContext)(Pe.a);
					return m.a.createElement("div", {
						className: Object(Ce.a)(Am.a.layout, {
							[Am.a.layoutContainer]: t
						})
					}, m.a.createElement(Fm, Tm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(ma, null), m.a.createElement("div", {
						className: Am.a.searchContainer
					}, m.a.createElement(pi, {
						className: Am.a.search
					}))), m.a.createElement(Um, null))
				};
			var Hm = Dm(Object(he.b)(Lm, e => ({
					onReloadFrontpage: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Pe.a);
					return t = e.isLoggedIn ? Bm : Gm, m.a.createElement(Rm, {
						"data-redditstyle": !0,
						className: Object(Ce.a)(Am.a.container, e.className, {
							[Am.a.bladeIsOpen]: e.isBladeOpen,
							[Am.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Ci, {
						className: Am.a.MwebResponsiveHeader
					}))
				}))),
				qm = n("./src/reddit/components/LightboxHeader/index.tsx");
			const Wm = Object(Mt.a)({
				getComponent: () => Object(ne.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Vm = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Qm = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const zm = () => e => ({
					...ln.o(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Km
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				Jm = Object(X.c)({
					isLoggedIn: v.Q,
					origin: Y.k
				});
			class Xm extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Ae.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(zm()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(tn.m, {
						className: e,
						href: Qm(He.a.Register, t),
						onClick: this.onClick
					}, Km._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var Zm = Object(he.b)(Jm, e => ({
					openRegisterModal: () => {
						e(Object(wt.k)({
							actionSource: wt.a.IdCard,
							redirectUrl: Ir.c[Ir.b.Home]
						})), e(Object(K.openRegisterModal)())
					}
				}))(Object(Ge.c)(Xm)),
				Ym = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				$m = n.n(Ym);
			const {
				fbt: ep
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var tp = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(lo, {
						className: $m.a.createTitle
					}, ep._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: $m.a.createDesc
					}, ep._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(Zm, {
						className: $m.a.createButton
					}))
				},
				np = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				sp = n.n(np);
			const {
				fbt: rp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), op = Object(X.c)({
				currentPage: yr,
				isLoggedOutOneFeed: nr.c
			}), ap = Object(he.b)(op, e => ({
				onUnpinSubscriptions: () => e(Object(Te.j)())
			})), ip = Object(Tn.u)();
			var cp = Ue.a.wrapped(ip(ap(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: sp.a.title
				}, m.a.createElement("div", {
					className: sp.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(tr.a, {
					name: "close",
					className: sp.a.icon
				}))), m.a.createElement(ia, {
					className: Object(Ce.a)({
						[sp.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage,
					isPinned: !0
				}), e.isLoggedOutOneFeed && m.a.createElement(tp, {
					className: sp.a.createAccountSection
				})))), "Component", sp.a),
				lp = n("./src/reddit/components/Survey/index.tsx"),
				dp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const up = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				mp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ln.d(t),
						reason: "primary"
					}
				}),
				pp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ln.d(t),
						reason: "secondary"
					}
				});
			var bp = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				hp = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				gp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				fp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				vp = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Op = n("./src/reddit/models/Toast/index.ts"),
				Cp = n("./src/reddit/selectors/structuredStyles.ts"),
				yp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				xp = n.n(yp);

			function Ep() {
				return (Ep = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const jp = e => {
				const t = Ro.a;
				switch (e.kind) {
					case Op.b.Error:
					case Op.b.AuthError:
					case Op.b.SuccessEndBroadcast:
						return t.warning;
					case Op.b.SuccessCommunity:
						return t.op;
					case Op.b.SuccessCommunityGreen:
					case Op.b.SuccessMod:
					case Op.b.SuccessUnlockComment:
						return t.approved;
					case Op.b.SuccessLockComment:
						return t.reported;
					case Op.b.EuCookiePolicy:
					case Op.b.UappBanner:
					case Op.b.Undo:
					default:
						return t.op
				}
			};
			class _p extends m.a.Component {
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
			const Sp = Ue.a.wrapped(_p, "PlainBread", xp.a);
			var Pp = e => m.a.createElement(Sp, Ep({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": jp(e)
					}
				})),
				kp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Np = n.n(kp);
			const wp = Ue.a.span("Text", Np.a);
			var Mp = n("./src/reddit/components/Toaster/index.m.less"),
				Ip = n.n(Mp);
			const {
				fbt: Ap
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Tp = Ue.a.wrapped(gp.a, "AuthErrorToastIcon", Ip.a), Rp = Ue.a.wrapped(tn.l, "AuthErrorToastPrimaryButton", Ip.a);
			class Lp extends m.a.Component {
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
					}, m.a.createElement(Pp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Tp, null), m.a.createElement(wp, null, Ap._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Rp, {
						type: "submit"
					}, Ap._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Dp = Lp,
				Fp = n("./src/lib/cookieConsent/index.ts"),
				Up = n("./src/reddit/controls/Link/index.tsx"),
				Bp = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Gp = n.n(Bp);
			const {
				fbt: Hp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qp = Ue.a.wrapped(tn.l, "PrimaryButton", Gp.a), Wp = Ue.a.wrapped(Pp, "Bread", Gp.a);
			class Vp extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Fp.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Fp.b)({
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
					return m.a.createElement("section", null, m.a.createElement(Wp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: Gp.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: Gp.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(wp, {
						className: Gp.a.EuCookiePolicyText
					}, Hp._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(wp, {
						className: Gp.a.EuCookiePolicyText
					}, Hp._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(wp, {
						className: Gp.a.EuCookiePolicyText
					}, Hp._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), Hp._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [Hp._param("=Cookie Notice", m.a.createElement(Up.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, Hp._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), Hp._param("=Privacy Policy", m.a.createElement(Up.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, Hp._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: Gp.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(qp, {
						type: "submit"
					}, Hp._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(qp, {
						type: "submit"
					}, Hp._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var Qp, zp = Vp;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Qp || (Qp = {}));
			var Kp = n("./src/reddit/controls/Typography/index.tsx"),
				Jp = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Xp = n.n(Jp);

			function Zp() {
				return (Zp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Yp = Ue.a.div("Container", Xp.a),
				$p = Ue.a.img("SideImage", Xp.a),
				eb = Ue.a.div("Main", Xp.a),
				tb = Ue.a.div("SubTitle", Xp.a),
				nb = Kp.a,
				sb = Ue.a.wrapped(tn.m, "PrimaryLinkButton", Xp.a),
				rb = Ue.a.wrapped(cl.a, "CloseIcon", Xp.a);
			class ob extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(mp(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(up(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: r,
						subTitle: o,
						title: a
					} = this.props;
					return m.a.createElement(Yp, {
						key: t,
						style: {
							...r,
							transform: `\n            translateY(${r.y}px)\n            scale(${r.x}, ${r.x})\n          `
						}
					}, m.a.createElement(rb, {
						onClick: this.props.onClose
					}), m.a.createElement($p, {
						srcSet: n
					}), m.a.createElement(eb, null, m.a.createElement(tb, null, o), m.a.createElement(Kp.b, null, a), m.a.createElement(nb, null, e), m.a.createElement(sb, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const ab = Object(he.b)(null, e => ({
					onSignup: () => e(Object(K.openRegisterModal)())
				}))(Object(Ge.c)(ob)),
				ib = `${cb("subscribe-cap.png")} 1x,\n  ${cb("subscribe-cap@2x.png")} 2x,`;

			function cb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const lb = 3;
			var db = n("./src/lib/permanentCookieOptions.ts");
			const ub = e => `${e}:1527210000`;
			var mb = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				pb = n.n(mb);
			const {
				fbt: bb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), hb = Ue.a.div("Icon", pb.a), gb = () => m.a.createElement(hb, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), fb = Ue.a.wrapped(tn.l, "PrimaryButton", pb.a), vb = Ue.a.wrapped(Pp, "Bread", pb.a);
			class Ob extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(_n.j, ub(lb), Object(db.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(vb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(gb, null), m.a.createElement(wp, null, bb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [bb._param("=User Agreement", m.a.createElement(Up.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, bb._("User Agreement", null, {
						hk: "XS57W"
					}))), bb._param("=Privacy Policy", m.a.createElement(Up.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, bb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(fb, {
						type: "submit"
					}, bb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Cb = Ob;

			function yb() {
				return (yb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xb = [],
				Eb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				jb = {
					opacity: .5,
					x: .5,
					y: 50
				},
				_b = {
					opacity: Object(Fe.spring)(0),
					x: Object(Fe.spring)(.6),
					y: Object(Fe.spring)(80, Eb)
				},
				Sb = Ue.a.wrapped(gp.a, "SnooFacepalm", Ip.a),
				Pb = Ue.a.wrapped(fp.a, "SnooHappy", Ip.a),
				kb = Ue.a.wrapped(ir.b, "SubredditIcon", Ip.a),
				Nb = Ue.a.img("CustomIcon", Ip.a),
				wb = Ue.a.div("Container", Ip.a),
				Mb = Ue.a.wrapped(cl.a, "Close", Ip.a),
				Ib = Ue.a.wrapped(bp.a, "LockIcon", Ip.a),
				Ab = Ue.a.wrapped(vp.a, "UnlockIcon", Ip.a),
				Tb = Ue.a.wrapped(hp.a, "RemoveIcon", Ip.a),
				Rb = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Mb, yb({
					className: "CloseIcon"
				}, e))),
				Lb = Ue.a.wrapped(Pp, "Bread", Ip.a),
				Db = Object(X.c)({
					subredditIcon: Cp.b,
					toastSlices: e => e.toaster
				}),
				Fb = Object(he.b)(Db, e => ({
					dismissToast: t => () => e(Object(pe.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(pe.g)(n))
					}
				}));
			class Ub extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Bb(e, this.props.toastSlices), this.getWillEnterStyles = () => jb, this.getWillLeaveStyles = () => _b
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Fe.TransitionMotion, {
						defaultStyles: xb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(wb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Op.b.Custom && void 0 !== t.customToastType) {
							const s = Hb[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Op.b.UappBanner) return m.a.createElement(Cb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Op.b.EuCookiePolicy) return m.a.createElement(zp, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(up("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(mp("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(pp("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Op.b.AuthError) return m.a.createElement(Dp, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Op.b.Modal ? tn.l : tn.r,
							r = t.kind === Op.b.Modal ? tn.o : tn.r;
						return m.a.createElement(Lb, {
							className: t.kind === Op.b.Modal ? Ip.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(up(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Ip.a.ContentWrapper
						}, Gb(t, this.props.subredditIcon), t.kind === Op.b.SuccessLockComment && m.a.createElement(Ib, null), t.kind === Op.b.SuccessUnlockComment && m.a.createElement(Ab, null), m.a.createElement(wp, null, t.text)), m.a.createElement("div", {
							className: Ip.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(mp(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(pp(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Rb, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Bb = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Fe.spring)(1),
							x: Object(Fe.spring)(1, Eb),
							y: Object(Fe.spring)(0, Eb)
						}
					}))
				},
				Gb = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Nb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Op.b.Error:
							return m.a.createElement(Sb, null);
						case Op.b.SuccessEndBroadcast:
							return m.a.createElement(Tb, null);
						case Op.b.SuccessAward:
						case Op.b.SuccessCommunity:
						case Op.b.SuccessCommunityGreen:
							return m.a.createElement(Pb, null);
						case Op.b.SuccessMod:
							return m.a.createElement(kb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Hb = {
					[Op.a.subscribeCap]: e => m.a.createElement(ab, Zp({
						name: Qp.LoggedOutMaxSubscriptions,
						sideImage: ib,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var qb = Fb(Object(Ge.c)(Ub)),
				Wb = n("./src/reddit/featureFlags/profileCollections.ts"),
				Vb = n("./src/reddit/helpers/trackers/banners.ts"),
				Qb = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				zb = n.n(Qb);
			var Kb = Ue.a.div("Wrapper", zb.a),
				Jb = n("./src/reddit/components/AlertBanner/index.m.less"),
				Xb = n.n(Jb);
			const {
				fbt: Zb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Yb = () => m.a.createElement(Kb, {
				className: Object(Ce.a)(Xb.a.wrapper, Xb.a.suspended)
			}, m.a.createElement("span", null, Zb._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Zb._("Click {=here} for more info.", [Zb._param("=here", m.a.createElement("a", {
				className: Xb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Zb._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), $b = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(Kb, {
					className: Object(Ce.a)(Xb.a.wrapper, Xb.a.suspended)
				}, m.a.createElement("span", null, Zb._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Zb._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Zb._("Click {=here} for more info.", [Zb._param("=here", m.a.createElement("a", {
					className: Xb.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Zb._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, eh = () => m.a.createElement(Kb, {
				className: Object(Ce.a)(Xb.a.wrapper, Xb.a.fpr)
			}, m.a.createElement("span", null, Zb._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Xb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Zb._("Learn more", null, {
				hk: "1OTc8q"
			}))), th = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Kb, {
					className: Object(Ce.a)(Xb.a.wrapper, Xb.a.deprecated)
				}, m.a.createElement("span", null, Zb._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Zb._param("update your browser", m.a.createElement(nh, {
					link: t
				}, Zb._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Zb._("If you do not update your browser, we suggest you visit {old reddit} .", [Zb._param("old reddit", m.a.createElement("a", {
					className: Xb.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, Zb._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, nh = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Xb.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class sh extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Vb.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Vb.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(th, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(eh, null) : n ? s || null != s ? m.a.createElement($b, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Yb, null) : null
				}
			}
			var rh = Object(Ge.c)(sh);
			const oh = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				ah = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var ih = n("./src/reddit/components/OfflineBanner/index.m.less"),
				ch = n.n(ih);
			const {
				fbt: lh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var dh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(Ce.a)(e.className, ch.a.banner, {
							[ch.a.online]: e.online,
							[ch.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: ch.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: ch.a.title
					}, e.online ? lh._("Found the internet!", null, {
						hk: "fMghd"
					}) : lh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(tr.a, {
						className: ch.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				uh = n("./src/reddit/components/Upsell/async.ts"),
				mh = n("./src/reddit/constants/componentSizes.ts"),
				ph = n("./src/reddit/constants/elementIds.ts"),
				bh = n("./src/reddit/constants/history.ts"),
				hh = n("./src/reddit/constants/posts.ts"),
				gh = n("./src/reddit/contexts/InsideOverlay.tsx"),
				fh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				vh = n("./src/reddit/constants/promo.ts"),
				Oh = n("./src/reddit/contexts/Promo/index.ts");

			function Ch(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case vh.a.Completed:
						return s === vh.a.Shown ? new Map(e.set(n, vh.a.Completed)) : e;
					case vh.a.Dismissed:
						return s === vh.a.Shown ? new Map(e.set(n, vh.a.Dismissed)) : e;
					case vh.a.Shown:
						return s ? e : new Map(e.set(n, vh.a.Shown));
					default:
						throw new Error
				}
			}
			var yh = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(Ch, new Map), r = u.useCallback(e => s({
						type: vh.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: vh.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: vh.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: o,
						promos: n,
						showPromo: a
					}), [r, o, n, a]);
					return u.createElement(Oh.a.Provider, {
						value: i
					}, t)
				},
				xh = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Eh = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				jh = n("./src/reddit/helpers/postCollection.ts"),
				_h = n("./src/reddit/models/Theme/index.ts"),
				Sh = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ph = n("./src/reddit/selectors/experiments/survey.ts"),
				kh = n("./src/reddit/selectors/notificationBanner.ts"),
				Nh = n("./src/reddit/selectors/onboarding.ts"),
				wh = n("./src/reddit/selectors/posts.ts"),
				Mh = n("./src/reddit/components/AppRouter/index.m.less"),
				Ih = n.n(Mh);

			function Ah() {
				return (Ah = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Th = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...r
					} = e;
					const o = Object(u.useMemo)(() => Object(xh.a)(s.search), [s.search]);
					return m.a.createElement("div", Ah({
						className: Object(Ce.a)(Ih.a.main, {
							[Ih.a.mShowingPaddedPinnedDescriptions]: n,
							[Ih.a.removeTopPadding]: o
						}, t),
						id: ph.a
					}, r))
				},
				Rh = Object(ke.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const o = Object(Ve.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", Ah({
						className: Object(Ce.a)(Ih.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(_h.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(kn.c)(n)}px`
						}
					}, r))
				}),
				Lh = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(Pe.a);
					return m.a.createElement("div", Ah({
						className: Object(Ce.a)(Ih.a.lightboxHeaderWrapper, t, {
							[Ih.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				Dh = Object(kh.a)(Vm.a.EmailCollectionBannerId),
				Fh = Object(he.b)(() => Object(X.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Qe.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: v.x,
					isBlockingInterstitialEnabled: Sh.b,
					isBlockingInterstitialV2Enabled: Sh.c,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: nr.c,
					isMatrixChatEnabled: Yu.b,
					isNpsSurveyEnabled: Ph.d,
					isOnboardingQueryParamEnabled: Nh.c,
					isSubscriptionsPinned: rr.c,
					isSuccessfulSurveyEnabled: Ph.f,
					isSuspended: v.X,
					isFPR: v.O,
					posts: wh.J,
					profileCollectionsEnabled: Wb.a,
					showEmailCollectionBanner: e => !Object(Tn.N)(e.platform.currentPage) && Dh(e),
					signUpModalIsOpen: Object(Mc.c)(Gt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: v.xb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(Te.i)()),
					onPostDismissTrigger: () => e(Object(ue.l)()),
					onSuccessfulSignupTrigger: () => e(Object(ue.h)()),
					onUnpinSubscriptions: () => e(Object(Te.j)())
				})),
				Uh = (e, t) => !(!e.state || !e.state[bh.b.IsOverlay] || t === e);
			class Bh extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Se()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < mh.k ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= mh.k && this.props.onPinSubscriptions()
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
						if (Object(Tn.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${S.Nb.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === hh.a.PROFILE;
							return !(!o || !Object(jh.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Qe.c)(e.frontpageSignupVariant),
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
					} = this.props, r = n.state && n.state[bh.b.IsOverlay], o = Object(Ie.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Ie.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === S.Sb.INDEX || t.name === S.Sb.SUBREDDIT && n.subredditName === Ir.b.Popular), r = Object(Qe.c)(this.props.frontpageSignupVariant), o = Object(Qe.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = Uh(e.location, this.previousLocation);
					we.a.write(() => {
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
						hasInvalidSession: r,
						isFPR: o,
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
					} = this.state, C = this.context, y = Uh(p, this.previousLocation);
					p.state && p.state[bh.b.IsOverlay] && !y ? p.state[bh.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[bh.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[bh.b.CloseLocation] && this.previousLocation.state[bh.b.CloseLocation] === p.state[bh.b.CloseLocation] ? p.state[bh.b.CloseLocation] = {
						...this.previousLocation,
						state: je()(this.previousLocation.state, bh.b.CloseLocation)
					} : p.state[bh.b.CloseLocation] = this.previousLocation);
					const x = Object(Ie.a)(this.previousLocation, p),
						E = y || x ? this.previousLocation : p,
						j = y || x ? this.previousPage : t,
						_ = !(!(j && j.meta && j.meta.name === S.Sb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[Aa.s]),
						P = !(!j || !j.meta || j.meta.name !== S.Sb.MODERATION_PAGES),
						k = Object(Tn.x)(j),
						N = this.getIsPostCollection(),
						w = v && !O,
						M = e.showBanner;
					return r ? s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Tn.a.Provider, {
						value: j
					}, m.a.createElement(pa.c, {
						isOverlayOpen: y
					}, m.a.createElement(dp.a, {
						forceRedditTheme: _
					}, v && m.a.createElement(kt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Gh, {
						browserInfo: C,
						connection: e,
						isFPR: o,
						isInline: w,
						isSuspended: d,
						showOffline: M,
						suspensionDaysLeft: f,
						location: E
					})), m.a.createElement(gh.a.Provider, {
						value: !1
					}, m.a.createElement(dp.a, {
						forceRedditTheme: _ || P,
						isCommentsPage: k
					}, m.a.createElement(yh, null, m.a.createElement(Hh, {
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
						showFPR: o,
						showOffline: M,
						showSuspended: d
					}), m.a.createElement(uh.b, null), m.a.createElement(uh.a, null)))))), m.a.createElement(Tn.a.Provider, {
						value: t
					}, y && m.a.createElement(gh.a.Provider, {
						value: !0
					}, m.a.createElement(dp.a, {
						isOverlay: !0
					}, m.a.createElement(qh, {
						browserInfo: C,
						isPostCollection: N,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: o,
						showOffline: M,
						showSuspended: d
					}))), m.a.createElement(dp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(qb, null), m.a.createElement(lp.a, null), g && m.a.createElement(Re.a, null), m.a.createElement(Mn, null), m.a.createElement(Zs, null), c && m.a.createElement(Wm, null)))))
				}
			}
			Bh.contextType = Ne.a;
			const Gh = Object(Ge.c)(e => {
					const t = Object(Tn.eb)(),
						n = Object(fh.db)(t),
						s = Object(u.useContext)(Pe.a),
						r = Object(u.useMemo)(() => Object(xh.a)(e.location.search), [e.location.search]),
						{
							browserInfo: o,
							connection: a,
							isFPR: i,
							isInline: c,
							showOffline: l,
							isSuspended: d,
							suspensionDaysLeft: p
						} = e,
						b = {
							browserInfo: o,
							showFPR: i,
							showSuspended: d,
							suspensionDaysLeft: p,
							showOffline: l,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(rh, b), n && !r && m.a.createElement(Hm, {
						className: Object(Ce.a)(Ih.a.header, oh(Ih.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(dh, {
						className: Object(Ce.a)(Ih.a.offlineBanner, oh(Ih.a, b)),
						online: a.online,
						showBanner: a.showBanner
					}))
				}),
				Hh = Object(Ge.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = je()(e, "key"),
							s = je()(t, "key");
						return xe()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = je()(e, ["key", "locationState"]),
								s = je()(t, ["key", "locationState"]);
							return xe()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isInline: r,
							isSubscriptionsPinned: o,
							showEmailCollectionBanner: a
						} = this.props;
						return m.a.createElement(Th, {
							"aria-hidden": s,
							className: Object(Ce.a)(oh(Ih.a, this.props), {
								[Ih.a.withUpsell]: !!e,
								[Ih.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: o,
							location: t
						}, o && m.a.createElement(cp, {
							className: Object(Ce.a)(Ih.a.pinnedSubscriptions, {
								...oh(Ih.a, this.props),
								[Ih.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(ge.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(Ce.a)(Ih.a.bottomSpacer, ah(Ih.a, this.props))
						}))
					}
				});
			class qh extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Ae.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[bh.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Eh.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Me.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Eh.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === S.Sb.SUBREDDIT_CREATION || t.meta.name === S.Sb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(Rh, {
						className: Object(Ce.a)(oh(Ih.a, this.props), {
							[Ih.a.mIsCommentsLightbox]: r,
							[Ih.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(Ce.a)(Ih.a.overlayWrapper, oh(Ih.a, this.props))
					}, m.a.createElement("div", {
						className: Object(Ce.a)(Ih.a.overlayScrollContainer, {
							[Ih.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: ph.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(Lh, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(Ce.a)(oh(Ih.a, this.props), {
							[Ih.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(qm.a, {
						page: t
					})), m.a.createElement(ge.f, null, n), m.a.createElement("div", {
						className: Object(Ce.a)(Ih.a.bottomSpacer, ah(Ih.a, this.props))
					}))))
				}
			}
			var Wh = Fh(Object(Ge.c)(Bh)),
				Vh = n("./src/reddit/contexts/User/index.tsx");

			function Qh(e) {
				return m.a.createElement(Vh.b, null, e.children)
			}
			var zh = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Kh = n("./src/reddit/constants/shortcuts.ts"),
				Jh = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Xh = n.n(Jh);
			var Zh = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: Xh.a.shortcutDiv,
					id: Kh.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let Yh = [];
			const $h = "https://w3-reporting.reddit.com/policy";
			let eg = 1;
			const tg = !1;
			const ng = tg ? Promise.resolve() : async function() {
				if (tg) return;
				const e = await fetch($h, {
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
					e.length > 0 && (Yh = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (eg = e)
				} catch {}
			}();

			function sg(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				tg ? console.error("w3-reporting is client-side only") : rg.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let rg = [];
			async function og(e) {
				if (0 === e.length || 0 === Yh.length) return;
				if (Math.random() > eg) return;
				await ng;
				const t = e.map(cg).filter(e => e.age < 3e5);
				try {
					const e = await fetch(ig(), {
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
				og([...rg]), rg = []
			}, 5e3), tg || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (og([...rg]), rg = [])
			});
			let ag = -1;
			const ig = () => (ag = (ag + 1) % Yh.length, Yh[ag]);

			function cg(e) {
				const {
					name: t,
					value: n,
					type: s,
					labels: r,
					createdAt: o
				} = e;
				return {
					age: Date.now() - o,
					type: "reddit-w3reporting",
					url: "",
					user_agent: navigator.userAgent,
					body: {
						sampling_fraction: 1,
						type: s,
						name: t,
						value: n,
						labels: null != r ? r : {}
					}
				}
			}

			function lg() {
				const e = Object(he.e)(e => {
					const t = Object(En.b)(e);
					return t && Object(ln.v)(t) || "unknown"
				});
				return Object(u.useEffect)(() => {
					(async () => {
						const {
							onCLS: t,
							onFID: s,
							onINP: r,
							onLCP: o,
							onTTFB: a
						} = await n.e("webvitals").then(n.bind(null, "./node_modules/web-vitals/dist/web-vitals.js"));
						t(t => {
							sg("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							sg("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), r(t => {
							sg("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), o(t => {
							sg("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							sg("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var dg = n("./src/reddit/components/Header/Sparse.tsx"),
				ug = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				mg = n("./src/reddit/pages/InternalServerError/index.m.less"),
				pg = n.n(mg);
			const {
				fbt: bg
			} = n("./node_modules/fbt/lib/FbtPublic.js"), hg = Object(X.c)({
				showError: Sn.d.showVerboseErrors
			}), gg = Object(he.b)(hg)(e => {
				const t = Object(u.useContext)(Pe.a);
				return m.a.createElement(gh.a.Provider, {
					value: !1
				}, m.a.createElement(dp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(dg.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: pg.a.container
				}, m.a.createElement("div", {
					className: pg.a.mainContent
				}, m.a.createElement(ug.a, {
					className: pg.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: pg.a.title
				}, bg._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: pg.a.subTitle
				}, bg._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(tn.l, {
					onClick: () => window.location.reload(!0)
				}, bg._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: pg.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(Ce.a)(pg.a.topImageContainer, {
						[pg.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: pg.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: pg.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: pg.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function fg() {
				return (fg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const vg = Object(X.c)({
					isNavbarLikeMwebEnabled: Rl.a,
					isNightmode: v.db,
					theme: e => e.themes.current
				}),
				Og = Object(he.b)(vg, {})(e => {
					let {
						children: t,
						theme: n,
						isNightmode: s,
						isNavbarLikeMwebEnabled: r
					} = e;
					const o = Object(Ve.a)({
						theme: n
					});
					return m.a.createElement(Pe.a.Provider, {
						value: r
					}, m.a.createElement("div", {
						className: Object(Ce.a)(ve.a.container, {
							[ve.a.containerExp]: r,
							"theme-light": !s,
							"theme-dark": s
						}, "theme-beta"),
						style: {
							"--background": o.body,
							"--canvas": o.canvas
						}
					}, t))
				});

			function Cg(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Ge.a, null, m.a.createElement(Og, null, m.a.createElement(Qh, null, m.a.createElement(Oe.a, null), m.a.createElement(zh.a, null), m.a.createElement(Zh, null, m.a.createElement(t, null, m.a.createElement(ge.d, {
						component: yg(n)
					}))), m.a.createElement(lg, null))))
				}
				return m.a.createElement(gg, {
					error: e.error
				})
			}
			const yg = e => t => m.a.createElement(Wh, fg({
					routes: e
				}, t)),
				xg = 1e3;
			class Eg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Se()(() => Object(Pn.Gb)(this.props.storageKey, this.props.value), xg)
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
			Eg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const jg = Object(X.a)(v.Q, e => ({
				storageKey: Pr.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var _g = Object(he.b)(jg)(Eg);
			var Sg = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(_g, null)),
				Pg = n("./src/reddit/constants/headers.ts"),
				kg = n("./src/reddit/constants/jsapiEvents.ts"),
				Ng = n("./src/reddit/constants/screenWidths.ts"),
				wg = n("./src/reddit/contexts/AdminEvents.ts"),
				Mg = n("./src/reddit/contexts/ApiContext.tsx"),
				Ig = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Ag = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const Tg = () => e => t => e(t);
			var Rg = n("./src/lib/safeBadgeUpdate.ts");

			function Lg(e) {
				const t = Object(Xu.g)(e);
				Object(Rg.a)(t)
			}
			var Dg = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== Ag.b && n.type !== Ag.d || Lg(e.getState()), s
				} : Tg,
				Fg = n("./node_modules/brcast/dist/brcast.es.js"),
				Ug = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var Bg = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Fg.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Ug.b)(s) || Object(v.N)(s) || Object(v.M)(s)) && (e = !0, Object(B.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(Ug.b)(a)) {
									const n = Object(v.N)(a) || Object(v.M)(a);
									e && !n ? (e = !1, Object(B.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(B.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(Fg.a)([]),
					middleware: () => e => t => e(t)
				}),
				Gg = n("./src/lib/domUtils/index.ts"),
				Hg = n("./src/reddit/actions/adsSignals.ts");
			const qg = 30 * S.pb;
			let Wg = Date.now();
			const Vg = () => {
					Wg = Date.now()
				},
				Qg = !!Object(Gg.f)() && {
					passive: !0
				};
			window.addEventListener("click", Vg, !1), window.addEventListener("wheel", Ya()(Vg, 250), Qg), window.addEventListener("mousemove", Ya()(Vg, 250), Qg), window.addEventListener("keydown", Ya()(Vg, 250), Qg);
			var zg = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Wg >= qg ? (e.dispatch(de.h()), e.dispatch(Hg.b()), Vg()) : Vg()
					})), e => t => e(t)
				},
				Kg = n("./src/reddit/constants/preferences.ts"),
				Jg = n("./src/reddit/helpers/cookies/index.ts");
			const Xg = new Set([$c.g, $c.i, me.b, $c.d, $c.o, Te.d, Te.e, $c.r]);
			var Zg = e => t => n => {
					const s = t(n);
					if (Xg.has(n.type)) {
						const t = e.getState().user,
							n = va()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Kg.b, Kg.d, Kg.e]);
						Object(Jg.a)({
							prefs: n
						})
					}
					return s
				},
				Yg = n("./src/reddit/actions/tabBadging.ts"),
				$g = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ef = n("./src/reddit/selectors/removedPosts.ts"),
				tf = n("./src/reddit/models/Subreddit/index.ts"),
				nf = n("./src/reddit/models/Post/index.ts");
			const sf = (e, t) => ((e, t) => {
					var n, s, r, o;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (o = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === o ? void 0 : o[a];
					return !!i && ((null == i ? void 0 : i.type) !== tf.f.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(ef.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				rf = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				of = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(En.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = rf.has(r), a = Object(Tn.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = af(e), l = s === S.Sb.COMMENTS || s === S.Sb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === S.Sb.SEARCH_RESULTS || s === S.Sb.SUBREDDIT_LEADERBOARD || l && d, m = Object(ef.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(ef.d)(e)) return !1;
						const o = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = o && Object(nf.x)(o),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						return !!i && sf(e, i)
					})(e) || u;
					return i || o || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				af = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object($g.a)(t, !1, s)
					}
					return n
				};
			var cf = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const lf = "theme-color",
				df = `meta[name="${lf}"]`;

			function uf(e) {
				return e ? cf.b.body : cf.a.body
			}
			var mf = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ie.f) {
						const t = e.getState(),
							s = Object(v.P)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Xu.i)(e);
							Object(Yg.c)(n, t)
						})(t, r.title) : we.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = of (e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === $c.i) {
						! function(e) {
							we.a.write(() => {
								const t = document.head.querySelector(df);
								if (t) {
									const n = Object(v.db)(e);
									t.content = uf(n)
								}
							})
						}(e.getState())
					}
					return s
				} : Tg,
				pf = n("./src/reddit/helpers/survey/index.ts");
			var bf = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(pf.a).filter(t => t === e).length)(t.type) && Object(Pn.W)(pf.a[t.type]), e(t)) : Tg;
			const hf = 5 * S.pb;
			var gf = e => {
					const t = Se()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(de.g())
					}, hf);
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
				ff = n("./src/reddit/singleton/tracing/index.ts");
			var vf = e => e => t => {
					const n = () => e(t);
					return ff.b.isEnabled ? ff.b.recordLocalSpan(t.type, n) : e(t)
				},
				Of = n("./src/reddit/actions/frontpage/constants.ts"),
				Cf = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				yf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				xf = n("./src/reddit/actions/pages/profilePosts.ts"),
				Ef = n("./src/reddit/actions/pages/search/index.ts"),
				jf = n("./src/reddit/actions/pages/subreddit.ts"),
				_f = n("./src/reddit/actions/tracking.ts"),
				Sf = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Pf = n("./src/reddit/helpers/history/index.ts"),
				kf = n("./src/reddit/helpers/trackers/commentList.ts"),
				Nf = n("./src/reddit/helpers/trackers/postList.ts"),
				wf = n("./src/reddit/helpers/routeKey/index.ts");
			var Mf = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(_f.c({
							routeKey: t
						}))
					};
					if (n.type === ie.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(Or.H)(s, r) || "",
							i = (s.subreddits.about[o] || {}).advertiserCategory;
						a.trigger("pageview", {
							...va()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(wf.b)(c, s, Object(Sf.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(En.i)(s) && Object(Pf.b)(bh.b.IsOverlay) || Object(Fa.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(Sf.a)(s, l),
							u = Object(wf.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case Of.c:
						case yf.b:
						case yf.e:
						case xf.PROFILE_POSTS_LOADED:
						case Cf.e:
						case jf.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case Ef.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case Of.g:
						case jo.i:
						case xf.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							Nf.l(o, t);
							break
						}
						case Cf.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							kf.a(o, t);
							break
						}
						case xa.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				If = n("./src/reddit/helpers/datadome.ts"),
				Af = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Tf = n("./src/reddit/helpers/trackers/global.ts");
			let Rf = null;
			const Lf = () => {
				Rf && window.clearTimeout(Rf), Rf = null
			};
			var Df = e => {
					Rf = window.setTimeout(() => {
						Lf(), Object(U.a)(Object(Tf.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Lf)
				},
				Ff = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Uf = n("./src/reddit/actions/connection/constants.ts");
			const Bf = Object(b.a)(Uf.b),
				Gf = Object(b.a)(Uf.a),
				Hf = Object(b.a)(Uf.c);
			var qf = n("./src/reddit/actions/meta.ts");
			const Wf = (e, t) => Object(U.a)({
					...ln.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(ln.d)(e, {
						type: t
					})
				}),
				Vf = "(display-mode: minimal-ui)";
			const Qf = 3 * S.Xb;

			function zf(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Vf).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(qf.i)());
				const t = window.matchMedia(Vf);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(qf.i)()) : e.dispatch(Object(qf.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						Lg(t)
					}, 1e3), Wf(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Bf()), setTimeout(() => e.dispatch(Hf()), Qf)
				}), window.addEventListener("offline", () => e.dispatch(Gf()))
			}
			const Kf = (e, t) => {
				if (!e) return;
				const n = (d.a.get(_n.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: _n.g,
							value: s,
							cookieOptions: Object(db.a)(),
							cookieContext: t
						};
					Object(Fp.c)(r)
				}
			};
			var Jf = n("./src/reddit/layout/page/Listing/index.tsx"),
				Xf = n("./src/reddit/reducers/index.ts");
			var Zf = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				Yf = n("./src/reddit/selectors/experiments/utils.ts");
			const $f = e => !!Object(Yf.a)((e => Object(Va.c)(e, {
					experimentEligibilitySelector: Em.f,
					experimentName: An.Dc
				}))(e)),
				ev = {
					displayDelay: 15,
					displayOnRoutes: [S.Sb.SUBREDDIT, S.Sb.COMMENTS],
					experimentName: An.be,
					experimentVariant: An.fe.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				tv = e => {
					const {
						base_url: t
					} = Object(ln.ab)(e), n = Object(En.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
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
				nv = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(ev, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(ev)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(ev, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(ev, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(Va.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: Va.a
							}) === s
						})(ev, e)) return {
						displayDelay: ev.displayDelay,
						externalVars: tv(e)
					}
				};
			var sv = n("./src/reddit/singleton/EventSystem.ts"),
				rv = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				ov = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				av = n("./src/reddit/reducers/features/categories/index.ts"),
				iv = n("./src/lib/sentry/index.ts"),
				cv = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const lv = Object(b.a)(cv.C),
				dv = () => {
					return Object(Pn.B)(Pr.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var uv = n("./src/reddit/actions/global/constants.ts");
			Object(Ii.a)({
				features: {
					categories: av.a
				}
			});
			const mv = Object(b.a)(uv.a),
				pv = e => async (t, n) => {
					t((() => async e => {
						const t = dv();
						t && e(lv(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || iv.c.withScope(e => {
						Object(iv.a)(e, {
							serverLogging: !1
						}), iv.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(mv(r))
				}, bv = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, hv = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return bv.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(K.openD2xOnboardingModal)())
				};
			var gv = n("./src/reddit/actions/notificationsInbox/index.ts"),
				fv = n("./src/reddit/actions/onboarding/index.ts"),
				vv = n("./src/reddit/constants/countrySites.ts"),
				Ov = n("./src/reddit/selectors/countrySites.ts");
			const Cv = vv.b ? `${vv.a}/${vv.b}` : `${vv.a}`,
				yv = (e, t) => {
					return !!Object(Ov.e)(e) && !(t && !Object(Ov.d)(t))
				},
				xv = e => e.startsWith("/r/") ? e.replace("/r/", `/${Cv}/r/`) : e;
			var Ev = n("./src/reddit/selectors/experiments/countrySites.ts");
			var jv = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(o.e)(o.b.EntryPointStart);
			const _v = Object(D.a)({
					actionDispatchers: {
						loidReceived: be.q,
						sessionTrackerReceived: be.x
					},
					authHeaders: {
						[Pg.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: be.b,
						sessionTrackerReceived: be.j,
						userAuthenticated: de.c,
						userLoggedOut: de.d,
						userReauthenticated: de.e,
						headersReceived: q.a
					},
					onBeforeRequestFactory: Ff.a,
					statsAppName: S.o.Redesign
				}),
				Sv = Object(F.a)(_v.apiContext),
				Pv = Object(F.a)(_v.apiContext, i.a.gqlRealtime2Url),
				kv = Bg();
			let Nv;
			Object(w.a)({
				reducerMap: Xf.a,
				routes: Ju,
				apiContext: _v.apiContext,
				gqlContext: Sv.gqlContext,
				gqlRealtime2Context: Pv.gqlContext,
				appFactory: (e, t) => m.a.createElement(wg.a.Provider, {
					value: kv.broadcaster
				}, m.a.createElement(Mg.a.Provider, {
					value: {
						apiContext: _v.apiContext,
						gqlContext: Sv.gqlContext,
						gqlRealtime2Context: Pv.gqlContext
					}
				}, m.a.createElement(Ig.b, null, m.a.createElement(Cg, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(Sg, null)))),
				appName: S.o.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = Nv;
						if (!n) return;
						n.dispatch(Object(ie.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ie.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Ju,
					apiContext: _v.apiContext,
					gqlContext: Sv.gqlContext,
					gqlRealtime2Context: Pv.gqlContext
				}), kv.middleware, zg, _v.middleware, Sv.middleware, Pv.middleware, gf, Zg, vf, Mf, mf, bf, hd.a, Dg, e => t => n => {
					let s, r;
					if (!Object(Ev.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!yv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(Ov.d)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${Cv}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!yv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(Ov.d)(e);
								(n || t) && (r.permalink = xv(r.permalink))
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
					if (!Object(Ev.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!yv(e, t.name)) return t;
							const n = Object(Ov.d)(t.id);
							if (t.name || n) {
								const e = xv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!yv(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(Ov.d)(s.id),
									r = Object(Ov.d)(s.name);
								if (e || r) {
									const e = xv(s.url),
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
					loading: m.a.createElement(Jf.a, {
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
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(te.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), zf(s);
					const o = s.getState();
					s.dispatch(Object(q.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(B.d)("enabled" === Object(Va.c)(s.getState(), {
							experimentEligibilitySelector: Va.a,
							experimentName: An.Wf,
							expEventOverride: !1
						})), Object(B.c)("enabled" === Object(Va.c)(s.getState(), {
							experimentEligibilitySelector: Va.a,
							experimentName: An.Yf
						})), Object(B.g)("enabled" === Object(Va.c)(s.getState(), {
							experimentEligibilitySelector: Va.a,
							experimentName: An.Xf
						})), Object(B.f)(Sv.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(Tf.a)("tab_closed")(e),
								n = G.g(t),
								r = Object(rv.a)(n),
								o = Object(ov.b)(r);
							Object(L.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(xh.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(ie.h)());
					const a = Object(v.db)(s.getState());
					s.dispatch(Object(me.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(Va.c)(e, {
							experimentEligibilitySelector: Va.a,
							experimentName: An.M
						}) === An.X.Enabled)(s.getState())) {
						ff.b.enableTracing(!0);
						const e = ff.b.createTraceFromId(l);
						ff.b.setParent(e)
					}
					s.dispatch(Object(ie.i)(n));
					t.listen((e, t) => {
						const r = Object(I.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(ie.j)(e, t, r))
					});
					const {
						currentPage: d
					} = o.platform;
					if (d) {
						const e = [Aa.f];
						if (Object(En.j)(o) && e.push(Aa.c), e.length > 0) {
							const t = Object(k.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Rn.a.initialize(o), {
						localStorageData: Object(Pn.C)()
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
					Nv = l;
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
							i = Object(Or.H)(n, a) || "";
						if (Kf(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(O(i, a));
							const e = Object(En.e)(n);
							e && l.dispatch(C(e))
						}
						sv.a.publish(kg.c, o, document)
					});
					const p = l.getState(),
						b = Object(hd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(x(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(Or.H)(p, h) || "";
					if (h) {
						l.dispatch(O(g, h));
						const e = Object(En.e)(p);
						e && l.dispatch(C(e))
					}
					const f = Object(Or.H)(p, h) || "",
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
					}), l.dispatch(pv({
						localStorageData: d
					}));
					const w = Object(Nh.c)(p);
					w && (l.dispatch(oe()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.w]))), l.dispatch(hv());
					const I = Object(En.q)(p),
						D = null == I ? void 0 : I[Aa.o];
					D && (history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.o])), w || l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == I ? void 0 : I[Aa.u]) && (l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.u]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Or.H)(e, a) || "";
						if (Object(L.a)(), Kf(i, {
								country: e.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(U.b)(S.o.Redesign, {
									page: a,
									type: "rum"
								}), Object(N.c)(e.meta.userAgent) && window.innerWidth > Ng.b) {
								const t = Object(o.f)(c);
								A.a && A.a.timing && ff.b.isEnabled && (ff.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), ff.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(If.a)()],
									s = !0;
								if (Object(En.g)(e)) {
									const t = Object(Af.a)(e);
									n.push(Object(Af.c)(t))
								}
								const r = {
									isLoggedIn: Object(v.Q)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(Fa.k)(r.routeMatch, l.getState(), H.TimerType.Initial, i, r.urlParams);
							const d = Object(P.a)(window.location.href);
							d && d.get(Aa.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.a])), Object(R.a)(d.get(Aa.E)) && l.dispatch(Object(pe.f)({
								kind: Op.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(Aa.F) && (l.dispatch(Object(z.a)(d.get(Aa.F))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.F])));
							let u = !1;
							const m = Object(v.T)(e);
							(Object(Pf.b)(bh.b.JustLoggedIn) || m) && (l.dispatch(Object(pe.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(Pf.c)(bh.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Aa.n]))), Object(Pf.b)(bh.b.JustLoggedOut) && (u = !0, Object(Pf.c)(bh.b.JustLoggedOut)), se().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(fv.openReonboardingModalIfNeeded)());
							let b;
							$(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ee())), e(ee())
							});
							const h = $f(e);
							if (!D)
								if (h || !1 === Pn.X()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											se().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(Zf.a)(e) ? Object(v.Q)(e) ? (n(), p()) : b && b() : n(t)
								} if (a === S.Sb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(Q.c)())
						}
						Object(v.Q)(l.getState()) && !Object(xh.a)(window.location.search) && l.dispatch(Object(W.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object(re.d)()), await Object(_.a)() && Object(Tf.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = nv(e);
								t && (await (async e => {
									return (await Object(ne.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
							if ("visible" !== document.visibilityState && (Pn.Yb(Date.now()), Object(U.a)(Object(Tf.a)("tab_backgrounded")(t))), (e => Object(Va.c)(e, {
									experimentEligibilitySelector: e => !Object(Y.d)(e),
									experimentName: An.Qc
								}) === An.dd.Enabled)(t) && "visible" === document.visibilityState && n && Object(Fa.k)(n.routeMatch, l.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Pn.w(),
									t = Pn.x(),
									n = Pn.I(),
									s = Pn.T();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(U.a)(Object(Tf.e)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Pn.eb(), Pn.ib(), Pn.gb(), Pn.fb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && jv.d[n.locationState.clickId] && !jv.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(jv.b)(n.locationState.clickId) : Object(jv.c)(n.locationState.clickId))
						}), Object(Y.h)(l.getState()) && Df(l.getState), l.dispatch(Object(ue.o)())
					}), window.history.scrollRestoration = "manual", sv.a.attachStore(l), l.dispatch(Object(le.b)(T.a.PageLoad));
					const F = Pn.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						B = Pn.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ce.C)({
						posts: null != F ? F : []
					})), l.dispatch(Object(V.m)({
						comments: null != B ? B : []
					})), Object(xm.e)(l.getState()) && l.dispatch(Object(gv.e)()), Object(j.requestIdleCallback)(() => {
						const e = Pn.D();
						(!e || e && Date.now() - e.lastUpdated >= S.E) && l.dispatch(Object(ue.f)())
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
					layout: (e, t) => t.forcedLayout || Object(l.S)(e, t)
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
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
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
					return r.a.createElement(b.a, {
						className: O.a.backToSubreddit,
						to: n
					}, r.a.createElement("div", {
						className: O.a.innerContainer
					}, r.a.createElement(f.a, {
						name: h.a.back,
						className: p()(O.a.content, O.a.back)
					}), r.a.createElement(g.b, {
						className: p()(O.a.content, O.a.subredditIcon)
					}), r.a.createElement("span", {
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
				}, L = w && r.a.createElement("div", {
					className: Object(i.a)(E.a.sidebar, _ ? E.a["m-collectionLayout"] : E.a.defaultLayout),
					style: R
				}, w), D = r.a.createElement(a.a, {
					hideOnlyChildMargin: j,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: x,
					isCollectionLayout: _
				}, h, n && r.a.createElement(C, {
					subredditName: n
				}), b);
				let F;
				F = M ? r.a.createElement(r.a.Fragment, null, M[0], D, M[1]) : S ? r.a.createElement(r.a.Fragment, null, L, D) : r.a.createElement(r.a.Fragment, null, D, L);
				const U = v ? `${P||d.a+2*c.l}px` : "100%",
					B = Object(s.useContext)(u.a);
				return r.a.createElement(y.a, {
					subredditId: A
				}, r.a.createElement("div", {
					className: Object(i.a)(E.a.outerContainer, l.i, m, {
						[E.a.outerContainerExp]: B
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: l.h,
					redditStyle: N,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: E.a.innerContainer
				}, k, f, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, I), r.a.createElement("div", {
					className: E.a.body,
					style: {
						maxWidth: U
					}
				}, F))))
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
		"./src/reddit/models/LoggedOutOneFeed/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(r || (r = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(o || (o = {}))
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
				r = n.n(s),
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
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
					o = {
						to: s,
						kind: d.b.InternalLink
					},
					a = r.a.createElement(u.default, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: n
					}, h);
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !t
					})
				}, r.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(p.a.avatarImage, {
						[p.a.inTooltip]: t
					})
				}), r.a.createElement("h1", {
					className: Object(c.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: t
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), r.a.createElement("p", {
					className: p.a.emptyDescription
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", a)], {
					hk: "1WOK4T"
				})), r.a.createElement(d.t, b({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${h}`
				}, o)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(a.a)();
				return r.a.createElement(g, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(o.s)({
						actionInfoType: e
					})))(o.a.Karma)
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
			var s, r, o = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
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
						endsAt: r,
						webAssetUrls: o,
						tags: a
					} = e, i = s && new Date(s) <= new Date, c = !!r && new Date(r) < new Date, l = !!i && !c, b = (a || []).includes(m);
					if (a && a.includes(d) && !b) {
						const {
							text: n,
							id: s
						} = e, r = o || null, i = p(a);
						t && (t.quickCreateV1 = {
							...i,
							id: s,
							text: n,
							active: l && !!r,
							webAssetUrls: r
						})
					}
					if (a && a.includes(u) && !b) {
						const e = o || null,
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
			t.a = Object(o.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: O
			})
		},
		"./src/reddit/reducers/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/happeningNow/constants.ts");
			const o = {
				error: null,
				pending: !1
			};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.b:
						return {
							...e, pending: !0
						};
					case r.c:
						return {
							error: null, pending: !1
						};
					case r.a:
						return {
							error: t.payload, pending: !1
						};
					default:
						return e
				}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.d:
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
					case r.c: {
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
					case r.c: {
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
					case r.c: {
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
					case r.e:
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
					chunk: r.u.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.ACKNOWLEDGEMENTS
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
					chunk: r.u.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.APPEAL
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
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`, `${a}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: o.a,
					chunk: r.u.AVATAR,
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
						name: r.Sb.AVATAR
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
					chunk: r.u.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.COINS
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
					chunk: r.u.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.COINS_MOBILE
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			l = Object(o.c)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.u.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Sb.COLLECTION_COMMENTS
					},
					prefetches: [r.u.FRONTPAGE, r.u.COMMENTS_PAGE, r.u.SUBREDDIT]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: r.u.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(o.c)(c, !1),
					prefetches: [r.u.SUBREDDIT]
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
					chunk: r.u.ECON_MANAGEMENT,
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
						name: r.Sb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement2.ts");
			const a = "/econ-management-2",
				i = {
					action: o.a,
					chunk: r.u.ECON_MANAGEMENT_2,
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
						name: r.Sb.ECON_MANAGEMENT_2
					},
					path: a
				};
			t.a = i
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
					chunk: r.u.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FOLLOWERS
					},
					path: a,
					prefetches: [r.u.PROFILE_OVERVIEW]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					chunk: r.u.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FRAMED_GILD
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
					chunk: r.u.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FRAMED_MODAL
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
			const d = Object.keys(a.bb).map(e => a.bb[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(o.a)({
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
					chunk: r.u.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Sb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/happeningNow/index.ts");
			const a = "/now",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "HappeningNow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("HappeningNow").then(n.bind(null, "./src/reddit/pages/HappeningNow/index.tsx")),
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
					action: o.c,
					chunk: r.u.HAPPENING_NOW,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.HAPPENING_NOW
					},
					path: a
				};
			t.a = c
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
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "/community-points",
				r = "/community-point",
				o = "/community-points/documentation(.*)"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
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
					chunk: r.u.META_ARBITRUM_POINTS_MIGRATION_PAGE,
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
						name: r.Sb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration"]
				},
				f = {
					action: () => async (e, t) => {
						Object(b.Q)(t()) || await e(Object(d.s)())
					},
					chunk: r.u.META_MAINNET_POINTS_MIGRATION_PAGE,
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
						name: r.Sb.META_MAINNET_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/mainnet"]
				},
				v = {
					action: i.a,
					chunk: r.u.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: r.Sb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [h.b, h.c, h.a, "/vault", "/web/community-points"]
				},
				O = {
					action: l.a,
					chunk: r.u.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: r.Sb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				C = {
					action: c.a,
					chunk: r.u.META_NO_GAS_PAGE,
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
						name: r.Sb.META_NO_GAS_PAGE,
						isResponsive: !0
					},
					path: ["/web/vault/no-gas"]
				},
				y = e => async (t, n) => {
					const s = Object(p.a)(e.queryParams);
					Object(b.Q)(n()) || await t(Object(d.s)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, x = {
					action: y,
					chunk: r.u.EMPTY,
					exact: !0,
					meta: {
						name: r.Sb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, O, C, x]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
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
					chunk: r.u.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.NOTIFICATIONS_INBOX
					},
					path: ["/notifications", a],
					prefetches: [r.u.FRONTPAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.u.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.POST_DRAFT
					},
					path: a,
					prefetches: [r.u.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: r.u.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.POST_SET
					},
					path: a,
					prefetches: [r.u.POST_SET_PAGE]
				};
			t.a = c
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
					chunk: r.u.PREDICTIONS,
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
						name: r.Sb.PREDICTIONS,
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.u.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
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
					chunk: r.u.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.u.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/submitted",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.u.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.u.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.u.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Sb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.u.PUBLIC_ACCESS_NETWORK]
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
					chunk: r.u.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.REPORT
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.u.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.u.FRONTPAGE, r.u.SUBREDDIT, r.u.COMMENTS_PAGE]
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
			const c = Object.keys(a.jc).map(e => a.jc[e]).join("|"),
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
					chunk: a.u.SETTINGS,
					exact: !0,
					meta: {
						name: a.Sb.SETTINGS
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
					chunk: r.u.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [r.u.FRONTPAGE]
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: o.u.EMPTY,
					exact: !0,
					meta: {
						name: o.Sb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.u.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: o.Sb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [o.u.SUBREDDIT]
				};
			t.a = [p, b]
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
					chunk: r.u.TALK,
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
						name: r.Sb.TALK
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.u.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Sb.TOPIC
					},
					prefetches: [r.u.COMMENTS_PAGE, r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/config.ts"),
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
				experimentName: l.Yd
			}), e => e === l.ce.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/lib/getParsedUserAgent/index.ts");
			const v = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(f.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.Cf
			}), e => e === l.Qf.Enabled);
			var O = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/responsiveSettings.ts"),
				y = n("./src/reddit/selectors/accountManager/modalData.ts");
			const x = Object(a.c)({
					frontpageSignupVariant: u.a,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.Hf
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
					let j = `${o.a.accountManagerOrigin}${e}`;
					if (j = Object(i.a)(j, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (j = Object(i.a)(j, {
							[`experiment_${l.Hf}`]: f
						})), x && (j = Object(i.a)(j, {
							[`experiment_${l.Yd}`]: "enabled"
						})), j = Object(i.a)(j, {
							thing_id: n
						}), j = Object(i.a)(j, {
							experiment_d2x_onboarding: "enabled"
						}), E && (j = Object(i.a)(j, {
							[`experiment_${l.Cf}`]: "enabled"
						})), C && (j = Object(i.a)(j, {
							[`experiment_${l.Sb}`]: b
						})), y && (j = Object(i.a)(j, {
							[`experiment_${l.Tb}`]: h
						})), O && (j = Object(i.a)(j, {
							[`experiment_${l.Ab}`]: "enabled"
						})), g && (j = Object(i.a)(j, {
							[l.ed]: g,
							uiMode: t
						})), v && (j = Object(i.a)(j, {
							[`experiment_${l.xe}`]: v
						})), d && (j = Object(i.a)(j, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== r.DEFAULT_LOCALE && e && (j = Object(i.a)(j, {
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
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				o = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = (e, t) => {
					let {
						post: n
					} = t;
					const s = n.belongsTo.id;
					if (!s) return null;
					const r = e.authorFlair.models[s];
					if (!r) return null;
					const o = n.author;
					return o && r[o] || null
				},
				r = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					return r ? r[s] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
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
				r = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				i = e => {
					var t, n, s, r;
					const a = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (r = null == a ? void 0 : a.assetUrls) || void 0 === r ? void 0 : r.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(o.a)(a.experimentRequired)(e) ? i : null
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
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
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
					const r = Object(a.Ab)(e, {
						userName: s
					});
					if (!r) return;
					const o = i(e, {
						subredditId: n
					});
					return o ? o[r.id] : void 0
				},
				l = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.features.banned.userOrder[n];
					return s ? s.map(t => e.features.banned.models[n][t]) : r.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(o.e)(n);
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
					return !!t && c(e, t) === r.eb.SkipOnboarding
				},
				m = e => {
					const t = l(e);
					return !!t && c(e, t) === r.eb.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/d2xTopNavRevamp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(r.c)(e, {
				experimentEligibilitySelector: o.Q,
				experimentName: s.Pc
			})
		},
		"./src/reddit/selectors/experiments/delayDnPermission.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.Sc.DnNoModal === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Db
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.Z, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(o.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: r.ed,
					throttledVariants: {
						[r.Wd.CurrentThrottled]: r.ed
					}
				}), i.a),
				m = e => e === r.Wd.CurrentThrottled,
				p = e => e === r.Wd.CurrentThrottled || e === r.Wd.CurrentUnthrottled || e === r.Wd.CurrentUnthrottledCopy || e === r.Wd.NewPopUnthrottledCopy,
				b = e => e === r.Wd.NewPopUnthrottledCopy,
				h = e => e === r.Wd.NewPageUnthrottledCopy || e === r.Wd.NewPageUnthrottledCopyFields,
				g = e => e === r.Wd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.Gb)
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
					experimentName: r.pe,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.se.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Bc,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.ad.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.qe.ContinuousScroll),
				b = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.re.Enabled),
				g = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.fc,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.qb.Enabled)
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
					experimentName: r.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === r.gb.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === r.hb.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.ac,
					experimentEligibilitySelector: a.e
				}), e => e === r.ib.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.bc,
					experimentEligibilitySelector: a.e
				}), e => e === r.jb.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.dc,
					experimentEligibilitySelector: a.e
				}), e => e === r.lb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.cc,
					experimentEligibilitySelector: a.e
				}), e => e === r.kb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentName: s.Je,
				experimentEligibilitySelector: r.a
			}) === s.Re.Enabled
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
						experimentName: s.gf
					}) === s.Od
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ff
					}) === s.Od
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ue
					}) === s.Od
				},
				l = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Te
					}) === s.Od
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
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.w.VoteCountOnly || t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
				},
				d = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.w.VoteCountOnly || t === s.w.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
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
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.s
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.w.VoteCountOnly || d === s.w.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.numComments >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.s
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.w.CommentCountOnly || d === s.w.VoteAndCommentCount
				},
				h = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.zc
					}) === s.Zc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.ef
				}) === s.Od
			}
		},
		"./src/reddit/selectors/features/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/matrixChat/index.ts");
			Object(s.a)({
				features: {
					matrixChat: r.c
				}
			});
			const o = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.url) || r.a.url
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.state) || r.a.state
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
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
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
					const s = Object(r.e)(n);
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
				}, (e, t) => t && (e === r.Sb.COMMENTS || e === r.Sb.SUBREDDIT))
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
			Object(s.a)(i.Eb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Eb, e => e && e.find(e => e === o.a.Apple)),
				d = Object(s.a)(i.Eb, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.f, r.o, r.q].includes(e))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
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
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(r.c)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
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
						this.store.then(e => e.dispatch(o.b(t)))
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
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
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
					r.a.read(() => {
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
			e.exports = JSON.parse('{"id":"0daddfa21bb8"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchLiveDiscoveryContent.json": function(e) {
			e.exports = JSON.parse('{"id":"213a7af0c982"}')
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
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/server/helpers/canonicalUrl.tsx");
			const o = e => {
					let {
						path: t,
						profileName: n,
						rest: r,
						queryParams: o
					} = e;
					const i = t.includes("posts") ? `/user/${n}/submitted` : `/user/${n}`,
						c = a(`${i}/${r||""}`);
					return Object(s.a)(c, o)
				},
				a = e => Object(r.a)(e.replace("posts", "submitted")),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.34e8f398aa2775239e77.js.map