// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.f097167ec6b336c326bd.js
// Retrieved at 9/7/2021, 10:40:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(o.c)(t)
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return Z
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return se
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "n", (function() {
				return ie
			})), n.d(t, "s", (function() {
				return ae
			})), n.d(t, "l", (function() {
				return me
			})), n.d(t, "a", (function() {
				return le
			})), n.d(t, "b", (function() {
				return pe
			})), n.d(t, "p", (function() {
				return Oe
			})), n.d(t, "f", (function() {
				return je
			})), n.d(t, "g", (function() {
				return ye
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return Ie
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "i", (function() {
				return Te
			})), n.d(t, "h", (function() {
				return Re
			})), n.d(t, "k", (function() {
				return Ee
			})), n.d(t, "r", (function() {
				return we
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				d = n("./src/reddit/actions/changeUsername.ts"),
				i = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				T = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const R = (e, t, n, o) => {
					let r, s;
					if (o === S.h.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				E = async (e, t, n, o, s) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === S.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(I.a)(e, [g.a]), {
						method: r.ib.POST,
						endpoint: Object(C.a)(Object(_.a)(Object(P.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(T.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				};
			var w = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var N = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				K = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				M = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				W = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				B = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/commentSelector.ts"),
				G = n("./src/reddit/selectors/platform.ts"),
				$ = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/actions/comment/index.ts"),
				Q = n("./src/reddit/actions/comment/constants.ts");
			const X = Object(s.a)(Q.k),
				Z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[t])
						if (Object(Y.M)(r) && e) {
							const o = X({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(o))
						} else n(X({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(s.a)(Q.H), te = Object(s.a)(Q.J), ne = Object(s.a)(Q.I), oe = Object(s.a)(Q.G), re = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await U.f(e, n, t, s)
				}, se = "Toxicity_Warning__Modal", ce = (e, t, n, o, r, s) => async (c, d, {
					gqlContext: i
				}) => {
					const m = d(),
						u = Object(G.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await R(i(), l, o, r))) return void c(Object(a.i)(se))
					}
					c(ie(e, t, n, o, r, s))
				}, de = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, s, c, d, i) => async (u, p, {
					apiContext: j
				}) => {
					u(Object(a.g)(se));
					const y = p(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(ee({
						draftKey: n,
						draft: s
					}));
					const x = y.user.account.displayText,
						I = s.commentMode;
					let g;
					if (i ? (g = await Object(K.i)(j(), e, s, x), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await E(j(), e, s, x, I), g.ok) {
						let o;
						o = g.body, u(te({
							...o,
							headCommentId: Object(q.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object($.H)(p(), {
							postId: e
						});
						u(Object(m.z)(r, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === r.Hb && U.g(y, de(s), e);
						const t = g.error && g.error.fields && g.error.fields[0] ? g.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: g.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: B.b.Error,
							text: t
						}))
					}
					re(p(), t, c, g), d || Object(b.d)()
				}, ae = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: d,
						formData: i,
						editorMode: m
					} = e, u = n(), l = Object(G.e)(u);
					let b = "";
					if (l && (b = l.name), D.d.enableToxicityWarning(u)) {
						if (!(await R(o(), b, i, m))) return void t(Object(a.i)(se))
					}
					t(me({
						commentsPageKey: s,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: i,
						editorMode: m
					}))
				}, me = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: d,
						draftKey: i,
						formData: m,
						editorMode: u
					} = e;
					t(Object(a.g)(se));
					const l = n(),
						f = l.features.comments.submit.pending[i];
					if (!l.user.account || f) return;
					t(ee({
						draftKey: i,
						draft: m
					}));
					const p = l.user.account.displayText,
						O = m.commentMode,
						j = await E(o(), s, m, p, O);
					if (j.ok) t(ne({
						...j.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: i,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === r.Hb) {
							const e = Object(V.a)(l, {
								commentId: s
							});
							if (!e) return;
							U.g(l, de(m), e.postId, s)
						}
						t(oe({
							draftKey: i,
							error: j.error
						}))
					}
					re(n(), c, u, j), Object(b.d)()
				}, ue = Object(s.a)(Q.q), le = Object(s.a)(Q.p), be = Object(s.a)(Q.l), fe = (Object(s.a)(Q.g), Object(s.a)(Q.m)), pe = (Object(s.a)(Q.t), (e, t, n) => async (r, s, {
					apiContext: c
				}) => {
					const d = e === S.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.G)(t)) r(fe({
						editorMode: e,
						draftKey: n,
						content: d ? J.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(A.a)(c(), e, d ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(fe({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: B.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Oe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						m = Object(c.a)(H.c.replyToComment, t);
					if (!Object(Y.K)(r())) return o(Object(i.k)()), void o(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(q.m)(r(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(le({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						f = null;
					const p = s.user.prefs.commentMode,
						O = Object(L.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === S.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
								n = W.s("", null),
								o = W.l([n]);
							f = {
								document: [W.c(t), o]
							}
						}
					}
					const j = s.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: p,
							draftType: H.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : j || {
							commentMode: p,
							draftType: H.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(Y.M)(s)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						o(Object(d.f)(n))
					} else o(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, je = e => async t => {
					t(Object(z.p)(e)), t(Ie(e))
				}, ye = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(le({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Oe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(z.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, he = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), xe = Object(s.a)(Q.s), Ie = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, c) => {
					const d = c();
					d.user.account && (U.c(d), s(xe({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: H.c.edit,
							hasFocus: !0
						}
					})))
				}, ge = Object(s.a)(Q.C), Ce = Object(s.a)(Q.B), ve = Object(s.a)(Q.D), ke = Object(s.a)(Q.h), Te = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: s
				}) => async (n, c, {
					apiContext: d
				}) => {
					const i = c();
					if (!i.user.account) return;
					n(ge({
						draftKey: o
					})), U.d(i);
					const a = i.user.account.displayText || "",
						m = s.commentMode,
						u = await (async (e, t, n, o, s, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === S.h.MARKDOWN) d.text = o.text;
							else {
								d.text = null;
								let e = null;
								o.rteState && (e = p.a.toRichTextJSON(o.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(I.a)(e, [g.a]), {
								endpoint: Object(C.a)(Object(P.a)(Object(_.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.ib.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(T.a)(e)
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body.json.data.things[0].data, s)
								}
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body, s)
								}
							} : {
								...e,
								error: e.error || Object(v.a)()
							})
						})(d(), e, 0, s, a, m);
					if (u.ok) {
						const r = u.body;
						n(ve({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(z.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(Ce({
						draftKey: o,
						error: u.error
					}))
				}, Se = Object(s.a)(Q.z), _e = Object(s.a)(Q.y), Pe = Object(s.a)(Q.A), Re = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const c = o();
					n(Se({
						id: e
					})), U.a(e, c);
					const d = await ((e, t) => Object(h.a)(Object(I.a)(e, [g.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
						method: r.ib.POST,
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
					d.ok ? n(Pe({
						id: e,
						postId: t
					})) : n(_e({
						id: e,
						error: d.error
					}))
				}, Ee = e => async (t, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(z.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(N.q)(o(), e, r)).ok || t(Object(z.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, we = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var c, d, i, a, m, u;
					n(Object(z.c)());
					const l = e => Object(f.f)(Object(f.e)(e, B.b.Error));
					if (((null === (d = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === F.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(z.n)(d)), (await ((e, t) => Object(x.a)(e, {
								...w,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(M.rb)(null !== (m = null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(f.f)({
								kind: B.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(z.n)(d)), n(l(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return R
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "g", (function() {
				return J
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return G
			})), n.d(t, "d", (function() {
				return $
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return Q
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const a = Object(i.a)(() => n.e("AchievementsActions").then(n.bind(null, "./src/reddit/actions/economics/powerups/achievements/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var m = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/presence.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				O = n("./src/reddit/endpoints/comment/index.tsx"),
				j = n("./src/reddit/helpers/commentList/index.ts"),
				y = n("./src/reddit/helpers/trackers/comment.ts"),
				h = n("./src/reddit/models/Comment/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				k = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				T = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/comment/constants.ts");
			const P = {},
				R = Object(c.a)(_.o),
				E = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(S.K)(n())) return t(Object(m.k)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(C.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const c = s.isSaved ? O.k : O.g;
					if (t(R({
							[e]: {
								isSaved: !s.isSaved
							}
						})), (await c(o(), e)).ok) {
						const n = s.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(f.f)({
							text: n,
							kind: I.b.Undo,
							buttonText: o,
							buttonAction: E(e)
						}))
					} else t(R({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, w = e => `viewing-comment-${e}`, N = o.a.telemetry.commentConsumedThreshold, A = e => async (t, n) => {
					const r = n();
					if (!Object(v.a)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					y.g({
						state: r,
						commentId: e
					}), s.c.start(w(e));
					const c = setTimeout(() => y.a({
						state: r,
						commentId: e
					}), N);
					P[e] = c
				}, K = (e, t) => async (n, o) => {
					const r = o(),
						c = w(e);
					if (Object(v.a)(r, {
							commentId: e
						}) && s.c.has(c)) {
						const n = s.c.end(c);
						!t && n < N && (clearTimeout(P[e]), delete P[e])
					}
				}, D = Object(c.a)(_.x), L = Object(c.a)(_.w), M = Object(c.a)(_.v), U = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						c = s.moreComments.models[t],
						i = s.platform.currentPage,
						m = i && i.routeMatch,
						u = m && m.match,
						{
							partialPostId: b
						} = u ? u.params : null;
					if (!b) return;
					const f = Object(x.s)(b);
					n(D({
						moreCommentsId: c.id
					}));
					const p = await Object(O.e)(r(), f, {
						token: c.token
					}, Object(k.a)(s));
					if (p.ok) {
						const t = p.body,
							o = Object(j.a)(t, f, s);
						n(L({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[f];
						let i;
						r && "subreddit" === r.belongsTo.type && t.comments && (i = r.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})));
						const m = p.body.comments,
							u = p.body.posts;
						await n(Object(l.b)(u, m, i)), await n(a(i, m))
					} else n(M({
						moreCommentsItem: c,
						...p.error
					}))
				}, F = Object(p.a)(j.b, g.a.upvoted), H = Object(p.a)(j.b, g.a.downvoted), J = Object(c.a)(_.j), W = Object(c.a)(_.i), B = Object(c.a)(_.e), q = Object(c.a)(_.f), V = (Object(c.a)(_.c), Object(c.a)(_.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						c = Object(h.i)(e),
						d = Object(C.n)(s, {
							commentLink: c,
							commentsPageKey: t
						}),
						i = Object(T.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						a = d.depth;
					o(B({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || n(e, !0), Object(b.d)()
				}), G = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(q({
						commentId: e,
						commentsPageKey: t
					}))
				}, $ = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (r, s) => {
					const c = s(),
						d = Object(j.e)(t, e, n, c),
						i = Object(T.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(B({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === n && o(d, !0), Object(b.d)()
				}, Y = Object(c.a)(_.r), z = e => t => t(Y({
					draftKey: e
				})), Q = Object(c.a)(_.a), X = Object(c.a)(_.E), Z = Object(c.a)(_.b), ee = Object(c.a)(_.u)
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				i = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(l.C),
				f = Object(r.a)(l.p),
				p = Object(r.a)(l.M),
				O = (e, t, n) => async (r, d, {
					apiContext: O
				}) => {
					i.j(d(), t);
					const y = t === a.h.MARKDOWN,
						h = t === a.h.RICH_TEXT,
						x = l.k;
					if (y && Object(m.G)(n)) return r(p({
						editorKey: e,
						editorMode: a.h.MARKDOWN,
						content: ""
					})), void r(j(t));
					if (h && !n) return r(p({
						editorKey: e,
						editorMode: a.h.RICH_TEXT,
						content: m.i
					})), void r(j(t));
					r(b(x));
					const I = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					I.ok ? (r(f(x)), r(p({
						editorKey: e,
						editorMode: t,
						content: I.body.output
					})), r(j(t))) : (r(f(x)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const r = Object(d.l)();
					if (r >= 3) return;
					const c = n().user.prefs.useMarkdown ? a.h.MARKDOWN : a.h.RICH_TEXT;
					if (e === c) return;
					const i = e === a.h.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						kind: u.b.SuccessCommunity,
						text: i
					})), Object(d.ob)(r + 1)
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(o.a)(m),
				l = (e, t, n) => async (o, m, {
					apiContext: l
				}) => {
					const b = m();
					if (!Object(a.a)(b)) return;
					const f = new Set;
					e && Object.values(e).map(e => {
						e.authorId && f.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && f.add(e.authorId)
					});
					const p = await (async (e, t, n) => Object(s.a)(Object(c.a)(e, [d.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: r.ib.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							o = new Set(n),
							r = {};
						return t.forEach(e => {
							r[e] = o.has(e)
						}), {
							presentUsers: r
						}
					}))(l(), Array.from(f), n);
					o(u(p))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(o.a)(s.r),
				d = Object(o.a)(s.F),
				i = e => async (t, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), e);
					s && s.ok ? t(c({
						streamId: e,
						level: s.body.data.auto_mute_status.level
					})) : t(d(e))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/chat/toggle.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: c,
				priority: d,
				Icon: i,
				redditStyle: u,
				isFullWidth: l,
				eventSource: b,
				onClick: f,
				onAddUserToQuickReplyList: p,
				children: O
			}) => {
				return s.a.createElement(a.q, {
					onClick: t => {
						if (f && f(t), e(), b === o.awardNotification) return p();
						r(Object(m.b)(c))
					},
					className: n,
					text: t,
					priority: d,
					Icon: i,
					redditStyle: u,
					isFullWidth: l
				}, O)
			};
			u.displayName = "ChatButton";
			const l = Object(c.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(d.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(d.a)(n))
				}
			}));
			t.b = l(Object(i.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/NotificationInbox/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/components/NotificationUnit/index.m.less"),
				h = n.n(y);
			const x = {
				kind: j.b.Error,
				text: o.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: m.a
			};
			t.default = e => {
				var t, n, r, j, y, I, g, C;
				const v = Object(c.d)(),
					{
						context: k,
						deeplinkUrl: T,
						isFullWidth: S,
						isUnread: _,
						isInboxCTAsAllEnabled: P,
						isInboxCTAsReplyEnabled: R,
						isInboxCTAsSeePostEnabled: E,
						isNightMode: w,
						notificationId: N,
						onEvent: A
					} = e,
					K = null == k ? void 0 : k.messageType,
					D = null === (t = null == k ? void 0 : k.post) || void 0 === t ? void 0 : t.permalink,
					L = K === O.a.PostReply ? N : null === (n = null == k ? void 0 : k.comment) || void 0 === n ? void 0 : n.id,
					M = (null === (r = null == k ? void 0 : k.post) || void 0 === r ? void 0 : r.id) || (null === (y = null === (j = null == k ? void 0 : k.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === y ? void 0 : y.id),
					U = null === (I = null == k ? void 0 : k.awarding) || void 0 === I ? void 0 : I.award.id,
					F = null === (C = null === (g = null == k ? void 0 : k.awarding) || void 0 === g ? void 0 : g.awarder) || void 0 === C ? void 0 : C.id;
				return (() => {
					switch (K) {
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							if (!E && !P) return null;
							const e = e => {
								D ? A({
									position: f.c.SECOND
								}) : (e.preventDefault(), v(Object(m.f)(x)))
							};
							return s.a.createElement(l.q, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: _,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "text_post",
								className: h.a.postIcon
							}), o.fbt._("See Post", null, {
								hk: "mGXS5"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply: {
							if (!R && !P) return null;
							const e = e => {
								if (M && L) {
									const e = Object(i.a)(M, L, Object(b.c)(T)),
										t = {
											parentCommentId: L,
											commentsPageKey: e
										};
									v(Object(a.g)(t)), A({
										position: f.c.SECOND
									})
								} else e.preventDefault(), v(Object(m.f)(x))
							};
							return s.a.createElement(l.q, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: _,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "reply",
								className: h.a.replyIcon
							}), o.fbt._("Reply", null, {
								hk: "zBpwB"
							}))
						}
						case O.a.AwardReceived: {
							if (!F) return null;
							const e = e => {
								e.preventDefault(), F ? A({
									position: f.c.SECOND,
									awardId: U
								}) : v(Object(m.f)(x))
							};
							return s.a.createElement(u.b, {
								userId: F,
								contextId: F,
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: _,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "chat_new",
								className: h.a.replyIcon
							}), o.fbt._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						default:
							return null
					}
				})()
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return l
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "b", (function() {
				return g
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: r.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n, c) => {
					let d = Object(i.a)(Object(u.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (d = Object(a.a)(d)), Object(s.a)(e, {
						data: n,
						endpoint: d,
						method: r.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, o) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.ib.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === i.h.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(r.a)(Object(s.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.ib.POST,
					data: a
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				i = e => {
					switch (e.commentLink.type) {
						case o.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case o.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case o.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === o.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, o) => {
					let s = Object(r.n)(o, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; s && s.depth > n && s.prev && (c = s.prev, (s = Object(r.n)(o, {
							commentLink: c,
							commentsPageKey: e
						})) && !(s.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: o,
						comments: r
					} = e, {
						head: d
					} = o[t];
					if (d) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: s.D,
								expEventOverride: t
							});
							return !!(Object(s.ke)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.H.SERVER_ERROR,
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
				return c
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.H.NO_STRIPE_SUBSCRIPTION:
							case o.H.USER_DOESNT_EXIST:
							case o.H.USER_REQUIRED_ERROR:
							case o.H.VALIDATION_ERROR:
								return e;
							case o.H.NO_USER:
							case o.H.NO_TEXT:
							case o.H.NO_URL:
								return o.H.VALIDATION_ERROR;
							case o.H.CREDIT_CARD_FAILURE:
							case o.H.CREDIT_CARD_FAILURE_GENERIC:
								return o.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.H.VALIDATION_ERROR
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
				c = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			}));
			var o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: r.user(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					actionInfo: r.actionInfo(t),
					app: r.app(t),
					referrer: r.referrer(t),
					session: r.session(t)
				}),
				i = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				a = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				m = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				u = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return O
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");
			const a = e => {
					const t = Object(c.m)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.defaults)(e),
						screen: Object(d.screen)(e),
						subreddit: Object(d.subreddit)(e),
						post: t ? Object(d.post)(e, t) : null,
						profile: Object(d.profile)(e)
					}
				},
				m = async (e, t, o, r) => {
					const c = {
							commentId: r,
							commentsPageKey: o
						},
						m = r && Object(s.j)(e, c) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(i.a)({
						noun: "comment",
						...a(e),
						comment: r ? Object(d.comment)(e, r) : null,
						listing: Object(d.listing)(e, void 0, {
							depth: m
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, u = (e, t, n, o) => {
					const r = a(e);
					return Object(i.a)({
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
							parentId: o,
							postId: n
						}
					})
				}, l = e => Object(i.a)({
					noun: "cancel",
					...a(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...a(e)
					})
				}, f = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.defaults)(t),
					screen: Object(d.screen)(t),
					subreddit: Object(d.subreddit)(t),
					post: Object(d.post)(t, e)
				}), p = e => Object(i.a)({
					noun: "edit",
					...a(e)
				}), O = e => Object(i.a)({
					noun: "save_edit",
					...a(e)
				})
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var o, r, s, c;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(o || (o = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(r || (r = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(s || (s = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(c || (c = {}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const s = [];
			var c = (e = s, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/pages/constants.ts");
			const i = {};
			var a = (e = i, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.h:
					case d.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case d.a:
					case d.e: {
						const {
							key: n,
							error: o
						} = t.payload;
						return {
							...e,
							[n]: o || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var u = (e = m, t) => {
				switch (t.type) {
					case d.c:
					case d.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var b = (e = l, t) => {
					switch (t.type) {
						case d.d:
						case d.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case d.b:
						case d.a:
						case d.f:
						case d.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				f = Object(o.c)({
					error: a,
					fullyLoaded: u,
					pending: b
				}),
				p = n("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var j = (e = O, t) => {
					switch (t.type) {
						case p.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case p.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case p.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				y = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(y),
				x = n("./node_modules/lodash/values.js"),
				I = n.n(x),
				g = n("./src/reddit/actions/comment/websocket/constants.ts");
			const C = {};

			function v(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var k = (e = C, t) => {
					switch (t.type) {
						case d.f:
						case p.w:
						case d.b: {
							const {
								comments: n,
								key: o
							} = t.payload, r = e[o] ? e[o] : [], s = function(e, t) {
								return I()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), c = v([...r, ...s]);
							return {
								...e,
								[o]: [...c]
							}
						}
						case g.b:
						case g.c:
						case g.d:
						case p.J:
						case p.I: {
							const {
								comment: {
									id: n,
									created: o,
									isStickied: r,
									authorId: s
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...v([...e[c] ? e[c] : [], {
									id: n,
									created: o,
									stickied: r,
									authorId: s
								}])]
							}
						}
						default:
							return e
					}
				},
				T = n("./node_modules/lodash/mapValues.js"),
				S = n.n(T),
				_ = n("./src/reddit/helpers/commentList/index.ts"),
				P = n("./src/reddit/models/Comment/index.ts");
			const R = {};

			function E(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = R, t) => {
				switch (t.type) {
					case p.w: {
						const {
							comments: n,
							commentLists: o,
							continueThreads: r,
							key: s,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, i = o[c.postId], a = e[s], m = {}, u = a[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...a[e],
								next: i.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...a[e],
								prev: i.tail || u.prev
							}
						}
						if (i.head && i.tail) {
							const e = Object(_.c)({
									commentLink: i.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: r
								}),
								t = Object(_.c)({
									commentLink: i.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[s]: {
								...e[s],
								...E(n),
								...E(r),
								...E(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: o,
							key: r,
							moreComments: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...E(n),
								...E(o),
								...E(s)
							}
						}
					}
					case g.b:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: o,
							headCommentId: r
						} = t.payload, s = e[o], c = {};
						let d = null;
						return r && (c[r] = {
							...s[r],
							prev: Object(P.i)(n.id)
						}, d = Object(P.i)(r)), {
							...e,
							[o]: {
								...e[o],
								...c,
								[n.id]: {
									depth: 0,
									next: d,
									prev: null
								}
							}
						}
					}
					case p.I: {
						const {
							comment: n,
							commentsPageKey: o,
							parentCommentId: r,
							depth: s
						} = t.payload, c = e[o], d = {};
						let i = null;
						if (!c[r]) return e;
						const a = c[r].next;
						return a && (d[a.id] = {
							...c[a.id],
							prev: Object(P.i)(n.id)
						}, i = a), d[r] = {
							...c[r],
							next: Object(P.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...d,
								[n.id]: {
									depth: s,
									next: i,
									prev: Object(P.i)(r)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const N = {};
			var A = (e = N, t) => {
				switch (t.type) {
					case g.b:
					case g.c:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: o
						} = t.payload;
						return {
							...e,
							[o]: n.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: n,
							key: o,
							postId: r
						} = t.payload;
						return {
							...e,
							[o]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var D = (e = K, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: n,
							postId: o
						} = t.payload;
						return {
							...e,
							[n]: o
						}
					}
					case p.J: {
						const {
							parentId: n,
							commentsPageKey: o
						} = t.payload;
						return e[o] ? e : {
							...e,
							[o]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				api: f,
				followed: j,
				keyToChatCommentLinks: k,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: A,
				keyToPostId: D,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "u", (function() {
				return h
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return I
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "H", (function() {
				return k
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "t", (function() {
				return K
			})), n.d(t, "A", (function() {
				return D
			})), n.d(t, "J", (function() {
				return L
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "F", (function() {
				return H
			})), n.d(t, "r", (function() {
				return J
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "K", (function() {
				return q
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "i", (function() {
				return G
			})), n.d(t, "G", (function() {
				return $
			})), n.d(t, "C", (function() {
				return Y
			})), n.d(t, "I", (function() {
				return z
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "L", (function() {
				return X
			})), n.d(t, "y", (function() {
				return Z
			})), n.d(t, "z", (function() {
				return ee
			})), n.d(t, "B", (function() {
				return te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				r = n.n(o),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeCommentPermalink/index.ts"),
				d = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/comments/index.ts"),
				O = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(f.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: O.a
				}
			});
			const j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				x = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				I = (e, t) => {
					const n = x(e, t);
					if (n) return Object(b.a)(e, {
						commentId: n
					})
				},
				g = [],
				C = Object(d.a)((e, t) => {
					const n = I(e, t),
						o = n && n.id;
					if (!o) return g;
					const {
						commentsPageKey: r
					} = t, s = e.pages.comments.keyToCommentThreadLinkSets[r], c = [];
					let d = {
						id: o,
						type: i.a.Comment
					};
					do {
						c.push(d), d = s[d.id].next
					} while (d);
					return c
				}),
				v = (e, t) => x(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				k = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				T = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: o
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[o];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				S = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				_ = (e, t) => {
					const n = t.commentsPageKey ? T(e, t) : null;
					return n ? n.depth : null
				},
				P = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: o
					} = t;
					switch (o) {
						case i.a.Comment:
							return e.features.comments.models[n];
						case i.a.MoreComments:
							return e.moreComments.models[n];
						case i.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				R = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(a.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== s.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				E = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				w = e => e.moreComments.models,
				N = e => e.features.comments.models,
				A = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
						commentId: t
					});
					return n ? Object(c.a)(Object(m.G)(e, n), t) : ""
				},
				K = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				L = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						r = Object(b.a)(e, {
							commentId: o
						}),
						s = r && _(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof s) return {
						...r,
						depth: s
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				F = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				J = (e, {
					id: t
				}) => e.continueThreads.models[t],
				W = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const o = e.authorFlair.models[n.subredditId];
					return o ? o[n.author] : null
				},
				B = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				V = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				G = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				$ = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Y = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const n = Object(b.a)(e, t);
					if (n) return Object(u.V)(e, n)
				},
				Z = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
							commentId: t
						}),
						o = n && n.authorId || "";
					return Object(l.T)(e, o)
				},
				ee = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				te = (e, {
					commentId: t
				}) => {
					var n, o;
					const r = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.hd
					}) === o.sd.Enabled
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.gd
					}) === o.rd.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.f097167ec6b336c326bd.js.map