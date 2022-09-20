// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b194488fdd60d730a071.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
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
				return ht
			})), o.d(e, "r", (function() {
				return jt
			})), o.d(e, "p", (function() {
				return xt
			})), o.d(e, "t", (function() {
				return kt
			})), o.d(e, "w", (function() {
				return _t
			})), o.d(e, "q", (function() {
				return vt
			})), o.d(e, "v", (function() {
				return It
			})), o.d(e, "o", (function() {
				return Tt
			})), o.d(e, "m", (function() {
				return Nt
			})), o.d(e, "b", (function() {
				return Pt
			})), o.d(e, "c", (function() {
				return At
			})), o.d(e, "s", (function() {
				return Lt
			})), o.d(e, "g", (function() {
				return Kt
			})), o.d(e, "h", (function() {
				return Ft
			})), o.d(e, "k", (function() {
				return Ut
			})), o.d(e, "e", (function() {
				return Ht
			})), o.d(e, "d", (function() {
				return qt
			})), o.d(e, "a", (function() {
				return Vt
			})), o.d(e, "j", (function() {
				return Qt
			})), o.d(e, "i", (function() {
				return Yt
			})), o.d(e, "l", (function() {
				return Zt
			})), o.d(e, "u", (function() {
				return te
			})), o.d(e, "n", (function() {
				return ee
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/lib/scroll/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/actions/onboarding/index.ts"),
				u = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/postCreation/editorContent.ts"),
				b = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				f = o("./src/reddit/actions/shortcuts/utils.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/reddit/constants/adEvents.ts"),
				g = o("./src/reddit/constants/localStorage.ts"),
				j = o("./src/redditGQL/operations/CommentToxicity.json"),
				x = o("./src/lib/makeApiRequest/index.ts"),
				C = o("./src/lib/makeGqlRequest/index.ts"),
				y = o("./src/lib/omitHeaders/index.ts"),
				k = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				_ = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
						o.rteState && (t = k.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
							document: t
						})
					}
					return Object(C.a)(t, {
						...j,
						variables: {
							subredditName: e,
							markdown: r,
							richText: s
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				A = async (t, e, o, n) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					return o.commentMode === T.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(x.a)(Object(y.a)(t, [_.a]), {
						method: r.mb.POST,
						endpoint: Object(v.a)(Object(E.a)(Object(N.a)(`${t.apiUrl}/api/comment.json`))),
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
				}, L = async (t, e, o, n, r) => {
					const s = n.commentMode === T.i.MARKDOWN,
						i = {
							postId: e || null,
							parentId: o || null,
							content: {
								markdown: s ? n.text : null,
								richText: s ? null : r
							}
						};
					return Object(C.a)(t, {
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
				J = o("./src/reddit/helpers/comment/index.ts"),
				G = o("./src/reddit/helpers/correlationIdTracker.ts"),
				q = o("./src/reddit/helpers/dom/index.ts"),
				V = o("./src/reddit/helpers/localStorage/index.ts"),
				Q = o("./src/reddit/helpers/sessionStorage/index.ts"),
				X = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				z = o("./src/reddit/models/Comment/index.ts"),
				$ = o("./src/reddit/models/PostDraft/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/index.ts"),
				Z = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				tt = o("./src/reddit/models/Toast/index.ts"),
				et = o("./src/reddit/selectors/chatPost.ts"),
				ot = o("./src/reddit/selectors/comments.ts"),
				nt = o("./src/reddit/selectors/commentSelector.ts"),
				rt = o("./src/reddit/selectors/experiments/chat.ts"),
				st = o("./src/reddit/constants/experiments.ts"),
				it = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ct = o("./node_modules/reselect/es/index.js");
			const at = Object(ct.a)(t => Object(it.c)(t, {
				experimentEligibilitySelector: it.a,
				experimentName: st.Kb
			}), t => t === st.Kd);
			var dt = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				lt = o("./src/reddit/selectors/platform.ts"),
				mt = o("./src/reddit/selectors/posts.ts"),
				ut = o("./src/reddit/selectors/user.ts"),
				pt = o("./src/reddit/actions/comment/index.ts"),
				bt = o("./src/reddit/actions/comment/constants.ts");
			const ft = Object(s.a)(bt.m),
				ht = t => {
					let {
						hasFocus: e,
						draftKey: o
					} = t;
					return async (t, n) => {
						const r = n();
						if (!!r.features.comments.drafts[o])
							if (Object(ut.S)(r) && e) {
								const n = ft({
									hasFocus: e,
									draftKey: o
								});
								t(Object(a.startChangeUsernameFlow)(n))
							} else t(ft({
								hasFocus: e,
								draftKey: o
							}))
					}
				},
				Ot = Object(s.a)(bt.L),
				gt = Object(s.a)(bt.H),
				jt = Object(s.a)(bt.N),
				xt = Object(s.a)(bt.M),
				Ct = Object(s.a)(bt.K),
				yt = async (t, e, o, n) => {
					const r = n.ok && n.body,
						s = r && r.comment && r.comment.id;
					await X.f(t, o, e, s)
				}, kt = "Toxicity_Warning__Modal", _t = t => async (e, o, n) => {
					let {
						gqlContext: r
					} = n;
					const s = o(),
						i = Object(lt.e)(s);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: d
					} = t;
					if (W.d.enableToxicityWarning(s)) {
						if (!(await D(r(), c, a, d))) return void e(Object(l.i)(kt))
					}
					e(vt(t))
				}, vt = t => async (e, o) => {
					e(Object(l.g)(kt));
					const n = o(),
						r = Object(dt.a)(n),
						s = Object(dt.c)(n);
					if (!n.user.account && r) {
						const o = Object(J.e)(t.formData, n.uploads),
							r = Object(J.c)(t.formData);
						e(Object(l.k)({
							actionSource: l.a.Reply
						})), e(Object(d.openRegisterModal)()), Object(Q.d)({
							comment: {
								...t,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else e(wt(t, !1))
				};

			function St(t, e) {
				return t === T.i.MARKDOWN && at(e)
			}
			const wt = (t, e, o, s) => {
					let {
						postId: i,
						commentsPageKey: a,
						draftKey: d,
						formData: l,
						editorMode: m,
						disableAutofocus: p,
						isLiveStreaming: g
					} = t;
					return async (t, j, x) => {
						let {
							apiContext: C,
							gqlContext: y
						} = x;
						var k;
						const _ = j(),
							v = Object(et.d)(_, {
								postId: i
							}) && Object(rt.g)(_),
							S = v ? Object(J.a)() : d,
							w = Object(nt.e)(_, {
								commentId: S
							}),
							I = Object(ut.k)(_);
						if (!I) return;
						if (w && !v) return;
						e || t(Ot({
							draftKey: S,
							draft: l,
							commentsPageKey: a,
							optimisticComment: v ? Object(J.b)({
								temporalId: S,
								draft: l,
								post: Object(mt.G)(_, {
									postId: i
								}),
								author: I,
								subredditId: (null === (k = Object(lt.e)(_)) || void 0 === k ? void 0 : k.id) || ""
							}) : void 0
						}));
						const E = I.displayText,
							N = l.commentMode;
						let R;
						if (g) R = await Object(H.i)(C(), i, l, E), t(Object(b.a)({
							streamId: i,
							level: R.body.automuteLevel
						}));
						else {
							const t = e && o ? o : Object(J.e)(l, _.uploads);
							R = St(N, _) ? await L(y(), i, null, l, t) : await A(C(), i, l, t)
						}
						if (R.ok) {
							let o;
							if (o = R.body, t(jt({
									...o,
									headCommentId: Object(ot.w)(_, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: S
								})), e) {
								const t = Object(lt.i)(_);
								Object(c.a)(!!t)
							}
							const n = Object(mt.G)(j(), {
								postId: i
							});
							t(Object(u.z)(n, O.a.CommentSubmitted))
						} else {
							if (R.error && R.error.type === r.Nb) {
								const t = e && s ? s : Object(J.c)(l);
								X.j(_, t, i)
							}
							const o = R.error && R.error.fields && R.error.fields[0] ? R.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							t(Ct({
								draftKey: S,
								error: R.error
							})), v || t(Object(h.f)({
								duration: h.a,
								kind: tt.b.Error,
								text: o
							}))
						}
						yt(j(), a, m, R).then(() => R.ok && m === T.i.RICH_TEXT ? Object(G.b)(G.a.CommentComposer) : void 0), p || Object(f.d)(), e && Object(Q.a)()
					}
				},
				It = t => async (e, o, n) => {
					let {
						gqlContext: r
					} = n;
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: m
					} = t, u = o(), p = Object(lt.e)(u);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(u)) {
						if (!(await D(r(), b, d, m))) return void e(Object(l.i)(kt))
					}
					e(Tt({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: d,
						editorMode: m
					}))
				}, Tt = t => async (e, o) => {
					e(Object(l.g)(kt));
					const n = o(),
						r = Object(dt.a)(n),
						s = Object(dt.c)(n);
					if (!n.user.account && r) {
						const o = Object(J.e)(t.formData, n.uploads),
							r = Object(J.c)(t.formData);
						e(Object(l.k)({
							actionSource: l.a.Reply
						})), e(Object(d.openRegisterModal)()), Object(Q.d)({
							comment: {
								...t,
								richTextJSONData: o,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else e(Et(t, !1))
				}, Et = (t, e, o, n) => async (s, i, a) => {
					let {
						apiContext: d,
						gqlContext: l
					} = a;
					var m;
					const {
						parentCommentId: u,
						commentsPageKey: p,
						parentCommentDepth: b,
						draftKey: h,
						formData: O,
						editorMode: g
					} = t, j = i(), x = Object(nt.b)(j, {
						commentId: u
					}), C = x && Object(et.d)(j, {
						postId: x.postId
					}) && Object(rt.g)(j), y = C ? Object(J.a)() : h, k = Object(nt.e)(j, {
						commentId: y
					}), _ = Object(ut.k)(j);
					if (!_) return;
					if (k && !C) return;
					e || s(Ot({
						draftKey: y,
						draft: O,
						commentsPageKey: p,
						optimisticComment: C && x ? Object(J.b)({
							temporalId: y,
							draft: O,
							post: Object(mt.G)(j, {
								postId: x.postId
							}),
							author: _,
							subredditId: (null === (m = Object(lt.e)(j)) || void 0 === m ? void 0 : m.id) || "",
							parentId: x.id
						}) : void 0
					})), s(Pt({
						parentCommentId: u,
						commentsPageKey: p
					}));
					const v = O.commentMode,
						S = e && o ? o : Object(J.e)(O, j.uploads);
					let w;
					if ((w = St(v, j) ? await L(l(), null, u, O, S) : await A(d(), u, O, S)).ok) {
						if (s(xt({
								...w.body,
								parentCommentId: u,
								commentsPageKey: p,
								draftKey: y,
								depth: b + 1
							})), e) {
							const t = Object(lt.i)(j);
							Object(c.a)(!!t)
						}
					} else {
						if (w.error && w.error.type === r.Nb) {
							if (!x) return;
							const t = e && n ? n : Object(J.c)(O);
							X.j(j, t, x.postId, u)
						}
						s(Ct({
							draftKey: y,
							error: w.error
						}))
					}
					yt(i(), p, g, w), Object(f.d)(), e && Object(Q.a)()
				}, Nt = () => async t => {
					const e = Object(Q.b)();
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
						c && t(Object(m.skipOnboardingModal)()), r ? await t(wt({
							...e.comment,
							postId: r
						}, !0, s, i)) : n && void 0 !== o && await t(Et({
							...e.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, s, i))
					}
				}, Rt = Object(s.a)(bt.s), Pt = Object(s.a)(bt.r), Mt = Object(s.a)(bt.n), Dt = (Object(s.a)(bt.i), Object(s.a)(bt.o)), At = (Object(s.a)(bt.v), (t, e, o) => async (r, s, i) => {
					let {
						apiContext: c
					} = i;
					const a = t === T.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(Y.G)(e)) r(Dt({
						editorMode: t,
						draftKey: o,
						content: a ? Y.i : ""
					})), r(Object(p.c)(t));
					else {
						r(Object(p.b)(o));
						const s = await Object(B.a)(c(), t, a ? e : JSON.stringify(e));
						if (s.ok) {
							const e = s.body.output;
							r(Object(p.a)(o)), r(Dt({
								editorMode: t,
								draftKey: o,
								content: e
							})), r(Object(p.c)(t))
						} else r(Object(p.a)(o)), r(Object(h.f)({
							duration: h.a,
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
						const s = r(),
							c = Object(i.a)($.c.replyToComment, o);
						if (!Object(ut.Q)(r()) && !Object(dt.a)(s)) return t(Object(d.openRegisterModal)()), void t(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ot.m)(r(), {
								commentId: o
							})
						}));
						const m = s.features.comments.replyFormOpen[e],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && t(Pt({
								parentCommentId: o,
								commentsPageKey: e
							}))), u)) return;
						let p = "",
							b = null;
						const f = s.user.prefs.commentMode,
							h = Object(q.d)();
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
						const O = s.features.comments.drafts[c];
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
							}, Object(ut.S)(s)) {
							const n = Rt({
								parentCommentId: o,
								commentsPageKey: e,
								draftKey: c,
								formData: g
							});
							t(Object(a.startChangeUsernameFlow)(n))
						} else t(Rt({
							parentCommentId: o,
							commentsPageKey: e,
							draftKey: c,
							formData: g
						}))
					}
				}, Kt = t => async e => {
					e(Object(pt.r)(t)), e(Ht(t))
				}, Ft = t => {
					let {
						parentCommentId: e,
						commentsPageKey: o
					} = t;
					return async t => {
						t(Pt({
							parentCommentId: e,
							commentsPageKey: o
						})), t(Lt({
							parentCommentId: e,
							commentsPageKey: o
						})), t(Object(pt.r)({
							commentId: e,
							commentsPageKey: o
						}))
					}
				}, Ut = (t, e) => o => o(Mt({
					draftKey: t,
					formData: e
				})), Bt = Object(s.a)(bt.u), Ht = t => {
					let {
						commentId: e,
						commentMode: o,
						commentsPageKey: n,
						draftKey: r,
						text: s
					} = t;
					return async (t, i) => {
						const c = i();
						c.user.account && (X.c(c), t(Bt({
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
				}, Wt = Object(s.a)(bt.F), Jt = Object(s.a)(bt.E), Gt = Object(s.a)(bt.G), qt = Object(s.a)(bt.j), Vt = Object(s.a)(bt.f), Qt = t => {
					let {
						id: e,
						commentsPageKey: o,
						draftKey: n,
						formData: s
					} = t;
					return async (t, i, c) => {
						let {
							apiContext: a,
							gqlContext: d
						} = c;
						const l = i();
						if (!l.user.account) return;
						t(Wt({
							draftKey: n
						})), X.d(l);
						const m = Object(J.e)(s, l.uploads),
							u = s.commentMode;
						let p;
						if ((p = St(u, l) ? await (async (t, e, o, n, r) => {
								const s = r === T.i.MARKDOWN,
									i = {
										commentId: e,
										content: {
											markdown: s ? o.text : null,
											richText: s ? null : n
										}
									};
								return Object(C.a)(t, {
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
							})(d(), e, s, m, u) : await (async (t, e, o, n, s) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: e
								};
								return s === T.i.MARKDOWN ? i.text = o.text : (i.text = null, i.richtext_json = n), Object(x.a)(Object(y.a)(t, [_.a]), {
									endpoint: Object(v.a)(Object(N.a)(Object(E.a)(`${t.apiUrl}/api/editusertext`))),
									method: r.mb.POST,
									data: i
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
							})(a(), e, s, m, u)).ok) {
							const r = p.body;
							t(Gt({
								commentId: e,
								commentsPageKey: o,
								draftKey: n
							})), t(Object(pt.j)({
								[e]: {
									...r.comment
								}
							}))
						} else t(Jt({
							draftKey: n,
							error: p.error
						}))
					}
				}, Xt = Object(s.a)(bt.C), zt = Object(s.a)(bt.B), $t = Object(s.a)(bt.D), Yt = (t, e) => async (o, n, s) => {
					let {
						apiContext: i
					} = s;
					const c = n();
					o(Xt({
						id: t
					})), X.a(t, c);
					const a = await ((t, e) => Object(x.a)(Object(y.a)(t, [_.a]), {
						endpoint: Object(v.a)(`${t.apiUrl}/api/del`),
						method: r.mb.POST,
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
					}))(i(), t);
					a.ok ? o($t({
						id: t,
						postId: e
					})) : o(zt({
						id: t,
						error: a.error
					}))
				}, Zt = t => async (e, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = !o().features.comments.models[t].sendReplies;
					e(Object(pt.j)({
						[t]: {
							sendReplies: s
						}
					})), (await Object(U.s)(r(), t, s)).ok || e(Object(pt.j)({
						[t]: {
							sendReplies: !s
						}
					}))
				}, te = (t, e) => async (o, r, s) => {
					let {
						gqlContext: i
					} = s;
					var c, a, d, l, m, u;
					o(Object(pt.c)());
					const p = t => Object(h.f)(Object(h.e)(t, tt.b.Error));
					if (((null === (a = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === g.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = e === z.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(pt.p)(c)), (await ((t, e) => Object(C.a)(t, {
								...F,
								variables: {
									input: e
								}
							}))(i(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(V.xb)(null !== (m = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const t = s ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(h.f)({
								kind: tt.b.SuccessCommunityGreen,
								text: t
							}))
						} else o(Object(pt.p)(c)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function ee(t) {
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
					t(gt({
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
						await t(Tt({
							commentsPageKey: o,
							draftKey: i.id,
							parentCommentDepth: n,
							parentCommentId: e.id,
							formData: c,
							editorMode: i.media.rteMode
						}))
					} else await t(vt({
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
						C = u.k;
					if (j && Object(l.G)(o)) return r(f({
						editorKey: t,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(O(e));
					if (x && !o) return r(f({
						editorKey: t,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(O(e));
					r(p(C));
					const y = await Object(i.a)(g(), e, j ? JSON.stringify(o) : o);
					y.ok ? (r(b(C)), r(f({
						editorKey: t,
						editorMode: e,
						content: y.body.output
					})), r(O(e))) : (r(b(C)), r(Object(s.f)({
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
					})), Object(c.ub)(r + 1)
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
				return X
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
						method: d.mb.POST,
						data: {
							api_type: "json",
							id: e,
							sort: o
						}
					}))(i(), t, e),
					a = `error-block-${e}`,
					l = `success-block-${e}`;
				if (c.ok) {
					o(Object(p.S)({
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
				C = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				k = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = o("./src/reddit/components/TrackingHelper/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/index.tsx"),
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
					userSubreddit: Object(T.tb)(s)
				}),
				N = (t, e) => o => ({
					source: "comment_highlighting",
					action: e,
					noun: t
				}),
				R = t => ({
					subreddit: Object(T.jb)(t),
					userSubreddit: Object(T.tb)(t)
				}),
				P = t => e => ({
					source: "contest_mode",
					action: "click",
					noun: t ? "enable" : "disable",
					...R
				});
			var M = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = o("./src/reddit/icons/svgs/Info/index.tsx"),
				A = o("./src/reddit/selectors/activeModalId.ts"),
				L = o("./src/reddit/selectors/comments.ts"),
				K = o("./src/reddit/selectors/moderatorPermissions.ts"),
				F = o("./src/reddit/selectors/posts.ts"),
				U = o("./src/reddit/selectors/tooltip.ts"),
				B = o("./src/reddit/selectors/user.ts"),
				H = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				W = o.n(H),
				J = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(k.a)(v.a),
				q = t => t === J.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : t === J.a.Last ? n.fbt._("Last Visit", null, {
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
						if (e !== J.a.None) {
							t(e === J.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (t, e) => {
						this.props.trackHighlight(t, "click"), this.props.changeHighlightSort(e)
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
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(r)}`,
						id: e,
						noHover: !0,
						onClick: o
					}), s.a.createElement(M.b, {
						className: W.a.DropdownTriangle,
						onClick: o
					}), s.a.createElement(G, {
						isOpen: t,
						renderContentsHidden: !0,
						tooltipId: e
					}, s.a.createElement(S.b, {
						displayText: q(J.a.First),
						isSelected: r === J.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(S.b, {
						displayText: q(J.a.Last),
						isSelected: r === J.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(S.b, {
						displayText: q(J.a.None),
						isSelected: r === J.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Q = V;
			const X = "CommentSort--SortPicker",
				z = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				Y = Object(k.a)(v.a),
				Z = Object(c.c)({
					commentPermalink: (t, e) => {
						let {
							commentId: o
						} = e;
						return o && Object(L.m)(t, {
							commentId: o
						})
					},
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(X),
					highlightIsOpen: Object(U.b)(z),
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
						const n = Object(B.v)(t),
							r = !!Object(K.m)(t, {
								postId: o
							}),
							s = Object(F.G)(t, {
								postId: o
							});
						return (r || n) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
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
							tooltipId: X
						})),
						onOpenHighlightDropdown: e => {
							t(Object(l.h)({
								tooltipId: z
							})), e()
						},
						onSetSuggestedSort: e => t(j(o, e)),
						hideTooltip: () => t(Object(l.i)()),
						setContestMode: e => t(Object(p.X)(e, o)),
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
						suggestedSort: k,
						showTooltip: _,
						toggleContestModeModal: v
					} = this.props, T = f.contestMode, E = !b.search.includes(d.u.CONFIDENCE), R = j === d.u.CONFIDENCE && E, P = u && !R, A = d.w[j], L = A ? A() : "", K = k && j === k && !R ? this.addSuggestedLabel(L) : L, F = T ? n.fbt._("End contest mode?", null, {
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
						id: X,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(M.b, {
						className: W.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), s.a.createElement(Y, {
						isOpen: i,
						tooltipId: X
					}, [d.u.CONFIDENCE, d.u.TOP, d.u.NEW, d.u.CONTROVERSIAL, d.u.OLD, d.u.QA].map(t => {
						const e = o || h,
							n = Object(I.b)(e),
							r = d.w[t],
							i = r ? r() : "";
						return s.a.createElement(y.a, {
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
					}))), P && !H && (k ? s.a.createElement("button", {
						className: W.a.SortLink,
						onClick: j !== k ? this.setSortOnClick : this.clearSortOnClick
					}, j !== k ? n.fbt._("Set new suggested sort", null, {
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
						onMouseEnter: _,
						onMouseLeave: l
					}, s.a.createElement(C.c, {
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
					}, s.a.createElement(Q, {
						changeHighlightSort: t,
						highlightIsOpen: m,
						id: z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: O,
						trackHighlight: N
					})), r && s.a.createElement(x.a, {
						actionText: U,
						headerText: F,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: v,
						withOverlay: !0
					}))
				}
			}
			e.b = tt(Object(_.c)(et))
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
				C = Object(s.b)(g);
			e.c = C(t => {
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
				C = o.n(x);
			const {
				fbt: y
			} = o("./node_modules/fbt/lib/FbtPublic.js"), k = {
				kind: g.b.Error,
				text: y._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			e.default = t => {
				var e, o, n, g, x, _, v, S, w, I;
				const T = Object(s.d)(),
					E = Object(s.e)(j.d),
					{
						context: N,
						deeplinkUrl: R,
						isFullWidth: P,
						isUnread: M,
						isInAppNotification: D,
						isNightMode: A,
						notificationId: L,
						onEvent: K
					} = t,
					F = null == N ? void 0 : N.messageType,
					U = F === O.a.CommentReply,
					B = F === O.a.SubredditRecommendation,
					H = F === O.a.LifecyclePostSuggestions,
					W = null === (e = null == N ? void 0 : N.post) || void 0 === e ? void 0 : e.permalink;
				let J = null === (o = null == N ? void 0 : N.comment) || void 0 === o ? void 0 : o.id,
					G = (null === (n = null == N ? void 0 : N.post) || void 0 === n ? void 0 : n.id) || (null === (x = null === (g = null == N ? void 0 : N.comment) || void 0 === g ? void 0 : g.postInfo) || void 0 === x ? void 0 : x.id);
				const q = null === (_ = null == N ? void 0 : N.subreddit) || void 0 === _ ? void 0 : _.id,
					V = null === (S = null === (v = null == N ? void 0 : N.awarding) || void 0 === v ? void 0 : v.award) || void 0 === S ? void 0 : S.id,
					Q = null === (I = null === (w = null == N ? void 0 : N.awarding) || void 0 === w ? void 0 : w.awarder) || void 0 === I ? void 0 : I.id;
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
					G = t.postId, J = t.commentId
				} else F !== O.a.PostReply && F !== O.a.LifecyclePostSuggestions || (J = L);
				const X = t => {
					if (G && J) {
						const t = Object(c.a)(G, J, Object(b.c)(R)),
							e = {
								parentCommentId: J,
								commentsPageKey: t
							};
						T(Object(a.h)(e)), K({
							position: f.d.SECOND
						})
					} else t.preventDefault(), T(Object(d.f)(k))
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
										postId: G,
										subredditId: q
									}) : (t.preventDefault(), T(Object(d.f)(k)))
								},
								o = y._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return r.a.createElement(p.t, {
								onClick: e,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(C.a.notificationButton, {
									[C.a.isUnread]: M && !D,
									[C.a.isNightMode]: A,
									[C.a.inAppNotification]: D,
									[C.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(h.a, {
								name: "text_post",
								className: C.a.postIcon
							}), y._("{check out button}", [y._param("check out button", o)], {
								hk: "4DDMme"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply:
						case O.a.PostFollow:
						case O.a.CommentFollow: {
							const t = U;
							return U || t || E && D ? r.a.createElement(p.t, {
								onClick: X,
								kind: p.b.InternalLink,
								to: R,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(C.a.notificationButton, {
									[C.a.isUnread]: M && !D,
									[C.a.isNightMode]: A,
									[C.a.inAppNotification]: D,
									[C.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(h.a, {
								name: "reply",
								className: C.a.replyIcon
							}), y._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case O.a.AwardReceived: {
							if (!Q) return null;
							const t = t => {
								t.preventDefault(), Q ? K({
									position: f.d.SECOND,
									awardId: V
								}) : T(Object(d.f)(k))
							};
							return r.a.createElement(l.b, {
								userId: Q,
								contextId: Q,
								onClick: t,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(C.a.notificationButton, {
									[C.a.isUnread]: M && !D,
									[C.a.isNightMode]: A,
									[C.a.inAppNotification]: D,
									[C.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(h.a, {
								name: "chat_new",
								className: C.a.replyIcon
							}), y._("Say thanks", null, {
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
										return y._("See Post", null, {
											hk: "mGXS5"
										});
									case O.a.UpvoteComment:
										return y._("See Comment", null, {
											hk: "3FUtJF"
										});
									case O.a.ChatRequest:
									case O.a.ChatAcceptInvite:
										return y._("Start Chat", null, {
											hk: "iQZfe"
										});
									case O.a.ChatMessage:
										return y._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case O.a.CakeDay:
									case O.a.UserNewFollower:
										return y._("See Profile", null, {
											hk: "2Wj94t"
										});
									case O.a.TalkLive:
										return y._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return y._("Reply", null, {
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
								className: Object(i.a)(C.a.notificationButton, {
									[C.a.isNightMode]: A,
									[C.a.inAppNotification]: !0
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
								className: Object(i.a)(C.a.notificationButton, {
									[C.a.isNightMode]: A,
									[C.a.inAppNotification]: !0
								})
							}, y._("See more", null, {
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
					className: Object(s.a)(a.a.toggleSwitch, t.className, a.a[o], {
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
				type: r.J.SERVER_ERROR,
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
							case n.J.NO_STRIPE_SUBSCRIPTION:
							case n.J.USER_DOESNT_EXIST:
							case n.J.USER_REQUIRED_ERROR:
							case n.J.VALIDATION_ERROR:
								return t;
							case n.J.NO_USER:
							case n.J.NO_TEXT:
							case n.J.NO_URL:
								return n.J.VALIDATION_ERROR;
							case n.J.CREDIT_CARD_FAILURE:
							case n.J.CREDIT_CARD_FAILURE_GENERIC:
								return n.J.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return n.J.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.J.VALIDATION_ERROR
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
			o.d(e, "f", (function() {
				return m
			})), o.d(e, "j", (function() {
				return u
			})), o.d(e, "b", (function() {
				return p
			})), o.d(e, "e", (function() {
				return b
			})), o.d(e, "a", (function() {
				return f
			})), o.d(e, "c", (function() {
				return h
			})), o.d(e, "d", (function() {
				return O
			})), o.d(e, "g", (function() {
				return g
			})), o.d(e, "k", (function() {
				return j
			})), o.d(e, "i", (function() {
				return x
			})), o.d(e, "h", (function() {
				return C
			})), o.d(e, "l", (function() {
				return y
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/correlationIdTracker.ts"),
				s = o("./src/reddit/models/PostDraft/index.ts"),
				i = o("./src/reddit/selectors/comments.ts"),
				c = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/telemetry.ts"),
				d = o("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: n.c.CLICK,
						...Object(a.o)(t),
						screen: Object(a.bb)(t),
						subreddit: Object(a.jb)(t),
						post: e ? Object(a.K)(t, e) : null,
						profile: Object(a.T)(t),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				m = async (t, e, n, r) => {
					const s = {
							commentId: r,
							commentsPageKey: n
						},
						c = r && Object(i.j)(t, s) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(t),
						comment: r ? Object(a.h)(t, r) : null,
						listing: Object(a.z)(t, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: m(t)
					})
				}, u = (t, e, o, n) => {
					const r = l(t);
					return Object(d.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: e,
							parentId: n,
							postId: o
						}
					})
				}, p = t => Object(d.a)({
					noun: "cancel",
					...l(t)
				}), b = (t, e) => {
					e === s.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(t)
					})
				}, f = (t, e) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.o)(e),
					screen: Object(a.bb)(e),
					subreddit: Object(a.jb)(e),
					post: Object(a.K)(e, t)
				}), h = t => Object(d.a)({
					noun: "edit",
					...l(t)
				}), O = t => Object(d.a)({
					noun: "save_edit",
					...l(t)
				}), g = (t, e) => o => {
					const n = "image_upload" === t || "video_upload" === t;
					return {
						...l(o),
						noun: n ? t : "text_option",
						commentComposer: {
							textType: t,
							finalStatus: e ? "on" : "off"
						}
					}
				}, j = () => t => ({
					...l(t),
					action: "open",
					noun: "gif_tooltip"
				}), x = t => e => ({
					...l(e),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: t
					}
				}), C = () => t => ({
					...l(t),
					action: "select",
					noun: "gif_tooltip_result"
				}), y = () => t => ({
					...l(t),
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
					return !!e && a(t, e) === r.eb.SkipOnboarding
				},
				u = t => {
					const e = d(t);
					return !!e && a(t, e) === r.eb.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(t) {
			t.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(t) {
			t.exports = JSON.parse('{"id":"a3eae58411e4"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(t) {
			t.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(t) {
			t.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b194488fdd60d730a071.js.map