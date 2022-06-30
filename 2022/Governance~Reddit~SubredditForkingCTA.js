// https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.5ebc051915213dfe0aa0.js
// Retrieved at 6/30/2022, 3:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~SubredditForkingCTA"], {
		"./src/lib/bigNumberUtils/percent.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(t, e) {
				const r = new s.BigNumber(t),
					n = new s.BigNumber(e),
					d = new s.BigNumber(r.dividedBy(n)),
					i = new s.BigNumber("100").multipliedBy(d);
				return new s.BigNumber(i).toNumber()
			}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return y
			})), r.d(e, "a", (function() {
				return _
			})), r.d(e, "c", (function() {
				return j
			})), r.d(e, "g", (function() {
				return S
			})), r.d(e, "d", (function() {
				return P
			})), r.d(e, "e", (function() {
				return I
			})), r.d(e, "f", (function() {
				return v
			}));
			var s = r("./node_modules/@sentry/minimal/esm/index.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				o = r("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const a = t => ({
				input: {
					subredditId: t.subredditId,
					countryCode: t.countryCode || "",
					languageCode: t.languageCode || ""
				}
			});
			var c = async (t, e) => Object(d.a)(t, {
				...o,
				variables: a(e)
			}), u = r("./node_modules/fbt/lib/FbtPublic.js"), l = r("./src/reddit/models/Toast/index.ts"), b = r("./node_modules/reselect/es/index.js"), f = r("./src/reddit/constants/experiments.ts"), p = r("./src/reddit/helpers/chooseVariant/index.ts"), m = r("./src/reddit/selectors/user.ts");
			const h = Object(b.a)(t => Object(p.c)(t, {
				experimentEligibilitySelector: m.Q,
				experimentName: f.cc
			}), t => t === f.zd);
			var O = r("./src/reddit/actions/toaster.ts");
			const y = "SUBREDDIT_COUNTRY_SITE__LOADED",
				_ = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				j = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				g = Object(n.a)(y),
				E = Object(n.a)(j),
				S = Object(n.a)(_),
				P = t => async (e, r, s) => {
					let {
						gqlContext: n
					} = s;
					var o;
					if (!t) return;
					const a = await (async (t, e) => Object(d.a)(t, {
							...i,
							variables: {
								subredditId: e
							}
						}))(n(), t),
						c = a.body;
					a && a.ok && c && e(g({
						subredditId: t,
						subredditCountrySite: null === (o = c.data) || void 0 === o ? void 0 : o.subredditInfoById.countrySiteSettings
					}))
				}, I = (t, e) => async (r, s, n) => {
					let {
						gqlContext: d
					} = n;
					if (!t) return;
					const i = await c(d(), {
						subredditId: t,
						countryCode: e.countryCode,
						languageCode: e.languageCode
					});
					if (!i.ok) return r(Object(O.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const o = i.body;
					r(E({
						subredditId: t,
						subredditCountrySite: o.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, v = (t, e) => async (r, n, d) => {
					let {
						gqlContext: i
					} = d;
					if (!t || !h(n())) return;
					const o = {
							subredditId: t,
							countryCode: "",
							languageCode: e
						},
						a = await c(i(), o);
					if (a.ok) {
						const e = a.body;
						r(E({
							subredditId: t,
							subredditCountrySite: e.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else s.l(t => {
						t.setExtra("subredditCountryLanginfo", o), s.c(a.error)
					})
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return s
			})), r.d(e, "a", (function() {
				return n
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "c", (function() {
				return d
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				d = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "c", (function() {
				return d
			})), r.d(e, "d", (function() {
				return i
			})), r.d(e, "e", (function() {
				return o
			})), r.d(e, "f", (function() {
				return a
			})), r.d(e, "g", (function() {
				return c
			})), r.d(e, "h", (function() {
				return u
			})), r.d(e, "i", (function() {
				return l
			})), r.d(e, "j", (function() {
				return b
			})), r.d(e, "k", (function() {
				return f
			})), r.d(e, "l", (function() {
				return p
			})), r.d(e, "m", (function() {
				return m
			})), r.d(e, "n", (function() {
				return h
			})), r.d(e, "o", (function() {
				return O
			})), r.d(e, "p", (function() {
				return y
			})), r.d(e, "q", (function() {
				return _
			})), r.d(e, "r", (function() {
				return j
			})), r.d(e, "s", (function() {
				return g
			})), r.d(e, "t", (function() {
				return E
			})), r.d(e, "u", (function() {
				return S
			})), r.d(e, "v", (function() {
				return P
			})), r.d(e, "w", (function() {
				return I
			})), r.d(e, "x", (function() {
				return v
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				n = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				d = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				a = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				f = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				j = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				g = "GOVERNANCE__TRANSFER_PENDING",
				E = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				P = "GOVERNANCE__WALLETS_FETCH_PENDING",
				I = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				n = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts");

			function i(t, e) {
				t(Object(s.f)({
					duration: 5e3,
					kind: d.b.Error,
					text: Object(n.a)(e)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return j
			})), r.d(e, "b", (function() {
				return g
			})), r.d(e, "c", (function() {
				return S
			})), r.d(e, "f", (function() {
				return k
			})), r.d(e, "g", (function() {
				return R
			})), r.d(e, "d", (function() {
				return w
			})), r.d(e, "e", (function() {
				return L
			})), r.d(e, "h", (function() {
				return U
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/post.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				b = r("./src/redditGQL/operations/PollVote.json"),
				f = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/reddit/endpoints/governance/wallet.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				y = r("./src/reddit/actions/governance/constants.ts"),
				_ = r("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(n.a)(y.b),
				g = Object(n.a)(y.c),
				E = Object(n.a)(y.e),
				S = (Object(n.a)(y.f), Object(n.a)(y.g), Object(n.a)(y.h)),
				P = Object(n.a)(y.i),
				I = Object(n.a)(y.j),
				v = Object(n.a)(y.k),
				C = Object(n.a)(y.q),
				k = Object(n.a)(y.r),
				T = Object(n.a)(y.s),
				x = Object(n.a)(y.t),
				N = Object(n.a)(y.u),
				D = Object(n.a)(y.v),
				A = Object(n.a)(y.w),
				R = Object(n.a)(y.x),
				w = (t, e) => async (r, s, n) => {
					let d, {
							apiContext: i,
							gqlContext: a
						} = n,
						p = s().polls.models[t];
					if (r(I({
							pollId: t
						})), (d = p.type === l.a.GA ? await ((t, e, r) => Object(u.a)(t, {
								...b,
								variables: {
									input: {
										postId: e,
										optionId: r
									}
								}
							}))(a(), t, e) : await
							function(t, e, r, s) {
								return Object(f.a)(t, {
									method: "put",
									endpoint: `${c.a.metaUrl}/polls/${e}/${r}/votes/me/${s}`
								})
							}(i(), p.subredditId, t, e)).ok) {
						if (p.type === l.a.GA) {
							const {
								options: t
							} = d.body.data.updatePostPollVoteState.poll;
							r(E({
								pollId: p.id,
								optionId: e,
								options: t
							}))
						} else r(v(d.body));
						const n = s();
						if ((p = n.polls.models[t]) && Object(l.d)(p)) {
							const {
								postId: t
							} = p, e = n.posts.models[t];
							e && e.voteState === h.a.notVoted && r(Object(o.kb)(t))
						}
					} else r(P({
						pollId: t,
						error: d.error || d.errors[0].message
					})), Object(_.a)(r, d.error || d.errors[0].messsage)
				}, L = (t, e) => async (r, n, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					r(T());
					const b = n().transfers.communityPoints.contentId || void 0,
						p = await
					function(t, e) {
						return Object(f.a)(t, {
							data: {
								amount: e.amount,
								contentId: e.contentId,
								description: e.message,
								receiveUserName: e.recipient
							},
							endpoint: `${c.a.metaUrl}/wallets/me/${e.subredditId}/transfers`,
							method: "post"
						})
					}(u(), {
						...t,
						contentId: b
					});
					p.ok ? (r(x({
						...p.body,
						subredditId: t.subredditId
					})), r(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(d.a)(t.amount)), s.fbt._param("tokenName", (null === (l = Object(O.b)(n(), t.subredditId)) || void 0 === l ? void 0 : l.name) || ""), s.fbt._param("recipient", t.recipient)], {
							hk: "3klrhq"
						})
					})), e && r(Object(i.f)())) : (r(C({
						error: p.error
					})), Object(_.a)(r, p.error))
				}, U = t => async (e, r, s) => {
					let {
						apiContext: n
					} = s;
					e(D());
					const d = await Object(p.a)(n(), t);
					d.ok ? e(A(d.body)) : e(N({
						error: d.error
					}))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, r) {
			"use strict";
			r.d(e, "f", (function() {
				return A
			})), r.d(e, "b", (function() {
				return w
			})), r.d(e, "a", (function() {
				return L
			})), r.d(e, "c", (function() {
				return M
			})), r.d(e, "e", (function() {
				return G
			})), r.d(e, "d", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/v4.js"),
				d = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/actions/upload.ts"),
				l = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			var m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/imagePreview/index.ts"),
				O = r("./src/reddit/helpers/media/index.ts"),
				y = r("./src/reddit/models/Upload/index.ts"),
				_ = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/telemetry/index.ts");
			const g = t => ({
				..._.n(t),
				screen: _.Z(t),
				profile: _.R(t),
				subreddit: _.hb(t)
			});
			var E = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/gold/powerups/index.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				k = r("./src/reddit/actions/postCreation/constants.ts"),
				T = r("./src/reddit/actions/postCreation/general.ts");
			const x = Object(a.a)(k.u),
				N = Object(a.a)(k.v),
				D = Object(a.a)(k.t),
				A = t => async (e, r) => {
					e(x());
					const s = t.map(t => {
						let {
							url: r,
							uploadKey: s
						} = t;
						const n = Object(O.b)(Object(O.d)(r), "poster.png");
						return e(U(n, s))
					});
					await Promise.all(s);
					const n = r().uploads,
						d = t.map(t => {
							let {
								uploadKey: e
							} = t;
							return n[e]
						}).find(t => t.status !== y.a.SUCCESS);
					e(d ? D(d.error) : N())
				}, R = (t, e) => ({
					error: e ? {
						type: t,
						fields: [{
							field: "",
							msg: e
						}]
					} : {
						type: t
					}
				});
			const w = "RTE",
				L = "GALLERY",
				U = (t, e, r, n) => async (d, o, a) => {
					let {
						apiContext: c
					} = a;
					const l = Object(C.h)(o()),
						P = Date.now();
					let I = null,
						k = !1,
						T = !1,
						x = !1;
					const N = t => {
						if (!x && r && k) {
							x = !0;
							const s = o(),
								n = Date.now() - P,
								d = Object(m.c)(m.a.PostComposer);
							T ? (async t => {
								let {
									state: e,
									uploadKey: r,
									assetId: s,
									isCanceled: n,
									fileSource: d,
									uploadDuration: i,
									correlationId: o
								} = t;
								const a = e.uploads[r],
									c = n || a.status === y.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: b,
										error: f
									} = a,
									p = b.mimetype || u.type,
									m = p.startsWith("video/"),
									h = a.status === y.a.SUCCESS;
								let O = "";
								f ? O = JSON.stringify(f) : c && (O = "canceled");
								const E = {
									width: b.width,
									height: b.height,
									duration: b.videoDuration && Math.round(1e3 * b.videoDuration)
								};
								Object(j.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: m ? "video" : "image",
									...g(e),
									actionInfo: {
										..._.d(e),
										success: h,
										...O ? {
											reason: O
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: i,
										source: d,
										fileName: u.name,
										size: u.size,
										type: m ? "video" : "image",
										...s ? {
											id: s
										} : {},
										...l ? {
											url: l
										} : {},
										...E
									}
								})
							})({
								state: s,
								uploadKey: e,
								assetId: I,
								isCanceled: t,
								fileSource: r,
								uploadDuration: n,
								correlationId: d
							}) : E.D(s, e)
						}
					};
					return await d(Object(u.l)(t, e, async a => {
						k = !0, Object(u.k)(a.id, () => {
							N(!0)
						});
						const {
							error: m,
							metadata: y
						} = await async function(t, e, r) {
							const n = r && r.allowedPostTypes,
								d = r && r.name,
								o = await Object(O.h)(e) || e.type,
								a = Object(O.c)(e) || void 0;
							if (!a) return R("UNSUPPORTED_BROWSER");
							const c = {
								localUrl: a,
								mimetype: o
							};
							if (!o || !Object(O.j)(o)) return {
								error: {
									type: i.T
								}
							};
							if (o.startsWith("image/")) {
								if (n && !n.images) {
									const t = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", d)], {
										hk: "3C2E7Q"
									});
									return R(i.T, t)
								}
								if ("image/gif" === o) {
									if (e.size > i.Z) return R(i.L)
								} else if (e.size > i.bb) return R(i.R);
								const t = await Object(h.a)(a);
								c.width = t.width, c.height = t.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(v.n)(t, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * i.fb : i.fb;
								if (e.size > l) return R(i.pc);
								let b;
								try {
									b = await Object(O.i)(a, !0)
								} catch (u) {
									return R(i.T)
								}
								if (n) {
									const {
										videos: t,
										images: e
									} = n;
									if (e && !t && b.duration > i.gb) {
										const t = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", d)], {
											hk: "46ULiz"
										});
										return R(i.T, t)
									}
									if (!e && !t) {
										const t = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", d)], {
											hk: "4uTUZb"
										});
										return R(i.T, t)
									}
								}
								const f = o ? 2 * i.eb : i.eb;
								if (b.duration > f) {
									const t = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (f / 60).toString())], {
										hk: "20nB6Q"
									});
									return R(i.T, t)
								}
								if (b.duration < i.mb) {
									const t = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", i.mb.toString())], {
										hk: "49PSW8"
									});
									return R(i.T, t)
								}
								if (0 === b.height || 0 === b.width) {
									const t = s.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return R(i.T, t)
								}
								if (b.height < i.nb || b.width < i.ob) {
									const t = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", i.ob.toString()), s.fbt._param("min_video_height", i.nb.toString())], {
										hk: "2HSUGl"
									});
									return R(i.T, t)
								}
								if (e.size / b.duration < i.lb) {
									const t = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (i.lb / i.U).toString())], {
										hk: "1ehgDE"
									});
									return R(i.T, t)
								}
								c.height = b.height, c.width = b.width, c.videoDuration = b.duration, c.videoFirstFrameUrl = b.firstFrame.dataUrl
							}
							return {
								metadata: c
							}
						}(o(), t, l);
						if (m || !y) return {
							error: m
						};
						d(Object(u.m)({
							key: e,
							metadata: {
								fileSource: r,
								...y
							}
						})), T = !0, n && n();
						const _ = t.name,
							j = await (async (t, e, r) => Object(b.a)(Object(f.a)(t, [p.a]), {
								endpoint: `${t.apiUrl}/api/media/asset.json`,
								method: i.jb.POST,
								data: {
									filepath: e,
									mimetype: r
								}
							}))(c(), _, y.mimetype);
						return j.ok ? (I = j.body.asset.asset_id, {
							uploadLease: j.body.args
						}) : {
							error: j.error || void 0
						}
					}, !0)), N(!1), o().uploads[e] || null
				}, M = t => async (e, r, s) => {
					let {
						apiContext: n
					} = s;
					const d = r().uploads[t];
					d && !Object(y.c)(d) && await e(U(d.file, d.key, d.metadata.fileSource, void 0))
				}, G = (t, e, r) => async (n, i) => {
					const a = t.map((t, s) => new Promise(async s => {
							const i = Object(y.d)(r, d()().slice(-6));
							await n(U(t, i, e, () => s({
								uploadKey: i,
								isValid: !0
							}))), s({
								uploadKey: i,
								isValid: !1
							})
						})),
						u = await Promise.all(a),
						l = u.map(t => t.uploadKey);
					return n(function(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (r, n) => {
							const {
								uploads: d
							} = n(), i = t.map(t => d[t]).filter(t => t.status === y.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = i.length > e ? e - 1 : i.length, u = i.length - a;
							i.slice(0, a).forEach(t => r(Object(c.f)({
								duration: c.a,
								kind: I.b.Error,
								text: Object(o.a)(t)
							}))), u > 0 && r(Object(c.f)({
								duration: c.a,
								kind: I.b.Error,
								text: s.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [s.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(l)), u.filter(t => t.isValid).map(t => t.uploadKey)
				}, q = (t, e) => async (r, n) => {
					const d = n(),
						i = Object(C.W)(d),
						{
							items: o
						} = i,
						a = !o.length && 1 === t.length,
						b = Object(C.N)(d) && !a;
					let f = !1,
						p = t;
					if (b) {
						if (Object(P.x)(i)) return void r(Object(c.f)({
							kind: I.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						p.some(t => Object(O.m)(t.type)) && r(Object(c.f)({
							duration: c.a,
							kind: I.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), p = p.filter(t => Object(O.l)(t.type));
						const t = Math.max(0, l.b - o.length);
						p.length > t && (r(Object(c.f)({
							kind: I.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), p = p.slice(0, t))
					} else p = p.slice(0, 1), f = !0, r(Object(u.j)(L, !0));
					const m = await r(G(p, e, L));
					if (!m.length) return;
					const h = m.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						y = 0 === o.length;
					r(Object(T.d)({
						...i,
						items: f ? h : [...o, ...h],
						selectedKey: y ? m[0] : m[m.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return V
			})), r.d(e, "a", (function() {
				return K
			})), r.d(e, "b", (function() {
				return Y
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				o = r("./src/reddit/actions/governance/index.ts"),
				a = r("./src/reddit/actions/pages/subreddit.ts"),
				c = r("./src/reddit/actions/postDraft.ts"),
				u = r("./src/reddit/actions/scheduledPosts/index.ts"),
				l = r("./src/reddit/actions/urlRequested.ts"),
				b = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/config.ts"),
				p = r("./src/lib/convertToCamelCase/index.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/endpoints/post/create.ts");
			var O = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				y = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				_ = r("./src/reddit/featureFlags/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				g = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				E = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = r("./src/reddit/models/Poll/index.ts"),
				I = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				k = r("./src/reddit/selectors/postCreations.ts"),
				T = r("./src/reddit/selectors/postDraft.ts"),
				x = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				D = r("./src/reddit/models/Post/index.ts"),
				A = r("./src/reddit/models/ScheduledPost/index.ts"),
				R = r("./src/reddit/actions/postCreation/constants.ts"),
				w = r("./src/reddit/actions/postCreation/general.ts"),
				L = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const U = Object(n.a)(R.w),
				M = Object(n.a)(R.P),
				G = Object(n.a)(R.o),
				q = Object(n.a)(R.y),
				F = Object(n.a)(R.db),
				V = Object(n.a)(R.J),
				B = Object(n.a)(R.a),
				W = Object(n.a)(R.F),
				$ = t => `/r/${t}/about/${A.s}`,
				z = (t, e) => {
					const r = t || {
							duration: s.B,
							options: []
						},
						{
							govType: n,
							newSubreddit: d,
							newTopMod: i
						} = Object(k.u)(e),
						o = {
							...r
						};
					return n && (o.type = n), o.type === P.a.ReplaceTopMod ? (o.params = {
						userName: i
					}, o.options = P.f[P.a.ReplaceTopMod]()) : o.type === P.a.Spinoff ? (o.params = {
						subreddit: d
					}, o.options = P.f[P.a.Spinoff](d)) : o.options = o.options.map(t => ({
						text: t.text.trim()
					})).filter(t => !!t.text), o
				},
				H = t => {
					const e = t.uploads,
						r = Object(k.W)(t),
						n = Object(k.a)(t),
						d = Object(k.gb)(t);
					if (n === s.Wb.POST) return b.a.getPendingThumbnailUploads(d, e);
					if (n === s.Wb.MEDIA && r && r.items.length) {
						const {
							video: t
						} = r.items[0];
						if (t && t.thumbnail && !e[I.n]) return [{
							...t.thumbnail,
							uploadKey: I.n
						}]
					}
				},
				K = (t, e) => async (r, n, d) => {
					let {
						apiContext: i
					} = d, o = n();
					const {
						pending: a
					} = o.creations.api.post.submit, u = Object(T.g)(o);
					if (a || u) return;
					r(W(t)), o = n();
					const l = Object(k.a)(o),
						b = _.d.rteVideoPoster(o),
						f = H(o),
						p = l === s.Wb.MEDIA;
					f && (b || p) && (await r(L.f(f)), H(n())) || (t === I.r.Draft ? await r(Object(c.r)(e.draftId)) : t === I.r.ScheduledPost && Object(x.r)(o) ? await r(Q(e)) : t === I.r.ScheduledPost ? await r(J(e)) : await r(Y(e)))
				}, Q = t => async (e, r, s) => {
					let {
						gqlContext: n
					} = s;
					const i = r(),
						o = Object(k.db)(i),
						a = Object(k.eb)(i, t),
						c = Object(k.h)(i),
						b = Object(x.r)(i);
					if (!(a && c.id && o && Object(g.f)(b))) return;
					const f = c.id,
						p = Object(x.a)(i, {
							subredditId: f,
							scheduledPostId: b
						});
					if (p && Object(d.a)(Object(S.r)(p)(i)), e(U(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: m,
						polls: h
					} = Object(k.u)(i), _ = z(h, i), j = {
						...Object(O.e)({
							poll: m ? _ : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id,
							scheduledPostId: b
						})
					}, E = await Object(y.a)(n(), j);
					if (E.ok) return e(Object(u.e)({
						subredditId: c.id
					})), void e(Object(l.a)($(c.name), !1));
					const P = E.error;
					e(G(P))
				}, J = t => async (e, r, s) => {
					let {
						gqlContext: n
					} = s;
					const i = r(),
						o = Object(k.db)(i),
						a = Object(k.eb)(i, t),
						c = Object(k.h)(i),
						b = Object(x.b)(i);
					if (!a || !c.id || !o) return;
					if (e(U(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: f,
						polls: p
					} = Object(k.u)(i), m = z(p, i), h = {
						duration: m.duration,
						options: m.options
					}, y = {
						...Object(O.d)({
							poll: f ? h : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id
						}),
						creationToken: b
					}, _ = await Object(O.a)(n(), y);
					if (_.ok) {
						e(Object(u.e)({
							subredditId: c.id
						}));
						const t = _.body.data.createScheduledPost.scheduledPost;
						return t && Object(d.a)(Object(S.o)(Object(j.d)(t))(i)), void e(Object(l.a)($(c.name), !1))
					}
					const g = _.error;
					e(G(g))
				}, Y = t => async (e, r, n) => {
					let {
						apiContext: d
					} = n;
					const c = r(),
						u = Object(k.eb)(c, t),
						{
							isPoll: b,
							polls: O
						} = Object(k.u)(c),
						y = z(O, c);
					if (!u) return;
					if (e(U(u)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					let j;
					const g = b && _.d.spPolls(c);
					if ((j = g ? await
							function(t, e, r) {
								const n = e.destSubreddit.id;
								return Object(m.a)(t, {
									method: s.jb.POST,
									endpoint: `${f.a.metaUrl}/polls/${n}`,
									type: "json",
									data: {
										poll: r,
										subredditId: n,
										...Object(p.a)(Object(h.d)(e))
									}
								}).then(async t => {
									const r = t.ok ? {
											...t,
											body: {
												json: {
													data: t.body
												}
											}
										} : t,
										s = await Object(h.e)(r, e);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: t.body.poll
											},
											ok: !0,
											status: t.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: t.status
									}
								})
							}(d(), u, y) : b ? await Object(h.b)(d(), {
								...u,
								kind: I.p.POLL,
								poll: y
							}) : u.kind === I.p.GALLERY ? await Object(h.a)(d(), u) : await Object(h.c)(d(), u)).ok) {
						const t = Object(N.k)(c),
							r = j.body;
						e(M({
							draftId: u.draftId,
							response: r
						})), g && e(Object(o.c)({
							poll: r.poll
						}));
						const s = Object(C.b)(c);
						u.kind !== I.p.LINK && u.kind !== I.p.RICH_TEXT && u.kind !== I.p.MARKDOWN || b || !s || e(Object(i.c)());
						const n = (r.path || `/user/${Object(v.e)(t)}/posts`).replace(/^\/r\/u_/, "/user/");
						e(Object(a.subredditInvalidateListing)(u.destSubreddit.name)), e(Object(l.a)(n, !1))
					} else {
						if (b) {
							const t = j.error;
							e(q(t))
						}
						const t = j.error;
						t.type === s.I.BAD_CAPTCHA_ERROR ? e(B()) : t.type === s.I.VALIDATION_ERROR ? e(F(t)) : t.type === s.I.SUBMIT_VALIDATION_ERROR ? e(V(t)) : e(G(t))
					}
					const S = Object(w.o)(u.kind),
						P = j.ok && j.body && j.body.id && Object(D.u)(j.body.id),
						T = r();
					E.B(T, S, P, t.correlationId)
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "g", (function() {
				return n
			})), r.d(e, "f", (function() {
				return d
			})), r.d(e, "m", (function() {
				return i
			})), r.d(e, "a", (function() {
				return o
			})), r.d(e, "e", (function() {
				return a
			})), r.d(e, "h", (function() {
				return c
			})), r.d(e, "l", (function() {
				return u
			})), r.d(e, "k", (function() {
				return l
			})), r.d(e, "j", (function() {
				return b
			})), r.d(e, "o", (function() {
				return f
			})), r.d(e, "d", (function() {
				return p
			})), r.d(e, "c", (function() {
				return m
			})), r.d(e, "b", (function() {
				return h
			})), r.d(e, "n", (function() {
				return O
			})), r.d(e, "i", (function() {
				return y
			})), r.d(e, "r", (function() {
				return _
			})), r.d(e, "u", (function() {
				return j
			})), r.d(e, "p", (function() {
				return g
			})), r.d(e, "q", (function() {
				return E
			})), r.d(e, "v", (function() {
				return S
			})), r.d(e, "s", (function() {
				return P
			})), r.d(e, "x", (function() {
				return I
			})), r.d(e, "w", (function() {
				return v
			})), r.d(e, "t", (function() {
				return C
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = "SCHEDULED_POSTS_REQUESTED",
				d = "SCHEDULED_POSTS_LOADED",
				i = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				a = "SCHEDULED_POSTS_FAILED",
				c = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				b = "SCHEDULED_POST_MUTATE_FAILED",
				f = "STANDALONE_POST_MUTATE_SUCCESS",
				p = "RECURRING_POST_MUTATE_SUCCESS",
				m = "RECURRING_POST__EDIT_MODAL_LOAD",
				h = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				y = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				j = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				g = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				E = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				P = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				I = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				C = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return _
			})), r.d(e, "a", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/scheduledPosts/index.ts"),
				a = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				b = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				f = r("./src/reddit/models/ScheduledPost/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				h = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(i.a)(a.n),
				y = Object(i.a)(a.b),
				_ = (t, e) => async (r, s, d) => {
					const i = Object(h.a)(s(), {
						scheduledPostId: e,
						subredditId: t
					});
					i && (await r(Object(n.b)(Object(m.c)(i.subreddit.name, i.collectionId))), r((Object(f.q)(i) ? y : O)(i)))
				}, j = (t, e) => {
					Object(f.q)(e) ? t(Object(o.d)({
						scheduledPost: e
					})) : t(Object(o.h)({
						scheduledPost: e
					}))
				}, g = (t, e, r) => async (n, i, m) => {
					let {
						gqlContext: O
					} = m;
					n(Object(o.g)());
					const y = Object(h.a)(i(), {
						subredditId: t,
						scheduledPostId: e
					});
					if (y && Object(f.q)(y) && Object(d.a)(Object(b.u)()(i(), y)), !y) return void n(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void j(n, y);
					const _ = await Object(u.a)(O(), {
							...r,
							id: e
						}),
						E = _.body;
					if (!(_.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(c.f)(Object(c.e)(a.t(), p.b.Error, a.s(), g(t, e, r))));
					n(Object(c.f)(Object(c.e)(a.w(), p.b.SuccessCommunity))), j(n, Object(l.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "g", (function() {
				return y
			})), r.d(e, "f", (function() {
				return _
			})), r.d(e, "h", (function() {
				return j
			})), r.d(e, "d", (function() {
				return g
			})), r.d(e, "c", (function() {
				return I
			})), r.d(e, "e", (function() {
				return C
			})), r.d(e, "i", (function() {
				return T
			})), r.d(e, "a", (function() {
				return x
			})), r.d(e, "b", (function() {
				return D
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				p = r("./src/telemetry/index.ts");
			const m = 25,
				h = 1e4,
				O = Object(n.a)(d.g),
				y = Object(n.a)(d.k),
				_ = Object(n.a)(d.j),
				j = Object(n.a)(d.o),
				g = Object(n.a)(d.d),
				E = Object(n.a)(d.f),
				S = Object(n.a)(d.m),
				P = Object(n.a)(d.a),
				I = Object(n.a)(d.c),
				v = Object(n.a)(d.e),
				C = Object(n.a)(d.h),
				k = (t, e) => {
					t(v()), t(Object(o.f)(Object(o.e)(d.r(), b.b.Error, d.s(), T(e))))
				},
				T = t => {
					let {
						subredditId: e,
						includeStandalone: r = {
							standaloneFirst: m
						},
						includeRecurring: s = {
							recurringFirst: h
						},
						...n
					} = t;
					return async (t, d, i) => {
						let {
							gqlContext: o
						} = i;
						if (Object(f.h)(d(), {
								subredditId: e
							})) return;
						t(O());
						const u = {
								subredditId: e,
								includeRecurring: s,
								includeStandalone: r,
								...n
							},
							l = await Object(a.b)(o(), u);
						Object(a.f)(l, u) ? N(t, Object(c.e)(l.body.data), u) : k(t, u)
					}
				},
				x = t => async (e, r, s) => {
					let {
						gqlContext: n
					} = s;
					const d = r();
					if (!Object(f.h)(d, {
							subredditId: t
						})) return e(T({
						subredditId: t
					}));
					if (!Object(f.g)(d, {
							subredditId: t,
							type: l.g.standalonePosts
						})) return;
					const i = Object(f.c)(d, {
						subredditId: t,
						type: l.g.standalonePosts
					});
					if (!i) return;
					e(O());
					const o = {
							subredditId: t,
							includeStandalone: {
								standaloneFirst: m,
								standaloneAfter: i
							}
						},
						u = await Object(a.b)(n(), o);
					u.ok ? N(e, Object(c.e)(u.body.data), o) : e(v())
				}, N = (t, e, r) => {
					Object(c.b)(e) ? t(E(e)) : Object(c.a)(e) ? t(P(e)) : Object(c.c)(e) ? t(S(e)) : k(t, r)
				}, D = (t, e) => async (r, n, d) => {
					const o = {},
						a = n();
					switch (t) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							o[t] = !e[t];
							break;
						case "isSticky":
							const r = !!e.sticky && "NONE" !== e.sticky;
							o.sticky = r ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(t)
					}
					Object(p.a)(Object(u.t)(t, o[t], Object(l.q)(e))(a)), r(Object(i.a)(e.subreddit.id, e.id, o))
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return x
			})), r.d(e, "c", (function() {
				return N
			})), r.d(e, "e", (function() {
				return D
			})), r.d(e, "b", (function() {
				return A
			})), r.d(e, "a", (function() {
				return R
			})), r.d(e, "f", (function() {
				return M
			})), r.d(e, "g", (function() {
				return G
			})), r.d(e, "h", (function() {
				return q
			})), r.d(e, "i", (function() {
				return F
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/postCreation/submit.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/constants/modals.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const y = t => ({
				public_description: t.publicDescription,
				name: t.name,
				type: t.type,
				over_18: t.over18,
				restrict_commenting: t.restrictCommenting,
				restrict_posting: t.restrictPosting,
				existing_tags: t.existingTags.join(","),
				new_tags: t.newTags.join(","),
				primary_tag: t.primaryTagId
			});
			var _ = r("./src/lib/makeGqlRequest/index.ts"),
				j = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				E = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = r("./src/reddit/selectors/meta.ts"),
				I = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				k = r("./src/telemetry/index.ts"),
				T = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const x = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				N = "SUBREDDIT__CREATE_PENDING",
				D = "SUBREDDIT__CREATE_SUCCEEDED",
				A = "SUBREDDIT__CREATE_FAILED",
				R = "SUBREDDIT__CREATE_CLEARED",
				w = Object(d.a)(N),
				L = Object(d.a)(D),
				U = Object(d.a)(A),
				M = Object(d.a)(R),
				G = Object(d.a)(x),
				q = t => async (e, r, d) => {
					let {
						apiContext: _
					} = d;
					var j;
					const x = r(),
						{
							name: N,
							type: D,
							crosspostId: A
						} = t;
					if (Object(v.j)(x)) return;
					e(w({
						subredditName: N
					}));
					const R = await ((t, e) => Object(p.a)(Object(m.a)(t, [h.a]), {
						endpoint: Object(O.a)(`${t.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.jb.POST,
						data: y(e)
					}))(_(), t);
					if (R.ok) {
						const r = R.body,
							d = r.fullname;
						Object(k.a)(Object(E.d)(D, t, d)(x)), e(L({
							subredditName: N
						}));
						const p = await Object(S.b)(x);
						if (A) {
							const t = Object(I.G)(x, {
								postId: A
							});
							e(Object(i.h)(t.title)), e(Object(i.g)({
								submissionType: n.Wb.CROSSPOST
							})), await e(Object(a.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: A,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(A)
						}
						await e(Object(s.b)(`${r.path}`)), p ? p === b.Ee.NewModule && e(Object(c.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (e(Object(o.h)(f.a.POST_FLOW_UPSELL_MODAL_ID)), Object(k.a)(Object(E.g)()(x))), Object(g.b)(g.a.SubredditCreation), e(Object(T.f)(d, null !== (j = Object(C.bb)(x)) && void 0 !== j ? j : Object(P.i)(x)))
					} else R.error && Object(k.a)(Object(E.h)(R.error.type, N)(x)), e(U({
						subredditName: N,
						error: R.error
					}))
				}, F = t => async (e, r, s) => {
					let {
						gqlContext: n
					} = s;
					const d = r(),
						i = {
							name: t
						},
						o = await ((t, e) => Object(_.a)(t, {
							...j,
							variables: e
						}))(n(), {
							input: i
						});
					let a = null;
					if (o.ok) {
						a = o.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (a) {
						const r = {
							fields: [{
								field: a[0].field,
								msg: a[0].message
							}],
							type: a[0].code
						};
						e(U({
							subredditName: t,
							error: r
						})), r && Object(k.a)(Object(E.h)(r.type, t)(d))
					} else await e(M())
				}
		},
		"./src/reddit/actions/upload.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return u
			})), r.d(e, "h", (function() {
				return l
			})), r.d(e, "c", (function() {
				return b
			})), r.d(e, "e", (function() {
				return f
			})), r.d(e, "g", (function() {
				return p
			})), r.d(e, "b", (function() {
				return m
			})), r.d(e, "a", (function() {
				return h
			})), r.d(e, "f", (function() {
				return O
			})), r.d(e, "m", (function() {
				return j
			})), r.d(e, "k", (function() {
				return C
			})), r.d(e, "l", (function() {
				return T
			})), r.d(e, "i", (function() {
				return x
			})), r.d(e, "j", (function() {
				return N
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				n = r.n(s),
				d = r("./node_modules/uuid/v4.js"),
				i = r.n(d),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/uploadToS3/index.ts"),
				c = r("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				b = "UPLOAD_METADATA_CHANGED",
				f = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				m = "UPLOAD_FAILED",
				h = "UPLOAD_CANCELED",
				O = "UPLOAD_REMOVED",
				y = Object(o.a)(u),
				_ = Object(o.a)(l),
				j = Object(o.a)(b),
				g = Object(o.a)(f),
				E = Object(o.a)(p),
				S = Object(o.a)(m),
				P = Object(o.a)(h),
				I = Object(o.a)(O),
				v = new Map,
				C = (t, e) => {
					const r = v.get(t) || [];
					r.push(e), v.set(t, r)
				},
				k = (t, e) => {
					const r = v.get(t);
					r && r.forEach(r => r(t, e)), v.delete(t)
				},
				T = function(t, e, r) {
					let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (d, o, u) => {
						let {
							apiContext: l
						} = u;
						const b = e;
						if (o().uploads[b] && Object(c.c)(o().uploads[b])) return;
						const f = i()(),
							p = () => {
								const t = o().uploads[b];
								return !t || t.id !== f || t.status === c.a.CANCELED
							};
						d(y({
							key: b,
							id: f,
							file: t
						}));
						const {
							uploadLease: m,
							error: h
						} = await r(o().uploads[b]);
						if (p()) return;
						if (h || !m) return void d(S({
							key: b,
							error: h
						}));
						let O;
						C(f, () => {
							O && O.abort()
						}), d(_({
							key: b
						}));
						const j = await Object(a.a)(t, m, t => (O = t, s && t.on("progress", t => {
							if (!p() && "upload" === t.direction) {
								const e = {
									percent: t.percent,
									total: t.total,
									uploaded: t.loaded
								};
								d(g({
									key: b,
									progress: e
								}))
							}
						}), t));
						if (O = null, !p())
							if (j.ok) {
								const t = decodeURIComponent(j.body.PostResponse.Location);
								d(E({
									key: b,
									url: t
								}))
							} else {
								const t = n()(j, "body.Error.Message.0"),
									e = {
										type: "ERROR",
										...t ? {
											fields: [{
												field: "0",
												msg: t
											}]
										} : {}
									};
								d(S({
									key: b,
									error: e
								}))
							}
					}
				},
				x = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, s) => {
						const n = s().uploads[t];
						n && (k(n.id, e), r(e ? I({
							key: t
						}) : P({
							key: t
						})))
					}
				},
				N = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, s) => {
						Object.keys(s().uploads).forEach(s => {
							s.startsWith(t) && r(x(s, e))
						})
					}
				}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return s
			})), r.d(e, "a", (function() {
				return n
			}));
			const s = 20,
				n = 180
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "j", (function() {
				return i
			})), r.d(e, "i", (function() {
				return o
			})), r.d(e, "h", (function() {
				return a
			})), r.d(e, "l", (function() {
				return c
			})), r.d(e, "k", (function() {
				return u
			})), r.d(e, "m", (function() {
				return l
			})), r.d(e, "g", (function() {
				return b
			})), r.d(e, "b", (function() {
				return f
			})), r.d(e, "d", (function() {
				return p
			})), r.d(e, "c", (function() {
				return m
			})), r.d(e, "e", (function() {
				return h
			})), r.d(e, "f", (function() {
				return O
			})), r.d(e, "n", (function() {
				return y
			}));
			var s, n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function i(t) {
				switch (t) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return t + " Network"
			}

			function o(t) {
				switch (t) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case s.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					default:
						return `https://meta-api.reddit.com/ethereum/${t}`
				}
			}

			function a(t) {
				switch (t) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184;
					case s.ArbitrumNitroDevnet:
						return 421612;
					default: {
						const [, e] = t.split(":");
						return e
					}
				}
			}

			function c(t) {
				return t === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(t, e, r) {
				return Object(d.a)(t, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${e}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(t, e, r) {
				return await Object(d.a)(t, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${e}/registrations`,
					data: r
				})
			}
			async function b(t, e, r) {
				return await Object(d.a)(t, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${e}/registrations/${r}`
				})
			}! function(t) {
				t.Ethereum = "ethereum:1", t.Rinkeby = "ethereum:4", t.ArbitrumRinkeby = "ethereum:5391184", t.ArbitrumNitroDevnet = "ethereum:421612", t.EthTraderEthereum = "ethereum:1:ethtrader", t.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const f = (t, e, r) => ({
					type: "burn-link",
					subredditId: t,
					amount: e,
					burnMemo: r
				}),
				p = t => ({
					type: "convert-to-coins",
					subredditId: t
				}),
				m = t => ({
					type: "claim",
					subredditId: t
				}),
				h = t => ({
					type: "subscribe",
					subredditId: t
				}),
				O = (t, e, r, s) => ({
					type: "transfer",
					subredditId: t,
					recipient: e,
					recipientAddress: r,
					amount: s
				});
			async function y(t, e) {
				return await Object(d.a)(t, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: e
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			})), r.d(e, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function i(t, e) {
				return Object(d.a)(t, {
					endpoint: `${s.a.metaUrl}/wallets/${e.subredditId}/me`,
					method: n.jb.GET
				}).then(t => {
					if (t.ok) {
						const r = t.body,
							s = {
								[e.subredditId]: r
							};
						return {
							...t,
							body: s
						}
					}
					return t
				})
			}

			function o(t, e) {
				return Object(d.a)(t, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${e.subredditId}`,
					method: n.jb.POST,
					data: e.userIds
				}).then(t => t.ok ? {
					...t,
					body: {
						wallets: t.body
					}
				} : t)
			}
		},
		"./src/reddit/endpoints/post/create.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return _
			})), r.d(e, "f", (function() {
				return j
			})), r.d(e, "e", (function() {
				return g
			})), r.d(e, "b", (function() {
				return E
			})), r.d(e, "a", (function() {
				return S
			}));
			var s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/helpers/name/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				b = r("./src/reddit/models/Poll/index.ts"),
				f = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function h(t) {
				return Math.floor(t.valueOf() / 1e3)
			}
			const O = t => {
					switch (t.kind) {
						case p.p.CROSSPOST:
							return p.p.CROSSPOST;
						case p.p.LINK:
							return p.p.LINK;
						case p.p.POLL:
							return p.p.POLL;
						case p.p.MEDIA:
							return t.makeGif ? p.p.VIDEO_GIF : t.mediaType;
						default:
							return "self"
					}
				},
				y = t => {
					switch (t.kind) {
						case p.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: t.document
								})
							};
						case p.p.MARKDOWN:
							return {
								text: t.markdown
							};
						case p.p.LINK:
						case p.p.MEDIA:
							return {
								url: t.url
							};
						case p.p.CROSSPOST:
							return {
								crosspost_fullname: t.sourcePostId
							};
						case p.p.POLL:
							return t.poll.type === b.a.Prediction ? {
								duration: 999999,
								end_timestamp: h(t.poll.endDate),
								options: t.poll.options.map(t => t.text),
								prediction: !0,
								text: t.markdown,
								raw_rtjson: "markdown" in t ? null : JSON.stringify({
									document: t.document
								})
							} : {
								duration: Math.floor(t.poll.duration / 864e5),
								options: t.poll.options.map(t => t.text),
								text: t.markdown,
								raw_rtjson: "markdown" in t ? null : JSON.stringify({
									document: t.document
								})
							}
					}
				},
				_ = t => {
					const e = Object(u.h)(t.destSubreddit.name);
					return {
						...t.destSubreddit.isProfile ? {
							sr: `u_${e}`,
							submit_type: "profile"
						} : {
							sr: e,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: t.draftId || void 0,
						title: t.title,
						discussion_type: t.isChatPost ? f.b.Chat : void 0,
						spoiler: t.isSpoiler,
						nsfw: t.isNSFW,
						...t.kind !== p.p.POLL ? {
							kind: O(t),
							original_content: t.isOC
						} : {},
						post_to_twitter: t.postToTwitter,
						sendreplies: t.sendReplies,
						...t.gRecaptchaResponse ? {
							"g-recaptcha-response": t.gRecaptchaResponse
						} : {},
						resubmit: t.resubmit,
						...y(t),
						...t.kind === p.p.MEDIA && "video" === t.mediaType ? {
							video_poster_url: t.videoThumbnailUrl
						} : {},
						...t.kind === p.p.MEDIA && t.makeGif ? {
							make_gif: "on"
						} : {},
						...t.flair ? {
							flair_id: t.flair.templateId,
							flair_text: Object(c.g)(t.flair)
						} : {},
						...t.validate_on_submit ? {
							validate_on_submit: t.validate_on_submit
						} : {},
						...t.eventSchedule && {
							event_start: t.eventSchedule.startDate,
							event_end: t.eventSchedule.endDate,
							event_tz: t.eventSchedule.timezoneName,
							unlist: t.eventSchedule.submitTime === p.j.AtEventTime
						},
						...t.collectionId && {
							collection_id: t.collectionId
						}
					}
				},
				j = t => {
					const e = /comments\/(\w+)\/.*$/.exec(t),
						r = e && e[1];
					return r ? `${n.Ib.Post}_${r}` : ""
				},
				g = async (t, e) => {
					if (!t.ok) return Object(l.b)(t);
					const r = t.body.json.data;
					let n = r.url;
					n || e.kind !== p.p.MEDIA || (n = await ((t, e) => new Promise(r => {
						const s = new WebSocket(t),
							n = t => {
								s.close(), clearTimeout(d), r(t)
							},
							d = setTimeout(() => {
								n("")
							}, e);
						s.onmessage = t => {
							const e = JSON.parse(t.data),
								r = "success" === e.type ? e.payload.redirect : "";
							n(r)
						}, s.onerror = t => {
							n("")
						}
					}))(r.websocket_url, 3e4));
					const d = r.id || j(n),
						i = Object(s.parse)(n).path,
						o = r.drafts_count;
					return {
						...t,
						body: {
							id: d,
							path: i,
							draftsCount: o
						}
					}
				}, E = (t, e) => Object(d.a)(Object(i.a)(t, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: n.jb.POST,
					data: _(e),
					type: "json"
				}).then(t => g(t, e)), S = (t, e) => Object(d.a)(Object(i.a)(t, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: n.jb.POST,
					data: {
						..._(e),
						items: e.galleryItems.map(t => ({
							caption: t.caption,
							outbound_url: t.url,
							media_id: t.assetId
						}))
					},
					type: "json"
				}).then(t => g(t, e));
			e.c = (t, e) => Object(d.a)(Object(i.a)(t, [o.a]), {
				endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit?resubmit=true`)),
				method: n.jb.POST,
				data: _(e)
			}).then(async t => await g(t, e))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return l
			})), r.d(e, "f", (function() {
				return f
			})), r.d(e, "d", (function() {
				return p
			})), r.d(e, "c", (function() {
				return h
			})), r.d(e, "e", (function() {
				return O
			})), r.d(e, "a", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/reddit/helpers/flair.ts"),
				d = r("./src/reddit/helpers/richTextJson/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts"),
				c = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (t, e) => Object(s.a)(t, {
					...u,
					variables: {
						...e,
						includeRecurring: !(!e.includeRecurring || !e.includeRecurring.recurringFirst),
						includeStandalone: !(!e.includeStandalone || !e.includeStandalone.standaloneFirst),
						recurringAfter: e.includeRecurring ? e.includeRecurring.recurringAfter : void 0,
						recurringFirst: e.includeRecurring ? e.includeRecurring.recurringFirst : void 0,
						standaloneAfter: e.includeStandalone ? e.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: e.includeStandalone ? e.includeStandalone.standaloneFirst : void 0
					}
				}),
				b = (t, e) => {
					if (!t.ok || !t.body) return !1;
					const r = t.body;
					return !!(r.data && r.data.subredditInfoById && r.data.subredditInfoById.scheduledPosts && r.data.subredditInfoById.scheduledPosts[e] && r.data.subredditInfoById.scheduledPosts[e].edges)
				},
				f = (t, e) => !(!t.ok || !t.body) && (!(e.includeStandalone && !(t => b(t, a.g.standalonePosts))(t)) && !(e.includeRecurring && !(t => b(t, a.g.recurringPosts))(t))),
				p = t => {
					let {
						poll: e,
						schedule: r,
						submission: s,
						subredditId: d
					} = t;
					return {
						collectionId: s.collectionId || "",
						discussionType: s.isChatPost ? i.b.Chat : i.b.Comment,
						isContestMode: s.isContestMode,
						isPostAsMetaMod: s.isPostAsMetaMod,
						isSpoiler: s.isSpoiler,
						isNsfw: s.isNSFW,
						poll: e && g(e),
						title: s.title,
						isOriginalContent: s.isOC,
						flair: s.flair ? {
							id: s.flair.templateId,
							text: Object(n.g)(s.flair)
						} : {},
						sticky: s.sticky,
						subredditId: d,
						suggestedCommentSort: s.suggestedSort,
						isSendReplies: s.sendReplies,
						...m(r),
						..._(s),
						assetIds: j(s)
					}
				},
				m = t => ({
					scheduling: {
						publishAt: t.submitDate,
						clientTimezone: t.timezoneName,
						frequency: t.recurrenceInfo ? t.recurrenceInfo.frequency : void 0,
						interval: t.recurrenceInfo ? t.recurrenceInfo.interval : void 0,
						byMonthDays: t.recurrenceInfo ? t.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: t.recurrenceInfo ? t.recurrenceInfo.byWeekDays : void 0
					}
				}),
				h = t => ({
					scheduling: Object.keys(t).length > 0 ? {
						clientTimezone: t.timezoneName || void 0,
						publishAt: t.submitDate || void 0,
						frequency: t.recurrenceInfo ? t.recurrenceInfo.frequency : void 0,
						interval: t.recurrenceInfo ? t.recurrenceInfo.interval : void 0,
						byMonthDays: t.recurrenceInfo ? t.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: t.recurrenceInfo ? t.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				O = t => {
					let {
						poll: e,
						schedule: r,
						scheduledPostId: s,
						submission: n,
						subredditId: d
					} = t;
					const i = p({
						poll: e,
						schedule: r,
						submission: n,
						subredditId: d
					});
					return {
						id: s,
						...i,
						flair: Object.keys(i.flair || {}).length ? {
							...i.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				y = t => /^https?:\/\//i.test(t) ? t : `http://${t}`,
				_ = t => {
					switch (t.kind) {
						case o.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: t.document
									})
								}
							};
						case o.p.MARKDOWN:
							return {
								content: {
									markdown: t.markdown
								}
							};
						case o.p.LINK:
							return {
								content: {}, link: {
									url: y(t.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				j = t => {
					let e = [];
					if (t.document) {
						const r = t.document || [];
						e = Object(d.d)(r)
					}
					return e
				},
				g = t => {
					if (t && t.options && t.duration && (t.options = t.options.map(t => ({
							text: t.text.trim()
						})).filter(t => !!t.text), t.options.length)) return t.duration = Math.floor(t.duration / 864e5), t
				},
				E = (t, e) => Object(s.a)(t, {
					...c,
					variables: {
						input: e
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			}));
			var s = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
			const d = (t, e) => Object(n.a)(t, {
				...s,
				variables: {
					input: e
				}
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			})), r.d(e, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function n(t) {
				return t[0].toUpperCase() + t.slice(1)
			}

			function d(t) {
				return "extra" in t ? "string" == typeof t.extra ? t.extra : Object.keys(t.extra).map(e => t.extra[e]).map(n).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(t) {
				const e = `${t.type} (${t.code})`;
				return "message" in t ? `${e}: ${t.message}` : e
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "e", (function() {
				return d
			})), r.d(e, "b", (function() {
				return a
			})), r.d(e, "c", (function() {
				return c
			})), r.d(e, "a", (function() {
				return u
			})), r.d(e, "d", (function() {
				return m
			}));
			const s = t => t.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: f(t.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...t.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: t.subredditInfoById.scheduledPosts.recurringPosts.edges.map(t => t.node.id)
				} : {},
				n = t => t.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(t.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...t.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: t.subredditInfoById.scheduledPosts.standalonePosts.edges.map(t => t.node.id)
				} : {},
				d = t => ({
					...t,
					subredditInfoById: {
						id: t.subredditInfoById.id,
						scheduledPosts: {
							...s(t),
							...n(t)
						}
					}
				}),
				i = t => t.subredditInfoById.scheduledPosts && !!t.subredditInfoById.scheduledPosts.recurringPosts && !!t.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = t => t.subredditInfoById.scheduledPosts && !!t.subredditInfoById.scheduledPosts.standalonePosts && !!t.subredditInfoById.scheduledPosts.standalonePostsIds,
				a = t => i(t) && o(t),
				c = t => !i(t) && o(t),
				u = t => i(t) && !o(t),
				l = t => t.map(t => b(t.node)),
				b = t => ({
					id: t.id,
					title: t.title,
					body: t.body,
					postKind: t.postKind,
					collectionId: t.collections.edges.length ? t.collections.edges[0].node.id : void 0,
					discussionType: t.discussionType,
					isContestMode: t.isContestMode,
					isPostAsMetaMod: t.isPostAsMetaMod,
					isSpoiler: t.isSpoiler,
					isNsfw: t.isNsfw,
					isOriginalContent: t.isOriginalContent,
					isSendReplies: t.isSendReplies,
					isSticky: !!t.sticky && "NONE" !== t.sticky,
					mediaAssets: t.mediaAssets,
					subreddit: {
						...t.subreddit
					},
					suggestedCommentSort: t.suggestedCommentSort,
					owner: {
						...t.owner
					},
					poll: t.poll,
					contentType: t.contentType,
					clientTimezone: t.clientTimezone,
					publishAt: t.publishAt.split(".")[0],
					state: t.state,
					flair: t.flair ? {
						...t.flair
					} : void 0,
					sticky: t.sticky,
					isModDistinguished: "MODERATOR" === t.distinguishedAs,
					url: t.url
				}),
				f = t => t.map(t => p(t.node)),
				p = t => ({
					...b(t),
					frequency: t.frequency,
					byMonthDays: t.byMonthDays || [],
					byWeekDays: t.byWeekDays || [],
					interval: t.interval || 1
				}),
				m = t => (t => !!t.frequency && !!t.interval)(t) ? p(t) : b(t)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/xorWith.js"),
				i = r.n(d);
			e.a = (t, e) => {
				const r = i()(t, e, n.a);
				return !(!r || 0 !== r.length)
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return p
			})), r.d(e, "a", (function() {
				return h
			})), r.d(e, "i", (function() {
				return O
			})), r.d(e, "c", (function() {
				return y
			})), r.d(e, "d", (function() {
				return _
			})), r.d(e, "f", (function() {
				return j
			})), r.d(e, "e", (function() {
				return E
			})), r.d(e, "h", (function() {
				return S
			})), r.d(e, "g", (function() {
				return P
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const n = function(t) {
				if (void 0 === t) throw new Error("invariant(...): Second argument must be a string.")
			};

			function d(t, e) {
				for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), d = 2; d < r; d++) s[d - 2] = arguments[d];
				if (n(e), !t) {
					let t;
					if (void 0 === e) t = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let r = 0;
						(t = new Error(e.replace(/%s/g, () => String(s[r++])))).name = "Invariant Violation"
					}
					throw t.framesToPop = 1, t
				}
			}
			const i = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var a = function(t, e, r) {
					const n = t.length;
					if (0 === n) return "";
					if (1 === n) return t[0];
					const a = t[n - 1];
					let c = t[0];
					for (let d = 1; d < n - 1; ++d) switch (r) {
						case o.SEMICOLON:
							c = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", c), s.fbt._param("following items", t[d])], {
								hk: "4hs4xq"
							});
							break;
						default:
							c = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", c), s.fbt._param("following items", t[d])], {
								hk: "2z8RMb"
							})
					}
					return function(t, e, r, n) {
						switch (r) {
							case i.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", t), s.fbt._param("last item ", e)], {
									hk: "1ylan1"
								});
							case i.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", t), s.fbt._param("last item", e)], {
									hk: "3q8AmB"
								});
							case i.NONE:
								switch (n) {
									case o.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", t), s.fbt._param("last item", e)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", t), s.fbt._param("last item", e)], {
											hk: "3Q0iaX"
										})
								}
								default:
									d(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(c, a, e || i.AND, r || o.COMMA)
				},
				c = r("./src/lib/timezone/index.ts"),
				u = r("./src/reddit/helpers/isArrayEqual.ts"),
				l = r("./src/reddit/helpers/ordinal/index.ts"),
				b = r("./src/reddit/models/ScheduledPost/index.ts");
			const f = t => {
					return `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${t.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				p = (t, e) => {
					if (t && e) {
						const r = Object(c.f)(h(t, e)),
							n = f(r);
						return s.fbt._("At {time}", [s.fbt._param("time", n)], {
							hk: "25s5Tg"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				m = t => t.slice(0, 5),
				h = (t, e) => `${t}T${m(e)}:00`,
				O = t => {
					const [e, r] = t.split("T");
					return [e, m(r)]
				},
				y = t => {
					const [e, r] = O(t);
					if (e && r) {
						const t = Object(c.f)(h(e, r));
						return f(t)
					}
					return ""
				},
				_ = t => {
					const e = Object(c.d)(t);
					let r, s = t;
					if (e) {
						r = e.offset, s = `(GMT${Object(c.e)(e.offset)}) ${t.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: t,
						displayText: s,
						offset: r
					}
				},
				j = t => "string" == typeof t,
				g = t => {
					const e = new Date,
						r = t - e.getDay();
					return e.setDate(e.getDate() + r), e.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				E = t => {
					const e = (t => {
						const [e, r] = O(t);
						if (e && r) {
							return Object(c.f)(h(e, r)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(t.publishAt);
					if (t.frequency === b.d.Hourly) return 2 === t.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : t.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", t.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (t.frequency === b.d.Daily) return 2 === t.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", e)], {
						hk: "yTynp"
					}) : t.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", t.interval.toString()), s.fbt._param("start time", e)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", e)], {
						hk: "1cvwm2"
					});
					if (t.frequency === b.d.Weekly) {
						const r = (t => a(t.map(b.l).sort((t, e) => t - e).map(g), i.AND, o.COMMA))(t.byWeekDays);
						return 2 === t.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", r), s.fbt._param("start time", e)], {
							hk: "43xwaa"
						}) : t.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", t.interval.toString()), s.fbt._param("days of week", r), s.fbt._param("start time", e)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", r), s.fbt._param("start time", e)], {
							hk: "2Zl0L"
						})
					}
					const r = (t => a(t.sort((t, e) => t - e).map(l.a), i.AND, o.COMMA))(t.byMonthDays);
					return 2 === t.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(t.byMonthDays.length), s.fbt._param("start time", e)], {
						hk: "okH9o"
					}) : t.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", t.interval.toString()), s.fbt._param("days of month", r), s.fbt._plural(t.byMonthDays.length), s.fbt._param("start time", e)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(t.byMonthDays.length), s.fbt._param("start time", e)], {
						hk: "1jBuYc"
					})
				},
				S = t => {
					let e = null;
					t.frequency && (e = t.frequency), (t.byWeekDays.length > 1 || t.byMonthDays.length > 1 || t.interval > 1) && (e = b.b);
					const r = Object(c.f)(t.publishAt),
						s = Object(b.r)(r.getDay()),
						n = r.getDate();
					return 1 === t.byWeekDays.length && t.byWeekDays[0] !== s && (e = b.b), 1 === t.byMonthDays.length && t.byMonthDays[0] !== n && (e = b.b), {
						recurrenceInfo: t.frequency ? {
							frequency: t.frequency,
							byMonthDays: t.byMonthDays,
							byWeekDays: t.byWeekDays,
							interval: t.interval
						} : null,
						frequencyOption: e,
						submitDate: t.publishAt,
						timezoneName: t.clientTimezone
					}
				},
				P = (t, e) => {
					if (!t && e || t && !e) return !1;
					if (!t && !e) return !0;
					for (const r in t) {
						if (!e) return !1;
						if (t.hasOwnProperty(r)) {
							if (Array.isArray(t[r]) && (!Array.isArray(e[r]) || !Object(u.a)(t[r], e[r]))) return !1;
							if (t[r] !== e[r]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				d = r("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var o = function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						e = arguments.length > 1 ? arguments[1] : void 0;
					switch (e.type) {
						case d.a: {
							const r = e.payload.claimPoints || {},
								s = Object.keys(r).reduce((e, s) => (e[s] = {
									...t[s],
									availableClaims: r[s]
								}, e), {});
							return Object.keys(t).forEach(e => {
								var r;
								(null === (r = t[e]) || void 0 === r ? void 0 : r.isClaiming) && (s[e] = s[e] || {
									availableClaims: []
								}, s[e].isClaiming = !0)
							}), s
						}
						case n.b:
						case n.a:
							const {
								subredditId: r
							} = e.payload;
							return {
								...t, [r]: {
									...t[r],
									isClaiming: e.type === n.b
								}
							};
						default:
							return t
					}
				},
				a = r("./src/reddit/actions/governance/constants.ts");
			const c = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(t) {
				var e, r, s, n, d;
				const i = null === (e = t.walletProvider) || void 0 === e ? void 0 : e.extra,
					o = null == i ? void 0 : i.contracts,
					a = null == o ? void 0 : o.unlocked,
					c = null !== (s = null === (r = t.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : t.provider,
					l = !!(null === (n = t.walletProvider) || void 0 === n ? void 0 : n.inTransition),
					b = (null == a ? void 0 : a.decimals) || 0,
					f = "1" + "0".repeat(b);
				return {
					blockchainProvider: c,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: o,
					decimals: b,
					displayConversion: f,
					images: t.images || u,
					inTransition: l,
					name: t.name,
					nomenclature: null === (d = t.extra) || void 0 === d ? void 0 : d.nomenclature,
					polls: t.polls,
					symbol: (null == a ? void 0 : a.token) || ""
				}
			}
			var b = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					e = arguments.length > 1 ? arguments[1] : void 0;
				switch (e.type) {
					case a.a: {
						const {
							subredditId: r,
							meta: s
						} = e.payload;
						return {
							...t,
							[r]: l(s)
						}
					}
					default:
						return t
				}
			};
			const f = {};
			var p = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					e = arguments.length > 1 ? arguments[1] : void 0;
				switch (e.type) {
					case a.n: {
						const {
							subredditId: r,
							wallets: s
						} = e.payload, n = Object.keys(s).reduce((e, n) => {
							return {
								...e,
								[n]: {
									...t[n] || {},
									[r]: s[n]
								}
							}
						}, {});
						return {
							...t,
							...n
						}
					}
					default:
						return t
				}
			};
			e.a = Object(s.c)({
				claims: o,
				points: b,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return a
			})), r.d(e, "c", (function() {
				return c
			})), r.d(e, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: o.a
				}
			});
			const a = (t, e) => {
				var r, s, n;
				return e ? null === (n = null === (s = null === (r = t.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[e] : void 0
			};

			function c() {
				const t = Object(n.fb)(),
					e = Object(s.e)(e => Object(n.r)(e, {
						pageLayer: t
					})),
					r = Object(s.e)(t => a(t, null == e ? void 0 : e.id));
				return {
					subreddit: e,
					pointsDetails: r
				}
			}
			const u = (t, e) => {
				var r;
				const s = null === (r = a(t, e)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === d.a.Ethereum || s === d.a.Rinkeby || s === d.a.EthTraderEthereum || s === d.a.EthTraderRinkeby || s === d.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "h", (function() {
				return i
			})), r.d(e, "g", (function() {
				return o
			})), r.d(e, "c", (function() {
				return a
			})), r.d(e, "i", (function() {
				return c
			})), r.d(e, "j", (function() {
				return u
			})), r.d(e, "f", (function() {
				return l
			})), r.d(e, "q", (function() {
				return p
			})), r.d(e, "l", (function() {
				return m
			})), r.d(e, "p", (function() {
				return O
			})), r.d(e, "k", (function() {
				return y
			})), r.d(e, "a", (function() {
				return _
			})), r.d(e, "r", (function() {
				return j
			})), r.d(e, "m", (function() {
				return g
			})), r.d(e, "n", (function() {
				return E
			})), r.d(e, "d", (function() {
				return S
			})), r.d(e, "e", (function() {
				return P
			})), r.d(e, "o", (function() {
				return I
			})), r.d(e, "b", (function() {
				return v
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/models/ScheduledPost/index.ts");
			const i = (t, e) => {
					let {
						subredditId: r
					} = e;
					return ((t, e) => {
						let {
							subredditId: r,
							type: s
						} = e;
						return !!t.posts.scheduledPosts[s].models[r]
					})(t, {
						subredditId: r,
						type: d.g.standalonePosts
					})
				},
				o = (t, e) => {
					let {
						subredditId: r,
						type: s
					} = e;
					return !!t.posts.scheduledPosts[s].pageInfo[r] && t.posts.scheduledPosts[s].pageInfo[r].hasNextPage
				},
				a = (t, e) => {
					let {
						subredditId: r,
						type: s
					} = e;
					return t.posts.scheduledPosts[s].pageInfo[r] ? t.posts.scheduledPosts[s].pageInfo[r].endCursor : null
				},
				c = t => t.posts.scheduledPosts.api.pending,
				u = t => t.posts.scheduledPosts.api.pendingUpdate,
				l = t => t.posts.scheduledPosts.api.error,
				b = {},
				f = [],
				p = (t, e) => {
					let {
						subredditId: r
					} = e;
					return (t.posts.scheduledPosts.standalonePosts.postOrder[r] || f).filter(e => !!(t.posts.scheduledPosts.standalonePosts.models[r] || b)[e]).map(e => t.posts.scheduledPosts.standalonePosts.models[r][e])
				},
				m = (t, e) => {
					let {
						subredditId: r
					} = e;
					return (t.posts.scheduledPosts.recurringPosts.postOrder[r] || f).filter(e => !!(t.posts.scheduledPosts.recurringPosts.models[r] || b)[e]).map(e => t.posts.scheduledPosts.recurringPosts.models[r][e])
				},
				h = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: s,
						type: n
					} = e;
					return (t.posts.scheduledPosts[n].models[r] || b)[s] || void 0
				},
				O = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = e;
					return h(t, {
						subredditId: r,
						scheduledPostId: s,
						type: d.g.standalonePosts
					})
				},
				y = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = e;
					const n = h(t, {
						subredditId: r,
						scheduledPostId: s,
						type: d.g.recurringPosts
					});
					return n || n
				},
				_ = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = e;
					return O(t, {
						subredditId: r,
						scheduledPostId: s
					}) || y(t, {
						subredditId: r,
						scheduledPostId: s
					})
				},
				j = t => t.creations.formData.scheduledPostId,
				g = t => {
					let {
						scheduledPost: e
					} = t;
					return (t => {
						let {
							flair: e,
							isNsfw: r,
							isSpoiler: d,
							isOriginalContent: i
						} = t;
						const o = [];
						return i && o.push({
							text: "OC",
							type: n.f.Oc
						}), e && o.push(...Object(s.b)(e)), d && o.push({
							text: "spoiler",
							type: n.f.Spoiler
						}), r && o.push({
							text: "nsfw",
							type: n.f.Nsfw
						}), o
					})(e)
				},
				E = t => {
					let {
						scheduledPost: e
					} = t;
					const r = g({
							scheduledPost: e
						}),
						s = r.find(t => t.type === n.f.Richtext);
					return s || (r.find(t => t.type === n.f.Text) || null)
				},
				S = t => t.posts.scheduledPosts[d.g.recurringPosts].editModal.scheduledPostId,
				P = t => t.posts.scheduledPosts[d.g.recurringPosts].editModal.subredditId,
				I = t => t.posts.scheduledPosts.api.pendingUpdate,
				v = t => t.posts.scheduledPosts.api.creationToken
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(t) {
			t.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"abd8b9be540b"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(t) {
			t.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(t) {
			t.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"c21fac68db2d"}')
		},
		"./src/redditGQL/operations/ValidateCreateSubreddit.json": function(t) {
			t.exports = JSON.parse('{"id":"4c43ed06b3c2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.5ebc051915213dfe0aa0.js.map