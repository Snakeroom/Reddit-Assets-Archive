// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b4ca7981cfb76332a2fc.js
// Retrieved at 7/21/2021, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(r.c)(t)
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
				return Te
			})), n.d(t, "i", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Pe
			})), n.d(t, "k", (function() {
				return Re
			})), n.d(t, "r", (function() {
				return we
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
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
				v = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = n("./src/reddit/helpers/genericServerError/index.ts"),
				T = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const P = (e, t, n, r) => {
					let o, s;
					if (r === _.h.MARKDOWN) o = n.text, s = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: o,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				R = async (e, t, n, r, s) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === _.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(I.a)(e, [v.a]), {
						method: o.hb.POST,
						endpoint: Object(g.a)(Object(k.a)(Object(S.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body.json.data.things[0].data, r)
						}
					} : {
						...e,
						body: {
							comment: Object(T.a)(e.body, r)
						}
					} : {
						...e,
						error: e.error || Object(C.a)()
					})
				};
			var w = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var A = n("./src/reddit/endpoints/post/index.tsx"),
				N = n("./src/reddit/endpoints/post/convert.ts"),
				D = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = n("./src/reddit/featureFlags/index.ts"),
				U = n("./src/reddit/helpers/dom/index.ts"),
				L = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				M = n("./src/reddit/models/Comment/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				W = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				B = n("./src/reddit/models/Toast/index.ts"),
				H = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				V = n("./src/reddit/selectors/platform.ts"),
				$ = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				z = n("./src/reddit/actions/comment/constants.ts");
			const X = Object(s.a)(z.k),
				Z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, r) => {
					const o = r();
					if (!!o.features.comments.drafts[t])
						if (Object(Y.L)(o) && e) {
							const r = X({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(r))
						} else n(X({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(s.a)(z.H), te = Object(s.a)(z.J), ne = Object(s.a)(z.I), re = Object(s.a)(z.G), oe = (e, t, n, r) => {
					const o = r.ok && r.body,
						s = o && o.comment && o.comment.id;
					F.f(e, n, t, s)
				}, se = "Toxicity_Warning__Modal", ce = (e, t, n, r, o, s) => async (c, d, {
					gqlContext: i
				}) => {
					const m = d(),
						u = Object(V.e)(m);
					let l = "";
					if (u && (l = u.name), K.d.enableToxicityWarning(m)) {
						if (!(await P(i(), l, r, o))) return void c(Object(a.i)(se))
					}
					c(ie(e, t, n, r, o, s))
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
					let v;
					if (i ? (v = await Object(D.i)(j(), e, s, x), u(Object(l.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await R(j(), e, s, x, I), v.ok) {
						let r;
						r = v.body, u(te({
							...r,
							headCommentId: Object(H.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object($.F)(p(), {
							postId: e
						});
						u(Object(m.z)(o, O.a.CommentSubmitted))
					} else {
						v.error && v.error.type === o.Gb && F.g(y, de(s), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : r.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: v.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: B.b.Error,
							text: t
						}))
					}
					oe(p(), t, c, v), d || Object(b.d)()
				}, ae = e => async (t, n, {
					gqlContext: r
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: d,
						formData: i,
						editorMode: m
					} = e, u = n(), l = Object(V.e)(u);
					let b = "";
					if (l && (b = l.name), K.d.enableToxicityWarning(u)) {
						if (!(await P(r(), b, i, m))) return void t(Object(a.i)(se))
					}
					t(me({
						commentsPageKey: s,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: o,
						formData: i,
						editorMode: m
					}))
				}, me = e => async (t, n, {
					apiContext: r
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
						j = await R(r(), s, m, p, O);
					if (j.ok) t(ne({
						...j.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: i,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === o.Gb) {
							const e = Object(q.a)(l, {
								commentId: s
							});
							if (!e) return;
							F.g(l, de(m), e.postId, s)
						}
						t(re({
							draftKey: i,
							error: j.error
						}))
					}
					oe(n(), c, u, j), Object(b.d)()
				}, ue = Object(s.a)(z.q), le = Object(s.a)(z.p), be = Object(s.a)(z.l), fe = (Object(s.a)(z.g), Object(s.a)(z.m)), pe = (Object(s.a)(z.t), (e, t, n) => async (o, s, {
					apiContext: c
				}) => {
					const d = e === _.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.G)(t)) o(fe({
						editorMode: e,
						draftKey: n,
						content: d ? J.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const s = await Object(N.a)(c(), e, d ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							o(Object(u.a)(n)), o(fe({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(f.f)({
							duration: f.a,
							kind: B.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Oe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (r, o) => {
					const s = o(),
						m = Object(c.a)(G.c.replyToComment, t);
					if (!Object(Y.J)(o())) return r(Object(i.j)()), void r(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(H.m)(o(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && r(le({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						f = null;
					const p = s.user.prefs.commentMode,
						O = Object(U.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === _.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
								n = W.s("", null),
								r = W.l([n]);
							f = {
								document: [W.c(t), r]
							}
						}
					}
					const j = s.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: p,
							draftType: G.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : j || {
							commentMode: p,
							draftType: G.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(Y.L)(s)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						r(Object(d.f)(n))
					} else r(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, je = e => async t => {
					t(Object(Q.p)(e)), t(Ie(e))
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
					})), n(Object(Q.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, he = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), xe = Object(s.a)(z.s), Ie = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: r,
					text: o
				}) => async (s, c) => {
					const d = c();
					d.user.account && (F.c(d), s(xe({
						commentId: e,
						commentsPageKey: n,
						draftKey: r,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: G.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(s.a)(z.C), ge = Object(s.a)(z.B), Ce = Object(s.a)(z.D), Te = Object(s.a)(z.h), Ee = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: r,
					formData: s
				}) => async (n, c, {
					apiContext: d
				}) => {
					const i = c();
					if (!i.user.account) return;
					n(ve({
						draftKey: r
					})), F.d(i);
					const a = i.user.account.displayText || "",
						m = s.commentMode,
						u = await (async (e, t, n, r, s, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === _.h.MARKDOWN) d.text = r.text;
							else {
								d.text = null;
								let e = null;
								r.rteState && (e = p.a.toRichTextJSON(r.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(I.a)(e, [v.a]), {
								endpoint: Object(g.a)(Object(S.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.hb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(E.a)(e)
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
								error: e.error || Object(C.a)()
							})
						})(d(), e, 0, s, a, m);
					if (u.ok) {
						const o = u.body;
						n(Ce({
							commentId: e,
							commentsPageKey: t,
							draftKey: r
						})), n(Object(Q.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(ge({
						draftKey: r,
						error: u.error
					}))
				}, _e = Object(s.a)(z.z), ke = Object(s.a)(z.y), Se = Object(s.a)(z.A), Pe = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const c = r();
					n(_e({
						id: e
					})), F.a(e, c);
					const d = await ((e, t) => Object(h.a)(Object(I.a)(e, [v.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: o.hb.POST,
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
						error: e.error || Object(C.a)()
					}))(s(), e);
					d.ok ? n(Se({
						id: e,
						postId: t
					})) : n(ke({
						id: e,
						error: d.error
					}))
				}, Re = e => async (t, n, {
					apiContext: r
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Q.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(A.q)(r(), e, o)).ok || t(Object(Q.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, we = (e, t) => async (n, o, {
					gqlContext: s
				}) => {
					var c, d, i, a, m, u;
					n(Object(Q.c)());
					const l = e => Object(f.f)(Object(f.e)(e, B.b.Error));
					if (((null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(r.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === M.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Q.n)(d)), (await ((e, t) => Object(x.a)(e, {
								...w,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(L.pb)(null !== (m = null === (a = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? r.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : r.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(f.f)({
								kind: B.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Q.n)(d)), n(l(r.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return S
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "o", (function() {
				return H
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return Q
			})), n.d(t, "n", (function() {
				return z
			})), n.d(t, "c", (function() {
				return X
			})), n.d(t, "k", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				i = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				a = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				C = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				T = n("./src/reddit/selectors/moderatingComments.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/comment/constants.ts");
			const k = {},
				S = Object(c.a)(_.o),
				P = e => async (t, n, {
					apiContext: r
				}) => {
					if (!Object(E.J)(n())) return t(Object(a.j)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(v.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const c = s.isSaved ? p.k : p.g;
					if (t(S({
							[e]: {
								isSaved: !s.isSaved
							}
						})), (await c(r(), e)).ok) {
						const n = s.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							r = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(b.f)({
							text: n,
							kind: x.b.Undo,
							buttonText: r,
							buttonAction: P(e)
						}))
					} else t(S({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, w = r.a.telemetry.commentConsumedThreshold, A = e => async (t, n) => {
					const o = n();
					if (!Object(g.a)(o, {
							commentId: e
						}) || Math.random() > r.a.telemetry.commentSampleRate) return;
					j.c({
						state: o,
						commentId: e
					}), s.c.start(R(e));
					const c = setTimeout(() => j.a({
						state: o,
						commentId: e
					}), w);
					k[e] = c
				}, N = (e, t) => async (n, r) => {
					const o = r(),
						c = R(e);
					if (Object(g.a)(o, {
							commentId: e
						}) && s.c.has(c)) {
						const n = s.c.end(c);
						!t && n < w && (clearTimeout(k[e]), delete k[e])
					}
				}, D = Object(c.a)(_.x), K = Object(c.a)(_.w), U = Object(c.a)(_.v), L = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const s = r(),
						c = s.moreComments.models[t],
						a = s.platform.currentPage,
						m = a && a.routeMatch,
						l = m && m.match,
						{
							partialPostId: b
						} = l ? l.params : null;
					if (!b) return;
					const f = Object(h.s)(b);
					n(D({
						moreCommentsId: c.id
					}));
					const j = await Object(p.e)(o(), f, {
						token: c.token
					}, Object(C.a)(s));
					if (j.ok) {
						const t = j.body,
							r = Object(O.a)(t, f, s);
						n(K({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: r,
							...t
						}));
						const o = s.posts.models[f];
						let a;
						o && "subreddit" === o.belongsTo.type && t.comments && (a = o.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = j.body.comments,
							l = j.body.posts;
						await n(Object(u.b)(l, m, a)), await n(Object(i.b)(a, m))
					} else n(U({
						moreCommentsItem: c,
						...j.error
					}))
				}, F = Object(f.a)(O.b, I.a.upvoted), M = Object(f.a)(O.b, I.a.downvoted), G = Object(c.a)(_.j), J = Object(c.a)(_.i), W = Object(c.a)(_.e), B = Object(c.a)(_.f), H = (Object(c.a)(_.c), Object(c.a)(_.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (r, o) => {
					const s = o(),
						c = Object(y.h)(e),
						d = Object(v.n)(s, {
							commentLink: c,
							commentsPageKey: t
						}),
						i = Object(T.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						a = d.depth;
					r(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || n(e, !0), Object(l.d)()
				}), q = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(B({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: r
				}) => async (o, s) => {
					const c = s(),
						d = Object(O.e)(t, e, n, c),
						i = Object(T.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === n && r(d, !0), Object(l.d)()
				}, $ = Object(c.a)(_.r), Y = e => t => t($({
					draftKey: e
				})), Q = Object(c.a)(_.a), z = Object(c.a)(_.E), X = Object(c.a)(_.b), Z = Object(c.a)(_.u)
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				i = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var a = n("./src/reddit/selectors/experiments/econ/index.ts"),
				m = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/powerups/index.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts"),
				O = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(m.a)({
				features: {
					powerups: u.a
				}
			});
			const h = Object(o.a)(y.d),
				x = Object(o.a)(y.f),
				I = Object(o.a)(y.g),
				v = Object(o.a)(y.e),
				g = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					const i = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (i.length) try {
						const t = await (async (e, t, n) => {
							const r = await Object(c.a)(e, {
								...d,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!r.ok) throw new Error("Unable to fetch user achievements");
							return r.body.data.subredditInfoById
						})(o(), e, i);
						await n(h(t))
					} catch (a) {
						s.c.captureException(a)
					}
				}, C = (e, t) => async (n, r) => {
					if (!e) return;
					const o = r(),
						s = Object(j.j)(o);
					if (!s || !Object(p.f)(o, {
							subredditId: e
						}) || !Object(a.g)(o)) return;
					const c = !!Object(O.b)(o, {
						subredditId: e,
						userId: s.id
					});
					!t && c || await n(g(e, [s.id]))
				}, T = (e, t) => async (n, r) => {
					if (!e) return;
					await n(Object(l.k)(e, {
						fullData: !0
					}));
					const o = r();
					if (!Object(p.f)(o, {
							subredditId: e
						}) || !t || !Object(a.g)(o)) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(g(e, Array.from(s)))
				}, E = (e, t) => async (n, o, {
					gqlContext: d
				}) => {
					const a = o(),
						m = Object(j.j)(a);
					if (!m) return;
					const u = {
						subredditId: e,
						userId: m.id,
						achievementType: t
					};
					n(x(u));
					try {
						await (async (e, t, n) => {
							const r = await Object(c.a)(e, {
								...i,
								variables: {
									subredditId: t,
									achievementType: n
								}
							});
							if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(d(), u.subredditId, u.achievementType), n(I(u))
					} catch (l) {
						n(v(u)), s.c.captureException(l), n(Object(b.f)({
							duration: b.a,
							kind: f.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const r = 120,
				o = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				s = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				i = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				i = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(o.a)(l.C),
				f = Object(o.a)(l.p),
				p = Object(o.a)(l.M),
				O = (e, t, n) => async (o, d, {
					apiContext: O
				}) => {
					i.i(d(), t);
					const y = t === a.h.MARKDOWN,
						h = t === a.h.RICH_TEXT,
						x = l.k;
					if (y && Object(m.G)(n)) return o(p({
						editorKey: e,
						editorMode: a.h.MARKDOWN,
						content: ""
					})), void o(j(t));
					if (h && !n) return o(p({
						editorKey: e,
						editorMode: a.h.RICH_TEXT,
						content: m.i
					})), void o(j(t));
					o(b(x));
					const I = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					I.ok ? (o(f(x)), o(p({
						editorKey: e,
						editorMode: t,
						content: I.body.output
					})), o(j(t))) : (o(f(x)), o(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const o = Object(d.m)();
					if (o >= 3) return;
					const c = n().user.prefs.useMarkdown ? a.h.MARKDOWN : a.h.RICH_TEXT;
					if (e === c) return;
					const i = e === a.h.MARKDOWN ? r.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : r.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: r.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: i
					})), Object(d.mb)(o + 1)
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(r.a)(m),
				l = (e, t, n) => async (r, m, {
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
						method: o.hb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							r = new Set(n),
							o = {};
						return t.forEach(e => {
							o[e] = r.has(e)
						}), {
							presentUsers: o
						}
					}))(l(), Array.from(f), n);
					r(u(p))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(r.a)(s.r),
				d = Object(r.a)(s.F),
				i = e => async (t, n, {
					apiContext: r
				}) => {
					const s = await Object(o.a)(r(), e);
					s && s.ok ? t(c({
						streamId: e,
						level: s.body.data.auto_mute_status.level
					})) : t(d(e))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/chat/toggle.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: o,
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
						if (f && f(t), e(), b === r.awardNotification) return p();
						o(Object(m.b)(c))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				text: r.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: m.a
			};
			t.default = e => {
				var t, n, o, j, y, I, v, g;
				const C = Object(c.d)(),
					{
						context: T,
						deeplinkUrl: E,
						isFullWidth: _,
						isUnread: k,
						isInboxCTAsAllEnabled: S,
						isInboxCTAsReplyEnabled: P,
						isInboxCTAsSeePostEnabled: R,
						isNightMode: w,
						notificationId: A,
						onEvent: N
					} = e,
					D = null == T ? void 0 : T.messageType,
					K = null === (t = null == T ? void 0 : T.post) || void 0 === t ? void 0 : t.permalink,
					U = D === O.a.PostReply ? A : null === (n = null == T ? void 0 : T.comment) || void 0 === n ? void 0 : n.id,
					L = (null === (o = null == T ? void 0 : T.post) || void 0 === o ? void 0 : o.id) || (null === (y = null === (j = null == T ? void 0 : T.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === y ? void 0 : y.id),
					F = null === (I = null == T ? void 0 : T.awarding) || void 0 === I ? void 0 : I.award.id,
					M = null === (g = null === (v = null == T ? void 0 : T.awarding) || void 0 === v ? void 0 : v.awarder) || void 0 === g ? void 0 : g.id;
				return (() => {
					switch (D) {
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							if (!R && !S) return null;
							const e = e => {
								K ? N({
									position: f.b.SECOND
								}) : (e.preventDefault(), C(Object(m.f)(x)))
							};
							return s.a.createElement(l.q, {
								onClick: e,
								isFullWidth: _,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: k,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "text_post",
								className: h.a.postIcon
							}), r.fbt._("See Post", null, {
								hk: "mGXS5"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply: {
							if (!P && !S) return null;
							const e = e => {
								if (L && U) {
									const e = Object(i.a)(L, U, Object(b.c)(E)),
										t = {
											parentCommentId: U,
											commentsPageKey: e
										};
									C(Object(a.g)(t)), N({
										position: f.b.SECOND
									})
								} else e.preventDefault(), C(Object(m.f)(x))
							};
							return s.a.createElement(l.q, {
								onClick: e,
								isFullWidth: _,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: k,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "reply",
								className: h.a.replyIcon
							}), r.fbt._("Reply", null, {
								hk: "zBpwB"
							}))
						}
						case O.a.AwardReceived: {
							if (!M) return null;
							const e = e => {
								e.preventDefault(), M ? N({
									position: f.b.SECOND,
									awardId: F
								}) : C(Object(m.f)(x))
							};
							return s.a.createElement(u.b, {
								userId: M,
								contextId: M,
								onClick: e,
								isFullWidth: _,
								priority: l.b.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(d.a)(h.a.notificationButton, {
									[h.a.isUnread]: k,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "chat_new",
								className: h.a.replyIcon
							}), r.fbt._("Say thanks", null, {
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
				return v
			}));
			var r = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n, c) => {
					let d = Object(i.a)(Object(u.a)(Object(m.a)(`${r.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (d = Object(a.a)(d)), Object(s.a)(e, {
						data: n,
						endpoint: d,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, n, r) => Object(s.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: r
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === i.h.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(o.a)(Object(s.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: r.hb.POST,
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
			var r = n("./src/reddit/constants/comments.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				i = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, r) => {
					let s = Object(o.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; s && s.depth > n && s.prev && (c = s.prev, (s = Object(o.n)(r, {
							commentLink: c,
							commentsPageKey: e
						})) && !(s.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: o
					} = e, {
						head: d
					} = r[t];
					if (d) return Object.keys(o).filter(e => {
						const t = o[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: s.B,
								expEventOverride: t
							});
							return !!(Object(s.Xd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.G.SERVER_ERROR,
				fields: [{
					field: "",
					msg: r.fbt._("Something went wrong.", null, {
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
			var r = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.G.NO_STRIPE_SUBSCRIPTION:
							case r.G.USER_DOESNT_EXIST:
							case r.G.USER_REQUIRED_ERROR:
							case r.G.VALIDATION_ERROR:
								return e;
							case r.G.NO_USER:
							case r.G.NO_TEXT:
							case r.G.NO_URL:
								return r.G.VALIDATION_ERROR;
							case r.G.CREDIT_CARD_FAILURE:
							case r.G.CREDIT_CARD_FAILURE_GENERIC:
								return r.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.G.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = ({
					state: e,
					commentId: t
				}) => Object(r.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(r.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/trackers/userFlair.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const m = e => {
					const t = Object(d.m)(e);
					return {
						source: "comment_composer",
						action: r.c.CLICK,
						...Object(i.defaults)(e),
						screen: Object(i.screen)(e),
						subreddit: Object(i.subreddit)(e),
						post: t ? Object(i.post)(e, t) : null,
						profile: Object(i.profile)(e)
					}
				},
				u = (e, t, n, r) => {
					const s = {
							commentId: r,
							commentsPageKey: n
						},
						d = r && Object(c.j)(e, s) || 0;
					return Object(a.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(i.comment)(e, r) : null,
						listing: Object(i.listing)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(o.d)(e)
					})
				},
				l = (e, t, n, r) => {
					const o = m(e);
					return Object(a.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: r,
							postId: n
						}
					})
				},
				b = e => Object(a.a)({
					noun: "cancel",
					...m(e)
				}),
				f = (e, t) => {
					t === s.c.replyToPost && Object(a.a)({
						noun: "input",
						...m(e)
					})
				},
				p = (e, t) => Object(a.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(i.defaults)(t),
					screen: Object(i.screen)(t),
					subreddit: Object(i.subreddit)(t),
					post: Object(i.post)(t, e)
				}),
				O = e => Object(a.a)({
					noun: "edit",
					...m(e)
				}),
				j = e => Object(a.a)({
					noun: "save_edit",
					...m(e)
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/userFlair.ts");

			function a(e) {
				const t = c.subreddit(e),
					n = null == t ? void 0 : t.id;
				if (!n) return;
				const o = Object(i.c)(e, {
						subredditId: n
					}),
					a = Object(d.h)(e),
					m = a ? Object(s.c)(e, {
						subredditId: n,
						userId: a
					}) : void 0,
					u = {
						achievementFlairId: null == m ? void 0 : m.type,
						achievementFlairTitle: null == m ? void 0 : m.name
					};
				if (!(null == o ? void 0 : o.displaySettings.isUserEnabled) || !(null == o ? void 0 : o.applied)) return {
					isActive: !1,
					...u
				};
				const l = o.applied.templateId,
					b = Object(r.g)(o.applied);
				return b ? {
					id: l,
					title: b,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const m = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...c.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: n,
						achievementFlair: o
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...c.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(r.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name,
							isLocked: null == o ? void 0 : o.isLocked
						}
					}
				},
				l = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...c.defaults(e)
				}),
				b = (e, t, n) => d => {
					const i = Object(o.e)(d, {
							commentId: e
						}),
						a = Object(s.c)(d, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...c.defaults(d),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == i ? void 0 : i.templateId,
							title: i ? Object(r.g)(i) : void 0,
							achievementFlairId: null == a ? void 0 : a.type,
							achievementFlairTitle: null == a ? void 0 : a.name
						}
					}
				}
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var r, o, s, c;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return s
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(r || (r = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(o || (o = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(s || (s = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(c || (c = {}))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var c = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const i = {};
			t.a = Object(r.c)({
				subredditAchievements: (e = s, t) => {
					switch (t.type) {
						case o.pb:
							const {
								subredditId: n, subredditAchievementFlairs: r
							} = t.payload, s = r.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[n] || {});
							return {
								...e, [n]: s
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = i, t) => {
					var n, r, o;
					switch (t.type) {
						case d.d: {
							const {
								id: s,
								userAchievementFlairsByRedditorIds: c
							} = t.payload;
							let d = e[s] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of c) {
								const s = t.map(({
										type: e
									}) => e),
									c = (null === (n = t.find(({
										isPreferred: e
									}) => e)) || void 0 === n ? void 0 : n.type) || (null === (r = t[0]) || void 0 === r ? void 0 : r.type),
									i = null === (o = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === o ? void 0 : o.type;
								d = {
									...d,
									[e]: {
										achievementTypes: s,
										preferredType: c,
										supporterType: i
									}
								}
							}
							return {
								...e,
								[s]: d
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: r,
								achievementType: o
							} = t.payload;
							return Object(c.setIn)(e, [n, r, "pendingPreferredType"], o)
						}
						case d.g: {
							const {
								subredditId: n,
								userId: r,
								achievementType: o
							} = t.payload;
							return Object(c.updateIn)(e, [n, r], e => ({
								...e,
								preferredType: o,
								pendingPreferredType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return Object(c.setIn)(e, [n, r, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/ads/constants.ts");
			const s = [];
			var c = (e = s, t) => {
					switch (t.type) {
						case o.o:
							return t.payload;
						case o.p:
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
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
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
				f = Object(r.c)({
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
				v = n("./src/reddit/actions/comment/websocket/constants.ts");
			const g = {};

			function C(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var T = (e = g, t) => {
					switch (t.type) {
						case d.f:
						case p.w:
						case d.b: {
							const {
								comments: n,
								key: r
							} = t.payload, o = e[r] ? e[r] : [], s = function(e, t) {
								return I()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, o.find(e => e.stickied)), c = C([...o, ...s]);
							return {
								...e,
								[r]: [...c]
							}
						}
						case v.b:
						case v.c:
						case v.d:
						case p.J:
						case p.I: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: o,
									authorId: s
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...C([...e[c] ? e[c] : [], {
									id: n,
									created: r,
									stickied: o,
									authorId: s
								}])]
							}
						}
						default:
							return e
					}
				},
				E = n("./node_modules/lodash/mapValues.js"),
				_ = n.n(E),
				k = n("./src/reddit/helpers/commentList/index.ts"),
				S = n("./src/reddit/models/Comment/index.ts");
			const P = {};

			function R(e) {
				const t = e;
				return _()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = P, t) => {
				switch (t.type) {
					case p.w: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: o,
							key: s,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, i = r[c.postId], a = e[s], m = {}, u = a[c.id];
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
							const e = Object(k.c)({
									commentLink: i.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: o
								}),
								t = Object(k.c)({
									commentLink: i.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: o
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[s]: {
								...e[s],
								...R(n),
								...R(o),
								...R(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: r,
							key: o,
							moreComments: s
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o],
								...R(n),
								...R(r),
								...R(s)
							}
						}
					}
					case v.b:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: r,
							headCommentId: o
						} = t.payload, s = e[r], c = {};
						let d = null;
						return o && (c[o] = {
							...s[o],
							prev: Object(S.h)(n.id)
						}, d = Object(S.h)(o)), {
							...e,
							[r]: {
								...e[r],
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
							commentsPageKey: r,
							parentCommentId: o,
							depth: s
						} = t.payload, c = e[r], d = {};
						let i = null;
						if (!c[o]) return e;
						const a = c[o].next;
						return a && (d[a.id] = {
							...c[a.id],
							prev: Object(S.h)(n.id)
						}, i = a), d[o] = {
							...c[o],
							next: Object(S.h)(n.id)
						}, {
							...e,
							[r]: {
								...e[r],
								...d,
								[n.id]: {
									depth: s,
									next: i,
									prev: Object(S.h)(o)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var N = (e = A, t) => {
				switch (t.type) {
					case v.b:
					case v.c:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: r
						} = t.payload;
						return {
							...e,
							[r]: n.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: n,
							key: r,
							postId: o
						} = t.payload;
						return {
							...e,
							[r]: n[o] && n[o].head ? n[o].head.id : null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var K = (e = D, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case p.J: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: f,
				followed: j,
				keyToChatCommentLinks: T,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: N,
				keyToPostId: K,
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
				return g
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "H", (function() {
				return T
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "q", (function() {
				return A
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "t", (function() {
				return D
			})), n.d(t, "A", (function() {
				return K
			})), n.d(t, "J", (function() {
				return U
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "D", (function() {
				return F
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "F", (function() {
				return G
			})), n.d(t, "r", (function() {
				return J
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "K", (function() {
				return H
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "G", (function() {
				return $
			})), n.d(t, "C", (function() {
				return Y
			})), n.d(t, "I", (function() {
				return Q
			})), n.d(t, "p", (function() {
				return z
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
			var r = n("./node_modules/lodash/values.js"),
				o = n.n(r),
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
				v = [],
				g = Object(d.a)((e, t) => {
					const n = I(e, t),
						r = n && n.id;
					if (!r) return v;
					const {
						commentsPageKey: o
					} = t, s = e.pages.comments.keyToCommentThreadLinkSets[o], c = [];
					let d = {
						id: r,
						type: i.a.Comment
					};
					do {
						c.push(d), d = s[d.id].next
					} while (d);
					return c
				}),
				C = (e, t) => x(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				T = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				E = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const o = e.pages.comments.keyToCommentThreadLinkSets[r];
					return o ? n ? o[n.id] : t ? o[t] : null : null
				},
				_ = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				k = (e, t) => {
					const n = t.commentsPageKey ? E(e, t) : null;
					return n ? n.depth : null
				},
				S = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
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
				P = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(a.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== s.C).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				R = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				w = e => e.moreComments.models,
				A = e => e.features.comments.models,
				N = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
						commentId: t
					});
					return n ? Object(c.a)(Object(m.E)(e, n), t) : ""
				},
				D = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				K = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				U = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				L = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						o = Object(b.a)(e, {
							commentId: r
						}),
						s = o && k(e, {
							commentId: o.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (o && "number" == typeof s) return {
						...o,
						depth: s
					}
				},
				F = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				G = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = o()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				B = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				H = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				V = (e, {
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
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const n = Object(b.a)(e, t);
					if (n) return Object(u.X)(e, n)
				},
				Z = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
							commentId: t
						}),
						r = n && n.authorId || "";
					return Object(l.R)(e, r)
				},
				ee = (e, {
					commentId: t
				}) => {
					var n, r;
					return !!((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				te = (e, {
					commentId: t
				}) => {
					var n, r;
					const o = ((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(o && o.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.Uc
					}) === r.ed.Enabled
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.Tc
					}) === r.dd.Enabled
				}
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: s.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => t ? e.features.powerups.subredditAchievements[t] : null,
				d = (e, {
					subredditId: t,
					userId: n
				}) => {
					var r;
					return t && n ? null === (r = e.features.powerups.subredditUserAchievements[t]) || void 0 === r ? void 0 : r[n] : null
				},
				i = Object(r.a)(d, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				a = Object(r.a)([c, i], (e, t) => e && t ? e[t] : null),
				m = Object(r.a)(d, e => null == e ? void 0 : e.supporterType),
				u = Object(r.a)([c, m], (e, t) => e && t ? e[t] : null),
				l = Object(r.a)([c, d], (e, t) => {
					if (!e) return [];
					const n = t ? t.achievementTypes : [],
						r = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === r
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				})
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const r = e.features.comments.models[t];
					return !!r && ("computedCollapsed" in r ? !!r.computedCollapsed : r.collapsedBecauseCrowdControl ? !e.modModeEnabled : r.collapsed)
				},
				o = (e, {
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
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b4ca7981cfb76332a2fc.js.map