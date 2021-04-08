// https://www.redditstatic.com/desktop2x/removalReasonActions.e1d9ca51b4a57c05c2a3.js
// Retrieved at 4/8/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
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
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				c = Object(s.a)(o.b),
				d = Object(s.a)(o.a)
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
				return oe
			})), n.d(t, "r", (function() {
				return re
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, n, s) => {
					let o, r;
					if (s === E.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				A = async (e, t, n, s, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === E.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(R.a)(e, [S.a]), {
						method: o.cb.POST,
						endpoint: Object(g.a)(Object(C.a)(Object(k.a)(`${e.apiUrl}/api/comment.json`))),
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
			const W = Object(r.a)(H.j),
				z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(G.L)(o) && e) {
							const s = W({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(s))
						} else n(W({
							hasFocus: e,
							draftKey: t
						}))
				}, X = Object(r.a)(H.E), Q = Object(r.a)(H.G), Y = Object(r.a)(H.F), Z = Object(r.a)(H.D), ee = (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					N.f(e, n, t, r)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, s, o, r) => async (c, d, {
					gqlContext: a
				}) => {
					const m = d(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await v(a(), l, s, o))) return void c(Object(i.i)(te))
					}
					c(oe(e, t, n, s, o, r))
				}, se = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, oe = (e, t, n, r, c, d, a) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(te));
					const y = f(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(X({
						draftKey: n,
						draft: r
					}));
					const R = y.user.account.displayText,
						S = r.commentMode;
					let g;
					if (a ? (g = await Object(L.i)(j(), e, r, R), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await A(j(), e, r, R, S), g.ok) {
						let s;
						s = g.body, u(Q({
							...s,
							headCommentId: Object(V.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(J.D)(f(), {
							postId: e
						});
						u(Object(m.u)(o, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === o.Bb && N.g(y, se(r), e);
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
				}, re = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: d,
						formData: a,
						editorMode: m
					} = e, u = n(), l = Object($.e)(u);
					let b = "";
					if (l && (b = l.name), D.d.enableToxicityWarning(u)) {
						if (!(await v(s(), b, a, m))) return void t(Object(i.i)(te))
					}
					t(ce({
						commentsPageKey: r,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: o,
						formData: a,
						editorMode: m
					}))
				}, ce = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: r,
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
						j = await A(s(), r, m, f, O);
					if (j.ok) t(Y({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === o.Bb) {
							const e = Object(B.a)(l, {
								commentId: r
							});
							if (!e) return;
							N.g(l, se(m), e.postId, r)
						}
						t(Z({
							draftKey: a,
							error: j.error
						}))
					}
					ee(n(), c, u, j), Object(b.d)()
				}, de = Object(r.a)(H.p), ae = Object(r.a)(H.o), ie = Object(r.a)(H.k), me = (Object(r.a)(H.f), Object(r.a)(H.l)), ue = (Object(r.a)(H.s), (e, t, n) => async (o, r, {
					apiContext: c
				}) => {
					const d = e === E.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(w.G)(t)) o(me({
						editorMode: e,
						draftKey: n,
						content: d ? w.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(T.a)(c(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(me({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(p.f)({
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
				}) => async (s, o) => {
					const r = o(),
						m = Object(c.a)(M.c.replyToComment, t);
					if (!Object(G.J)(o())) return s(Object(a.j)()), void s(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(V.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && s(ae({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						p = null;
					const f = r.user.prefs.commentMode,
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
					const j = r.features.comments.drafts[m];
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
						}, Object(G.L)(r)) {
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
				})), Oe = Object(r.a)(H.r), je = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, c) => {
					const d = c();
					d.user.account && (N.c(d), r(Oe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: M.c.edit,
							hasFocus: !0
						}
					})))
				}, ye = Object(r.a)(H.A), he = Object(r.a)(H.z), Re = Object(r.a)(H.B), Se = Object(r.a)(H.g), ge = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: r
				}) => async (n, c, {
					apiContext: d
				}) => {
					const a = c();
					if (!a.user.account) return;
					n(ye({
						draftKey: s
					})), N.d(a);
					const i = a.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, n, s, r, c) => {
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
								endpoint: Object(g.a)(Object(k.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.cb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(_.a)(e)
							} : {
								...e,
								body: {
									comment: Object(I.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(I.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(x.a)()
							})
						})(d(), e, 0, r, i, m);
					if (u.ok) {
						const o = u.body;
						n(Re({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(q.h)({
							[e]: {
								...o.comment
							}
						}))
					} else n(he({
						draftKey: s,
						error: u.error
					}))
				}, xe = Object(r.a)(H.x), Ie = Object(r.a)(H.w), _e = Object(r.a)(H.y), Ee = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s();
					n(xe({
						id: e
					})), N.a(e, c);
					const d = await ((e, t) => Object(y.a)(Object(R.a)(e, [S.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: o.cb.POST,
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
					}))(r(), e);
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
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(q.h)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(P.q)(s(), e, o)).ok || t(Object(q.h)({
						[e]: {
							sendReplies: !o
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return k
			})), n.d(t, "k", (function() {
				return v
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
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
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
				k = Object(c.a)(E.n),
				v = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(_.J)(n())) return t(Object(a.j)()), void t(Object(i.k)({
						actionSource: i.a.Save,
						redirectUrl: Object(S.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? p.k : p.g;
					if (t(k({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await c(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(l.f)({
							text: n,
							kind: h.b.Undo,
							buttonText: s,
							buttonAction: v(e)
						}))
					} else t(k({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, A = e => `viewing-comment-${e}`, P = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const o = n();
					if (!Object(g.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					O.c({
						state: o,
						commentId: e
					}), r.c.start(A(e));
					const c = setTimeout(() => O.a({
						state: o,
						commentId: e
					}), P);
					C[e] = c
				}, L = (e, t) => async (n, s) => {
					const o = s(),
						c = A(e);
					if (Object(g.a)(o, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < P && (clearTimeout(C[e]), delete C[e])
					}
				}, D = Object(c.a)(E.v), K = Object(c.a)(E.u), N = Object(c.a)(E.t), M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						c = r.moreComments.models[t],
						a = r.platform.currentPage,
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
					const O = await Object(p.e)(o(), b, {
						token: c.token
					}, Object(x.a)(r));
					if (O.ok) {
						const t = O.body,
							s = Object(f.a)(t, b, r);
						n(K({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[b];
						let a;
						o && "subreddit" === o.belongsTo.type && t.comments && (a = o.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [o.id],
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
				}) => async (s, o) => {
					const r = o(),
						c = Object(j.g)(e),
						d = Object(S.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(I.b)(r, {
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
				}) => async (o, r) => {
					const c = r(),
						d = Object(f.e)(t, e, n, c),
						a = Object(I.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(B({
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
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/endpoints/comment/index.tsx"),
				m = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/constants.ts");
			const b = Object(o.a)(l.m),
				p = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(i.h)(s(), e)).ok && t((e => async t => {
						t(b({
							commentId: e
						}))
					})(e))
				}, f = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(m.J)(n())) return void t(Object(c.i)(a.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? i.j : i.d;
					t(Object(u.h)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(u.h)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, O = Object(o.a)(l.C), j = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = o.features.comments.models[e],
						c = o.user.account ? o.user.account.displayText : null;
					r && c && (t(Object(u.h)({
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
					})), (await Object(i.a)(s(), e)).ok || t(Object(u.h)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(d.d)())
				}, y = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						c = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					c && a && (n(Object(u.h)({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(i.f)(o(), e, t)).ok || n(Object(u.h)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(d.d)())
				}, h = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? i.i : i.c;
					t(Object(u.h)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(u.h)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, R = (e, t, n) => async (o, c, {
					apiContext: d
				}) => {
					const a = c(),
						m = a.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						b = a.postStickiedComments.data[l],
						p = s.g[t];
					o(Object(u.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.C.ADMIN,
							isMod: t === s.C.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && o(Object(u.h)({
						[b]: {
							isStickied: !1
						}
					})), (await Object(i.b)(d(), e, p, n || null)).ok ? n && o(O({
						id: e,
						postId: l,
						commentsPageKey: Object(r.a)(l, null, {
							sort: s.r.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(u.h)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(u.h)({
						[b]: {
							isStickied: a.features.comments.models[b].isStickied
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
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(o.a)(l.C),
				p = Object(o.a)(l.p),
				f = Object(o.a)(l.M),
				O = (e, t, n) => async (o, d, {
					apiContext: O
				}) => {
					a.i(d(), t);
					const y = t === i.h.MARKDOWN,
						h = t === i.h.RICH_TEXT,
						R = l.k;
					if (y && Object(m.G)(n)) return o(f({
						editorKey: e,
						editorMode: i.h.MARKDOWN,
						content: ""
					})), void o(j(t));
					if (h && !n) return o(f({
						editorKey: e,
						editorMode: i.h.RICH_TEXT,
						content: m.i
					})), void o(j(t));
					o(b(R));
					const S = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					S.ok ? (o(p(R)), o(f({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), o(j(t))) : (o(p(R)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const o = Object(d.k)();
					if (o >= 3) return;
					const c = n().user.prefs.useMarkdown ? i.h.MARKDOWN : i.h.RICH_TEXT;
					if (e === c) return;
					const a = e === i.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(d.cb)(o + 1)
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
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
					const f = await (async (e, t, n) => Object(r.a)(Object(c.a)(e, [d.a]), {
						endpoint: Object(a.a)(`${e.apiUrl}/api/presence`),
						method: o.cb.POST,
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
							o = {};
						return t.forEach(e => {
							o[e] = s.has(e)
						}), {
							presentUsers: o
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
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(s.a)(r.r),
				d = Object(s.a)(r.F),
				a = e => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), e);
					r && r.ok ? t(c({
						streamId: e,
						level: r.body.data.auto_mute_status.level
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
				return oe
			})), n.d(t, "editRemovalReasonPending", (function() {
				return re
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
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
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
				j = Object(r.c)({
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
							...o
						} = e;
						return o
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
							order: o
						} = s;
						return {
							...e,
							[n]: o
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
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
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
				x = Object(r.c)({
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: g
				}),
				I = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/lib/makeCommentsPageKey/index.ts"),
				C = n("./src/lib/makeDraftKey/index.ts"),
				k = n("./src/reddit/actions/bulkActions/index.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
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
			Object(o.a)({
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
					const o = n().subreddits.models[e].name;
					t(Q());
					const r = await ((e, t) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: I.cb.GET
					}))(s(), o);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(_.a)(c), ne = Object(_.a)(d), se = Object(_.a)(a), oe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: I.cb.POST,
						data: n
					}))(r(), c, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, r = {
							...t,
							id: o
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(D.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(d.error))
				}, re = Object(_.a)(i), ce = Object(_.a)(m), de = Object(_.a)(u), ae = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o().subreddits.models[e].name;
					n(re());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: I.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(D.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ie = Object(_.a)(l), me = Object(_.a)(b), ue = Object(_.a)(p), le = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(N.a)(Object(M.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: I.cb.DELETE
					}))(r(), c, t);
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
					apiContext: o
				}) => {
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(K.a.ADD_REMOVAL_REASON))
				}, fe = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Re = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, n, s, o) => async (r, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? H.e.Post : H.e.Comment,
						l = u === H.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === H.e.Post ? L.L : v.h;
					if (!l || !i) return !1;
					r(fe()), r(b({
						[m]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						f = await F(d(), p);
					if (f.ok) {
						if (r(Oe()), t) {
							r(ye());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								c = await V(d(), Object(H.h)(o, u), u);
							if (c.ok) {
								if (s === H.f.Public) {
									if (r(Re()), c.body) {
										const e = Object($.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(a),
											s = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let o = n && s && Object(J.a)(s, a, a.posts.models[e.postId]);
										if (o || (o = Object(E.a)(e.postId, null, {
												sort: I.s,
												hasSortParam: !0
											})), u === H.e.Post) {
											const n = Object(C.a)(q.c.replyToPost, m);
											r(Object(A.o)({
												...t,
												headCommentId: Object(z.w)(a, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = a.postStickiedComments.data[m];
											r(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && r(Object(v.h)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === H.e.Comment) {
											const e = Object(C.a)(q.c.replyToComment, l.id),
												n = Object(z.j)(a, {
													commentId: m,
													commentsPageKey: o
												});
											r(Object(A.m)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(he());
								return !0
							}
							return r(Se(c.error)), !1
						}
					} else r(je(f.error)), r(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, xe = (e, t, n, o, r) => async (c, d, {
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
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await F(a(), l);
					if (b.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(k.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await V(a(), Object(H.h)(s, H.e.Bulk), H.e.Bulk);
							r.ok ? (c(he()), c(u)) : c(Se(r.error))
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/save`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unsave`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/lock`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unlock`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/approve`),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/remove`),
					method: o.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n, c) => {
					let d = Object(u.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return c && (d = Object(i.a)(d)), Object(r.a)(e, {
						data: n,
						endpoint: d,
						method: o.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, s) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.cb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const i = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === a.h.MARKDOWN ? i.richtext_json = n : i.markdown_text = n, Object(o.a)(Object(r.a)(e, [c.a]), {
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
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
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
					let r = Object(o.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; r && r.depth > n && r.prev && (c = r.prev, (r = Object(o.n)(s, {
							commentLink: c,
							commentsPageKey: e
						})) && !(r.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: o
					} = e, {
						head: d
					} = s[t];
					if (d) return Object.keys(o).filter(e => {
						const t = o[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: r.w,
								expEventOverride: t
							});
							return !!(Object(r.yd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.E.SERVER_ERROR,
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
			const o = e => {
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
				r = e => {
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
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
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
				}) => Object(s.a)({
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
				return m
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return O
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					const t = Object(d.m)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(a.defaults)(e),
						screen: Object(a.screen)(e),
						subreddit: Object(a.subreddit)(e),
						post: t ? Object(a.post)(e, t) : null,
						profile: Object(a.profile)(e)
					}
				},
				m = (e, t, n, o) => {
					const r = {
							commentId: o,
							commentsPageKey: n
						},
						d = o && Object(c.j)(e, r) || 0;
					return Object(s.a)({
						noun: "comment",
						...i(e),
						comment: o ? Object(a.comment)(e, o) : null,
						listing: Object(a.listing)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				u = (e, t, n, o) => {
					const r = i(e);
					return Object(s.a)({
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
				},
				l = e => Object(s.a)({
					noun: "cancel",
					...i(e)
				}),
				b = (e, t) => {
					t === r.c.replyToPost && Object(s.a)({
						noun: "input",
						...i(e)
					})
				},
				p = (e, t) => Object(s.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.defaults)(t),
					screen: Object(a.screen)(t),
					subreddit: Object(a.subreddit)(t),
					post: Object(a.post)(t, e)
				}),
				f = e => Object(s.a)({
					noun: "edit",
					...i(e)
				}),
				O = e => Object(s.a)({
					noun: "save_edit",
					...i(e)
				})
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
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
			const o = 20,
				r = 50,
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
				o = n("./src/reddit/actions/ads/constants.ts");
			const r = [];
			var c = (e = r, t) => {
					switch (t.type) {
						case o.o:
							return t.payload;
						case o.p:
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
							} = t.payload, o = e[s] ? e[s] : [], r = function(e, t) {
								return y()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, o.find(e => e.stickied)), c = g([...o, ...r]);
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
									isStickied: o,
									authorId: r
								},
								commentsPageKey: c,
								isChatSort: d
							} = t.payload;
							return !1 === d ? e : {
								...e,
								[c]: [...g([...e[c] ? e[c] : [], {
									id: n,
									created: s,
									stickied: o,
									authorId: r
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
			const k = {};

			function v(e) {
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
			var A = (e = k, t) => {
				switch (t.type) {
					case h.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: o,
							key: r,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, a = s[c.postId], i = e[r], m = {}, u = i[c.id];
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
									continueThreadDict: o
								}),
								t = Object(E.c)({
									commentLink: a.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: o
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[r]: {
								...e[r],
								...v(n),
								...v(o),
								...v(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: s,
							key: o,
							moreComments: r
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o],
								...v(n),
								...v(s),
								...v(r)
							}
						}
					}
					case R.b:
						const {
							comment: n, commentsPageKey: s, depth: o, headCommentId: r, originId: c, isChatSort: a
						} = t.payload, i = e[s], m = {};
						let u = null;
						if (a) return r && (m[r] = {
							...i[r],
							prev: Object(C.g)(n.id)
						}, u = Object(C.g)(r)), {
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
							const r = n.parentId;
							if (c && r) {
								const n = "moreComments-" + c;
								if (i[r] && !i[n]) {
									const c = i[r].next;
									return c && (m[c.id] = {
										...i[c.id],
										prev: Object(C.h)(n)
									}, u = c), m[r] = {
										...i[r],
										next: Object(C.h)(n)
									}, t = Object(C.g)(r), {
										...e,
										[s]: {
											...e[s],
											...m,
											[n]: {
												depth: o || 0,
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
								headCommentId: o
							} = t.payload, r = e[s], c = {};
							let d = null;
							return o && (c[o] = {
								...r[o],
								prev: Object(C.g)(n.id)
							}, d = Object(C.g)(o)), {
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
								parentCommentId: o,
								depth: r
							} = t.payload, c = e[s], d = {};
							let a = null;
							if (!c[o]) return e;
							const i = c[o].next;
							return i && (d[i.id] = {
								...c[i.id],
								prev: Object(C.g)(n.id)
							}, a = i), d[o] = {
								...c[o],
								next: Object(C.g)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...d,
									[n.id]: {
										depth: r,
										next: a,
										prev: Object(C.g)(o)
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
							isChatSort: o
						} = t.payload;
						return !1 === o ? e : {
							...e,
							[s]: n.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: n,
							key: s,
							postId: o
						} = t.payload;
						return {
							...e,
							[s]: n[o] && n[o].head ? n[o].head.id : null
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
				return k
			})), n.d(t, "l", (function() {
				return v
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
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
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
						commentsPageKey: o
					} = t, r = e.pages.comments.keyToCommentThreadLinkSets[o], c = [];
					let d = {
						id: s,
						type: a.a.Comment
					};
					do {
						c.push(d), d = r[d.id].next
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
					const o = e.pages.comments.keyToCommentThreadLinkSets[s];
					return o ? n ? o[n.id] : t ? o[t] : null : null
				},
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				k = (e, t) => {
					const n = t.commentsPageKey ? E(e, t) : null;
					return n ? n.depth : null
				},
				v = (e, {
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
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.A).map(t => e.features.comments.models[t].author)))
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
						o = Object(b.a)(e, {
							commentId: s
						}),
						r = o && k(e, {
							commentId: o.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (o && "number" == typeof r) return {
						...o,
						depth: r
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
						const t = o()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
				return r
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.tc
					}) === s.Dc.Enabled
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.sc
					}) === s.Cc.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
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
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.e1d9ca51b4a57c05c2a3.js.map