// https://www.redditstatic.com/desktop2x/removalReasonActions.68c380c79c2c2e8b34af.js
// Retrieved at 10/14/2021, 8:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
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
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return de
			})), n.d(t, "n", (function() {
				return ie
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
				return Re
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "c", (function() {
				return Ie
			})), n.d(t, "i", (function() {
				return ke
			})), n.d(t, "h", (function() {
				return Pe
			})), n.d(t, "k", (function() {
				return Te
			})), n.d(t, "r", (function() {
				return De
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
				p = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				R = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/helpers/genericServerError/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				E = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, n, o) => {
					let s, r;
					if (o === k.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				P = async (e, t, n, o, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === k.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(R.a)(Object(S.a)(e, [g.a]), {
						method: s.ib.POST,
						endpoint: Object(v.a)(Object(C.a)(Object(E.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(x.a)()
					})
				};
			var T = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				L = n("./src/reddit/endpoints/post/convert.ts"),
				w = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = n("./src/reddit/featureFlags/index.ts"),
				N = n("./src/reddit/helpers/correlationIdTracker.ts"),
				M = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				V = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/PostDraft/index.ts"),
				H = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				J = n("./src/reddit/models/Toast/index.ts"),
				G = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				W = n("./src/reddit/selectors/platform.ts"),
				z = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)(Y.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(Q.M)(s) && e) {
							const o = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(d.f)(o))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Y.H), ne = Object(r.a)(Y.J), oe = Object(r.a)(Y.I), se = Object(r.a)(Y.G), re = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await F.g(e, n, t, r)
				}, ce = "Toxicity_Warning__Modal", de = (e, t, n, o, s, r) => async (c, d, {
					gqlContext: a
				}) => {
					const m = d(),
						u = Object(W.e)(m);
					let l = "";
					if (u && (l = u.name), K.d.enableToxicityWarning(m)) {
						if (!(await A(a(), l, o, s))) return void c(Object(i.i)(ce))
					}
					c(ie(e, t, n, o, s, r))
				}, ae = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, r, c, d, a) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(ce));
					const y = f(),
						R = y.features.comments.submit.pending[n];
					if (!y.user.account || R) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const h = y.user.account.displayText,
						S = r.commentMode;
					let g;
					if (a ? (g = await Object(w.i)(j(), e, r, h), u(Object(l.a)({
							streamId: e,
							level: g.body.automuteLevel
						}))) : g = await P(j(), e, r, h, S), g.ok) {
						let o;
						o = g.body, u(ne({
							...o,
							headCommentId: Object(G.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(z.H)(f(), {
							postId: e
						});
						u(Object(m.z)(s, O.a.CommentSubmitted))
					} else {
						g.error && g.error.type === s.Ib && F.i(y, ae(r), e);
						const t = g.error && g.error.fields && g.error.fields[0] ? g.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: g.error
						})), u(Object(p.f)({
							duration: p.a,
							kind: J.b.Error,
							text: t
						}))
					}
					re(f(), t, c, g).then(() => g.ok && c === k.i.RICH_TEXT ? Object(N.b)(N.a.CommentComposer) : void 0), d || Object(b.d)()
				}, me = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: d,
						formData: a,
						editorMode: m
					} = e, u = n(), l = Object(W.e)(u);
					let b = "";
					if (l && (b = l.name), K.d.enableToxicityWarning(u)) {
						if (!(await A(o(), b, a, m))) return void t(Object(i.i)(ce))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: d,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: a,
						editorMode: m
					}))
				}, ue = e => async (t, n, {
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
					t(Object(i.g)(ce));
					const l = n(),
						p = l.features.comments.submit.pending[a];
					if (!l.user.account || p) return;
					t(te({
						draftKey: a,
						draft: m
					}));
					const f = l.user.account.displayText,
						O = m.commentMode,
						j = await P(o(), r, m, f, O);
					if (j.ok) t(oe({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === s.Ib) {
							const e = Object(q.b)(l, {
								commentId: r
							});
							if (!e) return;
							F.i(l, ae(m), e.postId, r)
						}
						t(se({
							draftKey: a,
							error: j.error
						}))
					}
					re(n(), c, u, j), Object(b.d)()
				}, le = Object(r.a)(Y.q), be = Object(r.a)(Y.p), pe = Object(r.a)(Y.l), fe = (Object(r.a)(Y.g), Object(r.a)(Y.m)), Oe = (Object(r.a)(Y.t), (e, t, n) => async (s, r, {
					apiContext: c
				}) => {
					const d = e === k.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) s(fe({
						editorMode: e,
						draftKey: n,
						content: d ? H.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(L.a)(c(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(fe({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(p.f)({
							duration: p.a,
							kind: J.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), je = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						m = Object(c.a)(B.c.replyToComment, t);
					if (!Object(Q.K)(s())) return o(Object(a.k)()), void o(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(G.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(be({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						p = null;
					const f = r.user.prefs.commentMode,
						O = Object(M.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === k.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
								n = $.s("", null),
								o = $.l([n]);
							p = {
								document: [$.c(t), o]
							}
						}
					}
					const j = r.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: f,
							draftType: B.c.replyToComment,
							rtJson: p,
							text: `${b}\n`
						} : j || {
							commentMode: f,
							draftType: B.c.replyToComment,
							rtJson: p,
							text: ""
						}, Object(Q.M)(r)) {
						const n = le({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: y
						});
						o(Object(d.f)(n))
					} else o(le({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: y
					}))
				}, ye = e => async t => {
					t(Object(X.p)(e)), t(ge(e))
				}, Re = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(be({
						parentCommentId: e,
						commentsPageKey: t
					})), n(je({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, he = (e, t) => n => n(pe({
					draftKey: e,
					formData: t
				})), Se = Object(r.a)(Y.s), ge = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, c) => {
					const d = c();
					d.user.account && (F.d(d), r(Se({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(r.a)(Y.C), xe = Object(r.a)(Y.B), _e = Object(r.a)(Y.D), Ie = Object(r.a)(Y.h), ke = ({
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
					n(ve({
						draftKey: o
					})), F.e(a);
					const i = a.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, n, o, r, c) => {
							const d = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === k.i.MARKDOWN) d.text = o.text;
							else {
								d.text = null;
								let e = null;
								o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(R.a)(Object(S.a)(e, [g.a]), {
								endpoint: Object(v.a)(Object(E.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.ib.POST,
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
								error: e.error || Object(x.a)()
							})
						})(d(), e, 0, r, i, m);
					if (u.ok) {
						const s = u.body;
						n(_e({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(X.i)({
							[e]: {
								...s.comment
							}
						}))
					} else n(xe({
						draftKey: o,
						error: u.error
					}))
				}, Ce = Object(r.a)(Y.z), Ee = Object(r.a)(Y.y), Ae = Object(r.a)(Y.A), Pe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o();
					n(Ce({
						id: e
					})), F.b(e, c);
					const d = await ((e, t) => Object(R.a)(Object(S.a)(e, [g.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: s.ib.POST,
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
						error: e.error || Object(x.a)()
					}))(r(), e);
					d.ok ? n(Ae({
						id: e,
						postId: t
					})) : n(Ee({
						id: e,
						error: d.error
					}))
				}, Te = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(D.q)(o(), e, s)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, De = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var c, d, a, i, m, u;
					n(Object(X.c)());
					const l = e => Object(p.f)(Object(p.e)(e, J.b.Error));
					if (((null === (d = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === V.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(d)), (await ((e, t) => Object(h.a)(e, {
								...T,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.tb)(null !== (m = null === (i = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer receive updates on this comment", null, {
								hk: "1L9sav"
							});
							n(Object(p.f)({
								kind: J.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(d)), n(l(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return C
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "o", (function() {
				return $
			})), n.d(t, "p", (function() {
				return J
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return z
			})), n.d(t, "n", (function() {
				return Q
			})), n.d(t, "c", (function() {
				return X
			})), n.d(t, "k", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				i = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				f = n("./src/reddit/helpers/commentList/index.ts"),
				O = n("./src/reddit/helpers/trackers/comment.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				v = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/actions/comment/constants.ts");
			const k = {},
				C = Object(c.a)(I.o),
				E = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(_.K)(n())) return t(Object(i.k)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(S.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? p.k : p.g;
					if (t(C({
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
						t(Object(l.f)({
							text: n,
							kind: R.b.Undo,
							buttonText: o,
							buttonAction: E(e)
						}))
					} else t(C({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, A = e => `viewing-comment-${e}`, P = o.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const s = n();
					if (!Object(g.b)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					O.c({
						state: s,
						commentId: e
					}), r.c.start(A(e));
					const c = setTimeout(() => O.a({
						state: s,
						commentId: e
					}), P);
					k[e] = c
				}, D = (e, t) => async (n, o) => {
					const s = o(),
						c = A(e);
					if (Object(g.b)(s, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < P && (clearTimeout(k[e]), delete k[e])
					}
				}, L = Object(c.a)(I.x), w = Object(c.a)(I.w), K = Object(c.a)(I.v), N = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						c = r.moreComments.models[t],
						i = r.platform.currentPage,
						m = i && i.routeMatch,
						u = m && m.match,
						{
							partialPostId: l
						} = u ? u.params : null;
					if (!l) return;
					const b = Object(y.s)(l);
					n(L({
						moreCommentsId: c.id
					}));
					const O = await Object(p.e)(s(), b, {
						token: c.token
					}, Object(v.a)(r));
					if (O.ok) {
						const t = O.body,
							o = Object(f.a)(t, b, r);
						n(w({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const s = r.posts.models[b];
						let i;
						s && "subreddit" === s.belongsTo.type && t.comments && (i = s.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})));
						const m = O.body.comments;
						await n(Object(a.b)(i, m))
					} else n(K({
						moreCommentsItem: c,
						...O.error
					}))
				}, M = Object(b.a)(f.b, h.a.upvoted), U = Object(b.a)(f.b, h.a.downvoted), F = Object(c.a)(I.j), V = Object(c.a)(I.i), B = Object(c.a)(I.e), H = Object(c.a)(I.f), $ = (Object(c.a)(I.c), Object(c.a)(I.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						c = Object(j.i)(e),
						d = Object(S.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(x.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						i = d.depth;
					o(B({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: a
					})), a || 0 !== i || n(e, !0), Object(u.d)()
				}), J = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
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
						d = Object(f.e)(t, e, n, c),
						a = Object(x.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(B({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: a
					})), 0 === n && o(d, !0), Object(u.d)()
				}, q = Object(c.a)(I.r), W = e => t => t(q({
					draftKey: e
				})), z = Object(c.a)(I.a), Q = Object(c.a)(I.E), X = Object(c.a)(I.b), Y = Object(c.a)(I.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
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
			const R = Object(r.a)(y.n),
				h = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(u.h)(o(), e)).ok && t((e => async t => {
						t(R({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(O.K)(n())) return void t(Object(d.i)(m.a.LOGIN_MODAL_ID));
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? u.j : u.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, g = Object(r.a)(y.F), v = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = s.features.comments.models[e],
						c = s.user.account ? s.user.account.displayText : null;
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
					})), (await Object(u.a)(o(), e)).ok || t(Object(j.i)({
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
				}, x = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
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
					})), (await Object(u.f)(s(), e, t)).ok || n(Object(j.i)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(a.d)())
				}, _ = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? u.i : u.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, I = (e, t, n) => async (r, c, {
					gqlContext: d
				}) => {
					const a = Object(f.b)(c(), {
						commentId: e
					});
					if (!a) return;
					const m = n === s.ac.Snoozed,
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
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						r(Object(i.f)(e))
					}
				}, k = (e, t, n) => async (o, r, {
					apiContext: d
				}) => {
					const a = r(),
						i = a.features.comments.models[e];
					if (!i) return;
					const m = i.postId,
						l = a.postStickiedComments.data[m],
						b = s.g[t];
					o(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.F.ADMIN,
							isMod: t === s.F.MODERATOR,
							isStickied: !!n
						}
					})), n && l && l !== e && o(Object(j.i)({
						[l]: {
							isStickied: !1
						}
					})), (await Object(u.b)(d(), e, b, n || null)).ok ? n && o(g({
						id: e,
						postId: m,
						commentsPageKey: Object(c.a)(m, null, {
							sort: s.t.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(j.i)({
						[e]: {
							distinguishType: i.distinguishType,
							isAdmin: i.isAdmin,
							isMod: i.isMod,
							isStickied: i.isStickied
						}
					})), o(Object(j.i)({
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
			const b = Object(s.a)(l.G),
				p = Object(s.a)(l.p),
				f = Object(s.a)(l.Q),
				O = (e, t, n) => async (s, d, {
					apiContext: O
				}) => {
					a.j(d(), t);
					const y = t === i.i.MARKDOWN,
						R = t === i.i.RICH_TEXT,
						h = l.k;
					if (y && Object(m.G)(n)) return s(f({
						editorKey: e,
						editorMode: i.i.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (R && !n) return s(f({
						editorKey: e,
						editorMode: i.i.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(h));
					const S = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					S.ok ? (s(p(h)), s(f({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), s(j(t))) : (s(p(h)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const s = Object(d.l)();
					if (s >= 3) return;
					const c = n().user.prefs.useMarkdown ? i.i.MARKDOWN : i.i.RICH_TEXT;
					if (e === c) return;
					const a = e === i.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(d.qb)(s + 1)
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
				return Re
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return he
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), n.d(t, "submitRemovalReason", (function() {
				return ge
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ve
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
			const h = {};
			var S = (e = h, t) => {
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
				v = Object(r.c)({
					api: j,
					models: R,
					reasonOrder: S,
					removedItemIds: g
				}),
				x = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeActionCreator/index.ts"),
				I = n("./src/lib/makeCommentsPageKey/index.ts"),
				k = n("./src/lib/makeDraftKey/index.ts"),
				C = n("./src/reddit/actions/bulkActions/index.ts"),
				E = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				D = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/constants/modals.ts"),
				K = n("./src/lib/makeApiRequest/index.ts"),
				N = n("./src/lib/omitHeaders/index.ts"),
				M = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(K.a)(Object(N.a)(e, [M.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: x.ib.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: x.ib.POST,
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
			Object(s.a)({
				features: {
					removalReasons: v
				}
			});
			const X = Object(_.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(_.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(_.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().subreddits.models[e].name;
					t(X());
					const r = await ((e, t) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: x.ib.GET
					}))(o(), s);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(_.a)(c), ne = Object(_.a)(d), oe = Object(_.a)(a), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: x.ib.POST,
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
						})), n(Object(L.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(d.error))
				}, re = Object(_.a)(i), ce = Object(_.a)(m), de = Object(_.a)(u), ae = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(re());
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: x.ib.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(L.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ie = Object(_.a)(l), me = Object(_.a)(b), ue = Object(_.a)(p), le = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(K.a)(Object(N.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: x.ib.DELETE
					}))(r(), c, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(L.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(_.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(w.a.ADD_REMOVAL_REASON))
				}, fe = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), Re = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), he = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, n, o, s) => async (r, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? q.e.Post : q.e.Comment,
						l = u === q.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === q.e.Post ? D.R : E.i;
					if (!l || !i) return !1;
					r(fe()), r(b({
						[m]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const p = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						f = await F(d(), p);
					if (f.ok) {
						if (r(Oe()), t) {
							r(ye());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								c = await V(d(), Object(q.h)(s, u), u);
							if (c.ok) {
								if (o === q.f.Public) {
									if (r(he()), c.body) {
										const e = Object(H.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Q.f)(a),
											o = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let s = n && o && Object($.a)(o, a, a.posts.models[e.postId]);
										if (s || (s = Object(I.a)(e.postId, null, {
												sort: x.u,
												hasSortParam: !0
											})), u === q.e.Post) {
											const n = Object(k.a)(G.c.replyToPost, m);
											r(Object(A.o)({
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
											})), o && o !== e.id && r(Object(E.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === q.e.Comment) {
											const e = Object(k.a)(G.c.replyToComment, l.id),
												n = Object(z.j)(a, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(A.m)({
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
				}, ve = (e, t, n, s, r) => async (c, d, {
					apiContext: a
				}) => {
					const i = d(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(L.f)({
							kind: W.b.SuccessMod,
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
							operation: J.a.RemovalReason,
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
								r = await V(a(), Object(q.h)(o, q.e.Bulk), q.e.Bulk);
							r.ok ? (c(Re()), c(u)) : c(Se(r.error))
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
				return R
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
				return g
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
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unsave`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/lock`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/unlock`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/approve`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/remove`),
					method: s.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				y = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n, c) => {
					let d = Object(a.a)(Object(u.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (d = Object(i.a)(d)), Object(r.a)(e, {
						data: n,
						endpoint: d,
						method: s.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, o) => Object(r.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: s.ib.POST,
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
				return t === a.i.MARKDOWN ? i.richtext_json = n : i.markdown_text = n, Object(s.a)(Object(r.a)(e, [c.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.ib.POST,
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
			var o = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				a = e => {
					switch (e.commentLink.type) {
						case o.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case o.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case o.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				i = (e, t) => e.type === o.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, o) => {
					let r = Object(s.n)(o, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; r && r.depth > n && r.prev && (c = r.prev, (r = Object(s.n)(o, {
							commentLink: c,
							commentsPageKey: e
						})) && !(r.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: o,
						comments: s
					} = e, {
						head: d
					} = o[t];
					if (d) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: r.E,
								expEventOverride: t
							});
							return !!(Object(r.Ke)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.H.SERVER_ERROR,
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
			const s = e => {
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
				r = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.user(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					actionInfo: s.actionInfo(t),
					app: s.app(t),
					referrer: s.referrer(t),
					session: s.session(t)
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
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "h", (function() {
				return R
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");
			const m = "comment_composer",
				u = e => {
					const t = Object(d.n)(e);
					return {
						source: m,
						action: o.c.CLICK,
						...Object(a.defaults)(e),
						screen: Object(a.screen)(e),
						subreddit: Object(a.subreddit)(e),
						post: t ? Object(a.post)(e, t) : null,
						profile: Object(a.profile)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				l = async (e, t, o, s) => {
					const r = {
							commentId: s,
							commentsPageKey: o
						},
						d = s && Object(c.j)(e, r) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(i.a)({
						noun: "comment",
						...u(e),
						comment: s ? Object(a.comment)(e, s) : null,
						listing: Object(a.listing)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, b = (e, t, n, o) => {
					const s = u(e);
					return Object(i.a)({
						...s,
						actionInfo: {
							...s.actionInfo,
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
				}, p = e => Object(i.a)({
					noun: "cancel",
					...u(e)
				}), f = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.defaults)(t),
					screen: Object(a.screen)(t),
					subreddit: Object(a.subreddit)(t),
					post: Object(a.post)(t, e)
				}), j = e => Object(i.a)({
					noun: "edit",
					...u(e)
				}), y = e => Object(i.a)({
					noun: "save_edit",
					...u(e)
				}), R = (e, t) => n => {
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
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const r = [];
			var c = (e = r, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
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
				p = Object(o.c)({
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
				R = n.n(y),
				h = n("./node_modules/lodash/values.js"),
				S = n.n(h),
				g = n("./src/reddit/actions/comment/websocket/constants.ts");
			const v = {};

			function x(e) {
				return R()(e, "id").sort((e, t) => e.created - t.created)
			}
			var _ = (e = v, t) => {
					switch (t.type) {
						case d.f:
						case f.w:
						case d.b: {
							const {
								comments: n,
								key: o
							} = t.payload, s = e[o] ? e[o] : [], r = function(e, t) {
								return S()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), c = x([...s, ...r]);
							return {
								...e,
								[o]: [...c]
							}
						}
						case g.b:
						case g.c:
						case g.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: o,
									isStickied: s,
									authorId: r
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...x([...e[c] ? e[c] : [], {
									id: n,
									created: o,
									stickied: s,
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
							commentLists: o,
							continueThreads: s,
							key: r,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, a = o[c.postId], i = e[r], m = {}, u = i[c.id];
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
									continueThreadDict: s
								}),
								t = Object(C.c)({
									commentLink: a.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[r]: {
								...e[r],
								...P(n),
								...P(s),
								...P(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: o,
							key: s,
							moreComments: r
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...P(n),
								...P(o),
								...P(r)
							}
						}
					}
					case g.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: o,
							headCommentId: s
						} = t.payload, r = e[o], c = {};
						let d = null;
						return s && (c[s] = {
							...r[s],
							prev: Object(E.i)(n.id)
						}, d = Object(E.i)(s)), {
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
					case f.I: {
						const {
							comment: n,
							commentsPageKey: o,
							parentCommentId: s,
							depth: r
						} = t.payload, c = e[o], d = {};
						let a = null;
						if (!c[s]) return e;
						const i = c[s].next;
						return i && (d[i.id] = {
							...c[i.id],
							prev: Object(E.i)(n.id)
						}, a = i), d[s] = {
							...c[s],
							next: Object(E.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...d,
								[n.id]: {
									depth: r,
									next: a,
									prev: Object(E.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var L = (e = D, t) => {
				switch (t.type) {
					case g.b:
					case g.c:
					case f.J: {
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
							postId: s
						} = t.payload;
						return {
							...e,
							[o]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return e
				}
			};
			const w = {};
			var K = (e = w, t) => {
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
					case f.J: {
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
				api: p,
				followed: j,
				keyToChatCommentLinks: _,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: L,
				keyToPostId: K,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "G", (function() {
				return g
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "q", (function() {
				return A
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "I", (function() {
				return L
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "C", (function() {
				return K
			})), n.d(t, "D", (function() {
				return N
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "J", (function() {
				return B
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "i", (function() {
				return $
			})), n.d(t, "F", (function() {
				return J
			})), n.d(t, "B", (function() {
				return G
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "p", (function() {
				return W
			})), n.d(t, "K", (function() {
				return z
			})), n.d(t, "y", (function() {
				return Q
			})), n.d(t, "A", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
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
			const p = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				f = (e, {
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
				R = [],
				h = Object(c.a)((e, t) => {
					const n = y(e, t),
						o = n && n.id;
					if (!o) return R;
					const {
						commentsPageKey: s
					} = t, r = e.pages.comments.keyToCommentThreadLinkSets[s], c = [];
					let a = {
						id: o,
						type: d.a.Comment
					};
					do {
						c.push(a), a = r[a.id].next
					} while (a);
					return c
				}),
				S = (e, t) => j(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				g = (e, {
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
					const s = e.pages.comments.keyToCommentThreadLinkSets[o];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				_ = (e, t) => {
					const n = t.commentsPageKey ? v(e, t) : null;
					return n ? n.depth : null
				},
				I = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: o
					} = t;
					switch (o) {
						case d.a.Comment:
							return e.features.comments.models[n];
						case d.a.MoreComments:
							return e.moreComments.models[n];
						case d.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				k = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(a.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				C = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				E = e => e.moreComments.models,
				A = e => e.features.comments.models,
				P = (e, {
					commentId: t
				}) => {
					const n = Object(m.b)(e, {
						commentId: t
					});
					return n ? Object(m.a)(e, n) : ""
				},
				T = (e, {
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
				w = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						s = Object(m.b)(e, {
							commentId: o
						}),
						r = s && _(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof r) return {
						...s,
						depth: r
					}
				},
				K = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				N = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
				V = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				B = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				H = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				$ = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				G = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				W = e => e.features.comments.visitHighlightFilter,
				z = (e, t) => {
					const n = Object(m.b)(e, t);
					if (n) return Object(i.V)(e, n)
				},
				Q = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				X = (e, {
					commentId: t
				}) => {
					var n, o;
					const s = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
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
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.68c380c79c2c2e8b34af.js.map