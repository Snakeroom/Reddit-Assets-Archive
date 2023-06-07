// https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.b7769f2f45dab828f630.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~SubredditForkingCTA"], {
		"./src/lib/bigNumberUtils/percent.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(t, e) {
				const r = new n.BigNumber(t),
					s = new n.BigNumber(e),
					i = new n.BigNumber(r.dividedBy(s)),
					d = new n.BigNumber("100").multipliedBy(i);
				return new n.BigNumber(d).toNumber()
			}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return y
			})), r.d(e, "a", (function() {
				return _
			})), r.d(e, "c", (function() {
				return g
			})), r.d(e, "g", (function() {
				return S
			})), r.d(e, "d", (function() {
				return P
			})), r.d(e, "e", (function() {
				return I
			})), r.d(e, "f", (function() {
				return v
			}));
			var n = r("./node_modules/@sentry/minimal/esm/index.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				o = r("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const a = t => ({
				input: {
					subredditId: t.subredditId,
					countryCode: t.countryCode || "",
					languageCode: t.languageCode || ""
				}
			});
			var c = async (t, e) => Object(i.a)(t, {
				...o,
				variables: a(e)
			}), u = r("./node_modules/fbt/lib/FbtPublic.js"), l = r("./src/reddit/models/Toast/index.ts"), b = r("./node_modules/reselect/es/index.js"), f = r("./src/reddit/constants/experiments.ts"), p = r("./src/reddit/helpers/chooseVariant/index.ts"), m = r("./src/reddit/selectors/user.ts");
			const h = Object(b.a)(t => Object(p.c)(t, {
				experimentEligibilitySelector: m.S,
				experimentName: f.Zb
			}), t => t === f.Td);
			var O = r("./src/reddit/actions/toaster.ts");
			const y = "SUBREDDIT_COUNTRY_SITE__LOADED",
				_ = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				g = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				j = Object(s.a)(y),
				E = Object(s.a)(g),
				S = Object(s.a)(_),
				P = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
					if (!t) return;
					const a = await (async (t, e) => Object(i.a)(t, {
							...d,
							variables: {
								subredditId: e
							}
						}))(s(), t),
						c = a.body;
					a && a.ok && c && e(j({
						subredditId: t,
						subredditCountrySite: null === (o = c.data) || void 0 === o ? void 0 : o.subredditInfoById.countrySiteSettings
					}))
				}, I = (t, e) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!t) return;
					const d = await c(i(), {
						subredditId: t,
						countryCode: e.countryCode,
						languageCode: e.languageCode
					});
					if (!d.ok) return r(Object(O.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const o = d.body;
					r(E({
						subredditId: t,
						subredditCountrySite: o.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, v = (t, e) => async (r, s, i) => {
					let {
						gqlContext: d
					} = i;
					if (!t || !h(s())) return;
					const o = {
							subredditId: t,
							countryCode: "",
							languageCode: e
						},
						a = await c(d(), o);
					if (a.ok) {
						const e = a.body;
						r(E({
							subredditId: t,
							subredditCountrySite: e.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else n.l(t => {
						t.setExtra("subredditCountryLanginfo", o), n.c(a.error)
					})
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return n
			})), r.d(e, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			})), r.d(e, "b", (function() {
				return s
			})), r.d(e, "c", (function() {
				return i
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			})), r.d(e, "b", (function() {
				return s
			})), r.d(e, "c", (function() {
				return i
			})), r.d(e, "d", (function() {
				return d
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
				return g
			})), r.d(e, "s", (function() {
				return j
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
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				i = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				d = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
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
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				j = "GOVERNANCE__TRANSFER_PENDING",
				E = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				P = "GOVERNANCE__WALLETS_FETCH_PENDING",
				I = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts");

			function d(t, e) {
				t(Object(n.f)({
					duration: 5e3,
					kind: i.b.Error,
					text: Object(s.a)(e)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return g
			})), r.d(e, "b", (function() {
				return j
			})), r.d(e, "c", (function() {
				return S
			})), r.d(e, "f", (function() {
				return k
			})), r.d(e, "g", (function() {
				return w
			})), r.d(e, "d", (function() {
				return R
			})), r.d(e, "e", (function() {
				return L
			})), r.d(e, "h", (function() {
				return U
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
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
			const g = Object(s.a)(y.b),
				j = Object(s.a)(y.c),
				E = Object(s.a)(y.e),
				S = (Object(s.a)(y.f), Object(s.a)(y.g), Object(s.a)(y.h)),
				P = Object(s.a)(y.i),
				I = Object(s.a)(y.j),
				v = Object(s.a)(y.k),
				C = Object(s.a)(y.q),
				k = Object(s.a)(y.r),
				x = Object(s.a)(y.s),
				T = Object(s.a)(y.t),
				A = Object(s.a)(y.u),
				N = Object(s.a)(y.v),
				D = Object(s.a)(y.w),
				w = Object(s.a)(y.x),
				R = (t, e) => async (r, n, s) => {
					let i, {
							apiContext: d,
							gqlContext: a
						} = s,
						p = n().polls.models[t];
					if (r(I({
							pollId: t
						})), (i = p.type === l.a.GA ? await ((t, e, r) => Object(u.a)(t, {
								...b,
								variables: {
									input: {
										postId: e,
										optionId: r
									}
								}
							}))(a(), t, e) : await
							function(t, e, r, n) {
								return Object(f.a)(t, {
									method: "put",
									endpoint: `${c.a.metaUrl}/polls/${e}/${r}/votes/me/${n}`
								})
							}(d(), p.subredditId, t, e)).ok) {
						if (p.type === l.a.GA) {
							const {
								options: t
							} = i.body.data.updatePostPollVoteState.poll;
							r(E({
								pollId: p.id,
								optionId: e,
								options: t
							}))
						} else r(v(i.body));
						const s = n();
						if ((p = s.polls.models[t]) && Object(l.d)(p)) {
							const {
								postId: t
							} = p, e = s.posts.models[t];
							e && e.voteState === h.a.notVoted && r(Object(o.ib)(t))
						}
					} else r(P({
						pollId: t,
						error: i.error || i.errors[0].message
					})), Object(_.a)(r, i.error || i.errors[0].messsage)
				}, L = (t, e) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					r(x());
					const b = s().transfers.communityPoints.contentId || void 0,
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
					p.ok ? (r(T({
						...p.body,
						subredditId: t.subredditId
					})), r(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(i.a)(t.amount)), n.fbt._param("tokenName", (null === (l = Object(O.b)(s(), t.subredditId)) || void 0 === l ? void 0 : l.name) || ""), n.fbt._param("recipient", t.recipient)], {
							hk: "3klrhq"
						})
					})), e && r(Object(d.f)())) : (r(C({
						error: p.error
					})), Object(_.a)(r, p.error))
				}, U = t => async (e, r, n) => {
					let {
						apiContext: s
					} = n;
					e(N());
					const i = await Object(p.a)(s(), t);
					i.ok ? e(D(i.body)) : e(A({
						error: i.error
					}))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, r) {
			"use strict";
			r.d(e, "f", (function() {
				return D
			})), r.d(e, "b", (function() {
				return R
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/actions/upload.ts"),
				u = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/makeGqlRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts"),
				m = r("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/imagePreview/index.ts"),
				y = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Upload/index.ts"),
				g = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/telemetry/index.ts");
			const E = t => ({
				...g.o(t),
				screen: g.cb(t),
				profile: g.T(t),
				subreddit: g.lb(t)
			});
			var S = r("./src/reddit/helpers/trackers/postComposer.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/postCreations.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				k = r("./src/reddit/actions/postCreation/constants.ts"),
				x = r("./src/reddit/actions/postCreation/general.ts");
			const T = Object(o.a)(k.u),
				A = Object(o.a)(k.v),
				N = Object(o.a)(k.t),
				D = t => async (e, r) => {
					e(T());
					const n = t.map(t => {
						let {
							url: r,
							uploadKey: n
						} = t;
						const s = Object(y.b)(Object(y.d)(r), "poster.png");
						return e(U(s, n, !0, !1))
					});
					await Promise.all(n);
					const s = r().uploads,
						i = t.map(t => {
							let {
								uploadKey: e
							} = t;
							return s[e]
						}).find(t => t.status !== _.a.SUCCESS);
					e(i ? N(i.error) : A())
				}, w = (t, e) => ({
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
			const R = "RTE",
				L = "GALLERY",
				U = (t, e, r, s, d, o, u, P) => async (k, x, T) => {
					let {
						apiContext: A,
						gqlContext: N
					} = T;
					const D = Object(v.h)(x()),
						R = Date.now();
					let L = null,
						U = !1,
						M = !1,
						G = !1;
					const q = t => {
						if (!G && d && U) {
							G = !0;
							const r = x(),
								n = Date.now() - R,
								s = Object(h.c)(h.a.PostComposer);
							M ? (async t => {
								let {
									state: e,
									uploadKey: r,
									assetId: n,
									isCanceled: s,
									fileSource: i,
									uploadDuration: d,
									correlationId: o
								} = t;
								const a = e.uploads[r],
									c = s || a.status === _.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: b,
										error: f
									} = a,
									p = b.mimetype || u.type,
									m = p.startsWith("video/"),
									h = a.status === _.a.SUCCESS;
								let O = "";
								f ? O = JSON.stringify(f) : c && (O = "canceled");
								const y = {
									width: b.width,
									height: b.height,
									duration: b.videoDuration && Math.round(1e3 * b.videoDuration)
								};
								Object(j.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: m ? "video" : "image",
									...E(e),
									actionInfo: {
										...g.d(e),
										success: h,
										...O ? {
											reason: O
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: d,
										source: i,
										fileName: u.name,
										size: u.size,
										type: m ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...l ? {
											url: l
										} : {},
										...y
									}
								})
							})({
								state: r,
								uploadKey: e,
								assetId: L,
								isCanceled: t,
								fileSource: d,
								uploadDuration: n,
								correlationId: s
							}) : S.E(r, e)
						}
					};
					return await k(Object(c.l)(t, e, async h => {
						var _, g, j, E;
						U = !0, Object(c.k)(h.id, () => {
							q(!0)
						});
						const {
							error: S,
							metadata: v
						} = await async function(t, e, r, s, d) {
							const o = s && s.allowedPostTypes,
								a = s && s.name,
								c = await Object(y.h)(t) || t.type,
								u = Object(y.c)(t) || void 0;
							if (!u) return w("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: u,
								mimetype: c,
								size: t.size
							};
							if (!c || !Object(y.k)(c)) return {
								error: {
									type: i.Z
								}
							};
							if (c.startsWith("image/")) {
								if (e && r && o && !o.images) {
									const t = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return w(i.Z, t)
								}
								if ("image/gif" === c) {
									if (t.size > i.fb) return w(i.O)
								} else if (t.size > i.hb) return w(i.X);
								const s = await Object(O.a)(u);
								if (d && (s.width < d || s.height < d)) {
									const t = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", d.toString()), n.fbt._param("min_image_height", d.toString())], {
										hk: "2WFKgs"
									});
									return w(i.W, t)
								}
								l.width = s.width, l.height = s.height
							} else if (c.startsWith("video/")) {
								if (t.size > i.lb) return w(i.vc);
								let e;
								try {
									e = await Object(y.j)(u, !0)
								} catch (b) {
									return w(i.Z)
								}
								if (o) {
									const {
										videos: t,
										images: r
									} = o;
									if (r && !t && e.duration > i.mb) {
										const t = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return w(i.Z, t)
									}
									if (!r && !t) {
										const t = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return w(i.Z, t)
									}
								}
								if (e.duration > i.kb) {
									const t = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (i.kb / 60).toString())], {
										hk: "20nB6Q"
									});
									return w(i.Z, t)
								}
								if (e.duration < i.sb) {
									const t = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", i.sb.toString())], {
										hk: "49PSW8"
									});
									return w(i.Z, t)
								}
								if (0 === e.height || 0 === e.width) {
									const t = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return w(i.Z, t)
								}
								if (e.height < i.tb || e.width < i.ub) {
									const t = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", i.ub.toString()), n.fbt._param("min_video_height", i.tb.toString())], {
										hk: "2HSUGl"
									});
									return w(i.Z, t)
								}
								if (t.size / e.duration < i.rb) {
									const t = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (i.rb / i.ab).toString())], {
										hk: "1ehgDE"
									});
									return w(i.Z, t)
								}
								l.height = e.height, l.width = e.width, l.videoDuration = e.duration, l.videoFirstFrameUrl = e.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(t, r, s, D, P);
						if (S || !v) return {
							error: S
						};
						if (k(Object(c.m)({
								key: e,
								metadata: {
									fileSource: d,
									...v
								}
							})), M = !0, o && o(), u) {
							const t = v.mimetype,
								e = t && i.U[t];
							if (t && e) {
								const t = await (async (t, e) => {
									return await Object(b.a)(t, {
										...m,
										variables: {
											input: {
												mimetype: e
											}
										}
									})
								})(N(), e);
								if (t.ok) {
									const e = t.body,
										r = (null === (_ = e.data.createMediaUploadLease) || void 0 === _ ? void 0 : _.uploadLease.uploadLeaseUrl) || "",
										n = Object(C.a)({
											uploadLeaseUrl: r,
											uploadLeaseHeaders: null === (g = e.data.createMediaUploadLease) || void 0 === g ? void 0 : g.uploadLease.uploadLeaseHeaders
										});
									return L = (null === (j = e.data.createMediaUploadLease) || void 0 === j ? void 0 : j.mediaId) || null, {
										uploadLease: n
									}
								} {
									const e = null === (E = t.body.data.createMediaUploadLease) || void 0 === E ? void 0 : E.errors;
									let r = null;
									return e && (r = {
										fields: [{
											field: e[0].__typename || "",
											msg: e[0].message
										}],
										type: e[0].__typename || ""
									}), {
										error: r || void 0
									}
								}
							}
							return k(Object(a.f)({
								kind: I.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const x = t.name,
							T = await (async (t, e, r) => Object(l.a)(Object(f.a)(t, [p.a]), {
								endpoint: `${t.apiUrl}/api/media/asset.json`,
								method: i.pb.POST,
								data: {
									filepath: e,
									mimetype: r
								}
							}))(A(), x, v.mimetype);
						return T.ok ? (L = T.body.asset.asset_id, {
							uploadLease: T.body.args
						}) : {
							error: T.error || void 0
						}
					}, !0)), q(!1), x().uploads[e] || null
				}, M = (t, e) => async (r, n) => {
					const s = n().uploads[t];
					s && !Object(_.c)(s) && await r(U(s.file, s.key, e, !1, s.metadata.fileSource, void 0))
				}, G = (t, e, r, i, o, c) => async (u, l) => {
					const b = t.map((t, n) => new Promise(async n => {
							const d = Object(_.d)(r, Object(s.a)().slice(-6));
							await u(U(t, d, i, !0, e, () => n({
								uploadKey: d,
								isValid: !0
							}), o, c)), n({
								uploadKey: d,
								isValid: !1
							})
						})),
						f = await Promise.all(b),
						p = f.map(t => t.uploadKey);
					return u(function(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (r, s) => {
							const {
								uploads: i
							} = s(), o = t.map(t => i[t]).filter(t => t.status === _.a.FAILED && !t.metadata.mimetype).map(t => t.error), c = o.length > e ? e - 1 : o.length, u = o.length - c;
							o.slice(0, c).forEach(t => r(Object(a.f)({
								duration: a.a,
								kind: I.b.Error,
								text: Object(d.a)(t)
							}))), u > 0 && r(Object(a.f)({
								duration: a.a,
								kind: I.b.Error,
								text: n.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [n.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(p)), f.filter(t => t.isValid).map(t => t.uploadKey)
				}, q = (t, e) => async (r, s) => {
					const i = s(),
						d = Object(v.Z)(i),
						{
							items: o
						} = d,
						l = !o.length && 1 === t.length,
						b = Object(v.P)(i) && !l;
					let f = !1,
						p = t;
					if (b) {
						if (Object(P.x)(d)) return void r(Object(a.f)({
							kind: I.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						p.some(t => Object(y.n)(t.type)) && r(Object(a.f)({
							duration: a.a,
							kind: I.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), p = p.filter(t => Object(y.m)(t.type));
						const t = Math.max(0, u.b - o.length);
						p.length > t && (r(Object(a.f)({
							kind: I.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), p = p.slice(0, t))
					} else p = p.slice(0, 1), f = !0, r(Object(c.j)(L, !0));
					const m = await r(G(p, e, L, !0));
					if (!m.length) return;
					const h = m.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						O = 0 === o.length;
					r(Object(x.d)({
						...d,
						items: f ? h : [...o, ...h],
						selectedKey: O ? m[0] : m[m.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return M
			})), r.d(e, "f", (function() {
				return G
			})), r.d(e, "e", (function() {
				return B
			})), r.d(e, "c", (function() {
				return Q
			})), r.d(e, "d", (function() {
				return Y
			})), r.d(e, "a", (function() {
				return X
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/telemetry/index.ts"),
				d = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				o = r("./src/reddit/actions/governance/index.ts"),
				a = r("./src/reddit/actions/pages/subreddit/index.ts"),
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
				g = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				j = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				E = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = r("./src/reddit/models/Poll/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				C = r("./src/reddit/models/ScheduledPost/index.ts"),
				k = r("./src/reddit/models/User/index.ts"),
				x = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				A = r("./src/reddit/selectors/postDraft.ts"),
				N = r("./src/reddit/selectors/postGuidance.ts"),
				D = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				R = r("./src/reddit/actions/postCreation/constants.ts"),
				L = r("./src/reddit/actions/postCreation/general.ts"),
				U = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const M = Object(s.a)(R.w),
				G = Object(s.a)(R.Q),
				q = Object(s.a)(R.o),
				F = Object(s.a)(R.y),
				V = Object(s.a)(R.eb),
				B = Object(s.a)(R.K),
				$ = Object(s.a)(R.a),
				W = Object(s.a)(R.G),
				z = t => `/r/${t}/about/${C.s}`,
				H = (t, e) => {
					const r = t || {
							duration: n.E,
							options: []
						},
						{
							govType: s,
							newSubreddit: i,
							newTopMod: d
						} = Object(T.u)(e),
						o = {
							...r
						};
					return s && (o.type = s), o.type === P.a.ReplaceTopMod ? (o.params = {
						userName: d
					}, o.options = P.f[P.a.ReplaceTopMod]()) : o.type === P.a.Spinoff ? (o.params = {
						subreddit: i
					}, o.options = P.f[P.a.Spinoff](i)) : o.options = o.options.map(t => ({
						text: t.text.trim()
					})).filter(t => !!t.text), o
				},
				K = t => {
					const e = t.uploads,
						r = Object(T.Z)(t),
						s = Object(T.a)(t),
						i = Object(T.lb)(t);
					if (s === n.bc.POST) return b.a.getPendingThumbnailUploads(i, e);
					if (s === n.bc.MEDIA && r && r.items.length) {
						const {
							video: t
						} = r.items[0];
						if (t && t.thumbnail && !e[v.n]) return [{
							...t.thumbnail,
							uploadKey: v.n
						}]
					}
				},
				Q = (t, e) => async (r, s, i) => {
					let {
						apiContext: d
					} = i, o = s();
					const {
						pending: a
					} = o.creations.api.post.submit, u = Object(A.g)(o);
					if (a || u) return;
					r(W(t)), o = s();
					const l = Object(T.a)(o),
						b = _.d.rteVideoPoster(o),
						f = K(o),
						p = l === n.bc.MEDIA;
					f && (b || p) && (await r(U.f(f)), K(s())) || (t === v.r.Draft ? await r(Object(c.r)(e.draftId)) : t === v.r.ScheduledPost && Object(D.r)(o) ? await r(J(e)) : t === v.r.ScheduledPost ? await r(Z(e)) : await r(Y(e)))
				}, J = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						o = Object(T.gb)(d),
						a = Object(T.hb)(d, t),
						c = Object(T.h)(d),
						b = Object(D.r)(d);
					if (!(a && c.id && o && Object(j.f)(b))) return;
					const f = c.id,
						p = Object(D.a)(d, {
							subredditId: f,
							scheduledPostId: b
						});
					if (p && Object(i.a)(Object(S.r)(p)(d)), e(M(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(T.x)(r()))) return;
					if (t.postGuidanceValidationPending && (await t.postGuidanceValidationPending, Object(N.b)(r()))) return;
					const {
						isPoll: m,
						polls: h
					} = Object(T.u)(d), _ = H(h, d), g = {
						...Object(O.e)({
							poll: m ? _ : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id,
							scheduledPostId: b
						})
					}, E = await Object(y.a)(s(), g);
					if (E.ok) return e(Object(u.e)({
						subredditId: c.id
					})), void e(Object(l.a)(z(c.name), !1));
					const P = E.error;
					e(q(P))
				}, Z = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						o = Object(T.gb)(d),
						a = Object(T.hb)(d, t),
						c = Object(T.h)(d),
						b = Object(D.b)(d);
					if (!a || !c.id || !o) return;
					if (e(M(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(T.x)(r()))) return;
					if (t.postGuidanceValidationPending && (await t.postGuidanceValidationPending, Object(N.b)(r()))) return;
					const {
						isPoll: f,
						polls: p
					} = Object(T.u)(d), m = H(p, d), h = {
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
					}, _ = await Object(O.a)(s(), y);
					if (_.ok) {
						e(Object(u.e)({
							subredditId: c.id
						}));
						const t = _.body.data.createScheduledPost.scheduledPost;
						return t && Object(i.a)(Object(S.o)(Object(g.d)(t))(d)), void e(Object(l.a)(z(c.name), !1))
					}
					const j = _.error;
					e(q(j))
				}, Y = t => async (e, r, s) => {
					let {
						apiContext: i
					} = s;
					const c = r(),
						u = Object(T.hb)(c, t),
						{
							isPoll: b,
							polls: O
						} = Object(T.u)(c),
						y = H(O, c);
					if (!u) return;
					if (e(M(u)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(T.x)(r()))) return;
					if (t.postGuidanceValidationPending && (await t.postGuidanceValidationPending, Object(N.b)(r()))) return;
					let g;
					const j = b && _.d.spPolls(c);
					if ((g = j ? await
							function(t, e, r) {
								const s = e.destSubreddit.id;
								return Object(m.a)(t, {
									method: n.pb.POST,
									endpoint: `${f.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: r,
										subredditId: s,
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
										n = await Object(h.e)(r, e);
									if (n.ok) {
										return {
											body: {
												...n.body,
												poll: t.body.poll
											},
											ok: !0,
											status: t.status
										}
									}
									return {
										error: n.body,
										ok: !1,
										status: t.status
									}
								})
							}(i(), u, y) : b ? await Object(h.b)(i(), {
								...u,
								kind: v.p.POLL,
								poll: y
							}) : u.kind === v.p.GALLERY ? await Object(h.a)(i(), u) : await Object(h.c)(i(), u)).ok) {
						const t = Object(w.m)(c),
							r = g.body;
						e(G({
							draftId: u.draftId,
							response: r
						})), j && e(Object(o.c)({
							poll: r.poll
						}));
						const n = Object(x.b)(c);
						u.kind !== v.p.LINK && u.kind !== v.p.RICH_TEXT && u.kind !== v.p.MARKDOWN || b || !n || e(Object(d.c)());
						const s = (r.path || `/user/${Object(k.e)(t)}/submitted`).replace(/^\/r\/u_/, "/user/");
						e(Object(a.subredditInvalidateListing)(u.destSubreddit.name)), e(Object(l.a)(s, !1))
					} else {
						if (b) {
							const t = g.error;
							e(F(t))
						}
						const t = g.error;
						X(e, t)
					}
					const S = Object(L.o)(u.kind),
						P = g.ok && g.body && g.body.id && Object(I.y)(g.body.id),
						C = r();
					E.C(C, S, P, t.correlationId)
				}, X = (t, e) => {
					e.type === n.L.BAD_CAPTCHA_ERROR ? t($()) : e.type === n.L.VALIDATION_ERROR ? t(V(e)) : e.type === n.L.SUBMIT_VALIDATION_ERROR ? t(B(e)) : t(q(e))
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "g", (function() {
				return s
			})), r.d(e, "f", (function() {
				return i
			})), r.d(e, "m", (function() {
				return d
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
				return g
			})), r.d(e, "p", (function() {
				return j
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = "SCHEDULED_POSTS_REQUESTED",
				i = "SCHEDULED_POSTS_LOADED",
				d = "STANDALONE_SCHEDULED_POSTS_LOADED",
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
				_ = () => n.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				g = () => n.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				j = () => n.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				E = () => n.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => n.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				P = () => n.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				I = () => n.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => n.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				C = () => n.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return _
			})), r.d(e, "a", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/telemetry/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
			const O = Object(d.a)(a.n),
				y = Object(d.a)(a.b),
				_ = (t, e) => async (r, n, i) => {
					const d = Object(h.a)(n(), {
						scheduledPostId: e,
						subredditId: t
					});
					d && (await r(Object(s.b)(Object(m.c)(d.subreddit.name, d.collectionId))), r((Object(f.q)(d) ? y : O)(d)))
				}, g = (t, e) => {
					Object(f.q)(e) ? t(Object(o.d)({
						scheduledPost: e
					})) : t(Object(o.h)({
						scheduledPost: e
					}))
				}, j = (t, e, r) => async (s, d, m) => {
					let {
						gqlContext: O
					} = m;
					s(Object(o.g)());
					const y = Object(h.a)(d(), {
						subredditId: t,
						scheduledPostId: e
					});
					if (y && Object(f.q)(y) && Object(i.a)(Object(b.u)()(d(), y)), !y) return void s(Object(o.f)({
						message: n.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void g(s, y);
					const _ = await Object(u.a)(O(), {
							...r,
							id: e
						}),
						E = _.body;
					if (!(_.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return s(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || n.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(c.f)(Object(c.e)(a.t(), p.b.Error, a.s(), j(t, e, r))));
					s(Object(c.f)(Object(c.e)(a.w(), p.b.SuccessCommunity))), g(s, Object(l.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "g", (function() {
				return y
			})), r.d(e, "f", (function() {
				return _
			})), r.d(e, "h", (function() {
				return g
			})), r.d(e, "d", (function() {
				return j
			})), r.d(e, "c", (function() {
				return I
			})), r.d(e, "e", (function() {
				return C
			})), r.d(e, "i", (function() {
				return x
			})), r.d(e, "a", (function() {
				return T
			})), r.d(e, "b", (function() {
				return N
			}));
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = r("./src/reddit/actions/scheduledPosts/edit.ts"),
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
				O = Object(s.a)(i.g),
				y = Object(s.a)(i.k),
				_ = Object(s.a)(i.j),
				g = Object(s.a)(i.o),
				j = Object(s.a)(i.d),
				E = Object(s.a)(i.f),
				S = Object(s.a)(i.m),
				P = Object(s.a)(i.a),
				I = Object(s.a)(i.c),
				v = Object(s.a)(i.e),
				C = Object(s.a)(i.h),
				k = (t, e) => {
					t(v()), t(Object(o.f)(Object(o.e)(i.r(), b.b.Error, i.s(), x(e))))
				},
				x = t => {
					let {
						subredditId: e,
						includeStandalone: r = {
							standaloneFirst: m
						},
						includeRecurring: n = {
							recurringFirst: h
						},
						...s
					} = t;
					return async (t, i, d) => {
						let {
							gqlContext: o
						} = d;
						if (Object(f.h)(i(), {
								subredditId: e
							})) return;
						t(O());
						const u = {
								subredditId: e,
								includeRecurring: n,
								includeStandalone: r,
								...s
							},
							l = await Object(a.b)(o(), u);
						Object(a.f)(l, u) ? A(t, Object(c.e)(l.body.data), u) : k(t, u)
					}
				},
				T = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r();
					if (!Object(f.h)(i, {
							subredditId: t
						})) return e(x({
						subredditId: t
					}));
					if (!Object(f.g)(i, {
							subredditId: t,
							type: l.g.standalonePosts
						})) return;
					const d = Object(f.c)(i, {
						subredditId: t,
						type: l.g.standalonePosts
					});
					if (!d) return;
					e(O());
					const o = {
							subredditId: t,
							includeStandalone: {
								standaloneFirst: m,
								standaloneAfter: d
							}
						},
						u = await Object(a.b)(s(), o);
					u.ok ? A(e, Object(c.e)(u.body.data), o) : e(v())
				}, A = (t, e, r) => {
					Object(c.b)(e) ? t(E(e)) : Object(c.a)(e) ? t(P(e)) : Object(c.c)(e) ? t(S(e)) : k(t, r)
				}, N = (t, e) => async (r, s, i) => {
					const o = {},
						a = s();
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
							return Object(n.a)(t)
					}
					Object(p.a)(Object(u.t)(t, o[t], Object(l.q)(e))(a)), r(Object(d.a)(e.subreddit.id, e.id, o))
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return T
			})), r.d(e, "c", (function() {
				return A
			})), r.d(e, "e", (function() {
				return N
			})), r.d(e, "b", (function() {
				return D
			})), r.d(e, "a", (function() {
				return w
			})), r.d(e, "f", (function() {
				return M
			})), r.d(e, "g", (function() {
				return G
			})), r.d(e, "h", (function() {
				return q
			})), r.d(e, "i", (function() {
				return F
			}));
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/postCreation/general.ts"),
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
				g = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var j = r("./src/reddit/helpers/correlationIdTracker.ts"),
				E = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = r("./src/reddit/selectors/meta.ts"),
				I = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				k = r("./src/telemetry/index.ts"),
				x = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const T = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				A = "SUBREDDIT__CREATE_PENDING",
				N = "SUBREDDIT__CREATE_SUCCEEDED",
				D = "SUBREDDIT__CREATE_FAILED",
				w = "SUBREDDIT__CREATE_CLEARED",
				R = Object(i.a)(A),
				L = Object(i.a)(N),
				U = Object(i.a)(D),
				M = Object(i.a)(w),
				G = Object(i.a)(T),
				q = t => async (e, r, i) => {
					let {
						apiContext: _
					} = i;
					var g;
					const T = r(),
						{
							name: A,
							type: N,
							crosspostId: D
						} = t;
					if (Object(v.l)(T)) return;
					e(R({
						subredditName: A
					}));
					const w = await ((t, e) => Object(p.a)(Object(m.a)(t, [h.a]), {
						endpoint: Object(O.a)(`${t.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: s.pb.POST,
						data: y(e)
					}))(_(), t);
					if (w.ok) {
						const r = w.body,
							i = r.fullname;
						Object(k.a)(Object(E.d)(N, t, i)(T)), e(L({
							subredditName: A
						}));
						const p = await Object(S.b)(T);
						if (D) {
							const t = Object(I.F)(T, {
								postId: D
							});
							e(Object(d.h)(t.title)), e(Object(d.g)({
								submissionType: s.bc.CROSSPOST
							})), await e(Object(a.d)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: D,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(D)
						}
						await e(Object(n.b)(`${r.path}`)), p ? p === b.Xe.NewModule && e(Object(c.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (e(Object(o.h)(f.a.POST_FLOW_UPSELL_MODAL_ID)), Object(k.a)(Object(E.g)()(T))), Object(j.b)(j.a.SubredditCreation), e(Object(x.f)(i, null !== (g = Object(C.db)(T)) && void 0 !== g ? g : Object(P.k)(T)))
					} else w.error && Object(k.a)(Object(E.h)(w.error.type, A)(T)), e(U({
						subredditName: A,
						error: w.error
					}))
				}, F = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						d = {
							name: t
						},
						o = await ((t, e) => Object(_.a)(t, {
							...g,
							variables: e
						}))(s(), {
							input: d
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
						})), r && Object(k.a)(Object(E.h)(r.type, t)(i))
					} else await e(M())
				}
		},
		"./src/reddit/actions/upload.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return c
			})), r.d(e, "h", (function() {
				return u
			})), r.d(e, "c", (function() {
				return l
			})), r.d(e, "e", (function() {
				return b
			})), r.d(e, "g", (function() {
				return f
			})), r.d(e, "b", (function() {
				return p
			})), r.d(e, "a", (function() {
				return m
			})), r.d(e, "f", (function() {
				return h
			})), r.d(e, "m", (function() {
				return _
			})), r.d(e, "k", (function() {
				return v
			})), r.d(e, "l", (function() {
				return k
			})), r.d(e, "i", (function() {
				return x
			})), r.d(e, "j", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				i = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/reddit/models/Upload/index.ts");
			const c = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				l = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				p = "UPLOAD_FAILED",
				m = "UPLOAD_CANCELED",
				h = "UPLOAD_REMOVED",
				O = Object(d.a)(c),
				y = Object(d.a)(u),
				_ = Object(d.a)(l),
				g = Object(d.a)(b),
				j = Object(d.a)(f),
				E = Object(d.a)(p),
				S = Object(d.a)(m),
				P = Object(d.a)(h),
				I = new Map,
				v = (t, e) => {
					const r = I.get(t) || [];
					r.push(e), I.set(t, r)
				},
				C = (t, e) => {
					const r = I.get(t);
					r && r.forEach(r => r(t, e)), I.delete(t)
				},
				k = function(t, e, r) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (d, c) => {
						const u = e;
						if (c().uploads[u] && Object(a.c)(c().uploads[u])) return;
						const l = Object(i.a)(),
							b = () => {
								const t = c().uploads[u];
								return !t || t.id !== l || t.status === a.a.CANCELED
							};
						d(O({
							key: u,
							id: l,
							file: t
						}));
						const {
							uploadLease: f,
							error: p
						} = await r(c().uploads[u]);
						if (b()) return;
						if (p || !f) return void d(E({
							key: u,
							error: p
						}));
						let m;
						v(l, () => {
							m && m.abort()
						}), d(y({
							key: u
						}));
						const h = await Object(o.a)(t, f, t => (m = t, n && t.on("progress", t => {
							if (!b() && "upload" === t.direction) {
								const e = {
									percent: t.percent,
									total: t.total,
									uploaded: t.loaded
								};
								d(g({
									key: u,
									progress: e
								}))
							}
						}), t));
						if (m = null, !b())
							if (h.ok) {
								const t = decodeURIComponent(h.body.PostResponse.Location);
								d(j({
									key: u,
									url: t
								}))
							} else {
								const t = s()(h, "body.Error.Message.0"),
									e = {
										type: "ERROR",
										...t ? {
											fields: [{
												field: "0",
												msg: t
											}]
										} : {}
									};
								d(E({
									key: u,
									error: e
								}))
							}
					}
				},
				x = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						const s = n().uploads[t];
						s && (C(s.id, e), r(e ? P({
							key: t
						}) : S({
							key: t
						})))
					}
				},
				T = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(t) && r(x(n, e))
						})
					}
				}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return n
			})), r.d(e, "a", (function() {
				return s
			}));
			const n = 20,
				s = 180
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			})), r.d(e, "j", (function() {
				return d
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
			var n, s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function d(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return t + " Network"
			}

			function o(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case n.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case n.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${t}`
				}
			}

			function a(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184;
					case n.ArbitrumNitroDevnet:
						return 421612;
					case n.ArbitrumMainnet:
						return 42170;
					default: {
						const [, e] = t.split(":");
						return e
					}
				}
			}

			function c(t) {
				return t === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(t, e, r) {
				return Object(i.a)(t, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${e}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(t, e, r) {
				return await Object(i.a)(t, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${e}/registrations`,
					data: r
				})
			}
			async function b(t, e, r) {
				return await Object(i.a)(t, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${e}/registrations/${r}`
				})
			}! function(t) {
				t.Ethereum = "ethereum:1", t.Rinkeby = "ethereum:4", t.ArbitrumNova = "ethereum:42170", t.ArbitrumRinkeby = "ethereum:5391184", t.ArbitrumNitroDevnet = "ethereum:421612", t.ArbitrumMainnet = "ethereum:42170", t.EthTraderEthereum = "ethereum:1:ethtrader", t.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
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
				O = (t, e, r, n) => ({
					type: "transfer",
					subredditId: t,
					recipient: e,
					recipientAddress: r,
					amount: n
				});
			async function y(t, e) {
				return await Object(i.a)(t, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: e
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			})), r.d(e, "b", (function() {
				return o
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function d(t, e) {
				return Object(i.a)(t, {
					endpoint: `${n.a.metaUrl}/wallets/${e.subredditId}/me`,
					method: s.pb.GET
				}).then(t => {
					if (t.ok) {
						const r = t.body,
							n = {
								[e.subredditId]: r
							};
						return {
							...t,
							body: n
						}
					}
					return t
				})
			}

			function o(t, e) {
				return Object(i.a)(t, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${e.subredditId}`,
					method: s.pb.POST,
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
				return g
			})), r.d(e, "e", (function() {
				return j
			})), r.d(e, "b", (function() {
				return E
			})), r.d(e, "a", (function() {
				return S
			}));
			var n = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
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
					const e = Object(u.i)(t.destSubreddit.name);
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
				g = t => {
					const e = /comments\/(\w+)\/.*$/.exec(t),
						r = e && e[1];
					return r ? `${s.Ob.Post}_${r}` : ""
				},
				j = async (t, e) => {
					if (!t.ok) return Object(l.b)(t);
					const r = t.body.json.data;
					let s = r.url;
					s || e.kind !== p.p.MEDIA || (s = await ((t, e) => new Promise(r => {
						const n = new WebSocket(t),
							s = t => {
								n.close(), clearTimeout(i), r(t)
							},
							i = setTimeout(() => {
								s("")
							}, e);
						n.onmessage = t => {
							const e = JSON.parse(t.data),
								r = "success" === e.type ? e.payload.redirect : "";
							s(r)
						}, n.onerror = t => {
							s("")
						}
					}))(r.websocket_url, 3e4));
					const i = r.id || g(s),
						d = Object(n.parse)(s).path,
						o = r.drafts_count;
					return {
						...t,
						body: {
							id: i,
							path: d,
							draftsCount: o
						}
					}
				}, E = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.pb.POST,
					data: _(e),
					type: "json"
				}).then(t => j(t, e)), S = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: s.pb.POST,
					data: {
						..._(e),
						items: e.galleryItems.map(t => ({
							caption: t.caption,
							outbound_url: t.url,
							media_id: t.assetId
						}))
					},
					type: "json"
				}).then(t => j(t, e));
			e.c = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
				endpoint: Object(m.a)(Object(a.a)(`${t.apiUrl}/api/submit?resubmit=true`)),
				method: s.pb.POST,
				data: _(e)
			}).then(async t => await j(t, e))
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
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts"),
				c = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (t, e) => Object(n.a)(t, {
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
						submission: n,
						subredditId: i
					} = t;
					return {
						collectionId: n.collectionId || "",
						discussionType: n.isChatPost ? d.b.Chat : d.b.Comment,
						isContestMode: n.isContestMode,
						isPostAsMetaMod: n.isPostAsMetaMod,
						isSpoiler: n.isSpoiler,
						isNsfw: n.isNSFW,
						poll: e && j(e),
						title: n.title,
						isOriginalContent: n.isOC,
						flair: n.flair ? {
							id: n.flair.templateId,
							text: Object(s.g)(n.flair)
						} : {},
						sticky: n.sticky,
						subredditId: i,
						suggestedCommentSort: n.suggestedSort,
						isSendReplies: n.sendReplies,
						...m(r),
						..._(n),
						assetIds: g(n)
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
						scheduledPostId: n,
						submission: s,
						subredditId: i
					} = t;
					const d = p({
						poll: e,
						schedule: r,
						submission: s,
						subredditId: i
					});
					return {
						id: n,
						...d,
						flair: Object.keys(d.flair || {}).length ? {
							...d.flair
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
				g = t => {
					let e = [];
					if (t.document) {
						const r = t.document || [];
						e = Object(i.d)(r)
					}
					return e
				},
				j = t => {
					if (t && t.options && t.duration && (t.options = t.options.map(t => ({
							text: t.text.trim()
						})).filter(t => !!t.text), t.options.length)) return t.duration = Math.floor(t.duration / 864e5), t
				},
				E = (t, e) => Object(n.a)(t, {
					...c,
					variables: {
						input: e
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			}));
			var n = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				s = r("./src/lib/makeGqlRequest/index.ts");
			const i = (t, e) => Object(s.a)(t, {
				...n,
				variables: {
					input: e
				}
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			})), r.d(e, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(t) {
				return t[0].toUpperCase() + t.slice(1)
			}

			function i(t) {
				return "extra" in t ? "string" == typeof t.extra ? t.extra : Object.keys(t.extra).map(e => t.extra[e]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function d(t) {
				const e = `${t.type} (${t.code})`;
				return "message" in t ? `${e}: ${t.message}` : e
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "e", (function() {
				return i
			})), r.d(e, "b", (function() {
				return a
			})), r.d(e, "c", (function() {
				return c
			})), r.d(e, "a", (function() {
				return u
			})), r.d(e, "d", (function() {
				return m
			}));
			const n = t => t.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: f(t.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...t.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: t.subredditInfoById.scheduledPosts.recurringPosts.edges.map(t => t.node.id)
				} : {},
				s = t => t.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(t.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...t.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: t.subredditInfoById.scheduledPosts.standalonePosts.edges.map(t => t.node.id)
				} : {},
				i = t => ({
					...t,
					subredditInfoById: {
						id: t.subredditInfoById.id,
						scheduledPosts: {
							...n(t),
							...s(t)
						}
					}
				}),
				d = t => t.subredditInfoById.scheduledPosts && !!t.subredditInfoById.scheduledPosts.recurringPosts && !!t.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = t => t.subredditInfoById.scheduledPosts && !!t.subredditInfoById.scheduledPosts.standalonePosts && !!t.subredditInfoById.scheduledPosts.standalonePostsIds,
				a = t => d(t) && o(t),
				c = t => !d(t) && o(t),
				u = t => d(t) && !o(t),
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
			var n = r("./node_modules/lodash/isEqual.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/xorWith.js"),
				d = r.n(i);
			e.a = (t, e) => {
				const r = d()(t, e, s.a);
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
				return g
			})), r.d(e, "e", (function() {
				return E
			})), r.d(e, "h", (function() {
				return S
			})), r.d(e, "g", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const s = function(t) {
				if (void 0 === t) throw new Error("invariant(...): Second argument must be a string.")
			};

			function i(t, e) {
				for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
				if (s(e), !t) {
					let t;
					if (void 0 === e) t = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let r = 0;
						(t = new Error(e.replace(/%s/g, () => String(n[r++])))).name = "Invariant Violation"
					}
					throw t.framesToPop = 1, t
				}
			}
			const d = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var a = function(t, e, r) {
					const s = t.length;
					if (0 === s) return "";
					if (1 === s) return t[0];
					const a = t[s - 1];
					let c = t[0];
					for (let i = 1; i < s - 1; ++i) switch (r) {
						case o.SEMICOLON:
							c = n.fbt._("{previous items}; {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", t[i])], {
								hk: "4hs4xq"
							});
							break;
						default:
							c = n.fbt._("{previous items}, {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", t[i])], {
								hk: "2z8RMb"
							})
					}
					return function(t, e, r, s) {
						switch (r) {
							case d.AND:
								return n.fbt._("{list of items} and {last item }", [n.fbt._param("list of items", t), n.fbt._param("last item ", e)], {
									hk: "1ylan1"
								});
							case d.OR:
								return n.fbt._("{list of items} or {last item}", [n.fbt._param("list of items", t), n.fbt._param("last item", e)], {
									hk: "3q8AmB"
								});
							case d.NONE:
								switch (s) {
									case o.SEMICOLON:
										return n.fbt._("{previous item}; {last item}", [n.fbt._param("previous item", t), n.fbt._param("last item", e)], {
											hk: "1h77rJ"
										});
									default:
										return n.fbt._("{list of items}, {last item}", [n.fbt._param("list of items", t), n.fbt._param("last item", e)], {
											hk: "3Q0iaX"
										})
								}
								default:
									i(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(c, a, e || d.AND, r || o.COMMA)
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
							s = f(r);
						return n.fbt._("At {time}", [n.fbt._param("time", s)], {
							hk: "25s5Tg"
						})
					}
					return n.fbt._("Submit post at scheduled event time", null, {
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
					let r, n = t;
					if (e) {
						r = e.offset, n = `(GMT${Object(c.e)(e.offset)}) ${t.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: t,
						displayText: n,
						offset: r
					}
				},
				g = t => "string" == typeof t,
				j = t => {
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
					if (t.frequency === b.d.Hourly) return 2 === t.interval ? n.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : t.interval > 1 ? n.fbt._("Every {hour interval} hours", [n.fbt._param("hour interval", t.interval.toString())], {
						hk: "3x8zaD"
					}) : n.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (t.frequency === b.d.Daily) return 2 === t.interval ? n.fbt._("Every other day at {start time}", [n.fbt._param("start time", e)], {
						hk: "yTynp"
					}) : t.interval > 1 ? n.fbt._("Every {day interval} days at {start time}", [n.fbt._param("day interval", t.interval.toString()), n.fbt._param("start time", e)], {
						hk: "2OoGlG"
					}) : n.fbt._("Every day at {start time}", [n.fbt._param("start time", e)], {
						hk: "1cvwm2"
					});
					if (t.frequency === b.d.Weekly) {
						const r = (t => a(t.map(b.l).sort((t, e) => t - e).map(j), d.AND, o.COMMA))(t.byWeekDays);
						return 2 === t.interval ? n.fbt._("Every other week on {days of week } at {start time}", [n.fbt._param("days of week ", r), n.fbt._param("start time", e)], {
							hk: "43xwaa"
						}) : t.interval > 1 ? n.fbt._("Every {interval} weeks on {days of week} at {start time}", [n.fbt._param("interval", t.interval.toString()), n.fbt._param("days of week", r), n.fbt._param("start time", e)], {
							hk: "2IVbH"
						}) : n.fbt._("Every week on {days of week} at {start time}", [n.fbt._param("days of week", r), n.fbt._param("start time", e)], {
							hk: "2Zl0L"
						})
					}
					const r = (t => a(t.sort((t, e) => t - e).map(l.a), d.AND, o.COMMA))(t.byMonthDays);
					return 2 === t.interval ? n.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", r), n.fbt._plural(t.byMonthDays.length), n.fbt._param("start time", e)], {
						hk: "okH9o"
					}) : t.interval > 1 ? n.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [n.fbt._param("interval", t.interval.toString()), n.fbt._param("days of month", r), n.fbt._plural(t.byMonthDays.length), n.fbt._param("start time", e)], {
						hk: "KqN3x"
					}) : n.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", r), n.fbt._plural(t.byMonthDays.length), n.fbt._param("start time", e)], {
						hk: "1jBuYc"
					})
				},
				S = t => {
					let e = null;
					t.frequency && (e = t.frequency), (t.byWeekDays.length > 1 || t.byMonthDays.length > 1 || t.interval > 1) && (e = b.b);
					const r = Object(c.f)(t.publishAt),
						n = Object(b.r)(r.getDay()),
						s = r.getDate();
					return 1 === t.byWeekDays.length && t.byWeekDays[0] !== n && (e = b.b), 1 === t.byMonthDays.length && t.byMonthDays[0] !== s && (e = b.b), {
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
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const d = {};
			var o = function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						e = arguments.length > 1 ? arguments[1] : void 0;
					switch (e.type) {
						case i.a: {
							const r = e.payload.claimPoints || {},
								n = Object.keys(r).reduce((e, n) => (e[n] = {
									...t[n],
									availableClaims: r[n]
								}, e), {});
							return Object.keys(t).forEach(e => {
								var r;
								(null === (r = t[e]) || void 0 === r ? void 0 : r.isClaiming) && (n[e] = n[e] || {
									availableClaims: []
								}, n[e].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = e.payload;
							return {
								...t, [r]: {
									...t[r],
									isClaiming: e.type === s.b
								}
							};
						default:
							return t
					}
				},
				a = r("./src/reddit/actions/governance/constants.ts");
			const c = 15e4,
				u = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function b(t) {
				var e, r, n, s, i;
				const d = null === (e = t.walletProvider) || void 0 === e ? void 0 : e.extra,
					o = null == d ? void 0 : d.contracts,
					a = null == o ? void 0 : o.unlocked,
					u = null !== (n = null === (r = t.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : t.provider,
					b = !!(null === (s = t.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					f = null == d ? void 0 : d.metaTransactions,
					p = (null == f ? void 0 : f.allowedContractMethods) || {},
					m = (null == f ? void 0 : f.gasLimit) || c,
					h = (null == a ? void 0 : a.decimals) || 0,
					O = "1" + "0".repeat(h);
				return {
					allowedContractMethods: p,
					blockchainProvider: u,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: o,
					decimals: h,
					displayConversion: O,
					gasLimit: m,
					images: t.images || l,
					inTransition: b,
					name: t.name,
					nomenclature: null === (i = t.extra) || void 0 === i ? void 0 : i.nomenclature,
					polls: t.polls,
					symbol: (null == a ? void 0 : a.token) || ""
				}
			}
			var f = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					e = arguments.length > 1 ? arguments[1] : void 0;
				switch (e.type) {
					case a.a: {
						const {
							subredditId: r,
							meta: n
						} = e.payload;
						return {
							...t,
							[r]: b(n)
						}
					}
					default:
						return t
				}
			};
			const p = {};
			var m = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					e = arguments.length > 1 ? arguments[1] : void 0;
				switch (e.type) {
					case a.n: {
						const {
							subredditId: r,
							wallets: n
						} = e.payload, s = Object.keys(n).reduce((e, s) => {
							return {
								...e,
								[s]: {
									...t[s] || {},
									[r]: n[s]
								}
							}
						}, {});
						return {
							...t,
							...s
						}
					}
					default:
						return t
				}
			};
			e.a = Object(n.c)({
				claims: o,
				points: f,
				publicWallets: m
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
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(d.a)({
				features: {
					crypto: o.a
				}
			});
			const a = (t, e) => {
				var r, n, s;
				return e ? null === (s = null === (n = null === (r = t.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[e] : void 0
			};

			function c() {
				const t = Object(s.ib)(),
					e = Object(n.e)(e => Object(s.s)(e, {
						pageLayer: t
					})),
					r = Object(n.e)(t => a(t, null == e ? void 0 : e.id));
				return {
					subreddit: e,
					pointsDetails: r
				}
			}
			const u = (t, e) => {
				var r;
				const n = null === (r = a(t, e)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === i.a.Ethereum || n === i.a.Rinkeby || n === i.a.EthTraderEthereum || n === i.a.EthTraderRinkeby || n === i.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "h", (function() {
				return d
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
				return g
			})), r.d(e, "m", (function() {
				return j
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
			var n = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/models/ScheduledPost/index.ts");
			const d = (t, e) => {
					let {
						subredditId: r
					} = e;
					return ((t, e) => {
						let {
							subredditId: r,
							type: n
						} = e;
						return !!t.posts.scheduledPosts[n].models[r]
					})(t, {
						subredditId: r,
						type: i.g.standalonePosts
					})
				},
				o = (t, e) => {
					let {
						subredditId: r,
						type: n
					} = e;
					return !!t.posts.scheduledPosts[n].pageInfo[r] && t.posts.scheduledPosts[n].pageInfo[r].hasNextPage
				},
				a = (t, e) => {
					let {
						subredditId: r,
						type: n
					} = e;
					return t.posts.scheduledPosts[n].pageInfo[r] ? t.posts.scheduledPosts[n].pageInfo[r].endCursor : null
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
						scheduledPostId: n,
						type: s
					} = e;
					return (t.posts.scheduledPosts[s].models[r] || b)[n] || void 0
				},
				O = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = e;
					return h(t, {
						subredditId: r,
						scheduledPostId: n,
						type: i.g.standalonePosts
					})
				},
				y = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = e;
					const s = h(t, {
						subredditId: r,
						scheduledPostId: n,
						type: i.g.recurringPosts
					});
					return s || s
				},
				_ = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = e;
					return O(t, {
						subredditId: r,
						scheduledPostId: n
					}) || y(t, {
						subredditId: r,
						scheduledPostId: n
					})
				},
				g = t => t.creations.formData.scheduledPostId,
				j = t => {
					let {
						scheduledPost: e
					} = t;
					return (t => {
						let {
							flair: e,
							isNsfw: r,
							isSpoiler: i,
							isOriginalContent: d
						} = t;
						const o = [];
						return d && o.push({
							text: "OC",
							type: s.f.Oc
						}), e && o.push(...Object(n.c)(e)), i && o.push({
							text: "spoiler",
							type: s.f.Spoiler
						}), r && o.push({
							text: "nsfw",
							type: s.f.Nsfw
						}), o
					})(e)
				},
				E = t => {
					let {
						scheduledPost: e
					} = t;
					const r = j({
							scheduledPost: e
						}),
						n = r.find(t => t.type === s.f.Richtext);
					return n || (r.find(t => t.type === s.f.Text) || null)
				},
				S = t => t.posts.scheduledPosts[i.g.recurringPosts].editModal.scheduledPostId,
				P = t => t.posts.scheduledPosts[i.g.recurringPosts].editModal.subredditId,
				I = t => t.posts.scheduledPosts.api.pendingUpdate,
				v = t => t.posts.scheduledPosts.api.creationToken
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(t) {
			t.exports = JSON.parse('{"id":"737d59db38fc"}')
		},
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"abd8b9be540b"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(t) {
			t.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"2289de7a3370"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(t) {
			t.exports = JSON.parse('{"id":"db256acfa640"}')
		},
		"./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"c21fac68db2d"}')
		},
		"./src/redditGQL/operations/ValidateCreateSubreddit.json": function(t) {
			t.exports = JSON.parse('{"id":"4c43ed06b3c2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.b7769f2f45dab828f630.js.map