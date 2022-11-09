// https://www.redditstatic.com/desktop2x/removalReasonActions.f0f7accb6a31124af5d1.js
// Retrieved at 11/9/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayMap.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/_baseMap.js"),
				c = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (c(e) ? n : r)(e, s(t, 3))
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				s = o("./src/lib/fastdom/index.ts"),
				r = o("./src/reddit/components/CommentSort/index.tsx"),
				c = o("./src/reddit/constants/elementIds.ts");
			const i = () => {
					s.a.write(() => {
						const e = document.getElementById(c.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				a = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(c.e) : window,
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
				return c
			})), o.d(t, "a", (function() {
				return i
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(s.c),
				c = Object(n.a)(s.b),
				i = Object(n.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return Oe
			})), o.d(t, "r", (function() {
				return je
			})), o.d(t, "p", (function() {
				return ge
			})), o.d(t, "t", (function() {
				return Se
			})), o.d(t, "w", (function() {
				return _e
			})), o.d(t, "q", (function() {
				return ve
			})), o.d(t, "v", (function() {
				return Re
			})), o.d(t, "o", (function() {
				return Ee
			})), o.d(t, "m", (function() {
				return Te
			})), o.d(t, "b", (function() {
				return Ae
			})), o.d(t, "c", (function() {
				return Me
			})), o.d(t, "s", (function() {
				return Le
			})), o.d(t, "g", (function() {
				return De
			})), o.d(t, "h", (function() {
				return Ke
			})), o.d(t, "k", (function() {
				return Ue
			})), o.d(t, "e", (function() {
				return Fe
			})), o.d(t, "d", (function() {
				return qe
			})), o.d(t, "a", (function() {
				return Je
			})), o.d(t, "j", (function() {
				return We
			})), o.d(t, "i", (function() {
				return $e
			})), o.d(t, "l", (function() {
				return Ye
			})), o.d(t, "u", (function() {
				return Ze
			})), o.d(t, "n", (function() {
				return et
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/lib/scroll/index.ts"),
				i = o("./src/reddit/actions/changeUsername.ts"),
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
				x = o("./src/lib/makeApiRequest/index.ts"),
				y = o("./src/lib/makeGqlRequest/index.ts"),
				S = o("./src/lib/omitHeaders/index.ts"),
				_ = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = o("./src/reddit/constants/headers.ts"),
				C = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = o("./src/reddit/helpers/genericServerError/index.ts"),
				R = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				A = o("./src/reddit/helpers/graphql/helpers.ts"),
				N = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				P = o("./src/redditGQL/operations/CreateComment.json");
			const M = (e, t, o, n) => {
					let s, r;
					if (n === I.i.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = _.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, o, n) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === I.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(x.a)(Object(S.a)(e, [v.a]), {
						method: g.ob.POST,
						endpoint: Object(C.a)(Object(T.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: s
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
					} : {
						...e,
						body: {
							comment: Object(R.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(R.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(k.a)()
					})
				}, D = async (e, t, o, n, s) => {
					const r = n.commentMode === I.i.MARKDOWN,
						c = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : s
							}
						};
					return Object(y.a)(e, {
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
							error: e.error || Object(k.a)()
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
				se = o("./src/reddit/constants/experiments.ts"),
				re = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = o("./node_modules/reselect/es/index.js");
			const ie = Object(ce.a)(e => Object(re.c)(e, {
				experimentEligibilitySelector: re.a,
				experimentName: se.Cb
			}), e => e === se.Jd);
			var ae = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = o("./src/reddit/selectors/platform.ts"),
				le = o("./src/reddit/selectors/posts.ts"),
				me = o("./src/reddit/selectors/user.ts"),
				ue = o("./src/reddit/actions/comment/index.ts"),
				pe = o("./src/reddit/actions/comment/constants.ts");
			const be = Object(s.a)(pe.m),
				Oe = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const s = n();
						if (!!s.features.comments.drafts[o])
							if (Object(me.T)(s) && t) {
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
				fe = Object(s.a)(pe.L),
				he = Object(s.a)(pe.H),
				je = Object(s.a)(pe.N),
				ge = Object(s.a)(pe.M),
				xe = Object(s.a)(pe.K),
				ye = async (e, t, o, n, s) => {
					const r = n.ok && n.body,
						c = r && r.comment && r.comment.id;
					await Q.g(e, o, t, s, c)
				}, Se = "Toxicity_Warning__Modal", _e = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const r = o(),
						c = Object(de.e)(r);
					let i = "";
					c && (i = c.name);
					const {
						formData: a,
						editorMode: l
					} = e;
					if (V.d.enableToxicityWarning(r)) {
						if (!(await M(s(), i, a, l))) return void t(Object(d.i)(Se))
					}
					t(ve(e))
				}, ve = e => async (t, o) => {
					t(Object(d.g)(Se));
					const n = o(),
						s = Object(ae.a)(n),
						r = Object(ae.c)(n);
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

			function Ce(e, t) {
				return e === I.i.MARKDOWN && ie(t)
			}
			const ke = (e, t, o, s) => {
					let {
						postId: r,
						commentsPageKey: i,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u,
						isLiveStreaming: h
					} = e;
					return async (e, j, g) => {
						let {
							apiContext: x,
							gqlContext: y
						} = g;
						var S;
						const _ = j(),
							v = Object(te.d)(_, {
								postId: r
							}),
							C = v ? Object(H.a)() : a,
							k = Object(ne.e)(_, {
								commentId: C
							}),
							R = Object(me.l)(_);
						if (!R) return;
						if (k && !v) return;
						t || e(fe({
							draftKey: C,
							draft: d,
							commentsPageKey: i,
							optimisticComment: v ? Object(H.b)({
								temporalId: C,
								draft: d,
								post: Object(le.G)(_, {
									postId: r
								}),
								author: R,
								subredditId: (null === (S = Object(de.e)(_)) || void 0 === S ? void 0 : S.id) || ""
							}) : void 0
						}));
						const E = R.displayText,
							T = d.commentMode;
						let w;
						const A = h ? "" : t && o ? o : Object(H.e)(d, _.uploads),
							N = Object(H.f)(A, _.uploads);
						if (h ? (w = await Object(G.i)(x(), r, d, E), e(Object(p.a)({
								streamId: r,
								level: w.body.automuteLevel
							}))) : w = Ce(T, _) ? await D(y(), r, null, d, A) : await L(x(), r, d, A), w.ok) {
							let o;
							if (o = w.body, e(je({
									...o,
									headCommentId: Object(oe.w)(_, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: C,
									upload: N
								})), t) {
								const e = Object(de.j)(_);
								Object(c.a)(!!e)
							}
							const n = Object(le.G)(j(), {
								postId: r
							});
							e(Object(m.y)(n, f.a.CommentSubmitted))
						} else {
							if (w.error) {
								const e = t && s ? s : Object(H.c)(d, _.uploads);
								Q.f({
									state: _,
									bodyText: e,
									postId: r,
									error: w.error,
									uploadMetadata: null == N ? void 0 : N.metadata
								})
							}
							const o = w.error && w.error.fields && w.error.fields[0] ? w.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(xe({
								draftKey: C,
								error: w.error
							})), v || e(Object(O.f)({
								duration: O.a,
								kind: ee.b.Error,
								text: o
							}))
						}
						ye(j(), i, l, w, null == N ? void 0 : N.metadata).then(() => w.ok && l === I.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), u || Object(b.d)(), t && Object(z.a)()
					}
				},
				Re = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: c,
						parentCommentDepth: i,
						draftKey: a,
						formData: l,
						editorMode: m
					} = e, u = o(), p = Object(de.e)(u);
					let b = "";
					if (p && (b = p.name), V.d.enableToxicityWarning(u)) {
						if (!(await M(s(), b, l, m))) return void t(Object(d.i)(Se))
					}
					t(Ee({
						commentsPageKey: c,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: m
					}))
				}, Ee = e => async (t, o) => {
					t(Object(d.g)(Se));
					const n = o(),
						s = Object(ae.a)(n),
						r = Object(ae.c)(n);
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
					} else t(Ie(e, !1))
				}, Ie = (e, t, o, n) => async (s, r, i) => {
					let {
						apiContext: a,
						gqlContext: d
					} = i;
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
					}), x = g && Object(te.d)(j, {
						postId: g.postId
					}), y = x ? Object(H.a)() : O, S = Object(ne.e)(j, {
						commentId: y
					}), _ = Object(me.l)(j);
					if (!_) return;
					if (S && !x) return;
					t || s(fe({
						draftKey: y,
						draft: f,
						commentsPageKey: u,
						optimisticComment: x && g ? Object(H.b)({
							temporalId: y,
							draft: f,
							post: Object(le.G)(j, {
								postId: g.postId
							}),
							author: _,
							subredditId: (null === (l = Object(de.e)(j)) || void 0 === l ? void 0 : l.id) || "",
							parentId: g.id
						}) : void 0
					})), s(Ae({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const v = f.commentMode,
						C = t && o ? o : Object(H.e)(f, j.uploads),
						k = Object(H.f)(C, j.uploads);
					let R;
					if ((R = Ce(v, j) ? await D(d(), null, m, f, C) : await L(a(), m, f, C)).ok) {
						if (s(ge({
								...R.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: p + 1,
								upload: k
							})), t) {
							const e = Object(de.j)(j);
							Object(c.a)(!!e)
						}
					} else {
						if (R.error) {
							if (!g) return;
							const e = t && n ? n : Object(H.c)(f, j.uploads);
							Q.f({
								state: j,
								bodyText: e,
								postId: g.postId,
								parentId: m,
								error: R.error,
								uploadMetadata: null == k ? void 0 : k.metadata
							})
						}
						s(xe({
							draftKey: y,
							error: R.error
						}))
					}
					ye(r(), u, h, R, null == k ? void 0 : k.metadata), Object(b.d)(), t && Object(z.a)()
				}, Te = () => async e => {
					const t = Object(z.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: s,
								richTextJSONData: r,
								commentBodyText: c
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(l.skipOnboardingModal)()), s ? await e(ke({
							...t.comment,
							postId: s
						}, !0, r, c)) : n && void 0 !== o && await e(Ie({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, r, c))
					}
				}, we = Object(s.a)(pe.s), Ae = Object(s.a)(pe.r), Ne = Object(s.a)(pe.n), Pe = (Object(s.a)(pe.i), Object(s.a)(pe.o)), Me = (Object(s.a)(pe.v), (e, t, o) => async (s, r, c) => {
					let {
						apiContext: i
					} = c;
					const a = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) s(Pe({
						editorMode: e,
						draftKey: o,
						content: a ? Y.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(o));
						const r = await Object(F.a)(i(), e, a ? t : JSON.stringify(t));
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
						const c = s(),
							l = Object(r.a)($.c.replyToComment, o);
						if (!Object(me.R)(s()) && !Object(ae.a)(c)) return e(Object(a.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(oe.m)(s(), {
								commentId: o
							})
						}));
						const m = c.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(Ae({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const O = c.user.prefs.commentMode,
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
						const h = c.features.comments.drafts[l];
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
							}, Object(me.T)(c)) {
							const n = we({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: l,
								formData: j
							});
							e(Object(i.startChangeUsernameFlow)(n))
						} else e(we({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: l,
							formData: j
						}))
					}
				}, De = e => async t => {
					t(Object(ue.r)(e)), t(Fe(e))
				}, Ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Ae({
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
				}, Ue = (e, t) => o => o(Ne({
					draftKey: e,
					formData: t
				})), Be = Object(s.a)(pe.u), Fe = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: s,
						text: r
					} = e;
					return async (e, c) => {
						const i = c();
						i.user.account && (Q.c(i), e(Be({
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
				}, Ge = Object(s.a)(pe.F), Ve = Object(s.a)(pe.E), He = Object(s.a)(pe.G), qe = Object(s.a)(pe.j), Je = Object(s.a)(pe.f), We = e => {
					let {
						id: t,
						commentsPageKey: o,
						draftKey: n,
						formData: s
					} = e;
					return async (e, r, c) => {
						let {
							apiContext: i,
							gqlContext: a
						} = c;
						const d = r();
						if (!d.user.account) return;
						e(Ge({
							draftKey: n
						})), Q.d(d);
						const l = Object(H.e)(s, d.uploads),
							m = s.commentMode;
						let u;
						if ((u = Ce(m, d) ? await (async (e, t, o, n, s) => {
								const r = s === I.i.MARKDOWN,
									c = {
										commentId: t,
										content: {
											markdown: r ? o.text : null,
											richText: r ? null : n
										}
									};
								return Object(y.a)(e, {
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
										error: e.error || Object(k.a)()
									}
								})
							})(a(), t, s, l, m) : await (async (e, t, o, n, s) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return s === I.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(x.a)(Object(S.a)(e, [v.a]), {
									endpoint: Object(C.a)(Object(w.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: g.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(E.a)(e)
								} : {
									...e,
									body: {
										comment: Object(R.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(R.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(k.a)()
								})
							})(i(), t, s, l, m)).ok) {
							const s = u.body;
							e(He({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(ue.j)({
								[t]: {
									...s.comment
								}
							}))
						} else e(Ve({
							draftKey: n,
							error: u.error
						}))
					}
				}, ze = Object(s.a)(pe.C), Qe = Object(s.a)(pe.B), Xe = Object(s.a)(pe.D), $e = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = n();
					o(ze({
						id: e
					})), Q.a(e, c);
					const i = await ((e, t) => Object(x.a)(Object(S.a)(e, [v.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
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
						error: e.error || Object(k.a)()
					}))(r(), e);
					i.ok ? o(Xe({
						id: e,
						postId: t
					})) : o(Qe({
						id: e,
						error: i.error
					}))
				}, Ye = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = !o().features.comments.models[e].sendReplies;
					t(Object(ue.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(B.q)(s(), e, r)).ok || t(Object(ue.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ze = (e, t) => async (o, s, r) => {
					let {
						gqlContext: c
					} = r;
					var i, a, d, l, m, u;
					o(Object(ue.c)());
					const p = e => Object(O.f)(Object(O.e)(e, ee.b.Error));
					if (((null === (a = null === (i = s().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === h.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === X.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(ue.p)(i)), (await ((e, t) => Object(y.a)(e, {
								...U,
								variables: {
									input: t
								}
							}))(c(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(W.yb)(null !== (m = null === (l = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(O.f)({
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
				return async (e, s) => {
					const r = s(),
						c = Object(ne.b)(r, {
							commentId: t
						});
					if (!c) return;
					e(he({
						commentId: t,
						commentsPageKey: o
					}));
					const i = {
						commentMode: c.media.rteMode,
						draftType: c.parentId ? $.c.replyToComment : $.c.replyToPost,
						rtJson: c.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (c.parentId) {
						const t = Object(ne.b)(r, {
								commentId: c.parentId
							}),
							n = Object(oe.j)(r, {
								commentId: c.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(Ee({
							commentsPageKey: o,
							draftKey: c.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: i,
							editorMode: c.media.rteMode
						}))
					} else await e(ve({
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return x
			})), o.d(t, "c", (function() {
				return y
			})), o.d(t, "f", (function() {
				return S
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "e", (function() {
				return v
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "h", (function() {
				return k
			})), o.d(t, "b", (function() {
				return R
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/lib/makeCommentsPageKey/index.ts"),
				i = o("./src/reddit/actions/modal.ts"),
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
				x = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					o().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, y = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.R)(o())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const c = o().features.comments.models[e];
					if (!c) return;
					const a = c.isLocked ? m.l : m.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !c.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: c.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: c.isLocked
						}
					}))
				}, S = Object(r.a)(j.J), _ = e => async (t, o, s) => {
					let {
						apiContext: r,
						gqlContext: c
					} = s;
					const i = o(),
						l = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
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
					})), (await Object(m.a)(c(), e)).ok ? t(Object(d.f)({
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
				}, v = (e, t) => async (o, s, r) => {
					let {
						apiContext: c,
						gqlContext: i
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
					})), (await Object(m.h)(i(), e, t)).ok ? o(Object(d.f)({
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
				}, C = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const c = o().features.comments.models[e];
					if (!c) return;
					const i = c.ignoreReports ? m.k : m.e;
					t(Object(h.j)({
						[e]: {
							ignoreReports: !c.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: c.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: c.ignoreReports
						}
					}))
				}, k = (e, t, o) => async (r, c, i) => {
					let {
						gqlContext: a
					} = i;
					const l = Object(O.b)(c(), {
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
				}, R = (e, t, o) => async (n, r, i) => {
					let {
						apiContext: a,
						gqlContext: d
					} = i;
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
					(o || !o && e === b) && j.push(f), (await Promise.all(j)).every(e => e.ok) ? o && n(S({
						id: e,
						postId: p,
						commentsPageKey: Object(c.a)(p, null, {
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
				c = o("./src/reddit/endpoints/post/convert.ts"),
				i = o("./src/reddit/helpers/localStorage/index.ts"),
				a = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(u.G),
				b = Object(s.a)(u.p),
				O = Object(s.a)(u.Q),
				f = (e, t, o) => async (s, i, f) => {
					let {
						apiContext: j
					} = f;
					a.m(i(), t);
					const g = t === d.i.MARKDOWN,
						x = t === d.i.RICH_TEXT,
						y = u.k;
					if (g && Object(l.H)(o)) return s(O({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void s(h(t));
					if (x && !o) return s(O({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void s(h(t));
					s(p(y));
					const S = await Object(c.a)(j(), t, g ? JSON.stringify(o) : o);
					S.ok ? (s(b(y)), s(O({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), s(h(t))) : (s(b(y)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, h = e => async (t, o) => {
					const s = Object(i.l)();
					if (s >= 3) return;
					const c = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === c) return;
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
					})), Object(i.wb)(s + 1)
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
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(n.a)(r.r),
				i = Object(n.a)(r.F),
				a = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = await Object(s.a)(r(), e);
					a && a.ok ? t(c({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(i(e))
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
				return ce
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ie
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
				return xe
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ye
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), o.d(t, "submitRemovalReason", (function() {
				return _e
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return ve
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/initializeClient/installReducer.ts"),
				r = o("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
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
					case c:
					case i:
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
						case i:
						case l:
						case p:
							return !0;
						case c:
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
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c: {
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
			const y = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c: {
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
			var _ = function() {
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
				v = Object(r.c)({
					api: j,
					models: x,
					reasonOrder: S,
					removedItemIds: _
				}),
				C = o("./src/lib/constants/index.ts"),
				k = o("./src/lib/makeActionCreator/index.ts"),
				R = o("./src/lib/makeCommentsPageKey/index.ts"),
				E = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				T = o("./src/reddit/actions/comment/index.ts"),
				w = o("./src/reddit/actions/comment/authoring.ts"),
				A = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				P = o("./src/reddit/actions/post.ts"),
				M = o("./src/reddit/actions/toaster.ts"),
				L = o("./src/reddit/constants/modals.ts"),
				D = o("./src/lib/makeApiRequest/index.ts"),
				K = o("./src/lib/omitHeaders/index.ts"),
				U = o("./src/reddit/constants/headers.ts"),
				B = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(D.a)(Object(K.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: C.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(D.a)(Object(K.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: C.ob.POST,
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
					removalReasons: v
				}
			});
			const Y = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(k.a)(c),
				ee = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o().subreddits.models[e].name;
					t(Y());
					const c = await ((e, t) => Object(D.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.ob.GET
					}))(s(), r);
					c.ok ? t(Z({
						subredditId: e,
						response: c.body
					})) : t(ee(c.error))
				}, oe = Object(k.a)(i), ne = Object(k.a)(a), se = Object(k.a)(d), re = (e, t) => async (o, s, r) => {
					let {
						apiContext: c
					} = r;
					const i = s().subreddits.models[e].name;
					o(oe());
					const a = await ((e, t, o) => Object(D.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.ob.POST,
						data: o
					}))(c(), i, t);
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
						})), o(Object(M.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(se(a.error))
				}, ce = Object(k.a)(l), ie = Object(k.a)(m), ae = Object(k.a)(u), de = (e, t) => async (o, s, r) => {
					let {
						apiContext: c
					} = r;
					const i = s().subreddits.models[e].name;
					o(ce());
					const a = await ((e, t, o) => Object(D.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: C.ob.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(c(), i, t);
					a.ok ? (o(ie({
						subredditId: e,
						reason: t
					})), o(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ae(a.error))
				}, le = Object(k.a)(p), me = Object(k.a)(b), ue = Object(k.a)(O), pe = (e, t) => async (o, s, r) => {
					let {
						apiContext: c
					} = r;
					const i = s().subreddits.models[e].name;
					o(le());
					const a = await ((e, t, o) => Object(D.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: C.ob.DELETE
					}))(c(), i, t);
					a.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(ue(a.error))
				}, be = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = n();
					c.features.removalReasons.reasonOrder[e] && c.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(be({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(L.a.ADD_REMOVAL_REASON))
				}, fe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), he = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), xe = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ye = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), _e = (e, t, o, n, s, r) => async (c, i, a) => {
					let {
						apiContext: d
					} = a;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? z.e.Post : z.e.Comment,
						b = p === z.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						O = p === z.e.Post ? P.R : T.j;
					if (!b || !m) return !1;
					c(fe()), c(O({
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
						if (c(he()), t) {
							c(ge());
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await G(d(), Object(z.h)(s, p), p);
							if (i.ok) {
								if ([z.f.Public, z.f.PublicAsSubreddit].includes(n)) {
									if (c(ye()), i.body) {
										const e = Object(H.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											o = Object($.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let s = o && n && Object(q.a)(n, l, l.posts.models[e.postId]);
										if (s || (s = Object(R.a)(e.postId, null, {
												sort: C.x,
												hasSortParam: !0
											})), p === z.e.Post) {
											const o = Object(E.a)(W.c.replyToPost, u);
											c(Object(w.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: o
											}));
											const n = l.postStickiedComments.data[u];
											c(Object(A.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), n && n !== e.id && c(Object(T.j)({
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
											c(Object(w.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: s,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else c(xe());
								return !0
							}
							return c(Se(i.error)), !1
						}
					} else c(je(h.error)), c(O({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ve = (e, t, o, s, r) => async (c, i, a) => {
					let {
						apiContext: d
					} = a;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(M.f)({
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
						if (c(Object(I.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await G(d(), Object(z.h)(n, z.e.Bulk), z.e.Bulk);
							r.ok ? (c(xe()), c(u)) : c(Se(r.error))
						} else c(u)
					} else c(je(b.error))
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
				return ue
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
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
					apiContext: c
				} = r;
				const i = await (async (e, t, o) => Object(O.a)(Object(f.a)(e, [h.a]), {
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
			var x = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				_ = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				v = o("./src/reddit/components/TrackingHelper/index.tsx"),
				C = o("./src/reddit/controls/Dropdown/index.tsx"),
				k = o("./src/reddit/controls/Dropdown/Row.tsx"),
				R = o("./node_modules/react-router-redux/es/index.js"),
				E = o("./src/lib/addQueryParams/index.ts"),
				I = o("./src/lib/makeSearchKey/index.ts"),
				T = o("./src/lib/search/index.ts"),
				w = o("./src/reddit/actions/pages/search/index.ts"),
				A = o("./src/reddit/constants/keycodes.ts"),
				N = o("./src/reddit/constants/parameters.ts"),
				P = o("./src/reddit/contexts/PageLayer/index.tsx"),
				M = o("./src/reddit/controls/SearchBar/index.tsx"),
				L = o("./src/reddit/helpers/clickSourceData/index.ts"),
				D = o("./src/reddit/hooks/usePageLayer.ts"),
				K = o("./src/reddit/selectors/platform.ts");
			const U = "comment-search-bar",
				B = "comment-search-button",
				F = "search/";

			function G(e) {
				const {
					expanded: t,
					bucketed: o
				} = e.experiment, i = Object(D.a)(), a = (null == i ? void 0 : i.queryParams.q) || "", [l, m] = Object(s.useState)(a), [u, p] = Object(s.useState)(t), b = Object(c.d)(), O = Object(c.e)(e => Object(P.h)(e, {
					pageLayer: i
				})), f = Object(c.e)(e => Object(P.s)(e, {
					pageLayer: i
				})), h = Object(c.e)(e => Object(K.j)(e));

				function j() {
					if (!l.trim() || !O) return;
					const e = Object(T.b)(l),
						t = `${new URL(O.permalink).pathname}${F}`,
						o = {
							[N.z]: e,
							[N.P]: [d.ic.Comments],
							[N.C]: "1",
							...(null == f ? void 0 : f.isNSFW) ? {
								[N.L]: "1"
							} : {},
							...(null == O ? void 0 : O.isNSFW) ? {
								[N.m]: "1"
							} : {}
						},
						n = Object(L.b)(i),
						s = Object(I.b)(O.id, void 0, o);
					b(Object(w.d)({
						key: s,
						options: o,
						subredditName: null == f ? void 0 : f.name,
						postId: O.id
					}));
					const r = Object(E.a)(t, o);
					b(Object(R.b)(r, {
						...n,
						isOverlay: h
					}))
				}
				return o ? r.a.createElement("div", null, l || u ? r.a.createElement("div", {
					"data-testid": U
				}, r.a.createElement(M.a, {
					onSearch: j,
					onKeyPress: function(e) {
						e.key === A.b.Enter && j()
					},
					onTextChange: e => {
						m(e.target.value)
					},
					value: l
				})) : r.a.createElement("button", {
					"data-testid": B,
					onClick: () => p(!0)
				}, n.fbt._("Search comments", null, {
					hk: "2ObH7B"
				}))) : null
			}
			var V = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				H = o("./src/reddit/helpers/path/index.ts"),
				q = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const J = (e, t, o, n, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(q.z)(r, void 0, {
						oldSort: o,
						sort: n,
						source: s
					}),
					userSubreddit: Object(q.ub)(r)
				}),
				W = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				z = e => ({
					subreddit: Object(q.kb)(e),
					userSubreddit: Object(q.ub)(e)
				}),
				Q = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...z
				});
			var X = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				$ = o("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = o("./src/reddit/selectors/activeModalId.ts"),
				Z = o("./src/reddit/selectors/comments.ts"),
				ee = o("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				te = o("./src/reddit/selectors/moderatorPermissions.ts"),
				oe = o("./src/reddit/selectors/posts.ts"),
				ne = o("./src/reddit/selectors/tooltip.ts"),
				se = o("./src/reddit/selectors/user.ts"),
				re = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				ce = o.n(re),
				ie = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const ae = Object(_.a)(C.a),
				de = e => e === ie.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === ie.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class le extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== ie.a.None) {
							e(t === ie.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", ie.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", ie.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", ie.a.None)
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
						className: ce.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(a.a)(ce.a.HighlightPicker, ce.a.Row),
						textClassName: ce.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${de(s)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), r.a.createElement(X.b, {
						className: ce.a.DropdownTriangle,
						onClick: o
					}), r.a.createElement(ae, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(k.b, {
						displayText: de(ie.a.First),
						isSelected: s === ie.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: de(ie.a.Last),
						isSelected: s === ie.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: de(ie.a.None),
						isSelected: s === ie.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var me = le;
			const ue = "CommentSort--SortPicker",
				pe = "CommentSort--HighlightPicker",
				be = "CommentSort--Tooltip",
				Oe = Object(_.a)(C.a),
				fe = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(Z.m)(e, {
							commentId: o
						})
					},
					commentSearchPdp: e => Object(ee.a)(e),
					contestModeModalIsOpen: Object(Y.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(ne.b)(ue),
					highlightIsOpen: Object(ne.b)(pe),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(te.m)(e, {
							postId: o
						});
						return !!n && n.posts
					},
					post: oe.G,
					postPermalink: oe.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(se.w)(e),
							s = !!Object(te.m)(e, {
								postId: o
							}),
							r = Object(oe.G)(e, {
								postId: o
							});
						return (s || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: Z.p
				}),
				he = Object(c.b)(fe, (e, t) => {
					let {
						postId: o
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
						onSetSuggestedSort: t => e(g(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: be
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(J(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(W("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(Q(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						commentPermalink: s,
						commentSearchPdp: c,
						contestModeModalIsOpen: i,
						dropdownIsOpen: l,
						elementRef: m,
						hideTooltip: u,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: O,
						location: f,
						post: h,
						postPermalink: j,
						selectedHighlightSort: g,
						showCommentHighlighter: _,
						sort: v,
						suggestedSort: C,
						showTooltip: R,
						toggleContestModeModal: E
					} = this.props, I = h.contestMode, T = !f.search.includes(d.w.CONFIDENCE), w = v === d.w.CONFIDENCE && T, A = b && !w, N = d.y[v], P = N ? N() : "", M = C && v === C && !w ? this.addSuggestedLabel(P) : P, L = I ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), D = I ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), K = I ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), U = I && !b;
					return r.a.createElement("div", {
						className: Object(a.a)(t, ce.a.container, {
							[ce.a.hideCommentSort]: !_ && U
						}),
						ref: m
					}, r.a.createElement("div", {
						className: ce.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: ce.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(a.a)(ce.a.SortPicker, ce.a.Row),
						textClassName: ce.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${M}`,
						id: ue,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(X.b, {
						className: ce.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), c.bucketed && r.a.createElement("div", null, r.a.createElement(G, {
						experiment: c,
						commentId: o,
						postId: this.props.postId
					})), r.a.createElement(Oe, {
						isOpen: l,
						tooltipId: ue
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = s || j,
							o = Object(H.b)(t),
							n = d.y[e],
							c = n ? n() : "";
						return r.a.createElement(S.a, {
							className: ce.a.ViewFullLinkOrOverlayLink,
							isOverlay: O,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: c,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), A && !U && (C ? r.a.createElement("button", {
						className: ce.a.SortLink,
						onClick: v !== C ? this.setSortOnClick : this.clearSortOnClick
					}, v !== C ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: ce.a.SetSort
					}, r.a.createElement("button", {
						className: ce.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: be,
						onMouseEnter: R,
						onMouseLeave: u
					}, r.a.createElement(y.c, {
						className: ce.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: be
					}), r.a.createElement($.a, {
						className: ce.a.Info
					})))), b && r.a.createElement("button", {
						className: ce.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(V.a, {
						className: ce.a.ToggleSwitch,
						on: I
					}))), _ && r.a.createElement("div", {
						className: ce.a.containerRow
					}, r.a.createElement(me, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: pe,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: W
					})), i && r.a.createElement(x.a, {
						actionText: D,
						headerText: L,
						modalText: K,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.b = he(Object(v.c)(je))
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
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
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
				j = Object(c.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(d.b)(o)(e)
					}
				}),
				g = Object(a.a)(h, [i.a.Click, i.a.Keydown]),
				x = Object(a.a)(f, [i.a.Click, i.a.Keydown]),
				y = Object(r.b)(j);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(g, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, p({}, e, {
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
					...r
				} = e, d = Object(i.b)(n);
				return s.a.createElement(c.a, a({
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
				c = o("./src/reddit/constants/elementIds.ts"),
				i = o("./src/reddit/contexts/InsideOverlay.tsx");

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
							const e = document.getElementById(c.e);
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
				return Object(i.b)(n)
			}
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, o) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/svgs/Search/index.tsx"),
				i = o("./src/reddit/controls/SearchBar/index.m.less"),
				a = o.n(i);
			t.a = e => s.a.createElement("label", {
				className: Object(r.a)(a.a.searchContainer, e.className)
			}, s.a.createElement("input", {
				"data-testid": "SEARCH_BAR_TEST_ID",
				className: Object(r.a)(a.a.search, {
					[a.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), s.a.createElement("div", {
				className: Object(r.a)(a.a.searchIconContainer, {
					[a.a.mClickable]: !!e.onSearch,
					[a.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, s.a.createElement(c.a, null)))
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
				c = o("./src/reddit/controls/Button/index.tsx"),
				i = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = o.n(i);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || c.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(a.a.toggleSwitch, e.className, {
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
				}, s.a.createElement("div", {
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
				s = o.n(n),
				r = o("./src/lib/FocusTrap/index.ts");
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
						endOffset: c
					} = o, i = document.createRange();
					i.selectNode(e);
					let a = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, o) && (i.setStart(n, s), a = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, o) && (i.setEnd(r, c), a = !1), a) return [e];
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
				return c
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
				c = e => {
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
					return c
				})), o.d(t, "a", (function() {
					return i
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
				c = () => s(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
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
				return x
			})), o.d(t, "k", (function() {
				return y
			})), o.d(t, "j", (function() {
				return S
			})), o.d(t, "i", (function() {
				return _
			})), o.d(t, "l", (function() {
				return v
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/correlationIdTracker.ts"),
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
					const c = {
							commentId: r,
							commentsPageKey: n
						},
						a = r && Object(i.j)(e, c) || 0,
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
						parentId: c,
						uploadMetadata: i
					} = e;
					const a = u(t),
						d = r.type === n.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
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
							parentId: c,
							postId: s,
							contentType: p
						},
						media: {
							mimetype: null == i ? void 0 : i.mimetype,
							size: null == i ? void 0 : i.size
						}
					})
				}, O = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), f = (e, t) => {
					t === c.c.replyToPost && Object(l.a)({
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
				}), S = e => t => ({
					...u(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), _ = () => e => ({
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
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.gb
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
				return s.a.createElement("svg", a({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !o
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return i
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
				c = 1e4,
				i = 100;
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
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./node_modules/reselect/es/index.js");
			const c = Object(r.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.ub
			}), e => ({
				bucketed: e === n.Qc.ExpandedSearch || e === n.Qc.CollapsedSearch,
				collapsed: e === n.Qc.CollapsedSearch,
				expanded: e === n.Qc.ExpandedSearch
			}))
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
				c = o("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), c.a),
				d = e => i.find(t => !!Object(c.a)(a(e, t))),
				l = Object(n.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === s.V.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === s.V.RegOnboarding
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.f0f7accb6a31124af5d1.js.map