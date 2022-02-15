// https://www.redditstatic.com/desktop2x/removalReasonActions.e2523ff3375a5742611a.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(s.c),
				c = Object(n.a)(s.b),
				a = Object(n.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return ee
			})), o.d(t, "o", (function() {
				return oe
			})), o.d(t, "m", (function() {
				return ne
			})), o.d(t, "q", (function() {
				return ce
			})), o.d(t, "t", (function() {
				return ae
			})), o.d(t, "n", (function() {
				return ie
			})), o.d(t, "s", (function() {
				return me
			})), o.d(t, "l", (function() {
				return ue
			})), o.d(t, "a", (function() {
				return be
			})), o.d(t, "b", (function() {
				return pe
			})), o.d(t, "p", (function() {
				return je
			})), o.d(t, "f", (function() {
				return Re
			})), o.d(t, "g", (function() {
				return ye
			})), o.d(t, "j", (function() {
				return Se
			})), o.d(t, "d", (function() {
				return Ee
			})), o.d(t, "c", (function() {
				return Ie
			})), o.d(t, "i", (function() {
				return ke
			})), o.d(t, "h", (function() {
				return De
			})), o.d(t, "k", (function() {
				return Ne
			})), o.d(t, "r", (function() {
				return Te
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/lib/makeDraftKey/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/postCreation/editorContent.ts"),
				l = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = o("./src/reddit/actions/shortcuts/utils.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = o("./src/reddit/constants/adEvents.ts"),
				j = o("./src/reddit/constants/localStorage.ts"),
				R = o("./src/redditGQL/operations/CommentToxicity.json"),
				y = o("./src/lib/makeApiRequest/index.ts"),
				S = o("./src/lib/makeGqlRequest/index.ts"),
				_ = o("./src/lib/omitHeaders/index.ts"),
				E = o("./src/reddit/constants/headers.ts"),
				x = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				A = o("./src/reddit/helpers/genericServerError/index.ts"),
				h = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = o("./src/reddit/models/PostCreationForm/index.ts"),
				v = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				g = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, o, n) => {
					let s, r;
					if (n === k.i.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(S.a)(e, {
						...R,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, o, n, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === k.i.MARKDOWN) c.text = o.text;
					else {
						c.text = null;
						let e = null;
						o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(_.a)(e, [E.a]), {
						method: s.jb.POST,
						endpoint: Object(x.a)(Object(v.a)(Object(g.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {
							comment: Object(h.a)(e.body.json.data.things[0].data, n)
						}
					} : {
						...e,
						body: {
							comment: Object(h.a)(e.body, n)
						}
					} : {
						...e,
						error: e.error || Object(A.a)()
					})
				};
			var N = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = o("./src/reddit/endpoints/post/index.tsx"),
				M = o("./src/reddit/endpoints/post/convert.ts"),
				P = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = o("./src/reddit/featureFlags/index.ts"),
				w = o("./src/reddit/helpers/correlationIdTracker.ts"),
				K = o("./src/reddit/helpers/dom/index.ts"),
				F = o("./src/reddit/helpers/localStorage/index.ts"),
				U = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				V = o("./src/reddit/models/Comment/index.ts"),
				B = o("./src/reddit/models/PostDraft/index.ts"),
				G = o("./src/reddit/models/RichTextJson/index.ts"),
				J = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				$ = o("./src/reddit/models/Toast/index.ts"),
				q = o("./src/reddit/selectors/comments.ts"),
				W = o("./src/reddit/selectors/commentSelector.ts"),
				z = o("./src/reddit/selectors/platform.ts"),
				H = o("./src/reddit/selectors/posts.ts"),
				Q = o("./src/reddit/selectors/user.ts"),
				X = o("./src/reddit/actions/comment/index.ts"),
				Y = o("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)(Y.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (o, n) => {
					const s = n();
					if (!!s.features.comments.drafts[t])
						if (Object(Q.M)(s) && e) {
							const n = Z({
								hasFocus: e,
								draftKey: t
							});
							o(Object(a.f)(n))
						} else o(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Y.H), oe = Object(r.a)(Y.J), ne = Object(r.a)(Y.I), se = Object(r.a)(Y.G), re = async (e, t, o, n) => {
					const s = n.ok && n.body,
						r = s && s.comment && s.comment.id;
					await U.f(e, o, t, r)
				}, ce = "Toxicity_Warning__Modal", ae = (e, t, o, n, s, r) => async (c, a, {
					gqlContext: d
				}) => {
					const m = a(),
						u = Object(z.e)(m);
					let l = "";
					if (u && (l = u.name), L.d.enableToxicityWarning(m)) {
						if (!(await C(d(), l, n, s))) return void c(Object(i.i)(ce))
					}
					c(ie(e, t, o, n, s, r))
				}, de = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, o, r, c, a, d) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(ce));
					const R = f(),
						y = R.features.comments.submit.pending[o];
					if (!R.user.account || y) return;
					u(te({
						draftKey: o,
						draft: r
					}));
					const S = R.user.account.displayText,
						_ = r.commentMode;
					let E;
					if (d ? (E = await Object(P.i)(j(), e, r, S), u(Object(l.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await D(j(), e, r, S, _), E.ok) {
						let n;
						n = E.body, u(oe({
							...n,
							headCommentId: Object(q.w)(R, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: o
						}));
						const s = Object(H.G)(f(), {
							postId: e
						});
						u(Object(m.z)(s, p.a.CommentSubmitted))
					} else {
						E.error && E.error.type === s.Kb && U.h(R, de(r), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : n.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: o,
							error: E.error
						})), u(Object(O.f)({
							duration: O.a,
							kind: $.b.Error,
							text: t
						}))
					}
					re(f(), t, c, E).then(() => E.ok && c === k.i.RICH_TEXT ? Object(w.b)(w.a.CommentComposer) : void 0), a || Object(b.d)()
				}, me = e => async (t, o, {
					gqlContext: n
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: m
					} = e, u = o(), l = Object(z.e)(u);
					let b = "";
					if (l && (b = l.name), L.d.enableToxicityWarning(u)) {
						if (!(await C(n(), b, d, m))) return void t(Object(i.i)(ce))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: d,
						editorMode: m
					}))
				}, ue = e => async (t, o, {
					apiContext: n
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: c,
						parentCommentDepth: a,
						draftKey: d,
						formData: m,
						editorMode: u
					} = e;
					t(Object(i.g)(ce));
					const l = o(),
						O = l.features.comments.submit.pending[d];
					if (!l.user.account || O) return;
					t(te({
						draftKey: d,
						draft: m
					}));
					const f = l.user.account.displayText,
						p = m.commentMode,
						j = await D(n(), r, m, f, p);
					if (j.ok) t(ne({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: d,
						depth: a + 1
					}));
					else {
						if (j.error && j.error.type === s.Kb) {
							const e = Object(W.b)(l, {
								commentId: r
							});
							if (!e) return;
							U.h(l, de(m), e.postId, r)
						}
						t(se({
							draftKey: d,
							error: j.error
						}))
					}
					re(o(), c, u, j), Object(b.d)()
				}, le = Object(r.a)(Y.q), be = Object(r.a)(Y.p), Oe = Object(r.a)(Y.l), fe = (Object(r.a)(Y.g), Object(r.a)(Y.m)), pe = (Object(r.a)(Y.t), (e, t, o) => async (s, r, {
					apiContext: c
				}) => {
					const a = e === k.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(G.G)(t)) s(fe({
						editorMode: e,
						draftKey: o,
						content: a ? G.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(o));
						const r = await Object(M.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(o)), s(fe({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(o)), s(Object(O.f)({
							duration: O.a,
							kind: $.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), je = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: o
				}) => async (n, s) => {
					const r = s(),
						m = Object(c.a)(B.c.replyToComment, t);
					if (!Object(Q.K)(s())) return n(Object(d.j)()), void n(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object(q.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && o) && (Object.keys(u).forEach(t => u[t] && n(be({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						O = null;
					const f = r.user.prefs.commentMode,
						p = Object(K.d)();
					if (p) {
						const e = p.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === k.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => J.s(e, null)).map(e => J.l([e])),
								o = J.s("", null),
								n = J.l([o]);
							O = {
								document: [J.c(t), n]
							}
						}
					}
					const j = r.features.comments.drafts[m];
					let R;
					if (R = p ? {
							commentMode: f,
							draftType: B.c.replyToComment,
							rtJson: O,
							text: `${b}\n`
						} : j || {
							commentMode: f,
							draftType: B.c.replyToComment,
							rtJson: O,
							text: ""
						}, Object(Q.M)(r)) {
						const o = le({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: R
						});
						n(Object(a.f)(o))
					} else n(le({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: R
					}))
				}, Re = e => async t => {
					t(Object(X.p)(e)), t(Ee(e))
				}, ye = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async o => {
					o(be({
						parentCommentId: e,
						commentsPageKey: t
					})), o(je({
						parentCommentId: e,
						commentsPageKey: t
					})), o(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Se = (e, t) => o => o(Oe({
					draftKey: e,
					formData: t
				})), _e = Object(r.a)(Y.s), Ee = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: o,
					draftKey: n,
					text: s
				}) => async (r, c) => {
					const a = c();
					a.user.account && (U.c(a), r(_e({
						commentId: e,
						commentsPageKey: o,
						draftKey: n,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, xe = Object(r.a)(Y.C), Ae = Object(r.a)(Y.B), he = Object(r.a)(Y.D), Ie = Object(r.a)(Y.h), ke = ({
					id: e,
					commentsPageKey: t,
					depth: o,
					draftKey: n,
					formData: r
				}) => async (o, c, {
					apiContext: a
				}) => {
					const d = c();
					if (!d.user.account) return;
					o(xe({
						draftKey: n
					})), U.d(d);
					const i = d.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, o, n, r, c) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === k.i.MARKDOWN) a.text = n.text;
							else {
								a.text = null;
								let e = null;
								n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(y.a)(Object(_.a)(e, [E.a]), {
								endpoint: Object(x.a)(Object(g.a)(Object(v.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(I.a)(e)
							} : {
								...e,
								body: {
									comment: Object(h.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(h.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(A.a)()
							})
						})(a(), e, 0, r, i, m);
					if (u.ok) {
						const s = u.body;
						o(he({
							commentId: e,
							commentsPageKey: t,
							draftKey: n
						})), o(Object(X.i)({
							[e]: {
								...s.comment
							}
						}))
					} else o(Ae({
						draftKey: n,
						error: u.error
					}))
				}, ve = Object(r.a)(Y.z), ge = Object(r.a)(Y.y), Ce = Object(r.a)(Y.A), De = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const c = n();
					o(ve({
						id: e
					})), U.a(e, c);
					const a = await ((e, t) => Object(y.a)(Object(_.a)(e, [E.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
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
						error: e.error || Object(A.a)()
					}))(r(), e);
					a.ok ? o(Ce({
						id: e,
						postId: t
					})) : o(ge({
						id: e,
						error: a.error
					}))
				}, Ne = e => async (t, o, {
					apiContext: n
				}) => {
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(T.o)(n(), e, s)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Te = (e, t) => async (o, s, {
					gqlContext: r
				}) => {
					var c, a, d, i, m, u;
					o(Object(X.c)());
					const l = e => Object(O.f)(Object(O.e)(e, $.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) o(l(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === V.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(X.n)(a)), (await ((e, t) => Object(S.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(F.xb)(null !== (m = null === (i = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === i ? void 0 : i.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(O.f)({
								kind: $.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(X.n)(a)), o(l(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return _
			})), o.d(t, "c", (function() {
				return E
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "a", (function() {
				return A
			})), o.d(t, "e", (function() {
				return h
			})), o.d(t, "g", (function() {
				return I
			})), o.d(t, "h", (function() {
				return k
			})), o.d(t, "b", (function() {
				return v
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/lib/makeCommentsPageKey/index.ts"),
				a = o("./src/reddit/actions/modal.ts"),
				d = o("./src/reddit/actions/shortcuts/utils.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/constants/modals.ts"),
				u = o("./src/reddit/endpoints/comment/index.tsx"),
				l = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = o("./src/reddit/models/Reportable/index.ts"),
				O = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/commentSelector.ts"),
				p = o("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = o("./src/reddit/selectors/user.ts"),
				R = o("./src/reddit/actions/comment/index.ts"),
				y = o("./src/reddit/actions/comment/constants.ts");
			const S = Object(r.a)(y.n),
				_ = e => async (t, o, {
					apiContext: n
				}) => {
					o().features.comments.models[e] && (await Object(u.j)(n(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(j.K)(o())) return void t(Object(a.i)(m.a.LOGIN_MODAL_ID));
					const r = o().features.comments.models[e];
					if (!r) return;
					const c = r.isLocked ? u.l : u.e;
					t(Object(R.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: r.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, x = Object(r.a)(y.F), A = e => async (t, o, {
					apiContext: s
				}) => {
					const r = o(),
						c = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					c && a && (t(Object(R.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.i)({
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
					})), Object(d.d)())
				}, h = (e, t) => async (o, s, {
					apiContext: r
				}) => {
					const c = s(),
						a = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					a && m && (o(Object(R.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(r(), e, t)).ok ? o(Object(i.f)({
						kind: O.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(R.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, I = e => async (t, o, {
					apiContext: s
				}) => {
					const r = o().features.comments.models[e];
					if (!r) return;
					const c = r.ignoreReports ? u.k : u.d;
					t(Object(R.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: r.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, k = (e, t, o) => async (r, c, {
					gqlContext: a
				}) => {
					const d = Object(f.b)(c(), {
						commentId: e
					});
					if (!d) return;
					const m = o === s.dc.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(a(), {
							input: u
						})).ok) r(Object(R.i)({
						[e]: {
							userReports: Object(b.a)(d.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), O.b.Error);
						r(Object(i.f)(e))
					}
				}, v = (e, t, o) => async (n, r, {
					apiContext: a,
					gqlContext: d
				}) => {
					const i = r(),
						m = i.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						b = i.postStickiedComments.data[l],
						O = s.g[t];
					let f;
					if (n(Object(R.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!o
							}
						})), o && b && b !== e && n(Object(R.i)({
							[b]: {
								isStickied: !1
							}
						})), Object(p.a)(r())) {
						const n = Object(u.b)(d(), e, t),
							s = Object(u.c)(d(), e, !!o),
							r = [n];
						(o || !o && e === b) && r.push(s), f = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else f = await Object(u.g)(a(), e, O, o || null);
					f.ok ? o && n(x({
						id: e,
						postId: l,
						commentsPageKey: Object(c.a)(l, null, {
							sort: s.u.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (n(Object(R.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), n(Object(R.i)({
						[b]: {
							isStickied: i.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return b
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "c", (function() {
				return j
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/endpoints/post/convert.ts"),
				a = o("./src/reddit/helpers/localStorage/index.ts"),
				d = o("./src/reddit/helpers/trackers/postComposer.ts"),
				i = o("./src/reddit/models/PostCreationForm/index.ts"),
				m = o("./src/reddit/models/RichTextJson/index.ts"),
				u = o("./src/reddit/models/Toast/index.ts"),
				l = o("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(s.a)(l.G),
				O = Object(s.a)(l.p),
				f = Object(s.a)(l.Q),
				p = (e, t, o) => async (s, a, {
					apiContext: p
				}) => {
					d.m(a(), t);
					const R = t === i.i.MARKDOWN,
						y = t === i.i.RICH_TEXT,
						S = l.k;
					if (R && Object(m.G)(o)) return s(f({
						editorKey: e,
						editorMode: i.i.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (y && !o) return s(f({
						editorKey: e,
						editorMode: i.i.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(S));
					const _ = await Object(c.a)(p(), t, R ? JSON.stringify(o) : o);
					_.ok ? (s(O(S)), s(f({
						editorKey: e,
						editorMode: t,
						content: _.body.output
					})), s(j(t))) : (s(O(S)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, o) => {
					const s = Object(a.l)();
					if (s >= 3) return;
					const c = o().user.prefs.useMarkdown ? i.i.MARKDOWN : i.i.RICH_TEXT;
					if (e === c) return;
					const d = e === i.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: d
					})), Object(a.tb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(n.a)(r.r),
				a = Object(n.a)(r.F),
				d = e => async (t, o, {
					apiContext: n
				}) => {
					const r = await Object(s.a)(n(), e);
					r && r.ok ? t(c({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return X
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), o.d(t, "removalReasonsFailed", (function() {
				return Z
			})), o.d(t, "removalReasonsRequested", (function() {
				return ee
			})), o.d(t, "removalReasonAddedPending", (function() {
				return te
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), o.d(t, "addRemovalReason", (function() {
				return se
			})), o.d(t, "editRemovalReasonPending", (function() {
				return re
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), o.d(t, "editRemovalReason", (function() {
				return de
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return ie
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), o.d(t, "deleteRemovalReason", (function() {
				return le
			})), o.d(t, "removedItemsSelected", (function() {
				return be
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return pe
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), o.d(t, "removalReasonMessagePending", (function() {
				return Re
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ye
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), o.d(t, "submitRemovalReason", (function() {
				return Ee
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return xe
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/initializeClient/installReducer.ts"),
				r = o("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				i = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				l = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var f = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case c:
					case a:
					case i:
					case m:
					case l:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var p = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case c:
						case i:
						case l:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
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
					error: f,
					pending: p
				});
			const R = {};
			var y = (e = R, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: o
						} = t.payload, {
							data: n
						} = o;
						return {
							...e,
							...n
						}
					}
					case a:
					case m: {
						const {
							reason: o
						} = t.payload;
						return {
							...e,
							[o.id]: o
						}
					}
					case b: {
						const {
							reasonId: o
						} = t.payload, {
							[o]: n,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const S = {};
			var _ = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: o,
							response: n
						} = t.payload, {
							order: s
						} = n;
						return {
							...e,
							[o]: s
						}
					}
					case a: {
						const {
							subredditId: o,
							reason: n
						} = t.payload;
						return {
							...e,
							[o]: [...e[o], n.id]
						}
					}
					case b: {
						const {
							subredditId: o,
							reasonId: n
						} = t.payload, s = [...e[o]].filter(e => e !== n);
						return {
							...e,
							[o]: s
						}
					}
					default:
						return e
				}
			};
			var E = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: o
							} = t.payload;
							return {
								itemIds: o,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				x = Object(r.c)({
					api: j,
					models: y,
					reasonOrder: _,
					removedItemIds: E
				}),
				A = o("./src/lib/constants/index.ts"),
				h = o("./src/lib/makeActionCreator/index.ts"),
				I = o("./src/lib/makeCommentsPageKey/index.ts"),
				k = o("./src/lib/makeDraftKey/index.ts"),
				v = o("./src/reddit/actions/bulkActions/index.ts"),
				g = o("./src/reddit/actions/comment/index.ts"),
				C = o("./src/reddit/actions/comment/authoring.ts"),
				D = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				T = o("./src/reddit/actions/post.ts"),
				M = o("./src/reddit/actions/toaster.ts"),
				P = o("./src/reddit/constants/modals.ts"),
				L = o("./src/lib/makeApiRequest/index.ts"),
				w = o("./src/lib/omitHeaders/index.ts"),
				K = o("./src/reddit/constants/headers.ts"),
				F = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(L.a)(Object(w.a)(e, [K.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: A.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, o) => Object(L.a)(Object(w.a)(e, [K.a]), {
					endpoint: Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: A.jb.POST,
					type: "json",
					data: t
				});
			var B = o("./src/reddit/helpers/isPost.ts"),
				G = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = o("./src/reddit/helpers/routeKey/index.ts"),
				$ = o("./src/reddit/models/ModQueue/index.ts"),
				q = o("./src/reddit/models/PostDraft/index.ts"),
				W = o("./src/reddit/models/RemovalReason/index.ts"),
				z = o("./src/reddit/models/Toast/index.ts"),
				H = o("./src/reddit/selectors/comments.ts"),
				Q = o("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: x
				}
			});
			const X = Object(h.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(h.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(h.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, o, {
					apiContext: n
				}) => {
					const s = o().subreddits.models[e].name;
					t(X());
					const r = await ((e, t) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: A.jb.GET
					}))(n(), s);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(h.a)(c), oe = Object(h.a)(a), ne = Object(h.a)(d), se = (e, t) => async (o, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					o(te());
					const a = await ((e, t, o) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: A.jb.POST,
						data: o
					}))(r(), c, t);
					if (a.ok) {
						const {
							id: s
						} = a.body, r = {
							...t,
							id: s
						};
						o(oe({
							subredditId: e,
							reason: r
						})), o(Object(M.f)({
							kind: z.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(ne(a.error))
				}, re = Object(h.a)(i), ce = Object(h.a)(m), ae = Object(h.a)(u), de = (e, t) => async (o, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					o(re());
					const a = await ((e, t, o) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: A.jb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(r(), c, t);
					a.ok ? (o(ce({
						subredditId: e,
						reason: t
					})), o(Object(M.f)({
						kind: z.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ae(a.error))
				}, ie = Object(h.a)(l), me = Object(h.a)(b), ue = Object(h.a)(O), le = (e, t) => async (o, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: A.jb.DELETE
					}))(r(), c, t);
					a.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(M.f)({
						kind: z.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(ue(a.error))
				}, be = Object(h.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, n, {
					apiContext: s
				}) => {
					const r = n();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || o(ee(e)), o(be({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(P.a.ADD_REMOVAL_REASON))
				}, fe = Object(h.a)("REMOVALREASONS__SUBMIT_PENDING"), pe = Object(h.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(h.a)("REMOVALREASONS__SUBMIT_FAILED"), Re = Object(h.a)("REMOVALREASONS__MESSAGE_PENDING"), ye = Object(h.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(h.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(h.a)("REMOVALREASONS__MESSAGE_FAILED"), Ee = (e, t, o, n, s) => async (r, c, {
					apiContext: a
				}) => {
					const d = c(),
						i = d.user.account && d.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? W.e.Post : W.e.Comment,
						l = u === W.e.Post ? d.posts.models[m] : d.features.comments.models[m],
						b = u === W.e.Post ? T.S : g.i;
					if (!l || !i) return !1;
					r(fe()), r(b({
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
						f = await U(a(), O);
					if (f.ok) {
						if (r(pe()), t) {
							r(Re());
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								c = await V(a(), Object(W.h)(s, u), u);
							if (c.ok) {
								if (n === W.f.Public) {
									if (r(Se()), c.body) {
										const e = Object(G.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											o = Object(Q.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let s = o && n && Object(J.a)(n, d, d.posts.models[e.postId]);
										if (s || (s = Object(I.a)(e.postId, null, {
												sort: A.v,
												hasSortParam: !0
											})), u === W.e.Post) {
											const o = Object(k.a)(q.c.replyToPost, m);
											r(Object(C.o)({
												...t,
												headCommentId: Object(H.w)(d, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: o
											}));
											const n = d.postStickiedComments.data[m];
											r(Object(D.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), n && n !== e.id && r(Object(g.i)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === W.e.Comment) {
											const e = Object(k.a)(q.c.replyToComment, l.id),
												o = Object(H.j)(d, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(C.m)({
												...t,
												parentCommentId: m,
												commentsPageKey: s,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else r(ye());
								return !0
							}
							return r(_e(c.error)), !1
						}
					} else r(je(f.error)), r(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, xe = (e, t, o, s, r) => async (c, a, {
					apiContext: d
				}) => {
					const i = a(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(M.f)({
							kind: z.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						l = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await U(d(), l);
					if (b.ok) {
						const n = {
							ids: e,
							operation: $.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(v.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await V(d(), Object(W.h)(n, W.e.Bulk), W.e.Bulk);
							r.ok ? (c(ye()), c(u)) : c(_e(r.error))
						} else c(u)
					} else c(je(b.error))
				}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				r = o("./src/lib/omitHeaders/index.ts"),
				c = o("./src/reddit/constants/headers.ts"),
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, o) => {
				const i = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === d.i.MARKDOWN ? i.richtext_json = o : i.markdown_text = o, Object(s.a)(Object(r.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.jb.POST,
					data: i
				})
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			}));
			var n = o("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
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
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return u
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "b", (function() {
				return b
			})), o.d(t, "e", (function() {
				return O
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "d", (function() {
				return j
			})), o.d(t, "g", (function() {
				return R
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				r = o("./src/reddit/models/PostDraft/index.ts"),
				c = o("./src/reddit/selectors/comments.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				i = o("./src/telemetry/index.ts");
			const m = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: n.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.bb)(e),
						subreddit: Object(d.jb)(e),
						post: t ? Object(d.J)(e, t) : null,
						profile: Object(d.S)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				u = async (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(c.j)(e, r) || 0,
						{
							getFlairData: u
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(i.a)({
						noun: "comment",
						...m(e),
						comment: s ? Object(d.i)(e, s) : null,
						listing: Object(d.A)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, l = (e, t, o, n) => {
					const s = m(e);
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
							parentId: n,
							postId: o
						}
					})
				}, b = e => Object(i.a)({
					noun: "cancel",
					...m(e)
				}), O = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...m(e)
					})
				}, f = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.bb)(t),
					subreddit: Object(d.jb)(t),
					post: Object(d.J)(t, e)
				}), p = e => Object(i.a)({
					noun: "edit",
					...m(e)
				}), j = e => Object(i.a)({
					noun: "save_edit",
					...m(e)
				}), R = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...m(o),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "f", (function() {
				return d
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "h", (function() {
				return u
			}));
			var n = o("./src/reddit/helpers/isPost.ts");
			const s = 50,
				r = 50,
				c = 1e4,
				a = 100;
			var d, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const m = e => 1 === e.length ? Object(n.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				u = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.e2523ff3375a5742611a.js.map