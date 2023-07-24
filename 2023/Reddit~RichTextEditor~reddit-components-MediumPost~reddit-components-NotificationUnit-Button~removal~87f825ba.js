// https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba.76a690674af794c07722.js
// Retrieved at 7/24/2023, 1:20:03 PM by Reddit Dataminer v1.0.0
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
				return Oe
			})), o.d(t, "r", (function() {
				return je
			})), o.d(t, "p", (function() {
				return xe
			})), o.d(t, "t", (function() {
				return Se
			})), o.d(t, "w", (function() {
				return ve
			})), o.d(t, "q", (function() {
				return _e
			})), o.d(t, "v", (function() {
				return Ee
			})), o.d(t, "o", (function() {
				return Te
			})), o.d(t, "m", (function() {
				return Me
			})), o.d(t, "b", (function() {
				return Pe
			})), o.d(t, "c", (function() {
				return Le
			})), o.d(t, "s", (function() {
				return Ke
			})), o.d(t, "g", (function() {
				return Ae
			})), o.d(t, "h", (function() {
				return Fe
			})), o.d(t, "k", (function() {
				return Be
			})), o.d(t, "e", (function() {
				return Ue
			})), o.d(t, "d", (function() {
				return Je
			})), o.d(t, "a", (function() {
				return Qe
			})), o.d(t, "j", (function() {
				return ze
			})), o.d(t, "i", (function() {
				return Ye
			})), o.d(t, "l", (function() {
				return $e
			})), o.d(t, "u", (function() {
				return et
			})), o.d(t, "n", (function() {
				return tt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/lib/reCaptchaEnterprise/index.ts"),
				i = o("./src/lib/scroll/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/actions/onboarding/index.ts"),
				u = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/postCreation/editorContent.ts"),
				b = o("./src/reddit/actions/reCaptchaEnterprise.ts"),
				h = o("./src/reddit/actions/shortcuts/utils.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/constants/adEvents.ts"),
				g = o("./src/reddit/constants/experiments.ts"),
				j = o("./src/reddit/constants/localStorage.ts"),
				x = o("./src/redditGQL/operations/CommentToxicity.json"),
				C = o("./src/lib/constants/index.ts"),
				y = o("./src/lib/makeApiRequest/index.ts"),
				S = o("./src/lib/makeGqlRequest/index.ts"),
				v = o("./src/lib/omitHeaders/index.ts"),
				_ = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				k = o("./src/reddit/constants/headers.ts"),
				w = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = o("./src/reddit/helpers/genericServerError/index.ts"),
				T = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				M = o("./src/reddit/models/PostCreationForm/index.ts"),
				N = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = o("./src/reddit/helpers/graphql/helpers.ts"),
				D = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				L = o("./src/redditGQL/operations/CreateComment.json");
			const K = (e, t, o, n) => {
					let r, s;
					if (n === M.i.MARKDOWN) r = o.text, s = null;
					else {
						r = null;
						let e = null;
						o.rteState && (e = _.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(S.a)(e, {
						...x,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				A = async (e, t, o, n) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === M.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(y.a)(Object(v.a)(e, [k.a]), {
						method: C.ob.POST,
						endpoint: Object(w.a)(Object(N.a)(Object(P.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(E.a)()
					})
				}, F = async (e, t, o, n, r) => {
					const s = n.commentMode === M.i.MARKDOWN,
						c = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: s ? n.text : null,
								richText: s ? null : r
							}
						};
					return Object(S.a)(e, {
						...L,
						variables: {
							input: c
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
									comment: Object(D.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(E.a)()
						}
					})
				};
			var B = o("./src/redditGQL/operations/UpdateComment.json");
			var H = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = o("./src/reddit/endpoints/post/index.tsx"),
				G = o("./src/reddit/endpoints/post/convert.ts"),
				q = o("./src/reddit/featureFlags/index.ts"),
				W = o("./src/reddit/helpers/comment/index.ts"),
				J = o("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = o("./src/reddit/helpers/dom/index.ts"),
				z = o("./src/reddit/helpers/localStorage/index.ts"),
				V = o("./src/reddit/helpers/sessionStorage/index.ts"),
				X = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				Z = o("./src/reddit/models/Comment/index.ts"),
				Y = o("./src/reddit/models/PostDraft/index.ts"),
				$ = o("./src/reddit/models/RichTextJson/index.ts"),
				ee = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				te = o("./src/reddit/models/Toast/index.ts"),
				oe = o("./src/reddit/selectors/chatPost.ts"),
				ne = o("./src/reddit/selectors/comments.ts"),
				re = o("./src/reddit/selectors/commentSelector.ts"),
				se = o("./src/reddit/selectors/experiments/chat.ts"),
				ce = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = o("./node_modules/reselect/es/index.js");
			const ae = Object(ie.a)(e => Object(ce.c)(e, {
				experimentEligibilitySelector: ce.a,
				experimentName: g.Mb
			}), e => e === g.Zd);
			var de = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = o("./src/reddit/selectors/platform.ts"),
				me = o("./src/reddit/selectors/posts.ts"),
				ue = o("./src/reddit/selectors/user.ts"),
				pe = o("./src/reddit/actions/comment/index.ts"),
				be = o("./src/reddit/actions/comment/constants.ts");
			const he = Object(r.a)(be.m),
				Oe = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const r = n();
						if (!!r.features.comments.drafts[o])
							if (Object(ue.U)(r) && t) {
								const n = he({
									hasFocus: t,
									draftKey: o
								});
								e(Object(a.startChangeUsernameFlow)(n))
							} else e(he({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				fe = Object(r.a)(be.L),
				ge = Object(r.a)(be.H),
				je = Object(r.a)(be.N),
				xe = Object(r.a)(be.M),
				Ce = Object(r.a)(be.K),
				ye = async (e, t, o, n, r) => {
					const s = n.ok && n.body,
						c = s && s.comment && s.comment.id;
					await X.g(e, o, t, r, c)
				}, Se = "Toxicity_Warning__Modal", ve = e => async (t, o, n) => {
					let {
						gqlContext: r
					} = n;
					const s = o(),
						c = Object(le.e)(s);
					let i = "";
					c && (i = c.name);
					const {
						formData: a,
						editorMode: d
					} = e;
					if (q.d.enableToxicityWarning(s)) {
						if (!(await K(r(), i, a, d))) return void t(Object(l.i)(Se))
					}
					t(_e(e))
				}, _e = e => async (t, o) => {
					t(Object(l.g)(Se));
					const n = o(),
						r = Object(de.a)(n),
						s = Object(de.c)(n);
					if (!n.user.account && r) {
						const o = Object(W.e)(e.formData, n.uploads),
							r = Object(W.d)(e.formData, n.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(V.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(we(e, !1))
				};

			function ke(e, t) {
				return e === M.i.MARKDOWN && ae(t)
			}
			const we = (e, t, o, r) => {
					let {
						postId: s,
						commentsPageKey: a,
						draftKey: d,
						formData: l,
						editorMode: m,
						disableAutofocus: p
					} = e;
					return async (e, j, x) => {
						let {
							apiContext: C,
							gqlContext: y
						} = x;
						var S;
						await e(Object(b.b)({
							action: c.a.CommentSubmit,
							catchAndLogError: !0,
							experiment: g.K
						}));
						const v = j(),
							_ = Object(oe.d)(v, {
								postId: s
							}),
							k = _ ? Object(W.b)() : d,
							w = Object(re.f)(v, {
								commentId: k
							}),
							E = Object(ue.m)(v);
						if (!E) return;
						if (w && !_) return;
						t || e(fe({
							draftKey: k,
							draft: l,
							commentsPageKey: a,
							optimisticComment: _ ? Object(W.c)({
								temporalId: k,
								draft: l,
								post: Object(me.F)(v, {
									postId: s
								}),
								author: E,
								subredditId: (null === (S = Object(le.e)(v)) || void 0 === S ? void 0 : S.id) || ""
							}) : void 0
						}));
						const T = l.commentMode;
						let I;
						const N = t && o ? o : Object(W.e)(l, v.uploads),
							P = Object(W.f)(N, v.uploads);
						if ((I = ke(T, v) ? await F(y(), s, null, l, N) : await A(C(), s, l, N)).ok) {
							const o = I.body;
							if (e(je({
									...o,
									headCommentId: Object(ne.w)(v, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: k,
									upload: P
								})), t) {
								const e = Object(le.i)(v);
								Object(i.a)(!!e)
							}
							const n = Object(me.F)(j(), {
								postId: s
							});
							e(Object(u.y)(n, f.a.CommentSubmitted))
						} else {
							if (I.error) {
								const e = t && r ? r : Object(W.d)(l, v.uploads);
								X.f({
									state: v,
									bodyText: e,
									postId: s,
									error: I.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const o = I.error && I.error.fields && I.error.fields[0] ? I.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Ce({
								draftKey: k,
								error: I.error
							})), _ || e(Object(O.f)({
								duration: O.a,
								kind: te.b.Error,
								text: o
							}))
						}
						ye(j(), a, m, I, null == P ? void 0 : P.metadata).then(() => I.ok && m === M.i.RICH_TEXT ? Object(J.b)(J.a.CommentComposer) : void 0), p || Object(h.d)(), t && Object(V.a)()
					}
				},
				Ee = e => async (t, o, n) => {
					let {
						gqlContext: r
					} = n;
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: i,
						draftKey: a,
						formData: d,
						editorMode: m
					} = e, u = o(), p = Object(le.e)(u);
					let b = "";
					if (p && (b = p.name), q.d.enableToxicityWarning(u)) {
						if (!(await K(r(), b, d, m))) return void t(Object(l.i)(Se))
					}
					t(Te({
						commentsPageKey: c,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: d,
						editorMode: m
					}))
				}, Te = e => async (t, o) => {
					t(Object(l.g)(Se)), await t(Object(b.b)({
						action: c.a.CommentSubmit,
						catchAndLogError: !0,
						experiment: g.K
					}));
					const n = o(),
						r = Object(de.a)(n),
						s = Object(de.c)(n);
					if (!n.user.account && r) {
						const o = Object(W.e)(e.formData, n.uploads),
							r = Object(W.d)(e.formData, n.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(V.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(Ie(e, !1))
				}, Ie = (e, t, o, n) => async (r, s, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: b,
						formData: O,
						editorMode: f
					} = e, g = s(), j = Object(re.c)(g, {
						commentId: m
					}), x = j && Object(oe.d)(g, {
						postId: j.postId
					}) && Object(se.e)(g), C = j && Object(oe.d)(g, {
						postId: j.postId
					}), y = C ? Object(W.b)() : b, S = Object(re.f)(g, {
						commentId: y
					}), v = Object(ue.m)(g);
					if (!v) return;
					if (S && !C) return;
					t || r(fe({
						draftKey: y,
						draft: O,
						commentsPageKey: u,
						optimisticComment: C && j ? Object(W.c)({
							temporalId: y,
							draft: O,
							post: Object(me.F)(g, {
								postId: j.postId
							}),
							author: v,
							subredditId: (null === (l = Object(le.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: j.id
						}) : void 0
					})), x || r(Pe({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const _ = O.commentMode,
						k = t && o ? o : Object(W.e)(O, g.uploads),
						w = Object(W.f)(k, g.uploads);
					let E;
					if ((E = ke(_, g) ? await F(d(), null, m, O, k) : await A(a(), m, O, k)).ok) {
						if (r(xe({
								...E.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: p + 1,
								upload: w
							})), t) {
							const e = Object(le.i)(g);
							Object(i.a)(!!e)
						}
					} else {
						if (E.error) {
							if (!j) return;
							const e = t && n ? n : Object(W.d)(O, g.uploads);
							X.f({
								state: g,
								bodyText: e,
								postId: j.postId,
								parentId: m,
								error: E.error,
								uploadMetadata: null == w ? void 0 : w.metadata
							})
						}
						r(Ce({
							draftKey: y,
							error: E.error
						}))
					}
					ye(s(), u, f, E, null == w ? void 0 : w.metadata), x || Object(h.d)(), t && Object(V.a)()
				}, Me = () => async e => {
					const t = Object(V.b)();
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
						i && e(Object(m.skipOnboardingModal)()), r ? await e(we({
							...t.comment,
							postId: r
						}, !0, s, c)) : n && void 0 !== o && await e(Ie({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, s, c))
					}
				}, Ne = Object(r.a)(be.s), Pe = Object(r.a)(be.r), Re = Object(r.a)(be.n), De = (Object(r.a)(be.i), Object(r.a)(be.o)), Le = (Object(r.a)(be.v), (e, t, o) => async (r, s, c) => {
					let {
						apiContext: i
					} = c;
					const a = e === M.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object($.I)(t)) r(De({
						editorMode: e,
						draftKey: o,
						content: a ? $.j : ""
					})), r(Object(p.c)(e));
					else {
						r(Object(p.b)(o));
						const s = await Object(G.a)(i(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(p.a)(o)), r(De({
								editorMode: e,
								draftKey: o,
								content: t
							})), r(Object(p.c)(e))
						} else r(Object(p.a)(o)), r(Object(O.f)({
							duration: O.a,
							kind: te.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Ke = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, r) => {
						const c = r(),
							i = Object(s.a)(Y.c.replyToComment, o);
						if (!Object(ue.S)(r()) && !Object(de.a)(c)) return e(Object(d.openRegisterModal)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ne.m)(r(), {
								commentId: o
							})
						}));
						const m = c.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(Pe({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const h = c.user.prefs.commentMode,
							O = Object(Q.d)();
						if (O) {
							const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === M.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => ee.s(e, null)).map(e => ee.l([e])),
									o = ee.s("", null),
									n = ee.l([o]);
								b = {
									document: [ee.c(t), n]
								}
							}
						}
						const f = c.features.comments.drafts[i];
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
							}, Object(ue.U)(c)) {
							const n = Ne({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: i,
								formData: g
							});
							e(Object(a.startChangeUsernameFlow)(n))
						} else e(Ne({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: i,
							formData: g
						}))
					}
				}, Ae = e => async t => {
					t(Object(pe.r)(e)), t(Ue(e))
				}, Fe = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Pe({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Ke({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Be = (e, t) => o => o(Re({
					draftKey: e,
					formData: t
				})), He = Object(r.a)(be.u), Ue = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: r,
						text: s
					} = e;
					return async (e, c) => {
						const i = c();
						i.user.account && (X.c(i), e(He({
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
				}, Ge = Object(r.a)(be.F), qe = Object(r.a)(be.E), We = Object(r.a)(be.G), Je = Object(r.a)(be.j), Qe = Object(r.a)(be.f), ze = e => {
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
						e(Ge({
							draftKey: n
						})), X.d(d);
						const l = Object(W.e)(r, d.uploads),
							m = r.commentMode;
						let u;
						if ((u = ke(m, d) ? await (async (e, t, o, n, r) => {
								const s = r === M.i.MARKDOWN,
									c = {
										commentId: t,
										content: {
											markdown: s ? o.text : null,
											richText: s ? null : n
										}
									};
								return Object(S.a)(e, {
									...B,
									variables: {
										input: c
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
													...Object(D.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(E.a)()
									}
								})
							})(a(), t, r, l, m) : await (async (e, t, o, n, r) => {
								const s = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === M.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(y.a)(Object(v.a)(e, [k.a]), {
									endpoint: Object(w.a)(Object(P.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
									method: C.ob.POST,
									data: s
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(I.a)(e)
								} : {
									...e,
									body: {
										comment: Object(T.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(T.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(E.a)()
								})
							})(i(), t, r, l, m)).ok) {
							const r = u.body;
							e(We({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(pe.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(qe({
							draftKey: n,
							error: u.error
						}))
					}
				}, Ve = Object(r.a)(be.C), Xe = Object(r.a)(be.B), Ze = Object(r.a)(be.D), Ye = (e, t) => async (o, n, r) => {
					let {
						apiContext: s
					} = r;
					const c = n();
					o(Ve({
						id: e
					})), X.a(e, c);
					const i = await ((e, t) => Object(y.a)(Object(v.a)(e, [k.a]), {
						endpoint: Object(w.a)(`${e.apiUrl}/api/del`),
						method: C.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(E.a)()
					}))(s(), e);
					i.ok ? o(Ze({
						id: e,
						postId: t
					})) : o(Xe({
						id: e,
						error: i.error
					}))
				}, $e = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(U.p)(r(), e, s)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, et = (e, t) => async (o, r, s) => {
					let {
						gqlContext: c
					} = s;
					var i, a, d, l, m, u;
					o(Object(pe.c)());
					const p = e => Object(O.f)(Object(O.e)(e, te.b.Error));
					if (((null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = t === Z.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(pe.p)(i)), (await ((e, t) => Object(S.a)(e, {
								...H,
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
							o(Object(O.f)({
								kind: te.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(pe.p)(i)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: o
				} = e;
				return async (e, n) => {
					const r = n(),
						s = Object(re.c)(r, {
							commentId: t
						});
					if (!s) return;
					e(ge({
						commentId: t,
						commentsPageKey: o
					}));
					const c = {
						commentMode: s.media.rteMode,
						draftType: s.parentId ? Y.c.replyToComment : Y.c.replyToPost,
						rtJson: s.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (s.parentId) {
						const t = Object(re.c)(r, {
								commentId: s.parentId
							}),
							n = Object(ne.j)(r, {
								commentId: s.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(Te({
							commentsPageKey: o,
							draftKey: s.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: c,
							editorMode: s.media.rteMode
						}))
					} else await e(_e({
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
					if (j && Object(l.I)(o)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (x && !o) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.j
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
				E = o("./src/reddit/controls/Dropdown/Row.tsx"),
				T = o("./src/reddit/controls/Search/CommentSearch/index.tsx"),
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
					listing: Object(N.A)(s, void 0, {
						oldSort: o,
						sort: n,
						source: r
					}),
					userSubreddit: Object(N.vb)(s)
				}),
				R = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				D = e => ({
					subreddit: Object(N.mb)(e),
					userSubreddit: Object(N.vb)(e)
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
			const V = Object(S.a)(w.a),
				X = e => e === z.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === z.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends s.a.Component {
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
					}, s.a.createElement(E.b, {
						className: Object(a.a)(Q.a.HighlightPicker, Q.a.Row),
						textClassName: Q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${X(r)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), s.a.createElement(K.b, {
						className: Q.a.DropdownTriangle,
						onClick: o
					}), s.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, s.a.createElement(E.b, {
						displayText: X(z.a.First),
						isSelected: r === z.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(E.b, {
						displayText: X(z.a.Last),
						isSelected: r === z.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(E.b, {
						displayText: X(z.a.None),
						isSelected: r === z.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = Z;
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
					} = this.props, L = j.contestMode, F = null == r, B = i.bucketed && Object(v.a)(g) && Object(v.b)(j), H = i.bucketed && Object(v.b)(j) && F, U = !(null === (e = f.search) || void 0 === e ? void 0 : e.includes(d.v.CONFIDENCE)), G = w === d.v.CONFIDENCE && U, q = h && !G, W = d.x[w], J = W ? W() : "", z = N && w === N && !G ? this.addSuggestedLabel(J) : J, V = L ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), X = L ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), Z = L ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), ne = L && !h, re = s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Q.a.DropdownContainer
					}, s.a.createElement(E.b, {
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
						}, s.a.createElement(E.b, {
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
					}, "|")), s.a.createElement("div", null, s.a.createElement(T.c, {
						experiment: i,
						commentId: r,
						prevLocation: f,
						postId: this.props.postId
					}))) : null), k && s.a.createElement("div", {
						className: Q.a.containerRow
					}, s.a.createElement(Y, {
						changeHighlightSort: t,
						highlightIsOpen: b,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: _,
						trackHighlight: R
					})), l && s.a.createElement(x.a, {
						actionText: X,
						headerText: V,
						modalText: Z,
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
				return T
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
				E = o.n(w);
			const T = "comment_search-bar",
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

				function V() {
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
					className: E.a.flex
				}, D || K ? s.a.createElement("div", {
					"data-testid": T
				}, s.a.createElement("label", {
					className: Object(d.a)(E.a.flex, E.a.relative)
				}, s.a.createElement("div", {
					className: E.a.absolute,
					role: "submit",
					onClick: V
				}, s.a.createElement(S.a, {
					className: Object(d.a)(E.a.postIcon, E.a.paddingIcon),
					name: "search"
				})), s.a.createElement("input", {
					className: Object(d.a)(E.a.metadataFont, E.a.input),
					"data-testid": N,
					id: T,
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
						e.key === p.b.Enter && V()
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
					className: E.a.dismissButton,
					"data-testid": M,
					onClick: () => {
						L("")
					}
				}, s.a.createElement(S.a, {
					className: E.a.dismissIcon,
					name: "clear"
				})))) : s.a.createElement("button", {
					className: E.a.linkTextColor,
					"data-testid": I,
					id: I,
					onClick: () => {
						Promise.resolve(A(!0)).then(() => {
							var e;
							return null === (e = B.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, s.a.createElement(S.a, {
					className: Object(d.a)(E.a.searchIcon, E.a.paddingIcon),
					name: "search"
				}), s.a.createElement("span", {
					className: E.a.actionFont
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
						...Object(d.p)(e),
						screen: Object(d.db)(e),
						subreddit: Object(d.mb)(e),
						post: t ? Object(d.L)(e, t) : null,
						profile: Object(d.U)(e),
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
						comment: s ? Object(d.i)({
							state: e,
							commentId: s,
							contentType: p
						}) : null,
						listing: Object(d.A)(e, void 0, {
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
					...Object(d.p)(t),
					screen: Object(d.db)(t),
					subreddit: Object(d.mb)(t),
					post: Object(d.L)(t, e)
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
					return !!t && a(e, t) === r.Z.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === r.Z.RegOnboarding
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba.76a690674af794c07722.js.map