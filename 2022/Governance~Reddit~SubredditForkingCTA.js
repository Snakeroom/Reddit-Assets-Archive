// https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.3eb140f8a7f3666c8185.js
// Retrieved at 9/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
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
				return _
			})), r.d(e, "a", (function() {
				return y
			})), r.d(e, "c", (function() {
				return g
			})), r.d(e, "g", (function() {
				return E
			})), r.d(e, "d", (function() {
				return I
			})), r.d(e, "e", (function() {
				return P
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
			}), u = r("./node_modules/fbt/lib/FbtPublic.js"), l = r("./src/reddit/models/Toast/index.ts"), b = r("./node_modules/reselect/es/index.js"), f = r("./src/reddit/constants/experiments.ts"), m = r("./src/reddit/helpers/chooseVariant/index.ts"), p = r("./src/reddit/selectors/user.ts");
			const h = Object(b.a)(t => Object(m.c)(t, {
				experimentEligibilitySelector: p.Q,
				experimentName: f.fc
			}), t => t === f.Ld);
			var O = r("./src/reddit/actions/toaster.ts");
			const _ = "SUBREDDIT_COUNTRY_SITE__LOADED",
				y = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				g = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				j = Object(s.a)(_),
				S = Object(s.a)(g),
				E = Object(s.a)(y),
				I = t => async (e, r, n) => {
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
				}, P = (t, e) => async (r, n, s) => {
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
					r(S({
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
						r(S({
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
				return m
			})), r.d(e, "m", (function() {
				return p
			})), r.d(e, "n", (function() {
				return h
			})), r.d(e, "o", (function() {
				return O
			})), r.d(e, "p", (function() {
				return _
			})), r.d(e, "q", (function() {
				return y
			})), r.d(e, "r", (function() {
				return g
			})), r.d(e, "s", (function() {
				return j
			})), r.d(e, "t", (function() {
				return S
			})), r.d(e, "u", (function() {
				return E
			})), r.d(e, "v", (function() {
				return I
			})), r.d(e, "w", (function() {
				return P
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
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				y = "GOVERNANCE__TRANSFER_FAILURE",
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				j = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				E = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				I = "GOVERNANCE__WALLETS_FETCH_PENDING",
				P = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
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
				return E
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
			var m = r("./src/reddit/endpoints/governance/wallet.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				_ = r("./src/reddit/actions/governance/constants.ts"),
				y = r("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(s.a)(_.b),
				j = Object(s.a)(_.c),
				S = Object(s.a)(_.e),
				E = (Object(s.a)(_.f), Object(s.a)(_.g), Object(s.a)(_.h)),
				I = Object(s.a)(_.i),
				P = Object(s.a)(_.j),
				v = Object(s.a)(_.k),
				C = Object(s.a)(_.q),
				k = Object(s.a)(_.r),
				x = Object(s.a)(_.s),
				T = Object(s.a)(_.t),
				N = Object(s.a)(_.u),
				A = Object(s.a)(_.v),
				D = Object(s.a)(_.w),
				w = Object(s.a)(_.x),
				R = (t, e) => async (r, n, s) => {
					let i, {
							apiContext: d,
							gqlContext: a
						} = s,
						m = n().polls.models[t];
					if (r(P({
							pollId: t
						})), (i = m.type === l.a.GA ? await ((t, e, r) => Object(u.a)(t, {
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
							}(d(), m.subredditId, t, e)).ok) {
						if (m.type === l.a.GA) {
							const {
								options: t
							} = i.body.data.updatePostPollVoteState.poll;
							r(S({
								pollId: m.id,
								optionId: e,
								options: t
							}))
						} else r(v(i.body));
						const s = n();
						if ((m = s.polls.models[t]) && Object(l.d)(m)) {
							const {
								postId: t
							} = m, e = s.posts.models[t];
							e && e.voteState === h.a.notVoted && r(Object(o.kb)(t))
						}
					} else r(I({
						pollId: t,
						error: i.error || i.errors[0].message
					})), Object(y.a)(r, i.error || i.errors[0].messsage)
				}, L = (t, e) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					r(x());
					const b = s().transfers.communityPoints.contentId || void 0,
						m = await
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
					m.ok ? (r(T({
						...m.body,
						subredditId: t.subredditId
					})), r(Object(a.f)({
						kind: p.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(i.a)(t.amount)), n.fbt._param("tokenName", (null === (l = Object(O.b)(s(), t.subredditId)) || void 0 === l ? void 0 : l.name) || ""), n.fbt._param("recipient", t.recipient)], {
							hk: "3klrhq"
						})
					})), e && r(Object(d.f)())) : (r(C({
						error: m.error
					})), Object(y.a)(r, m.error))
				}, U = t => async (e, r, n) => {
					let {
						apiContext: s
					} = n;
					e(A());
					const i = await Object(m.a)(s(), t);
					i.ok ? e(D(i.body)) : e(N({
						error: i.error
					}))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, r) {
			"use strict";
			r.d(e, "f", (function() {
				return w
			})), r.d(e, "b", (function() {
				return L
			})), r.d(e, "a", (function() {
				return U
			})), r.d(e, "c", (function() {
				return G
			})), r.d(e, "e", (function() {
				return q
			})), r.d(e, "d", (function() {
				return F
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/v4.js"),
				i = r.n(s),
				d = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/actions/upload.ts"),
				l = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts"),
				h = r("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/helpers/imagePreview/index.ts"),
				y = r("./src/reddit/helpers/media/index.ts"),
				g = r("./src/reddit/models/Upload/index.ts"),
				j = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/telemetry/index.ts");
			const E = t => ({
				...j.n(t),
				screen: j.ab(t),
				profile: j.S(t),
				subreddit: j.ib(t)
			});
			var I = r("./src/reddit/helpers/trackers/postComposer.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				x = r("./src/reddit/actions/postCreation/constants.ts"),
				T = r("./src/reddit/actions/postCreation/general.ts");
			const N = Object(a.a)(x.u),
				A = Object(a.a)(x.v),
				D = Object(a.a)(x.t),
				w = t => async (e, r) => {
					e(N());
					const n = t.map(t => {
						let {
							url: r,
							uploadKey: n
						} = t;
						const s = Object(y.b)(Object(y.d)(r), "poster.png");
						return e(M(s, n))
					});
					await Promise.all(n);
					const s = r().uploads,
						i = t.map(t => {
							let {
								uploadKey: e
							} = t;
							return s[e]
						}).find(t => t.status !== g.a.SUCCESS);
					e(i ? D(i.error) : A())
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
			const L = "RTE",
				U = "GALLERY",
				M = (t, e, r, s, i, o) => async (a, l, P) => {
					let {
						apiContext: x,
						gqlContext: T
					} = P;
					const N = Object(C.h)(l()),
						A = Date.now();
					let D = null,
						w = !1,
						L = !1,
						U = !1;
					const M = t => {
						if (!U && r && w) {
							U = !0;
							const n = l(),
								s = Date.now() - A,
								i = Object(O.c)(O.a.PostComposer);
							L ? (async t => {
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
									c = s || a.status === g.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: b,
										error: f
									} = a,
									m = b.mimetype || u.type,
									p = m.startsWith("video/"),
									h = a.status === g.a.SUCCESS;
								let O = "";
								f ? O = JSON.stringify(f) : c && (O = "canceled");
								const _ = {
									width: b.width,
									height: b.height,
									duration: b.videoDuration && Math.round(1e3 * b.videoDuration)
								};
								Object(S.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: p ? "video" : "image",
									...E(e),
									actionInfo: {
										...j.d(e),
										success: h,
										...O ? {
											reason: O
										} : {}
									},
									media: {
										mimetype: m,
										uploadDuration: d,
										source: i,
										fileName: u.name,
										size: u.size,
										type: p ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...l ? {
											url: l
										} : {},
										..._
									}
								})
							})({
								state: n,
								uploadKey: e,
								assetId: D,
								isCanceled: t,
								fileSource: r,
								uploadDuration: s,
								correlationId: i
							}) : I.D(n, e)
						}
					};
					return await a(Object(u.l)(t, e, async l => {
						var O, g, j, S;
						w = !0, Object(u.k)(l.id, () => {
							M(!0)
						});
						const {
							error: E,
							metadata: I
						} = await async function(t, e, r) {
							const s = e && e.allowedPostTypes,
								i = e && e.name,
								o = await Object(y.h)(t) || t.type,
								a = Object(y.c)(t) || void 0;
							if (!a) return R("UNSUPPORTED_BROWSER");
							const c = {
								localUrl: a,
								mimetype: o
							};
							if (!o || !Object(y.k)(o)) return {
								error: {
									type: d.W
								}
							};
							if (o.startsWith("image/")) {
								if (s && !s.images) {
									const t = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", i)], {
										hk: "3C2E7Q"
									});
									return R(d.W, t)
								}
								if ("image/gif" === o) {
									if (t.size > d.cb) return R(d.M)
								} else if (t.size > d.eb) return R(d.U);
								const e = await Object(_.a)(a);
								if (r && (e.width < r || e.height < r)) {
									const t = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", r.toString()), n.fbt._param("min_image_height", r.toString())], {
										hk: "2WFKgs"
									});
									return R(d.T, t)
								}
								c.width = e.width, c.height = e.height
							} else if (o.startsWith("video/")) {
								if (t.size > d.ib) return R(d.sc);
								let e;
								try {
									e = await Object(y.j)(a, !0)
								} catch (u) {
									return R(d.W)
								}
								if (s) {
									const {
										videos: t,
										images: r
									} = s;
									if (r && !t && e.duration > d.jb) {
										const t = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", i)], {
											hk: "46ULiz"
										});
										return R(d.W, t)
									}
									if (!r && !t) {
										const t = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", i)], {
											hk: "4uTUZb"
										});
										return R(d.W, t)
									}
								}
								if (e.duration > d.hb) {
									const t = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (d.hb / 60).toString())], {
										hk: "20nB6Q"
									});
									return R(d.W, t)
								}
								if (e.duration < d.pb) {
									const t = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", d.pb.toString())], {
										hk: "49PSW8"
									});
									return R(d.W, t)
								}
								if (0 === e.height || 0 === e.width) {
									const t = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return R(d.W, t)
								}
								if (e.height < d.qb || e.width < d.rb) {
									const t = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", d.rb.toString()), n.fbt._param("min_video_height", d.qb.toString())], {
										hk: "2HSUGl"
									});
									return R(d.W, t)
								}
								if (t.size / e.duration < d.ob) {
									const t = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (d.ob / d.X).toString())], {
										hk: "1ehgDE"
									});
									return R(d.W, t)
								}
								c.height = e.height, c.width = e.width, c.videoDuration = e.duration, c.videoFirstFrameUrl = e.firstFrame.dataUrl
							}
							return {
								metadata: c
							}
						}(t, N, o);
						if (E || !I) return {
							error: E
						};
						if (a(Object(u.m)({
								key: e,
								metadata: {
									fileSource: r,
									...I
								}
							})), L = !0, s && s(), i) {
							const t = I.mimetype,
								e = t && d.R[t];
							if (t && e) {
								const t = await (async (t, e) => {
									return await Object(f.a)(t, {
										...h,
										variables: {
											input: {
												mimetype: e
											}
										}
									})
								})(T(), e);
								if (t.ok) {
									const e = t.body,
										r = (null === (O = e.data.createMediaUploadLease) || void 0 === O ? void 0 : O.uploadLease.uploadLeaseUrl) || "",
										n = Object(k.a)({
											uploadLeaseUrl: r,
											uploadLeaseHeaders: null === (g = e.data.createMediaUploadLease) || void 0 === g ? void 0 : g.uploadLease.uploadLeaseHeaders
										});
									return D = (null === (j = e.data.createMediaUploadLease) || void 0 === j ? void 0 : j.mediaId) || null, {
										uploadLease: n
									}
								} {
									const e = null === (S = t.body.data.createMediaUploadLease) || void 0 === S ? void 0 : S.errors;
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
							return a(Object(c.f)({
								kind: v.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const P = t.name,
							C = await (async (t, e, r) => Object(b.a)(Object(m.a)(t, [p.a]), {
								endpoint: `${t.apiUrl}/api/media/asset.json`,
								method: d.mb.POST,
								data: {
									filepath: e,
									mimetype: r
								}
							}))(x(), P, I.mimetype);
						return C.ok ? (D = C.body.asset.asset_id, {
							uploadLease: C.body.args
						}) : {
							error: C.error || void 0
						}
					}, !0)), M(!1), l().uploads[e] || null
				}, G = t => async (e, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = r().uploads[t];
					i && !Object(g.c)(i) && await e(M(i.file, i.key, i.metadata.fileSource, void 0))
				}, q = (t, e, r, s, d) => async (a, u) => {
					const l = t.map((t, n) => new Promise(async n => {
							const o = Object(g.d)(r, i()().slice(-6));
							await a(M(t, o, e, () => n({
								uploadKey: o,
								isValid: !0
							}), s, d)), n({
								uploadKey: o,
								isValid: !1
							})
						})),
						b = await Promise.all(l),
						f = b.map(t => t.uploadKey);
					return a(function(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (r, s) => {
							const {
								uploads: i
							} = s(), d = t.map(t => i[t]).filter(t => t.status === g.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = d.length > e ? e - 1 : d.length, u = d.length - a;
							d.slice(0, a).forEach(t => r(Object(c.f)({
								duration: c.a,
								kind: v.b.Error,
								text: Object(o.a)(t)
							}))), u > 0 && r(Object(c.f)({
								duration: c.a,
								kind: v.b.Error,
								text: n.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [n.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(f)), b.filter(t => t.isValid).map(t => t.uploadKey)
				}, F = (t, e) => async (r, s) => {
					const i = s(),
						d = Object(C.W)(i),
						{
							items: o
						} = d,
						a = !o.length && 1 === t.length,
						b = Object(C.N)(i) && !a;
					let f = !1,
						m = t;
					if (b) {
						if (Object(P.x)(d)) return void r(Object(c.f)({
							kind: v.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						m.some(t => Object(y.n)(t.type)) && r(Object(c.f)({
							duration: c.a,
							kind: v.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), m = m.filter(t => Object(y.m)(t.type));
						const t = Math.max(0, l.b - o.length);
						m.length > t && (r(Object(c.f)({
							kind: v.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), m = m.slice(0, t))
					} else m = m.slice(0, 1), f = !0, r(Object(u.j)(U, !0));
					const p = await r(q(m, e, U));
					if (!p.length) return;
					const h = p.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						O = 0 === o.length;
					r(Object(T.d)({
						...d,
						items: f ? h : [...o, ...h],
						selectedKey: O ? p[0] : p[p.length - 1]
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
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/telemetry/index.ts"),
				d = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				o = r("./src/reddit/actions/governance/index.ts"),
				a = r("./src/reddit/actions/pages/subreddit.ts"),
				c = r("./src/reddit/actions/postDraft.ts"),
				u = r("./src/reddit/actions/scheduledPosts/index.ts"),
				l = r("./src/reddit/actions/urlRequested.ts"),
				b = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/config.ts"),
				m = r("./src/lib/convertToCamelCase/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/endpoints/post/create.ts");
			var O = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				_ = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				y = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				j = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				S = r("./src/reddit/helpers/trackers/postComposer.ts"),
				E = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = r("./src/reddit/models/Poll/index.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				k = r("./src/reddit/selectors/postCreations.ts"),
				x = r("./src/reddit/selectors/postDraft.ts"),
				T = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				A = r("./src/reddit/models/Post/index.ts"),
				D = r("./src/reddit/models/ScheduledPost/index.ts"),
				w = r("./src/reddit/actions/postCreation/constants.ts"),
				R = r("./src/reddit/actions/postCreation/general.ts"),
				L = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const U = Object(s.a)(w.w),
				M = Object(s.a)(w.P),
				G = Object(s.a)(w.o),
				q = Object(s.a)(w.y),
				F = Object(s.a)(w.db),
				V = Object(s.a)(w.J),
				W = Object(s.a)(w.a),
				B = Object(s.a)(w.F),
				$ = t => `/r/${t}/about/${D.s}`,
				z = (t, e) => {
					const r = t || {
							duration: n.C,
							options: []
						},
						{
							govType: s,
							newSubreddit: i,
							newTopMod: d
						} = Object(k.u)(e),
						o = {
							...r
						};
					return s && (o.type = s), o.type === I.a.ReplaceTopMod ? (o.params = {
						userName: d
					}, o.options = I.f[I.a.ReplaceTopMod]()) : o.type === I.a.Spinoff ? (o.params = {
						subreddit: i
					}, o.options = I.f[I.a.Spinoff](i)) : o.options = o.options.map(t => ({
						text: t.text.trim()
					})).filter(t => !!t.text), o
				},
				H = t => {
					const e = t.uploads,
						r = Object(k.W)(t),
						s = Object(k.a)(t),
						i = Object(k.gb)(t);
					if (s === n.Zb.POST) return b.a.getPendingThumbnailUploads(i, e);
					if (s === n.Zb.MEDIA && r && r.items.length) {
						const {
							video: t
						} = r.items[0];
						if (t && t.thumbnail && !e[P.n]) return [{
							...t.thumbnail,
							uploadKey: P.n
						}]
					}
				},
				K = (t, e) => async (r, s, i) => {
					let {
						apiContext: d
					} = i, o = s();
					const {
						pending: a
					} = o.creations.api.post.submit, u = Object(x.g)(o);
					if (a || u) return;
					r(B(t)), o = s();
					const l = Object(k.a)(o),
						b = y.d.rteVideoPoster(o),
						f = H(o),
						m = l === n.Zb.MEDIA;
					f && (b || m) && (await r(L.f(f)), H(s())) || (t === P.r.Draft ? await r(Object(c.r)(e.draftId)) : t === P.r.ScheduledPost && Object(T.r)(o) ? await r(Q(e)) : t === P.r.ScheduledPost ? await r(J(e)) : await r(Y(e)))
				}, Q = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						o = Object(k.db)(d),
						a = Object(k.eb)(d, t),
						c = Object(k.h)(d),
						b = Object(T.r)(d);
					if (!(a && c.id && o && Object(j.f)(b))) return;
					const f = c.id,
						m = Object(T.a)(d, {
							subredditId: f,
							scheduledPostId: b
						});
					if (m && Object(i.a)(Object(E.r)(m)(d)), e(U(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: p,
						polls: h
					} = Object(k.u)(d), y = z(h, d), g = {
						...Object(O.e)({
							poll: p ? y : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id,
							scheduledPostId: b
						})
					}, S = await Object(_.a)(s(), g);
					if (S.ok) return e(Object(u.e)({
						subredditId: c.id
					})), void e(Object(l.a)($(c.name), !1));
					const I = S.error;
					e(G(I))
				}, J = t => async (e, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						o = Object(k.db)(d),
						a = Object(k.eb)(d, t),
						c = Object(k.h)(d),
						b = Object(T.b)(d);
					if (!a || !c.id || !o) return;
					if (e(U(a)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: f,
						polls: m
					} = Object(k.u)(d), p = z(m, d), h = {
						duration: p.duration,
						options: p.options
					}, _ = {
						...Object(O.d)({
							poll: f ? h : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id
						}),
						creationToken: b
					}, y = await Object(O.a)(s(), _);
					if (y.ok) {
						e(Object(u.e)({
							subredditId: c.id
						}));
						const t = y.body.data.createScheduledPost.scheduledPost;
						return t && Object(i.a)(Object(E.o)(Object(g.d)(t))(d)), void e(Object(l.a)($(c.name), !1))
					}
					const j = y.error;
					e(G(j))
				}, Y = t => async (e, r, s) => {
					let {
						apiContext: i
					} = s;
					const c = r(),
						u = Object(k.eb)(c, t),
						{
							isPoll: b,
							polls: O
						} = Object(k.u)(c),
						_ = z(O, c);
					if (!u) return;
					if (e(U(u)), t.postFieldValidationPending && (await t.postFieldValidationPending, Object(k.x)(r()))) return;
					let g;
					const j = b && y.d.spPolls(c);
					if ((g = j ? await
							function(t, e, r) {
								const s = e.destSubreddit.id;
								return Object(p.a)(t, {
									method: n.mb.POST,
									endpoint: `${f.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: r,
										subredditId: s,
										...Object(m.a)(Object(h.d)(e))
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
							}(i(), u, _) : b ? await Object(h.b)(i(), {
								...u,
								kind: P.p.POLL,
								poll: _
							}) : u.kind === P.p.GALLERY ? await Object(h.a)(i(), u) : await Object(h.c)(i(), u)).ok) {
						const t = Object(N.k)(c),
							r = g.body;
						e(M({
							draftId: u.draftId,
							response: r
						})), j && e(Object(o.c)({
							poll: r.poll
						}));
						const n = Object(C.b)(c);
						u.kind !== P.p.LINK && u.kind !== P.p.RICH_TEXT && u.kind !== P.p.MARKDOWN || b || !n || e(Object(d.c)());
						const s = (r.path || `/user/${Object(v.e)(t)}/posts`).replace(/^\/r\/u_/, "/user/");
						e(Object(a.subredditInvalidateListing)(u.destSubreddit.name)), e(Object(l.a)(s, !1))
					} else {
						if (b) {
							const t = g.error;
							e(q(t))
						}
						const t = g.error;
						t.type === n.J.BAD_CAPTCHA_ERROR ? e(W()) : t.type === n.J.VALIDATION_ERROR ? e(F(t)) : t.type === n.J.SUBMIT_VALIDATION_ERROR ? e(V(t)) : e(G(t))
					}
					const E = Object(R.o)(u.kind),
						I = g.ok && g.body && g.body.id && Object(A.w)(g.body.id),
						x = r();
					S.B(x, E, I, t.correlationId)
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
				return m
			})), r.d(e, "c", (function() {
				return p
			})), r.d(e, "b", (function() {
				return h
			})), r.d(e, "n", (function() {
				return O
			})), r.d(e, "i", (function() {
				return _
			})), r.d(e, "r", (function() {
				return y
			})), r.d(e, "u", (function() {
				return g
			})), r.d(e, "p", (function() {
				return j
			})), r.d(e, "q", (function() {
				return S
			})), r.d(e, "v", (function() {
				return E
			})), r.d(e, "s", (function() {
				return I
			})), r.d(e, "x", (function() {
				return P
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
				m = "RECURRING_POST_MUTATE_SUCCESS",
				p = "RECURRING_POST__EDIT_MODAL_LOAD",
				h = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				_ = "SCHEDULED_POST__DELETE_SUCCESS",
				y = () => n.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				g = () => n.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				j = () => n.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				S = () => n.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				E = () => n.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				I = () => n.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				P = () => n.fbt._("Successfully submitted scheduled post!", null, {
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
				return y
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
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/routes/postCreation/index.ts"),
				h = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(d.a)(a.n),
				_ = Object(d.a)(a.b),
				y = (t, e) => async (r, n, i) => {
					const d = Object(h.a)(n(), {
						scheduledPostId: e,
						subredditId: t
					});
					d && (await r(Object(s.b)(Object(p.c)(d.subreddit.name, d.collectionId))), r((Object(f.q)(d) ? _ : O)(d)))
				}, g = (t, e) => {
					Object(f.q)(e) ? t(Object(o.d)({
						scheduledPost: e
					})) : t(Object(o.h)({
						scheduledPost: e
					}))
				}, j = (t, e, r) => async (s, d, p) => {
					let {
						gqlContext: O
					} = p;
					s(Object(o.g)());
					const _ = Object(h.a)(d(), {
						subredditId: t,
						scheduledPostId: e
					});
					if (_ && Object(f.q)(_) && Object(i.a)(Object(b.u)()(d(), _)), !_) return void s(Object(o.f)({
						message: n.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void g(s, _);
					const y = await Object(u.a)(O(), {
							...r,
							id: e
						}),
						S = y.body;
					if (!(y.ok && S && S.data && S.data.updateScheduledPost && S.data.updateScheduledPost.ok && S.data.updateScheduledPost.scheduledPost)) return s(Object(o.f)({
						message: y.error && y.error.fields && y.error.fields.length && y.error.fields[0].msg || n.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(c.f)(Object(c.e)(a.t(), m.b.Error, a.s(), j(t, e, r))));
					s(Object(c.f)(Object(c.e)(a.w(), m.b.SuccessCommunity))), g(s, Object(l.d)(S.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "g", (function() {
				return _
			})), r.d(e, "f", (function() {
				return y
			})), r.d(e, "h", (function() {
				return g
			})), r.d(e, "d", (function() {
				return j
			})), r.d(e, "c", (function() {
				return P
			})), r.d(e, "e", (function() {
				return C
			})), r.d(e, "i", (function() {
				return x
			})), r.d(e, "a", (function() {
				return T
			})), r.d(e, "b", (function() {
				return A
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
				m = r("./src/telemetry/index.ts");
			const p = 25,
				h = 1e4,
				O = Object(s.a)(i.g),
				_ = Object(s.a)(i.k),
				y = Object(s.a)(i.j),
				g = Object(s.a)(i.o),
				j = Object(s.a)(i.d),
				S = Object(s.a)(i.f),
				E = Object(s.a)(i.m),
				I = Object(s.a)(i.a),
				P = Object(s.a)(i.c),
				v = Object(s.a)(i.e),
				C = Object(s.a)(i.h),
				k = (t, e) => {
					t(v()), t(Object(o.f)(Object(o.e)(i.r(), b.b.Error, i.s(), x(e))))
				},
				x = t => {
					let {
						subredditId: e,
						includeStandalone: r = {
							standaloneFirst: p
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
						Object(a.f)(l, u) ? N(t, Object(c.e)(l.body.data), u) : k(t, u)
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
								standaloneFirst: p,
								standaloneAfter: d
							}
						},
						u = await Object(a.b)(s(), o);
					u.ok ? N(e, Object(c.e)(u.body.data), o) : e(v())
				}, N = (t, e, r) => {
					Object(c.b)(e) ? t(S(e)) : Object(c.a)(e) ? t(I(e)) : Object(c.c)(e) ? t(E(e)) : k(t, r)
				}, A = (t, e) => async (r, s, i) => {
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
					Object(m.a)(Object(u.t)(t, o[t], Object(l.q)(e))(a)), r(Object(d.a)(e.subreddit.id, e.id, o))
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return T
			})), r.d(e, "c", (function() {
				return N
			})), r.d(e, "e", (function() {
				return A
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
				m = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const _ = t => ({
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
			var y = r("./src/lib/makeGqlRequest/index.ts"),
				g = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var j = r("./src/reddit/helpers/correlationIdTracker.ts"),
				S = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				E = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				I = r("./src/reddit/selectors/meta.ts"),
				P = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				k = r("./src/telemetry/index.ts"),
				x = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const T = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				N = "SUBREDDIT__CREATE_PENDING",
				A = "SUBREDDIT__CREATE_SUCCEEDED",
				D = "SUBREDDIT__CREATE_FAILED",
				w = "SUBREDDIT__CREATE_CLEARED",
				R = Object(i.a)(N),
				L = Object(i.a)(A),
				U = Object(i.a)(D),
				M = Object(i.a)(w),
				G = Object(i.a)(T),
				q = t => async (e, r, i) => {
					let {
						apiContext: y
					} = i;
					var g;
					const T = r(),
						{
							name: N,
							type: A,
							crosspostId: D
						} = t;
					if (Object(v.k)(T)) return;
					e(R({
						subredditName: N
					}));
					const w = await ((t, e) => Object(m.a)(Object(p.a)(t, [h.a]), {
						endpoint: Object(O.a)(`${t.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: s.mb.POST,
						data: _(e)
					}))(y(), t);
					if (w.ok) {
						const r = w.body,
							i = r.fullname;
						Object(k.a)(Object(S.d)(A, t, i)(T)), e(L({
							subredditName: N
						}));
						const m = await Object(E.b)(T);
						if (D) {
							const t = Object(P.G)(T, {
								postId: D
							});
							e(Object(d.h)(t.title)), e(Object(d.g)({
								submissionType: s.Zb.CROSSPOST
							})), await e(Object(a.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: D,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(D)
						}
						await e(Object(n.b)(`${r.path}`)), m ? m === b.Qe.NewModule && e(Object(c.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (e(Object(o.h)(f.a.POST_FLOW_UPSELL_MODAL_ID)), Object(k.a)(Object(S.g)()(T))), Object(j.b)(j.a.SubredditCreation), e(Object(x.f)(i, null !== (g = Object(C.bb)(T)) && void 0 !== g ? g : Object(I.j)(T)))
					} else w.error && Object(k.a)(Object(S.h)(w.error.type, N)(T)), e(U({
						subredditName: N,
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
						o = await ((t, e) => Object(y.a)(t, {
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
						})), r && Object(k.a)(Object(S.h)(r.type, t)(i))
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
				return m
			})), r.d(e, "b", (function() {
				return p
			})), r.d(e, "a", (function() {
				return h
			})), r.d(e, "f", (function() {
				return O
			})), r.d(e, "m", (function() {
				return g
			})), r.d(e, "k", (function() {
				return C
			})), r.d(e, "l", (function() {
				return x
			})), r.d(e, "i", (function() {
				return T
			})), r.d(e, "j", (function() {
				return N
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				i = r("./node_modules/uuid/v4.js"),
				d = r.n(i),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/uploadToS3/index.ts"),
				c = r("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				b = "UPLOAD_METADATA_CHANGED",
				f = "UPLOAD_PROGRESS",
				m = "UPLOAD_SUCCESS",
				p = "UPLOAD_FAILED",
				h = "UPLOAD_CANCELED",
				O = "UPLOAD_REMOVED",
				_ = Object(o.a)(u),
				y = Object(o.a)(l),
				g = Object(o.a)(b),
				j = Object(o.a)(f),
				S = Object(o.a)(m),
				E = Object(o.a)(p),
				I = Object(o.a)(h),
				P = Object(o.a)(O),
				v = new Map,
				C = (t, e) => {
					const r = v.get(t) || [];
					r.push(e), v.set(t, r)
				},
				k = (t, e) => {
					const r = v.get(t);
					r && r.forEach(r => r(t, e)), v.delete(t)
				},
				x = function(t, e, r) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, o, u) => {
						let {
							apiContext: l
						} = u;
						const b = e;
						if (o().uploads[b] && Object(c.c)(o().uploads[b])) return;
						const f = d()(),
							m = () => {
								const t = o().uploads[b];
								return !t || t.id !== f || t.status === c.a.CANCELED
							};
						i(_({
							key: b,
							id: f,
							file: t
						}));
						const {
							uploadLease: p,
							error: h
						} = await r(o().uploads[b]);
						if (m()) return;
						if (h || !p) return void i(E({
							key: b,
							error: h
						}));
						let O;
						C(f, () => {
							O && O.abort()
						}), i(y({
							key: b
						}));
						const g = await Object(a.a)(t, p, t => (O = t, n && t.on("progress", t => {
							if (!m() && "upload" === t.direction) {
								const e = {
									percent: t.percent,
									total: t.total,
									uploaded: t.loaded
								};
								i(j({
									key: b,
									progress: e
								}))
							}
						}), t));
						if (O = null, !m())
							if (g.ok) {
								const t = decodeURIComponent(g.body.PostResponse.Location);
								i(S({
									key: b,
									url: t
								}))
							} else {
								const t = s()(g, "body.Error.Message.0"),
									e = {
										type: "ERROR",
										...t ? {
											fields: [{
												field: "0",
												msg: t
											}]
										} : {}
									};
								i(E({
									key: b,
									error: e
								}))
							}
					}
				},
				T = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						const s = n().uploads[t];
						s && (k(s.id, e), r(e ? P({
							key: t
						}) : I({
							key: t
						})))
					}
				},
				N = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(t) && r(T(n, e))
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
				return m
			})), r.d(e, "c", (function() {
				return p
			})), r.d(e, "e", (function() {
				return h
			})), r.d(e, "f", (function() {
				return O
			})), r.d(e, "n", (function() {
				return _
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
				m = t => ({
					type: "convert-to-coins",
					subredditId: t
				}),
				p = t => ({
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
			async function _(t, e) {
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
					method: s.mb.GET
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
					method: s.mb.POST,
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
				return y
			})), r.d(e, "f", (function() {
				return g
			})), r.d(e, "e", (function() {
				return j
			})), r.d(e, "b", (function() {
				return S
			})), r.d(e, "a", (function() {
				return E
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
				m = r("./src/reddit/models/PostCreationForm/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function h(t) {
				return Math.floor(t.valueOf() / 1e3)
			}
			const O = t => {
					switch (t.kind) {
						case m.p.CROSSPOST:
							return m.p.CROSSPOST;
						case m.p.LINK:
							return m.p.LINK;
						case m.p.POLL:
							return m.p.POLL;
						case m.p.MEDIA:
							return t.makeGif ? m.p.VIDEO_GIF : t.mediaType;
						default:
							return "self"
					}
				},
				_ = t => {
					switch (t.kind) {
						case m.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: t.document
								})
							};
						case m.p.MARKDOWN:
							return {
								text: t.markdown
							};
						case m.p.LINK:
						case m.p.MEDIA:
							return {
								url: t.url
							};
						case m.p.CROSSPOST:
							return {
								crosspost_fullname: t.sourcePostId
							};
						case m.p.POLL:
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
				y = t => {
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
						...t.kind !== m.p.POLL ? {
							kind: O(t),
							original_content: t.isOC
						} : {},
						post_to_twitter: t.postToTwitter,
						sendreplies: t.sendReplies,
						...t.gRecaptchaResponse ? {
							"g-recaptcha-response": t.gRecaptchaResponse
						} : {},
						resubmit: t.resubmit,
						..._(t),
						...t.kind === m.p.MEDIA && "video" === t.mediaType ? {
							video_poster_url: t.videoThumbnailUrl
						} : {},
						...t.kind === m.p.MEDIA && t.makeGif ? {
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
							unlist: t.eventSchedule.submitTime === m.j.AtEventTime
						},
						...t.collectionId && {
							collection_id: t.collectionId
						}
					}
				},
				g = t => {
					const e = /comments\/(\w+)\/.*$/.exec(t),
						r = e && e[1];
					return r ? `${s.Lb.Post}_${r}` : ""
				},
				j = async (t, e) => {
					if (!t.ok) return Object(l.b)(t);
					const r = t.body.json.data;
					let s = r.url;
					s || e.kind !== m.p.MEDIA || (s = await ((t, e) => new Promise(r => {
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
				}, S = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
					endpoint: Object(p.a)(Object(a.a)(`${t.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.mb.POST,
					data: y(e),
					type: "json"
				}).then(t => j(t, e)), E = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
					endpoint: Object(p.a)(Object(a.a)(`${t.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: s.mb.POST,
					data: {
						...y(e),
						items: e.galleryItems.map(t => ({
							caption: t.caption,
							outbound_url: t.url,
							media_id: t.assetId
						}))
					},
					type: "json"
				}).then(t => j(t, e));
			e.c = (t, e) => Object(i.a)(Object(d.a)(t, [o.a]), {
				endpoint: Object(p.a)(Object(a.a)(`${t.apiUrl}/api/submit?resubmit=true`)),
				method: s.mb.POST,
				data: y(e)
			}).then(async t => await j(t, e))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return l
			})), r.d(e, "f", (function() {
				return f
			})), r.d(e, "d", (function() {
				return m
			})), r.d(e, "c", (function() {
				return h
			})), r.d(e, "e", (function() {
				return O
			})), r.d(e, "a", (function() {
				return S
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
				m = t => {
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
						...p(r),
						...y(n),
						assetIds: g(n)
					}
				},
				p = t => ({
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
					const d = m({
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
				_ = t => /^https?:\/\//i.test(t) ? t : `http://${t}`,
				y = t => {
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
									url: _(t.url)
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
				S = (t, e) => Object(n.a)(t, {
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
				return p
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
				f = t => t.map(t => m(t.node)),
				m = t => ({
					...b(t),
					frequency: t.frequency,
					byMonthDays: t.byMonthDays || [],
					byWeekDays: t.byWeekDays || [],
					interval: t.interval || 1
				}),
				p = t => (t => !!t.frequency && !!t.interval)(t) ? m(t) : b(t)
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
				return m
			})), r.d(e, "a", (function() {
				return h
			})), r.d(e, "i", (function() {
				return O
			})), r.d(e, "c", (function() {
				return _
			})), r.d(e, "d", (function() {
				return y
			})), r.d(e, "f", (function() {
				return g
			})), r.d(e, "e", (function() {
				return S
			})), r.d(e, "h", (function() {
				return E
			})), r.d(e, "g", (function() {
				return I
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
				m = (t, e) => {
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
				p = t => t.slice(0, 5),
				h = (t, e) => `${t}T${p(e)}:00`,
				O = t => {
					const [e, r] = t.split("T");
					return [e, p(r)]
				},
				_ = t => {
					const [e, r] = O(t);
					if (e && r) {
						const t = Object(c.f)(h(e, r));
						return f(t)
					}
					return ""
				},
				y = t => {
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
				S = t => {
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
				E = t => {
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
				I = (t, e) => {
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
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return i
			})), r.d(e, "d", (function() {
				return d
			})), r.d(e, "b", (function() {
				return o
			})), r.d(e, "h", (function() {
				return a
			})), r.d(e, "a", (function() {
				return c
			})), r.d(e, "g", (function() {
				return u
			})), r.d(e, "e", (function() {
				return l
			})), r.d(e, "f", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = t => e => ({
					source: t,
					noun: "create_community_button",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(n.d)(n.a.SubredditCreation, !0)
				}),
				d = (t, e, r) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.n(i),
					actionInfo: s.d(i, {
						settingValue: t
					}),
					subreddit: {
						id: r,
						name: e.name,
						publicDescription: e.publicDescription,
						nsfw: e.over18,
						accessType: e.type,
						topicTagContents: e.allTags,
						topicTagPrimaryId: e.primaryTagId
					},
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				o = () => t => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.n(t),
					actionInfo: s.d(t),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				a = (t, e) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.n(r),
					actionInfo: s.d(r, {
						reason: t,
						settingValue: e
					}),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				c = () => t => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.n(t),
					actionInfo: s.d(t)
				}),
				u = () => t => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.n(t),
					actionInfo: s.d(t)
				}),
				l = () => t => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.n(t),
					actionInfo: s.d(t)
				}),
				b = () => t => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.n(t),
					actionInfo: s.d(t)
				})
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
					m = (null == f ? void 0 : f.allowedContractMethods) || {},
					p = (null == f ? void 0 : f.gasLimit) || c,
					h = (null == a ? void 0 : a.decimals) || 0,
					O = "1" + "0".repeat(h);
				return {
					allowedContractMethods: m,
					blockchainProvider: u,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: o,
					decimals: h,
					displayConversion: O,
					gasLimit: p,
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
			const m = {};
			var p = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
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
				const t = Object(s.eb)(),
					e = Object(n.e)(e => Object(s.r)(e, {
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
				return m
			})), r.d(e, "l", (function() {
				return p
			})), r.d(e, "p", (function() {
				return O
			})), r.d(e, "k", (function() {
				return _
			})), r.d(e, "a", (function() {
				return y
			})), r.d(e, "r", (function() {
				return g
			})), r.d(e, "m", (function() {
				return j
			})), r.d(e, "n", (function() {
				return S
			})), r.d(e, "d", (function() {
				return E
			})), r.d(e, "e", (function() {
				return I
			})), r.d(e, "o", (function() {
				return P
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
				m = (t, e) => {
					let {
						subredditId: r
					} = e;
					return (t.posts.scheduledPosts.standalonePosts.postOrder[r] || f).filter(e => !!(t.posts.scheduledPosts.standalonePosts.models[r] || b)[e]).map(e => t.posts.scheduledPosts.standalonePosts.models[r][e])
				},
				p = (t, e) => {
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
				_ = (t, e) => {
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
				y = (t, e) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = e;
					return O(t, {
						subredditId: r,
						scheduledPostId: n
					}) || _(t, {
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
						}), e && o.push(...Object(n.b)(e)), i && o.push({
							text: "spoiler",
							type: s.f.Spoiler
						}), r && o.push({
							text: "nsfw",
							type: s.f.Nsfw
						}), o
					})(e)
				},
				S = t => {
					let {
						scheduledPost: e
					} = t;
					const r = j({
							scheduledPost: e
						}),
						n = r.find(t => t.type === s.f.Richtext);
					return n || (r.find(t => t.type === s.f.Text) || null)
				},
				E = t => t.posts.scheduledPosts[i.g.recurringPosts].editModal.scheduledPostId,
				I = t => t.posts.scheduledPosts[i.g.recurringPosts].editModal.subredditId,
				P = t => t.posts.scheduledPosts.api.pendingUpdate,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.3eb140f8a7f3666c8185.js.map