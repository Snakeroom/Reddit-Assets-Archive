// https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba.28845741d45b99472531.js
// Retrieved at 6/15/2023, 2:00:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"], {
		"./src/lib/scroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				r = o("./src/lib/fastdom/index.ts"),
				s = o("./src/reddit/components/CommentSort/index.tsx"),
				c = o("./src/reddit/constants/elementIds.ts");
			const i = () => {
					r.a.write(() => {
						const e = document.getElementById(c.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				a = e => {
					r.a.read(() => {
						const t = e ? document.getElementById(c.e) : window,
							o = document.getElementById(s.a);
						if (t && o) {
							const n = e ? o.offsetTop : o.offsetTop - 50;
							r.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return be
			})), o.d(t, "r", (function() {
				return fe
			})), o.d(t, "p", (function() {
				return ge
			})), o.d(t, "t", (function() {
				return Ce
			})), o.d(t, "w", (function() {
				return ye
			})), o.d(t, "q", (function() {
				return Se
			})), o.d(t, "v", (function() {
				return ke
			})), o.d(t, "o", (function() {
				return we
			})), o.d(t, "m", (function() {
				return Ee
			})), o.d(t, "b", (function() {
				return Me
			})), o.d(t, "c", (function() {
				return Re
			})), o.d(t, "s", (function() {
				return De
			})), o.d(t, "g", (function() {
				return Le
			})), o.d(t, "h", (function() {
				return Ke
			})), o.d(t, "k", (function() {
				return Ae
			})), o.d(t, "e", (function() {
				return Be
			})), o.d(t, "d", (function() {
				return qe
			})), o.d(t, "a", (function() {
				return We
			})), o.d(t, "j", (function() {
				return Je
			})), o.d(t, "i", (function() {
				return Ve
			})), o.d(t, "l", (function() {
				return Ye
			})), o.d(t, "u", (function() {
				return Ze
			})), o.d(t, "n", (function() {
				return $e
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/lib/scroll/index.ts"),
				i = o("./src/reddit/actions/changeUsername.ts"),
				a = o("./src/reddit/actions/login.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/onboarding/index.ts"),
				m = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/postCreation/editorContent.ts"),
				p = o("./src/reddit/actions/shortcuts/utils.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/constants/adEvents.ts"),
				O = o("./src/reddit/constants/localStorage.ts"),
				f = o("./src/redditGQL/operations/CommentToxicity.json"),
				g = o("./src/lib/constants/index.ts"),
				j = o("./src/lib/makeApiRequest/index.ts"),
				x = o("./src/lib/makeGqlRequest/index.ts"),
				C = o("./src/lib/omitHeaders/index.ts"),
				y = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				S = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = o("./src/reddit/helpers/genericServerError/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				T = o("./src/reddit/models/PostCreationForm/index.ts"),
				E = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				M = o("./src/reddit/helpers/graphql/helpers.ts"),
				N = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				P = o("./src/redditGQL/operations/CreateComment.json");
			const R = (e, t, o, n) => {
					let r, s;
					if (n === T.i.MARKDOWN) r = o.text, s = null;
					else {
						r = null;
						let e = null;
						o.rteState && (e = y.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...f,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, o, n) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === T.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(j.a)(Object(C.a)(e, [S.a]), {
						method: g.ob.POST,
						endpoint: Object(v.a)(Object(E.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(_.a)()
					})
				}, L = async (e, t, o, n, r) => {
					const s = n.commentMode === T.i.MARKDOWN,
						c = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: s ? n.text : null,
								richText: s ? null : r
							}
						};
					return Object(x.a)(e, {
						...P,
						variables: {
							input: c
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(M.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(M.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(N.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(_.a)()
						}
					})
				};
			var K = o("./src/redditGQL/operations/UpdateComment.json");
			var A = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var F = o("./src/reddit/endpoints/post/index.tsx"),
				B = o("./src/reddit/endpoints/post/convert.ts"),
				H = o("./src/reddit/featureFlags/index.ts"),
				U = o("./src/reddit/helpers/comment/index.ts"),
				G = o("./src/reddit/helpers/correlationIdTracker.ts"),
				q = o("./src/reddit/helpers/dom/index.ts"),
				W = o("./src/reddit/helpers/localStorage/index.ts"),
				J = o("./src/reddit/helpers/sessionStorage/index.ts"),
				Q = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				z = o("./src/reddit/models/Comment/index.ts"),
				X = o("./src/reddit/models/PostDraft/index.ts"),
				V = o("./src/reddit/models/RichTextJson/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				Z = o("./src/reddit/models/Toast/index.ts"),
				$ = o("./src/reddit/selectors/chatPost.ts"),
				ee = o("./src/reddit/selectors/comments.ts"),
				te = o("./src/reddit/selectors/commentSelector.ts"),
				oe = o("./src/reddit/selectors/experiments/chat.ts"),
				ne = o("./src/reddit/constants/experiments.ts"),
				re = o("./src/reddit/helpers/chooseVariant/index.ts"),
				se = o("./node_modules/reselect/es/index.js");
			const ce = Object(se.a)(e => Object(re.c)(e, {
				experimentEligibilitySelector: re.a,
				experimentName: ne.Kb
			}), e => e === ne.Xd);
			var ie = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ae = o("./src/reddit/selectors/platform.ts"),
				de = o("./src/reddit/selectors/posts.ts"),
				le = o("./src/reddit/selectors/user.ts"),
				me = o("./src/reddit/actions/comment/index.ts"),
				ue = o("./src/reddit/actions/comment/constants.ts");
			const pe = Object(r.a)(ue.m),
				be = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const r = n();
						if (!!r.features.comments.drafts[o])
							if (Object(le.U)(r) && t) {
								const n = pe({
									hasFocus: t,
									draftKey: o
								});
								e(Object(i.startChangeUsernameFlow)(n))
							} else e(pe({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				he = Object(r.a)(ue.L),
				Oe = Object(r.a)(ue.H),
				fe = Object(r.a)(ue.N),
				ge = Object(r.a)(ue.M),
				je = Object(r.a)(ue.K),
				xe = async (e, t, o, n, r) => {
					const s = n.ok && n.body,
						c = s && s.comment && s.comment.id;
					await Q.g(e, o, t, r, c)
				}, Ce = "Toxicity_Warning__Modal", ye = e => async (t, o, n) => {
					let {
						gqlContext: r
					} = n;
					const s = o(),
						c = Object(ae.e)(s);
					let i = "";
					c && (i = c.name);
					const {
						formData: a,
						editorMode: l
					} = e;
					if (H.d.enableToxicityWarning(s)) {
						if (!(await R(r(), i, a, l))) return void t(Object(d.i)(Ce))
					}
					t(Se(e))
				}, Se = e => async (t, o) => {
					t(Object(d.g)(Ce));
					const n = o(),
						r = Object(ie.a)(n),
						s = Object(ie.c)(n);
					if (!n.user.account && r) {
						const o = Object(U.e)(e.formData, n.uploads),
							r = Object(U.d)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(_e(e, !1))
				};

			function ve(e, t) {
				return e === T.i.MARKDOWN && ce(t)
			}
			const _e = (e, t, o, r) => {
					let {
						postId: s,
						commentsPageKey: i,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u
					} = e;
					return async (e, O, f) => {
						let {
							apiContext: g,
							gqlContext: j
						} = f;
						var x;
						const C = O(),
							y = Object($.d)(C, {
								postId: s
							}),
							S = y ? Object(U.b)() : a,
							v = Object(te.f)(C, {
								commentId: S
							}),
							_ = Object(le.m)(C);
						if (!_) return;
						if (v && !y) return;
						t || e(he({
							draftKey: S,
							draft: d,
							commentsPageKey: i,
							optimisticComment: y ? Object(U.c)({
								temporalId: S,
								draft: d,
								post: Object(de.F)(C, {
									postId: s
								}),
								author: _,
								subredditId: (null === (x = Object(ae.e)(C)) || void 0 === x ? void 0 : x.id) || ""
							}) : void 0
						}));
						const k = d.commentMode;
						let w;
						const E = t && o ? o : Object(U.e)(d, C.uploads),
							I = Object(U.f)(E, C.uploads);
						if ((w = ve(k, C) ? await L(j(), s, null, d, E) : await D(g(), s, d, E)).ok) {
							const o = w.body;
							if (e(fe({
									...o,
									headCommentId: Object(ee.w)(C, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: S,
									upload: I
								})), t) {
								const e = Object(ae.i)(C);
								Object(c.a)(!!e)
							}
							const n = Object(de.F)(O(), {
								postId: s
							});
							e(Object(m.y)(n, h.a.CommentSubmitted))
						} else {
							if (w.error) {
								const e = t && r ? r : Object(U.d)(d, C.uploads);
								Q.f({
									state: C,
									bodyText: e,
									postId: s,
									error: w.error,
									uploadMetadata: null == I ? void 0 : I.metadata
								})
							}
							const o = w.error && w.error.fields && w.error.fields[0] ? w.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(je({
								draftKey: S,
								error: w.error
							})), y || e(Object(b.f)({
								duration: b.a,
								kind: Z.b.Error,
								text: o
							}))
						}
						xe(O(), i, l, w, null == I ? void 0 : I.metadata).then(() => w.ok && l === T.i.RICH_TEXT ? Object(G.b)(G.a.CommentComposer) : void 0), u || Object(p.d)(), t && Object(J.a)()
					}
				},
				ke = e => async (t, o, n) => {
					let {
						gqlContext: r
					} = n;
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: i,
						draftKey: a,
						formData: l,
						editorMode: m
					} = e, u = o(), p = Object(ae.e)(u);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(u)) {
						if (!(await R(r(), b, l, m))) return void t(Object(d.i)(Ce))
					}
					t(we({
						commentsPageKey: c,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: l,
						editorMode: m
					}))
				}, we = e => async (t, o) => {
					t(Object(d.g)(Ce));
					const n = o(),
						r = Object(ie.a)(n),
						s = Object(ie.c)(n);
					if (!n.user.account && r) {
						const o = Object(U.e)(e.formData, n.uploads),
							r = Object(U.d)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(Te(e, !1))
				}, Te = (e, t, o, n) => async (r, s, i) => {
					let {
						apiContext: a,
						gqlContext: d
					} = i;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: b,
						draftKey: h,
						formData: O,
						editorMode: f
					} = e, g = s(), j = Object(te.c)(g, {
						commentId: m
					}), x = j && Object($.d)(g, {
						postId: j.postId
					}) && Object(oe.e)(g), C = j && Object($.d)(g, {
						postId: j.postId
					}), y = C ? Object(U.b)() : h, S = Object(te.f)(g, {
						commentId: y
					}), v = Object(le.m)(g);
					if (!v) return;
					if (S && !C) return;
					t || r(he({
						draftKey: y,
						draft: O,
						commentsPageKey: u,
						optimisticComment: C && j ? Object(U.c)({
							temporalId: y,
							draft: O,
							post: Object(de.F)(g, {
								postId: j.postId
							}),
							author: v,
							subredditId: (null === (l = Object(ae.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: j.id
						}) : void 0
					})), x || r(Me({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const _ = O.commentMode,
						k = t && o ? o : Object(U.e)(O, g.uploads),
						w = Object(U.f)(k, g.uploads);
					let T;
					if ((T = ve(_, g) ? await L(d(), null, m, O, k) : await D(a(), m, O, k)).ok) {
						if (r(ge({
								...T.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: b + 1,
								upload: w
							})), t) {
							const e = Object(ae.i)(g);
							Object(c.a)(!!e)
						}
					} else {
						if (T.error) {
							if (!j) return;
							const e = t && n ? n : Object(U.d)(O, g.uploads);
							Q.f({
								state: g,
								bodyText: e,
								postId: j.postId,
								parentId: m,
								error: T.error,
								uploadMetadata: null == w ? void 0 : w.metadata
							})
						}
						r(je({
							draftKey: y,
							error: T.error
						}))
					}
					xe(s(), u, f, T, null == w ? void 0 : w.metadata), x || Object(p.d)(), t && Object(J.a)()
				}, Ee = () => async e => {
					const t = Object(J.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: r,
								richTextJSONData: s,
								commentBodyText: c
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(l.skipOnboardingModal)()), r ? await e(_e({
							...t.comment,
							postId: r
						}, !0, s, c)) : n && void 0 !== o && await e(Te({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, s, c))
					}
				}, Ie = Object(r.a)(ue.s), Me = Object(r.a)(ue.r), Ne = Object(r.a)(ue.n), Pe = (Object(r.a)(ue.i), Object(r.a)(ue.o)), Re = (Object(r.a)(ue.v), (e, t, o) => async (r, s, c) => {
					let {
						apiContext: i
					} = c;
					const a = e === T.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(V.H)(t)) r(Pe({
						editorMode: e,
						draftKey: o,
						content: a ? V.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(o));
						const s = await Object(B.a)(i(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(o)), r(Pe({
								editorMode: e,
								draftKey: o,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(o)), r(Object(b.f)({
							duration: b.a,
							kind: Z.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), De = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, r) => {
						const c = r(),
							l = Object(s.a)(X.c.replyToComment, o);
						if (!Object(le.S)(r()) && !Object(ie.a)(c)) return e(Object(a.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ee.m)(r(), {
								commentId: o
							})
						}));
						const m = c.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(Me({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const h = c.user.prefs.commentMode,
							O = Object(q.d)();
						if (O) {
							const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === T.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Y.s(e, null)).map(e => Y.l([e])),
									o = Y.s("", null),
									n = Y.l([o]);
								b = {
									document: [Y.c(t), n]
								}
							}
						}
						const f = c.features.comments.drafts[l];
						let g;
						if (g = O ? {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(le.U)(c)) {
							const n = Ie({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: l,
								formData: g
							});
							e(Object(i.startChangeUsernameFlow)(n))
						} else e(Ie({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: l,
							formData: g
						}))
					}
				}, Le = e => async t => {
					t(Object(me.r)(e)), t(Be(e))
				}, Ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Me({
							parentCommentId: t,
							commentsPageKey: o
						})), e(De({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(me.r)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Ae = (e, t) => o => o(Ne({
					draftKey: e,
					formData: t
				})), Fe = Object(r.a)(ue.u), Be = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: r,
						text: s
					} = e;
					return async (e, c) => {
						const i = c();
						i.user.account && (Q.c(i), e(Fe({
							commentId: t,
							commentsPageKey: n,
							draftKey: r,
							formData: {
								text: s,
								commentMode: o,
								rteState: null,
								draftType: X.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(r.a)(ue.F), Ue = Object(r.a)(ue.E), Ge = Object(r.a)(ue.G), qe = Object(r.a)(ue.j), We = Object(r.a)(ue.f), Je = e => {
					let {
						id: t,
						commentsPageKey: o,
						draftKey: n,
						formData: r
					} = e;
					return async (e, s, c) => {
						let {
							apiContext: i,
							gqlContext: a
						} = c;
						const d = s();
						if (!d.user.account) return;
						e(He({
							draftKey: n
						})), Q.d(d);
						const l = Object(U.e)(r, d.uploads),
							m = r.commentMode;
						let u;
						if ((u = ve(m, d) ? await (async (e, t, o, n, r) => {
								const s = r === T.i.MARKDOWN,
									c = {
										commentId: t,
										content: {
											markdown: s ? o.text : null,
											richText: s ? null : n
										}
									};
								return Object(x.a)(e, {
									...K,
									variables: {
										input: c
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(M.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(M.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(N.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(_.a)()
									}
								})
							})(a(), t, r, l, m) : await (async (e, t, o, n, r) => {
								const s = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === T.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(j.a)(Object(C.a)(e, [S.a]), {
									endpoint: Object(v.a)(Object(I.a)(Object(E.a)(`${e.apiUrl}/api/editusertext`))),
									method: g.ob.POST,
									data: s
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(_.a)()
								})
							})(i(), t, r, l, m)).ok) {
							const r = u.body;
							e(Ge({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(me.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(Ue({
							draftKey: n,
							error: u.error
						}))
					}
				}, Qe = Object(r.a)(ue.C), ze = Object(r.a)(ue.B), Xe = Object(r.a)(ue.D), Ve = (e, t) => async (o, n, r) => {
					let {
						apiContext: s
					} = r;
					const c = n();
					o(Qe({
						id: e
					})), Q.a(e, c);
					const i = await ((e, t) => Object(j.a)(Object(C.a)(e, [S.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: g.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(_.a)()
					}))(s(), e);
					i.ok ? o(Xe({
						id: e,
						postId: t
					})) : o(ze({
						id: e,
						error: i.error
					}))
				}, Ye = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(me.j)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(F.p)(r(), e, s)).ok || t(Object(me.j)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Ze = (e, t) => async (o, r, s) => {
					let {
						gqlContext: c
					} = s;
					var i, a, d, l, m, u;
					o(Object(me.c)());
					const p = e => Object(b.f)(Object(b.e)(e, Z.b.Error));
					if (((null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === O.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = t === z.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(me.p)(i)), (await ((e, t) => Object(x.a)(e, {
								...A,
								variables: {
									input: t
								}
							}))(c(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(W.yb)(null !== (m = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = s ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(b.f)({
								kind: Z.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(me.p)(i)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function $e(e) {
				let {
					commentId: t,
					commentsPageKey: o
				} = e;
				return async (e, n) => {
					const r = n(),
						s = Object(te.c)(r, {
							commentId: t
						});
					if (!s) return;
					e(Oe({
						commentId: t,
						commentsPageKey: o
					}));
					const c = {
						commentMode: s.media.rteMode,
						draftType: s.parentId ? X.c.replyToComment : X.c.replyToPost,
						rtJson: s.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (s.parentId) {
						const t = Object(te.c)(r, {
								commentId: s.parentId
							}),
							n = Object(ee.j)(r, {
								commentId: s.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(we({
							commentsPageKey: o,
							draftKey: s.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: c,
							editorMode: s.media.rteMode
						}))
					} else await e(Se({
						postId: s.postId,
						commentsPageKey: o,
						draftKey: s.id,
						formData: c,
						editorMode: s.media.rteMode,
						disableAutofocus: !0
					}))
				}
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "d", (function() {
				return O
			})), o.d(t, "c", (function() {
				return f
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/endpoints/post/convert.ts"),
				i = o("./src/reddit/helpers/localStorage/index.ts"),
				a = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(u.H),
				b = Object(r.a)(u.p),
				h = Object(r.a)(u.R),
				O = (e, t, o) => async (r, i, O) => {
					let {
						apiContext: g
					} = O;
					a.m(i(), t);
					const j = t === d.i.MARKDOWN,
						x = t === d.i.RICH_TEXT,
						C = u.k;
					if (j && Object(l.H)(o)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (x && !o) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(f(t));
					r(p(C));
					const y = await Object(c.a)(g(), t, j ? JSON.stringify(o) : o);
					y.ok ? (r(b(C)), r(h({
						editorKey: e,
						editorMode: t,
						content: y.body.output
					})), r(f(t))) : (r(b(C)), r(Object(s.f)({
						duration: s.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, o) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const c = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === c) return;
					const a = e === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(i.wb)(r + 1)
				}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, o) {
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
				commentSearchMargin: "_2_QzTCgd5SYB-X8CTqZf9T",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				paddingBottom: "_233thT4kQqtwrHDoMY0Dbv",
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
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				verticalDivider: "_3v-KNQB_UvJqSbWcQZmc0U"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return $
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/lib/makeApiRequest/index.ts"),
				O = o("./src/lib/omitHeaders/index.ts"),
				f = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/Toast/index.ts");
			const j = (e, t) => async (o, r, s) => {
				let {
					apiContext: c
				} = s;
				const i = await (async (e, t, o) => Object(h.a)(Object(O.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: o
						}
					}))(c(), e, t),
					a = `error-block-${t}`,
					l = `success-block-${t}`;
				if (i.ok) {
					o(Object(p.Q)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					o(b.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: r
					}))
				} else o(b.f({
					id: a,
					kind: g.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: j(e, t)
				}))
			};
			var x = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				S = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				v = o("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				_ = o("./src/reddit/components/TrackingHelper/index.tsx"),
				k = o("./src/reddit/contexts/PageLayer/index.tsx"),
				w = o("./src/reddit/controls/Dropdown/index.tsx"),
				T = o("./src/reddit/controls/Dropdown/Row.tsx"),
				E = o("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				I = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				M = o("./src/reddit/helpers/path/index.ts"),
				N = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const P = (e, t, o, n, r) => s => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.z)(s, void 0, {
						oldSort: o,
						sort: n,
						source: r
					}),
					userSubreddit: Object(N.ub)(s)
				}),
				R = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				D = e => ({
					subreddit: Object(N.lb)(e),
					userSubreddit: Object(N.ub)(e)
				}),
				L = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...D
				});
			var K = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = o("./src/reddit/icons/svgs/Info/index.tsx"),
				F = o("./src/reddit/selectors/activeModalId.ts"),
				B = o("./src/reddit/selectors/comments.ts"),
				H = o("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				U = o("./src/reddit/selectors/moderatorPermissions.ts"),
				G = o("./src/reddit/selectors/posts.ts"),
				q = o("./src/reddit/selectors/tooltip.ts"),
				W = o("./src/reddit/selectors/user.ts"),
				J = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				Q = o.n(J),
				z = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const X = Object(S.a)(w.a),
				V = e => e === z.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === z.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== z.a.None) {
							e(t === z.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", z.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", z.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", z.a.None)
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
						onOpen: o,
						selectedSort: r
					} = this.props;
					return s.a.createElement("div", {
						className: Q.a.HighlightWrapper
					}, s.a.createElement(T.b, {
						className: Object(a.a)(Q.a.HighlightPicker, Q.a.Row),
						textClassName: Q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${V(r)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), s.a.createElement(K.b, {
						className: Q.a.DropdownTriangle,
						onClick: o
					}), s.a.createElement(X, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, s.a.createElement(T.b, {
						displayText: V(z.a.First),
						isSelected: r === z.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(T.b, {
						displayText: V(z.a.Last),
						isSelected: r === z.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(T.b, {
						displayText: V(z.a.None),
						isSelected: r === z.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = Y;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				oe = Object(S.a)(w.a),
				ne = Object(k.v)(),
				re = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(B.m)(e, {
							commentId: o
						})
					},
					commentSearchPdp: e => Object(H.a)(e),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(q.b)($),
					highlightIsOpen: Object(q.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(U.m)(e, {
							postId: o
						});
						return !!n && n.posts
					},
					post: G.F,
					postPermalink: G.E,
					showCommentHighlighter: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(W.x)(e),
							r = !!Object(U.m)(e, {
								postId: o
							}),
							s = Object(G.F)(e, {
								postId: o
							});
						return (r || n) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: B.p
				}),
				se = Object(c.b)(re, (e, t) => {
					let {
						postId: o
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(j(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.V)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ce extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(P(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(R("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(L(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					var e;
					const {
						changeHighlightSort: t,
						className: o,
						commentId: r,
						commentPermalink: c,
						commentSearchPdp: i,
						contestModeModalIsOpen: l,
						dropdownIsOpen: m,
						elementRef: u,
						hideTooltip: p,
						highlightIsOpen: b,
						hasModeratorPostPermissions: h,
						isOverlay: O,
						location: f,
						pageLayer: g,
						post: j,
						postPermalink: S,
						selectedHighlightSort: _,
						showCommentHighlighter: k,
						sort: w,
						suggestedSort: N,
						showTooltip: P,
						toggleContestModeModal: D
					} = this.props, L = j.contestMode, F = null == r, B = i.bucketed && Object(v.a)(g) && Object(v.b)(j), H = i.bucketed && Object(v.b)(j) && F, U = !(null === (e = f.search) || void 0 === e ? void 0 : e.includes(d.v.CONFIDENCE)), G = w === d.v.CONFIDENCE && U, q = h && !G, W = d.x[w], J = W ? W() : "", z = N && w === N && !G ? this.addSuggestedLabel(J) : J, X = L ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), V = L ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), Y = L ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), ne = L && !h, re = s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Q.a.DropdownContainer
					}, s.a.createElement(T.b, {
						className: Object(a.a)(Q.a.SortPicker, Q.a.Row),
						textClassName: Q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${z}`,
						id: $,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(K.b, {
						className: Q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), s.a.createElement(oe, {
						isOpen: m,
						tooltipId: $
					}, [d.v.CONFIDENCE, d.v.TOP, d.v.NEW, d.v.CONTROVERSIAL, d.v.OLD, d.v.QA].map(e => {
						const t = c || S,
							o = Object(M.b)(t),
							n = d.x[e],
							r = n ? n() : "";
						return s.a.createElement(y.a, {
							className: Q.a.ViewFullLinkOrOverlayLink,
							isOverlay: O,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, s.a.createElement(T.b, {
							displayText: r,
							isSelected: w === e,
							skipRoleAttr: !0
						}))
					})));
					return s.a.createElement("div", {
						className: Object(a.a)(o, Q.a.container, {
							[Q.a.hideCommentSort]: !k && ne,
							[Q.a.paddingBottom]: B
						}),
						ref: u
					}, s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Q.a.containerRow
					}, !ne && !B && re, q && !ne && !B && (N ? s.a.createElement("button", {
						className: Q.a.SortLink,
						onClick: w !== N ? this.setSortOnClick : this.clearSortOnClick
					}, w !== N ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : s.a.createElement("button", {
						className: Q.a.SetSort
					}, s.a.createElement("button", {
						className: Q.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), s.a.createElement("span", {
						id: te,
						onMouseEnter: P,
						onMouseLeave: p
					}, s.a.createElement(C.c, {
						className: Q.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), s.a.createElement(A.a, {
						className: Q.a.Info
					})))), h && s.a.createElement("button", {
						className: Object(a.a)(Q.a.ContestMode, B && Q.a.commentSearchMargin),
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), s.a.createElement(I.a, {
						className: Q.a.ToggleSwitch,
						on: L
					})), B || H ? s.a.createElement("div", {
						className: Q.a.containerRow
					}, !B && s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
						className: Q.a.verticalDivider
					}, "|")), s.a.createElement("div", null, s.a.createElement(E.c, {
						experiment: i,
						commentId: r,
						prevLocation: f,
						postId: this.props.postId
					}))) : null), k && s.a.createElement("div", {
						className: Q.a.containerRow
					}, s.a.createElement(Z, {
						changeHighlightSort: t,
						highlightIsOpen: b,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: _,
						trackHighlight: R
					})), l && s.a.createElement(x.a, {
						actionText: V,
						headerText: X,
						modalText: Y,
						onConfirm: this.setContestMode,
						toggleModal: D,
						withOverlay: !0
					})))
				}
			}
			t.b = ne(se(Object(_.c)(ce)))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = o("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: o,
					to: n,
					...s
				} = e, d = Object(i.b)(n);
				return r.a.createElement(c.a, a({
					className: o,
					to: d
				}, s), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...o
				} = e, n = t ? d : s.a;
				return r.a.createElement(n, l({}, o, {
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}), o.children)
			}
		},
		"./src/reddit/controls/Search/CommentSearch/index.m.less": function(e, t, o) {
			e.exports = {
				absolute: "_3JOs2fo7GARfPQK9n9uvyr",
				actionFont: "_2GiazGbWQeG84CupoExWj9",
				dismissButton: "_2lSQO1uFdnaWbYRKtLg3H-",
				metadataFont: "_1Vs6ZQxgSSIBCGCe2dcMoA",
				flex: "_1qRmLv2PYGtqa3xyVEYz_R",
				input: "_2WVAyd_SvtylHMe7sKaua9",
				linkTextColor: "_1zG8KFMibgWr8ahovOZAUB",
				paddingIcon: "_2i3sQHj_1l-LDzGfzQTjHM",
				postIcon: "_1rMy-IddyxrWMGR5hH5O1E",
				relative: "_3AIIvG4My2zfaJh7r8TucE",
				verticalDivider: "_34BFzBLxzKlRZTjBIHtnlh",
				dismissIcon: "_1Z_UNdjZZu53GD24SI5BLG",
				searchIcon: "_380giGvmbbYVTkgLoNx7ZP"
			}
		},
		"./src/reddit/controls/Search/CommentSearch/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return E
			})), o.d(t, "b", (function() {
				return I
			})), o.d(t, "d", (function() {
				return P
			})), o.d(t, "c", (function() {
				return R
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/react-router-redux/es/index.js"),
				a = o("./src/lib/addQueryParams/index.ts"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/constants/index.ts"),
				m = o("./src/lib/makeSearchKey/index.ts"),
				u = o("./src/reddit/actions/pages/search/index.ts"),
				p = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/constants/parameters.ts"),
				h = o("./src/reddit/contexts/PageLayer/index.tsx"),
				O = o("./src/reddit/helpers/path/index.ts"),
				f = o("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				g = o("./src/reddit/helpers/search/searchImpressionId.ts"),
				j = o("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				x = o("./src/reddit/helpers/trackers/searchResults.ts"),
				C = o("./src/reddit/hooks/usePageLayer.ts"),
				y = o("./src/reddit/hooks/useTracking.ts"),
				S = o("./src/reddit/icons/fonts/index.tsx"),
				v = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/telemetry.ts"),
				k = o("./src/reddit/selectors/user.ts"),
				w = o("./src/reddit/controls/Search/CommentSearch/index.m.less"),
				T = o.n(w);
			const E = "comment_search-bar",
				I = "comment-search-button",
				M = "search-bar-dismiss-button",
				N = "COMMENT_SEARCH_BAR_TEST_ID";

			function P(e) {
				let {
					searchValue: t,
					post: o,
					subreddit: n
				} = e;
				return {
					[b.w]: t,
					[b.I]: [l.ic.Comments]
				}
			}

			function R(e) {
				const {
					expanded: t,
					bucketed: o,
					collapsed: l
				} = e.experiment, b = Object(C.a)(), w = Object(y.a)(), R = (null == b ? void 0 : b.queryParams.q) || "", [D, L] = Object(r.useState)(R), [K, A] = Object(r.useState)(t), F = Object(c.d)(), B = Object(r.useRef)(null), H = Object(c.e)(e => Object(h.h)(e, {
					pageLayer: b
				})), U = Object(c.e)(e => Object(h.s)(e, {
					pageLayer: b
				})), G = Object(c.e)(e => Object(k.mb)(e)), q = Object(c.e)(e => Object(k.rb)(e)), W = Object(c.e)(e => Object(v.i)(e));
				var J, Q, z;

				function X() {
					var t;
					if (!D.trim() || !H) return;
					const o = new URL(H.permalink).pathname,
						n = P({
							searchValue: D,
							post: H,
							subreddit: U
						});
					f.a.set(_.a.CommentSearchBar), w(Object(x.o)(x.a.FULL_SEARCH_BUTTON, n, j.a.PdpCommentSearchBar, b || void 0));
					const r = Object(m.b)(H.id, void 0, n, G && q);
					F(Object(u.d)({
						key: r,
						options: n,
						subredditName: null == U ? void 0 : U.name,
						postId: H.id
					}));
					const s = Object(a.a)(o, n);
					F(Object(i.b)(Object(O.b)(s), {
						...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state,
						isOverlay: W,
						scrollOnLoad: !0
					}))
				}
				return J = B, Q = A, z = l, Object(r.useEffect)(() => {
					if (z) return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					};

					function e(e) {
						J.current && !J.current.contains(e.target) && Q(!1)
					}
				}, [J]), o ? s.a.createElement("div", {
					className: T.a.flex
				}, D || K ? s.a.createElement("div", {
					"data-testid": E
				}, s.a.createElement("label", {
					className: Object(d.a)(T.a.flex, T.a.relative)
				}, s.a.createElement("div", {
					className: T.a.absolute,
					role: "submit",
					onClick: X
				}, s.a.createElement(S.a, {
					className: Object(d.a)(T.a.postIcon, T.a.paddingIcon),
					name: "search"
				})), s.a.createElement("input", {
					className: Object(d.a)(T.a.metadataFont, T.a.input),
					"data-testid": N,
					id: E,
					type: "search",
					onChange: e => {
						g.a.update(j.a.PdpCommentSearchBar), L(e.target.value)
					},
					onFocus: function() {
						g.a.update(j.a.PdpCommentSearchBar), f.a.set(_.a.CommentSearchBar), w(Object(x.o)(x.a.SEARCH_BAR, P({
							searchValue: D,
							post: H,
							subreddit: U
						}), j.a.PdpCommentSearchBar, b || void 0))
					},
					onKeyPress: function(e) {
						e.key === p.b.Enter && X()
					},
					placeholder: n.fbt._("Search comments", null, {
						hk: "2ObH7B"
					}),
					ref: B,
					value: D
				}), D && s.a.createElement("button", {
					"aria-label": n.fbt._("Remove search bar text", null, {
						hk: "4twCsS"
					}),
					id: M,
					className: T.a.dismissButton,
					"data-testid": M,
					onClick: () => {
						L("")
					}
				}, s.a.createElement(S.a, {
					className: T.a.dismissIcon,
					name: "clear"
				})))) : s.a.createElement("button", {
					className: T.a.linkTextColor,
					"data-testid": I,
					id: I,
					onClick: () => {
						Promise.resolve(A(!0)).then(() => {
							var e;
							return null === (e = B.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, s.a.createElement(S.a, {
					className: Object(d.a)(T.a.searchIcon, T.a.paddingIcon),
					name: "search"
				}), s.a.createElement("span", {
					className: T.a.actionFont
				}, n.fbt._("Search comments", null, {
					hk: "2ObH7B"
				})))) : null
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, o) {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/controls/Button/index.tsx"),
				i = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = o.n(i);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || c.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(s.a)(a.a.toggleSwitch, e.className, {
						[a.a.xs]: o === c.d.XS,
						[a.a.s]: o === c.d.S,
						[a.a.m]: o === c.d.M,
						[a.a.l]: o === c.d.L,
						[a.a.xl]: o === c.d.XL,
						[a.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[a.a.mDisabled]: e.disabled,
						[a.a.redditStyle]: e.redditStyle
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
					className: a.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return c
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "g", (function() {
				return a
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/lodash/map.js"),
				r = o.n(n),
				s = o("./src/lib/FocusTrap/index.ts");
			const c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				i = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				a = (e, t) => {
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				d = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!a(o, e)) return;
					const {
						startContainer: n,
						startOffset: r,
						endContainer: s,
						endOffset: c
					} = o, i = document.createRange();
					i.selectNode(e);
					let d = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, o) && (i.setStart(n, r), d = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, o) && (i.setEnd(s, c), d = !1), d) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				l = (e, t, o) => {
					let n = e;
					for (; n && (!o || !o(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				m = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				u = e => {
					e.querySelectorAll(s.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.K.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "d", (function() {
					return s
				})), o.d(t, "b", (function() {
					return c
				})), o.d(t, "a", (function() {
					return i
				})), o.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
			const r = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				s = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				c = () => r(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!r(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return p
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "e", (function() {
				return O
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "d", (function() {
				return j
			})), o.d(t, "h", (function() {
				return x
			})), o.d(t, "k", (function() {
				return C
			})), o.d(t, "j", (function() {
				return y
			})), o.d(t, "i", (function() {
				return S
			})), o.d(t, "l", (function() {
				return v
			}));
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				c = o("./src/reddit/models/PostDraft/index.ts"),
				i = o("./src/reddit/selectors/comments.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				l = o("./src/telemetry/index.ts"),
				m = o("./src/reddit/constants/richTextJson.ts");
			const u = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: r.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.cb)(e),
						subreddit: Object(d.lb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				p = async (e, t, n, r, s) => {
					const c = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(i.j)(e, c) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = r ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...u(e),
						comment: s ? Object(d.h)({
							state: e,
							commentId: s,
							contentType: p
						}) : null,
						listing: Object(d.z)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e),
						media: {
							mimetype: null == r ? void 0 : r.mimetype,
							size: null == r ? void 0 : r.size
						}
					})
				}, b = e => {
					let {
						state: t,
						bodyText: o,
						postId: r,
						error: s,
						parentId: c,
						uploadMetadata: i
					} = e;
					const a = u(t),
						d = s.type === n.Qb ? "karma_rate_limit" : s.fields && s.fields.length > 0 ? s.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${m.d}`)
						}("string" == typeof o ? o : JSON.stringify(o)) ? "giphy" : void 0;
					return Object(l.a)({
						...a,
						source: s.type === n.Qb ? "backend" : "comment_composer",
						actionInfo: {
							...a.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: o,
							parentId: c,
							postId: r,
							contentType: p
						},
						media: {
							mimetype: null == i ? void 0 : i.mimetype,
							size: null == i ? void 0 : i.size
						}
					})
				}, h = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), O = (e, t) => {
					t === c.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(e)
					})
				}, f = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.cb)(t),
					subreddit: Object(d.lb)(t),
					post: Object(d.K)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), j = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), x = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...u(o),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, C = () => e => ({
					...u(e),
					action: "open",
					noun: "gif_tooltip"
				}), y = e => t => ({
					...u(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), S = () => e => ({
					...u(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), v = () => e => ({
					...u(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = o.n(c);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: o,
					...n
				} = e;
				return r.a.createElement("svg", a({
					className: Object(s.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
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
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				c = o("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(n.a)((e, t) => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), c.a),
				d = e => i.find(t => !!Object(c.a)(a(e, t))),
				l = Object(n.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === r.Y.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === r.Y.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"f0b0ca6701b9"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba.28845741d45b99472531.js.map