// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.d11564b8d562d2bbfdf6.js
// Retrieved at 12/2/2021, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
			t.a = s.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: s
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: a,
						[l.a.hover]: !!s
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
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
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				k = n("./src/reddit/components/RichTextJson/index.tsx"),
				y = n("./node_modules/lodash/flatMap.js"),
				g = n.n(y),
				v = n("./src/lib/linkMatchers/index.ts"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				C = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, o] = t.slice(a, a + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var B = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = g()(t, C)), e.parseRegularLinks && (t = g()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = v.f.add(f.g.subreddit.prefix, f.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return o.a.createElement(x.b, {
								className: e.linkClassName,
								href: a,
								key: n
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/chat/controls/Svg/index.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => o.a.createElement(R.a, j({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				O = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/lib/constants/index.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				q = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				N = n.n(F);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = u.a.wrapped(T, "PrivateKey", N.a), A = u.a.div("ButtonsContainer", N.a), I = u.a.div("Container", N.a), G = u.a.div("ContainerExp", N.a), z = u.a.div("Description", N.a), W = u.a.div("PrivateSubredditDetails", N.a), K = u.a.div("PrivateSubredditDescription", N.a), Z = u.a.h3("PrivateSubredditName", N.a), J = u.a.a("Link", N.a), V = u.a.wrapped(L.n, "LinkRouterButton", N.a), Y = u.a.wrapped(L.m, "LinkButton", N.a), Q = u.a.wrapped(L.q, "SecondaryLinkRouterButton", N.a), X = u.a.wrapped(L.p, "SecondaryLinkButton", N.a), $ = u.a.wrapped(V, "GoHomeLinkButton", N.a), ee = u.a.wrapped(b.a, "CreateCommunityButton", N.a), te = u.a.img("Image", N.a), ne = u.a.img("ImagePlaceholder", N.a), ae = u.a.wrapped(V, "LeftLinkRouterButton", N.a), re = u.a.wrapped(Y, "LeftLinkButton", N.a), oe = u.a.wrapped(X, "SecondaryLeftLinkButton", N.a), se = u.a.wrapped(Q, "SecondaryLeftLinkRouterButton", N.a), ie = u.a.h3("Title", N.a), le = u.a.div("PageBody", N.a), ce = u.a.div("QuarantineMessageWrapper", N.a), ue = Object(c.c)({
				isLoggedIn: q.J,
				origin: M.j,
				user: q.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(q.K)(e)) return !1;
					const t = Object(P.d)(e);
					if (!t) return !1;
					const n = Object(q.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: a
					} = n;
					if (!a) return !1;
					const r = 30 * D.B;
					return a > Date.now() - r
				})(e)
			}), de = Object(w.u)(), me = Object(s.b)(ue, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(h.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: s,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: u,
					pageLayer: h,
					quarantineRequiresEmail: b,
					quarantineMessage: _,
					quarantineMessageHtml: y,
					quarantineMessageRTJson: g,
					setNSFWPreference: v,
					subredditDescription: f,
					subredditName: x,
					user: S
				} = e, C = async () => {
					s ? await v() : await Object(m.k)(), window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ie, null, H._("r/{community name} is a Reddit Premium community", [H._param("community name", x)], {
							hk: "2lyDwB"
						})), o.a.createElement(z, null, H._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(A, null, S ? o.a.createElement(oe, {
							href: `${a.a.redditUrl}/premium`,
							redditStyle: !0
						}, H._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(re, {
							href: Object(d.a)(c, u),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? o.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(X, {
							href: Object(d.a)(c, u),
							redditStyle: !0
						}, H._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ie, null, n === O.a.Nsfw ? H._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : H._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(z, null, H._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(A, null, o.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, H._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(X, {
							onClick: C,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(ie, null, "r/", x, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), f && f.length && o.a.createElement(W, null, o.a.createElement(Z, null, "r/", x), o.a.createElement(K, null, o.a.createElement("div", null, f))), o.a.createElement(z, null, H._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", x, " ", H._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), H._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(A, null, S ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: N.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(oe, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${x}`,
							redditStyle: !0
						}, H._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(oe, {
							href: Object(d.a)(c, u),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case O.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ie, null, H._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(z, null, H._("This community is {=quarantined}", [H._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, H._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ce, null, g ? o.a.createElement(k.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : y ? o.a.createElement(E.a, {
							html: y
						}) : _ || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), H._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(A, null, o.a.createElement(se, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								href: `${a.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, H._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(A, null, o.a.createElement(ae, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(X, {
								onClick: t,
								redditStyle: !0
							}, H._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, r, b)));
					case O.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ie, null, H._("r/{community name} has been banned from Reddit", [H._param("community name", x)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(z, null, e ? o.a.createElement(B, {
							linkClassName: N.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : H._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(A, null, o.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(A, null, o.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, null), o.a.createElement(ie, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(z, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(A, null, S && o.a.createElement(ee, {
							eventSource: "content_gate"
						}), o.a.createElement($, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.ProfileDoesNotExist:
					case O.a.ProfileDeleted:
					case O.a.ProfileSuspended:
					case O.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case O.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case O.a.ProfileDeleted:
									return H._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case O.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, H._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ie, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(z, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(A, null, o.a.createElement($, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, H._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(A, null, o.a.createElement($, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(te, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(A, null, o.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = de(me(Object(i.i)(e => {
				const t = Object(r.useContext)(l.a) ? G : I;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, he(e))), o.a.createElement(_.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				E = n.n(_),
				k = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				g = k.a.wrapped(u.c, "StyledTooltip", E.a),
				v = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ib)(e),
					userIsSuspended: b.R
				});
			t.a = Object(s.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.c)(t)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: s,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c,
				onClick: u
			}) => {
				return o.a.createElement(h.t, {
					className: e,
					disabled: c || l,
					onClick: e => {
						u && u(e), s(i)
					},
					onMouseEnter: n,
					onMouseLeave: r,
					priority: h.c.Secondary,
					id: y,
					isFullWidth: !0
				}, a.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: y,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: y,
					text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.d11564b8d562d2bbfdf6.js.map