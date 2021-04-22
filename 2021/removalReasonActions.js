// https://www.redditstatic.com/desktop2x/removalReasonActions.6ed2785ffbbfda290611.js
// Retrieved at 4/22/2021, 3:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(t)
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(s.a)(r.c),
				c = Object(s.a)(r.b),
				d = Object(s.a)(r.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return z
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "m", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return te
			})), n.d(t, "s", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return re
			})), n.d(t, "r", (function() {
				return oe
			})), n.d(t, "l", (function() {
				return ce
			})), n.d(t, "a", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return ue
			})), n.d(t, "p", (function() {
				return le
			})), n.d(t, "f", (function() {
				return be
			})), n.d(t, "g", (function() {
				return pe
			})), n.d(t, "j", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return je
			})), n.d(t, "c", (function() {
				return Se
			})), n.d(t, "i", (function() {
				return ge
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "k", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				d = n("./src/reddit/actions/changeUsername.ts"),
				a = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/graphql/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				R = n("./src/lib/omitHeaders/index.ts"),
				S = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/helpers/genericServerError/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				E = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, n, s) => {
					let r, o;
					if (s === E.h.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				A = async (e, t, n, s, o) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (o === E.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(R.a)(e, [S.a]), {
						method: r.cb.POST,
						endpoint: Object(g.a)(Object(C.a)(Object(v.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {
							comment: Object(I.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(I.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(x.a)()
					})
				};
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				T = n("./src/reddit/endpoints/post/convert.ts"),
				L = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				N = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				M = n("./src/reddit/models/PostDraft/index.ts"),
				w = n("./src/reddit/models/RichTextJson/index.ts"),
				U = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				F = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				B = n("./src/reddit/selectors/commentSelector.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/comment/constants.ts");
			const W = Object(o.a)(H.j),
				z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const r = s();
					if (!!r.features.comments.drafts[t])
						if (Object(G.L)(r) && e) {
							const s = W({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(s))
						} else n(W({
							hasFocus: e,
							draftKey: t
						}))
				}, X = Object(o.a)(H.E), Q = Object(o.a)(H.G), Y = Object(o.a)(H.F), Z = Object(o.a)(H.D), ee = (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					N.f(e, n, t, o)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, s, r, o) => async (c, d, {
					gqlContext: a
				}) => {
					const m = d(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await k(a(), l, s, r))) return void c(Object(i.i)(te))
					}
					c(re(e, t, n, s, r, o))
				}, se = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, re = (e, t, n, o, c, d, a) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(te));
					const y = f(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(X({
						draftKey: n,
						draft: o
					}));
					const R = y.user.account.displayText,
						S = o.commentMode;
					let g;
					if (a ? (g = await Object(L.i)(j(), e, o, R), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await A(j(), e, o, R, S), g.ok) {
						let s;
						s = g.body, u(Q({
							...s,
							headCommentId: Object(V.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(J.D)(f(), {
							postId: e
						});
						u(Object(m.u)(r, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === r.Bb && N.g(y, se(o), e);
						const t = g.error && g.error.fields && g.error.fields[0] ? g.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(Z({
							draftKey: n,
							error: g.error
						})), u(Object(p.f)({
							duration: p.a,
							kind: F.b.Error,
							text: t
						}))
					}
					ee(f(), t, c, g), d || Object(b.d)()
				}, oe = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: o,
						parentCommentDepth: c,
						draftKey: d,
						formData: a,
						editorMode: m
					} = e, u = n(), l = Object($.e)(u);
					let b = "";
					if (l && (b = l.name), D.d.enableToxicityWarning(u)) {
						if (!(await k(s(), b, a, m))) return void t(Object(i.i)(te))
					}
					t(ce({
						commentsPageKey: o,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: a,
						editorMode: m
					}))
				}, ce = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: c,
						parentCommentDepth: d,
						draftKey: a,
						formData: m,
						editorMode: u
					} = e;
					t(Object(i.g)(te));
					const l = n(),
						p = l.features.comments.submit.pending[a];
					if (!l.user.account || p) return;
					t(X({
						draftKey: a,
						draft: m
					}));
					const f = l.user.account.displayText,
						O = m.commentMode,
						j = await A(s(), o, m, f, O);
					if (j.ok) t(Y({
						...j.body,
						parentCommentId: o,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === r.Bb) {
							const e = Object(B.a)(l, {
								commentId: o
							});
							if (!e) return;
							N.g(l, se(m), e.postId, o)
						}
						t(Z({
							draftKey: a,
							error: j.error
						}))
					}
					ee(n(), c, u, j), Object(b.d)()
				}, de = Object(o.a)(H.p), ae = Object(o.a)(H.o), ie = Object(o.a)(H.k), me = (Object(o.a)(H.f), Object(o.a)(H.l)), ue = (Object(o.a)(H.s), (e, t, n) => async (r, o, {
					apiContext: c
				}) => {
					const d = e === E.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(w.G)(t)) r(me({
						editorMode: e,
						draftKey: n,
						content: d ? w.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const o = await Object(T.a)(c(), e, d ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(u.a)(n)), r(me({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(p.f)({
							duration: p.a,
							kind: F.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), le = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, r) => {
					const o = r(),
						m = Object(c.a)(M.c.replyToComment, t);
					if (!Object(G.J)(r())) return s(Object(a.j)()), void s(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(V.m)(r(), {
							commentId: t
						})
					}));
					const u = o.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && s(ae({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						p = null;
					const f = o.user.prefs.commentMode,
						O = Object(K.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === E.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => U.s(e, null)).map(e => U.l([e])),
								n = U.s("", null),
								s = U.l([n]);
							p = {
								document: [U.c(t), s]
							}
						}
					}
					const j = o.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: f,
							draftType: M.c.replyToComment,
							rtJson: p,
							text: `${b}\n`
						} : j || {
							commentMode: f,
							draftType: M.c.replyToComment,
							rtJson: p,
							text: ""
						}, Object(G.L)(o)) {
						const n = de({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						s(Object(d.f)(n))
					} else s(de({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, be = e => async t => {
					t(Object(q.m)(e)), t(je(e))
				}, pe = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(ae({
						parentCommentId: e,
						commentsPageKey: t
					})), n(le({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(q.m)({
						commentId: e,
						commentsPageKey: t
					}))
				}, fe = (e, t) => n => n(ie({
					draftKey: e,
					formData: t
				})), Oe = Object(o.a)(H.r), je = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: r
				}) => async (o, c) => {
					const d = c();
					d.user.account && (N.c(d), o(Oe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: M.c.edit,
							hasFocus: !0
						}
					})))
				}, ye = Object(o.a)(H.A), he = Object(o.a)(H.z), Re = Object(o.a)(H.B), Se = Object(o.a)(H.g), ge = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: o
				}) => async (n, c, {
					apiContext: d
				}) => {
					const a = c();
					if (!a.user.account) return;
					n(ye({
						draftKey: s
					})), N.d(a);
					const i = a.user.account.displayText || "",
						m = o.commentMode,
						u = await (async (e, t, n, s, o, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === E.h.MARKDOWN) d.text = s.text;
							else {
								d.text = null;
								let e = null;
								s.rteState && (e = f.a.toRichTextJSON(s.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(y.a)(Object(R.a)(e, [S.a]), {
								endpoint: Object(g.a)(Object(v.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.cb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(_.a)(e)
							} : {
								...e,
								body: {
									comment: Object(I.a)(e.body.json.data.things[0].data, o)
								}
							} : {
								...e,
								body: {
									comment: Object(I.a)(e.body, o)
								}
							} : {
								...e,
								error: e.error || Object(x.a)()
							})
						})(d(), e, 0, o, i, m);
					if (u.ok) {
						const r = u.body;
						n(Re({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(q.h)({
							[e]: {
								...r.comment
							}
						}))
					} else n(he({
						draftKey: s,
						error: u.error
					}))
				}, xe = Object(o.a)(H.x), Ie = Object(o.a)(H.w), _e = Object(o.a)(H.y), Ee = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const c = s();
					n(xe({
						id: e
					})), N.a(e, c);
					const d = await ((e, t) => Object(y.a)(Object(R.a)(e, [S.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: r.cb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(x.a)()
					}))(o(), e);
					d.ok ? n(_e({
						id: e,
						postId: t
					})) : n(Ie({
						id: e,
						error: d.error
					}))
				}, Ce = e => async (t, n, {
					apiContext: s
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(q.h)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(P.q)(s(), e, r)).ok || t(Object(q.h)({
						[e]: {
							sendReplies: !r
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "l", (function() {
				return J
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "c", (function() {
				return q
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/presence.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				f = n("./src/reddit/helpers/commentList/index.ts"),
				O = n("./src/reddit/helpers/trackers/comment.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = n("./src/reddit/selectors/moderatingComments.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/comment/constants.ts");
			const C = {},
				v = Object(c.a)(E.n),
				k = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(_.J)(n())) return t(Object(a.j)()), void t(Object(i.k)({
						actionSource: i.a.Save,
						redirectUrl: Object(S.m)(n(), {
							commentId: e
						})
					}));
					const o = n().features.comments.models[e];
					if (!o) return;
					const c = o.isSaved ? p.k : p.g;
					if (t(v({
							[e]: {
								isSaved: !o.isSaved
							}
						})), (await c(s(), e)).ok) {
						const n = o.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(l.f)({
							text: n,
							kind: h.b.Undo,
							buttonText: s,
							buttonAction: k(e)
						}))
					} else t(v({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, A = e => `viewing-comment-${e}`, P = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const r = n();
					if (!Object(g.a)(r, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					O.c({
						state: r,
						commentId: e
					}), o.c.start(A(e));
					const c = setTimeout(() => O.a({
						state: r,
						commentId: e
					}), P);
					C[e] = c
				}, L = (e, t) => async (n, s) => {
					const r = s(),
						c = A(e);
					if (Object(g.a)(r, {
							commentId: e
						}) && o.c.has(c)) {
						const n = o.c.end(c);
						!t && n < P && (clearTimeout(C[e]), delete C[e])
					}
				}, D = Object(c.a)(E.v), K = Object(c.a)(E.u), N = Object(c.a)(E.t), M = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.moreComments.models[t],
						a = o.platform.currentPage,
						i = a && a.routeMatch,
						u = i && i.match,
						{
							partialPostId: l
						} = u ? u.params : null;
					if (!l) return;
					const b = Object(y.r)(l);
					n(D({
						moreCommentsId: c.id
					}));
					const O = await Object(p.e)(r(), b, {
						token: c.token
					}, Object(x.a)(o));
					if (O.ok) {
						const t = O.body,
							s = Object(f.a)(t, b, o);
						n(K({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const r = o.posts.models[b];
						let a;
						r && "subreddit" === r.belongsTo.type && t.comments && (a = r.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const i = O.body.comments,
							u = O.body.posts;
						await n(Object(m.b)(u, i, a))
					} else n(N({
						moreCommentsItem: c,
						...O.error
					}))
				}, w = Object(b.a)(f.b, R.a.upvoted), U = Object(b.a)(f.b, R.a.downvoted), F = Object(c.a)(E.i), V = Object(c.a)(E.h), B = Object(c.a)(E.d), $ = Object(c.a)(E.e), J = (Object(c.a)(E.b), Object(c.a)(E.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const o = r(),
						c = Object(j.g)(e),
						d = Object(S.n)(o, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(I.b)(o, {
							commentId: e,
							commentsPageKey: t
						}),
						i = d.depth;
					s(B({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: a
					})), a || 0 !== i || n(e, !0), Object(u.d)()
				}), G = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n($({
						commentId: e,
						commentsPageKey: t
					}))
				}, q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (r, o) => {
					const c = o(),
						d = Object(f.e)(t, e, n, c),
						a = Object(I.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(B({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: a
					})), 0 === n && s(d, !0), Object(u.d)()
				}, H = Object(c.a)(E.q), W = e => t => t(H({
					draftKey: e
				})), z = Object(c.a)(E.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return R
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = n("./src/reddit/models/Reportable/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/index.ts"),
				y = n("./src/reddit/actions/comment/constants.ts");
			const h = Object(o.a)(y.m),
				R = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(u.h)(s(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(O.J)(n())) return void t(Object(d.i)(m.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.isLocked ? u.j : u.d;
					t(Object(j.h)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await o(s(), e)).ok || t(Object(j.h)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, g = Object(o.a)(y.C), x = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					o && c && (t(Object(j.h)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(s(), e)).ok || t(Object(j.h)({
						[e]: {
							isApproved: o.isApproved,
							approvedBy: null,
							bannedBy: o.bannedBy,
							isRemoved: o.isRemoved,
							isSpam: o.isSpam,
							modNote: o.modNote,
							modReasonBy: o.modReasonBy,
							modRemovalReason: o.modRemovalReason,
							numReports: o.numReports || null
						}
					})), Object(a.d)())
				}, I = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.features.comments.models[e],
						d = o.user.account ? o.user.account.displayText : null;
					c && d && (n(Object(j.h)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.f)(r(), e, t)).ok || n(Object(j.h)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(a.d)())
				}, _ = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.ignoreReports ? u.i : u.c;
					t(Object(j.h)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await o(s(), e)).ok || t(Object(j.h)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, E = (e, t, n) => async (o, c, {
					gqlContext: d
				}) => {
					const a = Object(f.a)(c(), {
						commentId: e
					});
					if (!a) return;
					const m = n === r.Sb.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(d(), {
							input: u
						})).ok) o(Object(j.h)({
						[e]: {
							userReports: Object(b.a)(a.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						o(Object(i.f)(e))
					}
				}, C = (e, t, n) => async (s, o, {
					apiContext: d
				}) => {
					const a = o(),
						i = a.features.comments.models[e];
					if (!i) return;
					const m = i.postId,
						l = a.postStickiedComments.data[m],
						b = r.g[t];
					s(Object(j.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.C.ADMIN,
							isMod: t === r.C.MODERATOR,
							isStickied: !!n
						}
					})), n && l && l !== e && s(Object(j.h)({
						[l]: {
							isStickied: !1
						}
					})), (await Object(u.b)(d(), e, b, n || null)).ok ? n && s(g({
						id: e,
						postId: m,
						commentsPageKey: Object(c.a)(m, null, {
							sort: r.r.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (s(Object(j.h)({
						[e]: {
							distinguishType: i.distinguishType,
							isAdmin: i.isAdmin,
							isMod: i.isMod,
							isStickied: i.isStickied
						}
					})), s(Object(j.h)({
						[l]: {
							isStickied: a.features.comments.models[l].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(l.C),
				p = Object(r.a)(l.p),
				f = Object(r.a)(l.M),
				O = (e, t, n) => async (r, d, {
					apiContext: O
				}) => {
					a.i(d(), t);
					const y = t === i.h.MARKDOWN,
						h = t === i.h.RICH_TEXT,
						R = l.k;
					if (y && Object(m.G)(n)) return r(f({
						editorKey: e,
						editorMode: i.h.MARKDOWN,
						content: ""
					})), void r(j(t));
					if (h && !n) return r(f({
						editorKey: e,
						editorMode: i.h.RICH_TEXT,
						content: m.i
					})), void r(j(t));
					r(b(R));
					const S = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					S.ok ? (r(p(R)), r(f({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), r(j(t))) : (r(p(R)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const r = Object(d.m)();
					if (r >= 3) return;
					const c = n().user.prefs.useMarkdown ? i.h.MARKDOWN : i.h.RICH_TEXT;
					if (e === c) return;
					const a = e === i.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(o.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(d.gb)(r + 1)
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var i = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(s.a)(m),
				l = (e, t, n) => async (s, m, {
					apiContext: l
				}) => {
					const b = m();
					if (!Object(i.a)(b)) return;
					const p = new Set;
					e && Object.values(e).map(e => {
						e.authorId && p.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && p.add(e.authorId)
					});
					const f = await (async (e, t, n) => Object(o.a)(Object(c.a)(e, [d.a]), {
						endpoint: Object(a.a)(`${e.apiUrl}/api/presence`),
						method: r.cb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							s = new Set(n),
							r = {};
						return t.forEach(e => {
							r[e] = s.has(e)
						}), {
							presentUsers: r
						}
					}))(l(), Array.from(p), n);
					s(u(f))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(s.a)(o.r),
				d = Object(s.a)(o.F),
				a = e => async (t, n, {
					apiContext: s
				}) => {
					const o = await Object(r.a)(s(), e);
					o && o.ok ? t(c({
						streamId: e,
						level: o.body.data.auto_mute_status.level
					})) : t(d(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Q
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), n.d(t, "removalReasonsFailed", (function() {
				return Z
			})), n.d(t, "removalReasonsRequested", (function() {
				return ee
			})), n.d(t, "removalReasonAddedPending", (function() {
				return te
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return oe
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), n.d(t, "editRemovalReason", (function() {
				return ae
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return le
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return pe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ye
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return he
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Re
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), n.d(t, "submitRemovalReason", (function() {
				return ge
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return xe
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				a = "REMOVALREASONS__ADD_FAILED",
				i = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				l = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				p = "REMOVALREASONS__DELETE_FAILED";
			var f = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case c:
					case d:
					case i:
					case m:
					case l:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case a:
					case u:
					case p:
						return t.payload;
					default:
						return e
				}
			};
			var O = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case c:
						case i:
						case l:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case a:
						case m:
						case u:
						case b:
						case p:
							return !1;
						default:
							return e
					}
				},
				j = Object(o.c)({
					error: f,
					pending: O
				});
			const y = {};
			var h = (e = y, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case d:
					case m: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case b: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const R = {};
			var S = (e = R, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: r
						} = s;
						return {
							...e,
							[n]: r
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, r = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var g = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				x = Object(o.c)({
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: g
				}),
				I = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/lib/makeCommentsPageKey/index.ts"),
				C = n("./src/lib/makeDraftKey/index.ts"),
				v = n("./src/reddit/actions/bulkActions/index.ts"),
				k = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				L = n("./src/reddit/actions/post.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				K = n("./src/reddit/constants/modals.ts"),
				N = n("./src/lib/makeApiRequest/index.ts"),
				M = n("./src/lib/omitHeaders/index.ts"),
				w = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(N.a)(Object(M.a)(e, [w.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: I.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: I.cb.POST,
					type: "json",
					data: t
				});
			var B = n("./src/reddit/helpers/isPost.ts"),
				$ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				H = n("./src/reddit/models/RemovalReason/index.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: x
				}
			});
			const Q = Object(_.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(_.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(_.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().subreddits.models[e].name;
					t(Q());
					const o = await ((e, t) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: I.cb.GET
					}))(s(), r);
					o.ok ? t(Y({
						subredditId: e,
						response: o.body
					})) : t(Z(o.error))
				}, te = Object(_.a)(c), ne = Object(_.a)(d), se = Object(_.a)(a), re = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: I.cb.POST,
						data: n
					}))(o(), c, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, o = {
							...t,
							id: r
						};
						n(ne({
							subredditId: e,
							reason: o
						})), n(Object(D.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(d.error))
				}, oe = Object(_.a)(i), ce = Object(_.a)(m), de = Object(_.a)(u), ae = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(oe());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: I.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(o(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(D.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ie = Object(_.a)(l), me = Object(_.a)(b), ue = Object(_.a)(p), le = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: I.cb.DELETE
					}))(o(), c, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(D.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(_.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(K.a.ADD_REMOVAL_REASON))
				}, fe = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Re = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, n, s, r) => async (o, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? H.e.Post : H.e.Comment,
						l = u === H.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === H.e.Post ? L.L : k.h;
					if (!l || !i) return !1;
					o(fe()), o(b({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						f = await F(d(), p);
					if (f.ok) {
						if (o(Oe()), t) {
							o(ye());
							const r = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								c = await V(d(), Object(H.h)(r, u), u);
							if (c.ok) {
								if (s === H.f.Public) {
									if (o(Re()), c.body) {
										const e = Object($.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(a),
											s = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let r = n && s && Object(J.a)(s, a, a.posts.models[e.postId]);
										if (r || (r = Object(E.a)(e.postId, null, {
												sort: I.s,
												hasSortParam: !0
											})), u === H.e.Post) {
											const n = Object(C.a)(q.c.replyToPost, m);
											o(Object(A.o)({
												...t,
												headCommentId: Object(z.w)(a, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: n
											}));
											const s = a.postStickiedComments.data[m];
											o(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && o(Object(k.h)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === H.e.Comment) {
											const e = Object(C.a)(q.c.replyToComment, l.id),
												n = Object(z.j)(a, {
													commentId: m,
													commentsPageKey: r
												});
											o(Object(A.m)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else o(he());
								return !0
							}
							return o(Se(c.error)), !1
						}
					} else o(je(f.error)), o(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, xe = (e, t, n, r, o) => async (c, d, {
					apiContext: a
				}) => {
					const i = d(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(D.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						l = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await F(a(), l);
					if (b.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (c(Object(v.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: r
								},
								o = await V(a(), Object(H.h)(s, H.e.Bulk), H.e.Bulk);
							o.ok ? (c(he()), c(u)) : c(Se(o.error))
						} else c(u)
					} else c(je(b.error))
				}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return l
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/save`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unsave`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/lock`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unlock`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/approve`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/remove`),
					method: r.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n, c) => {
					let d = Object(u.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return c && (d = Object(i.a)(d)), Object(o.a)(e, {
						data: n,
						endpoint: d,
						method: r.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, s) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.cb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const i = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === a.h.MARKDOWN ? i.richtext_json = n : i.markdown_text = n, Object(r.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.cb.POST,
					data: i
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				a = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				i = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, s) => {
					let o = Object(r.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; o && o.depth > n && o.prev && (c = o.prev, (o = Object(r.n)(s, {
							commentLink: c,
							commentsPageKey: e
						})) && !(o.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: r
					} = e, {
						head: d
					} = s[t];
					if (d) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.rd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.E.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
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
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
				},
				o = e => {
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
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
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
				}) => Object(s.a)({
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
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = Object(o.subreddit)(e);
				if (!t || !t.id) return;
				const n = Object(c.c)(e, {
					subredditId: t.id
				});
				if (!(null == n ? void 0 : n.displaySettings.isUserEnabled) || !(null == n ? void 0 : n.applied)) return {
					isActive: !1
				};
				const s = Object(r.g)(n.applied);
				return s ? {
					isActive: !0,
					title: s
				} : {
					isActive: !1
				}
			}
			var a = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				m = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(m.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(o.defaults)(e),
						screen: Object(o.screen)(e),
						subreddit: Object(o.subreddit)(e),
						post: t ? Object(o.post)(e, t) : null,
						profile: Object(o.profile)(e)
					}
				},
				b = (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						c = s && Object(i.j)(e, r) || 0;
					return Object(u.a)({
						noun: "comment",
						...l(e),
						comment: s ? Object(o.comment)(e, s) : null,
						listing: Object(o.listing)(e, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: d(e)
					})
				},
				p = (e, t, n, s) => {
					const r = l(e);
					return Object(u.a)({
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
							parentId: s,
							postId: n
						}
					})
				},
				f = e => Object(u.a)({
					noun: "cancel",
					...l(e)
				}),
				O = (e, t) => {
					t === a.c.replyToPost && Object(u.a)({
						noun: "input",
						...l(e)
					})
				},
				j = (e, t) => Object(u.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(o.defaults)(t),
					screen: Object(o.screen)(t),
					subreddit: Object(o.subreddit)(t),
					post: Object(o.post)(t, e)
				}),
				y = e => Object(u.a)({
					noun: "edit",
					...l(e)
				}),
				h = e => Object(u.a)({
					noun: "save_edit",
					...l(e)
				})
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const r = 20,
				o = 50,
				c = 1e4,
				d = 100;
			var a, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(a || (a = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const m = e => 1 === e.length ? Object(s.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				u = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var c = (e = o, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/pages/constants.ts");
			const a = {};
			var i = (e = a, t) => {
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
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
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
				p = Object(s.c)({
					error: i,
					fullyLoaded: u,
					pending: b
				}),
				f = n("./node_modules/lodash/uniqBy.js"),
				O = n.n(f),
				j = n("./node_modules/lodash/values.js"),
				y = n.n(j),
				h = n("./src/reddit/actions/comment/constants.ts"),
				R = n("./src/reddit/actions/comment/websocket/constants.ts");
			const S = {};

			function g(e) {
				return O()(e, "id").sort((e, t) => e.created - t.created)
			}
			var x = (e = S, t) => {
					switch (t.type) {
						case d.f:
						case h.u:
						case d.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], o = function(e, t) {
								return y()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), c = g([...r, ...o]);
							return {
								...e,
								[s]: [...c]
							}
						}
						case R.b:
						case R.c:
						case R.d:
						case h.G:
						case h.F: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: o
								},
								commentsPageKey: c,
								isChatSort: d
							} = t.payload;
							return !1 === d ? e : {
								...e,
								[c]: [...g([...e[c] ? e[c] : [], {
									id: n,
									created: s,
									stickied: r,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				I = n("./node_modules/lodash/mapValues.js"),
				_ = n.n(I),
				E = n("./src/reddit/helpers/commentList/index.ts"),
				C = n("./src/reddit/models/Comment/index.ts");
			const v = {};

			function k(e) {
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
			var A = (e = v, t) => {
				switch (t.type) {
					case h.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: o,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, a = s[c.postId], i = e[o], m = {}, u = i[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...i[e],
								next: a.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...i[e],
								prev: a.tail || u.prev
							}
						}
						if (a.head && a.tail) {
							const e = Object(E.c)({
									commentLink: a.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: r
								}),
								t = Object(E.c)({
									commentLink: a.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...k(n),
								...k(r),
								...k(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...k(n),
								...k(s),
								...k(o)
							}
						}
					}
					case R.b:
						const {
							comment: n, commentsPageKey: s, depth: r, headCommentId: o, originId: c, isChatSort: a
						} = t.payload, i = e[s], m = {};
						let u = null;
						if (a) return o && (m[o] = {
							...i[o],
							prev: Object(C.g)(n.id)
						}, u = Object(C.g)(o)), {
							...e,
							[s]: {
								...e[s],
								...m,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = n.parentId;
							if (c && o) {
								const n = "moreComments-" + c;
								if (i[o] && !i[n]) {
									const c = i[o].next;
									return c && (m[c.id] = {
										...i[c.id],
										prev: Object(C.h)(n)
									}, u = c), m[o] = {
										...i[o],
										next: Object(C.h)(n)
									}, t = Object(C.g)(o), {
										...e,
										[s]: {
											...e[s],
											...m,
											[n]: {
												depth: r || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case h.G: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: r
							} = t.payload, o = e[s], c = {};
							let d = null;
							return r && (c[r] = {
								...o[r],
								prev: Object(C.g)(n.id)
							}, d = Object(C.g)(r)), {
								...e,
								[s]: {
									...e[s],
									...c,
									[n.id]: {
										depth: 0,
										next: d,
										prev: null
									}
								}
							}
						}
						case h.F: {
							const {
								comment: n,
								commentsPageKey: s,
								parentCommentId: r,
								depth: o
							} = t.payload, c = e[s], d = {};
							let a = null;
							if (!c[r]) return e;
							const i = c[r].next;
							return i && (d[i.id] = {
								...c[i.id],
								prev: Object(C.g)(n.id)
							}, a = i), d[r] = {
								...c[r],
								next: Object(C.g)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...d,
									[n.id]: {
										depth: o,
										next: a,
										prev: Object(C.g)(r)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const P = {};
			var T = (e = P, t) => {
				switch (t.type) {
					case R.b:
					case R.c:
					case h.G: {
						const {
							comment: n,
							commentsPageKey: s,
							isChatSort: r
						} = t.payload;
						return !1 === r ? e : {
							...e,
							[s]: n.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var D = (e = L, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case h.G: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: p,
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: A,
				keyToHeadCommentId: T,
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
				return R
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "G", (function() {
				return _
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "m", (function() {
				return D
			})), n.d(t, "t", (function() {
				return K
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "I", (function() {
				return M
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "B", (function() {
				return U
			})), n.d(t, "C", (function() {
				return F
			})), n.d(t, "E", (function() {
				return V
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "e", (function() {
				return $
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "J", (function() {
				return G
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "F", (function() {
				return W
			})), n.d(t, "A", (function() {
				return z
			})), n.d(t, "H", (function() {
				return X
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "K", (function() {
				return Y
			})), n.d(t, "D", (function() {
				return Z
			})), n.d(t, "y", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeCommentPermalink/index.ts"),
				d = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/constants/comments.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/comments/index.ts"),
				O = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(p.a)({
				features: {
					comments: f.a
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
				R = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				S = (e, t) => {
					const n = R(e, t);
					if (n) return Object(b.a)(e, {
						commentId: n
					})
				},
				g = [],
				x = Object(d.a)((e, t) => {
					const n = S(e, t),
						s = n && n.id;
					if (!s) return g;
					const {
						commentsPageKey: r
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[r], c = [];
					let d = {
						id: s,
						type: a.a.Comment
					};
					do {
						c.push(d), d = o[d.id].next
					} while (d);
					return c
				}),
				I = (e, t) => R(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				_ = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				E = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				v = (e, t) => {
					const n = t.commentsPageKey ? E(e, t) : null;
					return n ? n.depth : null
				},
				k = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case a.a.Comment:
							return e.features.comments.models[n];
						case a.a.MoreComments:
							return e.moreComments.models[n];
						case a.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				A = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(i.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				T = e => e.moreComments.models,
				L = e => e.features.comments.models,
				D = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
						commentId: t
					});
					return n ? Object(c.a)(Object(m.C)(e, n), t) : ""
				},
				K = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				M = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				w = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(b.a)(e, {
							commentId: s
						}),
						o = r && v(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof o) return {
						...r,
						depth: o
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				F = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				V = (e, {
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
				B = (e, {
					id: t
				}) => e.continueThreads.models[t],
				$ = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
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
				q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				H = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				W = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const n = Object(b.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				Z = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(l.R)(e, s)
				}
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.vc
					}) === s.Fc.Enabled
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.uc
					}) === s.Ec.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.6ed2785ffbbfda290611.js.map