// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.ef9a3243766c66cb44c3.js
// Retrieved at 11/2/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arrayMap.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseMap.js"),
				i = o("./node_modules/lodash/isArray.js");
			t.exports = function(t, e) {
				return (i(t) ? n : s)(t, r(e, 3))
			}
		},
		"./src/lib/scroll/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return c
			})), o.d(e, "a", (function() {
				return a
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				r = o("./src/lib/fastdom/index.ts"),
				s = o("./src/reddit/components/CommentSort/index.tsx"),
				i = o("./src/reddit/constants/elementIds.ts");
			const c = () => {
					r.a.write(() => {
						const t = document.getElementById(i.e);
						t ? Object(n.c)(t, 0) : Object(n.c)(document, 0)
					})
				},
				a = t => {
					r.a.read(() => {
						const e = t ? document.getElementById(i.e) : window,
							o = document.getElementById(s.a);
						if (e && o) {
							const n = t ? o.offsetTop : o.offsetTop - 50;
							r.a.write(() => e.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(t, e, o) {
			"use strict";
			o.d(e, "f", (function() {
				return ft
			})), o.d(e, "r", (function() {
				return gt
			})), o.d(e, "p", (function() {
				return jt
			})), o.d(e, "t", (function() {
				return Ct
			})), o.d(e, "w", (function() {
				return vt
			})), o.d(e, "q", (function() {
				return kt
			})), o.d(e, "v", (function() {
				return wt
			})), o.d(e, "o", (function() {
				return It
			})), o.d(e, "m", (function() {
				return Et
			})), o.d(e, "b", (function() {
				return Rt
			})), o.d(e, "c", (function() {
				return Dt
			})), o.d(e, "s", (function() {
				return Lt
			})), o.d(e, "g", (function() {
				return At
			})), o.d(e, "h", (function() {
				return Kt
			})), o.d(e, "k", (function() {
				return Ft
			})), o.d(e, "e", (function() {
				return Bt
			})), o.d(e, "d", (function() {
				return qt
			})), o.d(e, "a", (function() {
				return Jt
			})), o.d(e, "j", (function() {
				return Vt
			})), o.d(e, "i", (function() {
				return $t
			})), o.d(e, "l", (function() {
				return Yt
			})), o.d(e, "u", (function() {
				return Zt
			})), o.d(e, "n", (function() {
				return te
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/makeDraftKey/index.ts"),
				i = o("./src/lib/scroll/index.ts"),
				c = o("./src/reddit/actions/changeUsername.ts"),
				a = o("./src/reddit/actions/login.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/onboarding/index.ts"),
				m = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/postCreation/editorContent.ts"),
				p = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = o("./src/reddit/actions/shortcuts/utils.ts"),
				f = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/constants/adEvents.ts"),
				O = o("./src/reddit/constants/localStorage.ts"),
				g = o("./src/redditGQL/operations/CommentToxicity.json"),
				j = o("./src/lib/constants/index.ts"),
				x = o("./src/lib/makeApiRequest/index.ts"),
				y = o("./src/lib/makeGqlRequest/index.ts"),
				C = o("./src/lib/omitHeaders/index.ts"),
				v = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				k = o("./src/reddit/constants/headers.ts"),
				_ = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = o("./src/reddit/helpers/genericServerError/index.ts"),
				w = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				T = o("./src/reddit/models/PostCreationForm/index.ts"),
				E = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = o("./src/reddit/helpers/graphql/helpers.ts"),
				P = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				M = o("./src/redditGQL/operations/CreateComment.json");
			const D = (t, e, o, n) => {
					let r, s;
					if (n === T.i.MARKDOWN) r = o.text, s = null;
					else {
						r = null;
						let t = null;
						o.rteState && (t = v.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
							document: t
						})
					}
					return Object(y.a)(t, {
						...g,
						variables: {
							subredditName: e,
							markdown: r,
							richText: s
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				L = async (t, e, o, n) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					return o.commentMode === T.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(x.a)(Object(C.a)(t, [k.a]), {
						method: j.ob.POST,
						endpoint: Object(_.a)(Object(E.a)(Object(N.a)(`${t.apiUrl}/api/comment.json`))),
						data: r
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(I.a)(t)
					} : {
						...t,
						body: {
							comment: Object(w.a)(t.body.json.data.things[0].data)
						}
					} : {
						...t,
						body: {
							comment: Object(w.a)(t.body)
						}
					} : {
						...t,
						error: t.error || Object(S.a)()
					})
				}, A = async (t, e, o, n, r) => {
					const s = n.commentMode === T.i.MARKDOWN,
						i = {
							postId: e || null,
							parentId: o || null,
							content: {
								markdown: s ? n.text : null,
								richText: s ? null : r
							}
						};
					return Object(y.a)(t, {
						...M,
						variables: {
							input: i
						}
					}).then(t => {
						if (t.ok) {
							const e = t.body.data.createComment;
							if ((null == e ? void 0 : e.fieldErrors) && e.fieldErrors.length > 0) return {
								...t,
								ok: !1,
								error: Object(R.e)(e.fieldErrors)
							};
							if ((null == e ? void 0 : e.errors) && e.errors.length > 0) return {
								...t,
								ok: !1,
								error: Object(R.f)(e.errors)
							};
							if (e.ok) return {
								...t,
								body: {
									comment: Object(P.a)(e.commentInfo)
								}
							}
						}
						return {
							...t,
							ok: !1,
							error: t.error || Object(S.a)()
						}
					})
				};
			var K = o("./src/redditGQL/operations/UpdateComment.json");
			var F = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = o("./src/reddit/endpoints/post/index.tsx"),
				B = o("./src/reddit/endpoints/post/convert.ts"),
				H = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				W = o("./src/reddit/featureFlags/index.ts"),
				G = o("./src/reddit/helpers/comment/index.ts"),
				q = o("./src/reddit/helpers/correlationIdTracker.ts"),
				J = o("./src/reddit/helpers/dom/index.ts"),
				V = o("./src/reddit/helpers/localStorage/index.ts"),
				z = o("./src/reddit/helpers/sessionStorage/index.ts"),
				Q = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				X = o("./src/reddit/models/Comment/index.ts"),
				$ = o("./src/reddit/models/PostDraft/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/index.ts"),
				Z = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				tt = o("./src/reddit/models/Toast/index.ts"),
				et = o("./src/reddit/selectors/chatPost.ts"),
				ot = o("./src/reddit/selectors/comments.ts"),
				nt = o("./src/reddit/selectors/commentSelector.ts"),
				rt = o("./src/reddit/constants/experiments.ts"),
				st = o("./src/reddit/helpers/chooseVariant/index.ts"),
				it = o("./node_modules/reselect/es/index.js");
			const ct = Object(it.a)(t => Object(st.c)(t, {
				experimentEligibilitySelector: st.a,
				experimentName: rt.Hb
			}), t => t === rt.Sd);
			var at = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				dt = o("./src/reddit/selectors/platform.ts"),
				lt = o("./src/reddit/selectors/posts.ts"),
				mt = o("./src/reddit/selectors/user.ts"),
				ut = o("./src/reddit/actions/comment/index.ts"),
				pt = o("./src/reddit/actions/comment/constants.ts");
			const bt = Object(r.a)(pt.m),
				ft = t => {
					let {
						hasFocus: e,
						draftKey: o
					} = t;
					return async (t, n) => {
						const r = n();
						if (!!r.features.comments.drafts[o])
							if (Object(mt.T)(r) && e) {
								const n = bt({
									hasFocus: e,
									draftKey: o
								});
								t(Object(c.startChangeUsernameFlow)(n))
							} else t(bt({
								hasFocus: e,
								draftKey: o
							}))
					}
				},
				ht = Object(r.a)(pt.L),
				Ot = Object(r.a)(pt.H),
				gt = Object(r.a)(pt.N),
				jt = Object(r.a)(pt.M),
				xt = Object(r.a)(pt.K),
				yt = async (t, e, o, n, r) => {
					const s = n.ok && n.body,
						i = s && s.comment && s.comment.id;
					await Q.g(t, o, e, r, i)
				}, Ct = "Toxicity_Warning__Modal", vt = t => async (e, o, n) => {
					let {
						gqlContext: r
					} = n;
					const s = o(),
						i = Object(dt.e)(s);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: l
					} = t;
					if (W.d.enableToxicityWarning(s)) {
						if (!(await D(r(), c, a, l))) return void e(Object(d.i)(Ct))
					}
					e(kt(t))
				}, kt = t => async (e, o) => {
					e(Object(d.g)(Ct));
					const n = o(),
						r = Object(at.a)(n),
						s = Object(at.c)(n);
					if (!n.user.account && r) {
						const o = Object(G.e)(t.formData, n.uploads),
							r = Object(G.c)(t.formData, n.uploads);
						e(Object(d.k)({
							actionSource: d.a.Reply
						})), e(Object(a.openRegisterModal)()), Object(z.d)({
							comment: {
								...t,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else e(St(t, !1))
				};

			function _t(t, e) {
				return t === T.i.MARKDOWN && ct(e)
			}
			const St = (t, e, o, r) => {
					let {
						postId: s,
						commentsPageKey: c,
						draftKey: a,
						formData: d,
						editorMode: l,
						disableAutofocus: u,
						isLiveStreaming: O
					} = t;
					return async (t, g, j) => {
						let {
							apiContext: x,
							gqlContext: y
						} = j;
						var C;
						const v = g(),
							k = Object(et.d)(v, {
								postId: s
							}),
							_ = k ? Object(G.a)() : a,
							S = Object(nt.e)(v, {
								commentId: _
							}),
							w = Object(mt.l)(v);
						if (!w) return;
						if (S && !k) return;
						e || t(ht({
							draftKey: _,
							draft: d,
							commentsPageKey: c,
							optimisticComment: k ? Object(G.b)({
								temporalId: _,
								draft: d,
								post: Object(lt.G)(v, {
									postId: s
								}),
								author: w,
								subredditId: (null === (C = Object(dt.e)(v)) || void 0 === C ? void 0 : C.id) || ""
							}) : void 0
						}));
						const I = w.displayText,
							E = d.commentMode;
						let N;
						const R = O ? "" : e && o ? o : Object(G.e)(d, v.uploads),
							P = Object(G.f)(R, v.uploads);
						if (O ? (N = await Object(H.i)(x(), s, d, I), t(Object(p.a)({
								streamId: s,
								level: N.body.automuteLevel
							}))) : N = _t(E, v) ? await A(y(), s, null, d, R) : await L(x(), s, d, R), N.ok) {
							let o;
							if (o = N.body, t(gt({
									...o,
									headCommentId: Object(ot.w)(v, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: _,
									upload: P
								})), e) {
								const t = Object(dt.j)(v);
								Object(i.a)(!!t)
							}
							const n = Object(lt.G)(g(), {
								postId: s
							});
							t(Object(m.y)(n, h.a.CommentSubmitted))
						} else {
							if (N.error) {
								const t = e && r ? r : Object(G.c)(d, v.uploads);
								Q.f({
									state: v,
									bodyText: t,
									postId: s,
									error: N.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const o = N.error && N.error.fields && N.error.fields[0] ? N.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							t(xt({
								draftKey: _,
								error: N.error
							})), k || t(Object(f.f)({
								duration: f.a,
								kind: tt.b.Error,
								text: o
							}))
						}
						yt(g(), c, l, N, null == P ? void 0 : P.metadata).then(() => N.ok && l === T.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), u || Object(b.d)(), e && Object(z.a)()
					}
				},
				wt = t => async (e, o, n) => {
					let {
						gqlContext: r
					} = n;
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: l,
						editorMode: m
					} = t, u = o(), p = Object(dt.e)(u);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(u)) {
						if (!(await D(r(), b, l, m))) return void e(Object(d.i)(Ct))
					}
					e(It({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: l,
						editorMode: m
					}))
				}, It = t => async (e, o) => {
					e(Object(d.g)(Ct));
					const n = o(),
						r = Object(at.a)(n),
						s = Object(at.c)(n);
					if (!n.user.account && r) {
						const o = Object(G.e)(t.formData, n.uploads),
							r = Object(G.c)(t.formData, n.uploads);
						e(Object(d.k)({
							actionSource: d.a.Reply
						})), e(Object(a.openRegisterModal)()), Object(z.d)({
							comment: {
								...t,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else e(Tt(t, !1))
				}, Tt = (t, e, o, n) => async (r, s, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: f,
						formData: h,
						editorMode: O
					} = t, g = s(), j = Object(nt.b)(g, {
						commentId: m
					}), x = j && Object(et.d)(g, {
						postId: j.postId
					}), y = x ? Object(G.a)() : f, C = Object(nt.e)(g, {
						commentId: y
					}), v = Object(mt.l)(g);
					if (!v) return;
					if (C && !x) return;
					e || r(ht({
						draftKey: y,
						draft: h,
						commentsPageKey: u,
						optimisticComment: x && j ? Object(G.b)({
							temporalId: y,
							draft: h,
							post: Object(lt.G)(g, {
								postId: j.postId
							}),
							author: v,
							subredditId: (null === (l = Object(dt.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: j.id
						}) : void 0
					})), r(Rt({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const k = h.commentMode,
						_ = e && o ? o : Object(G.e)(h, g.uploads),
						S = Object(G.f)(_, g.uploads);
					let w;
					if ((w = _t(k, g) ? await A(d(), null, m, h, _) : await L(a(), m, h, _)).ok) {
						if (r(jt({
								...w.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: y,
								depth: p + 1,
								upload: S
							})), e) {
							const t = Object(dt.j)(g);
							Object(i.a)(!!t)
						}
					} else {
						if (w.error) {
							if (!j) return;
							const t = e && n ? n : Object(G.c)(h, g.uploads);
							Q.f({
								state: g,
								bodyText: t,
								postId: j.postId,
								parentId: m,
								error: w.error,
								uploadMetadata: null == S ? void 0 : S.metadata
							})
						}
						r(xt({
							draftKey: y,
							error: w.error
						}))
					}
					yt(s(), u, O, w, null == S ? void 0 : S.metadata), Object(b.d)(), e && Object(z.a)()
				}, Et = () => async t => {
					const e = Object(z.b)();
					if (e) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: r,
								richTextJSONData: s,
								commentBodyText: i
							},
							isSkipOnboarding: c
						} = e;
						c && t(Object(l.skipOnboardingModal)()), r ? await t(St({
							...e.comment,
							postId: r
						}, !0, s, i)) : n && void 0 !== o && await t(Tt({
							...e.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, s, i))
					}
				}, Nt = Object(r.a)(pt.s), Rt = Object(r.a)(pt.r), Pt = Object(r.a)(pt.n), Mt = (Object(r.a)(pt.i), Object(r.a)(pt.o)), Dt = (Object(r.a)(pt.v), (t, e, o) => async (r, s, i) => {
					let {
						apiContext: c
					} = i;
					const a = t === T.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(Y.H)(e)) r(Mt({
						editorMode: t,
						draftKey: o,
						content: a ? Y.i : ""
					})), r(Object(u.c)(t));
					else {
						r(Object(u.b)(o));
						const s = await Object(B.a)(c(), t, a ? e : JSON.stringify(e));
						if (s.ok) {
							const e = s.body.output;
							r(Object(u.a)(o)), r(Mt({
								editorMode: t,
								draftKey: o,
								content: e
							})), r(Object(u.c)(t))
						} else r(Object(u.a)(o)), r(Object(f.f)({
							duration: f.a,
							kind: tt.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Lt = t => {
					let {
						commentsPageKey: e,
						parentCommentId: o,
						singleOpen: n
					} = t;
					return async (t, r) => {
						const i = r(),
							l = Object(s.a)($.c.replyToComment, o);
						if (!Object(mt.R)(r()) && !Object(at.a)(i)) return t(Object(a.openRegisterModal)()), void t(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ot.m)(r(), {
								commentId: o
							})
						}));
						const m = i.features.comments.replyFormOpen[e],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && t(Rt({
								parentCommentId: o,
								commentsPageKey: e
							}))), u)) return;
						let p = "",
							b = null;
						const f = i.user.prefs.commentMode,
							h = Object(J.d)();
						if (h) {
							const t = h.filter(t => !!t && 10 !== t.charCodeAt(0));
							if (f === T.i.MARKDOWN) p = t.map(t => `> ${t}\n`).join("");
							else {
								const e = t.map(t => Z.s(t, null)).map(t => Z.l([t])),
									o = Z.s("", null),
									n = Z.l([o]);
								b = {
									document: [Z.c(e), n]
								}
							}
						}
						const O = i.features.comments.drafts[l];
						let g;
						if (g = h ? {
								commentMode: f,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: f,
								draftType: $.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(mt.T)(i)) {
							const n = Nt({
								parentCommentId: o,
								commentsPageKey: e,
								draftKey: l,
								formData: g
							});
							t(Object(c.startChangeUsernameFlow)(n))
						} else t(Nt({
							parentCommentId: o,
							commentsPageKey: e,
							draftKey: l,
							formData: g
						}))
					}
				}, At = t => async e => {
					e(Object(ut.r)(t)), e(Bt(t))
				}, Kt = t => {
					let {
						parentCommentId: e,
						commentsPageKey: o
					} = t;
					return async t => {
						t(Rt({
							parentCommentId: e,
							commentsPageKey: o
						})), t(Lt({
							parentCommentId: e,
							commentsPageKey: o
						})), t(Object(ut.r)({
							commentId: e,
							commentsPageKey: o
						}))
					}
				}, Ft = (t, e) => o => o(Pt({
					draftKey: t,
					formData: e
				})), Ut = Object(r.a)(pt.u), Bt = t => {
					let {
						commentId: e,
						commentMode: o,
						commentsPageKey: n,
						draftKey: r,
						text: s
					} = t;
					return async (t, i) => {
						const c = i();
						c.user.account && (Q.c(c), t(Ut({
							commentId: e,
							commentsPageKey: n,
							draftKey: r,
							formData: {
								text: s,
								commentMode: o,
								rteState: null,
								draftType: $.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ht = Object(r.a)(pt.F), Wt = Object(r.a)(pt.E), Gt = Object(r.a)(pt.G), qt = Object(r.a)(pt.j), Jt = Object(r.a)(pt.f), Vt = t => {
					let {
						id: e,
						commentsPageKey: o,
						draftKey: n,
						formData: r
					} = t;
					return async (t, s, i) => {
						let {
							apiContext: c,
							gqlContext: a
						} = i;
						const d = s();
						if (!d.user.account) return;
						t(Ht({
							draftKey: n
						})), Q.d(d);
						const l = Object(G.e)(r, d.uploads),
							m = r.commentMode;
						let u;
						if ((u = _t(m, d) ? await (async (t, e, o, n, r) => {
								const s = r === T.i.MARKDOWN,
									i = {
										commentId: e,
										content: {
											markdown: s ? o.text : null,
											richText: s ? null : n
										}
									};
								return Object(y.a)(t, {
									...K,
									variables: {
										input: i
									}
								}).then(t => {
									if (t.ok) {
										const e = t.body.data.updateComment;
										if ((null == e ? void 0 : e.fieldErrors) && e.fieldErrors.length > 0) return {
											...t,
											ok: !1,
											error: Object(R.e)(e.fieldErrors)
										};
										if ((null == e ? void 0 : e.errors) && e.errors.length > 0) return {
											...t,
											ok: !1,
											error: Object(R.f)(e.errors)
										};
										if (e.ok) return {
											...t,
											body: {
												comment: {
													...Object(P.c)(e.content)
												}
											}
										}
									}
									return {
										...t,
										ok: !1,
										error: t.error || Object(S.a)()
									}
								})
							})(a(), e, r, l, m) : await (async (t, e, o, n, r) => {
								const s = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: e
								};
								return r === T.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(x.a)(Object(C.a)(t, [k.a]), {
									endpoint: Object(_.a)(Object(N.a)(Object(E.a)(`${t.apiUrl}/api/editusertext`))),
									method: j.ob.POST,
									data: s
								}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
									...t,
									ok: !1,
									error: Object(I.a)(t)
								} : {
									...t,
									body: {
										comment: Object(w.a)(t.body.json.data.things[0].data)
									}
								} : {
									...t,
									body: {
										comment: Object(w.a)(t.body)
									}
								} : {
									...t,
									error: t.error || Object(S.a)()
								})
							})(c(), e, r, l, m)).ok) {
							const r = u.body;
							t(Gt({
								commentId: e,
								commentsPageKey: o,
								draftKey: n
							})), t(Object(ut.j)({
								[e]: {
									...r.comment
								}
							}))
						} else t(Wt({
							draftKey: n,
							error: u.error
						}))
					}
				}, zt = Object(r.a)(pt.C), Qt = Object(r.a)(pt.B), Xt = Object(r.a)(pt.D), $t = (t, e) => async (o, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n();
					o(zt({
						id: t
					})), Q.a(t, i);
					const c = await ((t, e) => Object(x.a)(Object(C.a)(t, [k.a]), {
						endpoint: Object(_.a)(`${t.apiUrl}/api/del`),
						method: j.ob.POST,
						data: {
							id: e
						}
					}).then(t => t.ok ? t.body.json && t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(I.a)(t)
					} : {
						...t,
						body: {}
					} : {
						...t,
						error: t.error || Object(S.a)()
					}))(s(), t);
					c.ok ? o(Xt({
						id: t,
						postId: e
					})) : o(Qt({
						id: t,
						error: c.error
					}))
				}, Yt = t => async (e, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = !o().features.comments.models[t].sendReplies;
					e(Object(ut.j)({
						[t]: {
							sendReplies: s
						}
					})), (await Object(U.q)(r(), t, s)).ok || e(Object(ut.j)({
						[t]: {
							sendReplies: !s
						}
					}))
				}, Zt = (t, e) => async (o, r, s) => {
					let {
						gqlContext: i
					} = s;
					var c, a, d, l, m, u;
					o(Object(ut.c)());
					const p = t => Object(f.f)(Object(f.e)(t, tt.b.Error));
					if (((null === (a = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === O.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = e === X.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(ut.p)(c)), (await ((t, e) => Object(y.a)(t, {
								...F,
								variables: {
									input: e
								}
							}))(i(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(V.yb)(null !== (m = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const t = s ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(f.f)({
								kind: tt.b.SuccessCommunityGreen,
								text: t
							}))
						} else o(Object(ut.p)(c)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function te(t) {
				let {
					commentId: e,
					commentsPageKey: o,
					isLivestreaming: n = !1
				} = t;
				return async (t, r) => {
					const s = r(),
						i = Object(nt.b)(s, {
							commentId: e
						});
					if (!i) return;
					t(Ot({
						commentId: e,
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
						const e = Object(nt.b)(s, {
								commentId: i.parentId
							}),
							n = Object(ot.j)(s, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!e || null === n) return;
						await t(It({
							commentsPageKey: o,
							draftKey: i.id,
							parentCommentDepth: n,
							parentCommentId: e.id,
							formData: c,
							editorMode: i.media.rteMode
						}))
					} else await t(kt({
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
		"./src/reddit/actions/postCreation/editorContent.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return p
			})), o.d(e, "a", (function() {
				return b
			})), o.d(e, "d", (function() {
				return h
			})), o.d(e, "c", (function() {
				return O
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/post/convert.ts"),
				c = o("./src/reddit/helpers/localStorage/index.ts"),
				a = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(u.G),
				b = Object(r.a)(u.p),
				f = Object(r.a)(u.Q),
				h = (t, e, o) => async (r, c, h) => {
					let {
						apiContext: g
					} = h;
					a.m(c(), e);
					const j = e === d.i.MARKDOWN,
						x = e === d.i.RICH_TEXT,
						y = u.k;
					if (j && Object(l.H)(o)) return r(f({
						editorKey: t,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(O(e));
					if (x && !o) return r(f({
						editorKey: t,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(O(e));
					r(p(y));
					const C = await Object(i.a)(g(), e, j ? JSON.stringify(o) : o);
					C.ok ? (r(b(y)), r(f({
						editorKey: t,
						editorMode: e,
						content: C.body.output
					})), r(O(e))) : (r(b(y)), r(Object(s.f)({
						duration: s.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, O = t => async (e, o) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const i = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (t === i) return;
					const a = t === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					e(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(c.wb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return i
			})), o.d(e, "b", (function() {
				return a
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(s.r),
				c = Object(n.a)(s.F),
				a = t => async (e, o, n) => {
					let {
						apiContext: s
					} = n;
					const a = await Object(r.a)(s(), t);
					a && a.ok ? e(i({
						streamId: t,
						level: a.body.data.auto_mute_status.level
					})) : e(c(t))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			var n, r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/actions/chat/toggle.ts"),
				a = o("./src/reddit/components/TrackingHelper/index.tsx"),
				d = o("./src/reddit/controls/Button/index.tsx"),
				l = o("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = t => {
				let {
					onStartChat: e,
					text: o,
					className: r,
					sendEvent: i,
					contextId: c,
					priority: a,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					eventSource: b,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: O,
					style: g
				} = t;
				return s.a.createElement(d.t, {
					onClick: t => {
						if (f && f(t), e(), b === n.awardNotification) return h();
						i(Object(l.b)(c))
					},
					className: r,
					text: o,
					priority: a,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					style: g
				}, O)
			};
			m.displayName = "ChatButton";
			const u = Object(i.b)(null, (t, e) => {
				let {
					contextId: o,
					userId: n
				} = e;
				return {
					onStartChat: () => {
						t(Object(c.b)(n, o))
					},
					onAddUserToQuickReplyList: () => {
						t(Object(c.a)(n))
					}
				}
			});
			e.b = u(Object(a.c)(m))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(t, e, o) {
			t.exports = {
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
		"./src/reddit/components/CommentSort/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return Q
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/lib/makeApiRequest/index.ts"),
				h = o("./src/lib/omitHeaders/index.ts"),
				O = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/Toast/index.ts");
			const j = (t, e) => async (o, r, s) => {
				let {
					apiContext: i
				} = s;
				const c = await (async (t, e, o) => Object(f.a)(Object(h.a)(t, [O.a]), {
						endpoint: `${t.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: e,
							sort: o
						}
					}))(i(), t, e),
					a = `error-block-${e}`,
					l = `success-block-${e}`;
				if (c.ok) {
					o(Object(p.R)({
						[t]: {
							suggestedSort: e
						}
					}));
					const r = e ? n.fbt._("Suggested sort is on.", null, {
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
					buttonAction: j(t, e)
				}))
			};
			var x = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				v = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = o("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = o("./src/reddit/controls/Dropdown/index.tsx"),
				S = o("./src/reddit/controls/Dropdown/Row.tsx"),
				w = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = o("./src/reddit/helpers/path/index.ts"),
				T = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const E = (t, e, o, n, r) => s => ({
					source: "comment_sort",
					action: "click",
					noun: t,
					actionInfo: {
						pageType: e ? "post_detail" : "home"
					},
					listing: Object(T.z)(s, void 0, {
						oldSort: o,
						sort: n,
						source: r
					}),
					userSubreddit: Object(T.ub)(s)
				}),
				N = (t, e) => o => ({
					source: "comment_highlighting",
					action: e,
					noun: t
				}),
				R = t => ({
					subreddit: Object(T.kb)(t),
					userSubreddit: Object(T.ub)(t)
				}),
				P = t => e => ({
					source: "contest_mode",
					action: "click",
					noun: t ? "enable" : "disable",
					...R
				});
			var M = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = o("./src/reddit/icons/svgs/Info/index.tsx"),
				L = o("./src/reddit/selectors/activeModalId.ts"),
				A = o("./src/reddit/selectors/comments.ts"),
				K = o("./src/reddit/selectors/moderatorPermissions.ts"),
				F = o("./src/reddit/selectors/posts.ts"),
				U = o("./src/reddit/selectors/tooltip.ts"),
				B = o("./src/reddit/selectors/user.ts"),
				H = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				W = o.n(H),
				G = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(v.a)(_.a),
				J = t => t === G.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : t === G.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class V extends s.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: t,
							selectedSort: e
						} = this.props;
						if (e !== G.a.None) {
							t(e === G.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (t, e) => {
						this.props.trackHighlight(t, "click"), this.props.changeHighlightSort(e)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", G.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", G.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", G.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(t) {
					t.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: t,
						id: e,
						onOpen: o,
						selectedSort: r
					} = this.props;
					return s.a.createElement("div", {
						className: W.a.HighlightWrapper
					}, s.a.createElement(S.b, {
						className: Object(a.a)(W.a.HighlightPicker, W.a.Row),
						textClassName: W.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(r)}`,
						id: e,
						noHover: !0,
						onClick: o
					}), s.a.createElement(M.b, {
						className: W.a.DropdownTriangle,
						onClick: o
					}), s.a.createElement(q, {
						isOpen: t,
						renderContentsHidden: !0,
						tooltipId: e
					}, s.a.createElement(S.b, {
						displayText: J(G.a.First),
						isSelected: r === G.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(S.b, {
						displayText: J(G.a.Last),
						isSelected: r === G.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(S.b, {
						displayText: J(G.a.None),
						isSelected: r === G.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = V;
			const Q = "CommentSort--SortPicker",
				X = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				Y = Object(v.a)(_.a),
				Z = Object(c.c)({
					commentPermalink: (t, e) => {
						let {
							commentId: o
						} = e;
						return o && Object(A.m)(t, {
							commentId: o
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(Q),
					highlightIsOpen: Object(U.b)(X),
					hasModeratorPostPermissions: (t, e) => {
						let {
							postId: o
						} = e;
						const n = Object(K.m)(t, {
							postId: o
						});
						return !!n && n.posts
					},
					post: F.G,
					postPermalink: F.F,
					showCommentHighlighter: (t, e) => {
						let {
							postId: o
						} = e;
						const n = Object(B.w)(t),
							r = !!Object(K.m)(t, {
								postId: o
							}),
							s = Object(F.G)(t, {
								postId: o
							});
						return (r || n) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				tt = Object(i.b)(Z, (t, e) => {
					let {
						postId: o
					} = e;
					return {
						changeHighlightSort: e => t(Object(m.b)({
							sort: e
						})),
						onOpenDropdown: () => t(Object(l.h)({
							tooltipId: Q
						})),
						onOpenHighlightDropdown: e => {
							t(Object(l.h)({
								tooltipId: X
							})), e()
						},
						onSetSuggestedSort: e => t(j(o, e)),
						hideTooltip: () => t(Object(l.i)()),
						setContestMode: e => t(Object(p.W)(e, o)),
						showTooltip: () => t(Object(l.h)({
							tooltipId: $
						})),
						toggleContestModeModal: () => t(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class et extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (t, e, o, n) => this.props.sendEvent(E(t, this.props.isOverlay, e, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = t => this.sendCommentSortEvent("sort_by", this.props.sort, t, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const t = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", t, this.props.sort)
					}, this.setTooltipTargetRef = t => this.tooltipTargetElement = t, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(P(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(t) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", t)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: t,
						className: e,
						commentPermalink: o,
						contestModeModalIsOpen: r,
						dropdownIsOpen: i,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: b,
						post: f,
						postPermalink: h,
						selectedHighlightSort: O,
						showCommentHighlighter: g,
						sort: j,
						suggestedSort: v,
						showTooltip: k,
						toggleContestModeModal: _
					} = this.props, T = f.contestMode, E = !b.search.includes(d.w.CONFIDENCE), R = j === d.w.CONFIDENCE && E, P = u && !R, L = d.y[j], A = L ? L() : "", K = v && j === v && !R ? this.addSuggestedLabel(A) : A, F = T ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = T ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), B = T ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), H = T && !u;
					return s.a.createElement("div", {
						className: Object(a.a)(e, W.a.container, {
							[W.a.hideCommentSort]: !g && H
						}),
						ref: c
					}, s.a.createElement("div", {
						className: W.a.containerRow
					}, !H && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: W.a.DropdownContainer
					}, s.a.createElement(S.b, {
						className: Object(a.a)(W.a.SortPicker, W.a.Row),
						textClassName: W.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${K}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(M.b, {
						className: W.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), s.a.createElement(Y, {
						isOpen: i,
						tooltipId: Q
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(t => {
						const e = o || h,
							n = Object(I.b)(e),
							r = d.y[t],
							i = r ? r() : "";
						return s.a.createElement(C.a, {
							className: W.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: t,
							onClick: () => this.onSortOptionClick(t),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${t}`
						}, s.a.createElement(S.b, {
							displayText: i,
							isSelected: j === t,
							skipRoleAttr: !0
						}))
					}))), P && !H && (v ? s.a.createElement("button", {
						className: W.a.SortLink,
						onClick: j !== v ? this.setSortOnClick : this.clearSortOnClick
					}, j !== v ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : s.a.createElement("button", {
						className: W.a.SetSort
					}, s.a.createElement("button", {
						className: W.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), s.a.createElement("span", {
						id: $,
						onMouseEnter: k,
						onMouseLeave: l
					}, s.a.createElement(y.c, {
						className: W.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: $
					}), s.a.createElement(D.a, {
						className: W.a.Info
					})))), u && s.a.createElement("button", {
						className: W.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), s.a.createElement(w.a, {
						className: W.a.ToggleSwitch,
						on: T
					}))), g && s.a.createElement("div", {
						className: W.a.containerRow
					}, s.a.createElement(z, {
						changeHighlightSort: t,
						highlightIsOpen: m,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: O,
						trackHighlight: N
					})), r && s.a.createElement(x.a, {
						actionText: U,
						headerText: F,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: _,
						withOverlay: !0
					}))
				}
			}
			e.b = tt(Object(k.c)(et))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(t, e, o) {
			t.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return h
			})), o.d(e, "a", (function() {
				return O
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = o.n(l),
				u = o("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				f = u.a.div("BottomText", m.a),
				h = t => r.a.createElement(b, {
					className: t.className,
					style: t.style
				}, t.text, t.children),
				O = t => {
					const e = t.overflow ? t.overflow.left : 0;
					return r.a.createElement(f, {
						className: t.className,
						style: {
							...t.style,
							"--infoTextTooltip-overflow-left": `${e}px`
						}
					}, t.text, t.children)
				},
				g = Object(i.c)({
					isOpen: (t, e) => {
						let {
							tooltipId: o
						} = e;
						return Object(d.b)(o)(t)
					}
				}),
				j = Object(a.a)(O, [c.a.Click, c.a.Keydown]),
				x = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				y = Object(s.b)(g);
			e.c = y(t => {
				const {
					caretOnTop: e
				} = t;
				return e ? r.a.createElement(j, p({}, t, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(x, p({}, t, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}

			function d(t) {
				const {
					children: e,
					className: o,
					to: n,
					...s
				} = t, d = Object(c.b)(n);
				return r.a.createElement(i.a, a({
					className: o,
					to: d
				}, s), e)
			}

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = t => {
				const {
					isOverlay: e,
					...o
				} = t, n = e ? d : s.a;
				return r.a.createElement(n, l({}, o, {
					children: o.children,
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}))
			}
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/makeCommentsPageKey/index.ts"),
				a = o("./src/reddit/actions/comment/authoring.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/components/ChatButton/index.tsx"),
				m = o("./src/reddit/constants/things.ts");
			const u = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/helpers/graphql/helpers.ts"),
				f = o("./src/reddit/helpers/trackers/inbox.ts"),
				h = o("./src/reddit/icons/fonts/index.tsx"),
				O = o("./src/reddit/models/NotificationInbox/index.ts"),
				g = o("./src/reddit/models/Toast/index.ts"),
				j = o("./src/reddit/selectors/experiments/inAppNotification.ts"),
				x = o("./src/reddit/components/NotificationUnit/index.m.less"),
				y = o.n(x);
			const {
				fbt: C
			} = o("./node_modules/fbt/lib/FbtPublic.js"), v = {
				kind: g.b.Error,
				text: C._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			e.default = t => {
				var e, o, n, g, x, k, _, S, w, I;
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
					} = t,
					F = null == N ? void 0 : N.messageType,
					U = F === O.a.CommentReply,
					B = F === O.a.SubredditRecommendation,
					H = F === O.a.LifecyclePostSuggestions,
					W = null === (e = null == N ? void 0 : N.post) || void 0 === e ? void 0 : e.permalink;
				let G = null === (o = null == N ? void 0 : N.comment) || void 0 === o ? void 0 : o.id,
					q = (null === (n = null == N ? void 0 : N.post) || void 0 === n ? void 0 : n.id) || (null === (x = null === (g = null == N ? void 0 : N.comment) || void 0 === g ? void 0 : g.postInfo) || void 0 === x ? void 0 : x.id);
				const J = null === (k = null == N ? void 0 : N.subreddit) || void 0 === k ? void 0 : k.id,
					V = null === (S = null === (_ = null == N ? void 0 : N.awarding) || void 0 === _ ? void 0 : _.award) || void 0 === S ? void 0 : S.id,
					z = null === (I = null === (w = null == N ? void 0 : N.awarding) || void 0 === w ? void 0 : w.awarder) || void 0 === I ? void 0 : I.id;
				if (F === O.a.CommentFollow || F === O.a.PostFollow) {
					const t = (t => {
						const e = {},
							{
								pathname: o
							} = new URL(t);
						if (!o) return e;
						const n = o.match(u);
						if (!n) return e;
						const [r, s, i, c] = n.slice(1);
						return s && "r" === r && (e.subredditName = s), i && (e.postId = `${m.b}${i}`), c && (e.commentId = `${m.a}${c}`), e
					})(R);
					q = t.postId, G = t.commentId
				} else F !== O.a.PostReply && F !== O.a.LifecyclePostSuggestions || (G = A);
				const Q = t => {
					if (q && G) {
						const t = Object(c.a)(q, G, Object(b.c)(R)),
							e = {
								parentCommentId: G,
								commentsPageKey: t
							};
						T(Object(a.h)(e)), K({
							position: f.d.SECOND
						})
					} else t.preventDefault(), T(Object(d.f)(v))
				};
				return (() => {
					switch (F) {
						case O.a.HFNSubredditInterestingPost:
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							const t = H;
							if (!(B || t || E && D)) return null;
							const e = t => {
									W ? K({
										position: f.d.SECOND,
										postId: q,
										subredditId: J
									}) : (t.preventDefault(), T(Object(d.f)(v)))
								},
								o = C._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return r.a.createElement(p.t, {
								onClick: e,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: M && !D,
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: D,
									[y.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(h.a, {
								name: "text_post",
								className: y.a.postIcon
							}), C._("{check out button}", [C._param("check out button", o)], {
								hk: "4DDMme"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply:
						case O.a.PostFollow:
						case O.a.CommentFollow: {
							const t = U;
							return U || t || E && D ? r.a.createElement(p.t, {
								onClick: Q,
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
							}, !D && r.a.createElement(h.a, {
								name: "reply",
								className: y.a.replyIcon
							}), C._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case O.a.AwardReceived: {
							if (!z) return null;
							const t = t => {
								t.preventDefault(), z ? K({
									position: f.d.SECOND,
									awardId: V
								}) : T(Object(d.f)(v))
							};
							return r.a.createElement(l.b, {
								userId: z,
								contextId: z,
								onClick: t,
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
							}, !D && r.a.createElement(h.a, {
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
							const t = t => {
								switch (t) {
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
									position: f.d.SECOND
								}),
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isNightMode]: L,
									[y.a.inAppNotification]: !0
								})
							}, t(F))
						}
						default:
							return E && D ? r.a.createElement(p.t, {
								onClick: () => K({
									position: f.d.SECOND
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
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				c = o("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}

			function d(t, e) {
				const o = Object(s.a)(t, e);
				class n extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const t = document.getElementById(i.e);
							this.setState({
								container: t
							})
						}
					}
					render() {
						return r.a.createElement(o, a({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(n)
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(t, e, o) {
			t.exports = {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/Button/index.tsx"),
				c = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = o.n(c);
			e.a = Object(n.memo)(Object(n.forwardRef)((t, e) => {
				const o = t.size || i.d.XS;
				return r.a.createElement("button", {
					"aria-checked": t.on,
					className: Object(s.a)(a.a.toggleSwitch, t.className, {
						[a.a.xs]: o === i.d.XS,
						[a.a.s]: o === i.d.S,
						[a.a.m]: o === i.d.M,
						[a.a.l]: o === i.d.L,
						[a.a.xl]: o === i.d.XL,
						[a.a.mActive]: t.on && !t.disabled || t.forceOn && t.on,
						[a.a.mDisabled]: t.disabled,
						[a.a.redditStyle]: t.redditStyle
					}),
					style: t.on && !t.disabled && t.activeColorOverride ? {
						backgroundColor: t.activeColorOverride
					} : void 0,
					id: t.id,
					role: "switch",
					tabIndex: t.tabIndex,
					type: "button",
					onClick: () => !t.disabled && t.onToggle && t.onToggle(),
					ref: e
				}, r.a.createElement("div", {
					className: a.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "g", (function() {
				return c
			})), o.d(e, "f", (function() {
				return a
			})), o.d(e, "d", (function() {
				return d
			})), o.d(e, "h", (function() {
				return l
			})), o.d(e, "c", (function() {
				return m
			})), o.d(e, "b", (function() {
				return u
			})), o.d(e, "e", (function() {
				return p
			})), o.d(e, "a", (function() {
				return b
			}));
			var n = o("./node_modules/lodash/map.js"),
				r = o.n(n),
				s = o("./src/lib/FocusTrap/index.ts");
			const i = t => "INPUT" === t.tagName.toUpperCase() || "TEXTAREA" === t.tagName.toUpperCase() || "DIV" === t.tagName.toUpperCase() && t.isContentEditable,
				c = t => {
					let e = t;
					do {
						if (i(e)) return !0
					} while (e = e.parentElement);
					return !1
				},
				a = () => {
					const t = document.getSelection();
					return !!t && (t.rangeCount > 0 && t.getRangeAt(0).toString().length > 0)
				},
				d = () => a() ? (() => {
					const t = document.getSelection();
					if (!t) return [];
					const e = t.getRangeAt(0).cloneContents().childNodes;
					return r()(e, t => t.textContent || "")
				})() : null,
				l = (t, e) => {
					const o = document.createRange();
					return o.selectNode(e), t.compareBoundaryPoints(Range.END_TO_START, o) < 0 && t.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				m = t => {
					const e = window.getSelection();
					if (1 !== e.rangeCount) return;
					const o = e.getRangeAt(0);
					if (!l(o, t)) return;
					const {
						startContainer: n,
						startOffset: r,
						endContainer: s,
						endOffset: i
					} = o, c = document.createRange();
					c.selectNode(t);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, o) && (c.setStart(n, r), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, o) && (c.setEnd(s, i), a = !1), a) return [t];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				u = (t, e, o) => {
					let n = t;
					for (; n && (!o || !o(n));) {
						if (n && e(n)) return n;
						n = n.parentElement
					}
				},
				p = t => t && t.parentElement && u(t.parentElement, t => "static" !== window.getComputedStyle(t).getPropertyValue("position")),
				b = t => {
					t.querySelectorAll(s.a).forEach(t => {
						t.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts");
			e.a = () => ({
				type: r.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return i
			}));
			var n = o("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case n.L.NO_STRIPE_SUBSCRIPTION:
							case n.L.USER_DOESNT_EXIST:
							case n.L.USER_REQUIRED_ERROR:
							case n.L.VALIDATION_ERROR:
								return t;
							case n.L.NO_USER:
							case n.L.NO_TEXT:
							case n.L.NO_URL:
								return n.L.VALIDATION_ERROR;
							case n.L.CREDIT_CARD_FAILURE:
							case n.L.CREDIT_CARD_FAILURE_GENERIC:
								return n.L.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return n.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.L.VALIDATION_ERROR
				},
				s = t => {
					const e = t.body;
					return {
						type: r(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				i = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: s(t)
					} : t
				};
			e.a = s
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(t, e, o) {
			"use strict";
			var n;
			o.d(e, "d", (function() {
					return s
				})), o.d(e, "b", (function() {
					return i
				})), o.d(e, "a", (function() {
					return c
				})), o.d(e, "c", (function() {
					return a
				})),
				function(t) {
					t.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
			const r = t => {
					if (window.sessionStorage) {
						const e = window.sessionStorage.getItem(t);
						if (e) return JSON.parse(e)
					}
					return null
				},
				s = t => {
					((t, e) => {
						window.sessionStorage && window.sessionStorage.setItem(t, JSON.stringify(e))
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, t)
				},
				i = () => r(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (t => {
					window.sessionStorage && window.sessionStorage.removeItem(t)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!r(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(t, e, o) {
			"use strict";
			o.d(e, "g", (function() {
				return p
			})), o.d(e, "f", (function() {
				return b
			})), o.d(e, "b", (function() {
				return f
			})), o.d(e, "e", (function() {
				return h
			})), o.d(e, "a", (function() {
				return O
			})), o.d(e, "c", (function() {
				return g
			})), o.d(e, "d", (function() {
				return j
			})), o.d(e, "h", (function() {
				return x
			})), o.d(e, "k", (function() {
				return y
			})), o.d(e, "j", (function() {
				return C
			})), o.d(e, "i", (function() {
				return v
			})), o.d(e, "l", (function() {
				return k
			}));
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				c = o("./src/reddit/selectors/comments.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				l = o("./src/telemetry/index.ts"),
				m = o("./src/reddit/constants/richTextJson.ts");
			const u = t => {
					const e = Object(a.p)(t);
					return {
						source: "comment_composer",
						action: r.c.CLICK,
						...Object(d.o)(t),
						screen: Object(d.cb)(t),
						subreddit: Object(d.kb)(t),
						post: e ? Object(d.K)(t, e) : null,
						profile: Object(d.T)(t),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				p = async (t, e, n, r, s) => {
					const i = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(c.j)(t, i) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = r ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...u(t),
						comment: s ? Object(d.h)({
							state: t,
							commentId: s,
							contentType: p
						}) : null,
						listing: Object(d.z)(t, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: m(t),
						media: {
							mimetype: null == r ? void 0 : r.mimetype,
							size: null == r ? void 0 : r.size
						}
					})
				}, b = t => {
					let {
						state: e,
						bodyText: o,
						postId: r,
						error: s,
						parentId: i,
						uploadMetadata: c
					} = t;
					const a = u(e),
						d = s.type === n.Pb ? "karma_rate_limit" : s.fields && s.fields.length > 0 ? s.fields[0].msg : void 0,
						p = c ? "image" : function(t) {
							return t.includes(`"id":"${m.c}`)
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
							parentId: i,
							postId: r,
							contentType: p
						},
						media: {
							mimetype: null == c ? void 0 : c.mimetype,
							size: null == c ? void 0 : c.size
						}
					})
				}, f = t => Object(l.a)({
					noun: "cancel",
					...u(t)
				}), h = (t, e) => {
					e === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(t)
					})
				}, O = (t, e) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(e),
					screen: Object(d.cb)(e),
					subreddit: Object(d.kb)(e),
					post: Object(d.K)(e, t)
				}), g = t => Object(l.a)({
					noun: "edit",
					...u(t)
				}), j = t => Object(l.a)({
					noun: "save_edit",
					...u(t)
				}), x = (t, e) => o => {
					const n = "image_upload" === t || "video_upload" === t;
					return {
						...u(o),
						noun: n ? t : "text_option",
						commentComposer: {
							textType: t,
							finalStatus: e ? "on" : "off"
						}
					}
				}, y = () => t => ({
					...u(t),
					action: "open",
					noun: "gif_tooltip"
				}), C = t => e => ({
					...u(e),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: t
					}
				}), v = () => t => ({
					...u(t),
					action: "select",
					noun: "gif_tooltip_result"
				}), k = () => t => ({
					...u(t),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(t, e, o) {
			t.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = o.n(i);

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}
			const d = t => {
				let {
					className: e,
					isSubreddit: o,
					...n
				} = t;
				return r.a.createElement("svg", a({
					className: Object(s.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !o
					}, e),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			e.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: t.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return l
			})), o.d(e, "c", (function() {
				return m
			})), o.d(e, "b", (function() {
				return u
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(n.a)((t, e) => Object(s.c)(t, {
					experimentEligibilitySelector: s.a,
					experimentName: `d2x_start_comment_before_sign_up_${e}`
				}), i.a),
				d = t => c.find(e => !!Object(i.a)(a(t, e))),
				l = Object(n.a)(d, t => !!t),
				m = t => {
					const e = d(t);
					return !!e && a(t, e) === r.bb.SkipOnboarding
				},
				u = t => {
					const e = d(t);
					return !!e && a(t, e) === r.bb.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(t) {
			t.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(t) {
			t.exports = JSON.parse('{"id":"eced54f14226"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(t) {
			t.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(t) {
			t.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.ef9a3243766c66cb44c3.js.map