// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.fb66a3adec3b6a4a3ab4.js
// Retrieved at 10/4/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
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
				return de
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
				return ye
			})), n.d(t, "g", (function() {
				return je
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return Ie
			})), n.d(t, "c", (function() {
				return Te
			})), n.d(t, "i", (function() {
				return ke
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "k", (function() {
				return Re
			})), n.d(t, "r", (function() {
				return we
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				y = n("./src/reddit/constants/localStorage.ts"),
				j = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/genericServerError/index.ts"),
				T = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, n, o) => {
					let r, s;
					if (o === S.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				R = async (e, t, n, o, s) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === S.i.MARKDOWN) c.text = n.text;
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
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body, o)
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
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				M = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				W = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				B = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/commentSelector.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				q = n("./src/reddit/selectors/posts.ts"),
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
							n(Object(i.f)(o))
						} else n(X({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(s.a)(Q.H), te = Object(s.a)(Q.J), ne = Object(s.a)(Q.I), oe = Object(s.a)(Q.G), re = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await M.f(e, n, t, s)
				}, se = "Toxicity_Warning__Modal", ce = (e, t, n, o, r, s) => async (c, i, {
					gqlContext: d
				}) => {
					const m = i(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await E(d(), l, o, r))) return void c(Object(a.i)(se))
					}
					c(de(e, t, n, o, r, s))
				}, ie = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, s, c, i, d) => async (u, p, {
					apiContext: y
				}) => {
					u(Object(a.g)(se));
					const j = p(),
						h = j.features.comments.submit.pending[n];
					if (!j.user.account || h) return;
					u(ee({
						draftKey: n,
						draft: s
					}));
					const x = j.user.account.displayText,
						I = s.commentMode;
					let g;
					if (d ? (g = await Object(K.i)(y(), e, s, x), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await R(y(), e, s, x, I), g.ok) {
						let o;
						o = g.body, u(te({
							...o,
							headCommentId: Object(V.w)(j, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(q.H)(p(), {
							postId: e
						});
						u(Object(m.z)(r, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === r.Hb && M.g(j, ie(s), e);
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
					re(p(), t, c, g), i || Object(b.d)()
				}, ae = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: i,
						formData: d,
						editorMode: m
					} = e, u = n(), l = Object($.e)(u);
					let b = "";
					if (l && (b = l.name), D.d.enableToxicityWarning(u)) {
						if (!(await E(o(), b, d, m))) return void t(Object(a.i)(se))
					}
					t(me({
						commentsPageKey: s,
						draftKey: i,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, me = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: i,
						draftKey: d,
						formData: m,
						editorMode: u
					} = e;
					t(Object(a.g)(se));
					const l = n(),
						f = l.features.comments.submit.pending[d];
					if (!l.user.account || f) return;
					t(ee({
						draftKey: d,
						draft: m
					}));
					const p = l.user.account.displayText,
						O = m.commentMode,
						y = await R(o(), s, m, p, O);
					if (y.ok) t(ne({
						...y.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: d,
						depth: i + 1
					}));
					else {
						if (y.error && y.error.type === r.Hb) {
							const e = Object(G.b)(l, {
								commentId: s
							});
							if (!e) return;
							M.g(l, ie(m), e.postId, s)
						}
						t(oe({
							draftKey: d,
							error: y.error
						}))
					}
					re(n(), c, u, y), Object(b.d)()
				}, ue = Object(s.a)(Q.q), le = Object(s.a)(Q.p), be = Object(s.a)(Q.l), fe = (Object(s.a)(Q.g), Object(s.a)(Q.m)), pe = (Object(s.a)(Q.t), (e, t, n) => async (r, s, {
					apiContext: c
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.G)(t)) r(fe({
						editorMode: e,
						draftKey: n,
						content: i ? J.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(A.a)(c(), e, i ? t : JSON.stringify(t));
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
					if (!Object(Y.K)(r())) return o(Object(d.k)()), void o(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(V.m)(r(), {
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
						if (p === S.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
								n = W.s("", null),
								o = W.l([n]);
							f = {
								document: [W.c(t), o]
							}
						}
					}
					const y = s.features.comments.drafts[m];
					let j;
					if (j = O ? {
							commentMode: p,
							draftType: H.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : y || {
							commentMode: p,
							draftType: H.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(Y.M)(s)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: j
						});
						o(Object(i.f)(n))
					} else o(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: j
					}))
				}, ye = e => async t => {
					t(Object(z.p)(e)), t(Ie(e))
				}, je = ({
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
					const i = c();
					i.user.account && (M.c(i), s(xe({
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
				}, ge = Object(s.a)(Q.C), Ce = Object(s.a)(Q.B), ve = Object(s.a)(Q.D), Te = Object(s.a)(Q.h), ke = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: s
				}) => async (n, c, {
					apiContext: i
				}) => {
					const d = c();
					if (!d.user.account) return;
					n(ge({
						draftKey: o
					})), M.d(d);
					const a = d.user.account.displayText || "",
						m = s.commentMode,
						u = await (async (e, t, n, o, s, c) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === S.i.MARKDOWN) i.text = o.text;
							else {
								i.text = null;
								let e = null;
								o.rteState && (e = p.a.toRichTextJSON(o.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(I.a)(e, [g.a]), {
								endpoint: Object(C.a)(Object(P.a)(Object(_.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.ib.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(k.a)(e)
							} : {
								...e,
								body: {
									comment: Object(T.a)(e.body.json.data.things[0].data, s)
								}
							} : {
								...e,
								body: {
									comment: Object(T.a)(e.body, s)
								}
							} : {
								...e,
								error: e.error || Object(v.a)()
							})
						})(i(), e, 0, s, a, m);
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
				}, Se = Object(s.a)(Q.z), _e = Object(s.a)(Q.y), Pe = Object(s.a)(Q.A), Ee = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const c = o();
					n(Se({
						id: e
					})), M.a(e, c);
					const i = await ((e, t) => Object(h.a)(Object(I.a)(e, [g.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
						method: r.ib.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(v.a)()
					}))(s(), e);
					i.ok ? n(Pe({
						id: e,
						postId: t
					})) : n(_e({
						id: e,
						error: i.error
					}))
				}, Re = e => async (t, n, {
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
					var c, i, d, a, m, u;
					n(Object(z.c)());
					const l = e => Object(f.f)(Object(f.e)(e, B.b.Error));
					if (((null === (i = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === i ? void 0 : i.followed) || []).length === y.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === F.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(z.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...w,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.rb)(null !== (m = null === (a = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(f.f)({
								kind: B.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(z.n)(i)), n(l(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return E
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "g", (function() {
				return J
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "o", (function() {
				return G
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "d", (function() {
				return q
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
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				d = n("./src/lib/loadableAction/index.ts");
			const a = Object(d.a)(() => n.e("AchievementsActions").then(n.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var m = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/presence.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				O = n("./src/reddit/endpoints/comment/index.tsx"),
				y = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				h = n("./src/reddit/models/Comment/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				T = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/comment/constants.ts");
			const P = {},
				E = Object(c.a)(_.o),
				R = e => async (t, n, {
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
					if (t(E({
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
							buttonAction: R(e)
						}))
					} else t(E({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, w = e => `viewing-comment-${e}`, N = o.a.telemetry.commentConsumedThreshold, A = e => async (t, n) => {
					const r = n();
					if (!Object(v.b)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					j.g({
						state: r,
						commentId: e
					}), s.c.start(w(e));
					const c = setTimeout(() => j.a({
						state: r,
						commentId: e
					}), N);
					P[e] = c
				}, K = (e, t) => async (n, o) => {
					const r = o(),
						c = w(e);
					if (Object(v.b)(r, {
							commentId: e
						}) && s.c.has(c)) {
						const n = s.c.end(c);
						!t && n < N && (clearTimeout(P[e]), delete P[e])
					}
				}, D = Object(c.a)(_.x), L = Object(c.a)(_.w), U = Object(c.a)(_.v), M = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						c = s.moreComments.models[t],
						d = s.platform.currentPage,
						m = d && d.routeMatch,
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
					}, Object(T.a)(s));
					if (p.ok) {
						const t = p.body,
							o = Object(y.a)(t, f, s);
						n(L({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[f];
						let d;
						r && "subreddit" === r.belongsTo.type && t.comments && (d = r.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const m = p.body.comments,
							u = p.body.posts;
						await n(Object(l.b)(u, m, d)), await n(a(d, m))
					} else n(U({
						moreCommentsItem: c,
						...p.error
					}))
				}, F = Object(p.a)(y.b, g.a.upvoted), H = Object(p.a)(y.b, g.a.downvoted), J = Object(c.a)(_.j), W = Object(c.a)(_.i), B = Object(c.a)(_.e), V = Object(c.a)(_.f), G = (Object(c.a)(_.c), Object(c.a)(_.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						c = Object(h.i)(e),
						i = Object(C.n)(s, {
							commentLink: c,
							commentsPageKey: t
						}),
						d = Object(k.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						a = i.depth;
					o(B({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== a || n(e, !0), Object(b.d)()
				}), $ = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(V({
						commentId: e,
						commentsPageKey: t
					}))
				}, q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (r, s) => {
					const c = s(),
						i = Object(y.e)(t, e, n, c),
						d = Object(k.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(B({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === n && o(i, !0), Object(b.d)()
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
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(l.G),
				f = Object(r.a)(l.p),
				p = Object(r.a)(l.Q),
				O = (e, t, n) => async (r, i, {
					apiContext: O
				}) => {
					d.j(i(), t);
					const j = t === a.i.MARKDOWN,
						h = t === a.i.RICH_TEXT,
						x = l.k;
					if (j && Object(m.G)(n)) return r(p({
						editorKey: e,
						editorMode: a.i.MARKDOWN,
						content: ""
					})), void r(y(t));
					if (h && !n) return r(p({
						editorKey: e,
						editorMode: a.i.RICH_TEXT,
						content: m.i
					})), void r(y(t));
					r(b(x));
					const I = await Object(c.a)(O(), t, j ? JSON.stringify(n) : n);
					I.ok ? (r(f(x)), r(p({
						editorKey: e,
						editorMode: t,
						content: I.body.output
					})), r(y(t))) : (r(f(x)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, y = e => async (t, n) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const c = n().user.prefs.useMarkdown ? a.i.MARKDOWN : a.i.RICH_TEXT;
					if (e === c) return;
					const d = e === a.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						text: d
					})), Object(i.ob)(r + 1)
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
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
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
					const p = await (async (e, t, n) => Object(s.a)(Object(c.a)(e, [i.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
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
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(o.a)(s.r),
				i = Object(o.a)(s.F),
				d = e => async (t, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), e);
					s && s.ok ? t(c({
						streamId: e,
						level: s.body.data.auto_mute_status.level
					})) : t(i(e))
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
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
				priority: i,
				Icon: d,
				redditStyle: u,
				isFullWidth: l,
				eventSource: b,
				onClick: f,
				onAddUserToQuickReplyList: p,
				children: O
			}) => {
				return s.a.createElement(a.s, {
					onClick: t => {
						if (f && f(t), e(), b === o.awardNotification) return p();
						r(Object(m.b)(c))
					},
					className: n,
					text: t,
					priority: i,
					Icon: d,
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
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = l(Object(d.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/NotificationInbox/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/components/NotificationUnit/index.m.less"),
				h = n.n(j);
			const x = {
				kind: y.b.Error,
				text: o.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: m.a
			};
			t.default = e => {
				var t, n, r, y, j, I, g, C;
				const v = Object(c.d)(),
					{
						context: T,
						deeplinkUrl: k,
						isFullWidth: S,
						isUnread: _,
						isInboxCTAsAllEnabled: P,
						isInboxCTAsReplyEnabled: E,
						isInboxCTAsSeePostEnabled: R,
						isNightMode: w,
						notificationId: N,
						onEvent: A
					} = e,
					K = null == T ? void 0 : T.messageType,
					D = null === (t = null == T ? void 0 : T.post) || void 0 === t ? void 0 : t.permalink,
					L = K === O.a.PostReply ? N : null === (n = null == T ? void 0 : T.comment) || void 0 === n ? void 0 : n.id,
					U = (null === (r = null == T ? void 0 : T.post) || void 0 === r ? void 0 : r.id) || (null === (j = null === (y = null == T ? void 0 : T.comment) || void 0 === y ? void 0 : y.postInfo) || void 0 === j ? void 0 : j.id),
					M = null === (I = null == T ? void 0 : T.awarding) || void 0 === I ? void 0 : I.award.id,
					F = null === (C = null === (g = null == T ? void 0 : T.awarding) || void 0 === g ? void 0 : g.awarder) || void 0 === C ? void 0 : C.id;
				return (() => {
					switch (K) {
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							if (!R && !P) return null;
							const e = e => {
								D ? A({
									position: f.c.SECOND
								}) : (e.preventDefault(), v(Object(m.f)(x)))
							};
							return s.a.createElement(l.s, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
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
							if (!E && !P) return null;
							const e = e => {
								if (U && L) {
									const e = Object(d.a)(U, L, Object(b.c)(k)),
										t = {
											parentCommentId: L,
											commentsPageKey: e
										};
									v(Object(a.g)(t)), A({
										position: f.c.SECOND
									})
								} else e.preventDefault(), v(Object(m.f)(x))
							};
							return s.a.createElement(l.s, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
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
									awardId: M
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
								className: Object(i.a)(h.a.notificationButton, {
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
				return y
			})), n.d(t, "c", (function() {
				return j
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
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/save`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unsave`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/lock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unlock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/approve`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				y = (e, t, n) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/remove`),
					method: r.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				j = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n, c) => {
					let i = Object(d.a)(Object(u.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (i = Object(a.a)(i)), Object(s.a)(e, {
						data: n,
						endpoint: i,
						method: r.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, o) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/distinguish/${n}`),
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
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === d.i.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(r.a)(Object(s.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.ib.POST,
					data: a
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
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
			const i = (e, t) => t().features.comments.models[e],
				d = e => {
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
						head: i
					} = o[t];
					if (i) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: s.E,
								expEventOverride: t
							});
							return !!(Object(s.Ne)(n) ? void 0 : n)
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
				return i
			})), n.d(t, "f", (function() {
				return d
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
				i = e => t => ({
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
				d = e => t => ({
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
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const a = e => {
					const t = Object(c.n)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(i.defaults)(e),
						screen: Object(i.screen)(e),
						subreddit: Object(i.subreddit)(e),
						post: t ? Object(i.post)(e, t) : null,
						profile: Object(i.profile)(e)
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
					return Object(d.a)({
						noun: "comment",
						...a(e),
						comment: r ? Object(i.comment)(e, r) : null,
						listing: Object(i.listing)(e, void 0, {
							depth: m
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, u = (e, t, n, o) => {
					const r = a(e);
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
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, l = e => Object(d.a)({
					noun: "cancel",
					...a(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...a(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(i.defaults)(t),
					screen: Object(i.screen)(t),
					subreddit: Object(i.subreddit)(t),
					post: Object(i.post)(t, e)
				}), p = e => Object(d.a)({
					noun: "edit",
					...a(e)
				}), O = e => Object(d.a)({
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
				i = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var a = (e = d, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
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
					case i.c:
					case i.g: {
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
						case i.d:
						case i.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
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
			var y = (e = O, t) => {
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
				j = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(j),
				x = n("./node_modules/lodash/values.js"),
				I = n.n(x),
				g = n("./src/reddit/actions/comment/websocket/constants.ts");
			const C = {};

			function v(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var T = (e = C, t) => {
					switch (t.type) {
						case i.f:
						case p.w:
						case i.b: {
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
				k = n("./node_modules/lodash/mapValues.js"),
				S = n.n(k),
				_ = n("./src/reddit/helpers/commentList/index.ts"),
				P = n("./src/reddit/models/Comment/index.ts");
			const E = {};

			function R(e) {
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
			var w = (e = E, t) => {
				switch (t.type) {
					case p.w: {
						const {
							comments: n,
							commentLists: o,
							continueThreads: r,
							key: s,
							moreCommentsItem: c,
							moreComments: i
						} = t.payload, d = o[c.postId], a = e[s], m = {}, u = a[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...a[e],
								next: d.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...a[e],
								prev: d.tail || u.prev
							}
						}
						if (d.head && d.tail) {
							const e = Object(_.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(_.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[s]: {
								...e[s],
								...R(n),
								...R(r),
								...R(i),
								...m
							}
						}
					}
					case i.b:
					case i.f: {
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
								...R(n),
								...R(o),
								...R(s)
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
						let i = null;
						return r && (c[r] = {
							...s[r],
							prev: Object(P.i)(n.id)
						}, i = Object(P.i)(r)), {
							...e,
							[o]: {
								...e[o],
								...c,
								[n.id]: {
									depth: 0,
									next: i,
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
						} = t.payload, c = e[o], i = {};
						let d = null;
						if (!c[r]) return e;
						const a = c[r].next;
						return a && (i[a.id] = {
							...c[a.id],
							prev: Object(P.i)(n.id)
						}, d = a), i[r] = {
							...c[r],
							next: Object(P.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...i,
								[n.id]: {
									depth: s,
									next: d,
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
					case i.b:
					case i.f: {
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
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
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
				followed: y,
				keyToChatCommentLinks: T,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: A,
				keyToPostId: D,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "H", (function() {
				return C
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "q", (function() {
				return R
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "A", (function() {
				return A
			})), n.d(t, "J", (function() {
				return K
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "D", (function() {
				return L
			})), n.d(t, "E", (function() {
				return U
			})), n.d(t, "F", (function() {
				return M
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "K", (function() {
				return W
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "G", (function() {
				return G
			})), n.d(t, "C", (function() {
				return $
			})), n.d(t, "I", (function() {
				return q
			})), n.d(t, "p", (function() {
				return Y
			})), n.d(t, "L", (function() {
				return z
			})), n.d(t, "y", (function() {
				return Q
			})), n.d(t, "z", (function() {
				return X
			})), n.d(t, "B", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				r = n.n(o),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(l.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: f.a
				}
			});
			const p = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				j = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				h = (e, t) => {
					const n = j(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				x = [],
				I = Object(c.a)((e, t) => {
					const n = h(e, t),
						o = n && n.id;
					if (!o) return x;
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
				g = (e, t) => j(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				C = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				v = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: o
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[o];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				T = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				k = (e, t) => {
					const n = t.commentsPageKey ? v(e, t) : null;
					return n ? n.depth : null
				},
				S = (e, {
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
				_ = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== s.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				E = e => e.moreComments.models,
				R = e => e.features.comments.models,
				w = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				N = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				A = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				K = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				D = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						r = Object(u.b)(e, {
							commentId: o
						}),
						s = r && k(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof s) return {
						...r,
						depth: s
					}
				},
				L = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				U = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
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
				F = (e, {
					id: t
				}) => e.continueThreads.models[t],
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const o = e.authorFlair.models[n.subredditId];
					return o ? o[n.author] : null
				},
				J = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				W = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				B = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				V = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				G = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				$ = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Y = e => e.features.comments.visitHighlightFilter,
				z = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(a.V)(e, n)
				},
				Q = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
							commentId: t
						}),
						o = n && n.authorId || "";
					return Object(m.T)(e, o)
				},
				X = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				Z = (e, {
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
						experimentName: o.Ed
					}) === o.Pd.Enabled
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.Dd
					}) === o.Od.Enabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.fb66a3adec3b6a4a3ab4.js.map