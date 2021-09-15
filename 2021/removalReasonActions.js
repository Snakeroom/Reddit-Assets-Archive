// https://www.redditstatic.com/desktop2x/removalReasonActions.17537c0a127a531a178a.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
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
				return Z
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "n", (function() {
				return ae
			})), n.d(t, "s", (function() {
				return ie
			})), n.d(t, "l", (function() {
				return me
			})), n.d(t, "a", (function() {
				return le
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "p", (function() {
				return Oe
			})), n.d(t, "f", (function() {
				return je
			})), n.d(t, "g", (function() {
				return ye
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return Se
			})), n.d(t, "c", (function() {
				return _e
			})), n.d(t, "i", (function() {
				return Ie
			})), n.d(t, "h", (function() {
				return Ae
			})), n.d(t, "k", (function() {
				return Pe
			})), n.d(t, "r", (function() {
				return Te
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
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				R = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/genericServerError/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				E = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, n, s) => {
					let o, r;
					if (s === k.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(R.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				P = async (e, t, n, s, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === k.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(S.a)(e, [x.a]), {
						method: o.ib.POST,
						endpoint: Object(g.a)(Object(C.a)(Object(E.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				};
			var T = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var w = n("./src/reddit/endpoints/post/index.tsx"),
				D = n("./src/reddit/endpoints/post/convert.ts"),
				L = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = n("./src/reddit/featureFlags/index.ts"),
				N = n("./src/reddit/helpers/dom/index.ts"),
				M = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/Comment/index.ts"),
				V = n("./src/reddit/models/PostDraft/index.ts"),
				B = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				$ = n("./src/reddit/models/Toast/index.ts"),
				J = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/platform.ts"),
				W = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const Y = Object(r.a)(X.k),
				Z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(z.M)(o) && e) {
							const s = Y({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(s))
						} else n(Y({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(r.a)(X.H), te = Object(r.a)(X.J), ne = Object(r.a)(X.I), se = Object(r.a)(X.G), oe = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await U.f(e, n, t, r)
				}, re = "Toxicity_Warning__Modal", ce = (e, t, n, s, o, r) => async (c, d, {
					gqlContext: a
				}) => {
					const m = d(),
						u = Object(q.e)(m);
					let l = "";
					if (u && (l = u.name), K.d.enableToxicityWarning(m)) {
						if (!(await A(a(), l, s, o))) return void c(Object(i.i)(re))
					}
					c(ae(e, t, n, s, o, r))
				}, de = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ae = (e, t, n, r, c, d, a) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(re));
					const y = f(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(ee({
						draftKey: n,
						draft: r
					}));
					const R = y.user.account.displayText,
						S = r.commentMode;
					let x;
					if (a ? (x = await Object(L.i)(j(), e, r, R), u(Object(l.a)({
							streamId: e,
							level: x.body.automuteLevel
						}))) : x = await P(j(), e, r, R, S), x.ok) {
						let s;
						s = x.body, u(te({
							...s,
							headCommentId: Object(J.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(W.H)(f(), {
							postId: e
						});
						u(Object(m.z)(o, O.a.CommentSubmitted))
					} else {
						x.error && x.error.type === o.Hb && U.g(y, de(r), e);
						const t = x.error && x.error.fields && x.error.fields[0] ? x.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: x.error
						})), u(Object(p.f)({
							duration: p.a,
							kind: $.b.Error,
							text: t
						}))
					}
					oe(f(), t, c, x), d || Object(b.d)()
				}, ie = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: d,
						formData: a,
						editorMode: m
					} = e, u = n(), l = Object(q.e)(u);
					let b = "";
					if (l && (b = l.name), K.d.enableToxicityWarning(u)) {
						if (!(await A(s(), b, a, m))) return void t(Object(i.i)(re))
					}
					t(me({
						commentsPageKey: r,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: o,
						formData: a,
						editorMode: m
					}))
				}, me = e => async (t, n, {
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
					t(Object(i.g)(re));
					const l = n(),
						p = l.features.comments.submit.pending[a];
					if (!l.user.account || p) return;
					t(ee({
						draftKey: a,
						draft: m
					}));
					const f = l.user.account.displayText,
						O = m.commentMode,
						j = await P(s(), r, m, f, O);
					if (j.ok) t(ne({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === o.Hb) {
							const e = Object(G.a)(l, {
								commentId: r
							});
							if (!e) return;
							U.g(l, de(m), e.postId, r)
						}
						t(se({
							draftKey: a,
							error: j.error
						}))
					}
					oe(n(), c, u, j), Object(b.d)()
				}, ue = Object(r.a)(X.q), le = Object(r.a)(X.p), be = Object(r.a)(X.l), pe = (Object(r.a)(X.g), Object(r.a)(X.m)), fe = (Object(r.a)(X.t), (e, t, n) => async (o, r, {
					apiContext: c
				}) => {
					const d = e === k.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(B.G)(t)) o(pe({
						editorMode: e,
						draftKey: n,
						content: d ? B.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(D.a)(c(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(p.f)({
							duration: p.a,
							kind: $.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Oe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						m = Object(c.a)(V.c.replyToComment, t);
					if (!Object(z.K)(o())) return s(Object(a.k)()), void s(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(J.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && s(le({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						p = null;
					const f = r.user.prefs.commentMode,
						O = Object(N.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === k.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								s = H.l([n]);
							p = {
								document: [H.c(t), s]
							}
						}
					}
					const j = r.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: f,
							draftType: V.c.replyToComment,
							rtJson: p,
							text: `${b}\n`
						} : j || {
							commentMode: f,
							draftType: V.c.replyToComment,
							rtJson: p,
							text: ""
						}, Object(z.M)(r)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						s(Object(d.f)(n))
					} else s(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, je = e => async t => {
					t(Object(Q.p)(e)), t(Se(e))
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
				})), Re = Object(r.a)(X.s), Se = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, c) => {
					const d = c();
					d.user.account && (U.c(d), r(Re({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: V.c.edit,
							hasFocus: !0
						}
					})))
				}, xe = Object(r.a)(X.C), ge = Object(r.a)(X.B), ve = Object(r.a)(X.D), _e = Object(r.a)(X.h), Ie = ({
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
					n(xe({
						draftKey: s
					})), U.d(a);
					const i = a.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, n, s, r, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === k.h.MARKDOWN) d.text = s.text;
							else {
								d.text = null;
								let e = null;
								s.rteState && (e = f.a.toRichTextJSON(s.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(S.a)(e, [x.a]), {
								endpoint: Object(g.a)(Object(E.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.ib.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(I.a)(e)
							} : {
								...e,
								body: {
									comment: Object(_.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(_.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(v.a)()
							})
						})(d(), e, 0, r, i, m);
					if (u.ok) {
						const o = u.body;
						n(ve({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Q.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(ge({
						draftKey: s,
						error: u.error
					}))
				}, ke = Object(r.a)(X.z), Ce = Object(r.a)(X.y), Ee = Object(r.a)(X.A), Ae = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s();
					n(ke({
						id: e
					})), U.a(e, c);
					const d = await ((e, t) => Object(h.a)(Object(S.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: o.ib.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(v.a)()
					}))(r(), e);
					d.ok ? n(Ee({
						id: e,
						postId: t
					})) : n(Ce({
						id: e,
						error: d.error
					}))
				}, Pe = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Q.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(w.q)(s(), e, o)).ok || t(Object(Q.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Te = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var c, d, a, i, m, u;
					n(Object(Q.c)());
					const l = e => Object(p.f)(Object(p.e)(e, $.b.Error));
					if (((null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === F.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Q.n)(d)), (await ((e, t) => Object(R.a)(e, {
								...T,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(M.rb)(null !== (m = null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) && void 0 !== m ? m : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(p.f)({
								kind: $.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Q.n)(d)), n(l(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return A
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "o", (function() {
				return G
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(a.a)(() => n.e("AchievementsActions").then(n.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var m = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/presence.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/vote.ts"),
				O = n("./src/reddit/endpoints/comment/index.tsx"),
				j = n("./src/reddit/helpers/commentList/index.ts"),
				y = n("./src/reddit/helpers/trackers/comment.ts"),
				h = n("./src/reddit/models/Comment/index.ts"),
				R = n("./src/reddit/models/Post/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				_ = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/comment/constants.ts");
			const E = {},
				A = Object(c.a)(C.o),
				P = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(k.K)(n())) return t(Object(m.k)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(g.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? O.k : O.g;
					if (t(A({
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
						t(Object(p.f)({
							text: n,
							kind: S.b.Undo,
							buttonText: s,
							buttonAction: P(e)
						}))
					} else t(A({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, w = s.a.telemetry.commentConsumedThreshold, D = e => async (t, n) => {
					const o = n();
					if (!Object(v.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					y.g({
						state: o,
						commentId: e
					}), r.c.start(T(e));
					const c = setTimeout(() => y.a({
						state: o,
						commentId: e
					}), w);
					E[e] = c
				}, L = (e, t) => async (n, s) => {
					const o = s(),
						c = T(e);
					if (Object(v.a)(o, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < w && (clearTimeout(E[e]), delete E[e])
					}
				}, K = Object(c.a)(C.x), N = Object(c.a)(C.w), M = Object(c.a)(C.v), U = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						c = r.moreComments.models[t],
						a = r.platform.currentPage,
						m = a && a.routeMatch,
						u = m && m.match,
						{
							partialPostId: b
						} = u ? u.params : null;
					if (!b) return;
					const p = Object(R.s)(b);
					n(K({
						moreCommentsId: c.id
					}));
					const f = await Object(O.e)(o(), p, {
						token: c.token
					}, Object(_.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(j.a)(t, p, r);
						n(N({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[p];
						let a;
						o && "subreddit" === o.belongsTo.type && t.comments && (a = o.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = f.body.comments,
							u = f.body.posts;
						await n(Object(l.b)(u, m, a)), await n(i(a, m))
					} else n(M({
						moreCommentsItem: c,
						...f.error
					}))
				}, F = Object(f.a)(j.b, x.a.upvoted), V = Object(f.a)(j.b, x.a.downvoted), B = Object(c.a)(C.j), H = Object(c.a)(C.i), $ = Object(c.a)(C.e), J = Object(c.a)(C.f), G = (Object(c.a)(C.c), Object(c.a)(C.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						c = Object(h.i)(e),
						d = Object(g.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(I.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						i = d.depth;
					s($({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: a
					})), a || 0 !== i || n(e, !0), Object(b.d)()
				}), q = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(J({
						commentId: e,
						commentsPageKey: t
					}))
				}, W = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const c = r(),
						d = Object(j.e)(t, e, n, c),
						a = Object(I.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					o($({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: a
					})), 0 === n && s(d, !0), Object(b.d)()
				}, z = Object(c.a)(C.r), Q = e => t => t(z({
					draftKey: e
				})), X = Object(c.a)(C.a), Y = Object(c.a)(C.E), Z = Object(c.a)(C.b), ee = Object(c.a)(C.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return R
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
			const h = Object(r.a)(y.n),
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
					if (!Object(O.K)(n())) return void t(Object(d.i)(m.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? u.j : u.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, x = Object(r.a)(y.F), g = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = o.features.comments.models[e],
						c = o.user.account ? o.user.account.displayText : null;
					r && c && (t(Object(j.i)({
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
					})), (await Object(u.a)(s(), e)).ok || t(Object(j.i)({
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
					})), Object(a.d)())
				}, v = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						c = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					c && d && (n(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.f)(o(), e, t)).ok || n(Object(j.i)({
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
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? u.i : u.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, I = (e, t, n) => async (r, c, {
					gqlContext: d
				}) => {
					const a = Object(f.a)(c(), {
						commentId: e
					});
					if (!a) return;
					const m = n === o.Zb.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(d(), {
							input: u
						})).ok) r(Object(j.i)({
						[e]: {
							userReports: Object(b.a)(a.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						r(Object(i.f)(e))
					}
				}, k = (e, t, n) => async (s, r, {
					apiContext: d
				}) => {
					const a = r(),
						i = a.features.comments.models[e];
					if (!i) return;
					const m = i.postId,
						l = a.postStickiedComments.data[m],
						b = o.g[t];
					s(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.F.ADMIN,
							isMod: t === o.F.MODERATOR,
							isStickied: !!n
						}
					})), n && l && l !== e && s(Object(j.i)({
						[l]: {
							isStickied: !1
						}
					})), (await Object(u.b)(d(), e, b, n || null)).ok ? n && s(x({
						id: e,
						postId: m,
						commentsPageKey: Object(c.a)(m, null, {
							sort: o.t.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (s(Object(j.i)({
						[e]: {
							distinguishType: i.distinguishType,
							isAdmin: i.isAdmin,
							isMod: i.isMod,
							isStickied: i.isStickied
						}
					})), s(Object(j.i)({
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
					a.j(d(), t);
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
					const o = Object(d.l)();
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
					})), Object(d.ob)(o + 1)
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
						method: o.ib.POST,
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
				return X
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
				return xe
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ge
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
			var x = (e = null, t) => {
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
				g = Object(r.c)({
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: x
				}),
				v = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeActionCreator/index.ts"),
				I = n("./src/lib/makeCommentsPageKey/index.ts"),
				k = n("./src/lib/makeDraftKey/index.ts"),
				C = n("./src/reddit/actions/bulkActions/index.ts"),
				E = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/post.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				K = n("./src/lib/makeApiRequest/index.ts"),
				N = n("./src/lib/omitHeaders/index.ts"),
				M = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(K.a)(Object(N.a)(e, [M.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: v.ib.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: v.ib.POST,
					type: "json",
					data: t
				});
			var B = n("./src/reddit/helpers/isPost.ts"),
				H = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				$ = n("./src/reddit/helpers/routeKey/index.ts"),
				J = n("./src/reddit/models/ModQueue/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RemovalReason/index.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: g
				}
			});
			const X = Object(_.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(_.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(_.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().subreddits.models[e].name;
					t(X());
					const r = await ((e, t) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: v.ib.GET
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
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: v.ib.POST,
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
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: v.ib.PUT,
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
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: v.ib.DELETE
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
					})), n(Object(T.i)(L.a.ADD_REMOVAL_REASON))
				}, fe = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Re = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), xe = (e, t, n, s, o) => async (r, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? q.e.Post : q.e.Comment,
						l = u === q.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === q.e.Post ? w.R : E.i;
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
								c = await V(d(), Object(q.h)(o, u), u);
							if (c.ok) {
								if (s === q.f.Public) {
									if (r(Re()), c.body) {
										const e = Object(H.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Q.f)(a),
											s = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let o = n && s && Object($.a)(s, a, a.posts.models[e.postId]);
										if (o || (o = Object(I.a)(e.postId, null, {
												sort: v.u,
												hasSortParam: !0
											})), u === q.e.Post) {
											const n = Object(k.a)(G.c.replyToPost, m);
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
											})), s && s !== e.id && r(Object(E.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === q.e.Comment) {
											const e = Object(k.a)(G.c.replyToComment, l.id),
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
				}, ge = (e, t, n, o, r) => async (c, d, {
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
							operation: J.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(C.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await V(a(), Object(q.h)(s, q.e.Bulk), q.e.Bulk);
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
				return x
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
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unsave`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/lock`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unlock`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/approve`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/remove`),
					method: o.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n, c) => {
					let d = Object(a.a)(Object(u.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (d = Object(i.a)(d)), Object(r.a)(e, {
						data: n,
						endpoint: d,
						method: o.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				x = (e, t, n, s) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.ib.POST,
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
					method: s.ib.POST,
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
								experimentName: r.D,
								expEventOverride: t
							});
							return !!(Object(r.re)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.H.SERVER_ERROR,
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
							case s.H.NO_STRIPE_SUBSCRIPTION:
							case s.H.USER_DOESNT_EXIST:
							case s.H.USER_REQUIRED_ERROR:
							case s.H.VALIDATION_ERROR:
								return e;
							case s.H.NO_USER:
							case s.H.NO_TEXT:
							case s.H.NO_URL:
								return s.H.VALIDATION_ERROR;
							case s.H.CREDIT_CARD_FAILURE:
							case s.H.CREDIT_CARD_FAILURE_GENERIC:
								return s.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.H.VALIDATION_ERROR
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
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
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
				}),
				a = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				i = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				m = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				u = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
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
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const i = e => {
					const t = Object(c.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(d.defaults)(e),
						screen: Object(d.screen)(e),
						subreddit: Object(d.subreddit)(e),
						post: t ? Object(d.post)(e, t) : null,
						profile: Object(d.profile)(e)
					}
				},
				m = async (e, t, s, o) => {
					const c = {
							commentId: o,
							commentsPageKey: s
						},
						m = o && Object(r.j)(e, c) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(a.a)({
						noun: "comment",
						...i(e),
						comment: o ? Object(d.comment)(e, o) : null,
						listing: Object(d.listing)(e, void 0, {
							depth: m
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, u = (e, t, n, s) => {
					const o = i(e);
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
							parentId: s,
							postId: n
						}
					})
				}, l = e => Object(a.a)({
					noun: "cancel",
					...i(e)
				}), b = (e, t) => {
					t === o.c.replyToPost && Object(a.a)({
						noun: "input",
						...i(e)
					})
				}, p = (e, t) => Object(a.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.defaults)(t),
					screen: Object(d.screen)(t),
					subreddit: Object(d.subreddit)(t),
					post: Object(d.post)(t, e)
				}), f = e => Object(a.a)({
					noun: "edit",
					...i(e)
				}), O = e => Object(a.a)({
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
				f = n("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var j = (e = O, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				y = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(y),
				R = n("./node_modules/lodash/values.js"),
				S = n.n(R),
				x = n("./src/reddit/actions/comment/websocket/constants.ts");
			const g = {};

			function v(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var _ = (e = g, t) => {
					switch (t.type) {
						case d.f:
						case f.w:
						case d.b: {
							const {
								comments: n,
								key: s
							} = t.payload, o = e[s] ? e[s] : [], r = function(e, t) {
								return S()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, o.find(e => e.stickied)), c = v([...o, ...r]);
							return {
								...e,
								[s]: [...c]
							}
						}
						case x.b:
						case x.c:
						case x.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: o,
									authorId: r
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...v([...e[c] ? e[c] : [], {
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
				k = n.n(I),
				C = n("./src/reddit/helpers/commentList/index.ts"),
				E = n("./src/reddit/models/Comment/index.ts");
			const A = {};

			function P(e) {
				const t = e;
				return k()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var T = (e = A, t) => {
				switch (t.type) {
					case f.w: {
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
							const e = Object(C.c)({
									commentLink: a.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: o
								}),
								t = Object(C.c)({
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
								...P(n),
								...P(o),
								...P(d),
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
								...P(n),
								...P(s),
								...P(r)
							}
						}
					}
					case x.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: s,
							headCommentId: o
						} = t.payload, r = e[s], c = {};
						let d = null;
						return o && (c[o] = {
							...r[o],
							prev: Object(E.i)(n.id)
						}, d = Object(E.i)(o)), {
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
					case f.I: {
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
							prev: Object(E.i)(n.id)
						}, a = i), d[o] = {
							...c[o],
							next: Object(E.i)(n.id)
						}, {
							...e,
							[s]: {
								...e[s],
								...d,
								[n.id]: {
									depth: r,
									next: a,
									prev: Object(E.i)(o)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const w = {};
			var D = (e = w, t) => {
				switch (t.type) {
					case x.b:
					case x.c:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: s
						} = t.payload;
						return {
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
			var K = (e = L, t) => {
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
					case f.J: {
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
				followed: j,
				keyToChatCommentLinks: _,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: D,
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
				return R
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "H", (function() {
				return _
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "m", (function() {
				return D
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "A", (function() {
				return K
			})), n.d(t, "J", (function() {
				return N
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "F", (function() {
				return V
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "v", (function() {
				return $
			})), n.d(t, "K", (function() {
				return J
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "G", (function() {
				return W
			})), n.d(t, "C", (function() {
				return z
			})), n.d(t, "I", (function() {
				return Q
			})), n.d(t, "p", (function() {
				return X
			})), n.d(t, "L", (function() {
				return Y
			})), n.d(t, "y", (function() {
				return Z
			})), n.d(t, "z", (function() {
				return ee
			})), n.d(t, "B", (function() {
				return te
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
				x = [],
				g = Object(d.a)((e, t) => {
					const n = S(e, t),
						s = n && n.id;
					if (!s) return x;
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
				v = (e, t) => R(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				_ = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				I = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const o = e.pages.comments.keyToCommentThreadLinkSets[s];
					return o ? n ? o[n.id] : t ? o[t] : null : null
				},
				k = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				C = (e, t) => {
					const n = t.commentsPageKey ? I(e, t) : null;
					return n ? n.depth : null
				},
				E = (e, {
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
						} = e.platform.currentPage.urlParams, n = Object(i.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				T = e => e.moreComments.models,
				w = e => e.features.comments.models,
				D = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
						commentId: t
					});
					return n ? Object(c.a)(Object(m.G)(e, n), t) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				K = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						o = Object(b.a)(e, {
							commentId: s
						}),
						r = o && C(e, {
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
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				$ = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				J = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				q = (e, {
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
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				X = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const n = Object(b.a)(e, t);
					if (n) return Object(u.V)(e, n)
				},
				Z = (e, {
					commentId: t
				}) => {
					const n = Object(b.a)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(l.T)(e, s)
				},
				ee = (e, {
					commentId: t
				}) => {
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t)
				},
				te = (e, {
					commentId: t
				}) => {
					var n, s;
					const o = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t);
					return !!(o && o.expiresAt < Date.now())
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
						experimentName: s.od
					}) === s.zd.Enabled
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.nd
					}) === s.yd.Enabled
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
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.17537c0a127a531a178a.js.map