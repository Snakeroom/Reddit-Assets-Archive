// https://www.redditstatic.com/desktop2x/removalReasonActions.0bdd40ca700a53d4db67.js
// Retrieved at 6/8/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/graphql/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/graphql/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/graphql/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
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
				return Z
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return oe
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
				return Ie
			})), n.d(t, "i", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Ae
			})), n.d(t, "k", (function() {
				return Pe
			})), n.d(t, "r", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				d = n("./src/reddit/actions/changeUsername.ts"),
				i = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/graphql/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				R = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, n, s) => {
					let r, o;
					if (s === x.h.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(v.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				P = async (e, t, n, s, o) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (o === x.h.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(S.a)(e, [R.a]), {
						method: r.gb.POST,
						endpoint: Object(g.a)(Object(C.a)(Object(k.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
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
						error: e.error || Object(_.a)()
					})
				};
			var T = n("./src/graphql/operations/UpdateCommentFollowState.json");
			var w = n("./src/reddit/endpoints/post/index.tsx"),
				D = n("./src/reddit/endpoints/post/convert.ts"),
				L = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				N = n("./src/reddit/featureFlags/index.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				M = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/Comment/index.ts"),
				V = n("./src/reddit/models/PostDraft/index.ts"),
				B = n("./src/reddit/models/RichTextJson/index.ts"),
				J = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				q = n("./src/reddit/models/Toast/index.ts"),
				$ = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/commentSelector.ts"),
				W = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Q = n("./src/reddit/actions/comment/constants.ts");
			const Y = Object(o.a)(Q.k),
				Z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const r = s();
					if (!!r.features.comments.drafts[t])
						if (Object(z.M)(r) && e) {
							const s = Y({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(s))
						} else n(Y({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(o.a)(Q.H), te = Object(o.a)(Q.J), ne = Object(o.a)(Q.I), se = Object(o.a)(Q.G), re = (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					U.f(e, n, t, o)
				}, oe = "Toxicity_Warning__Modal", ce = (e, t, n, s, r, o) => async (c, d, {
					gqlContext: i
				}) => {
					const m = d(),
						u = Object(W.e)(m);
					let l = "";
					if (u && (l = u.name), N.d.enableToxicityWarning(m)) {
						if (!(await A(i(), l, s, r))) return void c(Object(a.i)(oe))
					}
					c(ie(e, t, n, s, r, o))
				}, de = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, o, c, d, i) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(a.g)(oe));
					const y = f(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(ee({
						draftKey: n,
						draft: o
					}));
					const v = y.user.account.displayText,
						S = o.commentMode;
					let R;
					if (i ? (R = await Object(L.i)(j(), e, o, v), u(Object(l.a)({
							streamId: e,
							level: R.body.automuteLevel
						}))) : R = await P(j(), e, o, v, S), R.ok) {
						let s;
						s = R.body, u(te({
							...s,
							headCommentId: Object($.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(H.F)(f(), {
							postId: e
						});
						u(Object(m.x)(r, O.a.CommentSubmitted))
					} else {
						R.error && R.error.type === r.Fb && U.g(y, de(o), e);
						const t = R.error && R.error.fields && R.error.fields[0] ? R.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: R.error
						})), u(Object(p.f)({
							duration: p.a,
							kind: q.b.Error,
							text: t
						}))
					}
					re(f(), t, c, R), d || Object(b.d)()
				}, ae = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: o,
						parentCommentDepth: c,
						draftKey: d,
						formData: i,
						editorMode: m
					} = e, u = n(), l = Object(W.e)(u);
					let b = "";
					if (l && (b = l.name), N.d.enableToxicityWarning(u)) {
						if (!(await A(s(), b, i, m))) return void t(Object(a.i)(oe))
					}
					t(me({
						commentsPageKey: o,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: i,
						editorMode: m
					}))
				}, me = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: c,
						parentCommentDepth: d,
						draftKey: i,
						formData: m,
						editorMode: u
					} = e;
					t(Object(a.g)(oe));
					const l = n(),
						p = l.features.comments.submit.pending[i];
					if (!l.user.account || p) return;
					t(ee({
						draftKey: i,
						draft: m
					}));
					const f = l.user.account.displayText,
						O = m.commentMode,
						j = await P(s(), o, m, f, O);
					if (j.ok) t(ne({
						...j.body,
						parentCommentId: o,
						commentsPageKey: c,
						draftKey: i,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === r.Fb) {
							const e = Object(G.a)(l, {
								commentId: o
							});
							if (!e) return;
							U.g(l, de(m), e.postId, o)
						}
						t(se({
							draftKey: i,
							error: j.error
						}))
					}
					re(n(), c, u, j), Object(b.d)()
				}, ue = Object(o.a)(Q.q), le = Object(o.a)(Q.p), be = Object(o.a)(Q.l), pe = (Object(o.a)(Q.g), Object(o.a)(Q.m)), fe = (Object(o.a)(Q.t), (e, t, n) => async (r, o, {
					apiContext: c
				}) => {
					const d = e === x.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(B.G)(t)) r(pe({
						editorMode: e,
						draftKey: n,
						content: d ? B.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const o = await Object(D.a)(c(), e, d ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(u.a)(n)), r(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(p.f)({
							duration: p.a,
							kind: q.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Oe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, r) => {
					const o = r(),
						m = Object(c.a)(V.c.replyToComment, t);
					if (!Object(z.K)(r())) return s(Object(i.j)()), void s(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object($.m)(r(), {
							commentId: t
						})
					}));
					const u = o.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && s(le({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						p = null;
					const f = o.user.prefs.commentMode,
						O = Object(K.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === x.h.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => J.s(e, null)).map(e => J.l([e])),
								n = J.s("", null),
								s = J.l([n]);
							p = {
								document: [J.c(t), s]
							}
						}
					}
					const j = o.features.comments.drafts[m];
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
						}, Object(z.M)(o)) {
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
					t(Object(X.p)(e)), t(Se(e))
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
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, he = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), ve = Object(o.a)(Q.s), Se = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: r
				}) => async (o, c) => {
					const d = c();
					d.user.account && (U.c(d), o(ve({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: V.c.edit,
							hasFocus: !0
						}
					})))
				}, Re = Object(o.a)(Q.C), ge = Object(o.a)(Q.B), _e = Object(o.a)(Q.D), Ie = Object(o.a)(Q.h), Ee = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: o
				}) => async (n, c, {
					apiContext: d
				}) => {
					const i = c();
					if (!i.user.account) return;
					n(Re({
						draftKey: s
					})), U.d(i);
					const a = i.user.account.displayText || "",
						m = o.commentMode,
						u = await (async (e, t, n, s, o, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === x.h.MARKDOWN) d.text = s.text;
							else {
								d.text = null;
								let e = null;
								s.rteState && (e = f.a.toRichTextJSON(s.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(S.a)(e, [R.a]), {
								endpoint: Object(g.a)(Object(k.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.gb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(E.a)(e)
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
								error: e.error || Object(_.a)()
							})
						})(d(), e, 0, o, a, m);
					if (u.ok) {
						const r = u.body;
						n(_e({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(X.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(ge({
						draftKey: s,
						error: u.error
					}))
				}, xe = Object(o.a)(Q.z), Ce = Object(o.a)(Q.y), ke = Object(o.a)(Q.A), Ae = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const c = s();
					n(xe({
						id: e
					})), U.a(e, c);
					const d = await ((e, t) => Object(h.a)(Object(S.a)(e, [R.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: r.gb.POST,
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
						error: e.error || Object(_.a)()
					}))(o(), e);
					d.ok ? n(ke({
						id: e,
						postId: t
					})) : n(Ce({
						id: e,
						error: d.error
					}))
				}, Pe = e => async (t, n, {
					apiContext: s
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(w.q)(s(), e, r)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Te = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					var c, d, i, a, m, u;
					n(Object(X.c)());
					const l = e => Object(p.f)(Object(p.e)(e, q.b.Error));
					if (((null === (d = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === F.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(d)), (await ((e, t) => Object(v.a)(e, {
								...T,
								variables: {
									input: t
								}
							}))(o(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(M.pb)(null !== (m = null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(p.f)({
								kind: q.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(d)), n(l(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return k
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "o", (function() {
				return $
			})), n.d(t, "p", (function() {
				return G
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "n", (function() {
				return Q
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				i = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				a = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				R = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				_ = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = n("./src/reddit/selectors/moderatingComments.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const C = {},
				k = Object(c.a)(x.o),
				A = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(E.K)(n())) return t(Object(a.j)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(R.m)(n(), {
							commentId: e
						})
					}));
					const o = n().features.comments.models[e];
					if (!o) return;
					const c = o.isSaved ? f.k : f.g;
					if (t(k({
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
						t(Object(b.f)({
							text: n,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: A(e)
						}))
					} else t(k({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, P = e => `viewing-comment-${e}`, T = s.a.telemetry.commentConsumedThreshold, w = e => async (t, n) => {
					const r = n();
					if (!Object(g.a)(r, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					j.c({
						state: r,
						commentId: e
					}), o.c.start(P(e));
					const c = setTimeout(() => j.a({
						state: r,
						commentId: e
					}), T);
					C[e] = c
				}, D = (e, t) => async (n, s) => {
					const r = s(),
						c = P(e);
					if (Object(g.a)(r, {
							commentId: e
						}) && o.c.has(c)) {
						const n = o.c.end(c);
						!t && n < T && (clearTimeout(C[e]), delete C[e])
					}
				}, L = Object(c.a)(x.x), N = Object(c.a)(x.w), K = Object(c.a)(x.v), M = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.moreComments.models[t],
						a = o.platform.currentPage,
						m = a && a.routeMatch,
						l = m && m.match,
						{
							partialPostId: b
						} = l ? l.params : null;
					if (!b) return;
					const p = Object(h.s)(b);
					n(L({
						moreCommentsId: c.id
					}));
					const j = await Object(f.e)(r(), p, {
						token: c.token
					}, Object(_.a)(o));
					if (j.ok) {
						const t = j.body,
							s = Object(O.a)(t, p, o);
						n(N({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const r = o.posts.models[p];
						let a;
						r && "subreddit" === r.belongsTo.type && t.comments && (a = r.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = j.body.comments,
							l = j.body.posts;
						await n(Object(u.b)(l, m, a)), await n(Object(i.b)(a, m))
					} else n(K({
						moreCommentsItem: c,
						...j.error
					}))
				}, U = Object(p.a)(O.b, S.a.upvoted), F = Object(p.a)(O.b, S.a.downvoted), V = Object(c.a)(x.j), B = Object(c.a)(x.i), J = Object(c.a)(x.e), q = Object(c.a)(x.f), $ = (Object(c.a)(x.c), Object(c.a)(x.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const o = r(),
						c = Object(y.h)(e),
						d = Object(R.n)(o, {
							commentLink: c,
							commentsPageKey: t
						}),
						i = Object(I.b)(o, {
							commentId: e,
							commentsPageKey: t
						}),
						a = d.depth;
					s(J({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || n(e, !0), Object(l.d)()
				}), G = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(q({
						commentId: e,
						commentsPageKey: t
					}))
				}, W = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (r, o) => {
					const c = o(),
						d = Object(O.e)(t, e, n, c),
						i = Object(I.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(J({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === n && s(d, !0), Object(l.d)()
				}, H = Object(c.a)(x.r), z = e => t => t(H({
					draftKey: e
				})), X = Object(c.a)(x.a), Q = Object(c.a)(x.E), Y = Object(c.a)(x.b), Z = Object(c.a)(x.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = n("./src/reddit/models/Reportable/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/index.ts"),
				y = n("./src/reddit/actions/comment/constants.ts");
			const h = Object(o.a)(y.n),
				v = e => async (t, n, {
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
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.isLocked ? u.j : u.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await o(s(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, R = Object(o.a)(y.F), g = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					o && c && (t(Object(j.i)({
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
					})), Object(i.d)())
				}, _ = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.features.comments.models[e],
						d = o.user.account ? o.user.account.displayText : null;
					c && d && (n(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.f)(r(), e, t)).ok || n(Object(j.i)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(i.d)())
				}, I = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.ignoreReports ? u.i : u.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await o(s(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, E = (e, t, n) => async (o, c, {
					gqlContext: d
				}) => {
					const i = Object(f.a)(c(), {
						commentId: e
					});
					if (!i) return;
					const m = n === r.Wb.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(d(), {
							input: u
						})).ok) o(Object(j.i)({
						[e]: {
							userReports: Object(b.a)(i.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						o(Object(a.f)(e))
					}
				}, x = (e, t, n) => async (s, o, {
					apiContext: d
				}) => {
					const i = o(),
						a = i.features.comments.models[e];
					if (!a) return;
					const m = a.postId,
						l = i.postStickiedComments.data[m],
						b = r.g[t];
					s(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.D.ADMIN,
							isMod: t === r.D.MODERATOR,
							isStickied: !!n
						}
					})), n && l && l !== e && s(Object(j.i)({
						[l]: {
							isStickied: !1
						}
					})), (await Object(u.b)(d(), e, b, n || null)).ok ? n && s(R({
						id: e,
						postId: m,
						commentsPageKey: Object(c.a)(m, null, {
							sort: r.r.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (s(Object(j.i)({
						[e]: {
							distinguishType: a.distinguishType,
							isAdmin: a.isAdmin,
							isMod: a.isMod,
							isStickied: a.isStickied
						}
					})), s(Object(j.i)({
						[l]: {
							isStickied: i.features.comments.models[l].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				c = n("./src/graphql/operations/SubredditUserAchievements.json"),
				d = n("./src/graphql/operations/UpdateAchievementFlairPreference.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			var a = n("./src/reddit/selectors/experiments/econ/index.ts"),
				m = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/powerups/index.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(m.a)({
				features: {
					powerups: u.a
				}
			});
			const y = Object(r.a)(j.d),
				h = Object(r.a)(j.f),
				v = Object(r.a)(j.g),
				S = Object(r.a)(j.e),
				R = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, n) => {
							const s = await Object(i.a)(e, {
								...c,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data.subredditInfoById
						})(r(), e, d);
						await n(y(t))
					} catch (a) {
						o.c.captureException(a)
					}
				}, g = (e, t) => async (n, s) => {
					if (!e) return;
					await n(Object(l.i)(e, {
						fullData: !0
					}));
					const r = s();
					if (!Object(f.f)(r, {
							subredditId: e
						}) || !t || !Object(a.h)(r)) return;
					const o = new Set;
					Object.values(t).forEach(e => {
						o.add(e.authorId)
					}), await n(R(e, Array.from(o)))
				}, _ = (e, t) => async (n, r, {
					gqlContext: c
				}) => {
					const a = r(),
						m = Object(O.j)(a);
					if (!m) return;
					const u = {
						subredditId: e,
						userId: m.id,
						achievementType: t
					};
					n(h(u));
					try {
						await (async (e, t, n) => {
							if (!(await Object(i.a)(e, {
									...d,
									variables: {
										subredditId: t,
										achievementType: n
									}
								})).ok) throw new Error("Unable to update the preferred achievement flair")
						})(c(), u.subredditId, u.achievementType), n(v(u))
					} catch (l) {
						n(S(u)), o.c.captureException(l), n(Object(b.f)({
							duration: b.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const s = 120,
				r = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				o = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
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
				i = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(l.C),
				p = Object(r.a)(l.p),
				f = Object(r.a)(l.M),
				O = (e, t, n) => async (r, d, {
					apiContext: O
				}) => {
					i.i(d(), t);
					const y = t === a.h.MARKDOWN,
						h = t === a.h.RICH_TEXT,
						v = l.k;
					if (y && Object(m.G)(n)) return r(f({
						editorKey: e,
						editorMode: a.h.MARKDOWN,
						content: ""
					})), void r(j(t));
					if (h && !n) return r(f({
						editorKey: e,
						editorMode: a.h.RICH_TEXT,
						content: m.i
					})), void r(j(t));
					r(b(v));
					const S = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					S.ok ? (r(p(v)), r(f({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), r(j(t))) : (r(p(v)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const r = Object(d.m)();
					if (r >= 3) return;
					const c = n().user.prefs.useMarkdown ? a.h.MARKDOWN : a.h.RICH_TEXT;
					if (e === c) return;
					const i = e === a.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						text: i
					})), Object(d.mb)(r + 1)
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
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(s.a)(m),
				l = (e, t, n) => async (s, m, {
					apiContext: l
				}) => {
					const b = m();
					if (!Object(a.a)(b)) return;
					const p = new Set;
					e && Object.values(e).map(e => {
						e.authorId && p.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && p.add(e.authorId)
					});
					const f = await (async (e, t, n) => Object(o.a)(Object(c.a)(e, [d.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: r.gb.POST,
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
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(s.a)(o.r),
				d = Object(s.a)(o.F),
				i = e => async (t, n, {
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
				return ie
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ae
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
				return ve
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), n.d(t, "submitRemovalReason", (function() {
				return Re
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ge
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				a = "REMOVALREASONS__EDIT_PENDING",
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
					case a:
					case m:
					case l:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case i:
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
						case a:
						case l:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case i:
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
			const v = {};
			var S = (e = v, t) => {
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
			var R = (e = null, t) => {
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
				g = Object(o.c)({
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: R
				}),
				_ = n("./src/lib/constants/index.ts"),
				I = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/lib/makeCommentsPageKey/index.ts"),
				x = n("./src/lib/makeDraftKey/index.ts"),
				C = n("./src/reddit/actions/bulkActions/index.ts"),
				k = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/post.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				N = n("./src/lib/makeApiRequest/index.ts"),
				K = n("./src/lib/omitHeaders/index.ts"),
				M = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(N.a)(Object(K.a)(e, [M.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: _.gb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: _.gb.POST,
					type: "json",
					data: t
				});
			var B = n("./src/reddit/helpers/isPost.ts"),
				J = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = n("./src/reddit/helpers/routeKey/index.ts"),
				$ = n("./src/reddit/models/ModQueue/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RemovalReason/index.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: g
				}
			});
			const Q = Object(I.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(I.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(I.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().subreddits.models[e].name;
					t(Q());
					const o = await ((e, t) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: _.gb.GET
					}))(s(), r);
					o.ok ? t(Y({
						subredditId: e,
						response: o.body
					})) : t(Z(o.error))
				}, te = Object(I.a)(c), ne = Object(I.a)(d), se = Object(I.a)(i), re = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: _.gb.POST,
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
							kind: H.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(d.error))
				}, oe = Object(I.a)(a), ce = Object(I.a)(m), de = Object(I.a)(u), ie = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(oe());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: _.gb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(o(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(D.f)({
						kind: H.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ae = Object(I.a)(l), me = Object(I.a)(b), ue = Object(I.a)(p), le = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const c = r().subreddits.models[e].name;
					n(ae());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: _.gb.DELETE
					}))(o(), c, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(D.f)({
						kind: H.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(I.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(L.a.ADD_REMOVAL_REASON))
				}, fe = Object(I.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(I.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(I.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(I.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(I.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(I.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(I.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, n, s, r) => async (o, c, {
					apiContext: d
				}) => {
					const i = c(),
						a = i.user.account && i.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? W.e.Post : W.e.Comment,
						l = u === W.e.Post ? i.posts.models[m] : i.features.comments.models[m],
						b = u === W.e.Post ? w.P : k.i;
					if (!l || !a) return !1;
					o(fe()), o(b({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: a
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
								c = await V(d(), Object(W.h)(r, u), u);
							if (c.ok) {
								if (s === W.f.Public) {
									if (o(ve()), c.body) {
										const e = Object(J.a)(c.body, a),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(i),
											s = i.platform.currentPage && i.platform.currentPage.routeMatch;
										let r = n && s && Object(q.a)(s, i, i.posts.models[e.postId]);
										if (r || (r = Object(E.a)(e.postId, null, {
												sort: _.s,
												hasSortParam: !0
											})), u === W.e.Post) {
											const n = Object(x.a)(G.c.replyToPost, m);
											o(Object(A.o)({
												...t,
												headCommentId: Object(z.w)(i, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: n
											}));
											const s = i.postStickiedComments.data[m];
											o(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && o(Object(k.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === W.e.Comment) {
											const e = Object(x.a)(G.c.replyToComment, l.id),
												n = Object(z.j)(i, {
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
				}, ge = (e, t, n, r, o) => async (c, d, {
					apiContext: i
				}) => {
					const a = d(),
						m = a.user.account && a.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(D.f)({
							kind: H.b.SuccessMod,
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
						b = await F(i(), l);
					if (b.ok) {
						const s = {
							ids: e,
							operation: $.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (c(Object(C.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: r
								},
								o = await V(i(), Object(W.h)(s, W.e.Bulk), W.e.Bulk);
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
				return v
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: r.gb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.gb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n, c) => {
					let d = Object(i.a)(Object(u.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (d = Object(a.a)(d)), Object(o.a)(e, {
						data: n,
						endpoint: d,
						method: r.gb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				R = (e, t, n, s) => Object(o.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.gb.POST,
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
				i = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === i.h.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(r.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.gb.POST,
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
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				i = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
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
								experimentName: o.x,
								expEventOverride: t
							});
							return !!(Object(o.Kd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.F.SERVER_ERROR,
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
							case s.F.NO_STRIPE_SUBSCRIPTION:
							case s.F.USER_DOESNT_EXIST:
							case s.F.USER_REQUIRED_ERROR:
							case s.F.VALIDATION_ERROR:
								return e;
							case s.F.NO_USER:
							case s.F.NO_TEXT:
							case s.F.NO_URL:
								return s.F.VALIDATION_ERROR;
							case s.F.CREDIT_CARD_FAILURE:
							case s.F.CREDIT_CARD_FAILURE_GENERIC:
								return s.F.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.F.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.F.VALIDATION_ERROR
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
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/trackers/userFlair.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const m = e => {
					const t = Object(d.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(i.defaults)(e),
						screen: Object(i.screen)(e),
						subreddit: Object(i.subreddit)(e),
						post: t ? Object(i.post)(e, t) : null,
						profile: Object(i.profile)(e)
					}
				},
				u = (e, t, n, s) => {
					const o = {
							commentId: s,
							commentsPageKey: n
						},
						d = s && Object(c.j)(e, o) || 0;
					return Object(a.a)({
						noun: "comment",
						...m(e),
						comment: s ? Object(i.comment)(e, s) : null,
						listing: Object(i.listing)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(r.d)(e)
					})
				},
				l = (e, t, n, s) => {
					const r = m(e);
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
							parentId: s,
							postId: n
						}
					})
				},
				b = e => Object(a.a)({
					noun: "cancel",
					...m(e)
				}),
				p = (e, t) => {
					t === o.c.replyToPost && Object(a.a)({
						noun: "input",
						...m(e)
					})
				},
				f = (e, t) => Object(a.a)({
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
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userFlair.ts");

			function i(e) {
				const t = o.subreddit(e),
					n = null == t ? void 0 : t.id;
				if (!n) return;
				const i = Object(d.c)(e, {
						subredditId: n
					}),
					a = Object(c.h)(e),
					m = a ? Object(r.b)(e, {
						subredditId: n,
						userId: a
					}) : void 0,
					u = {
						achievementFlairId: null == m ? void 0 : m.type,
						achievementFlairTitle: null == m ? void 0 : m.name
					};
				if (!(null == i ? void 0 : i.displaySettings.isUserEnabled) || !(null == i ? void 0 : i.applied)) return {
					isActive: !1,
					...u
				};
				const l = i.applied.templateId,
					b = Object(s.g)(i.applied);
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
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.defaults(e)
				}),
				m = e => t => {
					const {
						userFlair: n,
						achievementFlair: r
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(s.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == r ? void 0 : r.type,
							achievementFlairTitle: null == r ? void 0 : r.name,
							isLocked: null == r ? void 0 : r.isLocked
						}
					}
				},
				u = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.defaults(e)
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
				return i
			})), n.d(t, "e", (function() {
				return a
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
			var i, a;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(i || (i = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(a || (a = {}));
			const m = e => 1 === e.length ? Object(s.a)(e[0]) ? a.Post : a.Comment : a.Bulk,
				u = (e, t) => {
					return {
						[t === a.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var c = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const i = {};
			t.a = Object(s.c)({
				subredditAchievements: (e = o, t) => {
					switch (t.type) {
						case r.nb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload, o = s.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[n] || {});
							return {
								...e, [n]: o
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = i, t) => {
					var n, s;
					switch (t.type) {
						case d.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: o
							} = t.payload;
							let c = e[r] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of o) {
								const r = t.map(({
										type: e
									}) => e),
									o = null === (n = t.find(({
										isPreferred: e
									}) => e)) || void 0 === n ? void 0 : n.type,
									d = null === (s = t.find(({
										type: e
									}) => "POWERUPS_SUPPORTER" === e)) || void 0 === s ? void 0 : s.type;
								c = {
									...c,
									[e]: {
										achievementTypes: r,
										preferredType: o,
										supporterType: d
									}
								}
							}
							return {
								...e,
								[r]: c
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = t.payload;
							return Object(c.setIn)(e, [n, s, "pendingPreferredType"], r)
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = t.payload;
							return Object(c.updateIn)(e, [n, s], e => ({
								...e,
								preferredType: r,
								pendingPreferredType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(c.setIn)(e, [n, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				}
			})
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
					error: a,
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
				v = n("./node_modules/lodash/values.js"),
				S = n.n(v),
				R = n("./src/reddit/actions/comment/websocket/constants.ts");
			const g = {};

			function _(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var I = (e = g, t) => {
					switch (t.type) {
						case d.f:
						case f.w:
						case d.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], o = function(e, t) {
								return S()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), c = _([...r, ...o]);
							return {
								...e,
								[s]: [...c]
							}
						}
						case R.b:
						case R.c:
						case R.d:
						case f.J:
						case f.I: {
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
								[c]: [..._([...e[c] ? e[c] : [], {
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
				E = n("./node_modules/lodash/mapValues.js"),
				x = n.n(E),
				C = n("./src/reddit/helpers/commentList/index.ts"),
				k = n("./src/reddit/models/Comment/index.ts");
			const A = {};

			function P(e) {
				const t = e;
				return x()(t, ({
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
							continueThreads: r,
							key: o,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, i = s[c.postId], a = e[o], m = {}, u = a[c.id];
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
							const e = Object(C.c)({
									commentLink: i.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: r
								}),
								t = Object(C.c)({
									commentLink: i.tail,
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
								...P(n),
								...P(r),
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
							key: r,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...P(n),
								...P(s),
								...P(o)
							}
						}
					}
					case R.b:
						const {
							comment: n, commentsPageKey: s, depth: r, headCommentId: o, originId: c, isChatSort: i
						} = t.payload, a = e[s], m = {};
						let u = null;
						if (i) return o && (m[o] = {
							...a[o],
							prev: Object(k.h)(n.id)
						}, u = Object(k.h)(o)), {
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
								if (a[o] && !a[n]) {
									const c = a[o].next;
									return c && (m[c.id] = {
										...a[c.id],
										prev: Object(k.i)(n)
									}, u = c), m[o] = {
										...a[o],
										next: Object(k.i)(n)
									}, t = Object(k.h)(o), {
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
						case f.J: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: r
							} = t.payload, o = e[s], c = {};
							let d = null;
							return r && (c[r] = {
								...o[r],
								prev: Object(k.h)(n.id)
							}, d = Object(k.h)(r)), {
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
								parentCommentId: r,
								depth: o
							} = t.payload, c = e[s], d = {};
							let i = null;
							if (!c[r]) return e;
							const a = c[r].next;
							return a && (d[a.id] = {
								...c[a.id],
								prev: Object(k.h)(n.id)
							}, i = a), d[r] = {
								...c[r],
								next: Object(k.h)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...d,
									[n.id]: {
										depth: o,
										next: i,
										prev: Object(k.h)(r)
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
					case R.b:
					case R.c:
					case f.J: {
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
			var N = (e = L, t) => {
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
				keyToChatCommentLinks: I,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: D,
				keyToPostId: N,
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
				return v
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "I", (function() {
				return I
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "l", (function() {
				return k
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
				return N
			})), n.d(t, "K", (function() {
				return K
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "G", (function() {
				return V
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "e", (function() {
				return J
			})), n.d(t, "v", (function() {
				return q
			})), n.d(t, "L", (function() {
				return $
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "H", (function() {
				return H
			})), n.d(t, "C", (function() {
				return z
			})), n.d(t, "J", (function() {
				return X
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "M", (function() {
				return Y
			})), n.d(t, "F", (function() {
				return Z
			})), n.d(t, "y", (function() {
				return ee
			})), n.d(t, "z", (function() {
				return te
			})), n.d(t, "B", (function() {
				return ne
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeCommentPermalink/index.ts"),
				d = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
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
				v = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				S = (e, t) => {
					const n = v(e, t);
					if (n) return Object(b.a)(e, {
						commentId: n
					})
				},
				R = [],
				g = Object(d.a)((e, t) => {
					const n = S(e, t),
						s = n && n.id;
					if (!s) return R;
					const {
						commentsPageKey: r
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[r], c = [];
					let d = {
						id: s,
						type: i.a.Comment
					};
					do {
						c.push(d), d = o[d.id].next
					} while (d);
					return c
				}),
				_ = (e, t) => v(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				I = (e, {
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
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				C = (e, t) => {
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
				A = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(a.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.B).map(t => e.features.comments.models[t].author)))
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
					return n ? Object(c.a)(Object(m.E)(e, n), t) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				K = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(b.a)(e, {
							commentId: s
						}),
						o = r && C(e, {
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
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				q = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				$ = (e, {
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
				W = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				H = (e, {
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
					if (n) return Object(u.Z)(e, n)
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
					return Object(l.S)(e, s)
				},
				te = (e, {
					commentId: t
				}) => {
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t)
				},
				ne = (e, {
					commentId: t
				}) => {
					var n, s;
					const r = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
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
						experimentName: s.Gc
					}) === s.Qc.Enabled
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Fc
					}) === s.Pc.Enabled
				}
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: o.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => t ? e.features.powerups.subredditAchievements[t] : null,
				d = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s;
					return t && n ? null === (s = e.features.powerups.subredditUserAchievements[t]) || void 0 === s ? void 0 : s[n] : null
				},
				i = Object(s.a)(d, e => null == e ? void 0 : e.preferredType),
				a = Object(s.a)([c, i], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(d, e => null == e ? void 0 : e.supporterType),
				u = Object(s.a)([c, m], (e, t) => e && t ? e[t] : null),
				l = Object(s.a)([c, d], (e, t) => {
					if (!e) return [];
					const n = t ? t.achievementTypes : [],
						s = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.0bdd40ca700a53d4db67.js.map