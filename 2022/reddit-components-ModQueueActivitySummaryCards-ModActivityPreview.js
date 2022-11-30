// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.7f3375b9545ce7fdfe47.js
// Retrieved at 11/30/2022, 4:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				s = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/react/index.js"),
				l = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/UserIcon/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/helpers/trackers/modListing.ts"),
				x = o("./src/reddit/hooks/useGqlContext.ts"),
				h = o("./src/reddit/hooks/useTracking.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				k = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/tooltip.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				C = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				A = o.n(C),
				w = o("./src/config.ts"),
				S = o("./node_modules/fbt/lib/FbtPublic.js"),
				R = o("./src/lib/timeAgo/index.ts"),
				j = o("./src/redditGQL/types.ts");
			const y = `${w.a.assetPath}/img/snoo-sunglasses.png`,
				N = e => {
					let {
						data: t
					} = e;
					var o, n, a, r, i, d, u;
					const m = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: b
						} = t;
					return l.a.createElement("div", {
						className: Object(s.a)(A.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, l.a.createElement(c.a, {
						className: A.a.modIcon,
						userName: m || "",
						iconUrl: null === (r = null === (a = null == t ? void 0 : t.info) || void 0 === a ? void 0 : a.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), l.a.createElement("div", {
						className: A.a.subredditRowText
					}, l.a.createElement("div", {
						className: Object(s.a)(A.a.username, "text-neutral-content-strong")
					}, m), l.a.createElement("div", {
						className: Object(s.a)(A.a.detailText, "text-neutral-content-weak")
					}, b && l.a.createElement(l.a.Fragment, null, ((e, t) => {
						switch (e) {
							case j.x.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case j.x.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case j.x.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case j.x.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case j.x.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case j.x.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case j.x.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case j.x.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case j.x.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case j.x.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case j.x.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case j.x.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case j.x.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case j.x.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case j.x.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case j.x.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case j.x.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case j.x.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case j.x.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case j.x.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case j.x.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case j.x.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case j.x.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case j.x.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case j.x.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case j.x.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case j.x.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case j.x.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case j.x.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case j.x.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case j.x.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case j.x.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case j.x.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case j.x.UpdateRemovalReason:
							case j.x.WikiBanned:
							case j.x.WikiContributor:
							case j.x.WikiPageListed:
							case j.x.WikiPermLevel:
							case j.x.WikiRevise:
							case j.x.WikiUnbanned:
							case j.x.AcceptModeratorInvite:
							case j.x.AddCommunityTopics:
							case j.x.AddContributor:
							case j.x.AddModerator:
							case j.x.CreateAward:
							case j.x.CreateScheduledPost:
							case j.x.CreateRemovalReason:
							case j.x.CommunityStyling:
							case j.x.CommunityWidgets:
							case j.x.CreateRule:
							case j.x.DeleteAward:
							case j.x.DeleteRule:
							case j.x.DeleteScheduledPost:
							case j.x.DeleteOverriddenClassification:
							case j.x.DeleteRemovalReason:
							case j.x.DisableAward:
							case j.x.EditPostRequirements:
							case j.x.EditRule:
							case j.x.EditScheduledPost:
							case j.x.EditSettings:
							case j.x.EnableAward:
							case j.x.Events:
							case j.x.HiddenAward:
							case j.x.InviteModerator:
							case j.x.InviteSubscriber:
							case j.x.ModAwardGiven:
							case j.x.ModmailEnrollment:
							case j.x.OverrideClassification:
							case j.x.RemoveCommunityTopics:
							case j.x.RemoveContributor:
							case j.x.RemoveModerator:
							case j.x.RemoveWikiContributor:
							case j.x.ReorderModerators:
							case j.x.ReorderRules:
							case j.x.SetPermissions:
							case j.x.SnoozeReports:
							case j.x.SubmitContentRatingSurvey:
							case j.x.SubmitScheduledPost:
							case j.x.UnignoreReports:
							case j.x.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == b ? void 0 : b.action, null === (u = null == b ? void 0 : b.target) || void 0 === u ? void 0 : u.__typename), " ", Object(R.d)(Object(v.g)(b.createdAt) / 1e3)))))
				},
				O = e => {
					let {
						mostRecentAction: t
					} = e;
					return l.a.createElement("div", {
						className: A.a.emptyTooltip
					}, l.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: y,
						className: A.a.snooImage
					}), l.a.createElement("div", {
						className: Object(s.a)(A.a.emptyText, "text-neutral-content-strong")
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), l.a.createElement("div", {
						className: Object(s.a)(A.a.emptyDetailText, "text-neutral-content-weak")
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && l.a.createElement("div", {
						className: A.a.lastActionContainer
					}, l.a.createElement("div", {
						className: Object(s.a)(A.a.lastActionTitle, "text-neutral-content-weak")
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), l.a.createElement(N, {
						data: t
					})))
				},
				E = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? l.a.createElement(O, {
						mostRecentAction: a
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(s.a)(A.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => l.a.createElement(N, {
						data: n[e],
						key: e
					})), t.length > 10 && l.a.createElement("div", {
						className: Object(s.a)(A.a.detailText, A.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				P = Object(n.a)(u.a),
				D = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, s, a, r;
					const l = null === (s = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === s ? void 0 : s.createdAt,
						i = null === (r = null === (a = o[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === r ? void 0 : r.createdAt,
						d = Object(v.g)(l || "");
					return Object(v.g)(i || "") - d
				})(t, o, e)).filter(t => {
					var o, n;
					return (new Date).getTime() - Object(v.g)((null === (n = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n,
					isModqueue: a
				} = e;
				const u = Object(i.e)(k.c),
					v = o || u,
					C = Object(i.e)(e => Object(_.h)(e, {
						subredditId: v || ""
					})) || "",
					w = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: S
					} = w,
					R = Object(r.useCallback)(e => D(e), [])(S),
					[j, y] = Object(r.useState)(void 0),
					N = Object(x.a)();
				Object(r.useEffect)(() => {
					(async () => {
						var e, t, o, n;
						if (0 === R.length && C) {
							const s = null === (t = null === (e = (await Object(m.c)(N(), {
								subredditName: C
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == s ? void 0 : s.actions) && (null === (n = null === (o = s.actions) || void 0 === o ? void 0 : o.edges) || void 0 === n || n.map(e => {
								var t;
								const {
									moderatorInfo: o,
									...n
								} = null == e ? void 0 : e.node, s = null === (t = null == o ? void 0 : o.displayName) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== s && "automoderator" !== s && y({
									info: o,
									lastModAction: n
								})
							}))
						}
					})()
				}, [N, R.length, C]);
				const O = (e => `mod_activity_tooltip_id-${e}`)(C || ""),
					M = Object(i.d)(),
					U = Object(h.a)(),
					L = Object(r.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), M(Object(d.h)({
							tooltipId: O
						})), U(Object(b.a)(!!a, C))
					}, [M, O, U, C, a]),
					I = Object(i.e)(e => Object(f.b)(O)(e)),
					T = Object(i.e)(p.c),
					q = Object(i.e)(g.l),
					W = n || 5;
				return l.a.createElement("div", {
					className: Object(s.a)(A.a.preview, t),
					id: O,
					onClick: L,
					"data-testid": "mod-activity-preview"
				}, S && R.length > 0 ? R.slice(0, W).map((e, t) => {
					var o, n, a, r, i, d, u, m, v, b;
					return l.a.createElement(c.a, {
						className: Object(s.a)(A.a.userIcon, {
							[A.a.noMargin]: t === R.length - 1 && !(t === W - 1 && R.length > W)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (o = S[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (r = null === (a = S[e]) || void 0 === a ? void 0 : a.info) || void 0 === r ? void 0 : r.displayName) || "",
						iconUrl: null === (u = null === (d = null === (i = S[e]) || void 0 === i ? void 0 : i.info) || void 0 === d ? void 0 : d.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = S[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : T ? null : l.a.createElement(c.a, {
					className: Object(s.a)(A.a.userIcon, A.a.noMargin),
					userName: (null == q ? void 0 : q.displayName) || "",
					iconUrl: null == q ? void 0 : q.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), R.length > W && l.a.createElement("div", {
					className: Object(s.a)(A.a.moreMods, "text-neutral-content-weak")
				}, "+", R.length - W), l.a.createElement(P, {
					tooltipId: O,
					isOpen: I,
					className: A.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, l.a.createElement(E, {
					orderedModsList: R,
					subredditName: C || "",
					mods: S,
					mostRecentAction: j
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.7f3375b9545ce7fdfe47.js.map