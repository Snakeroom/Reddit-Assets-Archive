// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.651d646955e87d70b600.js
// Retrieved at 11/7/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : s)(e, r(t, 3))
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/domUtils/index.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const c = () => {
					r.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(o.c)(e, 0) : Object(o.c)(document, 0)
					})
				},
				a = e => {
					r.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							n = document.getElementById(s.a);
						if (t && n) {
							const o = e ? n.offsetTop : n.offsetTop - 50;
							r.a.write(() => t.scrollTo({
								top: o,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return he
			})), n.d(t, "r", (function() {
				return ge
			})), n.d(t, "p", (function() {
				return je
			})), n.d(t, "t", (function() {
				return Ce
			})), n.d(t, "w", (function() {
				return ve
			})), n.d(t, "q", (function() {
				return Se
			})), n.d(t, "v", (function() {
				return Ie
			})), n.d(t, "o", (function() {
				return we
			})), n.d(t, "m", (function() {
				return Ee
			})), n.d(t, "b", (function() {
				return Re
			})), n.d(t, "c", (function() {
				return De
			})), n.d(t, "s", (function() {
				return Le
			})), n.d(t, "g", (function() {
				return Ae
			})), n.d(t, "h", (function() {
				return Ke
			})), n.d(t, "k", (function() {
				return Fe
			})), n.d(t, "e", (function() {
				return Be
			})), n.d(t, "d", (function() {
				return qe
			})), n.d(t, "a", (function() {
				return Je
			})), n.d(t, "j", (function() {
				return ze
			})), n.d(t, "i", (function() {
				return $e
			})), n.d(t, "l", (function() {
				return Ye
			})), n.d(t, "u", (function() {
				return Ze
			})), n.d(t, "n", (function() {
				return et
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/constants/localStorage.ts"),
				g = n("./src/redditGQL/operations/CommentToxicity.json"),
				j = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				S = n("./src/reddit/constants/headers.ts"),
				k = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = n("./src/reddit/helpers/graphql/helpers.ts"),
				P = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				M = n("./src/redditGQL/operations/CreateComment.json");
			const D = (e, t, n, o) => {
					let r, s;
					if (o === T.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = v.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, o) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === T.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = o), Object(x.a)(Object(C.a)(e, [S.a]), {
						method: j.ob.POST,
						endpoint: Object(k.a)(Object(E.a)(Object(N.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(I.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(I.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(_.a)()
					})
				}, A = async (e, t, n, o, r) => {
					const s = o.commentMode === T.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: s ? o.text : null,
								richText: s ? null : r
							}
						};
					return Object(y.a)(e, {
						...M,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(P.a)(t.commentInfo)
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
			var K = n("./src/redditGQL/operations/UpdateComment.json");
			var F = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = n("./src/reddit/endpoints/post/index.tsx"),
				B = n("./src/reddit/endpoints/post/convert.ts"),
				H = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				W = n("./src/reddit/featureFlags/index.ts"),
				G = n("./src/reddit/helpers/comment/index.ts"),
				q = n("./src/reddit/helpers/correlationIdTracker.ts"),
				J = n("./src/reddit/helpers/dom/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				Q = n("./src/reddit/helpers/sessionStorage/index.ts"),
				V = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				X = n("./src/reddit/models/Comment/index.ts"),
				$ = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/RichTextJson/index.ts"),
				Z = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				oe = n("./src/reddit/selectors/commentSelector.ts"),
				re = n("./src/reddit/constants/experiments.ts"),
				se = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./node_modules/reselect/es/index.js");
			const ce = Object(ie.a)(e => Object(se.c)(e, {
				experimentEligibilitySelector: se.a,
				experimentName: re.Db
			}), e => e === re.Od);
			var ae = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = n("./src/reddit/selectors/platform.ts"),
				le = n("./src/reddit/selectors/posts.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				ue = n("./src/reddit/actions/comment/index.ts"),
				pe = n("./src/reddit/actions/comment/constants.ts");
			const be = Object(r.a)(pe.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, o) => {
						const r = o();
						if (!!r.features.comments.drafts[n])
							if (Object(me.T)(r) && t) {
								const o = be({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(o))
							} else e(be({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				fe = Object(r.a)(pe.L),
				Oe = Object(r.a)(pe.H),
				ge = Object(r.a)(pe.N),
				je = Object(r.a)(pe.M),
				xe = Object(r.a)(pe.K),
				ye = async (e, t, n, o, r) => {
					const s = o.ok && o.body,
						i = s && s.comment && s.comment.id;
					await V.g(e, n, t, r, i)
				}, Ce = "Toxicity_Warning__Modal", ve = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const s = n(),
						i = Object(de.e)(s);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: l
					} = e;
					if (W.d.enableToxicityWarning(s)) {
						if (!(await D(r(), c, a, l))) return void t(Object(d.i)(Ce))
					}
					t(Se(e))
				}, Se = e => async (t, n) => {
					t(Object(d.g)(Ce));
					const o = n(),
						r = Object(ae.a)(o),
						s = Object(ae.c)(o);
					if (!o.user.account && r) {
						const n = Object(G.e)(e.formData, o.uploads),
							r = Object(G.c)(e.formData, o.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(Q.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(_e(e, !1))
				};

			function ke(e, t) {
				return e === T.i.MARKDOWN && ce(t)
			}
			const _e = (e, t, n, r) => {
					let {
						postId: s,
						commentsPageKey: c,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u,
						isLiveStreaming: O
					} = e;
					return async (e, g, j) => {
						let {
							apiContext: x,
							gqlContext: y
						} = j;
						var C;
						const v = g(),
							S = Object(te.d)(v, {
								postId: s
							}),
							k = S ? Object(G.a)() : a,
							_ = Object(oe.e)(v, {
								commentId: k
							}),
							I = Object(me.l)(v);
						if (!I) return;
						if (_ && !S) return;
						t || e(fe({
							draftKey: k,
							draft: d,
							commentsPageKey: c,
							optimisticComment: S ? Object(G.b)({
								temporalId: k,
								draft: d,
								post: Object(le.G)(v, {
									postId: s
								}),
								author: I,
								subredditId: (null === (C = Object(de.e)(v)) || void 0 === C ? void 0 : C.id) || ""
							}) : void 0
						}));
						const w = I.displayText,
							E = d.commentMode;
						let N;
						const R = O ? "" : t && n ? n : Object(G.e)(d, v.uploads),
							P = Object(G.f)(R, v.uploads);
						if (O ? (N = await Object(H.i)(x(), s, d, w), e(Object(p.a)({
								streamId: s,
								level: N.body.automuteLevel
							}))) : N = ke(E, v) ? await A(y(), s, null, d, R) : await L(x(), s, d, R), N.ok) {
							let n;
							if (n = N.body, e(ge({
									...n,
									headCommentId: Object(ne.w)(v, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: k,
									upload: P
								})), t) {
								const e = Object(de.j)(v);
								Object(i.a)(!!e)
							}
							const o = Object(le.G)(g(), {
								postId: s
							});
							e(Object(m.y)(o, f.a.CommentSubmitted))
						} else {
							if (N.error) {
								const e = t && r ? r : Object(G.c)(d, v.uploads);
								V.f({
									state: v,
									bodyText: e,
									postId: s,
									error: N.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const n = N.error && N.error.fields && N.error.fields[0] ? N.error.fields[0].msg : o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(xe({
								draftKey: k,
								error: N.error
							})), S || e(Object(h.f)({
								duration: h.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						ye(g(), c, l, N, null == P ? void 0 : P.metadata).then(() => N.ok && l === T.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), u || Object(b.d)(), t && Object(Q.a)()
					}
				},
				Ie = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: l,
						editorMode: m
					} = e, u = n(), p = Object(de.e)(u);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(u)) {
						if (!(await D(r(), b, l, m))) return void t(Object(d.i)(Ce))
					}
					t(we({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: l,
						editorMode: m
					}))
				}, we = e => async (t, n) => {
					t(Object(d.g)(Ce));
					const o = n(),
						r = Object(ae.a)(o),
						s = Object(ae.c)(o);
					if (!o.user.account && r) {
						const n = Object(G.e)(e.formData, o.uploads),
							r = Object(G.c)(e.formData, o.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(Q.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(Te(e, !1))
				}, Te = (e, t, n, o) => async (r, s, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: h,
						formData: f,
						editorMode: O
					} = e, g = s(), j = Object(oe.b)(g, {
						commentId: m
					}), x = j && Object(te.d)(g, {
						postId: j.postId
					}), y = x ? Object(G.a)() : h, C = Object(oe.e)(g, {
						commentId: y
					}), v = Object(me.l)(g);
					if (!v) return;
					if (C && !x) return;
					t || r(fe({
						draftKey: y,
						draft: f,
						commentsPageKey: u,
						optimisticComment: x && j ? Object(G.b)({
							temporalId: y,
							draft: f,
							post: Object(le.G)(g, {
								postId: j.postId
							}),
							author: v,
							subredditId: (null === (l = Object(de.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: j.id
						}) : void 0
					})), r(Re({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const S = f.commentMode,
						k = t && n ? n : Object(G.e)(f, g.uploads),
						_ = Object(G.f)(k, g.uploads);
					let I;
					if ((I = ke(S, g) ? await A(d(), null, m, f, k) : await L(a(), m, f, k)).ok) {
						if (r(je({
								...I.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: p + 1,
								upload: _
							})), t) {
							const e = Object(de.j)(g);
							Object(i.a)(!!e)
						}
					} else {
						if (I.error) {
							if (!j) return;
							const e = t && o ? o : Object(G.c)(f, g.uploads);
							V.f({
								state: g,
								bodyText: e,
								postId: j.postId,
								parentId: m,
								error: I.error,
								uploadMetadata: null == _ ? void 0 : _.metadata
							})
						}
						r(xe({
							draftKey: y,
							error: I.error
						}))
					}
					ye(s(), u, O, I, null == _ ? void 0 : _.metadata), Object(b.d)(), t && Object(Q.a)()
				}, Ee = () => async e => {
					const t = Object(Q.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: o,
								postId: r,
								richTextJSONData: s,
								commentBodyText: i
							},
							isSkipOnboarding: c
						} = t;
						c && e(Object(l.skipOnboardingModal)()), r ? await e(_e({
							...t.comment,
							postId: r
						}, !0, s, i)) : o && void 0 !== n && await e(Te({
							...t.comment,
							parentCommentId: o,
							parentCommentDepth: n
						}, !0, s, i))
					}
				}, Ne = Object(r.a)(pe.s), Re = Object(r.a)(pe.r), Pe = Object(r.a)(pe.n), Me = (Object(r.a)(pe.i), Object(r.a)(pe.o)), De = (Object(r.a)(pe.v), (e, t, n) => async (r, s, i) => {
					let {
						apiContext: c
					} = i;
					const a = e === T.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) r(Me({
						editorMode: e,
						draftKey: n,
						content: a ? Y.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(B.a)(c(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(Me({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(h.f)({
							duration: h.a,
							kind: ee.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Le = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: o
					} = e;
					return async (e, r) => {
						const i = r(),
							l = Object(s.a)($.c.replyToComment, n);
						if (!Object(me.R)(r()) && !Object(ae.a)(i)) return e(Object(a.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ne.m)(r(), {
								commentId: n
							})
						}));
						const m = i.features.comments.replyFormOpen[t],
							u = m && m[n];
						if ((u || m && o) && (Object.keys(m).forEach(n => m[n] && e(Re({
								parentCommentId: n,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const h = i.user.prefs.commentMode,
							f = Object(J.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === T.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Z.s(e, null)).map(e => Z.l([e])),
									n = Z.s("", null),
									o = Z.l([n]);
								b = {
									document: [Z.c(t), o]
								}
							}
						}
						const O = i.features.comments.drafts[l];
						let g;
						if (g = f ? {
								commentMode: h,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: h,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.T)(i)) {
							const o = Ne({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: l,
								formData: g
							});
							e(Object(c.startChangeUsernameFlow)(o))
						} else e(Ne({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: l,
							formData: g
						}))
					}
				}, Ae = e => async t => {
					t(Object(ue.r)(e)), t(Be(e))
				}, Ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Re({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(ue.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Fe = (e, t) => n => n(Pe({
					draftKey: e,
					formData: t
				})), Ue = Object(r.a)(pe.u), Be = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: o,
						draftKey: r,
						text: s
					} = e;
					return async (e, i) => {
						const c = i();
						c.user.account && (V.c(c), e(Ue({
							commentId: t,
							commentsPageKey: o,
							draftKey: r,
							formData: {
								text: s,
								commentMode: n,
								rteState: null,
								draftType: $.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(r.a)(pe.F), We = Object(r.a)(pe.E), Ge = Object(r.a)(pe.G), qe = Object(r.a)(pe.j), Je = Object(r.a)(pe.f), ze = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: o,
						formData: r
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: c,
							gqlContext: a
						} = i;
						const d = s();
						if (!d.user.account) return;
						e(He({
							draftKey: o
						})), V.d(d);
						const l = Object(G.e)(r, d.uploads),
							m = r.commentMode;
						let u;
						if ((u = ke(m, d) ? await (async (e, t, n, o, r) => {
								const s = r === T.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: s ? n.text : null,
											richText: s ? null : o
										}
									};
								return Object(y.a)(e, {
									...K,
									variables: {
										input: i
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(P.c)(t.content)
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
							})(a(), t, r, l, m) : await (async (e, t, n, o, r) => {
								const s = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === T.i.MARKDOWN ? s.text = n.text : (s.text = null, s.richtext_json = o), Object(x.a)(Object(C.a)(e, [S.a]), {
									endpoint: Object(k.a)(Object(N.a)(Object(E.a)(`${e.apiUrl}/api/editusertext`))),
									method: j.ob.POST,
									data: s
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(I.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(I.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(_.a)()
								})
							})(c(), t, r, l, m)).ok) {
							const r = u.body;
							e(Ge({
								commentId: t,
								commentsPageKey: n,
								draftKey: o
							})), e(Object(ue.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(We({
							draftKey: o,
							error: u.error
						}))
					}
				}, Qe = Object(r.a)(pe.C), Ve = Object(r.a)(pe.B), Xe = Object(r.a)(pe.D), $e = (e, t) => async (n, o, r) => {
					let {
						apiContext: s
					} = r;
					const i = o();
					n(Qe({
						id: e
					})), V.a(e, i);
					const c = await ((e, t) => Object(x.a)(Object(C.a)(e, [S.a]), {
						endpoint: Object(k.a)(`${e.apiUrl}/api/del`),
						method: j.ob.POST,
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
					c.ok ? n(Xe({
						id: e,
						postId: t
					})) : n(Ve({
						id: e,
						error: c.error
					}))
				}, Ye = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(ue.j)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(U.q)(r(), e, s)).ok || t(Object(ue.j)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Ze = (e, t) => async (n, r, s) => {
					let {
						gqlContext: i
					} = s;
					var c, a, d, l, m, u;
					n(Object(ue.c)());
					const p = e => Object(h.f)(Object(h.e)(e, ee.b.Error));
					if (((null === (a = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === O.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = t === X.a.FOLLOWED,
							c = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(ue.p)(c)), (await ((e, t) => Object(y.a)(e, {
								...F,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.yb)(null !== (m = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = s ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(ue.p)(c)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function et(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: o = !1
				} = e;
				return async (e, r) => {
					const s = r(),
						i = Object(oe.b)(s, {
							commentId: t
						});
					if (!i) return;
					e(Oe({
						commentId: t,
						commentsPageKey: n
					}));
					const c = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? $.c.replyToComment : $.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(oe.b)(s, {
								commentId: i.parentId
							}),
							o = Object(ne.j)(s, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === o) return;
						await e(we({
							commentsPageKey: n,
							draftKey: i.id,
							parentCommentDepth: o,
							parentCommentId: t.id,
							formData: c,
							editorMode: i.media.rteMode
						}))
					} else await e(Se({
						postId: i.postId,
						commentsPageKey: n,
						draftKey: i.id,
						formData: c,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: o
					}))
				}
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(u.G),
				b = Object(r.a)(u.p),
				h = Object(r.a)(u.Q),
				f = (e, t, n) => async (r, c, f) => {
					let {
						apiContext: g
					} = f;
					a.m(c(), t);
					const j = t === d.i.MARKDOWN,
						x = t === d.i.RICH_TEXT,
						y = u.k;
					if (j && Object(l.H)(n)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(O(t));
					if (x && !n) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(O(t));
					r(p(y));
					const C = await Object(i.a)(g(), t, j ? JSON.stringify(n) : n);
					C.ok ? (r(b(y)), r(h({
						editorKey: e,
						editorMode: t,
						content: C.body.output
					})), r(O(t))) : (r(b(y)), r(Object(s.f)({
						duration: s.a,
						kind: m.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, O = e => async (t, n) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const a = e === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(c.wb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(s.r),
				c = Object(o.a)(s.F),
				a = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = await Object(r.a)(s(), e);
					a && a.ok ? t(i({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(c(e))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/chat/toggle.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const m = e => {
				let {
					onStartChat: t,
					text: n,
					className: r,
					sendEvent: i,
					contextId: c,
					priority: a,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					eventSource: b,
					onClick: h,
					onAddUserToQuickReplyList: f,
					children: O,
					style: g
				} = e;
				return s.a.createElement(d.t, {
					onClick: e => {
						if (h && h(e), t(), b === o.awardNotification) return f();
						i(Object(l.b)(c))
					},
					className: r,
					text: n,
					priority: a,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					style: g
				}, O)
			};
			m.displayName = "ChatButton";
			const u = Object(i.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: o
				} = t;
				return {
					onStartChat: () => {
						e(Object(c.b)(o, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(c.a)(o))
					}
				}
			});
			t.b = u(Object(a.c)(m))
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
				return ue
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/models/Toast/index.ts");
			const j = (e, t) => async (n, r, s) => {
				let {
					apiContext: i
				} = s;
				const c = await (async (e, t, n) => Object(h.a)(Object(f.a)(e, [O.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					a = `error-block-${t}`,
					l = `success-block-${t}`;
				if (c.ok) {
					n(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: r
					}))
				} else n(b.f({
					id: a,
					kind: g.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: j(e, t)
				}))
			};
			var x = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				v = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				I = n("./node_modules/react-router-redux/es/index.js"),
				w = n("./src/lib/addQueryParams/index.ts"),
				T = n("./src/lib/makeSearchKey/index.ts"),
				E = n("./src/lib/search/index.ts"),
				N = n("./src/reddit/actions/pages/search/index.ts"),
				R = n("./src/reddit/constants/keycodes.ts"),
				P = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/SearchBar/index.tsx"),
				L = n("./src/reddit/helpers/clickSourceData/index.ts"),
				A = n("./src/reddit/hooks/usePageLayer.ts"),
				K = n("./src/reddit/selectors/platform.ts");
			const F = "comment-search-bar",
				U = "comment-search-button",
				B = "search/";

			function H(e) {
				const {
					expanded: t,
					bucketed: n
				} = e.experiment, c = Object(A.a)(), a = (null == c ? void 0 : c.queryParams.q) || "", [l, m] = Object(r.useState)(a), [u, p] = Object(r.useState)(t), b = Object(i.d)(), h = Object(i.e)(e => Object(M.h)(e, {
					pageLayer: c
				})), f = Object(i.e)(e => Object(M.s)(e, {
					pageLayer: c
				})), O = Object(i.e)(e => Object(K.j)(e));

				function g() {
					if (!l.trim() || !h) return;
					const e = Object(E.b)(l),
						t = `${new URL(h.permalink).pathname}${B}`,
						n = {
							[P.z]: e,
							[P.P]: [d.ic.Comments],
							[P.C]: "1",
							...(null == f ? void 0 : f.isNSFW) ? {
								[P.L]: "1"
							} : {},
							...(null == h ? void 0 : h.isNSFW) ? {
								[P.m]: "1"
							} : {}
						},
						o = Object(L.b)(c),
						r = Object(T.b)(h.id, void 0, n);
					b(Object(N.d)({
						key: r,
						options: n,
						subredditName: null == f ? void 0 : f.name,
						postId: h.id
					}));
					const s = Object(w.a)(t, n);
					b(Object(I.b)(s, {
						...o,
						isOverlay: O
					}))
				}
				return n ? s.a.createElement("div", null, l || u ? s.a.createElement("div", {
					"data-testid": F
				}, s.a.createElement(D.a, {
					onSearch: g,
					onKeyPress: function(e) {
						e.key === R.b.Enter && g()
					},
					onTextChange: e => {
						m(e.target.value)
					},
					value: l
				})) : s.a.createElement("button", {
					"data-testid": U,
					onClick: () => p(!0)
				}, o.fbt._("Search comments", null, {
					hk: "2ObH7B"
				}))) : null
			}
			var W = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				G = n("./src/reddit/helpers/path/index.ts"),
				q = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const J = (e, t, n, o, r) => s => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(q.z)(s, void 0, {
						oldSort: n,
						sort: o,
						source: r
					}),
					userSubreddit: Object(q.ub)(s)
				}),
				z = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				Q = e => ({
					subreddit: Object(q.kb)(e),
					userSubreddit: Object(q.ub)(e)
				}),
				V = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...Q
				});
			var X = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				Z = n("./src/reddit/selectors/comments.ts"),
				ee = n("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				te = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ne = n("./src/reddit/selectors/posts.ts"),
				oe = n("./src/reddit/selectors/tooltip.ts"),
				re = n("./src/reddit/selectors/user.ts"),
				se = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				ie = n.n(se),
				ce = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const ae = Object(v.a)(k.a),
				de = e => e === ce.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === ce.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class le extends s.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== ce.a.None) {
							e(t === ce.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", ce.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", ce.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", ce.a.None)
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
					return s.a.createElement("div", {
						className: ie.a.HighlightWrapper
					}, s.a.createElement(_.b, {
						className: Object(a.a)(ie.a.HighlightPicker, ie.a.Row),
						textClassName: ie.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${de(r)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), s.a.createElement(X.b, {
						className: ie.a.DropdownTriangle,
						onClick: n
					}), s.a.createElement(ae, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, s.a.createElement(_.b, {
						displayText: de(ce.a.First),
						isSelected: r === ce.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(_.b, {
						displayText: de(ce.a.Last),
						isSelected: r === ce.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(_.b, {
						displayText: de(ce.a.None),
						isSelected: r === ce.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var me = le;
			const ue = "CommentSort--SortPicker",
				pe = "CommentSort--HighlightPicker",
				be = "CommentSort--Tooltip",
				he = Object(v.a)(k.a),
				fe = Object(c.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(Z.m)(e, {
							commentId: n
						})
					},
					commentSearchPdp: e => Object(ee.a)(e),
					contestModeModalIsOpen: Object(Y.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(oe.b)(ue),
					highlightIsOpen: Object(oe.b)(pe),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(te.m)(e, {
							postId: n
						});
						return !!o && o.posts
					},
					post: ne.G,
					postPermalink: ne.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(re.w)(e),
							r = !!Object(te.m)(e, {
								postId: n
							}),
							s = Object(ne.G)(e, {
								postId: n
							});
						return (r || o) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: Z.p
				}),
				Oe = Object(i.b)(fe, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: ue
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: pe
							})), t()
						},
						onSetSuggestedSort: t => e(j(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: be
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ge extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, o) => this.props.sendEvent(J(e, this.props.isOverlay, t, n, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(z("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(V(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						commentId: n,
						commentPermalink: r,
						commentSearchPdp: i,
						contestModeModalIsOpen: c,
						dropdownIsOpen: l,
						elementRef: m,
						hideTooltip: u,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: h,
						location: f,
						post: O,
						postPermalink: g,
						selectedHighlightSort: j,
						showCommentHighlighter: v,
						sort: S,
						suggestedSort: k,
						showTooltip: I,
						toggleContestModeModal: w
					} = this.props, T = O.contestMode, E = !f.search.includes(d.w.CONFIDENCE), N = S === d.w.CONFIDENCE && E, R = b && !N, P = d.y[S], M = P ? P() : "", D = k && S === k && !N ? this.addSuggestedLabel(M) : M, L = T ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), A = T ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), K = T ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), F = T && !b;
					return s.a.createElement("div", {
						className: Object(a.a)(t, ie.a.container, {
							[ie.a.hideCommentSort]: !v && F
						}),
						ref: m
					}, s.a.createElement("div", {
						className: ie.a.containerRow
					}, !F && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: ie.a.DropdownContainer
					}, s.a.createElement(_.b, {
						className: Object(a.a)(ie.a.SortPicker, ie.a.Row),
						textClassName: ie.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${D}`,
						id: ue,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(X.b, {
						className: ie.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), i.bucketed && s.a.createElement("div", null, s.a.createElement(H, {
						experiment: i,
						commentId: n,
						postId: this.props.postId
					})), s.a.createElement(he, {
						isOpen: l,
						tooltipId: ue
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = r || g,
							n = Object(G.b)(t),
							o = d.y[e],
							i = o ? o() : "";
						return s.a.createElement(C.a, {
							className: ie.a.ViewFullLinkOrOverlayLink,
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, s.a.createElement(_.b, {
							displayText: i,
							isSelected: S === e,
							skipRoleAttr: !0
						}))
					}))), R && !F && (k ? s.a.createElement("button", {
						className: ie.a.SortLink,
						onClick: S !== k ? this.setSortOnClick : this.clearSortOnClick
					}, S !== k ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : s.a.createElement("button", {
						className: ie.a.SetSort
					}, s.a.createElement("button", {
						className: ie.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), s.a.createElement("span", {
						id: be,
						onMouseEnter: I,
						onMouseLeave: u
					}, s.a.createElement(y.c, {
						className: ie.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: be
					}), s.a.createElement($.a, {
						className: ie.a.Info
					})))), b && s.a.createElement("button", {
						className: ie.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), s.a.createElement(W.a, {
						className: ie.a.ToggleSwitch,
						on: T
					}))), v && s.a.createElement("div", {
						className: ie.a.containerRow
					}, s.a.createElement(me, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: pe,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: j,
						trackHighlight: z
					})), c && s.a.createElement(x.a, {
						actionText: A,
						headerText: L,
						modalText: K,
						onConfirm: this.setContestMode,
						toggleModal: w,
						withOverlay: !0
					}))
				}
			}
			t.b = Oe(Object(S.c)(ge))
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
				return O
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = n.n(l),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				h = u.a.div("BottomText", m.a),
				f = e => r.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				j = Object(a.a)(O, [c.a.Click, c.a.Keydown]),
				x = Object(a.a)(f, [c.a.Click, c.a.Keydown]),
				y = Object(s.b)(g);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(j, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(x, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: o,
					...s
				} = e, d = Object(c.b)(o);
				return r.a.createElement(i.a, a({
					className: n,
					to: d
				}, s), t)
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
				} = e, o = t ? d : s.a;
				return r.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				m = n("./src/reddit/constants/things.ts");
			const u = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				h = n("./src/reddit/helpers/trackers/inbox.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/NotificationInbox/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				x = n("./src/reddit/components/NotificationUnit/index.m.less"),
				y = n.n(x);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = {
				kind: g.b.Error,
				text: C._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			t.default = e => {
				var t, n, o, g, x, S, k, _, I, w;
				const T = Object(s.d)(),
					E = Object(s.e)(j.d),
					{
						context: N,
						deeplinkUrl: R,
						isFullWidth: P,
						isUnread: M,
						isInAppNotification: D,
						isNightMode: L,
						notificationId: A,
						onEvent: K
					} = e,
					F = null == N ? void 0 : N.messageType,
					U = F === O.a.CommentReply,
					B = F === O.a.SubredditRecommendation,
					H = F === O.a.LifecyclePostSuggestions,
					W = null === (t = null == N ? void 0 : N.post) || void 0 === t ? void 0 : t.permalink;
				let G = null === (n = null == N ? void 0 : N.comment) || void 0 === n ? void 0 : n.id,
					q = (null === (o = null == N ? void 0 : N.post) || void 0 === o ? void 0 : o.id) || (null === (x = null === (g = null == N ? void 0 : N.comment) || void 0 === g ? void 0 : g.postInfo) || void 0 === x ? void 0 : x.id);
				const J = null === (S = null == N ? void 0 : N.subreddit) || void 0 === S ? void 0 : S.id,
					z = null === (_ = null === (k = null == N ? void 0 : N.awarding) || void 0 === k ? void 0 : k.award) || void 0 === _ ? void 0 : _.id,
					Q = null === (w = null === (I = null == N ? void 0 : N.awarding) || void 0 === I ? void 0 : I.awarder) || void 0 === w ? void 0 : w.id;
				if (F === O.a.CommentFollow || F === O.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: n
							} = new URL(e);
						if (!n) return t;
						const o = n.match(u);
						if (!o) return t;
						const [r, s, i, c] = o.slice(1);
						return s && "r" === r && (t.subredditName = s), i && (t.postId = `${m.b}${i}`), c && (t.commentId = `${m.a}${c}`), t
					})(R);
					q = e.postId, G = e.commentId
				} else F !== O.a.PostReply && F !== O.a.LifecyclePostSuggestions || (G = A);
				const V = e => {
					if (q && G) {
						const e = Object(c.a)(q, G, Object(b.c)(R)),
							t = {
								parentCommentId: G,
								commentsPageKey: e
							};
						T(Object(a.h)(t)), K({
							position: h.d.SECOND
						})
					} else e.preventDefault(), T(Object(d.f)(v))
				};
				return (() => {
					switch (F) {
						case O.a.HFNSubredditInterestingPost:
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							const e = H;
							if (!(B || e || E && D)) return null;
							const t = e => {
									W ? K({
										position: h.d.SECOND,
										postId: q,
										subredditId: J
									}) : (e.preventDefault(), T(Object(d.f)(v)))
								},
								n = C._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return r.a.createElement(p.t, {
								onClick: t,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: M && !D,
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: D,
									[y.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(f.a, {
								name: "text_post",
								className: y.a.postIcon
							}), C._("{check out button}", [C._param("check out button", n)], {
								hk: "4DDMme"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply:
						case O.a.PostFollow:
						case O.a.CommentFollow: {
							const e = U;
							return U || e || E && D ? r.a.createElement(p.t, {
								onClick: V,
								kind: p.b.InternalLink,
								to: R,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: M && !D,
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: D,
									[y.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(f.a, {
								name: "reply",
								className: y.a.replyIcon
							}), C._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case O.a.AwardReceived: {
							if (!Q) return null;
							const e = e => {
								e.preventDefault(), Q ? K({
									position: h.d.SECOND,
									awardId: z
								}) : T(Object(d.f)(v))
							};
							return r.a.createElement(l.b, {
								userId: Q,
								contextId: Q,
								onClick: e,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: M && !D,
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: D,
									[y.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(f.a, {
								name: "chat_new",
								className: y.a.replyIcon
							}), C._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case O.a.UpvotePost:
						case O.a.UpvoteComment:
						case O.a.UsernameMention:
						case O.a.PrivateMessage:
						case O.a.UserNewFollower:
						case O.a.ChatMessage:
						case O.a.CakeDay:
						case O.a.ChatRequest:
						case O.a.ChatAcceptInvite:
						case O.a.HFNSubredditInterestingPost:
						case O.a.OneOff:
						case O.a.ModeratedSrViralCommentPost:
						case O.a.TalkLive: {
							if (!D) return null;
							const e = e => {
								switch (e) {
									case O.a.HFNSubredditInterestingPost:
									case O.a.OneOff:
									case O.a.UpvotePost:
									case O.a.ModeratedSrViralCommentPost:
										return C._("See Post", null, {
											hk: "mGXS5"
										});
									case O.a.UpvoteComment:
										return C._("See Comment", null, {
											hk: "3FUtJF"
										});
									case O.a.ChatRequest:
									case O.a.ChatAcceptInvite:
										return C._("Start Chat", null, {
											hk: "iQZfe"
										});
									case O.a.ChatMessage:
										return C._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case O.a.CakeDay:
									case O.a.UserNewFollower:
										return C._("See Profile", null, {
											hk: "2Wj94t"
										});
									case O.a.TalkLive:
										return C._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return C._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return r.a.createElement(p.t, {
								onClick: () => K({
									position: h.d.SECOND
								}),
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: !0
								})
							}, e(F))
						}
						default:
							return E && D ? r.a.createElement(p.t, {
								onClick: () => K({
									position: h.d.SECOND
								}),
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: !0
								})
							}, C._("See more", null, {
								hk: "3QLc3"
							})) : null
					}
				})()
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class o extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, a({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(o)
			}
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Search/index.tsx"),
				c = n("./src/reddit/controls/SearchBar/index.m.less"),
				a = n.n(c);
			t.a = e => r.a.createElement("label", {
				className: Object(s.a)(a.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				"data-testid": "SEARCH_BAR_TEST_ID",
				className: Object(s.a)(a.a.search, {
					[a.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(s.a)(a.a.searchIconContainer, {
					[a.a.mClickable]: !!e.onSearch,
					[a.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, r.a.createElement(i.a, null)))
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = n.n(c);
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(s.a)(a.a.toggleSwitch, e.className, {
						[a.a.xs]: n === i.d.XS,
						[a.a.s]: n === i.d.S,
						[a.a.m]: n === i.d.M,
						[a.a.l]: n === i.d.L,
						[a.a.xl]: n === i.d.XL,
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
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/lodash/map.js"),
				r = n.n(o),
				s = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				c = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				a = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => a() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
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
						startOffset: r,
						endContainer: s,
						endOffset: i
					} = n, c = document.createRange();
					c.selectNode(e);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, r), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(s, i), a = !1), a) return [e];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				u = (e, t, n) => {
					let o = e;
					for (; o && (!n || !n(o));) {
						if (o && t(o)) return o;
						o = o.parentElement
					}
				},
				p = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(s.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.L.NO_STRIPE_SUBSCRIPTION:
							case o.L.USER_DOESNT_EXIST:
							case o.L.USER_REQUIRED_ERROR:
							case o.L.VALIDATION_ERROR:
								return e;
							case o.L.NO_USER:
							case o.L.NO_TEXT:
							case o.L.NO_URL:
								return o.L.VALIDATION_ERROR;
							case o.L.CREDIT_CARD_FAILURE:
							case o.L.CREDIT_CARD_FAILURE_GENERIC:
								return o.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.L.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return c
				})), n.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(o || (o = {}));
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
					})(o.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => r(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!r(o.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
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
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "l", (function() {
				return S
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts"),
				m = n("./src/reddit/constants/richTextJson.ts");
			const u = e => {
					const t = Object(a.p)(e);
					return {
						source: "comment_composer",
						action: r.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.cb)(e),
						subreddit: Object(d.kb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				p = async (e, t, o, r, s) => {
					const i = {
							commentId: s,
							commentsPageKey: o
						},
						a = s && Object(c.j)(e, i) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
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
						bodyText: n,
						postId: r,
						error: s,
						parentId: i,
						uploadMetadata: c
					} = e;
					const a = u(t),
						d = s.type === o.Pb ? "karma_rate_limit" : s.fields && s.fields.length > 0 ? s.fields[0].msg : void 0,
						p = c ? "image" : function(e) {
							return e.includes(`"id":"${m.c}`)
						}("string" == typeof n ? n : JSON.stringify(n)) ? "giphy" : void 0;
					return Object(l.a)({
						...a,
						source: s.type === o.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...a.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: n,
							parentId: i,
							postId: r,
							contentType: p
						},
						media: {
							mimetype: null == c ? void 0 : c.mimetype,
							size: null == c ? void 0 : c.size
						}
					})
				}, h = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), f = (e, t) => {
					t === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.cb)(t),
					subreddit: Object(d.kb)(t),
					post: Object(d.K)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), j = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), x = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, y = () => e => ({
					...u(e),
					action: "open",
					noun: "gif_tooltip"
				}), C = e => t => ({
					...u(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), v = () => e => ({
					...u(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), S = () => e => ({
					...u(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.gb
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
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = n.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...o
				} = e;
				return r.a.createElement("svg", a({
					className: Object(s.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./node_modules/reselect/es/index.js");
			const i = Object(s.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: o.vb
			}), e => ({
				bucketed: e === o.Sc.ExpandedSearch || e === o.Sc.CollapsedSearch,
				collapsed: e === o.Sc.CollapsedSearch,
				expanded: e === o.Sc.ExpandedSearch
			}))
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
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(o.a)((e, t) => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => c.find(t => !!Object(i.a)(a(e, t))),
				l = Object(o.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === r.W.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === r.W.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"eced54f14226"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.651d646955e87d70b600.js.map