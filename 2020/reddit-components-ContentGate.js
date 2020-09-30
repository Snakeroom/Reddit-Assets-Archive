// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.f08b4c7a8419d12272d8.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				_ = n.n(h);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = p.a.div("FooterContainer", _.a), b = p.a.div("UserAgreement", _.a), g = p.a.a("UserAgreementLink", _.a), y = p.a.a("PrivacyLink", _.a);
			var f = () => o.a.createElement(E, null, o.a.createElement(b, null, k._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [k._param("=User Agreement", o.a.createElement(g, {
					href: "".concat(a.a.redditUrl, "/help/useragreement")
				}, k._("User Agreement", null, {
					hk: "2srkM2"
				}))), k._param("=Privacy Policy", o.a.createElement(y, {
					href: "".concat(a.a.redditUrl, "/help/privacypolicy")
				}, k._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), k._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				L = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				S = n.n(L),
				B = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, o] = t.slice(a, a + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var C = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = S()(t, j)), e.parseRegularLinks && (t = S()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.e.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return o.a.createElement(T.b, {
								className: e.linkClassName,
								href: a,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/models/ContentGate.ts"),
				U = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				G = n.n(F);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = p.a.div("ButtonsContainer", G.a), H = p.a.div("Container", G.a), q = p.a.div("Description", G.a), I = p.a.div("PrivateSubredditDetails", G.a), z = p.a.div("PrivateSubredditDescription", G.a), Y = p.a.h3("PrivateSubredditName", G.a), W = p.a.a("Link", G.a), K = p.a.wrapped(D.k, "LinkRouterButton", G.a), J = p.a.wrapped(D.j, "LinkButton", G.a), V = p.a.wrapped(D.n, "SecondaryLinkRouterButton", G.a), X = p.a.wrapped(D.m, "SecondaryLinkButton", G.a), Z = p.a.wrapped(K, "GoHomeLinkButton", G.a), Q = p.a.img("Image", G.a), $ = p.a.img("ImagePlaceholder", G.a), ee = p.a.wrapped(K, "LeftLinkRouterButton", G.a), te = p.a.wrapped(J, "LeftLinkButton", G.a), ne = p.a.wrapped(X, "SecondaryLeftLinkButton", G.a), ae = p.a.wrapped(V, "SecondaryLeftLinkRouterButton", G.a), re = p.a.h3("Title", G.a), oe = p.a.div("PageBody", G.a), le = p.a.div("QuarantineMessageWrapper", G.a), se = Object(i.c)({
				isLoggedIn: M.G,
				origin: U.l,
				user: M.i
			}), ie = Object(R.t)(), ce = Object(l.b)(se, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(d.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.l)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: l,
					location: s,
					origin: i,
					pageLayer: d,
					quarantineRequiresEmail: p,
					quarantineMessage: h,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: k,
					setNSFWPreference: E,
					subredditDescription: b,
					subredditName: g,
					user: y
				} = e, f = () => {
					l ? E() : Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/gold/premium-crest.png")
						}), o.a.createElement(re, null, N._("r/{community name} is a Reddit Premium community", [N._param("community name", g)], {
							hk: "2lyDwB"
						})), o.a.createElement(q, null, N._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(A, null, y ? o.a.createElement(ne, {
							href: "".concat(a.a.redditUrl, "/premium")
						}, N._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(te, {
							href: Object(c.a)(s, i)
						}, N._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? o.a.createElement(K, {
							to: "/"
						}, N._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(X, {
							href: Object(c.a)(s, i)
						}, N._("Log in", null, {
							hk: "odEG4"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), o.a.createElement(re, null, n === O.a.Nsfw ? N._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : N._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(q, null, N._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(A, null, o.a.createElement(ee, {
							to: "/"
						}, N._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(X, {
							onClick: f
						}, N._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/private.png")
						}), o.a.createElement(re, null, N._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), b && b.length && o.a.createElement(I, null, o.a.createElement(Y, null, "r/", g), o.a.createElement(z, null, o.a.createElement("div", null, b))), o.a.createElement(q, null, N._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), o.a.createElement(A, null, y ? o.a.createElement(ne, {
							href: "".concat(a.a.redditUrl, "/message/compose?to=/r/").concat(g)
						}, N._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ne, {
							href: Object(c.a)(s, i)
						}, N._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(K, {
							to: "/"
						}, y ? N._("Go Home", null, {
							hk: "49p4or"
						}) : N._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case O.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), o.a.createElement(re, null, N._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(q, null, N._("This community is {=quarantined}", [N._param("=quarantined", o.a.createElement(W, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, N._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(le, null, k ? o.a.createElement(x.a, {
							content: k,
							rtJsonElementProps: {
								pageLayer: d
							}
						}) : _ ? o.a.createElement(v.a, {
							html: _
						}) : h || N._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), N._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(A, null, o.a.createElement(ae, {
								to: "/"
							}, N._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(J, {
								href: "".concat(a.a.redditUrl, "/prefs/update")
							}, N._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(A, null, o.a.createElement(ee, {
								to: "/"
							}, N._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(X, {
								onClick: t
							}, N._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(y, r, p)));
					case O.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/banned.png")
						}), o.a.createElement(re, null, N._("r/{community name} has been banned from Reddit", [N._param("community name", g)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(q, null, e ? o.a.createElement(C, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : N._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(A, null, o.a.createElement(K, {
							to: "/"
						}, N._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, N._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(A, null, o.a.createElement(K, {
							to: "/"
						}, N._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, null), o.a.createElement(re, null, N._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(q, null, N._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(A, null, y && o.a.createElement(m.a, {
							eventSource: "content_gate"
						}), o.a.createElement(Z, {
							to: "/"
						}, N._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.ProfileDoesNotExist:
					case O.a.ProfileDeleted:
					case O.a.ProfileSuspended:
					case O.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case O.a.ProfileBlockedForLegalReason:
									return N._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case O.a.ProfileDeleted:
									return N._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case O.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, N._("This account has been {=suspended} .", [N._param("=suspended", o.a.createElement(W, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, N._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(re, null, N._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(q, null, N._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(A, null, o.a.createElement(Z, {
							to: "/"
						}, N._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, N._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(A, null, o.a.createElement(Z, {
							to: "/"
						}, N._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, N._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(A, null, o.a.createElement(K, {
							to: "/"
						}, N._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ie(ce(Object(s.i)(e => o.a.createElement(H, null, o.a.createElement("div", null, o.a.createElement(oe, null, ue(e))), o.a.createElement(f, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				k = n.n(_),
				E = n("./src/lib/lessComponent.tsx");
			const b = "create-community-button",
				g = E.a.wrapped(d.l, "SecondaryButton", k.a),
				y = E.a.wrapped(c.c, "StyledTooltip", k.a),
				f = Object(s.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.cb)(e),
					userIsSuspended: h.M
				});
			t.a = Object(l.b)(f, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(i.f)({
						tooltipId: b
					})),
					onHideTooltip: () => e(Object(i.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: l,
					openCommunityCreation: s,
					sendEvent: i,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: u
				} = e;
				return o.a.createElement(g, {
					className: t,
					disabled: u || c,
					onClick: () => s(i),
					onMouseEnter: r,
					onMouseLeave: l,
					id: b
				}, a.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: b,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : u ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: b,
					text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.f08b4c7a8419d12272d8.js.map