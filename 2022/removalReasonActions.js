// https://www.redditstatic.com/desktop2x/removalReasonActions.7ac73e03490f8fee9078.js
// Retrieved at 1/25/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
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
				return he
			})), n.d(t, "j", (function() {
				return ge
			})), n.d(t, "d", (function() {
				return Re
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "i", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return Pe
			})), n.d(t, "k", (function() {
				return Te
			})), n.d(t, "r", (function() {
				return Le
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
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				R = n("./src/reddit/constants/headers.ts"),
				I = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/genericServerError/index.ts"),
				x = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				E = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, n, o) => {
					let s, r;
					if (o === _.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(g.a)(e, {
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
					if (r === _.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(S.a)(e, [R.a]), {
						method: s.jb.POST,
						endpoint: Object(I.a)(Object(C.a)(Object(E.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(x.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(x.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				};
			var T = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var L = n("./src/reddit/endpoints/post/index.tsx"),
				D = n("./src/reddit/endpoints/post/convert.ts"),
				w = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				N = n("./src/reddit/featureFlags/index.ts"),
				K = n("./src/reddit/helpers/correlationIdTracker.ts"),
				M = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				G = n("./src/reddit/models/Comment/index.ts"),
				V = n("./src/reddit/models/PostDraft/index.ts"),
				B = n("./src/reddit/models/RichTextJson/index.ts"),
				J = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				$ = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/commentSelector.ts"),
				H = n("./src/reddit/selectors/platform.ts"),
				z = n("./src/reddit/selectors/posts.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)(Y.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(W.L)(s) && e) {
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
						u = Object(H.e)(m);
					let l = "";
					if (u && (l = u.name), N.d.enableToxicityWarning(m)) {
						if (!(await A(a(), l, o, s))) return void c(Object(i.i)(ce))
					}
					c(ie(e, t, n, o, s, r))
				}, ae = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, r, c, d, a) => async (u, p, {
					apiContext: j
				}) => {
					u(Object(i.g)(ce));
					const y = p(),
						h = y.features.comments.submit.pending[n];
					if (!y.user.account || h) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const g = y.user.account.displayText,
						S = r.commentMode;
					let R;
					if (a ? (R = await Object(w.i)(j(), e, r, g), u(Object(l.a)({
							streamId: e,
							level: R.body.automuteLevel
						}))) : R = await P(j(), e, r, g, S), R.ok) {
						let o;
						o = R.body, u(ne({
							...o,
							headCommentId: Object(q.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(z.H)(p(), {
							postId: e
						});
						u(Object(m.z)(s, O.a.CommentSubmitted))
					} else {
						R.error && R.error.type === s.Jb && F.i(y, ae(r), e);
						const t = R.error && R.error.fields && R.error.fields[0] ? R.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: R.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: $.b.Error,
							text: t
						}))
					}
					re(p(), t, c, R).then(() => R.ok && c === _.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), d || Object(b.d)()
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
					} = e, u = n(), l = Object(H.e)(u);
					let b = "";
					if (l && (b = l.name), N.d.enableToxicityWarning(u)) {
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
						f = l.features.comments.submit.pending[a];
					if (!l.user.account || f) return;
					t(te({
						draftKey: a,
						draft: m
					}));
					const p = l.user.account.displayText,
						O = m.commentMode,
						j = await P(o(), r, m, p, O);
					if (j.ok) t(oe({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: a,
						depth: d + 1
					}));
					else {
						if (j.error && j.error.type === s.Jb) {
							const e = Object(Q.b)(l, {
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
				}, le = Object(r.a)(Y.q), be = Object(r.a)(Y.p), fe = Object(r.a)(Y.l), pe = (Object(r.a)(Y.g), Object(r.a)(Y.m)), Oe = (Object(r.a)(Y.t), (e, t, n) => async (s, r, {
					apiContext: c
				}) => {
					const d = e === _.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(B.G)(t)) s(pe({
						editorMode: e,
						draftKey: n,
						content: d ? B.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(D.a)(c(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(f.f)({
							duration: f.a,
							kind: $.b.Error,
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
						m = Object(c.a)(V.c.replyToComment, t);
					if (!Object(W.J)(s())) return o(Object(a.j)()), void o(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(q.m)(s(), {
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
						f = null;
					const p = r.user.prefs.commentMode,
						O = Object(M.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === _.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => J.s(e, null)).map(e => J.l([e])),
								n = J.s("", null),
								o = J.l([n]);
							f = {
								document: [J.c(t), o]
							}
						}
					}
					const j = r.features.comments.drafts[m];
					let y;
					if (y = O ? {
							commentMode: p,
							draftType: V.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : j || {
							commentMode: p,
							draftType: V.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(W.L)(r)) {
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
					t(Object(X.p)(e)), t(Re(e))
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
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, ge = (e, t) => n => n(fe({
					draftKey: e,
					formData: t
				})), Se = Object(r.a)(Y.s), Re = ({
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
							draftType: V.c.edit,
							hasFocus: !0
						}
					})))
				}, Ie = Object(r.a)(Y.C), ve = Object(r.a)(Y.B), xe = Object(r.a)(Y.D), ke = Object(r.a)(Y.h), _e = ({
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
					n(Ie({
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
							if (c === _.i.MARKDOWN) d.text = o.text;
							else {
								d.text = null;
								let e = null;
								o.rteState && (e = p.a.toRichTextJSON(o.rteState).document), d.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(S.a)(e, [R.a]), {
								endpoint: Object(I.a)(Object(E.a)(Object(C.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: d
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(k.a)(e)
							} : {
								...e,
								body: {
									comment: Object(x.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(x.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(v.a)()
							})
						})(d(), e, 0, r, i, m);
					if (u.ok) {
						const s = u.body;
						n(xe({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(X.i)({
							[e]: {
								...s.comment
							}
						}))
					} else n(ve({
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
					const d = await ((e, t) => Object(h.a)(Object(S.a)(e, [R.a]), {
						endpoint: Object(I.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
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
					})), (await Object(L.o)(o(), e, s)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Le = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var c, d, a, i, m, u;
					n(Object(X.c)());
					const l = e => Object(f.f)(Object(f.e)(e, $.b.Error));
					if (((null === (d = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === G.a.FOLLOWED,
							d = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(d)), (await ((e, t) => Object(g.a)(e, {
								...T,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.tb)(null !== (m = null === (i = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: $.b.SuccessCommunityGreen,
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
				return A
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return G
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "o", (function() {
				return q
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "d", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
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
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				i = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/modQueueTriggers/index.ts"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				R = n("./src/reddit/selectors/comments.ts"),
				I = n("./src/reddit/selectors/commentSelector.ts"),
				v = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/comment/constants.ts");
			const E = {},
				A = Object(c.a)(C.o),
				P = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(_.J)(n())) return t(Object(i.j)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(R.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? p.m : p.i;
					if (t(A({
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
						t(Object(b.f)({
							text: n,
							kind: g.b.Undo,
							buttonText: o,
							buttonAction: P(e)
						}))
					} else t(A({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, L = o.a.telemetry.commentConsumedThreshold, D = e => async (t, n) => {
					const s = n();
					if (!Object(I.b)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					j.c({
						state: s,
						commentId: e
					}), r.c.start(T(e));
					const c = setTimeout(() => j.a({
						state: s,
						commentId: e
					}), L);
					E[e] = c
				}, w = (e, t) => async (n, o) => {
					const s = o(),
						c = T(e);
					if (Object(I.b)(s, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < L && (clearTimeout(E[e]), delete E[e])
					}
				}, N = Object(c.a)(C.x), K = Object(c.a)(C.w), M = Object(c.a)(C.v), U = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						c = r.moreComments.models[t],
						i = r.platform.currentPage,
						m = i && i.routeMatch,
						l = m && m.match,
						{
							partialPostId: b
						} = l ? l.params : null;
					if (!b) return;
					const f = Object(h.t)(b);
					n(N({
						moreCommentsId: c.id
					}));
					const j = await Object(p.f)(s(), f, {
						token: c.token
					}, Object(v.a)(r));
					if (j.ok) {
						const t = j.body,
							s = Object(O.a)(t, f, r);
						n(K({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const i = r.posts.models[f];
						let m;
						i && "subreddit" === i.belongsTo.type && t.comments && (m = i.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [i.id],
							skip: ["communityDetails", "subscription"],
							subredditId: m
						})));
						const l = j.body.comments;
						await n(Object(a.b)(m, l)), Object(k.h)(o(), {
							subredditId: i.belongsTo.id
						}) && n(Object(u.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else n(M({
						moreCommentsItem: c,
						...j.error
					}))
				}, F = Object(f.a)(O.b, S.a.upvoted), G = Object(f.a)(O.b, S.a.downvoted), V = Object(c.a)(C.j), B = Object(c.a)(C.i), J = Object(c.a)(C.e), $ = Object(c.a)(C.f), q = (Object(c.a)(C.c), Object(c.a)(C.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						c = Object(y.i)(e),
						d = Object(R.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						a = Object(x.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						i = d.depth;
					o(J({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: a
					})), a || 0 !== i || n(e, !0), Object(l.d)()
				}), Q = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n($({
						commentId: e,
						commentsPageKey: t
					}))
				}, H = ({
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
					s(J({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: a
					})), 0 === n && o(d, !0), Object(l.d)()
				}, z = Object(c.a)(C.r), W = e => t => t(z({
					draftKey: e
				})), X = Object(c.a)(C.a), Y = Object(c.a)(C.E), Z = Object(c.a)(C.b), ee = Object(c.a)(C.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "b", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
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
				f = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/actions/comment/index.ts"),
				h = n("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(h.n),
				S = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(j.J)(n())) return void t(Object(d.i)(m.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isLocked ? u.l : u.e;
					t(Object(y.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: f.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(y.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, I = Object(r.a)(h.F), v = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						c = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					c && d && (t(Object(y.i)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(s(), e)).ok ? t(Object(i.f)({
						kind: f.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(y.i)({
						[e]: {
							isApproved: c.isApproved,
							approvedBy: null,
							bannedBy: c.bannedBy,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							modNote: c.modNote,
							modReasonBy: c.modReasonBy,
							modRemovalReason: c.modRemovalReason,
							numReports: c.numReports || null
						}
					})), Object(a.d)())
				}, x = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s(),
						d = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					d && m && (n(Object(y.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(r(), e, t)).ok ? n(Object(i.f)({
						kind: f.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(y.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(a.d)())
				}, k = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.ignoreReports ? u.k : u.d;
					t(Object(y.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: f.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(y.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, _ = (e, t, n) => async (r, c, {
					gqlContext: d
				}) => {
					const a = Object(p.b)(c(), {
						commentId: e
					});
					if (!a) return;
					const m = n === s.cc.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(d(), {
							input: u
						})).ok) r(Object(y.i)({
						[e]: {
							userReports: Object(b.a)(a.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), f.b.Error);
						r(Object(i.f)(e))
					}
				}, C = (e, t, n) => async (o, r, {
					apiContext: d,
					gqlContext: a
				}) => {
					const i = r(),
						m = i.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						b = i.postStickiedComments.data[l],
						f = s.g[t];
					let p;
					if (o(Object(y.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!n
							}
						})), n && b && b !== e && o(Object(y.i)({
							[b]: {
								isStickied: !1
							}
						})), Object(O.a)(r())) {
						const o = Object(u.b)(a(), e, t),
							s = Object(u.c)(a(), e, !!n),
							r = [o];
						(n || !n && e === b) && r.push(s), p = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else p = await Object(u.g)(d(), e, f, n || null);
					p.ok ? n && o(I({
						id: e,
						postId: l,
						commentsPageKey: Object(c.a)(l, null, {
							sort: s.u.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (o(Object(y.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(y.i)({
						[b]: {
							isStickied: i.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/actions/comment/index.ts"),
				s = n("./src/reddit/actions/post.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/ModQueueTriggers.json");
			const d = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (n, d, {
				gqlContext: a
			}) => {
				var i, m;
				if (!e.length && !t.length) return;
				const u = await ((e, t) => Object(r.a)(e, {
					...c,
					variables: t
				}))(a(), {
					commentIds: e,
					postIds: t
				});
				if (u.ok) {
					const e = u.body;
					if (e.data.commentsByIds) {
						const t = Object.fromEntries(null === (i = e.data.commentsByIds) || void 0 === i ? void 0 : i.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						n(Object(o.i)(t))
					}
					if (e.data.postsInfoByIds) {
						const t = Object.fromEntries(null === (m = e.data.postsInfoByIds) || void 0 === m ? void 0 : m.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						n(Object(s.S)(t))
					}
				}
			}
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
				f = Object(s.a)(l.p),
				p = Object(s.a)(l.Q),
				O = (e, t, n) => async (s, d, {
					apiContext: O
				}) => {
					a.j(d(), t);
					const y = t === i.i.MARKDOWN,
						h = t === i.i.RICH_TEXT,
						g = l.k;
					if (y && Object(m.G)(n)) return s(p({
						editorKey: e,
						editorMode: i.i.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (h && !n) return s(p({
						editorKey: e,
						editorMode: i.i.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(g));
					const S = await Object(c.a)(O(), t, y ? JSON.stringify(n) : n);
					S.ok ? (s(f(g)), s(p({
						editorKey: e,
						editorMode: t,
						content: S.body.output
					})), s(j(t))) : (s(f(g)), s(Object(r.f)({
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
				return fe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return pe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ye
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return he
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), n.d(t, "submitRemovalReason", (function() {
				return Re
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ie
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
				f = "REMOVALREASONS__DELETE_FAILED";
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
					case f:
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
						case f:
							return !1;
						default:
							return e
					}
				},
				j = Object(r.c)({
					error: p,
					pending: O
				});
			const y = {};
			var h = (e = y, t) => {
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
			const g = {};
			var S = (e = g, t) => {
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
				I = Object(r.c)({
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: R
				}),
				v = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/makeActionCreator/index.ts"),
				k = n("./src/lib/makeCommentsPageKey/index.ts"),
				_ = n("./src/lib/makeDraftKey/index.ts"),
				C = n("./src/reddit/actions/bulkActions/index.ts"),
				E = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				P = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				L = n("./src/reddit/actions/post.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/constants/modals.ts"),
				N = n("./src/lib/makeApiRequest/index.ts"),
				K = n("./src/lib/omitHeaders/index.ts"),
				M = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(N.a)(Object(K.a)(e, [M.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: v.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: v.jb.POST,
					type: "json",
					data: t
				});
			var V = n("./src/reddit/helpers/isPost.ts"),
				B = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = n("./src/reddit/helpers/routeKey/index.ts"),
				$ = n("./src/reddit/models/ModQueue/index.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/RemovalReason/index.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				W = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: I
				}
			});
			const X = Object(x.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(x.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(x.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().subreddits.models[e].name;
					t(X());
					const r = await ((e, t) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: v.jb.GET
					}))(o(), s);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(x.a)(c), ne = Object(x.a)(d), oe = Object(x.a)(a), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(te());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: v.jb.POST,
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
						})), n(Object(D.f)({
							kind: H.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(d.error))
				}, re = Object(x.a)(i), ce = Object(x.a)(m), de = Object(x.a)(u), ae = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(re());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: v.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					d.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(D.f)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ie = Object(x.a)(l), me = Object(x.a)(b), ue = Object(x.a)(f), le = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(N.a)(Object(K.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: v.jb.DELETE
					}))(r(), c, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(D.f)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(x.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(w.a.ADD_REMOVAL_REASON))
				}, pe = Object(x.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(x.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(x.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(x.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(x.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(x.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(x.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, n, o, s) => async (r, c, {
					apiContext: d
				}) => {
					const a = c(),
						i = a.user.account && a.user.account.displayText,
						m = e[0],
						u = Object(V.a)(m) ? Q.e.Post : Q.e.Comment,
						l = u === Q.e.Post ? a.posts.models[m] : a.features.comments.models[m],
						b = u === Q.e.Post ? L.S : E.i;
					if (!l || !i) return !1;
					r(pe()), r(b({
						[m]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const f = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						p = await F(d(), f);
					if (p.ok) {
						if (r(Oe()), t) {
							r(ye());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								c = await G(d(), Object(Q.h)(s, u), u);
							if (c.ok) {
								if (o === Q.f.Public) {
									if (r(ge()), c.body) {
										const e = Object(B.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(W.f)(a),
											o = a.platform.currentPage && a.platform.currentPage.routeMatch;
										let s = n && o && Object(J.a)(o, a, a.posts.models[e.postId]);
										if (s || (s = Object(k.a)(e.postId, null, {
												sort: v.v,
												hasSortParam: !0
											})), u === Q.e.Post) {
											const n = Object(_.a)(q.c.replyToPost, m);
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
										} else if (u === Q.e.Comment) {
											const e = Object(_.a)(q.c.replyToComment, l.id),
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
								} else r(he());
								return !0
							}
							return r(Se(c.error)), !1
						}
					} else r(je(p.error)), r(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, Ie = (e, t, n, s, r) => async (c, d, {
					apiContext: a
				}) => {
					const i = d(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(pe());
					const u = Object(D.f)({
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
							operation: $.a.RemovalReason,
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
								r = await G(a(), Object(Q.h)(o, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (c(he()), c(u)) : c(Se(r.error))
						} else c(u)
					} else c(je(b.error))
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
				return g
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			}));
			var o = n("./src/config.ts"),
				s = n("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = n("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = n("./src/redditGQL/types.ts"),
				d = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				b = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				f = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				p = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const O = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/save`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unsave`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/lock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unlock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/approve`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/remove`),
					method: d.jb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				R = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t, n, s) => {
					let r = Object(l.a)(Object(p.a)(Object(f.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (r = Object(b.a)(r)), Object(a.a)(e, {
						data: n,
						endpoint: r,
						method: d.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				k = (e, t, n, o) => Object(a.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: d.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				_ = {
					[d.G.NONE]: c.d.None,
					[d.G.MODERATOR]: c.d.ModDistinguished,
					[d.G.ADMIN]: c.d.AdminDistinguished,
					[d.G.ALUMNI_ADMIN]: c.d.AlumniDistinguished
				};

			function C(e, t, n) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === d.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: _[t]
						}
					}
				}(t, n);
				return Object(i.a)(e, {
					...s,
					variables: o
				})
			}

			function E(e, t, n) {
				return Object(i.a)(e, {
					...r,
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
					method: o.jb.POST,
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
								experimentName: r.J,
								expEventOverride: t
							});
							return !!(Object(r.mf)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
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
					...s.m(e),
					profile: s.P(e),
					post: s.G(e, t),
					media: s.z(e, t),
					subreddit: s.hb(e),
					comment: s.h(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...s.m(e),
					profile: s.P(e),
					post: s.G(e, t),
					media: s.z(e, t),
					subreddit: s.hb(e),
					comment: s.h(e, t)
				}),
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.ob(t),
					subreddit: s.hb(t),
					post: s.G(t, e),
					actionInfo: s.c(t),
					app: s.f(t),
					referrer: s.V(t),
					session: s.cb(t)
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
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");
			const m = "comment_composer",
				u = e => {
					const t = Object(d.o)(e);
					return {
						source: m,
						action: o.c.CLICK,
						...Object(a.m)(e),
						screen: Object(a.Y)(e),
						subreddit: Object(a.hb)(e),
						post: t ? Object(a.G)(e, t) : null,
						profile: Object(a.P)(e),
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
						comment: s ? Object(a.h)(e, s) : null,
						listing: Object(a.x)(e, void 0, {
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
				}, f = e => Object(i.a)({
					noun: "cancel",
					...u(e)
				}), p = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.m)(t),
					screen: Object(a.Y)(t),
					subreddit: Object(a.hb)(t),
					post: Object(a.G)(t, e)
				}), j = e => Object(i.a)({
					noun: "edit",
					...u(e)
				}), y = e => Object(i.a)({
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
					case d.i: {
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
						case d.d:
						case d.h:
						case d.i: {
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
					error: i,
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
				g = n("./node_modules/lodash/values.js"),
				S = n.n(g),
				R = n("./src/reddit/actions/comment/websocket/constants.ts");
			const I = {};

			function v(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var x = (e = I, t) => {
					switch (t.type) {
						case d.f:
						case p.w:
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
							}(n, s.find(e => e.stickied)), c = v([...s, ...r]);
							return {
								...e,
								[o]: [...c]
							}
						}
						case R.b:
						case R.c:
						case R.d:
						case p.J:
						case p.I: {
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
								[c]: [...v([...e[c] ? e[c] : [], {
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
				k = n("./node_modules/lodash/mapValues.js"),
				_ = n.n(k),
				C = n("./src/reddit/helpers/commentList/index.ts"),
				E = n("./src/reddit/models/Comment/index.ts");
			const A = {};

			function P(e) {
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
			var T = (e = A, t) => {
				switch (t.type) {
					case p.w: {
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
					case R.b:
					case p.J: {
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
					case p.I: {
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
			const L = {};
			var D = (e = L, t) => {
				switch (t.type) {
					case R.b:
					case R.c:
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
							postId: s
						} = t.payload;
						return {
							...e,
							[o]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					case d.i: {
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
			const w = {};
			var N = (e = w, t) => {
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
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: D,
				keyToPostId: N,
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
				return j
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "H", (function() {
				return I
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "J", (function() {
				return w
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "D", (function() {
				return K
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "F", (function() {
				return U
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "K", (function() {
				return B
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "i", (function() {
				return $
			})), n.d(t, "G", (function() {
				return q
			})), n.d(t, "C", (function() {
				return Q
			})), n.d(t, "I", (function() {
				return H
			})), n.d(t, "p", (function() {
				return z
			})), n.d(t, "L", (function() {
				return W
			})), n.d(t, "y", (function() {
				return X
			})), n.d(t, "A", (function() {
				return Y
			})), n.d(t, "B", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Comment/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
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
				j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				h = (e, t) => {
					const n = y(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				g = [],
				S = Object(c.a)((e, t) => {
					const n = h(e, t),
						o = n && n.id;
					if (!o) return g;
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
				R = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				I = (e, {
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
				k = (e, t) => {
					const n = t.commentsPageKey ? v(e, t) : null;
					return n ? n.depth : null
				},
				_ = (e, {
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
				C = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(i.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				E = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				A = e => e.moreComments.models,
				P = e => e.features.comments.models,
				T = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				w = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				N = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						s = Object(u.b)(e, {
							commentId: o
						}),
						r = s && k(e, {
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
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				U = (e, {
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
				F = (e, {
					id: t
				}) => e.continueThreads.models[t],
				G = (e, {
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
				J = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				$ = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				q = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				H = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				W = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(m.W)(e, n)
				},
				X = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				Y = (e, {
					commentId: t
				}) => {
					var n, o;
					const s = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				},
				Z = (e, {
					commentId: t
				}) => {
					let n = Object(u.b)(e, {
						commentId: t
					});
					for (; n && n.parentId;) {
						if (Object(a.g)(n)) return !0;
						if ((n = Object(u.b)(e, {
								commentId: n.parentId
							})) && Object(a.g)(n)) return !0
					}
					return !1
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
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.7ac73e03490f8fee9078.js.map