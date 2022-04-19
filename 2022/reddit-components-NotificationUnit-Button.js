// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.4e1c1fbb4fa694e868ec.js
// Retrieved at 4/19/2022, 3:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/reddit/actions/comment/authoring.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return tt
			})), n.d(e, "p", (function() {
				return nt
			})), n.d(e, "n", (function() {
				return ot
			})), n.d(e, "r", (function() {
				return st
			})), n.d(e, "u", (function() {
				return ct
			})), n.d(e, "o", (function() {
				return dt
			})), n.d(e, "t", (function() {
				return lt
			})), n.d(e, "m", (function() {
				return ut
			})), n.d(e, "h", (function() {
				return bt
			})), n.d(e, "a", (function() {
				return ft
			})), n.d(e, "b", (function() {
				return yt
			})), n.d(e, "q", (function() {
				return Ct
			})), n.d(e, "f", (function() {
				return xt
			})), n.d(e, "g", (function() {
				return It
			})), n.d(e, "k", (function() {
				return _t
			})), n.d(e, "d", (function() {
				return ht
			})), n.d(e, "c", (function() {
				return Rt
			})), n.d(e, "j", (function() {
				return Nt
			})), n.d(e, "i", (function() {
				return wt
			})), n.d(e, "l", (function() {
				return At
			})), n.d(e, "s", (function() {
				return Pt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				y = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				I = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				g = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				R = n("./src/reddit/models/PostCreationForm/index.ts"),
				N = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (t, e, n, o) => {
					let i, r;
					if (o === R.i.MARKDOWN) i = n.text, r = null;
					else {
						i = null;
						let t = null;
						n.rteState && (t = p.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: t
						})
					}
					return Object(I.a)(t, {
						...C,
						variables: {
							subredditName: e,
							markdown: i,
							richText: r
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				v = async (t, e, n, o, r) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					if (r === R.i.MARKDOWN) s.text = n.text;
					else {
						s.text = null;
						let t = null;
						n.rteState && (t = p.a.toRichTextJSON(n.rteState).document), s.richtext_json = JSON.stringify({
							document: t
						})
					}
					return Object(x.a)(Object(_.a)(t, [j.a]), {
						method: i.kb.POST,
						endpoint: Object(h.a)(Object(N.a)(Object(S.a)(`${t.apiUrl}/api/comment.json`))),
						data: s
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(E.a)(t)
					} : {
						...t,
						body: {
							comment: Object(g.a)(t.body.json.data.things[0].data, o)
						}
					} : {
						...t,
						body: {
							comment: Object(g.a)(t.body, o)
						}
					} : {
						...t,
						error: t.error || Object(T.a)()
					})
				};
			var w = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var A = n("./src/reddit/endpoints/post/index.tsx"),
				P = n("./src/reddit/endpoints/post/convert.ts"),
				D = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				M = n("./src/reddit/helpers/correlationIdTracker.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				F = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				V = n("./src/reddit/models/Comment/index.ts"),
				W = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				B = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/commentSelector.ts"),
				Y = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				$ = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)($.k),
				tt = t => {
					let {
						hasFocus: e,
						draftKey: n
					} = t;
					return async (t, o) => {
						const i = o();
						if (!!i.features.comments.drafts[n])
							if (Object(z.T)(i) && e) {
								const o = Z({
									hasFocus: e,
									draftKey: n
								});
								t(Object(c.f)(o))
							} else t(Z({
								hasFocus: e,
								draftKey: n
							}))
					}
				},
				et = Object(r.a)($.I),
				nt = Object(r.a)($.K),
				ot = Object(r.a)($.J),
				it = Object(r.a)($.H),
				rt = async (t, e, n, o) => {
					const i = o.ok && o.body,
						r = i && i.comment && i.comment.id;
					await U.f(t, n, e, r)
				}, st = "Toxicity_Warning__Modal", ct = (t, e, n, o, i, r) => async (s, c, a) => {
					let {
						gqlContext: l
					} = a;
					const u = c(),
						m = Object(Y.e)(u);
					let b = "";
					if (m && (b = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await k(l(), b, o, i))) return void s(Object(d.i)(st))
					}
					s(dt(t, e, n, o, i, r))
				}, at = t => t.rteState ? p.a.toRichTextJSON(t.rteState) : t.rtJson || t.text, dt = (t, e, n, r, s, c, a) => async (u, p, y) => {
					let {
						apiContext: C
					} = y;
					u(Object(d.g)(st));
					const x = p(),
						I = x.features.comments.submit.pending[n];
					if (!x.user.account || I) return;
					u(et({
						draftKey: n,
						draft: r
					}));
					const _ = x.user.account.displayText,
						j = r.commentMode;
					let h;
					if (a ? (h = await Object(D.i)(C(), t, r, _), u(Object(m.a)({
							streamId: t,
							level: h.body.automuteLevel
						}))) : h = await v(C(), t, r, _, j), h.ok) {
						let o;
						o = h.body, u(nt({
							...o,
							headCommentId: Object(q.w)(x, {
								commentsPageKey: e
							}),
							commentsPageKey: e,
							draftKey: n
						}));
						const i = Object(Q.G)(p(), {
							postId: t
						});
						u(Object(l.z)(i, O.a.CommentSubmitted))
					} else {
						h.error && h.error.type === i.Lb && U.h(x, at(r), t);
						const e = h.error && h.error.fields && h.error.fields[0] ? h.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(it({
							draftKey: n,
							error: h.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: H.b.Error,
							text: e
						}))
					}
					rt(p(), e, s, h).then(() => h.ok && s === R.i.RICH_TEXT ? Object(M.b)(M.a.CommentComposer) : void 0), c || Object(b.d)()
				}, lt = t => async (e, n, o) => {
					let {
						gqlContext: i
					} = o;
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: a,
						formData: l,
						editorMode: u
					} = t, m = n(), b = Object(Y.e)(m);
					let f = "";
					if (b && (f = b.name), L.d.enableToxicityWarning(m)) {
						if (!(await k(i(), f, l, u))) return void e(Object(d.i)(st))
					}
					e(ut({
						commentsPageKey: s,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, ut = t => async (e, n, o) => {
					let {
						apiContext: r
					} = o;
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: a,
						draftKey: l,
						formData: u,
						editorMode: m
					} = t;
					e(Object(d.g)(st));
					const f = n(),
						p = f.features.comments.submit.pending[l];
					if (!f.user.account || p) return;
					e(et({
						draftKey: l,
						draft: u
					}));
					const O = f.user.account.displayText,
						y = u.commentMode,
						C = await v(r(), s, u, O, y);
					if (C.ok) e(ot({
						...C.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: l,
						depth: a + 1
					}));
					else {
						if (C.error && C.error.type === i.Lb) {
							const t = Object(G.b)(f, {
								commentId: s
							});
							if (!t) return;
							U.h(f, at(u), t.postId, s)
						}
						e(it({
							draftKey: l,
							error: C.error
						}))
					}
					rt(n(), c, m, C), Object(b.d)()
				}, mt = Object(r.a)($.q), bt = Object(r.a)($.y), ft = Object(r.a)($.p), pt = Object(r.a)($.l), Ot = (Object(r.a)($.g), Object(r.a)($.m)), yt = (Object(r.a)($.t), (t, e, n) => async (i, r, s) => {
					let {
						apiContext: c
					} = s;
					const a = t === R.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(J.G)(e)) i(Ot({
						editorMode: t,
						draftKey: n,
						content: a ? J.i : ""
					})), i(Object(u.c)(t));
					else {
						i(Object(u.b)(n));
						const r = await Object(P.a)(c(), t, a ? e : JSON.stringify(e));
						if (r.ok) {
							const e = r.body.output;
							i(Object(u.a)(n)), i(Ot({
								editorMode: t,
								draftKey: n,
								content: e
							})), i(Object(u.c)(t))
						} else i(Object(u.a)(n)), i(Object(f.f)({
							duration: f.a,
							kind: H.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Ct = t => {
					let {
						commentsPageKey: e,
						parentCommentId: n,
						singleOpen: o
					} = t;
					return async (t, i) => {
						const r = i(),
							l = Object(s.a)(W.c.replyToComment, n);
						if (!Object(z.R)(i())) return t(Object(a.j)()), void t(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(q.m)(i(), {
								commentId: n
							})
						}));
						const u = r.features.comments.replyFormOpen[e],
							m = u && u[n];
						if ((m || u && o) && (Object.keys(u).forEach(n => u[n] && t(ft({
								parentCommentId: n,
								commentsPageKey: e
							}))), m)) return;
						let b = "",
							f = null;
						const p = r.user.prefs.commentMode,
							O = Object(K.d)();
						if (O) {
							const t = O.filter(t => !!t && 10 !== t.charCodeAt(0));
							if (p === R.i.MARKDOWN) b = t.map(t => `> ${t}\n`).join("");
							else {
								const e = t.map(t => B.s(t, null)).map(t => B.l([t])),
									n = B.s("", null),
									o = B.l([n]);
								f = {
									document: [B.c(e), o]
								}
							}
						}
						const y = r.features.comments.drafts[l];
						let C;
						if (C = O ? {
								commentMode: p,
								draftType: W.c.replyToComment,
								rtJson: f,
								text: `${b}\n`
							} : y || {
								commentMode: p,
								draftType: W.c.replyToComment,
								rtJson: f,
								text: ""
							}, Object(z.T)(r)) {
							const o = mt({
								parentCommentId: n,
								commentsPageKey: e,
								draftKey: l,
								formData: C
							});
							t(Object(c.f)(o))
						} else t(mt({
							parentCommentId: n,
							commentsPageKey: e,
							draftKey: l,
							formData: C
						}))
					}
				}, xt = t => async e => {
					e(Object(X.p)(t)), e(ht(t))
				}, It = t => {
					let {
						parentCommentId: e,
						commentsPageKey: n
					} = t;
					return async t => {
						t(ft({
							parentCommentId: e,
							commentsPageKey: n
						})), t(Ct({
							parentCommentId: e,
							commentsPageKey: n
						})), t(Object(X.p)({
							commentId: e,
							commentsPageKey: n
						}))
					}
				}, _t = (t, e) => n => n(pt({
					draftKey: t,
					formData: e
				})), jt = Object(r.a)($.s), ht = t => {
					let {
						commentId: e,
						commentMode: n,
						commentsPageKey: o,
						draftKey: i,
						text: r
					} = t;
					return async (t, s) => {
						const c = s();
						c.user.account && (U.c(c), t(jt({
							commentId: e,
							commentsPageKey: o,
							draftKey: i,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: W.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Tt = Object(r.a)($.D), gt = Object(r.a)($.C), Et = Object(r.a)($.E), Rt = Object(r.a)($.h), Nt = t => {
					let {
						id: e,
						commentsPageKey: n,
						depth: o,
						draftKey: r,
						formData: s
					} = t;
					return async (t, o, c) => {
						let {
							apiContext: a
						} = c;
						const d = o();
						if (!d.user.account) return;
						t(Tt({
							draftKey: r
						})), U.d(d);
						const l = d.user.account.displayText || "",
							u = s.commentMode,
							m = await (async (t, e, n, o, r, s) => {
								const c = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: e
								};
								if (s === R.i.MARKDOWN) c.text = o.text;
								else {
									c.text = null;
									let t = null;
									o.rteState && (t = p.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
										document: t
									})
								}
								return Object(x.a)(Object(_.a)(t, [j.a]), {
									endpoint: Object(h.a)(Object(S.a)(Object(N.a)(`${t.apiUrl}/api/editusertext`))),
									method: i.kb.POST,
									data: c
								}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
									...t,
									ok: !1,
									error: Object(E.a)(t)
								} : {
									...t,
									body: {
										comment: Object(g.a)(t.body.json.data.things[0].data, r)
									}
								} : {
									...t,
									body: {
										comment: Object(g.a)(t.body, r)
									}
								} : {
									...t,
									error: t.error || Object(T.a)()
								})
							})(a(), e, 0, s, l, u);
						if (m.ok) {
							const o = m.body;
							t(Et({
								commentId: e,
								commentsPageKey: n,
								draftKey: r
							})), t(Object(X.i)({
								[e]: {
									...o.comment
								}
							}))
						} else t(gt({
							draftKey: r,
							error: m.error
						}))
					}
				}, St = Object(r.a)($.A), kt = Object(r.a)($.z), vt = Object(r.a)($.B), wt = (t, e) => async (n, o, r) => {
					let {
						apiContext: s
					} = r;
					const c = o();
					n(St({
						id: t
					})), U.a(t, c);
					const a = await ((t, e) => Object(x.a)(Object(_.a)(t, [j.a]), {
						endpoint: Object(h.a)(`${t.apiUrl}/api/del`),
						method: i.kb.POST,
						data: {
							id: e
						}
					}).then(t => t.ok ? t.body.json && t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(E.a)(t)
					} : {
						...t,
						body: {}
					} : {
						...t,
						error: t.error || Object(T.a)()
					}))(s(), t);
					a.ok ? n(vt({
						id: t,
						postId: e
					})) : n(kt({
						id: t,
						error: a.error
					}))
				}, At = t => async (e, n, o) => {
					let {
						apiContext: i
					} = o;
					const r = !n().features.comments.models[t].sendReplies;
					e(Object(X.i)({
						[t]: {
							sendReplies: r
						}
					})), (await Object(A.q)(i(), t, r)).ok || e(Object(X.i)({
						[t]: {
							sendReplies: !r
						}
					}))
				}, Pt = (t, e) => async (n, i, r) => {
					let {
						gqlContext: s
					} = r;
					var c, a, d, l, u, m;
					n(Object(X.c)());
					const b = t => Object(f.f)(Object(f.e)(t, H.b.Error));
					if (((null === (a = null === (c = i().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === y.a) n(b(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = e === V.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(c)), (await ((t, e) => Object(I.a)(t, {
								...w,
								variables: {
									input: e
								}
							}))(s(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(F.wb)(null !== (u = null === (l = null === (d = i().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = i().user.account) || void 0 === m ? void 0 : m.id);
							const t = r ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: H.b.SuccessCommunityGreen,
								text: t
							}))
						} else n(Object(X.n)(c)), n(b(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return b
			})), n.d(e, "a", (function() {
				return f
			})), n.d(e, "d", (function() {
				return O
			})), n.d(e, "c", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(i.a)(m.G),
				f = Object(i.a)(m.p),
				p = Object(i.a)(m.Q),
				O = (t, e, n) => async (i, c, O) => {
					let {
						apiContext: C
					} = O;
					a.m(c(), e);
					const x = e === d.i.MARKDOWN,
						I = e === d.i.RICH_TEXT,
						_ = m.k;
					if (x && Object(l.G)(n)) return i(p({
						editorKey: t,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void i(y(e));
					if (I && !n) return i(p({
						editorKey: t,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void i(y(e));
					i(b(_));
					const j = await Object(s.a)(C(), e, x ? JSON.stringify(n) : n);
					j.ok ? (i(f(_)), i(p({
						editorKey: t,
						editorMode: e,
						content: j.body.output
					})), i(y(e))) : (i(f(_)), i(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, y = t => async (e, n) => {
					const i = Object(c.l)();
					if (i >= 3) return;
					const s = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (t === s) return;
					const a = t === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					e(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(c.sb)(i + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const s = Object(o.a)(r.r),
				c = Object(o.a)(r.F),
				a = t => async (e, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = await Object(i.a)(r(), t);
					a && a.ok ? e(s({
						streamId: t,
						level: a.body.data.auto_mute_status.level
					})) : e(c(t))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			}));
			var o, i = n("./node_modules/react/index.js"),
				r = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/chat/toggle.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = t => {
				let {
					onStartChat: e,
					text: n,
					className: i,
					sendEvent: s,
					contextId: c,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: f,
					onClick: p,
					onAddUserToQuickReplyList: O,
					children: y,
					style: C
				} = t;
				return r.a.createElement(d.t, {
					onClick: t => {
						if (p && p(t), e(), f === o.awardNotification) return O();
						s(Object(l.b)(c))
					},
					className: i,
					text: n,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: C
				}, y)
			};
			u.displayName = "ChatButton";
			const m = Object(s.b)(null, (t, e) => {
				let {
					contextId: n,
					userId: o
				} = e;
				return {
					onStartChat: () => {
						t(Object(c.b)(o, n))
					},
					onAddUserToQuickReplyList: () => {
						t(Object(c.a)(o))
					}
				}
			});
			e.b = m(Object(a.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/graphql/helpers.ts"),
				p = n("./src/reddit/helpers/trackers/inbox.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/NotificationInbox/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				I = n("./src/reddit/components/NotificationUnit/index.m.less"),
				_ = n.n(I);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = {
				kind: C.b.Error,
				text: j._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			e.default = t => {
				var e, n, o, C, I, T, g, E, R, N;
				const S = Object(r.d)(),
					k = Object(r.e)(x.d),
					{
						context: v,
						deeplinkUrl: w,
						isFullWidth: A,
						isUnread: P,
						isInAppNotification: D,
						isNightMode: L,
						notificationId: M,
						onEvent: K,
						isInboxCTAsV2All1Enabled: F,
						isInboxCTAsV2All2Enabled: U,
						isInboxCTAsV2ReplyPcEnabled: V,
						isInboxCTAsV2SeePostEnabled: W,
						isInboxCTAsV2ReplyEnabled: J
					} = t,
					B = null == v ? void 0 : v.messageType,
					H = B === y.a.CommentReply,
					q = B === y.a.SubredditRecommendation,
					G = B === y.a.LifecyclePostSuggestions,
					Y = null === (e = null == v ? void 0 : v.post) || void 0 === e ? void 0 : e.permalink;
				let Q = null === (n = null == v ? void 0 : v.comment) || void 0 === n ? void 0 : n.id,
					z = (null === (o = null == v ? void 0 : v.post) || void 0 === o ? void 0 : o.id) || (null === (I = null === (C = null == v ? void 0 : v.comment) || void 0 === C ? void 0 : C.postInfo) || void 0 === I ? void 0 : I.id);
				const X = null === (T = null == v ? void 0 : v.subreddit) || void 0 === T ? void 0 : T.id,
					$ = null === (E = null === (g = null == v ? void 0 : v.awarding) || void 0 === g ? void 0 : g.award) || void 0 === E ? void 0 : E.id,
					Z = null === (N = null === (R = null == v ? void 0 : v.awarding) || void 0 === R ? void 0 : R.awarder) || void 0 === N ? void 0 : N.id;
				if (B === y.a.CommentFollow || B === y.a.PostFollow) {
					const t = (t => {
						const e = {},
							{
								pathname: n
							} = new URL(t);
						if (!n) return e;
						const o = n.match(m);
						if (!o) return e;
						const [i, r, s, c] = o.slice(1);
						return r && "r" === i && (e.subredditName = r), s && (e.postId = `${u.b}${s}`), c && (e.commentId = `${u.a}${c}`), e
					})(w);
					z = t.postId, Q = t.commentId
				} else B !== y.a.PostReply && B !== y.a.LifecyclePostSuggestions || (Q = M);
				const tt = t => {
					if (z && Q) {
						const t = Object(c.a)(z, Q, Object(f.c)(w)),
							e = {
								parentCommentId: Q,
								commentsPageKey: t
							};
						S(Object(a.g)(e)), K({
							position: p.d.SECOND
						})
					} else t.preventDefault(), S(Object(d.f)(h))
				};
				return (() => {
					switch (B) {
						case y.a.HFNSubredditInterestingPost:
						case y.a.LifecyclePostSuggestions:
						case y.a.SubredditRecommendation: {
							const t = q,
								e = G;
							if (!F && !U && !W && !J && !t && !e && (!k || !D) || V) return null;
							const n = t => {
									Y || (J || F) && z ? ((J || F) && z && S(Object(a.h)({
										postId: z
									})), K({
										position: p.d.SECOND,
										postId: z,
										subredditId: X
									})) : (t.preventDefault(), S(Object(d.f)(h)))
								},
								o = J || F ? j._("Join the Conversation", null, {
									hk: "2hX2xb"
								}) : j._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return i.a.createElement(b.t, {
								kind: J ? b.b.InternalLink : void 0,
								to: w,
								onClick: n,
								isFullWidth: A,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(_.a.notificationButton, {
									[_.a.isUnread]: P && !D,
									[_.a.isNightMode]: L,
									[_.a.inAppNotification]: D,
									[_.a.isFullWidth]: A && !D
								})
							}, !D && i.a.createElement(O.a, {
								name: "text_post",
								className: _.a.postIcon
							}), j._("{check out button}", [j._param("check out button", o)], {
								hk: "4DDMme"
							}))
						}
						case y.a.PostReply:
						case y.a.CommentReply:
						case y.a.PostFollow:
						case y.a.CommentFollow: {
							const t = H;
							return !(F || U || V || H || t || k && D) || J && !t ? null : i.a.createElement(b.t, {
								onClick: tt,
								kind: b.b.InternalLink,
								to: w,
								isFullWidth: A,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(_.a.notificationButton, {
									[_.a.isUnread]: P && !D,
									[_.a.isNightMode]: L,
									[_.a.inAppNotification]: D,
									[_.a.isFullWidth]: A && !D
								})
							}, !D && i.a.createElement(O.a, {
								name: "reply",
								className: _.a.replyIcon
							}), j._("Reply Back", null, {
								hk: "3JWTvx"
							}))
						}
						case y.a.AwardReceived: {
							if (!Z) return null;
							const t = t => {
								t.preventDefault(), Z ? K({
									position: p.d.SECOND,
									awardId: $
								}) : S(Object(d.f)(h))
							};
							return i.a.createElement(l.b, {
								userId: Z,
								contextId: Z,
								onClick: t,
								isFullWidth: A,
								priority: b.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(s.a)(_.a.notificationButton, {
									[_.a.isUnread]: P && !D,
									[_.a.isNightMode]: L,
									[_.a.inAppNotification]: D,
									[_.a.isFullWidth]: A && !D
								})
							}, !D && i.a.createElement(O.a, {
								name: "chat_new",
								className: _.a.replyIcon
							}), j._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case y.a.UpvotePost:
						case y.a.UpvoteComment:
						case y.a.UsernameMention:
						case y.a.PrivateMessage:
						case y.a.UserNewFollower:
						case y.a.ChatMessage:
						case y.a.CakeDay:
						case y.a.ChatRequest:
						case y.a.ChatAcceptInvite:
						case y.a.HFNSubredditInterestingPost:
						case y.a.OneOff:
						case y.a.ModeratedSrViralCommentPost:
						case y.a.TalkLive: {
							if (!D) return null;
							const t = t => {
								switch (t) {
									case y.a.HFNSubredditInterestingPost:
									case y.a.OneOff:
									case y.a.UpvotePost:
									case y.a.ModeratedSrViralCommentPost:
										return j._("See Post", null, {
											hk: "mGXS5"
										});
									case y.a.UpvoteComment:
										return j._("See Comment", null, {
											hk: "3FUtJF"
										});
									case y.a.ChatRequest:
									case y.a.ChatAcceptInvite:
										return j._("Start Chat", null, {
											hk: "iQZfe"
										});
									case y.a.ChatMessage:
										return j._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case y.a.CakeDay:
									case y.a.UserNewFollower:
										return j._("See Profile", null, {
											hk: "2Wj94t"
										});
									case y.a.TalkLive:
										return j._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return j._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return i.a.createElement(b.t, {
								onClick: () => K({
									position: p.d.SECOND
								}),
								isFullWidth: A,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(_.a.notificationButton, {
									[_.a.isNightMode]: L,
									[_.a.inAppNotification]: !0
								})
							}, t(B))
						}
						default:
							return k && D ? i.a.createElement(b.t, {
								onClick: () => K({
									position: p.d.SECOND
								}),
								isFullWidth: A,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(_.a.notificationButton, {
									[_.a.isNightMode]: L,
									[_.a.inAppNotification]: !0
								})
							}, j._("See more", null, {
								hk: "3QLc3"
							})) : null
					}
				})()
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(t, e, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			e.a = (t, e, n) => {
				const d = {
					output_mode: "markdown" === e ? e : "rtjson"
				};
				return e === a.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(i.a)(Object(r.a)(t, [s.a]), {
					endpoint: Object(c.a)(`${t.apiUrl}/api/convert_rte_body_format`),
					method: o.kb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "d", (function() {
				return d
			})), n.d(e, "h", (function() {
				return l
			})), n.d(e, "c", (function() {
				return u
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "e", (function() {
				return b
			})), n.d(e, "a", (function() {
				return f
			}));
			var o = n("./node_modules/lodash/map.js"),
				i = n.n(o),
				r = n("./src/lib/FocusTrap/index.ts");
			const s = t => "INPUT" === t.tagName.toUpperCase() || "TEXTAREA" === t.tagName.toUpperCase() || "DIV" === t.tagName.toUpperCase() && t.isContentEditable,
				c = t => {
					let e = t;
					do {
						if (s(e)) return !0
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
					return i()(e, t => t.textContent || "")
				})() : null,
				l = (t, e) => {
					const n = document.createRange();
					return n.selectNode(e), t.compareBoundaryPoints(Range.END_TO_START, n) < 0 && t.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = t => {
					const e = window.getSelection();
					if (1 !== e.rangeCount) return;
					const n = e.getRangeAt(0);
					if (!l(n, t)) return;
					const {
						startContainer: o,
						startOffset: i,
						endContainer: r,
						endOffset: s
					} = n, c = document.createRange();
					c.selectNode(t);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, i), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(r, s), a = !1), a) return [t];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				m = (t, e, n) => {
					let o = t;
					for (; o && (!n || !n(o));) {
						if (o && e(o)) return o;
						o = o.parentElement
					}
				},
				b = t => t && t.parentElement && m(t.parentElement, t => "static" !== window.getComputedStyle(t).getPropertyValue("position")),
				f = t => {
					t.querySelectorAll(r.a).forEach(t => {
						t.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts");
			e.a = () => ({
				type: i.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			}));
			var o = n("./src/lib/constants/index.ts");
			const i = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case o.J.NO_STRIPE_SUBSCRIPTION:
							case o.J.USER_DOESNT_EXIST:
							case o.J.USER_REQUIRED_ERROR:
							case o.J.VALIDATION_ERROR:
								return t;
							case o.J.NO_USER:
							case o.J.NO_TEXT:
							case o.J.NO_URL:
								return o.J.VALIDATION_ERROR;
							case o.J.CREDIT_CARD_FAILURE:
							case o.J.CREDIT_CARD_FAILURE_GENERIC:
								return o.J.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return o.J.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.J.VALIDATION_ERROR
				},
				r = t => {
					const e = t.body;
					return {
						type: i(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				s = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: r(t)
					} : t
				};
			e.a = r
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "h", (function() {
				return m
			})), n.d(e, "b", (function() {
				return b
			})), n.d(e, "e", (function() {
				return f
			})), n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return O
			})), n.d(e, "d", (function() {
				return y
			})), n.d(e, "g", (function() {
				return C
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(a.n)(t),
						screen: Object(a.Y)(t),
						subreddit: Object(a.gb)(t),
						post: e ? Object(a.H)(t, e) : null,
						profile: Object(a.Q)(t),
						correlationId: Object(i.c)(i.a.CommentComposer)
					}
				},
				u = async (t, e, o, i) => {
					const r = {
							commentId: i,
							commentsPageKey: o
						},
						c = i && Object(s.j)(t, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(t),
						comment: i ? Object(a.h)(t, i) : null,
						listing: Object(a.y)(t, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: u(t)
					})
				}, m = (t, e, n, o) => {
					const i = l(t);
					return Object(d.a)({
						...i,
						actionInfo: {
							...i.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: e,
							parentId: o,
							postId: n
						}
					})
				}, b = t => Object(d.a)({
					noun: "cancel",
					...l(t)
				}), f = (t, e) => {
					e === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(t)
					})
				}, p = (t, e) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.n)(e),
					screen: Object(a.Y)(e),
					subreddit: Object(a.gb)(e),
					post: Object(a.H)(e, t)
				}), O = t => Object(d.a)({
					noun: "edit",
					...l(t)
				}), y = t => Object(d.a)({
					noun: "save_edit",
					...l(t)
				}), C = (t, e) => n => {
					const o = "image_upload" === t || "video_upload" === t;
					return {
						...l(n),
						noun: o ? t : "text_option",
						commentComposer: {
							textType: t,
							finalStatus: e ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return o
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "c", (function() {
				return r
			})), n.d(e, "d", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "w", (function() {
				return m
			})), n.d(e, "t", (function() {
				return b
			})), n.d(e, "r", (function() {
				return f
			})), n.d(e, "s", (function() {
				return p
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "k", (function() {
				return y
			})), n.d(e, "h", (function() {
				return C
			})), n.d(e, "u", (function() {
				return x
			})), n.d(e, "v", (function() {
				return I
			})), n.d(e, "y", (function() {
				return _
			})), n.d(e, "l", (function() {
				return j
			})), n.d(e, "x", (function() {
				return h
			})), n.d(e, "b", (function() {
				return T
			})), n.d(e, "m", (function() {
				return g
			})), n.d(e, "z", (function() {
				return E
			})), n.d(e, "q", (function() {
				return R
			})), n.d(e, "o", (function() {
				return N
			})), n.d(e, "n", (function() {
				return S
			})), n.d(e, "j", (function() {
				return k
			})), n.d(e, "i", (function() {
				return v
			})), n.d(e, "g", (function() {
				return w
			}));
			var o, i, r, s, c, a, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(t) {
				t.Activity = "activity", t.Messages = "messages"
			}(o || (o = {})),
			function(t) {
				t.HideNotifications = "hide_notification", t.HideSubreddit = "hide_subreddit", t.BlockAwarder = "block_awarder", t.DecreaseSubredditUpdates = "disable_frequent"
			}(i || (i = {})),
			function(t) {
				t.MiniInbox = "mini_inbox", t.Inbox = "inbox"
			}(r || (r = {})),
			function(t) {
				t.Inbox = "inbox", t.Nav = "nav", t.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(t) {
				t[t.FIRST = 1] = "FIRST", t[t.SECOND = 2] = "SECOND"
			}(c || (c = {})),
			function(t) {
				t.Confirm = "confirm"
			}(a || (a = {}));
			const m = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						}
					})
				},
				b = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						}
					})
				},
				f = () => t => ({
					...l.n(t),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				p = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i,
						awardId: r
					} = t;
					return t => {
						Object(u.a)({
							...l.n(t),
							action: "receive",
							noun: "inbox_notification",
							source: s.Inbox,
							inbox: {
								id: e,
								isClicked: n,
								isViewed: o
							},
							notification: {
								type: i
							},
							goldPurchase: {
								awardId: r
							}
						})
					}
				},
				O = t => {
					let {
						dnPromptAction: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: e
						}
					})
				},
				y = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i,
						awardId: r,
						position: s,
						postId: c,
						subredditId: a
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: r
						},
						actionInfo: {
							position: s
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				C = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i,
						awardId: r,
						position: s,
						postId: c,
						subredditId: a
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: r
						},
						actionInfo: {
							position: s
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				x = t => {
					let {
						badgeCount: e,
						tab: n
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: e,
							tab: n
						}
					})
				},
				I = t => {
					let {
						badgeCount: e,
						tab: n
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: e,
							tab: o.Activity
						}
					})
				},
				_ = t => {
					let {
						badgeCount: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox",
						source: s.Nav,
						inbox: {
							badgeCount: e
						}
					})
				},
				j = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i,
						awardId: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: r
						}
					})
				},
				h = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: i
						}
					})
				};
			var T;
			! function(t) {
				t.Cats = "cats", t.Memes = "memes", t.Karma = "karma_free_subs", t.PN_perms = "pn_perms", t.Email_perms = "email_perms"
			}(T || (T = {}));
			const g = t => {
					let {
						actionInfoType: e,
						id: n,
						isClicked: o,
						isViewed: i,
						type: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: o,
							isViewed: i
						},
						notification: {
							type: r
						},
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				E = t => {
					let {
						actionInfoType: e,
						id: n,
						isClicked: o,
						isViewed: i,
						type: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: o,
							isViewed: i
						},
						notification: {
							type: r
						},
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				R = t => {
					let {
						actionInfoType: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: s.Inbox,
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				N = t => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: t
					}
				}),
				S = () => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: r.MiniInbox
					}
				}),
				k = () => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				v = t => {
					let {
						isMiniInbox: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: s.Inbox,
						actionInfo: e ? {
							...l.d(t),
							pageType: r.MiniInbox
						} : {}
					})
				},
				w = (t, e) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: t,
						type: e
					}
				})
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return r
			})), n.d(e, "d", (function() {
				return a
			}));
			var o, i, r, s, c = n("./src/reddit/models/FeedElement/index.ts");

			function a(t) {
				return t.__typename === c.a.InboxNotificationCollection
			}! function(t) {
				t.AwardReceived = "AWARD_RECEIVED", t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.ChatRequest = "CHAT_REQUEST", t.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", t.CommentFollow = "COMMENT_FOLLOW", t.CommentReply = "COMMENT_REPLY", t.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", t.OneOff = "ONE_OFF", t.PostFollow = "POST_FOLLOW", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.RedditLore = "REDDIT_LORE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.TalkLive = "TALK_LIVE", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
			}(o || (o = {})),
			function(t) {
				t.Award = "AWARD", t.Bell = "BELL", t.Chat = "CHAT", t.Comment = "COMMENT", t.Heart = "HEART", t.Live = "LIVE", t.Lore = "LORE", t.NotifyAll = "NOTIFY_ALL", t.Redditor = "REDDITOR", t.Reply = "REPLY", t.SortLive = "SORT_LIVE", t.SortRising = "SORT_RISING", t.SortTop = "SORT_TOP", t.Trophy = "TROPHY", t.Upvote = "UPVOTE"
			}(i || (i = {})),
			function(t) {
				t.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", t.ContentTakedown = " CONTENT_TAKEDOWN", t.Author = "AUTHOR", t.Moderator = "MODERATOR", t.CommunityOps = "COMMUNITY_OPS", t.AntiEvilOps = "ANTI_EVIL_OPS", t.Reddit = "REDDIT", t.Deleted = "DELETED", t.AutomodFiltered = "AUTOMOD_FILTERED"
			}(r || (r = {})),
			function(t) {
				t.InboxNotification = "InboxNotification", t.InboxNotificationContext = "InboxNotificationContext", t.NotificationIcon = "NotificationIcon", t.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", t.BasicInboxNotificationContext = "BasicInboxNotificationContext", t.CommentInboxNotificationContext = "CommentInboxNotificationContext", t.PostInboxNotificationContext = "PostInboxNotificationContext", t.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", t.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(s || (s = {}))
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(t) {
			t.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(t) {
			t.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.4e1c1fbb4fa694e868ec.js.map