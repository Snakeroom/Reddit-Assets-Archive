// https://www.redditstatic.com/desktop2x/removalReasonActions.153cbd1276c814431410.js
// Retrieved at 10/27/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayMap.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/_baseMap.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : r)(e, s(t, 3))
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				s = o("./src/lib/fastdom/index.ts"),
				r = o("./src/reddit/components/CommentSort/index.tsx"),
				i = o("./src/reddit/constants/elementIds.ts");
			const c = () => {
					s.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				a = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							o = document.getElementById(r.a);
						if (t && o) {
							const n = e ? o.offsetTop : o.offsetTop - 50;
							s.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(s.c),
				i = Object(n.a)(s.b),
				c = Object(n.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return fe
			})), o.d(t, "r", (function() {
				return ge
			})), o.d(t, "p", (function() {
				return ye
			})), o.d(t, "t", (function() {
				return Se
			})), o.d(t, "w", (function() {
				return Ce
			})), o.d(t, "q", (function() {
				return ve
			})), o.d(t, "v", (function() {
				return Ee
			})), o.d(t, "o", (function() {
				return Ie
			})), o.d(t, "m", (function() {
				return we
			})), o.d(t, "b", (function() {
				return Ne
			})), o.d(t, "c", (function() {
				return De
			})), o.d(t, "s", (function() {
				return Le
			})), o.d(t, "g", (function() {
				return Ke
			})), o.d(t, "h", (function() {
				return Ue
			})), o.d(t, "k", (function() {
				return Be
			})), o.d(t, "e", (function() {
				return Ge
			})), o.d(t, "d", (function() {
				return Je
			})), o.d(t, "a", (function() {
				return We
			})), o.d(t, "j", (function() {
				return ze
			})), o.d(t, "i", (function() {
				return Ye
			})), o.d(t, "l", (function() {
				return Ze
			})), o.d(t, "u", (function() {
				return et
			})), o.d(t, "n", (function() {
				return tt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				i = o("./src/lib/scroll/index.ts"),
				c = o("./src/reddit/actions/changeUsername.ts"),
				a = o("./src/reddit/actions/login.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/onboarding/index.ts"),
				m = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/postCreation/editorContent.ts"),
				p = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = o("./src/reddit/actions/shortcuts/utils.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/constants/adEvents.ts"),
				h = o("./src/reddit/constants/localStorage.ts"),
				j = o("./src/redditGQL/operations/CommentToxicity.json"),
				g = o("./src/lib/constants/index.ts"),
				y = o("./src/lib/makeApiRequest/index.ts"),
				_ = o("./src/lib/makeGqlRequest/index.ts"),
				x = o("./src/lib/omitHeaders/index.ts"),
				S = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				C = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				R = o("./src/reddit/helpers/genericServerError/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				A = o("./src/reddit/helpers/graphql/helpers.ts"),
				N = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				M = o("./src/redditGQL/operations/CreateComment.json");
			const P = (e, t, o, n) => {
					let s, r;
					if (n === I.i.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = S.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, o, n) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === I.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(y.a)(Object(x.a)(e, [C.a]), {
						method: g.ob.POST,
						endpoint: Object(v.a)(Object(T.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: s
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
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
						error: e.error || Object(R.a)()
					})
				}, L = async (e, t, o, n, s) => {
					const r = n.commentMode === I.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : s
							}
						};
					return Object(_.a)(e, {
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
								error: Object(A.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(A.f)(t.errors)
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
							error: e.error || Object(R.a)()
						}
					})
				};
			var K = o("./src/redditGQL/operations/UpdateComment.json");
			var U = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = o("./src/reddit/endpoints/post/index.tsx"),
				F = o("./src/reddit/endpoints/post/convert.ts"),
				G = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				V = o("./src/reddit/featureFlags/index.ts"),
				H = o("./src/reddit/helpers/comment/index.ts"),
				q = o("./src/reddit/helpers/correlationIdTracker.ts"),
				J = o("./src/reddit/helpers/dom/index.ts"),
				W = o("./src/reddit/helpers/localStorage/index.ts"),
				z = o("./src/reddit/helpers/sessionStorage/index.ts"),
				Q = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				X = o("./src/reddit/models/Comment/index.ts"),
				$ = o("./src/reddit/models/PostDraft/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/index.ts"),
				Z = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = o("./src/reddit/models/Toast/index.ts"),
				te = o("./src/reddit/selectors/chatPost.ts"),
				oe = o("./src/reddit/selectors/comments.ts"),
				ne = o("./src/reddit/selectors/commentSelector.ts"),
				se = o("./src/reddit/selectors/experiments/chat.ts"),
				re = o("./src/reddit/constants/experiments.ts"),
				ie = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = o("./node_modules/reselect/es/index.js");
			const ae = Object(ce.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: re.Jb
			}), e => e === re.Vd);
			var de = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = o("./src/reddit/selectors/platform.ts"),
				me = o("./src/reddit/selectors/posts.ts"),
				ue = o("./src/reddit/selectors/user.ts"),
				pe = o("./src/reddit/actions/comment/index.ts"),
				be = o("./src/reddit/actions/comment/constants.ts");
			const Oe = Object(s.a)(be.m),
				fe = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const s = n();
						if (!!s.features.comments.drafts[o])
							if (Object(ue.T)(s) && t) {
								const n = Oe({
									hasFocus: t,
									draftKey: o
								});
								e(Object(c.startChangeUsernameFlow)(n))
							} else e(Oe({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				he = Object(s.a)(be.L),
				je = Object(s.a)(be.H),
				ge = Object(s.a)(be.N),
				ye = Object(s.a)(be.M),
				_e = Object(s.a)(be.K),
				xe = async (e, t, o, n, s) => {
					const r = n.ok && n.body,
						i = r && r.comment && r.comment.id;
					await Q.g(e, o, t, s, i)
				}, Se = "Toxicity_Warning__Modal", Ce = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const r = o(),
						i = Object(le.e)(r);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: l
					} = e;
					if (V.d.enableToxicityWarning(r)) {
						if (!(await P(s(), c, a, l))) return void t(Object(d.i)(Se))
					}
					t(ve(e))
				}, ve = e => async (t, o) => {
					t(Object(d.g)(Se));
					const n = o(),
						s = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && s) {
						const o = Object(H.e)(e.formData, n.uploads),
							s = Object(H.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(z.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(ke(e, !1))
				};

			function Re(e, t) {
				return e === I.i.MARKDOWN && ae(t)
			}
			const ke = (e, t, o, s) => {
					let {
						postId: r,
						commentsPageKey: c,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u,
						isLiveStreaming: h
					} = e;
					return async (e, j, g) => {
						let {
							apiContext: y,
							gqlContext: _
						} = g;
						var x;
						const S = j(),
							C = Object(te.d)(S, {
								postId: r
							}) && Object(se.i)(S),
							v = C ? Object(H.a)() : a,
							R = Object(ne.e)(S, {
								commentId: v
							}),
							k = Object(ue.l)(S);
						if (!k) return;
						if (R && !C) return;
						t || e(he({
							draftKey: v,
							draft: d,
							commentsPageKey: c,
							optimisticComment: C ? Object(H.b)({
								temporalId: v,
								draft: d,
								post: Object(me.G)(S, {
									postId: r
								}),
								author: k,
								subredditId: (null === (x = Object(le.e)(S)) || void 0 === x ? void 0 : x.id) || ""
							}) : void 0
						}));
						const E = k.displayText,
							T = d.commentMode;
						let w;
						const A = h ? "" : t && o ? o : Object(H.e)(d, S.uploads),
							N = Object(H.f)(A, S.uploads);
						if (h ? (w = await Object(G.i)(y(), r, d, E), e(Object(p.a)({
								streamId: r,
								level: w.body.automuteLevel
							}))) : w = Re(T, S) ? await L(_(), r, null, d, A) : await D(y(), r, d, A), w.ok) {
							let o;
							if (o = w.body, e(ge({
									...o,
									headCommentId: Object(oe.w)(S, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: v,
									upload: N
								})), t) {
								const e = Object(le.i)(S);
								Object(i.a)(!!e)
							}
							const n = Object(me.G)(j(), {
								postId: r
							});
							e(Object(m.y)(n, f.a.CommentSubmitted))
						} else {
							if (w.error) {
								const e = t && s ? s : Object(H.c)(d, S.uploads);
								Q.f({
									state: S,
									bodyText: e,
									postId: r,
									error: w.error,
									uploadMetadata: null == N ? void 0 : N.metadata
								})
							}
							const o = w.error && w.error.fields && w.error.fields[0] ? w.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(_e({
								draftKey: v,
								error: w.error
							})), C || e(Object(O.f)({
								duration: O.a,
								kind: ee.b.Error,
								text: o
							}))
						}
						xe(j(), c, l, w, null == N ? void 0 : N.metadata).then(() => w.ok && l === I.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), u || Object(b.d)(), t && Object(z.a)()
					}
				},
				Ee = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: l,
						editorMode: m
					} = e, u = o(), p = Object(le.e)(u);
					let b = "";
					if (p && (b = p.name), V.d.enableToxicityWarning(u)) {
						if (!(await P(s(), b, l, m))) return void t(Object(d.i)(Se))
					}
					t(Ie({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: l,
						editorMode: m
					}))
				}, Ie = e => async (t, o) => {
					t(Object(d.g)(Se));
					const n = o(),
						s = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && s) {
						const o = Object(H.e)(e.formData, n.uploads),
							s = Object(H.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(a.openRegisterModal)()), Object(z.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(Te(e, !1))
				}, Te = (e, t, o, n) => async (s, r, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: O,
						formData: f,
						editorMode: h
					} = e, j = r(), g = Object(ne.b)(j, {
						commentId: m
					}), y = g && Object(te.d)(j, {
						postId: g.postId
					}) && Object(se.i)(j), _ = y ? Object(H.a)() : O, x = Object(ne.e)(j, {
						commentId: _
					}), S = Object(ue.l)(j);
					if (!S) return;
					if (x && !y) return;
					t || s(he({
						draftKey: _,
						draft: f,
						commentsPageKey: u,
						optimisticComment: y && g ? Object(H.b)({
							temporalId: _,
							draft: f,
							post: Object(me.G)(j, {
								postId: g.postId
							}),
							author: S,
							subredditId: (null === (l = Object(le.e)(j)) || void 0 === l ? void 0 : l.id) || "",
							parentId: g.id
						}) : void 0
					})), s(Ne({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const C = f.commentMode,
						v = t && o ? o : Object(H.e)(f, j.uploads),
						R = Object(H.f)(v, j.uploads);
					let k;
					if ((k = Re(C, j) ? await L(d(), null, m, f, v) : await D(a(), m, f, v)).ok) {
						if (s(ye({
								...k.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: _,
								depth: p + 1,
								upload: R
							})), t) {
							const e = Object(le.i)(j);
							Object(i.a)(!!e)
						}
					} else {
						if (k.error) {
							if (!g) return;
							const e = t && n ? n : Object(H.c)(f, j.uploads);
							Q.f({
								state: j,
								bodyText: e,
								postId: g.postId,
								parentId: m,
								error: k.error,
								uploadMetadata: null == R ? void 0 : R.metadata
							})
						}
						s(_e({
							draftKey: _,
							error: k.error
						}))
					}
					xe(r(), u, h, k, null == R ? void 0 : R.metadata), Object(b.d)(), t && Object(z.a)()
				}, we = () => async e => {
					const t = Object(z.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: s,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: c
						} = t;
						c && e(Object(l.skipOnboardingModal)()), s ? await e(ke({
							...t.comment,
							postId: s
						}, !0, r, i)) : n && void 0 !== o && await e(Te({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, r, i))
					}
				}, Ae = Object(s.a)(be.s), Ne = Object(s.a)(be.r), Me = Object(s.a)(be.n), Pe = (Object(s.a)(be.i), Object(s.a)(be.o)), De = (Object(s.a)(be.v), (e, t, o) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const a = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) s(Pe({
						editorMode: e,
						draftKey: o,
						content: a ? Y.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(o));
						const r = await Object(F.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(o)), s(Pe({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(o)), s(Object(O.f)({
							duration: O.a,
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
					return async (e, s) => {
						const i = s(),
							l = Object(r.a)($.c.replyToComment, o);
						if (!Object(ue.R)(s()) && !Object(de.a)(i)) return e(Object(a.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(oe.m)(s(), {
								commentId: o
							})
						}));
						const m = i.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(Ne({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const O = i.user.prefs.commentMode,
							f = Object(J.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (O === I.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Z.s(e, null)).map(e => Z.l([e])),
									o = Z.s("", null),
									n = Z.l([o]);
								b = {
									document: [Z.c(t), n]
								}
							}
						}
						const h = i.features.comments.drafts[l];
						let j;
						if (j = f ? {
								commentMode: O,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : h || {
								commentMode: O,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ue.T)(i)) {
							const n = Ae({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: l,
								formData: j
							});
							e(Object(c.startChangeUsernameFlow)(n))
						} else e(Ae({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: l,
							formData: j
						}))
					}
				}, Ke = e => async t => {
					t(Object(pe.r)(e)), t(Ge(e))
				}, Ue = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Ne({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Be = (e, t) => o => o(Me({
					draftKey: e,
					formData: t
				})), Fe = Object(s.a)(be.u), Ge = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const c = i();
						c.user.account && (Q.c(c), e(Fe({
							commentId: t,
							commentsPageKey: n,
							draftKey: s,
							formData: {
								text: r,
								commentMode: o,
								rteState: null,
								draftType: $.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ve = Object(s.a)(be.F), He = Object(s.a)(be.E), qe = Object(s.a)(be.G), Je = Object(s.a)(be.j), We = Object(s.a)(be.f), ze = e => {
					let {
						id: t,
						commentsPageKey: o,
						draftKey: n,
						formData: s
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: c,
							gqlContext: a
						} = i;
						const d = r();
						if (!d.user.account) return;
						e(Ve({
							draftKey: n
						})), Q.d(d);
						const l = Object(H.e)(s, d.uploads),
							m = s.commentMode;
						let u;
						if ((u = Re(m, d) ? await (async (e, t, o, n, s) => {
								const r = s === I.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? o.text : null,
											richText: r ? null : n
										}
									};
								return Object(_.a)(e, {
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
											error: Object(A.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(A.f)(t.errors)
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
										error: e.error || Object(R.a)()
									}
								})
							})(a(), t, s, l, m) : await (async (e, t, o, n, s) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return s === I.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(y.a)(Object(x.a)(e, [C.a]), {
									endpoint: Object(v.a)(Object(w.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: g.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(E.a)(e)
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
									error: e.error || Object(R.a)()
								})
							})(c(), t, s, l, m)).ok) {
							const s = u.body;
							e(qe({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(pe.j)({
								[t]: {
									...s.comment
								}
							}))
						} else e(He({
							draftKey: n,
							error: u.error
						}))
					}
				}, Qe = Object(s.a)(be.C), Xe = Object(s.a)(be.B), $e = Object(s.a)(be.D), Ye = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					o(Qe({
						id: e
					})), Q.a(e, i);
					const c = await ((e, t) => Object(y.a)(Object(x.a)(e, [C.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: g.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(R.a)()
					}))(r(), e);
					c.ok ? o($e({
						id: e,
						postId: t
					})) : o(Xe({
						id: e,
						error: c.error
					}))
				}, Ze = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = !o().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(B.q)(s(), e, r)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (o, s, r) => {
					let {
						gqlContext: i
					} = r;
					var c, a, d, l, m, u;
					o(Object(pe.c)());
					const p = e => Object(O.f)(Object(O.e)(e, ee.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === h.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === X.a.FOLLOWED,
							c = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(pe.p)(c)), (await ((e, t) => Object(_.a)(e, {
								...U,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(W.xb)(null !== (m = null === (l = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(O.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(pe.p)(c)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: o,
					isLivestreaming: n = !1
				} = e;
				return async (e, s) => {
					const r = s(),
						i = Object(ne.b)(r, {
							commentId: t
						});
					if (!i) return;
					e(je({
						commentId: t,
						commentsPageKey: o
					}));
					const c = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? $.c.replyToComment : $.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(ne.b)(r, {
								commentId: i.parentId
							}),
							n = Object(oe.j)(r, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(Ie({
							commentsPageKey: o,
							draftKey: i.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: c,
							editorMode: i.media.rteMode
						}))
					} else await e(ve({
						postId: i.postId,
						commentsPageKey: o,
						draftKey: i.id,
						formData: c,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: n
					}))
				}
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return y
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "a", (function() {
				return S
			})), o.d(t, "e", (function() {
				return C
			})), o.d(t, "g", (function() {
				return v
			})), o.d(t, "h", (function() {
				return R
			})), o.d(t, "b", (function() {
				return k
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				m = o("./src/reddit/endpoints/comment/index.tsx"),
				u = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				O = o("./src/reddit/selectors/commentSelector.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				h = o("./src/reddit/actions/comment/index.ts"),
				j = o("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(j.p),
				y = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					o().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.R)(o())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const i = o().features.comments.models[e];
					if (!i) return;
					const a = i.isLocked ? m.l : m.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, x = Object(r.a)(j.J), S = e => async (t, o, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
					const c = o(),
						l = c.features.comments.models[e],
						u = c.user.account ? c.user.account.displayText : null;
					l && u && (t(Object(h.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(i(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(h.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(a.d)())
				}, C = (e, t) => async (o, s, r) => {
					let {
						apiContext: i,
						gqlContext: c
					} = r;
					const l = s(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (o(Object(h.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(c(), e, t)).ok ? o(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(h.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(a.d)())
				}, v = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o().features.comments.models[e];
					if (!i) return;
					const c = i.ignoreReports ? m.k : m.e;
					t(Object(h.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, R = (e, t, o) => async (r, i, c) => {
					let {
						gqlContext: a
					} = c;
					const l = Object(O.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = o === s.kc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(a(), {
							input: f
						})).ok) r(Object(h.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, k = (e, t, o) => async (n, r, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					n(Object(h.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.J.ADMIN,
							isMod: t === s.J.MODERATOR,
							isStickied: !!o
						}
					})), o && b && b !== e && n(Object(h.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const O = Object(m.c)(d(), e, t),
						f = Object(m.d)(d(), e, !!o),
						j = [O];
					(o || !o && e === b) && j.push(f), (await Promise.all(j)).every(e => e.ok) ? o && n(x({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(h.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), n(Object(h.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "d", (function() {
				return f
			})), o.d(t, "c", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/post/convert.ts"),
				c = o("./src/reddit/helpers/localStorage/index.ts"),
				a = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(u.G),
				b = Object(s.a)(u.p),
				O = Object(s.a)(u.Q),
				f = (e, t, o) => async (s, c, f) => {
					let {
						apiContext: j
					} = f;
					a.m(c(), t);
					const g = t === d.i.MARKDOWN,
						y = t === d.i.RICH_TEXT,
						_ = u.k;
					if (g && Object(l.H)(o)) return s(O({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void s(h(t));
					if (y && !o) return s(O({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void s(h(t));
					s(p(_));
					const x = await Object(i.a)(j(), t, g ? JSON.stringify(o) : o);
					x.ok ? (s(b(_)), s(O({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), s(h(t))) : (s(b(_)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, h = e => async (t, o) => {
					const s = Object(c.l)();
					if (s >= 3) return;
					const i = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const a = e === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(c.vb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.r),
				c = Object(n.a)(r.F),
				a = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = await Object(s.a)(r(), e);
					a && a.ok ? t(i({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(c(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Y
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), o.d(t, "removalReasonsFailed", (function() {
				return ee
			})), o.d(t, "removalReasonsRequested", (function() {
				return te
			})), o.d(t, "removalReasonAddedPending", (function() {
				return oe
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), o.d(t, "addRemovalReason", (function() {
				return re
			})), o.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), o.d(t, "editRemovalReason", (function() {
				return de
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), o.d(t, "deleteRemovalReason", (function() {
				return pe
			})), o.d(t, "removedItemsSelected", (function() {
				return be
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return he
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), o.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ye
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return xe
			})), o.d(t, "submitRemovalReason", (function() {
				return Se
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/initializeClient/installReducer.ts"),
				r = o("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				c = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case c:
					case a:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case c:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
						case m:
						case u:
						case b:
						case O:
							return !1;
						default:
							return e
					}
				},
				j = Object(r.c)({
					error: f,
					pending: h
				});
			const g = {};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							response: o
						} = t.payload, {
							data: n
						} = o;
						return {
							...e,
							...n
						}
					}
					case a:
					case m: {
						const {
							reason: o
						} = t.payload;
						return {
							...e,
							[o.id]: o
						}
					}
					case b: {
						const {
							reasonId: o
						} = t.payload, {
							[o]: n,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const _ = {};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: o,
							response: n
						} = t.payload, {
							order: s
						} = n;
						return {
							...e,
							[o]: s
						}
					}
					case a: {
						const {
							subredditId: o,
							reason: n
						} = t.payload;
						return {
							...e,
							[o]: [...e[o], n.id]
						}
					}
					case b: {
						const {
							subredditId: o,
							reasonId: n
						} = t.payload, s = [...e[o]].filter(e => e !== n);
						return {
							...e,
							[o]: s
						}
					}
					default:
						return e
				}
			};
			var S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: o
							} = t.payload;
							return {
								itemIds: o,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					api: j,
					models: y,
					reasonOrder: x,
					removedItemIds: S
				}),
				v = o("./src/lib/constants/index.ts"),
				R = o("./src/lib/makeActionCreator/index.ts"),
				k = o("./src/lib/makeCommentsPageKey/index.ts"),
				E = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				T = o("./src/reddit/actions/comment/index.ts"),
				w = o("./src/reddit/actions/comment/authoring.ts"),
				A = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				M = o("./src/reddit/actions/post.ts"),
				P = o("./src/reddit/actions/toaster.ts"),
				D = o("./src/reddit/constants/modals.ts"),
				L = o("./src/lib/makeApiRequest/index.ts"),
				K = o("./src/lib/omitHeaders/index.ts"),
				U = o("./src/reddit/constants/headers.ts"),
				B = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: v.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: v.ob.POST,
					type: "json",
					data: t
				});
			var V = o("./src/reddit/helpers/isPost.ts"),
				H = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = o("./src/reddit/helpers/routeKey/index.ts"),
				J = o("./src/reddit/models/ModQueue/index.ts"),
				W = o("./src/reddit/models/PostDraft/index.ts"),
				z = o("./src/reddit/models/RemovalReason/index.ts"),
				Q = o("./src/reddit/models/Toast/index.ts"),
				X = o("./src/reddit/selectors/comments.ts"),
				$ = o("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: C
				}
			});
			const Y = Object(R.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(R.a)(i),
				ee = Object(R.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o().subreddits.models[e].name;
					t(Y());
					const i = await ((e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: v.ob.GET
					}))(s(), r);
					i.ok ? t(Z({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, oe = Object(R.a)(c), ne = Object(R.a)(a), se = Object(R.a)(d), re = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(oe());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: v.ob.POST,
						data: o
					}))(i(), c, t);
					if (a.ok) {
						const {
							id: s
						} = a.body, r = {
							...t,
							id: s
						};
						o(ne({
							subredditId: e,
							reason: r
						})), o(Object(P.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(se(a.error))
				}, ie = Object(R.a)(l), ce = Object(R.a)(m), ae = Object(R.a)(u), de = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: v.ob.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(i(), c, t);
					a.ok ? (o(ce({
						subredditId: e,
						reason: t
					})), o(Object(P.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ae(a.error))
				}, le = Object(R.a)(p), me = Object(R.a)(b), ue = Object(R.a)(O), pe = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(le());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: v.ob.DELETE
					}))(i(), c, t);
					a.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(P.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(ue(a.error))
				}, be = Object(R.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(be({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, fe = Object(R.a)("REMOVALREASONS__SUBMIT_PENDING"), he = Object(R.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(R.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(R.a)("REMOVALREASONS__MESSAGE_PENDING"), ye = Object(R.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(R.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), xe = Object(R.a)("REMOVALREASONS__MESSAGE_FAILED"), Se = (e, t, o, n, s, r) => async (i, c, a) => {
					let {
						apiContext: d
					} = a;
					const l = c(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? z.e.Post : z.e.Comment,
						b = p === z.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						O = p === z.e.Post ? M.R : T.j;
					if (!b || !m) return !1;
					i(fe()), i(O({
						[u]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const f = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						h = await F(d(), f);
					if (h.ok) {
						if (i(he()), t) {
							i(ge());
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									isLocked: r,
									type: n
								},
								c = await G(d(), Object(z.h)(s, p), p);
							if (c.ok) {
								if ([z.f.Public, z.f.PublicAsSubreddit].includes(n)) {
									if (i(_e()), c.body) {
										const e = Object(H.a)(c.body),
											t = {
												comment: e,
												parentId: u
											},
											o = Object($.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let s = o && n && Object(q.a)(n, l, l.posts.models[e.postId]);
										if (s || (s = Object(k.a)(e.postId, null, {
												sort: v.x,
												hasSortParam: !0
											})), p === z.e.Post) {
											const o = Object(E.a)(W.c.replyToPost, u);
											i(Object(w.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: o
											}));
											const n = l.postStickiedComments.data[u];
											i(Object(A.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), n && n !== e.id && i(Object(T.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === z.e.Comment) {
											const e = Object(E.a)(W.c.replyToComment, b.id),
												o = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: s
												});
											i(Object(w.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: s,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else i(ye());
								return !0
							}
							return i(xe(c.error)), !1
						}
					} else i(je(h.error)), i(O({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, o, s, r) => async (i, c, a) => {
					let {
						apiContext: d
					} = a;
					const l = c(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(fe());
					const u = Object(P.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await F(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: J.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await G(d(), Object(z.h)(n, z.e.Bulk), z.e.Bulk);
							r.ok ? (i(ye()), i(u)) : i(xe(r.error))
						} else i(u)
					} else i(je(b.error))
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return Q
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				h = o("./src/reddit/constants/headers.ts"),
				j = o("./src/reddit/models/Toast/index.ts");
			const g = (e, t) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				const c = await (async (e, t, o) => Object(O.a)(Object(f.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: o
						}
					}))(i(), e, t),
					a = `error-block-${t}`,
					l = `success-block-${t}`;
				if (c.ok) {
					o(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					o(b.f({
						id: l,
						kind: j.b.SuccessCommunityGreen,
						text: s
					}))
				} else o(b.f({
					id: a,
					kind: j.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: g(e, t)
				}))
			};
			var y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				S = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = o("./src/reddit/components/TrackingHelper/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/index.tsx"),
				R = o("./src/reddit/controls/Dropdown/Row.tsx"),
				k = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = o("./src/reddit/helpers/path/index.ts"),
				I = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const T = (e, t, o, n, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.z)(r, void 0, {
						oldSort: o,
						sort: n,
						source: s
					}),
					userSubreddit: Object(I.ub)(r)
				}),
				w = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				A = e => ({
					subreddit: Object(I.kb)(e),
					userSubreddit: Object(I.ub)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...A
				});
			var M = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				P = o("./src/reddit/icons/svgs/Info/index.tsx"),
				D = o("./src/reddit/selectors/activeModalId.ts"),
				L = o("./src/reddit/selectors/comments.ts"),
				K = o("./src/reddit/selectors/moderatorPermissions.ts"),
				U = o("./src/reddit/selectors/posts.ts"),
				B = o("./src/reddit/selectors/tooltip.ts"),
				F = o("./src/reddit/selectors/user.ts"),
				G = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				V = o.n(G),
				H = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(S.a)(v.a),
				J = e => e === H.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === H.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== H.a.None) {
							e(t === H.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", H.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", H.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", H.a.None)
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
						selectedSort: s
					} = this.props;
					return r.a.createElement("div", {
						className: V.a.HighlightWrapper
					}, r.a.createElement(R.b, {
						className: Object(a.a)(V.a.HighlightPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(s)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: o
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(R.b, {
						displayText: J(H.a.First),
						isSelected: s === H.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(R.b, {
						displayText: J(H.a.Last),
						isSelected: s === H.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(R.b, {
						displayText: J(H.a.None),
						isSelected: s === H.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = W;
			const Q = "CommentSort--SortPicker",
				X = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				Y = Object(S.a)(v.a),
				Z = Object(c.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(L.m)(e, {
							commentId: o
						})
					},
					contestModeModalIsOpen: Object(D.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(Q),
					highlightIsOpen: Object(B.b)(X),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(K.m)(e, {
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
						const n = Object(F.w)(e),
							s = !!Object(K.m)(e, {
								postId: o
							}),
							r = Object(U.G)(e, {
								postId: o
							});
						return (s || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
				}),
				ee = Object(i.b)(Z, (e, t) => {
					let {
						postId: o
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: Q
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: X
							})), t()
						},
						onSetSuggestedSort: t => e(g(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: $
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(T(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(w("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						commentPermalink: o,
						contestModeModalIsOpen: s,
						dropdownIsOpen: i,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: b,
						post: O,
						postPermalink: f,
						selectedHighlightSort: h,
						showCommentHighlighter: j,
						sort: g,
						suggestedSort: S,
						showTooltip: C,
						toggleContestModeModal: v
					} = this.props, I = O.contestMode, T = !b.search.includes(d.w.CONFIDENCE), A = g === d.w.CONFIDENCE && T, N = u && !A, D = d.y[g], L = D ? D() : "", K = S && g === S && !A ? this.addSuggestedLabel(L) : L, U = I ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), B = I ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), F = I ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), G = I && !u;
					return r.a.createElement("div", {
						className: Object(a.a)(t, V.a.container, {
							[V.a.hideCommentSort]: !j && G
						}),
						ref: c
					}, r.a.createElement("div", {
						className: V.a.containerRow
					}, !G && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: V.a.DropdownContainer
					}, r.a.createElement(R.b, {
						className: Object(a.a)(V.a.SortPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${K}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: i,
						tooltipId: Q
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = o || f,
							n = Object(E.b)(t),
							s = d.y[e],
							i = s ? s() : "";
						return r.a.createElement(x.a, {
							className: V.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(R.b, {
							displayText: i,
							isSelected: g === e,
							skipRoleAttr: !0
						}))
					}))), N && !G && (S ? r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: g !== S ? this.setSortOnClick : this.clearSortOnClick
					}, g !== S ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: V.a.SetSort
					}, r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: $,
						onMouseEnter: C,
						onMouseLeave: l
					}, r.a.createElement(_.c, {
						className: V.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: $
					}), r.a.createElement(P.a, {
						className: V.a.Info
					})))), u && r.a.createElement("button", {
						className: V.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(k.a, {
						className: V.a.ToggleSwitch,
						on: I
					}))), j && r.a.createElement("div", {
						className: V.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: h,
						trackHighlight: w
					})), s && r.a.createElement(y.a, {
						actionText: B,
						headerText: U,
						modalText: F,
						onConfirm: this.setContestMode,
						toggleModal: v,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(C.c)(te))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return f
			})), o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = o.n(l),
				u = o("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				O = u.a.div("BottomText", m.a),
				f = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(O, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				j = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(d.b)(o)(e)
					}
				}),
				g = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				y = Object(a.a)(f, [c.a.Click, c.a.Keydown]),
				_ = Object(r.b)(j);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(g, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(y, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/helpers/overlay/index.ts");

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
					...r
				} = e, d = Object(c.b)(n);
				return s.a.createElement(i.a, a({
					className: o,
					to: d
				}, r), t)
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
				} = e, n = t ? d : r.a;
				return s.a.createElement(n, l({}, o, {
					children: o.children,
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}))
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				c = o("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const o = Object(r.a)(e, t);
				class n extends s.a.PureComponent {
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
						return s.a.createElement(o, a({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(n)
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
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/Button/index.tsx"),
				c = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = o.n(c);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(a.a.toggleSwitch, e.className, {
						[a.a.xs]: o === i.d.XS,
						[a.a.s]: o === i.d.S,
						[a.a.m]: o === i.d.M,
						[a.a.l]: o === i.d.L,
						[a.a.xl]: o === i.d.XL,
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
				}, s.a.createElement("div", {
					className: a.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return c
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
				s = o.n(n),
				r = o("./src/lib/FocusTrap/index.ts");
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
					return s()(t, e => e.textContent || "")
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
						startOffset: s,
						endContainer: r,
						endOffset: i
					} = o, c = document.createRange();
					c.selectNode(e);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, o) && (c.setStart(n, s), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, o) && (c.setEnd(r, i), a = !1), a) return [e];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
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
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.L.NO_STRIPE_SUBSCRIPTION:
							case n.L.USER_DOESNT_EXIST:
							case n.L.USER_REQUIRED_ERROR:
							case n.L.VALIDATION_ERROR:
								return e;
							case n.L.NO_USER:
							case n.L.NO_TEXT:
							case n.L.NO_URL:
								return n.L.VALIDATION_ERROR;
							case n.L.CREDIT_CARD_FAILURE:
							case n.L.CREDIT_CARD_FAILURE_GENERIC:
								return n.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.L.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "d", (function() {
					return r
				})), o.d(t, "b", (function() {
					return i
				})), o.d(t, "a", (function() {
					return c
				})), o.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
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
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => s(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!s(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return p
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "c", (function() {
				return j
			})), o.d(t, "d", (function() {
				return g
			})), o.d(t, "h", (function() {
				return y
			})), o.d(t, "k", (function() {
				return _
			})), o.d(t, "j", (function() {
				return x
			})), o.d(t, "i", (function() {
				return S
			})), o.d(t, "l", (function() {
				return C
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/correlationIdTracker.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				c = o("./src/reddit/selectors/comments.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				l = o("./src/telemetry/index.ts"),
				m = o("./src/reddit/constants/richTextJson.ts");
			const u = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.cb)(e),
						subreddit: Object(d.kb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, n, s, r) => {
					const i = {
							commentId: r,
							commentsPageKey: n
						},
						a = r && Object(c.j)(e, i) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = s ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(d.h)({
							state: e,
							commentId: r,
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
							mimetype: null == s ? void 0 : s.mimetype,
							size: null == s ? void 0 : s.size
						}
					})
				}, b = e => {
					let {
						state: t,
						bodyText: o,
						postId: s,
						error: r,
						parentId: i,
						uploadMetadata: c
					} = e;
					const a = u(t),
						d = r.type === n.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = c ? "image" : function(e) {
							return e.includes(`"id":"${m.c}`)
						}("string" == typeof o ? o : JSON.stringify(o)) ? "giphy" : void 0;
					return Object(l.a)({
						...a,
						source: r.type === n.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...a.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: o,
							parentId: i,
							postId: s,
							contentType: p
						},
						media: {
							mimetype: null == c ? void 0 : c.mimetype,
							size: null == c ? void 0 : c.size
						}
					})
				}, O = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), f = (e, t) => {
					t === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.cb)(t),
					subreddit: Object(d.kb)(t),
					post: Object(d.K)(t, e)
				}), j = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), g = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), y = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...u(o),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, _ = () => e => ({
					...u(e),
					action: "open",
					noun: "gif_tooltip"
				}), x = e => t => ({
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
				}), C = () => e => ({
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
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = o.n(i);

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
				return s.a.createElement("svg", a({
					className: Object(r.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "h", (function() {
				return m
			}));
			var n = o("./src/reddit/helpers/isPost.ts");
			const s = 50,
				r = 50,
				i = 1e4,
				c = 100;
			var a, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(a || (a = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				m = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
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
				s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => c.find(t => !!Object(i.a)(a(e, t))),
				l = Object(n.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === s.db.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === s.db.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"b282a5b92ecf"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.153cbd1276c814431410.js.map