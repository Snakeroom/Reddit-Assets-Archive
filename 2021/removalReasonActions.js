// https://www.redditstatic.com/desktop2x/removalReasonActions.028b13180a5f90861a4b.js
// Retrieved at 3/2/2021, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
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
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(s.c),
				c = Object(o.a)(s.b),
				d = Object(o.a)(s.a)
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
				return se
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
				return Oe
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "d", (function() {
				return je
			})), n.d(t, "c", (function() {
				return he
			})), n.d(t, "i", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return ge
			})), n.d(t, "k", (function() {
				return ve
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				d = n("./src/reddit/actions/changeUsername.ts"),
				a = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				O = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/graphql/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				R = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/helpers/genericServerError/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				A = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				C = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, n, o) => {
					let s, r;
					if (o === g.h.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(R.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, o, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === g.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(S.a)(e, [h.a]), {
						method: s.cb.POST,
						endpoint: Object(_.a)(Object(v.a)(Object(C.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(A.a)(e)
					} : {
						...e,
						body: {
							comment: Object(E.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(E.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(x.a)()
					})
				};
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				T = n("./src/reddit/endpoints/post/convert.ts"),
				M = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				N = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/dom/index.ts"),
				K = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				L = n("./src/reddit/models/PostDraft/index.ts"),
				w = n("./src/reddit/models/RichTextJson/index.ts"),
				U = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				F = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				B = n("./src/reddit/selectors/commentSelector.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/comment/constants.ts");
			const H = Object(r.a)(W.j),
				z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(G.L)(s) && e) {
							const o = H({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(o))
						} else n(H({
							hasFocus: e,
							draftKey: t
						}))
				}, X = Object(r.a)(W.E), Q = Object(r.a)(W.G), Y = Object(r.a)(W.F), Z = Object(r.a)(W.D), ee = (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					K.f(e, n, t, r)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, o, s, r) => async (c, d, {
					gqlContext: a
				}) => {
					const m = d(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), N.d.enableToxicityWarning(m)) {
						if (!(await k(a(), l, o, s))) return void c(Object(i.i)(te))
					}
					c(se(e, t, n, o, s, r))
				}, oe = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, se = (e, t, n, r, c, d, a) => async (u, p, {
					apiContext: j
				}) => {
					u(Object(i.g)(te));
					const y = p(),
						R = y.features.comments.submit.pending[n];
					if (!y.user.account || R) return;
					u(X({
						draftKey: n,
						draft: r
					}));
					const S = y.user.account.displayText,
						h = r.commentMode;
					let _;
					if (a ? (_ = await Object(M.k)(j(), e, r, S), u(Object(l.a)({
							streamId: e,
							level: _.body.automuteLevel
						}))) : _ = await I(j(), e, r, S, h), _.ok) {
						let o;
						o = _.body, u(Q({
							...o,
							headCommentId: Object(V.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(J.I)(p(), {
							postId: e
						});
						u(Object(m.u)(s, f.a.CommentSubmitted))
					} else {
						_.error && _.error.type === s.Ab && K.g(y, oe(r), e);
						const t = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(Z({
							draftKey: n,
							error: _.error
						})), u(Object(O.e)({
							duration: O.a,
							kind: F.b.Error,
							text: t
						}))
					}
					ee(p(), t, c, _), d || Object(b.d)()
				}, re = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: d,
						formData: a,
						editorMode: m
					} = e, u = n(), l = Object($.e)(u);
					let b = "";
					if (l && (b = l.name), N.d.enableToxicityWarning(u)) {
						if (!(await k(o(), b, a, m))) return void t(Object(i.i)(te))
					}
					t(ce({
						commentsPageKey: r,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: a,
						editorMode: m
					}))
				}, ce = e => async (t, n, {
					apiContext: o
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
						O = l.features.comments.submit.pending[a];
					if (!l.user.account || O) return;
					t(X({
						draftKey: a,
						draft: m
					}));
					const p = l.user.account.displayText,
						f = m.commentMode,
						j = await I(o(), r, m, p, f);
					if (j.ok) t(Y({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === s.Ab) {
							const e = Object(B.a)(l, {
								commentId: r
							});
							if (!e) return;
							K.g(l, oe(m), e.postId, r)
						}
						t(Z({
							draftKey: a,
							error: j.error
						}))
					}
					ee(n(), c, u, j), Object(b.d)()
				}, de = Object(r.a)(W.p), ae = Object(r.a)(W.o), ie = Object(r.a)(W.k), me = (Object(r.a)(W.f), Object(r.a)(W.l)), ue = (Object(r.a)(W.s), (e, t, n) => async (s, r, {
					apiContext: c
				}) => {
					const d = e === g.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(w.G)(t)) s(me({
						editorMode: e,
						draftKey: n,
						content: d ? w.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(T.a)(c(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(me({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(O.e)({
							duration: O.a,
							kind: F.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), le = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						m = Object(c.a)(L.c.replyToComment, t);
					if (!Object(G.J)(s())) return o(Object(a.j)()), void o(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(V.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(ae({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						O = null;
					const p = r.user.prefs.commentMode,
						f = Object(D.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === g.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => U.s(e, null)).map(e => U.l([e])),
								n = U.s("", null),
								o = U.l([n]);
							O = {
								document: [U.c(t), o]
							}
						}
					}
					const j = r.features.comments.drafts[m];
					let y;
					if (y = f ? {
							commentMode: p,
							draftType: L.c.replyToComment,
							rtJson: O,
							text: `${b}\n`
						} : j || {
							commentMode: p,
							draftType: L.c.replyToComment,
							rtJson: O,
							text: ""
						}, Object(G.L)(r)) {
						const n = de({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						o(Object(d.f)(n))
					} else o(de({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, be = e => async t => {
					t(Object(q.m)(e)), t(je(e))
				}, Oe = ({
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
				}, pe = (e, t) => n => n(ie({
					draftKey: e,
					formData: t
				})), fe = Object(r.a)(W.r), je = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, c) => {
					const d = c();
					d.user.account && (K.c(d), r(fe({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: L.c.edit,
							hasFocus: !0
						}
					})))
				}, ye = Object(r.a)(W.A), Re = Object(r.a)(W.z), Se = Object(r.a)(W.B), he = Object(r.a)(W.g), _e = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, c, {
					apiContext: d
				}) => {
					const a = c();
					if (!a.user.account) return;
					n(ye({
						draftKey: o
					})), K.d(a);
					const i = a.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, n, o, r, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === g.h.MARKDOWN) d.text = o.text;
							else {
								d.text = null;
								let e = null;
								o.rteState && (e = p.a.toRichTextJSON(o.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(y.a)(Object(S.a)(e, [h.a]), {
								endpoint: Object(_.a)(Object(C.a)(Object(v.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.cb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(A.a)(e)
							} : {
								...e,
								body: {
									comment: Object(E.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(E.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(x.a)()
							})
						})(d(), e, 0, r, i, m);
					if (u.ok) {
						const s = u.body;
						n(Se({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(q.h)({
							[e]: {
								...s.comment
							}
						}))
					} else n(Re({
						draftKey: o,
						error: u.error
					}))
				}, xe = Object(r.a)(W.x), Ee = Object(r.a)(W.w), Ae = Object(r.a)(W.y), ge = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o();
					n(xe({
						id: e
					})), K.a(e, c);
					const d = await ((e, t) => Object(y.a)(Object(S.a)(e, [h.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: s.cb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(A.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(x.a)()
					}))(r(), e);
					d.ok ? n(Ae({
						id: e,
						postId: t
					})) : n(Ee({
						id: e,
						error: d.error
					}))
				}, ve = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(q.h)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(P.q)(o(), e, s)).ok || t(Object(q.h)({
						[e]: {
							sendReplies: !s
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "l", (function() {
				return $
			})), n.d(t, "m", (function() {
				return J
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/actions/vote.ts"),
				b = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				_ = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/actions/comment/constants.ts");
			const g = {},
				v = Object(c.a)(A.n),
				C = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(E.J)(n())) return t(Object(a.j)()), void t(Object(i.k)({
						actionSource: i.a.Save,
						redirectUrl: Object(S.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? b.k : b.g;
					if (t(v({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await c(o(), e)).ok) {
						const n = r.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(u.e)({
							text: n,
							kind: y.b.Undo,
							buttonText: o,
							buttonAction: C(e)
						}))
					} else t(v({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, k = e => `viewing-comment-${e}`, I = o.a.telemetry.commentConsumedThreshold, P = e => async (t, n) => {
					const s = n();
					if (!Object(h.a)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					(({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "view",
						noun: "comment",
						...p.defaults(e),
						profile: p.profile(e),
						post: p.post(e, t),
						media: p.media(e, t),
						subreddit: p.subreddit(e),
						comment: p.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), r.c.start(k(e));
					const c = setTimeout(() => (({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "consume",
						noun: "comment",
						...p.defaults(e),
						profile: p.profile(e),
						post: p.post(e, t),
						media: p.media(e, t),
						subreddit: p.subreddit(e),
						comment: p.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), I);
					g[e] = c
				}, T = (e, t) => async (n, o) => {
					const s = o(),
						c = k(e);
					if (Object(h.a)(s, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < I && (clearTimeout(g[e]), delete g[e])
					}
				}, M = Object(c.a)(A.v), N = Object(c.a)(A.u), D = Object(c.a)(A.t), K = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						c = r.moreComments.models[t],
						a = r.platform.currentPage,
						i = a && a.routeMatch,
						m = i && i.match,
						{
							partialPostId: u
						} = m ? m.params : null;
					if (!u) return;
					const l = Object(j.r)(u);
					n(M({
						moreCommentsId: c.id
					}));
					const p = await Object(b.e)(s(), l, {
						token: c.token
					}, Object(_.a)(r));
					if (p.ok) {
						const t = p.body,
							o = Object(O.a)(t, l, r);
						n(N({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const s = r.posts.models[l];
						s && "subreddit" === s.belongsTo.type && t.comments && await n(Object(d.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: s.belongsTo.id
						}))
					} else n(D({
						moreCommentsItem: c,
						...p.error
					}))
				}, L = Object(l.a)(O.b, R.a.upvoted), w = Object(l.a)(O.b, R.a.downvoted), U = Object(c.a)(A.i), F = Object(c.a)(A.h), V = Object(c.a)(A.d), B = Object(c.a)(A.e), $ = (Object(c.a)(A.b), Object(c.a)(A.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						c = Object(f.g)(e),
						d = Object(S.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(x.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						i = d.depth;
					o(V({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: a
					})), a || 0 !== i || n(e, !0), Object(m.d)()
				}), J = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(B({
						commentId: e,
						commentsPageKey: t
					}))
				}, G = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (s, r) => {
					const c = r(),
						d = Object(O.e)(t, e, n, c),
						a = Object(x.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(V({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: a
					})), 0 === n && o(d, !0), Object(m.d)()
				}, q = Object(c.a)(A.q), W = e => t => t(q({
					draftKey: e
				})), H = Object(c.a)(A.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "b", (function() {
				return S
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/endpoints/comment/index.tsx"),
				m = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/constants.ts");
			const b = Object(s.a)(l.m),
				O = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(i.h)(o(), e)).ok && t((e => async t => {
						t(b({
							commentId: e
						}))
					})(e))
				}, p = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(m.J)(n())) return void t(Object(c.i)(a.a.LOGIN_MODAL_ID));
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? i.j : i.d;
					t(Object(u.h)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(u.h)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, f = Object(s.a)(l.C), j = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = s.features.comments.models[e],
						c = s.user.account ? s.user.account.displayText : null;
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
					})), (await Object(i.a)(o(), e)).ok || t(Object(u.h)({
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
				}, y = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
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
					})), (await Object(i.f)(s(), e, t)).ok || n(Object(u.h)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(d.d)())
				}, R = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? i.i : i.c;
					t(Object(u.h)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(u.h)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, S = (e, t, n) => async (s, c, {
					apiContext: d
				}) => {
					const a = c(),
						m = a.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						b = a.postStickiedComments.data[l],
						O = o.g[t];
					s(Object(u.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.C.ADMIN,
							isMod: t === o.C.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(u.h)({
						[b]: {
							isStickied: !1
						}
					})), (await Object(i.b)(d(), e, O, n || null)).ok ? n && s(f({
						id: e,
						postId: l,
						commentsPageKey: Object(r.a)(l, null, {
							sort: o.r.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (s(Object(u.h)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(u.h)({
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
				return O
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(s.a)(l.C),
				O = Object(s.a)(l.p),
				p = Object(s.a)(l.M),
				f = (e, t, n) => async (s, d, {
					apiContext: f
				}) => {
					a.i(d(), t);
					const y = t === i.h.MARKDOWN,
						R = t === i.h.RICH_TEXT,
						S = l.k;
					if (y && Object(m.G)(n)) return s(p({
						editorKey: e,
						editorMode: i.h.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (R && !n) return s(p({
						editorKey: e,
						editorMode: i.h.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(S));
					const h = await Object(c.a)(f(), t, y ? JSON.stringify(n) : n);
					h.ok ? (s(O(S)), s(p({
						editorKey: e,
						editorMode: t,
						content: h.body.output
					})), s(j(t))) : (s(O(S)), s(Object(r.e)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const s = Object(d.k)();
					if (s >= 3) return;
					const c = n().user.prefs.useMarkdown ? i.h.MARKDOWN : i.h.RICH_TEXT;
					if (e === c) return;
					const a = e === i.h.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.e)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(d.bb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(o.a)(r.r),
				d = Object(o.a)(r.F),
				a = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), e);
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
				return oe
			})), n.d(t, "addRemovalReason", (function() {
				return se
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
				return Oe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return pe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ye
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Re
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return he
			})), n.d(t, "submitRemovalReason", (function() {
				return _e
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return xe
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				a = "REMOVALREASONS__ADD_FAILED",
				i = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				l = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var p = (e = null, t) => {
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
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
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
						case O:
							return !1;
						default:
							return e
					}
				},
				j = Object(r.c)({
					error: p,
					pending: f
				});
			const y = {};
			var R = (e = y, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: n
						} = t.payload, {
							data: o
						} = n;
						return {
							...e,
							...o
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
							[n]: o,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const S = {};
			var h = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: n,
							response: o
						} = t.payload, {
							order: s
						} = o;
						return {
							...e,
							[n]: s
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: o
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], o.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: o
						} = t.payload, s = [...e[n]].filter(e => e !== o);
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			var _ = (e = null, t) => {
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
					models: R,
					reasonOrder: h,
					removedItemIds: _
				}),
				E = n("./src/lib/constants/index.ts"),
				A = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/lib/makeCommentsPageKey/index.ts"),
				v = n("./src/lib/makeDraftKey/index.ts"),
				C = n("./src/reddit/actions/bulkActions/index.ts"),
				k = n("./src/reddit/actions/comment/index.ts"),
				I = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				M = n("./src/reddit/actions/post.ts"),
				N = n("./src/reddit/actions/toaster.ts"),
				D = n("./src/reddit/constants/modals.ts"),
				K = n("./src/lib/makeApiRequest/index.ts"),
				L = n("./src/lib/omitHeaders/index.ts"),
				w = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(K.a)(Object(L.a)(e, [w.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(K.a)(Object(L.a)(e, [w.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: E.cb.POST,
					type: "json",
					data: t
				});
			var B = n("./src/reddit/helpers/isPost.ts"),
				$ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RemovalReason/index.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: x
				}
			});
			const Q = Object(A.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(A.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(A.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().subreddits.models[e].name;
					t(Q());
					const r = await ((e, t) => Object(K.a)(Object(L.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.cb.GET
					}))(o(), s);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(A.a)(c), ne = Object(A.a)(d), oe = Object(A.a)(a), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(K.a)(Object(L.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.cb.POST,
						data: n
					}))(r(), c, t);
					if (d.ok) {
						const {
							id: s
						} = d.body, r = {
							...t,
							id: s
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(N.e)({
							kind: H.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(d.error))
				}, re = Object(A.a)(i), ce = Object(A.a)(m), de = Object(A.a)(u), ae = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(re());
					const d = await ((e, t, n) => Object(K.a)(Object(L.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: E.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(N.e)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ie = Object(A.a)(l), me = Object(A.a)(b), ue = Object(A.a)(O), le = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(K.a)(Object(L.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: E.cb.DELETE
					}))(r(), c, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(N.e)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(A.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(D.a.ADD_REMOVAL_REASON))
				}, pe = Object(A.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(A.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(A.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(A.a)("REMOVALREASONS__MESSAGE_PENDING"), Re = Object(A.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(A.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), he = Object(A.a)("REMOVALREASONS__MESSAGE_FAILED"), _e = (e, t, n, o, s) => async (r, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? W.e.Post : W.e.Comment,
						l = u === W.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === W.e.Post ? M.L : k.h;
					if (!l || !i) return !1;
					r(pe()), r(b({
						[m]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const O = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						p = await F(d(), O);
					if (p.ok) {
						if (r(fe()), t) {
							r(ye());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								c = await V(d(), Object(W.h)(s, u), u);
							if (c.ok) {
								if (o === W.f.Public) {
									if (r(Se()), c.body) {
										const e = Object($.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(a),
											o = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let s = n && o && Object(J.a)(o, a, a.posts.models[e.postId]);
										if (s || (s = Object(g.a)(e.postId, null, {
												sort: E.s,
												hasSortParam: !0
											})), u === W.e.Post) {
											const n = Object(v.a)(q.c.replyToPost, m);
											r(Object(I.o)({
												...t,
												headCommentId: Object(z.w)(a, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											}));
											const o = a.postStickiedComments.data[m];
											r(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && r(Object(k.h)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === W.e.Comment) {
											const e = Object(v.a)(q.c.replyToComment, l.id),
												n = Object(z.j)(a, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(I.m)({
												...t,
												parentCommentId: m,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(Re());
								return !0
							}
							return r(he(c.error)), !1
						}
					} else r(je(p.error)), r(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, xe = (e, t, n, s, r) => async (c, d, {
					apiContext: a
				}) => {
					const i = d(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(pe());
					const u = Object(N.e)({
							kind: H.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
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
						const o = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(C.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await V(a(), Object(W.h)(o, W.e.Bulk), W.e.Bulk);
							r.ok ? (c(Re()), c(u)) : c(he(r.error))
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
				return O
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return _
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/save`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unsave`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/lock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unlock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/approve`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/remove`),
					method: s.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, n, c) => {
					let d = Object(u.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return c && (d = Object(i.a)(d)), Object(r.a)(e, {
						data: n,
						endpoint: d,
						method: s.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				_ = (e, t, n, o) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: s.cb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const i = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === a.h.MARKDOWN ? i.richtext_json = n : i.markdown_text = n, Object(s.a)(Object(r.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.cb.POST,
					data: i
				})
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.E.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
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
				return O
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					const t = Object(d.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(a.defaults)(e),
						screen: Object(a.screen)(e),
						subreddit: Object(a.subreddit)(e),
						post: t ? Object(a.post)(e, t) : null,
						profile: Object(a.profile)(e)
					}
				},
				m = (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						d = s && Object(c.j)(e, r) || 0;
					return Object(o.a)({
						noun: "comment",
						...i(e),
						comment: s ? Object(a.comment)(e, s) : null,
						listing: Object(a.listing)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				u = (e, t, n, s) => {
					const r = i(e);
					return Object(o.a)({
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
				l = e => Object(o.a)({
					noun: "cancel",
					...i(e)
				}),
				b = (e, t) => {
					t === r.c.replyToPost && Object(o.a)({
						noun: "input",
						...i(e)
					})
				},
				O = (e, t) => Object(o.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.defaults)(t),
					screen: Object(a.screen)(t),
					subreddit: Object(a.subreddit)(t),
					post: Object(a.post)(t, e)
				}),
				p = e => Object(o.a)({
					noun: "edit",
					...i(e)
				}),
				f = e => Object(o.a)({
					noun: "save_edit",
					...i(e)
				})
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
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
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 20,
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
			const m = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				u = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
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
				s = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.028b13180a5f90861a4b.js.map