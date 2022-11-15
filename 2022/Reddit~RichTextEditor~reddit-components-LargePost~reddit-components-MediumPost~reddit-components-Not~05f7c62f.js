// https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f.e65fbbf5f150d3084d28.js
// Retrieved at 11/15/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f"], {
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
				return he
			})), o.d(t, "r", (function() {
				return ge
			})), o.d(t, "p", (function() {
				return je
			})), o.d(t, "t", (function() {
				return Ce
			})), o.d(t, "w", (function() {
				return ke
			})), o.d(t, "q", (function() {
				return Se
			})), o.d(t, "v", (function() {
				return we
			})), o.d(t, "o", (function() {
				return Te
			})), o.d(t, "m", (function() {
				return Ie
			})), o.d(t, "b", (function() {
				return Me
			})), o.d(t, "c", (function() {
				return De
			})), o.d(t, "s", (function() {
				return Le
			})), o.d(t, "g", (function() {
				return Ke
			})), o.d(t, "h", (function() {
				return Ae
			})), o.d(t, "k", (function() {
				return Fe
			})), o.d(t, "e", (function() {
				return Ue
			})), o.d(t, "d", (function() {
				return qe
			})), o.d(t, "a", (function() {
				return Je
			})), o.d(t, "j", (function() {
				return ze
			})), o.d(t, "i", (function() {
				return Ye
			})), o.d(t, "l", (function() {
				return Ze
			})), o.d(t, "u", (function() {
				return $e
			})), o.d(t, "n", (function() {
				return et
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
				p = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = o("./src/reddit/actions/shortcuts/utils.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/reddit/constants/adEvents.ts"),
				f = o("./src/reddit/constants/localStorage.ts"),
				g = o("./src/redditGQL/operations/CommentToxicity.json"),
				j = o("./src/lib/constants/index.ts"),
				x = o("./src/lib/makeApiRequest/index.ts"),
				y = o("./src/lib/makeGqlRequest/index.ts"),
				C = o("./src/lib/omitHeaders/index.ts"),
				k = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				S = o("./src/reddit/constants/headers.ts"),
				_ = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = o("./src/reddit/helpers/genericServerError/index.ts"),
				w = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				T = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				E = o("./src/reddit/models/PostCreationForm/index.ts"),
				I = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				M = o("./src/reddit/helpers/graphql/helpers.ts"),
				P = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = o("./src/redditGQL/operations/CreateComment.json");
			const D = (e, t, o, n) => {
					let r, s;
					if (n === E.i.MARKDOWN) r = o.text, s = null;
					else {
						r = null;
						let e = null;
						o.rteState && (e = k.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
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
				L = async (e, t, o, n) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === E.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(x.a)(Object(C.a)(e, [S.a]), {
						method: j.ob.POST,
						endpoint: Object(_.a)(Object(I.a)(Object(N.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(T.a)(e)
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				}, K = async (e, t, o, n, r) => {
					const s = n.commentMode === E.i.MARKDOWN,
						c = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: s ? n.text : null,
								richText: s ? null : r
							}
						};
					return Object(y.a)(e, {
						...R,
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
									comment: Object(P.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(v.a)()
						}
					})
				};
			var A = o("./src/redditGQL/operations/UpdateComment.json");
			var F = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var H = o("./src/reddit/endpoints/post/index.tsx"),
				U = o("./src/reddit/endpoints/post/convert.ts"),
				B = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				G = o("./src/reddit/featureFlags/index.ts"),
				W = o("./src/reddit/helpers/comment/index.ts"),
				q = o("./src/reddit/helpers/correlationIdTracker.ts"),
				J = o("./src/reddit/helpers/dom/index.ts"),
				z = o("./src/reddit/helpers/localStorage/index.ts"),
				Q = o("./src/reddit/helpers/sessionStorage/index.ts"),
				V = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				X = o("./src/reddit/models/Comment/index.ts"),
				Y = o("./src/reddit/models/PostDraft/index.ts"),
				Z = o("./src/reddit/models/RichTextJson/index.ts"),
				$ = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = o("./src/reddit/models/Toast/index.ts"),
				te = o("./src/reddit/selectors/chatPost.ts"),
				oe = o("./src/reddit/selectors/comments.ts"),
				ne = o("./src/reddit/selectors/commentSelector.ts"),
				re = o("./src/reddit/constants/experiments.ts"),
				se = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = o("./node_modules/reselect/es/index.js");
			const ie = Object(ce.a)(e => Object(se.c)(e, {
				experimentEligibilitySelector: se.a,
				experimentName: re.Ab
			}), e => e === re.Hd);
			var ae = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = o("./src/reddit/selectors/platform.ts"),
				le = o("./src/reddit/selectors/posts.ts"),
				me = o("./src/reddit/selectors/user.ts"),
				ue = o("./src/reddit/actions/comment/index.ts"),
				pe = o("./src/reddit/actions/comment/constants.ts");
			const be = Object(r.a)(pe.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const r = n();
						if (!!r.features.comments.drafts[o])
							if (Object(me.T)(r) && t) {
								const n = be({
									hasFocus: t,
									draftKey: o
								});
								e(Object(i.startChangeUsernameFlow)(n))
							} else e(be({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				Oe = Object(r.a)(pe.L),
				fe = Object(r.a)(pe.H),
				ge = Object(r.a)(pe.N),
				je = Object(r.a)(pe.M),
				xe = Object(r.a)(pe.K),
				ye = async (e, t, o, n, r) => {
					const s = n.ok && n.body,
						c = s && s.comment && s.comment.id;
					await V.g(e, o, t, r, c)
				}, Ce = "Toxicity_Warning__Modal", ke = e => async (t, o, n) => {
					let {
						gqlContext: r
					} = n;
					const s = o(),
						c = Object(de.e)(s);
					let i = "";
					c && (i = c.name);
					const {
						formData: a,
						editorMode: l
					} = e;
					if (G.d.enableToxicityWarning(s)) {
						if (!(await D(r(), i, a, l))) return void t(Object(d.i)(Ce))
					}
					t(Se(e))
				}, Se = e => async (t, o) => {
					t(Object(d.g)(Ce));
					const n = o(),
						r = Object(ae.a)(n),
						s = Object(ae.c)(n);
					if (!n.user.account && r) {
						const o = Object(W.e)(e.formData, n.uploads),
							r = Object(W.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(Q.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(ve(e, !1))
				};

			function _e(e, t) {
				return e === E.i.MARKDOWN && ie(t)
			}
			const ve = (e, t, o, r) => {
					let {
						postId: s,
						commentsPageKey: i,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u,
						isLiveStreaming: f
					} = e;
					return async (e, g, j) => {
						let {
							apiContext: x,
							gqlContext: y
						} = j;
						var C;
						const k = g(),
							S = Object(te.d)(k, {
								postId: s
							}),
							_ = S ? Object(W.a)() : a,
							v = Object(ne.e)(k, {
								commentId: _
							}),
							w = Object(me.l)(k);
						if (!w) return;
						if (v && !S) return;
						t || e(Oe({
							draftKey: _,
							draft: d,
							commentsPageKey: i,
							optimisticComment: S ? Object(W.b)({
								temporalId: _,
								draft: d,
								post: Object(le.G)(k, {
									postId: s
								}),
								author: w,
								subredditId: (null === (C = Object(de.e)(k)) || void 0 === C ? void 0 : C.id) || ""
							}) : void 0
						}));
						const T = w.displayText,
							I = d.commentMode;
						let N;
						const M = f ? "" : t && o ? o : Object(W.e)(d, k.uploads),
							P = Object(W.f)(M, k.uploads);
						if (f ? (N = await Object(B.i)(x(), s, d, T), e(Object(p.a)({
								streamId: s,
								level: N.body.automuteLevel
							}))) : N = _e(I, k) ? await K(y(), s, null, d, M) : await L(x(), s, d, M), N.ok) {
							let o;
							if (o = N.body, e(ge({
									...o,
									headCommentId: Object(oe.w)(k, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: _,
									upload: P
								})), t) {
								const e = Object(de.j)(k);
								Object(c.a)(!!e)
							}
							const n = Object(le.G)(g(), {
								postId: s
							});
							e(Object(m.y)(n, O.a.CommentSubmitted))
						} else {
							if (N.error) {
								const e = t && r ? r : Object(W.c)(d, k.uploads);
								V.f({
									state: k,
									bodyText: e,
									postId: s,
									error: N.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const o = N.error && N.error.fields && N.error.fields[0] ? N.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(xe({
								draftKey: _,
								error: N.error
							})), S || e(Object(h.f)({
								duration: h.a,
								kind: ee.b.Error,
								text: o
							}))
						}
						ye(g(), i, l, N, null == P ? void 0 : P.metadata).then(() => N.ok && l === E.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), u || Object(b.d)(), t && Object(Q.a)()
					}
				},
				we = e => async (t, o, n) => {
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
					} = e, u = o(), p = Object(de.e)(u);
					let b = "";
					if (p && (b = p.name), G.d.enableToxicityWarning(u)) {
						if (!(await D(r(), b, l, m))) return void t(Object(d.i)(Ce))
					}
					t(Te({
						commentsPageKey: c,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: l,
						editorMode: m
					}))
				}, Te = e => async (t, o) => {
					t(Object(d.g)(Ce));
					const n = o(),
						r = Object(ae.a)(n),
						s = Object(ae.c)(n);
					if (!n.user.account && r) {
						const o = Object(W.e)(e.formData, n.uploads),
							r = Object(W.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(Q.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(Ee(e, !1))
				}, Ee = (e, t, o, n) => async (r, s, i) => {
					let {
						apiContext: a,
						gqlContext: d
					} = i;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: h,
						formData: O,
						editorMode: f
					} = e, g = s(), j = Object(ne.b)(g, {
						commentId: m
					}), x = j && Object(te.d)(g, {
						postId: j.postId
					}), y = x ? Object(W.a)() : h, C = Object(ne.e)(g, {
						commentId: y
					}), k = Object(me.l)(g);
					if (!k) return;
					if (C && !x) return;
					t || r(Oe({
						draftKey: y,
						draft: O,
						commentsPageKey: u,
						optimisticComment: x && j ? Object(W.b)({
							temporalId: y,
							draft: O,
							post: Object(le.G)(g, {
								postId: j.postId
							}),
							author: k,
							subredditId: (null === (l = Object(de.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: j.id
						}) : void 0
					})), r(Me({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const S = O.commentMode,
						_ = t && o ? o : Object(W.e)(O, g.uploads),
						v = Object(W.f)(_, g.uploads);
					let w;
					if ((w = _e(S, g) ? await K(d(), null, m, O, _) : await L(a(), m, O, _)).ok) {
						if (r(je({
								...w.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: p + 1,
								upload: v
							})), t) {
							const e = Object(de.j)(g);
							Object(c.a)(!!e)
						}
					} else {
						if (w.error) {
							if (!j) return;
							const e = t && n ? n : Object(W.c)(O, g.uploads);
							V.f({
								state: g,
								bodyText: e,
								postId: j.postId,
								parentId: m,
								error: w.error,
								uploadMetadata: null == v ? void 0 : v.metadata
							})
						}
						r(xe({
							draftKey: y,
							error: w.error
						}))
					}
					ye(s(), u, f, w, null == v ? void 0 : v.metadata), Object(b.d)(), t && Object(Q.a)()
				}, Ie = () => async e => {
					const t = Object(Q.b)();
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
						i && e(Object(l.skipOnboardingModal)()), r ? await e(ve({
							...t.comment,
							postId: r
						}, !0, s, c)) : n && void 0 !== o && await e(Ee({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, s, c))
					}
				}, Ne = Object(r.a)(pe.s), Me = Object(r.a)(pe.r), Pe = Object(r.a)(pe.n), Re = (Object(r.a)(pe.i), Object(r.a)(pe.o)), De = (Object(r.a)(pe.v), (e, t, o) => async (r, s, c) => {
					let {
						apiContext: i
					} = c;
					const a = e === E.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Z.H)(t)) r(Re({
						editorMode: e,
						draftKey: o,
						content: a ? Z.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(o));
						const s = await Object(U.a)(i(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(o)), r(Re({
								editorMode: e,
								draftKey: o,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(o)), r(Object(h.f)({
							duration: h.a,
							kind: ee.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Le = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, r) => {
						const c = r(),
							l = Object(s.a)(Y.c.replyToComment, o);
						if (!Object(me.R)(r()) && !Object(ae.a)(c)) return e(Object(a.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(oe.m)(r(), {
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
							O = Object(J.d)();
						if (O) {
							const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === E.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									o = $.s("", null),
									n = $.l([o]);
								b = {
									document: [$.c(t), n]
								}
							}
						}
						const f = c.features.comments.drafts[l];
						let g;
						if (g = O ? {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.T)(c)) {
							const n = Ne({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: l,
								formData: g
							});
							e(Object(i.startChangeUsernameFlow)(n))
						} else e(Ne({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: l,
							formData: g
						}))
					}
				}, Ke = e => async t => {
					t(Object(ue.r)(e)), t(Ue(e))
				}, Ae = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Me({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(ue.r)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Fe = (e, t) => o => o(Pe({
					draftKey: e,
					formData: t
				})), He = Object(r.a)(pe.u), Ue = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: r,
						text: s
					} = e;
					return async (e, c) => {
						const i = c();
						i.user.account && (V.c(i), e(He({
							commentId: t,
							commentsPageKey: n,
							draftKey: r,
							formData: {
								text: s,
								commentMode: o,
								rteState: null,
								draftType: Y.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Be = Object(r.a)(pe.F), Ge = Object(r.a)(pe.E), We = Object(r.a)(pe.G), qe = Object(r.a)(pe.j), Je = Object(r.a)(pe.f), ze = e => {
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
						e(Be({
							draftKey: n
						})), V.d(d);
						const l = Object(W.e)(r, d.uploads),
							m = r.commentMode;
						let u;
						if ((u = _e(m, d) ? await (async (e, t, o, n, r) => {
								const s = r === E.i.MARKDOWN,
									c = {
										commentId: t,
										content: {
											markdown: s ? o.text : null,
											richText: s ? null : n
										}
									};
								return Object(y.a)(e, {
									...A,
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
													...Object(P.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(v.a)()
									}
								})
							})(a(), t, r, l, m) : await (async (e, t, o, n, r) => {
								const s = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === E.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(x.a)(Object(C.a)(e, [S.a]), {
									endpoint: Object(_.a)(Object(N.a)(Object(I.a)(`${e.apiUrl}/api/editusertext`))),
									method: j.ob.POST,
									data: s
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(T.a)(e)
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(v.a)()
								})
							})(i(), t, r, l, m)).ok) {
							const r = u.body;
							e(We({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(ue.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(Ge({
							draftKey: n,
							error: u.error
						}))
					}
				}, Qe = Object(r.a)(pe.C), Ve = Object(r.a)(pe.B), Xe = Object(r.a)(pe.D), Ye = (e, t) => async (o, n, r) => {
					let {
						apiContext: s
					} = r;
					const c = n();
					o(Qe({
						id: e
					})), V.a(e, c);
					const i = await ((e, t) => Object(x.a)(Object(C.a)(e, [S.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: j.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(T.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(v.a)()
					}))(s(), e);
					i.ok ? o(Xe({
						id: e,
						postId: t
					})) : o(Ve({
						id: e,
						error: i.error
					}))
				}, Ze = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(ue.j)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(H.q)(r(), e, s)).ok || t(Object(ue.j)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, $e = (e, t) => async (o, r, s) => {
					let {
						gqlContext: c
					} = s;
					var i, a, d, l, m, u;
					o(Object(ue.c)());
					const p = e => Object(h.f)(Object(h.e)(e, ee.b.Error));
					if (((null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === f.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = t === X.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(ue.p)(i)), (await ((e, t) => Object(y.a)(e, {
								...F,
								variables: {
									input: t
								}
							}))(c(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.yb)(null !== (m = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = s ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(h.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(ue.p)(i)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function et(e) {
				let {
					commentId: t,
					commentsPageKey: o,
					isLivestreaming: n = !1
				} = e;
				return async (e, r) => {
					const s = r(),
						c = Object(ne.b)(s, {
							commentId: t
						});
					if (!c) return;
					e(fe({
						commentId: t,
						commentsPageKey: o
					}));
					const i = {
						commentMode: c.media.rteMode,
						draftType: c.parentId ? Y.c.replyToComment : Y.c.replyToPost,
						rtJson: c.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (c.parentId) {
						const t = Object(ne.b)(s, {
								commentId: c.parentId
							}),
							n = Object(oe.j)(s, {
								commentId: c.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(Te({
							commentsPageKey: o,
							draftKey: c.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: i,
							editorMode: c.media.rteMode
						}))
					} else await e(Se({
						postId: c.postId,
						commentsPageKey: o,
						draftKey: c.id,
						formData: i,
						editorMode: c.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: n
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
			const p = Object(r.a)(u.G),
				b = Object(r.a)(u.p),
				h = Object(r.a)(u.Q),
				O = (e, t, o) => async (r, i, O) => {
					let {
						apiContext: g
					} = O;
					a.m(i(), t);
					const j = t === d.i.MARKDOWN,
						x = t === d.i.RICH_TEXT,
						y = u.k;
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
					r(p(y));
					const C = await Object(c.a)(g(), t, j ? JSON.stringify(o) : o);
					C.ok ? (r(b(y)), r(h({
						editorKey: e,
						editorMode: t,
						content: C.body.output
					})), r(f(t))) : (r(b(y)), r(Object(s.f)({
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
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(n.a)(s.r),
				i = Object(n.a)(s.F),
				a = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const a = await Object(r.a)(s(), e);
					a && a.ok ? t(c({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(i(e))
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
				return Y
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
					o(Object(p.R)({
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
				y = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				k = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = o("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = o("./src/reddit/controls/Dropdown/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/Row.tsx"),
				w = o("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				T = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = o("./src/reddit/helpers/path/index.ts"),
				I = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const N = (e, t, o, n, r) => s => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.z)(s, void 0, {
						oldSort: o,
						sort: n,
						source: r
					}),
					userSubreddit: Object(I.ub)(s)
				}),
				M = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				P = e => ({
					subreddit: Object(I.kb)(e),
					userSubreddit: Object(I.ub)(e)
				}),
				R = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...P
				});
			var D = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				L = o("./src/reddit/icons/svgs/Info/index.tsx"),
				K = o("./src/reddit/selectors/activeModalId.ts"),
				A = o("./src/reddit/selectors/comments.ts"),
				F = o("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				H = o("./src/reddit/selectors/moderatorPermissions.ts"),
				U = o("./src/reddit/selectors/posts.ts"),
				B = o("./src/reddit/selectors/tooltip.ts"),
				G = o("./src/reddit/selectors/user.ts"),
				W = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = o.n(W),
				J = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const z = Object(k.a)(_.a),
				Q = e => e === J.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === J.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class V extends s.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== J.a.None) {
							e(t === J.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", J.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", J.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", J.a.None)
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
						className: q.a.HighlightWrapper
					}, s.a.createElement(v.b, {
						className: Object(a.a)(q.a.HighlightPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(r)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), s.a.createElement(D.b, {
						className: q.a.DropdownTriangle,
						onClick: o
					}), s.a.createElement(z, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, s.a.createElement(v.b, {
						displayText: Q(J.a.First),
						isSelected: r === J.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(v.b, {
						displayText: Q(J.a.Last),
						isSelected: r === J.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(v.b, {
						displayText: Q(J.a.None),
						isSelected: r === J.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = V;
			const Y = "CommentSort--SortPicker",
				Z = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				ee = Object(k.a)(_.a),
				te = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(A.m)(e, {
							commentId: o
						})
					},
					commentSearchPdp: e => Object(F.a)(e),
					contestModeModalIsOpen: Object(K.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(Y),
					highlightIsOpen: Object(B.b)(Z),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(H.m)(e, {
							postId: o
						});
						return !!n && n.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(G.w)(e),
							r = !!Object(H.m)(e, {
								postId: o
							}),
							s = Object(U.G)(e, {
								postId: o
							});
						return (r || n) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				oe = Object(c.b)(te, (e, t) => {
					let {
						postId: o
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: Y
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: Z
							})), t()
						},
						onSetSuggestedSort: t => e(j(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: $
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ne extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(N(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(R(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentId: o,
						commentPermalink: r,
						commentSearchPdp: c,
						contestModeModalIsOpen: i,
						dropdownIsOpen: l,
						elementRef: m,
						hideTooltip: u,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: h,
						location: O,
						post: f,
						postPermalink: g,
						selectedHighlightSort: j,
						showCommentHighlighter: k,
						sort: S,
						suggestedSort: _,
						showTooltip: I,
						toggleContestModeModal: N
					} = this.props, P = f.contestMode, R = c.bucketed && !!O.search, K = !O.search.includes(d.w.CONFIDENCE), A = S === d.w.CONFIDENCE && K, F = b && !A, H = d.y[S], U = H ? H() : "", B = _ && S === _ && !A ? this.addSuggestedLabel(U) : U, G = P ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), W = P ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), J = P ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), z = P && !b;
					return s.a.createElement("div", {
						className: Object(a.a)(t, q.a.container, {
							[q.a.hideCommentSort]: !k && z,
							[q.a.paddingBottom]: c.bucketed
						}),
						ref: m
					}, s.a.createElement("div", {
						className: q.a.containerRow
					}, !z && !R && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: q.a.DropdownContainer
					}, s.a.createElement(v.b, {
						className: Object(a.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Y,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(D.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), s.a.createElement(ee, {
						isOpen: l,
						tooltipId: Y
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = r || g,
							o = Object(E.b)(t),
							n = d.y[e],
							c = n ? n() : "";
						return s.a.createElement(C.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, s.a.createElement(v.b, {
							displayText: c,
							isSelected: S === e,
							skipRoleAttr: !0
						}))
					}))), F && !z && (_ ? s.a.createElement("button", {
						className: q.a.SortLink,
						onClick: S !== _ ? this.setSortOnClick : this.clearSortOnClick
					}, S !== _ ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : s.a.createElement("button", {
						className: q.a.SetSort
					}, s.a.createElement("button", {
						className: q.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), s.a.createElement("span", {
						id: $,
						onMouseEnter: I,
						onMouseLeave: u
					}, s.a.createElement(y.c, {
						className: q.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: $
					}), s.a.createElement(L.a, {
						className: q.a.Info
					})))), b && s.a.createElement("button", {
						className: q.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), s.a.createElement(T.a, {
						className: q.a.ToggleSwitch,
						on: P
					})), c.bucketed && s.a.createElement(s.a.Fragment, null, !R && s.a.createElement("span", {
						className: q.a.verticalDivider
					}, "|"), null == o && s.a.createElement("div", null, s.a.createElement(w.b, {
						experiment: c,
						commentId: o,
						postId: this.props.postId
					})))), k && s.a.createElement("div", {
						className: q.a.containerRow
					}, s.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: Z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: j,
						trackHighlight: M
					})), i && s.a.createElement(x.a, {
						actionText: W,
						headerText: G,
						modalText: J,
						onConfirm: this.setContestMode,
						toggleModal: N,
						withOverlay: !0
					}))
				}
			}
			t.b = oe(Object(S.c)(ne))
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
					children: o.children,
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}))
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
			})), o.d(t, "c", (function() {
				return P
			})), o.d(t, "b", (function() {
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
				u = o("./src/lib/search/index.ts"),
				p = o("./src/reddit/actions/pages/search/index.ts"),
				b = o("./src/reddit/constants/keycodes.ts"),
				h = o("./src/reddit/constants/parameters.ts"),
				O = o("./src/reddit/contexts/PageLayer/index.tsx"),
				f = o("./src/reddit/helpers/clickSourceData/index.ts"),
				g = o("./src/reddit/helpers/path/index.ts"),
				j = o("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				x = o("./src/reddit/helpers/trackers/searchResults.ts"),
				y = o("./src/reddit/hooks/usePageLayer.ts"),
				C = o("./src/reddit/hooks/useTracking.ts"),
				k = o("./src/reddit/icons/fonts/index.tsx"),
				S = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/telemetry.ts"),
				v = o("./src/reddit/controls/Search/CommentSearch/index.m.less"),
				w = o.n(v);
			const T = "SEARCH_BAR_TEST_ID",
				E = "comment-search-bar",
				I = "comment-search-button",
				N = "search-bar-dismiss-button",
				M = "search/";

			function P(e) {
				let {
					searchValue: t,
					post: o,
					subreddit: n
				} = e;
				const r = Object(u.b)(t);
				return {
					[h.z]: r,
					[h.P]: [l.ic.Comments],
					[h.C]: "1",
					...(null == n ? void 0 : n.isNSFW) ? {
						[h.L]: "1"
					} : {},
					...(null == o ? void 0 : o.isNSFW) ? {
						[h.m]: "1"
					} : {}
				}
			}

			function R(e) {
				const {
					expanded: t,
					bucketed: o
				} = e.experiment, l = Object(y.a)(), u = Object(C.a)(), h = (null == l ? void 0 : l.queryParams.q) || "", [v, R] = Object(r.useState)(h), [D, L] = Object(r.useState)(t), K = Object(c.d)(), A = Object(r.useRef)(null), F = Object(c.e)(e => Object(O.h)(e, {
					pageLayer: l
				})), H = Object(c.e)(e => Object(O.s)(e, {
					pageLayer: l
				})), U = Object(c.e)(e => Object(S.j)(e));
				var B, G;

				function W() {
					u(Object(x.p)(_.a.CommentSearchBar, P({
						searchValue: v,
						post: F,
						subreddit: H
					}), j.a.SERP, l || void 0))
				}

				function q() {
					if (!v.trim() || !F) return;
					const e = `${new URL(F.permalink).pathname}${M}`,
						t = P({
							searchValue: v,
							post: F,
							subreddit: H
						});
					u(Object(x.p)(_.a.FullSearchButton, t, j.a.SERP, l || void 0));
					const o = Object(f.b)(l),
						n = Object(m.b)(F.id, void 0, t);
					K(Object(p.d)({
						key: n,
						options: t,
						subredditName: null == H ? void 0 : H.name,
						postId: F.id
					}));
					const r = Object(a.a)(e, t);
					K(Object(i.b)(Object(g.b)(r), {
						...o,
						isOverlay: U,
						scrollOnLoad: !0
					}))
				}
				return B = A, G = L, s.a.useEffect(() => {
					function e(e) {
						B.current && !B.current.contains(e.target) && G(!1)
					}
					return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					}
				}, [B]), o ? s.a.createElement("div", {
					className: w.a.flex
				}, v || D ? s.a.createElement("div", {
					"data-testid": E
				}, s.a.createElement("label", {
					className: Object(d.a)(w.a.flex, w.a.relative)
				}, s.a.createElement("div", {
					className: w.a.absolute,
					role: "submit",
					onClick: q
				}, s.a.createElement(k.a, {
					className: Object(d.a)(w.a.postIcon, w.a.paddingIcon),
					name: "search"
				})), s.a.createElement("input", {
					className: Object(d.a)(w.a.metadataFont, w.a.input),
					"data-testid": T,
					id: E,
					type: "search",
					onChange: e => {
						R(e.target.value)
					},
					onClick: W,
					onKeyPress: function(e) {
						e.key === b.b.Enter && q()
					},
					placeholder: n.fbt._("Search comments", null, {
						hk: "2ObH7B"
					}),
					ref: A,
					value: v
				}), v && s.a.createElement("button", {
					"aria-label": n.fbt._("Remove search bar text", null, {
						hk: "4twCsS"
					}),
					id: N,
					className: w.a.dismissButton,
					"data-testid": N,
					onClick: () => {
						R("")
					}
				}, s.a.createElement(k.a, {
					className: w.a.dismissIcon,
					name: "clear"
				})))) : s.a.createElement("button", {
					className: w.a.linkTextColor,
					"data-testid": I,
					onClick: () => {
						W(), Promise.resolve(L(!0)).then(() => {
							var e;
							return null === (e = A.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, s.a.createElement(k.a, {
					className: Object(d.a)(w.a.searchIcon, w.a.paddingIcon),
					name: "search"
				}), s.a.createElement("span", {
					className: w.a.actionFont
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
			o.d(t, "g", (function() {
				return i
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "d", (function() {
				return d
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			}));
			var n = o("./node_modules/lodash/map.js"),
				r = o.n(n),
				s = o("./src/lib/FocusTrap/index.ts");
			const c = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (c(t)) return !0
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
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				m = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!l(o, e)) return;
					const {
						startContainer: n,
						startOffset: r,
						endContainer: s,
						endOffset: c
					} = o, i = document.createRange();
					i.selectNode(e);
					let a = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, o) && (i.setStart(n, r), a = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, o) && (i.setEnd(s, c), a = !1), a) return [e];
					const d = document.createElement("div");
					return d.appendChild(i.cloneContents()), [...d.childNodes]
				},
				u = (e, t, o) => {
					let n = e;
					for (; n && (!o || !o(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				p = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
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
				type: r.L.SERVER_ERROR,
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
				return y
			})), o.d(t, "j", (function() {
				return C
			})), o.d(t, "i", (function() {
				return k
			})), o.d(t, "l", (function() {
				return S
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
						d = s.type === n.Pb ? "karma_rate_limit" : s.fields && s.fields.length > 0 ? s.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${m.c}`)
						}("string" == typeof o ? o : JSON.stringify(o)) ? "giphy" : void 0;
					return Object(l.a)({
						...a,
						source: s.type === n.Pb ? "backend" : "comment_composer",
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
					subreddit: Object(d.kb)(t),
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
				}), k = () => e => ({
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
					return !!t && a(e, t) === r.U.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === r.U.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"ccd04b9eee9b"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f.e65fbbf5f150d3084d28.js.map