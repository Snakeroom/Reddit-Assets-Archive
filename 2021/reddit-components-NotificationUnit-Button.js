// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.135e965840a3e608e03e.js
// Retrieved at 12/6/2021, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return ae
			})), n.d(t, "s", (function() {
				return me
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "b", (function() {
				return Oe
			})), n.d(t, "p", (function() {
				return je
			})), n.d(t, "f", (function() {
				return ye
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "k", (function() {
				return Ne
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
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				v = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				P = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				R = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const _ = (e, t, n, o) => {
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
					if (s === S.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(I.a)(e, [g.a]), {
						method: r.jb.POST,
						endpoint: Object(C.a)(Object(P.a)(Object(R.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(v.a)(e)
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
						error: e.error || Object(T.a)()
					})
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var w = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				K = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				M = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				J = n("./src/reddit/models/Comment/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RichTextJson/index.ts"),
				B = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/commentSelector.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[t])
						if (Object(Y.M)(r) && e) {
							const o = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(o))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(s.a)(X.H), ne = Object(s.a)(X.J), oe = Object(s.a)(X.I), re = Object(s.a)(X.G), se = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await F.g(e, n, t, s)
				}, ce = "Toxicity_Warning__Modal", ie = (e, t, n, o, r, s) => async (c, i, {
					gqlContext: d
				}) => {
					const m = i(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await _(d(), l, o, r))) return void c(Object(a.i)(ce))
					}
					c(ae(e, t, n, o, r, s))
				}, de = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ae = (e, t, n, s, c, i, d) => async (u, p, {
					apiContext: j
				}) => {
					u(Object(a.g)(ce));
					const y = p(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(te({
						draftKey: n,
						draft: s
					}));
					const x = y.user.account.displayText,
						I = s.commentMode;
					let g;
					if (d ? (g = await Object(K.i)(j(), e, s, x), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await E(j(), e, s, x, I), g.ok) {
						let o;
						o = g.body, u(ne({
							...o,
							headCommentId: Object(q.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(Q.H)(p(), {
							postId: e
						});
						u(Object(m.z)(r, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === r.Jb && F.i(y, de(s), e);
						const t = g.error && g.error.fields && g.error.fields[0] ? g.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: g.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: H.b.Error,
							text: t
						}))
					}
					se(p(), t, c, g).then(() => g.ok && c === S.i.RICH_TEXT ? Object(L.b)(L.a.CommentComposer) : void 0), i || Object(b.d)()
				}, me = e => async (t, n, {
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
						if (!(await _(o(), b, d, m))) return void t(Object(a.i)(ce))
					}
					t(ue({
						commentsPageKey: s,
						draftKey: i,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, ue = e => async (t, n, {
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
					t(Object(a.g)(ce));
					const l = n(),
						f = l.features.comments.submit.pending[d];
					if (!l.user.account || f) return;
					t(te({
						draftKey: d,
						draft: m
					}));
					const p = l.user.account.displayText,
						O = m.commentMode,
						j = await E(o(), s, m, p, O);
					if (j.ok) t(oe({
						...j.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: d,
						depth: i + 1
					}));
					else {
						if (j.error && j.error.type === r.Jb) {
							const e = Object(V.b)(l, {
								commentId: s
							});
							if (!e) return;
							F.i(l, de(m), e.postId, s)
						}
						t(re({
							draftKey: d,
							error: j.error
						}))
					}
					se(n(), c, u, j), Object(b.d)()
				}, le = Object(s.a)(X.q), be = Object(s.a)(X.p), fe = Object(s.a)(X.l), pe = (Object(s.a)(X.g), Object(s.a)(X.m)), Oe = (Object(s.a)(X.t), (e, t, n) => async (r, s, {
					apiContext: c
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(W.G)(t)) r(pe({
						editorMode: e,
						draftKey: n,
						content: i ? W.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(A.a)(c(), e, i ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: H.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), je = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						m = Object(c.a)(G.c.replyToComment, t);
					if (!Object(Y.K)(r())) return o(Object(d.k)()), void o(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(q.m)(r(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(be({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						f = null;
					const p = s.user.prefs.commentMode,
						O = Object(M.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === S.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => B.s(e, null)).map(e => B.l([e])),
								n = B.s("", null),
								o = B.l([n]);
							f = {
								document: [B.c(t), o]
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
						}, Object(Y.M)(s)) {
						const n = le({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						o(Object(i.f)(n))
					} else o(le({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, ye = e => async t => {
					t(Object(z.p)(e)), t(ge(e))
				}, he = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(be({
						parentCommentId: e,
						commentsPageKey: t
					})), n(je({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(z.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(fe({
					draftKey: e,
					formData: t
				})), Ie = Object(s.a)(X.s), ge = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, c) => {
					const i = c();
					i.user.account && (F.d(i), s(Ie({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: G.c.edit,
							hasFocus: !0
						}
					})))
				}, Ce = Object(s.a)(X.C), Te = Object(s.a)(X.B), ke = Object(s.a)(X.D), ve = Object(s.a)(X.h), Se = ({
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
					n(Ce({
						draftKey: o
					})), F.e(d);
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
								endpoint: Object(C.a)(Object(R.a)(Object(P.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.jb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(v.a)(e)
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
								error: e.error || Object(T.a)()
							})
						})(i(), e, 0, s, a, m);
					if (u.ok) {
						const r = u.body;
						n(ke({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(z.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(Te({
						draftKey: o,
						error: u.error
					}))
				}, Pe = Object(s.a)(X.z), Re = Object(s.a)(X.y), _e = Object(s.a)(X.A), Ee = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const c = o();
					n(Pe({
						id: e
					})), F.b(e, c);
					const i = await ((e, t) => Object(h.a)(Object(I.a)(e, [g.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
						method: r.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(v.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(T.a)()
					}))(s(), e);
					i.ok ? n(_e({
						id: e,
						postId: t
					})) : n(Re({
						id: e,
						error: i.error
					}))
				}, Ne = e => async (t, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(z.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(w.o)(o(), e, r)).ok || t(Object(z.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, we = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var c, i, d, a, m, u;
					n(Object(z.c)());
					const l = e => Object(f.f)(Object(f.e)(e, H.b.Error));
					if (((null === (i = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === i ? void 0 : i.followed) || []).length === j.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === J.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(z.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.tb)(null !== (m = null === (a = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: H.b.SuccessCommunityGreen,
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
				return P
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "a", (function() {
				return $
			})), n.d(t, "b", (function() {
				return Q
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return z
			})), n.d(t, "k", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				d = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				p = n("./src/reddit/helpers/commentList/index.ts"),
				O = n("./src/reddit/helpers/trackers/comment.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				I = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				C = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				T = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				P = Object(c.a)(v.o),
				R = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(k.K)(n())) return t(Object(a.k)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(I.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const c = s.isSaved ? f.m : f.i;
					if (t(P({
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
						t(Object(l.f)({
							text: n,
							kind: h.b.Undo,
							buttonText: o,
							buttonAction: R(e)
						}))
					} else t(P({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, _ = e => `viewing-comment-${e}`, E = o.a.telemetry.commentConsumedThreshold, N = e => async (t, n) => {
					const r = n();
					if (!Object(g.b)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					O.c({
						state: r,
						commentId: e
					}), s.c.start(_(e));
					const c = setTimeout(() => O.a({
						state: r,
						commentId: e
					}), E);
					S[e] = c
				}, w = (e, t) => async (n, o) => {
					const r = o(),
						c = _(e);
					if (Object(g.b)(r, {
							commentId: e
						}) && s.c.has(c)) {
						const n = s.c.end(c);
						!t && n < E && (clearTimeout(S[e]), delete S[e])
					}
				}, A = Object(c.a)(v.x), K = Object(c.a)(v.w), D = Object(c.a)(v.v), L = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						c = s.moreComments.models[t],
						a = s.platform.currentPage,
						m = a && a.routeMatch,
						u = m && m.match,
						{
							partialPostId: l
						} = u ? u.params : null;
					if (!l) return;
					const b = Object(y.t)(l);
					n(A({
						moreCommentsId: c.id
					}));
					const O = await Object(f.f)(r(), b, {
						token: c.token
					}, Object(C.a)(s));
					if (O.ok) {
						const t = O.body,
							o = Object(p.a)(t, b, s);
						n(K({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[b];
						let a;
						r && "subreddit" === r.belongsTo.type && t.comments && (a = r.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = O.body.comments;
						await n(Object(d.b)(a, m))
					} else n(D({
						moreCommentsItem: c,
						...O.error
					}))
				}, M = Object(b.a)(p.b, x.a.upvoted), U = Object(b.a)(p.b, x.a.downvoted), F = Object(c.a)(v.j), J = Object(c.a)(v.i), G = Object(c.a)(v.e), W = Object(c.a)(v.f), B = (Object(c.a)(v.c), Object(c.a)(v.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						c = Object(j.i)(e),
						i = Object(I.n)(s, {
							commentLink: c,
							commentsPageKey: t
						}),
						d = Object(T.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						a = i.depth;
					o(G({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== a || n(e, !0), Object(u.d)()
				}), H = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(W({
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
						i = Object(p.e)(t, e, n, c),
						d = Object(T.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(G({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === n && o(i, !0), Object(u.d)()
				}, V = Object(c.a)(v.r), $ = e => t => t(V({
					draftKey: e
				})), Q = Object(c.a)(v.a), Y = Object(c.a)(v.E), z = Object(c.a)(v.b), X = Object(c.a)(v.u)
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
					const y = t === a.i.MARKDOWN,
						h = t === a.i.RICH_TEXT,
						x = l.k;
					if (y && Object(m.G)(n)) return r(p({
						editorKey: e,
						editorMode: a.i.MARKDOWN,
						content: ""
					})), void r(j(t));
					if (h && !n) return r(p({
						editorKey: e,
						editorMode: a.i.RICH_TEXT,
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
					})), Object(i.qb)(r + 1)
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
				return s.a.createElement(a.t, {
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
				var t, n, r, j, y, I, g, C, T;
				const k = Object(c.d)(),
					{
						context: v,
						deeplinkUrl: S,
						isFullWidth: P,
						isUnread: R,
						isInboxCTAsAllEnabled: _,
						isInboxCTAsReplyEnabled: E,
						isInboxCTAsSeePostEnabled: N,
						isNightMode: w,
						notificationId: A,
						onEvent: K
					} = e,
					D = null == v ? void 0 : v.messageType,
					L = null === (t = null == v ? void 0 : v.post) || void 0 === t ? void 0 : t.permalink,
					M = D === O.a.PostReply ? A : null === (n = null == v ? void 0 : v.comment) || void 0 === n ? void 0 : n.id,
					U = (null === (r = null == v ? void 0 : v.post) || void 0 === r ? void 0 : r.id) || (null === (y = null === (j = null == v ? void 0 : v.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === y ? void 0 : y.id),
					F = null === (g = null === (I = null == v ? void 0 : v.awarding) || void 0 === I ? void 0 : I.award) || void 0 === g ? void 0 : g.id,
					J = null === (T = null === (C = null == v ? void 0 : v.awarding) || void 0 === C ? void 0 : C.awarder) || void 0 === T ? void 0 : T.id;
				return (() => {
					switch (D) {
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							if (!N && !_) return null;
							const e = e => {
								L ? K({
									position: f.c.SECOND
								}) : (e.preventDefault(), k(Object(m.f)(x)))
							};
							return s.a.createElement(l.t, {
								onClick: e,
								isFullWidth: P,
								priority: l.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: R,
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
							if (!E && !_) return null;
							const e = e => {
								if (U && M) {
									const e = Object(d.a)(U, M, Object(b.c)(S)),
										t = {
											parentCommentId: M,
											commentsPageKey: e
										};
									k(Object(a.g)(t)), K({
										position: f.c.SECOND
									})
								} else e.preventDefault(), k(Object(m.f)(x))
							};
							return s.a.createElement(l.t, {
								onClick: e,
								isFullWidth: P,
								priority: l.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: R,
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
							if (!J) return null;
							const e = e => {
								e.preventDefault(), F && (J ? K({
									position: f.c.SECOND,
									awardId: F
								}) : k(Object(m.f)(x)))
							};
							return s.a.createElement(u.b, {
								userId: J,
								contextId: J,
								onClick: e,
								isFullWidth: P,
								priority: l.c.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: R,
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
			n.d(t, "i", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return R
			}));
			var o = n("./src/config.ts"),
				r = n("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				s = n("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = n("./src/redditGQL/types.ts"),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				b = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				f = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				p = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const O = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/save`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unsave`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/lock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unlock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/approve`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/remove`),
					method: i.jb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				g = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				T = (e, t) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				k = (e, t, n, r) => {
					let s = Object(l.a)(Object(p.a)(Object(f.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return r && (s = Object(b.a)(s)), Object(d.a)(e, {
						data: n,
						endpoint: s,
						method: i.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, n, o) => Object(d.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: i.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				S = {
					[i.G.NONE]: c.d.None,
					[i.G.MODERATOR]: c.d.ModDistinguished,
					[i.G.ADMIN]: c.d.AdminDistinguished,
					[i.G.ALUMNI_ADMIN]: c.d.AlumniDistinguished
				};

			function P(e, t, n) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === i.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: S[t]
						}
					}
				}(t, n);
				return Object(a.a)(e, {
					...r,
					variables: o
				})
			}

			function R(e, t, n) {
				return Object(a.a)(e, {
					...s,
					variables: {
						input: {
							commentId: t,
							sticky: n
						}
					}
				})
			}
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
					method: o.jb.POST,
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
								experimentName: s.F,
								expEventOverride: t
							});
							return !!(Object(s.Cf)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.I.SERVER_ERROR,
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
							case o.I.NO_STRIPE_SUBSCRIPTION:
							case o.I.USER_DOESNT_EXIST:
							case o.I.USER_REQUIRED_ERROR:
							case o.I.VALIDATION_ERROR:
								return e;
							case o.I.NO_USER:
							case o.I.NO_TEXT:
							case o.I.NO_URL:
								return o.I.VALIDATION_ERROR;
							case o.I.CREDIT_CARD_FAILURE:
							case o.I.CREDIT_CARD_FAILURE_GENERIC:
								return o.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.I.VALIDATION_ERROR
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
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
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "h", (function() {
				return h
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const m = "comment_composer",
				u = e => {
					const t = Object(i.o)(e);
					return {
						source: m,
						action: o.c.CLICK,
						...Object(d.defaults)(e),
						screen: Object(d.screen)(e),
						subreddit: Object(d.subreddit)(e),
						post: t ? Object(d.post)(e, t) : null,
						profile: Object(d.profile)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				l = async (e, t, o, r) => {
					const s = {
							commentId: r,
							commentsPageKey: o
						},
						i = r && Object(c.j)(e, s) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(a.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(d.comment)(e, r) : null,
						listing: Object(d.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, b = (e, t, n, o) => {
					const r = u(e);
					return Object(a.a)({
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
				}, f = e => Object(a.a)({
					noun: "cancel",
					...u(e)
				}), p = (e, t) => {
					t === s.c.replyToPost && Object(a.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(a.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.defaults)(t),
					screen: Object(d.screen)(t),
					subreddit: Object(d.subreddit)(t),
					post: Object(d.post)(t, e)
				}), j = e => Object(a.a)({
					noun: "edit",
					...u(e)
				}), y = e => Object(a.a)({
					noun: "save_edit",
					...u(e)
				}), h = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
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
					case i.i: {
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
			};
			const l = {};
			var b = (e = l, t) => {
					switch (t.type) {
						case i.d:
						case i.h:
						case i.i: {
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

			function T(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var k = (e = C, t) => {
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
							}(n, r.find(e => e.stickied)), c = T([...r, ...s]);
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
								[c]: [...T([...e[c] ? e[c] : [], {
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
				v = n("./node_modules/lodash/mapValues.js"),
				S = n.n(v),
				P = n("./src/reddit/helpers/commentList/index.ts"),
				R = n("./src/reddit/models/Comment/index.ts");
			const _ = {};

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
			var N = (e = _, t) => {
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
							const e = Object(P.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(P.c)({
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
								...E(n),
								...E(r),
								...E(i),
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
						let i = null;
						return r && (c[r] = {
							...s[r],
							prev: Object(R.i)(n.id)
						}, i = Object(R.i)(r)), {
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
							prev: Object(R.i)(n.id)
						}, d = a), i[r] = {
							...c[r],
							next: Object(R.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...i,
								[n.id]: {
									depth: s,
									next: d,
									prev: Object(R.i)(r)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const w = {};
			var A = (e = w, t) => {
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
					case i.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
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
				followed: j,
				keyToChatCommentLinks: k,
				keyToCommentThreadLinkSets: N,
				keyToHeadCommentId: A,
				keyToPostId: D,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "G", (function() {
				return g
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "I", (function() {
				return A
			})), n.d(t, "s", (function() {
				return K
			})), n.d(t, "C", (function() {
				return D
			})), n.d(t, "D", (function() {
				return L
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "J", (function() {
				return G
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "F", (function() {
				return H
			})), n.d(t, "B", (function() {
				return q
			})), n.d(t, "H", (function() {
				return V
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "K", (function() {
				return Q
			})), n.d(t, "y", (function() {
				return Y
			})), n.d(t, "A", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				r = n.n(o),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				u = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/comments/index.ts"),
				b = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(u.a)({
				features: {
					comments: l.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				p = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				j = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				y = (e, t) => {
					const n = j(e, t);
					if (n) return Object(m.b)(e, {
						commentId: n
					})
				},
				h = [],
				x = Object(c.a)((e, t) => {
					const n = y(e, t),
						o = n && n.id;
					if (!o) return h;
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
				I = (e, t) => j(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				g = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				C = (e, {
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
					const n = t.commentsPageKey ? C(e, t) : null;
					return n ? n.depth : null
				},
				v = (e, {
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
				S = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== s.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				R = e => e.moreComments.models,
				_ = e => e.features.comments.models,
				E = (e, {
					commentId: t
				}) => {
					const n = Object(m.b)(e, {
						commentId: t
					});
					return n ? Object(m.a)(e, n) : ""
				},
				N = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				w = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				A = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				K = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						r = Object(m.b)(e, {
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
				D = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				L = (e, {
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
				U = (e, {
					id: t
				}) => e.continueThreads.models[t],
				F = (e, {
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
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				W = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				B = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				V = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				$ = e => e.features.comments.visitHighlightFilter,
				Q = (e, t) => {
					const n = Object(m.b)(e, t);
					if (n) return Object(a.U)(e, n)
				},
				Y = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				z = (e, {
					commentId: t
				}) => {
					var n, o;
					const r = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
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
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.135e965840a3e608e03e.js.map